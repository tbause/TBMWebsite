import "deps/hyperhtml";

export const name = "smpte/foreword";

export async function run(conf) {

  var fw = hyperHTML`
    <section id='foreword' class='introductory'>
  <h2>Foreword</h2>
  <p>
SMPTE (the Society of Motion Picture and Television Engineers) is an internationally-recognized standards developing organization. Headquartered and incorporated in the United States of America, SMPTE has members in over 80 countries on six continents. SMPTE's Engineering Documents, including Standards, Recommended Practices, and Engineering Guidelines, are prepared by SMPTE's Technology Committees. Participation in these Committees is open to all with a bona fide interest in their work. SMPTE cooperates closely with other standards-developing organizations, including ISO, IEC and ITU.
SMPTE Engineering Documents are drafted in accordance with the rules given in its Standards Operations Manual.</p>
<p>${conf.docNumberFull} was prepared by ${conf.managingGroupFull}.</p>
  </section>
  `

    document.body.insertBefore(fw, document.body.firstChild);
}
