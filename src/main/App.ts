import { app, BrowserWindow } from 'electron';
import * as path from 'path';

app.on('ready', () => {
    const mainWindow = new BrowserWindow();
    mainWindow.loadURL(path.join('file://', __dirname, '../index.html'));
});