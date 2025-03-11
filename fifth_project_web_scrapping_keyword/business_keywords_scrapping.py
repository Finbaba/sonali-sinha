import requests
import json
import re

def fetch_youtube_suggestions(keyword):
    # YouTube Suggest URL
    url = f"http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q={keyword}"

    try:
        response = requests.get(url)
        
        if response.status_code == 200:
            # 1. JavaScript wrapper ko remove karo (Extract JSON content)
            match = re.search(r'\((.*?)\)$', response.text)
            if match:
                json_data = match.group(1)
                
                # 2. JSON ko parse karo
                data = json.loads(json_data)

                # 3. Suggestions extract karo
                suggestions = data[1]

                print("Top YouTube Suggestions:")
                for idx, suggestion in enumerate(suggestions[:10], 1):
                    print(f"{idx}. {suggestion[0]}")
            else:
                print("Error: JSON data extract nahi ho paya")
        else:
            print(f"Request Failed: {response.status_code}")
    
    except Exception as e:
        print(f"Exception Occurred: {e}")

fetch_youtube_suggestions("Trending Topic")
