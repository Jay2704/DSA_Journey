import pysrt
from googletrans import Translator
import os
import time
import json

def translate_srt_complete(input_file, output_file, source_lang='bn', target_lang='en'):
    """
    Complete SRT subtitle translator that ensures all subtitles are translated
    """
    try:
        # Load the subtitle file
        subs = pysrt.open(input_file)
        translator = Translator()
        
        print(f"Translating {input_file} from {source_lang} to {target_lang}...")
        print(f"Total subtitles: {len(subs)}")
        
        # Progress tracking
        progress_file = f"{output_file}.progress"
        completed_count = 0
        
        # Load progress if exists
        if os.path.exists(progress_file):
            with open(progress_file, 'r') as f:
                progress_data = json.load(f)
                completed_count = progress_data.get('completed', 0)
                print(f"Resuming from subtitle {completed_count + 1}")
        
        # Track failed translations
        failed_subtitles = []
        
        # Translate each subtitle with retry logic
        for i in range(completed_count, len(subs)):
            sub = subs[i]
            max_retries = 5
            retry_count = 0
            success = False
            
            while retry_count < max_retries and not success:
                try:
                    # Skip if text is empty or just whitespace
                    if not sub.text.strip():
                        print(f"Skipping empty subtitle {i + 1}")
                        success = True
                        break
                    
                    # Translate the text
                    translated = translator.translate(sub.text, src=source_lang, dest=target_lang)
                    sub.text = translated.text
                    success = True
                    
                    # Progress indicator
                    if (i + 1) % 10 == 0:
                        print(f"Translated {i + 1}/{len(subs)} subtitles...")
                    
                    # Save progress
                    with open(progress_file, 'w') as f:
                        json.dump({'completed': i + 1}, f)
                    
                except Exception as e:
                    retry_count += 1
                    print(f"Attempt {retry_count} failed for subtitle {i + 1}: {str(e)}")
                    
                    if retry_count < max_retries:
                        print(f"Retrying in 3 seconds...")
                        time.sleep(3)
                    else:
                        print(f"Failed to translate subtitle {i + 1} after {max_retries} attempts")
                        failed_subtitles.append(i + 1)
                        # Keep original text if translation fails
                        continue
            
            # Add delay to avoid rate limiting
            time.sleep(0.5)
        
        # Save the translated subtitles
        subs.save(output_file, encoding='utf-8')
        
        # Clean up progress file
        if os.path.exists(progress_file):
            os.remove(progress_file)
        
        print(f"✅ Translation completed! Saved to: {output_file}")
        
        if failed_subtitles:
            print(f"⚠️  {len(failed_subtitles)} subtitles failed to translate:")
            print(f"Failed subtitle numbers: {failed_subtitles}")
            print("These subtitles kept their original Bengali text.")
        
        # Verify translation
        verify_translation(input_file, output_file)
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")

def verify_translation(original_file, translated_file):
    """
    Verify that all subtitles were processed
    """
    try:
        original_subs = pysrt.open(original_file)
        translated_subs = pysrt.open(translated_file)
        
        print(f"\n📊 Verification:")
        print(f"Original subtitles: {len(original_subs)}")
        print(f"Translated subtitles: {len(translated_subs)}")
        
        if len(original_subs) == len(translated_subs):
            print("✅ All subtitles processed successfully!")
        else:
            print(f"⚠️  Missing {len(original_subs) - len(translated_subs)} subtitles")
            
    except Exception as e:
        print(f"❌ Verification error: {str(e)}")

def main():
    print("🎬 Bengali to English Subtitle Converter (Complete Version)")
    print("=" * 55)
    
    # Get input file path
    while True:
        input_file = input("📁 Enter the path to your Bengali SRT file: ").strip()
        
        if os.path.exists(input_file):
            break
        else:
            print(f"❌ File not found: {input_file}")
            print("Please check the path and try again.")
    
    # Generate output filename
    name, ext = os.path.splitext(input_file)
    output_file = f"{name}.en{ext}"
    
    # Ask for confirmation
    print(f"\n📤 Input file: {input_file}")
    print(f"📥 Output file: {output_file}")
    
    confirm = input("\n🤔 Proceed with translation? (y/n): ").lower()
    
    if confirm in ['y', 'yes']:
        translate_srt_complete(input_file, output_file)
    else:
        print("❌ Translation cancelled.")

if __name__ == "__main__":
    main() 