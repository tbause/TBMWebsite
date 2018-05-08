/*jshint strict: true, browser:true, jquery: true*/

import { linkCSS } from "core/utils";
export const name = "smpte/style";


export function run(conf, doc, cb) {
  linkCSS(doc, "https://www.w3.org/StyleSheets/TR/2016/base.css");
  linkCSS(doc, "https://sandflow.com/public/smpte/smpte.css");
  cb();
}
