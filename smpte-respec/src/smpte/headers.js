/*jshint
    forin: false
*/
/*global hb*/

import "deps/hyperhtml";
import hb from "handlebars.runtime";
import { pub } from "core/pubsubhub";

export const name = "smpte/headers";

export function run(conf) {
  
var header = hyperHTML`
  <div class='head'>
  
    <p class='doc-num'>SMPTE ${conf.docNumberFull}</p>
    ${conf.revisionOf ? hyperHTML`
      <p class='doc-revision'> Revision of ${conf.revisionOf}</p>
    ` :
    ""}

  
  <a href='https://smpte.org' class='logo'>
  <img
        alt="Society of Motion Picture and Television Engineers"
        width="137"
        height="88"
        src='https://sandflow.com/public/smpte/smpte-logo.jpg'>
    </a>
  
  
  <header>
  <p class='doc-type'>SMPTE ${conf.docTypeFull}</p>
  <h1 class='title p-name' id='title'>${conf.title}</h1>
  ${conf.docStatus !== 'PUB' ? hyperHTML`
	 <p class='spec-status'>${conf.docStatusFull} <time class='dt-published' datetime='${conf.modifiedDateFull}'>${conf.modifiedDateFull}</time></p>
	` :
  ""}
  </header>
  
  ${conf.docStatus !== 'PUB' ? hyperHTML`
   <div id='watermark'>NOT FOR PUBLICATION</div>
   ` :
  ""}

  <p class='copyright'>Copyright © ${conf.modifiedYearFull} by the Society Of Motion Picture And Television Engineers, 445 Hamilton Avenue., White Plains, NY 10601.</p>
  
  <hr title="Separator for header">
  
  </section>
  
  </div>
  `

  
  document.body.insertBefore(header, document.body.firstChild);
  document.body.classList.add("h-entry");
  
  
}
