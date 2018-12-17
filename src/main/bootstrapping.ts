import {SideBar} from '../client/SideBar';

window.onload = () => {
    console.log('window.onload');

    customElements.define('side-bar', SideBar);
}