// server-middleware/downloadImage.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');
export default function (req, res) {
  // Define the external image URL
  const urlSource = req.url.lastIndexOf('/?url=') + 6;
  const link = req.url;
  const imageUrl = link.slice(urlSource);
  console.log(link.slice(urlSource));
  const lastIndex = imageUrl.lastIndexOf('/') + 1;
    console.log(imageUrl.slice(lastIndex));
  const fileName = imageUrl.slice(lastIndex);
  // Use axios to get the image from the external URL
  axios({
    method: 'get',
    url: imageUrl,
    responseType: 'stream',
  })
    .then((response) => {
      // Create a write stream to save the image on the server
      const imagePath = path.join(__dirname, fileName);
      const imageStream = fs.createWriteStream(imagePath);
      // Pipe the image stream from the response to the write stream
      response.data.pipe(imageStream);
      // Wait for the write stream to finish, then send the file as a response
      imageStream.on('finish', () => {
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', 'attachment; filename='+fileName);
        fs.createReadStream(imagePath).pipe(res);
        setTimeout(() => {
          fs.unlink(imagePath, (err) => {
          if(err) {
            console.error(err);
          } else {
            console.log('Archivo eliminado tras descarga.');
          };
        });
        }, 900000);
      });
    
      
    })
    .catch((error) => {
      console.error('Error downloading image:', error);
      res.status(500).send('Internal Server Error');
    });
}
