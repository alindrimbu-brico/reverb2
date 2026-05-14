import os
import requests
import concurrent.futures

output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../public/abyss-assets/enemies'))
os.makedirs(output_dir, exist_ok=True)

def download_image(i):
    url = f"https://loremflickr.com/150/150/animal?lock={i}"
    filepath = os.path.join(output_dir, f"enemy_{i}.jpg")
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(filepath, 'wb') as f:
            f.write(response.content)
        return i, True
    except Exception as e:
        print(f"Error {i}: {e}")
        return i, False

print("Starting download of 150 images...")
downloaded = 0
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    futures = [executor.submit(download_image, i) for i in range(1, 151)]
    for future in concurrent.futures.as_completed(futures):
        i, success = future.result()
        if success:
            downloaded += 1
            if downloaded % 10 == 0:
                print(f"Downloaded {downloaded}/150")

print("Download complete!")
