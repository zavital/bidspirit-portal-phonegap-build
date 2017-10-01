/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * @license AngularJS v1.4.7
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/*!
  * Morpheus - A Brilliant Animator
  * https://github.com/ded/morpheus - (c) Dustin Diaz 2011
  * License MIT
  */

/**
 * @license Copyright 2013 Logentries.
 * Please view license at https://raw.github.com/logentries/le_js/master/LICENSE
 */

/*!
 * Pusher JavaScript Library v3.2.1
 * http://pusher.com/
 *
 * Copyright 2016, Pusher
 * Released under the MIT licence.
 */

/*! 3.15.2 / web */

/*
	 CryptoJS v3.1.2
	 code.google.com/p/crypto-js
	 (c) 2009-2013 by Jeff Mott. All rights reserved.
	 code.google.com/p/crypto-js/wiki/License
	 */

/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

/**
     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */

function getServiceForDebug(serviceName) {
    return angular.element(document.body).injector().get(serviceName);
}

function getControllerForDebug(contollerName) {
    return angular.element(document.querySelector("[ng-controller=" + contollerName + "]")).scope();
}

function getCurrentLotForDebug() {
    return angular.element(document.querySelector("[ng-controller=LotPageController]")).scope().data.item;
}

!function(window) {
    function minErr(module, ErrorConstructor) {
        return ErrorConstructor = ErrorConstructor || Error, function() {
            var paramPrefix, i, SKIP_INDEXES = 2, templateArgs = arguments, code = templateArgs[0], message = "[" + (module ? module + ":" : "") + code + "] ", template = templateArgs[1];
            for (message += template.replace(/\{\d+\}/g, function(match) {
                var index = +match.slice(1, -1), shiftedIndex = index + SKIP_INDEXES;
                return shiftedIndex < templateArgs.length ? toDebugString(templateArgs[shiftedIndex]) : match;
            }), message += "\nhttp://errors.angularjs.org/1.5.8/" + (module ? module + "/" : "") + code, 
            i = SKIP_INDEXES, paramPrefix = "?"; i < templateArgs.length; i++, paramPrefix = "&") message += paramPrefix + "p" + (i - SKIP_INDEXES) + "=" + encodeURIComponent(toDebugString(templateArgs[i]));
            return new ErrorConstructor(message);
        };
    }
    function isArrayLike(obj) {
        if (null == obj || isWindow(obj)) return !1;
        if (isArray(obj) || isString(obj) || jqLite && obj instanceof jqLite) return !0;
        var length = "length" in Object(obj) && obj.length;
        return isNumber(length) && (length >= 0 && (length - 1 in obj || obj instanceof Array) || "function" == typeof obj.item);
    }
    function forEach(obj, iterator, context) {
        var key, length;
        if (obj) if (isFunction(obj)) for (key in obj) "prototype" == key || "length" == key || "name" == key || obj.hasOwnProperty && !obj.hasOwnProperty(key) || iterator.call(context, obj[key], key, obj); else if (isArray(obj) || isArrayLike(obj)) {
            var isPrimitive = "object" != typeof obj;
            for (key = 0, length = obj.length; length > key; key++) (isPrimitive || key in obj) && iterator.call(context, obj[key], key, obj);
        } else if (obj.forEach && obj.forEach !== forEach) obj.forEach(iterator, context, obj); else if (isBlankObject(obj)) for (key in obj) iterator.call(context, obj[key], key, obj); else if ("function" == typeof obj.hasOwnProperty) for (key in obj) obj.hasOwnProperty(key) && iterator.call(context, obj[key], key, obj); else for (key in obj) hasOwnProperty.call(obj, key) && iterator.call(context, obj[key], key, obj);
        return obj;
    }
    function forEachSorted(obj, iterator, context) {
        for (var keys = Object.keys(obj).sort(), i = 0; i < keys.length; i++) iterator.call(context, obj[keys[i]], keys[i]);
        return keys;
    }
    function reverseParams(iteratorFn) {
        return function(value, key) {
            iteratorFn(key, value);
        };
    }
    function nextUid() {
        return ++uid;
    }
    function setHashKey(obj, h) {
        h ? obj.$$hashKey = h : delete obj.$$hashKey;
    }
    function baseExtend(dst, objs, deep) {
        for (var h = dst.$$hashKey, i = 0, ii = objs.length; ii > i; ++i) {
            var obj = objs[i];
            if (isObject(obj) || isFunction(obj)) for (var keys = Object.keys(obj), j = 0, jj = keys.length; jj > j; j++) {
                var key = keys[j], src = obj[key];
                deep && isObject(src) ? isDate(src) ? dst[key] = new Date(src.valueOf()) : isRegExp(src) ? dst[key] = new RegExp(src) : src.nodeName ? dst[key] = src.cloneNode(!0) : isElement(src) ? dst[key] = src.clone() : (isObject(dst[key]) || (dst[key] = isArray(src) ? [] : {}), 
                baseExtend(dst[key], [ src ], !0)) : dst[key] = src;
            }
        }
        return setHashKey(dst, h), dst;
    }
    function extend(dst) {
        return baseExtend(dst, slice.call(arguments, 1), !1);
    }
    function merge(dst) {
        return baseExtend(dst, slice.call(arguments, 1), !0);
    }
    function toInt(str) {
        return parseInt(str, 10);
    }
    function inherit(parent, extra) {
        return extend(Object.create(parent), extra);
    }
    function noop() {}
    function identity($) {
        return $;
    }
    function valueFn(value) {
        return function() {
            return value;
        };
    }
    function hasCustomToString(obj) {
        return isFunction(obj.toString) && obj.toString !== toString;
    }
    function isUndefined(value) {
        return "undefined" == typeof value;
    }
    function isDefined(value) {
        return "undefined" != typeof value;
    }
    function isObject(value) {
        return null !== value && "object" == typeof value;
    }
    function isBlankObject(value) {
        return null !== value && "object" == typeof value && !getPrototypeOf(value);
    }
    function isString(value) {
        return "string" == typeof value;
    }
    function isNumber(value) {
        return "number" == typeof value;
    }
    function isDate(value) {
        return "[object Date]" === toString.call(value);
    }
    function isFunction(value) {
        return "function" == typeof value;
    }
    function isRegExp(value) {
        return "[object RegExp]" === toString.call(value);
    }
    function isWindow(obj) {
        return obj && obj.window === obj;
    }
    function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }
    function isFile(obj) {
        return "[object File]" === toString.call(obj);
    }
    function isFormData(obj) {
        return "[object FormData]" === toString.call(obj);
    }
    function isBlob(obj) {
        return "[object Blob]" === toString.call(obj);
    }
    function isBoolean(value) {
        return "boolean" == typeof value;
    }
    function isPromiseLike(obj) {
        return obj && isFunction(obj.then);
    }
    function isTypedArray(value) {
        return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
    }
    function isArrayBuffer(obj) {
        return "[object ArrayBuffer]" === toString.call(obj);
    }
    function isElement(node) {
        return !(!node || !(node.nodeName || node.prop && node.attr && node.find));
    }
    function makeMap(str) {
        var i, obj = {}, items = str.split(",");
        for (i = 0; i < items.length; i++) obj[items[i]] = !0;
        return obj;
    }
    function nodeName_(element) {
        return lowercase(element.nodeName || element[0] && element[0].nodeName);
    }
    function arrayRemove(array, value) {
        var index = array.indexOf(value);
        return index >= 0 && array.splice(index, 1), index;
    }
    function copy(source, destination) {
        function copyRecurse(source, destination) {
            var key, h = destination.$$hashKey;
            if (isArray(source)) for (var i = 0, ii = source.length; ii > i; i++) destination.push(copyElement(source[i])); else if (isBlankObject(source)) for (key in source) destination[key] = copyElement(source[key]); else if (source && "function" == typeof source.hasOwnProperty) for (key in source) source.hasOwnProperty(key) && (destination[key] = copyElement(source[key])); else for (key in source) hasOwnProperty.call(source, key) && (destination[key] = copyElement(source[key]));
            return setHashKey(destination, h), destination;
        }
        function copyElement(source) {
            if (!isObject(source)) return source;
            var index = stackSource.indexOf(source);
            if (-1 !== index) return stackDest[index];
            if (isWindow(source) || isScope(source)) throw ngMinErr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            var needsRecurse = !1, destination = copyType(source);
            return void 0 === destination && (destination = isArray(source) ? [] : Object.create(getPrototypeOf(source)), 
            needsRecurse = !0), stackSource.push(source), stackDest.push(destination), needsRecurse ? copyRecurse(source, destination) : destination;
        }
        function copyType(source) {
            switch (toString.call(source)) {
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return new source.constructor(copyElement(source.buffer), source.byteOffset, source.length);

              case "[object ArrayBuffer]":
                if (!source.slice) {
                    var copied = new ArrayBuffer(source.byteLength);
                    return new Uint8Array(copied).set(new Uint8Array(source)), copied;
                }
                return source.slice(0);

              case "[object Boolean]":
              case "[object Number]":
              case "[object String]":
              case "[object Date]":
                return new source.constructor(source.valueOf());

              case "[object RegExp]":
                var re = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]);
                return re.lastIndex = source.lastIndex, re;

              case "[object Blob]":
                return new source.constructor([ source ], {
                    type: source.type
                });
            }
            return isFunction(source.cloneNode) ? source.cloneNode(!0) : void 0;
        }
        var stackSource = [], stackDest = [];
        if (destination) {
            if (isTypedArray(destination) || isArrayBuffer(destination)) throw ngMinErr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (source === destination) throw ngMinErr("cpi", "Can't copy! Source and destination are identical.");
            return isArray(destination) ? destination.length = 0 : forEach(destination, function(value, key) {
                "$$hashKey" !== key && delete destination[key];
            }), stackSource.push(source), stackDest.push(destination), copyRecurse(source, destination);
        }
        return copyElement(source);
    }
    function equals(o1, o2) {
        if (o1 === o2) return !0;
        if (null === o1 || null === o2) return !1;
        if (o1 !== o1 && o2 !== o2) return !0;
        var length, key, keySet, t1 = typeof o1, t2 = typeof o2;
        if (t1 == t2 && "object" == t1) {
            if (!isArray(o1)) {
                if (isDate(o1)) return isDate(o2) ? equals(o1.getTime(), o2.getTime()) : !1;
                if (isRegExp(o1)) return isRegExp(o2) ? o1.toString() == o2.toString() : !1;
                if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2) || isDate(o2) || isRegExp(o2)) return !1;
                keySet = createMap();
                for (key in o1) if ("$" !== key.charAt(0) && !isFunction(o1[key])) {
                    if (!equals(o1[key], o2[key])) return !1;
                    keySet[key] = !0;
                }
                for (key in o2) if (!(key in keySet) && "$" !== key.charAt(0) && isDefined(o2[key]) && !isFunction(o2[key])) return !1;
                return !0;
            }
            if (!isArray(o2)) return !1;
            if ((length = o1.length) == o2.length) {
                for (key = 0; length > key; key++) if (!equals(o1[key], o2[key])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
    }
    function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
    }
    function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        return !isFunction(fn) || fn instanceof RegExp ? fn : curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, concat(curryArgs, arguments, 0)) : fn.apply(self, curryArgs);
        } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
        };
    }
    function toJsonReplacer(key, value) {
        var val = value;
        return "string" == typeof key && "$" === key.charAt(0) && "$" === key.charAt(1) ? val = void 0 : isWindow(value) ? val = "$WINDOW" : value && window.document === value ? val = "$DOCUMENT" : isScope(value) && (val = "$SCOPE"), 
        val;
    }
    function toJson(obj, pretty) {
        return isUndefined(obj) ? void 0 : (isNumber(pretty) || (pretty = pretty ? 2 : null), 
        JSON.stringify(obj, toJsonReplacer, pretty));
    }
    function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
    }
    function timezoneToOffset(timezone, fallback) {
        timezone = timezone.replace(ALL_COLONS, "");
        var requestedTimezoneOffset = Date.parse("Jan 01, 1970 00:00:00 " + timezone) / 6e4;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
    }
    function addDateMinutes(date, minutes) {
        return date = new Date(date.getTime()), date.setMinutes(date.getMinutes() + minutes), 
        date;
    }
    function convertTimezoneToLocal(date, timezone, reverse) {
        reverse = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset(), timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        return addDateMinutes(date, reverse * (timezoneOffset - dateTimezoneOffset));
    }
    function startingTag(element) {
        element = jqLite(element).clone();
        try {
            element.empty();
        } catch (e) {}
        var elemHtml = jqLite("<div>").append(element).html();
        try {
            return element[0].nodeType === NODE_TYPE_TEXT ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
                return "<" + lowercase(nodeName);
            });
        } catch (e) {
            return lowercase(elemHtml);
        }
    }
    function tryDecodeURIComponent(value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {}
    }
    function parseKeyValue(keyValue) {
        var obj = {};
        return forEach((keyValue || "").split("&"), function(keyValue) {
            var splitPoint, key, val;
            keyValue && (key = keyValue = keyValue.replace(/\+/g, "%20"), splitPoint = keyValue.indexOf("="), 
            -1 !== splitPoint && (key = keyValue.substring(0, splitPoint), val = keyValue.substring(splitPoint + 1)), 
            key = tryDecodeURIComponent(key), isDefined(key) && (val = isDefined(val) ? tryDecodeURIComponent(val) : !0, 
            hasOwnProperty.call(obj, key) ? isArray(obj[key]) ? obj[key].push(val) : obj[key] = [ obj[key], val ] : obj[key] = val));
        }), obj;
    }
    function toKeyValue(obj) {
        var parts = [];
        return forEach(obj, function(value, key) {
            isArray(value) ? forEach(value, function(arrayValue) {
                parts.push(encodeUriQuery(key, !0) + (arrayValue === !0 ? "" : "=" + encodeUriQuery(arrayValue, !0)));
            }) : parts.push(encodeUriQuery(key, !0) + (value === !0 ? "" : "=" + encodeUriQuery(value, !0)));
        }), parts.length ? parts.join("&") : "";
    }
    function encodeUriSegment(val) {
        return val;
    }
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
    }
    function getNgAttribute(element, ngAttr) {
        var attr, i, ii = ngAttrPrefixes.length;
        for (i = 0; ii > i; ++i) if (attr = ngAttrPrefixes[i] + ngAttr, isString(attr = element.getAttribute(attr))) return attr;
        return null;
    }
    function angularInit(element, bootstrap) {
        var appElement, module, config = {};
        forEach(ngAttrPrefixes, function(prefix) {
            var name = prefix + "app";
            !appElement && element.hasAttribute && element.hasAttribute(name) && (appElement = element, 
            module = element.getAttribute(name));
        }), forEach(ngAttrPrefixes, function(prefix) {
            var candidate, name = prefix + "app";
            !appElement && (candidate = element.querySelector("[" + name.replace(":", "\\:") + "]")) && (appElement = candidate, 
            module = candidate.getAttribute(name));
        }), appElement && (config.strictDi = null !== getNgAttribute(appElement, "strict-di"), 
        bootstrap(appElement, module ? [ module ] : [], config));
    }
    function bootstrap(element, modules, config) {
        isObject(config) || (config = {});
        var defaultConfig = {
            strictDi: !1
        };
        config = extend(defaultConfig, config);
        var doBootstrap = function() {
            if (element = jqLite(element), element.injector()) {
                var tag = element[0] === window.document ? "document" : startingTag(element);
                throw ngMinErr("btstrpd", "App already bootstrapped with this element '{0}'", tag.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            modules = modules || [], modules.unshift([ "$provide", function($provide) {
                $provide.value("$rootElement", element);
            } ]), config.debugInfoEnabled && modules.push([ "$compileProvider", function($compileProvider) {
                $compileProvider.debugInfoEnabled(!0);
            } ]), modules.unshift("ng");
            var injector = createInjector(modules, config.strictDi);
            return injector.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(scope, element, compile, injector) {
                scope.$apply(function() {
                    element.data("$injector", injector), compile(element)(scope);
                });
            } ]), injector;
        }, NG_ENABLE_DEBUG_INFO = /^NG_ENABLE_DEBUG_INFO!/, NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        return window && NG_ENABLE_DEBUG_INFO.test(window.name) && (config.debugInfoEnabled = !0, 
        window.name = window.name.replace(NG_ENABLE_DEBUG_INFO, "")), window && !NG_DEFER_BOOTSTRAP.test(window.name) ? doBootstrap() : (window.name = window.name.replace(NG_DEFER_BOOTSTRAP, ""), 
        angular.resumeBootstrap = function(extraModules) {
            return forEach(extraModules, function(module) {
                modules.push(module);
            }), doBootstrap();
        }, void (isFunction(angular.resumeDeferredBootstrap) && angular.resumeDeferredBootstrap()));
    }
    function reloadWithDebugInfo() {
        window.name = "NG_ENABLE_DEBUG_INFO!" + window.name, window.location.reload();
    }
    function getTestability(rootElement) {
        var injector = angular.element(rootElement).injector();
        if (!injector) throw ngMinErr("test", "no injector found for element argument to getTestability");
        return injector.get("$$testability");
    }
    function snake_case(name, separator) {
        return separator = separator || "_", name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    function bindJQuery() {
        var originalCleanData;
        if (!bindJQueryFired) {
            var jqName = jq();
            jQuery = isUndefined(jqName) ? window.jQuery : jqName ? window[jqName] : void 0, 
            jQuery && jQuery.fn.on ? (jqLite = jQuery, extend(jQuery.fn, {
                scope: JQLitePrototype.scope,
                isolateScope: JQLitePrototype.isolateScope,
                controller: JQLitePrototype.controller,
                injector: JQLitePrototype.injector,
                inheritedData: JQLitePrototype.inheritedData
            }), originalCleanData = jQuery.cleanData, jQuery.cleanData = function(elems) {
                for (var events, elem, i = 0; null != (elem = elems[i]); i++) events = jQuery._data(elem, "events"), 
                events && events.$destroy && jQuery(elem).triggerHandler("$destroy");
                originalCleanData(elems);
            }) : jqLite = JQLite, angular.element = jqLite, bindJQueryFired = !0;
        }
    }
    function assertArg(arg, name, reason) {
        if (!arg) throw ngMinErr("areq", "Argument '{0}' is {1}", name || "?", reason || "required");
        return arg;
    }
    function assertArgFn(arg, name, acceptArrayAnnotation) {
        return acceptArrayAnnotation && isArray(arg) && (arg = arg[arg.length - 1]), assertArg(isFunction(arg), name, "not a function, got " + (arg && "object" == typeof arg ? arg.constructor.name || "Object" : typeof arg)), 
        arg;
    }
    function assertNotHasOwnProperty(name, context) {
        if ("hasOwnProperty" === name) throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context);
    }
    function getter(obj, path, bindFnToScope) {
        if (!path) return obj;
        for (var key, keys = path.split("."), lastInstance = obj, len = keys.length, i = 0; len > i; i++) key = keys[i], 
        obj && (obj = (lastInstance = obj)[key]);
        return !bindFnToScope && isFunction(obj) ? bind(lastInstance, obj) : obj;
    }
    function getBlockNodes(nodes) {
        for (var blockNodes, node = nodes[0], endNode = nodes[nodes.length - 1], i = 1; node !== endNode && (node = node.nextSibling); i++) (blockNodes || nodes[i] !== node) && (blockNodes || (blockNodes = jqLite(slice.call(nodes, 0, i))), 
        blockNodes.push(node));
        return blockNodes || nodes;
    }
    function createMap() {
        return Object.create(null);
    }
    function setupModuleLoader(window) {
        function ensure(obj, name, factory) {
            return obj[name] || (obj[name] = factory());
        }
        var $injectorMinErr = minErr("$injector"), ngMinErr = minErr("ng"), angular = ensure(window, "angular", Object);
        return angular.$$minErr = angular.$$minErr || minErr, ensure(angular, "module", function() {
            var modules = {};
            return function(name, requires, configFn) {
                var assertNotHasOwnProperty = function(name, context) {
                    if ("hasOwnProperty" === name) throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context);
                };
                return assertNotHasOwnProperty(name, "module"), requires && modules.hasOwnProperty(name) && (modules[name] = null), 
                ensure(modules, name, function() {
                    function invokeLater(provider, method, insertMethod, queue) {
                        return queue || (queue = invokeQueue), function() {
                            return queue[insertMethod || "push"]([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    function invokeLaterAndSetModuleName(provider, method) {
                        return function(recipeName, factoryFunction) {
                            return factoryFunction && isFunction(factoryFunction) && (factoryFunction.$$moduleName = name), 
                            invokeQueue.push([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    if (!requires) throw $injectorMinErr("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", name);
                    var invokeQueue = [], configBlocks = [], runBlocks = [], config = invokeLater("$injector", "invoke", "push", configBlocks), moduleInstance = {
                        _invokeQueue: invokeQueue,
                        _configBlocks: configBlocks,
                        _runBlocks: runBlocks,
                        requires: requires,
                        name: name,
                        provider: invokeLaterAndSetModuleName("$provide", "provider"),
                        factory: invokeLaterAndSetModuleName("$provide", "factory"),
                        service: invokeLaterAndSetModuleName("$provide", "service"),
                        value: invokeLater("$provide", "value"),
                        constant: invokeLater("$provide", "constant", "unshift"),
                        decorator: invokeLaterAndSetModuleName("$provide", "decorator"),
                        animation: invokeLaterAndSetModuleName("$animateProvider", "register"),
                        filter: invokeLaterAndSetModuleName("$filterProvider", "register"),
                        controller: invokeLaterAndSetModuleName("$controllerProvider", "register"),
                        directive: invokeLaterAndSetModuleName("$compileProvider", "directive"),
                        component: invokeLaterAndSetModuleName("$compileProvider", "component"),
                        config: config,
                        run: function(block) {
                            return runBlocks.push(block), this;
                        }
                    };
                    return configFn && config(configFn), moduleInstance;
                });
            };
        });
    }
    function shallowCopy(src, dst) {
        if (isArray(src)) {
            dst = dst || [];
            for (var i = 0, ii = src.length; ii > i; i++) dst[i] = src[i];
        } else if (isObject(src)) {
            dst = dst || {};
            for (var key in src) ("$" !== key.charAt(0) || "$" !== key.charAt(1)) && (dst[key] = src[key]);
        }
        return dst || src;
    }
    function serializeObject(obj) {
        var seen = [];
        return JSON.stringify(obj, function(key, val) {
            if (val = toJsonReplacer(key, val), isObject(val)) {
                if (seen.indexOf(val) >= 0) return "...";
                seen.push(val);
            }
            return val;
        });
    }
    function toDebugString(obj) {
        return "function" == typeof obj ? obj.toString().replace(/ \{[\s\S]*$/, "") : isUndefined(obj) ? "undefined" : "string" != typeof obj ? serializeObject(obj) : obj;
    }
    function publishExternalAPI(angular) {
        extend(angular, {
            bootstrap: bootstrap,
            copy: copy,
            extend: extend,
            merge: merge,
            equals: equals,
            element: jqLite,
            forEach: forEach,
            injector: createInjector,
            noop: noop,
            bind: bind,
            toJson: toJson,
            fromJson: fromJson,
            identity: identity,
            isUndefined: isUndefined,
            isDefined: isDefined,
            isString: isString,
            isFunction: isFunction,
            isObject: isObject,
            isNumber: isNumber,
            isElement: isElement,
            isArray: isArray,
            version: version,
            isDate: isDate,
            lowercase: lowercase,
            uppercase: uppercase,
            callbacks: {
                $$counter: 0
            },
            getTestability: getTestability,
            $$minErr: minErr,
            $$csp: csp,
            reloadWithDebugInfo: reloadWithDebugInfo
        }), (angularModule = setupModuleLoader(window))("ng", [ "ngLocale" ], [ "$provide", function($provide) {
            $provide.provider({
                $$sanitizeUri: $$SanitizeUriProvider
            }), $provide.provider("$compile", $CompileProvider).directive({
                a: htmlAnchorDirective,
                input: inputDirective,
                textarea: inputDirective,
                form: formDirective,
                script: scriptDirective,
                select: selectDirective,
                style: styleDirective,
                option: optionDirective,
                ngBind: ngBindDirective,
                ngBindHtml: ngBindHtmlDirective,
                ngBindTemplate: ngBindTemplateDirective,
                ngClass: ngClassDirective,
                ngClassEven: ngClassEvenDirective,
                ngClassOdd: ngClassOddDirective,
                ngCloak: ngCloakDirective,
                ngController: ngControllerDirective,
                ngForm: ngFormDirective,
                ngHide: ngHideDirective,
                ngIf: ngIfDirective,
                ngInclude: ngIncludeDirective,
                ngInit: ngInitDirective,
                ngNonBindable: ngNonBindableDirective,
                ngPluralize: ngPluralizeDirective,
                ngRepeat: ngRepeatDirective,
                ngShow: ngShowDirective,
                ngStyle: ngStyleDirective,
                ngSwitch: ngSwitchDirective,
                ngSwitchWhen: ngSwitchWhenDirective,
                ngSwitchDefault: ngSwitchDefaultDirective,
                ngOptions: ngOptionsDirective,
                ngTransclude: ngTranscludeDirective,
                ngModel: ngModelDirective,
                ngList: ngListDirective,
                ngChange: ngChangeDirective,
                pattern: patternDirective,
                ngPattern: patternDirective,
                required: requiredDirective,
                ngRequired: requiredDirective,
                minlength: minlengthDirective,
                ngMinlength: minlengthDirective,
                maxlength: maxlengthDirective,
                ngMaxlength: maxlengthDirective,
                ngValue: ngValueDirective,
                ngModelOptions: ngModelOptionsDirective
            }).directive({
                ngInclude: ngIncludeFillContentDirective
            }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives), $provide.provider({
                $anchorScroll: $AnchorScrollProvider,
                $animate: $AnimateProvider,
                $animateCss: $CoreAnimateCssProvider,
                $$animateJs: $$CoreAnimateJsProvider,
                $$animateQueue: $$CoreAnimateQueueProvider,
                $$AnimateRunner: $$AnimateRunnerFactoryProvider,
                $$animateAsyncRun: $$AnimateAsyncRunFactoryProvider,
                $browser: $BrowserProvider,
                $cacheFactory: $CacheFactoryProvider,
                $controller: $ControllerProvider,
                $document: $DocumentProvider,
                $exceptionHandler: $ExceptionHandlerProvider,
                $filter: $FilterProvider,
                $$forceReflow: $$ForceReflowProvider,
                $interpolate: $InterpolateProvider,
                $interval: $IntervalProvider,
                $http: $HttpProvider,
                $httpParamSerializer: $HttpParamSerializerProvider,
                $httpParamSerializerJQLike: $HttpParamSerializerJQLikeProvider,
                $httpBackend: $HttpBackendProvider,
                $xhrFactory: $xhrFactoryProvider,
                $jsonpCallbacks: $jsonpCallbacksProvider,
                $location: $LocationProvider,
                $log: $LogProvider,
                $parse: $ParseProvider,
                $rootScope: $RootScopeProvider,
                $q: $QProvider,
                $$q: $$QProvider,
                $sce: $SceProvider,
                $sceDelegate: $SceDelegateProvider,
                $sniffer: $SnifferProvider,
                $templateCache: $TemplateCacheProvider,
                $templateRequest: $TemplateRequestProvider,
                $$testability: $$TestabilityProvider,
                $timeout: $TimeoutProvider,
                $window: $WindowProvider,
                $$rAF: $$RAFProvider,
                $$jqLite: $$jqLiteProvider,
                $$HashMap: $$HashMapProvider,
                $$cookieReader: $$CookieReaderProvider
            });
        } ]);
    }
    function jqNextId() {
        return ++jqId;
    }
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, "Moz$1");
    }
    function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
    }
    function jqLiteAcceptsData(node) {
        var nodeType = node.nodeType;
        return nodeType === NODE_TYPE_ELEMENT || !nodeType || nodeType === NODE_TYPE_DOCUMENT;
    }
    function jqLiteHasData(node) {
        for (var key in jqCache[node.ng339]) return !0;
        return !1;
    }
    function jqLiteCleanData(nodes) {
        for (var i = 0, ii = nodes.length; ii > i; i++) jqLiteRemoveData(nodes[i]);
    }
    function jqLiteBuildFragment(html, context) {
        var tmp, tag, wrap, i, fragment = context.createDocumentFragment(), nodes = [];
        if (jqLiteIsTextNode(html)) nodes.push(context.createTextNode(html)); else {
            for (tmp = fragment.appendChild(context.createElement("div")), tag = (TAG_NAME_REGEXP.exec(html) || [ "", "" ])[1].toLowerCase(), 
            wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2], 
            i = wrap[0]; i--; ) tmp = tmp.lastChild;
            nodes = concat(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
        }
        return fragment.textContent = "", fragment.innerHTML = "", forEach(nodes, function(node) {
            fragment.appendChild(node);
        }), fragment;
    }
    function jqLiteParseHTML(html, context) {
        context = context || window.document;
        var parsed;
        return (parsed = SINGLE_TAG_REGEXP.exec(html)) ? [ context.createElement(parsed[1]) ] : (parsed = jqLiteBuildFragment(html, context)) ? parsed.childNodes : [];
    }
    function jqLiteWrapNode(node, wrapper) {
        var parent = node.parentNode;
        parent && parent.replaceChild(wrapper, node), wrapper.appendChild(node);
    }
    function JQLite(element) {
        if (element instanceof JQLite) return element;
        var argIsString;
        if (isString(element) && (element = trim(element), argIsString = !0), !(this instanceof JQLite)) {
            if (argIsString && "<" != element.charAt(0)) throw jqLiteMinErr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new JQLite(element);
        }
        argIsString ? jqLiteAddNodes(this, jqLiteParseHTML(element)) : jqLiteAddNodes(this, element);
    }
    function jqLiteClone(element) {
        return element.cloneNode(!0);
    }
    function jqLiteDealoc(element, onlyDescendants) {
        if (onlyDescendants || jqLiteRemoveData(element), element.querySelectorAll) for (var descendants = element.querySelectorAll("*"), i = 0, l = descendants.length; l > i; i++) jqLiteRemoveData(descendants[i]);
    }
    function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported)) throw jqLiteMinErr("offargs", "jqLite#off() does not support the `selector` argument");
        var expandoStore = jqLiteExpandoStore(element), events = expandoStore && expandoStore.events, handle = expandoStore && expandoStore.handle;
        if (handle) if (type) {
            var removeHandler = function(type) {
                var listenerFns = events[type];
                isDefined(fn) && arrayRemove(listenerFns || [], fn), isDefined(fn) && listenerFns && listenerFns.length > 0 || (removeEventListenerFn(element, type, handle), 
                delete events[type]);
            };
            forEach(type.split(" "), function(type) {
                removeHandler(type), MOUSE_EVENT_MAP[type] && removeHandler(MOUSE_EVENT_MAP[type]);
            });
        } else for (type in events) "$destroy" !== type && removeEventListenerFn(element, type, handle), 
        delete events[type];
    }
    function jqLiteRemoveData(element, name) {
        var expandoId = element.ng339, expandoStore = expandoId && jqCache[expandoId];
        if (expandoStore) {
            if (name) return void delete expandoStore.data[name];
            expandoStore.handle && (expandoStore.events.$destroy && expandoStore.handle({}, "$destroy"), 
            jqLiteOff(element)), delete jqCache[expandoId], element.ng339 = void 0;
        }
    }
    function jqLiteExpandoStore(element, createIfNecessary) {
        var expandoId = element.ng339, expandoStore = expandoId && jqCache[expandoId];
        return createIfNecessary && !expandoStore && (element.ng339 = expandoId = jqNextId(), 
        expandoStore = jqCache[expandoId] = {
            events: {},
            data: {},
            handle: void 0
        }), expandoStore;
    }
    function jqLiteData(element, key, value) {
        if (jqLiteAcceptsData(element)) {
            var isSimpleSetter = isDefined(value), isSimpleGetter = !isSimpleSetter && key && !isObject(key), massGetter = !key, expandoStore = jqLiteExpandoStore(element, !isSimpleGetter), data = expandoStore && expandoStore.data;
            if (isSimpleSetter) data[key] = value; else {
                if (massGetter) return data;
                if (isSimpleGetter) return data && data[key];
                extend(data, key);
            }
        }
    }
    function jqLiteHasClass(element, selector) {
        return element.getAttribute ? (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1 : !1;
    }
    function jqLiteRemoveClass(element, cssClasses) {
        cssClasses && element.setAttribute && forEach(cssClasses.split(" "), function(cssClass) {
            element.setAttribute("class", trim((" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")));
        });
    }
    function jqLiteAddClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
            var existingClasses = (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            forEach(cssClasses.split(" "), function(cssClass) {
                cssClass = trim(cssClass), -1 === existingClasses.indexOf(" " + cssClass + " ") && (existingClasses += cssClass + " ");
            }), element.setAttribute("class", trim(existingClasses));
        }
    }
    function jqLiteAddNodes(root, elements) {
        if (elements) if (elements.nodeType) root[root.length++] = elements; else {
            var length = elements.length;
            if ("number" == typeof length && elements.window !== elements) {
                if (length) for (var i = 0; length > i; i++) root[root.length++] = elements[i];
            } else root[root.length++] = elements;
        }
    }
    function jqLiteController(element, name) {
        return jqLiteInheritedData(element, "$" + (name || "ngController") + "Controller");
    }
    function jqLiteInheritedData(element, name, value) {
        element.nodeType == NODE_TYPE_DOCUMENT && (element = element.documentElement);
        for (var names = isArray(name) ? name : [ name ]; element; ) {
            for (var i = 0, ii = names.length; ii > i; i++) if (isDefined(value = jqLite.data(element, names[i]))) return value;
            element = element.parentNode || element.nodeType === NODE_TYPE_DOCUMENT_FRAGMENT && element.host;
        }
    }
    function jqLiteEmpty(element) {
        for (jqLiteDealoc(element, !0); element.firstChild; ) element.removeChild(element.firstChild);
    }
    function jqLiteRemove(element, keepData) {
        keepData || jqLiteDealoc(element);
        var parent = element.parentNode;
        parent && parent.removeChild(element);
    }
    function jqLiteDocumentLoaded(action, win) {
        win = win || window, "complete" === win.document.readyState ? win.setTimeout(action) : jqLite(win).on("load", action);
    }
    function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[nodeName_(element)] && booleanAttr;
    }
    function getAliasedAttrName(name) {
        return ALIASED_ATTR[name];
    }
    function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
            event.isDefaultPrevented = function() {
                return event.defaultPrevented;
            };
            var eventFns = events[type || event.type], eventFnsLength = eventFns ? eventFns.length : 0;
            if (eventFnsLength) {
                if (isUndefined(event.immediatePropagationStopped)) {
                    var originalStopImmediatePropagation = event.stopImmediatePropagation;
                    event.stopImmediatePropagation = function() {
                        event.immediatePropagationStopped = !0, event.stopPropagation && event.stopPropagation(), 
                        originalStopImmediatePropagation && originalStopImmediatePropagation.call(event);
                    };
                }
                event.isImmediatePropagationStopped = function() {
                    return event.immediatePropagationStopped === !0;
                };
                var handlerWrapper = eventFns.specialHandlerWrapper || defaultHandlerWrapper;
                eventFnsLength > 1 && (eventFns = shallowCopy(eventFns));
                for (var i = 0; eventFnsLength > i; i++) event.isImmediatePropagationStopped() || handlerWrapper(element, event, eventFns[i]);
            }
        };
        return eventHandler.elem = element, eventHandler;
    }
    function defaultHandlerWrapper(element, event, handler) {
        handler.call(element, event);
    }
    function specialMouseHandlerWrapper(target, event, handler) {
        var related = event.relatedTarget;
        (!related || related !== target && !jqLiteContains.call(target, related)) && handler.call(target, event);
    }
    function $$jqLiteProvider() {
        this.$get = function() {
            return extend(JQLite, {
                hasClass: function(node, classes) {
                    return node.attr && (node = node[0]), jqLiteHasClass(node, classes);
                },
                addClass: function(node, classes) {
                    return node.attr && (node = node[0]), jqLiteAddClass(node, classes);
                },
                removeClass: function(node, classes) {
                    return node.attr && (node = node[0]), jqLiteRemoveClass(node, classes);
                }
            });
        };
    }
    function hashKey(obj, nextUidFn) {
        var key = obj && obj.$$hashKey;
        if (key) return "function" == typeof key && (key = obj.$$hashKey()), key;
        var objType = typeof obj;
        return key = "function" == objType || "object" == objType && null !== obj ? obj.$$hashKey = objType + ":" + (nextUidFn || nextUid)() : objType + ":" + obj;
    }
    function HashMap(array, isolatedUid) {
        if (isolatedUid) {
            var uid = 0;
            this.nextUid = function() {
                return ++uid;
            };
        }
        forEach(array, this.put, this);
    }
    function stringifyFn(fn) {
        return Function.prototype.toString.call(fn) + " ";
    }
    function extractArgs(fn) {
        var fnText = stringifyFn(fn).replace(STRIP_COMMENTS, ""), args = fnText.match(ARROW_ARG) || fnText.match(FN_ARGS);
        return args;
    }
    function anonFn(fn) {
        var args = extractArgs(fn);
        return args ? "function(" + (args[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function annotate(fn, strictDi, name) {
        var $inject, argDecl, last;
        if ("function" == typeof fn) {
            if (!($inject = fn.$inject)) {
                if ($inject = [], fn.length) {
                    if (strictDi) throw isString(name) && name || (name = fn.name || anonFn(fn)), $injectorMinErr("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", name);
                    argDecl = extractArgs(fn), forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
                        arg.replace(FN_ARG, function(all, underscore, name) {
                            $inject.push(name);
                        });
                    });
                }
                fn.$inject = $inject;
            }
        } else isArray(fn) ? (last = fn.length - 1, assertArgFn(fn[last], "fn"), $inject = fn.slice(0, last)) : assertArgFn(fn, "fn", !0);
        return $inject;
    }
    function createInjector(modulesToLoad, strictDi) {
        function supportObject(delegate) {
            return function(key, value) {
                return isObject(key) ? void forEach(key, reverseParams(delegate)) : delegate(key, value);
            };
        }
        function provider(name, provider_) {
            if (assertNotHasOwnProperty(name, "service"), (isFunction(provider_) || isArray(provider_)) && (provider_ = providerInjector.instantiate(provider_)), 
            !provider_.$get) throw $injectorMinErr("pget", "Provider '{0}' must define $get factory method.", name);
            return providerCache[name + providerSuffix] = provider_;
        }
        function enforceReturnValue(name, factory) {
            return function() {
                var result = instanceInjector.invoke(factory, this);
                if (isUndefined(result)) throw $injectorMinErr("undef", "Provider '{0}' must return a value from $get factory method.", name);
                return result;
            };
        }
        function factory(name, factoryFn, enforce) {
            return provider(name, {
                $get: enforce !== !1 ? enforceReturnValue(name, factoryFn) : factoryFn
            });
        }
        function service(name, constructor) {
            return factory(name, [ "$injector", function($injector) {
                return $injector.instantiate(constructor);
            } ]);
        }
        function value(name, val) {
            return factory(name, valueFn(val), !1);
        }
        function constant(name, value) {
            assertNotHasOwnProperty(name, "constant"), providerCache[name] = value, instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
            var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
            origProvider.$get = function() {
                var origInstance = instanceInjector.invoke(orig$get, origProvider);
                return instanceInjector.invoke(decorFn, null, {
                    $delegate: origInstance
                });
            };
        }
        function loadModules(modulesToLoad) {
            assertArg(isUndefined(modulesToLoad) || isArray(modulesToLoad), "modulesToLoad", "not an array");
            var moduleFn, runBlocks = [];
            return forEach(modulesToLoad, function(module) {
                function runInvokeQueue(queue) {
                    var i, ii;
                    for (i = 0, ii = queue.length; ii > i; i++) {
                        var invokeArgs = queue[i], provider = providerInjector.get(invokeArgs[0]);
                        provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                    }
                }
                if (!loadedModules.get(module)) {
                    loadedModules.put(module, !0);
                    try {
                        isString(module) ? (moduleFn = angularModule(module), runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks), 
                        runInvokeQueue(moduleFn._invokeQueue), runInvokeQueue(moduleFn._configBlocks)) : isFunction(module) ? runBlocks.push(providerInjector.invoke(module)) : isArray(module) ? runBlocks.push(providerInjector.invoke(module)) : assertArgFn(module, "module");
                    } catch (e) {
                        throw isArray(module) && (module = module[module.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        $injectorMinErr("modulerr", "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
                    }
                }
            }), runBlocks;
        }
        function createInternalInjector(cache, factory) {
            function getService(serviceName, caller) {
                if (cache.hasOwnProperty(serviceName)) {
                    if (cache[serviceName] === INSTANTIATING) throw $injectorMinErr("cdep", "Circular dependency found: {0}", serviceName + " <- " + path.join(" <- "));
                    return cache[serviceName];
                }
                try {
                    return path.unshift(serviceName), cache[serviceName] = INSTANTIATING, cache[serviceName] = factory(serviceName, caller);
                } catch (err) {
                    throw cache[serviceName] === INSTANTIATING && delete cache[serviceName], err;
                } finally {
                    path.shift();
                }
            }
            function injectionArgs(fn, locals, serviceName) {
                for (var args = [], $inject = createInjector.$$annotate(fn, strictDi, serviceName), i = 0, length = $inject.length; length > i; i++) {
                    var key = $inject[i];
                    if ("string" != typeof key) throw $injectorMinErr("itkn", "Incorrect injection token! Expected service name as string, got {0}", key);
                    args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key, serviceName));
                }
                return args;
            }
            function isClass(func) {
                return 11 >= msie ? !1 : "function" == typeof func && /^(?:class\b|constructor\()/.test(stringifyFn(func));
            }
            function invoke(fn, self, locals, serviceName) {
                "string" == typeof locals && (serviceName = locals, locals = null);
                var args = injectionArgs(fn, locals, serviceName);
                return isArray(fn) && (fn = fn[fn.length - 1]), isClass(fn) ? (args.unshift(null), 
                new (Function.prototype.bind.apply(fn, args))()) : fn.apply(self, args);
            }
            function instantiate(Type, locals, serviceName) {
                var ctor = isArray(Type) ? Type[Type.length - 1] : Type, args = injectionArgs(Type, locals, serviceName);
                return args.unshift(null), new (Function.prototype.bind.apply(ctor, args))();
            }
            return {
                invoke: invoke,
                instantiate: instantiate,
                get: getService,
                annotate: createInjector.$$annotate,
                has: function(name) {
                    return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
                }
            };
        }
        strictDi = strictDi === !0;
        var INSTANTIATING = {}, providerSuffix = "Provider", path = [], loadedModules = new HashMap([], !0), providerCache = {
            $provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
            }
        }, providerInjector = providerCache.$injector = createInternalInjector(providerCache, function(serviceName, caller) {
            throw angular.isString(caller) && path.push(caller), $injectorMinErr("unpr", "Unknown provider: {0}", path.join(" <- "));
        }), instanceCache = {}, protoInstanceInjector = createInternalInjector(instanceCache, function(serviceName, caller) {
            var provider = providerInjector.get(serviceName + providerSuffix, caller);
            return instanceInjector.invoke(provider.$get, provider, void 0, serviceName);
        }), instanceInjector = protoInstanceInjector;
        providerCache["$injector" + providerSuffix] = {
            $get: valueFn(protoInstanceInjector)
        };
        var runBlocks = loadModules(modulesToLoad);
        return instanceInjector = protoInstanceInjector.get("$injector"), instanceInjector.strictDi = strictDi, 
        forEach(runBlocks, function(fn) {
            fn && instanceInjector.invoke(fn);
        }), instanceInjector;
    }
    function $AnchorScrollProvider() {
        var autoScrollingEnabled = !0;
        this.disableAutoScrolling = function() {
            autoScrollingEnabled = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function($window, $location, $rootScope) {
            function getFirstAnchor(list) {
                var result = null;
                return Array.prototype.some.call(list, function(element) {
                    return "a" === nodeName_(element) ? (result = element, !0) : void 0;
                }), result;
            }
            function getYOffset() {
                var offset = scroll.yOffset;
                if (isFunction(offset)) offset = offset(); else if (isElement(offset)) {
                    var elem = offset[0], style = $window.getComputedStyle(elem);
                    offset = "fixed" !== style.position ? 0 : elem.getBoundingClientRect().bottom;
                } else isNumber(offset) || (offset = 0);
                return offset;
            }
            function scrollTo(elem) {
                if (elem) {
                    elem.scrollIntoView();
                    var offset = getYOffset();
                    if (offset) {
                        var elemTop = elem.getBoundingClientRect().top;
                        $window.scrollBy(0, elemTop - offset);
                    }
                } else $window.scrollTo(0, 0);
            }
            function scroll(hash) {
                hash = isString(hash) ? hash : $location.hash();
                var elm;
                hash ? (elm = document.getElementById(hash)) ? scrollTo(elm) : (elm = getFirstAnchor(document.getElementsByName(hash))) ? scrollTo(elm) : "top" === hash && scrollTo(null) : scrollTo(null);
            }
            var document = $window.document;
            return autoScrollingEnabled && $rootScope.$watch(function() {
                return $location.hash();
            }, function(newVal, oldVal) {
                (newVal !== oldVal || "" !== newVal) && jqLiteDocumentLoaded(function() {
                    $rootScope.$evalAsync(scroll);
                });
            }), scroll;
        } ];
    }
    function mergeClasses(a, b) {
        return a || b ? a ? b ? (isArray(a) && (a = a.join(" ")), isArray(b) && (b = b.join(" ")), 
        a + " " + b) : a : b : "";
    }
    function extractElementNode(element) {
        for (var i = 0; i < element.length; i++) {
            var elm = element[i];
            if (elm.nodeType === ELEMENT_NODE) return elm;
        }
    }
    function splitClasses(classes) {
        isString(classes) && (classes = classes.split(" "));
        var obj = createMap();
        return forEach(classes, function(klass) {
            klass.length && (obj[klass] = !0);
        }), obj;
    }
    function prepareAnimateOptions(options) {
        return isObject(options) ? options : {};
    }
    function Browser(window, document, $log, $sniffer) {
        function completeOutstandingRequest(fn) {
            try {
                fn.apply(null, sliceArgs(arguments, 1));
            } finally {
                if (outstandingRequestCount--, 0 === outstandingRequestCount) for (;outstandingRequestCallbacks.length; ) try {
                    outstandingRequestCallbacks.pop()();
                } catch (e) {
                    $log.error(e);
                }
            }
        }
        function getHash(url) {
            var index = url.indexOf("#");
            return -1 === index ? "" : url.substr(index);
        }
        function cacheStateAndFireUrlChange() {
            pendingLocation = null, cacheState(), fireUrlChange();
        }
        function cacheState() {
            cachedState = getCurrentState(), cachedState = isUndefined(cachedState) ? null : cachedState, 
            equals(cachedState, lastCachedState) && (cachedState = lastCachedState), lastCachedState = cachedState;
        }
        function fireUrlChange() {
            (lastBrowserUrl !== self.url() || lastHistoryState !== cachedState) && (lastBrowserUrl = self.url(), 
            lastHistoryState = cachedState, forEach(urlChangeListeners, function(listener) {
                listener(self.url(), cachedState);
            }));
        }
        var self = this, location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
        self.isMock = !1;
        var outstandingRequestCount = 0, outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest, self.$$incOutstandingRequestCount = function() {
            outstandingRequestCount++;
        }, self.notifyWhenNoOutstandingRequests = function(callback) {
            0 === outstandingRequestCount ? callback() : outstandingRequestCallbacks.push(callback);
        };
        var cachedState, lastHistoryState, lastBrowserUrl = location.href, baseElement = document.find("base"), pendingLocation = null, getCurrentState = $sniffer.history ? function() {
            try {
                return history.state;
            } catch (e) {}
        } : noop;
        cacheState(), lastHistoryState = cachedState, self.url = function(url, replace, state) {
            if (isUndefined(state) && (state = null), location !== window.location && (location = window.location), 
            history !== window.history && (history = window.history), url) {
                var sameState = lastHistoryState === state;
                if (lastBrowserUrl === url && (!$sniffer.history || sameState)) return self;
                var sameBase = lastBrowserUrl && stripHash(lastBrowserUrl) === stripHash(url);
                return lastBrowserUrl = url, lastHistoryState = state, !$sniffer.history || sameBase && sameState ? (sameBase || (pendingLocation = url), 
                replace ? location.replace(url) : sameBase ? location.hash = getHash(url) : location.href = url, 
                location.href !== url && (pendingLocation = url)) : (history[replace ? "replaceState" : "pushState"](state, "", url), 
                cacheState(), lastHistoryState = cachedState), pendingLocation && (pendingLocation = url), 
                self;
            }
            return pendingLocation || location.href.replace(/%27/g, "'");
        }, self.state = function() {
            return cachedState;
        };
        var urlChangeListeners = [], urlChangeInit = !1, lastCachedState = null;
        self.onUrlChange = function(callback) {
            return urlChangeInit || ($sniffer.history && jqLite(window).on("popstate", cacheStateAndFireUrlChange), 
            jqLite(window).on("hashchange", cacheStateAndFireUrlChange), urlChangeInit = !0), 
            urlChangeListeners.push(callback), callback;
        }, self.$$applicationDestroyed = function() {
            jqLite(window).off("hashchange popstate", cacheStateAndFireUrlChange);
        }, self.$$checkUrlChange = fireUrlChange, self.baseHref = function() {
            var href = baseElement.attr("href");
            return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        }, self.defer = function(fn, delay) {
            var timeoutId;
            return outstandingRequestCount++, timeoutId = setTimeout(function() {
                delete pendingDeferIds[timeoutId], completeOutstandingRequest(fn);
            }, delay || 0), pendingDeferIds[timeoutId] = !0, timeoutId;
        }, self.defer.cancel = function(deferId) {
            return pendingDeferIds[deferId] ? (delete pendingDeferIds[deferId], clearTimeout(deferId), 
            completeOutstandingRequest(noop), !0) : !1;
        };
    }
    function $BrowserProvider() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function($window, $log, $sniffer, $document) {
            return new Browser($window, $document, $log, $sniffer);
        } ];
    }
    function $CacheFactoryProvider() {
        this.$get = function() {
            function cacheFactory(cacheId, options) {
                function refresh(entry) {
                    entry != freshEnd && (staleEnd ? staleEnd == entry && (staleEnd = entry.n) : staleEnd = entry, 
                    link(entry.n, entry.p), link(entry, freshEnd), freshEnd = entry, freshEnd.n = null);
                }
                function link(nextEntry, prevEntry) {
                    nextEntry != prevEntry && (nextEntry && (nextEntry.p = prevEntry), prevEntry && (prevEntry.n = nextEntry));
                }
                if (cacheId in caches) throw minErr("$cacheFactory")("iid", "CacheId '{0}' is already taken!", cacheId);
                var size = 0, stats = extend({}, options, {
                    id: cacheId
                }), data = createMap(), capacity = options && options.capacity || Number.MAX_VALUE, lruHash = createMap(), freshEnd = null, staleEnd = null;
                return caches[cacheId] = {
                    put: function(key, value) {
                        if (!isUndefined(value)) {
                            if (capacity < Number.MAX_VALUE) {
                                var lruEntry = lruHash[key] || (lruHash[key] = {
                                    key: key
                                });
                                refresh(lruEntry);
                            }
                            return key in data || size++, data[key] = value, size > capacity && this.remove(staleEnd.key), 
                            value;
                        }
                    },
                    get: function(key) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key];
                            if (!lruEntry) return;
                            refresh(lruEntry);
                        }
                        return data[key];
                    },
                    remove: function(key) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key];
                            if (!lruEntry) return;
                            lruEntry == freshEnd && (freshEnd = lruEntry.p), lruEntry == staleEnd && (staleEnd = lruEntry.n), 
                            link(lruEntry.n, lruEntry.p), delete lruHash[key];
                        }
                        key in data && (delete data[key], size--);
                    },
                    removeAll: function() {
                        data = createMap(), size = 0, lruHash = createMap(), freshEnd = staleEnd = null;
                    },
                    destroy: function() {
                        data = null, stats = null, lruHash = null, delete caches[cacheId];
                    },
                    info: function() {
                        return extend({}, stats, {
                            size: size
                        });
                    }
                };
            }
            var caches = {};
            return cacheFactory.info = function() {
                var info = {};
                return forEach(caches, function(cache, cacheId) {
                    info[cacheId] = cache.info();
                }), info;
            }, cacheFactory.get = function(cacheId) {
                return caches[cacheId];
            }, cacheFactory;
        };
    }
    function $TemplateCacheProvider() {
        this.$get = [ "$cacheFactory", function($cacheFactory) {
            return $cacheFactory("templates");
        } ];
    }
    function UNINITIALIZED_VALUE() {}
    function $CompileProvider($provide, $$sanitizeUriProvider) {
        function parseIsolateBindings(scope, directiveName, isController) {
            var LOCAL_REGEXP = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, bindings = createMap();
            return forEach(scope, function(definition, scopeName) {
                if (definition in bindingCache) return void (bindings[scopeName] = bindingCache[definition]);
                var match = definition.match(LOCAL_REGEXP);
                if (!match) throw $compileMinErr("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", directiveName, scopeName, definition, isController ? "controller bindings definition" : "isolate scope definition");
                bindings[scopeName] = {
                    mode: match[1][0],
                    collection: "*" === match[2],
                    optional: "?" === match[3],
                    attrName: match[4] || scopeName
                }, match[4] && (bindingCache[definition] = bindings[scopeName]);
            }), bindings;
        }
        function parseDirectiveBindings(directive, directiveName) {
            var bindings = {
                isolateScope: null,
                bindToController: null
            };
            if (isObject(directive.scope) && (directive.bindToController === !0 ? (bindings.bindToController = parseIsolateBindings(directive.scope, directiveName, !0), 
            bindings.isolateScope = {}) : bindings.isolateScope = parseIsolateBindings(directive.scope, directiveName, !1)), 
            isObject(directive.bindToController) && (bindings.bindToController = parseIsolateBindings(directive.bindToController, directiveName, !0)), 
            isObject(bindings.bindToController)) {
                var controller = directive.controller, controllerAs = directive.controllerAs;
                if (!controller) throw $compileMinErr("noctrl", "Cannot bind to controller without directive '{0}'s controller.", directiveName);
                if (!identifierForController(controller, controllerAs)) throw $compileMinErr("noident", "Cannot bind to controller without identifier for directive '{0}'.", directiveName);
            }
            return bindings;
        }
        function assertValidDirectiveName(name) {
            var letter = name.charAt(0);
            if (!letter || letter !== lowercase(letter)) throw $compileMinErr("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", name);
            if (name !== name.trim()) throw $compileMinErr("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", name);
        }
        function getDirectiveRequire(directive) {
            var require = directive.require || directive.controller && directive.name;
            return !isArray(require) && isObject(require) && forEach(require, function(value, key) {
                var match = value.match(REQUIRE_PREFIX_REGEXP), name = value.substring(match[0].length);
                name || (require[key] = match[0] + key);
            }), require;
        }
        var hasDirectives = {}, Suffix = "Directive", COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\w\-]+)(?:\:([^;]+))?;?)/, ALL_OR_NOTHING_ATTRS = makeMap("ngSrc,ngSrcset,src,srcset"), REQUIRE_PREFIX_REGEXP = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/, bindingCache = createMap();
        this.directive = function registerDirective(name, directiveFactory) {
            return assertNotHasOwnProperty(name, "directive"), isString(name) ? (assertValidDirectiveName(name), 
            assertArg(directiveFactory, "directiveFactory"), hasDirectives.hasOwnProperty(name) || (hasDirectives[name] = [], 
            $provide.factory(name + Suffix, [ "$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                var directives = [];
                return forEach(hasDirectives[name], function(directiveFactory, index) {
                    try {
                        var directive = $injector.invoke(directiveFactory);
                        isFunction(directive) ? directive = {
                            compile: valueFn(directive)
                        } : !directive.compile && directive.link && (directive.compile = valueFn(directive.link)), 
                        directive.priority = directive.priority || 0, directive.index = index, directive.name = directive.name || name, 
                        directive.require = getDirectiveRequire(directive), directive.restrict = directive.restrict || "EA", 
                        directive.$$moduleName = directiveFactory.$$moduleName, directives.push(directive);
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                }), directives;
            } ])), hasDirectives[name].push(directiveFactory)) : forEach(name, reverseParams(registerDirective)), 
            this;
        }, this.component = function(name, options) {
            function factory($injector) {
                function makeInjectable(fn) {
                    return isFunction(fn) || isArray(fn) ? function(tElement, tAttrs) {
                        return $injector.invoke(fn, this, {
                            $element: tElement,
                            $attrs: tAttrs
                        });
                    } : fn;
                }
                var template = options.template || options.templateUrl ? options.template : "", ddo = {
                    controller: controller,
                    controllerAs: identifierForController(options.controller) || options.controllerAs || "$ctrl",
                    template: makeInjectable(template),
                    templateUrl: makeInjectable(options.templateUrl),
                    transclude: options.transclude,
                    scope: {},
                    bindToController: options.bindings || {},
                    restrict: "E",
                    require: options.require
                };
                return forEach(options, function(val, key) {
                    "$" === key.charAt(0) && (ddo[key] = val);
                }), ddo;
            }
            var controller = options.controller || function() {};
            return forEach(options, function(val, key) {
                "$" === key.charAt(0) && (factory[key] = val, isFunction(controller) && (controller[key] = val));
            }), factory.$inject = [ "$injector" ], this.directive(name, factory);
        }, this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
        };
        var debugInfoEnabled = !0;
        this.debugInfoEnabled = function(enabled) {
            return isDefined(enabled) ? (debugInfoEnabled = enabled, this) : debugInfoEnabled;
        };
        var TTL = 10;
        this.onChangesTtl = function(value) {
            return arguments.length ? (TTL = value, this) : TTL;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function($injector, $interpolate, $exceptionHandler, $templateRequest, $parse, $controller, $rootScope, $sce, $animate, $$sanitizeUri) {
            function flushOnChangesQueue() {
                try {
                    if (!--onChangesTtl) throw onChangesQueue = void 0, $compileMinErr("infchng", "{0} $onChanges() iterations reached. Aborting!\n", TTL);
                    $rootScope.$apply(function() {
                        for (var errors = [], i = 0, ii = onChangesQueue.length; ii > i; ++i) try {
                            onChangesQueue[i]();
                        } catch (e) {
                            errors.push(e);
                        }
                        if (onChangesQueue = void 0, errors.length) throw errors;
                    });
                } finally {
                    onChangesTtl++;
                }
            }
            function Attributes(element, attributesToCopy) {
                if (attributesToCopy) {
                    var i, l, key, keys = Object.keys(attributesToCopy);
                    for (i = 0, l = keys.length; l > i; i++) key = keys[i], this[key] = attributesToCopy[key];
                } else this.$attr = {};
                this.$$element = element;
            }
            function setSpecialAttr(element, attrName, value) {
                specialAttrHolder.innerHTML = "<span " + attrName + ">";
                var attributes = specialAttrHolder.firstChild.attributes, attribute = attributes[0];
                attributes.removeNamedItem(attribute.name), attribute.value = value, element.attributes.setNamedItem(attribute);
            }
            function safeAddClass($element, className) {
                try {
                    $element.addClass(className);
                } catch (e) {}
            }
            function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                $compileNodes instanceof jqLite || ($compileNodes = jqLite($compileNodes));
                for (var NOT_EMPTY = /\S+/, i = 0, len = $compileNodes.length; len > i; i++) {
                    var domNode = $compileNodes[i];
                    domNode.nodeType === NODE_TYPE_TEXT && domNode.nodeValue.match(NOT_EMPTY) && jqLiteWrapNode(domNode, $compileNodes[i] = window.document.createElement("span"));
                }
                var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
                compile.$$addScopeClass($compileNodes);
                var namespace = null;
                return function(scope, cloneConnectFn, options) {
                    assertArg(scope, "scope"), previousCompileContext && previousCompileContext.needsNewScope && (scope = scope.$parent.$new()), 
                    options = options || {};
                    var parentBoundTranscludeFn = options.parentBoundTranscludeFn, transcludeControllers = options.transcludeControllers, futureParentElement = options.futureParentElement;
                    parentBoundTranscludeFn && parentBoundTranscludeFn.$$boundTransclude && (parentBoundTranscludeFn = parentBoundTranscludeFn.$$boundTransclude), 
                    namespace || (namespace = detectNamespaceForChildElements(futureParentElement));
                    var $linkNode;
                    if ($linkNode = "html" !== namespace ? jqLite(wrapTemplate(namespace, jqLite("<div>").append($compileNodes).html())) : cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes, 
                    transcludeControllers) for (var controllerName in transcludeControllers) $linkNode.data("$" + controllerName + "Controller", transcludeControllers[controllerName].instance);
                    return compile.$$addScopeInfo($linkNode, scope), cloneConnectFn && cloneConnectFn($linkNode, scope), 
                    compositeLinkFn && compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn), 
                    $linkNode;
                };
            }
            function detectNamespaceForChildElements(parentElement) {
                var node = parentElement && parentElement[0];
                return node && "foreignobject" !== nodeName_(node) && toString.call(node).match(/SVG/) ? "svg" : "html";
            }
            function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
                function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
                    var nodeLinkFn, childLinkFn, node, childScope, i, ii, idx, childBoundTranscludeFn, stableNodeList;
                    if (nodeLinkFnFound) {
                        var nodeListLength = nodeList.length;
                        for (stableNodeList = new Array(nodeListLength), i = 0; i < linkFns.length; i += 3) idx = linkFns[i], 
                        stableNodeList[idx] = nodeList[idx];
                    } else stableNodeList = nodeList;
                    for (i = 0, ii = linkFns.length; ii > i; ) node = stableNodeList[linkFns[i++]], 
                    nodeLinkFn = linkFns[i++], childLinkFn = linkFns[i++], nodeLinkFn ? (nodeLinkFn.scope ? (childScope = scope.$new(), 
                    compile.$$addScopeInfo(jqLite(node), childScope)) : childScope = scope, childBoundTranscludeFn = nodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn) : !nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn ? parentBoundTranscludeFn : !parentBoundTranscludeFn && transcludeFn ? createBoundTranscludeFn(scope, transcludeFn) : null, 
                    nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn)) : childLinkFn && childLinkFn(scope, node.childNodes, void 0, parentBoundTranscludeFn);
                }
                for (var attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound, nodeLinkFnFound, linkFns = [], i = 0; i < nodeList.length; i++) attrs = new Attributes(), 
                directives = collectDirectives(nodeList[i], [], attrs, 0 === i ? maxPriority : void 0, ignoreDirective), 
                nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null, 
                nodeLinkFn && nodeLinkFn.scope && compile.$$addScopeClass(attrs.$$element), childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length ? null : compileNodes(childNodes, nodeLinkFn ? (nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude : transcludeFn), 
                (nodeLinkFn || childLinkFn) && (linkFns.push(i, nodeLinkFn, childLinkFn), linkFnFound = !0, 
                nodeLinkFnFound = nodeLinkFnFound || nodeLinkFn), previousCompileContext = null;
                return linkFnFound ? compositeLinkFn : null;
            }
            function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn) {
                function boundTranscludeFn(transcludedScope, cloneFn, controllers, futureParentElement, containingScope) {
                    return transcludedScope || (transcludedScope = scope.$new(!1, containingScope), 
                    transcludedScope.$$transcluded = !0), transcludeFn(transcludedScope, cloneFn, {
                        parentBoundTranscludeFn: previousBoundTranscludeFn,
                        transcludeControllers: controllers,
                        futureParentElement: futureParentElement
                    });
                }
                var boundSlots = boundTranscludeFn.$$slots = createMap();
                for (var slotName in transcludeFn.$$slots) boundSlots[slotName] = transcludeFn.$$slots[slotName] ? createBoundTranscludeFn(scope, transcludeFn.$$slots[slotName], previousBoundTranscludeFn) : null;
                return boundTranscludeFn;
            }
            function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                var match, className, nodeType = node.nodeType, attrsMap = attrs.$attr;
                switch (nodeType) {
                  case NODE_TYPE_ELEMENT:
                    addDirective(directives, directiveNormalize(nodeName_(node)), "E", maxPriority, ignoreDirective);
                    for (var attr, name, nName, ngAttrName, value, isNgAttr, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; jj > j; j++) {
                        var attrStartName = !1, attrEndName = !1;
                        attr = nAttrs[j], name = attr.name, value = trim(attr.value), ngAttrName = directiveNormalize(name), 
                        (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) && (name = name.replace(PREFIX_REGEXP, "").substr(8).replace(/_(.)/g, function(match, letter) {
                            return letter.toUpperCase();
                        }));
                        var multiElementMatch = ngAttrName.match(MULTI_ELEMENT_DIR_RE);
                        multiElementMatch && directiveIsMultiElement(multiElementMatch[1]) && (attrStartName = name, 
                        attrEndName = name.substr(0, name.length - 5) + "end", name = name.substr(0, name.length - 6)), 
                        nName = directiveNormalize(name.toLowerCase()), attrsMap[nName] = name, (isNgAttr || !attrs.hasOwnProperty(nName)) && (attrs[nName] = value, 
                        getBooleanAttrName(node, nName) && (attrs[nName] = !0)), addAttrInterpolateDirective(node, directives, value, nName, isNgAttr), 
                        addDirective(directives, nName, "A", maxPriority, ignoreDirective, attrStartName, attrEndName);
                    }
                    if (className = node.className, isObject(className) && (className = className.animVal), 
                    isString(className) && "" !== className) for (;match = CLASS_DIRECTIVE_REGEXP.exec(className); ) nName = directiveNormalize(match[2]), 
                    addDirective(directives, nName, "C", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[3])), 
                    className = className.substr(match.index + match[0].length);
                    break;

                  case NODE_TYPE_TEXT:
                    if (11 === msie) for (;node.parentNode && node.nextSibling && node.nextSibling.nodeType === NODE_TYPE_TEXT; ) node.nodeValue = node.nodeValue + node.nextSibling.nodeValue, 
                    node.parentNode.removeChild(node.nextSibling);
                    addTextInterpolateDirective(directives, node.nodeValue);
                    break;

                  case NODE_TYPE_COMMENT:
                    collectCommentDirectives(node, directives, attrs, maxPriority, ignoreDirective);
                }
                return directives.sort(byPriority), directives;
            }
            function collectCommentDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                try {
                    var match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
                    if (match) {
                        var nName = directiveNormalize(match[1]);
                        addDirective(directives, nName, "M", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[2]));
                    }
                } catch (e) {}
            }
            function groupScan(node, attrStart, attrEnd) {
                var nodes = [], depth = 0;
                if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
                    do {
                        if (!node) throw $compileMinErr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                        node.nodeType == NODE_TYPE_ELEMENT && (node.hasAttribute(attrStart) && depth++, 
                        node.hasAttribute(attrEnd) && depth--), nodes.push(node), node = node.nextSibling;
                    } while (depth > 0);
                } else nodes.push(node);
                return jqLite(nodes);
            }
            function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
                return function(scope, element, attrs, controllers, transcludeFn) {
                    return element = groupScan(element[0], attrStart, attrEnd), linkFn(scope, element, attrs, controllers, transcludeFn);
                };
            }
            function compilationGenerator(eager, $compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                var compiled;
                return eager ? compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) : function() {
                    return compiled || (compiled = compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext), 
                    $compileNodes = transcludeFn = previousCompileContext = null), compiled.apply(this, arguments);
                };
            }
            function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
                function addLinkFns(pre, post, attrStart, attrEnd) {
                    pre && (attrStart && (pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd)), 
                    pre.require = directive.require, pre.directiveName = directiveName, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (pre = cloneAndAnnotateFn(pre, {
                        isolateScope: !0
                    })), preLinkFns.push(pre)), post && (attrStart && (post = groupElementsLinkFnWrapper(post, attrStart, attrEnd)), 
                    post.require = directive.require, post.directiveName = directiveName, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (post = cloneAndAnnotateFn(post, {
                        isolateScope: !0
                    })), postLinkFns.push(post));
                }
                function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                    function controllersBoundTransclude(scope, cloneAttachFn, futureParentElement, slotName) {
                        var transcludeControllers;
                        if (isScope(scope) || (slotName = futureParentElement, futureParentElement = cloneAttachFn, 
                        cloneAttachFn = scope, scope = void 0), hasElementTranscludeDirective && (transcludeControllers = elementControllers), 
                        futureParentElement || (futureParentElement = hasElementTranscludeDirective ? $element.parent() : $element), 
                        !slotName) return boundTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                        var slotTranscludeFn = boundTranscludeFn.$$slots[slotName];
                        if (slotTranscludeFn) return slotTranscludeFn(scope, cloneAttachFn, transcludeControllers, futureParentElement, scopeToChild);
                        if (isUndefined(slotTranscludeFn)) throw $compileMinErr("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', slotName, startingTag($element));
                    }
                    var i, ii, linkFn, isolateScope, controllerScope, elementControllers, transcludeFn, $element, attrs, scopeBindingInfo;
                    compileNode === linkNode ? (attrs = templateAttrs, $element = templateAttrs.$$element) : ($element = jqLite(linkNode), 
                    attrs = new Attributes($element, templateAttrs)), controllerScope = scope, newIsolateScopeDirective ? isolateScope = scope.$new(!0) : newScopeDirective && (controllerScope = scope.$parent), 
                    boundTranscludeFn && (transcludeFn = controllersBoundTransclude, transcludeFn.$$boundTransclude = boundTranscludeFn, 
                    transcludeFn.isSlotFilled = function(slotName) {
                        return !!boundTranscludeFn.$$slots[slotName];
                    }), controllerDirectives && (elementControllers = setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective)), 
                    newIsolateScopeDirective && (compile.$$addScopeInfo($element, isolateScope, !0, !(templateDirective && (templateDirective === newIsolateScopeDirective || templateDirective === newIsolateScopeDirective.$$originalDirective))), 
                    compile.$$addScopeClass($element, !0), isolateScope.$$isolateBindings = newIsolateScopeDirective.$$isolateBindings, 
                    scopeBindingInfo = initializeDirectiveBindings(scope, attrs, isolateScope, isolateScope.$$isolateBindings, newIsolateScopeDirective), 
                    scopeBindingInfo.removeWatches && isolateScope.$on("$destroy", scopeBindingInfo.removeWatches));
                    for (var name in elementControllers) {
                        var controllerDirective = controllerDirectives[name], controller = elementControllers[name], bindings = controllerDirective.$$bindings.bindToController;
                        controller.bindingInfo = controller.identifier && bindings ? initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective) : {};
                        var controllerResult = controller();
                        controllerResult !== controller.instance && (controller.instance = controllerResult, 
                        $element.data("$" + controllerDirective.name + "Controller", controllerResult), 
                        controller.bindingInfo.removeWatches && controller.bindingInfo.removeWatches(), 
                        controller.bindingInfo = initializeDirectiveBindings(controllerScope, attrs, controller.instance, bindings, controllerDirective));
                    }
                    for (forEach(controllerDirectives, function(controllerDirective, name) {
                        var require = controllerDirective.require;
                        controllerDirective.bindToController && !isArray(require) && isObject(require) && extend(elementControllers[name].instance, getControllers(name, require, $element, elementControllers));
                    }), forEach(elementControllers, function(controller) {
                        var controllerInstance = controller.instance;
                        if (isFunction(controllerInstance.$onChanges)) try {
                            controllerInstance.$onChanges(controller.bindingInfo.initialChanges);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                        if (isFunction(controllerInstance.$onInit)) try {
                            controllerInstance.$onInit();
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                        isFunction(controllerInstance.$doCheck) && (controllerScope.$watch(function() {
                            controllerInstance.$doCheck();
                        }), controllerInstance.$doCheck()), isFunction(controllerInstance.$onDestroy) && controllerScope.$on("$destroy", function() {
                            controllerInstance.$onDestroy();
                        });
                    }), i = 0, ii = preLinkFns.length; ii > i; i++) linkFn = preLinkFns[i], invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                    var scopeToChild = scope;
                    for (newIsolateScopeDirective && (newIsolateScopeDirective.template || null === newIsolateScopeDirective.templateUrl) && (scopeToChild = isolateScope), 
                    childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, void 0, boundTranscludeFn), 
                    i = postLinkFns.length - 1; i >= 0; i--) linkFn = postLinkFns[i], invokeLinkFn(linkFn, linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                    forEach(elementControllers, function(controller) {
                        var controllerInstance = controller.instance;
                        isFunction(controllerInstance.$postLink) && controllerInstance.$postLink();
                    });
                }
                previousCompileContext = previousCompileContext || {};
                for (var directive, directiveName, $template, linkFn, directiveValue, terminalPriority = -Number.MAX_VALUE, newScopeDirective = previousCompileContext.newScopeDirective, controllerDirectives = previousCompileContext.controllerDirectives, newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective, templateDirective = previousCompileContext.templateDirective, nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective, hasTranscludeDirective = !1, hasTemplate = !1, hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective, $compileNode = templateAttrs.$$element = jqLite(compileNode), replaceDirective = originalReplaceDirective, childTranscludeFn = transcludeFn, didScanForMultipleTransclusion = !1, mightHaveMultipleTransclusionError = !1, i = 0, ii = directives.length; ii > i; i++) {
                    directive = directives[i];
                    var attrStart = directive.$$start, attrEnd = directive.$$end;
                    if (attrStart && ($compileNode = groupScan(compileNode, attrStart, attrEnd)), $template = void 0, 
                    terminalPriority > directive.priority) break;
                    if ((directiveValue = directive.scope) && (directive.templateUrl || (isObject(directiveValue) ? (assertNoDuplicate("new/isolated scope", newIsolateScopeDirective || newScopeDirective, directive, $compileNode), 
                    newIsolateScopeDirective = directive) : assertNoDuplicate("new/isolated scope", newIsolateScopeDirective, directive, $compileNode)), 
                    newScopeDirective = newScopeDirective || directive), directiveName = directive.name, 
                    !didScanForMultipleTransclusion && (directive.replace && (directive.templateUrl || directive.template) || directive.transclude && !directive.$$tlb)) {
                        for (var candidateDirective, scanningIndex = i + 1; candidateDirective = directives[scanningIndex++]; ) if (candidateDirective.transclude && !candidateDirective.$$tlb || candidateDirective.replace && (candidateDirective.templateUrl || candidateDirective.template)) {
                            mightHaveMultipleTransclusionError = !0;
                            break;
                        }
                        didScanForMultipleTransclusion = !0;
                    }
                    if (!directive.templateUrl && directive.controller && (directiveValue = directive.controller, 
                    controllerDirectives = controllerDirectives || createMap(), assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode), 
                    controllerDirectives[directiveName] = directive), directiveValue = directive.transclude) if (hasTranscludeDirective = !0, 
                    directive.$$tlb || (assertNoDuplicate("transclusion", nonTlbTranscludeDirective, directive, $compileNode), 
                    nonTlbTranscludeDirective = directive), "element" == directiveValue) hasElementTranscludeDirective = !0, 
                    terminalPriority = directive.priority, $template = $compileNode, $compileNode = templateAttrs.$$element = jqLite(compile.$$createComment(directiveName, templateAttrs[directiveName])), 
                    compileNode = $compileNode[0], replaceWith(jqCollection, sliceArgs($template), compileNode), 
                    $template[0].$$parentNode = $template[0].parentNode, childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    }); else {
                        var slots = createMap();
                        if ($template = jqLite(jqLiteClone(compileNode)).contents(), isObject(directiveValue)) {
                            $template = [];
                            var slotMap = createMap(), filledSlots = createMap();
                            forEach(directiveValue, function(elementSelector, slotName) {
                                var optional = "?" === elementSelector.charAt(0);
                                elementSelector = optional ? elementSelector.substring(1) : elementSelector, slotMap[elementSelector] = slotName, 
                                slots[slotName] = null, filledSlots[slotName] = optional;
                            }), forEach($compileNode.contents(), function(node) {
                                var slotName = slotMap[directiveNormalize(nodeName_(node))];
                                slotName ? (filledSlots[slotName] = !0, slots[slotName] = slots[slotName] || [], 
                                slots[slotName].push(node)) : $template.push(node);
                            }), forEach(filledSlots, function(filled, slotName) {
                                if (!filled) throw $compileMinErr("reqslot", "Required transclusion slot `{0}` was not filled.", slotName);
                            });
                            for (var slotName in slots) slots[slotName] && (slots[slotName] = compilationGenerator(mightHaveMultipleTransclusionError, slots[slotName], transcludeFn));
                        }
                        $compileNode.empty(), childTranscludeFn = compilationGenerator(mightHaveMultipleTransclusionError, $template, transcludeFn, void 0, void 0, {
                            needsNewScope: directive.$$isolateScope || directive.$$newScope
                        }), childTranscludeFn.$$slots = slots;
                    }
                    if (directive.template) if (hasTemplate = !0, assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template, 
                    directiveValue = denormalizeTemplate(directiveValue), directive.replace) {
                        if (replaceDirective = directive, $template = jqLiteIsTextNode(directiveValue) ? [] : removeComments(wrapTemplate(directive.templateNamespace, trim(directiveValue))), 
                        compileNode = $template[0], 1 != $template.length || compileNode.nodeType !== NODE_TYPE_ELEMENT) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", directiveName, "");
                        replaceWith(jqCollection, $compileNode, compileNode);
                        var newTemplateAttrs = {
                            $attr: {}
                        }, templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs), unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                        (newIsolateScopeDirective || newScopeDirective) && markDirectiveScope(templateDirectives, newIsolateScopeDirective, newScopeDirective), 
                        directives = directives.concat(templateDirectives).concat(unprocessedDirectives), 
                        mergeTemplateAttributes(templateAttrs, newTemplateAttrs), ii = directives.length;
                    } else $compileNode.html(directiveValue);
                    if (directive.templateUrl) hasTemplate = !0, assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directive.replace && (replaceDirective = directive), 
                    nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                        controllerDirectives: controllerDirectives,
                        newScopeDirective: newScopeDirective !== directive && newScopeDirective,
                        newIsolateScopeDirective: newIsolateScopeDirective,
                        templateDirective: templateDirective,
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    }), ii = directives.length; else if (directive.compile) try {
                        linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                        var context = directive.$$originalDirective || directive;
                        isFunction(linkFn) ? addLinkFns(null, bind(context, linkFn), attrStart, attrEnd) : linkFn && addLinkFns(bind(context, linkFn.pre), bind(context, linkFn.post), attrStart, attrEnd);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($compileNode));
                    }
                    directive.terminal && (nodeLinkFn.terminal = !0, terminalPriority = Math.max(terminalPriority, directive.priority));
                }
                return nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === !0, nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective, 
                nodeLinkFn.templateOnThisElement = hasTemplate, nodeLinkFn.transclude = childTranscludeFn, 
                previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective, 
                nodeLinkFn;
            }
            function getControllers(directiveName, require, $element, elementControllers) {
                var value;
                if (isString(require)) {
                    var match = require.match(REQUIRE_PREFIX_REGEXP), name = require.substring(match[0].length), inheritType = match[1] || match[3], optional = "?" === match[2];
                    if ("^^" === inheritType ? $element = $element.parent() : (value = elementControllers && elementControllers[name], 
                    value = value && value.instance), !value) {
                        var dataName = "$" + name + "Controller";
                        value = inheritType ? $element.inheritedData(dataName) : $element.data(dataName);
                    }
                    if (!value && !optional) throw $compileMinErr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", name, directiveName);
                } else if (isArray(require)) {
                    value = [];
                    for (var i = 0, ii = require.length; ii > i; i++) value[i] = getControllers(directiveName, require[i], $element, elementControllers);
                } else isObject(require) && (value = {}, forEach(require, function(controller, property) {
                    value[property] = getControllers(directiveName, controller, $element, elementControllers);
                }));
                return value || null;
            }
            function setupControllers($element, attrs, transcludeFn, controllerDirectives, isolateScope, scope, newIsolateScopeDirective) {
                var elementControllers = createMap();
                for (var controllerKey in controllerDirectives) {
                    var directive = controllerDirectives[controllerKey], locals = {
                        $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                        $element: $element,
                        $attrs: attrs,
                        $transclude: transcludeFn
                    }, controller = directive.controller;
                    "@" == controller && (controller = attrs[directive.name]);
                    var controllerInstance = $controller(controller, locals, !0, directive.controllerAs);
                    elementControllers[directive.name] = controllerInstance, $element.data("$" + directive.name + "Controller", controllerInstance.instance);
                }
                return elementControllers;
            }
            function markDirectiveScope(directives, isolateScope, newScope) {
                for (var j = 0, jj = directives.length; jj > j; j++) directives[j] = inherit(directives[j], {
                    $$isolateScope: isolateScope,
                    $$newScope: newScope
                });
            }
            function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
                if (name === ignoreDirective) return null;
                var match = null;
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) try {
                    if (directive = directives[i], (isUndefined(maxPriority) || maxPriority > directive.priority) && -1 != directive.restrict.indexOf(location)) {
                        if (startAttrName && (directive = inherit(directive, {
                            $$start: startAttrName,
                            $$end: endAttrName
                        })), !directive.$$bindings) {
                            var bindings = directive.$$bindings = parseDirectiveBindings(directive, directive.name);
                            isObject(bindings.isolateScope) && (directive.$$isolateBindings = bindings.isolateScope);
                        }
                        tDirectives.push(directive), match = directive;
                    }
                } catch (e) {
                    $exceptionHandler(e);
                }
                return match;
            }
            function directiveIsMultiElement(name) {
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) if (directive = directives[i], 
                directive.multiElement) return !0;
                return !1;
            }
            function mergeTemplateAttributes(dst, src) {
                {
                    var srcAttr = src.$attr, dstAttr = dst.$attr;
                    dst.$$element;
                }
                forEach(dst, function(value, key) {
                    "$" != key.charAt(0) && (src[key] && src[key] !== value && (value += ("style" === key ? ";" : " ") + src[key]), 
                    dst.$set(key, value, !0, srcAttr[key]));
                }), forEach(src, function(value, key) {
                    dst.hasOwnProperty(key) || "$" === key.charAt(0) || (dst[key] = value, "class" !== key && "style" !== key && (dstAttr[key] = srcAttr[key]));
                });
            }
            function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
                var afterTemplateNodeLinkFn, afterTemplateChildLinkFn, linkQueue = [], beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = inherit(origAsyncDirective, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: origAsyncDirective
                }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl, templateNamespace = origAsyncDirective.templateNamespace;
                return $compileNode.empty(), $templateRequest(templateUrl).then(function(content) {
                    var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;
                    if (content = denormalizeTemplate(content), origAsyncDirective.replace) {
                        if ($template = jqLiteIsTextNode(content) ? [] : removeComments(wrapTemplate(templateNamespace, trim(content))), 
                        compileNode = $template[0], 1 != $template.length || compileNode.nodeType !== NODE_TYPE_ELEMENT) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                        tempTemplateAttrs = {
                            $attr: {}
                        }, replaceWith($rootElement, $compileNode, compileNode);
                        var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                        isObject(origAsyncDirective.scope) && markDirectiveScope(templateDirectives, !0), 
                        directives = templateDirectives.concat(directives), mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
                    } else compileNode = beforeTemplateCompileNode, $compileNode.html(content);
                    for (directives.unshift(derivedSyncDirective), afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext), 
                    forEach($rootElement, function(node, i) {
                        node == compileNode && ($rootElement[i] = $compileNode[0]);
                    }), afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn); linkQueue.length; ) {
                        var scope = linkQueue.shift(), beforeTemplateLinkNode = linkQueue.shift(), linkRootElement = linkQueue.shift(), boundTranscludeFn = linkQueue.shift(), linkNode = $compileNode[0];
                        if (!scope.$$destroyed) {
                            if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                                var oldClasses = beforeTemplateLinkNode.className;
                                previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace || (linkNode = jqLiteClone(compileNode)), 
                                replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode), safeAddClass(jqLite(linkNode), oldClasses);
                            }
                            childBoundTranscludeFn = afterTemplateNodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn) : boundTranscludeFn, 
                            afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
                        }
                    }
                    linkQueue = null;
                }), function(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
                    var childBoundTranscludeFn = boundTranscludeFn;
                    scope.$$destroyed || (linkQueue ? linkQueue.push(scope, node, rootElement, childBoundTranscludeFn) : (afterTemplateNodeLinkFn.transcludeOnThisElement && (childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn)), 
                    afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn)));
                };
            }
            function byPriority(a, b) {
                var diff = b.priority - a.priority;
                return 0 !== diff ? diff : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function assertNoDuplicate(what, previousDirective, directive, element) {
                function wrapModuleNameIfDefined(moduleName) {
                    return moduleName ? " (module: " + moduleName + ")" : "";
                }
                if (previousDirective) throw $compileMinErr("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", previousDirective.name, wrapModuleNameIfDefined(previousDirective.$$moduleName), directive.name, wrapModuleNameIfDefined(directive.$$moduleName), what, startingTag(element));
            }
            function addTextInterpolateDirective(directives, text) {
                var interpolateFn = $interpolate(text, !0);
                interpolateFn && directives.push({
                    priority: 0,
                    compile: function(templateNode) {
                        var templateNodeParent = templateNode.parent(), hasCompileParent = !!templateNodeParent.length;
                        return hasCompileParent && compile.$$addBindingClass(templateNodeParent), function(scope, node) {
                            var parent = node.parent();
                            hasCompileParent || compile.$$addBindingClass(parent), compile.$$addBindingInfo(parent, interpolateFn.expressions), 
                            scope.$watch(interpolateFn, function(value) {
                                node[0].nodeValue = value;
                            });
                        };
                    }
                });
            }
            function wrapTemplate(type, template) {
                switch (type = lowercase(type || "html")) {
                  case "svg":
                  case "math":
                    var wrapper = window.document.createElement("div");
                    return wrapper.innerHTML = "<" + type + ">" + template + "</" + type + ">", wrapper.childNodes[0].childNodes;

                  default:
                    return template;
                }
            }
            function getTrustedContext(node, attrNormalizedName) {
                if ("srcdoc" == attrNormalizedName) return $sce.HTML;
                var tag = nodeName_(node);
                return "xlinkHref" == attrNormalizedName || "form" == tag && "action" == attrNormalizedName || "img" != tag && ("src" == attrNormalizedName || "ngSrc" == attrNormalizedName) ? $sce.RESOURCE_URL : void 0;
            }
            function addAttrInterpolateDirective(node, directives, value, name, allOrNothing) {
                var trustedContext = getTrustedContext(node, name);
                allOrNothing = ALL_OR_NOTHING_ATTRS[name] || allOrNothing;
                var interpolateFn = $interpolate(value, !0, trustedContext, allOrNothing);
                if (interpolateFn) {
                    if ("multiple" === name && "select" === nodeName_(node)) throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
                    directives.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(scope, element, attr) {
                                    var $$observers = attr.$$observers || (attr.$$observers = createMap());
                                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) throw $compileMinErr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var newValue = attr[name];
                                    newValue !== value && (interpolateFn = newValue && $interpolate(newValue, !0, trustedContext, allOrNothing), 
                                    value = newValue), interpolateFn && (attr[name] = interpolateFn(scope), ($$observers[name] || ($$observers[name] = [])).$$inter = !0, 
                                    (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function(newValue, oldValue) {
                                        "class" === name && newValue != oldValue ? attr.$updateClass(newValue, oldValue) : attr.$set(name, newValue);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function replaceWith($rootElement, elementsToRemove, newNode) {
                var i, ii, firstElementToRemove = elementsToRemove[0], removeCount = elementsToRemove.length, parent = firstElementToRemove.parentNode;
                if ($rootElement) for (i = 0, ii = $rootElement.length; ii > i; i++) if ($rootElement[i] == firstElementToRemove) {
                    $rootElement[i++] = newNode;
                    for (var j = i, j2 = j + removeCount - 1, jj = $rootElement.length; jj > j; j++, 
                    j2++) jj > j2 ? $rootElement[j] = $rootElement[j2] : delete $rootElement[j];
                    $rootElement.length -= removeCount - 1, $rootElement.context === firstElementToRemove && ($rootElement.context = newNode);
                    break;
                }
                parent && parent.replaceChild(newNode, firstElementToRemove);
                var fragment = window.document.createDocumentFragment();
                for (i = 0; removeCount > i; i++) fragment.appendChild(elementsToRemove[i]);
                for (jqLite.hasData(firstElementToRemove) && (jqLite.data(newNode, jqLite.data(firstElementToRemove)), 
                jqLite(firstElementToRemove).off("$destroy")), jqLite.cleanData(fragment.querySelectorAll("*")), 
                i = 1; removeCount > i; i++) delete elementsToRemove[i];
                elementsToRemove[0] = newNode, elementsToRemove.length = 1;
            }
            function cloneAndAnnotateFn(fn, annotation) {
                return extend(function() {
                    return fn.apply(null, arguments);
                }, fn, annotation);
            }
            function invokeLinkFn(linkFn, scope, $element, attrs, controllers, transcludeFn) {
                try {
                    linkFn(scope, $element, attrs, controllers, transcludeFn);
                } catch (e) {
                    $exceptionHandler(e, startingTag($element));
                }
            }
            function initializeDirectiveBindings(scope, attrs, destination, bindings, directive) {
                function recordChanges(key, currentValue, previousValue) {
                    isFunction(destination.$onChanges) && currentValue !== previousValue && (onChangesQueue || (scope.$$postDigest(flushOnChangesQueue), 
                    onChangesQueue = []), changes || (changes = {}, onChangesQueue.push(triggerOnChangesHook)), 
                    changes[key] && (previousValue = changes[key].previousValue), changes[key] = new SimpleChange(previousValue, currentValue));
                }
                function triggerOnChangesHook() {
                    destination.$onChanges(changes), changes = void 0;
                }
                var changes, removeWatchCollection = [], initialChanges = {};
                return forEach(bindings, function(definition, scopeName) {
                    var lastValue, parentGet, parentSet, compare, removeWatch, attrName = definition.attrName, optional = definition.optional, mode = definition.mode;
                    switch (mode) {
                      case "@":
                        optional || hasOwnProperty.call(attrs, attrName) || (destination[scopeName] = attrs[attrName] = void 0), 
                        attrs.$observe(attrName, function(value) {
                            if (isString(value) || isBoolean(value)) {
                                var oldValue = destination[scopeName];
                                recordChanges(scopeName, value, oldValue), destination[scopeName] = value;
                            }
                        }), attrs.$$observers[attrName].$$scope = scope, lastValue = attrs[attrName], isString(lastValue) ? destination[scopeName] = $interpolate(lastValue)(scope) : isBoolean(lastValue) && (destination[scopeName] = lastValue), 
                        initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]);
                        break;

                      case "=":
                        if (!hasOwnProperty.call(attrs, attrName)) {
                            if (optional) break;
                            attrs[attrName] = void 0;
                        }
                        if (optional && !attrs[attrName]) break;
                        parentGet = $parse(attrs[attrName]), compare = parentGet.literal ? equals : function(a, b) {
                            return a === b || a !== a && b !== b;
                        }, parentSet = parentGet.assign || function() {
                            throw lastValue = destination[scopeName] = parentGet(scope), $compileMinErr("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", attrs[attrName], attrName, directive.name);
                        }, lastValue = destination[scopeName] = parentGet(scope);
                        var parentValueWatch = function(parentValue) {
                            return compare(parentValue, destination[scopeName]) || (compare(parentValue, lastValue) ? parentSet(scope, parentValue = destination[scopeName]) : destination[scopeName] = parentValue), 
                            lastValue = parentValue;
                        };
                        parentValueWatch.$stateful = !0, removeWatch = definition.collection ? scope.$watchCollection(attrs[attrName], parentValueWatch) : scope.$watch($parse(attrs[attrName], parentValueWatch), null, parentGet.literal), 
                        removeWatchCollection.push(removeWatch);
                        break;

                      case "<":
                        if (!hasOwnProperty.call(attrs, attrName)) {
                            if (optional) break;
                            attrs[attrName] = void 0;
                        }
                        if (optional && !attrs[attrName]) break;
                        parentGet = $parse(attrs[attrName]);
                        var initialValue = destination[scopeName] = parentGet(scope);
                        initialChanges[scopeName] = new SimpleChange(_UNINITIALIZED_VALUE, destination[scopeName]), 
                        removeWatch = scope.$watch(parentGet, function(newValue, oldValue) {
                            if (oldValue === newValue) {
                                if (oldValue === initialValue) return;
                                oldValue = initialValue;
                            }
                            recordChanges(scopeName, newValue, oldValue), destination[scopeName] = newValue;
                        }, parentGet.literal), removeWatchCollection.push(removeWatch);
                        break;

                      case "&":
                        if (parentGet = attrs.hasOwnProperty(attrName) ? $parse(attrs[attrName]) : noop, 
                        parentGet === noop && optional) break;
                        destination[scopeName] = function(locals) {
                            return parentGet(scope, locals);
                        };
                    }
                }), {
                    initialChanges: initialChanges,
                    removeWatches: removeWatchCollection.length && function() {
                        for (var i = 0, ii = removeWatchCollection.length; ii > i; ++i) removeWatchCollection[i]();
                    }
                };
            }
            var onChangesQueue, SIMPLE_ATTR_NAME = /^\w/, specialAttrHolder = window.document.createElement("div"), onChangesTtl = TTL;
            Attributes.prototype = {
                $normalize: directiveNormalize,
                $addClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.addClass(this.$$element, classVal);
                },
                $removeClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.removeClass(this.$$element, classVal);
                },
                $updateClass: function(newClasses, oldClasses) {
                    var toAdd = tokenDifference(newClasses, oldClasses);
                    toAdd && toAdd.length && $animate.addClass(this.$$element, toAdd);
                    var toRemove = tokenDifference(oldClasses, newClasses);
                    toRemove && toRemove.length && $animate.removeClass(this.$$element, toRemove);
                },
                $set: function(key, value, writeAttr, attrName) {
                    var nodeName, node = this.$$element[0], booleanKey = getBooleanAttrName(node, key), aliasedKey = getAliasedAttrName(key), observer = key;
                    if (booleanKey ? (this.$$element.prop(key, value), attrName = booleanKey) : aliasedKey && (this[aliasedKey] = value, 
                    observer = aliasedKey), this[key] = value, attrName ? this.$attr[key] = attrName : (attrName = this.$attr[key], 
                    attrName || (this.$attr[key] = attrName = snake_case(key, "-"))), nodeName = nodeName_(this.$$element), 
                    "a" === nodeName && ("href" === key || "xlinkHref" === key) || "img" === nodeName && "src" === key) this[key] = value = $$sanitizeUri(value, "src" === key); else if ("img" === nodeName && "srcset" === key && isDefined(value)) {
                        for (var result = "", trimmedSrcset = trim(value), srcPattern = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, pattern = /\s/.test(trimmedSrcset) ? srcPattern : /(,)/, rawUris = trimmedSrcset.split(pattern), nbrUrisWith2parts = Math.floor(rawUris.length / 2), i = 0; nbrUrisWith2parts > i; i++) {
                            var innerIdx = 2 * i;
                            result += $$sanitizeUri(trim(rawUris[innerIdx]), !0), result += " " + trim(rawUris[innerIdx + 1]);
                        }
                        var lastTuple = trim(rawUris[2 * i]).split(/\s/);
                        result += $$sanitizeUri(trim(lastTuple[0]), !0), 2 === lastTuple.length && (result += " " + trim(lastTuple[1])), 
                        this[key] = value = result;
                    }
                    writeAttr !== !1 && (null === value || isUndefined(value) ? this.$$element.removeAttr(attrName) : SIMPLE_ATTR_NAME.test(attrName) ? this.$$element.attr(attrName, value) : setSpecialAttr(this.$$element[0], attrName, value));
                    var $$observers = this.$$observers;
                    $$observers && forEach($$observers[observe