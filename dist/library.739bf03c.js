// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aRq6p":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _notiflix = require("notiflix");
var _notiflixDefault = parcelHelpers.interopDefault(_notiflix);
var _modalTeamJs = require("./modalTeam.js");
// import './search';
var _renderMovieCardsJs = require("./renderMovieCards.js");
var _paginationJs = require("./pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _searchJs = require("./search.js");
(0, _paginationJsDefault.default)();

},{"notiflix":"5z0Oc","./modalTeam.js":"eHqPO","./renderMovieCards.js":"aGLN1","./pagination.js":"9j1Dd","./search.js":"4TESp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5z0Oc":[function(require,module,exports) {
var global = arguments[3];
/* Notiflix AIO (https://notiflix.github.io) - Version: 3.2.6 - Author: Furkan (https://github.com/furcan) - Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT) */ (function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e(t);
    }) : "object" == typeof module.exports ? module.exports = e(t) : t.Notiflix = e(t);
})("undefined" == typeof global ? "undefined" == typeof window ? this : window : global, function(t1) {
    "use strict";
    if ("undefined" == typeof t1 && "undefined" == typeof t1.document) return !1;
    var e1, i1, a1, n1, o1, r1 = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s1 = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, m1 = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, c1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, p1 = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: !1,
        zindex: 4002,
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: !1,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: !0,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: !0,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
            svgColor: "#32c682",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#32c682",
            buttonColor: "#fff",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            svgColor: "#ff5549",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#ff5549",
            buttonColor: "#fff",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            svgColor: "#eebf31",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#eebf31",
            buttonColor: "#fff",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            svgColor: "#26c0d3",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#26c0d3",
            buttonColor: "#fff",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, f1 = {
        Show: "Show",
        Ask: "Ask",
        Prompt: "Prompt"
    }, d1 = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        cssAnimationStyle: "fade",
        plainText: !0,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9"
    }, x1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
        Custom: "Custom",
        Notiflix: "Notiflix"
    }, g1 = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        clickToClose: !1,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc"
    }, b1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse"
    }, u1 = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838"
    }, y1 = function(t) {
        return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t + r1);
    }, k1 = function(t) {
        return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t + r1);
    }, w = function(e) {
        return e || (e = "head"), null !== t1.document[e] || (y1('\nNotiflix needs to be appended to the "<' + e + '>" element, but you called it before the "<' + e + '>" element has been created.'), !1);
    }, h1 = function(e, i) {
        if (!w("head")) return !1;
        if (null !== e() && !t1.document.getElementById(i)) {
            var a = t1.document.createElement("style");
            a.id = i, a.innerHTML = e(), t1.document.head.appendChild(a);
        }
    }, v = function() {
        var t = {}, e = !1, a2 = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], a2++);
        for(var n = function(i) {
            for(var a in i)Object.prototype.hasOwnProperty.call(i, a) && (t[a] = e && "[object Object]" === Object.prototype.toString.call(i[a]) ? v(t[a], i[a]) : i[a]);
        }; a2 < arguments.length; a2++)n(arguments[a2]);
        return t;
    }, N = function(e) {
        var i = t1.document.createElement("div");
        return i.innerHTML = e, i.textContent || i.innerText || "";
    }, C1 = function(t, e) {
        t || (t = "110px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, z1 = function(t, e) {
        t || (t = "110px"), e || (e = "#ff5549");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, S1 = function(t, e) {
        t || (t = "110px"), e || (e = "#eebf31");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, L1 = function(t, e) {
        t || (t = "110px"), e || (e = "#26c0d3");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return i;
    }, W1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
        return i;
    }, I1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
        return i;
    }, R1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + t + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
        return i;
    }, A1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
        return i;
    }, M = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
        return i;
    }, B = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var i = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
        return i;
    }, X1 = function(t, e, i) {
        t || (t = "60px"), e || (e = "#f8f8f8"), i || (i = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + e + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + i + '" stroke="' + i + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
        return a;
    }, D1 = function() {
        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    }, T1 = 0, F1 = function(a, n, o, r) {
        if (!w("body")) return !1;
        e1 || G.Notify.init({});
        var c = v(!0, e1, {});
        if ("object" == typeof o && !Array.isArray(o) || "object" == typeof r && !Array.isArray(r)) {
            var p = {};
            "object" == typeof o ? p = o : "object" == typeof r && (p = r), e1 = v(!0, e1, p);
        }
        var f = e1[a.toLocaleLowerCase("en")];
        T1++, "string" != typeof n && (n = "Notiflix " + a), e1.plainText && (n = N(n)), !e1.plainText && n.length > e1.messageMaxLength && (e1 = v(!0, e1, {
            closeButton: !0,
            messageMaxLength: 150
        }), n = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n.length > e1.messageMaxLength && (n = n.substring(0, e1.messageMaxLength) + "..."), "shadow" === e1.fontAwesomeIconStyle && (f.fontAwesomeIconColor = f.background), e1.cssAnimation || (e1.cssAnimationDuration = 0);
        var d = t1.document.getElementById(m1.wrapID) || t1.document.createElement("div");
        if (d.id = m1.wrapID, d.style.width = e1.width, d.style.zIndex = e1.zindex, d.style.opacity = e1.opacity, "center-center" === e1.position ? (d.style.left = e1.distance, d.style.top = e1.distance, d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.margin = "auto", d.classList.add("nx-flex-center-center"), d.style.maxHeight = "calc((100vh - " + e1.distance + ") - " + e1.distance + ")", d.style.display = "flex", d.style.flexWrap = "wrap", d.style.flexDirection = "column", d.style.justifyContent = "center", d.style.alignItems = "center", d.style.pointerEvents = "none") : "center-top" === e1.position ? (d.style.left = e1.distance, d.style.right = e1.distance, d.style.top = e1.distance, d.style.bottom = "auto", d.style.margin = "auto") : "center-bottom" === e1.position ? (d.style.left = e1.distance, d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.margin = "auto") : "right-bottom" === e1.position ? (d.style.right = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.left = "auto") : "left-top" === e1.position ? (d.style.left = e1.distance, d.style.top = e1.distance, d.style.right = "auto", d.style.bottom = "auto") : "left-bottom" === e1.position ? (d.style.left = e1.distance, d.style.bottom = e1.distance, d.style.top = "auto", d.style.right = "auto") : (d.style.right = e1.distance, d.style.top = e1.distance, d.style.left = "auto", d.style.bottom = "auto"), e1.backOverlay) {
            var x = t1.document.getElementById(m1.overlayID) || t1.document.createElement("div");
            x.id = m1.overlayID, x.style.width = "100%", x.style.height = "100%", x.style.position = "fixed", x.style.zIndex = e1.zindex - 1, x.style.left = 0, x.style.top = 0, x.style.right = 0, x.style.bottom = 0, x.style.background = f.backOverlayColor || e1.backOverlayColor, x.className = e1.cssAnimation ? "nx-with-animation" : "", x.style.animationDuration = e1.cssAnimation ? e1.cssAnimationDuration + "ms" : "", t1.document.getElementById(m1.overlayID) || t1.document.body.appendChild(x);
        }
        t1.document.getElementById(m1.wrapID) || t1.document.body.appendChild(d);
        var g = t1.document.createElement("div");
        g.id = e1.ID + "-" + T1, g.className = e1.className + " " + f.childClassName + " " + (e1.cssAnimation ? "nx-with-animation" : "") + " " + (e1.useIcon ? "nx-with-icon" : "") + " nx-" + e1.cssAnimationStyle + " " + (e1.closeButton && "function" != typeof o ? "nx-with-close-button" : "") + " " + ("function" == typeof o ? "nx-with-callback" : "") + " " + (e1.clickToClose ? "nx-notify-click-to-close" : ""), g.style.fontSize = e1.fontSize, g.style.color = f.textColor, g.style.background = f.background, g.style.borderRadius = e1.borderRadius, g.style.pointerEvents = "all", e1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on")), g.style.fontFamily = '"' + e1.fontFamily + '", ' + s1, e1.cssAnimation && (g.style.animationDuration = e1.cssAnimationDuration + "ms");
        var b = "";
        if (e1.closeButton && "function" != typeof o && (b = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + f.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), !e1.useIcon) g.innerHTML = '<span class="nx-message">' + n + "</span>" + (e1.closeButton ? b : "");
        else if (e1.useFontAwesome) g.innerHTML = '<i style="color:' + f.fontAwesomeIconColor + "; font-size:" + e1.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + f.fontAwesomeClassName + " " + ("shadow" === e1.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? b : "");
        else {
            var u = "";
            a === l1.Success ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : a === l1.Failure ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : a === l1.Warning ? u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : a === l1.Info && (u = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + f.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), g.innerHTML = u + '<span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? b : "");
        }
        if ("left-bottom" === e1.position || "right-bottom" === e1.position) {
            var y = t1.document.getElementById(m1.wrapID);
            y.insertBefore(g, y.firstChild);
        } else t1.document.getElementById(m1.wrapID).appendChild(g);
        var k = t1.document.getElementById(g.id);
        if (k) {
            var h, C, z = function() {
                k.classList.add("nx-remove");
                var e = t1.document.getElementById(m1.overlayID);
                e && 0 >= d.childElementCount && e.classList.add("nx-remove"), clearTimeout(h);
            }, S = function() {
                if (k && null !== k.parentNode && k.parentNode.removeChild(k), 0 >= d.childElementCount && null !== d.parentNode) {
                    d.parentNode.removeChild(d);
                    var e = t1.document.getElementById(m1.overlayID);
                    e && null !== e.parentNode && e.parentNode.removeChild(e);
                }
                clearTimeout(C);
            };
            if (e1.closeButton && "function" != typeof o) {
                var L = t1.document.getElementById(g.id).querySelector("span.nx-close-button");
                L.addEventListener("click", function() {
                    z();
                    var t = setTimeout(function() {
                        S(), clearTimeout(t);
                    }, e1.cssAnimationDuration);
                });
            }
            if (("function" == typeof o || e1.clickToClose) && k.addEventListener("click", function() {
                "function" == typeof o && o(), z();
                var t = setTimeout(function() {
                    S(), clearTimeout(t);
                }, e1.cssAnimationDuration);
            }), !e1.closeButton && "function" != typeof o) {
                var W = function() {
                    h = setTimeout(function() {
                        z();
                    }, e1.timeout), C = setTimeout(function() {
                        S();
                    }, e1.timeout + e1.cssAnimationDuration);
                };
                W(), e1.pauseOnHover && (k.addEventListener("mouseenter", function() {
                    k.classList.add("nx-paused"), clearTimeout(h), clearTimeout(C);
                }), k.addEventListener("mouseleave", function() {
                    k.classList.remove("nx-paused"), W();
                }));
            }
        }
        if (e1.showOnlyTheLastOne && 0 < T1) for(var I, R = t1.document.querySelectorAll("[id^=" + e1.ID + "-]:not([id=" + e1.ID + "-" + T1 + "])"), A = 0; A < R.length; A++)I = R[A], null !== I.parentNode && I.parentNode.removeChild(I);
        e1 = v(!0, e1, c);
    }, E1 = function() {
        return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    }, j1 = function(e2, a3, n, o, r, l) {
        if (!w("body")) return !1;
        i1 || G.Report.init({});
        var m = {};
        if ("object" == typeof r && !Array.isArray(r) || "object" == typeof l && !Array.isArray(l)) {
            var f = {};
            "object" == typeof r ? f = r : "object" == typeof l && (f = l), m = v(!0, i1, {}), i1 = v(!0, i1, f);
        }
        var d = i1[e2.toLocaleLowerCase("en")];
        "string" != typeof a3 && (a3 = "Notiflix " + e2), "string" != typeof n && (e2 === c1.Success ? n = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e2 === c1.Failure ? n = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e2 === c1.Warning ? n = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e2 === c1.Info && (n = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof o && (o = "Okay"), i1.plainText && (a3 = N(a3), n = N(n), o = N(o)), i1.plainText || (a3.length > i1.titleMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', o = "Okay"), n.length > i1.messageMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', o = "Okay"), o.length > i1.buttonMaxLength && (a3 = "Possible HTML Tags Error", n = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', o = "Okay")), a3.length > i1.titleMaxLength && (a3 = a3.substring(0, i1.titleMaxLength) + "..."), n.length > i1.messageMaxLength && (n = n.substring(0, i1.messageMaxLength) + "..."), o.length > i1.buttonMaxLength && (o = o.substring(0, i1.buttonMaxLength) + "..."), i1.cssAnimation || (i1.cssAnimationDuration = 0);
        var x = t1.document.createElement("div");
        x.id = p1.ID, x.className = i1.className, x.style.zIndex = i1.zindex, x.style.borderRadius = i1.borderRadius, x.style.fontFamily = '"' + i1.fontFamily + '", ' + s1, i1.rtl && (x.setAttribute("dir", "rtl"), x.classList.add("nx-rtl-on")), x.style.display = "flex", x.style.flexWrap = "wrap", x.style.flexDirection = "column", x.style.alignItems = "center", x.style.justifyContent = "center";
        var g = "", b = !0 === i1.backOverlayClickToClose;
        i1.backOverlay && (g = '<div class="' + i1.className + "-overlay" + (i1.cssAnimation ? " nx-with-animation" : "") + (b ? " nx-report-click-to-close" : "") + '" style="background:' + (d.backOverlayColor || i1.backOverlayColor) + ";animation-duration:" + i1.cssAnimationDuration + 'ms;"></div>');
        var u = "";
        if (e2 === c1.Success ? u = C1(i1.svgSize, d.svgColor) : e2 === c1.Failure ? u = z1(i1.svgSize, d.svgColor) : e2 === c1.Warning ? u = S1(i1.svgSize, d.svgColor) : e2 === c1.Info && (u = L1(i1.svgSize, d.svgColor)), x.innerHTML = g + '<div class="' + i1.className + "-content" + (i1.cssAnimation ? " nx-with-animation " : "") + " nx-" + i1.cssAnimationStyle + '" style="width:' + i1.width + "; background:" + i1.backgroundColor + "; animation-duration:" + i1.cssAnimationDuration + 'ms;"><div style="width:' + i1.svgSize + "; height:" + i1.svgSize + ';" class="' + i1.className + '-icon">' + u + '</div><h5 class="' + i1.className + '-title" style="font-weight:500; font-size:' + i1.titleFontSize + "; color:" + d.titleColor + ';">' + a3 + '</h5><p class="' + i1.className + '-message" style="font-size:' + i1.messageFontSize + "; color:" + d.messageColor + ';">' + n + '</p><a id="NXReportButton" class="' + i1.className + '-button" style="font-weight:500; font-size:' + i1.buttonFontSize + "; background:" + d.buttonBackground + "; color:" + d.buttonColor + ';">' + o + "</a></div>", !t1.document.getElementById(x.id)) {
            t1.document.body.appendChild(x);
            var y = function() {
                var e = t1.document.getElementById(x.id);
                e.classList.add("nx-remove");
                var a = setTimeout(function() {
                    null !== e.parentNode && e.parentNode.removeChild(e), clearTimeout(a);
                }, i1.cssAnimationDuration);
            }, k = t1.document.getElementById("NXReportButton");
            if (k.addEventListener("click", function() {
                "function" == typeof r && r(), y();
            }), g && b) {
                var h = t1.document.querySelector(".nx-report-click-to-close");
                h.addEventListener("click", function() {
                    y();
                });
            }
        }
        i1 = v(!0, i1, m);
    }, O1 = function() {
        return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    }, H1 = function(e, i2, n2, o, r, l, m, c, p) {
        if (!w("body")) return !1;
        a1 || G.Confirm.init({});
        var x = v(!0, a1, {});
        "object" != typeof p || Array.isArray(p) || (a1 = v(!0, a1, p)), "string" != typeof i2 && (i2 = "Notiflix Confirm"), "string" != typeof n2 && (n2 = "Do you agree with me?"), "string" != typeof r && (r = "Yes"), "string" != typeof l && (l = "No"), "function" != typeof m && (m = void 0), "function" != typeof c && (c = void 0), a1.plainText && (i2 = N(i2), n2 = N(n2), r = N(r), l = N(l)), a1.plainText || (i2.length > a1.titleMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', r = "Okay", l = "..."), n2.length > a1.messageMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', r = "Okay", l = "..."), (r.length || l.length) > a1.buttonsMaxLength && (i2 = "Possible HTML Tags Error", n2 = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', r = "Okay", l = "...")), i2.length > a1.titleMaxLength && (i2 = i2.substring(0, a1.titleMaxLength) + "..."), n2.length > a1.messageMaxLength && (n2 = n2.substring(0, a1.messageMaxLength) + "..."), r.length > a1.buttonsMaxLength && (r = r.substring(0, a1.buttonsMaxLength) + "..."), l.length > a1.buttonsMaxLength && (l = l.substring(0, a1.buttonsMaxLength) + "..."), a1.cssAnimation || (a1.cssAnimationDuration = 0);
        var g = t1.document.createElement("div");
        g.id = d1.ID, g.className = a1.className + (a1.cssAnimation ? " nx-with-animation nx-" + a1.cssAnimationStyle : ""), g.style.zIndex = a1.zindex, g.style.padding = a1.distance, a1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on"));
        var b = "string" == typeof a1.position ? a1.position.trim() : "center";
        g.classList.add("nx-position-" + b), g.style.fontFamily = '"' + a1.fontFamily + '", ' + s1;
        var u = "";
        a1.backOverlay && (u = '<div class="' + a1.className + "-overlay" + (a1.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + a1.backOverlayColor + ";animation-duration:" + a1.cssAnimationDuration + 'ms;"></div>');
        var y = "";
        "function" == typeof m && (y = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + a1.cancelButtonColor + ";background:" + a1.cancelButtonBackground + ";font-size:" + a1.buttonsFontSize + ';">' + l + "</a>");
        var k = "", h = null, C = void 0;
        if (e === f1.Ask || e === f1.Prompt) {
            h = o || "";
            var z = e === f1.Ask ? Math.ceil(1.5 * h.length) : 200 < h.length ? Math.ceil(1.5 * h.length) : 250, S = e === f1.Prompt ? 'value="' + h + '"' : "";
            k = '<div><input id="NXConfirmValidationInput" type="text" ' + S + ' maxlength="' + z + '" style="font-size:' + a1.messageFontSize + ";border-radius: " + a1.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
        }
        if (g.innerHTML = u + '<div class="' + a1.className + '-content" style="width:' + a1.width + "; background:" + a1.backgroundColor + "; animation-duration:" + a1.cssAnimationDuration + "ms; border-radius: " + a1.borderRadius + ';"><div class="' + a1.className + '-head"><h5 style="color:' + a1.titleColor + ";font-size:" + a1.titleFontSize + ';">' + i2 + '</h5><div style="color:' + a1.messageColor + ";font-size:" + a1.messageFontSize + ';">' + n2 + k + '</div></div><div class="' + a1.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof m ? "" : " nx-full") + '" style="color:' + a1.okButtonColor + ";background:" + a1.okButtonBackground + ";font-size:" + a1.buttonsFontSize + ';">' + r + "</a>" + y + "</div></div>", !t1.document.getElementById(g.id)) {
            t1.document.body.appendChild(g);
            var L = t1.document.getElementById(g.id), W = t1.document.getElementById("NXConfirmButtonOk"), I = t1.document.getElementById("NXConfirmValidationInput");
            if (I && (I.focus(), I.setSelectionRange(0, (I.value || "").length), I.addEventListener("keyup", function(t) {
                var i = t.target.value;
                if (e === f1.Ask && i !== h) t.preventDefault(), I.classList.add("nx-validation-failure"), I.classList.remove("nx-validation-success");
                else {
                    e === f1.Ask && (I.classList.remove("nx-validation-failure"), I.classList.add("nx-validation-success"));
                    var a = "enter" === (t.key || "").toLocaleLowerCase("en") || 13 === t.keyCode;
                    a && W.dispatchEvent(new Event("click"));
                }
            })), W.addEventListener("click", function(t) {
                if (e === f1.Ask && h && I) {
                    var i = (I.value || "").toString();
                    if (i !== h) return I.focus(), I.classList.add("nx-validation-failure"), t.stopPropagation(), t.preventDefault(), t.returnValue = !1, t.cancelBubble = !0, !1;
                    I.classList.remove("nx-validation-failure");
                }
                "function" == typeof m && (e === f1.Prompt && I && (C = I.value || ""), m(C)), L.classList.add("nx-remove");
                var n = setTimeout(function() {
                    null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(n));
                }, a1.cssAnimationDuration);
            }), "function" == typeof m) {
                var R = t1.document.getElementById("NXConfirmButtonCancel");
                R.addEventListener("click", function() {
                    "function" == typeof c && (e === f1.Prompt && I && (C = I.value || ""), c(C)), L.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(t));
                    }, a1.cssAnimationDuration);
                });
            }
        }
        a1 = v(!0, a1, x);
    }, P1 = function() {
        return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
    }, U1 = function(e, i, a, o, r) {
        if (!w("body")) return !1;
        n1 || G.Loading.init({});
        var l = v(!0, n1, {});
        if ("object" == typeof i && !Array.isArray(i) || "object" == typeof a && !Array.isArray(a)) {
            var m = {};
            "object" == typeof i ? m = i : "object" == typeof a && (m = a), n1 = v(!0, n1, m);
        }
        var c = "";
        if ("string" == typeof i && 0 < i.length && (c = i), o) {
            c = c.length > n1.messageMaxLength ? N(c).toString().substring(0, n1.messageMaxLength) + "..." : N(c).toString();
            var p = "";
            0 < c.length && (p = '<p id="' + n1.messageID + '" class="nx-loading-message" style="color:' + n1.messageColor + ";font-size:" + n1.messageFontSize + ';">' + c + "</p>"), n1.cssAnimation || (n1.cssAnimationDuration = 0);
            var f = "";
            if (e === x1.Standard) f = W1(n1.svgSize, n1.svgColor);
            else if (e === x1.Hourglass) f = I1(n1.svgSize, n1.svgColor);
            else if (e === x1.Circle) f = R1(n1.svgSize, n1.svgColor);
            else if (e === x1.Arrows) f = A1(n1.svgSize, n1.svgColor);
            else if (e === x1.Dots) f = M(n1.svgSize, n1.svgColor);
            else if (e === x1.Pulse) f = B(n1.svgSize, n1.svgColor);
            else if (e === x1.Custom && null !== n1.customSvgCode && null === n1.customSvgUrl) f = n1.customSvgCode || "";
            else if (e === x1.Custom && null !== n1.customSvgUrl && null === n1.customSvgCode) f = '<img class="nx-custom-loading-icon" width="' + n1.svgSize + '" height="' + n1.svgSize + '" src="' + n1.customSvgUrl + '" alt="Notiflix">';
            else {
                if (e === x1.Custom && (null === n1.customSvgUrl || null === n1.customSvgCode)) return y1('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), !1;
                f = X1(n1.svgSize, "#f8f8f8", "#32c682");
            }
            var d = parseInt((n1.svgSize || "").replace(/[^0-9]/g, "")), b = t1.innerWidth, u = d >= b ? b - 40 + "px" : d + "px", k = '<div style="width:' + u + "; height:" + u + ';" class="' + n1.className + "-icon" + (0 < c.length ? " nx-with-message" : "") + '">' + f + "</div>", h = t1.document.createElement("div");
            if (h.id = g1.ID, h.className = n1.className + (n1.cssAnimation ? " nx-with-animation" : "") + (n1.clickToClose ? " nx-loading-click-to-close" : ""), h.style.zIndex = n1.zindex, h.style.background = n1.backgroundColor, h.style.animationDuration = n1.cssAnimationDuration + "ms", h.style.fontFamily = '"' + n1.fontFamily + '", ' + s1, h.style.display = "flex", h.style.flexWrap = "wrap", h.style.flexDirection = "column", h.style.alignItems = "center", h.style.justifyContent = "center", n1.rtl && (h.setAttribute("dir", "rtl"), h.classList.add("nx-rtl-on")), h.innerHTML = k + p, !t1.document.getElementById(h.id) && (t1.document.body.appendChild(h), n1.clickToClose)) {
                var C = t1.document.getElementById(h.id);
                C.addEventListener("click", function() {
                    h.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== h.parentNode && (h.parentNode.removeChild(h), clearTimeout(t));
                    }, n1.cssAnimationDuration);
                });
            }
        } else if (t1.document.getElementById(g1.ID)) var z = t1.document.getElementById(g1.ID), S = setTimeout(function() {
            z.classList.add("nx-remove");
            var t = setTimeout(function() {
                null !== z.parentNode && (z.parentNode.removeChild(z), clearTimeout(t));
            }, n1.cssAnimationDuration);
            clearTimeout(S);
        }, r);
        n1 = v(!0, n1, l);
    }, V1 = function(e) {
        "string" != typeof e && (e = "");
        var i = t1.document.getElementById(g1.ID);
        if (i) {
            if (0 < e.length) {
                e = e.length > n1.messageMaxLength ? N(e).substring(0, n1.messageMaxLength) + "..." : N(e);
                var a = i.getElementsByTagName("p")[0];
                if (a) a.innerHTML = e;
                else {
                    var o = t1.document.createElement("p");
                    o.id = n1.messageID, o.className = "nx-loading-message nx-loading-message-new", o.style.color = n1.messageColor, o.style.fontSize = n1.messageFontSize, o.innerHTML = e, i.appendChild(o);
                }
            } else y1("Where is the new message?");
        }
    }, q1 = function() {
        return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
    }, Q = 0, Y1 = function(e3, i3, a4, n3, r, l) {
        var m;
        if (Array.isArray(a4)) {
            if (1 > a4.length) return y1("Array of HTMLElements should contains at least one HTMLElement."), !1;
            m = a4;
        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, a4)) {
            if (1 > a4.length) return y1("NodeListOf<HTMLElement> should contains at least one HTMLElement."), !1;
            m = Array.prototype.slice.call(a4);
        } else {
            var c = "string" != typeof a4 || 1 > (a4 || "").length || 1 === (a4 || "").length && ("#" === (a4 || "")[0] || "." === (a4 || "")[0]);
            if (c) return y1("The selector parameter must be a string and matches a specified CSS selector(s)."), !1;
            var p = t1.document.querySelectorAll(a4);
            if (1 > p.length) return y1('You called the "Notiflix.Block..." function with "' + a4 + '" selector, but there is no such element(s) in the document.'), !1;
            m = p;
        }
        o1 || G.Block.init({});
        var f = v(!0, o1, {});
        if ("object" == typeof n3 && !Array.isArray(n3) || "object" == typeof r && !Array.isArray(r)) {
            var d = {};
            "object" == typeof n3 ? d = n3 : "object" == typeof r && (d = r), o1 = v(!0, o1, d);
        }
        var x = "";
        "string" == typeof n3 && 0 < n3.length && (x = n3), o1.cssAnimation || (o1.cssAnimationDuration = 0);
        var g = u1.className;
        "string" == typeof o1.className && (g = o1.className.trim());
        var h = "number" == typeof o1.querySelectorLimit ? o1.querySelectorLimit : 200, C = (m || []).length >= h ? h : m.length, z = "nx-block-temporary-position";
        if (e3) {
            for(var S, L = [
                "area",
                "base",
                "br",
                "col",
                "command",
                "embed",
                "hr",
                "img",
                "input",
                "keygen",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
                "html",
                "head",
                "title",
                "script",
                "style",
                "iframe"
            ], X = 0; X < C; X++)if (S = m[X], S) {
                if (-1 < L.indexOf(S.tagName.toLocaleLowerCase("en"))) break;
                var D = S.querySelectorAll("[id^=" + u1.ID + "]");
                if (1 > D.length) {
                    var T = "";
                    i3 && (i3 === b1.Hourglass ? T = I1(o1.svgSize, o1.svgColor) : i3 === b1.Circle ? T = R1(o1.svgSize, o1.svgColor) : i3 === b1.Arrows ? T = A1(o1.svgSize, o1.svgColor) : i3 === b1.Dots ? T = M(o1.svgSize, o1.svgColor) : i3 === b1.Pulse ? T = B(o1.svgSize, o1.svgColor) : T = W1(o1.svgSize, o1.svgColor));
                    var F = '<span class="' + g + '-icon" style="width:' + o1.svgSize + ";height:" + o1.svgSize + ';">' + T + "</span>", E = "";
                    0 < x.length && (x = x.length > o1.messageMaxLength ? N(x).substring(0, o1.messageMaxLength) + "..." : N(x), E = '<span style="font-size:' + o1.messageFontSize + ";color:" + o1.messageColor + ';" class="' + g + '-message">' + x + "</span>"), Q++;
                    var j = t1.document.createElement("div");
                    j.id = u1.ID + "-" + Q, j.className = g + (o1.cssAnimation ? " nx-with-animation" : ""), j.style.position = o1.position, j.style.zIndex = o1.zindex, j.style.background = o1.backgroundColor, j.style.animationDuration = o1.cssAnimationDuration + "ms", j.style.fontFamily = '"' + o1.fontFamily + '", ' + s1, j.style.display = "flex", j.style.flexWrap = "wrap", j.style.flexDirection = "column", j.style.alignItems = "center", j.style.justifyContent = "center", o1.rtl && (j.setAttribute("dir", "rtl"), j.classList.add("nx-rtl-on")), j.innerHTML = F + E;
                    var O = t1.getComputedStyle(S).getPropertyValue("position"), H = "string" == typeof O ? O.toLocaleLowerCase("en") : "relative", P = Math.round(1.25 * parseInt(o1.svgSize)) + 40, U = S.offsetHeight || 0, V = "";
                    P > U && (V = "min-height:" + P + "px;");
                    var q = "";
                    q = S.getAttribute("id") ? "#" + S.getAttribute("id") : S.classList[0] ? "." + S.classList[0] : (S.tagName || "").toLocaleLowerCase("en");
                    var Y = "", K = -1 >= [
                        "absolute",
                        "relative",
                        "fixed",
                        "sticky"
                    ].indexOf(H);
                    if (K || 0 < V.length) {
                        if (!w("head")) return !1;
                        K && (Y = "position:relative!important;");
                        var $ = '<style id="Style-' + u1.ID + "-" + Q + '">' + q + "." + z + "{" + Y + V + "}</style>", J = t1.document.createRange();
                        J.selectNode(t1.document.head);
                        var Z = J.createContextualFragment($);
                        t1.document.head.appendChild(Z), S.classList.add(z);
                    }
                    S.appendChild(j);
                }
            }
        } else var _ = function(e) {
            var i = setTimeout(function() {
                null !== e.parentNode && e.parentNode.removeChild(e);
                var a = e.getAttribute("id"), n = t1.document.getElementById("Style-" + a);
                n && null !== n.parentNode && n.parentNode.removeChild(n), clearTimeout(i);
            }, o1.cssAnimationDuration);
        }, tt = function(t) {
            if (t && 0 < t.length) for(var e, n = 0; n < t.length; n++)e = t[n], e && (e.classList.add("nx-remove"), _(e));
            else "string" == typeof a4 ? k1('"Notiflix.Block.remove();" function called with "' + a4 + '" selector, but this selector does not have a "Block" element to remove.') : k1('"Notiflix.Block.remove();" function called with "' + a4 + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
        }, et = function(t) {
            var e = setTimeout(function() {
                t.classList.remove(z), clearTimeout(e);
            }, o1.cssAnimationDuration + 300);
        }, it = setTimeout(function() {
            for(var t, e = 0; e < C; e++)t = m[e], t && (et(t), D = t.querySelectorAll("[id^=" + u1.ID + "]"), tt(D));
            clearTimeout(it);
        }, l);
        o1 = v(!0, o1, f);
    }, G = {
        Notify: {
            init: function(t) {
                e1 = v(!0, m1, t), h1(D1, "NotiflixNotifyInternalCSS");
            },
            merge: function(t) {
                return e1 ? void (e1 = v(!0, e1, t)) : (y1("You have to initialize the Notify module before call Merge function."), !1);
            },
            success: function(t, e, i) {
                F1(l1.Success, t, e, i);
            },
            failure: function(t, e, i) {
                F1(l1.Failure, t, e, i);
            },
            warning: function(t, e, i) {
                F1(l1.Warning, t, e, i);
            },
            info: function(t, e, i) {
                F1(l1.Info, t, e, i);
            }
        },
        Report: {
            init: function(t) {
                i1 = v(!0, p1, t), h1(E1, "NotiflixReportInternalCSS");
            },
            merge: function(t) {
                return i1 ? void (i1 = v(!0, i1, t)) : (y1("You have to initialize the Report module before call Merge function."), !1);
            },
            success: function(t, e, i, a, n) {
                j1(c1.Success, t, e, i, a, n);
            },
            failure: function(t, e, i, a, n) {
                j1(c1.Failure, t, e, i, a, n);
            },
            warning: function(t, e, i, a, n) {
                j1(c1.Warning, t, e, i, a, n);
            },
            info: function(t, e, i, a, n) {
                j1(c1.Info, t, e, i, a, n);
            }
        },
        Confirm: {
            init: function(t) {
                a1 = v(!0, d1, t), h1(O1, "NotiflixConfirmInternalCSS");
            },
            merge: function(t) {
                return a1 ? void (a1 = v(!0, a1, t)) : (y1("You have to initialize the Confirm module before call Merge function."), !1);
            },
            show: function(t, e, i, a, n, o, r) {
                H1(f1.Show, t, e, null, i, a, n, o, r);
            },
            ask: function(t, e, i, a, n, o, r, s) {
                H1(f1.Ask, t, e, i, a, n, o, r, s);
            },
            prompt: function(t, e, i, a, n, o, r, s) {
                H1(f1.Prompt, t, e, i, a, n, o, r, s);
            }
        },
        Loading: {
            init: function(t) {
                n1 = v(!0, g1, t), h1(P1, "NotiflixLoadingInternalCSS");
            },
            merge: function(t) {
                return n1 ? void (n1 = v(!0, n1, t)) : (y1("You have to initialize the Loading module before call Merge function."), !1);
            },
            standard: function(t, e) {
                U1(x1.Standard, t, e, !0, 0);
            },
            hourglass: function(t, e) {
                U1(x1.Hourglass, t, e, !0, 0);
            },
            circle: function(t, e) {
                U1(x1.Circle, t, e, !0, 0);
            },
            arrows: function(t, e) {
                U1(x1.Arrows, t, e, !0, 0);
            },
            dots: function(t, e) {
                U1(x1.Dots, t, e, !0, 0);
            },
            pulse: function(t, e) {
                U1(x1.Pulse, t, e, !0, 0);
            },
            custom: function(t, e) {
                U1(x1.Custom, t, e, !0, 0);
            },
            notiflix: function(t, e) {
                U1(x1.Notiflix, t, e, !0, 0);
            },
            remove: function(t) {
                "number" != typeof t && (t = 0), U1(null, null, null, !1, t);
            },
            change: function(t) {
                V1(t);
            }
        },
        Block: {
            init: function(t) {
                o1 = v(!0, u1, t), h1(q1, "NotiflixBlockInternalCSS");
            },
            merge: function(t) {
                return o1 ? void (o1 = v(!0, o1, t)) : (y1('You have to initialize the "Notiflix.Block" module before call Merge function.'), !1);
            },
            standard: function(t, e, i) {
                Y1(!0, b1.Standard, t, e, i);
            },
            hourglass: function(t, e, i) {
                Y1(!0, b1.Hourglass, t, e, i);
            },
            circle: function(t, e, i) {
                Y1(!0, b1.Circle, t, e, i);
            },
            arrows: function(t, e, i) {
                Y1(!0, b1.Arrows, t, e, i);
            },
            dots: function(t, e, i) {
                Y1(!0, b1.Dots, t, e, i);
            },
            pulse: function(t, e, i) {
                Y1(!0, b1.Pulse, t, e, i);
            },
            remove: function(t, e) {
                "number" != typeof e && (e = 0), Y1(!1, null, t, null, null, e);
            }
        }
    };
    return "object" == typeof t1.Notiflix ? v(!0, t1.Notiflix, {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    }) : {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    };
});

},{}],"eHqPO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _refs = require("./refs");
var _refsDefault = parcelHelpers.interopDefault(_refs);
(()=>{
    window.addEventListener("click", clickBackdropCloseModal);
    window.addEventListener("keydown", closeModalByClickEscape);
    (0, _refsDefault.default).openTeamModal.addEventListener("click", toggleModal);
    (0, _refsDefault.default).closeTeamModal.addEventListener("click", toggleModal);
    function clickBackdropCloseModal(e) {
        if (e.target === (0, _refsDefault.default).teamModal) {
            (0, _refsDefault.default).teamModal.classList.add("is-hidden");
            document.body.classList.toggle("stop-scrolling");
        }
    }
    function closeModalByClickEscape(e) {
        if (e.code === "Escape") {
            (0, _refsDefault.default).teamModal.classList.add("is-hidden");
            document.body.classList.toggle("stop-scrolling");
        }
    }
    function toggleModal() {
        (0, _refsDefault.default).teamModal.classList.toggle("is-hidden");
        document.body.classList.toggle("stop-scrolling");
    }
})();

},{"./refs":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const refs = {
    moviesGallery: document.querySelector(".moviesGallery"),
    pagination: document.querySelector("#pagination"),
    loader: document.querySelector(".loader"),
    footer: document.querySelector(".footer"),
    watchedBtn: document.querySelector(`#watched`),
    queueBtn: document.querySelector("#queue"),
    windowModal: document.querySelector("[window-modal]"),
    windowCloseButton: document.querySelector("[window-modal-close]"),
    darkerBackdrop: document.querySelector(".darker"),
    modal: document.querySelector("#modal"),
    modalIframe: document.querySelector("iframe"),
    trailerBtn: document.querySelector(`#trailer`),
    addModalCard: document.querySelector(".modal-card-to-add"),
    openTeamModal: document.querySelector("[team-modal-open]"),
    closeTeamModal: document.querySelector("[team-modal-close]"),
    teamModal: document.querySelector("[team-modal]")
};
exports.default = refs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aGLN1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMovieCard", ()=>renderMovieCard);
var _apiJs = require("./api.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
var _genresJs = require("./genres.js");
var _refsJs = require("./refs.js");
var _refsJsDefault = parcelHelpers.interopDefault(_refsJs);
var _noImgJpg = require("../images/moviesGallery/noImg.jpg");
var _noImgJpgDefault = parcelHelpers.interopDefault(_noImgJpg);
(0, _apiJsDefault.default).getTrendingMovies().then((data)=>{
    renderMovieCard(data.results);
}).catch((error)=>{
    console.log(error);
});
function renderMovieCard(movies) {
    const markup = movies.map(({ title , name , release_date , first_air_date , poster_path , genre_ids ,  })=>{
        const moviePoster = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : (0, _noImgJpgDefault.default);
        const movieDate = release_date ? release_date.slice(0, 4) : first_air_date ? first_air_date.slice(0, 4) : "Unknown year";
        const movieName = title ? title : name;
        // Wyszukiwanie gatunku filmowego po id:
        let matchedGenres = genre_ids.map((id)=>{
            const genre = (0, _genresJs.movieGenres).find((g)=>g.id === id);
            return genre ? [
                `${genre.name}`
            ] : "";
        }).filter(Boolean);
        // Wyświetlane są tylko dwa pierwsze gatunki filmowe
        matchedGenres = matchedGenres.length > 0 ? matchedGenres.length > 2 ? matchedGenres.slice(0, 2).join(", ") + " (...)" : matchedGenres.join(", ") : "Unknown genre";
        return `<li class="movie-container__card">
            <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
            <div class="movieInfo">
               <p class="movieInfo__item movieInfo--title">${movieName}</p>
               <p class="movieInfo__item">
                     ${matchedGenres} | ${movieDate}
              </p>
            </div>
          </li>`;
    }).join("");
    (0, _refsJsDefault.default).moviesGallery.insertAdjacentHTML("beforeend", markup);
}

},{"./api.js":"9u7qN","./genres.js":"2f7DF","./refs.js":"2WoF2","../images/moviesGallery/noImg.jpg":"abGVB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9u7qN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "82c211a0cb754dbef32a794b59444890";
const API_KEY_IMG = `https://image.tmdb.org/t/p/original`;
const getTrendingMovies = async (page = 1)=>{
    try {
        const resp = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`);
        if (!resp.ok) throw new Error(resp.status);
        return await resp.json();
    } catch (err) {
        console.error(err);
    }
};
const getMoviesByQuery = async (query, page = 1)=>{
    try {
        const resp = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
        if (!resp.ok) throw new Error(resp.status);
        return await resp.json();
    } catch (err) {
        console.error(err);
    }
};
const getMovieDetails = async (id)=>{
    try {
        const resp = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
        if (!resp.ok) throw new Error(resp.status);
        return await resp.json();
    } catch (err) {
        console.error(err);
    }
};
const getMovieTrailer = async (id)=>{
    try {
        const resp = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
        if (!resp.ok) throw new Error(resp.status);
        return await resp.json();
    } catch (err) {
        console.error(err);
    }
};
const Api = {
    getTrendingMovies,
    getMoviesByQuery,
    getMovieDetails,
    getMovieTrailer,
    API_KEY_IMG
};
exports.default = Api;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2f7DF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "movieGenres", ()=>movieGenres);
const movieGenres = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abGVB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("g05j8") + "noImg.c4a519ba.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9j1Dd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _api = require("./api");
var _apiDefault = parcelHelpers.interopDefault(_api);
var _refs = require("./refs");
var _refsDefault = parcelHelpers.interopDefault(_refs);
var _renderMovieCardsJs = require("./renderMovieCards.js");
var _loader = require("./loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _scrollTop = require("./scrollTop");
var _scrollTopDefault = parcelHelpers.interopDefault(_scrollTop);
var _tuiPagination = require("tui-pagination");
var _tuiPaginationDefault = parcelHelpers.interopDefault(_tuiPagination);
var _tuiPaginationCss = require("tui-pagination/dist/tui-pagination.css");
const setPagination = (totalItems)=>{
    const options = {
        totalItems,
        itemsPerPage: 20,
        visiblePages: 5,
        centerAlign: true
    };
    const pagination = new (0, _tuiPaginationDefault.default)((0, _refsDefault.default).pagination, options);
    return pagination;
};
const getPagination = async ()=>{
    try {
        const data1 = await (0, _apiDefault.default).getTrendingMovies();
        const pagination = setPagination(data1.total_pages);
        pagination.on("beforeMove", ({ page  })=>{
            (0, _refsDefault.default).moviesGallery.innerHTML = "";
            (0, _loaderDefault.default).show((0, _refsDefault.default).loader);
            (0, _refsDefault.default).pagination.style.display = "none";
            (0, _refsDefault.default).footer.style.display = "none";
            (0, _apiDefault.default).getTrendingMovies(page).then((data)=>{
                setTimeout(()=>{
                    (0, _loaderDefault.default).hide((0, _refsDefault.default).loader);
                    (0, _refsDefault.default).pagination.style.display = "block";
                    (0, _refsDefault.default).footer.style.display = "block";
                    (0, _renderMovieCardsJs.renderMovieCard)(data.results);
                    (0, _scrollTopDefault.default)();
                }, 500);
            }).catch(console.error);
        });
    } catch (err) {
        console.error(err.stack);
    }
};
exports.default = getPagination;

},{"./api":"9u7qN","./refs":"2WoF2","./renderMovieCards.js":"aGLN1","./loader":"aAovl","./scrollTop":"iQ4CA","tui-pagination":"b80gR","tui-pagination/dist/tui-pagination.css":"82Il4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAovl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const show = (loader)=>{
    loader.classList.remove("visually-hidden");
};
const hide = (loader)=>{
    loader.classList.add("visually-hidden");
};
const Loader = {
    show,
    hide
};
exports.default = Loader;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQ4CA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const scrollTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
};
exports.default = scrollTop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b80gR":[function(require,module,exports) {
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(window, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key1 in value)__webpack_require__.d(ns, key1, (function(key) {
                return value[key];
            }).bind(null, key1));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function getDefault() {
                return module["default"];
            } : /******/ function getModuleExports() {
                return module;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "dist";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 10);
    /******/ }([
        /* 0 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module object
 */ /**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */ function extend(target, objects) {
                var hasOwnProp = Object.prototype.hasOwnProperty;
                var source, prop, i, len;
                for(i = 1, len = arguments.length; i < len; i += 1){
                    source = arguments[i];
                    for(prop in source)if (hasOwnProp.call(source, prop)) target[prop] = source[prop];
                }
                return target;
            }
            module.exports = extend;
        /***/ },
        /* 1 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */ function isUndefined(obj) {
                return obj === undefined; // eslint-disable-line no-undefined
            }
            module.exports = isUndefined;
        /***/ },
        /* 2 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */ function isArray(obj) {
                return obj instanceof Array;
            }
            module.exports = isArray;
        /***/ },
        /* 3 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var forEachArray = __webpack_require__(17);
            var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module collection
 */ /**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */ function forEach(obj, iteratee, context) {
                if (isArray(obj)) forEachArray(obj, iteratee, context);
                else forEachOwnProperties(obj, iteratee, context);
            }
            module.exports = forEach;
        /***/ },
        /* 4 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */ function isString(obj) {
                return typeof obj === "string" || obj instanceof String;
            }
            module.exports = isString;
        /***/ },
        /* 5 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */ function isFunction(obj) {
                return obj instanceof Function;
            }
            module.exports = isFunction;
        /***/ },
        /* 6 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachOwnProperties(obj, iteratee, context) {
                var key;
                context = context || null;
                for(key in obj)if (obj.hasOwnProperty(key)) {
                    if (iteratee.call(context, obj[key], key, obj) === false) break;
                }
            }
            module.exports = forEachOwnProperties;
        /***/ },
        /* 7 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inherit = __webpack_require__(18);
            var extend = __webpack_require__(0);
            /**
 * @module defineClass
 */ /**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */ function defineClass(parent, props) {
                var obj;
                if (!props) {
                    props = parent;
                    parent = null;
                }
                obj = props.init || function() {};
                if (parent) inherit(obj, parent);
                if (props.hasOwnProperty("static")) {
                    extend(obj, props["static"]);
                    delete props["static"];
                }
                extend(obj.prototype, props);
                return obj;
            }
            module.exports = defineClass;
        /***/ },
        /* 8 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /* eslint-disable complexity */ /**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            /**
 * @module array
 */ /**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */ function inArray(searchElement, array, startIndex) {
                var i;
                var length;
                startIndex = startIndex || 0;
                if (!isArray(array)) return -1;
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(array, searchElement, startIndex);
                length = array.length;
                for(i = startIndex; startIndex >= 0 && i < length; i += 1){
                    if (array[i] === searchElement) return i;
                }
                return -1;
            }
            module.exports = inArray;
        /***/ },
        /* 9 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var template = __webpack_require__(29);
            var sendHostname = __webpack_require__(30);
            var isFunction = __webpack_require__(5);
            var util = {
                /**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */ capitalizeFirstLetter: function(str) {
                    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
                },
                /**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */ isContained: function(find, parent) {
                    if (!parent) return false;
                    return find === parent ? true : parent.contains(find);
                },
                /**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */ createElementByTemplate: function(tmpl, context) {
                    var parent = document.createElement("div");
                    var html = isFunction(tmpl) ? tmpl(context) : template(tmpl, context);
                    parent.innerHTML = html;
                    return parent.firstChild;
                },
                /**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */ bind: function(fn, obj) {
                    var slice = Array.prototype.slice;
                    var args;
                    if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
                    args = slice.call(arguments, 2);
                    return function() {
                        return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
                    };
                },
                /**
   * Send hostname for GA
   * @ignore
   */ sendHostName: function() {
                    sendHostname("pagination", "UA-129987462-1");
                }
            };
            module.exports = util;
        /***/ },
        /* 10 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */ __webpack_require__(11);
            module.exports = __webpack_require__(12);
        /***/ },
        /* 11 */ /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/ },
        /* 12 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var CustomEvents = __webpack_require__(13);
            var defineClass = __webpack_require__(7);
            var extend = __webpack_require__(0);
            var isUndefined = __webpack_require__(1);
            var View = __webpack_require__(20);
            var util = __webpack_require__(9);
            var defaultOption = {
                totalItems: 10,
                itemsPerPage: 10,
                visiblePages: 10,
                page: 1,
                centerAlign: false,
                firstItemClassName: "tui-first-child",
                lastItemClassName: "tui-last-child",
                usageStatistics: true
            };
            /**
 * Pagination class
 * @class Pagination
 * @param {string|HTMLElement|jQueryObject} container - Container element or selector.
 * In case of a string, it is considered as an id selector and find the element by id.
 * If there is no element, it is considered as a selector and find the element by querySelector().
 * Passing jQueryObject and considering an id selector at first will be deprecated in v4.0.0.
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element. Refer to {@link https://github.com/nhn/tui.pagination/blob/master/docs/getting-started.md#how-to-use-template Getting Started: How to use template}.
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 *     @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
 *         If you do not want to send the hostname, this option set to false.
 * @example
 * // ES6
 * import Pagination from 'tui-pagination';
 *
 * // CommonJS
 * const Pagination = require('tui-pagination');
 *
 * // Browser
 * const Pagination = tui.Pagination;
 *
 * const container = document.getElementById('pagination');
 * const options = { // below default value of options
 *      totalItems: 10,
 *      itemsPerPage: 10,
 *      visiblePages: 10,
 *      page: 1,
 *      centerAlign: false,
 *      firstItemClassName: 'tui-first-child',
 *      lastItemClassName: 'tui-last-child',
 *      template: {
 *          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
 *          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
 *          moveButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</a>',
 *          disabledMoveButton:
 *              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</span>',
 *          moreButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
 *                  '<span class="tui-ico-ellip">...</span>' +
 *              '</a>'
 *      }
 * };
 * const pagination = new Pagination(container, options);
 */ var Pagination = defineClass(/** @lends Pagination.prototype */ {
                init: function(container, options) {
                    /**
       * Option object
       * @type {object}
       * @private
       */ this._options = extend({}, defaultOption, options);
                    /**
       * Current page number
       * @type {number}
       * @private
       */ this._currentPage = 0;
                    /**
       * View instance
       * @type {View}
       * @private
       */ this._view = new View(container, this._options, util.bind(this._onClickHandler, this));
                    this._paginate();
                    if (this._options.usageStatistics) util.sendHostName();
                },
                /**
     * Set current page
     * @param {number} page - Current page
     * @private
     */ _setCurrentPage: function(page) {
                    this._currentPage = page || this._options.page;
                },
                /**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */ _getLastPage: function() {
                    var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);
                    return !lastPage ? 1 : lastPage;
                },
                /**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */ _getPageIndex: function(pageNumber) {
                    var left, pageIndex;
                    if (this._options.centerAlign) {
                        left = Math.floor(this._options.visiblePages / 2);
                        pageIndex = pageNumber - left;
                        pageIndex = Math.max(pageIndex, 1);
                        pageIndex = Math.min(pageIndex, this._getLastPage() - this._options.visiblePages + 1);
                        return pageIndex;
                    }
                    return Math.ceil(pageNumber / this._options.visiblePages);
                },
                /**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */ _getRelativePage: function(moveType) {
                    var isPrevMove = moveType === "prev";
                    var currentPage = this.getCurrentPage();
                    return isPrevMove ? currentPage - 1 : currentPage + 1;
                },
                /**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */ _getMorePageIndex: function(moveType) {
                    var currentPageIndex = this._getPageIndex(this.getCurrentPage());
                    var pageCount = this._options.visiblePages;
                    var isPrevMove = moveType === "prev";
                    var pageIndex;
                    if (this._options.centerAlign) pageIndex = isPrevMove ? currentPageIndex - 1 : currentPageIndex + pageCount;
                    else pageIndex = isPrevMove ? (currentPageIndex - 1) * pageCount : currentPageIndex * pageCount + 1;
                    return pageIndex;
                },
                /* eslint-enable complexity */ /**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */ _convertToValidPage: function(page) {
                    var lastPageNumber = this._getLastPage();
                    page = Math.max(page, 1);
                    page = Math.min(page, lastPageNumber);
                    return page;
                },
                /**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */ _paginate: function(page) {
                    var viewData = this._makeViewData(page || this._options.page);
                    this._setCurrentPage(page);
                    this._view.update(viewData);
                },
                /**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */ _makeViewData: function(page) {
                    var viewData = {};
                    var lastPage = this._getLastPage();
                    var currentPageIndex = this._getPageIndex(page);
                    var lastPageListIndex = this._getPageIndex(lastPage);
                    var edges = this._getEdge(page);
                    viewData.leftPageNumber = edges.left;
                    viewData.rightPageNumber = edges.right;
                    viewData.prevMore = currentPageIndex > 1;
                    viewData.nextMore = currentPageIndex < lastPageListIndex;
                    viewData.page = page;
                    viewData.currentPageIndex = page;
                    viewData.lastPage = lastPage;
                    viewData.lastPageListIndex = lastPage;
                    return viewData;
                },
                /**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */ _getEdge: function(page) {
                    var leftPageNumber, rightPageNumber, left;
                    var lastPage = this._getLastPage();
                    var visiblePages = this._options.visiblePages;
                    var currentPageIndex = this._getPageIndex(page);
                    if (this._options.centerAlign) {
                        left = Math.floor(visiblePages / 2);
                        leftPageNumber = Math.max(page - left, 1);
                        rightPageNumber = leftPageNumber + visiblePages - 1;
                        if (rightPageNumber > lastPage) {
                            leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
                            rightPageNumber = lastPage;
                        }
                    } else {
                        leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
                        rightPageNumber = currentPageIndex * visiblePages;
                        rightPageNumber = Math.min(rightPageNumber, lastPage);
                    }
                    return {
                        left: leftPageNumber,
                        right: rightPageNumber
                    };
                },
                /**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     */ /* eslint-disable complexity */ _onClickHandler: function(buttonType, page) {
                    switch(buttonType){
                        case "first":
                            page = 1;
                            break;
                        case "prev":
                            page = this._getRelativePage("prev");
                            break;
                        case "next":
                            page = this._getRelativePage("next");
                            break;
                        case "prevMore":
                            page = this._getMorePageIndex("prev");
                            break;
                        case "nextMore":
                            page = this._getMorePageIndex("next");
                            break;
                        case "last":
                            page = this._getLastPage();
                            break;
                        default:
                            if (!page) return;
                    }
                    this.movePageTo(page);
                },
                /* eslint-enable complexity */ /**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */ reset: function(totalItems) {
                    if (isUndefined(totalItems)) totalItems = this._options.totalItems;
                    this._options.totalItems = totalItems;
                    this._paginate(1);
                },
                /**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */ movePageTo: function(targetPage) {
                    targetPage = this._convertToValidPage(targetPage);
                    /**
       * @event Pagination#beforeMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('beforeMove', (event) => {
       *     const currentPage = event.page;
       *
       *     if (currentPage === 10) {
       *         return false;
       *         // return true;
       *     }
       * });
       */ if (!this.invoke("beforeMove", {
                        page: targetPage
                    })) return;
                    this._paginate(targetPage);
                    /**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */ this.fire("afterMove", {
                        page: targetPage
                    });
                },
                /**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */ setTotalItems: function(itemCount) {
                    this._options.totalItems = itemCount;
                },
                /**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */ setItemsPerPage: function(itemCount) {
                    this._options.itemsPerPage = itemCount;
                },
                /**
     * Get current page
     * @returns {number} Current page
     */ getCurrentPage: function() {
                    return this._currentPage || this._options.page;
                }
            });
            CustomEvents.mixin(Pagination);
            module.exports = Pagination;
        /***/ },
        /* 13 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var extend = __webpack_require__(0);
            var isExisty = __webpack_require__(14);
            var isString = __webpack_require__(4);
            var isObject = __webpack_require__(16);
            var isArray = __webpack_require__(2);
            var isFunction = __webpack_require__(5);
            var forEach = __webpack_require__(3);
            var R_EVENTNAME_SPLIT = /\s+/g;
            /**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */ function CustomEvents() {
                /**
     * @type {HandlerItem[]}
     */ this.events = null;
                /**
     * only for checking specific context event was binded
     * @type {object[]}
     */ this.contexts = null;
            }
            /**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */ CustomEvents.mixin = function(func) {
                extend(func.prototype, CustomEvents.prototype);
            };
            /**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */ CustomEvents.prototype._getHandlerItem = function(handler, context) {
                var item = {
                    handler: handler
                };
                if (context) item.context = context;
                return item;
            };
            /**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */ CustomEvents.prototype._safeEvent = function(eventName) {
                var events = this.events;
                var byName;
                if (!events) events = this.events = {};
                if (eventName) {
                    byName = events[eventName];
                    if (!byName) {
                        byName = [];
                        events[eventName] = byName;
                    }
                    events = byName;
                }
                return events;
            };
            /**
 * Get context array safely
 * @returns {array} context array
 * @private
 */ CustomEvents.prototype._safeContext = function() {
                var context = this.contexts;
                if (!context) context = this.contexts = [];
                return context;
            };
            /**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */ CustomEvents.prototype._indexOfContext = function(ctx) {
                var context = this._safeContext();
                var index = 0;
                while(context[index]){
                    if (ctx === context[index][0]) return index;
                    index += 1;
                }
                return -1;
            };
            /**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */ CustomEvents.prototype._memorizeContext = function(ctx) {
                var context, index;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                index = this._indexOfContext(ctx);
                if (index > -1) context[index][1] += 1;
                else context.push([
                    ctx,
                    1
                ]);
            };
            /**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */ CustomEvents.prototype._forgetContext = function(ctx) {
                var context, contextIndex;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                contextIndex = this._indexOfContext(ctx);
                if (contextIndex > -1) {
                    context[contextIndex][1] -= 1;
                    if (context[contextIndex][1] <= 0) context.splice(contextIndex, 1);
                }
            };
            /**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */ CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
                var events = this._safeEvent(eventName);
                this._memorizeContext(context);
                events.push(this._getHandlerItem(handler, context));
            };
            /**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */ CustomEvents.prototype.on = function(eventName, handler, context) {
                var self = this;
                if (isString(eventName)) {
                    // [syntax 1, 2]
                    eventName = eventName.split(R_EVENTNAME_SPLIT);
                    forEach(eventName, function(name) {
                        self._bindEvent(name, handler, context);
                    });
                } else if (isObject(eventName)) {
                    // [syntax 3, 4]
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.on(name, func, context);
                    });
                }
            };
            /**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */ CustomEvents.prototype.once = function(eventName, handler, context) {
                var self = this;
                if (isObject(eventName)) {
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.once(name, func, context);
                    });
                    return;
                }
                function onceHandler() {
                    handler.apply(context, arguments);
                    self.off(eventName, onceHandler, context);
                }
                this.on(eventName, onceHandler, context);
            };
            /**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */ CustomEvents.prototype._spliceMatches = function(arr, predicate) {
                var i = 0;
                var len;
                if (!isArray(arr)) return;
                for(len = arr.length; i < len; i += 1)if (predicate(arr[i]) === true) {
                    arr.splice(i, 1);
                    len -= 1;
                    i -= 1;
                }
            };
            /**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */ CustomEvents.prototype._matchHandler = function(handler) {
                var self = this;
                return function(item) {
                    var needRemove = handler === item.handler;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */ CustomEvents.prototype._matchContext = function(context) {
                var self = this;
                return function(item) {
                    var needRemove = context === item.context;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */ CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
                var self = this;
                return function(item) {
                    var matchHandler = handler === item.handler;
                    var matchContext = context === item.context;
                    var needRemove = matchHandler && matchContext;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */ CustomEvents.prototype._offByEventName = function(eventName, handler) {
                var self = this;
                var andByHandler = isFunction(handler);
                var matchHandler = self._matchHandler(handler);
                eventName = eventName.split(R_EVENTNAME_SPLIT);
                forEach(eventName, function(name) {
                    var handlerItems = self._safeEvent(name);
                    if (andByHandler) self._spliceMatches(handlerItems, matchHandler);
                    else {
                        forEach(handlerItems, function(item) {
                            self._forgetContext(item.context);
                        });
                        self.events[name] = [];
                    }
                });
            };
            /**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByHandler = function(handler) {
                var self = this;
                var matchHandler = this._matchHandler(handler);
                forEach(this._safeEvent(), function(handlerItems) {
                    self._spliceMatches(handlerItems, matchHandler);
                });
            };
            /**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByObject = function(obj, handler) {
                var self = this;
                var matchFunc;
                if (this._indexOfContext(obj) < 0) forEach(obj, function(func, name) {
                    self.off(name, func);
                });
                else if (isString(handler)) {
                    matchFunc = this._matchContext(obj);
                    self._spliceMatches(this._safeEvent(handler), matchFunc);
                } else if (isFunction(handler)) {
                    matchFunc = this._matchHandlerAndContext(handler, obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                } else {
                    matchFunc = this._matchContext(obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                }
            };
            /**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */ CustomEvents.prototype.off = function(eventName, handler) {
                if (isString(eventName)) // [syntax 1, 2]
                this._offByEventName(eventName, handler);
                else if (!arguments.length) {
                    // [syntax 8]
                    this.events = {};
                    this.contexts = [];
                } else if (isFunction(eventName)) // [syntax 3]
                this._offByHandler(eventName);
                else if (isObject(eventName)) // [syntax 4, 5, 6]
                this._offByObject(eventName, handler);
            };
            /**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */ CustomEvents.prototype.fire = function(eventName) {
                this.invoke.apply(this, arguments);
            };
            /**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */ CustomEvents.prototype.invoke = function(eventName) {
                var events, args, index, item;
                if (!this.hasListener(eventName)) return true;
                events = this._safeEvent(eventName);
                args = Array.prototype.slice.call(arguments, 1);
                index = 0;
                while(events[index]){
                    item = events[index];
                    if (item.handler.apply(item.context, args) === false) return false;
                    index += 1;
                }
                return true;
            };
            /**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */ CustomEvents.prototype.hasListener = function(eventName) {
                return this.getListenerLength(eventName) > 0;
            };
            /**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */ CustomEvents.prototype.getListenerLength = function(eventName) {
                var events = this._safeEvent(eventName);
                return events.length;
            };
            module.exports = CustomEvents;
        /***/ },
        /* 14 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var isNull = __webpack_require__(15);
            /**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/ function isExisty(param) {
                return !isUndefined(param) && !isNull(param);
            }
            module.exports = isExisty;
        /***/ },
        /* 15 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */ function isNull(obj) {
                return obj === null;
            }
            module.exports = isNull;
        /***/ },
        /* 16 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */ function isObject(obj) {
                return obj === Object(obj);
            }
            module.exports = isObject;
        /***/ },
        /* 17 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachArray(arr, iteratee, context) {
                var index = 0;
                var len = arr.length;
                context = context || null;
                for(; index < len; index += 1){
                    if (iteratee.call(context, arr[index], index, arr) === false) break;
                }
            }
            module.exports = forEachArray;
        /***/ },
        /* 18 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var createObject = __webpack_require__(19);
            /**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */ function inherit(subType, superType) {
                var prototype = createObject(superType.prototype);
                prototype.constructor = subType;
                subType.prototype = prototype;
            }
            module.exports = inherit;
        /***/ },
        /* 19 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module inheritance
 */ /**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */ function createObject(obj) {
                function F() {} // eslint-disable-line require-jsdoc
                F.prototype = obj;
                return new F();
            }
            module.exports = createObject;
        /***/ },
        /* 20 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var forEach = __webpack_require__(3);
            var defineClass = __webpack_require__(7);
            var getTarget = __webpack_require__(21);
            var on = __webpack_require__(22);
            var preventDefault = __webpack_require__(24);
            var addClass = __webpack_require__(25);
            var extend = __webpack_require__(0);
            var isString = __webpack_require__(4);
            var isHTMLNode = __webpack_require__(28);
            var util = __webpack_require__(9);
            var defaultTemplate = {
                page: '<a href="#" class="tui-page-btn">{{page}}</a>',
                currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
                moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
                disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
                moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
            };
            var moveButtons = [
                "first",
                "prev",
                "next",
                "last"
            ];
            var moreButtons = [
                "prev",
                "next"
            ];
            var INVALID_CONTAINER_ELEMENT = "The container element is invalid.";
            /**
 * Pagination view class
 * @class View
 * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 * @param {function} handler - Event handler
 * @ignore
 */ var View = defineClass(/** @lends View.prototype */ {
                init: function(container, options, handler) {
                    /**
       * Root element
       * @type {HTMLElement}
       * @private
       */ this._containerElement = null;
                    /**
       * First item's class name
       * @type {string}
       * @private
       */ this._firstItemClassName = options.firstItemClassName;
                    /**
       * Last item's class name
       * @type {string}
       * @private
       */ this._lastItemClassName = options.lastItemClassName;
                    /**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */ this._template = extend({}, defaultTemplate, options.template);
                    /**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */ this._buttons = {};
                    /**
       * Enabled page elements list
       * @type {array}
       * @private
       */ this._enabledPageElements = [];
                    this._setRootElement(container);
                    this._setMoveButtons();
                    this._setDisabledMoveButtons();
                    this._setMoreButtons();
                    this._attachClickEvent(handler);
                },
                /* eslint-enable complexity */ /**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */ _setRootElement: function(container) {
                    if (isString(container)) container = document.getElementById(container) || document.querySelector(container);
                    else if (container.jquery) container = container[0];
                    if (!isHTMLNode(container)) throw new Error(INVALID_CONTAINER_ELEMENT);
                    this._containerElement = container;
                },
                /**
     * Assign move buttons to option
     * @private
     */ _setMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        this._buttons[type] = util.createElementByTemplate(this._template.moveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign disabled move buttons to option
     * @private
     */ _setDisabledMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        var key = "disabled" + util.capitalizeFirstLetter(type);
                        this._buttons[key] = util.createElementByTemplate(this._template.disabledMoveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign more buttons to option
     * @private
     */ _setMoreButtons: function() {
                    forEach(moreButtons, function(type) {
                        var key = type + "More";
                        this._buttons[key] = util.createElementByTemplate(this._template.moreButton, {
                            type: type
                        });
                    }, this);
                },
                /* eslint-enable camelcase */ /**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */ _getContainerElement: function() {
                    return this._containerElement;
                },
                /**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendFirstButton: function(viewData) {
                    var button;
                    if (viewData.page > 1) button = this._buttons.first;
                    else button = this._buttons.disabledFirst;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex > 1) button = this._buttons.prev;
                    else button = this._buttons.disabledPrev;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex < viewData.lastPageListIndex) button = this._buttons.next;
                    else button = this._buttons.disabledNext;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendLastButton: function(viewData) {
                    var button;
                    if (viewData.page < viewData.lastPage) button = this._buttons.last;
                    else button = this._buttons.disabledLast;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevMoreButton: function(viewData) {
                    var button;
                    if (viewData.prevMore) {
                        button = this._buttons.prevMore;
                        addClass(button, this._firstItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextMoreButton: function(viewData) {
                    var button;
                    if (viewData.nextMore) {
                        button = this._buttons.nextMore;
                        addClass(button, this._lastItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ // eslint-disable-next-line complexity
                _appendPages: function(viewData) {
                    var firstPage = viewData.leftPageNumber;
                    var lastPage = viewData.rightPageNumber;
                    var pageItem, i;
                    for(i = firstPage; i <= lastPage; i += 1){
                        if (i === viewData.page) pageItem = util.createElementByTemplate(this._template.currentPage, {
                            page: i
                        });
                        else {
                            pageItem = util.createElementByTemplate(this._template.page, {
                                page: i
                            });
                            this._enabledPageElements.push(pageItem);
                        }
                        if (i === firstPage && !viewData.prevMore) addClass(pageItem, this._firstItemClassName);
                        if (i === lastPage && !viewData.nextMore) addClass(pageItem, this._lastItemClassName);
                        this._getContainerElement().appendChild(pageItem);
                    }
                },
                /**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */ _attachClickEvent: function(callback) {
                    var rootElement = this._getContainerElement();
                    on(rootElement, "click", function(ev) {
                        var target = getTarget(ev);
                        var page, buttonType;
                        preventDefault(ev);
                        buttonType = this._getButtonType(target);
                        if (!buttonType) page = this._getPageNumber(target);
                        callback(buttonType, page);
                    }, this);
                },
                /**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */ _getButtonType: function(targetElement) {
                    var buttonType;
                    var buttons = this._buttons;
                    forEach(buttons, function(button, type) {
                        if (util.isContained(targetElement, button)) {
                            buttonType = type;
                            return false;
                        }
                        return true;
                    }, this);
                    return buttonType;
                },
                /* eslint-enable no-lonely-if */ /**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */ _getPageNumber: function(targetElement) {
                    var targetPage = this._findPageElement(targetElement);
                    var page;
                    if (targetPage) page = parseInt(targetPage.innerText, 10);
                    return page;
                },
                /**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */ _findPageElement: function(targetElement) {
                    var i = 0;
                    var length = this._enabledPageElements.length;
                    var pickedItem;
                    for(; i < length; i += 1){
                        pickedItem = this._enabledPageElements[i];
                        if (util.isContained(targetElement, pickedItem)) return pickedItem;
                    }
                    return null;
                },
                /**
     * Reset container element
     * @private
     */ _empty: function() {
                    this._enabledPageElements = [];
                    forEach(this._buttons, function(buttonElement, type) {
                        this._buttons[type] = buttonElement.cloneNode(true);
                    }, this);
                    this._getContainerElement().innerHTML = "";
                },
                /**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */ update: function(viewData) {
                    this._empty();
                    this._appendFirstButton(viewData);
                    this._appendPrevButton(viewData);
                    this._appendPrevMoreButton(viewData);
                    this._appendPages(viewData);
                    this._appendNextMoreButton(viewData);
                    this._appendNextButton(viewData);
                    this._appendLastButton(viewData);
                }
            });
            module.exports = View;
        /***/ },
        /* 21 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */ function getTarget(e) {
                return e.target || e.srcElement;
            }
            module.exports = getTarget;
        /***/ },
        /* 22 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isString = __webpack_require__(4);
            var forEach = __webpack_require__(3);
            var safeEvent = __webpack_require__(23);
            /**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */ function on(element, types, handler, context) {
                if (isString(types)) {
                    forEach(types.split(/\s+/g), function(type) {
                        bindEvent(element, type, handler, context);
                    });
                    return;
                }
                forEach(types, function(func, type) {
                    bindEvent(element, type, func, handler);
                });
            }
            /**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */ function bindEvent(element, type, handler, context) {
                /**
     * Event handler
     * @param {Event} e - event object
     */ function eventHandler(e) {
                    handler.call(context || element, e || window.event);
                }
                if ("addEventListener" in element) element.addEventListener(type, eventHandler);
                else if ("attachEvent" in element) element.attachEvent("on" + type, eventHandler);
                memorizeHandler(element, type, handler, eventHandler);
            }
            /**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */ function memorizeHandler(element, type, handler, wrappedHandler) {
                var events = safeEvent(element, type);
                var existInEvents = false;
                forEach(events, function(obj) {
                    if (obj.handler === handler) {
                        existInEvents = true;
                        return false;
                    }
                    return true;
                });
                if (!existInEvents) events.push({
                    handler: handler,
                    wrappedHandler: wrappedHandler
                });
            }
            module.exports = on;
        /***/ },
        /* 23 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var EVENT_KEY = "_feEventKey";
            /**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */ function safeEvent(element, type) {
                var events = element[EVENT_KEY];
                var handlers;
                if (!events) events = element[EVENT_KEY] = {};
                handlers = events[type];
                if (!handlers) handlers = events[type] = [];
                return handlers;
            }
            module.exports = safeEvent;
        /***/ },
        /* 24 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */ function preventDefault(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                    return;
                }
                e.returnValue = false;
            }
            module.exports = preventDefault;
        /***/ },
        /* 25 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEach = __webpack_require__(3);
            var inArray = __webpack_require__(8);
            var getClass = __webpack_require__(26);
            var setClassName = __webpack_require__(27);
            /**
 * domUtil module
 * @module domUtil
 */ /**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */ function addClass(element) {
                var cssClass = Array.prototype.slice.call(arguments, 1);
                var classList = element.classList;
                var newClass = [];
                var origin;
                if (classList) {
                    forEach(cssClass, function(name) {
                        element.classList.add(name);
                    });
                    return;
                }
                origin = getClass(element);
                if (origin) cssClass = [].concat(origin.split(/\s+/), cssClass);
                forEach(cssClass, function(cls) {
                    if (inArray(cls, newClass) < 0) newClass.push(cls);
                });
                setClassName(element, newClass);
            }
            module.exports = addClass;
        /***/ },
        /* 26 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            /**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */ function getClass(element) {
                if (!element || !element.className) return "";
                if (isUndefined(element.className.baseVal)) return element.className;
                return element.className.baseVal;
            }
            module.exports = getClass;
        /***/ },
        /* 27 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var isUndefined = __webpack_require__(1);
            /**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */ function setClassName(element, cssClass) {
                cssClass = isArray(cssClass) ? cssClass.join(" ") : cssClass;
                cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                if (isUndefined(element.className.baseVal)) {
                    element.className = cssClass;
                    return;
                }
                element.className.baseVal = cssClass;
            }
            module.exports = setClassName;
        /***/ },
        /* 28 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */ function isHTMLNode(html) {
                if (typeof HTMLElement === "object") return html && (html instanceof HTMLElement || !!html.nodeType);
                return !!(html && html.nodeType);
            }
            module.exports = isHTMLNode;
        /***/ },
        /* 29 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inArray = __webpack_require__(8);
            var forEach = __webpack_require__(3);
            var isArray = __webpack_require__(2);
            var isString = __webpack_require__(4);
            var extend = __webpack_require__(0);
            // IE8 does not support capture groups.
            var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
            var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
            var BRACKET_REGEXP = /\[\s?|\s?\]/;
            var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
            var DOT_REGEXP = /\./;
            var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
            var STRING_REGEXP = /"|'/g;
            var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
            var EXPRESSION_INTERVAL = 2;
            var BLOCK_HELPERS = {
                "if": handleIf,
                "each": handleEach,
                "with": handleWith
            };
            var isValidSplit = "a".split(/a/).length === 3;
            /**
 * Split by RegExp. (Polyfill for IE8)
 * @param {string} text - text to be splitted\
 * @param {RegExp} regexp - regular expression
 * @returns {Array.<string>}
 */ var splitByRegExp = function() {
                if (isValidSplit) return function(text, regexp) {
                    return text.split(regexp);
                };
                return function(text, regexp) {
                    var result = [];
                    var prevIndex = 0;
                    var match, index;
                    if (!regexp.global) regexp = new RegExp(regexp, "g");
                    match = regexp.exec(text);
                    while(match !== null){
                        index = match.index;
                        result.push(text.slice(prevIndex, index));
                        prevIndex = index + match[0].length;
                        match = regexp.exec(text);
                    }
                    result.push(text.slice(prevIndex));
                    return result;
                };
            }();
            /**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */ // eslint-disable-next-line complexity
            function getValueFromContext(exp, context) {
                var splitedExps;
                var value = context[exp];
                if (exp === "true") value = true;
                else if (exp === "false") value = false;
                else if (STRING_NOTATION_REGEXP.test(exp)) value = exp.replace(STRING_REGEXP, "");
                else if (BRACKET_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(BRACKET_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
                } else if (DOT_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(DOT_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
                } else if (NUMBER_REGEXP.test(exp)) value = parseFloat(exp);
                return value;
            }
            /**
 * Extract elseif and else expressions.
 * @param {Array.<string>} ifExps - args of if expression
 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
 * @private
 */ function extractElseif(ifExps, sourcesInsideBlock) {
                var exps = [
                    ifExps
                ];
                var sourcesInsideIf = [];
                var otherIfCount = 0;
                var start = 0;
                // eslint-disable-next-line complexity
                forEach(sourcesInsideBlock, function(source, index) {
                    if (source.indexOf("if") === 0) otherIfCount += 1;
                    else if (source === "/if") otherIfCount -= 1;
                    else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
                        exps.push(source === "else" ? [
                            "true"
                        ] : source.split(" ").slice(1));
                        sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
                        start = index + 1;
                    }
                });
                sourcesInsideIf.push(sourcesInsideBlock.slice(start));
                return {
                    exps: exps,
                    sourcesInsideIf: sourcesInsideIf
                };
            }
            /**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleIf(exps, sourcesInsideBlock, context) {
                var analyzed = extractElseif(exps, sourcesInsideBlock);
                var result = false;
                var compiledSource = "";
                forEach(analyzed.exps, function(exp, index) {
                    result = handleExpression(exp, context);
                    if (result) compiledSource = compile(analyzed.sourcesInsideIf[index], context);
                    return !result;
                });
                return compiledSource;
            }
            /**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleEach(exps, sourcesInsideBlock, context) {
                var collection = handleExpression(exps, context);
                var additionalKey = isArray(collection) ? "@index" : "@key";
                var additionalContext = {};
                var result = "";
                forEach(collection, function(item, key) {
                    additionalContext[additionalKey] = key;
                    additionalContext["@this"] = item;
                    extend(context, additionalContext);
                    result += compile(sourcesInsideBlock.slice(), context);
                });
                return result;
            }
            /**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleWith(exps, sourcesInsideBlock, context) {
                var asIndex = inArray("as", exps);
                var alias = exps[asIndex + 1];
                var result = handleExpression(exps.slice(0, asIndex), context);
                var additionalContext = {};
                additionalContext[alias] = result;
                return compile(sourcesInsideBlock, extend(context, additionalContext)) || "";
            }
            /**
 * Extract sources inside block in place.
 * @param {Array.<string>} sources - array of sources
 * @param {number} start - index of start block
 * @param {number} end - index of end block
 * @returns {Array.<string>}
 * @private
 */ function extractSourcesInsideBlock(sources, start, end) {
                var sourcesInsideBlock = sources.splice(start + 1, end - start);
                sourcesInsideBlock.pop();
                return sourcesInsideBlock;
            }
            /**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */ function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
                var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
                var helperCount = 1;
                var startBlockIndex = 0;
                var endBlockIndex;
                var index = startBlockIndex + EXPRESSION_INTERVAL;
                var expression = sourcesToEnd[index];
                while(helperCount && isString(expression)){
                    if (expression.indexOf(helperKeyword) === 0) helperCount += 1;
                    else if (expression.indexOf("/" + helperKeyword) === 0) {
                        helperCount -= 1;
                        endBlockIndex = index;
                    }
                    index += EXPRESSION_INTERVAL;
                    expression = sourcesToEnd[index];
                }
                if (helperCount) throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
                sourcesToEnd[startBlockIndex] = executeBlockHelper(sourcesToEnd[startBlockIndex].split(" ").slice(1), extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex), context);
                return sourcesToEnd;
            }
            /**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleExpression(exps, context) {
                var result = getValueFromContext(exps[0], context);
                if (result instanceof Function) return executeFunction(result, exps.slice(1), context);
                return result;
            }
            /**
 * Execute a helper function.
 * @param {Function} helper - helper function
 * @param {Array.<string>} argExps - expressions of arguments
 * @param {object} context - context
 * @returns {string} - result of executing the function with arguments
 * @private
 */ function executeFunction(helper, argExps, context) {
                var args = [];
                forEach(argExps, function(exp) {
                    args.push(getValueFromContext(exp, context));
                });
                return helper.apply(null, args);
            }
            /**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */ function compile(sources, context) {
                var index = 1;
                var expression = sources[index];
                var exps, firstExp, result;
                while(isString(expression)){
                    exps = expression.split(" ");
                    firstExp = exps[0];
                    if (BLOCK_HELPERS[firstExp]) {
                        result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
                        sources = sources.concat(result);
                    } else sources[index] = handleExpression(exps, context);
                    index += EXPRESSION_INTERVAL;
                    expression = sources[index];
                }
                return sources.join("");
            }
            /**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */ function template(text, context) {
                return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
            }
            module.exports = template;
        /***/ },
        /* 30 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var imagePing = __webpack_require__(31);
            var ms7days = 604800000;
            /**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */ function isExpired(date) {
                var now = new Date().getTime();
                return now - date > ms7days;
            }
            /**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */ function sendHostname(appName, trackingId) {
                var url = "https://www.google-analytics.com/collect";
                var hostname = location.hostname;
                var hitType = "event";
                var eventCategory = "use";
                var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
                var date = window.localStorage.getItem(applicationKeyForStorage);
                // skip if the flag is defined and is set to false explicitly
                if (!isUndefined(window.tui) && window.tui.usageStatistics === false) return;
                // skip if not pass seven days old
                if (date && !isExpired(date)) return;
                window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
                setTimeout(function() {
                    if (document.readyState === "interactive" || document.readyState === "complete") imagePing(url, {
                        v: 1,
                        t: hitType,
                        tid: trackingId,
                        cid: hostname,
                        dp: hostname,
                        dh: appName,
                        el: appName,
                        ec: eventCategory
                    });
                }, 1000);
            }
            module.exports = sendHostname;
        /***/ },
        /* 31 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module request
 */ /**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */ function imagePing(url, trackingInfo) {
                var trackingElement = document.createElement("img");
                var queryString = "";
                forEachOwnProperties(trackingInfo, function(value, key) {
                    queryString += "&" + key + "=" + value;
                });
                queryString = queryString.substring(1);
                trackingElement.src = url + "?" + queryString;
                trackingElement.style.display = "none";
                document.body.appendChild(trackingElement);
                document.body.removeChild(trackingElement);
                return trackingElement;
            }
            module.exports = imagePing;
        /***/ }
    ]);
});

},{}],"82Il4":[function() {},{}],"4TESp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _apiJs = require("./api.js");
var _apiJsDefault = parcelHelpers.interopDefault(_apiJs);
var _renderMovieCardsJs = require("./renderMovieCards.js");
var _refsJs = require("./refs.js");
var _refsJsDefault = parcelHelpers.interopDefault(_refsJs);
const input = document.querySelector(".form__input");
const searchBtn = document.querySelector(".form__btn");
const errorMessage = document.querySelector(".form__search-error");
const gallery = document.querySelector(".gallery__container");
errorMessage.style.display = "none";
const searchMovie = (e)=>{
    e.preventDefault();
    gallery.innerHTML = "";
    const searchValue = input.value;
    (0, _apiJsDefault.default).getMoviesByQuery(searchValue).then((data)=>{
        if (data.results.length === 0) {
            errorMessage.style.display = "block";
            (0, _refsJsDefault.default).pagination.style.display = "none";
        } else {
            errorMessage.style.display = "none";
            (0, _renderMovieCardsJs.renderMovieCard)(data.results);
            (0, _refsJsDefault.default).pagination.style.display = "block";
        }
    }).catch((error)=>{
        console.log(error);
    });
};
searchBtn.addEventListener("click", searchMovie); // async function onFormSubmit(evt) {
 //   evt.preventDefault();
 //   try {
 //     filmsApi.searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
 //     if (filmsApi.searchQuery === '') return;
 //     const films = await filmsApi.getMoviesByQuery();
 //     if (films.length === 0) {
 //       addErrorStyles();
 //       errorMessage.style.display = 'block';
 //     } else {
 //       resetErrorStyles();
 //     }
 //     renderFilmsMarkup(films);
 //     // renderFilmsMarkup(films); TO DO: import ^
 //     searchFormRef.reset();
 //   } catch (error) {
 //     console.log(error);
 //   }
 // }
 // export function resetErrorStyles() {
 //   galleryRef.classList.remove('wrong');
 //   paginationRef.style.display = 'flex';
 //   errorMessage.style.display = 'none';
 // }
 // export function addErrorStyles() {
 //   galleryRef.classList.add('wrong');
 //   paginationRef.style.display = 'none';
 //   errorMessage.style.display = 'block';
 // }

},{"./api.js":"9u7qN","./renderMovieCards.js":"aGLN1","./refs.js":"2WoF2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aRq6p","ebWYT"], "ebWYT", "parcelRequireb3d4")

//# sourceMappingURL=library.739bf03c.js.map
