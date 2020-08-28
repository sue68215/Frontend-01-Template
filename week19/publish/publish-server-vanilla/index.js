const http = require('http');
const fs = require('fs');
const unzipper = require('unzipper');

const server = http.createServer((req, res) => {
  /*let matched = req.url.match(/filename=([^&]+)/);
  let filename = matched && matched[1];
  if (!filename)
    return;
  let writeStream = fs.createWriteStream('../server/public/' + filename);
  req.pipe(writeStream);*/
  let writeStream = unzipper.Extract({path: '../server/public'});
  req.pipe(writeStream);
  /*
  req.on('data', trunk => {
    writeStream.write(trunk);
  })

  req.on('end', trunk => {
    writeStream.end(trunk);
  })
  */

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
  })
  
});

server.listen(8081);