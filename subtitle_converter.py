#!/usr/bin/env python3

import pysrt
from googletrans import Translator
import os
import time
import json
from typing import Optional, Dict, List

class SubtitleConverter:
    
    def __init__(self, source_lang: str = 'bn', target_lang: str = 'en'):
        self.translator = Translator()
        self.source_lang = source_lang
        self.target_lang = target_lang
        self.progress_file = "translation_progress.json"
        self.completed_count = 0
        self.total_subtitles = 0
        self.failed_translations = []
        self.retry_count = 0
        
        print(f"🌐 Subtitle Converter initialized")
        print(f"   Source Language: {source_lang}")
        print(f"   Target Language: {target_lang}")
    
    def load_progress(self) -> Dict:
        try:
            if os.path.exists(self.progress_file):
                with open(self.progress_file, 'r', encoding='utf-8') as f:
                    progress_data = json.load(f)
                    self.completed_count = progress_data.get('completed_count', 0)
                    self.failed_translations = progress_data.get('failed_translations', [])
                    print(f"📂 Loaded progress: {self.completed_count} subtitles completed")
                    return progress_data
        except Exception as e:
            print(f"⚠️  Warning: Could not load progress file: {e}")
        
        return {'completed_count': 0, 'failed_translations': []}
    
    def save_progress(self, completed_count: int, failed_translations: List = None):
        try:
            progress_data = {
                'completed_count': completed_count,
                'failed_translations': failed_translations or self.failed_translations,
                'timestamp': time.time(),
                'source_lang': self.source_lang,
                'target_lang': self.target_lang
            }
            
            with open(self.progress_file, 'w', encoding='utf-8') as f:
                json.dump(progress_data, f, indent=2, ensure_ascii=False)
                
        except Exception as e:
            print(f"⚠️  Warning: Could not save progress: {e}")
    
    def translate_subtitle(self, text: str, max_retries: int = 5) -> Optional[str]:
        if not text.strip():
            return text
        
        retry_count = 0
        while retry_count < max_retries:
            try:
                translated = self.translator.translate(
                    text, 
                    src=self.source_lang, 
                    dest=self.target_lang
                )
                return translated.text
                
            except Exception as e:
                retry_count += 1
                self.retry_count += 1
                print(f"❌ Translation failed (attempt {retry_count}/{max_retries}): {str(e)}")
                
                if retry_count < max_retries:
                    delay = retry_count * 2
                    print(f"⏳ Retrying in {delay} seconds...")
                    time.sleep(delay)
        
        print(f"💥 Translation failed after {max_retries} attempts")
        return None
    
    def translate_srt_file(self, input_file: str, output_file: str) -> bool:
        try:
            print(f"📖 Loading subtitle file: {input_file}")
            
            subs = pysrt.open(input_file)
            self.total_subtitles = len(subs)
            
            print(f"📊 Found {self.total_subtitles} subtitles to translate")
            
            self.load_progress()
            
            if self.completed_count > 0:
                print(f"🔄 Resuming from subtitle {self.completed_count + 1}")
            
            for i in range(self.completed_count, len(subs)):
                sub = subs[i]
                
                progress = ((i + 1) / self.total_subtitles) * 100
                print(f"📝 Translating subtitle {i + 1}/{self.total_subtitles} ({progress:.1f}%)")
                
                translated_text = self.translate_subtitle(sub.text)
                
                if translated_text is not None:
                    sub.text = translated_text
                    print(f"✅ Translated: '{sub.text[:50]}...'")
                else:
                    print(f"⚠️  Keeping original text for subtitle {i + 1}")
                    self.failed_translations.append(i)
                
                if (i + 1) % 10 == 0:
                    self.save_progress(i + 1, self.failed_translations)
                    print(f"💾 Progress saved at subtitle {i + 1}")
                
                time.sleep(0.5)
            
            print(f"💾 Saving translated subtitles to: {output_file}")
            subs.save(output_file, encoding='utf-8')
            
            if os.path.exists(self.progress_file):
                os.remove(self.progress_file)
                print("🧹 Progress file cleaned up")
            
            self.print_summary()
            
            return True
            
        except Exception as e:
            print(f"❌ Error during translation: {str(e)}")
            return False
    
    def print_summary(self):
        print("\n" + "="*50)
        print("📊 TRANSLATION SUMMARY")
        print("="*50)
        print(f"📝 Total subtitles: {self.total_subtitles}")
        print(f"✅ Successfully translated: {self.total_subtitles - len(self.failed_translations)}")
        print(f"❌ Failed translations: {len(self.failed_translations)}")
        print(f"🔄 Total retry attempts: {self.retry_count}")
        
        if self.failed_translations:
            print(f"⚠️  Failed subtitle indices: {self.failed_translations}")
        
        success_rate = ((self.total_subtitles - len(self.failed_translations)) / self.total_subtitles) * 100
        print(f"📈 Success rate: {success_rate:.1f}%")
        print("="*50)

def main():
    print("🎬 Subtitle Converter - Bengali to English")
    print("=" * 50)
    
    converter = SubtitleConverter()
    
    input_file = input("Enter the path to your SRT file: ").strip()
    
    if not input_file:
        print("❌ No file path provided")
        return
    
    if not os.path.exists(input_file):
        print(f"❌ File not found: {input_file}")
        return
    
    if not input_file.lower().endswith('.srt'):
        print("⚠️  Warning: File doesn't have .srt extension")
    
    base_name = os.path.splitext(input_file)[0]
    output_file = f"{base_name}_translated.srt"
    
    print(f"📁 Input file: {input_file}")
    print(f"📁 Output file: {output_file}")
    print(f"🌐 Translation: {converter.source_lang} → {converter.target_lang}")
    
    confirm = input("\nProceed with translation? (y/n): ").lower().strip()
    if confirm != 'y':
        print("❌ Translation cancelled")
        return
    
    print(f"\n🚀 Starting translation...")
    success = converter.translate_srt_file(input_file, output_file)
    
    if success:
        print(f"\n🎉 Translation completed successfully!")
        print(f"📁 Translated file saved as: {output_file}")
    else:
        print(f"\n💥 Translation failed. Check the error messages above.")

if __name__ == "__main__":
    main() 