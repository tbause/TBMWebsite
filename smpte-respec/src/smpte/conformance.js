// Module w3c/conformance
import "deps/hyperhtml";
import { pub } from "core/pubsubhub";

export const name = "smpte/conformance";

export function run(conf, doc, cb) {
  var confo = document.getElementById("conformance");
  if (confo === null) {
    
    
    confo = hyperHTML`
      <section id='conformance'>
      <h2>Conformance Notation</h2>
      <p>
      Normative text is text that describes elements of the design that are indispensable or contains the conformance language keywords: "shall", "should", or "may". Informative text is text that is potentially helpful to the user, but not indispensable, and can be removed, changed, or added editorially without affecting interoperability. Informative text does not contain any conformance keywords.
      </p>
      <p>
      All text in this document is, by default, normative, except: the Introduction, any section explicitly labeled as "Informative" or individual paragraphs that start with "Note:"
      </p>

      <p>The keywords "shall" and "shall not" indicate requirements strictly to be followed in order to conform to the document and from which no deviation is permitted.</p>
      <p>The keywords, "should" and "should not" indicate that, among several possibilities, one is recommended as particularly suitable, without mentioning or excluding others; or that a certain course of action is preferred but not necessarily required; or that (in the negative form) a certain possibility or course of action is deprecated but not prohibited.</p>
      <p>The keywords "may" and "need not" indicate courses of action permissible within the limits of the document.</p>
      <p>The keyword “reserved” indicates a provision that is not defined at this time, shall not be used, and may be defined in the future. The keyword “forbidden” indicates “reserved” and in addition indicates that the provision will never be defined in the future.</p>
      <p>A conformant implementation according to this document is one that includes all mandatory provisions ("shall") and, if implemented, all recommended provisions ("should") as described. A conformant implementation need not implement optional provisions ("may") and need not implement them as described.
      </p>
      <p>Unless otherwise specified, the order of precedence of the types of normative information in this document shall be as follows: Normative prose shall be the authoritative definition; Tables shall be next; followed by formal languages; then figures; and then any other language forms.
      </p>
      </section>
    `;
    
    var scope = document.getElementById("scope")

    scope.insertAdjacentElement("afterend", confo);
  }
  // Added message for legacy compat with Aria specs
  // See https://github.com/w3c/respec/issues/793
  pub("end", "smpte/conformance");
  cb();
}
