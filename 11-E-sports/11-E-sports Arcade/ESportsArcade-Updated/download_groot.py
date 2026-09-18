import urllib.request
import certifi
import ssl

url = "https://api.allorigins.win/raw?url=https://i.pinimg.com/736x/21/df/b8/21dfb8587d69cbab832bd7a1b24e4c93.jpg"
req = urllib.request.Request(
    url, 
    data=None, 
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
)

context = ssl.create_default_context(cafile=certifi.where())
try:
    with urllib.request.urlopen(req, context=context) as response:
        with open("c:\\Users\\ssris\\OneDrive\\Desktop\\sdc event\\sample (1)\\sample\\public\\baby_groot_ps4.jpg", "wb") as f:
            f.write(response.read())
    print("Download successful!")
except Exception as e:
    print("Error:", e)
