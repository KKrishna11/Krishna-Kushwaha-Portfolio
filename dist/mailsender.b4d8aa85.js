// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/emailjs-com/es/store/store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var store = exports.store = {
  _origin: 'https://api.emailjs.com'
};
},{}],"node_modules/emailjs-com/es/methods/init/init.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;
var _store = require("../../store/store");
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
var init = exports.init = function init(userID) {
  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://api.emailjs.com';
  _store.store._userID = userID;
  _store.store._origin = origin;
};
},{"../../store/store":"node_modules/emailjs-com/es/store/store.js"}],"node_modules/emailjs-com/es/utils/validateParams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateParams = void 0;
var validateParams = exports.validateParams = function validateParams(userID, serviceID, templateID) {
  if (!userID) {
    throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
  }
  if (!serviceID) {
    throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
  }
  if (!templateID) {
    throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
  }
  return true;
};
},{}],"node_modules/emailjs-com/es/models/EmailJSResponseStatus.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailJSResponseStatus = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var EmailJSResponseStatus = exports.EmailJSResponseStatus = /*#__PURE__*/_createClass(function EmailJSResponseStatus(httpResponse) {
  _classCallCheck(this, EmailJSResponseStatus);
  this.status = httpResponse.status;
  this.text = httpResponse.responseText;
});
},{}],"node_modules/emailjs-com/es/api/sendPost.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendPost = void 0;
var _EmailJSResponseStatus = require("../models/EmailJSResponseStatus");
var _store = require("../store/store");
var sendPost = exports.sendPost = function sendPost(url, data) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (_ref) {
      var target = _ref.target;
      var responseStatus = new _EmailJSResponseStatus.EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === 'OK') {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener('error', function (_ref2) {
      var target = _ref2.target;
      reject(new _EmailJSResponseStatus.EmailJSResponseStatus(target));
    });
    xhr.open('POST', _store.store._origin + url, true);
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};
},{"../models/EmailJSResponseStatus":"node_modules/emailjs-com/es/models/EmailJSResponseStatus.js","../store/store":"node_modules/emailjs-com/es/store/store.js"}],"node_modules/emailjs-com/es/methods/send/send.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = void 0;
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
var send = exports.send = function send(serviceID, templateID, templatePrams, userID) {
  var uID = userID || _store.store._userID;
  (0, _validateParams.validateParams)(uID, serviceID, templateID);
  var params = {
    lib_version: '3.2.0',
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return (0, _sendPost.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
    'Content-type': 'application/json'
  });
};
},{"../../store/store":"node_modules/emailjs-com/es/store/store.js","../../utils/validateParams":"node_modules/emailjs-com/es/utils/validateParams.js","../../api/sendPost":"node_modules/emailjs-com/es/api/sendPost.js"}],"node_modules/emailjs-com/es/methods/sendForm/sendForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendForm = void 0;
var _store = require("../../store/store");
var _validateParams = require("../../utils/validateParams");
var _sendPost = require("../../api/sendPost");
var findHTMLForm = function findHTMLForm(form) {
  var currentForm;
  if (typeof form === 'string') {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== 'FORM') {
    throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
  }
  return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
var sendForm = exports.sendForm = function sendForm(serviceID, templateID, form, userID) {
  var uID = userID || _store.store._userID;
  var currentForm = findHTMLForm(form);
  (0, _validateParams.validateParams)(uID, serviceID, templateID);
  var formData = new FormData(currentForm);
  formData.append('lib_version', '3.2.0');
  formData.append('service_id', serviceID);
  formData.append('template_id', templateID);
  formData.append('user_id', uID);
  return (0, _sendPost.sendPost)('/api/v1.0/email/send-form', formData);
};
},{"../../store/store":"node_modules/emailjs-com/es/store/store.js","../../utils/validateParams":"node_modules/emailjs-com/es/utils/validateParams.js","../../api/sendPost":"node_modules/emailjs-com/es/api/sendPost.js"}],"node_modules/emailjs-com/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function () {
    return _init.init;
  }
});
Object.defineProperty(exports, "send", {
  enumerable: true,
  get: function () {
    return _send.send;
  }
});
Object.defineProperty(exports, "sendForm", {
  enumerable: true,
  get: function () {
    return _sendForm.sendForm;
  }
});
var _init = require("./methods/init/init");
var _send = require("./methods/send/send");
var _sendForm = require("./methods/sendForm/sendForm");
var _default = exports.default = {
  init: _init.init,
  send: _send.send,
  sendForm: _sendForm.sendForm
};
},{"./methods/init/init":"node_modules/emailjs-com/es/methods/init/init.js","./methods/send/send":"node_modules/emailjs-com/es/methods/send/send.js","./methods/sendForm/sendForm":"node_modules/emailjs-com/es/methods/sendForm/sendForm.js"}],"mailsender.js":[function(require,module,exports) {
"use strict";

var _emailjsCom = _interopRequireDefault(require("emailjs-com"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Access environment variables
var EMAILJS_USER_ID = "4gM1QFBTcdOtMN2g9";
var EMAILJS_SERVICE_ID = "service_tcfzt8d";
var EMAILJS_TEMPLATE_ID = "template_jfzkcuj";

// Initialize EmailJS
_emailjsCom.default.init(EMAILJS_USER_ID);

// Form submit event
document.getElementById("sendformid").addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(this);
  var formObject = Object.fromEntries(formData.entries());
  var emailParams = {
    fullname: formObject.fullname,
    subject: formObject.subject,
    email: formObject.email,
    number: formObject.number,
    message: formObject.message
  };
  _emailjsCom.default.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams).then(function (response) {
    console.log('Email Sent Successfully:', response);
    alert('Your message has been sent!');
  }).catch(function (error) {
    console.error('Error sending email:', error);
    alert('Error sending the message: ' + JSON.stringify(error)); // Improved error logging
  });
});
},{"emailjs-com":"node_modules/emailjs-com/es/index.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3368" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","mailsender.js"], null)
//# sourceMappingURL=/mailsender.b4d8aa85.js.map