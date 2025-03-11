import requests
import json
import csv

# 🔑 Yahan apna YouTube Data API key paste karo
API_KEY = "AIzaSyDLj3eU2ISsr9zJE_6XK9AKJZWfhPxM2fM"

data1 = []
# 📊 Function: YouTube ke top search keywords fetch karo
def fetch_youtube_trending():
    url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=10&key={API_KEY}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        print("✅ Top YouTube Trending Videos in India:")
        for idx, item in enumerate(data['items'], start=1):
            title = item['snippet']['title']
            print(f"{idx}. {title}")
            data1.append(title)
            # print(data1)
        
            
    else:
        print(f"❌ Error: {response.status_code} - {response.text}")
fetch_youtube_trending()

def save_to_csv(data1, filename="top_serach_keyword_on_youtube.csv"):
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["Title"])
        # breakpoint()
        for item in data1:
            writer.writerow([ item])
    print(f"✅ Data saved to {filename}")

save_to_csv(data1,"top_serach_keyword_on_youtube.csv")