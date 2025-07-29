import pysrt
from googletrans import Translator
import os
import time
import json

def translate_srt_robust(input_file, output_file, source_lang='bn', target_lang='en'):
    """
    Robust SRT subtitle translator with retry logic and progress saving
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
        
        # Translate each subtitle with retry logic
        for i in range(completed_count, len(subs)):
            sub = subs[i]
            max_retries = 3
            retry_count = 0
            
            while retry_count < max_retries:
                try:
                    # Translate the text
                    translated = translator.translate(sub.text, src=source_lang, dest=target_lang)
                    sub.text = translated.text
                    
                    # Progress indicator
                    if (i + 1) % 10 == 0:
                        print(f"Translated {i + 1}/{len(subs)} subtitles...")
                    
                    # Save progress
                    with open(progress_file, 'w') as f:
                        json.dump({'completed': i + 1}, f)
                    
                    break  # Success, exit retry loop
                    
                except Exception as e:
                    retry_count += 1
                    print(f"Attempt {retry_count} failed for subtitle {i + 1}: {str(e)}")
                    
                    if retry_count < max_retries:
                        print(f"Retrying in 2 seconds...")
                        time.sleep(2)
                    else:
                        print(f"Failed to translate subtitle {i + 1} after {max_retries} attempts")
                        # Keep original text if translation fails
                        continue
        
        # Save the translated subtitles
        subs.save(output_file, encoding='utf-8')
        
        # Clean up progress file
        if os.path.exists(progress_file):
            os.remove(progress_file)
        
        print(f"✅ Translation completed! Saved to: {output_file}")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")

def main():
    print("🎬 Bengali to English Subtitle Converter (Robust Version)")
    print("=" * 50)
    
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
        translate_srt_robust(input_file, output_file)
    else:
        print("❌ Translation cancelled.")

if __name__ == "__main__":
    main() 