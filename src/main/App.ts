import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import {SideBar} from '../client/SideBar';


export default class App {

    constructor() {

        console.log('App initialized');

        // new SideBar();

        this._initElectronEventBind();
    }

    private _initElectronEventBind(): void {
        app.on('ready', () => {
            const mainWindow = new BrowserWindow();
            mainWindow.loadURL(path.join('file://', __dirname, '../../static/index.html'));

            mainWindow.webContents.on('dom-ready', () => {
                console.log('dom-ready');
                // new SideBar();
                // window.customElements.define('side-bar', SideBar);
            });

            mainWindow.webContents.on('did-finish-load', () => {
                console.log('did-finish-load');
                // new SideBar();
            });
            //
            // mainWindow.webContents.on('will-finish-launching', () => {
            //
            // });

            mainWindow.on('ready-to-show', () => {
                console.log('ready-to-show');
            });
        });

        app.on('will-finish-launching', () => {
           console.log('will-finish-launching');
        });
    }
}

