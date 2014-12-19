var app = require('app'); 
var BrowserWindow = require('browser-window');  

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  // メインウィンドウを作成
  mainWindow = new BrowserWindow({width: 1100, height: 650});
  // index.html を読み込む
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

