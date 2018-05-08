"use strict";
// In case everything else fails, we want the error
window.addEventListener("error", ev => {
  console.error(ev.error, ev.message, ev);
});

// this is only set in a build, not at all in the dev environment
require.config({
  shim: {
    shortcut: {
      exports: "shortcut",
    },
    highlight: {
      exports: "hljs",
    },
  },
  paths: {
    "handlebars.runtime": "deps/handlebars",
    "deps/highlight": "https://www.w3.org/Tools/respec/respec-highlight",
  },
  deps: ["deps/hyperhtml", "deps/url-search-params"],
});

define(
  [
    // order is significant
    "deps/domReady",
    "core/base-runner",
    "core/ui",
    "core/l10n",
    "core/style",
    "core/github",
    "core/data-include",
    "core/markdown",
    "smpte/defaults",
    "smpte/style",
    "smpte/scope",
    "smpte/conformance",
    "smpte/introduction",
    "smpte/patent",
    "smpte/foreword",
    "smpte/toc",
    "smpte/headers",
    "core/data-transform",
    "core/inlines",
    "core/dfn",
    "core/examples",
    "core/issues-notes",
    "core/requirements",
    "core/best-practices",
    "core/figures",
    "core/webidl",
    "core/data-cite",
    "core/biblio",
    "core/webidl-index",
    "core/link-to-dfn",
    "core/contrib",
    "core/fix-headers",
    "smpte/structure",
    "smpte/informative",
    "core/id-headers",
    "core/location-hash",
    "ui/save-html",
    "ui/search-specref",
    "ui/dfn-list",
    "ui/about-respec",
    "core/seo",
    "core/highlight",
    "core/webidl-clipboard",
    "core/data-tests",
    "core/list-sorter",
    /*Linter must be the last thing to run*/
    "core/linter",
  ],
  (domReady, runner, { ui }, ...plugins) => {
    ui.show();
    domReady(async () => {
      try {
        await runner.runAll(plugins);
        await document.respecIsReady;
      } catch (err) {
        console.error(err);
      } finally {
        ui.enable();
      }
    });
  }
);
