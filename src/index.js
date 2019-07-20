const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    frame: false,
    backgroundColor: '#000000',
    fullscreen: true,
  });

  win.loadFile('./src/index.html');
}

app.on('ready', createWindow);
