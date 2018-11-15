const { app, BrowserWindow } = require('electron')
var path = require('path')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1366,
        height: 768,
        backgroundColor: '#2f2f2f',
        icon: path.join(__dirname, 'dist/angular-electron/assets/balcony_icon.ico')
    })

    win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('active', () => {
    if (win === null) {
        createWindow()
    }
})
