// Module w3c/toc
export const name = "smpte/toc";

export async function run() {
  var toc = document.createElement("section");
  toc.id = "toc";
  document.body.insertBefore(toc, document.body.firstChild);
}
