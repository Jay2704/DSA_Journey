from googletrans import Translator
import pysubs2

def translate_srt(input_path: str,
                  output_path: str,
                  src_lang: str = "gu",  # Gujarati
                  dest_lang: str = "en"):  # English
    # 1) load the subtitles
    subs = pysubs2.load(input_path, encoding="utf-8")
    translator = Translator()

    # 2) translate each event’s text
    for event in subs:
        # skip time-codes / indices automatically
        original = event.text
        # do allow multi-line blocks
        translated = translator.translate(original, src=src_lang, dest=dest_lang)
        event.text = translated.text

    # 3) save back to a new file
    subs.save(output_path, encoding="utf-8")
    print(f"Translated .srt written to {output_path}")

if __name__ == "__main__":
    translate_srt(
        input_path="Copy_of_Naadi.Dosh-gu.srt",    # your Gujarati SRT
        output_path="Naadi.Dosh-en.srt"
    )