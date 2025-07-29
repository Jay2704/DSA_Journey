import pysrt
from googletrans import Translator
import sys
import os

def translate_srt(input_file, output_file, source_lang='bn', target_lang='en'):
    """
    Translate SRT subtitle file from Bengali to English
    
    Args:
        input_file (str): Path to input SRT file
        output_file (str): Path to output SRT file
        source_lang (str): Source language code (default: 'bn' for Bengali)
        target_lang (str): Target language code (default: 'en' for English)
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
    if len(sys.argv) < 2:
        print("Usage: python subtitle_converter.py <input_srt_file> [output_srt_file]")
        print("Example: python subtitle_converter.py subtitles.bn.srt subtitles.en.srt")
        return
    
    input_file = sys.argv[1]
    
    # Generate output filename if not provided
    if len(sys.argv) >= 3:
        output_file = sys.argv[2]
    else:
        name, ext = os.path.splitext(input_file)
        output_file = f"{name}.en{ext}"
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"❌ Error: Input file '{input_file}' not found!")
        return
    
    # Translate the file
    translate_srt(input_file, output_file)

if __name__ == "__main__":
    main() 