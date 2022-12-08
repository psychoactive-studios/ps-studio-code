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
})({"4MuEU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 50619;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
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
            } else fullReload();
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
        console.log("[parcel] ✨ Error resolved");
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
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
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
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
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
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
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

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _copyEmail = require("./js/global/copyEmail");
var _copyEmailDefault = parcelHelpers.interopDefault(_copyEmail);
var _initCms = require("./js/global/initCms");
var _initCmsDefault = parcelHelpers.interopDefault(_initCms);
var _logCareers = require("./js/global/logCareers");
var _logCareersDefault = parcelHelpers.interopDefault(_logCareers);
var _preloader = require("./js/global/preloader");
var _projectLotties = require("./js/global/projectLotties");
var _projectLottiesDefault = parcelHelpers.interopDefault(_projectLotties);
const parceled = true;
// global dictionary of url of mobile and desktop lotties per slug id
// structure: "slug" = ["mobile", "desktop"]
const onReady = ()=>{
    pageLoaded = true;
    (0, _logCareersDefault.default)();
    (0, _preloader.readyPreloader)();
    (0, _projectLottiesDefault.default)();
    (0, _copyEmailDefault.default)();
    (0, _initCmsDefault.default)();
};
const onLoading = ()=>{
    (0, _preloader.loopLogoLoading)();
};
if (document.readyState !== "loading") {
    onLoading();
    onReady();
} else {
    window.addEventListener("load", onReady);
    document.addEventListener("DOMContentLoaded", onLoading);
}

},{"./js/global/logCareers":"DcFUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./js/global/preloader":"gnoda","./js/global/projectLotties":"2KQxL","./js/global/copyEmail":"aI83l","./js/global/initCms":"3jJBr"}],"DcFUA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = logCareers = ()=>console.log(`
We're the best. No cap.

Sup beans!
Check out here if you want to join the team: https://psychoactive.co.nz/careers

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@    .@@.     ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@                           @@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@                          @@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@      .@@@@@@@@@@.                         @@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@                                              @@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@                                                   @@@@@@@@@@@@@@@
@@@@@@@@@@@@                                                      @@@@@@@@@@@@@@
@@@@@@@@@@@                                                       @@@@@@@@@@@@@@
@@@@@@@@@.                                                       ,@@@@@@@@@@@@@@
@@@@@@@@              @                        @@@@@@@@@@        @@@@@@@@@@@@@@@
@@@@@@@@            .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@
@@@@@@@                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@.       @@@@@@@@@@     @@@@@
@@@@@@,                  @@@@@@@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@@@     @@@@@
@@@@@@                    @@@@@@@@@@@@@@@@@@@@@@     @@@@@@@@@@@@@@@@      @@@@@
@@@@@@                     @@@@@@@@@@@@@@@@@@@@.    @@@@@@@@@@@@@@@@@      @@@@@
@@@@@@                     @@@@@@@@@@@@@@@@@@@@,    @@@@@@@@@@@@@@@@       @@@@@
@@@@@@@                      @@@@@@@@@@@@@@@@@@@      @@@@@@@@@@@@@        @@@@@
@@@@@@@                        @@@@@@@@@@@@@@@@@@       @@@@@@@@           @@@@@
@@@@@@@@                         @@@@@@@@@@@@@@@@@,                       @@@@@@
@@@@@@@@@                            @@@@@@@@@@@@@@@@                    @@@@@@@
@@@@@@@@@@                                  .@@@@@@                     @@@@@@@@
@@@@@@@@@@@                                                           .@@@@@@@@@
@@@@@@@@@@@@@                                                        @@@@@@@@@@@
@@@@@@@@@@@@@@@                                                    @@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@                                               ,@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@                                         ,@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@                                  @@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`);

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

},{}],"gnoda":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loopLogoLoading", ()=>loopLogoLoading);
parcelHelpers.export(exports, "readyPreloader", ()=>readyPreloader);
var anim;
var logoWrap;
var logoWrap_b;
var anim_b;
// triggers page and media is fully loaded
window.addEventListener("load", ()=>{});
const readyPreloader = ()=>{
    stopLogoLoading();
    pageOutTransitionLinks();
    logoMouseEvents();
};
// This code delays the page going to the next URL for a moment so that we can fade the content out (page transition)
function pageOutTransitionLinks() {
    function link_is_external(link_element) {
        return link_element.host !== window.location.host;
    }
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
        if (!link_is_external(links[i])) // Only internal links trigger page out logo animation
        {
            if (!links[i].classList.contains("hamburger-box") && !links[i].classList.contains("close-menu-box")) links[i].addEventListener("click", pageTransition);
        }
    }
    function pageTransition(e) {
        e.preventDefault();
        // flip phrog once
        logoWrap.querySelector("svg").style.opacity = "1";
        logoWrap.querySelector("img").style.opacity = "0";
        logoWrap_b.querySelector("svg").style.opacity = "1";
        logoWrap_b.querySelector("img").style.opacity = "0";
        // setting loop to false doesn't work above so:
        anim.loop = true;
        anim_b.loop = true;
        anim.play();
        anim_b.play();
        setTimeout(function() {
            anim.loop = false;
            anim_b.loop = false;
        }, 100);
        var linkUrl = $(this).attr("href");
        setTimeout(function(url) {
            window.location = url;
        }, 1150, linkUrl);
    }
}
// The lottie of the phrog flipping acts as our loading indicator
function loopLogoLoading() {
    logoWrap = document.querySelector("#ps-logo-wrap");
    logoWrap_b = document.querySelector("#ps-logo-wrap-black");
    // White lottie
    anim = lottie.loadAnimation({
        container: logoWrap,
        renderer: "svg",
        autoplay: true,
        loop: true,
        name: "clocked",
        // animationData: data
        path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/5fc454a806388fa94227b1ee_White-V01.json"
    });
    // Black lottie
    anim_b = lottie.loadAnimation({
        container: logoWrap_b,
        renderer: "svg",
        autoplay: false,
        loop: false,
        name: "clocked",
        // animationData: data
        path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/5fc456d931e1effecaab008c_Black-V02.json"
    });
    // as soon as animation is ready (before other media on page)
    anim.addEventListener("data_ready", ()=>{
        anim.play();
        logoWrap.querySelector("svg").style.opacity = "1";
        logoWrap.querySelector("img").style.opacity = "0";
    });
    // as soon as animation is ready (before other media on page)
    anim_b.addEventListener("data_ready", ()=>{
        anim_b.play();
        logoWrap_b.querySelector("svg").style.opacity = "0";
        logoWrap_b.querySelector("img").style.opacity = "1";
    });
}
// Makes the phrog flip when hovered
function logoMouseEvents() {
    logoWrap.addEventListener("mouseenter", ()=>{
        anim.play();
        anim.loop = true;
        logoWrap.querySelector("svg").style.opacity = "1";
        logoWrap.querySelector("img").style.opacity = "0";
    });
    logoWrap.addEventListener("mouseleave", ()=>{
        anim.loop = false;
        anim.addEventListener("complete", ()=>{
            logoWrap.querySelector("svg").style.opacity = "0";
            logoWrap.querySelector("img").style.opacity = "1";
        }, {
            once: true
        });
    });
    logoWrap_b.addEventListener("mouseenter", ()=>{
        anim_b.play();
        anim_b.loop = true;
        logoWrap_b.querySelector("svg").style.opacity = "1";
        logoWrap_b.querySelector("img").style.opacity = "0";
    });
    logoWrap_b.addEventListener("mouseleave", ()=>{
        anim_b.loop = false;
        anim_b.addEventListener("complete", ()=>{
            logoWrap_b.querySelector("svg").style.opacity = "0";
            logoWrap_b.querySelector("img").style.opacity = "1";
        }, {
            once: true
        });
    });
}
function stopLogoLoading() {
    anim.loop = false;
    anim.addEventListener("complete", ()=>{
        logoWrap.querySelector("svg").style.opacity = "0";
        logoWrap.querySelector("img").style.opacity = "1";
    }, {
        once: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KQxL":[function(require,module,exports) {
// query breakpoint and load suitable lottie into player
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initProjectLotties() {
    if (document.querySelectorAll(".lottie-wrapper").length > 0) {
        var allLotties = document.getElementsByClassName("lottie-wrapper");
        var allLottiesHover = document.getElementsByClassName("hover-lottie-wrapper");
        for(var i = 0; i < allLotties.length; i++)if (window.innerWidth < 428) {
            var id = allLotties[i].id;
            allLotties[i].load(lottiesDict[id][0]);
        } else {
            var id = allLotties[i].id;
            allLotties[i].load(lottiesDict[id][1]);
        }
        for(var i = 0; i < allLottiesHover.length; i++){
            var id = allLottiesHover[i].id;
            if (window.innerWidth < 428 && lottiesDictHover[id][0] != "") //console.log("Init lotties")
            allLottiesHover[i].load(lottiesDictHover[id][0]);
            else if (lottiesDictHover[id][1] != "") //console.log("Init lotties")
            //var id = allLottiesHover[i].id
            allLottiesHover[i].load(lottiesDictHover[id][1]);
        }
    } else if (document.querySelectorAll("lottie-player").length > 0) {
        // code for the work page
        var allLotties = document.getElementsByTagName("lottie-player");
        for(var i = 0; i < allLotties.length; i++)if (window.innerWidth < 428) {
            var id = allLotties[i].id;
            allLotties[i].load(lottiesDict[id][0]);
            console.log(lottiesDict[id][0]);
        } else {
            var id = allLotties[i].id;
            allLotties[i].load(lottiesDict[id][1]);
        }
    }
    // Play lotties one randomly and one at a time for performance
    function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    // lotties only play when in viewport
    var lottiesRemoved = false;
    var x = 0;
    // method 1, timeout
    var deleteLottiesFunction = setInterval(function() {
        deleteLotties();
        if (++x === 50) clearInterval(deleteLottiesFunction);
    }, 100);
    //
    //deleteLotties()
    function deleteLotties() {
        // Function runs every 4 seconds (the duration of the lottie animations)
        if (pageLoaded) {
            //availableLotties = []
            //var lotties = document.getElementsByTagName("lottie-player");
            var lottieBoxes = document.getElementsByClassName("lottie-box");
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
            //console.log()
            if (isSafari && isMac && !lottiesRemoved) {
                lottieBoxes = document.getElementsByClassName("lottie-box");
                lottieBoxes.length;
                for(var i = 0; i < lottieBoxes.length; i++);
            } else {
                safariImages = document.getElementsByClassName("safari-image");
                for(var i = 0; i < safariImages.length; i++)safariImages[i].remove();
            }
        }
    }
}
exports.default = initProjectLotties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aI83l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = copyEmail = ()=>{
    function copyToClipboard(copyText) {
        // copies text to keyboard by creating then deleting selectable text area
        const el = document.createElement("textarea");
        el.value = copyText;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        // change text of header
        $(".footer-title-roller-down").each(function() {
            $(this).html("E-mail copied to clipboard");
        });
        // reset text of header after 1000 ms
        setTimeout(function() {
            $(".footer-title-roller-down").each(function() {
                $(this).html("Copy email");
            });
        }, 1400);
    }
    var helloBlock = document.getElementById("email-block-hello");
    helloBlock.addEventListener("click", function() {
        copyToClipboard("hello@psychoactive.co.nz");
    });
    var careersBlock = document.getElementById("careers");
    careersBlock.addEventListener("click", function() {
        copyToClipboard("careers@psychoactive.co.nz");
    });
    var internBlock = document.getElementById("intern");
    internBlock.addEventListener("click", function() {
        copyToClipboard("intern@psychoactive.co.nz");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jJBr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = initCms = ()=>{
    var launchSite = false;
    var cmsItem = document.querySelectorAll(".cms");
    cmsItem.forEach((e, i)=>{
        e.addEventListener("mouseover", ()=>{
            $(e).addClass("cms-overlay");
            var item = $(e);
            //set the color from cms on inner content on hover
            var colorClass = $(e).find(".newColor").attr("class");
            if (colorClass) var color = "#" + colorClass.split(" ")[1];
            $(".launch-site-wrapper").mouseover(function() {
                launchSite = true;
                item.find(".underline").css("background-image", "linear-gradient(transparent calc(100% - 2px), red 2px)");
                item.find(".underline").css("background-size", "0 100%");
            });
            $(".launch-site-wrapper").mouseout(function() {
                launchSite = false;
            });
            if (!launchSite) {
                $(e).find(".top-bottom-margin").css("color", color);
                $(e).find(".text-size-large.full-white").css("color", color);
                $(e).find(".h3").css("color", color);
                $(e).find(".button-text").css("color", color);
                $(e).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px)," + color + " 2px)");
                $(e).find(".launch-site-icon").css("color", color);
            }
        });
        e.addEventListener("mouseout", ()=>{
            $(e).removeClass("cms-overlay");
            $(e).find(".text-size-large.full-white").css("color", "");
            $(e).find(".top-bottom-margin").css("color", "");
            $(e).find(".h3.gets-underlined").css("color", "");
            $(e).find(".button-text").css("color", "");
            $(e).find(".h3.gets-underlined").css("background-image", "linear-gradient(transparent calc(100% - 2px), #FFFFFF 2px)");
            $(e).find(".launch-site-icon").css("color", "");
        });
    });
    //get the length of all the cms items
    var total_items = cmsItem.length;
    //on one of the filter buttons clicked check the length of the cms
    //if its less than the total remove the active class from 'All' filter
    if (document.querySelector(".sort-button") && document.querySelector(".reset-filter")) $(".sort-button").click(function() {
        //adding a delay for finsweet to run its filter script
        setTimeout(function() {
            if ($(".cms").length < total_items) $(".reset-filter").removeClass("is-active");
            if ($(".cms").length == total_items) $(".reset-filter").addClass("is-active");
        }, 300);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4MuEU","igcvL"], "igcvL", "parcelRequirebfdf")

//# sourceMappingURL=app.js.map
