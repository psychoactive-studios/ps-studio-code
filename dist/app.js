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
var _preloader = require("./js/global/preloader");
var _loadAnim = require("./js/home/loadAnim");
var _loadAnimDefault = parcelHelpers.interopDefault(_loadAnim);
var _audio = require("./js/global/audio");
var _audioDefault = parcelHelpers.interopDefault(_audio);
var _aboutPage = require("./js/about/aboutPage");
var _aboutPageDefault = parcelHelpers.interopDefault(_aboutPage);
var _showreel = require("./js/global/showreel");
var _videoAudio = require("./js/global/videoAudio");
var _bugFixes = require("./js/global/bugFixes");
var _dynamicVideos = require("./js/global/dynamicVideos");
const parceled = true; // for checking localhost vs github pages / CDN
const currentPage = window.location.pathname;
const homePage = currentPage == "/";
const contentHubOuter = currentPage === "/content-hub/";
const contentHubInner = currentPage.startsWith("/content-hub/") && !contentHubOuter;
const isAboutPage = currentPage == "/about-new"; // change to just about later
const onReady = ()=>{
    // alert("ready");
    (0, _preloader.readyPreloader)(); // hides preloader and add event listener for frog lottie
    const audio = (0, _audioDefault.default)(homePage); // adds music, ui-sounds and mute-lottie functionality
    (0, _dynamicVideos.responsiveNavShowreel)(); // make nav showreel load video sources dynamically
    if (homePage) {
        (0, _videoAudio.homeVideoAudio)(audio); // code for home video audio
        (0, _dynamicVideos.setAllHomepageVideoSources)(); // make homepage load video sources dynamically
        (0, _dynamicVideos.lazyLoadHomeVideos)(); // make homepage videos lazy load in on scroll
    // showreelHome(audio); // code for homepage showreel video
    }
    if (contentHubInner) (0, _dynamicVideos.contentHubDynamicVideos)();
    (0, _showreel.showreelNav)(audio); // code for nav showreel video
    (0, _copyEmailDefault.default)(); // copies email to clipboard in footer
    (0, _initCmsDefault.default)(); // sets color hovers and cms filtering style for work page & content hub
    document.querySelector(".landing-video-container") && (0, _loadAnimDefault.default)(); // for home page intro anim
    document.querySelectorAll(".article-rich-text a").forEach((e)=>{
        e.target = "_blank";
    });
    if (isAboutPage) (0, _aboutPageDefault.default)(); // all custom code for about page
    (0, _bugFixes.stopCmdClick)(); // prevent command click from triggering page transition
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
// close menu on escape key press
const handleEscape = (e)=>{
    if (e.key === "Escape") {
        const closeBtn = document.querySelector(".burger-close-icon");
        const hamburgerMenu = document.querySelector(".hamburger-box");
        if (hamburgerMenu.style.opacity == 0) closeBtn.click();
    }
};
window.addEventListener("keydown", handleEscape);

},{"./js/global/copyEmail":"aI83l","./js/global/initCms":"3jJBr","./js/global/preloader":"gnoda","./js/home/loadAnim":"4gmyN","./js/global/audio":"bc3EI","./js/global/showreel":"iVfHp","./js/global/bugFixes":"lTFyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./js/global/dynamicVideos":"8GDbY","./js/about/aboutPage":"4M5wA","./js/global/videoAudio":"24Zjj"}],"aI83l":[function(require,module,exports) {
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
    var remoteHelloBlock = document.getElementById("email-block-hello");
    remoteHelloBlock.addEventListener("click", function() {
        copyToClipboard("hello@psychoactive.co.nz");
    });
    var careersBlock = document.getElementById("email-block-careers");
    careersBlock.addEventListener("click", function() {
        copyToClipboard("careers@psychoactive.co.nz");
    });
};

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

},{}],"3jJBr":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnoda":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loopLogoLoading", ()=>loopLogoLoading);
parcelHelpers.export(exports, "readyPreloader", ()=>readyPreloader);
var anim;
var logoWrap;
var logoWrap_b;
var anim_b;
const readyPreloader = ()=>{
    stopLogoLoading();
    pageOutTransitionLinks();
    logoMouseEvents();
};
// This code delays the page going to the next URL for a moment so that we can fade the content out (page transition)
function pageOutTransitionLinks() {
    function linkIsExternal(link) {
        return link.host !== window.location.host;
    }
    function linkIsPagination(link) {
        return link.classList.contains("w-pagination-previous") || link.classList.contains("w-pagination-next");
    }
    const links = document.querySelectorAll("a");
    links.forEach((link)=>{
        if (!linkIsExternal(link)) {
            if (linkIsPagination(link)) return;
            link.addEventListener("click", pageTransition);
        // Only internal links trigger page out logo animation
        // with the exception of content-hub inner page internal links
        //     if (
        //       (!link.classList.contains("hamburger-box")) &&
        //       (!link.classList.contains("close-menu-box")) &&
        //       (!link.target == "_blank")
        //     ) {
        //       link.addEventListener("click", pageTransition);
        //     }
        }
    });
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
        if (e.ctrlKey || e.metaKey) window.open(linkUrl, "_blank");
        else setTimeout(function(url) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gmyN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
exports.default = loadAnim = ()=>{
    var topMargin;
    if ($(window).width() <= 1024) topMargin = "15vh";
    else topMargin = "6vw";
    // let targetQuery = ".landing-text-box";
    // original
    // let targetQuery = ".landing-text-box, .project-card-parent";
    //get cookies
    var hasVisited = sessionStorage.getItem("washere");
    // anime.set(targetQuery, {
    //   opacity: 0,
    //   translateY: "4vh",
    // });
    (0, _animejsDefault.default).set("#hamburger, .logos-box, #mute-btn-container", {
        opacity: 0,
        translateY: "-4vh"
    });
    (0, _animejsDefault.default).set(".landing-video-container", {
        opacity: 0
    });
    const onOpen = (delay)=>{
        $(".body-dark").css({
            overflow: "visible"
        });
        $(".preloader-background").animate({
            opacity: 0
        }, 1000);
        $("#preloader").css({
            display: "none"
        });
        $("#mute-btn-container").css({
            display: "none"
        });
        (0, _animejsDefault.default)({
            targets: ".landing-video-container",
            opacity: {
                value: 1,
                duration: 800,
                easing: "easeOutSine"
            },
            delay: delay
        });
        $("#mute-btn-container").css({
            display: "block"
        });
        $(".navigation-bar").css({
            display: "block"
        });
        (0, _animejsDefault.default)({
            targets: "#hamburger, .logos-box, #mute-btn-container",
            opacity: {
                value: 1,
                duration: 800,
                easing: "easeOutSine"
            },
            translateY: {
                value: [
                    "-4vh",
                    "0vh"
                ],
                duration: 1000,
                easing: "easeOutQuad"
            },
            delay: (0, _animejsDefault.default).stagger(500, {
                start: delay
            })
        });
    // anime({
    //   targets: targetQuery,
    //   opacity: { value: 1, duration: 800, easing: "easeOutSine" },
    //   translateY: { value: 0, duration: 1000, easing: "easeOutQuad" },
    //   delay: anime.stagger(500, { start: delay + 1000 }),
    // });
    };
    const visited = (delay)=>{
        $(".body-dark").css({
            overflow: "visible"
        });
        $(".preloader-background").css({
            display: "none"
        });
        $("#preloader").css({
            display: "none"
        });
        $(".navigation-bar").css({
            display: "block;"
        });
        $("#mute-btn-container").css({
            display: "block;"
        });
        (0, _animejsDefault.default)({
            targets: ".landing-video-container",
            opacity: {
                value: 1,
                duration: 800,
                easing: "easeOutSine"
            },
            delay: delay
        });
        (0, _animejsDefault.default)({
            targets: "#hamburger, .logos-box, #mute-btn-container",
            opacity: {
                value: 1,
                duration: 0,
                easing: "easeOutSine"
            },
            translateY: {
                value: [
                    "0",
                    "0vh"
                ],
                duration: 0,
                easing: "easeOutQuad"
            },
            delay: (0, _animejsDefault.default).stagger(500, {
                start: delay
            })
        });
    // anime({
    //   targets: targetQuery,
    //   opacity: { value: 1, duration: 0, easing: "easeOutSine" },
    //   translateY: {
    //     value: ["0vh", "0vh"],
    //     duration: 1000,
    //     easing: "easeOutQuad",
    //   },
    //   delay: anime.stagger(500, { start: delay + 1000 }),
    // });
    };
    //if page has been visited - don't animate
    let navigatedWithBackButton = false;
    // Listen for back/forward navigation
    window.addEventListener("pageshow", function(event) {
        if (event.persisted) {
            navigatedWithBackButton = true;
            runVisitedFlow();
        }
    });
    // const hasVisited = sessionStorage.getItem("washere") === "true";
    function runVisitedFlow() {
        // Avoid running twice
        if ($("#black-cover").length === 0) return;
        $("#black-cover").remove();
        $(".landing-video-container").css({
            width: "80vw",
            height: "40vh",
            position: "relative",
            opacity: 0
        });
        visited(0);
    }
    // Main condition check
    if (hasVisited || $(window).width() <= 1024) runVisitedFlow();
    else {
        // If page not visited - animate
        $("#preloader").css({
            display: "block"
        });
        $("#trigger,#enter-btn").on("click", function() {
            $("#black-cover").remove();
            $(".landing-video-container").animate({
                width: "100vw",
                height: "100vh",
                opacity: 1
            }, 1000).delay(2000).animate({
                top: topMargin,
                width: "80vw",
                height: "40vh",
                position: "relative"
            }, 1000, function() {
                onOpen(0);
            });
            console.log("Welcome, stranger !");
            sessionStorage.setItem("washere", true);
        });
    }
};

},{"animejs":"jokr5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jokr5":[function(require,module,exports) {
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ // Defaults
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: true,
    timelineOffset: 0
};
var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
};
var validTransforms = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d"
];
// Caching
var cache = {
    CSS: {},
    springs: {}
};
// Utils
function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
    return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
    return func.apply(null, args);
}
var is = {
    arr: function(a) {
        return Array.isArray(a);
    },
    obj: function(a) {
        return stringContains(Object.prototype.toString.call(a), "Object");
    },
    pth: function(a) {
        return is.obj(a) && a.hasOwnProperty("totalLength");
    },
    svg: function(a) {
        return a instanceof SVGElement;
    },
    inp: function(a) {
        return a instanceof HTMLInputElement;
    },
    dom: function(a) {
        return a.nodeType || is.svg(a);
    },
    str: function(a) {
        return typeof a === "string";
    },
    fnc: function(a) {
        return typeof a === "function";
    },
    und: function(a) {
        return typeof a === "undefined";
    },
    nil: function(a) {
        return is.und(a) || a === null;
    },
    hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function(a) {
        return /^rgb/.test(a);
    },
    hsl: function(a) {
        return /^hsl/.test(a);
    },
    col: function(a) {
        return is.hex(a) || is.rgb(a) || is.hsl(a);
    },
    key: function(a) {
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
    }
};
// Easings
function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(",").map(function(p) {
        return parseFloat(p);
    }) : [];
}
// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t) {
        var progress = duration ? duration * t / 1000 : t;
        if (zeta < 1) progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
        else progress = (a + b * progress) * Math.exp(-progress * w0);
        if (t === 0 || t === 1) return t;
        return 1 - progress;
    }
    function getDuration() {
        var cached = cache.springs[string];
        if (cached) return cached;
        var frame = 1 / 6;
        var elapsed = 0;
        var rest = 0;
        while(true){
            elapsed += frame;
            if (solver(elapsed) === 1) {
                rest++;
                if (rest >= 16) break;
            } else rest = 0;
        }
        var duration = elapsed * frame * 1000;
        cache.springs[string] = duration;
        return duration;
    }
    return duration ? solver : getDuration;
}
// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
function steps(steps) {
    if (steps === void 0) steps = 10;
    return function(t) {
        return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
    };
}
// BezierEasing https://github.com/gre/bezier-easing
var bezier = function() {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
    }
    function C(aA1) {
        return 3.0 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > 0.0000001 && ++i < 10);
        return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for(var i = 0; i < 4; ++i){
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }
    function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
        var sampleValues = new Float32Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= 0.001) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            else if (initialSlope === 0.0) return guessForT;
            else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return function(x) {
            if (mX1 === mY1 && mX2 === mY2) return x;
            if (x === 0 || x === 1) return x;
            return calcBezier(getTForX(x), mY1, mY2);
        };
    }
    return bezier;
}();
var penner = function() {
    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var eases = {
        linear: function() {
            return function(t) {
                return t;
            };
        }
    };
    var functionEasings = {
        Sine: function() {
            return function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            };
        },
        Circ: function() {
            return function(t) {
                return 1 - Math.sqrt(1 - t * t);
            };
        },
        Back: function() {
            return function(t) {
                return t * t * (3 * t - 2);
            };
        },
        Bounce: function() {
            return function(t) {
                var pow2, b = 4;
                while(t < ((pow2 = Math.pow(2, --b)) - 1) / 11);
                return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
            };
        },
        Elastic: function(amplitude, period) {
            if (amplitude === void 0) amplitude = 1;
            if (period === void 0) period = .5;
            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, .1, 2);
            return function(t) {
                return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
            };
        }
    };
    var baseEasings = [
        "Quad",
        "Cubic",
        "Quart",
        "Quint",
        "Expo"
    ];
    baseEasings.forEach(function(name, i) {
        functionEasings[name] = function() {
            return function(t) {
                return Math.pow(t, i + 2);
            };
        };
    });
    Object.keys(functionEasings).forEach(function(name) {
        var easeIn = functionEasings[name];
        eases["easeIn" + name] = easeIn;
        eases["easeOut" + name] = function(a, b) {
            return function(t) {
                return 1 - easeIn(a, b)(1 - t);
            };
        };
        eases["easeInOut" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
            };
        };
        eases["easeOutIn" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
            };
        };
    });
    return eases;
}();
function parseEasings(easing, duration) {
    if (is.fnc(easing)) return easing;
    var name = easing.split("(")[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch(name){
        case "spring":
            return spring(easing, duration);
        case "cubicBezier":
            return applyArguments(bezier, args);
        case "steps":
            return applyArguments(steps, args);
        default:
            return applyArguments(ease, args);
    }
}
// Strings
function selectString(str) {
    try {
        var nodes = document.querySelectorAll(str);
        return nodes;
    } catch (e) {
        return;
    }
}
// Arrays
function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for(var i = 0; i < len; i++)if (i in arr) {
        var val = arr[i];
        if (callback.call(thisArg, val, i, arr)) result.push(val);
    }
    return result;
}
function flattenArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
}
function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [
        o
    ];
}
function arrayContains(arr, val) {
    return arr.some(function(a) {
        return a === val;
    });
}
// Objects
function cloneObject(o) {
    var clone = {};
    for(var p in o)clone[p] = o[p];
    return clone;
}
function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o1)o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    return o;
}
function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o2)o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
}
// Colors
function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 0.5) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    var r, g, b;
    if (s == 0) r = g = b = l;
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}
function colorToRgb(val) {
    if (is.rgb(val)) return rgbToRgba(val);
    if (is.hex(val)) return hexToRgba(val);
    if (is.hsl(val)) return hslToRgba(val);
}
// Units
function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[1];
}
function getTransformUnit(propName) {
    if (stringContains(propName, "translate") || propName === "perspective") return "px";
    if (stringContains(propName, "rotate") || stringContains(propName, "skew")) return "deg";
}
// Values
function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
    return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([
        unit,
        "deg",
        "rad",
        "turn"
    ], valueUnit)) return value;
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) return cached;
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = "absolute";
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
}
function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
        var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
        return unit ? convertPxToUnit(el, value, unit) : value;
    }
}
function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) return "attribute";
    if (is.dom(el) && arrayContains(validTransforms, prop)) return "transform";
    if (is.dom(el) && prop !== "transform" && getCSSValue(el, prop)) return "css";
    if (el[prop] != null) return "object";
}
function getElementTransforms(el) {
    if (!is.dom(el)) return;
    var str = el.style.transform || "";
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
    while(m = reg.exec(str))transforms.set(m[1], m[2]);
    return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
        animatable.transforms.list.set(propName, value);
        animatable.transforms["last"] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
    switch(getAnimationType(target, propName)){
        case "transform":
            return getTransformValue(target, propName, animatable, unit);
        case "css":
            return getCSSValue(target, propName, unit);
        case "attribute":
            return getAttribute(target, propName);
        default:
            return target[propName] || 0;
    }
}
function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ""));
    switch(operator[0][0]){
        case "+":
            return x + y + u;
        case "-":
            return x - y + u;
        case "*":
            return x * y + u;
    }
}
function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    if (/\s/g.test(val)) return val;
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) return unitLess + unit;
    return unitLess;
}
// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, "r");
}
function getRectLength(el) {
    return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
}
function getLineLength(el) {
    return getDistance({
        x: getAttribute(el, "x1"),
        y: getAttribute(el, "y1")
    }, {
        x: getAttribute(el, "x2"),
        y: getAttribute(el, "y2")
    });
}
function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for(var i = 0; i < points.numberOfItems; i++){
        var currentPos = points.getItem(i);
        if (i > 0) totalLength += getDistance(previousPos, currentPos);
        previousPos = currentPos;
    }
    return totalLength;
}
function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
// Path animation
function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch(el.tagName.toLowerCase()){
        case "circle":
            return getCircleLength(el);
        case "rect":
            return getRectLength(el);
        case "line":
            return getLineLength(el);
        case "polyline":
            return getPolylineLength(el);
        case "polygon":
            return getPolygonLength(el);
    }
}
function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute("stroke-dasharray", pathLength);
    return pathLength;
}
// Motion path
function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while(is.svg(parentEl)){
        if (!is.svg(parentEl.parentNode)) break;
        parentEl = parentEl.parentNode;
    }
    return parentEl;
}
function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [
        0,
        0,
        width,
        height
    ]);
    return {
        el: parentSvgEl,
        viewBox: viewBox,
        x: viewBox[0] / 1,
        y: viewBox[1] / 1,
        w: width,
        h: height,
        vW: viewBox[2],
        vH: viewBox[3]
    };
}
function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function(property) {
        return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
        };
    };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
        if (offset === void 0) offset = 0;
        var l = progress + offset >= 1 ? progress + offset : 0;
        return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch(path.property){
        case "x":
            return (p.x - svg.x) * scaleX;
        case "y":
            return (p.y - svg.y) * scaleY;
        case "angle":
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
}
// Decompose value
function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
    return {
        original: value,
        numbers: value.match(rgx) ? value.match(rgx).map(Number) : [
            0
        ],
        strings: is.str(val) || unit ? value.split(rgx) : []
    };
}
// Animatables
function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self) {
        return self.indexOf(item) === pos;
    });
}
function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t, i) {
        return {
            target: t,
            id: i,
            total: parsed.length,
            transforms: {
                list: getElementTransforms(t)
            }
        };
    });
}
// Properties
function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    // Override duration if easing is a spring
    if (/^spring/.test(settings.easing)) settings.duration = spring(settings.easing);
    if (is.arr(prop)) {
        var l = prop.length;
        var isFromTo = l === 2 && !is.obj(prop[0]);
        if (!isFromTo) // Duration divided by the number of tweens
        {
            if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
        } else // Transform [from, to] values shorthand to a valid tween value
        prop = {
            value: prop
        };
    }
    var propArray = is.arr(prop) ? prop : [
        prop
    ];
    return propArray.map(function(v, i) {
        var obj = is.obj(v) && !is.pth(v) ? v : {
            value: v
        };
        // Default delay value should only be applied to the first tween
        if (is.und(obj.delay)) obj.delay = !i ? tweenSettings.delay : 0;
        // Default endDelay value should only be applied to the last tween
        if (is.und(obj.endDelay)) obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
        return obj;
    }).map(function(k) {
        return mergeObjects(k, settings);
    });
}
function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
        return Object.keys(key);
    })), function(p) {
        return is.key(p);
    }).reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    var properties = {};
    var loop = function(i) {
        var propName = propertyNames[i];
        properties[propName] = keyframes.map(function(key) {
            var newKey = {};
            for(var p in key){
                if (is.key(p)) {
                    if (p == propName) newKey.value = key[p];
                } else newKey[p] = key[p];
            }
            return newKey;
        });
    };
    for(var i = 0; i < propertyNames.length; i++)loop(i);
    return properties;
}
function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) params = mergeObjects(flattenKeyframes(keyframes), params);
    for(var p in params)if (is.key(p)) properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
    });
    return properties;
}
// Tweens
function normalizeTweenValues(tween, animatable) {
    var t = {};
    for(var p in tween){
        var value = getFunctionValue(tween[p], animatable);
        if (is.arr(value)) {
            value = value.map(function(v) {
                return getFunctionValue(v, animatable);
            });
            if (value.length === 1) value = value[0];
        }
        t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
}
function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t) {
        var tween = normalizeTweenValues(t, animatable);
        var tweenValue = tween.value;
        var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
        var toUnit = getUnit(to);
        var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
        var previousValue = previousTween ? previousTween.to.original : originalValue;
        var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
        var fromUnit = getUnit(from) || getUnit(originalValue);
        var unit = toUnit || fromUnit;
        if (is.und(to)) to = previousValue;
        tween.from = decomposeValue(from, unit);
        tween.to = decomposeValue(getRelativeValue(to, from), unit);
        tween.start = previousTween ? previousTween.end : 0;
        tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
        tween.easing = parseEasings(tween.easing, tween.duration);
        tween.isPath = is.pth(tweenValue);
        tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
        tween.isColor = is.col(tween.from.original);
        if (tween.isColor) tween.round = 1;
        previousTween = tween;
        return tween;
    });
}
// Tween progress
var setProgressValue = {
    css: function(t, p, v) {
        return t.style[p] = v;
    },
    attribute: function(t, p, v) {
        return t.setAttribute(p, v);
    },
    object: function(t, p, v) {
        return t[p] = v;
    },
    transform: function(t, p, v, transforms, manual) {
        transforms.list.set(p, v);
        if (p === transforms.last || manual) {
            var str = "";
            transforms.list.forEach(function(value, prop) {
                str += prop + "(" + value + ") ";
            });
            t.style.transform = str;
        }
    }
};
// Set Value helper
function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
        for(var property in properties){
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
        }
    });
}
// Animations
function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
        var tweens = normalizeTweens(prop, animatable);
        var lastTween = tweens[tweens.length - 1];
        return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
        };
    }
}
function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
        return properties.map(function(prop) {
            return createAnimation(animatable, prop);
        });
    })), function(a) {
        return !is.und(a);
    });
}
// Create Instance
function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function(anim) {
        return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
}
var instanceID = 0;
function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
        id: id,
        children: [],
        animatables: animatables,
        animations: animations,
        duration: timings.duration,
        delay: timings.delay,
        endDelay: timings.endDelay
    });
}
// Core
var activeInstances = [];
var engine = function() {
    var raf;
    function play() {
        if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) raf = requestAnimationFrame(step);
    }
    function step(t) {
        // memo on algorithm issue:
        // dangerous iteration over mutable `activeInstances`
        // (that collection may be updated from within callbacks of `tick`-ed animation instances)
        var activeInstancesLength = activeInstances.length;
        var i = 0;
        while(i < activeInstancesLength){
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
                activeInstance.tick(t);
                i++;
            } else {
                activeInstances.splice(i, 1);
                activeInstancesLength--;
            }
        }
        raf = i > 0 ? requestAnimationFrame(step) : undefined;
    }
    function handleVisibilityChange() {
        if (!anime.suspendWhenDocumentHidden) return;
        if (isDocumentHidden()) // suspend ticks
        raf = cancelAnimationFrame(raf);
        else {
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(function(instance) {
                return instance._onDocumentVisibility();
            });
            engine();
        }
    }
    if (typeof document !== "undefined") document.addEventListener("visibilitychange", handleVisibilityChange);
    return play;
}();
function isDocumentHidden() {
    return !!document && document.hidden;
}
// Public Instance
function anime(params) {
    if (params === void 0) params = {};
    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance) {
        var promise = window.Promise && new Promise(function(_resolve) {
            return resolve = _resolve;
        });
        instance.finished = promise;
        return promise;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
        var direction = instance.direction;
        if (direction !== "alternate") instance.direction = direction !== "normal" ? "normal" : "reverse";
        instance.reversed = !instance.reversed;
        children.forEach(function(child) {
            return child.reversed = instance.reversed;
        });
    }
    function adjustTime(time) {
        return instance.reversed ? instance.duration - time : time;
    }
    function resetTime() {
        startTime = 0;
        lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time, child) {
        if (child) child.seek(time - child.timelineOffset);
    }
    function syncInstanceChildren(time) {
        if (!instance.reversePlayback) for(var i = 0; i < childrenLength; i++)seekChild(time, children[i]);
        else for(var i$1 = childrenLength; i$1--;)seekChild(time, children[i$1]);
    }
    function setAnimationsProgress(insTime) {
        var i = 0;
        var animations = instance.animations;
        var animationsLength = animations.length;
        while(i < animationsLength){
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) tween = filterArray(tweens, function(t) {
                return insTime < t.end;
            })[0] || tween;
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = void 0;
            for(var n = 0; n < toNumbersLength; n++){
                var value = void 0;
                var toNumber = tween.to.numbers[n];
                var fromNumber = tween.from.numbers[n] || 0;
                if (!tween.isPath) value = fromNumber + eased * (toNumber - fromNumber);
                else value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
                if (round) {
                    if (!(tween.isColor && n > 2)) value = Math.round(value * round) / round;
                }
                numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) progress = numbers[0];
            else {
                progress = strings[0];
                for(var s = 0; s < stringsLength; s++){
                    var a = strings[s];
                    var b = strings[s + 1];
                    var n$1 = numbers[s];
                    if (!isNaN(n$1)) {
                        if (!b) progress += n$1 + " ";
                        else progress += n$1 + b;
                    }
                }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
        }
    }
    function setCallback(cb) {
        if (instance[cb] && !instance.passThrough) instance[cb](instance);
    }
    function countIteration() {
        if (instance.remaining && instance.remaining !== true) instance.remaining--;
    }
    function setInstanceProgress(engineTime) {
        var insDuration = instance.duration;
        var insDelay = instance.delay;
        var insEndDelay = insDuration - instance.endDelay;
        var insTime = adjustTime(engineTime);
        instance.progress = minMax(insTime / insDuration * 100, 0, 100);
        instance.reversePlayback = insTime < instance.currentTime;
        if (children) syncInstanceChildren(insTime);
        if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback("begin");
        }
        if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback("loopBegin");
        }
        if (insTime <= insDelay && instance.currentTime !== 0) setAnimationsProgress(0);
        if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) setAnimationsProgress(insDuration);
        if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback("changeBegin");
            }
            setCallback("change");
            setAnimationsProgress(insTime);
        } else if (instance.changeBegan) {
            instance.changeCompleted = true;
            instance.changeBegan = false;
            setCallback("changeComplete");
        }
        instance.currentTime = minMax(insTime, 0, insDuration);
        if (instance.began) setCallback("update");
        if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                    instance.completed = true;
                    setCallback("loopComplete");
                    setCallback("complete");
                    if (!instance.passThrough && "Promise" in window) {
                        resolve();
                        promise = makePromise(instance);
                    }
                }
            } else {
                startTime = now;
                setCallback("loopComplete");
                instance.loopBegan = false;
                if (instance.direction === "alternate") toggleInstanceDirection();
            }
        }
    }
    instance.reset = function() {
        var direction = instance.direction;
        instance.passThrough = false;
        instance.currentTime = 0;
        instance.progress = 0;
        instance.paused = true;
        instance.began = false;
        instance.loopBegan = false;
        instance.changeBegan = false;
        instance.completed = false;
        instance.changeCompleted = false;
        instance.reversePlayback = false;
        instance.reversed = direction === "reverse";
        instance.remaining = instance.loop;
        children = instance.children;
        childrenLength = children.length;
        for(var i = childrenLength; i--;)instance.children[i].reset();
        if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) instance.remaining++;
        setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
    instance._onDocumentVisibility = resetTime;
    // Set Value helper
    instance.set = function(targets, properties) {
        setTargetsValue(targets, properties);
        return instance;
    };
    instance.tick = function(t) {
        now = t;
        if (!startTime) startTime = now;
        setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time) {
        setInstanceProgress(adjustTime(time));
    };
    instance.pause = function() {
        instance.paused = true;
        resetTime();
    };
    instance.play = function() {
        if (!instance.paused) return;
        if (instance.completed) instance.reset();
        instance.paused = false;
        activeInstances.push(instance);
        resetTime();
        engine();
    };
    instance.reverse = function() {
        toggleInstanceDirection();
        instance.completed = instance.reversed ? false : true;
        resetTime();
    };
    instance.restart = function() {
        instance.reset();
        instance.play();
    };
    instance.remove = function(targets) {
        var targetsArray = parseTargets(targets);
        removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) instance.play();
    return instance;
}
// Remove targets from animation
function removeTargetsFromAnimations(targetsArray, animations) {
    for(var a = animations.length; a--;)if (arrayContains(targetsArray, animations[a].animatable.target)) animations.splice(a, 1);
}
function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for(var c = children.length; c--;){
        var child = children[c];
        var childAnimations = child.animations;
        removeTargetsFromAnimations(targetsArray, childAnimations);
        if (!childAnimations.length && !child.children.length) children.splice(c, 1);
    }
    if (!animations.length && !children.length) instance.pause();
}
function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for(var i = activeInstances.length; i--;){
        var instance = activeInstances[i];
        removeTargetsFromInstance(targetsArray, instance);
    }
}
// Stagger helpers
function stagger(val, params) {
    if (params === void 0) params = {};
    var direction = params.direction || "normal";
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === "first";
    var fromCenter = fromIndex === "center";
    var fromLast = fromIndex === "last";
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i, t) {
        if (fromFirst) fromIndex = 0;
        if (fromCenter) fromIndex = (t - 1) / 2;
        if (fromLast) fromIndex = t - 1;
        if (!values.length) {
            for(var index = 0; index < t; index++){
                if (!grid) values.push(Math.abs(fromIndex - index));
                else {
                    var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                    var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                    var toX = index % grid[0];
                    var toY = Math.floor(index / grid[0]);
                    var distanceX = fromX - toX;
                    var distanceY = fromY - toY;
                    var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                    if (axis === "x") value = -distanceX;
                    if (axis === "y") value = -distanceY;
                    values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
            }
            if (easing) values = values.map(function(val) {
                return easing(val / maxValue) * maxValue;
            });
            if (direction === "reverse") values = values.map(function(val) {
                return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
            });
        }
        var spacing = isRange ? (val2 - val1) / maxValue : val1;
        return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
    };
}
// Timeline
function timeline(params) {
    if (params === void 0) params = {};
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
        var tlIndex = activeInstances.indexOf(tl);
        var children = tl.children;
        if (tlIndex > -1) activeInstances.splice(tlIndex, 1);
        function passThrough(ins) {
            ins.passThrough = true;
        }
        for(var i = 0; i < children.length; i++)passThrough(children[i]);
        var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
        insParams.targets = insParams.targets || params.targets;
        var tlDuration = tl.duration;
        insParams.autoplay = false;
        insParams.direction = tl.direction;
        insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
        passThrough(tl);
        tl.seek(insParams.timelineOffset);
        var ins = anime(insParams);
        passThrough(ins);
        children.push(ins);
        var timings = getInstanceTimings(children, params);
        tl.delay = timings.delay;
        tl.endDelay = timings.endDelay;
        tl.duration = timings.duration;
        tl.seek(0);
        tl.reset();
        if (tl.autoplay) tl.play();
        return tl;
    };
    return tl;
}
anime.version = "3.2.1";
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = anime;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bc3EI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function audioImplementation(homePage) {
    const showreelHome = document.querySelector("#showreel_video");
    const showreelNav = document.querySelector("#showreelNavXL_video");
    // MOBILE CHECK
    window.mobileCheck = function() {
        let check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };
    const isMobile = mobileCheck();
    // Exit early if on mobile to prevent loading or playing UI sounds
    if (isMobile) return;
    // MUTE STATE
    let isMuted = false;
    let linkClicked = false;
    let muteState = sessionStorage.getItem("muteState");
    let musicState = sessionStorage.getItem("musicTime");
    if (muteState) {
        muteState = muteState == "true" ? muteState = true : muteState = false;
        isMuted = muteState;
    }
    // LOAD BG MUSIC
    music = new Audio();
    const music_volume = 0.3;
    music.volume = music_volume;
    music.loop = true;
    music.src = "https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/Music/ps-website-music-v2.mp3";
    // IF MUSIC STATE IS PRESENT, FADE IN (IF IT'S NOT MOBILE)
    if (document.readyState !== "loading") {
        if (musicState) music.currentTime = musicState + 10;
        if (mobileCheck() == false && muteState == false) fadeInMusic();
    }
    // FADE MUSIC OUT & STORE IN SESSION STATE BEFORE UNLOAD
    window.onbeforeunload = function() {
        sessionStorage.setItem("musicTime", music.currentTime);
        sessionStorage.setItem("muteState", isMuted);
        if (mobileCheck() == false) {
            if (!isMuted && !linkClicked) fadeToggle(music, music_volume, false);
        }
    };
    // MUTE AUDIO IF USER NAVIGATES AWAY FROM BROWSER-TAB
    document.addEventListener("visibilitychange", function() {
        if (mute_lottie.loop) {
            if (document.hidden) music.muted = true;
            else music.muted = false;
        }
    });
    // ************ UI AUDIO ************
    // preloader sound <-- currently using html audio from webflow instead
    // preloader_sound = new Audio();
    // addSrc(preloader_sound, 'preloader_sound');
    // open hamburger-menu sound
    frog_ui_open_menu = new Audio();
    addSrc(frog_ui_open_menu, "frog_ui_open_WET");
    // close hamburger-menu sound
    frog_ui_close_menu = new Audio();
    addSrc(frog_ui_close_menu, "frog_ui_close_WET");
    // menu click sounds
    frog_ui_single_click_1 = new Audio();
    addSrc(frog_ui_single_click_1, "frog_ui_single_1_WET");
    frog_ui_single_click_2 = new Audio();
    addSrc(frog_ui_single_click_2, "frog_ui_single_2_WET");
    // menu hover clack sound
    wood_clack_hover_menu = new Audio();
    wood_clack_hover_menu.volume = 0.9;
    addSrc(wood_clack_hover_menu, "wood_clack");
    // project hover & click sounds
    project_hover = new Audio();
    project_hover.volume = 0.4;
    addSrc(project_hover, "ui_hover_WET");
    project_click = new Audio();
    project_click.volume = 0.8;
    addSrc(project_click, "ui_click_WET");
    // text hover sound
    text_hover = new Audio();
    text_hover.volume = 0.1;
    addSrc(text_hover, "text_hover");
    // logo click sound
    home_ui = new Audio();
    addSrc(home_ui, "home_ui");
    // define metamorphosis sound
    metamorphosis_ui = new Audio();
    addSrc(metamorphosis_ui, "frog_sfx");
    // logo hover sound
    ps_logo_hover = new Audio();
    ps_logo_hover.loop = true;
    const logo_hover_volume = 0.2;
    ps_logo_hover.volume = logo_hover_volume;
    addSrc(ps_logo_hover, "hover_sound_short");
    // UI SOUNDS ARRAY
    const uiSounds = [
        frog_ui_open_menu,
        frog_ui_close_menu,
        frog_ui_single_click_1,
        frog_ui_single_click_2,
        wood_clack_hover_menu,
        project_hover,
        project_click,
        text_hover,
        ps_logo_hover,
        home_ui
    ];
    // ^ADD AUDIO VARIABLES HERE IF YOU WANT THEM TO BE INCLUDED IN MUTE FUNCTIONALITY
    // MUTE FUNCTIONALITY
    const mute_btn = document.querySelector("#mute-btn-container");
    const soundwave = document.querySelector(".soundwave-svg");
    const wave = document.querySelectorAll(".wave");
    // toggle css animation on click
    soundwave.addEventListener("click", function() {
        toggleCssAnim();
    });
    // MUTE LOTTIE
    // need bodymovin cdn in header for this to work
    const mute_lottie = bodymovin.loadAnimation({
        container: mute_btn,
        path: "https://uploads-ssl.webflow.com/5f287eb0037f68c8a08d3520/639bd27ee53aaa1429f32a14_audio_wave_shorter.json",
        renderer: "svg",
        loop: true,
        autoplay: true
    });
    let showreelMuteState = false;
    // MUTE BUTTON TOGGLE ON CLICK
    mute_btn.addEventListener("click", function() {
        muteToggle();
        const isMobile = mobileCheck() == false;
        if (showreelHome) {
            if (!isMuted) {
                if (isMobile) {
                    if (!showreelHome.muted || !showreelNav.muted) // console.log("user unmuted during video playback");
                    showreelMuteState = false;
                    else {
                        // console.log("custom mute func ran");
                        music.volume = music_volume;
                        music.muted = false;
                    }
                }
                playLottie();
            } else {
                if (!showreelHome.muted || !showreelNav.muted) // console.log("user muted during video playback");
                showreelMuteState = true;
                stopLottie();
            }
        } else if (!isMuted) {
            if (isMobile) {
                if (!showreelNav.muted) // console.log("user unmuted during video playback");
                showreelMuteState = false;
                else {
                    // console.log("custom mute func ran");
                    music.volume = music_volume;
                    music.muted = false;
                }
            }
            playLottie();
        } else {
            if (!showreelNav.muted) // console.log("user muted during video playback");
            showreelMuteState = true;
            stopLottie();
        }
        if (muteState) music.play();
    });
    function playLottie() {
        mute_lottie.setSpeed(1);
        mute_lottie.loop = true;
        mute_lottie.play();
    }
    function stopLottie() {
        music.volume = 0;
        mute_lottie.setSpeed(1.5);
        mute_lottie.loop = false;
    }
    // catch to make sure music & mute-lottie is never out of sync
    mute_btn.addEventListener("click", function() {
        if (mobileCheck() == false) {
            if (!mute_lottie.loop) fadeOutMusic();
            else fadeInMusic();
        }
    });
    // MUTE ALL if user is muted
    if (muteState !== null && isMuted) {
        muteAll(uiSounds);
        if (mobileCheck() == false) fadeToggle(music, music_volume, false);
        // stop mute-btn lottie from playing - OLD
        mute_lottie.autoplay = false;
        // stop mute-btn lottie from playing - NEW
        wave.forEach((e)=>{
            e.setAttribute("style", "animation-iteration-count: 0!important;");
        });
    }
    // PLAY MUSIC WHEN CLICKED ANYWHERE (IF NO PRELOADER)
    if (muteState == false) document.body.addEventListener("click", function() {
        if (!isMuted && music.paused && mobileCheck() == false) music.play();
    });
    // ************ AUDIO TRIGGERS ************
    // PRELOADER TRIGGER
    const preloader_trigger = document.querySelectorAll("#trigger");
    const preloader_sound = document.querySelector("#preloader_sound");
    playSound(preloader_trigger, preloader_sound);
    playSound(preloader_trigger, music);
    // MENU NAV-LINKS
    const menu_links = document.querySelectorAll(".menu-link-box");
    playSound(menu_links, frog_ui_single_click_1, wood_clack_hover_menu);
    menu_links.forEach((link)=>{
        link.addEventListener("click", function() {
            wood_clack_hover_menu.muted = true;
            fadeOutMusic();
        });
    });
    // ABOUT DEFINITION CARD - AMPHIBIOUS LANGUAGE
    const amphibious_lang = document.querySelectorAll(".logo-sound");
    playSound(amphibious_lang, project_click, project_hover);
    // TEAM CARDS
    const team_links = document.querySelectorAll(".team-link-box");
    playSound(team_links, project_click, project_hover);
    // NEW HOME HOVER LINKS
    const home_links = document.querySelectorAll(".home-hover-outer");
    playSound(home_links, project_click, project_hover);
    // PROJECT LINKS & ALL ELEMENTS WITH CLASS NAME CARD SOUND
    const project_links = document.querySelectorAll(".project-link-wrapper, .project-link, .card-sound");
    playSound(project_links, project_click, project_hover);
    // ADD STANDARD UI SOUND TO ELEMENT
    const add_ui_sound = document.querySelectorAll(".add_ui_sound");
    playSound(add_ui_sound, project_click, project_hover);
    // ADD STANDARD UI SOUND TO ELEMENT - HOVER ONLY
    const add_ui_sound_hover = document.querySelectorAll(".add_ui_sound-hover-only");
    add_ui_sound_hover.forEach((trigger)=>{
        if (project_hover) trigger.addEventListener("mouseenter", function() {
            project_hover.currentTime = 0;
            project_hover.play();
        });
    });
    // UNDERLINED TEXT SOUNDS
    const underline_links = document.querySelectorAll(".gets-underlined, .underlined, .underline-sound");
    // FILTER OUT HOVER SOUND FOR 'OPEN POSITIONS' CAREERS CARDS and CONTENT HUB cards
    const filter_Out = [
        "sml",
        "content-hub-heading"
    ];
    playSound(underline_links, project_click, project_hover, filter_Out);
    // ARTICLE LINKS
    const article_links = document.querySelectorAll(".article-rich-text a");
    playSound(article_links, project_click, project_hover);
    // TAG-TEXT & ALL ELEMENTS WITH CLASS NAME TAG SOUND
    const tag_text = document.querySelectorAll(".tag-text, .button-text, .tag-sound");
    playSound(tag_text, frog_ui_single_click_2, text_hover);
    // FOOTER
    const footer_sound = document.querySelectorAll(".footer-sound");
    playSound(footer_sound, frog_ui_single_click_2, text_hover);
    // MUTE BTN
    const mute_btn_container = document.querySelectorAll("#mute-btn-container");
    playSound(mute_btn_container, frog_ui_single_click_2, text_hover);
    // CAREERS ACCORDION
    const careers_accordion = document.querySelectorAll(".career-subtitle-box");
    playSound(careers_accordion, frog_ui_single_click_1, text_hover);
    // CAREERS ARROW-BTNS
    const arrow_btns = document.querySelectorAll(".arrow");
    playSound(arrow_btns, frog_ui_single_click_2, text_hover);
    // HAMBURGER-MENU OPEN & CLOSE
    const hamburger_open = document.querySelector(".hamburger-box");
    const hamburger_close = document.querySelector(".burger-close-icon");
    // ABOUT DEFINITION CARD
    const about_definition = document.querySelectorAll(".see-more-button");
    playSound(about_definition, project_click, project_hover);
    // DEFINE METAMORPHOSIS BUTTON
    const metamorphosis_btn = document.querySelectorAll("#metamorphosis-btn");
    playSound(metamorphosis_btn, metamorphosis_ui);
    const navPlayReel = document.querySelector(".navbar_playreel-wrapper");
    let humburgerState = "closed";
    navPlayReel.addEventListener("click", ()=>{
        humburgerState = "closed";
    });
    // HAMBURGER MENU SOUNDS
    hamburger_open.addEventListener("click", function() {
        frog_ui_open_menu.currentTime = 0;
        frog_ui_open_menu.play();
        humburgerState = "open";
        setTimeout(()=>{
            wave.forEach((stroke)=>{
                stroke.style.fill = "#101012"; // change mute btn lottie to black
            });
        }, 500);
    });
    hamburger_open.addEventListener("mouseenter", function() {
        wood_clack_hover_menu.currentTime = 0;
        const closeAudio = wood_clack_hover_menu;
        closeAudio.volume = 0.9;
        closeAudio.play();
    });
    hamburger_close.addEventListener("click", function() {
        frog_ui_close_menu.currentTime = 0;
        frog_ui_close_menu.play();
        humburgerState = "closed";
        wave.forEach((stroke)=>{
            stroke.style.fill = "#F5F4F2"; // change mute btn lottie back to white
        });
    });
    hamburger_close.addEventListener("mouseenter", function() {
        wood_clack_hover_menu.currentTime = 0;
        const closeAudio = wood_clack_hover_menu;
        closeAudio.volume = 0.9;
        closeAudio.play();
    });
    // LOGO HOME CLICK & HOVER
    const home_link = document.querySelectorAll("#ps-logo-wrap, #ps-logo-wrap-black");
    home_link.forEach((link)=>{
        link.addEventListener("click", function() {
            project_hover.pause();
            home_ui.play();
            fadeOutMusic();
            ps_logo_hover.volume = 0;
        });
        // PS-LOGO HOVER SOUNDS
        link.addEventListener("mouseenter", function() {
            ps_logo_hover.currentTime = 0.1;
            ps_logo_hover.loop = true;
            ps_logo_hover.volume = logo_hover_volume;
            if (isMuted == false) ps_logo_hover.muted = false;
            ps_logo_hover.play();
        });
        link.addEventListener("mouseleave", function() {
            ps_logo_hover.loop = false;
        });
    });
    // ************ CUSTOM FUNCTIONS ************
    // func to add src url to audio variable
    function addSrc(audio, file) {
        audio.src = `https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/UI/${file}.mp3`;
    }
    // func to play a specified sound either click or hover, with the option to filter out a class
    function playSound(triggerLink, clickSound, hoverSound, filteredClass) {
        triggerLink.forEach((trigger)=>{
            trigger.addEventListener("click", function() {
                if (trigger.nodeName == "A") fadeOutMusic();
                clickSound.currentTime = 0;
                clickSound.play();
            });
            if (hoverSound) trigger.addEventListener("mouseenter", function() {
                // check if a filtered class exists
                if (filteredClass == undefined) {
                    hoverSound.currentTime = 0;
                    hoverSound.play();
                } else {
                    // if it exists, exit, if it doesn't play sound
                    if (filterOut(trigger, filteredClass)) return;
                    else {
                        hoverSound.currentTime = 0;
                        hoverSound.play();
                    }
                }
            });
        });
    }
    // func to filer out a class from nodelist
    const filterOut = (trigger, filteredClass)=>{
        let isFiltered = false;
        filteredClass.forEach((className)=>{
            if (trigger.classList.contains(className)) isFiltered = true;
        });
        return isFiltered;
    };
    // func to fade out music smoothly
    function fadeOutMusic() {
        if (!isMuted && mobileCheck() == false) fadeToggle(music, music_volume, false);
        linkClicked = true;
    }
    //func to fade in music smoothly
    function fadeInMusic() {
        music.play();
        const condition1 = showreelHome && (showreelHome.muted || showreelNav.muted);
        const condition2 = !showreelHome && showreelNav.muted;
        const overallCondition = (condition1 || condition2) && !isMuted;
        if (overallCondition) {
            music.volume = 0;
            $(music).animate({
                volume: music_volume
            }, 1500, "linear");
        }
    }
    // func to toggle volume
    function fadeToggle(audio = music, maxVolume = music_volume, isFromShowreel = true) {
        const condition1 = homePage && (showreelHome.muted || showreelNav.muted);
        const condition2 = !homePage && showreelNav.muted;
        const overallCondition = (condition1 || condition2) && isFromShowreel;
        if (overallCondition) {
            let muted = audio.muted;
            if (muted && !isFromShowreel) audio.muted = false;
            let newVolume = muted ? maxVolume : 0;
            if (!isFromShowreel) newVolume = maxVolume;
            $(audio).animate({
                volume: muted ? maxVolume : 0
            }, 1000, function() {
                audio.muted = !muted;
            });
        }
    }
    // func to toggle mute state
    function muteToggle() {
        if (isMuted) {
            unmuteAll(uiSounds);
            isMuted = false;
            showreelMuteState = false;
        } else {
            muteAll(uiSounds);
            isMuted = true;
            showreelMuteState = true;
        }
    }
    // func to mute all sounds
    function muteAll(audioArr = uiSounds) {
        audioArr.forEach((audio)=>{
            audio.muted = true;
        });
    }
    // func to unmute all sounds
    function unmuteAll(audioArr = uiSounds) {
        audioArr.forEach((audio)=>{
            audio.muted = false;
        });
    }
    // func to return mute state
    function mutedState() {
        return isMuted;
    }
    function getShowreelMuteState() {
        return showreelMuteState;
    }
    // forcefully set mute state
    function setMuteState(state) {
        isMuted = state;
    }
    // func to toggle the css animation of the soundwave (mute-btn)
    function toggleCssAnim() {
        wave.forEach((e)=>{
            const style = getComputedStyle(e);
            if (style["animation-iteration-count"] == "infinite") e.setAttribute("style", "animation-iteration-count: 1!important;");
            else e.setAttribute("style", "animation-iteration-count: infinite!important;");
            // catch to ensure mute btn stays black when toggled whilst hamburger menu is open
            if (humburgerState == "open") e.style.fill = "#101012"; //set mute svg fill back to white
        });
    }
    return {
        isMuted,
        muteState,
        muteToggle,
        addSrc,
        playSound,
        filterOut,
        fadeOutMusic,
        fadeInMusic,
        fadeToggle,
        muteAll,
        unmuteAll,
        mutedState,
        toggleCssAnim,
        setMuteState,
        getShowreelMuteState
    };
}
exports.default = audioImplementation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVfHp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showreelHome", ()=>showreelHome);
// NAV SHOWREEL
parcelHelpers.export(exports, "showreelNav", ()=>showreelNav);
function showreelHome(audio) {
    const fadeMusicToggle = audio?.fadeToggle;
    const showreelMuteState = audio?.getShowreelMuteState;
    const homeBlock = document.querySelector("#showreel_block_home");
    const showreelVideo = document.querySelector("#showreel_video");
    const clickToUnmuteUI = document.querySelector(".showreel-ui-wrapper");
    const clickToMuteUI = document.querySelector(".showreel-ui-wrapper-2");
    const soundBtns = Array.from(document.querySelectorAll(".showreel-sound-button"));
    showreelVideo.volume = 0.7;
    let clickLogic = "none";
    let outOfView = false;
    // homepage showreel click logic
    homeBlock.addEventListener("click", ()=>{
        switch(clickLogic){
            case "none":
                firstClickLogic();
                break;
            case "once":
                secondClickLogic();
                break;
            case "twice":
                thirdClickLogic();
                break;
            default:
                firstClickLogic();
        }
    });
    // FIRST CLICK LOGIC
    function firstClickLogic() {
        showreelVideo.muted = false; //unmute video
        showreelVideo.currentTime = 0; //restart video
        clickToUnmuteUI.style.display = "none"; //hide unmute ui
        clickToMuteUI.style.opacity = 0; // set mute opacity to 0
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        clickLogic = "once"; //update click logic
        outOfView = false; //ensure out of view logic is false
    }
    // SECOND CLICK LOGIC
    function secondClickLogic() {
        showreelVideo.muted = true; //mute video again
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        clickToUnmuteUI.style.opacity = "100"; // set unmute opacity to 100
        clickToUnmuteUI.style.display = "flex"; // display unmute ui
        clickToMuteUI.style.display = "none"; // hide mute ui
        clickLogic = "twice"; //update click logic
    }
    // THIRD CLICK LOGIC
    function thirdClickLogic() {
        showreelVideo.muted = false; //unmute video
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        clickToUnmuteUI.style.display = "none"; //hide unmute ui
        clickLogic = "once"; //update click logic
        outOfView = false; //ensure out of view logic is false
    }
    // catch for if user scrolls video out of view or clicks on nav
    showreelVideo.addEventListener("pause", function() {
        outOfView = true;
        if (showreelVideo.muted == false && // check if video is unmuted
        document.visibilityState == "visible" // check if user is not in another tab
        ) {
            secondClickLogic();
            clickLogic = "none"; //reset click logic
        }
    }, false);
    // catch to ensure mute ui is never visible when unmute ui is
    homeBlock.addEventListener("mouseenter", ()=>{
        if (clickToUnmuteUI.style.display == "flex") clickToMuteUI.style.display = "none";
    });
    // initial show / hide on hover
    homeBlock.addEventListener("mouseenter", ()=>{
        const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
        if (unMuteStyle.display == "none" && showreelVideo.muted) clickToUnmuteUI.style.display = "flex";
    });
    // hover out interaction with checks to ensure its not hovering out into the sound btns itself
    clickToUnmuteUI.addEventListener("mouseout", (event)=>{
        const unMuteStyle = window.getComputedStyle(clickToUnmuteUI);
        // Check if the mouse is still over clickToUnmuteUI or any soundBtns
        const isHoveringSoundBtns = soundBtns.some((btn)=>btn.contains(event.relatedTarget));
        const isHoveringClickToUnmute = clickToUnmuteUI.contains(event.relatedTarget);
        if (!isHoveringSoundBtns && !isHoveringClickToUnmute && unMuteStyle.display === "flex" && showreelVideo.muted) clickToUnmuteUI.style.display = "none";
    });
    // catch if user hovers off showreel, after clicking once
    showreelVideo.addEventListener("mouseout", function() {
        const clickedOnce = clickLogic == "once";
        if (clickedOnce && !outOfView) setTimeout(()=>{
            clickToMuteUI.style.display = "flex";
        }, 500);
    });
}
function showreelNav(audio) {
    const fadeMusicToggle = audio?.fadeToggle;
    const showreelMuteState = audio?.getShowreelMuteState;
    const navPlayReel = document.querySelector(".navbar_playreel-wrapper");
    const wave = document.querySelectorAll(".wave");
    const showreelVideo = document.querySelector("#showreelNavXL_video");
    showreelVideo.volume = 0.7;
    // on showreel-nav click
    navPlayReel.addEventListener("click", ()=>{
        showreelVideo.muted = false; //unmute video
        showreelVideo.currentTime = 0; //restart video
        if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        wave.forEach((stroke)=>{
            stroke.style.fill = "#F5F4F2"; //set mute svg fill back to white
        });
    });
    // when user navigates away from showreel
    showreelVideo.addEventListener("pause", function() {
        if (showreelVideo.muted == false && document.visibilityState == "visible") {
            if (fadeMusicToggle && showreelMuteState && !showreelMuteState()) fadeMusicToggle(); //if unmuted, toggle music fade
        }
    }, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTFyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stopCmdClick", ()=>stopCmdClick);
function stopCmdClick() {
    document.addEventListener("click", function(e) {
        if (e.ctrlKey || e.metaKey) document.querySelectorAll(".menu-transition-cover").forEach((element)=>{
            element.setAttribute("style", "visibility:hidden !important");
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8GDbY":[function(require,module,exports) {
// ADDING NEW HOMEPAGE VIDEOS GUIDE
// 1. compress videos using handbrake, 1 for desktop at 1080p, 1 for laptop at 720p, 1 for mobile at 480p (name video_device.mp4)
// 2. add the video to the Responsive-Videos folder in the digital ocean space
// 3. change ID's, titles and poster images in custom code embeds on videos in webflow
// 4. update titles in LazyLoadHomeVideos and in setAllHomepageVideoSources function
// 5. ensure trigger elements are set up correctly (section above respective video)
// dynamically set video sources based on screen size
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// call to set all nav showreel video sources
parcelHelpers.export(exports, "responsiveNavShowreel", ()=>responsiveNavShowreel);
// call to set all homepage video sources
parcelHelpers.export(exports, "setAllHomepageVideoSources", ()=>setAllHomepageVideoSources);
// Main function to lazy load home videos
// first ID should be the video element from the custom code embed on the homepage
// second ID should be the trigger element from the section above the video
// make sure the id is the same as the video name
parcelHelpers.export(exports, "lazyLoadHomeVideos", ()=>lazyLoadHomeVideos);
parcelHelpers.export(exports, "contentHubDynamicVideos", ()=>contentHubDynamicVideos);
function setVideoSource(video) {
    let videoSrc;
    const isContentHub = video == "content-hub";
    const videoElem = isContentHub ? document.querySelector(".content-hub-video") : document.getElementById(`${video}_video`);
    if (window.innerWidth <= 560) videoSrc = isContentHub ? getURLContentHub(videoElem, "mobile") : getURL(video, "mobile");
    else if (window.innerWidth <= 1680) videoSrc = isContentHub ? getURLContentHub(videoElem, "laptop") : getURL(video, "laptop");
    else videoSrc = isContentHub ? getURLContentHub(videoElem, "desktop") : getURL(video, "desktop");
    // Check if the current source is already set, then update it
    if (isContentHub) {
        const sourceElement = videoElem.querySelector("source");
        let videoSource = sourceElement ? sourceElement.getAttribute("src") : null;
        if (sourceElement.getAttribute("src") !== videoSrc) {
            videoSource = videoSrc;
            sourceElement.setAttribute("src", videoSource);
            videoElem.load();
            videoElem.play();
        }
    } else {
        if (videoElem.getAttribute("src") !== videoSrc) try {
            videoElem.pause(); // Pause the video before changing the src
            videoElem.removeAttribute("src"); // Clear the current src to ensure a fresh load
            videoElem.setAttribute("src", videoSrc); // Set the new src
            videoElem.load(); // Explicitly load the video
        } catch (error) {
            console.warn(`Failed to update video source for ${video}`, error);
        }
    }
    // Preload only if the video is already in the viewport
    const isInViewport = (elem)=>{
        const rect = elem.getBoundingClientRect();
        return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.right > 0;
    };
    if (isInViewport(videoElem) && videoElem.paused) videoElem.play().catch((error)=>{
        console.warn(`Failed to autoplay video: ${video}`, error);
    });
}
function responsiveNavShowreel() {
    function satNavSources() {
        setVideoSource("showreelNav");
        setVideoSource("showreelNavXL");
    }
    satNavSources();
    debounceWindowResizedListener(satNavSources);
}
function setAllHomepageVideoSources() {
    function setAllVideoSources() {
        setVideoSource("superai");
        setVideoSource("wow");
        setVideoSource("sgf-25");
        setVideoSource("showreel");
        setVideoSource("metamorphoses");
    }
    setAllVideoSources();
    debounceWindowResizedListener(setAllVideoSources);
}
function lazyLoadHomeVideos() {
    // SUPERAI VIDEO
    setupLazyLoad(document.getElementById("superai_video"), document.getElementById("agency-section"));
    // WOW VIDEO
    setupLazyLoad(document.getElementById("wow_video"), document.getElementById("project-thumbnails"));
    // SGF VIDEO
    setupLazyLoad(document.getElementById("sgf-25_video"), document.getElementById("project-thumbnails-2"));
    // SHOWREEL VIDEO
    setupLazyLoad(document.getElementById("showreel_video"), document.getElementById("project-thumbnails-3"));
    // HERO TESSELATION VIDEO
    setupLazyLoad(document.getElementById("metamorphoses_video"), document.getElementById("metamorphoses_video"));
}
function contentHubDynamicVideos() {
    debounceWindowResizedListener(()=>setVideoSource("content-hub"));
}
// UTILITY FUNCTIONS
// set up IntersectionObserver for lazy loading videos
function setupLazyLoad(videoElement, triggerElement) {
    const observer = new IntersectionObserver(([entry])=>{
        if (entry.isIntersecting) {
            videoElement.setAttribute("preload", "auto"); // Preload the video
            videoElement.play(); // Play the video
            observer.unobserve(triggerElement); // Stop observing after triggering
        }
    }, {
        threshold: 0
    });
    observer.observe(triggerElement); // Start observing the trigger element
}
// render new video source based on window screen size change event
function debounceWindowResizedListener(func) {
    let resizeTimeout;
    window.addEventListener("resize", ()=>{
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(func, 500);
    });
}
// return correct digital ocean url
function getURL(video, device) {
    let url;
    if (video.includes("Nav")) url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/showreel_${device}.mp4`;
    else url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/${video}_${device}.mp4`;
    return url;
}
function getURLContentHub(video, device) {
    const sourceElement = video.querySelector("source");
    const videoSource = sourceElement ? sourceElement.getAttribute("src") : null;
    const match = videoSource.match(/\/([^\/]+)_(mobile|laptop|desktop)\.mp4$/);
    const videoTitle = match ? match[1] : null;
    const url = `https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/Responsive-Videos/${videoTitle}_${device}.mp4`;
    return url;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4M5wA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = aboutPageCode = ()=>{
    // alert("we live on about page");
    // GSAP Words fade in animation
    const scrollingHighlightElements = document.querySelectorAll("[data-animation='scrolling-highlight']");
    scrollingHighlightElements.forEach((element)=>{
        const splitText = new SplitType(element, {
            types: [
                "chars",
                "words"
            ]
        });
        gsap.from(splitText.chars, {
            scrollTrigger: {
                trigger: element,
                start: "top 75%",
                end: "top 25%",
                scrub: true
            },
            opacity: 0.05,
            stagger: 0.1
        });
    });
    const scrollingHighlightElementsBg = document.querySelectorAll("[data-animation='scrolling-highlight-bg']");
    scrollingHighlightElementsBg.forEach((element)=>{
        const splitText = new SplitType(element, {
            types: [
                "chars",
                "words"
            ]
        });
        gsap.from(splitText.chars, {
            scrollTrigger: {
                trigger: element,
                start: "top 75%",
                end: "top 25%",
                scrub: true
            },
            opacity: 1,
            stagger: 0.1
        });
    });
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    // JavaScript Metamorphosis typewriting effect
    const typewriteText = (element, text, delay = 50)=>{
        let index = 0;
        const type = ()=>{
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else // Add blinking cursor after typing is complete
            element.innerHTML += '<span class="blinking-cursor">|</span>';
        };
        type();
    };
    // Function to handle intersection observer
    const handleTypewritingOnScroll = ()=>{
        const element = document.querySelector(".definition_search-bar_text");
        if (!element) return;
        // Initially hide the element
        element.style.visibility = "hidden";
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    element.style.visibility = "visible"; // Make visible when in view
                    const fullText = element.getAttribute("data-text");
                    element.textContent = ""; // Clear text before typing
                    typewriteText(element, fullText);
                } else {
                    // Reset the content and visibility when out of view
                    element.textContent = "";
                    element.style.visibility = "hidden";
                }
            });
        }, {
            threshold: 0
        } // Trigger as soon as it enters or exits the viewport
        );
        observer.observe(element);
    };
    // Run function on page load
    handleTypewritingOnScroll();
    // Optionally retrigger on click - currently has a spam clicking bug though
    // document
    //   .querySelector(".definition_search-bar")
    //   ?.addEventListener("click", handleTypewritingOnScroll);
    // CSS for blinking cursor
    const style = document.createElement("style");
    style.textContent = `
  .blinking-cursor {
      display: inline-block;
      width: 0.2ch;
      animation: blink 1s steps(1) infinite;
      margin-left: 0.25rem;
  }

  @keyframes blink {
      0%, 100% {
          opacity: 0.7;
      }
      50% {
          opacity: 0;
      }
  }

  .definition_search-bar_text {
      visibility: hidden; /* Initially hide the element */
  }
`;
    document.head.appendChild(style);
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
    // Function to initialize the mouse follower
    const initializeMouseFollower = ()=>{
        const container = document.getElementById("container");
        const follower = document.getElementById("follower");
        if (container && follower) {
            if (window.innerWidth > 991) {
                container.style.position = "relative";
                follower.style.position = "absolute";
                follower.style.transform = "scale(0)";
                follower.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease-out";
                follower.style.transformOrigin = "center center";
                follower.style.opacity = "0";
            }
            const followerRadius = follower.offsetWidth / 2;
            let targetX = -100; // Start outside viewport to avoid (0,0) jump
            let targetY = -100;
            let currentX = targetX;
            let currentY = targetY;
            const lerp = (start, end, t)=>start + (end - start) * t;
            const updateFollowerPosition = ()=>{
                if (window.innerWidth > 991) {
                    // Adjust the lerp value for stickier behavior (lower = more sticky)
                    currentX = lerp(currentX, targetX, 0.2);
                    currentY = lerp(currentY, targetY, 0.2);
                    follower.style.left = `${currentX - followerRadius}px`;
                    follower.style.top = `${currentY - followerRadius}px`;
                    requestAnimationFrame(updateFollowerPosition);
                }
            };
            container.addEventListener("mouseenter", (e)=>{
                if (window.innerWidth > 991) {
                    const rect = container.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    targetX = mouseX;
                    targetY = mouseY;
                    currentX = targetX; // Immediately update to avoid animation lag
                    currentY = targetY;
                    follower.style.left = `${currentX - followerRadius}px`;
                    follower.style.top = `${currentY - followerRadius}px`;
                    requestAnimationFrame(()=>{
                        follower.style.transform = "scale(1)";
                        follower.style.opacity = "1";
                    });
                }
            });
            container.addEventListener("mouseleave", ()=>{
                if (window.innerWidth > 991) {
                    requestAnimationFrame(()=>{
                        follower.style.transform = "scale(0)";
                        follower.style.opacity = "0";
                    });
                    setTimeout(()=>{
                        // Keep the last known position instead of resetting off-screen
                        targetX = currentX;
                        targetY = currentY;
                    }, 400); // Matches transition time
                }
            });
            container.addEventListener("mousemove", (e)=>{
                if (window.innerWidth > 991) {
                    const rect = container.getBoundingClientRect();
                    const mouseX = e.clientX - rect.left;
                    const mouseY = e.clientY - rect.top;
                    targetX = mouseX;
                    targetY = mouseY;
                }
            });
            updateFollowerPosition();
        }
    };
    // Variable to track whether the mouse follower is active
    let mouseFollowerActive = false;
    // Function to handle enabling/disabling the mouse follower
    const handleMouseFollower = ()=>{
        const follower = document.getElementById("follower");
        if (window.innerWidth > 991) {
            if (!mouseFollowerActive) {
                initializeMouseFollower();
                mouseFollowerActive = true;
            }
        } else {
            mouseFollowerActive = false;
            if (follower) {
                // Reset styles when below threshold
                follower.style.transform = "";
                follower.style.opacity = "";
            }
        }
    };
    // Run on initial load and on window resize
    handleMouseFollower();
    window.addEventListener("resize", handleMouseFollower);
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
// SWAP HERO VIDEO TO MOBILE / BACK
// document.addEventListener("DOMContentLoaded", (event) => {
// Cache all video elements
// const allVideos = document.querySelectorAll(".background-video");
// console.log(allVideos);
// // Debounce function to prevent frequent calls
// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, args), wait);
//   };
// }
// // Function to update video sources based on screen width
// function updateVideoSources() {
//   allVideos.forEach((video) => {
//     console.log("update, ", video);
//     const currentSrc = video.querySelector("source").src;
//     const screenWidth = window.innerWidth;
//     let newSrc;
//     if (screenWidth <= 479) {
//       newSrc =
//         "https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/About-Page/psychoactive%20texture%20video%20MOBILE.mp4";
//     } else {
//       newSrc =
//         "https://psychoactive-website-media.sfo3.cdn.digitaloceanspaces.com/About-Page/psychoactive%20texture%20video.mp4";
//     }
//     if (currentSrc !== newSrc) {
//       video.pause();
//       video.querySelector("source").setAttribute("src", newSrc);
//       video.load();
//       video.play();
//     }
//   });
// }
// // Initial setup
// updateVideoSources();
// // Debounced event listener for window resize
// window.addEventListener("resize", debounce(updateVideoSources, 100));
// });
}; ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 // ASCI ART ANIMATOR
 // document.addEventListener("DOMContentLoaded", function () {
 //   function loadSVG() {
 //     const container = document.getElementById("asci-left");
 //     // URL or path to the SVG file
 //     const svgURL =
 //       "https://cdn.prod.website-files.com/6761fc8483c673ae45ad8f4e/6784bf272a5d360fc3d33bb9_asci-art-left.svg";
 //     fetch(svgURL)
 //       .then((response) => response.text())
 //       .then((svgText) => {
 //         container.innerHTML = svgText; // Load SVG content into the div
 //         // Wait for SVG to fully load and for DOM to update
 //         setTimeout(() => {
 //           const svgElement = document.querySelector(".asci-art");
 //           if (svgElement) {
 //             console.log(svgElement);
 //             // Function to change the fill color to red
 //             function changeToRed() {
 //               svgElement.style.fill = "red";
 //             }
 //             // Function to change the fill color back to white
 //             function changeToWhite() {
 //               svgElement.style.fill = "#fff";
 //             }
 //             function randomFlicker() {
 //               const flickers = getRandomInt(2, 6); // Random number of flickers (2 to 6)
 //               const pause = getRandomInt(500, 3000); // Random pause (0.5 to 3 seconds)
 //               let flickCount = 0;
 //               function flick() {
 //                 if (flickCount < flickers) {
 //                   if (Math.random() > 0.5) {
 //                     changeToRed();
 //                   } else {
 //                     changeToWhite();
 //                   }
 //                   flickCount++;
 //                   setTimeout(flick, 5); // Quick switch every 100ms
 //                 } else {
 //                   setTimeout(() => {
 //                     randomFlicker();
 //                   }, pause); // Pause after flicker
 //                 }
 //               }
 //               flick();
 //             }
 //             function getRandomInt(min, max) {
 //               return Math.floor(Math.random() * (max - min + 1) + min);
 //             }
 //             // Start the flicker behavior
 //             randomFlicker();
 //           } else {
 //             console.log("SVG element not found.");
 //           }
 //         }, 100); // Timeout to ensure DOM update
 //       })
 //       .catch((error) => console.error("Error loading SVG:", error));
 //   }
 //   // Call the function to load the SVG
 //   loadSVG();
 // });
 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 ///////////////////// ///////////////////// ///////////////////// ///////////////////// ///////////////////// /////////////////////
 // old version of text fade GSAP, taken from psychoactive work inner pages
 // let typeSplit = new SplitType("[text-split]", {
 //   // Split text into spans
 //   types: "words, chars",
 //   tagName: "span",
 // });
 // // Link timelines to scroll position
 // function createScrollTrigger(triggerElement, timeline) {
 //   // Reset tl when scroll out of view past bottom of screen
 //   ScrollTrigger.create({
 //     trigger: triggerElement,
 //     start: "top bottom",
 //     onLeaveBack: () => {
 //       timeline.progress(0);
 //       timeline.pause();
 //     },
 //   });
 //   // Play tl when scrolled into view (60% from top of screen)
 //   ScrollTrigger.create({
 //     trigger: triggerElement,
 //     start: "top 80%",
 //     onEnter: () => timeline.play(),
 //   });
 // }
 // $("[words-slide-up]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".word"), {
 //     opacity: 0,
 //     yPercent: 100,
 //     duration: 0.5,
 //     ease: "back.out(2)",
 //     stagger: { amount: 0.5 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[words-rotate-in]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.set($(this).find(".word"), { transformPerspective: 1000 });
 //   tl.from($(this).find(".word"), {
 //     rotationX: -90,
 //     duration: 0.6,
 //     ease: "power2.out",
 //     stagger: { amount: 0.6 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[words-slide-from-right]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".word"), {
 //     opacity: 0,
 //     x: "1em",
 //     duration: 0.6,
 //     ease: "power2.out",
 //     stagger: { amount: 0.2 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-slide-up]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     yPercent: 100,
 //     duration: 0.2,
 //     ease: "power1.out",
 //     stagger: { amount: 0.6 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-slide-down]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     yPercent: -120,
 //     duration: 0.3,
 //     ease: "power1.out",
 //     stagger: { amount: 0.7 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-fade-in]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     opacity: 0.2,
 //     duration: 0.5,
 //     ease: "power1.out",
 //     stagger: { amount: 0.8 },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[letters-fade-in-random]").each(function (index) {
 //   let tl = gsap.timeline({ paused: true });
 //   tl.from($(this).find(".char"), {
 //     opacity: 0,
 //     duration: 0.05,
 //     ease: "power1.out",
 //     stagger: { amount: 0.4, from: "random" },
 //   });
 //   createScrollTrigger($(this), tl);
 // });
 // $("[scrub-each-word]").each(function (index) {
 //   let tl = gsap.timeline({
 //     scrollTrigger: {
 //       trigger: $(this),
 //       start: "top 80%",
 //       end: "top 30%",
 //       scrub: true,
 //     },
 //   });
 //   tl.from($(this).find(".word"), {
 //     opacity: 0.2,
 //     duration: 0.5,
 //     ease: "power1.out",
 //     stagger: { each: 0.8 },
 //   });
 // });
 // // Avoid flash of unstyled content
 // gsap.set("[text-split]", { opacity: 1 });
 // more optimsied but less smooth version of mouse follower - in case we have performance issues with it
 // export default aboutPageCode = () => {
 //   // alert("we live on about page");
 //   const container = document.getElementById("container");
 //   const follower = document.getElementById("follower");
 //   if (container && follower) {
 //     container.style.position = "relative";
 //     follower.style.position = "absolute";
 //     follower.style.opacity = "0";
 //     const followerRadius = follower.offsetWidth / 2;
 //     // Variables for smooth movement (Lerp)
 //     let targetX = 0;
 //     let targetY = 0;
 //     let currentX = 0;
 //     let currentY = 0;
 //     let isAnimating = false;
 //     let lastMoveTime = 0;
 //     const throttleInterval = 16; // ~60 FPS
 //     const lerp = (start, end, t) => start + (end - start) * t;
 //     const updateFollowerPosition = () => {
 //       // Check if the follower is close enough to the target, and stop if so
 //       if (
 //         Math.abs(currentX - targetX) < 1 &&
 //         Math.abs(currentY - targetY) < 1
 //       ) {
 //         isAnimating = false;
 //         return;
 //       }
 //       // Smoothly interpolate current position towards target position
 //       currentX = lerp(currentX, targetX, 0.1); // Adjust 0.1 for faster/slower smoothing
 //       currentY = lerp(currentY, targetY, 0.1);
 //       // Update the follower's position
 //       follower.style.left = `${currentX}px`;
 //       follower.style.top = `${currentY}px`;
 //       follower.style.transform = "translate(-50%, -50%)";
 //       // Continue the animation loop
 //       if (isAnimating) {
 //         requestAnimationFrame(updateFollowerPosition);
 //       }
 //     };
 //     // Event listeners for mouseenter and mouseleave to show and hide the follower
 //     container.addEventListener("mouseenter", () => {
 //       follower.style.opacity = "1";
 //     });
 //     container.addEventListener("mouseleave", () => {
 //       follower.style.opacity = "0";
 //     });
 //     // Throttled mousemove event listener
 //     container.addEventListener("mousemove", (e) => {
 //       const now = Date.now();
 //       if (now - lastMoveTime < throttleInterval) return; // Throttle if less than the interval
 //       lastMoveTime = now;
 //       const rect = container.getBoundingClientRect();
 //       const mouseX = e.clientX - rect.left;
 //       const mouseY = e.clientY - rect.top;
 //       // Clamp target values to keep the circle inside the container
 //       targetX = Math.max(
 //         followerRadius,
 //         Math.min(mouseX, rect.width - followerRadius)
 //       );
 //       targetY = Math.max(
 //         followerRadius,
 //         Math.min(mouseY, rect.height - followerRadius)
 //       );
 //       // Start the animation loop if not already running
 //       if (!isAnimating) {
 //         isAnimating = true;
 //         updateFollowerPosition();
 //       }
 //     });
 //   }
 // };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24Zjj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homeVideoAudio", ()=>homeVideoAudio);
function homeVideoAudio(audio) {
    const fadeMusicToggle = audio?.fadeToggle;
    const isMuted = audio?.mutedState;
    const playVideoTriggers = document.querySelectorAll(".home-hover-outer");
    const allHomepageVideos = document.querySelectorAll(".home-video");
    // Reduce volume of all homepage videos to 0.7`
    allHomepageVideos.forEach((video)=>{
        if (video) video.volume = 0.7;
    });
    // Map to store click states for each video
    const videoClickStates = new Map();
    const videoOutOfViewStates = new Map();
    // homepage video click logic
    playVideoTriggers.forEach((trigger)=>{
        const currentVideo = trigger.querySelector(".home-video"); // get current video
        const currentPlayWrapper = trigger.querySelector(".play-video-wrapper");
        const currentPlayBtn = trigger.querySelector(".view-project-btn");
        if (!currentVideo) return; // exit if no video found
        // Initialize states for this video
        videoClickStates.set(currentVideo, "none");
        videoOutOfViewStates.set(currentVideo, false);
        // catch for if user scrolls video out of view or clicks on nav
        currentVideo.addEventListener("pause", function() {
            videoOutOfViewStates.set(currentVideo, true);
            if (currentVideo.muted == false && // check if video is unmuted
            document.visibilityState == "visible" // check if user is not in another tab
            ) {
                secondClickLogic(currentVideo, currentPlayWrapper);
                videoClickStates.set(currentVideo, "none"); //reset click logic
            }
        }, false);
        // trigger click logic
        trigger.addEventListener("click", (e)=>{
            // Check if the click was on the view project button or any of its children
            if (currentPlayBtn && (e.target === currentPlayBtn || currentPlayBtn.contains(e.target))) {
                e.stopPropagation();
                return; // Exit if so
            }
            const currentClickState = videoClickStates.get(currentVideo);
            switch(currentClickState){
                case "none":
                    firstClickLogic(currentVideo, currentPlayWrapper);
                    break;
                case "once":
                    secondClickLogic(currentVideo, currentPlayWrapper);
                    break;
                case "twice":
                    thirdClickLogic(currentVideo, currentPlayWrapper);
                    break;
                default:
                    firstClickLogic(currentVideo, currentPlayWrapper);
            }
        });
    });
    // FIRST CLICK LOGIC
    function firstClickLogic(currentVideo, currentPlayWrapper) {
        currentVideo.muted = false; //unmute video
        currentVideo.currentTime = 0; //restart video
        currentPlayWrapper.style.display = "none"; //hide play ui
        //if unmuted, toggle music fade
        if (fadeMusicToggle && !isMuted()) fadeMusicToggle();
        videoClickStates.set(currentVideo, "once"); //update click logic
        videoOutOfViewStates.set(currentVideo, false); //ensure out of view logic is false
    }
    // SECOND CLICK LOGIC
    function secondClickLogic(currentVideo, currentPlayWrapper) {
        currentVideo.muted = true; //mute video again
        currentPlayWrapper.style.opacity = "100"; // set unmute opacity to 100
        currentPlayWrapper.style.display = "flex"; // display unmute ui
        //if unmuted, toggle music fade
        if (fadeMusicToggle && !isMuted()) fadeMusicToggle();
        videoClickStates.set(currentVideo, "twice"); //update click logic
    }
    // THIRD CLICK LOGIC
    function thirdClickLogic(currentVideo, currentPlayWrapper) {
        currentVideo.muted = false; //unmute video
        currentPlayWrapper.style.display = "none"; //hide unmute ui
        videoClickStates.set(currentVideo, "once"); //update click logic
        //if unmuted, toggle music fade
        if (fadeMusicToggle && !isMuted()) fadeMusicToggle();
        videoOutOfViewStates.set(currentVideo, false); //ensure out of view logic is false
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4MuEU","igcvL"], "igcvL", "parcelRequirebfdf")

//# sourceMappingURL=app.js.map
