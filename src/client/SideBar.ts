/**
 * CustomElement Test
 */
export class SideBar extends HTMLElement {

    /**
     * The constructor does work that needs to be executed exactly once.
     * These functions are used in a bunch of places, and always need to bind the correct this reference, so do it once.
     */
    constructor() {
        super();
    }

    /**
     * connectedCallback() fires when the element is inserted into the DOM.
     * It's a good place to set the initial role, tabindex, internal state, and install event listeners.
     */
    public connectedCallback() {
        this.addEventListener('click', (e: MouseEvent) => console.log('this is SideBar CustomElement'));
    }

    /**
     * disconnectedCallback() unregisters the event listeners that were set up in  connectedCallback().
     */
    public disconnectedCallback() {

    }
}
