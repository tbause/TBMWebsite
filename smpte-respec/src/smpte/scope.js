// Module w3c/abstract
// Handle the abstract section properly.
import { pub } from "core/pubsubhub";
export const name = "smpte/scope";

export async function run() {
  const scp = document.getElementById("scope");
  if (!scp) {
    pub("error", `Document must have one element with \`id="scope"`);
    return;
  }
  let scopeHeading = document.querySelector("#scope>h2");
  if (scopeHeading) {
    return;
  }
  scopeHeading = document.createElement("h2");
  scopeHeading.innerText = "Scope";
  scp.insertAdjacentElement("afterbegin", scopeHeading);
}
