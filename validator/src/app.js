console.log("app.js: Script start");

import $ from 'jquery';
// import {SDPRecord} from './classes/sdprecord.js';
import {Button} from './ui/button.js';
import {TextField} from './ui/textfield.js';
import {TitleBar} from './ui/titlebar.js';

// let sdp = new SDPRecord();

// sdp.dosomething();

let tb = new TitleBar('SDP Validator');
tb.appendToElement($('body'));

let t = new TextField('File or URL');
t.appendToElement($('body'));

let b = new Button('Validate');
b.appendToElement($('body'));

console.log("In App.js");