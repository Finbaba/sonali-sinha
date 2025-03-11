from googleapiclient.discovery import build
import csv

# ✅ YouTube API key (Google Cloud se le lo)
API_KEY = "AIzaSyDLj3eU2ISsr9zJE_6XK9AKJZWfhPxM2fM"

# ✅ YouTube API object banao
youtube = build('youtube', 'v3', developerKey=API_KEY)

def fetch_top_business_news():
    # ✅ Business News videos ke liye request bhejo
    request = youtube.search().list(
        part="snippet",
        q="business news",
        type="video",
        maxResults=10,
        order="date",  # 🟢 Latest news ke liye 'date' use kiya
        regionCode="IN",  # 🟢 India-specific results
        relevanceLanguage="en"
    )
    response = request.execute()

    # ✅ Business news data extract karo
    videos = []
    for item in response["items"]:
        title = item["snippet"]["title"]
        url = f"https://www.youtube.com/watch?v={item['id']['videoId']}"
        published_at = item["snippet"]["publishedAt"]
        channel_name = item["snippet"]["channelTitle"]
        videos.append((title, url, channel_name, published_at))

    return videos

def save_to_csv(data, filename="youtube_business_news.csv"):
    # ✅ Data ko CSV me save karo
    with open(filename, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(["Title", "URL", "Channel Name", "Published At"])  # Header
        writer.writerows(data)

    print(f"✅ Data saved to '{filename}'")

try:
    business_news = fetch_top_business_news()

    if business_news:
        print("📊 Top 10 Latest Business News on YouTube:")
        for idx, (title, url, channel, date) in enumerate(business_news, 1):
            print(f"{idx}. {title} - {url} ({channel} | {date})")

        # ✅ CSV me save karo
        save_to_csv(business_news)
    else:
        print("❌ Koi result nahi mila!")

except Exception as e:
    print(f"❌ Error: {e}")
