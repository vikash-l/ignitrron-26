const https = require('https');
const fs = require('fs');

const url = "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000&auto=format&fit=crop"; // Note: unsplash doesn't have groot.

// Actually I will just use a known good url that shouldn't block node.js
const goodUrl = "https://w0.peakpx.com/wallpaper/70/451/HD-wallpaper-groot-gaming-gamer-marvel-playstation-ps4.jpg";

https.get(goodUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
      if(res.statusCode === 301 || res.statusCode === 302) {
          console.log("Redirected to: ", res.headers.location);
          https.get(res.headers.location, {headers: {'User-Agent': 'Mozilla/5.0'}}, (res2) => {
             const path = "c:\\Users\\ssris\\OneDrive\\Desktop\\sdc event\\sample (1)\\sample\\public\\groot_ps4.jpg";
             const writeStream = fs.createWriteStream(path);
             res2.pipe(writeStream);
             writeStream.on('finish', () => {
                writeStream.close();
                console.log("Download complete!");
             });
          });
      } else {
        const path = "c:\\Users\\ssris\\OneDrive\\Desktop\\sdc event\\sample (1)\\sample\\public\\groot_ps4.jpg";
        const writeStream = fs.createWriteStream(path);
        res.pipe(writeStream);
        writeStream.on('finish', () => {
            writeStream.close();
            console.log("Download complete!");
        });
      }
  } else {
    console.log("Failed: " + res.statusCode);
  }
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
