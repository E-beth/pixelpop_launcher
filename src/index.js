const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    frame: false,
    backgroundColor: '#000000',
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadFile('./src/index.html');
}

app.on('ready', createWindow);
