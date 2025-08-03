#!/usr/bin/env python3
"""
Subtitle Converter - Bengali to English Translator
=================================================

This script translates SRT subtitle files from Bengali to English using Google Translate API.
It includes robust error handling, progress tracking, and retry mechanisms for reliable translation.

Features:
- Translates SRT subtitle files from Bengali to English
- Handles network timeouts and API errors gracefully
- Saves progress to resume interrupted translations
- Provides detailed progress reporting
- Supports custom source and target languages

Requirements:
- pysrt: For reading and writing SRT files
- googletrans: For Google Translate API integration

Installation:
    pip install pysrt googletrans

Usage:
    python subtitle_converter.py
    # Then enter the file path when prompted

Author: DSA Journey Project
Version: 2.0
"""

import pysrt  # Library for handling SRT subtitle files
from googletrans import Translator  # Google Translate API wrapper
import os  # For file operations and path handling
import time  # For adding delays between API calls
import json  # For saving/loading progress data
from typing import Optional, Dict, List  # Type hints for better code documentation

class SubtitleConverter:
    """
    Main class for handling subtitle translation operations.
    
    This class encapsulates all the functionality needed to:
    - Read SRT subtitle files
    - Translate subtitle text using Google Translate
    - Handle errors and retries
    - Save progress for resuming interrupted translations
    - Write translated subtitles back to SRT format
    """
    
    def __init__(self, source_lang: str = 'bn', target_lang: str = 'en'):
        """
        Initialize the subtitle converter with language settings.
        
        Args:
            source_lang (str): Source language code (default: 'bn' for Bengali)
            target_lang (str): Target language code (default: 'en' for English)
        """
        # Initialize the Google Translate API client
        self.translator = Translator()
        
        # Set language codes for translation
        self.source_lang = source_lang  # Source language (Bengali)
        self.target_lang = target_lang  # Target language (English)
        
        # Progress tracking variables
        self.progress_file = "translation_progress.json"  # File to save progress
        self.completed_count = 0  # Number of subtitles already translated
        self.total_subtitles = 0  # Total number of subtitles to translate
        
        # Error tracking
        self.failed_translations = []  # List to track failed translations
        self.retry_count = 0  # Counter for retry attempts
        
        print(f"🌐 Subtitle Converter initialized")
        print(f"   Source Language: {source_lang}")
        print(f"   Target Language: {target_lang}")
    
    def load_progress(self) -> Dict:
        """
        Load previous translation progress from JSON file.
        
        This allows resuming interrupted translations without starting over.
        
        Returns:
            Dict: Progress data including completed count and failed translations
        """
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
        """
        Save current translation progress to JSON file.
        
        This ensures progress is not lost if the script is interrupted.
        
        Args:
            completed_count (int): Number of subtitles completed
            failed_translations (List): List of failed translation indices
        """
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
        """
        Translate a single subtitle text with retry mechanism.
        
        This function handles the actual translation using Google Translate API
        with multiple retry attempts to handle network issues and API timeouts.
        
        Args:
            text (str): Text to translate
            max_retries (int): Maximum number of retry attempts
            
        Returns:
            Optional[str]: Translated text or None if translation failed
        """
        # Skip empty or whitespace-only subtitles
        if not text.strip():
            return text
        
        retry_count = 0
        while retry_count < max_retries:
            try:
                # Attempt translation using Google Translate API
                translated = self.translator.translate(
                    text, 
                    src=self.source_lang, 
                    dest=self.target_lang
                )
                
                # Return the translated text
                return translated.text
                
            except Exception as e:
                retry_count += 1
                self.retry_count += 1
                
                # Log the error with retry information
                print(f"❌ Translation failed (attempt {retry_count}/{max_retries}): {str(e)}")
                
                # Add delay before retry to avoid rate limiting
                if retry_count < max_retries:
                    delay = retry_count * 2  # Progressive delay: 2s, 4s, 6s, 8s
                    print(f"⏳ Retrying in {delay} seconds...")
                    time.sleep(delay)
        
        # If all retries failed, return None
        print(f"💥 Translation failed after {max_retries} attempts")
        return None
    
    def translate_srt_file(self, input_file: str, output_file: str) -> bool:
        """
        Main function to translate an entire SRT subtitle file.
        
        This function orchestrates the entire translation process:
        1. Loads the SRT file
        2. Loads previous progress (if any)
        3. Translates each subtitle
        4. Saves progress periodically
        5. Writes the translated file
        
        Args:
            input_file (str): Path to input SRT file
            output_file (str): Path to output SRT file
            
        Returns:
            bool: True if translation completed successfully, False otherwise
        """
        try:
            print(f"📖 Loading subtitle file: {input_file}")
            
            # Load the SRT file using pysrt library
            subs = pysrt.open(input_file)
            self.total_subtitles = len(subs)
            
            print(f"📊 Found {self.total_subtitles} subtitles to translate")
            
            # Load previous progress if available
            self.load_progress()
            
            if self.completed_count > 0:
                print(f"🔄 Resuming from subtitle {self.completed_count + 1}")
            
            # Process each subtitle starting from where we left off
            for i in range(self.completed_count, len(subs)):
                sub = subs[i]  # Current subtitle object
                
                # Display progress
                progress = ((i + 1) / self.total_subtitles) * 100
                print(f"📝 Translating subtitle {i + 1}/{self.total_subtitles} ({progress:.1f}%)")
                
                # Attempt translation with retry mechanism
                translated_text = self.translate_subtitle(sub.text)
                
                if translated_text is not None:
                    # Update subtitle text with translation
                    sub.text = translated_text
                    print(f"✅ Translated: '{sub.text[:50]}...'")
                else:
                    # Keep original text if translation failed
                    print(f"⚠️  Keeping original text for subtitle {i + 1}")
                    self.failed_translations.append(i)
                
                # Save progress every 10 subtitles
                if (i + 1) % 10 == 0:
                    self.save_progress(i + 1, self.failed_translations)
                    print(f"💾 Progress saved at subtitle {i + 1}")
                
                # Add delay to avoid overwhelming the API
                time.sleep(0.5)  # 500ms delay between translations
            
            # Save the translated subtitles to output file
            print(f"💾 Saving translated subtitles to: {output_file}")
            subs.save(output_file, encoding='utf-8')
            
            # Clean up progress file after successful completion
            if os.path.exists(self.progress_file):
                os.remove(self.progress_file)
                print("🧹 Progress file cleaned up")
            
            # Print final statistics
            self.print_summary()
            
            return True
            
        except Exception as e:
            print(f"❌ Error during translation: {str(e)}")
            return False
    
    def print_summary(self):
        """
        Print a summary of the translation process.
        
        This includes statistics about successful translations,
        failed translations, and overall performance.
        """
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
    """
    Main function to run the subtitle converter.
    
    This function handles user interaction, file validation,
    and orchestrates the translation process.
    """
    print("🎬 Subtitle Converter - Bengali to English")
    print("=" * 50)
    
    # Initialize the converter
    converter = SubtitleConverter()
    
    # Get input file path from user
    input_file = input("Enter the path to your SRT file: ").strip()
    
    # Validate input file
    if not input_file:
        print("❌ No file path provided")
        return
    
    if not os.path.exists(input_file):
        print(f"❌ File not found: {input_file}")
        return
    
    if not input_file.lower().endswith('.srt'):
        print("⚠️  Warning: File doesn't have .srt extension")
    
    # Generate output filename
    base_name = os.path.splitext(input_file)[0]
    output_file = f"{base_name}_translated.srt"
    
    print(f"📁 Input file: {input_file}")
    print(f"📁 Output file: {output_file}")
    print(f"🌐 Translation: {converter.source_lang} → {converter.target_lang}")
    
    # Confirm before starting
    confirm = input("\nProceed with translation? (y/n): ").lower().strip()
    if confirm != 'y':
        print("❌ Translation cancelled")
        return
    
    # Start translation process
    print(f"\n🚀 Starting translation...")
    success = converter.translate_srt_file(input_file, output_file)
    
    if success:
        print(f"\n🎉 Translation completed successfully!")
        print(f"📁 Translated file saved as: {output_file}")
    else:
        print(f"\n💥 Translation failed. Check the error messages above.")

if __name__ == "__main__":
    # Run the main function when script is executed directly
    main() 