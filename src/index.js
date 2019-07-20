const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    frame: false,
  });

  win.loadFile('./src/index.html');
}

app.on('ready', createWindow);
