define('aurelia-path',['exports'], function (exports) {
  

  exports.__esModule = true;
  exports.relativeToFile = relativeToFile;
  exports.join = join;
  exports.buildQueryString = buildQueryString;
  function trimDots(ary) {
    var i, part;
    for (i = 0; i < ary.length; ++i) {
      part = ary[i];
      if (part === '.') {
        ary.splice(i, 1);
        i -= 1;
      } else if (part === '..') {
        if (i === 0 || i == 1 && ary[2] === '..' || ary[i - 1] === '..') {
          continue;
        } else if (i > 0) {
          ary.splice(i - 1, 2);
          i -= 2;
        }
      }
    }
  }

  function relativeToFile(name, file) {
    var lastIndex,
        normalizedBaseParts,
        fileParts = file && file.split('/'),
        nameParts = name.trim().split('/');

    if (nameParts[0].charAt(0) === '.' && fileParts) {
      normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
      nameParts = normalizedBaseParts.concat(nameParts);
    }

    trimDots(nameParts);

    return nameParts.join('/');
  }

  function join(path1, path2) {
    var url1, url2, url3, i, ii, urlPrefix, trailingSlash;

    if (!path1) {
      return path2;
    }

    if (!path2) {
      return path1;
    }

    urlPrefix = path1.indexOf('//') === 0 ? '//' : path1.indexOf('/') === 0 ? '/' : '';
    trailingSlash = path2.slice(-1) == '/' ? '/' : '';

    url1 = path1.split('/');
    url2 = path2.split('/');
    url3 = [];

    for (i = 0, ii = url1.length; i < ii; ++i) {
      if (url1[i] == '..') {
        url3.pop();
      } else if (url1[i] == '.' || url1[i] == '') {
        continue;
      } else {
        url3.push(url1[i]);
      }
    }

    for (i = 0, ii = url2.length; i < ii; ++i) {
      if (url2[i] == '..') {
        url3.pop();
      } else if (url2[i] == '.' || url2[i] == '') {
        continue;
      } else {
        url3.push(url2[i]);
      }
    }

    return urlPrefix + url3.join('/').replace(/\:\//g, '://') + trailingSlash;
  }

  var r20 = /%20/g,
      rbracket = /\[\]$/,
      class2type = {};

  'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(function (name, i) {
    class2type['[object ' + name + ']'] = name.toLowerCase();
  });

  function type(obj) {
    if (obj == null) {
      return obj + '';
    }

    return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
  }

  function buildQueryString(a, traditional) {
    var s = [],
        add = function add(key, value) {
      value = typeof value === 'function' ? value() : value == null ? '' : value;
      s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    };

    for (var prefix in a) {
      _buildQueryString(prefix, a[prefix], traditional, add);
    }

    return s.join('&').replace(r20, '+');
  }

  function _buildQueryString(prefix, obj, traditional, add) {
    if (Array.isArray(obj)) {
      obj.forEach(function (v, i) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          _buildQueryString(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add);
        }
      });
    } else if (!traditional && type(obj) === 'object') {
      for (var _name in obj) {
        _buildQueryString(prefix + '[' + _name + ']', obj[_name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
});
/**
 * core-js 1.0.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2015 Denis Pushkarev
 */
!function(__e, __g, undefined){

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(30);
	__webpack_require__(38);
	__webpack_require__(40);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(122);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(162);
	__webpack_require__(97);
	__webpack_require__(164);
	__webpack_require__(163);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $                = __webpack_require__(3)
	  , SUPPORT_DESC     = __webpack_require__(4)
	  , createDesc       = __webpack_require__(5)
	  , html             = __webpack_require__(6)
	  , cel              = __webpack_require__(8)
	  , has              = __webpack_require__(9)
	  , cof              = __webpack_require__(10)
	  , $def             = __webpack_require__(11)
	  , invoke           = __webpack_require__(16)
	  , arrayMethod      = __webpack_require__(17)
	  , IE_PROTO         = __webpack_require__(15)('__proto__')
	  , isObject         = __webpack_require__(2)
	  , anObject         = __webpack_require__(25)
	  , aFunction        = __webpack_require__(22)
	  , toObject         = __webpack_require__(18)
	  , toInteger        = __webpack_require__(24)
	  , toIndex          = __webpack_require__(26)
	  , toLength         = __webpack_require__(23)
	  , ES5Object        = __webpack_require__(19)
	  , ObjectProto      = Object.prototype
	  , A                = []
	  , _slice           = A.slice
	  , _join            = A.join
	  , defineProperty   = $.setDesc
	  , getOwnDescriptor = $.getDesc
	  , defineProperties = $.setDescs
	  , IE8_DOM_DEFINE   = false
	  , $indexOf         = __webpack_require__(27)(false)
	  , $forEach         = arrayMethod(0)
	  , $map             = arrayMethod(1)
	  , $filter          = arrayMethod(2)
	  , $some            = arrayMethod(3)
	  , $every           = arrayMethod(4)
	  , factories        = {}
	  , $trim            = __webpack_require__(28)(/^\s*([\s\S]*\S)?\s*$/, '$1');

	if(!SUPPORT_DESC){
	  try {
	    IE8_DOM_DEFINE = defineProperty(cel('div'), 'x',
	      {get: function(){ return 8; }}
	    ).x == 8;
	  } catch(e){ /* empty */ }
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$def($def.S + $def.F * !SUPPORT_DESC, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});

	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;

	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	function createGetKeys(names, length){
	  return function(object){
	    var O      = toObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~$indexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	}
	function Empty(){}
	$def($def.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O, true);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false),
	  // 19.1.2.17 / 15.2.3.8 Object.seal(O)
	  seal: function seal(it){
	    return it; // <- cap
	  },
	  // 19.1.2.5 / 15.2.3.9 Object.freeze(O)
	  freeze: function freeze(it){
	    return it; // <- cap
	  },
	  // 19.1.2.15 / 15.2.3.10 Object.preventExtensions(O)
	  preventExtensions: function preventExtensions(it){
	    return it; // <- cap
	  },
	  // 19.1.2.13 / 15.2.3.11 Object.isSealed(O)
	  isSealed: function isSealed(it){
	    return !isObject(it); // <- cap
	  },
	  // 19.1.2.12 / 15.2.3.12 Object.isFrozen(O)
	  isFrozen: function isFrozen(it){
	    return !isObject(it); // <- cap
	  },
	  // 19.1.2.11 / 15.2.3.13 Object.isExtensible(O)
	  isExtensible: function isExtensible(it){
	    return isObject(it); // <- cap
	  }
	});

	function construct(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	}

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$def($def.P, 'Function', {
	  bind: function(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = _slice.call(arguments, 1);
	    function bound(/* args... */){
	      var args = partArgs.concat(_slice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    }
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});

	// fallback for not array-like ES3 strings and DOM objects
	var buggySlice = true;
	try {
	  if(html)_slice.call(html);
	  buggySlice = false;
	} catch(e){ /* empty */ }

	$def($def.P + $def.F * buggySlice, 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return _slice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$def($def.P + $def.F * (ES5Object != Object), 'Array', {
	  join: function join(){
	    return _join.apply(ES5Object(this), arguments);
	  }
	});

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$def($def.S, 'Array', {isArray: function(arg){ return cof(arg) == 'Array'; }});

	function createArrayReduce(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	}
	$def($def.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || function forEach(callbackfn/*, that = undefined */){
	    return $forEach(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn/*, that = undefined */){
	    return $map(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn/*, that = undefined */){
	    return $filter(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn/*, that = undefined */){
	    return $some(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn/*, that = undefined */){
	    return $every(this, callbackfn, arguments[1]);
	  },
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(el /*, fromIndex = 0 */){
	    return $indexOf(this, el, arguments[1]);
	  },
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(el, fromIndex /* = @[*-1] */){
	    var O      = toObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});

	// 21.1.3.25 / 15.5.4.20 String.prototype.trim()
	$def($def.P, 'String', {trim: function trim(){ return $trim(this); }});

	// 20.3.3.1 / 15.9.4.4 Date.now()
	$def($def.S, 'Date', {now: function now(){ return +new Date; }});

	function lz(num){
	  return num > 9 ? num : '0' + num;
	}

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS and old webkit had a broken Date implementation.
	var date       = new Date(-5e13 - 1)
	  , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
	      && __webpack_require__(29)(function(){ new Date(NaN).toISOString(); }));
	$def($def.P + $def.F * brokenDate, 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !!function(){
	  try {
	    return Object.defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7).document && document.documentElement;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var global = typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	module.exports = global;
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2)
	  , document = __webpack_require__(7).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var global     = __webpack_require__(7)
	  , core       = __webpack_require__(12)
	  , hide       = __webpack_require__(13)
	  , $redef     = __webpack_require__(14)
	  , PROTOTYPE  = 'prototype';
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	global.core = core;
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    if(type & $def.B && own)exp = ctx(out, global);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)$redef(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(3)
	  , createDesc = __webpack_require__(5);
	module.exports = __webpack_require__(4) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global     = __webpack_require__(7)
	  , has        = __webpack_require__(9)
	  , hide       = __webpack_require__(13)
	  , tpl        = String({}.hasOwnProperty)
	  , SRC        = __webpack_require__(15)('src')
	  , _toString  = Function.toString;

	function $redef(O, key, val, safe){
	  if(typeof val == 'function'){
	    var base = O[key];
	    hide(val, SRC, base ? String(base) : tpl.replace(/hasOwnProperty/, String(key)));
	    if(!('name' in val))val.name = key;
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	}

	// add fake Function#toString for correct work wrapped methods / constructors
	// with methods similar to LoDash isNative
	$redef(Function.prototype, 'toString', function toString(){
	  return has(this, SRC) ? this[SRC] : _toString.call(this);
	});

	__webpack_require__(12).inspectSource = function(it){
	  return _toString.call(it);
	};

	module.exports = $redef;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// Fast apply
	// http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
	                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var toObject  = __webpack_require__(18)
	  , ES5Object = __webpack_require__(19)
	  , ctx       = __webpack_require__(21)
	  , toLength  = __webpack_require__(23);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this, true)
	      , self   = ES5Object(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ES5Object = __webpack_require__(19)
	  , defined   = __webpack_require__(20);
	module.exports = function(it, realString){
	  return (realString ? Object : ES5Object)(defined(it));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for not array-like ES3 strings
	var cof     = __webpack_require__(10)
	  , $Object = Object;
	module.exports = 0 in $Object('z') ? $Object : function(it){
	  return cof(it) == 'String' ? it.split('') : $Object(it);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// Optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(~length && that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(24)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(2);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(24)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toObject = __webpack_require__(18)
	  , toLength = __webpack_require__(23)
	  , toIndex  = __webpack_require__(26);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    exec();
	    return false;
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(3)
	  , global         = __webpack_require__(7)
	  , has            = __webpack_require__(9)
	  , SUPPORT_DESC   = __webpack_require__(4)
	  , $def           = __webpack_require__(11)
	  , $redef         = __webpack_require__(14)
	  , shared         = __webpack_require__(31)
	  , setTag         = __webpack_require__(32)
	  , uid            = __webpack_require__(15)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(34)
	  , $names         = __webpack_require__(35)
	  , enumKeys       = __webpack_require__(36)
	  , anObject       = __webpack_require__(25)
	  , toObject       = __webpack_require__(18)
	  , createDesc     = __webpack_require__(5)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , $create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	var setSymbolDesc = SUPPORT_DESC ? function(){ // fallback for old Android
	  try {
	    return $create(setDesc({}, HIDDEN, {
	      get: function(){
	        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
	      }
	    }))[HIDDEN] || setDesc;
	  } catch(e){
	    return function(it, key, D){
	      var protoDesc = getDesc(ObjectProto, key);
	      if(protoDesc)delete ObjectProto[key];
	      setDesc(it, key, D);
	      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	    };
	  }
	}() : setDesc;

	function wrap(tag){
	  var sym = AllSymbols[tag] = $create($Symbol.prototype);
	  sym._k = tag;
	  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	}

	function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = $create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	}
	function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)defineProperty(it, key = keys[i++], P[key]);
	  return it;
	}
	function create(it, P){
	  return P === undefined ? $create(it) : defineProperties($create(it), P);
	}
	function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	}
	function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	}
	function getOwnPropertyNames(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	}
	function getOwnPropertySymbols(it){
	  var names  = getNames(toObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	}

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments[0]));
	  };
	  $redef($Symbol.prototype, 'toString', function(){
	    return this._k;
	  });

	  $.create     = create;
	  $.isEnum     = propertyIsEnumerable;
	  $.getDesc    = getOwnPropertyDescriptor;
	  $.setDesc    = defineProperty;
	  $.setDescs   = defineProperties;
	  $.getNames   = $names.get = getOwnPropertyNames;
	  $.getSymbols = getOwnPropertySymbols;

	  if(SUPPORT_DESC && !__webpack_require__(37)){
	    $redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	    'species,split,toPrimitive,toStringTag,unscopables'
	  ).split(','), function(it){
	    var sym = wks(it);
	    symbolStatics[it] = useNative ? sym : wrap(sym);
	  }
	);

	setter = true;

	$def($def.G + $def.W, {Symbol: $Symbol});

	$def($def.S, 'Symbol', symbolStatics);

	$def($def.S + $def.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: getOwnPropertySymbols
	});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setTag(global.JSON, 'JSON', true);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(7)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has  = __webpack_require__(9)
	  , hide = __webpack_require__(13)
	  , TAG  = __webpack_require__(33)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(31)('wks')
	  , Symbol = __webpack_require__(7).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(15))('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(3)
	  , toObject = __webpack_require__(18);
	module.exports = function(object, el){
	  var O      = toObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toString = {}.toString
	  , toObject = __webpack_require__(18)
	  , getNames = __webpack_require__(3).getNames;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toObject(it));
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , isEnum     = $.isEnum
	    , getSymbols = $.getSymbols;
	  if(getSymbols)for(var symbols = getSymbols(it), i = 0, key; symbols.length > i; ){
	    if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(11);
	$def($def.S, 'Object', {assign: __webpack_require__(39)});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var toObject  = __webpack_require__(18)
	  , ES5Object = __webpack_require__(19)
	  , enumKeys  = __webpack_require__(36);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = toObject(target, true)
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $def = __webpack_require__(11);
	$def($def.S, 'Object', {
	  is: __webpack_require__(41)
	});

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(11);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(43).set});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(3).getDesc
	  , isObject = __webpack_require__(2)
	  , anObject = __webpack_require__(25);
	function check(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	}
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(21)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(45)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(14)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(10)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(3)
	  , core     = __webpack_require__(12)
	  , $def     = __webpack_require__(11)
	  , toObject = __webpack_require__(18)
	  , isObject = __webpack_require__(2);
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = (core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(toObject(it, true));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(35).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	var $             = __webpack_require__(3)
	  , has           = __webpack_require__(9)
	  , createDesc    = __webpack_require__(5)
	  , setDesc       = $.setDesc
	  , FunctionProto = Function.prototype
	  , NAME          = 'name';
	// 19.2.4.2 name
	NAME in FunctionProto || __webpack_require__(4) && setDesc(FunctionProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = String(this).match(/^\s*function ([^ (]*)/)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  },
	  set: function(value){
	    has(this, NAME) || setDesc(this, NAME, createDesc(0, value));
	  }
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var $             = __webpack_require__(3)
	  , isObject      = __webpack_require__(2)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	var $          = __webpack_require__(3)
	  , global     = __webpack_require__(7)
	  , has        = __webpack_require__(9)
	  , cof        = __webpack_require__(10)
	  , isObject   = __webpack_require__(2)
	  , NUMBER     = 'Number'
	  , $Number    = global[NUMBER]
	  , Base       = $Number
	  , proto      = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , fakeNumber = cof($.create(proto)) == NUMBER
	    ? function(it){ try { proto.valueOf.call(it); return false; } catch(e){ return true; } }
	    : function(it){ return cof(it) != NUMBER; };
	function toPrimitive(it){
	  var fn, val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to number");
	}
	function toNumber(it){
	  if(isObject(it))it = toPrimitive(it);
	  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
	    var binary = false;
	    switch(it.charCodeAt(1)){
	      case 66 : case 98  : binary = true;
	      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
	    }
	  } return +it;
	}
	if(!($Number('0o1') && $Number('0b1'))){
	  $Number = function Number(it){
	    return this instanceof $Number && fakeNumber(this) ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(4) ? $.getNames(Base) : (
	      // ES3:
	      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	      // ES6 (in case, if modules with ES6 Number statics required before):
	      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	    ).split(','), function(key){
	      if(has(Base, key) && !has($Number, key)){
	        $.setDesc($Number, key, $.getDesc(Base, key));
	      }
	    }
	  );
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(14)(global, NUMBER, $Number);
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $def      = __webpack_require__(11)
	  , _isFinite = __webpack_require__(7).isFinite;

	$def($def.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {isInteger: __webpack_require__(53)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(2)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $def      = __webpack_require__(11)
	  , isInteger = __webpack_require__(53)
	  , abs       = Math.abs;

	$def($def.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $def = __webpack_require__(11);

	$def($def.S, 'Number', {parseInt: parseInt});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $def  = __webpack_require__(11)
	  , E     = Math.E
	  , sqrt  = Math.sqrt;

	$def($def.S, 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : isFinite(x)
	      ? Math.log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	  }
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $def = __webpack_require__(11);

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	$def($def.S, 'Math', {asinh: asinh});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $def = __webpack_require__(11)
	  , sign = __webpack_require__(64);

	$def($def.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 64 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $def = __webpack_require__(11)
	  , exp  = Math.exp;

	$def($def.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {expm1: __webpack_require__(68)});

/***/ },
/* 68 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $def  = __webpack_require__(11)
	  , sign  = __webpack_require__(64)
	  , pow   = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	function roundTiesToEven(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	}


	$def($def.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $def = __webpack_require__(11)
	  , abs  = Math.abs;

	$def($def.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , len  = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < len){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  log1p: function log1p(x){
	    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	  }
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {sign: __webpack_require__(64)});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $def  = __webpack_require__(11)
	  , expm1 = __webpack_require__(68)
	  , exp   = Math.exp;

	$def($def.S, 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $def  = __webpack_require__(11)
	  , expm1 = __webpack_require__(68)
	  , exp   = Math.exp;

	$def($def.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $def = __webpack_require__(11);

	$def($def.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $def    = __webpack_require__(11)
	  , toIndex = __webpack_require__(26)
	  , fromCharCode = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res = []
	      , len = arguments.length
	      , i   = 0
	      , code;
	    while(len > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var $def     = __webpack_require__(11)
	  , toObject = __webpack_require__(18)
	  , toLength = __webpack_require__(23);

	$def($def.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl = toObject(callSite.raw)
	      , len = toLength(tpl.length)
	      , sln = arguments.length
	      , res = []
	      , i   = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < sln)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $at  = __webpack_require__(82)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(83)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(24)
	  , defined   = __webpack_require__(20);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	
	var LIBRARY         = __webpack_require__(37)
	  , $def            = __webpack_require__(11)
	  , $redef          = __webpack_require__(14)
	  , hide            = __webpack_require__(13)
	  , has             = __webpack_require__(9)
	  , SYMBOL_ITERATOR = __webpack_require__(33)('iterator')
	  , Iterators       = __webpack_require__(84)
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	function returnThis(){ return this; }
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(85)(Constructor, NAME, next);
	  function createMethod(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  }
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(3).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(32)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * __webpack_require__(86), NAME, methods);
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	
	var $ = __webpack_require__(3)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(5)(1,next)});
	  __webpack_require__(32)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	// Safari has buggy iterators w/o `next`
	module.exports = 'keys' in [] && !('next' in [].keys());

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def = __webpack_require__(11)
	  , $at  = __webpack_require__(82)(false);
	$def($def.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def     = __webpack_require__(11)
	  , toLength = __webpack_require__(23)
	  , context  = __webpack_require__(89);

	// should throw error on regex
	$def($def.P + $def.F * !__webpack_require__(29)(function(){ 'q'.endsWith(/./); }), 'String', {
	  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, 'endsWith')
	      , endPosition = arguments[1]
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var defined = __webpack_require__(20)
	  , cof     = __webpack_require__(10);

	module.exports = function(that, searchString, NAME){
	  if(cof(searchString) == 'RegExp')throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def    = __webpack_require__(11)
	  , context = __webpack_require__(89);

	$def($def.P, 'String', {
	  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, 'includes').indexOf(searchString, arguments[1]);
	  }
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(11);

	$def($def.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(92)
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	
	var toInteger = __webpack_require__(24)
	  , defined   = __webpack_require__(20);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def     = __webpack_require__(11)
	  , toLength = __webpack_require__(23)
	  , context  = __webpack_require__(89);

	// should throw error on regex
	$def($def.P + $def.F * !__webpack_require__(29)(function(){ 'q'.startsWith(/./); }), 'String', {
	  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, 'startsWith')
	      , index  = toLength(Math.min(arguments[1], that.length))
	      , search = String(searchString);
	    return that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(21)
	  , $def        = __webpack_require__(11)
	  , toObject    = __webpack_require__(18)
	  , call        = __webpack_require__(96)
	  , isArrayIter = __webpack_require__(95)
	  , toLength    = __webpack_require__(23)
	  , getIterFn   = __webpack_require__(97);
	$def($def.S + $def.F * !__webpack_require__(98)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike, true)
	      , C       = typeof this == 'function' ? this : Array
	      , mapfn   = arguments[1]
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      for(result = new C(length = toLength(O.length)); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var Iterators = __webpack_require__(84)
	  , ITERATOR  = __webpack_require__(33)('iterator');
	module.exports = function(it){
	  return ('Array' in Iterators ? Iterators.Array : Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(25);
	function close(iterator){
	  var ret = iterator['return'];
	  if(ret !== undefined)anObject(ret.call(iterator));
	}
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  } catch(e){
	    close(iterator);
	    throw e;
	  }
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , classof   = __webpack_require__(45)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(84);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  var Symbol = global.Symbol;
	  if(it != undefined){
	    return it[Symbol && Symbol.iterator || '@@iterator']
	      || it[ITERATOR]
	      || Iterators[classof(it)];
	  }
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec){
	  if(!SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(11);
	$def($def.S, 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , length = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(length);
	    while(length > index)result[index] = arguments[index++];
	    result.length = length;
	    return result;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var setUnscope = __webpack_require__(101)
	  , step       = __webpack_require__(102)
	  , Iterators  = __webpack_require__(84)
	  , toObject   = __webpack_require__(18);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(83)(Array, 'Array', function(iterated, kind){
	  this._t = toObject(iterated); // target
	  this._i = 0;                  // next index
	  this._k = kind;               // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables');
	if(!(UNSCOPABLES in []))__webpack_require__(13)(Array.prototype, UNSCOPABLES, {});
	module.exports = function(key){
	  [][UNSCOPABLES][key] = true;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(104)(Array);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(3)
	  , SPECIES = __webpack_require__(33)('species');
	module.exports = function(C){
	  if(__webpack_require__(4) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def     = __webpack_require__(11)
	  , toObject = __webpack_require__(18)
	  , toIndex  = __webpack_require__(26)
	  , toLength = __webpack_require__(23);
	$def($def.P, 'Array', {
	  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	  copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
	    var O     = toObject(this, true)
	      , len   = toLength(O.length)
	      , to    = toIndex(target, len)
	      , from  = toIndex(start, len)
	      , end   = arguments[2]
	      , fin   = end === undefined ? len : toIndex(end, len)
	      , count = Math.min(fin - from, len - to)
	      , inc   = 1;
	    if(from < to && to < from + count){
	      inc  = -1;
	      from = from + count - 1;
	      to   = to   + count - 1;
	    }
	    while(count-- > 0){
	      if(from in O)O[to] = O[from];
	      else delete O[to];
	      to   += inc;
	      from += inc;
	    } return O;
	  }
	});
	__webpack_require__(101)('copyWithin');

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def     = __webpack_require__(11)
	  , toObject = __webpack_require__(18)
	  , toIndex  = __webpack_require__(26)
	  , toLength = __webpack_require__(23);
	$def($def.P, 'Array', {
	  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	  fill: function fill(value /*, start = 0, end = @length */){
	    var O      = toObject(this, true)
	      , length = toLength(O.length)
	      , index  = toIndex(arguments[1], length)
	      , end    = arguments[2]
	      , endPos = end === undefined ? length : toIndex(end, length);
	    while(endPos > index)O[index++] = value;
	    return O;
	  }
	});
	__webpack_require__(101)('fill');

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var KEY    = 'find'
	  , $def   = __webpack_require__(11)
	  , forced = true
	  , $find  = __webpack_require__(17)(5);
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$def($def.P + $def.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments[1]);
	  }
	});
	__webpack_require__(101)(KEY);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var KEY    = 'findIndex'
	  , $def   = __webpack_require__(11)
	  , forced = true
	  , $find  = __webpack_require__(17)(6);
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$def($def.P + $def.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments[1]);
	  }
	});
	__webpack_require__(101)(KEY);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(3)
	  , global  = __webpack_require__(7)
	  , cof     = __webpack_require__(10)
	  , $flags  = __webpack_require__(110)
	  , $RegExp = global.RegExp
	  , Base    = $RegExp
	  , proto   = $RegExp.prototype
	  , re      = /a/g
	  // "new" creates a new object
	  , CORRECT_NEW = new $RegExp(re) !== re
	  // RegExp allows a regex with flags as the pattern
	  , ALLOWS_RE_WITH_FLAGS = function(){
	    try {
	      return $RegExp(re, 'i') == '/a/i';
	    } catch(e){ /* empty */ }
	  }();

	if(__webpack_require__(4)){
	  if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
	    $RegExp = function RegExp(pattern, flags){
	      var patternIsRegExp  = cof(pattern) == 'RegExp'
	        , flagsIsUndefined = flags === undefined;
	      if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
	      return CORRECT_NEW
	        ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
	        : new Base(patternIsRegExp ? pattern.source : pattern
	          , patternIsRegExp && flagsIsUndefined ? $flags.call(pattern) : flags);
	    };
	    $.each.call($.getNames(Base), function(key){
	      key in $RegExp || $.setDesc($RegExp, key, {
	        configurable: true,
	        get: function(){ return Base[key]; },
	        set: function(it){ Base[key] = it; }
	      });
	    });
	    proto.constructor = $RegExp;
	    $RegExp.prototype = proto;
	    __webpack_require__(14)(global, 'RegExp', $RegExp);
	  }
	}

	__webpack_require__(104)($RegExp);

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(25);
	module.exports = function flags(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)result += 'g';
	  if(that.ignoreCase)result += 'i';
	  if(that.multiline)result += 'm';
	  if(that.unicode)result += 'u';
	  if(that.sticky)result += 'y';
	  return result;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(3);
	if(__webpack_require__(4) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(110)
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(113)('match', 1, function(MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    
	    var str = String(this)
	      , fn  = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, str) : new RegExp(regexp)[MATCH](str);
	  };
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = __webpack_require__(33)(KEY)
	    , original = ''[KEY];
	  if(function(){
	    try {
	      var O = {};
	      O[SYMBOL] = function(){ return 7; };
	      return ''[KEY](O) != 7;
	    } catch(e){
	      return true;
	    }
	  }()){
	    __webpack_require__(14)(String.prototype, KEY, exec(SYMBOL, original));
	    __webpack_require__(13)(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(113)('replace', 2, function(REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    
	    var str = String(this)
	      , fn  = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, str, replaceValue)
	      : $replace.call(str, searchValue, replaceValue);
	  };
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(113)('search', 1, function(SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    
	    var str = String(this)
	      , fn  = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, str) : new RegExp(regexp)[SEARCH](str);
	  };
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(113)('split', 2, function(SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    
	    var str = String(this)
	      , fn  = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, str, limit) : $split.call(str, separator, limit);
	  };
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	
	var $          = __webpack_require__(3)
	  , LIBRARY    = __webpack_require__(37)
	  , global     = __webpack_require__(7)
	  , ctx        = __webpack_require__(21)
	  , classof    = __webpack_require__(45)
	  , $def       = __webpack_require__(11)
	  , isObject   = __webpack_require__(2)
	  , anObject   = __webpack_require__(25)
	  , aFunction  = __webpack_require__(22)
	  , strictNew  = __webpack_require__(118)
	  , forOf      = __webpack_require__(119)
	  , setProto   = __webpack_require__(43).set
	  , same       = __webpack_require__(41)
	  , species    = __webpack_require__(104)
	  , SPECIES    = __webpack_require__(33)('species')
	  , RECORD     = __webpack_require__(15)('record')
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , asap       = process && process.nextTick || __webpack_require__(120).set
	  , P          = global[PROMISE]
	  , Wrapper;

	function testResolve(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	}

	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(4)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();

	// helpers
	function isPromise(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	}
	function sameConstructor(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	}
	function getConstructor(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	}
	function isThenable(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	}
	function notify(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  // strange IE + webpack dev server bug - use .call(global)
	  asap.call(global, function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    function run(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    }
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        if(isUnhandled(record.p)){
	          if(isNode){
	            process.emit('unhandledRejection', value, record.p);
	          } else if(global.console && console.error){
	            console.error('Unhandled promise rejection', value);
	          }
	        }
	        record.a = undefined;
	      });
	    }, 1);
	  });
	}
	function isUnhandled(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	}
	function $reject(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	}
	function $resolve(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      // strange IE + webpack dev server bug - use .call(global)
	      asap.call(global, function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	}

	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(121)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var S = anObject(anObject(this).constructor)[SPECIES];
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
	        react.res = aFunction(res);
	        react.rej = aFunction(rej);
	      });
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(32)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(12)[PROMISE]);

	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(98)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(21)
	  , call        = __webpack_require__(96)
	  , isArrayIter = __webpack_require__(95)
	  , anObject    = __webpack_require__(25)
	  , toLength    = __webpack_require__(23)
	  , getIterFn   = __webpack_require__(97);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	
	var ctx                = __webpack_require__(21)
	  , invoke             = __webpack_require__(16)
	  , html               = __webpack_require__(6)
	  , cel                = __webpack_require__(8)
	  , global             = __webpack_require__(7)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	function run(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	}
	function listner(event){
	  run.call(event.data);
	}
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(10)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Modern browsers, skip implementation for WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id, '*');
	    };
	    global.addEventListener('message', listner, false);
	  // WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(14);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	
	var strong = __webpack_require__(123);

	// 23.1 Map Objects
	__webpack_require__(124)('Map', function(get){
	  return function Map(){ return get(this, arguments[0]); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	
	var $            = __webpack_require__(3)
	  , hide         = __webpack_require__(13)
	  , ctx          = __webpack_require__(21)
	  , species      = __webpack_require__(104)
	  , strictNew    = __webpack_require__(118)
	  , defined      = __webpack_require__(20)
	  , forOf        = __webpack_require__(119)
	  , step         = __webpack_require__(102)
	  , ID           = __webpack_require__(15)('id')
	  , $has         = __webpack_require__(9)
	  , isObject     = __webpack_require__(2)
	  , isExtensible = Object.isExtensible || isObject
	  , SUPPORT_DESC = __webpack_require__(4)
	  , SIZE         = SUPPORT_DESC ? '_s' : 'size'
	  , id           = 0;

	function fastKey(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	}

	function getEntry(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	}

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(121)(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments[1], 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(SUPPORT_DESC)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    __webpack_require__(83)(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    species(C);
	    species(__webpack_require__(12)[NAME]); // for wrapper
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	
	var global     = __webpack_require__(7)
	  , $def       = __webpack_require__(11)
	  , BUGGY      = __webpack_require__(86)
	  , forOf      = __webpack_require__(119)
	  , strictNew  = __webpack_require__(118);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  function fixMethod(KEY){
	    var fn = proto[KEY];
	    __webpack_require__(14)(proto, KEY,
	      KEY == 'delete' ? function(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'has' ? function has(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'get' ? function get(a){ return fn.call(this, a === 0 ? 0 : a); }
	      : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	      : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  }
	  if(typeof C != 'function' || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    __webpack_require__(121)(C.prototype, methods);
	  } else {
	    var inst  = new C
	      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
	      , buggyZero;
	    // wrap for init collections from iterable
	    if(!__webpack_require__(98)(function(iter){ new C(iter); })){ // eslint-disable-line no-new
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || inst.forEach(function(val, key){
	      buggyZero = 1 / key === -Infinity;
	    });
	    // fix converting -0 key to +0
	    if(buggyZero){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    // + fix .add & .set for chaining
	    if(buggyZero || chain !== inst)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  __webpack_require__(32)(C, NAME);

	  O[NAME] = C;
	  $def($def.G + $def.W + $def.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	
	var strong = __webpack_require__(123);

	// 23.2 Set Objects
	__webpack_require__(124)('Set', function(get){
	  return function Set(){ return get(this, arguments[0]); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	
	var $            = __webpack_require__(3)
	  , weak         = __webpack_require__(127)
	  , isObject     = __webpack_require__(2)
	  , has          = __webpack_require__(9)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(124)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments[0]); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    __webpack_require__(14)(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	
	var hide         = __webpack_require__(13)
	  , anObject     = __webpack_require__(25)
	  , strictNew    = __webpack_require__(118)
	  , forOf        = __webpack_require__(119)
	  , method       = __webpack_require__(17)
	  , WEAK         = __webpack_require__(15)('weak')
	  , isObject     = __webpack_require__(2)
	  , $has         = __webpack_require__(9)
	  , isExtensible = Object.isExtensible || isObject
	  , find         = method(5)
	  , findIndex    = method(6)
	  , id           = 0;

	// fallback for frozen keys
	function frozenStore(that){
	  return that._l || (that._l = new FrozenStore);
	}
	function FrozenStore(){
	  this.a = [];
	}
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = findIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	function findFrozen(store, key){
	  return find(store.a, function(it){
	    return it[0] === key;
	  });
	}

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    __webpack_require__(121)(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	
	var weak = __webpack_require__(127);

	// 23.4 WeakSet Objects
	__webpack_require__(124)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments[0]); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $def   = __webpack_require__(11)
	  , _apply = Function.apply;

	$def($def.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(3)
	  , $def      = __webpack_require__(11)
	  , aFunction = __webpack_require__(22)
	  , isObject  = __webpack_require__(2)
	  , apply     = Function.apply
	  , bind      = Function.bind || __webpack_require__(12).Function.prototype.bind;

	$def($def.S, 'Reflect', {
	  construct: function construct(target, argumentsList /*, newTarget*/){
	    if(arguments.length < 3)return new (bind.apply(target, [null].concat(argumentsList)))();
	    var proto    = aFunction(arguments[2]).prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = apply.call(target, instance, argumentsList);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(3)
	  , $def     = __webpack_require__(11)
	  , anObject = __webpack_require__(25);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$def($def.S + $def.F * __webpack_require__(29)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $def     = __webpack_require__(11)
	  , getDesc  = __webpack_require__(3).getDesc
	  , anObject = __webpack_require__(25);

	$def($def.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.5 Reflect.enumerate(target)
	var $def     = __webpack_require__(11)
	  , anObject = __webpack_require__(25);

	function Enumerate(iterated){
	  this._t = anObject(iterated); // target
	  this._k = undefined;          // keys
	  this._i = 0;                  // next index
	}
	__webpack_require__(85)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  if(keys == undefined){
	    that._k = keys = [];
	    for(key in that._t)keys.push(key);
	  }
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$def($def.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(3)
	  , has      = __webpack_require__(9)
	  , $def     = __webpack_require__(11)
	  , isObject = __webpack_require__(2)
	  , anObject = __webpack_require__(25);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}

	$def($def.S, 'Reflect', {get: get});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(3)
	  , $def     = __webpack_require__(11)
	  , anObject = __webpack_require__(25);

	$def($def.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $def     = __webpack_require__(11)
	  , getProto = __webpack_require__(3).getProto
	  , anObject = __webpack_require__(25);

	$def($def.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $def = __webpack_require__(11);

	$def($def.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $def          = __webpack_require__(11)
	  , anObject      = __webpack_require__(25)
	  , _isExtensible = Object.isExtensible || __webpack_require__(2);

	$def($def.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    return _isExtensible(anObject(target));
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $def = __webpack_require__(11);

	$def($def.S, 'Reflect', {ownKeys: __webpack_require__(140)});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(3)
	  , anObject = __webpack_require__(25);
	module.exports = function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $def               = __webpack_require__(11)
	  , anObject           = __webpack_require__(25)
	  , _preventExtensions = Object.preventExtensions;

	$def($def.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if(_preventExtensions)_preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(3)
	  , has        = __webpack_require__(9)
	  , $def       = __webpack_require__(11)
	  , createDesc = __webpack_require__(5)
	  , anObject   = __webpack_require__(25)
	  , isObject   = __webpack_require__(2);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$def($def.S, 'Reflect', {set: set});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $def     = __webpack_require__(11)
	  , setProto = __webpack_require__(43);

	if(setProto)$def($def.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def      = __webpack_require__(11)
	  , $includes = __webpack_require__(27)(true);
	$def($def.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments[1]);
	  }
	});
	__webpack_require__(101)('includes');

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/mathiasbynens/String.prototype.at
	
	var $def = __webpack_require__(11)
	  , $at  = __webpack_require__(82)(true);
	$def($def.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def = __webpack_require__(11)
	  , $pad = __webpack_require__(147);
	$def($def.P, 'String', {
	  lpad: function lpad(n){
	    return $pad(this, n, arguments[1], true);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// http://wiki.ecmascript.org/doku.php?id=strawman:string_padding
	var toInteger = __webpack_require__(24)
	  , repeat    = __webpack_require__(92)
	  , defined   = __webpack_require__(20);

	module.exports = function(that, minLength, fillChar, left){
	  // 1. Let O be CheckObjectCoercible(this value).
	  // 2. Let S be ToString(O).
	  var S = String(defined(that));
	  // 4. If intMinLength is undefined, return S.
	  if(minLength === undefined)return S;
	  // 4. Let intMinLength be ToInteger(minLength).
	  var intMinLength = toInteger(minLength);
	  // 5. Let fillLen be the number of characters in S minus intMinLength.
	  var fillLen = intMinLength - S.length;
	  // 6. If fillLen < 0, then throw a RangeError exception.
	  // 7. If fillLen is +∞, then throw a RangeError exception.
	  if(fillLen < 0 || fillLen === Infinity){
	    throw new RangeError('Cannot satisfy string length ' + minLength + ' for string: ' + S);
	  }
	  // 8. Let sFillStr be the string represented by fillStr.
	  // 9. If sFillStr is undefined, let sFillStr be a space character.
	  var sFillStr = fillChar === undefined ? ' ' : String(fillChar);
	  // 10. Let sFillVal be a String made of sFillStr, repeated until fillLen is met.
	  var sFillVal = repeat.call(sFillStr, Math.ceil(fillLen / sFillStr.length));
	  // truncate if we overflowed
	  if(sFillVal.length > fillLen)sFillVal = left
	    ? sFillVal.slice(sFillVal.length - fillLen)
	    : sFillVal.slice(0, fillLen);
	  // 11. Return a string made from sFillVal, followed by S.
	  // 11. Return a String made from S, followed by sFillVal.
	  return left ? sFillVal.concat(S) : S.concat(sFillVal);
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def = __webpack_require__(11)
	  , $pad = __webpack_require__(147);
	$def($def.P, 'String', {
	  rpad: function rpad(n){
	    return $pad(this, n, arguments[1], false);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $def = __webpack_require__(11)
	  , $re  = __webpack_require__(28)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	$def($def.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(3)
	  , $def       = __webpack_require__(11)
	  , ownKeys    = __webpack_require__(140)
	  , toObject   = __webpack_require__(18)
	  , createDesc = __webpack_require__(5);

	$def($def.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $def    = __webpack_require__(11)
	  , $values = __webpack_require__(152)(false);

	$def($def.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(3)
	  , toObject = __webpack_require__(18);
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = Array(length)
	      , key;
	    if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
	    else while(length > i)result[i] = O[keys[i++]];
	    return result;
	  };
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $def     = __webpack_require__(11)
	  , $entries = __webpack_require__(152)(true);

	$def($def.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(11);

	$def($def.P, 'Map', {toJSON: __webpack_require__(155)('Map')});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(119)
	  , classof = __webpack_require__(45);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $def  = __webpack_require__(11);

	$def($def.P, 'Set', {toJSON: __webpack_require__(155)('Set')});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var $def  = __webpack_require__(11)
	  , $task = __webpack_require__(120);
	$def($def.G + $def.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(100);
	var global      = __webpack_require__(7)
	  , hide        = __webpack_require__(13)
	  , Iterators   = __webpack_require__(84)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NL && !(ITERATOR in NLProto))hide(NLProto, ITERATOR, ArrayValues);
	if(HTC && !(ITERATOR in HTCProto))hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(7)
	  , $def       = __webpack_require__(11)
	  , invoke     = __webpack_require__(16)
	  , partial    = __webpack_require__(160)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	function wrap(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	}
	$def($def.G + $def.B + $def.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	
	var path      = __webpack_require__(161)
	  , invoke    = __webpack_require__(16)
	  , aFunction = __webpack_require__(22);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that    = this
	      , _length = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !_length)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(_length > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var $            = __webpack_require__(3)
	  , ctx          = __webpack_require__(21)
	  , $def         = __webpack_require__(11)
	  , createDesc   = __webpack_require__(5)
	  , assign       = __webpack_require__(39)
	  , keyOf        = __webpack_require__(34)
	  , aFunction    = __webpack_require__(22)
	  , forOf        = __webpack_require__(119)
	  , isIterable   = __webpack_require__(163)
	  , step         = __webpack_require__(102)
	  , isObject     = __webpack_require__(2)
	  , toObject     = __webpack_require__(18)
	  , SUPPORT_DESC = __webpack_require__(4)
	  , has          = __webpack_require__(9)
	  , getKeys      = $.getKeys
	  , findKey      = createDictMethod(6);

	function Dict(iterable){
	  var dict = $.create(null);
	  if(iterable != undefined){
	    if(isIterable(iterable)){
	      forOf(iterable, true, function(key, value){
	        dict[key] = value;
	      });
	    } else assign(dict, iterable);
	  }
	  return dict;
	}
	Dict.prototype = null;

	function DictIterator(iterated, kind){
	  this._t = toObject(iterated); // target
	  this._a = getKeys(iterated);  // keys
	  this._i = 0;                  // next index
	  this._k = kind;               // kind
	}
	__webpack_require__(85)(DictIterator, 'Dict', function(){
	  var that = this
	    , O    = that._t
	    , keys = that._a
	    , kind = that._k
	    , key;
	  do {
	    if(that._i >= keys.length){
	      that._t = undefined;
	      return step(1);
	    }
	  } while(!has(O, key = keys[that._i++]));
	  if(kind == 'keys'  )return step(0, key);
	  if(kind == 'values')return step(0, O[key]);
	  return step(0, [key, O[key]]);
	});
	function createDictIter(kind){
	  return function(it){
	    return new DictIterator(it, kind);
	  };
	}
	function generic(A, B){
	  // strange IE quirks mode bug -> use typeof instead of isFunction
	  return typeof A == 'function' ? A : B;
	}

	// 0 -> Dict.forEach
	// 1 -> Dict.map
	// 2 -> Dict.filter
	// 3 -> Dict.some
	// 4 -> Dict.every
	// 5 -> Dict.find
	// 6 -> Dict.findKey
	// 7 -> Dict.mapPairs
	function createDictMethod(TYPE){
	  var IS_MAP   = TYPE == 1
	    , IS_EVERY = TYPE == 4;
	  return function(object, callbackfn, that /* = undefined */){
	    var f      = ctx(callbackfn, that, 3)
	      , O      = toObject(object)
	      , result = IS_MAP || TYPE == 7 || TYPE == 2 ? new (generic(this, Dict)) : undefined
	      , key, val, res;
	    for(key in O)if(has(O, key)){
	      val = O[key];
	      res = f(val, key, object);
	      if(TYPE){
	        if(IS_MAP)result[key] = res;            // map
	        else if(res)switch(TYPE){
	          case 2: result[key] = val; break;     // filter
	          case 3: return true;                  // some
	          case 5: return val;                   // find
	          case 6: return key;                   // findKey
	          case 7: result[res[0]] = res[1];      // mapPairs
	        } else if(IS_EVERY)return false;        // every
	      }
	    }
	    return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
	  };
	}

	function reduce(object, mapfn, init){
	  aFunction(mapfn);
	  var O      = toObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , i      = 0
	    , memo, key;
	  if(arguments.length < 3){
	    if(!length)throw TypeError('Reduce of empty object with no initial value');
	    memo = O[keys[i++]];
	  } else memo = Object(init);
	  while(length > i)if(has(O, key = keys[i++])){
	    memo = mapfn(memo, O[key], key, object);
	  }
	  return memo;
	}

	function includes(object, el){
	  return (el == el ? keyOf(object, el) : findKey(object, function(it){
	    return it != it;
	  })) !== undefined;
	}

	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function set(object, key, value){
	  if(SUPPORT_DESC && key in Object)$.setDesc(object, key, createDesc(0, value));
	  else object[key] = value;
	  return object;
	}

	function isDict(it){
	  return isObject(it) && $.getProto(it) === Dict.prototype;
	}

	$def($def.G + $def.F, {Dict: Dict});

	$def($def.S, 'Dict', {
	  keys:     createDictIter('keys'),
	  values:   createDictIter('values'),
	  entries:  createDictIter('entries'),
	  forEach:  createDictMethod(0),
	  map:      createDictMethod(1),
	  filter:   createDictMethod(2),
	  some:     createDictMethod(3),
	  every:    createDictMethod(4),
	  find:     createDictMethod(5),
	  findKey:  findKey,
	  mapPairs: createDictMethod(7),
	  reduce:   reduce,
	  keyOf:    keyOf,
	  includes: includes,
	  has:      has,
	  get:      get,
	  set:      set,
	  isDict:   isDict
	});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(7)
	  , has       = __webpack_require__(9)
	  , classof   = __webpack_require__(45)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(84);
	module.exports = __webpack_require__(12).isIterable = function(it){
	  var O      = Object(it)
	    , Symbol = global.Symbol;
	  return (Symbol && Symbol.iterator || '@@iterator') in O
	    || ITERATOR in O
	    || has(Iterators, classof(O));
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(25)
	  , get      = __webpack_require__(97);
	module.exports = __webpack_require__(12).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var global  = __webpack_require__(7)
	  , core    = __webpack_require__(12)
	  , $def    = __webpack_require__(11)
	  , partial = __webpack_require__(160);
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$def($def.G + $def.F, {
	  delay: function delay(time){
	    return new (core.Promise || global.Promise)(function(resolve){
	      setTimeout(partial.call(resolve, true), time);
	    });
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	
	var path = __webpack_require__(161)
	  , $def = __webpack_require__(11);

	// Placeholder
	__webpack_require__(12)._ = path._ = path._ || {};

	$def($def.P + $def.F, 'Function', {part: __webpack_require__(160)});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(11);

	$def($def.S + $def.F, 'Object', {isObject: __webpack_require__(2)});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var $def = __webpack_require__(11);

	$def($def.S + $def.F, 'Object', {classof: __webpack_require__(45)});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var $def   = __webpack_require__(11)
	  , define = __webpack_require__(170);

	$def($def.S + $def.F, 'Object', {define: define});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(3)
	  , ownKeys  = __webpack_require__(140)
	  , toObject = __webpack_require__(18);

	module.exports = function define(target, mixin){
	  var keys   = ownKeys(toObject(mixin))
	    , length = keys.length
	    , i = 0, key;
	  while(length > i)$.setDesc(target, key = keys[i++], $.getDesc(mixin, key));
	  return target;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var $def   = __webpack_require__(11)
	  , create = __webpack_require__(3).create
	  , define = __webpack_require__(170);

	$def($def.S + $def.F, 'Object', {
	  make: function(proto, mixin){
	    return define(create(proto), mixin);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	
	__webpack_require__(83)(Number, 'Number', function(iterated){
	  this._l = +iterated;
	  this._i = 0;
	}, function(){
	  var i    = this._i++
	    , done = !(i < this._l);
	  return {done: done, value: done ? undefined : i};
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def = __webpack_require__(11)
	  , $re  = __webpack_require__(28)(/[&<>"']/g, {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      "'": '&apos;'
	    });

	$def($def.P + $def.F, 'String', {escapeHTML: function escapeHTML(){ return $re(this); }});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	
	var $def = __webpack_require__(11)
	  , $re  = __webpack_require__(28)(/&(?:amp|lt|gt|quot|apos);/g, {
	    '&amp;':  '&',
	    '&lt;':   '<',
	    '&gt;':   '>',
	    '&quot;': '"',
	    '&apos;': "'"
	  });

	$def($def.P + $def.F, 'String', {unescapeHTML:  function unescapeHTML(){ return $re(this); }});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	var $       = __webpack_require__(3)
	  , global  = __webpack_require__(7)
	  , $def    = __webpack_require__(11)
	  , log     = {}
	  , enabled = true;
	// Methods from https://github.com/DeveloperToolsWG/console-object/blob/master/api.md
	$.each.call(('assert,clear,count,debug,dir,dirxml,error,exception,' +
	    'group,groupCollapsed,groupEnd,info,isIndependentlyComposed,log,' +
	    'markTimeline,profile,profileEnd,table,time,timeEnd,timeline,' +
	    'timelineEnd,timeStamp,trace,warn').split(','), function(key){
	  log[key] = function(){
	    if(enabled && global.console && typeof console[key] == 'function'){
	      return Function.apply.call(console[key], console, arguments);
	    }
	  };
	});
	$def($def.G + $def.F, {log: __webpack_require__(39)(log.log, log, {
	  enable: function(){
	    enabled = true;
	  },
	  disable: function(){
	    enabled = false;
	  }
	})});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(3)
	  , $def    = __webpack_require__(11)
	  , $Array  = __webpack_require__(12).Array || Array
	  , statics = {};
	function setStatics(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = __webpack_require__(21)(Function.call, [][key], length);
	  });
	}
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$def($def.S, 'Array', statics);

/***/ }
/******/ ]);
// CommonJS export
if(typeof module != 'undefined' && module.exports)module.exports = __e;
// RequireJS export
else if(typeof define == 'function' && define.amd)define(function(){return __e});
// Export to global object
else __g.core = __e;
}(1, 1);
define('core-js', ['core-js/core'], function (main) { return main; });

define("core-js/core", function(){});

define('aurelia-metadata/aurelia-metadata',['exports', 'core-js'], function (exports, _coreJs) {
  

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var theGlobal = (function () {
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof global !== 'undefined') {
      return global;
    }

    return new Function('return this')();
  })();

  var emptyMetadata = Object.freeze({});
  var metadataContainerKey = '__metadata__';

  if (typeof theGlobal.System === 'undefined') {
    theGlobal.System = { isFake: true };
  }

  if (typeof theGlobal.System.forEachModule === 'undefined') {
    theGlobal.System.forEachModule = function () {};
  }

  if (typeof theGlobal.Reflect === 'undefined') {
    theGlobal.Reflect = {};
  }

  if (typeof theGlobal.Reflect.getOwnMetadata === 'undefined') {
    Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
      return ((target[metadataContainerKey] || emptyMetadata)[targetKey] || emptyMetadata)[metadataKey];
    };
  }

  if (typeof theGlobal.Reflect.defineMetadata === 'undefined') {
    Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
      var metadataContainer = target[metadataContainerKey] || (target[metadataContainerKey] = {});
      var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
      targetContainer[metadataKey] = metadataValue;
    };
  }

  if (typeof theGlobal.Reflect.metadata === 'undefined') {
    Reflect.metadata = function (metadataKey, metadataValue) {
      return function (target, targetKey) {
        Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
      };
    };
  }

  function ensureDecorators(target) {
    var applicator;

    if (typeof target.decorators === 'function') {
      applicator = target.decorators();
    } else {
      applicator = target.decorators;
    }

    if (typeof applicator._decorate === 'function') {
      delete target.decorators;
      applicator._decorate(target);
    } else {
      throw new Error('The return value of your decorator\'s method was not valid.');
    }
  }

  var Metadata = {
    global: theGlobal,
    resource: 'aurelia:resource',
    paramTypes: 'design:paramtypes',
    properties: 'design:properties',
    get: function get(metadataKey, target, targetKey) {
      if (!target) {
        return undefined;
      }

      var result = Metadata.getOwn(metadataKey, target, targetKey);
      return result === undefined ? Metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
    },
    getOwn: function getOwn(metadataKey, target, targetKey) {
      if (!target) {
        return undefined;
      }

      if (target.hasOwnProperty('decorators')) {
        ensureDecorators(target);
      }

      return Reflect.getOwnMetadata(metadataKey, target, targetKey);
    },
    define: function define(metadataKey, metadataValue, target, targetKey) {
      Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
    },
    getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
      var result = Metadata.getOwn(metadataKey, target, targetKey);

      if (result === undefined) {
        result = new Type();
        Reflect.defineMetadata(metadataKey, result, target, targetKey);
      }

      return result;
    }
  };

  exports.Metadata = Metadata;
  var originStorage = new Map(),
      unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

  var Origin = (function () {
    function Origin(moduleId, moduleMember) {
      _classCallCheck(this, Origin);

      this.moduleId = moduleId;
      this.moduleMember = moduleMember;
    }

    Origin.get = function get(fn) {
      var origin = originStorage.get(fn);

      if (origin === undefined) {
        System.forEachModule(function (key, value) {
          for (var name in value) {
            var exp = value[name];
            if (exp === fn) {
              originStorage.set(fn, origin = new Origin(key, name));
              return true;
            }
          }

          if (value === fn) {
            originStorage.set(fn, origin = new Origin(key, 'default'));
            return true;
          }
        });
      }

      return origin || unknownOrigin;
    };

    Origin.set = function set(fn, origin) {
      originStorage.set(fn, origin);
    };

    return Origin;
  })();

  exports.Origin = Origin;

  var DecoratorApplicator = (function () {
    function DecoratorApplicator() {
      _classCallCheck(this, DecoratorApplicator);

      this._first = null;
      this._second = null;
      this._third = null;
      this._rest = null;
    }

    DecoratorApplicator.prototype.decorator = function decorator(_decorator) {
      if (this._first === null) {
        this._first = _decorator;
        return this;
      }

      if (this._second === null) {
        this._second = _decorator;
        return this;
      }

      if (this._third === null) {
        this._third = _decorator;
        return this;
      }

      if (this._rest === null) {
        this._rest = [];
      }

      this._rest.push(_decorator);

      return this;
    };

    DecoratorApplicator.prototype._decorate = function _decorate(target) {
      var i, ii, rest;

      if (this._first !== null) {
        this._first(target);
      }

      if (this._second !== null) {
        this._second(target);
      }

      if (this._third !== null) {
        this._third(target);
      }

      rest = this._rest;
      if (rest !== null) {
        for (i = 0, ii = rest.length; i < ii; ++i) {
          rest[i](target);
        }
      }
    };

    return DecoratorApplicator;
  })();

  exports.DecoratorApplicator = DecoratorApplicator;
  var Decorators = {
    configure: {
      parameterizedDecorator: function parameterizedDecorator(name, decorator) {
        Decorators[name] = function () {
          var applicator = new DecoratorApplicator();
          return applicator[name].apply(applicator, arguments);
        };

        DecoratorApplicator.prototype[name] = function () {
          var result = decorator.apply(null, arguments);
          return this.decorator(result);
        };
      },
      simpleDecorator: function simpleDecorator(name, decorator) {
        Decorators[name] = function () {
          return new DecoratorApplicator().decorator(decorator);
        };

        DecoratorApplicator.prototype[name] = function () {
          return this.decorator(decorator);
        };
      }
    }
  };
  exports.Decorators = Decorators;
});
define('aurelia-metadata', ['aurelia-metadata/aurelia-metadata'], function (main) { return main; });

define('aurelia-loader/aurelia-loader',['exports', 'core-js', 'aurelia-path', 'aurelia-metadata'], function (exports, _coreJs, _aureliaPath, _aureliaMetadata) {
  

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var TemplateDependency = function TemplateDependency(src, name) {
    _classCallCheck(this, TemplateDependency);

    this.src = src;
    this.name = name;
  };

  exports.TemplateDependency = TemplateDependency;

  var TemplateRegistryEntry = (function () {
    function TemplateRegistryEntry(id) {
      _classCallCheck(this, TemplateRegistryEntry);

      this.id = id;
      this.template = null;
      this.dependencies = null;
      this.resources = null;
      this.factory = null;
    }

    TemplateRegistryEntry.prototype.setTemplate = function setTemplate(template) {
      var id = this.id,
          useResources,
          i,
          ii,
          current,
          src;

      this.template = template;
      useResources = template.content.querySelectorAll('require');
      this.dependencies = new Array(useResources.length);

      if (useResources.length === 0) {
        return;
      }

      for (i = 0, ii = useResources.length; i < ii; ++i) {
        current = useResources[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + this.id + ' has no "from" attribute.');
        }

        this.dependencies[i] = new TemplateDependency(_aureliaPath.relativeToFile(src, id), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    };

    TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
      if (typeof src === 'string') {
        this.dependencies.push(new TemplateDependency(_aureliaPath.relativeToFile(src, this.id), name));
      } else if (typeof src === 'function') {
        var origin = _aureliaMetadata.Origin.get(src);
        this.dependencies.push(new TemplateDependency(origin.moduleId, name));
      }
    };

    TemplateRegistryEntry.prototype.setResources = function setResources(resources) {
      this.resources = resources;
    };

    TemplateRegistryEntry.prototype.setFactory = function setFactory(factory) {
      this.factory = factory;
    };

    _createClass(TemplateRegistryEntry, [{
      key: 'templateIsLoaded',
      get: function get() {
        return this.template !== null;
      }
    }, {
      key: 'isReady',
      get: function get() {
        return this.factory !== null;
      }
    }]);

    return TemplateRegistryEntry;
  })();

  exports.TemplateRegistryEntry = TemplateRegistryEntry;

  var hasTemplateElement = ('content' in document.createElement('template'));

  function importElements(frag, link, callback) {
    if (frag) {
      document.head.appendChild(frag);
    }

    if (window.Polymer && Polymer.whenReady) {
      Polymer.whenReady(callback);
    } else {
      link.addEventListener('load', callback);
    }
  }

  var Loader = (function () {
    function Loader() {
      _classCallCheck(this, Loader);

      this.templateRegistry = {};
      this.needsBundleCheck = true;
    }

    Loader.prototype.loadModule = function loadModule(id) {
      throw new Error('Loaders must implement loadModule(id).');
    };

    Loader.prototype.loadAllModules = function loadAllModules(ids) {
      throw new Error('Loader must implement loadAllModules(ids).');
    };

    Loader.prototype.loadTemplate = function loadTemplate(url) {
      throw new Error('Loader must implement loadTemplate(url).');
    };

    Loader.prototype.loadText = function loadText(url) {
      throw new Error('Loader must implement loadText(url).');
    };

    Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(id) {
      var entry = this.templateRegistry[id];

      if (entry === undefined) {
        this.templateRegistry[id] = entry = new TemplateRegistryEntry(id);
      }

      return entry;
    };

    Loader.prototype.importDocument = function importDocument(url) {
      return new Promise(function (resolve, reject) {
        var frag = document.createDocumentFragment();
        var link = document.createElement('link');

        link.rel = 'import';
        link.href = url;
        frag.appendChild(link);

        importElements(frag, link, function () {
          return resolve(link['import']);
        });
      });
    };

    Loader.prototype.importBundle = function importBundle(link) {
      return new Promise(function (resolve, reject) {
        if (link['import']) {
          if (!hasTemplateElement) {
            HTMLTemplateElement.bootstrap(link['import']);
          }

          resolve(link['import']);
        } else {
          importElements(null, link, function () {
            if (!hasTemplateElement) {
              HTMLTemplateElement.bootstrap(link['import']);
            }

            resolve(link['import']);
          });
        }
      });
    };

    Loader.prototype.importTemplate = function importTemplate(url) {
      var _this = this;

      return this.importDocument(url).then(function (doc) {
        return _this.findTemplate(doc, url);
      });
    };

    Loader.prototype.findTemplate = function findTemplate(doc, url) {
      if (!hasTemplateElement) {
        HTMLTemplateElement.bootstrap(doc);
      }

      var template = doc.getElementsByTagName('template')[0];

      if (!template) {
        throw new Error('There was no template element found in \'' + url + '\'.');
      }

      return template;
    };

    Loader.prototype._tryGetTemplateFromBundle = function _tryGetTemplateFromBundle(name, entry) {
      var found = this.bundle.getElementById(name);

      if (found) {
        entry.setTemplate(found);
        return Promise.resolve(true);
      }

      return Promise.resolve(false);
    };

    Loader.prototype.findBundledTemplate = function findBundledTemplate(name, entry) {
      var _this2 = this;

      if (this.bundle) {
        return this._tryGetTemplateFromBundle(name, entry);
      } else if (this.onBundleReady) {
        return this.onBundleReady.then(function () {
          return _this2._tryGetTemplateFromBundle(name, entry);
        });
      } else if (this.needsBundleCheck) {
        var bundleLink = document.querySelector('link[aurelia-view-bundle]');
        this.needsBundleCheck = false;

        if (bundleLink) {
          this.onBundleReady = this.importBundle(bundleLink).then(function (doc) {
            _this2.bundle = doc;
            _this2.onBundleReady = null;
          });

          return this.onBundleReady.then(function () {
            return _this2._tryGetTemplateFromBundle(name, entry);
          });
        }
      }

      return Promise.resolve(false);
    };

    return Loader;
  })();

  exports.Loader = Loader;
});
define('aurelia-loader', ['aurelia-loader/aurelia-loader'], function (main) { return main; });

define('aurelia-loader-default',['exports', 'aurelia-metadata', 'aurelia-loader'], function (exports, _aureliaMetadata, _aureliaLoader) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var polyfilled = false;
  var url = null;

  if (!window.System || !window.System['import']) {
    var sys = window.System = window.System || {};

    sys.polyfilled = polyfilled = true;
    sys.isFake = false;
    sys.map = {};

    sys['import'] = function (moduleId) {
      return new Promise(function (resolve, reject) {
        require([moduleId], resolve, reject);
      });
    };

    sys.normalize = function (url) {
      return Promise.resolve(url);
    };

    if (window.requirejs && requirejs.s && requirejs.s.contexts && requirejs.s.contexts._ && requirejs.s.contexts._.defined) {
      var defined = requirejs.s.contexts._.defined;
      sys.forEachModule = function (callback) {
        for (var key in defined) {
          if (callback(key, defined[key])) return;
        }
      };
    } else {
      sys.forEachModule = function (callback) {};
    }
  } else {
    var modules = System._loader.modules,
        hasURL = false;

    try {
      hasURL = typeof URLPolyfill != 'undefined' || new URL('test:///').protocol == 'test:';
    } catch (e) {}

    url = hasURL ? URL : URLPolyfill;

    System.isFake = false;
    System.forEachModule = function (callback) {
      for (var key in modules) {
        if (callback(key, modules[key].module)) return;
      }
    };
  }

  function ensureOriginOnExports(executed, name) {
    var target = executed,
        key,
        exportedValue;

    if (target.__useDefault) {
      target = target['default'];
    }

    _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(name, 'default'));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(name, key));
      }
    }

    return executed;
  }

  function getCanonicalName(loader, normalized) {
    var pluginIndex = normalized.indexOf('!');
    var plugin;
    if (pluginIndex != -1) {
      plugin = normalized.substr(pluginIndex + 1);
      normalized = normalized.substr(0, pluginIndex);
    }

    if (loader.defaultJSExtensions && normalized.split('/').pop().split('.').pop() == 'js') {
      var isDefaultExtensionPackage = false;
      for (var p in loader.packages) {
        if (normalized.substr(0, p.length) == p && (normalized.length == p.length || normalized[p.length] == '/')) {
          if ('defaultExtension' in loader.packages[p]) isDefaultExtensionPackage = true;
        }
      }

      if (!isDefaultExtensionPackage) normalized = normalized.substr(0, normalized.length - 3);
    }

    var pathMatch,
        pathMatchLength = 0;
    var curMatchLength;
    for (var p in loader.paths) {
      var curPath = new url(loader.paths[p], loader.baseURL).href;

      var wIndex = curPath.indexOf('*');
      if (wIndex === -1) {
        if (normalized === curPath) {
          curMatchLength = curPath.split('/').length;
          if (curMatchLength > pathMatchLength) {
            pathMatch = p;
            pathMatchLength = curMatchLength;
          }
        }
      } else {
        if (normalized.substr(0, wIndex) === curPath.substr(0, wIndex) && normalized.substr(normalized.length - curPath.length + wIndex + 1) === curPath.substr(wIndex + 1)) {
          curMatchLength = curPath.split('/').length;
          if (curMatchLength > pathMatchLength) {
            pathMatch = p.replace('*', normalized.substr(wIndex, normalized.length - curPath.length + 1));
            pathMatchLength = curMatchLength;
          }
        }
      }
    }

    if (!pathMatch) {
      if (normalized.substr(0, loader.baseURL.length) == loader.baseURL) pathMatch = normalized.substr(loader.baseURL.length);else pathMatch = normalized;
    }

    if (plugin) pathMatch += '!' + getCanonicalName(loader, plugin);

    return pathMatch;
  }

  var DefaultLoader = (function (_Loader) {
    function DefaultLoader() {
      _classCallCheck(this, DefaultLoader);

      _Loader.call(this);

      this.moduleRegistry = {};
      var that = this;

      if (polyfilled) {
        define('view', [], {
          'load': function load(name, req, onload, config) {
            var entry = that.getOrCreateTemplateRegistryEntry(name),
                address;

            if (entry.templateIsLoaded) {
              onload(entry);
              return;
            }

            that.findBundledTemplate(name, entry).then(function (found) {
              if (found) {
                onload(entry);
              } else {
                address = req.toUrl(name);

                that.importTemplate(address).then(function (template) {
                  entry.setTemplate(template);
                  onload(entry);
                });
              }
            });
          }
        });
      } else {
        System.set('view', System.newModule({
          'fetch': function fetch(load, _fetch) {
            var name = getCanonicalName(this, load.name);
            var id = name.substring(0, name.indexOf('!'));
            var entry = load.metadata.templateRegistryEntry = that.getOrCreateTemplateRegistryEntry(id);

            if (entry.templateIsLoaded) {
              return '';
            }

            return that.findBundledTemplate(name, entry).then(function (found) {
              if (found) {
                return '';
              }

              return that.importTemplate(load.address).then(function (template) {
                entry.setTemplate(template);
                return '';
              });
            });
          },
          'instantiate': function instantiate(load) {
            return load.metadata.templateRegistryEntry;
          }
        }));
      }
    }

    _inherits(DefaultLoader, _Loader);

    DefaultLoader.prototype.loadModule = function loadModule(id) {
      var _this = this;

      return System.normalize(id).then(function (newId) {
        var existing = _this.moduleRegistry[newId];
        if (existing) {
          return existing;
        }

        return System['import'](newId).then(function (m) {
          _this.moduleRegistry[newId] = m;
          return ensureOriginOnExports(m, newId);
        });
      });
    };

    DefaultLoader.prototype.loadAllModules = function loadAllModules(ids) {
      var loads = [];

      for (var i = 0, ii = ids.length; i < ii; ++i) {
        loads.push(this.loadModule(ids[i]));
      }

      return Promise.all(loads);
    };

    DefaultLoader.prototype.loadTemplate = function loadTemplate(url) {
      return polyfilled ? System['import']('view!' + url) : System['import'](url + '!view');
    };

    DefaultLoader.prototype.loadText = function loadText(url) {
      return polyfilled ? System['import']('text!' + url) : System['import'](url + '!text');
    };

    return DefaultLoader;
  })(_aureliaLoader.Loader);

  exports.DefaultLoader = DefaultLoader;

  window.AureliaLoader = DefaultLoader;
});
define('aurelia-task-queue',['exports'], function (exports) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var BrowserMutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var hasSetImmediate = typeof setImmediate === 'function';

  function makeRequestFlushFromMutationObserver(flush) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });
    return function requestFlush() {
      toggle = -toggle;
      node.data = toggle;
    };
  }

  function makeRequestFlushFromTimer(flush) {
    return function requestFlush() {
      var timeoutHandle = setTimeout(handleFlushTimer, 0);

      var intervalHandle = setInterval(handleFlushTimer, 50);
      function handleFlushTimer() {
        clearTimeout(timeoutHandle);
        clearInterval(intervalHandle);
        flush();
      }
    };
  }

  var TaskQueue = (function () {
    function TaskQueue() {
      var _this = this;

      _classCallCheck(this, TaskQueue);

      this.microTaskQueue = [];
      this.microTaskQueueCapacity = 1024;
      this.taskQueue = [];

      if (typeof BrowserMutationObserver === 'function') {
        this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
          return _this.flushMicroTaskQueue();
        });
      } else {
        this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
          return _this.flushMicroTaskQueue();
        });
      }

      this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
        return _this.flushTaskQueue();
      });
    }

    TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
      if (this.microTaskQueue.length < 1) {
        this.requestFlushMicroTaskQueue();
      }

      this.microTaskQueue.push(task);
    };

    TaskQueue.prototype.queueTask = function queueTask(task) {
      if (this.taskQueue.length < 1) {
        this.requestFlushTaskQueue();
      }

      this.taskQueue.push(task);
    };

    TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
      var queue = this.taskQueue,
          index = 0,
          task;

      this.taskQueue = [];

      while (index < queue.length) {
        task = queue[index];

        try {
          task.call();
        } catch (error) {
          this.onError(error, task);
        }

        index++;
      }
    };

    TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
      var queue = this.microTaskQueue,
          capacity = this.microTaskQueueCapacity,
          index = 0,
          task;

      while (index < queue.length) {
        task = queue[index];

        try {
          task.call();
        } catch (error) {
          this.onError(error, task);
        }

        index++;

        if (index > capacity) {
          for (var scan = 0; scan < index; scan++) {
            queue[scan] = queue[scan + index];
          }

          queue.length -= index;
          index = 0;
        }
      }

      queue.length = 0;
    };

    TaskQueue.prototype.onError = function onError(error, task) {
      if ('onError' in task) {
        task.onError(error);
      } else if (hasSetImmediate) {
        setImmediate(function () {
          throw error;
        });
      } else {
        setTimeout(function () {
          throw error;
        }, 0);
      }
    };

    return TaskQueue;
  })();

  exports.TaskQueue = TaskQueue;
});
define('aurelia-logging',['exports'], function (exports) {
  

  exports.__esModule = true;
  exports.AggregateError = AggregateError;
  exports.getLogger = getLogger;
  exports.addAppender = addAppender;
  exports.setLevel = setLevel;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function AggregateError(msg, inner, skipIfAlreadyAggregate) {
    if (inner) {
      if (inner.innerError && skipIfAlreadyAggregate) {
        return inner;
      }

      if (inner.stack) {
        msg += '\n------------------------------------------------\ninner error: ' + inner.stack;
      }
    }

    var err = new Error(msg);
    if (inner) {
      err.innerError = inner;
    }

    return err;
  }

  var logLevel = {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4
  };

  exports.logLevel = logLevel;
  var loggers = {},
      currentLevel = logLevel.none,
      appenders = [],
      slice = Array.prototype.slice,
      loggerConstructionKey = {};

  function log(logger, level, args) {
    var i = appenders.length,
        current;

    args = slice.call(args);
    args.unshift(logger);

    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }

  function debug() {
    if (currentLevel < 4) {
      return;
    }

    log(this, 'debug', arguments);
  }

  function info() {
    if (currentLevel < 3) {
      return;
    }

    log(this, 'info', arguments);
  }

  function warn() {
    if (currentLevel < 2) {
      return;
    }

    log(this, 'warn', arguments);
  }

  function error() {
    if (currentLevel < 1) {
      return;
    }

    log(this, 'error', arguments);
  }

  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }

  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);

    if (appenders.length) {
      connectLogger(logger);
    }

    return logger;
  }

  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }

  function addAppender(appender) {
    appenders.push(appender);

    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }

  function setLevel(level) {
    currentLevel = level;
  }

  var Logger = (function () {
    function Logger(id, key) {
      _classCallCheck(this, Logger);

      if (key !== loggerConstructionKey) {
        throw new Error('You cannot instantiate "Logger". Use the "getLogger" API instead.');
      }

      this.id = id;
    }

    Logger.prototype.debug = function debug(message) {};

    Logger.prototype.info = function info(message) {};

    Logger.prototype.warn = function warn(message) {};

    Logger.prototype.error = function error(message) {};

    return Logger;
  })();

  exports.Logger = Logger;
});
define('aurelia-logging-console',['exports'], function (exports) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  (function (global) {
    
    global.console = global.console || {};
    var con = global.console;
    var prop, method;
    var empty = {};
    var dummy = function dummy() {};
    var properties = 'memory'.split(',');
    var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
    while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
    while (method = methods.pop()) if (!con[method]) con[method] = dummy;
  })(typeof window === 'undefined' ? undefined : window);

  if (Function.prototype.bind && window.console && typeof console.log == 'object') {
    ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
  }

  var ConsoleAppender = (function () {
    function ConsoleAppender() {
      _classCallCheck(this, ConsoleAppender);
    }

    ConsoleAppender.prototype.debug = function debug(logger) {
      for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      console.debug.apply(console, ['DEBUG [' + logger.id + ']'].concat(rest));
    };

    ConsoleAppender.prototype.info = function info(logger) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      console.info.apply(console, ['INFO [' + logger.id + ']'].concat(rest));
    };

    ConsoleAppender.prototype.warn = function warn(logger) {
      for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }

      console.warn.apply(console, ['WARN [' + logger.id + ']'].concat(rest));
    };

    ConsoleAppender.prototype.error = function error(logger) {
      for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      console.error.apply(console, ['ERROR [' + logger.id + ']'].concat(rest));
    };

    return ConsoleAppender;
  })();

  exports.ConsoleAppender = ConsoleAppender;
});
define('aurelia-history',['exports'], function (exports) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var History = (function () {
    function History() {
      _classCallCheck(this, History);
    }

    History.prototype.activate = function activate(options) {
      throw new Error('History must implement activate().');
    };

    History.prototype.deactivate = function deactivate() {
      throw new Error('History must implement deactivate().');
    };

    History.prototype.navigate = function navigate(fragment, options) {
      throw new Error('History must implement navigate().');
    };

    History.prototype.navigateBack = function navigateBack() {
      throw new Error('History must implement navigateBack().');
    };

    return History;
  })();

  exports.History = History;
});
define('aurelia-history-browser',['exports', 'core-js', 'aurelia-history'], function (exports, _coreJs, _aureliaHistory) {
  

  exports.__esModule = true;
  exports.configure = configure;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _core = _interopRequireDefault(_coreJs);

  var routeStripper = /^#?\/*|\s+$/g;

  var rootStripper = /^\/+|\/+$/g;

  var isExplorer = /msie [\w.]+/;

  var trailingSlash = /\/$/;

  var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

  function updateHash(location, fragment, replace) {
    if (replace) {
      var href = location.href.replace(/(javascript:|#).*$/, '');
      location.replace(href + '#' + fragment);
    } else {
      location.hash = '#' + fragment;
    }
  }

  var BrowserHistory = (function (_History) {
    function BrowserHistory() {
      _classCallCheck(this, BrowserHistory);

      _History.call(this);

      this.interval = 50;
      this.active = false;
      this.previousFragment = '';
      this._checkUrlCallback = this.checkUrl.bind(this);

      if (typeof window !== 'undefined') {
        this.location = window.location;
        this.history = window.history;
      }
    }

    _inherits(BrowserHistory, _History);

    BrowserHistory.prototype.getHash = function getHash(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    };

    BrowserHistory.prototype.getFragment = function getFragment(fragment, forcePushState) {
      var root;

      if (!fragment) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = this.location.pathname + this.location.search;
          root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) {
            fragment = fragment.substr(root.length);
          }
        } else {
          fragment = this.getHash();
        }
      }

      return '/' + fragment.replace(routeStripper, '');
    };

    BrowserHistory.prototype.activate = function activate(options) {
      if (this.active) {
        throw new Error('History has already been activated.');
      }

      this.active = true;

      this.options = Object.assign({}, { root: '/' }, this.options, options);
      this.root = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);

      var fragment = this.getFragment();

      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (this._hasPushState) {
        window.onpopstate = this._checkUrlCallback;
      } else if (this._wantsHashChange && 'onhashchange' in window) {
        window.addEventListener('hashchange', this._checkUrlCallback);
      } else if (this._wantsHashChange) {
        this._checkUrlTimer = setTimeout(this._checkUrlCallback, this.interval);
      }

      this.fragment = fragment;

      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      if (this._wantsHashChange && this._wantsPushState) {
        if (!this._hasPushState && !atRoot) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + this.location.search + '#' + this.fragment);

          return true;
        } else if (this._hasPushState && atRoot && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment + loc.search);
        }
      }

      if (!this.options.silent) {
        return this.loadUrl();
      }
    };

    BrowserHistory.prototype.deactivate = function deactivate() {
      window.onpopstate = null;
      window.removeEventListener('hashchange', this._checkUrlCallback);
      clearTimeout(this._checkUrlTimer);
      this.active = false;
    };

    BrowserHistory.prototype.checkUrl = function checkUrl() {
      var current = this.getFragment();

      if (this._checkUrlTimer) {
        clearTimeout(this._checkUrlTimer);
        this._checkUrlTimer = setTimeout(this._checkUrlCallback, this.interval);
      }

      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }

      if (current === this.fragment) {
        return false;
      }

      if (this.iframe) {
        this.navigate(current, false);
      }

      this.loadUrl();
    };

    BrowserHistory.prototype.loadUrl = function loadUrl(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);

      return this.options.routeHandler ? this.options.routeHandler(fragment) : false;
    };

    BrowserHistory.prototype.navigate = function navigate(fragment, options) {
      if (fragment && absoluteUrl.test(fragment)) {
        window.location.href = fragment;
        return true;
      }

      if (!this.active) {
        return false;
      }

      if (options === undefined) {
        options = {
          trigger: true
        };
      } else if (typeof options === 'boolean') {
        options = {
          trigger: options
        };
      }

      fragment = this.getFragment(fragment || '');

      if (this.fragment === fragment) {
        return;
      }

      this.fragment = fragment;

      var url = this.root + fragment;

      if (fragment === '' && url !== '/') {
        url = url.slice(0, -1);
      }

      if (this._hasPushState) {
        url = url.replace('//', '/');
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
      } else if (this._wantsHashChange) {
        updateHash(this.location, fragment, options.replace);

        if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
          if (!options.replace) {
            this.iframe.document.open().close();
          }

          updateHash(this.iframe.location, fragment, options.replace);
        }
      } else {
        return this.location.assign(url);
      }

      if (options.trigger) {
        return this.loadUrl(fragment);
      } else {
        this.previousFragment = fragment;
      }
    };

    BrowserHistory.prototype.navigateBack = function navigateBack() {
      this.history.back();
    };

    return BrowserHistory;
  })(_aureliaHistory.History);

  exports.BrowserHistory = BrowserHistory;

  function configure(aurelia) {
    aurelia.withSingleton(_aureliaHistory.History, BrowserHistory);
  }
});
define('aurelia-event-aggregator',['exports', 'aurelia-logging'], function (exports, _aureliaLogging) {
  

  exports.__esModule = true;
  exports.includeEventsIn = includeEventsIn;
  exports.configure = configure;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var logger = _aureliaLogging.getLogger('event-aggregator');

  var Handler = (function () {
    function Handler(messageType, callback) {
      _classCallCheck(this, Handler);

      this.messageType = messageType;
      this.callback = callback;
    }

    Handler.prototype.handle = function handle(message) {
      var _this = this;

      if (message instanceof this.messageType) {
        executeHandler(function () {
          return _this.callback.call(null, message);
        });
      }
    };

    return Handler;
  })();

  function executeHandler(handler) {
    try {
      handler();
    } catch (e) {
      logger.error(e);
    }
  }

  var EventAggregator = (function () {
    function EventAggregator() {
      _classCallCheck(this, EventAggregator);

      this.eventLookup = {};
      this.messageHandlers = [];
    }

    EventAggregator.prototype.publish = function publish(event, data) {
      var subscribers, i;

      if (typeof event === 'string') {
        subscribers = this.eventLookup[event];
        if (subscribers) {
          subscribers = subscribers.slice();
          i = subscribers.length;

          while (i--) {
            executeHandler(function () {
              return subscribers[i](data, event);
            });
          }
        }
      } else {
        subscribers = this.messageHandlers.slice();
        i = subscribers.length;

        while (i--) {
          subscribers[i].handle(event);
        }
      }
    };

    EventAggregator.prototype.subscribe = function subscribe(event, callback) {
      var subscribers, handler;

      if (typeof event === 'string') {
        subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);

        subscribers.push(callback);

        return function () {
          var idx = subscribers.indexOf(callback);
          if (idx != -1) {
            subscribers.splice(idx, 1);
          }
        };
      } else {
        handler = new Handler(event, callback);
        subscribers = this.messageHandlers;

        subscribers.push(handler);

        return function () {
          var idx = subscribers.indexOf(handler);
          if (idx != -1) {
            subscribers.splice(idx, 1);
          }
        };
      }
    };

    EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
      var sub = this.subscribe(event, function (data, event) {
        sub();
        return callback(data, event);
      });
      return sub;
    };

    return EventAggregator;
  })();

  exports.EventAggregator = EventAggregator;

  function includeEventsIn(obj) {
    var ea = new EventAggregator();

    obj.subscribeOnce = function (event, callback) {
      return ea.subscribeOnce(event, callback);
    };

    obj.subscribe = function (event, callback) {
      return ea.subscribe(event, callback);
    };

    obj.publish = function (event, data) {
      ea.publish(event, data);
    };

    return ea;
  }

  function configure(aurelia) {
    aurelia.withInstance(EventAggregator, includeEventsIn(aurelia));
  }
});
define('aurelia-dependency-injection/aurelia-dependency-injection',['exports', 'core-js', 'aurelia-metadata', 'aurelia-logging'], function (exports, _coreJs, _aureliaMetadata, _aureliaLogging) {
  

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.autoinject = autoinject;
  exports.inject = inject;
  exports.registration = registration;
  exports.transient = transient;
  exports.singleton = singleton;
  exports.instanceActivator = instanceActivator;
  exports.factory = factory;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var TransientRegistration = (function () {
    function TransientRegistration(key) {
      _classCallCheck(this, TransientRegistration);

      this.key = key;
    }

    TransientRegistration.prototype.register = function register(container, key, fn) {
      container.registerTransient(this.key || key, fn);
    };

    return TransientRegistration;
  })();

  exports.TransientRegistration = TransientRegistration;

  var SingletonRegistration = (function () {
    function SingletonRegistration(keyOrRegisterInChild) {
      var registerInChild = arguments[1] === undefined ? false : arguments[1];

      _classCallCheck(this, SingletonRegistration);

      if (typeof keyOrRegisterInChild === 'boolean') {
        this.registerInChild = keyOrRegisterInChild;
      } else {
        this.key = keyOrRegisterInChild;
        this.registerInChild = registerInChild;
      }
    }

    SingletonRegistration.prototype.register = function register(container, key, fn) {
      var destination = this.registerInChild ? container : container.root;
      destination.registerSingleton(this.key || key, fn);
    };

    return SingletonRegistration;
  })();

  exports.SingletonRegistration = SingletonRegistration;

  var Resolver = (function () {
    function Resolver() {
      _classCallCheck(this, Resolver);
    }

    Resolver.prototype.get = function get(container) {
      throw new Error('A custom Resolver must implement get(container) and return the resolved instance(s).');
    };

    return Resolver;
  })();

  exports.Resolver = Resolver;

  var Lazy = (function (_Resolver) {
    function Lazy(key) {
      _classCallCheck(this, Lazy);

      _Resolver.call(this);
      this.key = key;
    }

    _inherits(Lazy, _Resolver);

    Lazy.prototype.get = function get(container) {
      var _this = this;

      return function () {
        return container.get(_this.key);
      };
    };

    Lazy.of = function of(key) {
      return new Lazy(key);
    };

    return Lazy;
  })(Resolver);

  exports.Lazy = Lazy;

  var All = (function (_Resolver2) {
    function All(key) {
      _classCallCheck(this, All);

      _Resolver2.call(this);
      this.key = key;
    }

    _inherits(All, _Resolver2);

    All.prototype.get = function get(container) {
      return container.getAll(this.key);
    };

    All.of = function of(key) {
      return new All(key);
    };

    return All;
  })(Resolver);

  exports.All = All;

  var Optional = (function (_Resolver3) {
    function Optional(key) {
      var checkParent = arguments[1] === undefined ? false : arguments[1];

      _classCallCheck(this, Optional);

      _Resolver3.call(this);
      this.key = key;
      this.checkParent = checkParent;
    }

    _inherits(Optional, _Resolver3);

    Optional.prototype.get = function get(container) {
      if (container.hasHandler(this.key, this.checkParent)) {
        return container.get(this.key);
      }

      return null;
    };

    Optional.of = function of(key) {
      var checkParent = arguments[1] === undefined ? false : arguments[1];

      return new Optional(key, checkParent);
    };

    return Optional;
  })(Resolver);

  exports.Optional = Optional;

  var Parent = (function (_Resolver4) {
    function Parent(key) {
      _classCallCheck(this, Parent);

      _Resolver4.call(this);
      this.key = key;
    }

    _inherits(Parent, _Resolver4);

    Parent.prototype.get = function get(container) {
      return container.parent ? container.parent.get(this.key) : null;
    };

    Parent.of = function of(key) {
      return new Parent(key);
    };

    return Parent;
  })(Resolver);

  exports.Parent = Parent;

  var ClassActivator = (function () {
    function ClassActivator() {
      _classCallCheck(this, ClassActivator);
    }

    ClassActivator.prototype.invoke = function invoke(fn, args) {
      return Reflect.construct(fn, args);
    };

    _createClass(ClassActivator, null, [{
      key: 'instance',
      value: new ClassActivator(),
      enumerable: true
    }]);

    return ClassActivator;
  })();

  exports.ClassActivator = ClassActivator;

  var FactoryActivator = (function () {
    function FactoryActivator() {
      _classCallCheck(this, FactoryActivator);
    }

    FactoryActivator.prototype.invoke = function invoke(fn, args) {
      return fn.apply(undefined, args);
    };

    _createClass(FactoryActivator, null, [{
      key: 'instance',
      value: new FactoryActivator(),
      enumerable: true
    }]);

    return FactoryActivator;
  })();

  exports.FactoryActivator = FactoryActivator;

  var badKeyError = 'key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?';

  _aureliaMetadata.Metadata.registration = 'aurelia:registration';
  _aureliaMetadata.Metadata.instanceActivator = 'aurelia:instance-activator';

  function test() {}
  if (!test.name) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }

  var emptyParameters = Object.freeze([]);

  exports.emptyParameters = emptyParameters;

  var Container = (function () {
    function Container(constructionInfo) {
      _classCallCheck(this, Container);

      this.constructionInfo = constructionInfo || new Map();
      this.entries = new Map();
      this.root = this;
    }

    Container.prototype.makeGlobal = function makeGlobal() {
      Container.instance = this;
      return this;
    };

    Container.prototype.registerInstance = function registerInstance(key, instance) {
      this.registerHandler(key, function (x) {
        return instance;
      });
    };

    Container.prototype.registerTransient = function registerTransient(key, fn) {
      fn = fn || key;
      this.registerHandler(key, function (x) {
        return x.invoke(fn);
      });
    };

    Container.prototype.registerSingleton = function registerSingleton(key, fn) {
      var singleton = null;
      fn = fn || key;
      this.registerHandler(key, function (x) {
        return singleton || (singleton = x.invoke(fn));
      });
    };

    Container.prototype.autoRegister = function autoRegister(fn, key) {
      var registration;

      if (fn === null || fn === undefined) {
        throw new Error(badKeyError);
      }

      if (typeof fn === 'function') {
        registration = _aureliaMetadata.Metadata.get(_aureliaMetadata.Metadata.registration, fn);

        if (registration !== undefined) {
          registration.register(this, key || fn, fn);
        } else {
          this.registerSingleton(key || fn, fn);
        }
      } else {
        this.registerInstance(fn, fn);
      }
    };

    Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
      var i = fns.length;
      while (i--) {
        this.autoRegister(fns[i]);
      }
    };

    Container.prototype.registerHandler = function registerHandler(key, handler) {
      this._getOrCreateEntry(key).push(handler);
    };

    Container.prototype.unregister = function unregister(key) {
      this.entries['delete'](key);
    };

    Container.prototype.get = function get(key) {
      var entry;

      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      if (key === Container) {
        return this;
      }

      if (key instanceof Resolver) {
        return key.get(this);
      }

      entry = this.entries.get(key);

      if (entry !== undefined) {
        return entry[0](this);
      }

      if (this.parent) {
        return this.parent.get(key);
      }

      this.autoRegister(key);
      entry = this.entries.get(key);

      return entry[0](this);
    };

    Container.prototype.getAll = function getAll(key) {
      var _this2 = this;

      var entry;

      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      entry = this.entries.get(key);

      if (entry !== undefined) {
        return entry.map(function (x) {
          return x(_this2);
        });
      }

      if (this.parent) {
        return this.parent.getAll(key);
      }

      return [];
    };

    Container.prototype.hasHandler = function hasHandler(key) {
      var checkParent = arguments[1] === undefined ? false : arguments[1];

      if (key === null || key === undefined) {
        throw new Error(badKeyError);
      }

      return this.entries.has(key) || checkParent && this.parent && this.parent.hasHandler(key, checkParent);
    };

    Container.prototype.createChild = function createChild() {
      var childContainer = new Container(this.constructionInfo);
      childContainer.parent = this;
      childContainer.root = this.root;
      return childContainer;
    };

    Container.prototype.invoke = function invoke(fn, deps) {
      try {
        var info = this._getOrCreateConstructionInfo(fn),
            keys = info.keys,
            args = new Array(keys.length),
            i,
            ii;

        for (i = 0, ii = keys.length; i < ii; ++i) {
          args[i] = this.get(keys[i]);
        }

        if (deps !== undefined) {
          args = args.concat(deps);
        }

        return info.activator.invoke(fn, args);
      } catch (e) {
        var activatingText = info.activator instanceof ClassActivator ? 'instantiating' : 'invoking';
        var message = 'Error ' + activatingText + ' ' + fn.name + '.';
        if (i < ii) {
          message += ' The argument at index ' + i + ' (key:' + keys[i] + ') could not be satisfied.';
        }

        message += ' Check the inner error for details.';

        throw _aureliaLogging.AggregateError(message, e, true);
      }
    };

    Container.prototype._getOrCreateEntry = function _getOrCreateEntry(key) {
      var entry;

      if (key === null || key === undefined) {
        throw new Error('key cannot be null or undefined.  (Are you trying to inject something that doesn\'t exist with DI?)');
      }

      entry = this.entries.get(key);

      if (entry === undefined) {
        entry = [];
        this.entries.set(key, entry);
      }

      return entry;
    };

    Container.prototype._getOrCreateConstructionInfo = function _getOrCreateConstructionInfo(fn) {
      var info = this.constructionInfo.get(fn);

      if (info === undefined) {
        info = this._createConstructionInfo(fn);
        this.constructionInfo.set(fn, info);
      }

      return info;
    };

    Container.prototype._createConstructionInfo = function _createConstructionInfo(fn) {
      var info = { activator: _aureliaMetadata.Metadata.getOwn(_aureliaMetadata.Metadata.instanceActivator, fn) || ClassActivator.instance };

      if (fn.inject !== undefined) {
        if (typeof fn.inject === 'function') {
          info.keys = fn.inject();
        } else {
          info.keys = fn.inject;
        }

        return info;
      }

      info.keys = _aureliaMetadata.Metadata.getOwn(_aureliaMetadata.Metadata.paramTypes, fn) || emptyParameters;
      return info;
    };

    return Container;
  })();

  exports.Container = Container;

  function autoinject(target) {
    var deco = function deco(target) {
      target.inject = _aureliaMetadata.Metadata.getOwn(_aureliaMetadata.Metadata.paramTypes, target) || emptyParameters;
    };

    return target ? deco(target) : deco;
  }

  function inject() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    return function (target) {
      target.inject = rest;
    };
  }

  function registration(value) {
    return function (target) {
      _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.registration, value, target);
    };
  }

  function transient(key) {
    return registration(new TransientRegistration(key));
  }

  function singleton(keyOrRegisterInChild) {
    var registerInChild = arguments[1] === undefined ? false : arguments[1];

    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
  }

  function instanceActivator(value) {
    return function (target) {
      _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.instanceActivator, value, target);
    };
  }

  function factory() {
    return instanceActivator(FactoryActivator.instance);
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('autoinject', autoinject);
  _aureliaMetadata.Decorators.configure.parameterizedDecorator('inject', inject);
  _aureliaMetadata.Decorators.configure.parameterizedDecorator('registration', registration);
  _aureliaMetadata.Decorators.configure.parameterizedDecorator('transient', transient);
  _aureliaMetadata.Decorators.configure.parameterizedDecorator('singleton', singleton);
  _aureliaMetadata.Decorators.configure.parameterizedDecorator('instanceActivator', instanceActivator);
  _aureliaMetadata.Decorators.configure.parameterizedDecorator('factory', factory);
});
define('aurelia-dependency-injection', ['aurelia-dependency-injection/aurelia-dependency-injection'], function (main) { return main; });

define('aurelia-binding/aurelia-binding',['exports', 'core-js', 'aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-metadata'], function (exports, _coreJs, _aureliaTaskQueue, _aureliaDependencyInjection, _aureliaMetadata) {
  

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.calcSplices = calcSplices;
  exports.projectArraySplices = projectArraySplices;
  exports.getChangeRecords = getChangeRecords;
  exports.getArrayObserver = _getArrayObserver;
  exports.getMapObserver = _getMapObserver;
  exports.hasDeclaredDependencies = hasDeclaredDependencies;
  exports.declarePropertyDependencies = declarePropertyDependencies;
  exports.isStandardSvgAttribute = isStandardSvgAttribute;
  exports.valueConverter = valueConverter;
  exports.computedFrom = computedFrom;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var AccessKeyedObserver = (function () {
    function AccessKeyedObserver(objectInfo, keyInfo, observerLocator, evaluate) {
      var _this = this;

      _classCallCheck(this, AccessKeyedObserver);

      this.objectInfo = objectInfo;
      this.keyInfo = keyInfo;
      this.evaluate = evaluate;
      this.observerLocator = observerLocator;

      if (keyInfo.observer) {
        this.disposeKey = keyInfo.observer.subscribe(function (newValue) {
          return _this.objectOrKeyChanged(undefined, newValue);
        });
      }

      if (objectInfo.observer) {
        this.disposeObject = objectInfo.observer.subscribe(function (newValue) {
          return _this.objectOrKeyChanged(newValue);
        });
      }

      this.updatePropertySubscription(objectInfo.value, keyInfo.value);
    }

    AccessKeyedObserver.prototype.updatePropertySubscription = function updatePropertySubscription(object, key) {
      var _this2 = this;

      var callback;
      if (this.disposeProperty) {
        this.disposeProperty();
        this.disposeProperty = null;
      }
      if (object instanceof Object) {
        this.disposeProperty = this.observerLocator.getObserver(object, key).subscribe(function () {
          return _this2.notify();
        });
      }
    };

    AccessKeyedObserver.prototype.objectOrKeyChanged = function objectOrKeyChanged(object, key) {
      var oo, ko;
      object = object || ((oo = this.objectInfo.observer) && oo.getValue ? oo.getValue() : this.objectInfo.value);
      key = key || ((ko = this.keyInfo.observer) && ko.getValue ? ko.getValue() : this.keyInfo.value);
      this.updatePropertySubscription(object, key);

      this.notify();
    };

    AccessKeyedObserver.prototype.subscribe = function subscribe(callback) {
      var that = this;
      that.callback = callback;
      return function () {
        that.callback = null;
      };
    };

    AccessKeyedObserver.prototype.notify = function notify() {
      var callback = this.callback;

      if (callback) {
        callback(this.evaluate());
      }
    };

    AccessKeyedObserver.prototype.dispose = function dispose() {
      this.objectInfo = null;
      this.keyInfo = null;
      this.evaluate = null;
      this.observerLocator = null;
      if (this.disposeObject) {
        this.disposeObject();
      }
      if (this.disposeKey) {
        this.disposeKey();
      }
      if (this.disposeProperty) {
        this.disposeProperty();
      }
    };

    return AccessKeyedObserver;
  })();

  exports.AccessKeyedObserver = AccessKeyedObserver;

  function isIndex(s) {
    return +s === s >>> 0;
  }

  function toNumber(s) {
    return +s;
  }

  function newSplice(index, removed, addedCount) {
    return {
      index: index,
      removed: removed,
      addedCount: addedCount
    };
  }

  var EDIT_LEAVE = 0;
  var EDIT_UPDATE = 1;
  var EDIT_ADD = 2;
  var EDIT_DELETE = 3;

  function ArraySplice() {}

  ArraySplice.prototype = {
    calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
      var rowCount = oldEnd - oldStart + 1;
      var columnCount = currentEnd - currentStart + 1;
      var distances = new Array(rowCount);
      var i, j, north, west;

      for (i = 0; i < rowCount; ++i) {
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
      }

      for (j = 0; j < columnCount; ++j) {
        distances[0][j] = j;
      }

      for (i = 1; i < rowCount; ++i) {
        for (j = 1; j < columnCount; ++j) {
          if (this.equals(current[currentStart + j - 1], old[oldStart + i - 1])) distances[i][j] = distances[i - 1][j - 1];else {
            north = distances[i - 1][j] + 1;
            west = distances[i][j - 1] + 1;
            distances[i][j] = north < west ? north : west;
          }
        }
      }

      return distances;
    },

    spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
      var i = distances.length - 1;
      var j = distances[0].length - 1;
      var current = distances[i][j];
      var edits = [];
      while (i > 0 || j > 0) {
        if (i == 0) {
          edits.push(EDIT_ADD);
          j--;
          continue;
        }
        if (j == 0) {
          edits.push(EDIT_DELETE);
          i--;
          continue;
        }
        var northWest = distances[i - 1][j - 1];
        var west = distances[i - 1][j];
        var north = distances[i][j - 1];

        var min;
        if (west < north) min = west < northWest ? west : northWest;else min = north < northWest ? north : northWest;

        if (min == northWest) {
          if (northWest == current) {
            edits.push(EDIT_LEAVE);
          } else {
            edits.push(EDIT_UPDATE);
            current = northWest;
          }
          i--;
          j--;
        } else if (min == west) {
          edits.push(EDIT_DELETE);
          i--;
          current = west;
        } else {
          edits.push(EDIT_ADD);
          j--;
          current = north;
        }
      }

      edits.reverse();
      return edits;
    },

    calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
      var prefixCount = 0;
      var suffixCount = 0;

      var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
      if (currentStart == 0 && oldStart == 0) prefixCount = this.sharedPrefix(current, old, minLength);

      if (currentEnd == current.length && oldEnd == old.length) suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);

      currentStart += prefixCount;
      oldStart += prefixCount;
      currentEnd -= suffixCount;
      oldEnd -= suffixCount;

      if (currentEnd - currentStart == 0 && oldEnd - oldStart == 0) return [];

      if (currentStart == currentEnd) {
        var splice = newSplice(currentStart, [], 0);
        while (oldStart < oldEnd) splice.removed.push(old[oldStart++]);

        return [splice];
      } else if (oldStart == oldEnd) return [newSplice(currentStart, [], currentEnd - currentStart)];

      var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

      var splice = undefined;
      var splices = [];
      var index = currentStart;
      var oldIndex = oldStart;
      for (var i = 0; i < ops.length; ++i) {
        switch (ops[i]) {
          case EDIT_LEAVE:
            if (splice) {
              splices.push(splice);
              splice = undefined;
            }

            index++;
            oldIndex++;
            break;
          case EDIT_UPDATE:
            if (!splice) splice = newSplice(index, [], 0);

            splice.addedCount++;
            index++;

            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
          case EDIT_ADD:
            if (!splice) splice = newSplice(index, [], 0);

            splice.addedCount++;
            index++;
            break;
          case EDIT_DELETE:
            if (!splice) splice = newSplice(index, [], 0);

            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
        }
      }

      if (splice) {
        splices.push(splice);
      }
      return splices;
    },

    sharedPrefix: function sharedPrefix(current, old, searchLength) {
      for (var i = 0; i < searchLength; ++i) if (!this.equals(current[i], old[i])) return i;
      return searchLength;
    },

    sharedSuffix: function sharedSuffix(current, old, searchLength) {
      var index1 = current.length;
      var index2 = old.length;
      var count = 0;
      while (count < searchLength && this.equals(current[--index1], old[--index2])) count++;

      return count;
    },

    calculateSplices: function calculateSplices(current, previous) {
      return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
    },

    equals: function equals(currentValue, previousValue) {
      return currentValue === previousValue;
    }
  };

  var arraySplice = new ArraySplice();

  function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
  }

  function intersect(start1, end1, start2, end2) {
    if (end1 < start2 || end2 < start1) return -1;

    if (end1 == start2 || end2 == start1) return 0;

    if (start1 < start2) {
      if (end1 < end2) return end1 - start2;else return end2 - start2;
    } else {
      if (end2 < end1) return end2 - start1;else return end1 - start1;
    }
  }

  function mergeSplice(splices, index, removed, addedCount) {
    var splice = newSplice(index, removed, addedCount);

    var inserted = false;
    var insertionOffset = 0;

    for (var i = 0; i < splices.length; i++) {
      var current = splices[i];
      current.index += insertionOffset;

      if (inserted) continue;

      var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

      if (intersectCount >= 0) {

        splices.splice(i, 1);
        i--;

        insertionOffset -= current.addedCount - current.removed.length;

        splice.addedCount += current.addedCount - intersectCount;
        var deleteCount = splice.removed.length + current.removed.length - intersectCount;

        if (!splice.addedCount && !deleteCount) {
          inserted = true;
        } else {
          var removed = current.removed;

          if (splice.index < current.index) {
            var prepend = splice.removed.slice(0, current.index - splice.index);
            Array.prototype.push.apply(prepend, removed);
            removed = prepend;
          }

          if (splice.index + splice.removed.length > current.index + current.addedCount) {
            var append = splice.removed.slice(current.index + current.addedCount - splice.index);
            Array.prototype.push.apply(removed, append);
          }

          splice.removed = removed;
          if (current.index < splice.index) {
            splice.index = current.index;
          }
        }
      } else if (splice.index < current.index) {

        inserted = true;

        splices.splice(i, 0, splice);
        i++;

        var offset = splice.addedCount - splice.removed.length;
        current.index += offset;
        insertionOffset += offset;
      }
    }

    if (!inserted) splices.push(splice);
  }

  function createInitialSplices(array, changeRecords) {
    var splices = [];

    for (var i = 0; i < changeRecords.length; i++) {
      var record = changeRecords[i];
      switch (record.type) {
        case 'splice':
          mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
          break;
        case 'add':
        case 'update':
        case 'delete':
          if (!isIndex(record.name)) continue;
          var index = toNumber(record.name);
          if (index < 0) continue;
          mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
          break;
        default:
          console.error('Unexpected record type: ' + JSON.stringify(record));
          break;
      }
    }

    return splices;
  }

  function projectArraySplices(array, changeRecords) {
    var splices = [];

    createInitialSplices(array, changeRecords).forEach(function (splice) {
      if (splice.addedCount == 1 && splice.removed.length == 1) {
        if (splice.removed[0] !== array[splice.index]) splices.push(splice);

        return;
      };

      splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    });

    return splices;
  }

  var hasObjectObserve = (function detectObjectObserve() {
    if (typeof Object.observe !== 'function') {
      return false;
    }

    var records = [];

    function callback(recs) {
      records = recs;
    }

    var test = {};
    Object.observe(test, callback);
    test.id = 1;
    test.id = 2;
    delete test.id;

    Object.deliverChangeRecords(callback);
    if (records.length !== 3) return false;

    if (records[0].type != 'add' || records[1].type != 'update' || records[2].type != 'delete') {
      return false;
    }

    Object.unobserve(test, callback);

    return true;
  })();

  exports.hasObjectObserve = hasObjectObserve;
  var hasArrayObserve = (function detectArrayObserve() {
    if (typeof Array.observe !== 'function') {
      return false;
    }

    var records = [];

    function callback(recs) {
      records = recs;
    }

    var arr = [];
    Array.observe(arr, callback);
    arr.push(1, 2);
    arr.length = 0;

    Object.deliverChangeRecords(callback);
    if (records.length !== 2) return false;

    if (records[0].type != 'splice' || records[1].type != 'splice') {
      return false;
    }

    Array.unobserve(arr, callback);

    return true;
  })();

  exports.hasArrayObserve = hasArrayObserve;
  function newRecord(type, object, key, oldValue) {
    return {
      type: type,
      object: object,
      key: key,
      oldValue: oldValue
    };
  }

  function getChangeRecords(map) {
    var entries = [];
    for (var _iterator = map.keys(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var key = _ref;

      entries.push(newRecord('added', map, key));
    }
    return entries;
  }

  var ModifyCollectionObserver = (function () {
    function ModifyCollectionObserver(taskQueue, collection) {
      _classCallCheck(this, ModifyCollectionObserver);

      this.taskQueue = taskQueue;
      this.queued = false;
      this.callbacks = [];
      this.changeRecords = [];
      this.oldCollection = null;
      this.collection = collection;
      this.lengthPropertyName = collection instanceof Map ? 'size' : 'length';
    }

    ModifyCollectionObserver.prototype.subscribe = function subscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.push(callback);
      return function () {
        callbacks.splice(callbacks.indexOf(callback), 1);
      };
    };

    ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
      if (this.callbacks.length === 0 && !this.lengthObserver) {
        return;
      }

      this.changeRecords.push(changeRecord);

      if (!this.queued) {
        this.queued = true;
        this.taskQueue.queueMicroTask(this);
      }
    };

    ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
      if (!this.callbacks.length) {
        return;
      }

      this.oldCollection = oldCollection;

      if (!this.queued) {
        this.queued = true;
        this.taskQueue.queueMicroTask(this);
      }
    };

    ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
      return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
    };

    ModifyCollectionObserver.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          changeRecords = this.changeRecords,
          oldCollection = this.oldCollection,
          records;

      this.queued = false;
      this.changeRecords = [];
      this.oldCollection = null;

      if (i) {
        if (oldCollection) {
          if (this.collection instanceof Map) {
            records = getChangeRecords(oldCollection);
          } else {
            records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
          }
        } else {
          if (this.collection instanceof Map) {
            records = changeRecords;
          } else {
            records = projectArraySplices(this.collection, changeRecords);
          }
        }

        while (i--) {
          callbacks[i](records);
        }
      }

      if (this.lengthObserver) {
        this.lengthObserver.call(this.collection[this.lengthPropertyName]);
      }
    };

    return ModifyCollectionObserver;
  })();

  exports.ModifyCollectionObserver = ModifyCollectionObserver;

  var CollectionLengthObserver = (function () {
    function CollectionLengthObserver(collection) {
      _classCallCheck(this, CollectionLengthObserver);

      this.collection = collection;
      this.callbacks = [];
      this.lengthPropertyName = collection instanceof Map ? 'size' : 'length';
      this.currentValue = collection[this.lengthPropertyName];
    }

    CollectionLengthObserver.prototype.getValue = function getValue() {
      return this.collection[this.lengthPropertyName];
    };

    CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
      this.collection[this.lengthPropertyName] = newValue;
    };

    CollectionLengthObserver.prototype.subscribe = function subscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.push(callback);
      return function () {
        callbacks.splice(callbacks.indexOf(callback), 1);
      };
    };

    CollectionLengthObserver.prototype.call = function call(newValue) {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.currentValue;

      while (i--) {
        callbacks[i](newValue, oldValue);
      }

      this.currentValue = newValue;
    };

    return CollectionLengthObserver;
  })();

  exports.CollectionLengthObserver = CollectionLengthObserver;

  var arrayProto = Array.prototype;

  function _getArrayObserver(taskQueue, array) {
    if (hasArrayObserve) {
      return new ArrayObserveObserver(array);
    } else {
      return ModifyArrayObserver.create(taskQueue, array);
    }
  }

  var ModifyArrayObserver = (function (_ModifyCollectionObserver) {
    function ModifyArrayObserver(taskQueue, array) {
      _classCallCheck(this, ModifyArrayObserver);

      _ModifyCollectionObserver.call(this, taskQueue, array);
    }

    _inherits(ModifyArrayObserver, _ModifyCollectionObserver);

    ModifyArrayObserver.create = function create(taskQueue, array) {
      var observer = new ModifyArrayObserver(taskQueue, array);

      array['pop'] = function () {
        var methodCallResult = arrayProto['pop'].apply(array, arguments);
        observer.addChangeRecord({
          type: 'delete',
          object: array,
          name: array.length,
          oldValue: methodCallResult
        });
        return methodCallResult;
      };

      array['push'] = function () {
        var methodCallResult = arrayProto['push'].apply(array, arguments);
        observer.addChangeRecord({
          type: 'splice',
          object: array,
          index: array.length - arguments.length,
          removed: [],
          addedCount: arguments.length
        });
        return methodCallResult;
      };

      array['reverse'] = function () {
        var oldArray = array.slice();
        var methodCallResult = arrayProto['reverse'].apply(array, arguments);
        observer.reset(oldArray);
        return methodCallResult;
      };

      array['shift'] = function () {
        var methodCallResult = arrayProto['shift'].apply(array, arguments);
        observer.addChangeRecord({
          type: 'delete',
          object: array,
          name: 0,
          oldValue: methodCallResult
        });
        return methodCallResult;
      };

      array['sort'] = function () {
        var oldArray = array.slice();
        var methodCallResult = arrayProto['sort'].apply(array, arguments);
        observer.reset(oldArray);
        return methodCallResult;
      };

      array['splice'] = function () {
        var methodCallResult = arrayProto['splice'].apply(array, arguments);
        observer.addChangeRecord({
          type: 'splice',
          object: array,
          index: arguments[0],
          removed: methodCallResult,
          addedCount: arguments.length > 2 ? arguments.length - 2 : 0
        });
        return methodCallResult;
      };

      array['unshift'] = function () {
        var methodCallResult = arrayProto['unshift'].apply(array, arguments);
        observer.addChangeRecord({
          type: 'splice',
          object: array,
          index: 0,
          removed: [],
          addedCount: arguments.length
        });
        return methodCallResult;
      };

      return observer;
    };

    return ModifyArrayObserver;
  })(ModifyCollectionObserver);

  var ArrayObserveObserver = (function () {
    function ArrayObserveObserver(array) {
      _classCallCheck(this, ArrayObserveObserver);

      this.array = array;
      this.callbacks = [];
    }

    ArrayObserveObserver.prototype.subscribe = function subscribe(callback) {
      var _this3 = this;

      var callbacks = this.callbacks;

      if (callbacks.length === 0) {
        this.handler = this.handleChanges.bind(this);
        Array.observe(this.array, this.handler);
      }

      callbacks.push(callback);

      return function () {
        callbacks.splice(callbacks.indexOf(callback), 1);
        if (callbacks.length === 0) {
          Array.unobserve(_this3.array, _this3.handler);
        }
      };
    };

    ArrayObserveObserver.prototype.getLengthObserver = function getLengthObserver() {
      return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.array));
    };

    ArrayObserveObserver.prototype.handleChanges = function handleChanges(changeRecords) {
      var callbacks = this.callbacks,
          i = callbacks.length,
          splices;

      if (i) {
        splices = projectArraySplices(this.array, changeRecords);

        while (i--) {
          callbacks[i](splices);
        }
      }

      if (this.lengthObserver) {
        this.lengthObserver.call(this.array.length);
      }
    };

    return ArrayObserveObserver;
  })();

  var PathObserver = (function () {
    function PathObserver(leftObserver, getRightObserver, value) {
      var _this4 = this;

      _classCallCheck(this, PathObserver);

      this.leftObserver = leftObserver;

      this.disposeLeft = leftObserver.subscribe(function (newValue) {
        var newRightValue = _this4.updateRight(getRightObserver(newValue));
        _this4.notify(newRightValue);
      });

      this.updateRight(getRightObserver(value));
    }

    PathObserver.prototype.updateRight = function updateRight(observer) {
      var _this5 = this;

      this.rightObserver = observer;

      if (this.disposeRight) {
        this.disposeRight();
      }

      if (!observer) {
        return null;
      }

      this.disposeRight = observer.subscribe(function (newValue) {
        return _this5.notify(newValue);
      });
      return observer.getValue();
    };

    PathObserver.prototype.subscribe = function subscribe(callback) {
      var that = this;
      that.callback = callback;
      return function () {
        that.callback = null;
      };
    };

    PathObserver.prototype.notify = function notify(newValue) {
      var callback = this.callback;

      if (callback) {
        callback(newValue);
      }
    };

    PathObserver.prototype.dispose = function dispose() {
      if (this.disposeLeft) {
        this.disposeLeft();
      }

      if (this.disposeRight) {
        this.disposeRight();
      }
    };

    return PathObserver;
  })();

  exports.PathObserver = PathObserver;

  var CompositeObserver = (function () {
    function CompositeObserver(observers, evaluate) {
      var _this6 = this;

      _classCallCheck(this, CompositeObserver);

      this.subscriptions = new Array(observers.length);
      this.evaluate = evaluate;

      for (var i = 0, ii = observers.length; i < ii; i++) {
        this.subscriptions[i] = observers[i].subscribe(function (newValue) {
          _this6.notify(_this6.evaluate());
        });
      }
    }

    CompositeObserver.prototype.subscribe = function subscribe(callback) {
      var that = this;
      that.callback = callback;
      return function () {
        that.callback = null;
      };
    };

    CompositeObserver.prototype.notify = function notify(newValue) {
      var callback = this.callback;

      if (callback) {
        callback(newValue);
      }
    };

    CompositeObserver.prototype.dispose = function dispose() {
      var subscriptions = this.subscriptions;

      var i = subscriptions.length;
      while (i--) {
        subscriptions[i]();
      }
    };

    return CompositeObserver;
  })();

  exports.CompositeObserver = CompositeObserver;

  var Expression = (function () {
    function Expression() {
      _classCallCheck(this, Expression);

      this.isChain = false;
      this.isAssignable = false;
    }

    Expression.prototype.evaluate = function evaluate(scope, valueConverters, args) {
      throw new Error('Cannot evaluate ' + this);
    };

    Expression.prototype.assign = function assign(scope, value, valueConverters) {
      throw new Error('Cannot assign to ' + this);
    };

    Expression.prototype.toString = function toString() {
      return Unparser.unparse(this);
    };

    return Expression;
  })();

  exports.Expression = Expression;

  var Chain = (function (_Expression) {
    function Chain(expressions) {
      _classCallCheck(this, Chain);

      _Expression.call(this);

      this.expressions = expressions;
      this.isChain = true;
    }

    _inherits(Chain, _Expression);

    Chain.prototype.evaluate = function evaluate(scope, valueConverters) {
      var result,
          expressions = this.expressions,
          length = expressions.length,
          i,
          last;

      for (i = 0; i < length; ++i) {
        last = expressions[i].evaluate(scope, valueConverters);

        if (last !== null) {
          result = last;
        }
      }

      return result;
    };

    Chain.prototype.accept = function accept(visitor) {
      visitor.visitChain(this);
    };

    return Chain;
  })(Expression);

  exports.Chain = Chain;

  var ValueConverter = (function (_Expression2) {
    function ValueConverter(expression, name, args, allArgs) {
      _classCallCheck(this, ValueConverter);

      _Expression2.call(this);

      this.expression = expression;
      this.name = name;
      this.args = args;
      this.allArgs = allArgs;
    }

    _inherits(ValueConverter, _Expression2);

    ValueConverter.prototype.evaluate = function evaluate(scope, valueConverters) {
      var converter = valueConverters(this.name);
      if (!converter) {
        throw new Error('No ValueConverter named "' + this.name + '" was found!');
      }

      if ('toView' in converter) {
        return converter.toView.apply(converter, evalList(scope, this.allArgs, valueConverters));
      }

      return this.allArgs[0].evaluate(scope, valueConverters);
    };

    ValueConverter.prototype.assign = function assign(scope, value, valueConverters) {
      var converter = valueConverters(this.name);
      if (!converter) {
        throw new Error('No ValueConverter named "' + this.name + '" was found!');
      }

      if ('fromView' in converter) {
        value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, valueConverters)));
      }

      return this.allArgs[0].assign(scope, value, valueConverters);
    };

    ValueConverter.prototype.accept = function accept(visitor) {
      visitor.visitValueConverter(this);
    };

    ValueConverter.prototype.connect = function connect(binding, scope) {
      var _this7 = this;

      var observer,
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;

      for (i = 0, ii = this.allArgs.length; i < ii; ++i) {
        exp = this.allArgs[i];
        expInfo = exp.connect(binding, scope);

        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this7.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: this.evaluate(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };

    return ValueConverter;
  })(Expression);

  exports.ValueConverter = ValueConverter;

  var Assign = (function (_Expression3) {
    function Assign(target, value) {
      _classCallCheck(this, Assign);

      _Expression3.call(this);

      this.target = target;
      this.value = value;
    }

    _inherits(Assign, _Expression3);

    Assign.prototype.evaluate = function evaluate(scope, valueConverters) {
      return this.target.assign(scope, this.value.evaluate(scope, valueConverters));
    };

    Assign.prototype.accept = function accept(vistor) {
      vistor.visitAssign(this);
    };

    Assign.prototype.connect = function connect(binding, scope) {
      return { value: this.evaluate(scope, binding.valueConverterLookupFunction) };
    };

    return Assign;
  })(Expression);

  exports.Assign = Assign;

  var Conditional = (function (_Expression4) {
    function Conditional(condition, yes, no) {
      _classCallCheck(this, Conditional);

      _Expression4.call(this);

      this.condition = condition;
      this.yes = yes;
      this.no = no;
    }

    _inherits(Conditional, _Expression4);

    Conditional.prototype.evaluate = function evaluate(scope, valueConverters) {
      return !!this.condition.evaluate(scope) ? this.yes.evaluate(scope) : this.no.evaluate(scope);
    };

    Conditional.prototype.accept = function accept(visitor) {
      visitor.visitConditional(this);
    };

    Conditional.prototype.connect = function connect(binding, scope) {
      var _this8 = this;

      var conditionInfo = this.condition.connect(binding, scope),
          yesInfo = this.yes.connect(binding, scope),
          noInfo = this.no.connect(binding, scope),
          childObservers = [],
          observer;

      if (conditionInfo.observer) {
        childObservers.push(conditionInfo.observer);
      }

      if (yesInfo.observer) {
        childObservers.push(yesInfo.observer);
      }

      if (noInfo.observer) {
        childObservers.push(noInfo.observer);
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this8.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: !!conditionInfo.value ? yesInfo.value : noInfo.value,
        observer: observer
      };
    };

    return Conditional;
  })(Expression);

  exports.Conditional = Conditional;

  var AccessScope = (function (_Expression5) {
    function AccessScope(name) {
      _classCallCheck(this, AccessScope);

      _Expression5.call(this);

      this.name = name;
      this.isAssignable = true;
    }

    _inherits(AccessScope, _Expression5);

    AccessScope.prototype.evaluate = function evaluate(scope, valueConverters) {
      return scope[this.name];
    };

    AccessScope.prototype.assign = function assign(scope, value) {
      return scope[this.name] = value;
    };

    AccessScope.prototype.accept = function accept(visitor) {
      visitor.visitAccessScope(this);
    };

    AccessScope.prototype.connect = function connect(binding, scope) {
      var observer = binding.getObserver(scope, this.name);

      return {
        value: observer.getValue(),
        observer: observer
      };
    };

    return AccessScope;
  })(Expression);

  exports.AccessScope = AccessScope;

  var AccessMember = (function (_Expression6) {
    function AccessMember(object, name) {
      _classCallCheck(this, AccessMember);

      _Expression6.call(this);

      this.object = object;
      this.name = name;
      this.isAssignable = true;
    }

    _inherits(AccessMember, _Expression6);

    AccessMember.prototype.evaluate = function evaluate(scope, valueConverters) {
      var instance = this.object.evaluate(scope, valueConverters);
      return instance === null || instance === undefined ? instance : instance[this.name];
    };

    AccessMember.prototype.assign = function assign(scope, value) {
      var instance = this.object.evaluate(scope);

      if (instance === null || instance === undefined) {
        instance = {};
        this.object.assign(scope, instance);
      }

      return instance[this.name] = value;
    };

    AccessMember.prototype.accept = function accept(visitor) {
      visitor.visitAccessMember(this);
    };

    AccessMember.prototype.connect = function connect(binding, scope) {
      var _this9 = this;

      var info = this.object.connect(binding, scope),
          objectInstance = info.value,
          objectObserver = info.observer,
          observer;

      if (objectObserver) {
        observer = new PathObserver(objectObserver, function (value) {
          if (value == null || value == undefined) {
            return value;
          }

          return binding.getObserver(value, _this9.name);
        }, objectInstance);
      } else {
        observer = binding.getObserver(objectInstance, this.name);
      }

      return {
        value: objectInstance == null ? null : objectInstance[this.name],
        observer: observer
      };
    };

    return AccessMember;
  })(Expression);

  exports.AccessMember = AccessMember;

  var AccessKeyed = (function (_Expression7) {
    function AccessKeyed(object, key) {
      _classCallCheck(this, AccessKeyed);

      _Expression7.call(this);

      this.object = object;
      this.key = key;
      this.isAssignable = true;
    }

    _inherits(AccessKeyed, _Expression7);

    AccessKeyed.prototype.evaluate = function evaluate(scope, valueConverters) {
      var instance = this.object.evaluate(scope, valueConverters);
      var lookup = this.key.evaluate(scope, valueConverters);
      return getKeyed(instance, lookup);
    };

    AccessKeyed.prototype.assign = function assign(scope, value) {
      var instance = this.object.evaluate(scope);
      var lookup = this.key.evaluate(scope);
      return setKeyed(instance, lookup, value);
    };

    AccessKeyed.prototype.accept = function accept(visitor) {
      visitor.visitAccessKeyed(this);
    };

    AccessKeyed.prototype.connect = function connect(binding, scope) {
      var _this10 = this;

      var objectInfo = this.object.connect(binding, scope),
          keyInfo = this.key.connect(binding, scope),
          observer = new AccessKeyedObserver(objectInfo, keyInfo, binding.observerLocator, function () {
        return _this10.evaluate(scope, binding.valueConverterLookupFunction);
      });

      return {
        value: this.evaluate(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };

    return AccessKeyed;
  })(Expression);

  exports.AccessKeyed = AccessKeyed;

  var CallScope = (function (_Expression8) {
    function CallScope(name, args) {
      _classCallCheck(this, CallScope);

      _Expression8.call(this);

      this.name = name;
      this.args = args;
    }

    _inherits(CallScope, _Expression8);

    CallScope.prototype.evaluate = function evaluate(scope, valueConverters, args) {
      args = args || evalList(scope, this.args, valueConverters);
      return ensureFunctionFromMap(scope, this.name).apply(scope, args);
    };

    CallScope.prototype.accept = function accept(visitor) {
      visitor.visitCallScope(this);
    };

    CallScope.prototype.connect = function connect(binding, scope) {
      var _this11 = this;

      var observer,
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;

      for (i = 0, ii = this.args.length; i < ii; ++i) {
        exp = this.args[i];
        expInfo = exp.connect(binding, scope);

        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this11.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: this.evaluate(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };

    return CallScope;
  })(Expression);

  exports.CallScope = CallScope;

  var CallMember = (function (_Expression9) {
    function CallMember(object, name, args) {
      _classCallCheck(this, CallMember);

      _Expression9.call(this);

      this.object = object;
      this.name = name;
      this.args = args;
    }

    _inherits(CallMember, _Expression9);

    CallMember.prototype.evaluate = function evaluate(scope, valueConverters, args) {
      var instance = this.object.evaluate(scope, valueConverters);
      args = args || evalList(scope, this.args, valueConverters);
      return ensureFunctionFromMap(instance, this.name).apply(instance, args);
    };

    CallMember.prototype.accept = function accept(visitor) {
      visitor.visitCallMember(this);
    };

    CallMember.prototype.connect = function connect(binding, scope) {
      var _this12 = this;

      var observer,
          objectInfo = this.object.connect(binding, scope),
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;

      if (objectInfo.observer) {
        childObservers.push(objectInfo.observer);
      }

      for (i = 0, ii = this.args.length; i < ii; ++i) {
        exp = this.args[i];
        expInfo = exp.connect(binding, scope);

        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this12.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: this.evaluate(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };

    return CallMember;
  })(Expression);

  exports.CallMember = CallMember;

  var CallFunction = (function (_Expression10) {
    function CallFunction(func, args) {
      _classCallCheck(this, CallFunction);

      _Expression10.call(this);

      this.func = func;
      this.args = args;
    }

    _inherits(CallFunction, _Expression10);

    CallFunction.prototype.evaluate = function evaluate(scope, valueConverters, args) {
      var func = this.func.evaluate(scope, valueConverters);

      if (typeof func !== 'function') {
        throw new Error(this.func + ' is not a function');
      } else {
        return func.apply(null, args || evalList(scope, this.args, valueConverters));
      }
    };

    CallFunction.prototype.accept = function accept(visitor) {
      visitor.visitCallFunction(this);
    };

    CallFunction.prototype.connect = function connect(binding, scope) {
      var _this13 = this;

      var observer,
          funcInfo = this.func.connect(binding, scope),
          childObservers = [],
          i,
          ii,
          exp,
          expInfo;

      if (funcInfo.observer) {
        childObservers.push(funcInfo.observer);
      }

      for (i = 0, ii = this.args.length; i < ii; ++i) {
        exp = this.args[i];
        expInfo = exp.connect(binding, scope);

        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this13.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: this.evaluate(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };

    return CallFunction;
  })(Expression);

  exports.CallFunction = CallFunction;

  var Binary = (function (_Expression11) {
    function Binary(operation, left, right) {
      _classCallCheck(this, Binary);

      _Expression11.call(this);

      this.operation = operation;
      this.left = left;
      this.right = right;
    }

    _inherits(Binary, _Expression11);

    Binary.prototype.evaluate = function evaluate(scope, valueConverters) {
      var left = this.left.evaluate(scope);

      switch (this.operation) {
        case '&&':
          return left && this.right.evaluate(scope);
        case '||':
          return left || this.right.evaluate(scope);
      }

      var right = this.right.evaluate(scope);

      switch (this.operation) {
        case '==':
          return left == right;
        case '===':
          return left === right;
        case '!=':
          return left != right;
        case '!==':
          return left !== right;
      }

      if (left === null || right === null) {
        switch (this.operation) {
          case '+':
            if (left != null) return left;
            if (right != null) return right;
            return 0;
          case '-':
            if (left != null) return left;
            if (right != null) return 0 - right;
            return 0;
        }

        return null;
      }

      switch (this.operation) {
        case '+':
          return autoConvertAdd(left, right);
        case '-':
          return left - right;
        case '*':
          return left * right;
        case '/':
          return left / right;
        case '%':
          return left % right;
        case '<':
          return left < right;
        case '>':
          return left > right;
        case '<=':
          return left <= right;
        case '>=':
          return left >= right;
        case '^':
          return left ^ right;
        case '&':
          return left & right;
      }

      throw new Error('Internal error [' + this.operation + '] not handled');
    };

    Binary.prototype.accept = function accept(visitor) {
      visitor.visitBinary(this);
    };

    Binary.prototype.connect = function connect(binding, scope) {
      var _this14 = this;

      var leftInfo = this.left.connect(binding, scope),
          rightInfo = this.right.connect(binding, scope),
          childObservers = [],
          observer;

      if (leftInfo.observer) {
        childObservers.push(leftInfo.observer);
      }

      if (rightInfo.observer) {
        childObservers.push(rightInfo.observer);
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this14.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: this.evaluate(scope, binding.valueConverterLookupFunction),
        observer: observer
      };
    };

    return Binary;
  })(Expression);

  exports.Binary = Binary;

  var PrefixNot = (function (_Expression12) {
    function PrefixNot(operation, expression) {
      _classCallCheck(this, PrefixNot);

      _Expression12.call(this);

      this.operation = operation;
      this.expression = expression;
    }

    _inherits(PrefixNot, _Expression12);

    PrefixNot.prototype.evaluate = function evaluate(scope, valueConverters) {
      return !this.expression.evaluate(scope);
    };

    PrefixNot.prototype.accept = function accept(visitor) {
      visitor.visitPrefix(this);
    };

    PrefixNot.prototype.connect = function connect(binding, scope) {
      var _this15 = this;

      var info = this.expression.connect(binding, scope),
          observer;

      if (info.observer) {
        observer = new CompositeObserver([info.observer], function () {
          return _this15.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: !info.value,
        observer: observer
      };
    };

    return PrefixNot;
  })(Expression);

  exports.PrefixNot = PrefixNot;

  var LiteralPrimitive = (function (_Expression13) {
    function LiteralPrimitive(value) {
      _classCallCheck(this, LiteralPrimitive);

      _Expression13.call(this);

      this.value = value;
    }

    _inherits(LiteralPrimitive, _Expression13);

    LiteralPrimitive.prototype.evaluate = function evaluate(scope, valueConverters) {
      return this.value;
    };

    LiteralPrimitive.prototype.accept = function accept(visitor) {
      visitor.visitLiteralPrimitive(this);
    };

    LiteralPrimitive.prototype.connect = function connect(binding, scope) {
      return { value: this.value };
    };

    return LiteralPrimitive;
  })(Expression);

  exports.LiteralPrimitive = LiteralPrimitive;

  var LiteralString = (function (_Expression14) {
    function LiteralString(value) {
      _classCallCheck(this, LiteralString);

      _Expression14.call(this);

      this.value = value;
    }

    _inherits(LiteralString, _Expression14);

    LiteralString.prototype.evaluate = function evaluate(scope, valueConverters) {
      return this.value;
    };

    LiteralString.prototype.accept = function accept(visitor) {
      visitor.visitLiteralString(this);
    };

    LiteralString.prototype.connect = function connect(binding, scope) {
      return { value: this.value };
    };

    return LiteralString;
  })(Expression);

  exports.LiteralString = LiteralString;

  var LiteralArray = (function (_Expression15) {
    function LiteralArray(elements) {
      _classCallCheck(this, LiteralArray);

      _Expression15.call(this);

      this.elements = elements;
    }

    _inherits(LiteralArray, _Expression15);

    LiteralArray.prototype.evaluate = function evaluate(scope, valueConverters) {
      var elements = this.elements,
          length = elements.length,
          result = [],
          i;

      for (i = 0; i < length; ++i) {
        result[i] = elements[i].evaluate(scope, valueConverters);
      }

      return result;
    };

    LiteralArray.prototype.accept = function accept(visitor) {
      visitor.visitLiteralArray(this);
    };

    LiteralArray.prototype.connect = function connect(binding, scope) {
      var _this16 = this;

      var observer,
          childObservers = [],
          results = [],
          i,
          ii,
          exp,
          expInfo;

      for (i = 0, ii = this.elements.length; i < ii; ++i) {
        exp = this.elements[i];
        expInfo = exp.connect(binding, scope);

        if (expInfo.observer) {
          childObservers.push(expInfo.observer);
        }

        results[i] = expInfo.value;
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this16.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: results,
        observer: observer
      };
    };

    return LiteralArray;
  })(Expression);

  exports.LiteralArray = LiteralArray;

  var LiteralObject = (function (_Expression16) {
    function LiteralObject(keys, values) {
      _classCallCheck(this, LiteralObject);

      _Expression16.call(this);

      this.keys = keys;
      this.values = values;
    }

    _inherits(LiteralObject, _Expression16);

    LiteralObject.prototype.evaluate = function evaluate(scope, valueConverters) {
      var instance = {},
          keys = this.keys,
          values = this.values,
          length = keys.length,
          i;

      for (i = 0; i < length; ++i) {
        instance[keys[i]] = values[i].evaluate(scope, valueConverters);
      }

      return instance;
    };

    LiteralObject.prototype.accept = function accept(visitor) {
      visitor.visitLiteralObject(this);
    };

    LiteralObject.prototype.connect = function connect(binding, scope) {
      var _this17 = this;

      var observer,
          childObservers = [],
          instance = {},
          keys = this.keys,
          values = this.values,
          length = keys.length,
          i,
          valueInfo;

      for (i = 0; i < length; ++i) {
        valueInfo = values[i].connect(binding, scope);

        if (valueInfo.observer) {
          childObservers.push(valueInfo.observer);
        }

        instance[keys[i]] = valueInfo.value;
      }

      if (childObservers.length) {
        observer = new CompositeObserver(childObservers, function () {
          return _this17.evaluate(scope, binding.valueConverterLookupFunction);
        });
      }

      return {
        value: instance,
        observer: observer
      };
    };

    return LiteralObject;
  })(Expression);

  exports.LiteralObject = LiteralObject;

  var Unparser = (function () {
    function Unparser(buffer) {
      _classCallCheck(this, Unparser);

      this.buffer = buffer;
    }

    Unparser.unparse = function unparse(expression) {
      var buffer = [],
          visitor = new Unparser(buffer);

      expression.accept(visitor);

      return buffer.join('');
    };

    Unparser.prototype.write = function write(text) {
      this.buffer.push(text);
    };

    Unparser.prototype.writeArgs = function writeArgs(args) {
      var i, length;

      this.write('(');

      for (i = 0, length = args.length; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        args[i].accept(this);
      }

      this.write(')');
    };

    Unparser.prototype.visitChain = function visitChain(chain) {
      var expressions = chain.expressions,
          length = expressions.length,
          i;

      for (i = 0; i < length; ++i) {
        if (i !== 0) {
          this.write(';');
        }

        expressions[i].accept(this);
      }
    };

    Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
      var args = converter.args,
          length = args.length,
          i;

      this.write('(');
      converter.expression.accept(this);
      this.write('|' + converter.name);

      for (i = 0; i < length; ++i) {
        this.write(' :');
        args[i].accept(this);
      }

      this.write(')');
    };

    Unparser.prototype.visitAssign = function visitAssign(assign) {
      assign.target.accept(this);
      this.write('=');
      assign.value.accept(this);
    };

    Unparser.prototype.visitConditional = function visitConditional(conditional) {
      conditional.condition.accept(this);
      this.write('?');
      conditional.yes.accept(this);
      this.write(':');
      conditional.no.accept(this);
    };

    Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
      this.write(access.name);
    };

    Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
      access.object.accept(this);
      this.write('.' + access.name);
    };

    Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
      access.object.accept(this);
      this.write('[');
      access.key.accept(this);
      this.write(']');
    };

    Unparser.prototype.visitCallScope = function visitCallScope(call) {
      this.write(call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
      call.func.accept(this);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallMember = function visitCallMember(call) {
      call.object.accept(this);
      this.write('.' + call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
      this.write('(' + prefix.operation);
      prefix.expression.accept(this);
      this.write(')');
    };

    Unparser.prototype.visitBinary = function visitBinary(binary) {
      this.write('(');
      binary.left.accept(this);
      this.write(binary.operation);
      binary.right.accept(this);
      this.write(')');
    };

    Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
      this.write('' + literal.value);
    };

    Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
      var elements = literal.elements,
          length = elements.length,
          i;

      this.write('[');

      for (i = 0; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        elements[i].accept(this);
      }

      this.write(']');
    };

    Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
      var keys = literal.keys,
          values = literal.values,
          length = keys.length,
          i;

      this.write('{');

      for (i = 0; i < length; ++i) {
        if (i !== 0) {
          this.write(',');
        }

        this.write('\'' + keys[i] + '\':');
        values[i].accept(this);
      }

      this.write('}');
    };

    Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
      var escaped = literal.value.replace(/'/g, '\'');
      this.write('\'' + escaped + '\'');
    };

    return Unparser;
  })();

  exports.Unparser = Unparser;

  var evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];

  function evalList(scope, list, valueConverters) {
    var length = list.length,
        cacheLength,
        i;

    for (cacheLength = evalListCache.length; cacheLength <= length; ++cacheLength) {
      evalListCache.push([]);
    }

    var result = evalListCache[length];

    for (i = 0; i < length; ++i) {
      result[i] = list[i].evaluate(scope, valueConverters);
    }

    return result;
  }

  function autoConvertAdd(a, b) {
    if (a != null && b != null) {
      if (typeof a == 'string' && typeof b != 'string') {
        return a + b.toString();
      }

      if (typeof a != 'string' && typeof b == 'string') {
        return a.toString() + b;
      }

      return a + b;
    }

    if (a != null) {
      return a;
    }

    if (b != null) {
      return b;
    }

    return 0;
  }

  function ensureFunctionFromMap(obj, name) {
    var func = obj[name];

    if (typeof func === 'function') {
      return func;
    }

    if (func === null) {
      throw new Error('Undefined function ' + name);
    } else {
      throw new Error(name + ' is not a function');
    }
  }

  function getKeyed(obj, key) {
    if (Array.isArray(obj)) {
      return obj[parseInt(key)];
    } else if (obj) {
      return obj[key];
    } else if (obj === null) {
      throw new Error('Accessing null object');
    } else {
      return obj[key];
    }
  }

  function setKeyed(obj, key, value) {
    if (Array.isArray(obj)) {
      var index = parseInt(key);

      if (obj.length <= index) {
        obj.length = index + 1;
      }

      obj[index] = value;
    } else {
      obj[key] = value;
    }

    return value;
  }

  var bindingMode = {
    oneTime: 0,
    oneWay: 1,
    twoWay: 2
  };

  exports.bindingMode = bindingMode;

  var Token = (function () {
    function Token(index, text) {
      _classCallCheck(this, Token);

      this.index = index;
      this.text = text;
    }

    Token.prototype.withOp = function withOp(op) {
      this.opKey = op;
      return this;
    };

    Token.prototype.withGetterSetter = function withGetterSetter(key) {
      this.key = key;
      return this;
    };

    Token.prototype.withValue = function withValue(value) {
      this.value = value;
      return this;
    };

    Token.prototype.toString = function toString() {
      return 'Token(' + this.text + ')';
    };

    return Token;
  })();

  exports.Token = Token;

  var Lexer = (function () {
    function Lexer() {
      _classCallCheck(this, Lexer);
    }

    Lexer.prototype.lex = function lex(text) {
      var scanner = new Scanner(text);
      var tokens = [];
      var token = scanner.scanToken();

      while (token) {
        tokens.push(token);
        token = scanner.scanToken();
      }

      return tokens;
    };

    return Lexer;
  })();

  exports.Lexer = Lexer;

  var Scanner = (function () {
    function Scanner(input) {
      _classCallCheck(this, Scanner);

      this.input = input;
      this.length = input.length;
      this.peek = 0;
      this.index = -1;

      this.advance();
    }

    Scanner.prototype.scanToken = function scanToken() {
      while (this.peek <= $SPACE) {
        if (++this.index >= this.length) {
          this.peek = $EOF;
          return null;
        } else {
          this.peek = this.input.charCodeAt(this.index);
        }
      }

      if (isIdentifierStart(this.peek)) {
        return this.scanIdentifier();
      }

      if (isDigit(this.peek)) {
        return this.scanNumber(this.index);
      }

      var start = this.index;

      switch (this.peek) {
        case $PERIOD:
          this.advance();
          return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, '.');
        case $LPAREN:
        case $RPAREN:
        case $LBRACE:
        case $RBRACE:
        case $LBRACKET:
        case $RBRACKET:
        case $COMMA:
        case $COLON:
        case $SEMICOLON:
          return this.scanCharacter(start, String.fromCharCode(this.peek));
        case $SQ:
        case $DQ:
          return this.scanString();
        case $PLUS:
        case $MINUS:
        case $STAR:
        case $SLASH:
        case $PERCENT:
        case $CARET:
        case $QUESTION:
          return this.scanOperator(start, String.fromCharCode(this.peek));
        case $LT:
        case $GT:
        case $BANG:
        case $EQ:
          return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), '=');
        case $AMPERSAND:
          return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
        case $BAR:
          return this.scanComplexOperator(start, $BAR, '|', '|');
        case $NBSP:
          while (isWhitespace(this.peek)) {
            this.advance();
          }

          return this.scanToken();
      }

      var character = String.fromCharCode(this.peek);
      this.error('Unexpected character [' + character + ']');
      return null;
    };

    Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
      assert(this.peek === text.charCodeAt(0));
      this.advance();
      return new Token(start, text);
    };

    Scanner.prototype.scanOperator = function scanOperator(start, text) {
      assert(this.peek === text.charCodeAt(0));
      assert(OPERATORS.indexOf(text) !== -1);
      this.advance();
      return new Token(start, text).withOp(text);
    };

    Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
      assert(this.peek === one.charCodeAt(0));
      this.advance();

      var text = one;

      if (this.peek === code) {
        this.advance();
        text += two;
      }

      if (this.peek === code) {
        this.advance();
        text += two;
      }

      assert(OPERATORS.indexOf(text) != -1);

      return new Token(start, text).withOp(text);
    };

    Scanner.prototype.scanIdentifier = function scanIdentifier() {
      assert(isIdentifierStart(this.peek));
      var start = this.index;

      this.advance();

      while (isIdentifierPart(this.peek)) {
        this.advance();
      }

      var text = this.input.substring(start, this.index);
      var result = new Token(start, text);

      if (OPERATORS.indexOf(text) !== -1) {
        result.withOp(text);
      } else {
        result.withGetterSetter(text);
      }

      return result;
    };

    Scanner.prototype.scanNumber = function scanNumber(start) {
      assert(isDigit(this.peek));
      var simple = this.index === start;
      this.advance();

      while (true) {
        if (isDigit(this.peek)) {} else if (this.peek === $PERIOD) {
          simple = false;
        } else if (isExponentStart(this.peek)) {
          this.advance();

          if (isExponentSign(this.peek)) {
            this.advance();
          }

          if (!isDigit(this.peek)) {
            this.error('Invalid exponent', -1);
          }

          simple = false;
        } else {
          break;
        }

        this.advance();
      }

      var text = this.input.substring(start, this.index);
      var value = simple ? parseInt(text) : parseFloat(text);
      return new Token(start, text).withValue(value);
    };

    Scanner.prototype.scanString = function scanString() {
      assert(this.peek === $SQ || this.peek === $DQ);

      var start = this.index;
      var quote = this.peek;

      this.advance();

      var buffer;
      var marker = this.index;

      while (this.peek !== quote) {
        if (this.peek === $BACKSLASH) {
          if (buffer === null) {
            buffer = [];
          }

          buffer.push(this.input.substring(marker, this.index));
          this.advance();

          var unescaped;

          if (this.peek === $u) {
            var hex = this.input.substring(this.index + 1, this.index + 5);

            if (!/[A-Z0-9]{4}/.test(hex)) {
              this.error('Invalid unicode escape [\\u' + hex + ']');
            }

            unescaped = parseInt(hex, 16);

            for (var i = 0; i < 5; ++i) {
              this.advance();
            }
          } else {
            unescaped = decodeURIComponent(this.peek);
            this.advance();
          }

          buffer.push(String.fromCharCode(unescaped));
          marker = this.index;
        } else if (this.peek === $EOF) {
          this.error('Unterminated quote');
        } else {
          this.advance();
        }
      }

      var last = this.input.substring(marker, this.index);
      this.advance();
      var text = this.input.substring(start, this.index);

      var unescaped = last;

      if (buffer != null) {
        buffer.push(last);
        unescaped = buffer.join('');
      }

      return new Token(start, text).withValue(unescaped);
    };

    Scanner.prototype.advance = function advance() {
      if (++this.index >= this.length) {
        this.peek = $EOF;
      } else {
        this.peek = this.input.charCodeAt(this.index);
      }
    };

    Scanner.prototype.error = function error(message) {
      var offset = arguments[1] === undefined ? 0 : arguments[1];

      var position = this.index + offset;
      throw new Error('Lexer Error: ' + message + ' at column ' + position + ' in expression [' + this.input + ']');
    };

    return Scanner;
  })();

  exports.Scanner = Scanner;

  var OPERATORS = ['undefined', 'null', 'true', 'false', '+', '-', '*', '/', '%', '^', '=', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?'];

  var $EOF = 0;
  var $TAB = 9;
  var $LF = 10;
  var $VTAB = 11;
  var $FF = 12;
  var $CR = 13;
  var $SPACE = 32;
  var $BANG = 33;
  var $DQ = 34;
  var $$ = 36;
  var $PERCENT = 37;
  var $AMPERSAND = 38;
  var $SQ = 39;
  var $LPAREN = 40;
  var $RPAREN = 41;
  var $STAR = 42;
  var $PLUS = 43;
  var $COMMA = 44;
  var $MINUS = 45;
  var $PERIOD = 46;
  var $SLASH = 47;
  var $COLON = 58;
  var $SEMICOLON = 59;
  var $LT = 60;
  var $EQ = 61;
  var $GT = 62;
  var $QUESTION = 63;

  var $0 = 48;
  var $9 = 57;

  var $A = 65;
  var $E = 69;
  var $Z = 90;

  var $LBRACKET = 91;
  var $BACKSLASH = 92;
  var $RBRACKET = 93;
  var $CARET = 94;
  var $_ = 95;

  var $a = 97;
  var $e = 101;
  var $f = 102;
  var $n = 110;
  var $r = 114;
  var $t = 116;
  var $u = 117;
  var $v = 118;
  var $z = 122;

  var $LBRACE = 123;
  var $BAR = 124;
  var $RBRACE = 125;
  var $NBSP = 160;

  function isWhitespace(code) {
    return code >= $TAB && code <= $SPACE || code === $NBSP;
  }

  function isIdentifierStart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
  }

  function isIdentifierPart(code) {
    return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
  }

  function isDigit(code) {
    return $0 <= code && code <= $9;
  }

  function isExponentStart(code) {
    return code === $e || code === $E;
  }

  function isExponentSign(code) {
    return code === $MINUS || code === $PLUS;
  }

  function unescape(code) {
    switch (code) {
      case $n:
        return $LF;
      case $f:
        return $FF;
      case $r:
        return $CR;
      case $t:
        return $TAB;
      case $v:
        return $VTAB;
      default:
        return code;
    }
  }

  function assert(condition, message) {
    if (!condition) {
      throw message || 'Assertion failed';
    }
  }

  var EOF = new Token(-1, null);

  var Parser = (function () {
    function Parser() {
      _classCallCheck(this, Parser);

      this.cache = {};
      this.lexer = new Lexer();
    }

    Parser.prototype.parse = function parse(input) {
      input = input || '';

      return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
    };

    return Parser;
  })();

  exports.Parser = Parser;

  var ParserImplementation = (function () {
    function ParserImplementation(lexer, input) {
      _classCallCheck(this, ParserImplementation);

      this.index = 0;
      this.input = input;
      this.tokens = lexer.lex(input);
    }

    ParserImplementation.prototype.parseChain = function parseChain() {
      var isChain = false,
          expressions = [];

      while (this.optional(';')) {
        isChain = true;
      }

      while (this.index < this.tokens.length) {
        if (this.peek.text === ')' || this.peek.text === '}' || this.peek.text === ']') {
          this.error('Unconsumed token ' + this.peek.text);
        }

        var expr = this.parseValueConverter();
        expressions.push(expr);

        while (this.optional(';')) {
          isChain = true;
        }

        if (isChain && expr instanceof ValueConverter) {
          this.error('cannot have a value converter in a chain');
        }
      }

      return expressions.length === 1 ? expressions[0] : new Chain(expressions);
    };

    ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
      var result = this.parseExpression();

      while (this.optional('|')) {
        var name = this.peek.text,
            args = [];

        this.advance();

        while (this.optional(':')) {
          args.push(this.parseExpression());
        }

        result = new ValueConverter(result, name, args, [result].concat(args));
      }

      return result;
    };

    ParserImplementation.prototype.parseExpression = function parseExpression() {
      var start = this.peek.index,
          result = this.parseConditional();

      while (this.peek.text === '=') {
        if (!result.isAssignable) {
          var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
          var expression = this.input.substring(start, end);

          this.error('Expression ' + expression + ' is not assignable');
        }

        this.expect('=');
        result = new Assign(result, this.parseConditional());
      }

      return result;
    };

    ParserImplementation.prototype.parseConditional = function parseConditional() {
      var start = this.peek.index,
          result = this.parseLogicalOr();

      if (this.optional('?')) {
        var yes = this.parseExpression();

        if (!this.optional(':')) {
          var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
          var expression = this.input.substring(start, end);

          this.error('Conditional expression ' + expression + ' requires all 3 expressions');
        }

        var no = this.parseExpression();
        result = new Conditional(result, yes, no);
      }

      return result;
    };

    ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
      var result = this.parseLogicalAnd();

      while (this.optional('||')) {
        result = new Binary('||', result, this.parseLogicalAnd());
      }

      return result;
    };

    ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
      var result = this.parseEquality();

      while (this.optional('&&')) {
        result = new Binary('&&', result, this.parseEquality());
      }

      return result;
    };

    ParserImplementation.prototype.parseEquality = function parseEquality() {
      var result = this.parseRelational();

      while (true) {
        if (this.optional('==')) {
          result = new Binary('==', result, this.parseRelational());
        } else if (this.optional('!=')) {
          result = new Binary('!=', result, this.parseRelational());
        } else if (this.optional('===')) {
          result = new Binary('===', result, this.parseRelational());
        } else if (this.optional('!==')) {
          result = new Binary('!==', result, this.parseRelational());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parseRelational = function parseRelational() {
      var result = this.parseAdditive();

      while (true) {
        if (this.optional('<')) {
          result = new Binary('<', result, this.parseAdditive());
        } else if (this.optional('>')) {
          result = new Binary('>', result, this.parseAdditive());
        } else if (this.optional('<=')) {
          result = new Binary('<=', result, this.parseAdditive());
        } else if (this.optional('>=')) {
          result = new Binary('>=', result, this.parseAdditive());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parseAdditive = function parseAdditive() {
      var result = this.parseMultiplicative();

      while (true) {
        if (this.optional('+')) {
          result = new Binary('+', result, this.parseMultiplicative());
        } else if (this.optional('-')) {
          result = new Binary('-', result, this.parseMultiplicative());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
      var result = this.parsePrefix();

      while (true) {
        if (this.optional('*')) {
          result = new Binary('*', result, this.parsePrefix());
        } else if (this.optional('%')) {
          result = new Binary('%', result, this.parsePrefix());
        } else if (this.optional('/')) {
          result = new Binary('/', result, this.parsePrefix());
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parsePrefix = function parsePrefix() {
      if (this.optional('+')) {
        return this.parsePrefix();
      } else if (this.optional('-')) {
        return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
      } else if (this.optional('!')) {
        return new PrefixNot('!', this.parsePrefix());
      } else {
        return this.parseAccessOrCallMember();
      }
    };

    ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
      var result = this.parsePrimary();

      while (true) {
        if (this.optional('.')) {
          var name = this.peek.text;

          this.advance();

          if (this.optional('(')) {
            var args = this.parseExpressionList(')');
            this.expect(')');
            result = new CallMember(result, name, args);
          } else {
            result = new AccessMember(result, name);
          }
        } else if (this.optional('[')) {
          var key = this.parseExpression();
          this.expect(']');
          result = new AccessKeyed(result, key);
        } else if (this.optional('(')) {
          var args = this.parseExpressionList(')');
          this.expect(')');
          result = new CallFunction(result, args);
        } else {
          return result;
        }
      }
    };

    ParserImplementation.prototype.parsePrimary = function parsePrimary() {
      if (this.optional('(')) {
        var result = this.parseExpression();
        this.expect(')');
        return result;
      } else if (this.optional('null') || this.optional('undefined')) {
        return new LiteralPrimitive(null);
      } else if (this.optional('true')) {
        return new LiteralPrimitive(true);
      } else if (this.optional('false')) {
        return new LiteralPrimitive(false);
      } else if (this.optional('[')) {
        var elements = this.parseExpressionList(']');
        this.expect(']');
        return new LiteralArray(elements);
      } else if (this.peek.text == '{') {
        return this.parseObject();
      } else if (this.peek.key != null) {
        return this.parseAccessOrCallScope();
      } else if (this.peek.value != null) {
        var value = this.peek.value;
        this.advance();
        return isNaN(value) ? new LiteralString(value) : new LiteralPrimitive(value);
      } else if (this.index >= this.tokens.length) {
        throw new Error('Unexpected end of expression: ' + this.input);
      } else {
        this.error('Unexpected token ' + this.peek.text);
      }
    };

    ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
      var name = this.peek.key;

      this.advance();

      if (!this.optional('(')) {
        return new AccessScope(name);
      }

      var args = this.parseExpressionList(')');
      this.expect(')');
      return new CallScope(name, args);
    };

    ParserImplementation.prototype.parseObject = function parseObject() {
      var keys = [],
          values = [];

      this.expect('{');

      if (this.peek.text !== '}') {
        do {
          var value = this.peek.value;
          keys.push(typeof value === 'string' ? value : this.peek.text);

          this.advance();
          this.expect(':');

          values.push(this.parseExpression());
        } while (this.optional(','));
      }

      this.expect('}');

      return new LiteralObject(keys, values);
    };

    ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
      var result = [];

      if (this.peek.text != terminator) {
        do {
          result.push(this.parseExpression());
        } while (this.optional(','));
      }

      return result;
    };

    ParserImplementation.prototype.optional = function optional(text) {
      if (this.peek.text === text) {
        this.advance();
        return true;
      }

      return false;
    };

    ParserImplementation.prototype.expect = function expect(text) {
      if (this.peek.text === text) {
        this.advance();
      } else {
        this.error('Missing expected ' + text);
      }
    };

    ParserImplementation.prototype.advance = function advance() {
      this.index++;
    };

    ParserImplementation.prototype.error = function error(message) {
      var location = this.index < this.tokens.length ? 'at column ' + (this.tokens[this.index].index + 1) + ' in' : 'at the end of the expression';

      throw new Error('Parser Error: ' + message + ' ' + location + ' [' + this.input + ']');
    };

    _createClass(ParserImplementation, [{
      key: 'peek',
      get: function get() {
        return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
      }
    }]);

    return ParserImplementation;
  })();

  exports.ParserImplementation = ParserImplementation;

  var mapProto = Map.prototype;

  function _getMapObserver(taskQueue, map) {
    return ModifyMapObserver.create(taskQueue, map);
  }

  var ModifyMapObserver = (function (_ModifyCollectionObserver2) {
    function ModifyMapObserver(taskQueue, map) {
      _classCallCheck(this, ModifyMapObserver);

      _ModifyCollectionObserver2.call(this, taskQueue, map);
    }

    _inherits(ModifyMapObserver, _ModifyCollectionObserver2);

    ModifyMapObserver.create = function create(taskQueue, map) {
      var observer = new ModifyMapObserver(taskQueue, map);

      map['set'] = function () {
        var oldValue = map.get(arguments[0]);
        var type = oldValue ? 'update' : 'add';
        var methodCallResult = mapProto['set'].apply(map, arguments);
        observer.addChangeRecord({
          type: type,
          object: map,
          key: arguments[0],
          oldValue: oldValue
        });
        return methodCallResult;
      };

      map['delete'] = function () {
        var oldValue = map.get(arguments[0]);
        var methodCallResult = mapProto['delete'].apply(map, arguments);
        observer.addChangeRecord({
          type: 'delete',
          object: map,
          key: arguments[0],
          oldValue: oldValue
        });
        return methodCallResult;
      };

      map['clear'] = function () {
        var methodCallResult = mapProto['clear'].apply(map, arguments);
        observer.addChangeRecord({
          type: 'clear',
          object: map
        });
        return methodCallResult;
      };

      return observer;
    };

    return ModifyMapObserver;
  })(ModifyCollectionObserver);

  function findOriginalEventTarget(event) {
    return event.originalTarget || event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target || event.srcElement;
  }

  function handleDelegatedEvent(event) {
    event = event || window.event;

    var target = findOriginalEventTarget(event),
        callback;

    while (target && !callback) {
      if (target.delegatedCallbacks) {
        callback = target.delegatedCallbacks[event.type];
      }

      if (!callback) {
        target = target.parentNode;
      }
    }

    if (callback) {
      callback(event);
    }
  }

  var DelegateHandlerEntry = (function () {
    function DelegateHandlerEntry(eventName) {
      _classCallCheck(this, DelegateHandlerEntry);

      this.eventName = eventName;
      this.count = 0;
    }

    DelegateHandlerEntry.prototype.increment = function increment() {
      this.count++;

      if (this.count === 1) {
        document.addEventListener(this.eventName, handleDelegatedEvent, false);
      }
    };

    DelegateHandlerEntry.prototype.decrement = function decrement() {
      this.count--;

      if (this.count === 0) {
        document.removeEventListener(this.eventName, handleDelegatedEvent);
      }
    };

    return DelegateHandlerEntry;
  })();

  var DefaultEventStrategy = (function () {
    function DefaultEventStrategy() {
      _classCallCheck(this, DefaultEventStrategy);
    }

    DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, delegate) {
      if (delegate) {
        var _ret = (function () {
          var delegatedHandlers = document.delegatedHandlers || (document.delegatedHandlers = {}),
              handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent)),
              delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});

          handlerEntry.increment();
          delegatedCallbacks[targetEvent] = callback;

          return {
            v: function () {
              handlerEntry.decrement();
              delegatedCallbacks[targetEvent] = null;
            }
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      } else {
        target.addEventListener(targetEvent, callback, false);

        return function () {
          target.removeEventListener(targetEvent, callback);
        };
      }
    };

    return DefaultEventStrategy;
  })();

  var EventManager = (function () {
    function EventManager() {
      _classCallCheck(this, EventManager);

      this.elementHandlerLookup = {};
      this.eventStrategyLookup = {};

      this.registerElementConfig({
        tagName: 'input',
        properties: {
          value: ['change', 'input'],
          checked: ['change', 'input'],
          files: ['change', 'input']
        }
      });

      this.registerElementConfig({
        tagName: 'textarea',
        properties: {
          value: ['change', 'input']
        }
      });

      this.registerElementConfig({
        tagName: 'select',
        properties: {
          value: ['change']
        }
      });

      this.registerElementConfig({
        tagName: 'content editable',
        properties: {
          value: ['change', 'input', 'blur', 'keyup', 'paste']
        }
      });

      this.registerElementConfig({
        tagName: 'scrollable element',
        properties: {
          scrollTop: ['scroll'],
          scrollLeft: ['scroll']
        }
      });

      this.defaultEventStrategy = new DefaultEventStrategy();
    }

    EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
      var tagName = config.tagName.toLowerCase(),
          properties = config.properties,
          propertyName;
      this.elementHandlerLookup[tagName] = {};
      for (propertyName in properties) {
        if (properties.hasOwnProperty(propertyName)) {
          this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
        }
      }
    };

    EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
      this.elementHandlerLookup[tagName][propertyName] = {
        subscribe: function subscribe(target, callback) {
          events.forEach(function (changeEvent) {
            target.addEventListener(changeEvent, callback, false);
          });

          return function () {
            events.forEach(function (changeEvent) {
              target.removeEventListener(changeEvent, callback);
            });
          };
        }
      };
    };

    EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
      this.elementHandlerLookup[tagName.toLowerCase()] = handler;
    };

    EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
      this.eventStrategyLookup[eventName] = strategy;
    };

    EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
      var tagName,
          lookup = this.elementHandlerLookup;
      if (target.tagName) {
        tagName = target.tagName.toLowerCase();
        if (lookup[tagName] && lookup[tagName][propertyName]) {
          return lookup[tagName][propertyName];
        }
        if (propertyName === 'textContent' || propertyName === 'innerHTML') {
          return lookup['content editable']['value'];
        }
        if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
          return lookup['scrollable element'][propertyName];
        }
      }

      return null;
    };

    EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callback, delegate) {
      return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callback, delegate);
    };

    return EventManager;
  })();

  exports.EventManager = EventManager;

  var DirtyChecker = (function () {
    function DirtyChecker() {
      _classCallCheck(this, DirtyChecker);

      this.tracked = [];
      this.checkDelay = 120;
    }

    DirtyChecker.prototype.addProperty = function addProperty(property) {
      var tracked = this.tracked;

      tracked.push(property);

      if (tracked.length === 1) {
        this.scheduleDirtyCheck();
      }
    };

    DirtyChecker.prototype.removeProperty = function removeProperty(property) {
      var tracked = this.tracked;
      tracked.splice(tracked.indexOf(property), 1);
    };

    DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
      var _this18 = this;

      setTimeout(function () {
        return _this18.check();
      }, this.checkDelay);
    };

    DirtyChecker.prototype.check = function check() {
      var tracked = this.tracked,
          i = tracked.length;

      while (i--) {
        var current = tracked[i];

        if (current.isDirty()) {
          current.call();
        }
      }

      if (tracked.length) {
        this.scheduleDirtyCheck();
      }
    };

    return DirtyChecker;
  })();

  exports.DirtyChecker = DirtyChecker;

  var DirtyCheckProperty = (function () {
    function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
      _classCallCheck(this, DirtyCheckProperty);

      this.dirtyChecker = dirtyChecker;
      this.obj = obj;
      this.propertyName = propertyName;
      this.callbacks = [];
      this.isSVG = obj instanceof SVGElement;
    }

    DirtyCheckProperty.prototype.getValue = function getValue() {
      return this.obj[this.propertyName];
    };

    DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
      if (this.isSVG) {
        this.obj.setAttributeNS(null, this.propertyName, newValue);
      } else {
        this.obj[this.propertyName] = newValue;
      }
    };

    DirtyCheckProperty.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.oldValue,
          newValue = this.getValue();

      while (i--) {
        callbacks[i](newValue, oldValue);
      }

      this.oldValue = newValue;
    };

    DirtyCheckProperty.prototype.isDirty = function isDirty() {
      return this.oldValue !== this.getValue();
    };

    DirtyCheckProperty.prototype.beginTracking = function beginTracking() {
      this.tracking = true;
      this.oldValue = this.newValue = this.getValue();
      this.dirtyChecker.addProperty(this);
    };

    DirtyCheckProperty.prototype.endTracking = function endTracking() {
      this.tracking = false;
      this.dirtyChecker.removeProperty(this);
    };

    DirtyCheckProperty.prototype.subscribe = function subscribe(callback) {
      var callbacks = this.callbacks,
          that = this;

      callbacks.push(callback);

      if (!this.tracking) {
        this.beginTracking();
      }

      return function () {
        callbacks.splice(callbacks.indexOf(callback), 1);
        if (callbacks.length === 0) {
          that.endTracking();
        }
      };
    };

    return DirtyCheckProperty;
  })();

  exports.DirtyCheckProperty = DirtyCheckProperty;

  var SetterObserver = (function () {
    function SetterObserver(taskQueue, obj, propertyName) {
      _classCallCheck(this, SetterObserver);

      this.taskQueue = taskQueue;
      this.obj = obj;
      this.propertyName = propertyName;
      this.callbacks = [];
      this.queued = false;
      this.observing = false;
    }

    SetterObserver.prototype.getValue = function getValue() {
      return this.obj[this.propertyName];
    };

    SetterObserver.prototype.setValue = function setValue(newValue) {
      this.obj[this.propertyName] = newValue;
    };

    SetterObserver.prototype.getterValue = function getterValue() {
      return this.currentValue;
    };

    SetterObserver.prototype.setterValue = function setterValue(newValue) {
      var oldValue = this.currentValue;

      if (oldValue !== newValue) {
        if (!this.queued) {
          this.oldValue = oldValue;
          this.queued = true;
          this.taskQueue.queueMicroTask(this);
        }

        this.currentValue = newValue;
      }
    };

    SetterObserver.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.oldValue,
          newValue = this.currentValue;

      this.queued = false;

      while (i--) {
        callbacks[i](newValue, oldValue);
      }
    };

    SetterObserver.prototype.subscribe = function subscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.push(callback);

      if (!this.observing) {
        this.convertProperty();
      }

      return function () {
        callbacks.splice(callbacks.indexOf(callback), 1);
      };
    };

    SetterObserver.prototype.convertProperty = function convertProperty() {
      this.observing = true;
      this.currentValue = this.obj[this.propertyName];
      this.setValue = this.setterValue;
      this.getValue = this.getterValue;

      try {
        Object.defineProperty(this.obj, this.propertyName, {
          configurable: true,
          enumerable: true,
          get: this.getValue.bind(this),
          set: this.setValue.bind(this)
        });
      } catch (_) {}
    };

    return SetterObserver;
  })();

  exports.SetterObserver = SetterObserver;

  var OoPropertyObserver = (function () {
    function OoPropertyObserver(obj, propertyName, subscribe) {
      _classCallCheck(this, OoPropertyObserver);

      this.obj = obj;
      this.propertyName = propertyName;
      this.subscribe = subscribe;
    }

    OoPropertyObserver.prototype.getValue = function getValue() {
      return this.obj[this.propertyName];
    };

    OoPropertyObserver.prototype.setValue = function setValue(newValue) {
      this.obj[this.propertyName] = newValue;
    };

    return OoPropertyObserver;
  })();

  exports.OoPropertyObserver = OoPropertyObserver;

  var OoObjectObserver = (function () {
    function OoObjectObserver(obj, observerLocator) {
      _classCallCheck(this, OoObjectObserver);

      this.obj = obj;
      this.observerLocator = observerLocator;
      this.observers = {};
      this.callbacks = {};
      this.callbackCount = 0;
    }

    OoObjectObserver.prototype.subscribe = function subscribe(propertyName, callback) {
      if (this.callbacks[propertyName]) {
        this.callbacks[propertyName].push(callback);
      } else {
        this.callbacks[propertyName] = [callback];
        this.callbacks[propertyName].oldValue = this.obj[propertyName];
      }

      if (this.callbackCount === 0) {
        this.handler = this.handleChanges.bind(this);
        try {
          Object.observe(this.obj, this.handler, ['update', 'add']);
        } catch (_) {}
      }

      this.callbackCount++;

      return this.unsubscribe.bind(this, propertyName, callback);
    };

    OoObjectObserver.prototype.unsubscribe = function unsubscribe(propertyName, callback) {
      var callbacks = this.callbacks[propertyName],
          index = callbacks.indexOf(callback);
      if (index === -1) {
        return;
      }

      callbacks.splice(index, 1);
      if (callbacks.count = 0) {
        callbacks.oldValue = null;
        this.callbacks[propertyName] = null;
      }

      this.callbackCount--;
      if (this.callbackCount === 0) {
        try {
          Object.unobserve(this.obj, this.handler);
        } catch (_) {}
      }
    };

    OoObjectObserver.prototype.getObserver = function getObserver(propertyName, descriptor) {
      var propertyObserver = this.observers[propertyName];
      if (!propertyObserver) {
        if (descriptor) {
          propertyObserver = this.observers[propertyName] = new OoPropertyObserver(this.obj, propertyName, this.subscribe.bind(this, propertyName));
        } else {
          propertyObserver = this.observers[propertyName] = new UndefinedPropertyObserver(this, this.obj, propertyName);
        }
      }
      return propertyObserver;
    };

    OoObjectObserver.prototype.handleChanges = function handleChanges(changes) {
      var properties = {},
          i,
          ii,
          change,
          propertyName,
          oldValue,
          newValue,
          callbacks;

      for (i = 0, ii = changes.length; i < ii; i++) {
        change = changes[i];
        properties[change.name] = change;
      }

      for (name in properties) {
        callbacks = this.callbacks[name];
        if (!callbacks) {
          continue;
        }
        change = properties[name];
        newValue = change.object[name];
        oldValue = change.oldValue;

        for (i = 0, ii = callbacks.length; i < ii; i++) {
          callbacks[i](newValue, oldValue);
        }
      }
    };

    return OoObjectObserver;
  })();

  exports.OoObjectObserver = OoObjectObserver;

  var UndefinedPropertyObserver = (function () {
    function UndefinedPropertyObserver(owner, obj, propertyName) {
      _classCallCheck(this, UndefinedPropertyObserver);

      this.owner = owner;
      this.obj = obj;
      this.propertyName = propertyName;
      this.callbackMap = new Map();
    }

    UndefinedPropertyObserver.prototype.getValue = function getValue() {
      if (this.actual) {
        return this.actual.getValue();
      }
      return this.obj[this.propertyName];
    };

    UndefinedPropertyObserver.prototype.setValue = function setValue(newValue) {
      if (this.actual) {
        this.actual.setValue(newValue);
        return;
      }

      this.obj[this.propertyName] = newValue;
      this.trigger(newValue, undefined);
    };

    UndefinedPropertyObserver.prototype.trigger = function trigger(newValue, oldValue) {
      var callback;

      if (this.subscription) {
        this.subscription();
      }

      this.getObserver();

      for (var _iterator2 = this.callbackMap.keys(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          callback = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          callback = _i2.value;
        }

        callback(newValue, oldValue);
      }
    };

    UndefinedPropertyObserver.prototype.getObserver = function getObserver() {
      var callback, observerLocator;

      if (!Object.getOwnPropertyDescriptor(this.obj, this.propertyName)) {
        return;
      }

      observerLocator = this.owner.observerLocator;
      delete this.owner.observers[this.propertyName];
      delete observerLocator.getOrCreateObserversLookup(this.obj, observerLocator)[this.propertyName];
      this.actual = observerLocator.getObserver(this.obj, this.propertyName);

      for (var _iterator3 = this.callbackMap.keys(), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          callback = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          callback = _i3.value;
        }

        this.callbackMap.set(callback, this.actual.subscribe(callback));
      }
    };

    UndefinedPropertyObserver.prototype.subscribe = function subscribe(callback) {
      var _this19 = this;

      if (!this.actual) {
        this.getObserver();
      }

      if (this.actual) {
        return this.actual.subscribe(callback);
      }

      if (!this.subscription) {
        this.subscription = this.owner.subscribe(this.propertyName, this.trigger.bind(this));
      }

      this.callbackMap.set(callback, null);

      return function () {
        var actualDispose = _this19.callbackMap.get(callback);
        if (actualDispose) actualDispose();
        _this19.callbackMap['delete'](callback);
      };
    };

    return UndefinedPropertyObserver;
  })();

  exports.UndefinedPropertyObserver = UndefinedPropertyObserver;

  var XLinkAttributeObserver = (function () {
    function XLinkAttributeObserver(element, propertyName, attributeName) {
      _classCallCheck(this, XLinkAttributeObserver);

      this.element = element;
      this.propertyName = propertyName;
      this.attributeName = attributeName;
    }

    XLinkAttributeObserver.prototype.getValue = function getValue() {
      return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
    };

    XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
      return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
    };

    XLinkAttributeObserver.prototype.subscribe = function subscribe(callback) {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
    };

    return XLinkAttributeObserver;
  })();

  exports.XLinkAttributeObserver = XLinkAttributeObserver;

  var DataAttributeObserver = (function () {
    function DataAttributeObserver(element, propertyName) {
      _classCallCheck(this, DataAttributeObserver);

      this.element = element;
      this.propertyName = propertyName;
    }

    DataAttributeObserver.prototype.getValue = function getValue() {
      return this.element.getAttribute(this.propertyName);
    };

    DataAttributeObserver.prototype.setValue = function setValue(newValue) {
      return this.element.setAttribute(this.propertyName, newValue);
    };

    DataAttributeObserver.prototype.subscribe = function subscribe(callback) {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
    };

    return DataAttributeObserver;
  })();

  exports.DataAttributeObserver = DataAttributeObserver;

  var StyleObserver = (function () {
    function StyleObserver(element, propertyName) {
      _classCallCheck(this, StyleObserver);

      this.element = element;
      this.propertyName = propertyName;
    }

    StyleObserver.prototype.getValue = function getValue() {
      return this.element.style.cssText;
    };

    StyleObserver.prototype.setValue = function setValue(newValue) {
      if (newValue instanceof Object) {
        newValue = this.flattenCss(newValue);
      }
      this.element.style.cssText = newValue;
    };

    StyleObserver.prototype.subscribe = function subscribe(callback) {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
    };

    StyleObserver.prototype.flattenCss = function flattenCss(object) {
      var s = '';
      for (var propertyName in object) {
        if (object.hasOwnProperty(propertyName)) {
          s += propertyName + ': ' + object[propertyName] + '; ';
        }
      }
      return s;
    };

    return StyleObserver;
  })();

  exports.StyleObserver = StyleObserver;

  var ValueAttributeObserver = (function () {
    function ValueAttributeObserver(element, propertyName, handler) {
      _classCallCheck(this, ValueAttributeObserver);

      this.element = element;
      this.propertyName = propertyName;
      this.handler = handler;
      this.callbacks = [];
    }

    ValueAttributeObserver.prototype.getValue = function getValue() {
      return this.element[this.propertyName];
    };

    ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
      this.element[this.propertyName] = newValue;
      this.call();
    };

    ValueAttributeObserver.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.oldValue,
          newValue = this.getValue();

      while (i--) {
        callbacks[i](newValue, oldValue);
      }

      this.oldValue = newValue;
    };

    ValueAttributeObserver.prototype.subscribe = function subscribe(callback) {
      var that = this;

      if (!this.disposeHandler) {
        this.oldValue = this.getValue();
        this.disposeHandler = this.handler.subscribe(this.element, this.call.bind(this));
      }

      this.callbacks.push(callback);

      return this.unsubscribe.bind(this, callback);
    };

    ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.splice(callbacks.indexOf(callback), 1);
      if (callbacks.length === 0) {
        this.disposeHandler();
        this.disposeHandler = null;
      }
    };

    return ValueAttributeObserver;
  })();

  exports.ValueAttributeObserver = ValueAttributeObserver;

  var SelectValueObserver = (function () {
    function SelectValueObserver(element, handler, observerLocator) {
      _classCallCheck(this, SelectValueObserver);

      this.element = element;
      this.handler = handler;
      this.observerLocator = observerLocator;
    }

    SelectValueObserver.prototype.getValue = function getValue() {
      return this.value;
    };

    SelectValueObserver.prototype.setValue = function setValue(newValue) {
      var _this20 = this;

      if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
        throw new Error('Only null or Array instances can be bound to a multi-select.');
      }
      if (this.value === newValue) {
        return;
      }

      if (this.arraySubscription) {
        this.arraySubscription();
        this.arraySubscription = null;
      }

      if (Array.isArray(newValue)) {
        this.arraySubscription = this.observerLocator.getArrayObserver(newValue).subscribe(this.synchronizeOptions.bind(this));
      }

      this.value = newValue;
      this.synchronizeOptions();

      if (this.element.options.length > 0 && !this.initialSync) {
        this.initialSync = true;
        this.observerLocator.taskQueue.queueMicroTask({ call: function call() {
            return _this20.synchronizeOptions();
          } });
      }
    };

    SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
      var value = this.value,
          i,
          options,
          option,
          optionValue,
          clear,
          isArray;

      if (value === null || value === undefined) {
        clear = true;
      } else if (Array.isArray(value)) {
        isArray = true;
      }

      options = this.element.options;
      i = options.length;
      while (i--) {
        option = options.item(i);
        if (clear) {
          option.selected = false;
          continue;
        }
        optionValue = option.hasOwnProperty('model') ? option.model : option.value;
        if (isArray) {
          option.selected = value.indexOf(optionValue) !== -1;
          continue;
        }
        option.selected = value === optionValue;
      }
    };

    SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
      var options = this.element.options,
          option,
          i,
          ii,
          count = 0,
          value = [];

      for (i = 0, ii = options.length; i < ii; i++) {
        option = options.item(i);
        if (!option.selected) {
          continue;
        }
        value[count] = option.hasOwnProperty('model') ? option.model : option.value;
        count++;
      }

      if (!this.element.multiple) {
        if (count === 0) {
          value = null;
        } else {
          value = value[0];
        }
      }

      this.oldValue = this.value;
      this.value = value;
      this.call();
    };

    SelectValueObserver.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.oldValue,
          newValue = this.value;

      while (i--) {
        callbacks[i](newValue, oldValue);
      }
    };

    SelectValueObserver.prototype.subscribe = function subscribe(callback) {
      if (!this.callbacks) {
        this.callbacks = [];
        this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
      }

      this.callbacks.push(callback);
      return this.unsubscribe.bind(this, callback);
    };

    SelectValueObserver.prototype.unsubscribe = function unsubscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.splice(callbacks.indexOf(callback), 1);
      if (callbacks.length === 0) {
        this.disposeHandler();
        this.disposeHandler = null;
        this.callbacks = null;
      }
    };

    SelectValueObserver.prototype.bind = function bind() {
      var _this21 = this;

      this.domObserver = new MutationObserver(function () {
        _this21.synchronizeOptions();
        _this21.synchronizeValue();
      });
      this.domObserver.observe(this.element, { childList: true, subtree: true });
    };

    SelectValueObserver.prototype.unbind = function unbind() {
      this.domObserver.disconnect();
      this.domObserver = null;

      if (this.arraySubscription) {
        this.arraySubscription();
        this.arraySubscription = null;
      }
    };

    return SelectValueObserver;
  })();

  exports.SelectValueObserver = SelectValueObserver;

  var CheckedObserver = (function () {
    function CheckedObserver(element, handler, observerLocator) {
      _classCallCheck(this, CheckedObserver);

      this.element = element;
      this.handler = handler;
      this.observerLocator = observerLocator;
    }

    CheckedObserver.prototype.getValue = function getValue() {
      return this.value;
    };

    CheckedObserver.prototype.setValue = function setValue(newValue) {
      var _this22 = this;

      if (this.value === newValue) {
        return;
      }

      if (this.arraySubscription) {
        this.arraySubscription();
        this.arraySubscription = null;
      }

      if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
        this.arraySubscription = this.observerLocator.getArrayObserver(newValue).subscribe(this.synchronizeElement.bind(this));
      }

      this.value = newValue;
      this.synchronizeElement();

      if (!this.element.hasOwnProperty('model') && !this.initialSync) {
        this.initialSync = true;
        this.observerLocator.taskQueue.queueMicroTask({ call: function call() {
            return _this22.synchronizeElement();
          } });
      }
    };

    CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
      var value = this.value,
          element = this.element,
          elementValue = element.hasOwnProperty('model') ? element.model : element.value,
          isRadio = element.type === 'radio';

      element.checked = isRadio && value === elementValue || !isRadio && value === true || !isRadio && Array.isArray(value) && value.indexOf(elementValue) !== -1;
    };

    CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
      var value = this.value,
          element = this.element,
          elementValue = element.hasOwnProperty('model') ? element.model : element.value,
          index;

      if (element.type === 'checkbox') {
        if (Array.isArray(value)) {
          index = value.indexOf(elementValue);
          if (element.checked && index === -1) {
            value.push(elementValue);
          } else if (!element.checked && index !== -1) {
            value.splice(index, 1);
          }

          return;
        } else {
          value = element.checked;
        }
      } else if (element.checked) {
        value = elementValue;
      } else {
        return;
      }

      this.oldValue = this.value;
      this.value = value;
      this.call();
    };

    CheckedObserver.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.oldValue,
          newValue = this.value;

      while (i--) {
        callbacks[i](newValue, oldValue);
      }
    };

    CheckedObserver.prototype.subscribe = function subscribe(callback) {
      if (!this.callbacks) {
        this.callbacks = [];
        this.disposeHandler = this.handler.subscribe(this.element, this.synchronizeValue.bind(this, false));
      }

      this.callbacks.push(callback);
      return this.unsubscribe.bind(this, callback);
    };

    CheckedObserver.prototype.unsubscribe = function unsubscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.splice(callbacks.indexOf(callback), 1);
      if (callbacks.length === 0) {
        this.disposeHandler();
        this.disposeHandler = null;
        this.callbacks = null;
      }
    };

    CheckedObserver.prototype.unbind = function unbind() {
      if (this.arraySubscription) {
        this.arraySubscription();
        this.arraySubscription = null;
      }
    };

    return CheckedObserver;
  })();

  exports.CheckedObserver = CheckedObserver;

  var ClassObserver = (function () {
    function ClassObserver(element) {
      _classCallCheck(this, ClassObserver);

      this.element = element;
      this.doNotCache = true;
      this.value = '';
      this.version = 0;
    }

    ClassObserver.prototype.getValue = function getValue() {
      return this.value;
    };

    ClassObserver.prototype.setValue = function setValue(newValue) {
      var nameIndex = this.nameIndex || {},
          version = this.version,
          names,
          name,
          i;

      if (newValue !== null && newValue !== undefined && newValue.length) {
        names = newValue.split(' ');
        i = names.length;
        while (i--) {
          name = names[i];
          if (name === '') {
            continue;
          }
          nameIndex[name] = version;
          this.element.classList.add(name);
        }
      }

      this.value = newValue;
      this.nameIndex = nameIndex;
      this.version += 1;

      if (version === 0) {
        return;
      }

      version -= 1;
      for (name in nameIndex) {
        if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
          continue;
        }
        this.element.classList.remove(name);
      }
    };

    ClassObserver.prototype.subscribe = function subscribe(callback) {
      throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
    };

    return ClassObserver;
  })();

  exports.ClassObserver = ClassObserver;

  var ComputedPropertyObserver = (function () {
    function ComputedPropertyObserver(obj, propertyName, descriptor, observerLocator) {
      _classCallCheck(this, ComputedPropertyObserver);

      this.obj = obj;
      this.propertyName = propertyName;
      this.descriptor = descriptor;
      this.observerLocator = observerLocator;
      this.callbacks = [];
    }

    ComputedPropertyObserver.prototype.getValue = function getValue() {
      return this.obj[this.propertyName];
    };

    ComputedPropertyObserver.prototype.setValue = function setValue(newValue) {
      this.obj[this.propertyName] = newValue;
    };

    ComputedPropertyObserver.prototype.trigger = function trigger(newValue, oldValue) {
      var callbacks = this.callbacks,
          i = callbacks.length;

      while (i--) {
        callbacks[i](newValue, oldValue);
      }
    };

    ComputedPropertyObserver.prototype.evaluate = function evaluate() {
      var newValue = this.getValue();
      if (this.oldValue === newValue) return;
      this.trigger(newValue, this.oldValue);
      this.oldValue = newValue;
    };

    ComputedPropertyObserver.prototype.subscribe = function subscribe(callback) {
      var _this23 = this;

      var dependencies, i, ii;

      this.callbacks.push(callback);

      if (this.oldValue === undefined) {
        this.oldValue = this.getValue();
        this.subscriptions = [];

        dependencies = this.descriptor.get.dependencies;
        for (i = 0, ii = dependencies.length; i < ii; i++) {
          this.subscriptions.push(this.observerLocator.getObserver(this.obj, dependencies[i]).subscribe(function () {
            return _this23.evaluate();
          }));
        }
      }

      return function () {
        _this23.callbacks.splice(_this23.callbacks.indexOf(callback), 1);
        if (_this23.callbacks.length > 0) return;
        while (_this23.subscriptions.length) {
          _this23.subscriptions.pop()();
        }
        _this23.oldValue = undefined;
      };
    };

    return ComputedPropertyObserver;
  })();

  exports.ComputedPropertyObserver = ComputedPropertyObserver;

  function hasDeclaredDependencies(descriptor) {
    return descriptor && descriptor.get && descriptor.get.dependencies && descriptor.get.dependencies.length > 0;
  }

  function declarePropertyDependencies(ctor, propertyName, dependencies) {
    var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
    descriptor.get.dependencies = dependencies;
  }

  var elements = {
    a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
    feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
    feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
    feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
    feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
    'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
    image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
    linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
    marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
    mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
    'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
    mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
    svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
    'switch': ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
    symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
    text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
    title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
    tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
    view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
    vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
  };

  exports.elements = elements;
  var presentationElements = {
    'a': true,
    'altGlyph': true,
    'animate': true,
    'animateColor': true,
    'circle': true,
    'clipPath': true,
    'defs': true,
    'ellipse': true,
    'feBlend': true,
    'feColorMatrix': true,
    'feComponentTransfer': true,
    'feComposite': true,
    'feConvolveMatrix': true,
    'feDiffuseLighting': true,
    'feDisplacementMap': true,
    'feFlood': true,
    'feGaussianBlur': true,
    'feImage': true,
    'feMerge': true,
    'feMorphology': true,
    'feOffset': true,
    'feSpecularLighting': true,
    'feTile': true,
    'feTurbulence': true,
    'filter': true,
    'font': true,
    'foreignObject': true,
    'g': true,
    'glyph': true,
    'glyphRef': true,
    'image': true,
    'line': true,
    'linearGradient': true,
    'marker': true,
    'mask': true,
    'missing-glyph': true,
    'path': true,
    'pattern': true,
    'polygon': true,
    'polyline': true,
    'radialGradient': true,
    'rect': true,
    'stop': true,
    'svg': true,
    'switch': true,
    'symbol': true,
    'text': true,
    'textPath': true,
    'tref': true,
    'tspan': true,
    'use': true
  };

  exports.presentationElements = presentationElements;
  var presentationAttributes = {
    'alignment-baseline': true,
    'baseline-shift': true,
    'clip-path': true,
    'clip-rule': true,
    'clip': true,
    'color-interpolation-filters': true,
    'color-interpolation': true,
    'color-profile': true,
    'color-rendering': true,
    'color': true,
    'cursor': true,
    'direction': true,
    'display': true,
    'dominant-baseline': true,
    'enable-background': true,
    'fill-opacity': true,
    'fill-rule': true,
    'fill': true,
    'filter': true,
    'flood-color': true,
    'flood-opacity': true,
    'font-family': true,
    'font-size-adjust': true,
    'font-size': true,
    'font-stretch': true,
    'font-style': true,
    'font-variant': true,
    'font-weight': true,
    'glyph-orientation-horizontal': true,
    'glyph-orientation-vertical': true,
    'image-rendering': true,
    'kerning': true,
    'letter-spacing': true,
    'lighting-color': true,
    'marker-end': true,
    'marker-mid': true,
    'marker-start': true,
    'mask': true,
    'opacity': true,
    'overflow': true,
    'pointer-events': true,
    'shape-rendering': true,
    'stop-color': true,
    'stop-opacity': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'stroke-linecap': true,
    'stroke-linejoin': true,
    'stroke-miterlimit': true,
    'stroke-opacity': true,
    'stroke-width': true,
    'stroke': true,
    'text-anchor': true,
    'text-decoration': true,
    'text-rendering': true,
    'unicode-bidi': true,
    'visibility': true,
    'word-spacing': true,
    'writing-mode': true
  };

  exports.presentationAttributes = presentationAttributes;

  function isStandardSvgAttribute(nodeName, attributeName) {
    return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
  }

  function createElement(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
  }

  if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph') {
    elements.altglyph = elements.altGlyph;
    delete elements.altGlyph;
    elements.altglyphdef = elements.altGlyphDef;
    delete elements.altGlyphDef;
    elements.altglyphitem = elements.altGlyphItem;
    delete elements.altGlyphItem;
    elements.glyphref = elements.glyphRef;
    delete elements.glyphRef;
  }

  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  function createObserverLookup(obj, observerLocator) {
    var value = new OoObjectObserver(obj, observerLocator);

    try {
      Object.defineProperty(obj, '__observer__', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: value
      });
    } catch (_) {}

    return value;
  }

  var ObserverLocator = (function () {
    function ObserverLocator(taskQueue, eventManager, dirtyChecker, observationAdapters) {
      _classCallCheck(this, ObserverLocator);

      this.taskQueue = taskQueue;
      this.eventManager = eventManager;
      this.dirtyChecker = dirtyChecker;
      this.observationAdapters = observationAdapters;
    }

    ObserverLocator.inject = function inject() {
      return [_aureliaTaskQueue.TaskQueue, EventManager, DirtyChecker, _aureliaDependencyInjection.All.of(ObjectObservationAdapter)];
    };

    ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
      var observersLookup = obj.__observers__,
          observer;

      if (observersLookup && propertyName in observersLookup) {
        return observersLookup[propertyName];
      }

      observer = this.createPropertyObserver(obj, propertyName);

      if (!observer.doNotCache) {
        if (observersLookup === undefined) {
          observersLookup = this.getOrCreateObserversLookup(obj);
        }

        observersLookup[propertyName] = observer;
      }

      return observer;
    };

    ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
      return obj.__observers__ || this.createObserversLookup(obj);
    };

    ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
      var value = {};

      try {
        Object.defineProperty(obj, '__observers__', {
          enumerable: false,
          configurable: false,
          writable: false,
          value: value
        });
      } catch (_) {}

      return value;
    };

    ObserverLocator.prototype.getObservationAdapter = function getObservationAdapter(obj, propertyName, descriptor) {
      var i, ii, observationAdapter;
      for (i = 0, ii = this.observationAdapters.length; i < ii; i++) {
        observationAdapter = this.observationAdapters[i];
        if (observationAdapter.handlesProperty(obj, propertyName, descriptor)) return observationAdapter;
      }
      return null;
    };

    ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
      var observerLookup, descriptor, handler, observationAdapter, xlinkResult;

      if (obj instanceof Element) {
        if (propertyName === 'class') {
          return new ClassObserver(obj);
        }
        if (propertyName === 'style' || propertyName === 'css') {
          return new StyleObserver(obj, propertyName);
        }
        handler = this.eventManager.getElementHandler(obj, propertyName);
        if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
          return new SelectValueObserver(obj, handler, this);
        }
        if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
          return new CheckedObserver(obj, handler, this);
        }
        if (handler) {
          return new ValueAttributeObserver(obj, propertyName, handler);
        }
        xlinkResult = /^xlink:(.+)$/.exec(propertyName);
        if (xlinkResult) {
          return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
        }
        if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof SVGElement && isStandardSvgAttribute(obj.nodeName, propertyName)) {
          return new DataAttributeObserver(obj, propertyName);
        }
      }

      descriptor = Object.getPropertyDescriptor(obj, propertyName);

      if (hasDeclaredDependencies(descriptor)) {
        return new ComputedPropertyObserver(obj, propertyName, descriptor, this);
      }

      var existingGetterOrSetter = undefined;
      if (descriptor && (existingGetterOrSetter = descriptor.get || descriptor.set)) {
        if (existingGetterOrSetter.getObserver) {
          return existingGetterOrSetter.getObserver(obj);
        }

        observationAdapter = this.getObservationAdapter(obj, propertyName, descriptor);
        if (observationAdapter) return observationAdapter.getObserver(obj, propertyName, descriptor);
        return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
      }

      if (hasObjectObserve) {
        observerLookup = obj.__observer__ || createObserverLookup(obj, this);
        return observerLookup.getObserver(propertyName, descriptor);
      }

      if (obj instanceof Array) {
        if (propertyName === 'length') {
          return this.getArrayObserver(obj).getLengthObserver();
        } else {
          return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
        }
      } else if (obj instanceof Map) {
        if (propertyName === 'size') {
          return this.getMapObserver(obj).getLengthObserver();
        } else {
          return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
        }
      }

      return new SetterObserver(this.taskQueue, obj, propertyName);
    };

    ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
      if ('__array_observer__' in array) {
        return array.__array_observer__;
      }

      return array.__array_observer__ = _getArrayObserver(this.taskQueue, array);
    };

    ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
      if ('__map_observer__' in map) {
        return map.__map_observer__;
      }

      return map.__map_observer__ = _getMapObserver(this.taskQueue, map);
    };

    return ObserverLocator;
  })();

  exports.ObserverLocator = ObserverLocator;

  var ObjectObservationAdapter = (function () {
    function ObjectObservationAdapter() {
      _classCallCheck(this, ObjectObservationAdapter);
    }

    ObjectObservationAdapter.prototype.handlesProperty = function handlesProperty(object, propertyName, descriptor) {
      throw new Error('BindingAdapters must implement handlesProperty(object, propertyName).');
    };

    ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
      throw new Error('BindingAdapters must implement createObserver(object, propertyName).');
    };

    return ObjectObservationAdapter;
  })();

  exports.ObjectObservationAdapter = ObjectObservationAdapter;

  var BindingExpression = (function () {
    function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, valueConverterLookupFunction, attribute) {
      _classCallCheck(this, BindingExpression);

      this.observerLocator = observerLocator;
      this.targetProperty = targetProperty;
      this.sourceExpression = sourceExpression;
      this.mode = mode;
      this.valueConverterLookupFunction = valueConverterLookupFunction;
      this.attribute = attribute;
      this.discrete = false;
    }

    BindingExpression.prototype.createBinding = function createBinding(target) {
      return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.valueConverterLookupFunction);
    };

    BindingExpression.create = function create(targetProperty, sourceExpression) {
      var mode = arguments[2] === undefined ? bindingMode.oneWay : arguments[2];

      var parser = _aureliaDependencyInjection.Container.instance.get(Parser),
          observerLocator = _aureliaDependencyInjection.Container.instance.get(ObserverLocator);

      return new BindingExpression(observerLocator, targetProperty, parser.parse(sourceExpression), mode);
    };

    return BindingExpression;
  })();

  exports.BindingExpression = BindingExpression;

  var Binding = (function () {
    function Binding(observerLocator, sourceExpression, target, targetProperty, mode, valueConverterLookupFunction) {
      _classCallCheck(this, Binding);

      this.observerLocator = observerLocator;
      this.sourceExpression = sourceExpression;
      this.targetProperty = observerLocator.getObserver(target, targetProperty);
      this.mode = mode;
      this.valueConverterLookupFunction = valueConverterLookupFunction;
    }

    Binding.prototype.getObserver = function getObserver(obj, propertyName) {
      return this.observerLocator.getObserver(obj, propertyName);
    };

    Binding.prototype.bind = function bind(source) {
      var _this24 = this;

      var targetProperty = this.targetProperty,
          info;

      if ('bind' in targetProperty) {
        targetProperty.bind();
      }

      if (this.mode == bindingMode.oneWay || this.mode == bindingMode.twoWay) {
        if (this._disposeObserver) {
          if (this.source === source) {
            return;
          }

          this.unbind();
        }

        info = this.sourceExpression.connect(this, source);

        if (info.observer) {
          this._disposeObserver = info.observer.subscribe(function (newValue) {
            var existing = targetProperty.getValue();
            if (newValue !== existing) {
              targetProperty.setValue(newValue);
            }
          });
        }

        if (info.value !== undefined) {
          targetProperty.setValue(info.value);
        }

        if (this.mode == bindingMode.twoWay) {
          this._disposeListener = targetProperty.subscribe(function (newValue) {
            _this24.sourceExpression.assign(source, newValue, _this24.valueConverterLookupFunction);
          });
        }

        this.source = source;
      } else {
        var value = this.sourceExpression.evaluate(source, this.valueConverterLookupFunction);

        if (value !== undefined) {
          targetProperty.setValue(value);
        }
      }
    };

    Binding.prototype.unbind = function unbind() {
      if ('unbind' in this.targetProperty) {
        this.targetProperty.unbind();
      }
      if (this._disposeObserver) {
        this._disposeObserver();
        this._disposeObserver = null;
      }

      if (this._disposeListener) {
        this._disposeListener();
        this._disposeListener = null;
      }
    };

    return Binding;
  })();

  var CallExpression = (function () {
    function CallExpression(observerLocator, targetProperty, sourceExpression, valueConverterLookupFunction) {
      _classCallCheck(this, CallExpression);

      this.observerLocator = observerLocator;
      this.targetProperty = targetProperty;
      this.sourceExpression = sourceExpression;
      this.valueConverterLookupFunction = valueConverterLookupFunction;
    }

    CallExpression.prototype.createBinding = function createBinding(target) {
      return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.valueConverterLookupFunction);
    };

    return CallExpression;
  })();

  exports.CallExpression = CallExpression;

  var Call = (function () {
    function Call(observerLocator, sourceExpression, target, targetProperty, valueConverterLookupFunction) {
      _classCallCheck(this, Call);

      this.sourceExpression = sourceExpression;
      this.target = target;
      this.targetProperty = observerLocator.getObserver(target, targetProperty);
      this.valueConverterLookupFunction = valueConverterLookupFunction;
    }

    Call.prototype.bind = function bind(source) {
      var _this25 = this;

      if (this.source) {
        if (this.source === source) {
          return;
        }

        this.unbind();
      }

      this.source = source;
      this.targetProperty.setValue(function ($event) {
        var result,
            temp = source.$event;
        source.$event = $event;
        result = _this25.sourceExpression.evaluate(source, _this25.valueConverterLookupFunction);
        source.$event = temp;
        return result;
      });
    };

    Call.prototype.unbind = function unbind() {
      if (this.source) {
        this.targetProperty.setValue(null);
        this.source = null;
      }
    };

    return Call;
  })();

  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {

    (function (view) {

      

      if (!('Element' in view)) return;

      var classListProp = 'classList',
          protoProp = 'prototype',
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, '');
      },
          arrIndexOf = Array[protoProp].indexOf || function (item) {
        var i = 0,
            len = this.length;
        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }
        return -1;
      },
          DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      },
          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === '') {
          throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
        }
        if (/\s/.test(token)) {
          throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
        }
        return arrIndexOf.call(classList, token);
      },
          ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute('class') || ''),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;
        for (; i < len; i++) {
          this.push(classes[i]);
        }
        this._updateClassName = function () {
          elem.setAttribute('class', this.toString());
        };
      },
          classListProto = ClassList[protoProp] = [],
          classListGetter = function classListGetter() {
        return new ClassList(this);
      };

      DOMEx[protoProp] = Error[protoProp];
      classListProto.item = function (i) {
        return this[i] || null;
      };
      classListProto.contains = function (token) {
        token += '';
        return checkTokenAndGetIndex(this, token) !== -1;
      };
      classListProto.add = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false;
        do {
          token = tokens[i] + '';
          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.remove = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false,
            index;
        do {
          token = tokens[i] + '';
          index = checkTokenAndGetIndex(this, token);
          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.toggle = function (token, force) {
        token += '';

        var result = this.contains(token),
            method = result ? force !== true && 'remove' : force !== false && 'add';

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };
      classListProto.toString = function () {
        return this.join(' ');
      };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };
        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          if (ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(self);
  } else {

    (function () {
      

      var testElement = document.createElement('_');

      testElement.classList.add('c1', 'c2');

      if (!testElement.classList.contains('c2')) {
        var createMethod = function createMethod(method) {
          var original = DOMTokenList.prototype[method];

          DOMTokenList.prototype[method] = function (token) {
            var i,
                len = arguments.length;

            for (i = 0; i < len; i++) {
              token = arguments[i];
              original.call(this, token);
            }
          };
        };
        createMethod('add');
        createMethod('remove');
      }

      testElement.classList.toggle('c3', false);

      if (testElement.classList.contains('c3')) {
        var _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          } else {
            return _toggle.call(this, token);
          }
        };
      }

      testElement = null;
    })();
  }

  function camelCase(name) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  var ValueConverterResource = (function () {
    function ValueConverterResource(name) {
      _classCallCheck(this, ValueConverterResource);

      this.name = name;
    }

    ValueConverterResource.convention = function convention(name) {
      if (name.endsWith('ValueConverter')) {
        return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
      }
    };

    ValueConverterResource.prototype.analyze = function analyze(container, target) {
      this.instance = container.get(target);
    };

    ValueConverterResource.prototype.register = function register(registry, name) {
      registry.registerValueConverter(name || this.name, this.instance);
    };

    ValueConverterResource.prototype.load = function load(container, target) {
      return Promise.resolve(this);
    };

    return ValueConverterResource;
  })();

  exports.ValueConverterResource = ValueConverterResource;

  function valueConverter(nameOrTarget) {
    if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
      return function (target) {
        _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, new ValueConverterResource(nameOrTarget), target);
      };
    }

    _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, new ValueConverterResource(), nameOrTarget);
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('valueConverter', valueConverter);

  function computedFrom() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
      descriptor.get.dependencies = rest;
      return descriptor;
    };
  }

  var ListenerExpression = (function () {
    function ListenerExpression(eventManager, targetEvent, sourceExpression, delegate, preventDefault) {
      _classCallCheck(this, ListenerExpression);

      this.eventManager = eventManager;
      this.targetEvent = targetEvent;
      this.sourceExpression = sourceExpression;
      this.delegate = delegate;
      this.discrete = true;
      this.preventDefault = preventDefault;
    }

    ListenerExpression.prototype.createBinding = function createBinding(target) {
      return new Listener(this.eventManager, this.targetEvent, this.delegate, this.sourceExpression, target, this.preventDefault);
    };

    return ListenerExpression;
  })();

  exports.ListenerExpression = ListenerExpression;

  var Listener = (function () {
    function Listener(eventManager, targetEvent, delegate, sourceExpression, target, preventDefault) {
      _classCallCheck(this, Listener);

      this.eventManager = eventManager;
      this.targetEvent = targetEvent;
      this.delegate = delegate;
      this.sourceExpression = sourceExpression;
      this.target = target;
      this.preventDefault = preventDefault;
    }

    Listener.prototype.bind = function bind(source) {
      var _this26 = this;

      if (this._disposeListener) {
        if (this.source === source) {
          return;
        }

        this.unbind();
      }

      this.source = source;
      this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, function (event) {
        var prevEvent = source.$event;
        source.$event = event;
        var result = _this26.sourceExpression.evaluate(source);
        source.$event = prevEvent;
        if (result !== true && _this26.preventDefault) {
          event.preventDefault();
        }
        return result;
      }, this.delegate);
    };

    Listener.prototype.unbind = function unbind() {
      if (this._disposeListener) {
        this._disposeListener();
        this._disposeListener = null;
      }
    };

    return Listener;
  })();

  var NameExpression = (function () {
    function NameExpression(name, mode) {
      _classCallCheck(this, NameExpression);

      this.property = name;
      this.discrete = true;
      this.mode = mode;
    }

    NameExpression.prototype.createBinding = function createBinding(target) {
      return new NameBinder(this.property, target, this.mode);
    };

    return NameExpression;
  })();

  exports.NameExpression = NameExpression;

  var NameBinder = (function () {
    function NameBinder(property, target, mode) {
      _classCallCheck(this, NameBinder);

      this.property = property;

      switch (mode) {
        case 'element':
          this.target = target;
          break;
        case 'view-model':
          this.target = target.primaryBehavior.executionContext;
          break;
        default:
          this.target = target[mode];

          if (this.target === undefined) {
            throw new Error('Attempted to reference "' + mode + '", but it was not found on the target element.');
          } else {
            this.target = this.target.executionContext || this.target;
          }

          break;
      }
    }

    NameBinder.prototype.bind = function bind(source) {
      if (this.source) {
        if (this.source === source) {
          return;
        }

        this.unbind();
      }

      this.source = source;
      source[this.property] = this.target;
    };

    NameBinder.prototype.unbind = function unbind() {
      if (this.source) {
        this.source[this.property] = null;
        this.source = null;
      }
    };

    return NameBinder;
  })();
});
define('aurelia-binding', ['aurelia-binding/aurelia-binding'], function (main) { return main; });

define('aurelia-templating/aurelia-templating',['exports', 'core-js', 'aurelia-metadata', 'aurelia-path', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-task-queue', 'aurelia-logging'], function (exports, _coreJs, _aureliaMetadata, _aureliaPath, _aureliaLoader, _aureliaDependencyInjection, _aureliaBinding, _aureliaTaskQueue, _aureliaLogging) {
  

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.createTemplateFromMarkup = createTemplateFromMarkup;
  exports.replaceNode = replaceNode;
  exports.removeNode = removeNode;
  exports.hyphenate = hyphenate;
  exports.nextElementSibling = nextElementSibling;
  exports.behavior = behavior;
  exports.customElement = customElement;
  exports.customAttribute = customAttribute;
  exports.templateController = templateController;
  exports.bindable = bindable;
  exports.dynamicOptions = dynamicOptions;
  exports.sync = sync;
  exports.useShadowDOM = useShadowDOM;
  exports.skipContentProcessing = skipContentProcessing;
  exports.processContent = processContent;
  exports.containerless = containerless;
  exports.viewStrategy = viewStrategy;
  exports.useView = useView;
  exports.inlineView = inlineView;
  exports.noView = noView;
  exports.elementConfig = elementConfig;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var needsTemplateFixup = !('content' in document.createElement('template'));
  var shadowPoly = window.ShadowDOMPolyfill || null;

  var DOMBoundary = 'aurelia-dom-boundary';

  exports.DOMBoundary = DOMBoundary;

  function createTemplateFromMarkup(markup) {
    var temp = document.createElement('template');
    temp.innerHTML = markup;

    if (needsTemplateFixup) {
      temp.content = document.createDocumentFragment();
      while (temp.firstChild) {
        temp.content.appendChild(temp.firstChild);
      }
    }

    return temp;
  }

  function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  }

  function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (shadowPoly) {
      shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
    } else {
      parentNode.removeChild(node);
    }
  }

  var animationEvent = {
    enterBegin: 'animation:enter:begin',
    enterActive: 'animation:enter:active',
    enterDone: 'animation:enter:done',
    enterTimeout: 'animation:enter:timeout',

    leaveBegin: 'animation:leave:begin',
    leaveActive: 'animation:leave:active',
    leaveDone: 'animation:leave:done',
    leaveTimeout: 'animation:leave:timeout',

    staggerNext: 'animation:stagger:next',

    removeClassBegin: 'animation:remove-class:begin',
    removeClassActive: 'animation:remove-class:active',
    removeClassDone: 'animation:remove-class:done',
    removeClassTimeout: 'animation:remove-class:timeout',

    addClassBegin: 'animation:add-class:begin',
    addClassActive: 'animation:add-class:active',
    addClassDone: 'animation:add-class:done',
    addClassTimeout: 'animation:add-class:timeout',

    animateBegin: 'animation:animate:begin',
    animateActive: 'animation:animate:active',
    animateDone: 'animation:animate:done',
    animateTimeout: 'animation:animate:timeout',

    sequenceBegin: 'animation:sequence:begin',
    sequenceDone: 'animation:sequence:done'
  };

  exports.animationEvent = animationEvent;

  var Animator = (function () {
    function Animator() {
      _classCallCheck(this, Animator);
    }

    Animator.configureDefault = function configureDefault(container, animatorInstance) {
      container.registerInstance(Animator, Animator.instance = animatorInstance || new Animator());
    };

    Animator.prototype.move = function move() {
      return Promise.resolve(false);
    };

    Animator.prototype.enter = function enter(element) {
      return Promise.resolve(false);
    };

    Animator.prototype.leave = function leave(element) {
      return Promise.resolve(false);
    };

    Animator.prototype.removeClass = function removeClass(element, className) {
      return Promise.resolve(false);
    };

    Animator.prototype.addClass = function addClass(element, className) {
      return Promise.resolve(false);
    };

    Animator.prototype.animate = function animate(element, className, options) {
      return Promise.resolve(false);
    };

    Animator.prototype.runSequence = function runSequence(sequence) {};

    Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

    Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

    return Animator;
  })();

  exports.Animator = Animator;

  var capitalMatcher = /([A-Z])/g;

  function addHyphenAndLower(char) {
    return '-' + char.toLowerCase();
  }

  function hyphenate(name) {
    return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
  }

  function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  }

  var ViewStrategy = (function () {
    function ViewStrategy() {
      _classCallCheck(this, ViewStrategy);
    }

    ViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(baseUrl) {};

    ViewStrategy.normalize = function normalize(value) {
      if (typeof value === 'string') {
        value = new UseViewStrategy(value);
      }

      if (value && !(value instanceof ViewStrategy)) {
        throw new Error('The view must be a string or an instance of ViewStrategy.');
      }

      return value;
    };

    ViewStrategy.getDefault = function getDefault(target) {
      var strategy, annotation;

      if (typeof target !== 'function') {
        target = target.constructor;
      }

      annotation = _aureliaMetadata.Origin.get(target);
      strategy = _aureliaMetadata.Metadata.get(ViewStrategy.metadataKey, target);

      if (!strategy) {
        if (!annotation) {
          throw new Error('Cannot determinte default view strategy for object.', target);
        }

        strategy = new ConventionalViewStrategy(annotation.moduleId);
      } else if (annotation) {
        strategy.moduleId = annotation.moduleId;
      }

      return strategy;
    };

    _createClass(ViewStrategy, null, [{
      key: 'metadataKey',
      value: 'aurelia:view-strategy',
      enumerable: true
    }]);

    return ViewStrategy;
  })();

  exports.ViewStrategy = ViewStrategy;

  var UseViewStrategy = (function (_ViewStrategy) {
    function UseViewStrategy(path) {
      _classCallCheck(this, UseViewStrategy);

      _ViewStrategy.call(this);
      this.path = path;
    }

    _inherits(UseViewStrategy, _ViewStrategy);

    UseViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, options, loadContext) {
      if (!this.absolutePath && this.moduleId) {
        this.absolutePath = _aureliaPath.relativeToFile(this.path, this.moduleId);
      }

      return viewEngine.loadViewFactory(this.absolutePath || this.path, options, this.moduleId, loadContext);
    };

    UseViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
      this.absolutePath = _aureliaPath.relativeToFile(this.path, file);
    };

    return UseViewStrategy;
  })(ViewStrategy);

  exports.UseViewStrategy = UseViewStrategy;

  var ConventionalViewStrategy = (function (_ViewStrategy2) {
    function ConventionalViewStrategy(moduleId) {
      _classCallCheck(this, ConventionalViewStrategy);

      _ViewStrategy2.call(this);
      this.moduleId = moduleId;
      this.viewUrl = ConventionalViewStrategy.convertModuleIdToViewUrl(moduleId);
    }

    _inherits(ConventionalViewStrategy, _ViewStrategy2);

    ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, options, loadContext) {
      return viewEngine.loadViewFactory(this.viewUrl, options, this.moduleId, loadContext);
    };

    ConventionalViewStrategy.convertModuleIdToViewUrl = function convertModuleIdToViewUrl(moduleId) {
      var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
      return id + '.html';
    };

    return ConventionalViewStrategy;
  })(ViewStrategy);

  exports.ConventionalViewStrategy = ConventionalViewStrategy;

  var NoViewStrategy = (function (_ViewStrategy3) {
    function NoViewStrategy() {
      _classCallCheck(this, NoViewStrategy);

      _ViewStrategy3.apply(this, arguments);
    }

    _inherits(NoViewStrategy, _ViewStrategy3);

    NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, options, loadContext) {
      return Promise.resolve(null);
    };

    return NoViewStrategy;
  })(ViewStrategy);

  exports.NoViewStrategy = NoViewStrategy;

  var TemplateRegistryViewStrategy = (function (_ViewStrategy4) {
    function TemplateRegistryViewStrategy(moduleId, entry) {
      _classCallCheck(this, TemplateRegistryViewStrategy);

      _ViewStrategy4.call(this);
      this.moduleId = moduleId;
      this.entry = entry;
    }

    _inherits(TemplateRegistryViewStrategy, _ViewStrategy4);

    TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, options, loadContext) {
      var entry = this.entry;

      if (entry.isReady) {
        return Promise.resolve(entry.factory);
      }

      return viewEngine.loadViewFactory(entry, options, this.moduleId, loadContext);
    };

    return TemplateRegistryViewStrategy;
  })(ViewStrategy);

  exports.TemplateRegistryViewStrategy = TemplateRegistryViewStrategy;

  var InlineViewStrategy = (function (_ViewStrategy5) {
    function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
      _classCallCheck(this, InlineViewStrategy);

      _ViewStrategy5.call(this);
      this.markup = markup;
      this.dependencies = dependencies || null;
      this.dependencyBaseUrl = dependencyBaseUrl || '';
    }

    _inherits(InlineViewStrategy, _ViewStrategy5);

    InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, options, loadContext) {
      var entry = this.entry,
          dependencies = this.dependencies;

      if (entry && entry.isReady) {
        return Promise.resolve(entry.factory);
      }

      this.entry = entry = new _aureliaLoader.TemplateRegistryEntry(this.moduleId || this.dependencyBaseUrl);
      entry.setTemplate(createTemplateFromMarkup(this.markup));

      if (dependencies !== null) {
        for (var i = 0, ii = dependencies.length; i < ii; ++i) {
          var current = dependencies[i];

          if (typeof current === 'string' || typeof current === 'function') {
            entry.addDependency(current);
          } else {
            entry.addDependency(current.from, current.as);
          }
        }
      }

      return viewEngine.loadViewFactory(entry, options, this.moduleId, loadContext);
    };

    return InlineViewStrategy;
  })(ViewStrategy);

  exports.InlineViewStrategy = InlineViewStrategy;

  var BindingLanguage = (function () {
    function BindingLanguage() {
      _classCallCheck(this, BindingLanguage);
    }

    BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, attrName, attrValue) {
      throw new Error('A BindingLanguage must implement inspectAttribute(...)');
    };

    BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
      throw new Error('A BindingLanguage must implement createAttributeInstruction(...)');
    };

    BindingLanguage.prototype.parseText = function parseText(resources, value) {
      throw new Error('A BindingLanguage must implement parseText(...)');
    };

    return BindingLanguage;
  })();

  exports.BindingLanguage = BindingLanguage;

  function register(lookup, name, resource, type) {
    if (!name) {
      return;
    }

    var existing = lookup[name];
    if (existing) {
      if (existing != resource) {
        throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
      }

      return;
    }

    lookup[name] = resource;
  }

  var ResourceRegistry = (function () {
    function ResourceRegistry() {
      _classCallCheck(this, ResourceRegistry);

      this.attributes = {};
      this.elements = {};
      this.valueConverters = {};
      this.attributeMap = {};
      this.baseResourceUrl = '';
    }

    ResourceRegistry.prototype.registerElement = function registerElement(tagName, behavior) {
      register(this.elements, tagName, behavior, 'an Element');
    };

    ResourceRegistry.prototype.getElement = function getElement(tagName) {
      return this.elements[tagName];
    };

    ResourceRegistry.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
      this.attributeMap[attribute] = knownAttribute;
      register(this.attributes, attribute, behavior, 'an Attribute');
    };

    ResourceRegistry.prototype.getAttribute = function getAttribute(attribute) {
      return this.attributes[attribute];
    };

    ResourceRegistry.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
      register(this.valueConverters, name, valueConverter, 'a ValueConverter');
    };

    ResourceRegistry.prototype.getValueConverter = function getValueConverter(name) {
      return this.valueConverters[name];
    };

    return ResourceRegistry;
  })();

  exports.ResourceRegistry = ResourceRegistry;

  var ViewResources = (function (_ResourceRegistry) {
    function ViewResources(parent, viewUrl) {
      _classCallCheck(this, ViewResources);

      _ResourceRegistry.call(this);
      this.parent = parent;
      this.viewUrl = viewUrl;
      this.valueConverterLookupFunction = this.getValueConverter.bind(this);
    }

    _inherits(ViewResources, _ResourceRegistry);

    ViewResources.prototype.relativeToView = function relativeToView(path) {
      return _aureliaPath.relativeToFile(path, this.viewUrl);
    };

    ViewResources.prototype.getElement = function getElement(tagName) {
      return this.elements[tagName] || this.parent.getElement(tagName);
    };

    ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
      return this.attributeMap[attribute] || this.parent.attributeMap[attribute];
    };

    ViewResources.prototype.getAttribute = function getAttribute(attribute) {
      return this.attributes[attribute] || this.parent.getAttribute(attribute);
    };

    ViewResources.prototype.getValueConverter = function getValueConverter(name) {
      return this.valueConverters[name] || this.parent.getValueConverter(name);
    };

    return ViewResources;
  })(ResourceRegistry);

  exports.ViewResources = ViewResources;

  var View = (function () {
    function View(container, fragment, behaviors, bindings, children, systemControlled, contentSelectors) {
      _classCallCheck(this, View);

      this.container = container;
      this.fragment = fragment;
      this.behaviors = behaviors;
      this.bindings = bindings;
      this.children = children;
      this.systemControlled = systemControlled;
      this.contentSelectors = contentSelectors;
      this.firstChild = fragment.firstChild;
      this.lastChild = fragment.lastChild;
      this.isBound = false;
      this.isAttached = false;
    }

    View.prototype.created = function created(executionContext) {
      var i,
          ii,
          behaviors = this.behaviors;
      for (i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].created(executionContext);
      }
    };

    View.prototype.bind = function bind(executionContext, systemUpdate) {
      var context, behaviors, bindings, children, i, ii;

      if (systemUpdate && !this.systemControlled) {
        context = this.executionContext || executionContext;
      } else {
        context = executionContext || this.executionContext;
      }

      if (this.isBound) {
        if (this.executionContext === context) {
          return;
        }

        this.unbind();
      }

      this.isBound = true;
      this.executionContext = context;

      if (this.owner) {
        this.owner.bind(context);
      }

      bindings = this.bindings;
      for (i = 0, ii = bindings.length; i < ii; ++i) {
        bindings[i].bind(context);
      }

      behaviors = this.behaviors;
      for (i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].bind(context);
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].bind(context, true);
      }
    };

    View.prototype.addBinding = function addBinding(binding) {
      this.bindings.push(binding);

      if (this.isBound) {
        binding.bind(this.executionContext);
      }
    };

    View.prototype.unbind = function unbind() {
      var behaviors, bindings, children, i, ii;

      if (this.isBound) {
        this.isBound = false;

        if (this.owner) {
          this.owner.unbind();
        }

        bindings = this.bindings;
        for (i = 0, ii = bindings.length; i < ii; ++i) {
          bindings[i].unbind();
        }

        behaviors = this.behaviors;
        for (i = 0, ii = behaviors.length; i < ii; ++i) {
          behaviors[i].unbind();
        }

        children = this.children;
        for (i = 0, ii = children.length; i < ii; ++i) {
          children[i].unbind();
        }
      }
    };

    View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
      var parent = refNode.parentNode;
      parent.insertBefore(this.fragment, refNode);
    };

    View.prototype.appendNodesTo = function appendNodesTo(parent) {
      parent.appendChild(this.fragment);
    };

    View.prototype.removeNodes = function removeNodes() {
      var start = this.firstChild,
          end = this.lastChild,
          fragment = this.fragment,
          next;

      var current = start,
          loop = true,
          nodes = [];

      while (loop) {
        if (current === end) {
          loop = false;
        }

        next = current.nextSibling;
        this.fragment.appendChild(current);
        current = next;
      }
    };

    View.prototype.attached = function attached() {
      var behaviors, children, i, ii;

      if (this.isAttached) {
        return;
      }

      this.isAttached = true;

      if (this.owner) {
        this.owner.attached();
      }

      behaviors = this.behaviors;
      for (i = 0, ii = behaviors.length; i < ii; ++i) {
        behaviors[i].attached();
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].attached();
      }
    };

    View.prototype.detached = function detached() {
      var behaviors, children, i, ii;

      if (this.isAttached) {
        this.isAttached = false;

        if (this.owner) {
          this.owner.detached();
        }

        behaviors = this.behaviors;
        for (i = 0, ii = behaviors.length; i < ii; ++i) {
          behaviors[i].detached();
        }

        children = this.children;
        for (i = 0, ii = children.length; i < ii; ++i) {
          children[i].detached();
        }
      }
    };

    return View;
  })();

  exports.View = View;

  if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
  }

  var placeholder = [];

  function findInsertionPoint(groups, index) {
    var insertionPoint;

    while (!insertionPoint && index >= 0) {
      insertionPoint = groups[index][0];
      index--;
    }

    return insertionPoint;
  }

  var ContentSelector = (function () {
    function ContentSelector(anchor, selector) {
      _classCallCheck(this, ContentSelector);

      this.anchor = anchor;
      this.selector = selector;
      this.all = !this.selector;
      this.groups = [];
    }

    ContentSelector.applySelectors = function applySelectors(view, contentSelectors, callback) {
      var currentChild = view.fragment.firstChild,
          contentMap = new Map(),
          nextSibling,
          i,
          ii,
          contentSelector;

      while (currentChild) {
        nextSibling = currentChild.nextSibling;

        if (currentChild.viewSlot) {
          var viewSlotSelectors = contentSelectors.map(function (x) {
            return x.copyForViewSlot();
          });
          currentChild.viewSlot.installContentSelectors(viewSlotSelectors);
        } else {
          for (i = 0, ii = contentSelectors.length; i < ii; i++) {
            contentSelector = contentSelectors[i];
            if (contentSelector.matches(currentChild)) {
              var elements = contentMap.get(contentSelector);
              if (!elements) {
                elements = [];
                contentMap.set(contentSelector, elements);
              }

              elements.push(currentChild);
              break;
            }
          }
        }

        currentChild = nextSibling;
      }

      for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
        contentSelector = contentSelectors[i];
        callback(contentSelector, contentMap.get(contentSelector) || placeholder);
      }
    };

    ContentSelector.prototype.copyForViewSlot = function copyForViewSlot() {
      return new ContentSelector(this.anchor, this.selector);
    };

    ContentSelector.prototype.matches = function matches(node) {
      return this.all || node.nodeType === 1 && node.matches(this.selector);
    };

    ContentSelector.prototype.add = function add(group) {
      var anchor = this.anchor,
          parent = anchor.parentNode,
          i,
          ii;

      for (i = 0, ii = group.length; i < ii; ++i) {
        parent.insertBefore(group[i], anchor);
      }

      this.groups.push(group);
    };

    ContentSelector.prototype.insert = function insert(index, group) {
      if (group.length) {
        var anchor = findInsertionPoint(this.groups, index) || this.anchor,
            parent = anchor.parentNode,
            i,
            ii;

        for (i = 0, ii = group.length; i < ii; ++i) {
          parent.insertBefore(group[i], anchor);
        }
      }

      this.groups.splice(index, 0, group);
    };

    ContentSelector.prototype.removeAt = function removeAt(index, fragment) {
      var group = this.groups[index],
          i,
          ii;

      for (i = 0, ii = group.length; i < ii; ++i) {
        fragment.appendChild(group[i]);
      }

      this.groups.splice(index, 1);
    };

    return ContentSelector;
  })();

  exports.ContentSelector = ContentSelector;

  function getAnimatableElement(view) {
    var firstChild = view.firstChild;

    if (firstChild !== null && firstChild !== undefined && firstChild.nodeType === 8) {
      var element = nextElementSibling(firstChild);

      if (element !== null && element !== undefined && element.nodeType === 1 && element.classList.contains('au-animate')) {
        return element;
      }
    }

    return null;
  }

  var ViewSlot = (function () {
    function ViewSlot(anchor, anchorIsContainer, executionContext) {
      var animator = arguments[3] === undefined ? Animator.instance : arguments[3];

      _classCallCheck(this, ViewSlot);

      this.anchor = anchor;
      this.viewAddMethod = anchorIsContainer ? 'appendNodesTo' : 'insertNodesBefore';
      this.executionContext = executionContext;
      this.animator = animator;
      this.children = [];
      this.isBound = false;
      this.isAttached = false;
      anchor.viewSlot = this;
    }

    ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
      var parent = this.anchor;

      this.children.push({
        fragment: parent,
        firstChild: parent.firstChild,
        lastChild: parent.lastChild,
        removeNodes: function removeNodes() {
          var last;

          while (last = parent.lastChild) {
            parent.removeChild(last);
          }
        },
        created: function created() {},
        bind: function bind() {},
        unbind: function unbind() {},
        attached: function attached() {},
        detached: function detached() {}
      });
    };

    ViewSlot.prototype.bind = function bind(executionContext) {
      var i, ii, children;

      if (this.isBound) {
        if (this.executionContext === executionContext) {
          return;
        }

        this.unbind();
      }

      this.isBound = true;
      this.executionContext = executionContext = executionContext || this.executionContext;

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].bind(executionContext, true);
      }
    };

    ViewSlot.prototype.unbind = function unbind() {
      var i,
          ii,
          children = this.children;
      this.isBound = false;

      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].unbind();
      }
    };

    ViewSlot.prototype.add = function add(view) {
      view[this.viewAddMethod](this.anchor);
      this.children.push(view);

      if (this.isAttached) {
        view.attached();

        var animatableElement = getAnimatableElement(view);
        if (animatableElement !== null) {
          return this.animator.enter(animatableElement);
        }
      }
    };

    ViewSlot.prototype.insert = function insert(index, view) {
      var children = this.children,
          length = children.length;

      if (index === 0 && length === 0 || index >= length) {
        return this.add(view);
      } else {
        view.insertNodesBefore(children[index].firstChild);
        children.splice(index, 0, view);

        if (this.isAttached) {
          view.attached();

          var animatableElement = getAnimatableElement(view);
          if (animatableElement !== null) {
            return this.animator.enter(animatableElement);
          }
        }
      }
    };

    ViewSlot.prototype.remove = function remove(view) {
      return this.removeAt(this.children.indexOf(view));
    };

    ViewSlot.prototype.removeAt = function removeAt(index) {
      var _this = this;

      var view = this.children[index];

      var removeAction = function removeAction() {
        view.removeNodes();
        _this.children.splice(index, 1);

        if (_this.isAttached) {
          view.detached();
        }

        return view;
      };

      var animatableElement = getAnimatableElement(view);
      if (animatableElement !== null) {
        return this.animator.leave(animatableElement).then(function () {
          return removeAction();
        });
      }

      return removeAction();
    };

    ViewSlot.prototype.removeAll = function removeAll() {
      var _this2 = this;

      var children = this.children,
          ii = children.length,
          i;

      var rmPromises = [];

      children.forEach(function (child) {
        var animatableElement = getAnimatableElement(child);
        if (animatableElement !== null) {
          rmPromises.push(_this2.animator.leave(animatableElement).then(function () {
            return child.removeNodes();
          }));
        } else {
          child.removeNodes();
        }
      });

      var removeAction = function removeAction() {
        if (_this2.isAttached) {
          for (i = 0; i < ii; ++i) {
            children[i].detached();
          }
        }

        _this2.children = [];
      };

      if (rmPromises.length > 0) {
        return Promise.all(rmPromises).then(function () {
          return removeAction();
        });
      } else {
        removeAction();
      }
    };

    ViewSlot.prototype.swap = function swap(view) {
      var _this3 = this;

      var removeResponse = this.removeAll();

      if (removeResponse !== undefined) {
        return removeResponse.then(function () {
          return _this3.add(view);
        });
      } else {
        return this.add(view);
      }
    };

    ViewSlot.prototype.attached = function attached() {
      var i, ii, children, child;

      if (this.isAttached) {
        return;
      }

      this.isAttached = true;

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        child = children[i];
        child.attached();

        var element = child.firstChild ? nextElementSibling(child.firstChild) : null;
        if (child.firstChild && child.firstChild.nodeType === 8 && element && element.nodeType === 1 && element.classList.contains('au-animate')) {
          this.animator.enter(element);
        }
      }
    };

    ViewSlot.prototype.detached = function detached() {
      var i, ii, children;

      if (this.isAttached) {
        this.isAttached = false;
        children = this.children;
        for (i = 0, ii = children.length; i < ii; ++i) {
          children[i].detached();
        }
      }
    };

    ViewSlot.prototype.installContentSelectors = function installContentSelectors(contentSelectors) {
      this.contentSelectors = contentSelectors;
      this.add = this.contentSelectorAdd;
      this.insert = this.contentSelectorInsert;
      this.remove = this.contentSelectorRemove;
      this.removeAt = this.contentSelectorRemoveAt;
      this.removeAll = this.contentSelectorRemoveAll;
    };

    ViewSlot.prototype.contentSelectorAdd = function contentSelectorAdd(view) {
      ContentSelector.applySelectors(view, this.contentSelectors, function (contentSelector, group) {
        return contentSelector.add(group);
      });

      this.children.push(view);

      if (this.isAttached) {
        view.attached();
      }
    };

    ViewSlot.prototype.contentSelectorInsert = function contentSelectorInsert(index, view) {
      if (index === 0 && !this.children.length || index >= this.children.length) {
        this.add(view);
      } else {
        ContentSelector.applySelectors(view, this.contentSelectors, function (contentSelector, group) {
          return contentSelector.insert(index, group);
        });

        this.children.splice(index, 0, view);

        if (this.isAttached) {
          view.attached();
        }
      }
    };

    ViewSlot.prototype.contentSelectorRemove = function contentSelectorRemove(view) {
      var index = this.children.indexOf(view),
          contentSelectors = this.contentSelectors,
          i,
          ii;

      for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
        contentSelectors[i].removeAt(index, view.fragment);
      }

      this.children.splice(index, 1);

      if (this.isAttached) {
        view.detached();
      }
    };

    ViewSlot.prototype.contentSelectorRemoveAt = function contentSelectorRemoveAt(index) {
      var view = this.children[index],
          contentSelectors = this.contentSelectors,
          i,
          ii;

      for (i = 0, ii = contentSelectors.length; i < ii; ++i) {
        contentSelectors[i].removeAt(index, view.fragment);
      }

      this.children.splice(index, 1);

      if (this.isAttached) {
        view.detached();
      }

      return view;
    };

    ViewSlot.prototype.contentSelectorRemoveAll = function contentSelectorRemoveAll() {
      var children = this.children,
          contentSelectors = this.contentSelectors,
          ii = children.length,
          jj = contentSelectors.length,
          i,
          j,
          view;

      for (i = 0; i < ii; ++i) {
        view = children[i];

        for (j = 0; j < jj; ++j) {
          contentSelectors[j].removeAt(0, view.fragment);
        }
      }

      if (this.isAttached) {
        for (i = 0; i < ii; ++i) {
          children[i].detached();
        }
      }

      this.children = [];
    };

    return ViewSlot;
  })();

  exports.ViewSlot = ViewSlot;

  function elementContainerGet(key) {
    if (key === Element) {
      return this.element;
    }

    if (key === BoundViewFactory) {
      if (this.boundViewFactory) {
        return this.boundViewFactory;
      }

      var factory = this.instruction.viewFactory,
          partReplacements = this.partReplacements;

      if (partReplacements) {
        factory = partReplacements[factory.part] || factory;
      }

      return this.boundViewFactory = new BoundViewFactory(this, factory, this.executionContext, partReplacements);
    }

    if (key === ViewSlot) {
      if (this.viewSlot === undefined) {
        this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer, this.executionContext);
        this.children.push(this.viewSlot);
      }

      return this.viewSlot;
    }

    if (key === ViewResources) {
      return this.viewResources;
    }

    return this.superGet(key);
  }

  function createElementContainer(parent, element, instruction, executionContext, children, partReplacements, resources) {
    var container = parent.createChild(),
        providers,
        i;

    container.element = element;
    container.instruction = instruction;
    container.executionContext = executionContext;
    container.children = children;
    container.viewResources = resources;
    container.partReplacements = partReplacements;

    providers = instruction.providers;
    i = providers.length;

    while (i--) {
      container.registerSingleton(providers[i]);
    }

    container.superGet = container.get;
    container.get = elementContainerGet;

    return container;
  }

  function makeElementIntoAnchor(element, isCustomElement) {
    var anchor = document.createComment('anchor');

    if (isCustomElement) {
      anchor.hasAttribute = function (name) {
        return element.hasAttribute(name);
      };
      anchor.getAttribute = function (name) {
        return element.getAttribute(name);
      };
      anchor.setAttribute = function (name, value) {
        element.setAttribute(name, value);
      };
    }

    element.parentNode.replaceChild(anchor, element);

    return anchor;
  }

  function applyInstructions(containers, executionContext, element, instruction, behaviors, bindings, children, contentSelectors, partReplacements, resources) {
    var behaviorInstructions = instruction.behaviorInstructions,
        expressions = instruction.expressions,
        elementContainer,
        i,
        ii,
        current,
        instance;

    if (instruction.contentExpression) {
      bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
      element.parentNode.removeChild(element);
      return;
    }

    if (instruction.contentSelector) {
      var commentAnchor = document.createComment('anchor');
      element.parentNode.replaceChild(commentAnchor, element);
      contentSelectors.push(new ContentSelector(commentAnchor, instruction.selector));
      return;
    }

    if (behaviorInstructions.length) {
      if (!instruction.anchorIsContainer) {
        element = makeElementIntoAnchor(element, instruction.isCustomElement);
      }

      containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, executionContext, children, partReplacements, resources);

      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(elementContainer, current, element, bindings, current.partReplacements);

        if (instance.contentView) {
          children.push(instance.contentView);
        }

        behaviors.push(instance);
      }
    }

    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }

  function styleStringToObject(style, target) {
    var attributes = style.split(';'),
        firstIndexOfColon,
        i,
        current,
        key,
        value;

    target = target || {};

    for (i = 0; i < attributes.length; i++) {
      current = attributes[i];
      firstIndexOfColon = current.indexOf(':');
      key = current.substring(0, firstIndexOfColon).trim();
      value = current.substring(firstIndexOfColon + 1).trim();
      target[key] = value;
    }

    return target;
  }

  function styleObjectToString(obj) {
    var result = '';

    for (var key in obj) {
      result += key + ':' + obj[key] + ';';
    }

    return result;
  }

  function applySurrogateInstruction(container, element, instruction, behaviors, bindings, children) {
    var behaviorInstructions = instruction.behaviorInstructions,
        expressions = instruction.expressions,
        providers = instruction.providers,
        values = instruction.values,
        i = undefined,
        ii = undefined,
        current = undefined,
        instance = undefined,
        currentAttributeValue = undefined,
        styleParts = undefined;

    i = providers.length;
    while (i--) {
      container.registerSingleton(providers[i]);
    }

    for (var key in values) {
      currentAttributeValue = element.getAttribute(key);

      if (currentAttributeValue) {
        if (key === 'class') {
          if (currentAttributeValue !== 'au-target') {
            element.setAttribute('class', currentAttributeValue + ' ' + values[key]);
          }
        } else if (key === 'style') {
          var styleObject = styleStringToObject(values[key]);
          styleStringToObject(currentAttributeValue, styleObject);
          element.setAttribute('style', styleObjectToString(styleObject));
        }
      } else {
        element.setAttribute(key, values[key]);
      }
    }

    if (behaviorInstructions.length) {
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        current = behaviorInstructions[i];
        instance = current.type.create(container, current, element, bindings, current.partReplacements);

        if (instance.contentView) {
          children.push(instance.contentView);
        }

        behaviors.push(instance);
      }
    }

    for (i = 0, ii = expressions.length; i < ii; ++i) {
      bindings.push(expressions[i].createBinding(element));
    }
  }

  var BoundViewFactory = (function () {
    function BoundViewFactory(parentContainer, viewFactory, executionContext, partReplacements) {
      _classCallCheck(this, BoundViewFactory);

      this.parentContainer = parentContainer;
      this.viewFactory = viewFactory;
      this.executionContext = executionContext;
      this.factoryOptions = { behaviorInstance: false, partReplacements: partReplacements };
    }

    BoundViewFactory.prototype.create = function create(executionContext) {
      var childContainer = this.parentContainer.createChild(),
          context = executionContext || this.executionContext;

      this.factoryOptions.systemControlled = !executionContext;

      return this.viewFactory.create(childContainer, context, this.factoryOptions);
    };

    return BoundViewFactory;
  })();

  exports.BoundViewFactory = BoundViewFactory;

  var defaultFactoryOptions = {
    systemControlled: false,
    suppressBind: false,
    enhance: false
  };

  var ViewFactory = (function () {
    function ViewFactory(template, instructions, resources) {
      _classCallCheck(this, ViewFactory);

      this.template = template;
      this.instructions = instructions;
      this.resources = resources;
    }

    ViewFactory.prototype.create = function create(container, executionContext) {
      var options = arguments[2] === undefined ? defaultFactoryOptions : arguments[2];
      var element = arguments[3] === undefined ? null : arguments[3];

      var fragment = options.enhance ? this.template : this.template.cloneNode(true),
          instructables = fragment.querySelectorAll('.au-target'),
          instructions = this.instructions,
          resources = this.resources,
          behaviors = [],
          bindings = [],
          children = [],
          contentSelectors = [],
          containers = { root: container },
          partReplacements = options.partReplacements,
          i,
          ii,
          view,
          instructable,
          instruction;

      if (element !== null && this.surrogateInstruction !== null) {
        applySurrogateInstruction(container, element, this.surrogateInstruction, behaviors, bindings, children);
      }

      for (i = 0, ii = instructables.length; i < ii; ++i) {
        instructable = instructables[i];
        instruction = instructions[instructable.getAttribute('au-target-id')];

        applyInstructions(containers, executionContext, instructable, instruction, behaviors, bindings, children, contentSelectors, partReplacements, resources);
      }

      view = new View(container, fragment, behaviors, bindings, children, options.systemControlled, contentSelectors);
      view.created(executionContext);

      if (!options.suppressBind) {
        view.bind(executionContext);
      }

      return view;
    };

    return ViewFactory;
  })();

  exports.ViewFactory = ViewFactory;

  var nextInjectorId = 0,
      defaultCompileOptions = { targetShadowDOM: false },
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;

  function getNextInjectorId() {
    return ++nextInjectorId;
  }

  function configureProperties(instruction, resources) {
    var type = instruction.type,
        attrName = instruction.attrName,
        attributes = instruction.attributes,
        property,
        key,
        value;

    var knownAttribute = resources.mapAttribute(attrName);
    if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
      attributes[knownAttribute] = attributes[attrName];
      delete attributes[attrName];
    }

    for (key in attributes) {
      value = attributes[key];

      if (value !== null && typeof value === 'object') {
        property = type.attributes[key];

        if (property !== undefined) {
          value.targetProperty = property.name;
        } else {
          value.targetProperty = key;
        }
      }
    }
  }

  var lastAUTargetID = 0;
  function getNextAUTargetID() {
    return (++lastAUTargetID).toString();
  }

  function makeIntoInstructionTarget(element) {
    var value = element.getAttribute('class'),
        auTargetID = getNextAUTargetID();

    element.setAttribute('class', value ? value += ' au-target' : 'au-target');
    element.setAttribute('au-target-id', auTargetID);

    return auTargetID;
  }

  var ViewCompiler = (function () {
    function ViewCompiler(bindingLanguage) {
      _classCallCheck(this, ViewCompiler);

      this.bindingLanguage = bindingLanguage;
    }

    ViewCompiler.inject = function inject() {
      return [BindingLanguage];
    };

    ViewCompiler.prototype.compile = function compile(templateOrFragment, resources) {
      var options = arguments[2] === undefined ? defaultCompileOptions : arguments[2];

      var instructions = {},
          targetShadowDOM = options.targetShadowDOM,
          content,
          part,
          factory;

      targetShadowDOM = targetShadowDOM && hasShadowDOM;

      if (options.beforeCompile) {
        options.beforeCompile(templateOrFragment);
      }

      if (typeof templateOrFragment === 'string') {
        templateOrFragment = createTemplateFromMarkup(templateOrFragment);
      }

      if (templateOrFragment.content) {
        part = templateOrFragment.getAttribute('part');
        content = document.adoptNode(templateOrFragment.content, true);
      } else {
        content = templateOrFragment;
      }

      this.compileNode(content, resources, instructions, templateOrFragment, 'root', !targetShadowDOM);

      content.insertBefore(document.createComment('<view>'), content.firstChild);
      content.appendChild(document.createComment('</view>'));

      var factory = new ViewFactory(content, instructions, resources);
      factory.surrogateInstruction = options.compileSurrogate ? this.compileSurrogate(templateOrFragment, resources) : null;

      if (part) {
        factory.part = part;
      }

      return factory;
    };

    ViewCompiler.prototype.compileNode = function compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
      switch (node.nodeType) {
        case 1:
          return this.compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
        case 3:
          var expression = this.bindingLanguage.parseText(resources, node.wholeText);
          if (expression) {
            var marker = document.createElement('au-marker'),
                auTargetID = makeIntoInstructionTarget(marker);
            (node.parentNode || parentNode).insertBefore(marker, node);
            node.textContent = ' ';
            instructions[auTargetID] = { contentExpression: expression };

            while (node.nextSibling && node.nextSibling.nodeType === 3) {
              (node.parentNode || parentNode).removeChild(node.nextSibling);
            }
          } else {
            while (node.nextSibling && node.nextSibling.nodeType === 3) {
              node = node.nextSibling;
            }
          }
          return node.nextSibling;
        case 11:
          var currentChild = node.firstChild;
          while (currentChild) {
            currentChild = this.compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
          }
          break;
      }

      return node.nextSibling;
    };

    ViewCompiler.prototype.compileSurrogate = function compileSurrogate(node, resources) {
      var attributes = node.attributes,
          bindingLanguage = this.bindingLanguage,
          knownAttribute = undefined,
          property = undefined,
          instruction = undefined,
          i = undefined,
          ii = undefined,
          attr = undefined,
          attrName = undefined,
          attrValue = undefined,
          info = undefined,
          type = undefined,
          expressions = [],
          expression = undefined,
          behaviorInstructions = [],
          values = {},
          hasValues = false,
          providers = [];

      for (i = 0, ii = attributes.length; i < ii; ++i) {
        attr = attributes[i];
        attrName = attr.name;
        attrValue = attr.value;

        info = bindingLanguage.inspectAttribute(resources, attrName, attrValue);
        type = resources.getAttribute(info.attrName);

        if (type) {
          knownAttribute = resources.mapAttribute(info.attrName);
          if (knownAttribute) {
            property = type.attributes[knownAttribute];

            if (property) {
              info.defaultBindingMode = property.defaultBindingMode;

              if (!info.command && !info.expression) {
                info.command = property.hasOptions ? 'options' : null;
              }
            }
          }
        }

        instruction = bindingLanguage.createAttributeInstruction(resources, node, info);

        if (instruction) {
          if (instruction.alteredAttr) {
            type = resources.getAttribute(instruction.attrName);
          }

          if (instruction.discrete) {
            expressions.push(instruction);
          } else {
            if (type) {
              instruction.type = type;
              configureProperties(instruction, resources);

              if (type.liftsContent) {
                throw new Error('You cannot place a template controller on a surrogate element.');
              } else {
                behaviorInstructions.push(instruction);
              }
            } else {
              expressions.push(instruction.attributes[instruction.attrName]);
            }
          }
        } else {
          if (type) {
            instruction = { attrName: attrName, type: type, attributes: {} };
            instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

            if (type.liftsContent) {
              throw new Error('You cannot place a template controller on a surrogate element.');
            } else {
              behaviorInstructions.push(instruction);
            }
          } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
            hasValues = true;
            values[attrName] = attrValue;
          }
        }
      }

      if (expressions.length || behaviorInstructions.length || hasValues) {
        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
          instruction = behaviorInstructions[i];
          instruction.type.compile(this, resources, node, instruction);
          providers.push(instruction.type.target);
        }

        for (i = 0, ii = expressions.length; i < ii; ++i) {
          expression = expressions[i];
          if (expression.attrToRemove !== undefined) {
            node.removeAttribute(expression.attrToRemove);
          }
        }

        return {
          anchorIsContainer: false,
          isCustomElement: false,
          injectorId: null,
          parentInjectorId: null,
          expressions: expressions,
          behaviorInstructions: behaviorInstructions,
          providers: providers,
          values: values
        };
      }

      return null;
    };

    ViewCompiler.prototype.compileElement = function compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
      var tagName = node.tagName.toLowerCase(),
          attributes = node.attributes,
          expressions = [],
          expression,
          behaviorInstructions = [],
          providers = [],
          bindingLanguage = this.bindingLanguage,
          liftingInstruction,
          viewFactory,
          type,
          elementInstruction,
          elementProperty,
          i,
          ii,
          attr,
          attrName,
          attrValue,
          instruction,
          info,
          property,
          knownAttribute,
          auTargetID,
          injectorId;

      if (tagName === 'content') {
        if (targetLightDOM) {
          auTargetID = makeIntoInstructionTarget(node);
          instructions[auTargetID] = {
            parentInjectorId: parentInjectorId,
            contentSelector: true,
            selector: node.getAttribute('select'),
            suppressBind: true
          };
        }
        return node.nextSibling;
      } else if (tagName === 'template') {
        viewFactory = this.compile(node, resources);
        viewFactory.part = node.getAttribute('part');
      } else {
        type = resources.getElement(tagName);
        if (type) {
          elementInstruction = { type: type, attributes: {} };
          elementInstruction.anchorIsContainer = !node.hasAttribute('containerless') && !type.containerless;
          behaviorInstructions.push(elementInstruction);
        }
      }

      for (i = 0, ii = attributes.length; i < ii; ++i) {
        attr = attributes[i];
        attrName = attr.name;
        attrValue = attr.value;
        info = bindingLanguage.inspectAttribute(resources, attrName, attrValue);
        type = resources.getAttribute(info.attrName);
        elementProperty = null;

        if (type) {
          knownAttribute = resources.mapAttribute(info.attrName);
          if (knownAttribute) {
            property = type.attributes[knownAttribute];

            if (property) {
              info.defaultBindingMode = property.defaultBindingMode;

              if (!info.command && !info.expression) {
                info.command = property.hasOptions ? 'options' : null;
              }
            }
          }
        } else if (elementInstruction) {
          elementProperty = elementInstruction.type.attributes[info.attrName];
          if (elementProperty) {
            info.defaultBindingMode = elementProperty.defaultBindingMode;

            if (!info.command && !info.expression) {
              info.command = elementProperty.hasOptions ? 'options' : null;
            }
          }
        }

        if (elementProperty) {
          instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
        } else {
          instruction = bindingLanguage.createAttributeInstruction(resources, node, info);
        }

        if (instruction) {
          if (instruction.alteredAttr) {
            type = resources.getAttribute(instruction.attrName);
          }

          if (instruction.discrete) {
            expressions.push(instruction);
          } else {
            if (type) {
              instruction.type = type;
              configureProperties(instruction, resources);

              if (type.liftsContent) {
                instruction.originalAttrName = attrName;
                liftingInstruction = instruction;
                break;
              } else {
                behaviorInstructions.push(instruction);
              }
            } else if (elementProperty) {
              elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
            } else {
              expressions.push(instruction.attributes[instruction.attrName]);
            }
          }
        } else {
          if (type) {
            instruction = { attrName: attrName, type: type, attributes: {} };
            instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

            if (type.liftsContent) {
              instruction.originalAttrName = attrName;
              liftingInstruction = instruction;
              break;
            } else {
              behaviorInstructions.push(instruction);
            }
          } else if (elementProperty) {
            elementInstruction.attributes[attrName] = attrValue;
          }
        }
      }

      if (liftingInstruction) {
        liftingInstruction.viewFactory = viewFactory;
        node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
        auTargetID = makeIntoInstructionTarget(node);
        instructions[auTargetID] = {
          anchorIsContainer: false,
          parentInjectorId: parentInjectorId,
          expressions: [],
          behaviorInstructions: [liftingInstruction],
          viewFactory: liftingInstruction.viewFactory,
          providers: [liftingInstruction.type.target]
        };
      } else {
        if (expressions.length || behaviorInstructions.length) {
          injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

          for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
            instruction = behaviorInstructions[i];
            instruction.type.compile(this, resources, node, instruction, parentNode);
            providers.push(instruction.type.target);
          }

          for (i = 0, ii = expressions.length; i < ii; ++i) {
            expression = expressions[i];
            if (expression.attrToRemove !== undefined) {
              node.removeAttribute(expression.attrToRemove);
            }
          }

          auTargetID = makeIntoInstructionTarget(node);
          instructions[auTargetID] = {
            anchorIsContainer: elementInstruction ? elementInstruction.anchorIsContainer : true,
            isCustomElement: !!elementInstruction,
            injectorId: injectorId,
            parentInjectorId: parentInjectorId,
            expressions: expressions,
            behaviorInstructions: behaviorInstructions,
            providers: providers
          };
        }

        if (elementInstruction && elementInstruction.skipContentProcessing) {
          return node.nextSibling;
        }

        var currentChild = node.firstChild;
        while (currentChild) {
          currentChild = this.compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
        }
      }

      return node.nextSibling;
    };

    return ViewCompiler;
  })();

  exports.ViewCompiler = ViewCompiler;

  var logger = _aureliaLogging.getLogger('templating');

  function ensureRegistryEntry(loader, urlOrRegistryEntry) {
    if (urlOrRegistryEntry instanceof _aureliaLoader.TemplateRegistryEntry) {
      return Promise.resolve(urlOrRegistryEntry);
    }

    return loader.loadTemplate(urlOrRegistryEntry);
  }

  var ProxyViewFactory = (function () {
    function ProxyViewFactory(promise) {
      var _this4 = this;

      _classCallCheck(this, ProxyViewFactory);

      promise.then(function (x) {
        return _this4.absorb(x);
      });
    }

    ProxyViewFactory.prototype.absorb = function absorb(factory) {
      this.create = factory.create.bind(factory);
    };

    return ProxyViewFactory;
  })();

  var ViewEngine = (function () {
    function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
      _classCallCheck(this, ViewEngine);

      this.loader = loader;
      this.container = container;
      this.viewCompiler = viewCompiler;
      this.moduleAnalyzer = moduleAnalyzer;
      this.appResources = appResources;
    }

    ViewEngine.inject = function inject() {
      return [_aureliaLoader.Loader, _aureliaDependencyInjection.Container, ViewCompiler, ModuleAnalyzer, ResourceRegistry];
    };

    ViewEngine.prototype.enhance = function enhance(container, element, resources, bindingContext) {
      var instructions = {};

      this.viewCompiler.compileNode(element, resources, instructions, element.parentNode, 'root', true);

      var factory = new ViewFactory(element, instructions, resources);
      var options = {
        systemControlled: false,
        suppressBind: false,
        enhance: true
      };

      return factory.create(container, bindingContext, options);
    };

    ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileOptions, associatedModuleId, loadContext) {
      var _this5 = this;

      loadContext = loadContext || [];

      return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (viewRegistryEntry) {
        if (viewRegistryEntry.onReady) {
          if (loadContext.indexOf(urlOrRegistryEntry) === -1) {
            loadContext.push(urlOrRegistryEntry);
            return viewRegistryEntry.onReady;
          }

          return Promise.resolve(new ProxyViewFactory(viewRegistryEntry.onReady));
        }

        loadContext.push(urlOrRegistryEntry);

        return viewRegistryEntry.onReady = _this5.loadTemplateResources(viewRegistryEntry, associatedModuleId, loadContext).then(function (resources) {
          viewRegistryEntry.setResources(resources);
          var viewFactory = _this5.viewCompiler.compile(viewRegistryEntry.template, resources, compileOptions);
          viewRegistryEntry.setFactory(viewFactory);
          return viewFactory;
        });
      });
    };

    ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(viewRegistryEntry, associatedModuleId, loadContext) {
      var resources = new ViewResources(this.appResources, viewRegistryEntry.id),
          dependencies = viewRegistryEntry.dependencies,
          importIds,
          names;

      if (dependencies.length === 0 && !associatedModuleId) {
        return Promise.resolve(resources);
      }

      importIds = dependencies.map(function (x) {
        return x.src;
      });
      names = dependencies.map(function (x) {
        return x.name;
      });
      logger.debug('importing resources for ' + viewRegistryEntry.id, importIds);

      return this.importViewResources(importIds, names, resources, associatedModuleId, loadContext);
    };

    ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
      var _this6 = this;

      return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
        var normalizedId = _aureliaMetadata.Origin.get(viewModelModule).moduleId,
            resourceModule = _this6.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

        if (!resourceModule.mainResource) {
          throw new Error('No view model found in module "' + moduleImport + '".');
        }

        resourceModule.analyze(_this6.container);

        return resourceModule.mainResource;
      });
    };

    ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, associatedModuleId, loadContext) {
      var _this7 = this;

      loadContext = loadContext || [];

      return this.loader.loadAllModules(moduleIds).then(function (imports) {
        var i,
            ii,
            analysis,
            normalizedId,
            current,
            associatedModule,
            container = _this7.container,
            moduleAnalyzer = _this7.moduleAnalyzer,
            allAnalysis = new Array(imports.length);

        for (i = 0, ii = imports.length; i < ii; ++i) {
          current = imports[i];
          normalizedId = _aureliaMetadata.Origin.get(current).moduleId;

          analysis = moduleAnalyzer.analyze(normalizedId, current);
          analysis.analyze(container);
          analysis.register(resources, names[i]);

          allAnalysis[i] = analysis;
        }

        if (associatedModuleId) {
          associatedModule = moduleAnalyzer.getAnalysis(associatedModuleId);

          if (associatedModule) {
            associatedModule.register(resources);
          }
        }

        for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
          allAnalysis[i] = allAnalysis[i].load(container, loadContext);
        }

        return Promise.all(allAnalysis).then(function () {
          return resources;
        });
      });
    };

    return ViewEngine;
  })();

  exports.ViewEngine = ViewEngine;

  var BehaviorInstance = (function () {
    function BehaviorInstance(behavior, executionContext, instruction) {
      _classCallCheck(this, BehaviorInstance);

      this.behavior = behavior;
      this.executionContext = executionContext;
      this.isAttached = false;

      var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(executionContext),
          handlesBind = behavior.handlesBind,
          attributes = instruction.attributes,
          boundProperties = this.boundProperties = [],
          properties = behavior.properties,
          i,
          ii;

      behavior.ensurePropertiesDefined(executionContext, observerLookup);

      for (i = 0, ii = properties.length; i < ii; ++i) {
        properties[i].initialize(executionContext, observerLookup, attributes, handlesBind, boundProperties);
      }
    }

    BehaviorInstance.createForUnitTest = function createForUnitTest(type, attributes, bindingContext) {
      var description = ResourceDescription.get(type);
      description.analyze(_aureliaDependencyInjection.Container.instance);

      var executionContext = _aureliaDependencyInjection.Container.instance.get(type);
      var behaviorInstance = new BehaviorInstance(description.metadata, executionContext, { attributes: attributes || {} });

      behaviorInstance.bind(bindingContext || {});

      return executionContext;
    };

    BehaviorInstance.prototype.created = function created(context) {
      if (this.behavior.handlesCreated) {
        this.executionContext.created(context);
      }
    };

    BehaviorInstance.prototype.bind = function bind(context) {
      var skipSelfSubscriber = this.behavior.handlesBind,
          boundProperties = this.boundProperties,
          i,
          ii,
          x,
          observer,
          selfSubscriber;

      for (i = 0, ii = boundProperties.length; i < ii; ++i) {
        x = boundProperties[i];
        observer = x.observer;
        selfSubscriber = observer.selfSubscriber;
        observer.publishing = false;

        if (skipSelfSubscriber) {
          observer.selfSubscriber = null;
        }

        x.binding.bind(context);
        observer.call();

        observer.publishing = true;
        observer.selfSubscriber = selfSubscriber;
      }

      if (skipSelfSubscriber) {
        this.executionContext.bind(context);
      }

      if (this.view) {
        this.view.bind(this.executionContext);
      }
    };

    BehaviorInstance.prototype.unbind = function unbind() {
      var boundProperties = this.boundProperties,
          i,
          ii;

      if (this.view) {
        this.view.unbind();
      }

      if (this.behavior.handlesUnbind) {
        this.executionContext.unbind();
      }

      for (i = 0, ii = boundProperties.length; i < ii; ++i) {
        boundProperties[i].binding.unbind();
      }
    };

    BehaviorInstance.prototype.attached = function attached() {
      if (this.isAttached) {
        return;
      }

      this.isAttached = true;

      if (this.behavior.handlesAttached) {
        this.executionContext.attached();
      }

      if (this.view) {
        this.view.attached();
      }
    };

    BehaviorInstance.prototype.detached = function detached() {
      if (this.isAttached) {
        this.isAttached = false;

        if (this.view) {
          this.view.detached();
        }

        if (this.behavior.handlesDetached) {
          this.executionContext.detached();
        }
      }
    };

    return BehaviorInstance;
  })();

  exports.BehaviorInstance = BehaviorInstance;

  function getObserver(behavior, instance, name) {
    var lookup = instance.__observers__;

    if (lookup === undefined) {
      lookup = behavior.observerLocator.getOrCreateObserversLookup(instance);
      behavior.ensurePropertiesDefined(instance, lookup);
    }

    return lookup[name];
  }

  var BindableProperty = (function () {
    function BindableProperty(nameOrConfig) {
      _classCallCheck(this, BindableProperty);

      if (typeof nameOrConfig === 'string') {
        this.name = nameOrConfig;
      } else {
        Object.assign(this, nameOrConfig);
      }

      this.attribute = this.attribute || hyphenate(this.name);
      this.defaultBindingMode = this.defaultBindingMode || _aureliaBinding.bindingMode.oneWay;
      this.changeHandler = this.changeHandler || null;
      this.owner = null;
    }

    BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
      behavior.properties.push(this);
      behavior.attributes[this.attribute] = this;
      this.owner = behavior;

      if (descriptor) {
        this.descriptor = descriptor;
        return this.configureDescriptor(behavior, descriptor);
      }
    };

    BindableProperty.prototype.configureDescriptor = function configureDescriptor(behavior, descriptor) {
      var name = this.name;

      descriptor.configurable = true;
      descriptor.enumerable = true;

      if ('initializer' in descriptor) {
        this.defaultValue = descriptor.initializer;
        delete descriptor.initializer;
        delete descriptor.writable;
      }

      if ('value' in descriptor) {
        this.defaultValue = descriptor.value;
        delete descriptor.value;
        delete descriptor.writable;
      }

      descriptor.get = function () {
        return getObserver(behavior, this, name).getValue();
      };

      descriptor.set = function (value) {
        getObserver(behavior, this, name).setValue(value);
      };

      descriptor.get.getObserver = function (obj) {
        return getObserver(behavior, obj, name);
      };

      return descriptor;
    };

    BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
      var name = this.name,
          handlerName;

      if (this.changeHandler === null) {
        handlerName = name + 'Changed';
        if (handlerName in target.prototype) {
          this.changeHandler = handlerName;
        }
      }

      if (!this.descriptor) {
        Object.defineProperty(target.prototype, name, this.configureDescriptor(behavior, {}));
      }
    };

    BindableProperty.prototype.createObserver = function createObserver(executionContext) {
      var selfSubscriber = null,
          defaultValue = this.defaultValue,
          changeHandlerName = this.changeHandler,
          name = this.name,
          initialValue;

      if (this.hasOptions) {
        return;
      }

      if (changeHandlerName in executionContext) {
        if ('propertyChanged' in executionContext) {
          selfSubscriber = function (newValue, oldValue) {
            executionContext[changeHandlerName](newValue, oldValue);
            executionContext.propertyChanged(name, newValue, oldValue);
          };
        } else {
          selfSubscriber = function (newValue, oldValue) {
            return executionContext[changeHandlerName](newValue, oldValue);
          };
        }
      } else if ('propertyChanged' in executionContext) {
        selfSubscriber = function (newValue, oldValue) {
          return executionContext.propertyChanged(name, newValue, oldValue);
        };
      } else if (changeHandlerName !== null) {
        throw new Error('Change handler ' + changeHandlerName + ' was specified but not delcared on the class.');
      }

      if (defaultValue !== undefined) {
        initialValue = typeof defaultValue === 'function' ? defaultValue.call(executionContext) : defaultValue;
      }

      return new BehaviorPropertyObserver(this.owner.taskQueue, executionContext, this.name, selfSubscriber, initialValue);
    };

    BindableProperty.prototype.initialize = function initialize(executionContext, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
      var selfSubscriber,
          observer,
          attribute,
          defaultValue = this.defaultValue;

      if (this.isDynamic) {
        for (var key in attributes) {
          this.createDynamicProperty(executionContext, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
        }
      } else if (!this.hasOptions) {
        observer = observerLookup[this.name];

        if (attributes !== undefined) {
          selfSubscriber = observer.selfSubscriber;
          attribute = attributes[this.attribute];

          if (behaviorHandlesBind) {
            observer.selfSubscriber = null;
          }

          if (typeof attribute === 'string') {
            executionContext[this.name] = attribute;
            observer.call();
          } else if (attribute) {
            boundProperties.push({ observer: observer, binding: attribute.createBinding(executionContext) });
          } else if (defaultValue !== undefined) {
            observer.call();
          }

          observer.selfSubscriber = selfSubscriber;
        }

        observer.publishing = true;
      }
    };

    BindableProperty.prototype.createDynamicProperty = function createDynamicProperty(executionContext, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
      var changeHandlerName = name + 'Changed',
          selfSubscriber = null,
          observer,
          info;

      if (changeHandlerName in executionContext) {
        if ('propertyChanged' in executionContext) {
          selfSubscriber = function (newValue, oldValue) {
            executionContext[changeHandlerName](newValue, oldValue);
            executionContext.propertyChanged(name, newValue, oldValue);
          };
        } else {
          selfSubscriber = function (newValue, oldValue) {
            return executionContext[changeHandlerName](newValue, oldValue);
          };
        }
      } else if ('propertyChanged' in executionContext) {
        selfSubscriber = function (newValue, oldValue) {
          return executionContext.propertyChanged(name, newValue, oldValue);
        };
      }

      observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, executionContext, name, selfSubscriber);

      Object.defineProperty(executionContext, name, {
        configurable: true,
        enumerable: true,
        get: observer.getValue.bind(observer),
        set: observer.setValue.bind(observer)
      });

      if (behaviorHandlesBind) {
        observer.selfSubscriber = null;
      }

      if (typeof attribute === 'string') {
        executionContext[name] = attribute;
        observer.call();
      } else if (attribute) {
        info = { observer: observer, binding: attribute.createBinding(executionContext) };
        boundProperties.push(info);
      }

      observer.publishing = true;
      observer.selfSubscriber = selfSubscriber;
    };

    return BindableProperty;
  })();

  exports.BindableProperty = BindableProperty;

  var BehaviorPropertyObserver = (function () {
    function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
      _classCallCheck(this, BehaviorPropertyObserver);

      this.taskQueue = taskQueue;
      this.obj = obj;
      this.propertyName = propertyName;
      this.callbacks = [];
      this.notqueued = true;
      this.publishing = false;
      this.selfSubscriber = selfSubscriber;
      this.currentValue = this.oldValue = initialValue;
    }

    BehaviorPropertyObserver.prototype.getValue = function getValue() {
      return this.currentValue;
    };

    BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
      var oldValue = this.currentValue;

      if (oldValue !== newValue) {
        if (this.publishing && this.notqueued) {
          this.notqueued = false;
          this.taskQueue.queueMicroTask(this);
        }

        this.oldValue = oldValue;
        this.currentValue = newValue;
      }
    };

    BehaviorPropertyObserver.prototype.call = function call() {
      var callbacks = this.callbacks,
          i = callbacks.length,
          oldValue = this.oldValue,
          newValue = this.currentValue;

      this.notqueued = true;

      if (newValue !== oldValue) {
        if (this.selfSubscriber !== null) {
          this.selfSubscriber(newValue, oldValue);
        }

        while (i--) {
          callbacks[i](newValue, oldValue);
        }

        this.oldValue = newValue;
      }
    };

    BehaviorPropertyObserver.prototype.subscribe = function subscribe(callback) {
      var callbacks = this.callbacks;
      callbacks.push(callback);
      return function () {
        callbacks.splice(callbacks.indexOf(callback), 1);
      };
    };

    return BehaviorPropertyObserver;
  })();

  var defaultInstruction = { suppressBind: false },
      contentSelectorFactoryOptions = { suppressBind: true, enhance: false },
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;

  function doProcessContent() {
    return true;
  }

  var HtmlBehaviorResource = (function () {
    function HtmlBehaviorResource() {
      _classCallCheck(this, HtmlBehaviorResource);

      this.elementName = null;
      this.attributeName = null;
      this.attributeDefaultBindingMode = undefined;
      this.liftsContent = false;
      this.targetShadowDOM = false;
      this.processContent = doProcessContent;
      this.usesShadowDOM = false;
      this.childBindings = null;
      this.hasDynamicOptions = false;
      this.containerless = false;
      this.properties = [];
      this.attributes = {};
    }

    HtmlBehaviorResource.convention = function convention(name, existing) {
      var behavior;

      if (name.endsWith('CustomAttribute')) {
        behavior = existing || new HtmlBehaviorResource();
        behavior.attributeName = hyphenate(name.substring(0, name.length - 15));
      }

      if (name.endsWith('CustomElement')) {
        behavior = existing || new HtmlBehaviorResource();
        behavior.elementName = hyphenate(name.substring(0, name.length - 13));
      }

      return behavior;
    };

    HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
      if (this.childBindings === null) {
        this.childBindings = [];
      }

      this.childBindings.push(behavior);
    };

    HtmlBehaviorResource.prototype.analyze = function analyze(container, target) {
      var proto = target.prototype,
          properties = this.properties,
          attributeName = this.attributeName,
          attributeDefaultBindingMode = this.attributeDefaultBindingMode,
          i,
          ii,
          current;

      this.observerLocator = container.get(_aureliaBinding.ObserverLocator);
      this.taskQueue = container.get(_aureliaTaskQueue.TaskQueue);

      this.target = target;
      this.usesShadowDOM = this.targetShadowDOM && hasShadowDOM;
      this.handlesCreated = 'created' in proto;
      this.handlesBind = 'bind' in proto;
      this.handlesUnbind = 'unbind' in proto;
      this.handlesAttached = 'attached' in proto;
      this.handlesDetached = 'detached' in proto;
      this.htmlName = this.elementName || this.attributeName;
      this.apiName = this.htmlName.replace(/-([a-z])/g, function (m, w) {
        return w.toUpperCase();
      });

      if (attributeName !== null) {
        if (properties.length === 0) {
          new BindableProperty({
            name: 'value',
            changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
            attribute: attributeName,
            defaultBindingMode: attributeDefaultBindingMode
          }).registerWith(target, this);
        }

        current = properties[0];

        if (properties.length === 1 && current.name === 'value') {
          current.isDynamic = current.hasOptions = this.hasDynamicOptions;
          current.defineOn(target, this);
        } else {
          for (i = 0, ii = properties.length; i < ii; ++i) {
            properties[i].defineOn(target, this);
          }

          current = new BindableProperty({
            name: 'value',
            changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
            attribute: attributeName,
            defaultBindingMode: attributeDefaultBindingMode
          });

          current.hasOptions = true;
          current.registerWith(target, this);
        }
      } else {
        for (i = 0, ii = properties.length; i < ii; ++i) {
          properties[i].defineOn(target, this);
        }
      }
    };

    HtmlBehaviorResource.prototype.load = function load(container, target, viewStrategy, transientView, loadContext) {
      var _this8 = this;

      var options;

      if (this.elementName !== null) {
        viewStrategy = viewStrategy || this.viewStrategy || ViewStrategy.getDefault(target);
        options = {
          targetShadowDOM: this.targetShadowDOM,
          beforeCompile: target.beforeCompile,
          compileSurrogate: true
        };

        if (!viewStrategy.moduleId) {
          viewStrategy.moduleId = _aureliaMetadata.Origin.get(target).moduleId;
        }

        return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext).then(function (viewFactory) {
          if (!transientView || !_this8.viewFactory) {
            _this8.viewFactory = viewFactory;
          }

          return viewFactory;
        });
      }

      return Promise.resolve(this);
    };

    HtmlBehaviorResource.prototype.register = function register(registry, name) {
      if (this.attributeName !== null) {
        registry.registerAttribute(name || this.attributeName, this, this.attributeName);
      }

      if (this.elementName !== null) {
        registry.registerElement(name || this.elementName, this);
      }
    };

    HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
      if (this.liftsContent) {
        if (!instruction.viewFactory) {
          var template = document.createElement('template'),
              fragment = document.createDocumentFragment(),
              part = node.getAttribute('part');

          node.removeAttribute(instruction.originalAttrName);
          replaceNode(template, node, parentNode);
          fragment.appendChild(node);
          instruction.viewFactory = compiler.compile(fragment, resources);

          if (part) {
            instruction.viewFactory.part = part;
            node.removeAttribute('part');
          }

          node = template;
        }
      } else if (this.elementName !== null) {
        var partReplacements = instruction.partReplacements = {};

        if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
          if (this.usesShadowDOM) {
            var currentChild = node.firstChild,
                nextSibling,
                toReplace;

            while (currentChild) {
              nextSibling = currentChild.nextSibling;

              if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
                partReplacements[toReplace] = compiler.compile(currentChild, resources);
                removeNode(currentChild, parentNode);
              }

              currentChild = nextSibling;
            }

            instruction.skipContentProcessing = false;
          } else {
            var fragment = document.createDocumentFragment(),
                currentChild = node.firstChild,
                nextSibling;

            while (currentChild) {
              nextSibling = currentChild.nextSibling;

              if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
                partReplacements[toReplace] = compiler.compile(currentChild, resources);
                removeNode(currentChild, parentNode);
              } else {
                fragment.appendChild(currentChild);
              }

              currentChild = nextSibling;
            }

            instruction.contentFactory = compiler.compile(fragment, resources);
            instruction.skipContentProcessing = true;
          }
        } else {
          instruction.skipContentProcessing = true;
        }
      }

      instruction.suppressBind = true;
      return node;
    };

    HtmlBehaviorResource.prototype.create = function create(container) {
      var instruction = arguments[1] === undefined ? defaultInstruction : arguments[1];
      var element = arguments[2] === undefined ? null : arguments[2];
      var bindings = arguments[3] === undefined ? null : arguments[3];

      var host = undefined;

      if (this.elementName !== null && element) {
        if (this.usesShadowDOM) {
          host = element.createShadowRoot();
          container.registerInstance(DOMBoundary, host);
        } else {
          host = element;

          if (this.targetShadowDOM) {
            container.registerInstance(DOMBoundary, host);
          }
        }
      }

      var executionContext = instruction.executionContext || container.get(this.target),
          behaviorInstance = new BehaviorInstance(this, executionContext, instruction),
          childBindings = this.childBindings,
          viewFactory = undefined;

      if (this.liftsContent) {
        element.primaryBehavior = behaviorInstance;
      } else if (this.elementName !== null) {
        viewFactory = instruction.viewFactory || this.viewFactory;
        container.viewModel = executionContext;

        if (viewFactory) {
          behaviorInstance.view = viewFactory.create(container, executionContext, instruction, element);
        }

        if (element) {
          element.primaryBehavior = behaviorInstance;

          if (behaviorInstance.view) {
            if (!this.usesShadowDOM) {
              if (instruction.contentFactory) {
                var contentView = instruction.contentFactory.create(container, null, contentSelectorFactoryOptions);

                ContentSelector.applySelectors(contentView, behaviorInstance.view.contentSelectors, function (contentSelector, group) {
                  return contentSelector.add(group);
                });

                behaviorInstance.contentView = contentView;
              }
            }

            if (instruction.anchorIsContainer) {
              if (childBindings !== null) {
                for (var i = 0, ii = childBindings.length; i < ii; ++i) {
                  behaviorInstance.view.addBinding(childBindings[i].create(host, executionContext));
                }
              }

              behaviorInstance.view.appendNodesTo(host);
            } else {
              behaviorInstance.view.insertNodesBefore(host);
            }
          } else if (childBindings !== null) {
            for (var i = 0, ii = childBindings.length; i < ii; ++i) {
              bindings.push(childBindings[i].create(element, executionContext));
            }
          }
        } else if (behaviorInstance.view) {
          behaviorInstance.view.owner = behaviorInstance;

          if (childBindings !== null) {
            for (var i = 0, ii = childBindings.length; i < ii; ++i) {
              behaviorInstance.view.addBinding(childBindings[i].create(instruction.host, executionContext));
            }
          }
        } else if (childBindings !== null) {
          for (var i = 0, ii = childBindings.length; i < ii; ++i) {
            bindings.push(childBindings[i].create(instruction.host, executionContext));
          }
        }
      } else if (childBindings !== null) {
        for (var i = 0, ii = childBindings.length; i < ii; ++i) {
          bindings.push(childBindings[i].create(element, executionContext));
        }
      }

      if (element) {
        if (!(this.apiName in element)) {
          element[this.apiName] = executionContext;
        }

        if (!(this.htmlName in element)) {
          element[this.htmlName] = behaviorInstance;
        }
      }

      return behaviorInstance;
    };

    HtmlBehaviorResource.prototype.ensurePropertiesDefined = function ensurePropertiesDefined(instance, lookup) {
      var properties, i, ii, observer;

      if ('__propertiesDefined__' in lookup) {
        return;
      }

      lookup.__propertiesDefined__ = true;
      properties = this.properties;

      for (i = 0, ii = properties.length; i < ii; ++i) {
        observer = properties[i].createObserver(instance);

        if (observer !== undefined) {
          lookup[observer.propertyName] = observer;
        }
      }
    };

    return HtmlBehaviorResource;
  })();

  exports.HtmlBehaviorResource = HtmlBehaviorResource;

  var ResourceModule = (function () {
    function ResourceModule(moduleId) {
      _classCallCheck(this, ResourceModule);

      this.id = moduleId;
      this.moduleInstance = null;
      this.mainResource = null;
      this.resources = null;
      this.viewStrategy = null;
      this.isAnalyzed = false;
    }

    ResourceModule.prototype.analyze = function analyze(container) {
      var current = this.mainResource,
          resources = this.resources,
          viewStrategy = this.viewStrategy,
          i,
          ii;

      if (this.isAnalyzed) {
        return;
      }

      this.isAnalyzed = true;

      if (current) {
        current.metadata.viewStrategy = viewStrategy;
        current.analyze(container);
      }

      for (i = 0, ii = resources.length; i < ii; ++i) {
        current = resources[i];
        current.metadata.viewStrategy = viewStrategy;
        current.analyze(container);
      }
    };

    ResourceModule.prototype.register = function register(registry, name) {
      var i,
          ii,
          resources = this.resources;

      if (this.mainResource) {
        this.mainResource.register(registry, name);
        name = null;
      }

      for (i = 0, ii = resources.length; i < ii; ++i) {
        resources[i].register(registry, name);
        name = null;
      }
    };

    ResourceModule.prototype.load = function load(container, loadContext) {
      if (this.onLoaded) {
        return this.onLoaded;
      }

      var current = this.mainResource,
          resources = this.resources,
          i,
          ii,
          loads = [];

      if (current) {
        loads.push(current.load(container, loadContext));
      }

      for (i = 0, ii = resources.length; i < ii; ++i) {
        loads.push(resources[i].load(container, loadContext));
      }

      this.onLoaded = Promise.all(loads);
      return this.onLoaded;
    };

    return ResourceModule;
  })();

  exports.ResourceModule = ResourceModule;

  var ResourceDescription = (function () {
    function ResourceDescription(key, exportedValue, resourceTypeMeta) {
      _classCallCheck(this, ResourceDescription);

      if (!resourceTypeMeta) {
        resourceTypeMeta = _aureliaMetadata.Metadata.get(_aureliaMetadata.Metadata.resource, exportedValue);

        if (!resourceTypeMeta) {
          resourceTypeMeta = new HtmlBehaviorResource();
          resourceTypeMeta.elementName = hyphenate(key);
          _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, resourceTypeMeta, exportedValue);
        }
      }

      if (resourceTypeMeta instanceof HtmlBehaviorResource) {
        if (resourceTypeMeta.elementName === undefined) {
          resourceTypeMeta.elementName = hyphenate(key);
        } else if (resourceTypeMeta.attributeName === undefined) {
          resourceTypeMeta.attributeName = hyphenate(key);
        } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          HtmlBehaviorResource.convention(key, resourceTypeMeta);
        }
      } else if (!resourceTypeMeta.name) {
        resourceTypeMeta.name = hyphenate(key);
      }

      this.metadata = resourceTypeMeta;
      this.value = exportedValue;
    }

    ResourceDescription.prototype.analyze = function analyze(container) {
      var metadata = this.metadata,
          value = this.value;

      if ('analyze' in metadata) {
        metadata.analyze(container, value);
      }
    };

    ResourceDescription.prototype.register = function register(registry, name) {
      this.metadata.register(registry, name);
    };

    ResourceDescription.prototype.load = function load(container, loadContext) {
      var metadata = this.metadata,
          value = this.value;

      if ('load' in metadata) {
        return metadata.load(container, value, null, null, loadContext);
      }
    };

    ResourceDescription.get = function get(resource) {
      var key = arguments[1] === undefined ? 'custom-resource' : arguments[1];

      var resourceTypeMeta = _aureliaMetadata.Metadata.get(_aureliaMetadata.Metadata.resource, resource),
          resourceDescription;

      if (resourceTypeMeta) {
        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          HtmlBehaviorResource.convention(key, resourceTypeMeta);
        }

        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          resourceTypeMeta.elementName = hyphenate(key);
        }

        resourceDescription = new ResourceDescription(key, resource, resourceTypeMeta);
      } else {
        if (resourceTypeMeta = HtmlBehaviorResource.convention(key)) {
          resourceDescription = new ResourceDescription(key, resource, resourceTypeMeta);
          _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, resourceTypeMeta, resource);
        } else if (resourceTypeMeta = _aureliaBinding.ValueConverterResource.convention(key)) {
          resourceDescription = new ResourceDescription(key, resource, resourceTypeMeta);
          _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, resourceTypeMeta, resource);
        }
      }

      return resourceDescription;
    };

    return ResourceDescription;
  })();

  exports.ResourceDescription = ResourceDescription;

  var ModuleAnalyzer = (function () {
    function ModuleAnalyzer() {
      _classCallCheck(this, ModuleAnalyzer);

      this.cache = {};
    }

    ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
      return this.cache[moduleId];
    };

    ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, viewModelMember) {
      var mainResource,
          fallbackValue,
          fallbackKey,
          resourceTypeMeta,
          key,
          exportedValue,
          resources = [],
          conventional,
          viewStrategy,
          resourceModule;

      resourceModule = this.cache[moduleId];
      if (resourceModule) {
        return resourceModule;
      }

      resourceModule = new ResourceModule(moduleId);
      this.cache[moduleId] = resourceModule;

      if (typeof moduleInstance === 'function') {
        moduleInstance = { 'default': moduleInstance };
      }

      if (viewModelMember) {
        mainResource = new ResourceDescription(viewModelMember, moduleInstance[viewModelMember]);
      }

      for (key in moduleInstance) {
        exportedValue = moduleInstance[key];

        if (key === viewModelMember || typeof exportedValue !== 'function') {
          continue;
        }

        resourceTypeMeta = _aureliaMetadata.Metadata.get(_aureliaMetadata.Metadata.resource, exportedValue);

        if (resourceTypeMeta) {
          if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
            HtmlBehaviorResource.convention(key, resourceTypeMeta);
          }

          if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
            resourceTypeMeta.elementName = hyphenate(key);
          }

          if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
            mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
          } else {
            resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
          }
        } else if (exportedValue instanceof ViewStrategy) {
          viewStrategy = exportedValue;
        } else if (exportedValue instanceof _aureliaLoader.TemplateRegistryEntry) {
          viewStrategy = new TemplateRegistryViewStrategy(moduleId, exportedValue);
        } else {
          if (conventional = HtmlBehaviorResource.convention(key)) {
            if (conventional.elementName !== null && !mainResource) {
              mainResource = new ResourceDescription(key, exportedValue, conventional);
            } else {
              resources.push(new ResourceDescription(key, exportedValue, conventional));
            }

            _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, conventional, exportedValue);
          } else if (conventional = _aureliaBinding.ValueConverterResource.convention(key)) {
            resources.push(new ResourceDescription(key, exportedValue, conventional));
            _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, conventional, exportedValue);
          } else if (!fallbackValue) {
            fallbackValue = exportedValue;
            fallbackKey = key;
          }
        }
      }

      if (!mainResource && fallbackValue) {
        mainResource = new ResourceDescription(fallbackKey, fallbackValue);
      }

      resourceModule.moduleInstance = moduleInstance;
      resourceModule.mainResource = mainResource;
      resourceModule.resources = resources;
      resourceModule.viewStrategy = viewStrategy;

      return resourceModule;
    };

    return ModuleAnalyzer;
  })();

  exports.ModuleAnalyzer = ModuleAnalyzer;

  var noMutations = [];

  var ChildObserver = (function () {
    function ChildObserver(config) {
      _classCallCheck(this, ChildObserver);

      this.name = config.name;
      this.changeHandler = config.changeHandler || this.name + 'Changed';
      this.selector = config.selector;
    }

    ChildObserver.prototype.create = function create(target, behavior) {
      return new ChildObserverBinder(this.selector, target, this.name, behavior, this.changeHandler);
    };

    return ChildObserver;
  })();

  exports.ChildObserver = ChildObserver;

  var ChildObserverBinder = (function () {
    function ChildObserverBinder(selector, target, property, behavior, changeHandler) {
      _classCallCheck(this, ChildObserverBinder);

      this.selector = selector;
      this.target = target;
      this.property = property;
      this.behavior = behavior;
      this.changeHandler = changeHandler in behavior ? changeHandler : null;
      this.observer = new MutationObserver(this.onChange.bind(this));
    }

    ChildObserverBinder.prototype.bind = function bind(source) {
      var items,
          results,
          i,
          ii,
          node,
          behavior = this.behavior;

      this.observer.observe(this.target, { childList: true, subtree: true });

      items = behavior[this.property];
      if (!items) {
        items = behavior[this.property] = [];
      } else {
        items.length = 0;
      }

      results = this.target.querySelectorAll(this.selector);

      for (i = 0, ii = results.length; i < ii; ++i) {
        node = results[i];
        items.push(node.primaryBehavior ? node.primaryBehavior.executionContext : node);
      }

      if (this.changeHandler !== null) {
        this.behavior[this.changeHandler](noMutations);
      }
    };

    ChildObserverBinder.prototype.unbind = function unbind() {
      this.observer.disconnect();
    };

    ChildObserverBinder.prototype.onChange = function onChange(mutations) {
      var items = this.behavior[this.property],
          selector = this.selector;

      mutations.forEach(function (record) {
        var added = record.addedNodes,
            removed = record.removedNodes,
            prev = record.previousSibling,
            i,
            ii,
            primary,
            index,
            node;

        for (i = 0, ii = removed.length; i < ii; ++i) {
          node = removed[i];
          if (node.nodeType === 1 && node.matches(selector)) {
            primary = node.primaryBehavior ? node.primaryBehavior.executionContext : node;
            index = items.indexOf(primary);
            if (index != -1) {
              items.splice(index, 1);
            }
          }
        }

        for (i = 0, ii = added.length; i < ii; ++i) {
          node = added[i];
          if (node.nodeType === 1 && node.matches(selector)) {
            primary = node.primaryBehavior ? node.primaryBehavior.executionContext : node;
            index = 0;

            while (prev) {
              if (prev.nodeType === 1 && prev.matches(selector)) {
                index++;
              }

              prev = prev.previousSibling;
            }

            items.splice(index, 0, primary);
          }
        }
      });

      if (this.changeHandler !== null) {
        this.behavior[this.changeHandler](mutations);
      }
    };

    return ChildObserverBinder;
  })();

  exports.ChildObserverBinder = ChildObserverBinder;

  var CompositionEngine = (function () {
    function CompositionEngine(viewEngine) {
      _classCallCheck(this, CompositionEngine);

      this.viewEngine = viewEngine;
    }

    CompositionEngine.inject = function inject() {
      return [ViewEngine];
    };

    CompositionEngine.prototype.activate = function activate(instruction) {
      if (instruction.skipActivation || typeof instruction.viewModel.activate !== 'function') {
        return Promise.resolve();
      }

      return instruction.viewModel.activate(instruction.model) || Promise.resolve();
    };

    CompositionEngine.prototype.createBehaviorAndSwap = function createBehaviorAndSwap(instruction) {
      return this.createBehavior(instruction).then(function (behavior) {
        behavior.view.bind(behavior.executionContext);
        instruction.viewSlot.swap(behavior.view);

        if (instruction.currentBehavior) {
          instruction.currentBehavior.unbind();
        }

        return behavior;
      });
    };

    CompositionEngine.prototype.createBehavior = function createBehavior(instruction) {
      var childContainer = instruction.childContainer,
          viewModelResource = instruction.viewModelResource,
          viewModel = instruction.viewModel,
          metadata;

      return this.activate(instruction).then(function () {
        var doneLoading, viewStrategyFromViewModel, origin;

        if ('getViewStrategy' in viewModel && !instruction.view) {
          viewStrategyFromViewModel = true;
          instruction.view = ViewStrategy.normalize(viewModel.getViewStrategy());
        }

        if (instruction.view) {
          if (viewStrategyFromViewModel) {
            origin = _aureliaMetadata.Origin.get(viewModel.constructor);
            if (origin) {
              instruction.view.makeRelativeTo(origin.moduleId);
            }
          } else if (instruction.viewResources) {
            instruction.view.makeRelativeTo(instruction.viewResources.viewUrl);
          }
        }

        if (viewModelResource) {
          metadata = viewModelResource.metadata;
          doneLoading = metadata.load(childContainer, viewModelResource.value, instruction.view, true);
        } else {
          metadata = new HtmlBehaviorResource();
          metadata.elementName = 'dynamic-element';
          metadata.analyze(instruction.container || childContainer, viewModel.constructor);
          doneLoading = metadata.load(childContainer, viewModel.constructor, instruction.view, true).then(function (viewFactory) {
            return viewFactory;
          });
        }

        return doneLoading.then(function (viewFactory) {
          return metadata.create(childContainer, {
            executionContext: viewModel,
            viewFactory: viewFactory,
            suppressBind: true,
            host: instruction.host
          });
        });
      });
    };

    CompositionEngine.prototype.createViewModel = function createViewModel(instruction) {
      var childContainer = instruction.childContainer || instruction.container.createChild();

      instruction.viewModel = instruction.viewResources ? instruction.viewResources.relativeToView(instruction.viewModel) : instruction.viewModel;

      return this.viewEngine.importViewModelResource(instruction.viewModel).then(function (viewModelResource) {
        childContainer.autoRegister(viewModelResource.value);

        if (instruction.host) {
          childContainer.registerInstance(Element, instruction.host);
        }

        instruction.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
        instruction.viewModelResource = viewModelResource;
        return instruction;
      });
    };

    CompositionEngine.prototype.compose = function compose(instruction) {
      var _this9 = this;

      instruction.childContainer = instruction.childContainer || instruction.container.createChild();
      instruction.view = ViewStrategy.normalize(instruction.view);

      if (instruction.viewModel) {
        if (typeof instruction.viewModel === 'string') {
          return this.createViewModel(instruction).then(function (instruction) {
            return _this9.createBehaviorAndSwap(instruction);
          });
        } else {
          return this.createBehaviorAndSwap(instruction);
        }
      } else if (instruction.view) {
        if (instruction.viewResources) {
          instruction.view.makeRelativeTo(instruction.viewResources.viewUrl);
        }

        return instruction.view.loadViewFactory(this.viewEngine).then(function (viewFactory) {
          var result = viewFactory.create(instruction.childContainer, instruction.executionContext);
          instruction.viewSlot.swap(result);
          return result;
        });
      } else if (instruction.viewSlot) {
        instruction.viewSlot.removeAll();
        return Promise.resolve(null);
      }
    };

    return CompositionEngine;
  })();

  exports.CompositionEngine = CompositionEngine;

  var ElementConfigResource = (function () {
    function ElementConfigResource() {
      _classCallCheck(this, ElementConfigResource);
    }

    ElementConfigResource.prototype.load = function load(container, target) {
      var config = new target(),
          eventManager = container.get(_aureliaBinding.EventManager);

      eventManager.registerElementConfig(config);
      return Promise.resolve(this);
    };

    ElementConfigResource.prototype.register = function register() {};

    return ElementConfigResource;
  })();

  exports.ElementConfigResource = ElementConfigResource;

  function validateBehaviorName(name, type) {
    if (/[A-Z]/.test(name)) {
      throw new Error('\'' + name + '\' is not a valid ' + type + ' name.  Upper-case letters are not allowed because the DOM is not case-sensitive.');
    }
  }

  function behavior(override) {
    return function (target) {
      if (override instanceof HtmlBehaviorResource) {
        _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, override, target);
      } else {
        var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
        Object.assign(resource, override);
      }
    };
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('behavior', behavior);

  function customElement(name) {
    validateBehaviorName(name, 'custom element');
    return function (target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.elementName = name;
    };
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('customElement', customElement);

  function customAttribute(name, defaultBindingMode) {
    validateBehaviorName(name, 'custom attribute');
    return function (target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.attributeName = name;
      resource.attributeDefaultBindingMode = defaultBindingMode;
    };
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('customAttribute', customAttribute);

  function templateController(target) {
    var deco = function deco(target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.liftsContent = true;
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('templateController', templateController);

  function bindable(nameOrConfigOrTarget, key, descriptor) {
    var deco = function deco(target, key, descriptor) {
      var actualTarget = key ? target.constructor : target,
          resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, actualTarget),
          prop;

      if (key) {
        nameOrConfigOrTarget = nameOrConfigOrTarget || {};
        nameOrConfigOrTarget.name = key;
      }

      prop = new BindableProperty(nameOrConfigOrTarget);
      return prop.registerWith(actualTarget, resource, descriptor);
    };

    if (!nameOrConfigOrTarget) {
      return deco;
    }

    if (key) {
      var target = nameOrConfigOrTarget;
      nameOrConfigOrTarget = null;
      return deco(target, key, descriptor);
    }

    return deco;
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('bindable', bindable);

  function dynamicOptions(target) {
    var deco = function deco(target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.hasDynamicOptions = true;
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('dynamicOptions', dynamicOptions);

  function sync(selectorOrConfig) {
    return function (target, key, descriptor) {
      var actualTarget = key ? target.constructor : target,
          resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, actualTarget);

      if (typeof selectorOrConfig === 'string') {
        selectorOrConfig = {
          selector: selectorOrConfig,
          name: key
        };
      }

      resource.addChildBinding(new ChildObserver(selectorOrConfig));
    };
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('sync', sync);

  function useShadowDOM(target) {
    var deco = function deco(target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.targetShadowDOM = true;
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('useShadowDOM', useShadowDOM);

  function doNotProcessContent() {
    return false;
  }

  function skipContentProcessing(target) {
    var deco = function deco(target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.processContent = doNotProcessContent;
      console.warn('The @skipContentProcessing decorator is deprecated and will be removed in a future release. Please use @processContent(false) instead.');
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('skipContentProcessing', skipContentProcessing);

  function processContent(processor) {
    return function (target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.processContent = processor || doNotProcessContent;
    };
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('processContent', processContent);

  function containerless(target) {
    var deco = function deco(target) {
      var resource = _aureliaMetadata.Metadata.getOrCreateOwn(_aureliaMetadata.Metadata.resource, HtmlBehaviorResource, target);
      resource.containerless = true;
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('containerless', containerless);

  function viewStrategy(strategy) {
    return function (target) {
      _aureliaMetadata.Metadata.define(ViewStrategy.metadataKey, strategy, target);
    };
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('viewStrategy', useView);

  function useView(path) {
    return viewStrategy(new UseViewStrategy(path));
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('useView', useView);

  function inlineView(markup, dependencies, dependencyBaseUrl) {
    return viewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
  }

  _aureliaMetadata.Decorators.configure.parameterizedDecorator('inlineView', inlineView);

  function noView(target) {
    var deco = function deco(target) {
      _aureliaMetadata.Metadata.define(ViewStrategy.metadataKey, new NoViewStrategy(), target);
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('noView', noView);

  function elementConfig(target) {
    var deco = function deco(target) {
      _aureliaMetadata.Metadata.define(_aureliaMetadata.Metadata.resource, new ElementConfigResource(), target);
    };

    return target ? deco(target) : deco;
  }

  _aureliaMetadata.Decorators.configure.simpleDecorator('elementConfig', elementConfig);
});
define('aurelia-templating', ['aurelia-templating/aurelia-templating'], function (main) { return main; });

define('aurelia-framework/aurelia-framework',['exports', 'core-js', 'aurelia-logging', 'aurelia-metadata', 'aurelia-dependency-injection', 'aurelia-loader', 'aurelia-path', 'aurelia-templating', 'aurelia-binding', 'aurelia-task-queue'], function (exports, _coreJs, _aureliaLogging, _aureliaMetadata, _aureliaDependencyInjection, _aureliaLoader, _aureliaPath, _aureliaTemplating, _aureliaBinding, _aureliaTaskQueue) {
  

  exports.__esModule = true;

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var logger = _aureliaLogging.getLogger('aurelia');

  function loadPlugin(aurelia, loader, info) {
    logger.debug('Loading plugin ' + info.moduleId + '.');
    aurelia.resourcesRelativeTo = info.resourcesRelativeTo;

    return loader.loadModule(info.moduleId).then(function (m) {
      if ('configure' in m) {
        return Promise.resolve(m.configure(aurelia, info.config || {})).then(function () {
          aurelia.resourcesRelativeTo = null;
          logger.debug('Configured plugin ' + info.moduleId + '.');
        });
      } else {
        aurelia.resourcesRelativeTo = null;
        logger.debug('Loaded plugin ' + info.moduleId + '.');
      }
    });
  }

  var Plugins = (function () {
    function Plugins(aurelia) {
      var _this = this;

      _classCallCheck(this, Plugins);

      this.aurelia = aurelia;
      this.info = [];
      this.processed = false;

      aurelia.addPreStartTask(function () {
        return System.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
          return _this.bootstrapperName = bootstrapperName;
        });
      });
    }

    Plugins.prototype.feature = function feature(plugin, config) {
      plugin = plugin.endsWith('.js') || plugin.endsWith('.ts') ? plugin.substring(0, plugin.length - 3) : plugin;
      return this.plugin({ moduleId: plugin + '/index', resourcesRelativeTo: plugin, config: config || {} });
    };

    Plugins.prototype.plugin = function plugin(_plugin, config) {
      if (typeof _plugin === 'string') {
        _plugin = _plugin.endsWith('.js') || _plugin.endsWith('.ts') ? _plugin.substring(0, _plugin.length - 3) : _plugin;
        return this.plugin({ moduleId: _plugin, resourcesRelativeTo: _plugin, config: config || {} });
      }

      if (this.processed) {
        loadPlugin(this.aurelia, this.aurelia.loader, _plugin);
      } else {
        this.info.push(_plugin);
      }

      return this;
    };

    Plugins.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
      var _this2 = this;

      var plugin = { moduleId: name, resourcesRelativeTo: name, config: config || {} };

      this.plugin(plugin);

      this.aurelia.addPreStartTask(function () {
        return System.normalize(name, _this2.bootstrapperName).then(function (normalizedName) {
          normalizedName = normalizedName.endsWith('.js') || normalizedName.endsWith('.ts') ? normalizedName.substring(0, normalizedName.length - 3) : normalizedName;

          plugin.moduleId = normalizedName;
          plugin.resourcesRelativeTo = normalizedName;
          System.map[name] = normalizedName;
        });
      });

      return this;
    };

    Plugins.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
      return this._addNormalizedPlugin('aurelia-templating-binding');
    };

    Plugins.prototype.router = function router() {
      return this._addNormalizedPlugin('aurelia-templating-router');
    };

    Plugins.prototype.history = function history() {
      return this._addNormalizedPlugin('aurelia-history-browser');
    };

    Plugins.prototype.defaultResources = function defaultResources() {
      return this._addNormalizedPlugin('aurelia-templating-resources');
    };

    Plugins.prototype.eventAggregator = function eventAggregator() {
      return this._addNormalizedPlugin('aurelia-event-aggregator');
    };

    Plugins.prototype.standardConfiguration = function standardConfiguration() {
      return this.aurelia.use.defaultBindingLanguage().defaultResources().history().router().eventAggregator();
    };

    Plugins.prototype.developmentLogging = function developmentLogging() {
      var _this3 = this;

      this.aurelia.addPreStartTask(function () {
        return System.normalize('aurelia-logging-console', _this3.bootstrapperName).then(function (name) {
          return _this3.aurelia.loader.loadModule(name).then(function (m) {
            _aureliaLogging.addAppender(new m.ConsoleAppender());
            _aureliaLogging.setLevel(_aureliaLogging.logLevel.debug);
          });
        });
      });

      return this;
    };

    Plugins.prototype._process = function _process() {
      var _this4 = this;

      var aurelia = this.aurelia,
          loader = aurelia.loader,
          info = this.info,
          current;

      if (this.processed) {
        return;
      }

      var next = function next() {
        if (current = info.shift()) {
          return loadPlugin(aurelia, loader, current).then(next);
        }

        _this4.processed = true;
        return Promise.resolve();
      };

      return next();
    };

    return Plugins;
  })();

  exports.Plugins = Plugins;

  var logger = _aureliaLogging.getLogger('aurelia'),
      slice = Array.prototype.slice;

  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var CustomEvent = function CustomEvent(event, params) {
      var params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }

  function preventActionlessFormSubmit() {
    document.body.addEventListener('submit', function (evt) {
      var target = evt.target;
      var action = target.action;

      if (target.tagName.toLowerCase() === 'form' && !action) {
        evt.preventDefault();
      }
    });
  }

  function loadResources(container, resourcesToLoad, appResources) {
    var viewEngine = container.get(_aureliaTemplating.ViewEngine),
        importIds = Object.keys(resourcesToLoad),
        names = new Array(importIds.length),
        i,
        ii;

    for (i = 0, ii = importIds.length; i < ii; ++i) {
      names[i] = resourcesToLoad[importIds[i]];
    }

    return viewEngine.importViewResources(importIds, names, appResources);
  }

  function runTasks(aurelia, tasks) {
    var current = undefined,
        next = function next() {
      if (current = tasks.shift()) {
        return Promise.resolve(current(aurelia)).then(next);
      }

      return Promise.resolve();
    };

    return next();
  }

  var Aurelia = (function () {
    function Aurelia(loader, container, resources) {
      _classCallCheck(this, Aurelia);

      this.resourcesToLoad = {};
      this.preStartTasks = [];
      this.postStartTasks = [];
      this.loader = loader || new window.AureliaLoader();
      this.container = container || new _aureliaDependencyInjection.Container();
      this.resources = resources || new _aureliaTemplating.ResourceRegistry();
      this.use = new Plugins(this);

      this.withInstance(Aurelia, this);
      this.withInstance(_aureliaLoader.Loader, this.loader);
      this.withInstance(_aureliaTemplating.ResourceRegistry, this.resources);

      this.container.makeGlobal();
    }

    Aurelia.prototype.withInstance = function withInstance(type, instance) {
      this.container.registerInstance(type, instance);
      return this;
    };

    Aurelia.prototype.withSingleton = function withSingleton(type, implementation) {
      this.container.registerSingleton(type, implementation);
      return this;
    };

    Aurelia.prototype.withTransient = function withTransient(type, implementation) {
      this.container.registerTransient(type, implementation);
      return this;
    };

    Aurelia.prototype.globalizeResources = function globalizeResources(resources) {
      var toAdd = Array.isArray(resources) ? resources : arguments,
          i,
          ii,
          resource,
          path,
          resourcesRelativeTo = this.resourcesRelativeTo || '';

      for (i = 0, ii = toAdd.length; i < ii; ++i) {
        resource = toAdd[i];
        if (typeof resource != 'string') {
          throw new Error('Invalid resource path [' + resource + ']. Resources must be specified as relative module IDs.');
        }

        path = _aureliaPath.join(resourcesRelativeTo, resource);
        this.resourcesToLoad[path] = this.resourcesToLoad[path];
      }

      return this;
    };

    Aurelia.prototype.renameGlobalResource = function renameGlobalResource(resourcePath, newName) {
      this.resourcesToLoad[resourcePath] = newName;
      return this;
    };

    Aurelia.prototype.addPreStartTask = function addPreStartTask(task) {
      this.preStartTasks.push(task);
      return this;
    };

    Aurelia.prototype.addPostStartTask = function addPostStartTask(task) {
      this.postStartTasks.push(task);
      return this;
    };

    Aurelia.prototype.start = function start() {
      var _this5 = this;

      if (this.started) {
        return Promise.resolve(this);
      }

      this.started = true;
      logger.info('Aurelia Starting');

      preventActionlessFormSubmit();

      return runTasks(this, this.preStartTasks).then(function () {
        return _this5.use._process().then(function () {
          if (!_this5.container.hasHandler(_aureliaTemplating.BindingLanguage)) {
            var message = 'You must configure Aurelia with a BindingLanguage implementation.';
            logger.error(message);
            throw new Error(message);
          }

          if (!_this5.container.hasHandler(_aureliaTemplating.Animator)) {
            _aureliaTemplating.Animator.configureDefault(_this5.container);
          }

          return loadResources(_this5.container, _this5.resourcesToLoad, _this5.resources);
        }).then(function () {
          return runTasks(_this5, _this5.postStartTasks).then(function () {
            logger.info('Aurelia Started');
            var evt = new window.CustomEvent('aurelia-started', { bubbles: true, cancelable: true });
            document.dispatchEvent(evt);
            return _this5;
          });
        });
      });
    };

    Aurelia.prototype.enhance = function enhance() {
      var _this6 = this;

      var bindingContext = arguments[0] === undefined ? {} : arguments[0];
      var applicationHost = arguments[1] === undefined ? null : arguments[1];

      this._configureHost(applicationHost);

      return new Promise(function (resolve) {
        var viewEngine = _this6.container.get(_aureliaTemplating.ViewEngine);
        _this6.root = viewEngine.enhance(_this6.container, _this6.host, _this6.resources, bindingContext);
        _this6.root.attached();
        _this6._onAureliaComposed();
        return _this6;
      });
    };

    Aurelia.prototype.setRoot = function setRoot() {
      var _this7 = this;

      var root = arguments[0] === undefined ? 'app' : arguments[0];
      var applicationHost = arguments[1] === undefined ? null : arguments[1];

      var compositionEngine,
          instruction = {};

      this._configureHost(applicationHost);

      compositionEngine = this.container.get(_aureliaTemplating.CompositionEngine);
      instruction.viewModel = root;
      instruction.container = instruction.childContainer = this.container;
      instruction.viewSlot = new _aureliaTemplating.ViewSlot(this.host, true);
      instruction.viewSlot.transformChildNodesIntoView();
      instruction.host = this.host;

      return compositionEngine.compose(instruction).then(function (root) {
        _this7.root = root;
        instruction.viewSlot.attached();
        _this7._onAureliaComposed();
        return _this7;
      });
    };

    Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
      applicationHost = applicationHost || this.host;

      if (!applicationHost || typeof applicationHost == 'string') {
        this.host = document.getElementById(applicationHost || 'applicationHost') || document.body;
      } else {
        this.host = applicationHost;
      }

      this.host.aurelia = this;
      this.container.registerInstance(_aureliaTemplating.DOMBoundary, this.host);
    };

    Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
      var evt = new window.CustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
      setTimeout(function () {
        return document.dispatchEvent(evt);
      }, 1);
    };

    return Aurelia;
  })();

  exports.Aurelia = Aurelia;

  _defaults(exports, _interopRequireWildcard(_aureliaDependencyInjection));

  _defaults(exports, _interopRequireWildcard(_aureliaBinding));

  _defaults(exports, _interopRequireWildcard(_aureliaMetadata));

  _defaults(exports, _interopRequireWildcard(_aureliaTemplating));

  _defaults(exports, _interopRequireWildcard(_aureliaLoader));

  _defaults(exports, _interopRequireWildcard(_aureliaTaskQueue));

  _defaults(exports, _interopRequireWildcard(_aureliaPath));

  var LogManager = _aureliaLogging;
  exports.LogManager = LogManager;
});
define('aurelia-framework', ['aurelia-framework/aurelia-framework'], function (main) { return main; });

define('aurelia-route-recognizer/aurelia-route-recognizer',['exports', 'core-js'], function (exports, _coreJs) {
  

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var StaticSegment = (function () {
    function StaticSegment(string) {
      _classCallCheck(this, StaticSegment);

      this.string = string;
    }

    StaticSegment.prototype.eachChar = function eachChar(callback) {
      for (var _iterator = this.string, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var ch = _ref;

        callback({ validChars: ch });
      }
    };

    StaticSegment.prototype.regex = function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    };

    StaticSegment.prototype.generate = function generate(params, consumed) {
      return this.string;
    };

    return StaticSegment;
  })();

  exports.StaticSegment = StaticSegment;

  var DynamicSegment = (function () {
    function DynamicSegment(name) {
      _classCallCheck(this, DynamicSegment);

      this.name = name;
    }

    DynamicSegment.prototype.eachChar = function eachChar(callback) {
      callback({ invalidChars: '/', repeat: true });
    };

    DynamicSegment.prototype.regex = function regex() {
      return '([^/]+)';
    };

    DynamicSegment.prototype.generate = function generate(params, consumed) {
      consumed[this.name] = true;
      return params[this.name];
    };

    return DynamicSegment;
  })();

  exports.DynamicSegment = DynamicSegment;

  var StarSegment = (function () {
    function StarSegment(name) {
      _classCallCheck(this, StarSegment);

      this.name = name;
    }

    StarSegment.prototype.eachChar = function eachChar(callback) {
      callback({ invalidChars: '', repeat: true });
    };

    StarSegment.prototype.regex = function regex() {
      return '(.+)';
    };

    StarSegment.prototype.generate = function generate(params, consumed) {
      consumed[this.name] = true;
      return params[this.name];
    };

    return StarSegment;
  })();

  exports.StarSegment = StarSegment;

  var EpsilonSegment = (function () {
    function EpsilonSegment() {
      _classCallCheck(this, EpsilonSegment);
    }

    EpsilonSegment.prototype.eachChar = function eachChar(callback) {};

    EpsilonSegment.prototype.regex = function regex() {
      return '';
    };

    EpsilonSegment.prototype.generate = function generate(params, consumed) {
      return '';
    };

    return EpsilonSegment;
  })();

  exports.EpsilonSegment = EpsilonSegment;

  var State = (function () {
    function State(charSpec) {
      _classCallCheck(this, State);

      this.charSpec = charSpec;
      this.nextStates = [];
    }

    State.prototype.get = function get(charSpec) {
      for (var _iterator2 = this.nextStates, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var child = _ref2;

        var isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    };

    State.prototype.put = function put(charSpec) {
      var state = this.get(charSpec);

      if (state) {
        return state;
      }

      state = new State(charSpec);

      this.nextStates.push(state);

      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      return state;
    };

    State.prototype.match = function match(ch) {
      var nextStates = this.nextStates,
          results = [],
          child,
          charSpec,
          chars;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            results.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            results.push(child);
          }
        }
      }

      return results;
    };

    return State;
  })();

  exports.State = State;
  ;

  var RouteRecognizer = (function () {
    function RouteRecognizer() {
      _classCallCheck(this, RouteRecognizer);

      this.rootState = new State();
      this.names = {};
    }

    RouteRecognizer.prototype.add = function add(route) {
      if (Array.isArray(route)) {
        for (var _iterator3 = route, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var r = _ref3;

          this.add(r);
        }

        return;
      }

      var currentState = this.rootState,
          regex = '^',
          types = { statics: 0, dynamics: 0, stars: 0 },
          names = [],
          routeName = route.handler.name,
          isEmpty = true;

      var segments = parse(route.path, names, types);
      for (var _iterator4 = segments, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var segment = _ref4;

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        isEmpty = false;

        currentState = currentState.put({ validChars: '/' });
        regex += '/';

        currentState = addSegment(currentState, segment);
        regex += segment.regex();
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: '/' });
        regex += '/';
      }

      var handlers = [{ handler: route.handler, names: names }];

      if (routeName) {
        this.names[routeName] = {
          segments: segments,
          handlers: handlers
        };
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + '$');
      currentState.types = types;

      return currentState;
    };

    RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
      var route = this.names[name],
          result = [];

      if (!route) {
        throw new Error('There is no route named ' + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    };

    RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
      return !!this.names[name];
    };

    RouteRecognizer.prototype.generate = function generate(name, params) {
      params = Object.assign({}, params);

      var route = this.names[name],
          consumed = {},
          output = '';

      if (!route) {
        throw new Error('There is no route named ' + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += '/';
        var segmentValue = segment.generate(params, consumed);
        if (segmentValue === null || segmentValue === undefined) {
          throw new Error('A value is required for route parameter \'' + segment.name + '\' in route \'' + name + '\'.');
        }

        output += segmentValue;
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      for (var param in consumed) {
        delete params[param];
      }

      output += this.generateQueryString(params);

      return output;
    };

    RouteRecognizer.prototype.generateQueryString = function generateQueryString(params) {
      var pairs = [],
          keys = [],
          encode = encodeURIComponent,
          encodeKey = function encodeKey(k) {
        return encode(k).replace('%24', '$');
      };

      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }

      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value === null || value === undefined) {
          continue;
        }

        if (Array.isArray(value)) {
          var arrayKey = encodeKey(key) + '[]';
          for (var j = 0, l = value.length; j < l; j++) {
            pairs.push(arrayKey + '=' + encode(value[j]));
          }
        } else {
          pairs.push(encodeKey(key) + '=' + encode(value));
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return '?' + pairs.join('&');
    };

    RouteRecognizer.prototype.parseQueryString = function parseQueryString(queryString) {
      var queryParams = {};
      if (!queryString || typeof queryString !== 'string') {
        return queryParams;
      }

      if (queryString.charAt(0) === '?') {
        queryString = queryString.substr(1);
      }

      var pairs = queryString.split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeURIComponent(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;

        if (!key) {
          continue;
        } else if (pair.length === 1) {
          value = true;
        } else {
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeURIComponent(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    };

    RouteRecognizer.prototype.recognize = function recognize(path) {
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        queryParams = this.parseQueryString(queryString);
      }

      path = decodeURI(path);

      if (path.charAt(0) !== '/') {
        path = '/' + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === '/') {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];
      if (state && state.handlers) {
        if (isSlashDropped && state.regex.source.slice(-5) === '(.+)$') {
          path = path + '/';
        }
        return findHandler(state, path, queryParams);
      }
    };

    return RouteRecognizer;
  })();

  exports.RouteRecognizer = RouteRecognizer;

  var RecognizeResults = function RecognizeResults(queryParams) {
    _classCallCheck(this, RecognizeResults);

    this.splice = Array.prototype.splice;
    this.slice = Array.prototype.slice;
    this.push = Array.prototype.push;
    this.length = 0;
    this.queryParams = queryParams || {};
  };

  function parse(route, names, types) {
    if (route.charAt(0) === '/') {
      route = route.substr(1);
    }

    var results = [];

    for (var _iterator5 = route.split('/'), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref5 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref5 = _i5.value;
      }

      var segment = _ref5;

      var match = undefined;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        types.dynamics++;
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        names.push(match[1]);
        types.stars++;
      } else if (segment === '') {
        results.push(new EpsilonSegment());
      } else {
        results.push(new StaticSegment(segment));
        types.statics++;
      }
    }

    return results;
  }

  function sortSolutions(states) {
    return states.sort(function (a, b) {
      if (a.types.stars !== b.types.stars) {
        return a.types.stars - b.types.stars;
      }

      if (a.types.stars) {
        if (a.types.statics !== b.types.statics) {
          return b.types.statics - a.types.statics;
        }
        if (a.types.dynamics !== b.types.dynamics) {
          return b.types.dynamics - a.types.dynamics;
        }
      }

      if (a.types.dynamics !== b.types.dynamics) {
        return a.types.dynamics - b.types.dynamics;
      }

      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }

      return 0;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      currentState = currentState.put(ch);
    });

    return currentState;
  }
});
define('aurelia-route-recognizer', ['aurelia-route-recognizer/aurelia-route-recognizer'], function (main) { return main; });

define('aurelia-router/aurelia-router',['exports', 'core-js', 'aurelia-dependency-injection', 'aurelia-route-recognizer', 'aurelia-path', 'aurelia-history', 'aurelia-event-aggregator', 'aurelia-logging'], function (exports, _coreJs, _aureliaDependencyInjection, _aureliaRouteRecognizer, _aureliaPath, _aureliaHistory, _aureliaEventAggregator, _aureliaLogging) {
  

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.processPotential = processPotential;
  exports.normalizeAbsolutePath = normalizeAbsolutePath;
  exports.createRootedPath = createRootedPath;
  exports.resolveUrl = resolveUrl;
  exports.isNavigationCommand = isNavigationCommand;
  exports.buildNavigationPlan = buildNavigationPlan;
  exports.createRouteFilterStep = createRouteFilterStep;
  exports.loadNewRoute = loadNewRoute;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  function processPotential(obj, resolve, reject) {
    if (obj && typeof obj.then === 'function') {
      var dfd = obj.then(resolve);

      if (typeof dfd['catch'] === 'function') {
        return dfd['catch'](reject);
      } else if (typeof dfd.fail === 'function') {
        return dfd.fail(reject);
      }

      return dfd;
    } else {
      try {
        return resolve(obj);
      } catch (error) {
        return reject(error);
      }
    }
  }

  function normalizeAbsolutePath(path, hasPushState) {
    if (!hasPushState && path[0] !== '#') {
      path = '#' + path;
    }

    return path;
  }

  function createRootedPath(fragment, baseUrl, hasPushState) {
    if (isAbsoluteUrl.test(fragment)) {
      return fragment;
    }

    var path = '';

    if (baseUrl.length && baseUrl[0] !== '/') {
      path += '/';
    }

    path += baseUrl;

    if ((!path.length || path[path.length - 1] != '/') && fragment[0] != '/') {
      path += '/';
    }

    if (path.length && path[path.length - 1] == '/' && fragment[0] == '/') {
      path = path.substring(0, path.length - 1);
    }

    return normalizeAbsolutePath(path + fragment, hasPushState);
  }

  function resolveUrl(fragment, baseUrl, hasPushState) {
    if (isRootedPath.test(fragment)) {
      return normalizeAbsolutePath(fragment, hasPushState);
    } else {
      return createRootedPath(fragment, baseUrl, hasPushState);
    }
  }

  var isRootedPath = /^#?\//;
  var isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

  function isNavigationCommand(obj) {
    return obj && typeof obj.navigate === 'function';
  }

  var Redirect = (function () {
    function Redirect(url, options) {
      _classCallCheck(this, Redirect);

      this.url = url;
      this.options = Object.assign({ trigger: true, replace: true }, options || {});
      this.shouldContinueProcessing = false;
    }

    Redirect.prototype.setRouter = function setRouter(router) {
      this.router = router;
    };

    Redirect.prototype.navigate = function navigate(appRouter) {
      var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
      navigatingRouter.navigate(this.url, this.options);
    };

    return Redirect;
  })();

  exports.Redirect = Redirect;
  var activationStrategy = {
    noChange: 'no-change',
    invokeLifecycle: 'invoke-lifecycle',
    replace: 'replace'
  };

  exports.activationStrategy = activationStrategy;

  function buildNavigationPlan(navigationContext, forceLifecycleMinimum) {
    var prev = navigationContext.prevInstruction;
    var next = navigationContext.nextInstruction;
    var plan = {},
        viewPortName;

    if ('redirect' in next.config) {
      var redirectLocation = resolveUrl(next.config.redirect, getInstructionBaseUrl(next));
      if (next.queryString) {
        redirectLocation += '?' + next.queryString;
      }

      return Promise.reject(new Redirect(redirectLocation));
    }

    if (prev) {
      var newParams = hasDifferentParameterValues(prev, next);
      var pending = [];

      for (viewPortName in prev.viewPortInstructions) {
        var prevViewPortInstruction = prev.viewPortInstructions[viewPortName];
        var nextViewPortConfig = next.config.viewPorts[viewPortName];
        var viewPortPlan = plan[viewPortName] = {
          name: viewPortName,
          config: nextViewPortConfig,
          prevComponent: prevViewPortInstruction.component,
          prevModuleId: prevViewPortInstruction.moduleId
        };

        if (prevViewPortInstruction.moduleId != nextViewPortConfig.moduleId) {
          viewPortPlan.strategy = activationStrategy.replace;
        } else if ('determineActivationStrategy' in prevViewPortInstruction.component.executionContext) {
          var _prevViewPortInstruction$component$executionContext;

          viewPortPlan.strategy = (_prevViewPortInstruction$component$executionContext = prevViewPortInstruction.component.executionContext).determineActivationStrategy.apply(_prevViewPortInstruction$component$executionContext, next.lifecycleArgs);
        } else if (newParams || forceLifecycleMinimum) {
          viewPortPlan.strategy = activationStrategy.invokeLifecycle;
        } else {
          viewPortPlan.strategy = activationStrategy.noChange;
        }

        if (viewPortPlan.strategy !== activationStrategy.replace && prevViewPortInstruction.childRouter) {
          var path = next.getWildcardPath();
          var task = prevViewPortInstruction.childRouter.createNavigationInstruction(path, next).then(function (childInstruction) {
            viewPortPlan.childNavigationContext = prevViewPortInstruction.childRouter.createNavigationContext(childInstruction);

            return buildNavigationPlan(viewPortPlan.childNavigationContext, viewPortPlan.strategy == activationStrategy.invokeLifecycle).then(function (childPlan) {
              viewPortPlan.childNavigationContext.plan = childPlan;
            });
          });

          pending.push(task);
        }
      }

      return Promise.all(pending).then(function () {
        return plan;
      });
    } else {
      for (viewPortName in next.config.viewPorts) {
        plan[viewPortName] = {
          name: viewPortName,
          strategy: activationStrategy.replace,
          config: next.config.viewPorts[viewPortName]
        };
      }

      return Promise.resolve(plan);
    }
  }

  var BuildNavigationPlanStep = (function () {
    function BuildNavigationPlanStep() {
      _classCallCheck(this, BuildNavigationPlanStep);
    }

    BuildNavigationPlanStep.prototype.run = function run(navigationContext, next) {
      return buildNavigationPlan(navigationContext).then(function (plan) {
        navigationContext.plan = plan;
        return next();
      })['catch'](next.cancel);
    };

    return BuildNavigationPlanStep;
  })();

  exports.BuildNavigationPlanStep = BuildNavigationPlanStep;

  function hasDifferentParameterValues(prev, next) {
    var prevParams = prev.params,
        nextParams = next.params,
        nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;

    for (var key in nextParams) {
      if (key === nextWildCardName) {
        continue;
      }

      if (prevParams[key] !== nextParams[key]) {
        return true;
      }
    }

    for (var key in prevParams) {
      if (key === nextWildCardName) {
        continue;
      }

      if (prevParams[key] !== nextParams[key]) {
        return true;
      }
    }

    return false;
  }

  function getInstructionBaseUrl(instruction) {
    var instructionBaseUrlParts = [];
    while (instruction = instruction.parentInstruction) {
      instructionBaseUrlParts.unshift(instruction.getBaseUrl());
    }

    instructionBaseUrlParts.unshift('/');
    return instructionBaseUrlParts.join('');
  }

  var affirmations = ['yes', 'ok', 'true'];

  exports.affirmations = affirmations;

  var CanDeactivatePreviousStep = (function () {
    function CanDeactivatePreviousStep() {
      _classCallCheck(this, CanDeactivatePreviousStep);
    }

    CanDeactivatePreviousStep.prototype.run = function run(navigationContext, next) {
      return processDeactivatable(navigationContext.plan, 'canDeactivate', next);
    };

    return CanDeactivatePreviousStep;
  })();

  exports.CanDeactivatePreviousStep = CanDeactivatePreviousStep;

  var CanActivateNextStep = (function () {
    function CanActivateNextStep() {
      _classCallCheck(this, CanActivateNextStep);
    }

    CanActivateNextStep.prototype.run = function run(navigationContext, next) {
      return processActivatable(navigationContext, 'canActivate', next);
    };

    return CanActivateNextStep;
  })();

  exports.CanActivateNextStep = CanActivateNextStep;

  var DeactivatePreviousStep = (function () {
    function DeactivatePreviousStep() {
      _classCallCheck(this, DeactivatePreviousStep);
    }

    DeactivatePreviousStep.prototype.run = function run(navigationContext, next) {
      return processDeactivatable(navigationContext.plan, 'deactivate', next, true);
    };

    return DeactivatePreviousStep;
  })();

  exports.DeactivatePreviousStep = DeactivatePreviousStep;

  var ActivateNextStep = (function () {
    function ActivateNextStep() {
      _classCallCheck(this, ActivateNextStep);
    }

    ActivateNextStep.prototype.run = function run(navigationContext, next) {
      return processActivatable(navigationContext, 'activate', next, true);
    };

    return ActivateNextStep;
  })();

  exports.ActivateNextStep = ActivateNextStep;

  function processDeactivatable(plan, callbackName, next, ignoreResult) {
    var infos = findDeactivatable(plan, callbackName),
        i = infos.length;

    function inspect(val) {
      if (ignoreResult || shouldContinue(val)) {
        return iterate();
      } else {
        return next.cancel(val);
      }
    }

    function iterate() {
      if (i--) {
        try {
          var controller = infos[i];
          var result = controller[callbackName]();
          return processPotential(result, inspect, next.cancel);
        } catch (error) {
          return next.cancel(error);
        }
      } else {
        return next();
      }
    }

    return iterate();
  }

  function findDeactivatable(plan, callbackName, list) {
    list = list || [];

    for (var viewPortName in plan) {
      var viewPortPlan = plan[viewPortName];
      var prevComponent = viewPortPlan.prevComponent;

      if ((viewPortPlan.strategy == activationStrategy.invokeLifecycle || viewPortPlan.strategy == activationStrategy.replace) && prevComponent) {

        var controller = prevComponent.executionContext;

        if (callbackName in controller) {
          list.push(controller);
        }
      }

      if (viewPortPlan.childNavigationContext) {
        findDeactivatable(viewPortPlan.childNavigationContext.plan, callbackName, list);
      } else if (prevComponent) {
        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }

    return list;
  }

  function addPreviousDeactivatable(component, callbackName, list) {
    var controller = component.executionContext,
        childRouter = component.childRouter;

    if (childRouter && childRouter.currentInstruction) {
      var viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;

      for (var viewPortName in viewPortInstructions) {
        var viewPortInstruction = viewPortInstructions[viewPortName];
        var prevComponent = viewPortInstruction.component;
        var prevController = prevComponent.executionContext;

        if (callbackName in prevController) {
          list.push(prevController);
        }

        addPreviousDeactivatable(prevComponent, callbackName, list);
      }
    }
  }

  function processActivatable(navigationContext, callbackName, next, ignoreResult) {
    var infos = findActivatable(navigationContext, callbackName),
        length = infos.length,
        i = -1;

    function inspect(val, router) {
      if (ignoreResult || shouldContinue(val, router)) {
        return iterate();
      } else {
        return next.cancel(val);
      }
    }

    function iterate() {
      i++;

      if (i < length) {
        try {
          var _current$controller;

          var current = infos[i];
          var result = (_current$controller = current.controller)[callbackName].apply(_current$controller, current.lifecycleArgs);
          return processPotential(result, function (val) {
            return inspect(val, current.router);
          }, next.cancel);
        } catch (error) {
          return next.cancel(error);
        }
      } else {
        return next();
      }
    }

    return iterate();
  }

  function findActivatable(navigationContext, callbackName, list, router) {
    var plan = navigationContext.plan;
    var next = navigationContext.nextInstruction;

    list = list || [];

    Object.keys(plan).filter(function (viewPortName) {
      var viewPortPlan = plan[viewPortName];
      var viewPortInstruction = next.viewPortInstructions[viewPortName];
      var controller = viewPortInstruction.component.executionContext;

      if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace) && callbackName in controller) {
        list.push({
          controller: controller,
          lifecycleArgs: viewPortInstruction.lifecycleArgs,
          router: router
        });
      }

      if (viewPortPlan.childNavigationContext) {
        findActivatable(viewPortPlan.childNavigationContext, callbackName, list, viewPortInstruction.component.childRouter || router);
      }
    });

    return list;
  }

  function shouldContinue(output, router) {
    if (output instanceof Error) {
      return false;
    }

    if (isNavigationCommand(output)) {
      if (typeof output.setRouter === 'function') {
        output.setRouter(router);
      }

      return !!output.shouldContinueProcessing;
    }

    if (typeof output === 'string') {
      return affirmations.indexOf(output.toLowerCase()) !== -1;
    }

    if (typeof output === 'undefined') {
      return true;
    }

    return output;
  }

  var NavigationContext = (function () {
    function NavigationContext(router, nextInstruction) {
      _classCallCheck(this, NavigationContext);

      this.router = router;
      this.nextInstruction = nextInstruction;
      this.currentInstruction = router.currentInstruction;
      this.prevInstruction = router.currentInstruction;
    }

    NavigationContext.prototype.getAllContexts = function getAllContexts() {
      var acc = arguments[0] === undefined ? [] : arguments[0];

      acc.push(this);
      if (this.plan) {
        for (var key in this.plan) {
          this.plan[key].childNavigationContext && this.plan[key].childNavigationContext.getAllContexts(acc);
        }
      }
      return acc;
    };

    NavigationContext.prototype.commitChanges = function commitChanges(waitToSwap) {
      var next = this.nextInstruction,
          prev = this.prevInstruction,
          viewPortInstructions = next.viewPortInstructions,
          router = this.router,
          loads = [],
          delaySwaps = [];

      router.currentInstruction = next;

      if (prev) {
        prev.config.navModel.isActive = false;
      }

      next.config.navModel.isActive = true;

      router.refreshBaseUrl();
      router.refreshNavigation();

      for (var viewPortName in viewPortInstructions) {
        var viewPortInstruction = viewPortInstructions[viewPortName];
        var viewPort = router.viewPorts[viewPortName];

        if (!viewPort) {
          throw new Error('There was no router-view found in the view for ' + viewPortInstruction.moduleId + '.');
        }

        if (viewPortInstruction.strategy === activationStrategy.replace) {
          if (waitToSwap) {
            delaySwaps.push({ viewPort: viewPort, viewPortInstruction: viewPortInstruction });
          }

          loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function (x) {
            if ('childNavigationContext' in viewPortInstruction) {
              return viewPortInstruction.childNavigationContext.commitChanges();
            }
          }));
        } else {
          if ('childNavigationContext' in viewPortInstruction) {
            loads.push(viewPortInstruction.childNavigationContext.commitChanges(waitToSwap));
          }
        }
      }

      return Promise.all(loads).then(function () {
        delaySwaps.forEach(function (x) {
          return x.viewPort.swap(x.viewPortInstruction);
        });
      });
    };

    NavigationContext.prototype.updateTitle = function updateTitle() {
      var title = this.buildTitle();
      if (title) {
        document.title = title;
      }
    };

    NavigationContext.prototype.buildTitle = function buildTitle() {
      var separator = arguments[0] === undefined ? ' | ' : arguments[0];

      var next = this.nextInstruction,
          title = next.config.navModel.title || '',
          viewPortInstructions = next.viewPortInstructions,
          childTitles = [];

      for (var viewPortName in viewPortInstructions) {
        var viewPortInstruction = viewPortInstructions[viewPortName];

        if ('childNavigationContext' in viewPortInstruction) {
          var childTitle = viewPortInstruction.childNavigationContext.buildTitle(separator);
          if (childTitle) {
            childTitles.push(childTitle);
          }
        }
      }

      if (childTitles.length) {
        title = childTitles.join(separator) + (title ? separator : '') + title;
      }

      if (this.router.title) {
        title += (title ? separator : '') + this.router.title;
      }

      return title;
    };

    _createClass(NavigationContext, [{
      key: 'nextInstructions',
      get: function get() {
        return this.getAllContexts().map(function (c) {
          return c.nextInstruction;
        }).filter(function (c) {
          return c;
        });
      }
    }, {
      key: 'currentInstructions',
      get: function get() {
        return this.getAllContexts().map(function (c) {
          return c.currentInstruction;
        }).filter(function (c) {
          return c;
        });
      }
    }, {
      key: 'prevInstructions',
      get: function get() {
        return this.getAllContexts().map(function (c) {
          return c.prevInstruction;
        }).filter(function (c) {
          return c;
        });
      }
    }]);

    return NavigationContext;
  })();

  exports.NavigationContext = NavigationContext;

  var CommitChangesStep = (function () {
    function CommitChangesStep() {
      _classCallCheck(this, CommitChangesStep);
    }

    CommitChangesStep.prototype.run = function run(navigationContext, next) {
      return navigationContext.commitChanges(true).then(function () {
        navigationContext.updateTitle();
        return next();
      });
    };

    return CommitChangesStep;
  })();

  exports.CommitChangesStep = CommitChangesStep;

  var NavigationInstruction = (function () {
    function NavigationInstruction(fragment, queryString, params, queryParams, config, parentInstruction) {
      _classCallCheck(this, NavigationInstruction);

      this.fragment = fragment;
      this.queryString = queryString;
      this.params = params || {};
      this.queryParams = queryParams;
      this.config = config;
      this.viewPortInstructions = {};
      this.parentInstruction = parentInstruction;

      var ancestorParams = [];
      var current = this;
      do {
        var currentParams = Object.assign({}, current.params);
        if (current.config.hasChildRouter) {
          delete currentParams[current.getWildCardName()];
        }

        ancestorParams.unshift(currentParams);
        current = current.parentInstruction;
      } while (current);

      var allParams = Object.assign.apply(Object, [{}, queryParams].concat(ancestorParams));
      this.lifecycleArgs = [allParams, config, this];
    }

    NavigationInstruction.prototype.addViewPortInstruction = function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
      return this.viewPortInstructions[viewPortName] = {
        name: viewPortName,
        strategy: strategy,
        moduleId: moduleId,
        component: component,
        childRouter: component.childRouter,
        lifecycleArgs: this.lifecycleArgs.slice()
      };
    };

    NavigationInstruction.prototype.getWildCardName = function getWildCardName() {
      var wildcardIndex = this.config.route.lastIndexOf('*');
      return this.config.route.substr(wildcardIndex + 1);
    };

    NavigationInstruction.prototype.getWildcardPath = function getWildcardPath() {
      var wildcardName = this.getWildCardName();
      var path = this.params[wildcardName] || '';

      if (this.queryString) {
        path += '?' + this.queryString;
      }

      return path;
    };

    NavigationInstruction.prototype.getBaseUrl = function getBaseUrl() {
      if (!this.params) {
        return this.fragment;
      }

      var wildcardName = this.getWildCardName();
      var path = this.params[wildcardName] || '';

      if (!path) {
        return this.fragment;
      }

      return this.fragment.substr(0, this.fragment.lastIndexOf(path));
    };

    return NavigationInstruction;
  })();

  exports.NavigationInstruction = NavigationInstruction;

  var NavModel = (function () {
    function NavModel(router, relativeHref) {
      _classCallCheck(this, NavModel);

      this.router = router;
      this.relativeHref = relativeHref;

      this.isActive = false;

      this.title = null;

      this.href = null;

      this.settings = {};

      this.config = null;
    }

    NavModel.prototype.setTitle = function setTitle(title) {
      this.title = title;

      if (this.isActive) {
        this.router.updateTitle();
      }
    };

    return NavModel;
  })();

  exports.NavModel = NavModel;

  var RouteFilterContainer = (function () {
    function RouteFilterContainer(container) {
      _classCallCheck(this, RouteFilterContainer);

      this.container = container;
      this.filters = {};
      this.filterCache = {};
    }

    RouteFilterContainer.inject = function inject() {
      return [_aureliaDependencyInjection.Container];
    };

    RouteFilterContainer.prototype.addStep = function addStep(name, step) {
      var index = arguments[2] === undefined ? -1 : arguments[2];

      var filter = this.filters[name];
      if (!filter) {
        filter = this.filters[name] = [];
      }

      if (index === -1) {
        index = filter.length;
      }

      filter.splice(index, 0, step);
      this.filterCache = {};
    };

    RouteFilterContainer.prototype.getFilterSteps = function getFilterSteps(name) {
      if (this.filterCache[name]) {
        return this.filterCache[name];
      }

      var steps = [];
      var filter = this.filters[name];
      if (!filter) {
        return steps;
      }

      for (var i = 0, l = filter.length; i < l; i++) {
        if (typeof filter[i] === 'string') {
          steps.push.apply(steps, this.getFilterSteps(filter[i]));
        } else {
          steps.push(this.container.get(filter[i]));
        }
      }

      return this.filterCache[name] = steps;
    };

    return RouteFilterContainer;
  })();

  exports.RouteFilterContainer = RouteFilterContainer;

  function createRouteFilterStep(name) {
    function create(routeFilterContainer) {
      return new RouteFilterStep(name, routeFilterContainer);
    };
    create.inject = function () {
      return [RouteFilterContainer];
    };
    return create;
  }

  var RouteFilterStep = (function () {
    function RouteFilterStep(name, routeFilterContainer) {
      _classCallCheck(this, RouteFilterStep);

      this.name = name;
      this.routeFilterContainer = routeFilterContainer;
      this.isMultiStep = true;
    }

    RouteFilterStep.prototype.getSteps = function getSteps() {
      return this.routeFilterContainer.getFilterSteps(this.name);
    };

    return RouteFilterStep;
  })();

  var RouterConfiguration = (function () {
    function RouterConfiguration() {
      _classCallCheck(this, RouterConfiguration);

      this.instructions = [];
      this.options = {};
      this.pipelineSteps = [];
    }

    RouterConfiguration.prototype.addPipelineStep = function addPipelineStep(name, step) {
      this.pipelineSteps.push({ name: name, step: step });
    };

    RouterConfiguration.prototype.map = function map(route) {
      if (Array.isArray(route)) {
        route.forEach(this.map.bind(this));
        return this;
      }

      return this.mapRoute(route);
    };

    RouterConfiguration.prototype.mapRoute = function mapRoute(config) {
      this.instructions.push(function (router) {
        var routeConfigs = [];

        if (Array.isArray(config.route)) {
          for (var i = 0, ii = config.route.length; i < ii; ++i) {
            var current = Object.assign({}, config);
            current.route = config.route[i];
            routeConfigs.push(current);
          }
        } else {
          routeConfigs.push(Object.assign({}, config));
        }

        var navModel = undefined;
        for (var i = 0, ii = routeConfigs.length; i < ii; ++i) {
          var routeConfig = routeConfigs[i];
          routeConfig.settings = routeConfig.settings || {};
          if (!navModel) {
            navModel = router.createNavModel(routeConfig);
          }

          router.addRoute(routeConfig, navModel);
        }
      });

      return this;
    };

    RouterConfiguration.prototype.mapUnknownRoutes = function mapUnknownRoutes(config) {
      this.unknownRouteConfig = config;
      return this;
    };

    RouterConfiguration.prototype.exportToRouter = function exportToRouter(router) {
      var instructions = this.instructions;
      for (var i = 0, ii = instructions.length; i < ii; ++i) {
        instructions[i](router);
      }

      if (this.title) {
        router.title = this.title;
      }

      if (this.unknownRouteConfig) {
        router.handleUnknownRoutes(this.unknownRouteConfig);
      }

      router.options = this.options;

      var pipelineSteps = this.pipelineSteps;
      if (pipelineSteps.length) {
        if (!router.isRoot) {
          throw new Error('Pipeline steps can only be added to the root router');
        }

        var filterContainer = router.container.get(RouteFilterContainer);
        for (var i = 0, ii = pipelineSteps.length; i < ii; ++i) {
          var _pipelineSteps$i = pipelineSteps[i];
          var _name = _pipelineSteps$i.name;
          var step = _pipelineSteps$i.step;

          filterContainer.addStep(_name, step);
        }
      }
    };

    return RouterConfiguration;
  })();

  exports.RouterConfiguration = RouterConfiguration;

  var Router = (function () {
    function Router(container, history) {
      _classCallCheck(this, Router);

      this.viewPorts = {};
      this.baseUrl = '';
      this.isConfigured = false;
      this.fallbackOrder = 100;
      this.recognizer = new _aureliaRouteRecognizer.RouteRecognizer();
      this.childRecognizer = new _aureliaRouteRecognizer.RouteRecognizer();
      this.routes = [];
      this.isNavigating = false;
      this.navigation = [];

      this.container = container;
      this.history = history;
      this.reset();
    }

    Router.prototype.registerViewPort = function registerViewPort(viewPort, name) {
      name = name || 'default';
      this.viewPorts[name] = viewPort;
    };

    Router.prototype.refreshBaseUrl = function refreshBaseUrl() {
      if (this.parent) {
        var baseUrl = this.parent.currentInstruction.getBaseUrl();
        this.baseUrl = this.parent.baseUrl + baseUrl;
      }
    };

    Router.prototype.refreshNavigation = function refreshNavigation() {
      var nav = this.navigation;

      for (var i = 0, length = nav.length; i < length; i++) {
        var current = nav[i];
        current.href = createRootedPath(current.relativeHref, this.baseUrl, this.history._hasPushState);
      }
    };

    Router.prototype.configure = function configure(callbackOrConfig) {
      this.isConfigured = true;

      if (typeof callbackOrConfig == 'function') {
        var config = new RouterConfiguration();
        callbackOrConfig(config);
        config.exportToRouter(this);
      } else {
        callbackOrConfig.exportToRouter(this);
      }

      return this;
    };

    Router.prototype.navigate = function navigate(fragment, options) {
      if (!this.isConfigured && this.parent) {
        return this.parent.navigate(fragment, options);
      }

      return this.history.navigate(resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
    };

    Router.prototype.navigateToRoute = function navigateToRoute(route, params, options) {
      var path = this.generate(route, params);
      return this.navigate(path, options);
    };

    Router.prototype.navigateBack = function navigateBack() {
      this.history.navigateBack();
    };

    Router.prototype.createChild = function createChild(container) {
      var childRouter = new Router(container || this.container.createChild(), this.history);
      childRouter.parent = this;
      return childRouter;
    };

    Router.prototype.createNavigationInstruction = function createNavigationInstruction() {
      var url = arguments[0] === undefined ? '' : arguments[0];
      var parentInstruction = arguments[1] === undefined ? null : arguments[1];

      var fragment = url;
      var queryString = '';

      var queryIndex = url.indexOf('?');
      if (queryIndex != -1) {
        fragment = url.substr(0, queryIndex);
        queryString = url.substr(queryIndex + 1);
      }

      var results = this.recognizer.recognize(url);
      if (!results || !results.length) {
        results = this.childRecognizer.recognize(url);
      }

      if ((!results || !results.length) && this.catchAllHandler) {
        results = [{
          config: {
            navModel: {}
          },
          handler: this.catchAllHandler,
          params: {
            path: fragment
          }
        }];
      }

      if (results && results.length) {
        var first = results[0];
        var instruction = new NavigationInstruction(fragment, queryString, first.params, first.queryParams || results.queryParams, first.config || first.handler, parentInstruction);

        if (typeof first.handler === 'function') {
          return evaluateNavigationStrategy(instruction, first.handler, first);
        } else if (first.handler && 'navigationStrategy' in first.handler) {
          return evaluateNavigationStrategy(instruction, first.handler.navigationStrategy, first.handler);
        }

        return Promise.resolve(instruction);
      }

      return Promise.reject(new Error('Route not found: ' + url));
    };

    Router.prototype.createNavigationContext = function createNavigationContext(instruction) {
      instruction.navigationContext = new NavigationContext(this, instruction);
      return instruction.navigationContext;
    };

    Router.prototype.generate = function generate(name, params) {
      var hasRoute = this.recognizer.hasRoute(name);
      if ((!this.isConfigured || !hasRoute) && this.parent) {
        return this.parent.generate(name, params);
      }

      if (!hasRoute) {
        throw new Error('A route with name \'' + name + '\' could not be found. Check that `name: \'' + name + '\'` was specified in the route\'s config.');
      }

      var path = this.recognizer.generate(name, params);
      return createRootedPath(path, this.baseUrl, this.history._hasPushState);
    };

    Router.prototype.createNavModel = function createNavModel(config) {
      var navModel = new NavModel(this, 'href' in config ? config.href : config.route);
      navModel.title = config.title;
      navModel.order = config.nav;
      navModel.href = config.href;
      navModel.settings = config.settings;
      navModel.config = config;

      return navModel;
    };

    Router.prototype.addRoute = function addRoute(config, navModel) {
      validateRouteConfig(config);

      if (!('viewPorts' in config) && !config.navigationStrategy) {
        config.viewPorts = {
          'default': {
            moduleId: config.moduleId,
            view: config.view
          }
        };
      }

      if (!navModel) {
        navModel = this.createNavModel(config);
      }

      this.routes.push(config);

      var path = config.route;
      if (path.charAt(0) === '/') {
        path = path.substr(1);
      }

      var state = this.recognizer.add({ path: path, handler: config });

      if (path) {
        var withChild = undefined,
            settings = config.settings;
        delete config.settings;
        withChild = JSON.parse(JSON.stringify(config));
        config.settings = settings;
        withChild.route = path + '/*childRoute';
        withChild.hasChildRouter = true;
        this.childRecognizer.add({
          path: withChild.route,
          handler: withChild
        });

        withChild.navModel = navModel;
        withChild.settings = config.settings;
      }

      config.navModel = navModel;

      if ((navModel.order || navModel.order === 0) && this.navigation.indexOf(navModel) === -1) {
        if (!navModel.href && navModel.href != '' && (state.types.dynamics || state.types.stars)) {
          throw new Error('Invalid route config: dynamic routes must specify an href to be included in the navigation model.');
        }

        if (typeof navModel.order != 'number') {
          navModel.order = ++this.fallbackOrder;
        }

        this.navigation.push(navModel);
        this.navigation = this.navigation.sort(function (a, b) {
          return a.order - b.order;
        });
      }
    };

    Router.prototype.hasRoute = function hasRoute(name) {
      return !!(this.recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
    };

    Router.prototype.hasOwnRoute = function hasOwnRoute(name) {
      return this.recognizer.hasRoute(name);
    };

    Router.prototype.handleUnknownRoutes = function handleUnknownRoutes(config) {
      var callback = function callback(instruction) {
        return new Promise(function (resolve, reject) {
          function done(inst) {
            inst = inst || instruction;
            inst.config.route = inst.params.path;
            resolve(inst);
          }

          if (!config) {
            instruction.config.moduleId = instruction.fragment;
            done(instruction);
          } else if (typeof config == 'string') {
            instruction.config.moduleId = config;
            done(instruction);
          } else if (typeof config == 'function') {
            processPotential(config(instruction), done, reject);
          } else {
            instruction.config = config;
            done(instruction);
          }
        });
      };

      this.catchAllHandler = callback;
    };

    Router.prototype.updateTitle = function updateTitle() {
      if (this.parent) {
        return this.parent.updateTitle();
      }

      this.currentInstruction.navigationContext.updateTitle();
    };

    Router.prototype.reset = function reset() {
      this.fallbackOrder = 100;
      this.recognizer = new _aureliaRouteRecognizer.RouteRecognizer();
      this.childRecognizer = new _aureliaRouteRecognizer.RouteRecognizer();
      this.routes = [];
      this.isNavigating = false;
      this.navigation = [];
      this.isConfigured = false;
    };

    _createClass(Router, [{
      key: 'isRoot',
      get: function get() {
        return false;
      }
    }]);

    return Router;
  })();

  exports.Router = Router;

  function validateRouteConfig(config) {
    if (typeof config !== 'object') {
      throw new Error('Invalid Route Config');
    }

    if (typeof config.route !== 'string') {
      throw new Error('Invalid Route Config: You must specify a route pattern.');
    }

    if (!('redirect' in config || config.moduleId || config.navigationStrategy || config.viewPorts)) {
      throw new Error('Invalid Route Config: You must specify a moduleId, redirect, navigationStrategy, or viewPorts.');
    }
  }

  function evaluateNavigationStrategy(instruction, evaluator, context) {
    return Promise.resolve(evaluator.call(context, instruction)).then(function () {
      if (!('viewPorts' in instruction.config)) {
        instruction.config.viewPorts = {
          'default': {
            moduleId: instruction.config.moduleId
          }
        };
      }

      return instruction;
    });
  }

  function createResult(ctx, next) {
    return {
      status: next.status,
      context: ctx,
      output: next.output,
      completed: next.status == pipelineStatus.completed
    };
  }

  var pipelineStatus = {
    completed: 'completed',
    cancelled: 'cancelled',
    rejected: 'rejected',
    running: 'running'
  };

  exports.pipelineStatus = pipelineStatus;

  var Pipeline = (function () {
    function Pipeline() {
      _classCallCheck(this, Pipeline);

      this.steps = [];
    }

    Pipeline.prototype.withStep = function withStep(step) {
      var run, steps, i, l;

      if (typeof step == 'function') {
        run = step;
      } else if (step.isMultiStep) {
        steps = step.getSteps();
        for (i = 0, l = steps.length; i < l; i++) {
          this.withStep(steps[i]);
        }

        return this;
      } else {
        run = step.run.bind(step);
      }

      this.steps.push(run);

      return this;
    };

    Pipeline.prototype.run = function run(ctx) {
      var index = -1,
          steps = this.steps,
          next,
          currentStep;

      next = function () {
        index++;

        if (index < steps.length) {
          currentStep = steps[index];

          try {
            return currentStep(ctx, next);
          } catch (e) {
            return next.reject(e);
          }
        } else {
          return next.complete();
        }
      };

      next.complete = function (output) {
        next.status = pipelineStatus.completed;
        next.output = output;
        return Promise.resolve(createResult(ctx, next));
      };

      next.cancel = function (reason) {
        next.status = pipelineStatus.cancelled;
        next.output = reason;
        return Promise.resolve(createResult(ctx, next));
      };

      next.reject = function (error) {
        next.status = pipelineStatus.rejected;
        next.output = error;
        return Promise.resolve(createResult(ctx, next));
      };

      next.status = pipelineStatus.running;

      return next();
    };

    return Pipeline;
  })();

  exports.Pipeline = Pipeline;

  var RouteLoader = (function () {
    function RouteLoader() {
      _classCallCheck(this, RouteLoader);
    }

    RouteLoader.prototype.loadRoute = function loadRoute(router, config) {
      throw Error('Route loaders must implement "loadRoute(router, config)".');
    };

    return RouteLoader;
  })();

  exports.RouteLoader = RouteLoader;

  var LoadRouteStep = (function () {
    function LoadRouteStep(routeLoader) {
      _classCallCheck(this, LoadRouteStep);

      this.routeLoader = routeLoader;
    }

    LoadRouteStep.inject = function inject() {
      return [RouteLoader];
    };

    LoadRouteStep.prototype.run = function run(navigationContext, next) {
      return loadNewRoute(this.routeLoader, navigationContext).then(next)['catch'](next.cancel);
    };

    return LoadRouteStep;
  })();

  exports.LoadRouteStep = LoadRouteStep;

  function loadNewRoute(routeLoader, navigationContext) {
    var toLoad = determineWhatToLoad(navigationContext);
    var loadPromises = toLoad.map(function (current) {
      return loadRoute(routeLoader, current.navigationContext, current.viewPortPlan);
    });

    return Promise.all(loadPromises);
  }

  function determineWhatToLoad(navigationContext, toLoad) {
    var plan = navigationContext.plan;
    var next = navigationContext.nextInstruction;

    toLoad = toLoad || [];

    for (var viewPortName in plan) {
      var viewPortPlan = plan[viewPortName];

      if (viewPortPlan.strategy == activationStrategy.replace) {
        toLoad.push({
          viewPortPlan: viewPortPlan,
          navigationContext: navigationContext
        });

        if (viewPortPlan.childNavigationContext) {
          determineWhatToLoad(viewPortPlan.childNavigationContext, toLoad);
        }
      } else {
        var viewPortInstruction = next.addViewPortInstruction(viewPortName, viewPortPlan.strategy, viewPortPlan.prevModuleId, viewPortPlan.prevComponent);

        if (viewPortPlan.childNavigationContext) {
          viewPortInstruction.childNavigationContext = viewPortPlan.childNavigationContext;
          determineWhatToLoad(viewPortPlan.childNavigationContext, toLoad);
        }
      }
    }

    return toLoad;
  }

  function loadRoute(routeLoader, navigationContext, viewPortPlan) {
    var moduleId = viewPortPlan.config.moduleId;
    var next = navigationContext.nextInstruction;

    return loadComponent(routeLoader, navigationContext, viewPortPlan.config).then(function (component) {
      var viewPortInstruction = next.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component);

      var controller = component.executionContext,
          childRouter = component.childRouter;

      if (childRouter) {
        var path = next.getWildcardPath();

        return childRouter.createNavigationInstruction(path, next).then(function (childInstruction) {
          var childNavigationContext = childRouter.createNavigationContext(childInstruction);
          viewPortPlan.childNavigationContext = childNavigationContext;

          return buildNavigationPlan(childNavigationContext).then(function (childPlan) {
            childNavigationContext.plan = childPlan;
            viewPortInstruction.childNavigationContext = childNavigationContext;

            return loadNewRoute(routeLoader, childNavigationContext);
          });
        });
      }
    });
  }

  function loadComponent(routeLoader, navigationContext, config) {
    var router = navigationContext.router,
        lifecycleArgs = navigationContext.nextInstruction.lifecycleArgs;

    return routeLoader.loadRoute(router, config).then(function (component) {
      component.router = router;
      component.config = config;

      if ('configureRouter' in component.executionContext) {
        var _component$executionContext;

        component.childRouter = component.childContainer.getChildRouter();

        var config = new RouterConfiguration();
        var result = Promise.resolve((_component$executionContext = component.executionContext).configureRouter.apply(_component$executionContext, [config, component.childRouter].concat(lifecycleArgs)));

        return result.then(function () {
          component.childRouter.configure(config);
          return component;
        });
      }

      return component;
    });
  }

  var PipelineProvider = (function () {
    function PipelineProvider(container) {
      _classCallCheck(this, PipelineProvider);

      this.container = container;
      this.steps = [BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, createRouteFilterStep('authorize'), createRouteFilterStep('modelbind'), CanActivateNextStep, DeactivatePreviousStep, ActivateNextStep, createRouteFilterStep('precommit'), CommitChangesStep, createRouteFilterStep('postcomplete')];
    }

    PipelineProvider.inject = function inject() {
      return [_aureliaDependencyInjection.Container];
    };

    PipelineProvider.prototype.createPipeline = function createPipeline(navigationContext) {
      var _this = this;

      var pipeline = new Pipeline();
      this.steps.forEach(function (step) {
        return pipeline.withStep(_this.container.get(step));
      });
      return pipeline;
    };

    return PipelineProvider;
  })();

  exports.PipelineProvider = PipelineProvider;

  var logger = _aureliaLogging.getLogger('app-router');

  var AppRouter = (function (_Router) {
    function AppRouter(container, history, pipelineProvider, events) {
      _classCallCheck(this, AppRouter);

      _Router.call(this, container, history);
      this.pipelineProvider = pipelineProvider;
      document.addEventListener('click', handleLinkClick.bind(this), true);
      this.events = events;
      this.maxInstructionCount = 10;
    }

    _inherits(AppRouter, _Router);

    AppRouter.inject = function inject() {
      return [_aureliaDependencyInjection.Container, _aureliaHistory.History, PipelineProvider, _aureliaEventAggregator.EventAggregator];
    };

    AppRouter.prototype.loadUrl = function loadUrl(url) {
      var _this2 = this;

      return this.createNavigationInstruction(url).then(function (instruction) {
        return _this2.queueInstruction(instruction);
      })['catch'](function (error) {
        logger.error(error);
        restorePreviousLocation(_this2);
      });
    };

    AppRouter.prototype.queueInstruction = function queueInstruction(instruction) {
      var _this3 = this;

      return new Promise(function (resolve) {
        instruction.resolve = resolve;
        _this3.queue.unshift(instruction);
        _this3.dequeueInstruction();
      });
    };

    AppRouter.prototype.dequeueInstruction = function dequeueInstruction() {
      var _this4 = this;

      var instructionCount = arguments[0] === undefined ? 0 : arguments[0];

      return Promise.resolve().then(function () {
        if (_this4.isNavigating && !instructionCount) {
          return;
        }

        var instruction = _this4.queue.shift();
        _this4.queue = [];

        if (!instruction) {
          return;
        }

        _this4.isNavigating = true;

        if (!instructionCount) {
          _this4.events.publish('router:navigation:processing', { instruction: instruction });
        } else if (instructionCount === _this4.maxInstructionCount - 1) {
          logger.error(instructionCount + 1 + ' navigation instructions have been attempted without success. Restoring last known good location.');
          restorePreviousLocation(_this4);
          return _this4.dequeueInstruction(instructionCount + 1);
        } else if (instructionCount > _this4.maxInstructionCount) {
          throw new Error('Maximum navigation attempts exceeded. Giving up.');
        }

        var context = _this4.createNavigationContext(instruction);
        var pipeline = _this4.pipelineProvider.createPipeline(context);

        return pipeline.run(context).then(function (result) {
          return processResult(instruction, result, instructionCount, _this4);
        })['catch'](function (error) {
          return { output: error instanceof Error ? error : new Error(error) };
        }).then(function (result) {
          return resolveInstruction(instruction, result, !!instructionCount, _this4);
        });
      });
    };

    AppRouter.prototype.registerViewPort = function registerViewPort(viewPort, name) {
      var _this5 = this;

      _Router.prototype.registerViewPort.call(this, viewPort, name);

      if (!this.isActive) {
        var viewModel = this._findViewModel(viewPort);

        if ('configureRouter' in viewModel) {
          var config = new RouterConfiguration();
          var result = Promise.resolve(viewModel.configureRouter(config, this));

          return result.then(function () {
            _this5.configure(config);
            _this5.activate();
          });
        } else {
          this.activate();
        }
      } else {
        this.dequeueInstruction();
      }
    };

    AppRouter.prototype._findViewModel = function _findViewModel(viewPort) {
      if (this.container.viewModel) {
        return this.container.viewModel;
      }

      if (viewPort.container) {
        var _container = viewPort.container;

        while (_container) {
          if (_container.viewModel) {
            return this.container.viewModel = _container.viewModel;
          }

          _container = _container.parent;
        }
      }
    };

    AppRouter.prototype.activate = function activate(options) {
      if (this.isActive) {
        return;
      }

      this.isActive = true;
      this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
      this.history.activate(this.options);
      this.dequeueInstruction();
    };

    AppRouter.prototype.deactivate = function deactivate() {
      this.isActive = false;
      this.history.deactivate();
    };

    AppRouter.prototype.reset = function reset() {
      _Router.prototype.reset.call(this);
      this.queue = [];
      this.options = null;
    };

    _createClass(AppRouter, [{
      key: 'isRoot',
      get: function get() {
        return true;
      }
    }]);

    return AppRouter;
  })(Router);

  exports.AppRouter = AppRouter;

  function findAnchor(el) {
    while (el) {
      if (el.tagName === 'A') return el;
      el = el.parentNode;
    }
  }

  function handleLinkClick(evt) {
    if (!this.isActive) {
      return;
    }

    var target = findAnchor(evt.target);
    if (!target) {
      return;
    }

    if (this.history._hasPushState) {
      if (!evt.altKey && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && targetIsThisWindow(target)) {
        var href = target.getAttribute('href');

        if (href !== null && !(href.charAt(0) === '#' || /^[a-z]+:/i.test(href))) {
          evt.preventDefault();
          this.history.navigate(href);
        }
      }
    }
  }

  function targetIsThisWindow(target) {
    var targetWindow = target.getAttribute('target');

    return !targetWindow || targetWindow === window.name || targetWindow === '_self' || targetWindow === 'top' && window === window.top;
  }

  function processResult(instruction, result, instructionCount, router) {
    if (!(result && 'completed' in result && 'output' in result)) {
      resut = result || {};
      result.output = new Error('Expected router pipeline to return a navigation result, but got [' + JSON.stringify(result) + '] instead.');
    }

    var finalResult = null;
    if (isNavigationCommand(result.output)) {
      result.output.navigate(router);
    } else {
      finalResult = result;

      if (!result.completed) {
        if (result.output instanceof Error) {
          logger.error(result.output);
        }

        restorePreviousLocation(router);
      }
    }

    return router.dequeueInstruction(instructionCount + 1).then(function (innerResult) {
      return finalResult || innerResult || result;
    });
  }

  function resolveInstruction(instruction, result, isInnerInstruction, router) {
    instruction.resolve(result);

    if (!isInnerInstruction) {
      router.isNavigating = false;
      var eventArgs = { instruction: instruction, result: result };
      var eventName = undefined;

      if (result.output instanceof Error) {
        eventName = 'error';
      } else if (!result.completed) {
        eventName = 'canceled';
      } else {
        var _queryString = instruction.queryString ? '?' + instruction.queryString : '';
        router.history.previousLocation = instruction.fragment + _queryString;
        eventName = 'success';
      }

      router.events.publish('router:navigation:' + eventName, eventArgs);
      router.events.publish('router:navigation:complete', eventArgs);
    }

    return result;
  }

  function restorePreviousLocation(router) {
    var previousLocation = router.history.previousLocation;
    if (previousLocation) {
      router.navigate(router.history.previousLocation, { trigger: false, replace: true });
    } else {
      logger.error('Router navigation failed, and no previous location could be restored.');
    }
  }
});
define('aurelia-router', ['aurelia-router/aurelia-router'], function (main) { return main; });

define('aurelia-templating-binding/aurelia-templating-binding',['exports', 'aurelia-binding', 'aurelia-templating', 'aurelia-logging'], function (exports, _aureliaBinding, _aureliaTemplating, _aureliaLogging) {
  

  exports.__esModule = true;
  exports.configure = configure;

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var SyntaxInterpreter = (function () {
    function SyntaxInterpreter(parser, observerLocator, eventManager) {
      _classCallCheck(this, SyntaxInterpreter);

      this.parser = parser;
      this.observerLocator = observerLocator;
      this.eventManager = eventManager;
    }

    SyntaxInterpreter.inject = function inject() {
      return [_aureliaBinding.Parser, _aureliaBinding.ObserverLocator, _aureliaBinding.EventManager];
    };

    SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction) {
      if (info.command in this) {
        return this[info.command](resources, element, info, existingInstruction);
      }

      return this.handleUnknownCommand(resources, element, info, existingInstruction);
    };

    SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction) {
      var attrName = info.attrName,
          command = info.command;

      var instruction = this.options(resources, element, info, existingInstruction);

      instruction.alteredAttr = true;
      instruction.attrName = 'global-behavior';
      instruction.attributes.aureliaAttrName = attrName;
      instruction.attributes.aureliaCommand = command;

      return instruction;
    };

    SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName) {
      var tagName = element.tagName.toLowerCase();

      if (tagName === 'input') {
        return attrName === 'value' || attrName === 'checked' || attrName === 'files' ? _aureliaBinding.bindingMode.twoWay : _aureliaBinding.bindingMode.oneWay;
      } else if (tagName == 'textarea' || tagName == 'select') {
        return attrName == 'value' ? _aureliaBinding.bindingMode.twoWay : _aureliaBinding.bindingMode.oneWay;
      } else if (attrName === 'textcontent' || attrName === 'innerhtml') {
        return element.contentEditable === 'true' ? _aureliaBinding.bindingMode.twoWay : _aureliaBinding.bindingMode.oneWay;
      } else if (attrName === 'scrolltop' || attrName === 'scrollleft') {
        return _aureliaBinding.bindingMode.twoWay;
      }

      return _aureliaBinding.bindingMode.oneWay;
    };

    SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

      instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), info.defaultBindingMode || this.determineDefaultBindingMode(element, info.attrName), resources.valueConverterLookupFunction);

      return instruction;
    };

    SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
      return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), false, true);
    };

    SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
      return new _aureliaBinding.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), true, true);
    };

    SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

      instruction.attributes[info.attrName] = new _aureliaBinding.CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.valueConverterLookupFunction);

      return instruction;
    };

    SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction) {
      var instruction = existingInstruction || { attrName: info.attrName, attributes: {} },
          attrValue = info.attrValue,
          language = this.language,
          name = null,
          target = '',
          current,
          i,
          ii;

      for (i = 0, ii = attrValue.length; i < ii; ++i) {
        current = attrValue[i];

        if (current === ';') {
          info = language.inspectAttribute(resources, name, target.trim());
          language.createAttributeInstruction(resources, element, info, instruction);

          if (!instruction.attributes[info.attrName]) {
            instruction.attributes[info.attrName] = info.attrValue;
          }

          target = '';
          name = null;
        } else if (current === ':' && name === null) {
          name = target.trim();
          target = '';
        } else {
          target += current;
        }
      }

      if (name !== null) {
        info = language.inspectAttribute(resources, name, target.trim());
        language.createAttributeInstruction(resources, element, info, instruction);

        if (!instruction.attributes[info.attrName]) {
          instruction.attributes[info.attrName] = info.attrValue;
        }
      }

      return instruction;
    };

    return SyntaxInterpreter;
  })();

  exports.SyntaxInterpreter = SyntaxInterpreter;

  SyntaxInterpreter.prototype['for'] = function (resources, element, info, existingInstruction) {
    var parts, keyValue, instruction, attrValue, isDestructuring;
    attrValue = info.attrValue;
    isDestructuring = attrValue.match(/[[].+[\]]/);
    parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

    if (parts.length !== 2) {
      throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
    }

    instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

    if (isDestructuring) {
      keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
      instruction.attributes.key = keyValue[0];
      instruction.attributes.value = keyValue[1];
    } else {
      instruction.attributes.local = parts[0];
    }

    instruction.attributes.items = new _aureliaBinding.BindingExpression(this.observerLocator, 'items', this.parser.parse(parts[1]), _aureliaBinding.bindingMode.oneWay, resources.valueConverterLookupFunction);

    return instruction;
  };

  SyntaxInterpreter.prototype['two-way'] = function (resources, element, info, existingInstruction) {
    var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.twoWay, resources.valueConverterLookupFunction);

    return instruction;
  };

  SyntaxInterpreter.prototype['one-way'] = function (resources, element, info, existingInstruction) {
    var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneWay, resources.valueConverterLookupFunction);

    return instruction;
  };

  SyntaxInterpreter.prototype['one-time'] = function (resources, element, info, existingInstruction) {
    var instruction = existingInstruction || { attrName: info.attrName, attributes: {} };

    instruction.attributes[info.attrName] = new _aureliaBinding.BindingExpression(this.observerLocator, this.attributeMap[info.attrName] || info.attrName, this.parser.parse(info.attrValue), _aureliaBinding.bindingMode.oneTime, resources.valueConverterLookupFunction);

    return instruction;
  };

  var info = {},
      logger = _aureliaLogging.getLogger('templating-binding');

  var TemplatingBindingLanguage = (function (_BindingLanguage) {
    function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter) {
      _classCallCheck(this, TemplatingBindingLanguage);

      _BindingLanguage.call(this);
      this.parser = parser;
      this.observerLocator = observerLocator;
      this.syntaxInterpreter = syntaxInterpreter;
      this.emptyStringExpression = this.parser.parse('\'\'');
      syntaxInterpreter.language = this;
      this.attributeMap = syntaxInterpreter.attributeMap = {
        'contenteditable': 'contentEditable',
        'for': 'htmlFor',
        'tabindex': 'tabIndex',
        'textcontent': 'textContent',
        'innerhtml': 'innerHTML',

        'maxlength': 'maxLength',
        'minlength': 'minLength',
        'formaction': 'formAction',
        'formenctype': 'formEncType',
        'formmethod': 'formMethod',
        'formnovalidate': 'formNoValidate',
        'formtarget': 'formTarget',
        'rowspan': 'rowSpan',
        'colspan': 'colSpan',
        'scrolltop': 'scrollTop',
        'scrollleft': 'scrollLeft',
        'readonly': 'readOnly'
      };
    }

    _inherits(TemplatingBindingLanguage, _BindingLanguage);

    TemplatingBindingLanguage.inject = function inject() {
      return [_aureliaBinding.Parser, _aureliaBinding.ObserverLocator, SyntaxInterpreter];
    };

    TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, attrName, attrValue) {
      var parts = attrName.split('.');

      info.defaultBindingMode = null;

      if (parts.length == 2) {
        info.attrName = parts[0].trim();
        info.attrValue = attrValue;
        info.command = parts[1].trim();

        if (info.command === 'ref') {
          info.expression = new _aureliaBinding.NameExpression(attrValue, info.attrName);
          info.command = null;
          info.attrName = 'ref';
        } else {
          info.expression = null;
        }
      } else if (attrName == 'ref') {
        info.attrName = attrName;
        info.attrValue = attrValue;
        info.command = null;
        info.expression = new _aureliaBinding.NameExpression(attrValue, 'element');
      } else {
        info.attrName = attrName;
        info.attrValue = attrValue;
        info.command = null;
        info.expression = this.parseContent(resources, attrName, attrValue);
      }

      return info;
    };

    TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
      var instruction;

      if (info.expression) {
        if (info.attrName === 'ref') {
          return info.expression;
        }

        instruction = existingInstruction || { attrName: info.attrName, attributes: {} };
        instruction.attributes[info.attrName] = info.expression;
      } else if (info.command) {
        instruction = this.syntaxInterpreter.interpret(resources, element, info, existingInstruction);
      }

      return instruction;
    };

    TemplatingBindingLanguage.prototype.parseText = function parseText(resources, value) {
      return this.parseContent(resources, 'textContent', value);
    };

    TemplatingBindingLanguage.prototype.parseContent = function parseContent(resources, attrName, attrValue) {
      var i = attrValue.indexOf('${', 0),
          ii = attrValue.length,
          char,
          pos = 0,
          open = 0,
          quote = null,
          interpolationStart,
          parts,
          partIndex = 0;
      while (i >= 0 && i < ii - 2) {
        open = 1;
        interpolationStart = i;
        i += 2;

        do {
          char = attrValue[i];
          i++;
          switch (char) {
            case '\'':
            case '"':
              if (quote === null) {
                quote = char;
              } else if (quote === char) {
                quote = null;
              }
              continue;
            case '\\':
              i++;
              continue;
          }

          if (quote !== null) {
            continue;
          }

          if (char === '{') {
            open++;
          } else if (char === '}') {
            open--;
          }
        } while (open > 0 && i < ii);

        if (open === 0) {
          parts = parts || [];
          if (attrValue[interpolationStart - 1] === '\\' && attrValue[interpolationStart - 2] !== '\\') {
            parts[partIndex] = attrValue.substring(pos, interpolationStart - 1) + attrValue.substring(interpolationStart, i);
            partIndex++;
            parts[partIndex] = this.emptyStringExpression;
            partIndex++;
          } else {
            parts[partIndex] = attrValue.substring(pos, interpolationStart);
            partIndex++;
            parts[partIndex] = this.parser.parse(attrValue.substring(interpolationStart + 2, i - 1));
            partIndex++;
          }
          pos = i;
          i = attrValue.indexOf('${', i);
        } else {
          break;
        }
      }

      if (partIndex === 0) {
        return null;
      }

      parts[partIndex] = attrValue.substr(pos);

      return new InterpolationBindingExpression(this.observerLocator, this.attributeMap[attrName] || attrName, parts, _aureliaBinding.bindingMode.oneWay, resources.valueConverterLookupFunction, attrName);
    };

    return TemplatingBindingLanguage;
  })(_aureliaTemplating.BindingLanguage);

  exports.TemplatingBindingLanguage = TemplatingBindingLanguage;

  var InterpolationBindingExpression = (function () {
    function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, valueConverterLookupFunction, attribute) {
      _classCallCheck(this, InterpolationBindingExpression);

      this.observerLocator = observerLocator;
      this.targetProperty = targetProperty;
      this.parts = parts;
      this.mode = mode;
      this.valueConverterLookupFunction = valueConverterLookupFunction;
      this.attribute = this.attrToRemove = attribute;
      this.discrete = false;
    }

    InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
      return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.valueConverterLookupFunction);
    };

    return InterpolationBindingExpression;
  })();

  exports.InterpolationBindingExpression = InterpolationBindingExpression;

  var InterpolationBinding = (function () {
    function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, valueConverterLookupFunction) {
      _classCallCheck(this, InterpolationBinding);

      if (targetProperty === 'style') {
        logger.info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
      } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && targetProperty === 'textContent') {
        throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
      }
      this.observerLocator = observerLocator;
      this.parts = parts;
      this.targetProperty = observerLocator.getObserver(target, targetProperty);
      this.mode = mode;
      this.valueConverterLookupFunction = valueConverterLookupFunction;
      this.toDispose = [];
    }

    InterpolationBinding.prototype.getObserver = function getObserver(obj, propertyName) {
      return this.observerLocator.getObserver(obj, propertyName);
    };

    InterpolationBinding.prototype.bind = function bind(source) {
      this.source = source;

      if (this.mode == _aureliaBinding.bindingMode.oneWay) {
        this.unbind();
        this.connect();
        this.setValue();
      } else {
        this.setValue();
      }
    };

    InterpolationBinding.prototype.setValue = function setValue() {
      var value = this.interpolate();
      this.targetProperty.setValue(value);
    };

    InterpolationBinding.prototype.partChanged = function partChanged(newValue, oldValue, connecting) {
      var _this = this;

      var map, info;
      if (!connecting) {
        this.setValue();
      }
      if (oldValue instanceof Array) {
        map = this.arrayPartMap;
        info = map ? map.get(oldValue) : null;
        if (info) {
          info.refs--;
          if (info.refs === 0) {
            info.dispose();
            map['delete'](oldValue);
          }
        }
      }
      if (newValue instanceof Array) {
        map = this.arrayPartMap || (this.arrayPartMap = new Map());
        info = map.get(newValue);
        if (!info) {
          info = {
            refs: 0,
            dispose: this.observerLocator.getArrayObserver(newValue).subscribe(function () {
              return _this.setValue();
            })
          };
          map.set(newValue, info);
        }
        info.refs++;
      }
    };

    InterpolationBinding.prototype.connect = function connect() {
      var info,
          parts = this.parts,
          source = this.source,
          toDispose = this.toDispose = [],
          partChanged = this.partChanged.bind(this),
          i,
          ii;

      for (i = 0, ii = parts.length; i < ii; ++i) {
        if (i % 2 === 0) {} else {
          info = parts[i].connect(this, source);
          if (info.observer) {
            toDispose.push(info.observer.subscribe(partChanged));
          }
          if (info.value instanceof Array) {
            partChanged(info.value, undefined, true);
          }
        }
      }
    };

    InterpolationBinding.prototype.interpolate = function interpolate() {
      var value = '',
          parts = this.parts,
          source = this.source,
          valueConverterLookupFunction = this.valueConverterLookupFunction,
          i,
          ii,
          temp;

      for (i = 0, ii = parts.length; i < ii; ++i) {
        if (i % 2 === 0) {
          value += parts[i];
        } else {
          temp = parts[i].evaluate(source, valueConverterLookupFunction);
          value += typeof temp !== 'undefined' && temp !== null ? temp.toString() : '';
        }
      }

      return value;
    };

    InterpolationBinding.prototype.unbind = function unbind() {
      var i,
          ii,
          toDispose = this.toDispose,
          map = this.arrayPartMap;

      if (toDispose) {
        for (i = 0, ii = toDispose.length; i < ii; ++i) {
          toDispose[i]();
        }
      }

      this.toDispose = null;

      if (map) {
        for (var _iterator = map.values(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          if (_isArray) {
            if (_i >= _iterator.length) break;
            toDispose = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            toDispose = _i.value;
          }

          toDispose.dispose();
        }
        map.clear();
      }

      this.arrayPartMap = null;
    };

    return InterpolationBinding;
  })();

  function configure(aurelia) {
    var instance,
        getInstance = function getInstance(c) {
      return instance || (instance = c.invoke(TemplatingBindingLanguage));
    };

    if (aurelia.container.hasHandler(TemplatingBindingLanguage)) {
      instance = aurelia.container.get(TemplatingBindingLanguage);
    } else {
      aurelia.container.registerHandler(TemplatingBindingLanguage, getInstance);
    }

    aurelia.container.registerHandler(_aureliaTemplating.BindingLanguage, getInstance);
  }
});
define('aurelia-templating-binding', ['aurelia-templating-binding/aurelia-templating-binding'], function (main) { return main; });

define('aurelia-templating-resources/compose',['exports', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaTemplating) {
  

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var Compose = (function () {
    var _instanceInitializers = {};

    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
      _classCallCheck(this, _Compose);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'viewModel', _instanceInitializers);

      this.element = element;
      this.container = container;
      this.compositionEngine = compositionEngine;
      this.viewSlot = viewSlot;
      this.viewResources = viewResources;
      this.taskQueue = taskQueue;
    }

    var _Compose = Compose;

    _Compose.prototype.bind = function bind(executionContext) {
      this.executionContext = executionContext;
      processInstruction(this, createInstruction(this, {
        view: this.view,
        viewModel: this.viewModel,
        model: this.model
      }));
    };

    _Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
      var _this = this;

      if (this.currentInstruction) {
        this.currentInstruction.model = newValue;
        return;
      }

      this.taskQueue.queueMicroTask(function () {
        if (_this.currentInstruction) {
          _this.currentInstruction.model = newValue;
          return;
        }

        var vm = _this.currentViewModel;

        if (vm && typeof vm.activate === 'function') {
          vm.activate(newValue);
        }
      });
    };

    _Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
      var _this2 = this;

      var instruction = createInstruction(this, {
        view: newValue,
        viewModel: this.currentViewModel || this.viewModel,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this2, _this2.currentInstruction);
      });
    };

    _Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
      var _this3 = this;

      var instruction = createInstruction(this, {
        viewModel: newValue,
        view: this.view,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this3, _this3.currentInstruction);
      });
    };

    _createDecoratedClass(_Compose, [{
      key: 'model',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'view',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'viewModel',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    Compose = _aureliaDependencyInjection.inject(Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue)(Compose) || Compose;
    Compose = _aureliaTemplating.noView(Compose) || Compose;
    Compose = _aureliaTemplating.customElement('compose')(Compose) || Compose;
    return Compose;
  })();

  exports.Compose = Compose;

  function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
      executionContext: composer.executionContext,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentBehavior: composer.currentBehavior,
      host: composer.element
    });
  }

  function processInstruction(composer, instruction) {
    composer.currentInstruction = null;
    composer.compositionEngine.compose(instruction).then(function (next) {
      composer.currentBehavior = next;
      composer.currentViewModel = next ? next.executionContext : null;
    });
  }
});
define('aurelia-templating-resources/if',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-task-queue'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaTaskQueue) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var If = (function () {
    function If(viewFactory, viewSlot, taskQueue) {
      _classCallCheck(this, _If);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.showing = false;
      this.taskQueue = taskQueue;
    }

    var _If = If;

    _If.prototype.bind = function bind(executionContext) {
      this.$parent = executionContext;
      this.valueChanged(this.value);
    };

    _If.prototype.valueChanged = function valueChanged(newValue) {
      var _this = this;

      if (!newValue) {
        if (this.view && this.showing) {
          this.taskQueue.queueMicroTask(function () {
            _this.viewSlot.remove(_this.view);
            _this.view.unbind();
          });
        }

        this.showing = false;
        return;
      }

      if (!this.view) {
        this.view = this.viewFactory.create(this.$parent);
      }

      if (!this.showing) {
        this.showing = true;

        if (!this.view.isBound) {
          this.view.bind();
        }

        this.viewSlot.add(this.view);
      }
    };

    If = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot, _aureliaTaskQueue.TaskQueue)(If) || If;
    If = _aureliaTemplating.templateController(If) || If;
    If = _aureliaTemplating.customAttribute('if')(If) || If;
    return If;
  })();

  exports.If = If;
});
define('aurelia-templating-resources/with',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var With = (function () {
    function With(viewFactory, viewSlot) {
      _classCallCheck(this, _With);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
    }

    var _With = With;

    _With.prototype.valueChanged = function valueChanged(newValue) {
      if (!this.view) {
        this.view = this.viewFactory.create(newValue);
        this.viewSlot.add(this.view);
      } else {
        this.view.bind(newValue);
      }
    };

    With = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot)(With) || With;
    With = _aureliaTemplating.templateController(With) || With;
    With = _aureliaTemplating.customAttribute('with')(With) || With;
    return With;
  })();

  exports.With = With;
});
define('aurelia-templating-resources/repeat',['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaTemplating) {
  

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var Repeat = (function () {
    var _instanceInitializers = {};

    function Repeat(viewFactory, viewSlot, observerLocator) {
      _classCallCheck(this, _Repeat);

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'local', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'key', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.observerLocator = observerLocator;
      this.local = 'item';
      this.key = 'key';
      this.value = 'value';
    }

    var _Repeat = Repeat;

    _Repeat.prototype.bind = function bind(executionContext) {
      var _this = this;

      var items = this.items,
          observer;

      this.executionContext = executionContext;

      if (!items) {
        if (this.oldItems) {
          this.removeAll();
        }

        return;
      }

      if (this.oldItems === items) {
        if (items instanceof Map) {
          var records = _aureliaBinding.getChangeRecords(items);
          observer = this.observerLocator.getMapObserver(items);

          this.handleMapChangeRecords(items, records);

          this.disposeSubscription = observer.subscribe(function (records) {
            _this.handleMapChangeRecords(items, records);
          });
        } else {
          var splices = _aureliaBinding.calcSplices(items, 0, items.length, this.lastBoundItems, 0, this.lastBoundItems.length);
          observer = this.observerLocator.getArrayObserver(items);

          this.handleSplices(items, splices);
          this.lastBoundItems = this.oldItems = null;

          this.disposeSubscription = observer.subscribe(function (splices) {
            _this.handleSplices(items, splices);
          });

          return;
        }
      } else if (this.oldItems) {
        this.removeAll();
      }

      this.processItems();
    };

    _Repeat.prototype.unbind = function unbind() {
      this.oldItems = this.items;

      if (this.items instanceof Array) {
        this.lastBoundItems = this.items.slice(0);
      }

      if (this.disposeSubscription) {
        this.disposeSubscription();
        this.disposeSubscription = null;
      }
    };

    _Repeat.prototype.itemsChanged = function itemsChanged() {
      this.processItems();
    };

    _Repeat.prototype.processItems = function processItems() {
      var items = this.items;

      if (this.disposeSubscription) {
        this.disposeSubscription();
        this.removeAll();
      }

      if (!items && items !== 0) {
        return;
      }

      if (items instanceof Array) {
        this.processArrayItems(items);
      } else if (items instanceof Map) {
        this.processMapEntries(items);
      } else if (typeof items === 'number') {
        this.processNumber(items);
      } else {
        throw new Error('Object in "repeat" must be of type Array, Map or Number');
      }
    };

    _Repeat.prototype.processArrayItems = function processArrayItems(items) {
      var _this2 = this;

      var viewFactory = this.viewFactory,
          viewSlot = this.viewSlot,
          i,
          ii,
          row,
          view,
          observer;

      observer = this.observerLocator.getArrayObserver(items);

      for (i = 0, ii = items.length; i < ii; ++i) {
        row = this.createFullExecutionContext(items[i], i, ii);
        view = viewFactory.create(row);
        viewSlot.add(view);
      }

      this.disposeSubscription = observer.subscribe(function (splices) {
        _this2.handleSplices(items, splices);
      });
    };

    _Repeat.prototype.processMapEntries = function processMapEntries(items) {
      var _this3 = this;

      var viewFactory = this.viewFactory,
          viewSlot = this.viewSlot,
          index = 0,
          row,
          view,
          observer;

      observer = this.observerLocator.getMapObserver(items);

      items.forEach(function (value, key) {
        row = _this3.createFullExecutionKvpContext(key, value, index, items.size);
        view = viewFactory.create(row);
        viewSlot.add(view);
        ++index;
      });

      this.disposeSubscription = observer.subscribe(function (record) {
        _this3.handleMapChangeRecords(items, record);
      });
    };

    _Repeat.prototype.processNumber = function processNumber(value) {
      var viewFactory = this.viewFactory,
          viewSlot = this.viewSlot,
          childrenLength = viewSlot.children.length,
          i,
          ii,
          row,
          view,
          viewsToRemove;

      value = Math.floor(value);
      viewsToRemove = childrenLength - value;

      if (viewsToRemove > 0) {
        if (viewsToRemove > childrenLength) {
          viewsToRemove = childrenLength;
        }
        for (i = 0, ii = viewsToRemove; i < ii; ++i) {
          viewSlot.removeAt(childrenLength - (i + 1));
        }
        return;
      }

      for (i = childrenLength, ii = value; i < ii; ++i) {
        row = this.createFullExecutionContext(i, i, ii);
        view = viewFactory.create(row);
        viewSlot.add(view);
      }
    };

    _Repeat.prototype.createBaseExecutionContext = function createBaseExecutionContext(data) {
      var context = {};
      context[this.local] = data;
      context.$parent = this.executionContext;
      return context;
    };

    _Repeat.prototype.createBaseExecutionKvpContext = function createBaseExecutionKvpContext(key, value) {
      var context = {};
      context[this.key] = key;
      context[this.value] = value;
      context.$parent = this.executionContext;
      return context;
    };

    _Repeat.prototype.createFullExecutionContext = function createFullExecutionContext(data, index, length) {
      var context = this.createBaseExecutionContext(data);
      return this.updateExecutionContext(context, index, length);
    };

    _Repeat.prototype.createFullExecutionKvpContext = function createFullExecutionKvpContext(key, value, index, length) {
      var context = this.createBaseExecutionKvpContext(key, value);
      return this.updateExecutionContext(context, index, length);
    };

    _Repeat.prototype.updateExecutionContext = function updateExecutionContext(context, index, length) {
      var first = index === 0,
          last = index === length - 1,
          even = index % 2 === 0;

      context.$index = index;
      context.$first = first;
      context.$last = last;
      context.$middle = !(first || last);
      context.$odd = !even;
      context.$even = even;

      return context;
    };

    _Repeat.prototype.handleSplices = function handleSplices(array, splices) {
      var viewLookup = new Map(),
          viewSlot = this.viewSlot,
          spliceIndexLow,
          viewOrPromise,
          view,
          i,
          ii,
          j,
          jj,
          row,
          splice,
          addIndex,
          end,
          itemsLeftToAdd,
          removed,
          model,
          children,
          length,
          context,
          spliceIndex;

      for (i = 0, ii = splices.length; i < ii; ++i) {
        splice = splices[i];
        addIndex = spliceIndex = splice.index;
        itemsLeftToAdd = splice.addedCount;
        end = splice.index + splice.addedCount;
        removed = splice.removed;
        if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
          spliceIndexLow = spliceIndex;
        }

        for (j = 0, jj = removed.length; j < jj; ++j) {
          if (itemsLeftToAdd > 0) {
            view = viewSlot.children[spliceIndex + j];
            view.detached();
            context = this.createFullExecutionContext(array[addIndex + j], spliceIndex + j, array.length);
            view.bind(context);
            view.attached();
            --itemsLeftToAdd;
          } else {
            viewOrPromise = viewSlot.removeAt(addIndex + splice.addedCount);
            if (viewOrPromise) {
              viewLookup.set(removed[j], viewOrPromise);
            }
          }
        }

        addIndex += removed.length;

        for (; 0 < itemsLeftToAdd; ++addIndex) {
          model = array[addIndex];
          viewOrPromise = viewLookup.get(model);
          if (viewOrPromise instanceof Promise) {
            (function (localAddIndex, localModel) {
              viewOrPromise.then(function (view) {
                viewLookup['delete'](localModel);
                viewSlot.insert(localAddIndex, view);
              });
            })(addIndex, model);
          } else if (viewOrPromise) {
            viewLookup['delete'](model);
            viewSlot.insert(addIndex, viewOrPromise);
          } else {
            row = this.createBaseExecutionContext(model);
            view = this.viewFactory.create(row);
            viewSlot.insert(addIndex, view);
          }
          --itemsLeftToAdd;
        }
      }

      children = this.viewSlot.children;
      length = children.length;

      if (spliceIndexLow > 0) {
        spliceIndexLow = spliceIndexLow - 1;
      }

      for (; spliceIndexLow < length; ++spliceIndexLow) {
        this.updateExecutionContext(children[spliceIndexLow].executionContext, spliceIndexLow, length);
      }

      viewLookup.forEach(function (x) {
        if (x instanceof Promise) {
          x.then(function (y) {
            return y.unbind();
          });
        } else {
          x.unbind();
        }
      });
    };

    _Repeat.prototype.handleMapChangeRecords = function handleMapChangeRecords(map, records) {
      var viewSlot = this.viewSlot,
          key,
          i,
          ii,
          view,
          children,
          length,
          row,
          removeIndex,
          record;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        key = record.key;
        switch (record.type) {
          case 'update':
            removeIndex = this.getViewIndexByKey(key);
            viewSlot.removeAt(removeIndex);
            row = this.createBaseExecutionKvpContext(key, map.get(key));
            view = this.viewFactory.create(row);
            viewSlot.insert(removeIndex, view);
            break;
          case 'add':
            row = this.createBaseExecutionKvpContext(key, map.get(key));
            view = this.viewFactory.create(row);
            viewSlot.insert(map.size, view);
            break;
          case 'delete':
            if (!record.oldValue) {
              return;
            }
            removeIndex = this.getViewIndexByKey(key);
            viewSlot.removeAt(removeIndex);
            break;
          case 'clear':
            viewSlot.removeAll();
        }
      }

      children = viewSlot.children;
      length = children.length;

      for (i = 0; i < length; i++) {
        this.updateExecutionContext(children[i].executionContext, i, length);
      }
    };

    _Repeat.prototype.getViewIndexByKey = function getViewIndexByKey(key) {
      var viewSlot = this.viewSlot,
          i,
          ii,
          child;

      for (i = 0, ii = viewSlot.children.length; i < ii; ++i) {
        child = viewSlot.children[i];
        if (child.bindings[0].source[this.key] === key) {
          return i;
        }
      }
    };

    _Repeat.prototype.removeAll = function removeAll() {
      var viewSlot = this.viewSlot,
          views,
          i;

      views = viewSlot.children;
      viewSlot.removeAll();
      i = views.length;
      while (i--) {
        views[i].unbind();
      }
    };

    _createDecoratedClass(_Repeat, [{
      key: 'items',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'local',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'key',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    Repeat = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot, _aureliaBinding.ObserverLocator)(Repeat) || Repeat;
    Repeat = _aureliaTemplating.templateController(Repeat) || Repeat;
    Repeat = _aureliaTemplating.customAttribute('repeat')(Repeat) || Repeat;
    return Repeat;
  })();

  exports.Repeat = Repeat;
});
define('aurelia-templating-resources/show',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    node.type = 'text/css';
    document.head.appendChild(node);
  }

  if (!!HTMLElement.prototype.createShadowRoot) {
    addStyleString('body /deep/ .aurelia-hide { display:none !important; }');
  } else {
    addStyleString('.aurelia-hide { display:none !important; }');
  }

  var Show = (function () {
    function Show(element) {
      _classCallCheck(this, _Show);

      this.element = element;
    }

    var _Show = Show;

    _Show.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.element.classList.remove('aurelia-hide');
      } else {
        this.element.classList.add('aurelia-hide');
      }
    };

    _Show.prototype.bind = function bind(executionContext) {
      this.valueChanged(this.value);
    };

    Show = _aureliaDependencyInjection.inject(Element)(Show) || Show;
    Show = _aureliaTemplating.customAttribute('show')(Show) || Show;
    return Show;
  })();

  exports.Show = Show;
});
define('aurelia-templating-resources/global-behavior',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-logging'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaLogging) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var GlobalBehavior = (function () {
    function GlobalBehavior(element) {
      _classCallCheck(this, _GlobalBehavior);

      this.element = element;
    }

    var _GlobalBehavior = GlobalBehavior;

    _GlobalBehavior.prototype.bind = function bind() {
      var handler = GlobalBehavior.handlers[this.aureliaAttrName];

      if (!handler) {
        throw new Error('Binding handler not found for \'' + this.aureliaAttrName + '.' + this.aureliaCommand + '\'. Element:\n' + this.element.outerHTML + '\n');
      }

      try {
        this.handler = handler.bind(this, this.element, this.aureliaCommand) || handler;
      } catch (error) {
        throw _aureliaLogging.AggregateError('Conventional binding handler failed.', error);
      }
    };

    _GlobalBehavior.prototype.attached = function attached() {
      if (this.handler && 'attached' in this.handler) {
        this.handler.attached(this, this.element);
      }
    };

    _GlobalBehavior.prototype.detached = function detached() {
      if (this.handler && 'detached' in this.handler) {
        this.handler.detached(this, this.element);
      }
    };

    _GlobalBehavior.prototype.unbind = function unbind() {
      if (this.handler && 'unbind' in this.handler) {
        this.handler.unbind(this, this.element);
      }

      this.handler = null;
    };

    GlobalBehavior = _aureliaDependencyInjection.inject(Element)(GlobalBehavior) || GlobalBehavior;
    GlobalBehavior = _aureliaTemplating.dynamicOptions(GlobalBehavior) || GlobalBehavior;
    GlobalBehavior = _aureliaTemplating.customAttribute('global-behavior')(GlobalBehavior) || GlobalBehavior;
    return GlobalBehavior;
  })();

  exports.GlobalBehavior = GlobalBehavior;

  GlobalBehavior.createSettingsFromBehavior = function (behavior) {
    var settings = {};

    for (var key in behavior) {
      if (key === 'aureliaAttrName' || key === 'aureliaCommand' || !behavior.hasOwnProperty(key)) {
        continue;
      }

      settings[key] = behavior[key];
    }

    return settings;
  };

  GlobalBehavior.jQueryPlugins = {};

  GlobalBehavior.handlers = {
    jquery: {
      bind: function bind(behavior, element, command) {
        var settings = GlobalBehavior.createSettingsFromBehavior(behavior);
        var pluginName = GlobalBehavior.jQueryPlugins[command] || command;
        var jqueryElement = window.jQuery(element);

        if (!jqueryElement[pluginName]) {
          _aureliaLogging.getLogger('templating-resources').warn('Could not find the jQuery plugin ' + pluginName + ', possibly due to case mismatch. Trying to enumerate jQuery methods in lowercase. Add the correctly cased plugin name to the GlobalBehavior to avoid this performance hit.');

          for (var prop in jqueryElement) {
            if (prop.toLowerCase() === pluginName) {
              pluginName = prop;
            }
          }
        }

        behavior.plugin = jqueryElement[pluginName](settings);
      },
      unbind: function unbind(behavior, element) {
        if (typeof behavior.plugin.destroy === 'function') {
          behavior.plugin.destroy();
          behavior.plugin = null;
        }
      }
    }
  };
});
define('aurelia-templating-resources/sanitize-html',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  var SanitizeHtmlValueConverter = (function () {
    function SanitizeHtmlValueConverter() {
      _classCallCheck(this, _SanitizeHtmlValueConverter);

      this.sanitizer = SanitizeHtmlValueConverter.defaultSanitizer;
    }

    var _SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;

    _SanitizeHtmlValueConverter.defaultSanitizer = function defaultSanitizer(untrustedMarkup) {
      return untrustedMarkup.replace(SCRIPT_REGEX, '');
    };

    _SanitizeHtmlValueConverter.prototype.toView = function toView(untrustedMarkup) {
      if (untrustedMarkup === null) {
        return null;
      }

      return this.sanitizer(untrustedMarkup);
    };

    SanitizeHtmlValueConverter = _aureliaBinding.valueConverter('sanitizeHtml')(SanitizeHtmlValueConverter) || SanitizeHtmlValueConverter;
    return SanitizeHtmlValueConverter;
  })();

  exports.SanitizeHtmlValueConverter = SanitizeHtmlValueConverter;
});
define('aurelia-templating-resources/replaceable',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Replaceable = (function () {
    function Replaceable(viewFactory, viewSlot) {
      _classCallCheck(this, _Replaceable);

      viewSlot.add(viewFactory.create());
    }

    var _Replaceable = Replaceable;
    Replaceable = _aureliaDependencyInjection.inject(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot)(Replaceable) || Replaceable;
    Replaceable = _aureliaTemplating.templateController(Replaceable) || Replaceable;
    Replaceable = _aureliaTemplating.customAttribute('replaceable')(Replaceable) || Replaceable;
    return Replaceable;
  })();

  exports.Replaceable = Replaceable;
});
define('aurelia-templating-resources/focus',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Focus = (function () {
    function Focus(element, taskQueue) {
      var _this = this;

      _classCallCheck(this, _Focus);

      this.element = element;
      this.taskQueue = taskQueue;

      this.focusListener = function (e) {
        _this.value = true;
      };
      this.blurListener = function (e) {
        if (document.activeElement !== _this.element) {
          _this.value = false;
        }
      };
    }

    var _Focus = Focus;

    _Focus.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.giveFocus();
      } else {
        this.element.blur();
      }
    };

    _Focus.prototype.giveFocus = function giveFocus() {
      var _this2 = this;

      this.taskQueue.queueMicroTask(function () {
        if (_this2.value) {
          _this2.element.focus();
        }
      });
    };

    _Focus.prototype.attached = function attached() {
      this.element.addEventListener('focus', this.focusListener);
      this.element.addEventListener('blur', this.blurListener);
    };

    _Focus.prototype.detached = function detached() {
      this.element.removeEventListener('focus', this.focusListener);
      this.element.removeEventListener('blur', this.blurListener);
    };

    Focus = _aureliaDependencyInjection.inject(Element, _aureliaTaskQueue.TaskQueue)(Focus) || Focus;
    Focus = _aureliaTemplating.customAttribute('focus', _aureliaBinding.bindingMode.twoWay)(Focus) || Focus;
    return Focus;
  })();

  exports.Focus = Focus;
});
define('aurelia-templating-resources/aurelia-templating-resources',['exports', './compose', './if', './with', './repeat', './show', './global-behavior', './sanitize-html', './replaceable', './focus'], function (exports, _compose, _if, _with, _repeat, _show, _globalBehavior, _sanitizeHtml, _replaceable, _focus) {
  

  exports.__esModule = true;

  function configure(aurelia) {
    aurelia.globalizeResources('./compose', './if', './with', './repeat', './show', './replaceable', './global-behavior', './sanitize-html', './focus');
  }

  exports.Compose = _compose.Compose;
  exports.If = _if.If;
  exports.With = _with.With;
  exports.Repeat = _repeat.Repeat;
  exports.Show = _show.Show;
  exports.SanitizeHtmlValueConverter = _sanitizeHtml.SanitizeHtmlValueConverter;
  exports.GlobalBehavior = _globalBehavior.GlobalBehavior;
  exports.Replaceable = _replaceable.Replaceable;
  exports.Focus = _focus.Focus;
  exports.configure = configure;
});
define('aurelia-templating-resources', ['aurelia-templating-resources/aurelia-templating-resources'], function (main) { return main; });

define('aurelia-templating-router/route-loader',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-path', 'aurelia-metadata'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaPath, _aureliaMetadata) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var TemplatingRouteLoader = (function (_RouteLoader) {
    function TemplatingRouteLoader(compositionEngine) {
      _classCallCheck(this, _TemplatingRouteLoader);

      _RouteLoader.call(this);
      this.compositionEngine = compositionEngine;
    }

    _inherits(TemplatingRouteLoader, _RouteLoader);

    var _TemplatingRouteLoader = TemplatingRouteLoader;

    _TemplatingRouteLoader.prototype.loadRoute = function loadRoute(router, config) {
      var childContainer = router.container.createChild(),
          instruction = {
        viewModel: _aureliaPath.relativeToFile(config.moduleId, _aureliaMetadata.Origin.get(router.container.viewModel.constructor).moduleId),
        childContainer: childContainer,
        view: config.view || config.viewStrategy
      };

      childContainer.getChildRouter = function () {
        var childRouter;

        childContainer.registerHandler(_aureliaRouter.Router, function (c) {
          return childRouter || (childRouter = router.createChild(childContainer));
        });

        return childContainer.get(_aureliaRouter.Router);
      };

      return this.compositionEngine.createViewModel(instruction).then(function (instruction) {
        instruction.executionContext = instruction.viewModel;
        instruction.router = router;
        return instruction;
      });
    };

    TemplatingRouteLoader = _aureliaDependencyInjection.inject(_aureliaTemplating.CompositionEngine)(TemplatingRouteLoader) || TemplatingRouteLoader;
    return TemplatingRouteLoader;
  })(_aureliaRouter.RouteLoader);

  exports.TemplatingRouteLoader = TemplatingRouteLoader;
});
define('aurelia-templating-router/router-view',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-metadata'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaMetadata) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RouterView = (function () {
    function RouterView(element, container, viewSlot, router) {
      _classCallCheck(this, _RouterView);

      this.element = element;
      this.container = container;
      this.viewSlot = viewSlot;
      this.router = router;
      this.router.registerViewPort(this, this.element.getAttribute('name'));
    }

    var _RouterView = RouterView;

    _RouterView.prototype.bind = function bind(executionContext) {
      this.container.viewModel = executionContext;
    };

    _RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
      var _this = this;

      var component = viewPortInstruction.component,
          viewStrategy = component.view,
          childContainer = component.childContainer,
          viewModel = component.executionContext,
          viewModelResource = component.viewModelResource,
          metadata = viewModelResource.metadata;

      if (!viewStrategy && 'getViewStrategy' in viewModel) {
        viewStrategy = viewModel.getViewStrategy();
      }

      if (viewStrategy) {
        viewStrategy = _aureliaTemplating.ViewStrategy.normalize(viewStrategy);
        viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId);
      }

      return metadata.load(childContainer, viewModelResource.value, viewStrategy, true).then(function (viewFactory) {
        viewPortInstruction.behavior = metadata.create(childContainer, {
          executionContext: viewModel,
          viewFactory: viewFactory,
          suppressBind: true,
          host: _this.element
        });

        if (waitToSwap) {
          return;
        }

        _this.swap(viewPortInstruction);
      });
    };

    _RouterView.prototype.swap = function swap(viewPortInstruction) {
      viewPortInstruction.behavior.view.bind(viewPortInstruction.behavior.executionContext);
      this.viewSlot.swap(viewPortInstruction.behavior.view);

      if (this.view) {
        this.view.unbind();
      }

      this.view = viewPortInstruction.behavior.view;
    };

    RouterView = _aureliaDependencyInjection.inject(Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router)(RouterView) || RouterView;
    RouterView = _aureliaTemplating.noView(RouterView) || RouterView;
    RouterView = _aureliaTemplating.customElement('router-view')(RouterView) || RouterView;
    return RouterView;
  })();

  exports.RouterView = RouterView;
});
define('aurelia-templating-router/route-href',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaRouter) {
  

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var RouteHref = (function () {
    function RouteHref(router, element) {
      _classCallCheck(this, _RouteHref);

      this.router = router;
      this.element = element;
    }

    var _RouteHref = RouteHref;

    _RouteHref.prototype.bind = function bind() {
      this.processChange();
    };

    _RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
      if (previous) {
        this.element.removeAttribute(previous);
      }

      this.processChange();
    };

    _RouteHref.prototype.processChange = function processChange() {
      var href = this.router.generate(this.route, this.params);
      this.element.setAttribute(this.attribute, href);
    };

    RouteHref = _aureliaDependencyInjection.inject(_aureliaRouter.Router, Element)(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.bindable({ name: 'attribute', defaultValue: 'href' })(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.bindable({ name: 'params', changeHandler: 'processChange' })(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.bindable({ name: 'route', changeHandler: 'processChange' })(RouteHref) || RouteHref;
    RouteHref = _aureliaTemplating.customAttribute('route-href')(RouteHref) || RouteHref;
    return RouteHref;
  })();

  exports.RouteHref = RouteHref;
});
define('aurelia-templating-router/aurelia-templating-router',['exports', 'aurelia-router', './route-loader', './router-view', './route-href'], function (exports, _aureliaRouter, _routeLoader, _routerView, _routeHref) {
  

  exports.__esModule = true;

  function configure(aurelia) {
    aurelia.withSingleton(_aureliaRouter.RouteLoader, _routeLoader.TemplatingRouteLoader).withSingleton(_aureliaRouter.Router, _aureliaRouter.AppRouter).globalizeResources('./router-view', './route-href');
  }

  exports.TemplatingRouteLoader = _routeLoader.TemplatingRouteLoader;
  exports.RouterView = _routerView.RouterView;
  exports.RouteHref = _routeHref.RouteHref;
  exports.configure = configure;
});
define('aurelia-templating-router', ['aurelia-templating-router/aurelia-templating-router'], function (main) { return main; });

define('aurelia-http-client/aurelia-http-client',['exports', 'core-js', 'aurelia-path'], function (exports, _coreJs, _aureliaPath) {
  

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.timeoutTransformer = timeoutTransformer;
  exports.callbackParameterNameTransformer = callbackParameterNameTransformer;
  exports.credentialsTransformer = credentialsTransformer;
  exports.progressTransformer = progressTransformer;
  exports.responseTypeTransformer = responseTypeTransformer;
  exports.headerTransformer = headerTransformer;
  exports.contentTransformer = contentTransformer;
  exports.createJSONPRequestMessageProcessor = createJSONPRequestMessageProcessor;
  exports.createHttpRequestMessageProcessor = createHttpRequestMessageProcessor;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _core = _interopRequireDefault(_coreJs);

  var Headers = (function () {
    function Headers() {
      var headers = arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Headers);

      this.headers = headers;
    }

    Headers.prototype.add = function add(key, value) {
      this.headers[key] = value;
    };

    Headers.prototype.get = function get(key) {
      return this.headers[key];
    };

    Headers.prototype.clear = function clear() {
      this.headers = {};
    };

    Headers.prototype.configureXHR = function configureXHR(xhr) {
      var headers = this.headers,
          key;

      for (key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
    };

    Headers.parse = function parse(headerStr) {
      var headers = new Headers();
      if (!headerStr) {
        return headers;
      }

      var headerPairs = headerStr.split('\r\n');
      for (var i = 0; i < headerPairs.length; i++) {
        var headerPair = headerPairs[i];

        var index = headerPair.indexOf(': ');
        if (index > 0) {
          var key = headerPair.substring(0, index);
          var val = headerPair.substring(index + 2);
          headers.add(key, val);
        }
      }

      return headers;
    };

    return Headers;
  })();

  exports.Headers = Headers;

  var RequestMessage = (function () {
    function RequestMessage(method, url, content, headers) {
      _classCallCheck(this, RequestMessage);

      this.method = method;
      this.url = url;
      this.content = content;
      this.headers = headers || new Headers();
      this.baseUrl = '';
    }

    RequestMessage.prototype.buildFullUrl = function buildFullUrl() {
      var url = _aureliaPath.join(this.baseUrl, this.url);

      if (this.params) {
        var qs = _aureliaPath.buildQueryString(this.params);
        url = qs ? url + '?' + qs : url;
      }

      return url;
    };

    return RequestMessage;
  })();

  exports.RequestMessage = RequestMessage;

  var HttpResponseMessage = (function () {
    function HttpResponseMessage(requestMessage, xhr, responseType, reviver) {
      _classCallCheck(this, HttpResponseMessage);

      this.requestMessage = requestMessage;
      this.statusCode = xhr.status;
      this.response = xhr.response || xhr.responseText;
      this.isSuccess = xhr.status >= 200 && xhr.status < 400;
      this.statusText = xhr.statusText;
      this.reviver = reviver;
      this.mimeType = null;

      if (xhr.getAllResponseHeaders) {
        try {
          this.headers = Headers.parse(xhr.getAllResponseHeaders());
        } catch (err) {
          if (xhr.requestHeaders) this.headers = { headers: xhr.requestHeaders };
        }
      } else {
        this.headers = new Headers();
      }

      var contentType;
      if (this.headers && this.headers.headers) contentType = this.headers.headers['Content-Type'];
      if (contentType) {
        this.mimeType = responseType = contentType.split(';')[0].trim();
        if (mimeTypes.hasOwnProperty(this.mimeType)) responseType = mimeTypes[this.mimeType];
      }
      this.responseType = responseType;
    }

    _createClass(HttpResponseMessage, [{
      key: 'content',
      get: function get() {
        try {
          if (this._content !== undefined) {
            return this._content;
          }

          if (this.response === undefined || this.response === null) {
            return this._content = this.response;
          }

          if (this.responseType === 'json') {
            return this._content = JSON.parse(this.response, this.reviver);
          }

          if (this.reviver) {
            return this._content = this.reviver(this.response);
          }

          return this._content = this.response;
        } catch (e) {
          if (this.isSuccess) {
            throw e;
          }

          return this._content = null;
        }
      }
    }]);

    return HttpResponseMessage;
  })();

  exports.HttpResponseMessage = HttpResponseMessage;
  var mimeTypes = {
    'text/html': 'html',
    'text/javascript': 'js',
    'application/javascript': 'js',
    'text/json': 'json',
    'application/json': 'json',
    'application/rss+xml': 'rss',
    'application/atom+xml': 'atom',
    'application/xhtml+xml': 'xhtml',
    'text/markdown': 'md',
    'text/xml': 'xml',
    'text/mathml': 'mml',
    'application/xml': 'xml',
    'text/yml': 'yml',
    'text/csv': 'csv',
    'text/css': 'css',
    'text/less': 'less',
    'text/stylus': 'styl',
    'text/scss': 'scss',
    'text/sass': 'sass',
    'text/plain': 'txt'
  };

  exports.mimeTypes = mimeTypes;
  function applyXhrTransformers(xhrTransformers, client, processor, message, xhr) {
    var i, ii;
    for (i = 0, ii = xhrTransformers.length; i < ii; ++i) {
      xhrTransformers[i](client, processor, message, xhr);
    }
  }

  var RequestMessageProcessor = (function () {
    function RequestMessageProcessor(xhrType, xhrTransformers) {
      _classCallCheck(this, RequestMessageProcessor);

      this.XHRType = xhrType;
      this.xhrTransformers = xhrTransformers;
      this.isAborted = false;
    }

    RequestMessageProcessor.prototype.abort = function abort() {
      if (this.xhr && this.xhr.readyState !== XMLHttpRequest.UNSENT) {
        this.xhr.abort();
      }
      this.isAborted = true;
    };

    RequestMessageProcessor.prototype.process = function process(client, message) {
      var _this = this;

      var promise = new Promise(function (resolve, reject) {
        var xhr = _this.xhr = new _this.XHRType();

        xhr.onload = function (e) {
          var response = new HttpResponseMessage(message, xhr, message.responseType, message.reviver);
          if (response.isSuccess) {
            resolve(response);
          } else {
            reject(response);
          }
        };

        xhr.ontimeout = function (e) {
          reject(new HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'timeout'));
        };

        xhr.onerror = function (e) {
          reject(new HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'error'));
        };

        xhr.onabort = function (e) {
          reject(new HttpResponseMessage(message, {
            response: e,
            status: xhr.status,
            statusText: xhr.statusText
          }, 'abort'));
        };
      });

      return Promise.resolve(message).then(function (message) {
        var processRequest = function processRequest() {
          if (_this.isAborted) {
            _this.xhr.abort();
          } else {
            _this.xhr.open(message.method, message.buildFullUrl(), true);
            applyXhrTransformers(_this.xhrTransformers, client, _this, message, _this.xhr);
            _this.xhr.send(message.content);
          }

          return promise;
        };

        var chain = [[processRequest, undefined]];

        var interceptors = message.interceptors || [];
        interceptors.forEach(function (interceptor) {
          if (interceptor.request || interceptor.requestError) {
            chain.unshift([interceptor.request ? interceptor.request.bind(interceptor) : undefined, interceptor.requestError ? interceptor.requestError.bind(interceptor) : undefined]);
          }

          if (interceptor.response || interceptor.responseError) {
            chain.push([interceptor.response ? interceptor.response.bind(interceptor) : undefined, interceptor.responseError ? interceptor.responseError.bind(interceptor) : undefined]);
          }
        });

        var interceptorsPromise = Promise.resolve(message);

        while (chain.length) {
          interceptorsPromise = interceptorsPromise.then.apply(interceptorsPromise, chain.shift());
        }

        return interceptorsPromise;
      });
    };

    return RequestMessageProcessor;
  })();

  exports.RequestMessageProcessor = RequestMessageProcessor;

  function timeoutTransformer(client, processor, message, xhr) {
    if (message.timeout !== undefined) {
      xhr.timeout = message.timeout;
    }
  }

  function callbackParameterNameTransformer(client, processor, message, xhr) {
    if (message.callbackParameterName !== undefined) {
      xhr.callbackParameterName = message.callbackParameterName;
    }
  }

  function credentialsTransformer(client, processor, message, xhr) {
    if (message.withCredentials !== undefined) {
      xhr.withCredentials = message.withCredentials;
    }
  }

  function progressTransformer(client, processor, message, xhr) {
    if (message.progressCallback) {
      xhr.upload.onprogress = message.progressCallback;
    }
  }

  function responseTypeTransformer(client, processor, message, xhr) {
    var responseType = message.responseType;

    if (responseType === 'json') {
      responseType = 'text';
    }

    xhr.responseType = responseType;
  }

  function headerTransformer(client, processor, message, xhr) {
    message.headers.configureXHR(xhr);
  }

  function contentTransformer(client, processor, message, xhr) {
    if (window.FormData && message.content instanceof FormData) {
      return;
    }

    if (window.Blob && message.content instanceof Blob) {
      return;
    }

    if (window.ArrayBufferView && message.content instanceof ArrayBufferView) {
      return;
    }

    if (message.content instanceof Document) {
      return;
    }

    if (typeof message.content === 'string') {
      return;
    }

    if (message.content === null || message.content === undefined) {
      return;
    }

    message.content = JSON.stringify(message.content, message.replacer);

    if (message.headers.get('Content-Type') === undefined) {
      message.headers.add('Content-Type', 'application/json');
    }
  }

  var JSONPRequestMessage = (function (_RequestMessage) {
    function JSONPRequestMessage(url, callbackParameterName) {
      _classCallCheck(this, JSONPRequestMessage);

      _RequestMessage.call(this, 'JSONP', url);
      this.responseType = 'jsonp';
      this.callbackParameterName = callbackParameterName;
    }

    _inherits(JSONPRequestMessage, _RequestMessage);

    return JSONPRequestMessage;
  })(RequestMessage);

  exports.JSONPRequestMessage = JSONPRequestMessage;

  var JSONPXHR = (function () {
    function JSONPXHR() {
      _classCallCheck(this, JSONPXHR);
    }

    JSONPXHR.prototype.open = function open(method, url) {
      this.method = method;
      this.url = url;
      this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    };

    JSONPXHR.prototype.send = function send() {
      var _this2 = this;

      var url = this.url + (this.url.indexOf('?') >= 0 ? '&' : '?') + encodeURIComponent(this.callbackParameterName) + '=' + this.callbackName;
      var script = document.createElement('script');

      script.src = url;
      script.onerror = function (e) {
        cleanUp();

        _this2.status = 0;
        _this2.onerror(new Error('error'));
      };

      var cleanUp = function cleanUp() {
        delete window[_this2.callbackName];
        document.body.removeChild(script);
      };

      window[this.callbackName] = function (data) {
        cleanUp();

        if (_this2.status === undefined) {
          _this2.status = 200;
          _this2.statusText = 'OK';
          _this2.response = data;
          _this2.onload(_this2);
        }
      };

      document.body.appendChild(script);

      if (this.timeout !== undefined) {
        setTimeout(function () {
          if (_this2.status === undefined) {
            _this2.status = 0;
            _this2.ontimeout(new Error('timeout'));
          }
        }, this.timeout);
      }
    };

    JSONPXHR.prototype.abort = function abort() {
      if (this.status === undefined) {
        this.status = 0;
        this.onabort(new Error('abort'));
      }
    };

    JSONPXHR.prototype.setRequestHeader = function setRequestHeader() {};

    return JSONPXHR;
  })();

  function createJSONPRequestMessageProcessor() {
    return new RequestMessageProcessor(JSONPXHR, [timeoutTransformer, callbackParameterNameTransformer]);
  }

  var HttpRequestMessage = (function (_RequestMessage2) {
    function HttpRequestMessage(method, url, content, headers) {
      _classCallCheck(this, HttpRequestMessage);

      _RequestMessage2.call(this, method, url, content, headers);
      this.responseType = 'json';
    }

    _inherits(HttpRequestMessage, _RequestMessage2);

    return HttpRequestMessage;
  })(RequestMessage);

  exports.HttpRequestMessage = HttpRequestMessage;

  function createHttpRequestMessageProcessor() {
    return new RequestMessageProcessor(XMLHttpRequest, [timeoutTransformer, credentialsTransformer, progressTransformer, responseTypeTransformer, contentTransformer, headerTransformer]);
  }

  var RequestBuilder = (function () {
    function RequestBuilder(client) {
      _classCallCheck(this, RequestBuilder);

      this.client = client;
      this.transformers = client.requestTransformers.slice(0);
      this.useJsonp = false;
    }

    RequestBuilder.addHelper = function addHelper(name, fn) {
      RequestBuilder.prototype[name] = function () {
        this.transformers.push(fn.apply(this, arguments));
        return this;
      };
    };

    RequestBuilder.prototype.send = function send() {
      var message = this.useJsonp ? new JSONPRequestMessage() : new HttpRequestMessage();
      return this.client.send(message, this.transformers);
    };

    return RequestBuilder;
  })();

  exports.RequestBuilder = RequestBuilder;

  RequestBuilder.addHelper('asDelete', function () {
    return function (client, processor, message) {
      message.method = 'DELETE';
    };
  });

  RequestBuilder.addHelper('asGet', function () {
    return function (client, processor, message) {
      message.method = 'GET';
    };
  });

  RequestBuilder.addHelper('asHead', function () {
    return function (client, processor, message) {
      message.method = 'HEAD';
    };
  });

  RequestBuilder.addHelper('asOptions', function () {
    return function (client, processor, message) {
      message.method = 'OPTIONS';
    };
  });

  RequestBuilder.addHelper('asPatch', function () {
    return function (client, processor, message) {
      message.method = 'PATCH';
    };
  });

  RequestBuilder.addHelper('asPost', function () {
    return function (client, processor, message) {
      message.method = 'POST';
    };
  });

  RequestBuilder.addHelper('asPut', function () {
    return function (client, processor, message) {
      message.method = 'PUT';
    };
  });

  RequestBuilder.addHelper('asJsonp', function (callbackParameterName) {
    this.useJsonp = true;
    return function (client, processor, message) {
      message.callbackParameterName = callbackParameterName;
    };
  });

  RequestBuilder.addHelper('withUrl', function (url) {
    return function (client, processor, message) {
      message.url = url;
    };
  });

  RequestBuilder.addHelper('withContent', function (content) {
    return function (client, processor, message) {
      message.content = content;
    };
  });

  RequestBuilder.addHelper('withBaseUrl', function (baseUrl) {
    return function (client, processor, message) {
      message.baseUrl = baseUrl;
    };
  });

  RequestBuilder.addHelper('withParams', function (params) {
    return function (client, processor, message) {
      message.params = params;
    };
  });

  RequestBuilder.addHelper('withResponseType', function (responseType) {
    return function (client, processor, message) {
      message.responseType = responseType;
    };
  });

  RequestBuilder.addHelper('withTimeout', function (timeout) {
    return function (client, processor, message) {
      message.timeout = timeout;
    };
  });

  RequestBuilder.addHelper('withHeader', function (key, value) {
    return function (client, processor, message) {
      message.headers.add(key, value);
    };
  });

  RequestBuilder.addHelper('withCredentials', function (value) {
    return function (client, processor, message) {
      message.withCredentials = value;
    };
  });

  RequestBuilder.addHelper('withReviver', function (reviver) {
    return function (client, processor, message) {
      message.reviver = reviver;
    };
  });

  RequestBuilder.addHelper('withReplacer', function (replacer) {
    return function (client, processor, message) {
      message.replacer = replacer;
    };
  });

  RequestBuilder.addHelper('withProgressCallback', function (progressCallback) {
    return function (client, processor, message) {
      message.progressCallback = progressCallback;
    };
  });

  RequestBuilder.addHelper('withCallbackParameterName', function (callbackParameterName) {
    return function (client, processor, message) {
      message.callbackParameterName = callbackParameterName;
    };
  });

  RequestBuilder.addHelper('withInterceptor', function (interceptor) {
    return function (client, processor, message) {
      message.interceptors = message.interceptors || [];
      message.interceptors.unshift(interceptor);
    };
  });

  function trackRequestStart(client, processor) {
    client.pendingRequests.push(processor);
    client.isRequesting = true;
  }

  function trackRequestEnd(client, processor) {
    var index = client.pendingRequests.indexOf(processor);

    client.pendingRequests.splice(index, 1);
    client.isRequesting = client.pendingRequests.length > 0;

    if (!client.isRequesting) {
      var evt = new window.CustomEvent('aurelia-http-client-requests-drained', { bubbles: true, cancelable: true });
      setTimeout(function () {
        return document.dispatchEvent(evt);
      }, 1);
    }
  }

  var HttpClient = (function () {
    function HttpClient() {
      _classCallCheck(this, HttpClient);

      this.requestTransformers = [];
      this.requestProcessorFactories = new Map();
      this.requestProcessorFactories.set(HttpRequestMessage, createHttpRequestMessageProcessor);
      this.requestProcessorFactories.set(JSONPRequestMessage, createJSONPRequestMessageProcessor);
      this.pendingRequests = [];
      this.isRequesting = false;
    }

    HttpClient.prototype.configure = function configure(fn) {
      var builder = new RequestBuilder(this);
      fn(builder);
      this.requestTransformers = builder.transformers;
      return this;
    };

    HttpClient.prototype.createRequest = function createRequest(url) {
      var builder = new RequestBuilder(this);

      if (url) {
        builder.withUrl(url);
      }

      return builder;
    };

    HttpClient.prototype.send = function send(message, transformers) {
      var _this3 = this;

      var createProcessor = this.requestProcessorFactories.get(message.constructor),
          processor,
          promise,
          i,
          ii,
          processRequest;

      if (!createProcessor) {
        throw new Error('No request message processor factory for ' + message.constructor + '.');
      }

      processor = createProcessor();
      trackRequestStart(this, processor);

      transformers = transformers || this.requestTransformers;

      promise = Promise.resolve(message).then(function (message) {
        for (i = 0, ii = transformers.length; i < ii; ++i) {
          transformers[i](_this3, processor, message);
        }

        return processor.process(_this3, message).then(function (response) {
          trackRequestEnd(_this3, processor);
          return response;
        })['catch'](function (response) {
          trackRequestEnd(_this3, processor);
          throw response;
        });
      });

      promise.abort = promise.cancel = function () {
        processor.abort();
      };

      return promise;
    };

    HttpClient.prototype['delete'] = function _delete(url) {
      return this.createRequest(url).asDelete().send();
    };

    HttpClient.prototype.get = function get(url) {
      return this.createRequest(url).asGet().send();
    };

    HttpClient.prototype.head = function head(url) {
      return this.createRequest(url).asHead().send();
    };

    HttpClient.prototype.jsonp = function jsonp(url) {
      var callbackParameterName = arguments[1] === undefined ? 'jsoncallback' : arguments[1];

      return this.createRequest(url).asJsonp(callbackParameterName).send();
    };

    HttpClient.prototype.options = function options(url) {
      return this.createRequest(url).asOptions().send();
    };

    HttpClient.prototype.put = function put(url, content) {
      return this.createRequest(url).asPut().withContent(content).send();
    };

    HttpClient.prototype.patch = function patch(url, content) {
      return this.createRequest(url).asPatch().withContent(content).send();
    };

    HttpClient.prototype.post = function post(url, content) {
      return this.createRequest(url).asPost().withContent(content).send();
    };

    return HttpClient;
  })();

  exports.HttpClient = HttpClient;
});
define('aurelia-http-client', ['aurelia-http-client/aurelia-http-client'], function (main) { return main; });

define('aurelia-bootstrapper',['exports', 'core-js', 'aurelia-framework', 'aurelia-logging-console'], function (exports, _coreJs, _aureliaFramework, _aureliaLoggingConsole) {
  

  exports.__esModule = true;
  exports.bootstrap = bootstrap;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _core = _interopRequireDefault(_coreJs);

  var logger = _aureliaFramework.LogManager.getLogger('bootstrapper');
  var readyQueue = [];
  var isReady = false;

  function onReady(callback) {
    return new Promise(function (resolve, reject) {
      if (!isReady) {
        readyQueue.push(function () {
          try {
            resolve(callback());
          } catch (e) {
            reject(e);
          }
        });
      } else {
        resolve(callback());
      }
    });
  }

  function bootstrap(configure) {
    return onReady(function () {
      var loader = new window.AureliaLoader(),
          aurelia = new _aureliaFramework.Aurelia(loader);

      return configure(aurelia);
    });
  }

  function ready(global) {
    return new Promise(function (resolve, reject) {
      if (global.document.readyState === 'complete') {
        resolve(global.document);
      } else {
        global.document.addEventListener('DOMContentLoaded', completed, false);
        global.addEventListener('load', completed, false);
      }

      function completed() {
        global.document.removeEventListener('DOMContentLoaded', completed, false);
        global.removeEventListener('load', completed, false);
        resolve(global.document);
      }
    });
  }

  function ensureLoader() {
    if (!window.AureliaLoader) {
      if (window.System && !window.System.isFake) {
        return System.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
          return System.normalize('aurelia-loader-default', bootstrapperName).then(function (loaderName) {
            return System['import'](loaderName);
          });
        });
      } else if (window.require) {
        return new Promise(function (resolve, reject) {
          require(['aurelia-loader-default'], resolve, reject);
        });
      } else {
        throw new Error('No window.AureliaLoader is defined and there is neither a System API (ES6) or a Require API (AMD) available to load your app.');
      }
    }

    return Promise.resolve();
  }

  function preparePlatform() {
    return System.normalize('aurelia-bootstrapper').then(function (bootstrapperName) {
      return System.normalize('aurelia-framework', bootstrapperName).then(function (frameworkName) {
        System.map['aurelia-framework'] = frameworkName;

        return System.normalize('aurelia-loader', frameworkName).then(function (loaderName) {
          var toLoad = [];

          toLoad.push(System.normalize('aurelia-dependency-injection', frameworkName).then(function (name) {
            System.map['aurelia-dependency-injection'] = name;
          }));

          toLoad.push(System.normalize('aurelia-router', bootstrapperName).then(function (name) {
            System.map['aurelia-router'] = name;
          }));

          toLoad.push(System.normalize('aurelia-logging-console', bootstrapperName).then(function (name) {
            System.map['aurelia-logging-console'] = name;
          }));

          if (!('import' in document.createElement('link'))) {
            logger.debug('loading the HTMLImports polyfill');
            toLoad.push(System.normalize('webcomponentsjs/HTMLImports.min', loaderName).then(function (name) {
              return System['import'](name);
            }));
          }

          if (!('content' in document.createElement('template'))) {
            logger.debug('loading the HTMLTemplateElement polyfill');
            toLoad.push(System.normalize('aurelia-html-template-element', loaderName).then(function (name) {
              return System['import'](name);
            }));
          }

          return Promise.all(toLoad);
        });
      });
    });
  }

  function runningLocally() {
    return window.location.protocol !== 'http' && window.location.protocol !== 'https';
  }

  function handleApp(appHost) {
    var configModuleId = appHost.getAttribute('aurelia-app'),
        aurelia,
        loader;

    if (configModuleId) {
      loader = new window.AureliaLoader();

      return loader.loadModule(configModuleId).then(function (m) {
        aurelia = new _aureliaFramework.Aurelia(loader);
        aurelia.host = appHost;
        return m.configure(aurelia);
      });
    } else {
      aurelia = new _aureliaFramework.Aurelia();
      aurelia.host = appHost;

      if (runningLocally()) {
        aurelia.use.developmentLogging();
      }

      aurelia.use.standardConfiguration();

      return aurelia.start().then(function (a) {
        return a.setRoot();
      });
    }
  }

  function run() {
    return ready(window).then(function (doc) {
      var appHost = doc.querySelectorAll('[aurelia-app]');

      return ensureLoader().then(function () {
        return preparePlatform().then(function () {
          var i, ii;

          for (i = 0, ii = appHost.length; i < ii; ++i) {
            handleApp(appHost[i]);
          }

          isReady = true;
          for (i = 0, ii = readyQueue.length; i < ii; ++i) {
            readyQueue[i]();
          }
          readyQueue = [];
        });
      });
    });
  }

  run();
});
(function(global){
  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
  var hasTemplateElement = typeof HTMLTemplateElement !== 'undefined';

  function isSVGTemplate(el) {
    return el.tagName == 'template' &&
           el.namespaceURI == 'http://www.w3.org/2000/svg';
  }

  function isHTMLTemplate(el) {
    return el.tagName == 'TEMPLATE' &&
           el.namespaceURI == 'http://www.w3.org/1999/xhtml';
  }

  function isTemplate(el) {
    if (el.isTemplate_ === undefined)
      el.isTemplate_ = el.tagName == 'TEMPLATE';

    return el.isTemplate_;
  }
  
  function extractTemplateFromSVGTemplate(el) {
    var template = el.ownerDocument.createElement('template');
    el.parentNode.insertBefore(template, el);

    var attribs = el.attributes;
    var count = attribs.length;
    while (count-- > 0) {
      var attrib = attribs[count];
      template.setAttribute(attrib.name, attrib.value);
      el.removeAttribute(attrib.name);
    }

    el.parentNode.removeChild(el);
    return template;
  }


  function forAllTemplatesFrom(node, fn) {
    var subTemplates = node.querySelectorAll('template');

    if (isTemplate(node))
      fn(node);

    forEach(subTemplates, fn);
  }

  function bootstrapTemplatesRecursivelyFrom(node) {
    function bootstrap(template) {
      if (!HTMLTemplateElement.decorate(template))
        bootstrapTemplatesRecursivelyFrom(template.content);
    }

    forAllTemplatesFrom(node, bootstrap);
  }

  if (!hasTemplateElement) {
    /**
     * This represents a <template> element.
     * @constructor
     * @extends {HTMLElement}
     */
    global.HTMLTemplateElement = function() {
      throw TypeError('Illegal constructor');
    };
  }

  function getOrCreateTemplateContentsOwner(template) {
    var doc = template.ownerDocument;
    if (!doc.defaultView)
      return doc;
    var d = doc.templateContentsOwner_;
    if (!d) {
      // TODO(arv): This should either be a Document or HTMLDocument depending
      // on doc.
      d = doc.implementation.createHTMLDocument('');
      while (d.lastChild) {
        d.removeChild(d.lastChild);
      }
      doc.templateContentsOwner_ = d;
    }
    return d;
  }

  function liftNonNativeTemplateChildrenIntoContent(template, el, useRoot) {
    var content = template.content;
    if (useRoot) {
      content.appendChild(el);
      return;
    }

    var child;
    while (child = el.firstChild) {
      content.appendChild(child);
    }
  }

  var hasProto = '__proto__' in {};

  function mixin(to, from) {
    Object.getOwnPropertyNames(from).forEach(function(name) {
      Object.defineProperty(to, name, Object.getOwnPropertyDescriptor(from, name));
    });
  }

  function fixTemplateElementPrototype(el) {
    if (hasProto)
      el.__proto__ = HTMLTemplateElement.prototype;
    else
      mixin(el, HTMLTemplateElement.prototype);
  }

  HTMLTemplateElement.decorate = function(el, opt_instanceRef) {
    if (el.templateIsDecorated_)
      return false;

    var templateElement = el;
    templateElement.templateIsDecorated_ = true;

    var isNativeHTMLTemplate = isHTMLTemplate(templateElement) &&
                               hasTemplateElement;
    var bootstrapContents = isNativeHTMLTemplate;
    var liftContents = !isNativeHTMLTemplate;
    var liftRoot = false;

    if (!isNativeHTMLTemplate) {
      if (isSVGTemplate(templateElement)) {
        templateElement = extractTemplateFromSVGTemplate(el);
        templateElement.templateIsDecorated_ = true;
        isNativeHTMLTemplate = hasTemplateElement;
      }
    }

    if (!isNativeHTMLTemplate) {
      fixTemplateElementPrototype(templateElement);
      var doc = getOrCreateTemplateContentsOwner(templateElement);
      templateElement.content_ = doc.createDocumentFragment();
    }

    if (opt_instanceRef) {
      // template is contained within an instance, its direct content must be
      // empty
      templateElement.instanceRef_ = opt_instanceRef;
    } else if (liftContents) {
      liftNonNativeTemplateChildrenIntoContent(templateElement,
                                               el,
                                               liftRoot);
    } else if (bootstrapContents) {
      bootstrapTemplatesRecursivelyFrom(templateElement.content);
    }

    return true;
  };

  var htmlElement = global.HTMLUnknownElement || HTMLElement;

  var contentDescriptor = {
    get: function() {
      return this.content_;
    },
    enumerable: true,
    configurable: true
  };

  if (!hasTemplateElement) {
    // Gecko is more picky with the prototype than WebKit. Make sure to use the
    // same prototype as created in the constructor.
    HTMLTemplateElement.prototype = Object.create(htmlElement.prototype);

    Object.defineProperty(HTMLTemplateElement.prototype, 'content', contentDescriptor);
  }

  HTMLTemplateElement.bootstrap = bootstrapTemplatesRecursivelyFrom;
}(window));

define("aurelia-html-template-element", function(){});

define("aurelia-bundle-manifest", [
  'aurelia-path',
  'aurelia-loader',
  'aurelia-loader-default',
  'aurelia-task-queue',
  'aurelia-logging',
  'aurelia-logging-console',
  'aurelia-history',
  'aurelia-history-browser',
  'aurelia-event-aggregator',
  'aurelia-framework',
  'aurelia-metadata',
  'aurelia-binding',
  'aurelia-templating',
  'aurelia-dependency-injection',
  'aurelia-router',
  'aurelia-templating-binding',
  'aurelia-templating-resources',
  'aurelia-templating-router',
  'aurelia-route-recognizer',
  'aurelia-http-client',
  'aurelia-bootstrapper',
  'aurelia-html-template-element',
  //'aurelia-validation',
  'core-js'
  ], function(_path,
  _loader,
  _loader_default,
  _task_queue,
  _logging,
  _logging_console,
  _history,
  _history_browser,
  _event_aggregator,
  _framework,
  _metadata,
  _binding,
  _templating,
  _dependency_injection,
  _router,
  _templating_binding,
  _templating_resources,
  _templating_router,
  _route_recognizer,
  _http_client,
  _bootstrapper,
  _html_template_element,
  //_validation,
  _core_js
){
    // alert(_dependency_injection.inject)
  });

