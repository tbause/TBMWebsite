/**
 * Sets the defaults for SMPTE engineering documents
 */
export const name = "smpte/defaults";

import linter from "core/linter";

import {
  pub
}
from "core/pubsubhub";

import {
  rule as noHeadinglessSectionsRule
}
from "core/linter-rules/no-headingless-sections";

import {
  rule as noHttpPropsRule
}
from "core/linter-rules/no-http-props";

import {
  concatDate,
  joinAnd,
  ISODate
}
from "core/utils";

linter.register(noHttpPropsRule, noHeadinglessSectionsRule);


export function run(conf) {

  /* toc levels */

  conf.maxTocLevel = conf.maxTocLevel || 2;

  /* document status */

  if (!conf.docStatus) {

    pub("error", "Missing required configuration: `docStatus`");

  }

  if (conf.docStatus === "WD") {

    conf.docStatusFull = "Working Draft";

  } else if (conf.docStatus === "PUB") {

    conf.docStatusFull = null;

  } else {

    pub("error", `Unknown document status: ${conf.docStatus}`);

  }

  /* document type */

  if (!conf.docType) {

    pub("error", "Missing required configuration: `docType`");

  }

  if (conf.docType === "AG") {

    conf.docTypeFull = "Administrative Guideline";

  } else if (conf.docType === "ST") {

    conf.docTypeFull = "Standard";

  } else {

    pub("error", `Unknown document status: ${conf.docType}`);

  }

  /* managing group */

  if (!conf.managingGroup) {
    pub("error", "Missing required configuration: `managingGroup`");
  }

  if (conf.managingGroup === "ST") {

    conf.managingGroupFull = "Standards Committee";

  } else if (conf.managingGroup === "32NF") {

    conf.managingGroupFull = "Technology Committee 32NF";

  } else {

    pub("error", `Unknown managingGroup: ${conf.managingGroup}`);

  }

  /* title */

  if (!document.title) {
    pub("error", "Missing <title>");
  }

  conf.title = document.title || "No Title";

  /* document root */

  if (conf.docStatus != "WD" && conf.docRoot === null) {
    pub("error", "Document root number required: `docRoot`");
  }

  conf.docRoot = conf.docRoot || "XXXX";

  /* publish date */

  conf.modifiedDate = new Date(document.lastModified);

  conf.modifiedDateFull = conf.modifiedDate.toISOString(); /*conf.modifiedDate.getUTCFullYear()
                            + "-" + (conf.modifiedDate.getUTCMonth() + 1)
                             +"-"+ conf.modifiedDate.getUTCDate()
                             + "T" + conf.modifiedDate.getUTCHours()
                             + ":" + conf.modifiedDate.getUTCMinutes()
                             + ":" + conf.modifiedDate.getUTCSeconds();*/
  
  conf.modifiedYearFull = conf.modifiedDate.getUTCFullYear().toString();

  /* publish year */

  if (conf.docStatus === "FCD" || conf.docStatus === "DP" || conf.docStatus === "PUB") {

    if (conf.publishYear === null) {

      pub("error", "Publication year required: `publishYear`");

    }

  } else {

    conf.publishYear = "XXXX";

  }

  /* document number */

  conf.docNumberFull = `${conf.docType} ${conf.docRoot}${conf.docPart ? `-${conf.docPart}` : ""}:${conf.publishYear}`;
}
