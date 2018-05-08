import "deps/hyperhtml";
import { pub } from "core/pubsubhub";

export const name = "smpte/introduction";

export function run(conf, doc, cb) {
  var $confo = $("#introduction");
  
  if ($confo.length) {
    
    $confo.addClass('introductory');
    
    var intro_intro = hyperHTML`
      <h2>Introduction</h2>
      <p>This section is entirely informative and does not form an integral part of this Engineering Document.</p>
    `;
    
    $confo.prepend(intro_intro.childNodes);
  }
  // Added message for legacy compat with Aria specs
  // See https://github.com/w3c/respec/issues/793
  pub("end", "smpte/introduction");
  cb();
}
