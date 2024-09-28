import json
import time
from googletrans import Translator

# Initialize the translator
translator = Translator()

# Non-translatable keys (keys or fields that shouldn't be translated)
NON_TRANSLATABLE_KEYS = ['imagePath']

# Keys where some fields should not be translated but others should
PARTIALLY_TRANSLATABLE_KEYS = ['cards', 'data9']

# Maximum number of retries for translation
MAX_RETRIES = 5
RETRY_DELAY = 2  # Delay (in seconds) between retries

# Function to load the JSON file
def load_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return json.load(file)

# Function to save the translated JSON file (overwrite existing file)
def save_json(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=2, ensure_ascii=False)

# Function to translate only the values, avoiding specific keys
def translate_json_content(data, target_lang='fr'):
    translated_data = {}

    for key, value in data.items():
        if isinstance(value, dict):
            # Recursively translate nested dictionaries
            translated_data[key] = translate_json_content(value, target_lang)
        elif isinstance(value, list):
            # Special handling for lists like cards and data9 where image path shouldn't be translated but text should
            if key in PARTIALLY_TRANSLATABLE_KEYS:
                translated_data[key] = [
                    {sub_key: translate_text(sub_value, target_lang) if sub_key not in NON_TRANSLATABLE_KEYS else sub_value
                     for sub_key, sub_value in item.items()} if isinstance(item, dict) else item
                    for item in value
                ]
            else:
                # Translate lists, assuming lists may contain dictionaries or strings
                translated_data[key] = [translate_json_content(item, target_lang) if isinstance(item, dict)
                                        else translate_text(item, target_lang) for item in value]
        else:
            # Translate only values, not keys or non-translatable fields
            if key not in NON_TRANSLATABLE_KEYS:
                translated_data[key] = translate_text(value, target_lang)
            else:
                translated_data[key] = value  # Keep the original value for non-translatable keys
    return translated_data

# Function to translate text with retry mechanism
def translate_text(text, target_lang):
    retry_count = 0
    while retry_count < MAX_RETRIES:
        try:
            # Avoid translating empty or purely numeric strings
            if not text.strip() or text.isdigit():
                return text

            # Avoid translating strings with special characters like domain names
            if '.' in text and text.split('.')[-1].isalpha():
                return text

            # Translate the text
            print(f"Translating '{text}' to {target_lang} (Attempt {retry_count + 1})...")
            translated = translator.translate(text, dest=target_lang)
            
            # Ensure that translation has valid output
            if translated and translated.text:
                return translated.text
            else:
                print(f"Failed translation for '{text}' to {target_lang} (No valid output)")
                raise Exception("Invalid translation output")

        except Exception as e:
            print(f"Error translating '{text}': {e}")
            retry_count += 1
            time.sleep(RETRY_DELAY)  # Wait before retrying

    print(f"Failed to translate '{text}' after {MAX_RETRIES} attempts. Returning original text.")
    return text  # Return original text if all retries fail

# Main function to handle the translation process
def main():
    # Paths to your JSON file (input and output for different locales)
    en_file = 'public/locales/en/common.json'
    fr_file = 'public/locales/fr/common.json'
    de_file = 'public/locales/de/common.json'

    # Load the JSON data
    data = load_json(en_file)

    # Translate the content into French and save
    translated_fr_data = translate_json_content(data, target_lang='fr')
    save_json(fr_file, translated_fr_data)
    print(f"French translation completed. Translated file saved to {fr_file}")

    # Translate the content into German and save
    translated_de_data = translate_json_content(data, target_lang='de')
    save_json(de_file, translated_de_data)
    print(f"German translation completed. Translated file saved to {de_file}")

# Run the main function
if __name__ == "__main__":
    main()
