const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '../public/abyss-assets/enemies');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const totalImages = 150;
let downloaded = 0;

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
                return;
            }
            const file = fs.createWriteStream(filepath);
            res.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
            file.on('error', err => {
                fs.unlink(filepath, () => reject(err));
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log(`Starting download of ${totalImages} animal images...`);
    
    // We download in batches of 10 to not overwhelm the API
    const batchSize = 10;
    for (let i = 1; i <= totalImages; i += batchSize) {
        const promises = [];
        for (let j = 0; j < batchSize && i + j <= totalImages; j++) {
            const index = i + j;
            const filepath = path.join(dir, `enemy_${index}.jpg`);
            // loremflickr returns a random animal image. The 'lock' param ensures we get different images.
            const url = `https://loremflickr.com/150/150/animal?lock=${index}`;
            promises.push(
                downloadImage(url, filepath)
                    .then(() => {
                        downloaded++;
                        if (downloaded % 10 === 0) console.log(`Downloaded ${downloaded}/${totalImages}`);
                    })
                    .catch(err => console.error(`Error downloading ${index}:`, err.message))
            );
        }
        await Promise.all(promises);
    }
    console.log('Download complete!');
}

run();
