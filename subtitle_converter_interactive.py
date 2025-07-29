import pysrt
from googletrans import Translator
import os

# pip install pysrt googletrans

def translate_srt(input_file, output_file, source_lang='bn', target_lang='en'):
    """
    Translate SRT subtitle file from Bengali to English
    """
    try:
        # Load the subtitle file
        subs = pysrt.open(input_file)
        
        # Initialize translator
        translator = Translator()
        
        print(f"Translating {input_file} from {source_lang} to {target_lang}...")
        
        # Translate each subtitle
        for i, sub in enumerate(subs):
            # Translate the text
            translated = translator.translate(sub.text, src=source_lang, dest=target_lang)
            sub.text = translated.text
            
            # Progress indicator
            if (i + 1) % 10 == 0:
                print(f"Translated {i + 1}/{len(subs)} subtitles...")
        
        # Save the translated subtitles
        subs.save(output_file, encoding='utf-8')
        print(f"✅ Translation completed! Saved to: {output_file}")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")



def main():
    print("🎬 Bengali to English Subtitle Converter")
    print("=" * 40)
    
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
        translate_srt(input_file, output_file)
    else:
        print("❌ Translation cancelled.")



if __name__ == "__main__":
    main() 