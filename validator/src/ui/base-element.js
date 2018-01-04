import $ from 'jquery';

export class BaseElement {

    constructor() {
        this.element = null;   // jquery object
    }

    createElement() {
        console.log("Method: CreateElment");
        let s = this.getElementString();
        this.element = $(s);
    }

    appendToElement(el) {
        console.log("Method: appendToElement");
        this.createElement();
        el.append(this.element);
    }

    getElementString() {
        console.log("Method: getElementString");
        throw 'Please override GetElementString() in BaseElement';
    }
}