const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: 'file://${__dirname}/src/assets/logo.png',
        webPreferences: {
            webSecurity: false
        }
    })

    win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

    // win.webContents.openDevTools()

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
