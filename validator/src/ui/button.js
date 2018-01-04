import {BaseElement} from './base-element.js';

export class Button extends BaseElement {
    
    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {

        console.log("Method: getElementString - Button");
        return `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                ${this.title}
            </button>
        `;
    }
}