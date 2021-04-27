(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3363);

/***/ }),

/***/ 2119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(7448);

/***/ }),

/***/ 116:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1955);

/***/ }),

/***/ 4473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1577);

/***/ }),

/***/ 8914:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6279);

/***/ }),

/***/ 1643:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(9373);

/***/ }),

/***/ 2991:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1798);

/***/ }),

/***/ 2366:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2527);

/***/ }),

/***/ 3649:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2073);

/***/ }),

/***/ 5843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6361);

/***/ }),

/***/ 9340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(8933);

/***/ }),

/***/ 1942:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3383);

/***/ }),

/***/ 4943:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(4471);

/***/ }),

/***/ 3978:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(1910);

/***/ }),

/***/ 8604:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(4477);

/***/ }),

/***/ 6902:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3059);

/***/ }),

/***/ 5507:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6670);

/***/ }),

/***/ 3476:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(7460);

/***/ }),

/***/ 5420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2547);

/***/ }),

/***/ 8341:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6509);

/***/ }),

/***/ 4435:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(3926);

/***/ }),

/***/ 9969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(7641);

/***/ }),

/***/ 530:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 7893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _create = _interopRequireDefault(__webpack_require__(4943));

var _trim = _interopRequireDefault(__webpack_require__(5843));

var _urlSearchParams = _interopRequireDefault(__webpack_require__(4435));

var _slice = _interopRequireDefault(__webpack_require__(3649));

var _promise = _interopRequireDefault(__webpack_require__(3476));

var _entries = _interopRequireDefault(__webpack_require__(2119));

var _map = _interopRequireDefault(__webpack_require__(2991));

var _getOwnPropertyNames = _interopRequireDefault(__webpack_require__(8604));

var _isArray = _interopRequireDefault(__webpack_require__(1511));

var _forEach = _interopRequireDefault(__webpack_require__(8914));

var _iterator = _interopRequireDefault(__webpack_require__(8341));

var _indexOf = _interopRequireDefault(__webpack_require__(1643));

var _symbol = _interopRequireDefault(__webpack_require__(5420));

var __self__ = function (root) {
  function F() {
    this.fetch = false;
    this.DOMException = root.DOMException;
  }

  F.prototype = root;
  return new F();
}(typeof self !== 'undefined' ? self : void 0);

(function (self) {
  var irrelevant = function (exports) {
    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in _symbol.default,
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    }

    if (support.arrayBuffer) {
      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && (0, _indexOf.default)(viewClasses).call(viewClasses, Object.prototype.toString.call(obj)) > -1;
      };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }

      if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }

      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }

      return value;
    } // Build a destructive iterator for the value list


    function iteratorFor(items) {
      var iterator = {
        next: function next() {
          var value = items.shift();
          return {
            done: value === undefined,
            value: value
          };
        }
      };

      if (support.iterable) {
        iterator[_iterator.default] = function () {
          return iterator;
        };
      }

      return iterator;
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        (0, _forEach.default)(headers).call(headers, function (value, name) {
          this.append(name, value);
        }, this);
      } else if ((0, _isArray.default)(headers)) {
        (0, _forEach.default)(headers).call(headers, function (header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        var _context;

        (0, _forEach.default)(_context = (0, _getOwnPropertyNames.default)(headers)).call(_context, function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = (0, _map.default)(this)[name];
      (0, _map.default)(this)[name] = oldValue ? oldValue + ', ' + value : value;
    };

    Headers.prototype['delete'] = function (name) {
      delete (0, _map.default)(this)[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      name = normalizeName(name);
      return this.has(name) ? (0, _map.default)(this)[name] : null;
    };

    Headers.prototype.has = function (name) {
      return (0, _map.default)(this).hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      (0, _map.default)(this)[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      for (var name in (0, _map.default)(this)) {
        if ((0, _map.default)(this).hasOwnProperty(name)) {
          callback.call(thisArg, (0, _map.default)(this)[name], name, this);
        }
      }
    };

    Headers.prototype.keys = function () {
      var _context2;

      var items = [];
      (0, _forEach.default)(_context2 = this).call(_context2, function (value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };

    Headers.prototype.values = function () {
      var _context3;

      var items = [];
      (0, _forEach.default)(_context3 = this).call(_context3, function (value) {
        items.push(value);
      });
      return iteratorFor(items);
    };

    Headers.prototype.entries = function () {
      var _context4;

      var items = [];
      (0, _forEach.default)(_context4 = this).call(_context4, function (value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };

    if (support.iterable) {
      Headers.prototype[_iterator.default] = (0, _entries.default)(Headers.prototype);
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return _promise.default.reject(new TypeError('Already read'));
      }

      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new _promise.default(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };

        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise;
    }

    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);

      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }

      return chars.join('');
    }

    function bufferClone(buf) {
      if ((0, _slice.default)(buf)) {
        return (0, _slice.default)(buf).call(buf, 0);
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body) {
        this._bodyInit = body;

        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && _urlSearchParams.default.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          this._bodyText = body = Object.prototype.toString.call(body);
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && _urlSearchParams.default.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);

          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return _promise.default.resolve(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return _promise.default.resolve(new Blob([this._bodyArrayBuffer]));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return _promise.default.resolve(new Blob([this._bodyText]));
          }
        };

        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            return consumed(this) || _promise.default.resolve(this._bodyArrayBuffer);
          } else {
            return this.blob().then(readBlobAsArrayBuffer);
          }
        };
      }

      this.text = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return _promise.default.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return _promise.default.resolve(this._bodyText);
        }
      };

      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    } // HTTP methods whose capitalization should be normalized


    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return (0, _indexOf.default)(methods).call(methods, upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;

      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }

        this.url = input.url;
        this.credentials = input.credentials;

        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }

        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;

        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'same-origin';

      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }

      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.signal = options.signal || this.signal;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }

      this._initBody(body);
    }

    Request.prototype.clone = function () {
      return new Request(this, {
        body: this._bodyInit
      });
    };

    function decode(body) {
      var _context5;

      var form = new FormData();
      (0, _forEach.default)(_context5 = (0, _trim.default)(body).call(body).split('&')).call(_context5, function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }

    function parseHeaders(rawHeaders) {
      var _context6;

      var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
      // https://tools.ietf.org/html/rfc7230#section-3.2

      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
      (0, _forEach.default)(_context6 = preProcessedHeaders.split(/\r?\n/)).call(_context6, function (line) {
        var _context7;

        var parts = line.split(':');
        var key = (0, _trim.default)(_context7 = parts.shift()).call(_context7);

        if (key) {
          var _context8;

          var value = (0, _trim.default)(_context8 = parts.join(':')).call(_context8);
          headers.append(key, value);
        }
      });
      return headers;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = options.status === undefined ? 200 : options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = 'statusText' in options ? options.statusText : 'OK';
      this.headers = new Headers(options.headers);
      this.url = options.url || '';

      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, {
        status: 0,
        statusText: ''
      });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if ((0, _indexOf.default)(redirectStatuses).call(redirectStatuses, status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, {
        status: status,
        headers: {
          location: url
        }
      });
    };

    exports.DOMException = self.DOMException;

    try {
      new exports.DOMException();
    } catch (err) {
      exports.DOMException = function (message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
      };

      exports.DOMException.prototype = (0, _create.default)(Error.prototype);
      exports.DOMException.prototype.constructor = exports.DOMException;
    }

    function fetch(input, init) {
      return new _promise.default(function (resolve, reject) {
        var _context9;

        var request = new Request(input, init);

        if (request.signal && request.signal.aborted) {
          return reject(new exports.DOMException('Aborted', 'AbortError'));
        }

        var xhr = new XMLHttpRequest();

        function abortXhr() {
          xhr.abort();
        }

        xhr.onload = function () {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.ontimeout = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.onabort = function () {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        } else if (request.credentials === 'omit') {
          xhr.withCredentials = false;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        (0, _forEach.default)(_context9 = request.headers).call(_context9, function (value, name) {
          xhr.setRequestHeader(name, value);
        });

        if (request.signal) {
          request.signal.addEventListener('abort', abortXhr);

          xhr.onreadystatechange = function () {
            // DONE (success or failure)
            if (xhr.readyState === 4) {
              request.signal.removeEventListener('abort', abortXhr);
            }
          };
        }

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    }

    fetch.polyfill = true;

    if (!self.fetch) {
      self.fetch = fetch;
      self.Headers = Headers;
      self.Request = Request;
      self.Response = Response;
    }

    exports.Headers = Headers;
    exports.Request = Request;
    exports.Response = Response;
    exports.fetch = fetch;
    return exports;
  }({});
})(__self__);

delete __self__.fetch.polyfill;
exports = __self__.fetch; // To enable: import fetch from 'cross-fetch'

exports.default = __self__.fetch; // For TypeScript consumers without esModuleInterop.

exports.fetch = __self__.fetch; // To enable: import {fetch} from 'cross-fetch'

exports.Headers = __self__.Headers;
exports.Request = __self__.Request;
exports.Response = __self__.Response;
module.exports = exports;

/***/ }),

/***/ 5919:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.AnswersCore = void 0;

/**
 * Provides methods for executing searches, submitting questions, and performing autocompletes.
 *
 * @public
 */
var AnswersCore =
/** @class */
function () {
  /** @internal */
  function AnswersCore(searchService, questionSubmissionService, autoCompleteService) {
    this.searchService = searchService;
    this.questionSubmissionService = questionSubmissionService;
    this.autoCompleteService = autoCompleteService;
  }
  /**
   * Performs an Answers search across all verticals.
   *
   * @remarks
   * If rejected, the reason will be an {@link AnswersError}.
   *
   * @param request - Universal search request options
   */


  AnswersCore.prototype.universalSearch = function (request) {
    return this.searchService.universalSearch(request);
  };
  /**
   * Performs an Answers search for a single vertical.
   *
   * @remarks
   * If rejected, the reason will be an {@link AnswersError}.
   *
   * @param request - Vertical search request options
   */


  AnswersCore.prototype.verticalSearch = function (request) {
    return this.searchService.verticalSearch(request);
  };
  /**
   * Submits a custom question to the Answers API.
   *
   * @remarks
   * If rejected, the reason will be an {@link AnswersError}.
   *
   * @param request - Question submission request options
   */


  AnswersCore.prototype.submitQuestion = function (request) {
    return this.questionSubmissionService.submitQuestion(request);
  };
  /**
   * Performs an autocomplete request across all verticals.
   *
   * @remarks
   * If rejected, the reason will be an {@link AnswersError}.
   *
   * @param request - Universal autocomplete request options
   */


  AnswersCore.prototype.universalAutocomplete = function (request) {
    return this.autoCompleteService.universalAutocomplete(request);
  };
  /**
   * Performs an autocomplete request for a single vertical.
   *
   * @remarks
   * If rejected, the reason will be an {@link AnswersError}.
   *
   * @param request - Vertical autocomplete request options
   */


  AnswersCore.prototype.verticalAutocomplete = function (request) {
    return this.autoCompleteService.verticalAutocomplete(request);
  };
  /**
   * Performs a filtersearch request against specified fields within a single vertical.
   *
   * @remarks
   * This differs from the vertical autocomplete because the vertical autocomplete operates on all entity fields whereas
   * filtersearch operates only on specified fields. If rejected, the reason will be an {@link AnswersError}.
   *
   * @example
   * A site has a 'products' vertical and would like a way to allow the user to narrow down the results by the product name.
   * The site can add a second search bar powered by filtersearch which will include only product names as search
   * suggestions.
   *
   * @param request - filtersearch request options
   */


  AnswersCore.prototype.filterSearch = function (request) {
    return this.autoCompleteService.filterSearch(request);
  };

  return AnswersCore;
}();

exports.AnswersCore = AnswersCore;

/***/ }),

/***/ 9995:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.defaultEndpoints = exports.defaultApiVersion = void 0;
var defaultApiVersion = 20190101;
exports.defaultApiVersion = defaultApiVersion;
var defaultEndpoints = {
  universalSearch: 'https://liveapi.yext.com/v2/accounts/me/answers/query',
  verticalSearch: 'https://liveapi.yext.com/v2/accounts/me/answers/vertical/query',
  questionSubmission: 'https://api.yext.com/v2/accounts/me/createQuestion',
  status: 'https://answersstatus.pagescdn.com',
  universalAutocomplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/autocomplete',
  verticalAutocomplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/vertical/autocomplete',
  filterSearch: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/filtersearch'
};
exports.defaultEndpoints = defaultEndpoints;

/***/ }),

/***/ 4003:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(6902);

var _forEachInstanceProperty = __webpack_require__(8914);

var _context;

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  provideCore: true,
  AnswersCore: true
};
exports.provideCore = provideCore;

_Object$defineProperty(exports, "AnswersCore", {
  enumerable: true,
  get: function get() {
    return _AnswersCore.AnswersCore;
  }
});

var _AnswersCore = __webpack_require__(5919);

var _SearchServiceImpl = __webpack_require__(1698);

var _QuestionSubmissionServiceImpl = __webpack_require__(4418);

var _HttpServiceImpl = __webpack_require__(2818);

var _AutocompleteServiceImpl = __webpack_require__(5009);

var _ApiResponseValidator = __webpack_require__(8499);

var _models = __webpack_require__(5651);

_forEachInstanceProperty(_context = _Object$keys(_models)).call(_context, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _models[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _models[key];
    }
  });
});

/**
 * The entrypoint to the answers-core library.
 *
 * @remarks
 * Returns an {@link AnswersCore} instance.
 *
 * @param config - The answers-core config
 *
 * @public
 */
function provideCore(config) {
  var httpService = new _HttpServiceImpl.HttpServiceImpl();
  var apiResponseValidator = new _ApiResponseValidator.ApiResponseValidator();
  var searchService = new _SearchServiceImpl.SearchServiceImpl(config, httpService, apiResponseValidator);
  var questionSubmissionService = new _QuestionSubmissionServiceImpl.QuestionSubmissionServiceImpl(config, httpService, apiResponseValidator);
  var autoCompleteService = new _AutocompleteServiceImpl.AutocompleteServiceImpl(config, httpService, apiResponseValidator);
  return new _AnswersCore.AnswersCore(searchService, questionSubmissionService, autoCompleteService);
}

/***/ }),

/***/ 5009:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.AutocompleteServiceImpl = void 0;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _stringify = _interopRequireDefault(__webpack_require__(9340));

var _iterator = _interopRequireDefault(__webpack_require__(8341));

var _symbol = _interopRequireDefault(__webpack_require__(5420));

var _promise = _interopRequireDefault(__webpack_require__(3476));

var _createAutocompleteResponse = __webpack_require__(9025);

var _constants = __webpack_require__(9995);

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = _promise.default))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof _symbol.default === "function" && (g[_iterator.default] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

/**
* A service that performs query suggestions.
*/
var AutocompleteServiceImpl =
/** @class */
function () {
  function AutocompleteServiceImpl(config, httpRequester, apiResponseValidator) {
    var _a, _b, _c, _d, _e, _f;

    this.config = config;
    this.httpService = httpRequester;
    this.apiResponseValidator = apiResponseValidator;
    this.universalEndpoint = (_b = (_a = this.config.endpoints) === null || _a === void 0 ? void 0 : _a.universalAutocomplete) !== null && _b !== void 0 ? _b : _constants.defaultEndpoints.universalAutocomplete;
    this.verticalEndpoint = (_d = (_c = this.config.endpoints) === null || _c === void 0 ? void 0 : _c.verticalAutocomplete) !== null && _d !== void 0 ? _d : _constants.defaultEndpoints.verticalAutocomplete;
    this.filterEndpoint = (_f = (_e = this.config.endpoints) === null || _e === void 0 ? void 0 : _e.filterSearch) !== null && _f !== void 0 ? _f : _constants.defaultEndpoints.filterSearch;
  }
  /**
   * Retrieves query suggestions for universal.
   *
   * @param {AutocompleteRequest} request
   * @returns {Promise<AutocompleteResponse>}
   */


  AutocompleteServiceImpl.prototype.universalAutocomplete = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var queryParams, response, validationResult;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            queryParams = {
              input: request.input,
              experienceKey: this.config.experienceKey,
              api_key: this.config.apiKey,
              v: _constants.defaultApiVersion,
              version: this.config.experienceVersion,
              locale: this.config.locale,
              sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            return [4
            /*yield*/
            , this.httpService.get(this.universalEndpoint, queryParams)];

          case 1:
            response = _a.sent();
            validationResult = this.apiResponseValidator.validate(response);

            if (validationResult instanceof Error) {
              return [2
              /*return*/
              , _promise.default.reject(validationResult)];
            }

            return [2
            /*return*/
            , (0, _createAutocompleteResponse.createAutocompleteResponse)(response)];
        }
      });
    });
  };
  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {VerticalAutocompleteRequest} request
   * @returns {Promise<AutocompleteResponse>}
   */


  AutocompleteServiceImpl.prototype.verticalAutocomplete = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var queryParams, response, validationResult;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            queryParams = {
              input: request.input,
              experienceKey: this.config.experienceKey,
              api_key: this.config.apiKey,
              v: _constants.defaultApiVersion,
              version: this.config.experienceVersion,
              locale: this.config.locale,
              verticalKey: request.verticalKey,
              sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            return [4
            /*yield*/
            , this.httpService.get(this.verticalEndpoint, queryParams)];

          case 1:
            response = _a.sent();
            validationResult = this.apiResponseValidator.validate(response);

            if (validationResult instanceof Error) {
              return [2
              /*return*/
              , _promise.default.reject(validationResult)];
            }

            return [2
            /*return*/
            , (0, _createAutocompleteResponse.createAutocompleteResponse)(response)];
        }
      });
    });
  };
  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {FilterSearchRequest} request
   * @returns {Promise<AutocompleteResponse>}
   */


  AutocompleteServiceImpl.prototype.filterSearch = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var searchParams, queryParams, response, validationResult;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            searchParams = {
              sectioned: request.sectioned,
              fields: this.serializeSearchParameterFields(request.fields)
            };
            queryParams = {
              input: request.input,
              experienceKey: this.config.experienceKey,
              api_key: this.config.apiKey,
              v: _constants.defaultApiVersion,
              version: this.config.experienceVersion,
              locale: this.config.locale,
              search_parameters: (0, _stringify.default)(searchParams),
              verticalKey: request.verticalKey,
              sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            return [4
            /*yield*/
            , this.httpService.get(this.filterEndpoint, queryParams)];

          case 1:
            response = _a.sent();
            validationResult = this.apiResponseValidator.validate(response);

            if (validationResult instanceof Error) {
              return [2
              /*return*/
              , _promise.default.reject(validationResult)];
            }

            return [2
            /*return*/
            , (0, _createAutocompleteResponse.createFilterSearchResponse)(response)];
        }
      });
    });
  };

  AutocompleteServiceImpl.prototype.serializeSearchParameterFields = function (fields) {
    return (0, _map.default)(fields).call(fields, function (_a) {
      var fieldApiName = _a.fieldApiName,
          entityType = _a.entityType,
          fetchEntities = _a.fetchEntities;
      return {
        fieldId: fieldApiName,
        entityTypeId: entityType,
        shouldFetchEntities: fetchEntities
      };
    });
  };

  return AutocompleteServiceImpl;
}();

exports.AutocompleteServiceImpl = AutocompleteServiceImpl;

/***/ }),

/***/ 2818:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.HttpServiceImpl = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(9340));

var _assign = _interopRequireDefault(__webpack_require__(1942));

var _crossFetch = _interopRequireDefault(__webpack_require__(7893));

var _urlutils = __webpack_require__(648);

var __assign = void 0 && (void 0).__assign || function () {
  __assign = _assign.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

/**
 * Available HTTP request methods
 */
var RequestMethods;

(function (RequestMethods) {
  RequestMethods["GET"] = "get";
  RequestMethods["POST"] = "post";
})(RequestMethods || (RequestMethods = {}));
/**
 * HttpServiceImpl is a wrapper around the native implementation of AJAX
 * related matters.
 */


var HttpServiceImpl =
/** @class */
function () {
  function HttpServiceImpl() {}
  /**
   * Perform a GET request
   */


  HttpServiceImpl.prototype.get = function (url, queryParams, options) {
    var reqInitWithMethod = __assign({
      method: RequestMethods.GET
    }, options);

    return this.fetch(url, queryParams, reqInitWithMethod).then(function (res) {
      return res.json();
    });
  };
  /**
   * Perform a POST request
   */


  HttpServiceImpl.prototype.post = function (url, queryParams, body, reqInit) {
    var sanitizedBodyParams = (0, _urlutils.sanitizeQueryParams)(body);

    var reqInitWithMethodAndBody = __assign({
      method: RequestMethods.POST,
      body: (0, _stringify.default)(sanitizedBodyParams)
    }, reqInit);

    return this.fetch(url, queryParams, reqInitWithMethodAndBody).then(function (res) {
      return res.json();
    });
  };
  /**
   * Perform a fetch, using the polyfill if needed.
   */


  HttpServiceImpl.prototype.fetch = function (url, queryParams, reqInit) {
    var urlWithParams = (0, _urlutils.addParamsToURL)(url, queryParams);
    return (0, _crossFetch.default)(urlWithParams, reqInit);
  };

  return HttpServiceImpl;
}();

exports.HttpServiceImpl = HttpServiceImpl;

/***/ }),

/***/ 4418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.QuestionSubmissionServiceImpl = void 0;

var _iterator = _interopRequireDefault(__webpack_require__(8341));

var _symbol = _interopRequireDefault(__webpack_require__(5420));

var _promise = _interopRequireDefault(__webpack_require__(3476));

var _constants = __webpack_require__(9995);

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = _promise.default))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof _symbol.default === "function" && (g[_iterator.default] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

/**
 * An implementation of QuestionSubmissionService which hits LiveAPI.
 *
 * @internal
 */
var QuestionSubmissionServiceImpl =
/** @class */
function () {
  function QuestionSubmissionServiceImpl(config, httpService, apiResponseValidator) {
    var _a, _b;

    this.config = config;
    this.httpService = httpService;
    this.apiResponseValidator = apiResponseValidator;
    this.endpoint = (_b = (_a = this.config.endpoints) === null || _a === void 0 ? void 0 : _a.questionSubmission) !== null && _b !== void 0 ? _b : _constants.defaultEndpoints.questionSubmission;
  }

  QuestionSubmissionServiceImpl.prototype.submitQuestion = function (request) {
    return __awaiter(this, void 0, void 0, function () {
      var queryParams, body, requestInit, response, validationResult;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            queryParams = {
              v: _constants.defaultApiVersion,
              api_key: this.config.apiKey,
              sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            body = {
              email: request.email,
              entityId: request.entityId,
              name: request.name,
              questionDescription: request.questionDescription,
              questionLanguage: this.config.locale,
              questionText: request.questionText,
              site: 'FIRSTPARTY'
            };
            requestInit = {
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            };
            return [4
            /*yield*/
            , this.httpService.post(this.endpoint, queryParams, body, requestInit)];

          case 1:
            response = _a.sent();
            validationResult = this.apiResponseValidator.validate(response);

            if (validationResult instanceof Error) {
              return [2
              /*return*/
              , _promise.default.reject(validationResult)];
            }

            return [2
            /*return*/
            , {
              uuid: response.meta.uuid
            }];
        }
      });
    });
  };

  return QuestionSubmissionServiceImpl;
}();

exports.QuestionSubmissionServiceImpl = QuestionSubmissionServiceImpl;

/***/ }),

/***/ 1698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SearchServiceImpl = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(9340));

var _iterator = _interopRequireDefault(__webpack_require__(8341));

var _symbol = _interopRequireDefault(__webpack_require__(5420));

var _promise = _interopRequireDefault(__webpack_require__(3476));

var _createVerticalSearchResponse = __webpack_require__(3516);

var _constants = __webpack_require__(9995);

var _QuerySource = __webpack_require__(8068);

var _createUniversalSearchResponse = __webpack_require__(7848);

var _serializeStaticFilters = __webpack_require__(5250);

var _serializeFacets = __webpack_require__(1177);

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = _promise.default))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof _symbol.default === "function" && (g[_iterator.default] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

/**
 * The implementation of SearchService which hits LiveAPI.
 *
 * @internal
 */
var SearchServiceImpl =
/** @class */
function () {
  function SearchServiceImpl(config, httpService, apiResponseValidator) {
    var _a, _b, _c, _d;

    this.config = config;
    this.httpService = httpService;
    this.apiResponseValidator = apiResponseValidator;
    this.universalSearchEndpoint = (_b = (_a = config.endpoints) === null || _a === void 0 ? void 0 : _a.universalSearch) !== null && _b !== void 0 ? _b : _constants.defaultEndpoints.universalSearch;
    this.verticalSearchEndpoint = (_d = (_c = config.endpoints) === null || _c === void 0 ? void 0 : _c.verticalSearch) !== null && _d !== void 0 ? _d : _constants.defaultEndpoints.verticalSearch;
  }

  SearchServiceImpl.prototype.universalSearch = function (request) {
    var _a;

    return __awaiter(this, void 0, void 0, function () {
      var queryParams, response, validationResult;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            this.injectToStringMethods(request);
            queryParams = {
              input: request.query,
              experienceKey: this.config.experienceKey,
              api_key: this.config.apiKey,
              v: _constants.defaultApiVersion,
              version: this.config.experienceVersion,
              location: (_a = request.location) === null || _a === void 0 ? void 0 : _a.toString(),
              locale: this.config.locale,
              skipSpellCheck: request.skipSpellCheck,
              sessionTrackingEnabled: request.sessionTrackingEnabled,
              queryTrigger: request.queryTrigger,
              context: (0, _stringify.default)(request.context || undefined),
              referrerPageUrl: request.referrerPageUrl,
              source: request.querySource || _QuerySource.QuerySource.Standard
            };
            return [4
            /*yield*/
            , this.httpService.get(this.universalSearchEndpoint, queryParams)];

          case 1:
            response = _b.sent();
            validationResult = this.apiResponseValidator.validate(response);

            if (validationResult instanceof Error) {
              return [2
              /*return*/
              , _promise.default.reject(validationResult)];
            }

            return [2
            /*return*/
            , (0, _createUniversalSearchResponse.createUniversalSearchResponse)(response)];
        }
      });
    });
  };

  SearchServiceImpl.prototype.verticalSearch = function (request) {
    var _a, _b;

    return __awaiter(this, void 0, void 0, function () {
      var queryParams, response, validationResult;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            this.injectToStringMethods(request);
            queryParams = {
              experienceKey: this.config.experienceKey,
              api_key: this.config.apiKey,
              v: _constants.defaultApiVersion,
              version: this.config.experienceVersion,
              locale: this.config.locale,
              input: request.query,
              location: (_a = request.location) === null || _a === void 0 ? void 0 : _a.toString(),
              verticalKey: request.verticalKey,
              filters: request.staticFilters && (0, _serializeStaticFilters.serializeStaticFilters)(request.staticFilters),
              limit: request.limit,
              offset: request.offset,
              retrieveFacets: request.retrieveFacets,
              facetFilters: request.facets && (0, _serializeFacets.serializeFacets)(request.facets),
              skipSpellCheck: request.skipSpellCheck,
              queryTrigger: request.queryTrigger,
              sessionTrackingEnabled: request.sessionTrackingEnabled,
              sortBys: (0, _stringify.default)(request.sortBys || []),
              context: (0, _stringify.default)(request.context || undefined),
              referrerPageUrl: request.referrerPageUrl,
              source: request.querySource || _QuerySource.QuerySource.Standard,
              locationRadius: (_b = request.locationRadius) === null || _b === void 0 ? void 0 : _b.toString(),
              queryId: request.queryId
            };
            return [4
            /*yield*/
            , this.httpService.get(this.verticalSearchEndpoint, queryParams)];

          case 1:
            response = _c.sent();
            validationResult = this.apiResponseValidator.validate(response);

            if (validationResult instanceof Error) {
              return [2
              /*return*/
              , _promise.default.reject(validationResult)];
            }

            return [2
            /*return*/
            , (0, _createVerticalSearchResponse.createVerticalSearchResponse)(response)];
        }
      });
    });
  };
  /**
   * Injects toString() methods into the request objects that require them
   */


  SearchServiceImpl.prototype.injectToStringMethods = function (request) {
    if (request.location) {
      request.location.toString = function () {
        return this.latitude + "," + this.longitude;
      };
    }
  };

  return SearchServiceImpl;
}();

exports.SearchServiceImpl = SearchServiceImpl;

/***/ }),

/***/ 6046:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.AnswersError = void 0;

var _create = _interopRequireDefault(__webpack_require__(4943));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5507));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf.default || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create.default)(b) : (__.prototype = b.prototype, new __());
  };
}();
/**
 * Represents an error
 *
 * @remarks
 * If the error originates from the Answer API, the code and type property will be present.
 *
 * @public
 */


var AnswersError =
/** @class */
function (_super) {
  __extends(AnswersError, _super);
  /** @internal */


  function AnswersError(message, code, type) {
    var _this = _super.call(this, message) || this;

    _this.message = message;
    _this.code = code;
    _this.type = type;
    return _this;
  }

  return AnswersError;
}(Error);

exports.AnswersError = AnswersError;

/***/ }),

/***/ 2447:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ 6291:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ 5651:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(6902);

var _forEachInstanceProperty = __webpack_require__(8914);

var _context, _context2;

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _exportNames = {
  AnswersError: true,
  Matcher: true,
  FilterCombinator: true,
  QuerySource: true,
  QueryTrigger: true,
  SortType: true,
  Direction: true,
  DirectAnswerType: true,
  LocationBiasMethod: true,
  SearchIntent: true,
  Source: true,
  SpellCheckType: true
};

_Object$defineProperty(exports, "AnswersError", {
  enumerable: true,
  get: function get() {
    return _AnswersError.AnswersError;
  }
});

_Object$defineProperty(exports, "Matcher", {
  enumerable: true,
  get: function get() {
    return _Matcher.Matcher;
  }
});

_Object$defineProperty(exports, "FilterCombinator", {
  enumerable: true,
  get: function get() {
    return _CombinedFilter.FilterCombinator;
  }
});

_Object$defineProperty(exports, "QuerySource", {
  enumerable: true,
  get: function get() {
    return _QuerySource.QuerySource;
  }
});

_Object$defineProperty(exports, "QueryTrigger", {
  enumerable: true,
  get: function get() {
    return _QueryTrigger.QueryTrigger;
  }
});

_Object$defineProperty(exports, "SortType", {
  enumerable: true,
  get: function get() {
    return _SortType.SortType;
  }
});

_Object$defineProperty(exports, "Direction", {
  enumerable: true,
  get: function get() {
    return _Direction.Direction;
  }
});

_Object$defineProperty(exports, "DirectAnswerType", {
  enumerable: true,
  get: function get() {
    return _DirectAnswerType.DirectAnswerType;
  }
});

_Object$defineProperty(exports, "LocationBiasMethod", {
  enumerable: true,
  get: function get() {
    return _LocationBias.LocationBiasMethod;
  }
});

_Object$defineProperty(exports, "SearchIntent", {
  enumerable: true,
  get: function get() {
    return _SearchIntent.SearchIntent;
  }
});

_Object$defineProperty(exports, "Source", {
  enumerable: true,
  get: function get() {
    return _Source.Source;
  }
});

_Object$defineProperty(exports, "SpellCheckType", {
  enumerable: true,
  get: function get() {
    return _SpellCheck.SpellCheckType;
  }
});

var _AnswersError = __webpack_require__(6046);

var _AutocompleteRequest = __webpack_require__(2447);

_forEachInstanceProperty(_context = _Object$keys(_AutocompleteRequest)).call(_context, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AutocompleteRequest[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AutocompleteRequest[key];
    }
  });
});

var _AutocompleteResponse = __webpack_require__(6291);

_forEachInstanceProperty(_context2 = _Object$keys(_AutocompleteResponse)).call(_context2, function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _AutocompleteResponse[key]) return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AutocompleteResponse[key];
    }
  });
});

var _Matcher = __webpack_require__(5596);

var _CombinedFilter = __webpack_require__(2032);

var _QuerySource = __webpack_require__(8068);

var _QueryTrigger = __webpack_require__(4802);

var _SortType = __webpack_require__(6158);

var _Direction = __webpack_require__(8031);

var _DirectAnswerType = __webpack_require__(6615);

var _LocationBias = __webpack_require__(5499);

var _SearchIntent = __webpack_require__(4314);

var _Source = __webpack_require__(500);

var _SpellCheck = __webpack_require__(9063);

/***/ }),

/***/ 5596:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Matcher = void 0;

/**
 * A Matcher is a filtering operation.
 *
 * @public
 */
var Matcher;
exports.Matcher = Matcher;

(function (Matcher) {
  /**
   * An equals comparison.
   *
   * @remarks
   * Compatible with all field types.
   */
  Matcher["Equals"] = "$eq";
  /**
   * A not equals comparison.
   *
   * @remarks
   * Compatible with all field types.
   */

  Matcher["NotEquals"] = "!$eq";
  /**
   * A less than comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */

  Matcher["LessThan"] = "$lt";
  /**
   * A less than or equal to comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */

  Matcher["LessThanOrEqualTo"] = "$le";
  /**
   * A greater than comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */

  Matcher["GreaterThan"] = "$gt";
  /**
   * A greater than or equal to comparison.
   *
   * @remarks
   * Compatible with integer, float, date, datetime, and time fields.
   */

  Matcher["GreaterThanOrEqualTo"] = "$ge";
  /**
   * A comparison of whether an entity is within a certain radius of a certain location.
   *
   * @remarks
   * Only compatible with the builtin.location field.
   */

  Matcher["Near"] = "$near";
})(Matcher || (exports.Matcher = Matcher = {}));

/***/ }),

/***/ 2032:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.FilterCombinator = void 0;

/**
 * Indicates how the filters in a {@link CombinedFilter} should be combined.
 *
 * @public
 */
var FilterCombinator;
exports.FilterCombinator = FilterCombinator;

(function (FilterCombinator) {
  /** Indicates that filters should be combined with a logical AND. */
  FilterCombinator["AND"] = "$and";
  /** Indicates that filters should be combined with a logical OR. */

  FilterCombinator["OR"] = "$or";
})(FilterCombinator || (exports.FilterCombinator = FilterCombinator = {}));

/***/ }),

/***/ 8031:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Direction = void 0;

/**
 * The direction of a sort.
 *
 * @public
 */
var Direction;
exports.Direction = Direction;

(function (Direction) {
  /**
   *  An ascending sort
   *
   * @remarks
   * For numbers this sort is low to high. For text it is alphabetical. For dates it is chronological order.
   */
  Direction["Ascending"] = "ASC";
  /**
   * A descending soft
   *
   * @remarks
   * For numbers this sort is high to low. For text it is reverse alphabetical. For dates it is reverse
   * chronological order.
   */

  Direction["Descending"] = "DESC";
})(Direction || (exports.Direction = Direction = {}));

/***/ }),

/***/ 8068:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.QuerySource = void 0;

/**
 * The source of the search request.
 *
 * @public
 */
var QuerySource;
exports.QuerySource = QuerySource;

(function (QuerySource) {
  /**
   * Indicates that the query was initiated from a standard Answers integration.
   */
  QuerySource["Standard"] = "STANDARD";
  /**
   * Indicates that the query was initaited from an Answers Overlay.
   */

  QuerySource["Overlay"] = "OVERLAY";
})(QuerySource || (exports.QuerySource = QuerySource = {}));

/***/ }),

/***/ 4802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.QueryTrigger = void 0;

/**
 * Describes the ways a search can be executed besides user input.
 *
 * @remarks
 * Used for search analytics. If a user supplied the search query, do not include a QueryTrigger.
 *
 * @example
 * An answers site may be configured to perform a search for 'What services do you offer?' when the page
 * loads. Because that query is a default query rather than a user-supplied query, the Initialize QueryTrigger
 * should be included in the request.
 *
 * @public
 */
var QueryTrigger;
exports.QueryTrigger = QueryTrigger;

(function (QueryTrigger) {
  /** Indicates that the query was triggered by a default initial search. */
  QueryTrigger["Initialize"] = "initialize";
  /** Indicates that the query was suggested by a {@link SpellCheck} response. */

  QueryTrigger["Suggest"] = "suggest";
})(QueryTrigger || (exports.QueryTrigger = QueryTrigger = {}));

/***/ }),

/***/ 6158:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SortType = void 0;

/**
 * The method of sorting.
 *
 * @public
 */
var SortType;
exports.SortType = SortType;

(function (SortType) {
  /**
   * Sorts based on a field with the direction specified.
   */
  SortType["Field"] = "FIELD";
  /**
   * Sorts based on entity distance alone.
   */

  SortType["EntityDistance"] = "ENTITY_DISTANCE";
  /**
   * Sorts based on relevance according to the algorithm and, when relevant, location bias.
   */

  SortType["Relevance"] = "RELEVANCE";
})(SortType || (exports.SortType = SortType = {}));

/***/ }),

/***/ 6615:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.DirectAnswerType = void 0;

/**
 * Represents the type of direct answer.
 *
 * @public
 */
var DirectAnswerType;
exports.DirectAnswerType = DirectAnswerType;

(function (DirectAnswerType) {
  /** Indicates that the DirectAnswer is a {@link FeaturedSnippetDirectAnswer}. */
  DirectAnswerType["FeaturedSnippet"] = "FEATURED_SNIPPET";
  /** Indicates that the DirectAnswer is a {@link FieldValueDirectAnswer}. */

  DirectAnswerType["FieldValue"] = "FIELD_VALUE";
})(DirectAnswerType || (exports.DirectAnswerType = DirectAnswerType = {}));

/***/ }),

/***/ 5499:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.LocationBiasMethod = void 0;

/**
 * The method used to determine the location.
 *
 * @public
 */
var LocationBiasMethod;
exports.LocationBiasMethod = LocationBiasMethod;

(function (LocationBiasMethod) {
  /** Location was determined by IP address. */
  LocationBiasMethod["Ip"] = "IP";
  /**
   * Location was supplied by the user's device.
   *
   * @remarks
   * This location bias method is set when a location is supplied in search requests.
   * */

  LocationBiasMethod["Device"] = "DEVICE";
  /**
   * Location is unknown.
   */

  LocationBiasMethod["Unknown"] = "UNKNOWN";
})(LocationBiasMethod || (exports.LocationBiasMethod = LocationBiasMethod = {}));

/***/ }),

/***/ 4314:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SearchIntent = void 0;

/**
 * Represents intents from the Answers API.
 *
 * @public
 */
var SearchIntent;
exports.SearchIntent = SearchIntent;

(function (SearchIntent) {
  /** The Answers API is requesting a prompt for the user's location. */
  SearchIntent["NearMe"] = "NEAR_ME";
})(SearchIntent || (exports.SearchIntent = SearchIntent = {}));

/***/ }),

/***/ 500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Source = void 0;

/**
 * Represents the source of a {@link Result}.
 *
 * @public
 */
var Source;
exports.Source = Source;

(function (Source) {
  /** The result is from an Answers Knowledge Graph. */
  Source["KnowledgeManager"] = "KNOWLEDGE_MANAGER";
  /** The result is from Google Custom Search Engine. */

  Source["Google"] = "GOOGLE_CSE";
  /** The result is from Bing Search Engine. */

  Source["Bing"] = "BING_CSE";
  /** The result is from Zendesk. */

  Source["Zendesk"] = "ZENDESK";
  /** The result is from Algolia. */

  Source["Algolia"] = "ALGOLIA";
  /** The result was from a generic source. */

  Source["Generic"] = "GENERIC";
})(Source || (exports.Source = Source = {}));

/***/ }),

/***/ 9063:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.SpellCheckType = void 0;

/**
 * Represents the type of spell check performed.
 *
 * @public
 */
var SpellCheckType;
exports.SpellCheckType = SpellCheckType;

(function (SpellCheckType) {
  /** The API is suggesting an alternative query. */
  SpellCheckType["Suggest"] = "SUGGEST";
  /** The API is autocorrecting the original query. */

  SpellCheckType["AutoCorrect"] = "AUTOCORRECT";
  /** The API may be doing some combination of suggesting or autocorrecting. */

  SpellCheckType["Combine"] = "COMBINE";
})(SpellCheckType || (exports.SpellCheckType = SpellCheckType = {}));

/***/ }),

/***/ 1177:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.serializeFacets = serializeFacets;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _reduce = _interopRequireDefault(__webpack_require__(2366));

var _stringify = _interopRequireDefault(__webpack_require__(9340));

var _assign = _interopRequireDefault(__webpack_require__(1942));

var _serializeStaticFilters = __webpack_require__(5250);

var __assign = void 0 && (void 0).__assign || function () {
  __assign = _assign.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function serializeFacets(filters) {
  return (0, _stringify.default)((0, _reduce.default)(filters).call(filters, function (obj, facet) {
    var fieldId = facet.fieldId;
    var shapedFacets = shapeFacetOptionArrayForApi(facet.options, fieldId);
    obj[fieldId] = shapedFacets;
    return obj;
  }, {}));
}

function shapeFacetOptionArrayForApi(options, fieldId) {
  return (0, _map.default)(options).call(options, function (option) {
    return (0, _serializeStaticFilters.shapeFilterForApi)(__assign(__assign({}, option), {
      fieldId: fieldId
    }));
  });
}

/***/ }),

/***/ 5250:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.serializeStaticFilters = serializeStaticFilters;
exports.shapeFilterForApi = shapeFilterForApi;

var _stringify = _interopRequireDefault(__webpack_require__(9340));

function serializeStaticFilters(filter) {
  if (isCombinedFilter(filter)) {
    return (0, _stringify.default)(shapeCombinedFilterForApi(filter));
  }

  return (0, _stringify.default)(shapeFilterForApi(filter));
}

function shapeCombinedFilterForApi(combinedFilter) {
  var _a;

  var shapedFilters = [];

  for (var _i = 0, _b = combinedFilter.filters; _i < _b.length; _i++) {
    var filter = _b[_i];

    if (isCombinedFilter(filter)) {
      shapedFilters.push(shapeCombinedFilterForApi(filter));
    } else {
      shapedFilters.push(shapeFilterForApi(filter));
    }
  }

  return shapedFilters.length === 1 ? shapedFilters[0] : (_a = {}, _a[combinedFilter.combinator] = shapedFilters, _a);
}

function shapeFilterForApi(filter) {
  var _a, _b;

  return _a = {}, _a[filter.fieldId] = (_b = {}, _b[filter.matcher] = filter.value, _b), _a;
}

function isCombinedFilter(filter) {
  return filter.filters !== undefined && filter.combinator !== undefined;
}

/***/ }),

/***/ 9025:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createAutocompleteResponse = createAutocompleteResponse;
exports.createFilterSearchResponse = createFilterSearchResponse;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _keys = _interopRequireDefault(__webpack_require__(6902));

var _createAutocompleteResult = __webpack_require__(7825);

function createAutocompleteResponse(data) {
  var _context;

  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }

  if (!(0, _keys.default)(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  var response = data.response;
  var responseResults = (0, _map.default)(_context = response.results).call(_context, _createAutocompleteResult.createAutocompleteResult);
  var inputIntents = response.input ? response.input.queryIntents : [];
  return {
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || [],
    uuid: data.meta.uuid
  };
}

function createFilterSearchResponse(data) {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }

  if (!(0, _keys.default)(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  var response = data.response;
  var isSectioned = false;
  var sections = [];
  var responseResults = []; // a filtersearch response may have a sections object

  if (response.sections) {
    var _context2;

    isSectioned = true;
    sections = (0, _map.default)(_context2 = response.sections).call(_context2, function (section) {
      var _context3;

      return {
        label: section.label,
        results: (0, _map.default)(_context3 = section.results).call(_context3, _createAutocompleteResult.createAutocompleteResult)
      };
    });
  } else {
    var _context4;

    responseResults = (0, _map.default)(_context4 = response.results).call(_context4, _createAutocompleteResult.createAutocompleteResult);
  }

  var inputIntents = response.input ? response.input.queryIntents : [];
  return {
    sectioned: isSectioned,
    sections: sections,
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || [],
    uuid: data.meta.uuid
  };
}

/***/ }),

/***/ 7825:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createAutocompleteResult = createAutocompleteResult;

var _filter = _interopRequireDefault(__webpack_require__(116));

var _Source = __webpack_require__(500);

var _createFilter = __webpack_require__(9525);

var _ResultsFactory = __webpack_require__(3287);

function createAutocompleteResult(result) {
  var relatedItem = result.relatedItem ? _ResultsFactory.ResultsFactory.create([result.relatedItem], _Source.Source.KnowledgeManager)[0] : result.relatedItem;
  return {
    filter: (0, _filter.default)(result) && (0, _createFilter.createFilter)((0, _filter.default)(result)),
    key: result.key,
    matchedSubstrings: result.matchedSubstrings || [],
    value: result.value,
    relatedItem: relatedItem
  };
}

/***/ }),

/***/ 9525:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createFilter = createFilter;

var _keys = _interopRequireDefault(__webpack_require__(6902));

function createFilter(filter) {
  var fieldId = (0, _keys.default)(filter)[0];
  var matcher = (0, _keys.default)(filter[fieldId])[0];
  return {
    fieldId: fieldId,
    matcher: matcher,
    value: filter[fieldId][matcher]
  };
}

/***/ }),

/***/ 3287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ResultsFactory = void 0;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _Source = __webpack_require__(500);

/**
 * A factory which creates results from different sources
 */
var ResultsFactory =
/** @class */
function () {
  function ResultsFactory() {}

  ResultsFactory.create = function (results, source) {
    var _this = this;

    if (!results) {
      return [];
    }

    return (0, _map.default)(results).call(results, function (result, index) {
      var resultIndex = index + 1;

      switch (source) {
        case _Source.Source.KnowledgeManager:
          return _this.fromKnowledgeManager(result, resultIndex);

        case _Source.Source.Google:
          return _this.fromGoogleCustomSearchEngine(result, resultIndex);

        case _Source.Source.Bing:
          return _this.fromBingCustomSearchEngine(result, resultIndex);

        case _Source.Source.Zendesk:
          return _this.fromZendeskSearchEngine(result, resultIndex);

        case _Source.Source.Algolia:
          return _this.fromAlgoliaSearchEngine(result, resultIndex);

        default:
          return _this.fromGeneric(result, resultIndex);
      }
    });
  };

  ResultsFactory.fromKnowledgeManager = function (result, index) {
    var _a;

    var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
    return {
      rawData: rawData,
      source: _Source.Source.KnowledgeManager,
      index: index,
      name: rawData.name,
      description: rawData.description,
      link: rawData.website,
      id: rawData.id,
      distance: result.distance,
      distanceFromFilter: result.distanceFromFilter,
      highlightedFields: result.highlightedFields,
      entityType: rawData.type
    };
  };

  ResultsFactory.fromGoogleCustomSearchEngine = function (result, index) {
    var _a;

    var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
    return {
      rawData: rawData,
      source: _Source.Source.Google,
      index: index,
      name: rawData.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
      description: rawData.htmlSnippet,
      link: rawData.link
    };
  };

  ResultsFactory.fromBingCustomSearchEngine = function (result, index) {
    var _a;

    var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
    return {
      rawData: rawData,
      source: _Source.Source.Bing,
      index: index,
      name: rawData.name,
      description: rawData.snippet,
      link: rawData.url
    };
  };

  ResultsFactory.fromZendeskSearchEngine = function (result, index) {
    var _a;

    var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
    return {
      rawData: rawData,
      source: _Source.Source.Zendesk,
      index: index,
      name: rawData.title,
      description: rawData.snippet,
      link: rawData.html_url
    };
  };

  ResultsFactory.fromAlgoliaSearchEngine = function (result, index) {
    var _a;

    var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
    return {
      rawData: rawData,
      source: _Source.Source.Algolia,
      index: index,
      name: rawData.name,
      id: rawData.objectID
    };
  };

  ResultsFactory.fromGeneric = function (result, index) {
    var _a;

    var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
    return {
      rawData: rawData,
      source: _Source.Source.Generic,
      index: index,
      name: rawData.name,
      description: rawData.description,
      link: rawData.website,
      id: rawData.id
    };
  };

  ResultsFactory.fromDirectAnswer = function (result) {
    var _a;

    var rawData = (_a = result.fieldValues) !== null && _a !== void 0 ? _a : {};
    return {
      rawData: rawData,
      source: _Source.Source.KnowledgeManager,
      name: rawData.name,
      description: rawData.description,
      link: result.website,
      id: result.id,
      entityType: result.type
    };
  };

  return ResultsFactory;
}();

exports.ResultsFactory = ResultsFactory;

/***/ }),

/***/ 4193:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createAppliedQueryFilter = createAppliedQueryFilter;

var _filter = _interopRequireDefault(__webpack_require__(116));

var _createFilter = __webpack_require__(9525);

function createAppliedQueryFilter(data) {
  return {
    displayKey: data.displayKey,
    displayValue: data.displayValue,
    filter: (0, _createFilter.createFilter)((0, _filter.default)(data)),
    details: data.details
  };
}

/***/ }),

/***/ 1516:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createDirectAnswer = createDirectAnswer;

var _DirectAnswerType = __webpack_require__(6615);

var _ResultsFactory = __webpack_require__(3287);

function createDirectAnswer(data) {
  var isFieldValueDirectAnswer = (data === null || data === void 0 ? void 0 : data.type) === _DirectAnswerType.DirectAnswerType.FieldValue;
  var isFeaturedSnippetDirectAnswer = (data === null || data === void 0 ? void 0 : data.type) === _DirectAnswerType.DirectAnswerType.FeaturedSnippet;

  if (isFieldValueDirectAnswer) {
    return {
      type: _DirectAnswerType.DirectAnswerType.FieldValue,
      value: data.answer.value,
      relatedResult: _ResultsFactory.ResultsFactory.fromDirectAnswer(data.relatedItem.data),
      verticalKey: data.relatedItem.verticalConfigId,
      entityName: data.answer.entityName,
      fieldName: data.answer.fieldName,
      fieldApiName: data.answer.fieldApiName,
      fieldType: data.answer.fieldType
    };
  } else if (isFeaturedSnippetDirectAnswer) {
    return {
      type: _DirectAnswerType.DirectAnswerType.FeaturedSnippet,
      value: data.answer.value,
      relatedResult: _ResultsFactory.ResultsFactory.fromDirectAnswer(data.relatedItem.data),
      verticalKey: data.relatedItem.verticalConfigId,
      snippet: data.answer.snippet
    };
  } else {
    throw new Error('The Answers API returned an unknown direct answer type');
  }
}

/***/ }),

/***/ 2164:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createFacets = createFacets;

var _filter = _interopRequireDefault(__webpack_require__(116));

var _map = _interopRequireDefault(__webpack_require__(2991));

var _createFilter = __webpack_require__(9525);

function createFacets(facets) {
  if (!facets) {
    return [];
  }

  return (0, _map.default)(facets).call(facets, function (facet) {
    return {
      fieldId: facet.fieldId,
      displayName: facet.displayName,
      options: createFacetOptions(facet.options)
    };
  });
}

function createFacetOptions(options) {
  return (0, _map.default)(options).call(options, function (option) {
    var filter = (0, _createFilter.createFilter)((0, _filter.default)(option));
    return {
      displayName: option.displayName,
      count: option.count,
      selected: option.selected,
      matcher: filter.matcher,
      value: filter.value
    };
  });
}

/***/ }),

/***/ 2396:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createLocationBias = createLocationBias;

function createLocationBias(data) {
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    displayName: data.locationDisplayName,
    method: data.accuracy
  };
}

/***/ }),

/***/ 1266:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createSpellCheck = createSpellCheck;

function createSpellCheck(data) {
  return {
    originalQuery: data.originalQuery,
    correctedQuery: data.correctedQuery.value,
    type: data.type
  };
}

/***/ }),

/***/ 7848:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createUniversalSearchResponse = createUniversalSearchResponse;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _isArray = _interopRequireDefault(__webpack_require__(1511));

var _createVerticalResults = __webpack_require__(3617);

var _createDirectAnswer = __webpack_require__(1516);

var _createSpellCheck = __webpack_require__(1266);

var _createLocationBias = __webpack_require__(2396);

function createUniversalSearchResponse(data) {
  var _context;

  var verticalResults = (0, _isArray.default)(data.response.modules) ? (0, _map.default)(_context = data.response.modules).call(_context, _createVerticalResults.createVerticalResults) : [];
  return {
    verticalResults: verticalResults,
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer && (0, _createDirectAnswer.createDirectAnswer)(data.response.directAnswer),
    searchIntents: data.response.searchIntents,
    spellCheck: data.response.spellCheck && (0, _createSpellCheck.createSpellCheck)(data.response.spellCheck),
    locationBias: data.response.locationBias && (0, _createLocationBias.createLocationBias)(data.response.locationBias),
    uuid: data.meta.uuid
  };
}

/***/ }),

/***/ 3617:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createVerticalResults = createVerticalResults;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _ResultsFactory = __webpack_require__(3287);

var _createAppliedQueryFilter = __webpack_require__(4193);

function createVerticalResults(data) {
  var _context;

  var appliedQueryFilters = data.appliedQueryFilters ? (0, _map.default)(_context = data.appliedQueryFilters).call(_context, _createAppliedQueryFilter.createAppliedQueryFilter) : [];
  return {
    appliedQueryFilters: appliedQueryFilters,
    queryDurationMillis: data.queryDurationMillis,
    results: _ResultsFactory.ResultsFactory.create(data.results, data.source),
    resultsCount: data.resultsCount,
    source: data.source,
    verticalKey: data.verticalConfigId
  };
}

/***/ }),

/***/ 3516:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.createVerticalSearchResponse = createVerticalSearchResponse;

var _map = _interopRequireDefault(__webpack_require__(2991));

var _createFacets = __webpack_require__(2164);

var _createLocationBias = __webpack_require__(2396);

var _createSpellCheck = __webpack_require__(1266);

var _createVerticalResults = __webpack_require__(3617);

function createVerticalSearchResponse(data) {
  var _context;

  var _a;

  if (!data.response) {
    throw new Error('The search data does not contain a response property');
  }

  return {
    verticalResults: (0, _createVerticalResults.createVerticalResults)(data.response),
    queryId: data.response.queryId,
    searchIntents: data.response.searchIntents,
    facets: (0, _createFacets.createFacets)(data.response.facets),
    spellCheck: data.response.spellCheck && (0, _createSpellCheck.createSpellCheck)(data.response.spellCheck),
    locationBias: data.response.locationBias && (0, _createLocationBias.createLocationBias)(data.response.locationBias),
    allResultsForVertical: data.response.allResultsForVertical && createVerticalSearchResponse({
      response: data.response.allResultsForVertical
    }),
    alternativeVerticals: data.response.alternativeVerticals && data.response.alternativeVerticals.modules && (0, _map.default)(_context = data.response.alternativeVerticals.modules).call(_context, _createVerticalResults.createVerticalResults),
    uuid: (_a = data.meta) === null || _a === void 0 ? void 0 : _a.uuid
  };
}

/***/ }),

/***/ 648:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.addParamsToURL = addParamsToURL;
exports.sanitizeQueryParams = sanitizeQueryParams;

var _keys = _interopRequireDefault(__webpack_require__(6902));

var _forEach = _interopRequireDefault(__webpack_require__(8914));

var _urlSearchParams = _interopRequireDefault(__webpack_require__(4435));

var _url = _interopRequireDefault(__webpack_require__(9969));

/**
 * Updates a url with the given params.
 */
function addParamsToURL(url, params) {
  var parsedUrl = new _url.default(url);
  var urlParams = new _urlSearchParams.default(parsedUrl.search.substring(1));
  var sanitizedParams = sanitizeQueryParams(params);

  for (var key in sanitizedParams) {
    urlParams.append(key, sanitizedParams[key].toString());
  }

  var updatedUrl = parsedUrl.origin + parsedUrl.pathname;
  var paramsString = urlParams.toString();

  if (paramsString) {
    updatedUrl += '?' + paramsString;
  }

  return updatedUrl;
}

function sanitizeQueryParams(params) {
  var _context;

  (0, _forEach.default)(_context = (0, _keys.default)(params)).call(_context, function (key) {
    if (params[key] === undefined || params[key] === null) {
      delete params[key];
    }
  });
  return params;
}

/***/ }),

/***/ 8499:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(530);

var _Object$defineProperty = __webpack_require__(3978);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ApiResponseValidator = void 0;

var _find = _interopRequireDefault(__webpack_require__(4473));

var _map = _interopRequireDefault(__webpack_require__(2991));

var _AnswersError = __webpack_require__(6046);

/**
 * Determines whether or not an API response can be used to construct an answers-core response
 *
 * @internal
 */
var ApiResponseValidator =
/** @class */
function () {
  function ApiResponseValidator() {}

  ApiResponseValidator.prototype.validate = function (apiResponse) {
    var testFunctions = [this.validateResponseProp, this.validateMetaProp, this.checkForApiErrors];
    var testResults = (0, _map.default)(testFunctions).call(testFunctions, function (testFn) {
      return testFn(apiResponse);
    });
    return (0, _find.default)(testResults).call(testResults, function (result) {
      return result instanceof _AnswersError.AnswersError;
    });
  };

  ApiResponseValidator.prototype.validateResponseProp = function (apiResponse) {
    if (!apiResponse.response) {
      return new _AnswersError.AnswersError('Malformed Answers API response: missing response property.');
    }
  };

  ApiResponseValidator.prototype.validateMetaProp = function (apiResponse) {
    if (!apiResponse.meta) {
      return new _AnswersError.AnswersError('Malformed Answers API response: missing meta property.');
    }
  };

  ApiResponseValidator.prototype.checkForApiErrors = function (apiResponse) {
    var _a, _b;

    if (((_b = (_a = apiResponse.meta) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length) >= 1) {
      var error = apiResponse.meta.errors[0];
      return new _AnswersError.AnswersError(error.message, error.code, error.type);
    }
  };

  return ApiResponseValidator;
}();

exports.ApiResponseValidator = ApiResponseValidator;

/***/ }),

/***/ 4034:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(2988);
var path = __webpack_require__(4058);

module.exports = path.Array.isArray;


/***/ }),

/***/ 2710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6274);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').entries;


/***/ }),

/***/ 2383:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1501);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').filter;


/***/ }),

/***/ 7671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(833);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').find;


/***/ }),

/***/ 9324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(2437);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').forEach;


/***/ }),

/***/ 8700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(9076);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').indexOf;


/***/ }),

/***/ 3866:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(8787);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').map;


/***/ }),

/***/ 2999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1876);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').reduce;


/***/ }),

/***/ 4900:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(186);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('Array').slice;


/***/ }),

/***/ 2480:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var filter = __webpack_require__(2383);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),

/***/ 2236:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var find = __webpack_require__(7671);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),

/***/ 4570:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var indexOf = __webpack_require__(8700);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),

/***/ 8287:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = __webpack_require__(3866);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),

/***/ 8025:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var reduce = __webpack_require__(2999);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};


/***/ }),

/***/ 9601:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var slice = __webpack_require__(4900);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),

/***/ 2774:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trim = __webpack_require__(3348);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
};


/***/ }),

/***/ 4426:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(2619);
var core = __webpack_require__(4058);

if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),

/***/ 5999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(9221);
var path = __webpack_require__(4058);

module.exports = path.Object.assign;


/***/ }),

/***/ 5254:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(3882);
var path = __webpack_require__(4058);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),

/***/ 8171:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6450);
var path = __webpack_require__(4058);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ 3288:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(9816);
var path = __webpack_require__(4058);

var Object = path.Object;

module.exports = function getOwnPropertyNames(it) {
  return Object.getOwnPropertyNames(it);
};


/***/ }),

/***/ 8494:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1724);
var path = __webpack_require__(4058);

module.exports = path.Object.keys;


/***/ }),

/***/ 3065:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(108);
var path = __webpack_require__(4058);

module.exports = path.Object.setPrototypeOf;


/***/ }),

/***/ 2956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7627);
__webpack_require__(5967);
__webpack_require__(8881);
__webpack_require__(4560);
__webpack_require__(7206);
__webpack_require__(4349);
__webpack_require__(7971);
__webpack_require__(7634);
var path = __webpack_require__(4058);

module.exports = path.Promise;


/***/ }),

/***/ 3348:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7398);
var entryVirtual = __webpack_require__(5703);

module.exports = entryVirtual('String').trim;


/***/ }),

/***/ 7473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(5906);
__webpack_require__(5967);
__webpack_require__(5824);
__webpack_require__(8555);
__webpack_require__(2615);
__webpack_require__(1732);
__webpack_require__(5903);
__webpack_require__(1825);
__webpack_require__(8394);
__webpack_require__(5915);
__webpack_require__(1766);
__webpack_require__(2737);
__webpack_require__(9911);
__webpack_require__(4315);
__webpack_require__(3131);
__webpack_require__(4714);
__webpack_require__(659);
__webpack_require__(9120);
__webpack_require__(5327);
__webpack_require__(1502);
var path = __webpack_require__(4058);

module.exports = path.Symbol;


/***/ }),

/***/ 4227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1825);
__webpack_require__(7971);
__webpack_require__(7634);
var WrappedWellKnownSymbolModule = __webpack_require__(1477);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),

/***/ 3916:
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ 1851:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(941);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ 8479:
/***/ (function(module) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 5743:
/***/ (function(module) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ 6059:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(941);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 6837:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(3610).forEach;
var arrayMethodIsStrict = __webpack_require__(4194);
var arrayMethodUsesToLength = __webpack_require__(5486);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ 1354:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(6843);
var toObject = __webpack_require__(9678);
var callWithSafeIterationClosing = __webpack_require__(5196);
var isArrayIteratorMethod = __webpack_require__(6782);
var toLength = __webpack_require__(3057);
var createProperty = __webpack_require__(5449);
var getIteratorMethod = __webpack_require__(2902);

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 1692:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(4529);
var toLength = __webpack_require__(3057);
var toAbsoluteIndex = __webpack_require__(9413);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(6843);
var IndexedObject = __webpack_require__(7026);
var toObject = __webpack_require__(9678);
var toLength = __webpack_require__(3057);
var arraySpeciesCreate = __webpack_require__(4692);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ 568:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);
var wellKnownSymbol = __webpack_require__(9813);
var V8_VERSION = __webpack_require__(3385);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 4194:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5981);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ 5486:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5746);
var fails = __webpack_require__(5981);
var has = __webpack_require__(7457);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ 6499:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(3916);
var toObject = __webpack_require__(9678);
var IndexedObject = __webpack_require__(7026);
var toLength = __webpack_require__(3057);

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 4692:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(941);
var isArray = __webpack_require__(1052);
var wellKnownSymbol = __webpack_require__(9813);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ 5196:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var iteratorClose = __webpack_require__(7609);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ 1385:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9813);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 2532:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 9697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(2885);
var classofRaw = __webpack_require__(2532);
var wellKnownSymbol = __webpack_require__(9813);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ 4160:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 1046:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(5143).IteratorPrototype;
var create = __webpack_require__(9290);
var createPropertyDescriptor = __webpack_require__(1887);
var setToStringTag = __webpack_require__(904);
var Iterators = __webpack_require__(2077);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 2029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5746);
var definePropertyModule = __webpack_require__(5988);
var createPropertyDescriptor = __webpack_require__(1887);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 1887:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 5449:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(6935);
var definePropertyModule = __webpack_require__(5988);
var createPropertyDescriptor = __webpack_require__(1887);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 7771:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var createIteratorConstructor = __webpack_require__(1046);
var getPrototypeOf = __webpack_require__(249);
var setPrototypeOf = __webpack_require__(8929);
var setToStringTag = __webpack_require__(904);
var createNonEnumerableProperty = __webpack_require__(2029);
var redefine = __webpack_require__(9754);
var wellKnownSymbol = __webpack_require__(9813);
var IS_PURE = __webpack_require__(2529);
var Iterators = __webpack_require__(2077);
var IteratorsCore = __webpack_require__(5143);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ 6349:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(4058);
var has = __webpack_require__(7457);
var wrappedWellKnownSymbolModule = __webpack_require__(1477);
var defineProperty = __webpack_require__(5988).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 5746:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 1333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var isObject = __webpack_require__(941);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 3281:
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 2749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(2861);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 6049:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(2532);
var global = __webpack_require__(1899);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 8045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(2861);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 2861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(626);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 3385:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var userAgent = __webpack_require__(2861);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ 5703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(4058);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),

/***/ 6759:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1899);
var getOwnPropertyDescriptor = __webpack_require__(9677).f;
var isForced = __webpack_require__(7252);
var path = __webpack_require__(4058);
var bind = __webpack_require__(6843);
var createNonEnumerableProperty = __webpack_require__(2029);
var has = __webpack_require__(7457);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ 5981:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 6843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aFunction = __webpack_require__(3916);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 626:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(4058);
var global = __webpack_require__(1899);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 2902:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(9697);
var Iterators = __webpack_require__(2077);
var wellKnownSymbol = __webpack_require__(9813);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 429:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var getIteratorMethod = __webpack_require__(2902);

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ 1899:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 7457:
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 7748:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4845:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ 5463:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(626);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 2840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5746);
var fails = __webpack_require__(5981);
var createElement = __webpack_require__(1333);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 7026:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);
var classof = __webpack_require__(2532);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 1302:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(3030);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 5402:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8019);
var global = __webpack_require__(1899);
var isObject = __webpack_require__(941);
var createNonEnumerableProperty = __webpack_require__(2029);
var objectHas = __webpack_require__(7457);
var shared = __webpack_require__(3030);
var sharedKey = __webpack_require__(4262);
var hiddenKeys = __webpack_require__(7748);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 6782:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9813);
var Iterators = __webpack_require__(2077);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 1052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(2532);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ 7252:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 941:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 2529:
/***/ (function(module) {

module.exports = true;


/***/ }),

/***/ 3091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var isArrayIteratorMethod = __webpack_require__(6782);
var toLength = __webpack_require__(3057);
var bind = __webpack_require__(6843);
var getIteratorMethod = __webpack_require__(2902);
var iteratorClose = __webpack_require__(7609);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ 7609:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ 5143:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(5981);
var getPrototypeOf = __webpack_require__(249);
var createNonEnumerableProperty = __webpack_require__(2029);
var has = __webpack_require__(7457);
var wellKnownSymbol = __webpack_require__(9813);
var IS_PURE = __webpack_require__(2529);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 2077:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 6132:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var getOwnPropertyDescriptor = __webpack_require__(9677).f;
var macrotask = __webpack_require__(2941).set;
var IS_IOS = __webpack_require__(2749);
var IS_WEBOS_WEBKIT = __webpack_require__(8045);
var IS_NODE = __webpack_require__(6049);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);

module.exports = global.Promise;


/***/ }),

/***/ 2497:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ 8468:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);
var wellKnownSymbol = __webpack_require__(9813);
var IS_PURE = __webpack_require__(2529);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ 8019:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var inspectSource = __webpack_require__(1302);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 9520:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(3916);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 4420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(5746);
var fails = __webpack_require__(5981);
var objectKeys = __webpack_require__(4771);
var getOwnPropertySymbolsModule = __webpack_require__(7857);
var propertyIsEnumerableModule = __webpack_require__(6760);
var toObject = __webpack_require__(9678);
var IndexedObject = __webpack_require__(7026);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ 9290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var defineProperties = __webpack_require__(9938);
var enumBugKeys = __webpack_require__(6759);
var hiddenKeys = __webpack_require__(7748);
var html = __webpack_require__(5463);
var documentCreateElement = __webpack_require__(1333);
var sharedKey = __webpack_require__(4262);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ 9938:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5746);
var definePropertyModule = __webpack_require__(5988);
var anObject = __webpack_require__(6059);
var objectKeys = __webpack_require__(4771);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ 5988:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5746);
var IE8_DOM_DEFINE = __webpack_require__(2840);
var anObject = __webpack_require__(6059);
var toPrimitive = __webpack_require__(6935);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 9677:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5746);
var propertyIsEnumerableModule = __webpack_require__(6760);
var createPropertyDescriptor = __webpack_require__(1887);
var toIndexedObject = __webpack_require__(4529);
var toPrimitive = __webpack_require__(6935);
var has = __webpack_require__(7457);
var IE8_DOM_DEFINE = __webpack_require__(2840);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(4529);
var nativeGetOwnPropertyNames = __webpack_require__(946).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 946:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(5629);
var enumBugKeys = __webpack_require__(6759);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 7857:
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 249:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(7457);
var toObject = __webpack_require__(9678);
var sharedKey = __webpack_require__(4262);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(4160);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 5629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(7457);
var toIndexedObject = __webpack_require__(4529);
var indexOf = __webpack_require__(1692).indexOf;
var hiddenKeys = __webpack_require__(7748);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 4771:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(5629);
var enumBugKeys = __webpack_require__(6759);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 6760:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ 8929:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var aPossiblePrototype = __webpack_require__(1851);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 5623:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(2885);
var classof = __webpack_require__(9697);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 4058:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 2:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 6584:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var isObject = __webpack_require__(941);
var newPromiseCapability = __webpack_require__(9520);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 7524:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(9754);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),

/***/ 9754:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(2029);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ 8219:
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 4911:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var createNonEnumerableProperty = __webpack_require__(2029);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 4431:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(626);
var definePropertyModule = __webpack_require__(5988);
var wellKnownSymbol = __webpack_require__(9813);
var DESCRIPTORS = __webpack_require__(5746);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(2885);
var defineProperty = __webpack_require__(5988).f;
var createNonEnumerableProperty = __webpack_require__(2029);
var has = __webpack_require__(7457);
var toString = __webpack_require__(5623);
var wellKnownSymbol = __webpack_require__(9813);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ 4262:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(8726);
var uid = __webpack_require__(9418);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 3030:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var setGlobal = __webpack_require__(4911);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 8726:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(2529);
var store = __webpack_require__(3030);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 487:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6059);
var aFunction = __webpack_require__(3916);
var wellKnownSymbol = __webpack_require__(9813);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ 4620:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(8459);
var requireObjectCoercible = __webpack_require__(8219);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 3291:
/***/ (function(module) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ 3093:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(5981);
var whitespaces = __webpack_require__(3483);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ 4853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(8219);
var whitespaces = __webpack_require__(3483);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 2941:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var fails = __webpack_require__(5981);
var bind = __webpack_require__(6843);
var html = __webpack_require__(5463);
var createElement = __webpack_require__(1333);
var IS_IOS = __webpack_require__(2749);
var IS_NODE = __webpack_require__(6049);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 9413:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(8459);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 4529:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7026);
var requireObjectCoercible = __webpack_require__(8219);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 8459:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 3057:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(8459);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 9678:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(8219);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 6935:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(941);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 2885:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9813);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 9418:
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 2302:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(2497);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 1477:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9813);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 9813:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var shared = __webpack_require__(8726);
var has = __webpack_require__(7457);
var uid = __webpack_require__(9418);
var NATIVE_SYMBOL = __webpack_require__(2497);
var USE_SYMBOL_AS_UID = __webpack_require__(2302);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 3483:
/***/ (function(module) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 7627:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var getPrototypeOf = __webpack_require__(249);
var setPrototypeOf = __webpack_require__(8929);
var create = __webpack_require__(9290);
var createNonEnumerableProperty = __webpack_require__(2029);
var createPropertyDescriptor = __webpack_require__(1887);
var iterate = __webpack_require__(3091);

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    // eslint-disable-next-line unicorn/error-message
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),

/***/ 5906:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var fails = __webpack_require__(5981);
var isArray = __webpack_require__(1052);
var isObject = __webpack_require__(941);
var toObject = __webpack_require__(9678);
var toLength = __webpack_require__(3057);
var createProperty = __webpack_require__(5449);
var arraySpeciesCreate = __webpack_require__(4692);
var arrayMethodHasSpeciesSupport = __webpack_require__(568);
var wellKnownSymbol = __webpack_require__(9813);
var V8_VERSION = __webpack_require__(3385);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 1501:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var $filter = __webpack_require__(3610).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(568);
var arrayMethodUsesToLength = __webpack_require__(5486);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 833:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var $find = __webpack_require__(3610).find;
var addToUnscopables = __webpack_require__(8479);
var arrayMethodUsesToLength = __webpack_require__(5486);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 2437:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var forEach = __webpack_require__(6837);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ 9076:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var $indexOf = __webpack_require__(1692).indexOf;
var arrayMethodIsStrict = __webpack_require__(4194);
var arrayMethodUsesToLength = __webpack_require__(5486);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 2988:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var isArray = __webpack_require__(1052);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ 6274:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(4529);
var addToUnscopables = __webpack_require__(8479);
var Iterators = __webpack_require__(2077);
var InternalStateModule = __webpack_require__(5402);
var defineIterator = __webpack_require__(7771);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 8787:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var $map = __webpack_require__(3610).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(568);
var arrayMethodUsesToLength = __webpack_require__(5486);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 1876:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var $reduce = __webpack_require__(6499).left;
var arrayMethodIsStrict = __webpack_require__(4194);
var arrayMethodUsesToLength = __webpack_require__(5486);
var CHROME_VERSION = __webpack_require__(3385);
var IS_NODE = __webpack_require__(6049);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 186:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var isObject = __webpack_require__(941);
var isArray = __webpack_require__(1052);
var toAbsoluteIndex = __webpack_require__(9413);
var toLength = __webpack_require__(3057);
var toIndexedObject = __webpack_require__(4529);
var createProperty = __webpack_require__(5449);
var wellKnownSymbol = __webpack_require__(9813);
var arrayMethodHasSpeciesSupport = __webpack_require__(568);
var arrayMethodUsesToLength = __webpack_require__(5486);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 2619:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var getBuiltIn = __webpack_require__(626);
var fails = __webpack_require__(5981);

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),

/***/ 9120:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(1899);
var setToStringTag = __webpack_require__(904);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 5327:
/***/ (function() {

// empty


/***/ }),

/***/ 9221:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var assign = __webpack_require__(4420);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 3882:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var DESCRIPTORS = __webpack_require__(5746);
var create = __webpack_require__(9290);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ 6450:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var DESCRIPTORS = __webpack_require__(5746);
var objectDefinePropertyModile = __webpack_require__(5988);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ 9816:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var fails = __webpack_require__(5981);
var nativeGetOwnPropertyNames = __webpack_require__(684).f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames
});


/***/ }),

/***/ 1724:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var toObject = __webpack_require__(9678);
var nativeKeys = __webpack_require__(4771);
var fails = __webpack_require__(5981);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 108:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(6887);
var setPrototypeOf = __webpack_require__(8929);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ 5967:
/***/ (function() {

// empty


/***/ }),

/***/ 4560:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var aFunction = __webpack_require__(3916);
var newPromiseCapabilityModule = __webpack_require__(9520);
var perform = __webpack_require__(2);
var iterate = __webpack_require__(3091);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 7206:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var aFunction = __webpack_require__(3916);
var getBuiltIn = __webpack_require__(626);
var newPromiseCapabilityModule = __webpack_require__(9520);
var perform = __webpack_require__(2);
var iterate = __webpack_require__(3091);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 4349:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var IS_PURE = __webpack_require__(2529);
var NativePromise = __webpack_require__(9297);
var fails = __webpack_require__(5981);
var getBuiltIn = __webpack_require__(626);
var speciesConstructor = __webpack_require__(487);
var promiseResolve = __webpack_require__(6584);
var redefine = __webpack_require__(9754);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),

/***/ 8881:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var IS_PURE = __webpack_require__(2529);
var global = __webpack_require__(1899);
var getBuiltIn = __webpack_require__(626);
var NativePromise = __webpack_require__(9297);
var redefine = __webpack_require__(9754);
var redefineAll = __webpack_require__(7524);
var setToStringTag = __webpack_require__(904);
var setSpecies = __webpack_require__(4431);
var isObject = __webpack_require__(941);
var aFunction = __webpack_require__(3916);
var anInstance = __webpack_require__(5743);
var inspectSource = __webpack_require__(1302);
var iterate = __webpack_require__(3091);
var checkCorrectnessOfIteration = __webpack_require__(1385);
var speciesConstructor = __webpack_require__(487);
var task = __webpack_require__(2941).set;
var microtask = __webpack_require__(6132);
var promiseResolve = __webpack_require__(6584);
var hostReportErrors = __webpack_require__(4845);
var newPromiseCapabilityModule = __webpack_require__(9520);
var perform = __webpack_require__(2);
var InternalStateModule = __webpack_require__(5402);
var isForced = __webpack_require__(7252);
var wellKnownSymbol = __webpack_require__(9813);
var IS_NODE = __webpack_require__(6049);
var V8_VERSION = __webpack_require__(3385);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 1502:
/***/ (function() {

// empty


/***/ }),

/***/ 7971:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(4620).charAt;
var InternalStateModule = __webpack_require__(5402);
var defineIterator = __webpack_require__(7771);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 7398:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var $trim = __webpack_require__(4853).trim;
var forcedStringTrimMethod = __webpack_require__(3093);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 8555:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ 2615:
/***/ (function() {

// empty


/***/ }),

/***/ 1732:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),

/***/ 5903:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),

/***/ 1825:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 5824:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6887);
var global = __webpack_require__(1899);
var getBuiltIn = __webpack_require__(626);
var IS_PURE = __webpack_require__(2529);
var DESCRIPTORS = __webpack_require__(5746);
var NATIVE_SYMBOL = __webpack_require__(2497);
var USE_SYMBOL_AS_UID = __webpack_require__(2302);
var fails = __webpack_require__(5981);
var has = __webpack_require__(7457);
var isArray = __webpack_require__(1052);
var isObject = __webpack_require__(941);
var anObject = __webpack_require__(6059);
var toObject = __webpack_require__(9678);
var toIndexedObject = __webpack_require__(4529);
var toPrimitive = __webpack_require__(6935);
var createPropertyDescriptor = __webpack_require__(1887);
var nativeObjectCreate = __webpack_require__(9290);
var objectKeys = __webpack_require__(4771);
var getOwnPropertyNamesModule = __webpack_require__(946);
var getOwnPropertyNamesExternal = __webpack_require__(684);
var getOwnPropertySymbolsModule = __webpack_require__(7857);
var getOwnPropertyDescriptorModule = __webpack_require__(9677);
var definePropertyModule = __webpack_require__(5988);
var propertyIsEnumerableModule = __webpack_require__(6760);
var createNonEnumerableProperty = __webpack_require__(2029);
var redefine = __webpack_require__(9754);
var shared = __webpack_require__(8726);
var sharedKey = __webpack_require__(4262);
var hiddenKeys = __webpack_require__(7748);
var uid = __webpack_require__(9418);
var wellKnownSymbol = __webpack_require__(9813);
var wrappedWellKnownSymbolModule = __webpack_require__(1477);
var defineWellKnownSymbol = __webpack_require__(6349);
var setToStringTag = __webpack_require__(904);
var InternalStateModule = __webpack_require__(5402);
var $forEach = __webpack_require__(3610).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 5915:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),

/***/ 8394:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),

/***/ 1766:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),

/***/ 2737:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),

/***/ 9911:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),

/***/ 4315:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),

/***/ 3131:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),

/***/ 4714:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),

/***/ 659:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(6349);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),

/***/ 7634:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6274);
var DOMIterables = __webpack_require__(3281);
var global = __webpack_require__(1899);
var classof = __webpack_require__(9697);
var createNonEnumerableProperty = __webpack_require__(2029);
var Iterators = __webpack_require__(2077);
var wellKnownSymbol = __webpack_require__(9813);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ 5304:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(6274);
var $ = __webpack_require__(6887);
var getBuiltIn = __webpack_require__(626);
var USE_NATIVE_URL = __webpack_require__(8468);
var redefine = __webpack_require__(9754);
var redefineAll = __webpack_require__(7524);
var setToStringTag = __webpack_require__(904);
var createIteratorConstructor = __webpack_require__(1046);
var InternalStateModule = __webpack_require__(5402);
var anInstance = __webpack_require__(5743);
var hasOwn = __webpack_require__(7457);
var bind = __webpack_require__(6843);
var classof = __webpack_require__(9697);
var anObject = __webpack_require__(6059);
var isObject = __webpack_require__(941);
var create = __webpack_require__(9290);
var createPropertyDescriptor = __webpack_require__(1887);
var getIterator = __webpack_require__(429);
var getIteratorMethod = __webpack_require__(2902);
var wellKnownSymbol = __webpack_require__(9813);

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ 3601:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(7971);
var $ = __webpack_require__(6887);
var DESCRIPTORS = __webpack_require__(5746);
var USE_NATIVE_URL = __webpack_require__(8468);
var global = __webpack_require__(1899);
var defineProperties = __webpack_require__(9938);
var redefine = __webpack_require__(9754);
var anInstance = __webpack_require__(5743);
var has = __webpack_require__(7457);
var assign = __webpack_require__(4420);
var arrayFrom = __webpack_require__(1354);
var codeAt = __webpack_require__(4620).codeAt;
var toASCII = __webpack_require__(3291);
var setToStringTag = __webpack_require__(904);
var URLSearchParamsModule = __webpack_require__(5304);
var InternalStateModule = __webpack_require__(5402);

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ 8947:
/***/ (function() {

// empty


/***/ }),

/***/ 3363:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(4034);

module.exports = parent;


/***/ }),

/***/ 2908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2710);

module.exports = parent;


/***/ }),

/***/ 9216:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(9324);

module.exports = parent;


/***/ }),

/***/ 7448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7634);
var entries = __webpack_require__(2908);
var classof = __webpack_require__(9697);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.entries;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.entries)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? entries : own;
};


/***/ }),

/***/ 1955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2480);

module.exports = parent;


/***/ }),

/***/ 1577:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2236);

module.exports = parent;


/***/ }),

/***/ 6279:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7634);
var forEach = __webpack_require__(9216);
var classof = __webpack_require__(9697);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),

/***/ 9373:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(4570);

module.exports = parent;


/***/ }),

/***/ 1798:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8287);

module.exports = parent;


/***/ }),

/***/ 2527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8025);

module.exports = parent;


/***/ }),

/***/ 2073:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(9601);

module.exports = parent;


/***/ }),

/***/ 6361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2774);

module.exports = parent;


/***/ }),

/***/ 8933:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(4426);

module.exports = parent;


/***/ }),

/***/ 3383:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(5999);

module.exports = parent;


/***/ }),

/***/ 4471:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(5254);

module.exports = parent;


/***/ }),

/***/ 1910:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8171);

module.exports = parent;


/***/ }),

/***/ 4477:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(3288);

module.exports = parent;


/***/ }),

/***/ 3059:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(8494);

module.exports = parent;


/***/ }),

/***/ 6670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(3065);

module.exports = parent;


/***/ }),

/***/ 7460:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(2956);

module.exports = parent;


/***/ }),

/***/ 2547:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(7473);

module.exports = parent;


/***/ }),

/***/ 6509:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(4227);

module.exports = parent;


/***/ }),

/***/ 3926:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(7610);

module.exports = parent;


/***/ }),

/***/ 7641:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parent = __webpack_require__(1459);

module.exports = parent;


/***/ }),

/***/ 7610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(5304);
var path = __webpack_require__(4058);

module.exports = path.URLSearchParams;


/***/ }),

/***/ 1459:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(3601);
__webpack_require__(8947);
__webpack_require__(5304);
var path = __webpack_require__(4058);

module.exports = path.URL;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(4003);
/******/ })()
;
});
//# sourceMappingURL=bundle.legacy.js.map