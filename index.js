const { app, BrowserWindow } = require('electron');
const pathExists = require('path');

function createWindow(){
    const win = new BrowserWindow({

        width:1000,
        height:700,
        icon: pathExists.join(__dirname, 'logo.ico'),
    });

    win.loadURL('https://midu.dev/');
}

app.whenReady().then(()=>{
    createWindow();
})