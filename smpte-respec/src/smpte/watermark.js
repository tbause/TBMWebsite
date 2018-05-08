import "deps/hyperhtml";

export const name = "smpte/watermark";

export async function run(conf) {

  var fw = hyperHTML`
    <div class='watermark'>DRAFT -- NOT FOR PUBLICATION</div>
  `

    document.body.insertBefore(fw, document.body.firstChild);
}
