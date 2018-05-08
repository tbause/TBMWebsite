import "deps/hyperhtml";

export const name = "w3c/patent";

export async function run(conf) {

	if (conf.docType !== 'AG') {

		var notice;

		if (conf.isPatentNotice) {

			notice = hyperHTML`
          <p>
           SMPTE draws attention to the fact that it is claimed that compliance with this Standard may involve the use of one or more patents or other intellectual property rights (collectively,
           "IPR"). The Society takes no position concerning the evidence, validity, or scope of this IPR.</p>
          <p>Each holder of claimed IPR has assured the Society that it is willing to License all IPR it owns, and any third party IPR it has the right to sublicense, that is essential to the implementation of this Standard to those (Members and non-Members alike) desiring to implement this Standard under reasonable terms and conditions, demonstrably free of discrimination. Each holder of claimed IPR has filed a statement to such effect with SMPTE. Information may be obtained from the Director, Standards & Engineering at SMPTE Headquarters.</p>
          <p>Attention is also drawn to the possibility that elements of this Standard may be subject to IPR other than those identified above. The Society shall not be responsible for identifying any or all such IPR.</p>
        `

		} else {

			notice = hyperHTML`
       <p>
           At the time of publication no notice had been received by SMPTE claiming patent rights essential to the implementation of this Engineering Document. However, attention is drawn to the possibility that some of the elements of this document may be the subject of patent rights. SMPTE shall not be held responsible for identifying any or all such patent rights.
          </p>
      `

		}

		var patent = hyperHTML `
      <section id='patent-notice' class='introductory'>
      <h2>Intellectual Property</h2>
      ${notice}
      </section>
    `;

		document.body.insertBefore(patent, document.body.firstChild);

	}

}
