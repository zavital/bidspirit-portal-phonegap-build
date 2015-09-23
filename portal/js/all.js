/**
 * @license AngularJS v1.2.16
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * @license AngularJS v1.2.17
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/**
 * @license Copyright 2013 Logentries.
 * Please view license at https://raw.github.com/logentries/le_js/master/LICENSE
 */

/**
 * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

function getServiceForDebug(serviceName) {
    return angular.element(document.body).injector().get(serviceName);
}

function getServiceForDebug(serviceName) {
    return angular.element(document.body).injector().get(serviceName);
}

!function(window, document, undefined) {
    function minErr(module) {
        return function() {
            var message, i, code = arguments[0], prefix = "[" + (module ? module + ":" : "") + code + "] ", template = arguments[1], templateArgs = arguments, stringify = function(obj) {
                return "function" == typeof obj ? obj.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof obj ? "undefined" : "string" != typeof obj ? JSON.stringify(obj) : obj;
            };
            for (message = prefix + template.replace(/\{\d+\}/g, function(match) {
                var arg, index = +match.slice(1, -1);
                return index + 2 < templateArgs.length ? (arg = templateArgs[index + 2], "function" == typeof arg ? arg.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof arg ? "undefined" : "string" != typeof arg ? toJson(arg) : arg) : match;
            }), message = message + "\nhttp://errors.angularjs.org/1.2.16/" + (module ? module + "/" : "") + code, 
            i = 2; i < arguments.length; i++) message = message + (2 == i ? "?" : "&") + "p" + (i - 2) + "=" + encodeURIComponent(stringify(arguments[i]));
            return new Error(message);
        };
    }
    function isArrayLike(obj) {
        if (null == obj || isWindow(obj)) return !1;
        var length = obj.length;
        return 1 === obj.nodeType && length ? !0 : isString(obj) || isArray(obj) || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj;
    }
    function forEach(obj, iterator, context) {
        var key;
        if (obj) if (isFunction(obj)) for (key in obj) "prototype" == key || "length" == key || "name" == key || obj.hasOwnProperty && !obj.hasOwnProperty(key) || iterator.call(context, obj[key], key); else if (obj.forEach && obj.forEach !== forEach) obj.forEach(iterator, context); else if (isArrayLike(obj)) for (key = 0; key < obj.length; key++) iterator.call(context, obj[key], key); else for (key in obj) obj.hasOwnProperty(key) && iterator.call(context, obj[key], key);
        return obj;
    }
    function sortedKeys(obj) {
        var keys = [];
        for (var key in obj) obj.hasOwnProperty(key) && keys.push(key);
        return keys.sort();
    }
    function forEachSorted(obj, iterator, context) {
        for (var keys = sortedKeys(obj), i = 0; i < keys.length; i++) iterator.call(context, obj[keys[i]], keys[i]);
        return keys;
    }
    function reverseParams(iteratorFn) {
        return function(value, key) {
            iteratorFn(key, value);
        };
    }
    function nextUid() {
        for (var digit, index = uid.length; index; ) {
            if (index--, digit = uid[index].charCodeAt(0), 57 == digit) return uid[index] = "A", 
            uid.join("");
            if (90 != digit) return uid[index] = String.fromCharCode(digit + 1), uid.join("");
            uid[index] = "0";
        }
        return uid.unshift("0"), uid.join("");
    }
    function setHashKey(obj, h) {
        h ? obj.$$hashKey = h : delete obj.$$hashKey;
    }
    function extend(dst) {
        var h = dst.$$hashKey;
        return forEach(arguments, function(obj) {
            obj !== dst && forEach(obj, function(value, key) {
                dst[key] = value;
            });
        }), setHashKey(dst, h), dst;
    }
    function int(str) {
        return parseInt(str, 10);
    }
    function inherit(parent, extra) {
        return extend(new (extend(function() {}, {
            prototype: parent
        }))(), extra);
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
    function isUndefined(value) {
        return "undefined" == typeof value;
    }
    function isDefined(value) {
        return "undefined" != typeof value;
    }
    function isObject(value) {
        return null != value && "object" == typeof value;
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
    function isArray(value) {
        return "[object Array]" === toString.call(value);
    }
    function isFunction(value) {
        return "function" == typeof value;
    }
    function isRegExp(value) {
        return "[object RegExp]" === toString.call(value);
    }
    function isWindow(obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    }
    function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }
    function isFile(obj) {
        return "[object File]" === toString.call(obj);
    }
    function isBlob(obj) {
        return "[object Blob]" === toString.call(obj);
    }
    function isElement(node) {
        return !(!node || !(node.nodeName || node.prop && node.attr && node.find));
    }
    function map(obj, iterator, context) {
        var results = [];
        return forEach(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        }), results;
    }
    function includes(array, obj) {
        return -1 != indexOf(array, obj);
    }
    function indexOf(array, obj) {
        if (array.indexOf) return array.indexOf(obj);
        for (var i = 0; i < array.length; i++) if (obj === array[i]) return i;
        return -1;
    }
    function arrayRemove(array, value) {
        var index = indexOf(array, value);
        return index >= 0 && array.splice(index, 1), value;
    }
    function copy(source, destination) {
        if (isWindow(source) || isScope(source)) throw ngMinErr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (destination) {
            if (source === destination) throw ngMinErr("cpi", "Can't copy! Source and destination are identical.");
            if (isArray(source)) {
                destination.length = 0;
                for (var i = 0; i < source.length; i++) destination.push(copy(source[i]));
            } else {
                var h = destination.$$hashKey;
                forEach(destination, function(value, key) {
                    delete destination[key];
                });
                for (var key in source) destination[key] = copy(source[key]);
                setHashKey(destination, h);
            }
        } else destination = source, source && (isArray(source) ? destination = copy(source, []) : isDate(source) ? destination = new Date(source.getTime()) : isRegExp(source) ? destination = new RegExp(source.source) : isObject(source) && (destination = copy(source, {})));
        return destination;
    }
    function shallowCopy(src, dst) {
        dst = dst || {};
        for (var key in src) !src.hasOwnProperty(key) || "$" === key.charAt(0) && "$" === key.charAt(1) || (dst[key] = src[key]);
        return dst;
    }
    function equals(o1, o2) {
        if (o1 === o2) return !0;
        if (null === o1 || null === o2) return !1;
        if (o1 !== o1 && o2 !== o2) return !0;
        var length, key, keySet, t1 = typeof o1, t2 = typeof o2;
        if (t1 == t2 && "object" == t1) {
            if (!isArray(o1)) {
                if (isDate(o1)) return isDate(o2) && o1.getTime() == o2.getTime();
                if (isRegExp(o1) && isRegExp(o2)) return o1.toString() == o2.toString();
                if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2)) return !1;
                keySet = {};
                for (key in o1) if ("$" !== key.charAt(0) && !isFunction(o1[key])) {
                    if (!equals(o1[key], o2[key])) return !1;
                    keySet[key] = !0;
                }
                for (key in o2) if (!keySet.hasOwnProperty(key) && "$" !== key.charAt(0) && o2[key] !== undefined && !isFunction(o2[key])) return !1;
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
    function csp() {
        return document.securityPolicy && document.securityPolicy.isActive || document.querySelector && !(!document.querySelector("[ng-csp]") && !document.querySelector("[data-ng-csp]"));
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
            return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
        } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
        };
    }
    function toJsonReplacer(key, value) {
        var val = value;
        return "string" == typeof key && "$" === key.charAt(0) ? val = undefined : isWindow(value) ? val = "$WINDOW" : value && document === value ? val = "$DOCUMENT" : isScope(value) && (val = "$SCOPE"), 
        val;
    }
    function toJson(obj, pretty) {
        return "undefined" == typeof obj ? undefined : JSON.stringify(obj, toJsonReplacer, pretty ? "  " : null);
    }
    function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
    }
    function toBoolean(value) {
        if ("function" == typeof value) value = !0; else if (value && 0 !== value.length) {
            var v = lowercase("" + value);
            value = !("f" == v || "0" == v || "false" == v || "no" == v || "n" == v || "[]" == v);
        } else value = !1;
        return value;
    }
    function startingTag(element) {
        element = jqLite(element).clone();
        try {
            element.empty();
        } catch (e) {}
        var TEXT_NODE = 3, elemHtml = jqLite("<div>").append(element).html();
        try {
            return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
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
        var key_value, key, obj = {};
        return forEach((keyValue || "").split("&"), function(keyValue) {
            if (keyValue && (key_value = keyValue.split("="), key = tryDecodeURIComponent(key_value[0]), 
            isDefined(key))) {
                var val = isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : !0;
                obj[key] ? isArray(obj[key]) ? obj[key].push(val) : obj[key] = [ obj[key], val ] : obj[key] = val;
            }
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
        return encodeUriQuery(val, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
    }
    function angularInit(element, bootstrap) {
        function append(element) {
            element && elements.push(element);
        }
        var appElement, module, elements = [ element ], names = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        forEach(names, function(name) {
            names[name] = !0, append(document.getElementById(name)), name = name.replace(":", "\\:"), 
            element.querySelectorAll && (forEach(element.querySelectorAll("." + name), append), 
            forEach(element.querySelectorAll("." + name + "\\:"), append), forEach(element.querySelectorAll("[" + name + "]"), append));
        }), forEach(elements, function(element) {
            if (!appElement) {
                var className = " " + element.className + " ", match = NG_APP_CLASS_REGEXP.exec(className);
                match ? (appElement = element, module = (match[2] || "").replace(/\s+/g, ",")) : forEach(element.attributes, function(attr) {
                    !appElement && names[attr.name] && (appElement = element, module = attr.value);
                });
            }
        }), appElement && bootstrap(appElement, module ? [ module ] : []);
    }
    function bootstrap(element, modules) {
        var doBootstrap = function() {
            if (element = jqLite(element), element.injector()) {
                var tag = element[0] === document ? "document" : startingTag(element);
                throw ngMinErr("btstrpd", "App Already Bootstrapped with this Element '{0}'", tag);
            }
            modules = modules || [], modules.unshift([ "$provide", function($provide) {
                $provide.value("$rootElement", element);
            } ]), modules.unshift("ng");
            var injector = createInjector(modules);
            return injector.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(scope, element, compile, injector) {
                scope.$apply(function() {
                    element.data("$injector", injector), compile(element)(scope);
                });
            } ]), injector;
        }, NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        return window && !NG_DEFER_BOOTSTRAP.test(window.name) ? doBootstrap() : (window.name = window.name.replace(NG_DEFER_BOOTSTRAP, ""), 
        void (angular.resumeBootstrap = function(extraModules) {
            forEach(extraModules, function(module) {
                modules.push(module);
            }), doBootstrap();
        }));
    }
    function snake_case(name, separator) {
        return separator = separator || "_", name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    function bindJQuery() {
        jQuery = window.jQuery, jQuery ? (jqLite = jQuery, extend(jQuery.fn, {
            scope: JQLitePrototype.scope,
            isolateScope: JQLitePrototype.isolateScope,
            controller: JQLitePrototype.controller,
            injector: JQLitePrototype.injector,
            inheritedData: JQLitePrototype.inheritedData
        }), jqLitePatchJQueryRemove("remove", !0, !0, !1), jqLitePatchJQueryRemove("empty", !1, !1, !1), 
        jqLitePatchJQueryRemove("html", !1, !1, !0)) : jqLite = JQLite, angular.element = jqLite;
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
    function getBlockElements(nodes) {
        var startNode = nodes[0], endNode = nodes[nodes.length - 1];
        if (startNode === endNode) return jqLite(startNode);
        var element = startNode, elements = [ element ];
        do {
            if (element = element.nextSibling, !element) break;
            elements.push(element);
        } while (element !== endNode);
        return jqLite(elements);
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
                    function invokeLater(provider, method, insertMethod) {
                        return function() {
                            return invokeQueue[insertMethod || "push"]([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    if (!requires) throw $injectorMinErr("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", name);
                    var invokeQueue = [], runBlocks = [], config = invokeLater("$injector", "invoke"), moduleInstance = {
                        _invokeQueue: invokeQueue,
                        _runBlocks: runBlocks,
                        requires: requires,
                        name: name,
                        provider: invokeLater("$provide", "provider"),
                        factory: invokeLater("$provide", "factory"),
                        service: invokeLater("$provide", "service"),
                        value: invokeLater("$provide", "value"),
                        constant: invokeLater("$provide", "constant", "unshift"),
                        animation: invokeLater("$animateProvider", "register"),
                        filter: invokeLater("$filterProvider", "register"),
                        controller: invokeLater("$controllerProvider", "register"),
                        directive: invokeLater("$compileProvider", "directive"),
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
    function publishExternalAPI(angular) {
        extend(angular, {
            bootstrap: bootstrap,
            copy: copy,
            extend: extend,
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
                counter: 0
            },
            $$minErr: minErr,
            $$csp: csp
        }), angularModule = setupModuleLoader(window);
        try {
            angularModule("ngLocale");
        } catch (e) {
            angularModule("ngLocale", []).provider("$locale", $LocaleProvider);
        }
        angularModule("ng", [ "ngLocale" ], [ "$provide", function($provide) {
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
                required: requiredDirective,
                ngRequired: requiredDirective,
                ngValue: ngValueDirective
            }).directive({
                ngInclude: ngIncludeFillContentDirective
            }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives), $provide.provider({
                $anchorScroll: $AnchorScrollProvider,
                $animate: $AnimateProvider,
                $browser: $BrowserProvider,
                $cacheFactory: $CacheFactoryProvider,
                $controller: $ControllerProvider,
                $document: $DocumentProvider,
                $exceptionHandler: $ExceptionHandlerProvider,
                $filter: $FilterProvider,
                $interpolate: $InterpolateProvider,
                $interval: $IntervalProvider,
                $http: $HttpProvider,
                $httpBackend: $HttpBackendProvider,
                $location: $LocationProvider,
                $log: $LogProvider,
                $parse: $ParseProvider,
                $rootScope: $RootScopeProvider,
                $q: $QProvider,
                $sce: $SceProvider,
                $sceDelegate: $SceDelegateProvider,
                $sniffer: $SnifferProvider,
                $templateCache: $TemplateCacheProvider,
                $timeout: $TimeoutProvider,
                $window: $WindowProvider,
                $$rAF: $$RAFProvider,
                $$asyncCallback: $$AsyncCallbackProvider
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
    function jqLitePatchJQueryRemove(name, dispatchThis, filterElems, getterIfNoArguments) {
        function removePatch(param) {
            var set, setIndex, setLength, element, childIndex, childLength, children, list = filterElems && param ? [ this.filter(param) ] : [ this ], fireEvent = dispatchThis;
            if (!getterIfNoArguments || null != param) for (;list.length; ) for (set = list.shift(), 
            setIndex = 0, setLength = set.length; setLength > setIndex; setIndex++) for (element = jqLite(set[setIndex]), 
            fireEvent ? element.triggerHandler("$destroy") : fireEvent = !fireEvent, childIndex = 0, 
            childLength = (children = element.children()).length; childLength > childIndex; childIndex++) list.push(jQuery(children[childIndex]));
            return originalJqFn.apply(this, arguments);
        }
        var originalJqFn = jQuery.fn[name];
        originalJqFn = originalJqFn.$original || originalJqFn, removePatch.$original = originalJqFn, 
        jQuery.fn[name] = removePatch;
    }
    function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
    }
    function jqLiteBuildFragment(html, context) {
        var tmp, tag, wrap, i, j, jj, fragment = context.createDocumentFragment(), nodes = [];
        if (jqLiteIsTextNode(html)) nodes.push(context.createTextNode(html)); else {
            for (tmp = fragment.appendChild(context.createElement("div")), tag = (TAG_NAME_REGEXP.exec(html) || [ "", "" ])[1].toLowerCase(), 
            wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = "<div>&#160;</div>" + wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2], 
            tmp.removeChild(tmp.firstChild), i = wrap[0]; i--; ) tmp = tmp.lastChild;
            for (j = 0, jj = tmp.childNodes.length; jj > j; ++j) nodes.push(tmp.childNodes[j]);
            tmp = fragment.firstChild, tmp.textContent = "";
        }
        return fragment.textContent = "", fragment.innerHTML = "", nodes;
    }
    function jqLiteParseHTML(html, context) {
        context = context || document;
        var parsed;
        return (parsed = SINGLE_TAG_REGEXP.exec(html)) ? [ context.createElement(parsed[1]) ] : jqLiteBuildFragment(html, context);
    }
    function JQLite(element) {
        if (element instanceof JQLite) return element;
        if (isString(element) && (element = trim(element)), !(this instanceof JQLite)) {
            if (isString(element) && "<" != element.charAt(0)) throw jqLiteMinErr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new JQLite(element);
        }
        if (isString(element)) {
            jqLiteAddNodes(this, jqLiteParseHTML(element));
            var fragment = jqLite(document.createDocumentFragment());
            fragment.append(this);
        } else jqLiteAddNodes(this, element);
    }
    function jqLiteClone(element) {
        return element.cloneNode(!0);
    }
    function jqLiteDealoc(element) {
        jqLiteRemoveData(element);
        for (var i = 0, children = element.childNodes || []; i < children.length; i++) jqLiteDealoc(children[i]);
    }
    function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported)) throw jqLiteMinErr("offargs", "jqLite#off() does not support the `selector` argument");
        var events = jqLiteExpandoStore(element, "events"), handle = jqLiteExpandoStore(element, "handle");
        handle && (isUndefined(type) ? forEach(events, function(eventHandler, type) {
            removeEventListenerFn(element, type, eventHandler), delete events[type];
        }) : forEach(type.split(" "), function(type) {
            isUndefined(fn) ? (removeEventListenerFn(element, type, events[type]), delete events[type]) : arrayRemove(events[type] || [], fn);
        }));
    }
    function jqLiteRemoveData(element, name) {
        var expandoId = element[jqName], expandoStore = jqCache[expandoId];
        if (expandoStore) {
            if (name) return void delete jqCache[expandoId].data[name];
            expandoStore.handle && (expandoStore.events.$destroy && expandoStore.handle({}, "$destroy"), 
            jqLiteOff(element)), delete jqCache[expandoId], element[jqName] = undefined;
        }
    }
    function jqLiteExpandoStore(element, key, value) {
        var expandoId = element[jqName], expandoStore = jqCache[expandoId || -1];
        return isDefined(value) ? (expandoStore || (element[jqName] = expandoId = jqNextId(), 
        expandoStore = jqCache[expandoId] = {}), void (expandoStore[key] = value)) : expandoStore && expandoStore[key];
    }
    function jqLiteData(element, key, value) {
        var data = jqLiteExpandoStore(element, "data"), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
        if (data || isSimpleGetter || jqLiteExpandoStore(element, "data", data = {}), isSetter) data[key] = value; else {
            if (!keyDefined) return data;
            if (isSimpleGetter) return data && data[key];
            extend(data, key);
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
        if (elements) {
            elements = elements.nodeName || !isDefined(elements.length) || isWindow(elements) ? [ elements ] : elements;
            for (var i = 0; i < elements.length; i++) root.push(elements[i]);
        }
    }
    function jqLiteController(element, name) {
        return jqLiteInheritedData(element, "$" + (name || "ngController") + "Controller");
    }
    function jqLiteInheritedData(element, name, value) {
        element = jqLite(element), 9 == element[0].nodeType && (element = element.find("html"));
        for (var names = isArray(name) ? name : [ name ]; element.length; ) {
            for (var node = element[0], i = 0, ii = names.length; ii > i; i++) if ((value = element.data(names[i])) !== undefined) return value;
            element = jqLite(node.parentNode || 11 === node.nodeType && node.host);
        }
    }
    function jqLiteEmpty(element) {
        for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) jqLiteDealoc(childNodes[i]);
        for (;element.firstChild; ) element.removeChild(element.firstChild);
    }
    function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
    }
    function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
            if (event.preventDefault || (event.preventDefault = function() {
                event.returnValue = !1;
            }), event.stopPropagation || (event.stopPropagation = function() {
                event.cancelBubble = !0;
            }), event.target || (event.target = event.srcElement || document), isUndefined(event.defaultPrevented)) {
                var prevent = event.preventDefault;
                event.preventDefault = function() {
                    event.defaultPrevented = !0, prevent.call(event);
                }, event.defaultPrevented = !1;
            }
            event.isDefaultPrevented = function() {
                return event.defaultPrevented || event.returnValue === !1;
            };
            var eventHandlersCopy = shallowCopy(events[type || event.type] || []);
            forEach(eventHandlersCopy, function(fn) {
                fn.call(element, event);
            }), 8 >= msie ? (event.preventDefault = null, event.stopPropagation = null, event.isDefaultPrevented = null) : (delete event.preventDefault, 
            delete event.stopPropagation, delete event.isDefaultPrevented);
        };
        return eventHandler.elem = element, eventHandler;
    }
    function hashKey(obj) {
        var key, objType = typeof obj;
        return "object" == objType && null !== obj ? "function" == typeof (key = obj.$$hashKey) ? key = obj.$$hashKey() : key === undefined && (key = obj.$$hashKey = nextUid()) : key = obj, 
        objType + ":" + key;
    }
    function HashMap(array) {
        forEach(array, this.put, this);
    }
    function annotate(fn) {
        var $inject, fnText, argDecl, last;
        return "function" == typeof fn ? ($inject = fn.$inject) || ($inject = [], fn.length && (fnText = fn.toString().replace(STRIP_COMMENTS, ""), 
        argDecl = fnText.match(FN_ARGS), forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
            arg.replace(FN_ARG, function(all, underscore, name) {
                $inject.push(name);
            });
        })), fn.$inject = $inject) : isArray(fn) ? (last = fn.length - 1, assertArgFn(fn[last], "fn"), 
        $inject = fn.slice(0, last)) : assertArgFn(fn, "fn", !0), $inject;
    }
    function createInjector(modulesToLoad) {
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
        function factory(name, factoryFn) {
            return provider(name, {
                $get: factoryFn
            });
        }
        function service(name, constructor) {
            return factory(name, [ "$injector", function($injector) {
                return $injector.instantiate(constructor);
            } ]);
        }
        function value(name, val) {
            return factory(name, valueFn(val));
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
            var moduleFn, invokeQueue, i, ii, runBlocks = [];
            return forEach(modulesToLoad, function(module) {
                if (!loadedModules.get(module)) {
                    loadedModules.put(module, !0);
                    try {
                        if (isString(module)) for (moduleFn = angularModule(module), runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks), 
                        invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; ii > i; i++) {
                            var invokeArgs = invokeQueue[i], provider = providerInjector.get(invokeArgs[0]);
                            provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                        } else isFunction(module) ? runBlocks.push(providerInjector.invoke(module)) : isArray(module) ? runBlocks.push(providerInjector.invoke(module)) : assertArgFn(module, "module");
                    } catch (e) {
                        throw isArray(module) && (module = module[module.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        $injectorMinErr("modulerr", "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
                    }
                }
            }), runBlocks;
        }
        function createInternalInjector(cache, factory) {
            function getService(serviceName) {
                if (cache.hasOwnProperty(serviceName)) {
                    if (cache[serviceName] === INSTANTIATING) throw $injectorMinErr("cdep", "Circular dependency found: {0}", path.join(" <- "));
                    return cache[serviceName];
                }
                try {
                    return path.unshift(serviceName), cache[serviceName] = INSTANTIATING, cache[serviceName] = factory(serviceName);
                } catch (err) {
                    throw cache[serviceName] === INSTANTIATING && delete cache[serviceName], err;
                } finally {
                    path.shift();
                }
            }
            function invoke(fn, self, locals) {
                var length, i, key, args = [], $inject = annotate(fn);
                for (i = 0, length = $inject.length; length > i; i++) {
                    if (key = $inject[i], "string" != typeof key) throw $injectorMinErr("itkn", "Incorrect injection token! Expected service name as string, got {0}", key);
                    args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
                }
                return fn.$inject || (fn = fn[length]), fn.apply(self, args);
            }
            function instantiate(Type, locals) {
                var instance, returnedValue, Constructor = function() {};
                return Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype, 
                instance = new Constructor(), returnedValue = invoke(Type, instance, locals), isObject(returnedValue) || isFunction(returnedValue) ? returnedValue : instance;
            }
            return {
                invoke: invoke,
                instantiate: instantiate,
                get: getService,
                annotate: annotate,
                has: function(name) {
                    return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
                }
            };
        }
        var INSTANTIATING = {}, providerSuffix = "Provider", path = [], loadedModules = new HashMap(), providerCache = {
            $provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
            }
        }, providerInjector = providerCache.$injector = createInternalInjector(providerCache, function() {
            throw $injectorMinErr("unpr", "Unknown provider: {0}", path.join(" <- "));
        }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function(servicename) {
            var provider = providerInjector.get(servicename + providerSuffix);
            return instanceInjector.invoke(provider.$get, provider);
        });
        return forEach(loadModules(modulesToLoad), function(fn) {
            instanceInjector.invoke(fn || noop);
        }), instanceInjector;
    }
    function $AnchorScrollProvider() {
        var autoScrollingEnabled = !0;
        this.disableAutoScrolling = function() {
            autoScrollingEnabled = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function($window, $location, $rootScope) {
            function getFirstAnchor(list) {
                var result = null;
                return forEach(list, function(element) {
                    result || "a" !== lowercase(element.nodeName) || (result = element);
                }), result;
            }
            function scroll() {
                var elm, hash = $location.hash();
                hash ? (elm = document.getElementById(hash)) ? elm.scrollIntoView() : (elm = getFirstAnchor(document.getElementsByName(hash))) ? elm.scrollIntoView() : "top" === hash && $window.scrollTo(0, 0) : $window.scrollTo(0, 0);
            }
            var document = $window.document;
            return autoScrollingEnabled && $rootScope.$watch(function() {
                return $location.hash();
            }, function() {
                $rootScope.$evalAsync(scroll);
            }), scroll;
        } ];
    }
    function $$AsyncCallbackProvider() {
        this.$get = [ "$$rAF", "$timeout", function($$rAF, $timeout) {
            return $$rAF.supported ? function(fn) {
                return $$rAF(fn);
            } : function(fn) {
                return $timeout(fn, 0, !1);
            };
        } ];
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
        function startPoller(interval, setTimeout) {
            !function check() {
                forEach(pollFns, function(pollFn) {
                    pollFn();
                }), pollTimeout = setTimeout(check, interval);
            }();
        }
        function fireUrlChange() {
            newLocation = null, lastBrowserUrl != self.url() && (lastBrowserUrl = self.url(), 
            forEach(urlChangeListeners, function(listener) {
                listener(self.url());
            }));
        }
        var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
        self.isMock = !1;
        var outstandingRequestCount = 0, outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest, self.$$incOutstandingRequestCount = function() {
            outstandingRequestCount++;
        }, self.notifyWhenNoOutstandingRequests = function(callback) {
            forEach(pollFns, function(pollFn) {
                pollFn();
            }), 0 === outstandingRequestCount ? callback() : outstandingRequestCallbacks.push(callback);
        };
        var pollTimeout, pollFns = [];
        self.addPollFn = function(fn) {
            return isUndefined(pollTimeout) && startPoller(100, setTimeout), pollFns.push(fn), 
            fn;
        };
        var lastBrowserUrl = location.href, baseElement = document.find("base"), newLocation = null;
        self.url = function(url, replace) {
            if (location !== window.location && (location = window.location), history !== window.history && (history = window.history), 
            url) {
                if (lastBrowserUrl == url) return;
                return lastBrowserUrl = url, $sniffer.history ? replace ? history.replaceState(null, "", url) : (history.pushState(null, "", url), 
                baseElement.attr("href", baseElement.attr("href"))) : (newLocation = url, replace ? location.replace(url) : location.href = url), 
                self;
            }
            return newLocation || location.href.replace(/%27/g, "'");
        };
        var urlChangeListeners = [], urlChangeInit = !1;
        self.onUrlChange = function(callback) {
            return urlChangeInit || ($sniffer.history && jqLite(window).on("popstate", fireUrlChange), 
            $sniffer.hashchange ? jqLite(window).on("hashchange", fireUrlChange) : self.addPollFn(fireUrlChange), 
            urlChangeInit = !0), urlChangeListeners.push(callback), callback;
        }, self.baseHref = function() {
            var href = baseElement.attr("href");
            return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var lastCookies = {}, lastCookieString = "", cookiePath = self.baseHref();
        self.cookies = function(name, value) {
            var cookieLength, cookieArray, cookie, i, index;
            if (!name) {
                if (rawDocument.cookie !== lastCookieString) for (lastCookieString = rawDocument.cookie, 
                cookieArray = lastCookieString.split("; "), lastCookies = {}, i = 0; i < cookieArray.length; i++) cookie = cookieArray[i], 
                index = cookie.indexOf("="), index > 0 && (name = unescape(cookie.substring(0, index)), 
                lastCookies[name] === undefined && (lastCookies[name] = unescape(cookie.substring(index + 1))));
                return lastCookies;
            }
            value === undefined ? rawDocument.cookie = escape(name) + "=;path=" + cookiePath + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : isString(value) && (cookieLength = (rawDocument.cookie = escape(name) + "=" + escape(value) + ";path=" + cookiePath).length + 1, 
            cookieLength > 4096 && $log.warn("Cookie '" + name + "' possibly not set or overflowed because it was too large (" + cookieLength + " > 4096 bytes)!"));
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
                }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
                return caches[cacheId] = {
                    put: function(key, value) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key] || (lruHash[key] = {
                                key: key
                            });
                            refresh(lruEntry);
                        }
                        if (!isUndefined(value)) return key in data || size++, data[key] = value, size > capacity && this.remove(staleEnd.key), 
                        value;
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
                        delete data[key], size--;
                    },
                    removeAll: function() {
                        data = {}, size = 0, lruHash = {}, freshEnd = staleEnd = null;
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
    function $CompileProvider($provide, $$sanitizeUriProvider) {
        var hasDirectives = {}, Suffix = "Directive", COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
        this.directive = function registerDirective(name, directiveFactory) {
            return assertNotHasOwnProperty(name, "directive"), isString(name) ? (assertArg(directiveFactory, "directiveFactory"), 
            hasDirectives.hasOwnProperty(name) || (hasDirectives[name] = [], $provide.factory(name + Suffix, [ "$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                var directives = [];
                return forEach(hasDirectives[name], function(directiveFactory, index) {
                    try {
                        var directive = $injector.invoke(directiveFactory);
                        isFunction(directive) ? directive = {
                            compile: valueFn(directive)
                        } : !directive.compile && directive.link && (directive.compile = valueFn(directive.link)), 
                        directive.priority = directive.priority || 0, directive.index = index, directive.name = directive.name || name, 
                        directive.require = directive.require || directive.controller && directive.name, 
                        directive.restrict = directive.restrict || "A", directives.push(directive);
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                }), directives;
            } ])), hasDirectives[name].push(directiveFactory)) : forEach(name, reverseParams(registerDirective)), 
            this;
        }, this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope, $document, $sce, $animate, $$sanitizeUri) {
            function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                $compileNodes instanceof jqLite || ($compileNodes = jqLite($compileNodes)), forEach($compileNodes, function(node, index) {
                    3 == node.nodeType && node.nodeValue.match(/\S+/) && ($compileNodes[index] = node = jqLite(node).wrap("<span></span>").parent()[0]);
                });
                var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
                return safeAddClass($compileNodes, "ng-scope"), function(scope, cloneConnectFn, transcludeControllers) {
                    assertArg(scope, "scope");
                    var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes;
                    forEach(transcludeControllers, function(instance, name) {
                        $linkNode.data("$" + name + "Controller", instance);
                    });
                    for (var i = 0, ii = $linkNode.length; ii > i; i++) {
                        var node = $linkNode[i], nodeType = node.nodeType;
                        (1 === nodeType || 9 === nodeType) && $linkNode.eq(i).data("$scope", scope);
                    }
                    return cloneConnectFn && cloneConnectFn($linkNode, scope), compositeLinkFn && compositeLinkFn(scope, $linkNode, $linkNode), 
                    $linkNode;
                };
            }
            function safeAddClass($element, className) {
                try {
                    $element.addClass(className);
                } catch (e) {}
            }
            function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
                function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
                    var nodeLinkFn, childLinkFn, node, $node, childScope, childTranscludeFn, i, ii, n, nodeListLength = nodeList.length, stableNodeList = new Array(nodeListLength);
                    for (i = 0; nodeListLength > i; i++) stableNodeList[i] = nodeList[i];
                    for (i = 0, n = 0, ii = linkFns.length; ii > i; n++) node = stableNodeList[n], nodeLinkFn = linkFns[i++], 
                    childLinkFn = linkFns[i++], $node = jqLite(node), nodeLinkFn ? (nodeLinkFn.scope ? (childScope = scope.$new(), 
                    $node.data("$scope", childScope)) : childScope = scope, childTranscludeFn = nodeLinkFn.transclude, 
                    childTranscludeFn || !boundTranscludeFn && transcludeFn ? nodeLinkFn(childLinkFn, childScope, node, $rootElement, createBoundTranscludeFn(scope, childTranscludeFn || transcludeFn)) : nodeLinkFn(childLinkFn, childScope, node, $rootElement, boundTranscludeFn)) : childLinkFn && childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
                }
                for (var attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound, linkFns = [], i = 0; i < nodeList.length; i++) attrs = new Attributes(), 
                directives = collectDirectives(nodeList[i], [], attrs, 0 === i ? maxPriority : undefined, ignoreDirective), 
                nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null, 
                nodeLinkFn && nodeLinkFn.scope && safeAddClass(jqLite(nodeList[i]), "ng-scope"), 
                childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length ? null : compileNodes(childNodes, nodeLinkFn ? nodeLinkFn.transclude : transcludeFn), 
                linkFns.push(nodeLinkFn, childLinkFn), linkFnFound = linkFnFound || nodeLinkFn || childLinkFn, 
                previousCompileContext = null;
                return linkFnFound ? compositeLinkFn : null;
            }
            function createBoundTranscludeFn(scope, transcludeFn) {
                return function(transcludedScope, cloneFn, controllers) {
                    var scopeCreated = !1;
                    transcludedScope || (transcludedScope = scope.$new(), transcludedScope.$$transcluded = !0, 
                    scopeCreated = !0);
                    var clone = transcludeFn(transcludedScope, cloneFn, controllers);
                    return scopeCreated && clone.on("$destroy", bind(transcludedScope, transcludedScope.$destroy)), 
                    clone;
                };
            }
            function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                var match, className, nodeType = node.nodeType, attrsMap = attrs.$attr;
                switch (nodeType) {
                  case 1:
                    addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), "E", maxPriority, ignoreDirective);
                    for (var attr, name, nName, ngAttrName, value, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; jj > j; j++) {
                        var attrStartName = !1, attrEndName = !1;
                        if (attr = nAttrs[j], !msie || msie >= 8 || attr.specified) {
                            name = attr.name, ngAttrName = directiveNormalize(name), NG_ATTR_BINDING.test(ngAttrName) && (name = snake_case(ngAttrName.substr(6), "-"));
                            var directiveNName = ngAttrName.replace(/(Start|End)$/, "");
                            ngAttrName === directiveNName + "Start" && (attrStartName = name, attrEndName = name.substr(0, name.length - 5) + "end", 
                            name = name.substr(0, name.length - 6)), nName = directiveNormalize(name.toLowerCase()), 
                            attrsMap[nName] = name, attrs[nName] = value = trim(attr.value), getBooleanAttrName(node, nName) && (attrs[nName] = !0), 
                            addAttrInterpolateDirective(node, directives, value, nName), addDirective(directives, nName, "A", maxPriority, ignoreDirective, attrStartName, attrEndName);
                        }
                    }
                    if (className = node.className, isString(className) && "" !== className) for (;match = CLASS_DIRECTIVE_REGEXP.exec(className); ) nName = directiveNormalize(match[2]), 
                    addDirective(directives, nName, "C", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[3])), 
                    className = className.substr(match.index + match[0].length);
                    break;

                  case 3:
                    addTextInterpolateDirective(directives, node.nodeValue);
                    break;

                  case 8:
                    try {
                        match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue), match && (nName = directiveNormalize(match[1]), 
                        addDirective(directives, nName, "M", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[2])));
                    } catch (e) {}
                }
                return directives.sort(byPriority), directives;
            }
            function groupScan(node, attrStart, attrEnd) {
                var nodes = [], depth = 0;
                if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
                    do {
                        if (!node) throw $compileMinErr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                        1 == node.nodeType && (node.hasAttribute(attrStart) && depth++, node.hasAttribute(attrEnd) && depth--), 
                        nodes.push(node), node = node.nextSibling;
                    } while (depth > 0);
                } else nodes.push(node);
                return jqLite(nodes);
            }
            function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
                return function(scope, element, attrs, controllers, transcludeFn) {
                    return element = groupScan(element[0], attrStart, attrEnd), linkFn(scope, element, attrs, controllers, transcludeFn);
                };
            }
            function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
                function addLinkFns(pre, post, attrStart, attrEnd) {
                    pre && (attrStart && (pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd)), 
                    pre.require = directive.require, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (pre = cloneAndAnnotateFn(pre, {
                        isolateScope: !0
                    })), preLinkFns.push(pre)), post && (attrStart && (post = groupElementsLinkFnWrapper(post, attrStart, attrEnd)), 
                    post.require = directive.require, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (post = cloneAndAnnotateFn(post, {
                        isolateScope: !0
                    })), postLinkFns.push(post));
                }
                function getControllers(require, $element, elementControllers) {
                    var value, retrievalMethod = "data", optional = !1;
                    if (isString(require)) {
                        for (;"^" == (value = require.charAt(0)) || "?" == value; ) require = require.substr(1), 
                        "^" == value && (retrievalMethod = "inheritedData"), optional = optional || "?" == value;
                        if (value = null, elementControllers && "data" === retrievalMethod && (value = elementControllers[require]), 
                        value = value || $element[retrievalMethod]("$" + require + "Controller"), !value && !optional) throw $compileMinErr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", require, directiveName);
                        return value;
                    }
                    return isArray(require) && (value = [], forEach(require, function(require) {
                        value.push(getControllers(require, $element, elementControllers));
                    })), value;
                }
                function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                    function controllersBoundTransclude(scope, cloneAttachFn) {
                        var transcludeControllers;
                        return arguments.length < 2 && (cloneAttachFn = scope, scope = undefined), hasElementTranscludeDirective && (transcludeControllers = elementControllers), 
                        boundTranscludeFn(scope, cloneAttachFn, transcludeControllers);
                    }
                    var attrs, $element, i, ii, linkFn, controller, isolateScope, transcludeFn, elementControllers = {};
                    if (attrs = compileNode === linkNode ? templateAttrs : shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr)), 
                    $element = attrs.$$element, newIsolateScopeDirective) {
                        var LOCAL_REGEXP = /^\s*([@=&])(\??)\s*(\w*)\s*$/, $linkNode = jqLite(linkNode);
                        isolateScope = scope.$new(!0), templateDirective && templateDirective === newIsolateScopeDirective.$$originalDirective ? $linkNode.data("$isolateScope", isolateScope) : $linkNode.data("$isolateScopeNoTemplate", isolateScope), 
                        safeAddClass($linkNode, "ng-isolate-scope"), forEach(newIsolateScopeDirective.scope, function(definition, scopeName) {
                            var lastValue, parentGet, parentSet, compare, match = definition.match(LOCAL_REGEXP) || [], attrName = match[3] || scopeName, optional = "?" == match[2], mode = match[1];
                            switch (isolateScope.$$isolateBindings[scopeName] = mode + attrName, mode) {
                              case "@":
                                attrs.$observe(attrName, function(value) {
                                    isolateScope[scopeName] = value;
                                }), attrs.$$observers[attrName].$$scope = scope, attrs[attrName] && (isolateScope[scopeName] = $interpolate(attrs[attrName])(scope));
                                break;

                              case "=":
                                if (optional && !attrs[attrName]) return;
                                parentGet = $parse(attrs[attrName]), compare = parentGet.literal ? equals : function(a, b) {
                                    return a === b;
                                }, parentSet = parentGet.assign || function() {
                                    throw lastValue = isolateScope[scopeName] = parentGet(scope), $compileMinErr("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", attrs[attrName], newIsolateScopeDirective.name);
                                }, lastValue = isolateScope[scopeName] = parentGet(scope), isolateScope.$watch(function() {
                                    var parentValue = parentGet(scope);
                                    return compare(parentValue, isolateScope[scopeName]) || (compare(parentValue, lastValue) ? parentSet(scope, parentValue = isolateScope[scopeName]) : isolateScope[scopeName] = parentValue), 
                                    lastValue = parentValue;
                                }, null, parentGet.literal);
                                break;

                              case "&":
                                parentGet = $parse(attrs[attrName]), isolateScope[scopeName] = function(locals) {
                                    return parentGet(scope, locals);
                                };
                                break;

                              default:
                                throw $compileMinErr("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", newIsolateScopeDirective.name, scopeName, definition);
                            }
                        });
                    }
                    for (transcludeFn = boundTranscludeFn && controllersBoundTransclude, controllerDirectives && forEach(controllerDirectives, function(directive) {
                        var controllerInstance, locals = {
                            $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                            $element: $element,
                            $attrs: attrs,
                            $transclude: transcludeFn
                        };
                        controller = directive.controller, "@" == controller && (controller = attrs[directive.name]), 
                        controllerInstance = $controller(controller, locals), elementControllers[directive.name] = controllerInstance, 
                        hasElementTranscludeDirective || $element.data("$" + directive.name + "Controller", controllerInstance), 
                        directive.controllerAs && (locals.$scope[directive.controllerAs] = controllerInstance);
                    }), i = 0, ii = preLinkFns.length; ii > i; i++) try {
                        linkFn = preLinkFns[i], linkFn(linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element, elementControllers), transcludeFn);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($element));
                    }
                    var scopeToChild = scope;
                    for (newIsolateScopeDirective && (newIsolateScopeDirective.template || null === newIsolateScopeDirective.templateUrl) && (scopeToChild = isolateScope), 
                    childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn), 
                    i = postLinkFns.length - 1; i >= 0; i--) try {
                        linkFn = postLinkFns[i], linkFn(linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element, elementControllers), transcludeFn);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($element));
                    }
                }
                previousCompileContext = previousCompileContext || {};
                for (var newScopeDirective, directive, directiveName, $template, linkFn, directiveValue, terminalPriority = -Number.MAX_VALUE, controllerDirectives = previousCompileContext.controllerDirectives, newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective, templateDirective = previousCompileContext.templateDirective, nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective, hasTranscludeDirective = !1, hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective, $compileNode = templateAttrs.$$element = jqLite(compileNode), replaceDirective = originalReplaceDirective, childTranscludeFn = transcludeFn, i = 0, ii = directives.length; ii > i; i++) {
                    directive = directives[i];
                    var attrStart = directive.$$start, attrEnd = directive.$$end;
                    if (attrStart && ($compileNode = groupScan(compileNode, attrStart, attrEnd)), $template = undefined, 
                    terminalPriority > directive.priority) break;
                    if ((directiveValue = directive.scope) && (newScopeDirective = newScopeDirective || directive, 
                    directive.templateUrl || (assertNoDuplicate("new/isolated scope", newIsolateScopeDirective, directive, $compileNode), 
                    isObject(directiveValue) && (newIsolateScopeDirective = directive))), directiveName = directive.name, 
                    !directive.templateUrl && directive.controller && (directiveValue = directive.controller, 
                    controllerDirectives = controllerDirectives || {}, assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode), 
                    controllerDirectives[directiveName] = directive), (directiveValue = directive.transclude) && (hasTranscludeDirective = !0, 
                    directive.$$tlb || (assertNoDuplicate("transclusion", nonTlbTranscludeDirective, directive, $compileNode), 
                    nonTlbTranscludeDirective = directive), "element" == directiveValue ? (hasElementTranscludeDirective = !0, 
                    terminalPriority = directive.priority, $template = groupScan(compileNode, attrStart, attrEnd), 
                    $compileNode = templateAttrs.$$element = jqLite(document.createComment(" " + directiveName + ": " + templateAttrs[directiveName] + " ")), 
                    compileNode = $compileNode[0], replaceWith(jqCollection, jqLite(sliceArgs($template)), compileNode), 
                    childTranscludeFn = compile($template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    })) : ($template = jqLite(jqLiteClone(compileNode)).contents(), $compileNode.empty(), 
                    childTranscludeFn = compile($template, transcludeFn))), directive.template) if (assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template, 
                    directiveValue = denormalizeTemplate(directiveValue), directive.replace) {
                        if (replaceDirective = directive, $template = jqLiteIsTextNode(directiveValue) ? [] : jqLite(directiveValue), 
                        compileNode = $template[0], 1 != $template.length || 1 !== compileNode.nodeType) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", directiveName, "");
                        replaceWith(jqCollection, $compileNode, compileNode);
                        var newTemplateAttrs = {
                            $attr: {}
                        }, templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs), unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                        newIsolateScopeDirective && markDirectivesAsIsolate(templateDirectives), directives = directives.concat(templateDirectives).concat(unprocessedDirectives), 
                        mergeTemplateAttributes(templateAttrs, newTemplateAttrs), ii = directives.length;
                    } else $compileNode.html(directiveValue);
                    if (directive.templateUrl) assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directive.replace && (replaceDirective = directive), 
                    nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, childTranscludeFn, preLinkFns, postLinkFns, {
                        controllerDirectives: controllerDirectives,
                        newIsolateScopeDirective: newIsolateScopeDirective,
                        templateDirective: templateDirective,
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    }), ii = directives.length; else if (directive.compile) try {
                        linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn), isFunction(linkFn) ? addLinkFns(null, linkFn, attrStart, attrEnd) : linkFn && addLinkFns(linkFn.pre, linkFn.post, attrStart, attrEnd);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($compileNode));
                    }
                    directive.terminal && (nodeLinkFn.terminal = !0, terminalPriority = Math.max(terminalPriority, directive.priority));
                }
                return nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === !0, nodeLinkFn.transclude = hasTranscludeDirective && childTranscludeFn, 
                previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective, 
                nodeLinkFn;
            }
            function markDirectivesAsIsolate(directives) {
                for (var j = 0, jj = directives.length; jj > j; j++) directives[j] = inherit(directives[j], {
                    $$isolateScope: !0
                });
            }
            function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
                if (name === ignoreDirective) return null;
                var match = null;
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) try {
                    directive = directives[i], (maxPriority === undefined || maxPriority > directive.priority) && -1 != directive.restrict.indexOf(location) && (startAttrName && (directive = inherit(directive, {
                        $$start: startAttrName,
                        $$end: endAttrName
                    })), tDirectives.push(directive), match = directive);
                } catch (e) {
                    $exceptionHandler(e);
                }
                return match;
            }
            function mergeTemplateAttributes(dst, src) {
                var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
                forEach(dst, function(value, key) {
                    "$" != key.charAt(0) && (src[key] && (value += ("style" === key ? ";" : " ") + src[key]), 
                    dst.$set(key, value, !0, srcAttr[key]));
                }), forEach(src, function(value, key) {
                    "class" == key ? (safeAddClass($element, value), dst["class"] = (dst["class"] ? dst["class"] + " " : "") + value) : "style" == key ? ($element.attr("style", $element.attr("style") + ";" + value), 
                    dst.style = (dst.style ? dst.style + ";" : "") + value) : "$" == key.charAt(0) || dst.hasOwnProperty(key) || (dst[key] = value, 
                    dstAttr[key] = srcAttr[key]);
                });
            }
            function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
                var afterTemplateNodeLinkFn, afterTemplateChildLinkFn, linkQueue = [], beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: origAsyncDirective
                }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl;
                return $compileNode.empty(), $http.get($sce.getTrustedResourceUrl(templateUrl), {
                    cache: $templateCache
                }).success(function(content) {
                    var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;
                    if (content = denormalizeTemplate(content), origAsyncDirective.replace) {
                        if ($template = jqLiteIsTextNode(content) ? [] : jqLite(content), compileNode = $template[0], 
                        1 != $template.length || 1 !== compileNode.nodeType) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                        tempTemplateAttrs = {
                            $attr: {}
                        }, replaceWith($rootElement, $compileNode, compileNode);
                        var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                        isObject(origAsyncDirective.scope) && markDirectivesAsIsolate(templateDirectives), 
                        directives = templateDirectives.concat(directives), mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
                    } else compileNode = beforeTemplateCompileNode, $compileNode.html(content);
                    for (directives.unshift(derivedSyncDirective), afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext), 
                    forEach($rootElement, function(node, i) {
                        node == compileNode && ($rootElement[i] = $compileNode[0]);
                    }), afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn); linkQueue.length; ) {
                        var scope = linkQueue.shift(), beforeTemplateLinkNode = linkQueue.shift(), linkRootElement = linkQueue.shift(), boundTranscludeFn = linkQueue.shift(), linkNode = $compileNode[0];
                        if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                            var oldClasses = beforeTemplateLinkNode.className;
                            previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace || (linkNode = jqLiteClone(compileNode)), 
                            replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode), safeAddClass(jqLite(linkNode), oldClasses);
                        }
                        childBoundTranscludeFn = afterTemplateNodeLinkFn.transclude ? createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude) : boundTranscludeFn, 
                        afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
                    }
                    linkQueue = null;
                }).error(function(response, code, headers, config) {
                    throw $compileMinErr("tpload", "Failed to load template: {0}", config.url);
                }), function(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
                    linkQueue ? (linkQueue.push(scope), linkQueue.push(node), linkQueue.push(rootElement), 
                    linkQueue.push(boundTranscludeFn)) : afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, boundTranscludeFn);
                };
            }
            function byPriority(a, b) {
                var diff = b.priority - a.priority;
                return 0 !== diff ? diff : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function assertNoDuplicate(what, previousDirective, directive, element) {
                if (previousDirective) throw $compileMinErr("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", previousDirective.name, directive.name, what, startingTag(element));
            }
            function addTextInterpolateDirective(directives, text) {
                var interpolateFn = $interpolate(text, !0);
                interpolateFn && directives.push({
                    priority: 0,
                    compile: valueFn(function(scope, node) {
                        var parent = node.parent(), bindings = parent.data("$binding") || [];
                        bindings.push(interpolateFn), safeAddClass(parent.data("$binding", bindings), "ng-binding"), 
                        scope.$watch(interpolateFn, function(value) {
                            node[0].nodeValue = value;
                        });
                    })
                });
            }
            function getTrustedContext(node, attrNormalizedName) {
                if ("srcdoc" == attrNormalizedName) return $sce.HTML;
                var tag = nodeName_(node);
                return "xlinkHref" == attrNormalizedName || "FORM" == tag && "action" == attrNormalizedName || "IMG" != tag && ("src" == attrNormalizedName || "ngSrc" == attrNormalizedName) ? $sce.RESOURCE_URL : void 0;
            }
            function addAttrInterpolateDirective(node, directives, value, name) {
                var interpolateFn = $interpolate(value, !0);
                if (interpolateFn) {
                    if ("multiple" === name && "SELECT" === nodeName_(node)) throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
                    directives.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(scope, element, attr) {
                                    var $$observers = attr.$$observers || (attr.$$observers = {});
                                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) throw $compileMinErr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    interpolateFn = $interpolate(attr[name], !0, getTrustedContext(node, name)), interpolateFn && (attr[name] = interpolateFn(scope), 
                                    ($$observers[name] || ($$observers[name] = [])).$$inter = !0, (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function(newValue, oldValue) {
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
                    $rootElement.length -= removeCount - 1;
                    break;
                }
                parent && parent.replaceChild(newNode, firstElementToRemove);
                var fragment = document.createDocumentFragment();
                fragment.appendChild(firstElementToRemove), newNode[jqLite.expando] = firstElementToRemove[jqLite.expando];
                for (var k = 1, kk = elementsToRemove.length; kk > k; k++) {
                    var element = elementsToRemove[k];
                    jqLite(element).remove(), fragment.appendChild(element), delete elementsToRemove[k];
                }
                elementsToRemove[0] = newNode, elementsToRemove.length = 1;
            }
            function cloneAndAnnotateFn(fn, annotation) {
                return extend(function() {
                    return fn.apply(null, arguments);
                }, fn, annotation);
            }
            var Attributes = function(element, attr) {
                this.$$element = element, this.$attr = attr || {};
            };
            Attributes.prototype = {
                $normalize: directiveNormalize,
                $addClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.addClass(this.$$element, classVal);
                },
                $removeClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.removeClass(this.$$element, classVal);
                },
                $updateClass: function(newClasses, oldClasses) {
                    var toAdd = tokenDifference(newClasses, oldClasses), toRemove = tokenDifference(oldClasses, newClasses);
                    0 === toAdd.length ? $animate.removeClass(this.$$element, toRemove) : 0 === toRemove.length ? $animate.addClass(this.$$element, toAdd) : $animate.setClass(this.$$element, toAdd, toRemove);
                },
                $set: function(key, value, writeAttr, attrName) {
                    var nodeName, booleanKey = getBooleanAttrName(this.$$element[0], key);
                    booleanKey && (this.$$element.prop(key, value), attrName = booleanKey), this[key] = value, 
                    attrName ? this.$attr[key] = attrName : (attrName = this.$attr[key], attrName || (this.$attr[key] = attrName = snake_case(key, "-"))), 
                    nodeName = nodeName_(this.$$element), ("A" === nodeName && "href" === key || "IMG" === nodeName && "src" === key) && (this[key] = value = $$sanitizeUri(value, "src" === key)), 
                    writeAttr !== !1 && (null === value || value === undefined ? this.$$element.removeAttr(attrName) : this.$$element.attr(attrName, value));
                    var $$observers = this.$$observers;
                    $$observers && forEach($$observers[key], function(fn) {
                        try {
                            fn(value);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                    });
                },
                $observe: function(key, fn) {
                    var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
                    return listeners.push(fn), $rootScope.$evalAsync(function() {
                        listeners.$$inter || fn(attrs[key]);
                    }), fn;
                }
            };
            var startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = "{{" == startSymbol || "}}" == endSymbol ? identity : function(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
            }, NG_ATTR_BINDING = /^ngAttr[A-Z]/;
            return compile;
        } ];
    }
    function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ""));
    }
    function tokenDifference(str1, str2) {
        var values = "", tokens1 = str1.split(/\s+/), tokens2 = str2.split(/\s+/);
        outer: for (var i = 0; i < tokens1.length; i++) {
            for (var token = tokens1[i], j = 0; j < tokens2.length; j++) if (token == tokens2[j]) continue outer;
            values += (values.length > 0 ? " " : "") + token;
        }
        return values;
    }
    function $ControllerProvider() {
        var controllers = {}, CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(name, constructor) {
            assertNotHasOwnProperty(name, "controller"), isObject(name) ? extend(controllers, name) : controllers[name] = constructor;
        }, this.$get = [ "$injector", "$window", function($injector, $window) {
            return function(expression, locals) {
                var instance, match, constructor, identifier;
                if (isString(expression) && (match = expression.match(CNTRL_REG), constructor = match[1], 
                identifier = match[3], expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, !0) || getter($window, constructor, !0), 
                assertArgFn(expression, constructor, !0)), instance = $injector.instantiate(expression, locals), 
                identifier) {
                    if (!locals || "object" != typeof locals.$scope) throw minErr("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", constructor || expression.name, identifier);
                    locals.$scope[identifier] = instance;
                }
                return instance;
            };
        } ];
    }
    function $DocumentProvider() {
        this.$get = [ "$window", function(window) {
            return jqLite(window.document);
        } ];
    }
    function $ExceptionHandlerProvider() {
        this.$get = [ "$log", function($log) {
            return function() {
                $log.error.apply($log, arguments);
            };
        } ];
    }
    function parseHeaders(headers) {
        var key, val, i, parsed = {};
        return headers ? (forEach(headers.split("\n"), function(line) {
            i = line.indexOf(":"), key = lowercase(trim(line.substr(0, i))), val = trim(line.substr(i + 1)), 
            key && (parsed[key] ? parsed[key] += ", " + val : parsed[key] = val);
        }), parsed) : parsed;
    }
    function headersGetter(headers) {
        var headersObj = isObject(headers) ? headers : undefined;
        return function(name) {
            return headersObj || (headersObj = parseHeaders(headers)), name ? headersObj[lowercase(name)] || null : headersObj;
        };
    }
    function transformData(data, headers, fns) {
        return isFunction(fns) ? fns(data, headers) : (forEach(fns, function(fn) {
            data = fn(data, headers);
        }), data);
    }
    function isSuccess(status) {
        return status >= 200 && 300 > status;
    }
    function $HttpProvider() {
        var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/, CONTENT_TYPE_APPLICATION_JSON = {
            "Content-Type": "application/json;charset=utf-8"
        }, defaults = this.defaults = {
            transformResponse: [ function(data) {
                return isString(data) && (data = data.replace(PROTECTION_PREFIX, ""), JSON_START.test(data) && JSON_END.test(data) && (data = fromJson(data))), 
                data;
            } ],
            transformRequest: [ function(d) {
                return !isObject(d) || isFile(d) || isBlob(d) ? d : toJson(d);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: copy(CONTENT_TYPE_APPLICATION_JSON),
                put: copy(CONTENT_TYPE_APPLICATION_JSON),
                patch: copy(CONTENT_TYPE_APPLICATION_JSON)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, interceptorFactories = this.interceptors = [], responseInterceptorFactories = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
            function $http(requestConfig) {
                function transformResponse(response) {
                    var resp = extend({}, response, {
                        data: transformData(response.data, response.headers, config.transformResponse)
                    });
                    return isSuccess(response.status) ? resp : $q.reject(resp);
                }
                function mergeHeaders(config) {
                    function execHeaders(headers) {
                        var headerContent;
                        forEach(headers, function(headerFn, header) {
                            isFunction(headerFn) && (headerContent = headerFn(), null != headerContent ? headers[header] = headerContent : delete headers[header]);
                        });
                    }
                    var defHeaderName, lowercaseDefHeaderName, reqHeaderName, defHeaders = defaults.headers, reqHeaders = extend({}, config.headers);
                    defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]), 
                    execHeaders(defHeaders), execHeaders(reqHeaders);
                    defaultHeadersIteration: for (defHeaderName in defHeaders) {
                        lowercaseDefHeaderName = lowercase(defHeaderName);
                        for (reqHeaderName in reqHeaders) if (lowercase(reqHeaderName) === lowercaseDefHeaderName) continue defaultHeadersIteration;
                        reqHeaders[defHeaderName] = defHeaders[defHeaderName];
                    }
                    return reqHeaders;
                }
                var config = {
                    method: "get",
                    transformRequest: defaults.transformRequest,
                    transformResponse: defaults.transformResponse
                }, headers = mergeHeaders(requestConfig);
                extend(config, requestConfig), config.headers = headers, config.method = uppercase(config.method);
                var xsrfValue = urlIsSameOrigin(config.url) ? $browser.cookies()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
                xsrfValue && (headers[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue);
                var serverRequest = function(config) {
                    headers = config.headers;
                    var reqData = transformData(config.data, headersGetter(headers), config.transformRequest);
                    return isUndefined(config.data) && forEach(headers, function(value, header) {
                        "content-type" === lowercase(header) && delete headers[header];
                    }), isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials) && (config.withCredentials = defaults.withCredentials), 
                    sendReq(config, reqData, headers).then(transformResponse, transformResponse);
                }, chain = [ serverRequest, undefined ], promise = $q.when(config);
                for (forEach(reversedInterceptors, function(interceptor) {
                    (interceptor.request || interceptor.requestError) && chain.unshift(interceptor.request, interceptor.requestError), 
                    (interceptor.response || interceptor.responseError) && chain.push(interceptor.response, interceptor.responseError);
                }); chain.length; ) {
                    var thenFn = chain.shift(), rejectFn = chain.shift();
                    promise = promise.then(thenFn, rejectFn);
                }
                return promise.success = function(fn) {
                    return promise.then(function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise.error = function(fn) {
                    return promise.then(null, function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise;
            }
            function createShortMethods() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url
                        }));
                    };
                });
            }
            function createShortMethodsWithData() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, data, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url,
                            data: data
                        }));
                    };
                });
            }
            function sendReq(config, reqData, reqHeaders) {
                function done(status, response, headersString, statusText) {
                    cache && (isSuccess(status) ? cache.put(url, [ status, response, parseHeaders(headersString), statusText ]) : cache.remove(url)), 
                    resolvePromise(response, status, headersString, statusText), $rootScope.$$phase || $rootScope.$apply();
                }
                function resolvePromise(response, status, headers, statusText) {
                    status = Math.max(status, 0), (isSuccess(status) ? deferred.resolve : deferred.reject)({
                        data: response,
                        status: status,
                        headers: headersGetter(headers),
                        config: config,
                        statusText: statusText
                    });
                }
                function removePendingReq() {
                    var idx = indexOf($http.pendingRequests, config);
                    -1 !== idx && $http.pendingRequests.splice(idx, 1);
                }
                var cache, cachedResp, deferred = $q.defer(), promise = deferred.promise, url = buildUrl(config.url, config.params);
                if ($http.pendingRequests.push(config), promise.then(removePendingReq, removePendingReq), 
                (config.cache || defaults.cache) && config.cache !== !1 && "GET" == config.method && (cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache), 
                cache) if (cachedResp = cache.get(url), isDefined(cachedResp)) {
                    if (cachedResp.then) return cachedResp.then(removePendingReq, removePendingReq), 
                    cachedResp;
                    isArray(cachedResp) ? resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2]), cachedResp[3]) : resolvePromise(cachedResp, 200, {}, "OK");
                } else cache.put(url, promise);
                return isUndefined(cachedResp) && $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType), 
                promise;
            }
            function buildUrl(url, params) {
                if (!params) return url;
                var parts = [];
                return forEachSorted(params, function(value, key) {
                    null === value || isUndefined(value) || (isArray(value) || (value = [ value ]), 
                    forEach(value, function(v) {
                        isObject(v) && (v = toJson(v)), parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(v));
                    }));
                }), parts.length > 0 && (url += (-1 == url.indexOf("?") ? "?" : "&") + parts.join("&")), 
                url;
            }
            var defaultCache = $cacheFactory("$http"), reversedInterceptors = [];
            return forEach(interceptorFactories, function(interceptorFactory) {
                reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
            }), forEach(responseInterceptorFactories, function(interceptorFactory, index) {
                var responseFn = isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory);
                reversedInterceptors.splice(index, 0, {
                    response: function(response) {
                        return responseFn($q.when(response));
                    },
                    responseError: function(response) {
                        return responseFn($q.reject(response));
                    }
                });
            }), $http.pendingRequests = [], createShortMethods("get", "delete", "head", "jsonp"), 
            createShortMethodsWithData("post", "put"), $http.defaults = defaults, $http;
        } ];
    }
    function createXhr(method) {
        if (8 >= msie && (!method.match(/^(get|post|head|put|delete|options)$/i) || !window.XMLHttpRequest)) return new window.ActiveXObject("Microsoft.XMLHTTP");
        if (window.XMLHttpRequest) return new window.XMLHttpRequest();
        throw minErr("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.");
    }
    function $HttpBackendProvider() {
        this.$get = [ "$browser", "$window", "$document", function($browser, $window, $document) {
            return createHttpBackend($browser, createXhr, $browser.defer, $window.angular.callbacks, $document[0]);
        } ];
    }
    function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
        function jsonpReq(url, done) {
            var script = rawDocument.createElement("script"), doneWrapper = function() {
                script.onreadystatechange = script.onload = script.onerror = null, rawDocument.body.removeChild(script), 
                done && done();
            };
            return script.type = "text/javascript", script.src = url, msie && 8 >= msie ? script.onreadystatechange = function() {
                /loaded|complete/.test(script.readyState) && doneWrapper();
            } : script.onload = script.onerror = function() {
                doneWrapper();
            }, rawDocument.body.appendChild(script), doneWrapper;
        }
        var ABORTED = -1;
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
            function timeoutRequest() {
                status = ABORTED, jsonpDone && jsonpDone(), xhr && xhr.abort();
            }
            function completeRequest(callback, status, response, headersString, statusText) {
                timeoutId && $browserDefer.cancel(timeoutId), jsonpDone = xhr = null, 0 === status && (status = response ? 200 : "file" == urlResolve(url).protocol ? 404 : 0), 
                status = 1223 === status ? 204 : status, statusText = statusText || "", callback(status, response, headersString, statusText), 
                $browser.$$completeOutstandingRequest(noop);
            }
            var status;
            if ($browser.$$incOutstandingRequestCount(), url = url || $browser.url(), "jsonp" == lowercase(method)) {
                var callbackId = "_" + (callbacks.counter++).toString(36);
                callbacks[callbackId] = function(data) {
                    callbacks[callbackId].data = data;
                };
                var jsonpDone = jsonpReq(url.replace("JSON_CALLBACK", "angular.callbacks." + callbackId), function() {
                    callbacks[callbackId].data ? completeRequest(callback, 200, callbacks[callbackId].data) : completeRequest(callback, status || -2), 
                    callbacks[callbackId] = angular.noop;
                });
            } else {
                var xhr = createXhr(method);
                if (xhr.open(method, url, !0), forEach(headers, function(value, key) {
                    isDefined(value) && xhr.setRequestHeader(key, value);
                }), xhr.onreadystatechange = function() {
                    if (xhr && 4 == xhr.readyState) {
                        var responseHeaders = null, response = null;
                        status !== ABORTED && (responseHeaders = xhr.getAllResponseHeaders(), response = "response" in xhr ? xhr.response : xhr.responseText), 
                        completeRequest(callback, status || xhr.status, response, responseHeaders, xhr.statusText || "");
                    }
                }, withCredentials && (xhr.withCredentials = !0), responseType) try {
                    xhr.responseType = responseType;
                } catch (e) {
                    if ("json" !== responseType) throw e;
                }
                xhr.send(post || null);
            }
            if (timeout > 0) var timeoutId = $browserDefer(timeoutRequest, timeout); else timeout && timeout.then && timeout.then(timeoutRequest);
        };
    }
    function $InterpolateProvider() {
        var startSymbol = "{{", endSymbol = "}}";
        this.startSymbol = function(value) {
            return value ? (startSymbol = value, this) : startSymbol;
        }, this.endSymbol = function(value) {
            return value ? (endSymbol = value, this) : endSymbol;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function($parse, $exceptionHandler, $sce) {
            function $interpolate(text, mustHaveExpression, trustedContext) {
                for (var startIndex, endIndex, fn, exp, index = 0, parts = [], length = text.length, hasInterpolation = !1, concat = []; length > index; ) -1 != (startIndex = text.indexOf(startSymbol, index)) && -1 != (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) ? (index != startIndex && parts.push(text.substring(index, startIndex)), 
                parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex))), 
                fn.exp = exp, index = endIndex + endSymbolLength, hasInterpolation = !0) : (index != length && parts.push(text.substring(index)), 
                index = length);
                if ((length = parts.length) || (parts.push(""), length = 1), trustedContext && parts.length > 1) throw $interpolateMinErr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", text);
                return !mustHaveExpression || hasInterpolation ? (concat.length = length, fn = function(context) {
                    try {
                        for (var part, i = 0, ii = length; ii > i; i++) "function" == typeof (part = parts[i]) && (part = part(context), 
                        part = trustedContext ? $sce.getTrusted(trustedContext, part) : $sce.valueOf(part), 
                        null === part || isUndefined(part) ? part = "" : "string" != typeof part && (part = toJson(part))), 
                        concat[i] = part;
                        return concat.join("");
                    } catch (err) {
                        var newErr = $interpolateMinErr("interr", "Can't interpolate: {0}\n{1}", text, err.toString());
                        $exceptionHandler(newErr);
                    }
                }, fn.exp = text, fn.parts = parts, fn) : void 0;
            }
            var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
            return $interpolate.startSymbol = function() {
                return startSymbol;
            }, $interpolate.endSymbol = function() {
                return endSymbol;
            }, $interpolate;
        } ];
    }
    function $IntervalProvider() {
        this.$get = [ "$rootScope", "$window", "$q", function($rootScope, $window, $q) {
            function interval(fn, delay, count, invokeApply) {
                var setInterval = $window.setInterval, clearInterval = $window.clearInterval, deferred = $q.defer(), promise = deferred.promise, iteration = 0, skipApply = isDefined(invokeApply) && !invokeApply;
                return count = isDefined(count) ? count : 0, promise.then(null, null, fn), promise.$$intervalId = setInterval(function() {
                    deferred.notify(iteration++), count > 0 && iteration >= count && (deferred.resolve(iteration), 
                    clearInterval(promise.$$intervalId), delete intervals[promise.$$intervalId]), skipApply || $rootScope.$apply();
                }, delay), intervals[promise.$$intervalId] = deferred, promise;
            }
            var intervals = {};
            return interval.cancel = function(promise) {
                return promise && promise.$$intervalId in intervals ? (intervals[promise.$$intervalId].reject("canceled"), 
                clearInterval(promise.$$intervalId), delete intervals[promise.$$intervalId], !0) : !1;
            }, interval;
        } ];
    }
    function $LocaleProvider() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(num) {
                    return 1 === num ? "one" : "other";
                }
            };
        };
    }
    function encodePath(path) {
        for (var segments = path.split("/"), i = segments.length; i--; ) segments[i] = encodeUriSegment(segments[i]);
        return segments.join("/");
    }
    function parseAbsoluteUrl(absoluteUrl, locationObj, appBase) {
        var parsedUrl = urlResolve(absoluteUrl, appBase);
        locationObj.$$protocol = parsedUrl.protocol, locationObj.$$host = parsedUrl.hostname, 
        locationObj.$$port = int(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
    }
    function parseAppUrl(relativeUrl, locationObj, appBase) {
        var prefixed = "/" !== relativeUrl.charAt(0);
        prefixed && (relativeUrl = "/" + relativeUrl);
        var match = urlResolve(relativeUrl, appBase);
        locationObj.$$path = decodeURIComponent(prefixed && "/" === match.pathname.charAt(0) ? match.pathname.substring(1) : match.pathname), 
        locationObj.$$search = parseKeyValue(match.search), locationObj.$$hash = decodeURIComponent(match.hash), 
        locationObj.$$path && "/" != locationObj.$$path.charAt(0) && (locationObj.$$path = "/" + locationObj.$$path);
    }
    function beginsWith(begin, whole) {
        return 0 === whole.indexOf(begin) ? whole.substr(begin.length) : void 0;
    }
    function stripHash(url) {
        var index = url.indexOf("#");
        return -1 == index ? url : url.substr(0, index);
    }
    function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf("/") + 1);
    }
    function serverBase(url) {
        return url.substring(0, url.indexOf("/", url.indexOf("//") + 2));
    }
    function LocationHtml5Url(appBase, basePrefix) {
        this.$$html5 = !0, basePrefix = basePrefix || "";
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this, appBase), this.$$parse = function(url) {
            var pathUrl = beginsWith(appBaseNoFile, url);
            if (!isString(pathUrl)) throw $locationMinErr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
            parseAppUrl(pathUrl, this, appBase), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        }, this.$$rewrite = function(url) {
            var appUrl, prevAppUrl;
            return (appUrl = beginsWith(appBase, url)) !== undefined ? (prevAppUrl = appUrl, 
            (appUrl = beginsWith(basePrefix, appUrl)) !== undefined ? appBaseNoFile + (beginsWith("/", appUrl) || appUrl) : appBase + prevAppUrl) : (appUrl = beginsWith(appBaseNoFile, url)) !== undefined ? appBaseNoFile + appUrl : appBaseNoFile == url + "/" ? appBaseNoFile : void 0;
        };
    }
    function LocationHashbangUrl(appBase, hashPrefix) {
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this, appBase), this.$$parse = function(url) {
            function removeWindowsDriveName(path, url, base) {
                var firstPathSegmentMatch, windowsFilePathExp = /^\/?.*?:(\/.*)/;
                return 0 === url.indexOf(base) && (url = url.replace(base, "")), windowsFilePathExp.exec(url) ? path : (firstPathSegmentMatch = windowsFilePathExp.exec(path), 
                firstPathSegmentMatch ? firstPathSegmentMatch[1] : path);
            }
            var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url), withoutHashUrl = "#" == withoutBaseUrl.charAt(0) ? beginsWith(hashPrefix, withoutBaseUrl) : this.$$html5 ? withoutBaseUrl : "";
            if (!isString(withoutHashUrl)) throw $locationMinErr("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', url, hashPrefix);
            parseAppUrl(withoutHashUrl, this, appBase), this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase), 
            this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : "");
        }, this.$$rewrite = function(url) {
            return stripHash(appBase) == stripHash(url) ? url : void 0;
        };
    }
    function LocationHashbangInHtml5Url(appBase, hashPrefix) {
        this.$$html5 = !0, LocationHashbangUrl.apply(this, arguments);
        var appBaseNoFile = stripFile(appBase);
        this.$$rewrite = function(url) {
            var appUrl;
            return appBase == stripHash(url) ? url : (appUrl = beginsWith(appBaseNoFile, url)) ? appBase + hashPrefix + appUrl : appBaseNoFile === url + "/" ? appBaseNoFile : void 0;
        };
    }
    function locationGetter(property) {
        return function() {
            return this[property];
        };
    }
    function locationGetterSetter(property, preprocess) {
        return function(value) {
            return isUndefined(value) ? this[property] : (this[property] = preprocess(value), 
            this.$$compose(), this);
        };
    }
    function $LocationProvider() {
        var hashPrefix = "", html5Mode = !1;
        this.hashPrefix = function(prefix) {
            return isDefined(prefix) ? (hashPrefix = prefix, this) : hashPrefix;
        }, this.html5Mode = function(mode) {
            return isDefined(mode) ? (html5Mode = mode, this) : html5Mode;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function($rootScope, $browser, $sniffer, $rootElement) {
            function afterLocationChange(oldUrl) {
                $rootScope.$broadcast("$locationChangeSuccess", $location.absUrl(), oldUrl);
            }
            var $location, LocationMode, appBase, baseHref = $browser.baseHref(), initialUrl = $browser.url();
            html5Mode ? (appBase = serverBase(initialUrl) + (baseHref || "/"), LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url) : (appBase = stripHash(initialUrl), 
            LocationMode = LocationHashbangUrl), $location = new LocationMode(appBase, "#" + hashPrefix), 
            $location.$$parse($location.$$rewrite(initialUrl)), $rootElement.on("click", function(event) {
                if (!event.ctrlKey && !event.metaKey && 2 != event.which) {
                    for (var elm = jqLite(event.target); "a" !== lowercase(elm[0].nodeName); ) if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
                    var absHref = elm.prop("href");
                    isObject(absHref) && "[object SVGAnimatedString]" === absHref.toString() && (absHref = urlResolve(absHref.animVal).href);
                    var rewrittenUrl = $location.$$rewrite(absHref);
                    absHref && !elm.attr("target") && rewrittenUrl && !event.isDefaultPrevented() && (event.preventDefault(), 
                    rewrittenUrl != $browser.url() && ($location.$$parse(rewrittenUrl), $rootScope.$apply(), 
                    window.angular["ff-684208-preventDefault"] = !0));
                }
            }), $location.absUrl() != initialUrl && $browser.url($location.absUrl(), !0), $browser.onUrlChange(function(newUrl) {
                $location.absUrl() != newUrl && ($rootScope.$evalAsync(function() {
                    var oldUrl = $location.absUrl();
                    $location.$$parse(newUrl), $rootScope.$broadcast("$locationChangeStart", newUrl, oldUrl).defaultPrevented ? ($location.$$parse(oldUrl), 
                    $browser.url(oldUrl)) : afterLocationChange(oldUrl);
                }), $rootScope.$$phase || $rootScope.$digest());
            });
            var changeCounter = 0;
            return $rootScope.$watch(function() {
                var oldUrl = $browser.url(), currentReplace = $location.$$replace;
                return changeCounter && oldUrl == $location.absUrl() || (changeCounter++, $rootScope.$evalAsync(function() {
                    $rootScope.$broadcast("$locationChangeStart", $location.absUrl(), oldUrl).defaultPrevented ? $location.$$parse(oldUrl) : ($browser.url($location.absUrl(), currentReplace), 
                    afterLocationChange(oldUrl));
                })), $location.$$replace = !1, changeCounter;
            }), $location;
        } ];
    }
    function $LogProvider() {
        var debug = !0, self = this;
        this.debugEnabled = function(flag) {
            return isDefined(flag) ? (debug = flag, this) : debug;
        }, this.$get = [ "$window", function($window) {
            function formatError(arg) {
                return arg instanceof Error && (arg.stack ? arg = arg.message && -1 === arg.stack.indexOf(arg.message) ? "Error: " + arg.message + "\n" + arg.stack : arg.stack : arg.sourceURL && (arg = arg.message + "\n" + arg.sourceURL + ":" + arg.line)), 
                arg;
            }
            function consoleLog(type) {
                var console = $window.console || {}, logFn = console[type] || console.log || noop, hasApply = !1;
                try {
                    hasApply = !!logFn.apply;
                } catch (e) {}
                return hasApply ? function() {
                    var args = [];
                    return forEach(arguments, function(arg) {
                        args.push(formatError(arg));
                    }), logFn.apply(console, args);
                } : function(arg1, arg2) {
                    logFn(arg1, null == arg2 ? "" : arg2);
                };
            }
            return {
                log: consoleLog("log"),
                info: consoleLog("info"),
                warn: consoleLog("warn"),
                error: consoleLog("error"),
                debug: function() {
                    var fn = consoleLog("debug");
                    return function() {
                        debug && fn.apply(self, arguments);
                    };
                }()
            };
        } ];
    }
    function ensureSafeMemberName(name, fullExpression) {
        if ("constructor" === name) throw $parseMinErr("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', fullExpression);
        return name;
    }
    function ensureSafeObject(obj, fullExpression) {
        if (obj) {
            if (obj.constructor === obj) throw $parseMinErr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj.document && obj.location && obj.alert && obj.setInterval) throw $parseMinErr("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj.children && (obj.nodeName || obj.prop && obj.attr && obj.find)) throw $parseMinErr("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", fullExpression);
        }
        return obj;
    }
    function setter(obj, path, setValue, fullExp, options) {
        options = options || {};
        for (var key, element = path.split("."), i = 0; element.length > 1; i++) {
            key = ensureSafeMemberName(element.shift(), fullExp);
            var propertyObj = obj[key];
            propertyObj || (propertyObj = {}, obj[key] = propertyObj), obj = propertyObj, obj.then && options.unwrapPromises && (promiseWarning(fullExp), 
            "$$v" in obj || !function(promise) {
                promise.then(function(val) {
                    promise.$$v = val;
                });
            }(obj), obj.$$v === undefined && (obj.$$v = {}), obj = obj.$$v);
        }
        return key = ensureSafeMemberName(element.shift(), fullExp), obj[key] = setValue, 
        setValue;
    }
    function cspSafeGetterFn(key0, key1, key2, key3, key4, fullExp, options) {
        return ensureSafeMemberName(key0, fullExp), ensureSafeMemberName(key1, fullExp), 
        ensureSafeMemberName(key2, fullExp), ensureSafeMemberName(key3, fullExp), ensureSafeMemberName(key4, fullExp), 
        options.unwrapPromises ? function(scope, locals) {
            var promise, pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope;
            return null == pathVal ? pathVal : (pathVal = pathVal[key0], pathVal && pathVal.then && (promiseWarning(fullExp), 
            "$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key1 ? null == pathVal ? undefined : (pathVal = pathVal[key1], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key2 ? null == pathVal ? undefined : (pathVal = pathVal[key2], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key3 ? null == pathVal ? undefined : (pathVal = pathVal[key3], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key4 ? null == pathVal ? undefined : (pathVal = pathVal[key4], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), pathVal) : pathVal) : pathVal) : pathVal) : pathVal);
        } : function(scope, locals) {
            var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope;
            return null == pathVal ? pathVal : (pathVal = pathVal[key0], key1 ? null == pathVal ? undefined : (pathVal = pathVal[key1], 
            key2 ? null == pathVal ? undefined : (pathVal = pathVal[key2], key3 ? null == pathVal ? undefined : (pathVal = pathVal[key3], 
            key4 ? null == pathVal ? undefined : pathVal = pathVal[key4] : pathVal) : pathVal) : pathVal) : pathVal);
        };
    }
    function simpleGetterFn1(key0, fullExp) {
        return ensureSafeMemberName(key0, fullExp), function(scope, locals) {
            return null == scope ? undefined : (locals && locals.hasOwnProperty(key0) ? locals : scope)[key0];
        };
    }
    function simpleGetterFn2(key0, key1, fullExp) {
        return ensureSafeMemberName(key0, fullExp), ensureSafeMemberName(key1, fullExp), 
        function(scope, locals) {
            return null == scope ? undefined : (scope = (locals && locals.hasOwnProperty(key0) ? locals : scope)[key0], 
            null == scope ? undefined : scope[key1]);
        };
    }
    function getterFn(path, options, fullExp) {
        if (getterFnCache.hasOwnProperty(path)) return getterFnCache[path];
        var fn, pathKeys = path.split("."), pathKeysLength = pathKeys.length;
        if (options.unwrapPromises || 1 !== pathKeysLength) if (options.unwrapPromises || 2 !== pathKeysLength) if (options.csp) fn = 6 > pathKeysLength ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4], fullExp, options) : function(scope, locals) {
            var val, i = 0;
            do val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], fullExp, options)(scope, locals), 
            locals = undefined, scope = val; while (pathKeysLength > i);
            return val;
        }; else {
            var code = "var p;\n";
            forEach(pathKeys, function(key, index) {
                ensureSafeMemberName(key, fullExp), code += "if(s == null) return undefined;\ns=" + (index ? "s" : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"];\n' + (options.unwrapPromises ? 'if (s && s.then) {\n pw("' + fullExp.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            }), code += "return s;";
            var evaledFnGetter = new Function("s", "k", "pw", code);
            evaledFnGetter.toString = valueFn(code), fn = options.unwrapPromises ? function(scope, locals) {
                return evaledFnGetter(scope, locals, promiseWarning);
            } : evaledFnGetter;
        } else fn = simpleGetterFn2(pathKeys[0], pathKeys[1], fullExp); else fn = simpleGetterFn1(pathKeys[0], fullExp);
        return "hasOwnProperty" !== path && (getterFnCache[path] = fn), fn;
    }
    function $ParseProvider() {
        var cache = {}, $parseOptions = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(value) {
            return isDefined(value) ? ($parseOptions.unwrapPromises = !!value, this) : $parseOptions.unwrapPromises;
        }, this.logPromiseWarnings = function(value) {
            return isDefined(value) ? ($parseOptions.logPromiseWarnings = value, this) : $parseOptions.logPromiseWarnings;
        }, this.$get = [ "$filter", "$sniffer", "$log", function($filter, $sniffer, $log) {
            return $parseOptions.csp = $sniffer.csp, promiseWarning = function(fullExp) {
                $parseOptions.logPromiseWarnings && !promiseWarningCache.hasOwnProperty(fullExp) && (promiseWarningCache[fullExp] = !0, 
                $log.warn("[$parse] Promise found in the expression `" + fullExp + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            }, function(exp) {
                var parsedExpression;
                switch (typeof exp) {
                  case "string":
                    if (cache.hasOwnProperty(exp)) return cache[exp];
                    var lexer = new Lexer($parseOptions), parser = new Parser(lexer, $filter, $parseOptions);
                    return parsedExpression = parser.parse(exp, !1), "hasOwnProperty" !== exp && (cache[exp] = parsedExpression), 
                    parsedExpression;

                  case "function":
                    return exp;

                  default:
                    return noop;
                }
            };
        } ];
    }
    function $QProvider() {
        this.$get = [ "$rootScope", "$exceptionHandler", function($rootScope, $exceptionHandler) {
            return qFactory(function(callback) {
                $rootScope.$evalAsync(callback);
            }, $exceptionHandler);
        } ];
    }
    function qFactory(nextTick, exceptionHandler) {
        function defaultCallback(value) {
            return value;
        }
        function defaultErrback(reason) {
            return reject(reason);
        }
        function all(promises) {
            var deferred = defer(), counter = 0, results = isArray(promises) ? [] : {};
            return forEach(promises, function(promise, key) {
                counter++, ref(promise).then(function(value) {
                    results.hasOwnProperty(key) || (results[key] = value, --counter || deferred.resolve(results));
                }, function(reason) {
                    results.hasOwnProperty(key) || deferred.reject(reason);
                });
            }), 0 === counter && deferred.resolve(results), deferred.promise;
        }
        var defer = function() {
            var value, deferred, pending = [];
            return deferred = {
                resolve: function(val) {
                    if (pending) {
                        var callbacks = pending;
                        pending = undefined, value = ref(val), callbacks.length && nextTick(function() {
                            for (var callback, i = 0, ii = callbacks.length; ii > i; i++) callback = callbacks[i], 
                            value.then(callback[0], callback[1], callback[2]);
                        });
                    }
                },
                reject: function(reason) {
                    deferred.resolve(createInternalRejectedPromise(reason));
                },
                notify: function(progress) {
                    if (pending) {
                        var callbacks = pending;
                        pending.length && nextTick(function() {
                            for (var callback, i = 0, ii = callbacks.length; ii > i; i++) callback = callbacks[i], 
                            callback[2](progress);
                        });
                    }
                },
                promise: {
                    then: function(callback, errback, progressback) {
                        var result = defer(), wrappedCallback = function(value) {
                            try {
                                result.resolve((isFunction(callback) ? callback : defaultCallback)(value));
                            } catch (e) {
                                result.reject(e), exceptionHandler(e);
                            }
                        }, wrappedErrback = function(reason) {
                            try {
                                result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
                            } catch (e) {
                                result.reject(e), exceptionHandler(e);
                            }
                        }, wrappedProgressback = function(progress) {
                            try {
                                result.notify((isFunction(progressback) ? progressback : defaultCallback)(progress));
                            } catch (e) {
                                exceptionHandler(e);
                            }
                        };
                        return pending ? pending.push([ wrappedCallback, wrappedErrback, wrappedProgressback ]) : value.then(wrappedCallback, wrappedErrback, wrappedProgressback), 
                        result.promise;
                    },
                    "catch": function(callback) {
                        return this.then(null, callback);
                    },
                    "finally": function(callback) {
                        function makePromise(value, resolved) {
                            var result = defer();
                            return resolved ? result.resolve(value) : result.reject(value), result.promise;
                        }
                        function handleCallback(value, isResolved) {
                            var callbackOutput = null;
                            try {
                                callbackOutput = (callback || defaultCallback)();
                            } catch (e) {
                                return makePromise(e, !1);
                            }
                            return callbackOutput && isFunction(callbackOutput.then) ? callbackOutput.then(function() {
                                return makePromise(value, isResolved);
                            }, function(error) {
                                return makePromise(error, !1);
                            }) : makePromise(value, isResolved);
                        }
                        return this.then(function(value) {
                            return handleCallback(value, !0);
                        }, function(error) {
                            return handleCallback(error, !1);
                        });
                    }
                }
            };
        }, ref = function(value) {
            return value && isFunction(value.then) ? value : {
                then: function(callback) {
                    var result = defer();
                    return nextTick(function() {
                        result.resolve(callback(value));
                    }), result.promise;
                }
            };
        }, reject = function(reason) {
            var result = defer();
            return result.reject(reason), result.promise;
        }, createInternalRejectedPromise = function(reason) {
            return {
                then: function(callback, errback) {
                    var result = defer();
                    return nextTick(function() {
                        try {
                            result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
                        } catch (e) {
                            result.reject(e), exceptionHandler(e);
                        }
                    }), result.promise;
                }
            };
        }, when = function(value, callback, errback, progressback) {
            var done, result = defer(), wrappedCallback = function(value) {
                try {
                    return (isFunction(callback) ? callback : defaultCallback)(value);
                } catch (e) {
                    return exceptionHandler(e), reject(e);
                }
            }, wrappedErrback = function(reason) {
                try {
                    return (isFunction(errback) ? errback : defaultErrback)(reason);
                } catch (e) {
                    return exceptionHandler(e), reject(e);
                }
            }, wrappedProgressback = function(progress) {
                try {
                    return (isFunction(progressback) ? progressback : defaultCallback)(progress);
                } catch (e) {
                    exceptionHandler(e);
                }
            };
            return nextTick(function() {
                ref(value).then(function(value) {
                    done || (done = !0, result.resolve(ref(value).then(wrappedCallback, wrappedErrback, wrappedProgressback)));
                }, function(reason) {
                    done || (done = !0, result.resolve(wrappedErrback(reason)));
                }, function(progress) {
                    done || result.notify(wrappedProgressback(progress));
                });
            }), result.promise;
        };
        return {
            defer: defer,
            reject: reject,
            when: when,
            all: all
        };
    }
    function $$RAFProvider() {
        this.$get = [ "$window", "$timeout", function($window, $timeout) {
            var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame, cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.mozCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame, rafSupported = !!requestAnimationFrame, raf = rafSupported ? function(fn) {
                var id = requestAnimationFrame(fn);
                return function() {
                    cancelAnimationFrame(id);
                };
            } : function(fn) {
                var timer = $timeout(fn, 16.66, !1);
                return function() {
                    $timeout.cancel(timer);
                };
            };
            return raf.supported = rafSupported, raf;
        } ];
    }
    function $RootScopeProvider() {
        var TTL = 10, $rootScopeMinErr = minErr("$rootScope"), lastDirtyWatch = null;
        this.digestTtl = function(value) {
            return arguments.length && (TTL = value), TTL;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function($injector, $exceptionHandler, $parse, $browser) {
            function Scope() {
                this.$id = nextUid(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], 
                this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {};
            }
            function beginPhase(phase) {
                if ($rootScope.$$phase) throw $rootScopeMinErr("inprog", "{0} already in progress", $rootScope.$$phase);
                $rootScope.$$phase = phase;
            }
            function clearPhase() {
                $rootScope.$$phase = null;
            }
            function compileToFn(exp, name) {
                var fn = $parse(exp);
                return assertArgFn(fn, name), fn;
            }
            function decrementListenerCount(current, count, name) {
                do current.$$listenerCount[name] -= count, 0 === current.$$listenerCount[name] && delete current.$$listenerCount[name]; while (current = current.$parent);
            }
            function initWatchVal() {}
            Scope.prototype = {
                constructor: Scope,
                $new: function(isolate) {
                    var ChildScope, child;
                    return isolate ? (child = new Scope(), child.$root = this.$root, child.$$asyncQueue = this.$$asyncQueue, 
                    child.$$postDigestQueue = this.$$postDigestQueue) : (ChildScope = function() {}, 
                    ChildScope.prototype = this, child = new ChildScope(), child.$id = nextUid()), child["this"] = child, 
                    child.$$listeners = {}, child.$$listenerCount = {}, child.$parent = this, child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null, 
                    child.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = child, 
                    this.$$childTail = child) : this.$$childHead = this.$$childTail = child, child;
                },
                $watch: function(watchExp, listener, objectEquality) {
                    var scope = this, get = compileToFn(watchExp, "watch"), array = scope.$$watchers, watcher = {
                        fn: listener,
                        last: initWatchVal,
                        get: get,
                        exp: watchExp,
                        eq: !!objectEquality
                    };
                    if (lastDirtyWatch = null, !isFunction(listener)) {
                        var listenFn = compileToFn(listener || noop, "listener");
                        watcher.fn = function(newVal, oldVal, scope) {
                            listenFn(scope);
                        };
                    }
                    if ("string" == typeof watchExp && get.constant) {
                        var originalFn = watcher.fn;
                        watcher.fn = function(newVal, oldVal, scope) {
                            originalFn.call(this, newVal, oldVal, scope), arrayRemove(array, watcher);
                        };
                    }
                    return array || (array = scope.$$watchers = []), array.unshift(watcher), function() {
                        arrayRemove(array, watcher), lastDirtyWatch = null;
                    };
                },
                $watchCollection: function(obj, listener) {
                    function $watchCollectionWatch() {
                        newValue = objGetter(self);
                        var newLength, key;
                        if (isObject(newValue)) if (isArrayLike(newValue)) {
                            oldValue !== internalArray && (oldValue = internalArray, oldLength = oldValue.length = 0, 
                            changeDetected++), newLength = newValue.length, oldLength !== newLength && (changeDetected++, 
                            oldValue.length = oldLength = newLength);
                            for (var i = 0; newLength > i; i++) {
                                var bothNaN = oldValue[i] !== oldValue[i] && newValue[i] !== newValue[i];
                                bothNaN || oldValue[i] === newValue[i] || (changeDetected++, oldValue[i] = newValue[i]);
                            }
                        } else {
                            oldValue !== internalObject && (oldValue = internalObject = {}, oldLength = 0, changeDetected++), 
                            newLength = 0;
                            for (key in newValue) newValue.hasOwnProperty(key) && (newLength++, oldValue.hasOwnProperty(key) ? oldValue[key] !== newValue[key] && (changeDetected++, 
                            oldValue[key] = newValue[key]) : (oldLength++, oldValue[key] = newValue[key], changeDetected++));
                            if (oldLength > newLength) {
                                changeDetected++;
                                for (key in oldValue) oldValue.hasOwnProperty(key) && !newValue.hasOwnProperty(key) && (oldLength--, 
                                delete oldValue[key]);
                            }
                        } else oldValue !== newValue && (oldValue = newValue, changeDetected++);
                        return changeDetected;
                    }
                    function $watchCollectionAction() {
                        if (initRun ? (initRun = !1, listener(newValue, newValue, self)) : listener(newValue, veryOldValue, self), 
                        trackVeryOldValue) if (isObject(newValue)) if (isArrayLike(newValue)) {
                            veryOldValue = new Array(newValue.length);
                            for (var i = 0; i < newValue.length; i++) veryOldValue[i] = newValue[i];
                        } else {
                            veryOldValue = {};
                            for (var key in newValue) hasOwnProperty.call(newValue, key) && (veryOldValue[key] = newValue[key]);
                        } else veryOldValue = newValue;
                    }
                    var newValue, oldValue, veryOldValue, self = this, trackVeryOldValue = listener.length > 1, changeDetected = 0, objGetter = $parse(obj), internalArray = [], internalObject = {}, initRun = !0, oldLength = 0;
                    return this.$watch($watchCollectionWatch, $watchCollectionAction);
                },
                $digest: function() {
                    var watch, value, last, watchers, length, dirty, next, current, logIdx, logMsg, asyncTask, asyncQueue = this.$$asyncQueue, postDigestQueue = this.$$postDigestQueue, ttl = TTL, target = this, watchLog = [];
                    beginPhase("$digest"), lastDirtyWatch = null;
                    do {
                        for (dirty = !1, current = target; asyncQueue.length; ) {
                            try {
                                asyncTask = asyncQueue.shift(), asyncTask.scope.$eval(asyncTask.expression);
                            } catch (e) {
                                clearPhase(), $exceptionHandler(e);
                            }
                            lastDirtyWatch = null;
                        }
                        traverseScopesLoop: do {
                            if (watchers = current.$$watchers) for (length = watchers.length; length--; ) try {
                                if (watch = watchers[length]) if ((value = watch.get(current)) === (last = watch.last) || (watch.eq ? equals(value, last) : "number" == typeof value && "number" == typeof last && isNaN(value) && isNaN(last))) {
                                    if (watch === lastDirtyWatch) {
                                        dirty = !1;
                                        break traverseScopesLoop;
                                    }
                                } else dirty = !0, lastDirtyWatch = watch, watch.last = watch.eq ? copy(value) : value, 
                                watch.fn(value, last === initWatchVal ? value : last, current), 5 > ttl && (logIdx = 4 - ttl, 
                                watchLog[logIdx] || (watchLog[logIdx] = []), logMsg = isFunction(watch.exp) ? "fn: " + (watch.exp.name || watch.exp.toString()) : watch.exp, 
                                logMsg += "; newVal: " + toJson(value) + "; oldVal: " + toJson(last), watchLog[logIdx].push(logMsg));
                            } catch (e) {
                                clearPhase(), $exceptionHandler(e);
                            }
                            if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                        } while (current = next);
                        if ((dirty || asyncQueue.length) && !ttl--) throw clearPhase(), $rootScopeMinErr("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", TTL, toJson(watchLog));
                    } while (dirty || asyncQueue.length);
                    for (clearPhase(); postDigestQueue.length; ) try {
                        postDigestQueue.shift()();
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var parent = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== $rootScope && (forEach(this.$$listenerCount, bind(null, decrementListenerCount, this)), 
                        parent.$$childHead == this && (parent.$$childHead = this.$$nextSibling), parent.$$childTail == this && (parent.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, 
                        this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], 
                        this.$destroy = this.$digest = this.$apply = noop, this.$on = this.$watch = function() {
                            return noop;
                        });
                    }
                },
                $eval: function(expr, locals) {
                    return $parse(expr)(this, locals);
                },
                $evalAsync: function(expr) {
                    $rootScope.$$phase || $rootScope.$$asyncQueue.length || $browser.defer(function() {
                        $rootScope.$$asyncQueue.length && $rootScope.$digest();
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: expr
                    });
                },
                $$postDigest: function(fn) {
                    this.$$postDigestQueue.push(fn);
                },
                $apply: function(expr) {
                    try {
                        return beginPhase("$apply"), this.$eval(expr);
                    } catch (e) {
                        $exceptionHandler(e);
                    } finally {
                        clearPhase();
                        try {
                            $rootScope.$digest();
                        } catch (e) {
                            throw $exceptionHandler(e), e;
                        }
                    }
                },
                $on: function(name, listener) {
                    var namedListeners = this.$$listeners[name];
                    namedListeners || (this.$$listeners[name] = namedListeners = []), namedListeners.push(listener);
                    var current = this;
                    do current.$$listenerCount[name] || (current.$$listenerCount[name] = 0), current.$$listenerCount[name]++; while (current = current.$parent);
                    var self = this;
                    return function() {
                        namedListeners[indexOf(namedListeners, listener)] = null, decrementListenerCount(self, 1, name);
                    };
                },
                $emit: function(name) {
                    var namedListeners, i, length, empty = [], scope = this, stopPropagation = !1, event = {
                        name: name,
                        targetScope: scope,
                        stopPropagation: function() {
                            stopPropagation = !0;
                        },
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1);
                    do {
                        for (namedListeners = scope.$$listeners[name] || empty, event.currentScope = scope, 
                        i = 0, length = namedListeners.length; length > i; i++) if (namedListeners[i]) try {
                            namedListeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else namedListeners.splice(i, 1), i--, length--;
                        if (stopPropagation) return event;
                        scope = scope.$parent;
                    } while (scope);
                    return event;
                },
                $broadcast: function(name) {
                    for (var listeners, i, length, target = this, current = target, next = target, event = {
                        name: name,
                        targetScope: target,
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1); current = next; ) {
                        for (event.currentScope = current, listeners = current.$$listeners[name] || [], 
                        i = 0, length = listeners.length; length > i; i++) if (listeners[i]) try {
                            listeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else listeners.splice(i, 1), i--, length--;
                        if (!(next = current.$$listenerCount[name] && current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                    }
                    return event;
                }
            };
            var $rootScope = new Scope();
            return $rootScope;
        } ];
    }
    function $$SanitizeUriProvider() {
        var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/, imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (aHrefSanitizationWhitelist = regexp, this) : aHrefSanitizationWhitelist;
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (imgSrcSanitizationWhitelist = regexp, this) : imgSrcSanitizationWhitelist;
        }, this.$get = function() {
            return function(uri, isImage) {
                var normalizedVal, regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
                return msie && !(msie >= 8) || (normalizedVal = urlResolve(uri).href, "" === normalizedVal || normalizedVal.match(regex)) ? uri : "unsafe:" + normalizedVal;
            };
        };
    }
    function escapeForRegexp(s) {
        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }
    function adjustMatcher(matcher) {
        if ("self" === matcher) return matcher;
        if (isString(matcher)) {
            if (matcher.indexOf("***") > -1) throw $sceMinErr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", matcher);
            return matcher = escapeForRegexp(matcher).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), 
            new RegExp("^" + matcher + "$");
        }
        if (isRegExp(matcher)) return new RegExp("^" + matcher.source + "$");
        throw $sceMinErr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function adjustMatchers(matchers) {
        var adjustedMatchers = [];
        return isDefined(matchers) && forEach(matchers, function(matcher) {
            adjustedMatchers.push(adjustMatcher(matcher));
        }), adjustedMatchers;
    }
    function $SceDelegateProvider() {
        this.SCE_CONTEXTS = SCE_CONTEXTS;
        var resourceUrlWhitelist = [ "self" ], resourceUrlBlacklist = [];
        this.resourceUrlWhitelist = function(value) {
            return arguments.length && (resourceUrlWhitelist = adjustMatchers(value)), resourceUrlWhitelist;
        }, this.resourceUrlBlacklist = function(value) {
            return arguments.length && (resourceUrlBlacklist = adjustMatchers(value)), resourceUrlBlacklist;
        }, this.$get = [ "$injector", function($injector) {
            function matchUrl(matcher, parsedUrl) {
                return "self" === matcher ? urlIsSameOrigin(parsedUrl) : !!matcher.exec(parsedUrl.href);
            }
            function isResourceUrlAllowedByPolicy(url) {
                var i, n, parsedUrl = urlResolve(url.toString()), allowed = !1;
                for (i = 0, n = resourceUrlWhitelist.length; n > i; i++) if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                    allowed = !0;
                    break;
                }
                if (allowed) for (i = 0, n = resourceUrlBlacklist.length; n > i; i++) if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                    allowed = !1;
                    break;
                }
                return allowed;
            }
            function generateHolderType(Base) {
                var holderType = function(trustedValue) {
                    this.$$unwrapTrustedValue = function() {
                        return trustedValue;
                    };
                };
                return Base && (holderType.prototype = new Base()), holderType.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, holderType.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, holderType;
            }
            function trustAs(type, trustedValue) {
                var Constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                if (!Constructor) throw $sceMinErr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", type, trustedValue);
                if (null === trustedValue || trustedValue === undefined || "" === trustedValue) return trustedValue;
                if ("string" != typeof trustedValue) throw $sceMinErr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", type);
                return new Constructor(trustedValue);
            }
            function valueOf(maybeTrusted) {
                return maybeTrusted instanceof trustedValueHolderBase ? maybeTrusted.$$unwrapTrustedValue() : maybeTrusted;
            }
            function getTrusted(type, maybeTrusted) {
                if (null === maybeTrusted || maybeTrusted === undefined || "" === maybeTrusted) return maybeTrusted;
                var constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                if (constructor && maybeTrusted instanceof constructor) return maybeTrusted.$$unwrapTrustedValue();
                if (type === SCE_CONTEXTS.RESOURCE_URL) {
                    if (isResourceUrlAllowedByPolicy(maybeTrusted)) return maybeTrusted;
                    throw $sceMinErr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", maybeTrusted.toString());
                }
                if (type === SCE_CONTEXTS.HTML) return htmlSanitizer(maybeTrusted);
                throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var htmlSanitizer = function() {
                throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            $injector.has("$sanitize") && (htmlSanitizer = $injector.get("$sanitize"));
            var trustedValueHolderBase = generateHolderType(), byType = {};
            return byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase), byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase), 
            byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase), byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase), 
            byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]), 
            {
                trustAs: trustAs,
                getTrusted: getTrusted,
                valueOf: valueOf
            };
        } ];
    }
    function $SceProvider() {
        var enabled = !0;
        this.enabled = function(value) {
            return arguments.length && (enabled = !!value), enabled;
        }, this.$get = [ "$parse", "$sniffer", "$sceDelegate", function($parse, $sniffer, $sceDelegate) {
            if (enabled && $sniffer.msie && $sniffer.msieDocumentMode < 8) throw $sceMinErr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var sce = copy(SCE_CONTEXTS);
            sce.isEnabled = function() {
                return enabled;
            }, sce.trustAs = $sceDelegate.trustAs, sce.getTrusted = $sceDelegate.getTrusted, 
            sce.valueOf = $sceDelegate.valueOf, enabled || (sce.trustAs = sce.getTrusted = function(type, value) {
                return value;
            }, sce.valueOf = identity), sce.parseAs = function(type, expr) {
                var parsed = $parse(expr);
                return parsed.literal && parsed.constant ? parsed : function(self, locals) {
                    return sce.getTrusted(type, parsed(self, locals));
                };
            };
            var parse = sce.parseAs, getTrusted = sce.getTrusted, trustAs = sce.trustAs;
            return forEach(SCE_CONTEXTS, function(enumValue, name) {
                var lName = lowercase(name);
                sce[camelCase("parse_as_" + lName)] = function(expr) {
                    return parse(enumValue, expr);
                }, sce[camelCase("get_trusted_" + lName)] = function(value) {
                    return getTrusted(enumValue, value);
                }, sce[camelCase("trust_as_" + lName)] = function(value) {
                    return trustAs(enumValue, value);
                };
            }), sce;
        } ];
    }
    function $SnifferProvider() {
        this.$get = [ "$window", "$document", function($window, $document) {
            var vendorPrefix, match, eventSupport = {}, android = int((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]), boxee = /Boxee/i.test(($window.navigator || {}).userAgent), document = $document[0] || {}, documentMode = document.documentMode, vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/, bodyStyle = document.body && document.body.style, transitions = !1, animations = !1;
            if (bodyStyle) {
                for (var prop in bodyStyle) if (match = vendorRegex.exec(prop)) {
                    vendorPrefix = match[0], vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                    break;
                }
                vendorPrefix || (vendorPrefix = "WebkitOpacity" in bodyStyle && "webkit"), transitions = !!("transition" in bodyStyle || vendorPrefix + "Transition" in bodyStyle), 
                animations = !!("animation" in bodyStyle || vendorPrefix + "Animation" in bodyStyle), 
                !android || transitions && animations || (transitions = isString(document.body.style.webkitTransition), 
                animations = isString(document.body.style.webkitAnimation));
            }
            return {
                history: !(!$window.history || !$window.history.pushState || 4 > android || boxee),
                hashchange: "onhashchange" in $window && (!documentMode || documentMode > 7),
                hasEvent: function(event) {
                    if ("input" == event && 9 == msie) return !1;
                    if (isUndefined(eventSupport[event])) {
                        var divElm = document.createElement("div");
                        eventSupport[event] = "on" + event in divElm;
                    }
                    return eventSupport[event];
                },
                csp: csp(),
                vendorPrefix: vendorPrefix,
                transitions: transitions,
                animations: animations,
                android: android,
                msie: msie,
                msieDocumentMode: documentMode
            };
        } ];
    }
    function $TimeoutProvider() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function($rootScope, $browser, $q, $exceptionHandler) {
            function timeout(fn, delay, invokeApply) {
                var timeoutId, deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply;
                return timeoutId = $browser.defer(function() {
                    try {
                        deferred.resolve(fn());
                    } catch (e) {
                        deferred.reject(e), $exceptionHandler(e);
                    } finally {
                        delete deferreds[promise.$$timeoutId];
                    }
                    skipApply || $rootScope.$apply();
                }, delay), promise.$$timeoutId = timeoutId, deferreds[timeoutId] = deferred, promise;
            }
            var deferreds = {};
            return timeout.cancel = function(promise) {
                return promise && promise.$$timeoutId in deferreds ? (deferreds[promise.$$timeoutId].reject("canceled"), 
                delete deferreds[promise.$$timeoutId], $browser.defer.cancel(promise.$$timeoutId)) : !1;
            }, timeout;
        } ];
    }
    function urlResolve(url) {
        var href = url;
        return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), 
        urlParsingNode.setAttribute("href", href), {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    function urlIsSameOrigin(requestUrl) {
        var parsed = isString(requestUrl) ? urlResolve(requestUrl) : requestUrl;
        return parsed.protocol === originUrl.protocol && parsed.host === originUrl.host;
    }
    function $WindowProvider() {
        this.$get = valueFn(window);
    }
    function $FilterProvider($provide) {
        function register(name, factory) {
            if (isObject(name)) {
                var filters = {};
                return forEach(name, function(filter, key) {
                    filters[key] = register(key, filter);
                }), filters;
            }
            return $provide.factory(name + suffix, factory);
        }
        var suffix = "Filter";
        this.register = register, this.$get = [ "$injector", function($injector) {
            return function(name) {
                return $injector.get(name + suffix);
            };
        } ], register("currency", currencyFilter), register("date", dateFilter), register("filter", filterFilter), 
        register("json", jsonFilter), register("limitTo", limitToFilter), register("lowercase", lowercaseFilter), 
        register("number", numberFilter), register("orderBy", orderByFilter), register("uppercase", uppercaseFilter);
    }
    function filterFilter() {
        return function(array, expression, comparator) {
            if (!isArray(array)) return array;
            var comparatorType = typeof comparator, predicates = [];
            predicates.check = function(value) {
                for (var j = 0; j < predicates.length; j++) if (!predicates[j](value)) return !1;
                return !0;
            }, "function" !== comparatorType && (comparator = "boolean" === comparatorType && comparator ? function(obj, text) {
                return angular.equals(obj, text);
            } : function(obj, text) {
                if (obj && text && "object" == typeof obj && "object" == typeof text) {
                    for (var objKey in obj) if ("$" !== objKey.charAt(0) && hasOwnProperty.call(obj, objKey) && comparator(obj[objKey], text[objKey])) return !0;
                    return !1;
                }
                return text = ("" + text).toLowerCase(), ("" + obj).toLowerCase().indexOf(text) > -1;
            });
            var search = function(obj, text) {
                if ("string" == typeof text && "!" === text.charAt(0)) return !search(obj, text.substr(1));
                switch (typeof obj) {
                  case "boolean":
                  case "number":
                  case "string":
                    return comparator(obj, text);

                  case "object":
                    switch (typeof text) {
                      case "object":
                        return comparator(obj, text);

                      default:
                        for (var objKey in obj) if ("$" !== objKey.charAt(0) && search(obj[objKey], text)) return !0;
                    }
                    return !1;

                  case "array":
                    for (var i = 0; i < obj.length; i++) if (search(obj[i], text)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof expression) {
              case "boolean":
              case "number":
              case "string":
                expression = {
                    $: expression
                };

              case "object":
                for (var key in expression) !function(path) {
                    "undefined" != typeof expression[path] && predicates.push(function(value) {
                        return search("$" == path ? value : value && value[path], expression[path]);
                    });
                }(key);
                break;

              case "function":
                predicates.push(expression);
                break;

              default:
                return array;
            }
            for (var filtered = [], j = 0; j < array.length; j++) {
                var value = array[j];
                predicates.check(value) && filtered.push(value);
            }
            return filtered;
        };
    }
    function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol) {
            return isUndefined(currencySymbol) && (currencySymbol = formats.CURRENCY_SYM), formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
        };
    }
    function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
            return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
    }
    function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (null == number || !isFinite(number) || isObject(number)) return "";
        var isNegative = 0 > number;
        number = Math.abs(number);
        var numStr = number + "", formatedText = "", parts = [], hasExponent = !1;
        if (-1 !== numStr.indexOf("e")) {
            var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
            match && "-" == match[2] && match[3] > fractionSize + 1 ? numStr = "0" : (formatedText = numStr, 
            hasExponent = !0);
        }
        if (hasExponent) fractionSize > 0 && number > -1 && 1 > number && (formatedText = number.toFixed(fractionSize)); else {
            var fractionLen = (numStr.split(DECIMAL_SEP)[1] || "").length;
            isUndefined(fractionSize) && (fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac));
            var pow = Math.pow(10, fractionSize);
            number = Math.round(number * pow) / pow;
            var fraction = ("" + number).split(DECIMAL_SEP), whole = fraction[0];
            fraction = fraction[1] || "";
            var i, pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
            if (whole.length >= lgroup + group) for (pos = whole.length - lgroup, i = 0; pos > i; i++) (pos - i) % group === 0 && 0 !== i && (formatedText += groupSep), 
            formatedText += whole.charAt(i);
            for (i = pos; i < whole.length; i++) (whole.length - i) % lgroup === 0 && 0 !== i && (formatedText += groupSep), 
            formatedText += whole.charAt(i);
            for (;fraction.length < fractionSize; ) fraction += "0";
            fractionSize && "0" !== fractionSize && (formatedText += decimalSep + fraction.substr(0, fractionSize));
        }
        return parts.push(isNegative ? pattern.negPre : pattern.posPre), parts.push(formatedText), 
        parts.push(isNegative ? pattern.negSuf : pattern.posSuf), parts.join("");
    }
    function padNumber(num, digits, trim) {
        var neg = "";
        for (0 > num && (neg = "-", num = -num), num = "" + num; num.length < digits; ) num = "0" + num;
        return trim && (num = num.substr(num.length - digits)), neg + num;
    }
    function dateGetter(name, size, offset, trim) {
        return offset = offset || 0, function(date) {
            var value = date["get" + name]();
            return (offset > 0 || value > -offset) && (value += offset), 0 === value && -12 == offset && (value = 12), 
            padNumber(value, size, trim);
        };
    }
    function dateStrGetter(name, shortForm) {
        return function(date, formats) {
            var value = date["get" + name](), get = uppercase(shortForm ? "SHORT" + name : name);
            return formats[get][value];
        };
    }
    function timeZoneGetter(date) {
        var zone = -1 * date.getTimezoneOffset(), paddedZone = zone >= 0 ? "+" : "";
        return paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    }
    function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
    }
    function dateFilter($locale) {
        function jsonStringToDate(string) {
            var match;
            if (match = string.match(R_ISO8601_STR)) {
                var date = new Date(0), tzHour = 0, tzMin = 0, dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear, timeSetter = match[8] ? date.setUTCHours : date.setHours;
                match[9] && (tzHour = int(match[9] + match[10]), tzMin = int(match[9] + match[11])), 
                dateSetter.call(date, int(match[1]), int(match[2]) - 1, int(match[3]));
                var h = int(match[4] || 0) - tzHour, m = int(match[5] || 0) - tzMin, s = int(match[6] || 0), ms = Math.round(1e3 * parseFloat("0." + (match[7] || 0)));
                return timeSetter.call(date, h, m, s, ms), date;
            }
            return string;
        }
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(date, format) {
            var fn, match, text = "", parts = [];
            if (format = format || "mediumDate", format = $locale.DATETIME_FORMATS[format] || format, 
            isString(date) && (date = NUMBER_STRING.test(date) ? int(date) : jsonStringToDate(date)), 
            isNumber(date) && (date = new Date(date)), !isDate(date)) return date;
            for (;format; ) match = DATE_FORMATS_SPLIT.exec(format), match ? (parts = concat(parts, match, 1), 
            format = parts.pop()) : (parts.push(format), format = null);
            return forEach(parts, function(value) {
                fn = DATE_FORMATS[value], text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), text;
        };
    }
    function jsonFilter() {
        return function(object) {
            return toJson(object, !0);
        };
    }
    function limitToFilter() {
        return function(input, limit) {
            if (!isArray(input) && !isString(input)) return input;
            if (limit = int(limit), isString(input)) return limit ? limit >= 0 ? input.slice(0, limit) : input.slice(limit, input.length) : "";
            var i, n, out = [];
            for (limit > input.length ? limit = input.length : limit < -input.length && (limit = -input.length), 
            limit > 0 ? (i = 0, n = limit) : (i = input.length + limit, n = input.length); n > i; i++) out.push(input[i]);
            return out;
        };
    }
    function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder) {
            function comparator(o1, o2) {
                for (var i = 0; i < sortPredicate.length; i++) {
                    var comp = sortPredicate[i](o1, o2);
                    if (0 !== comp) return comp;
                }
                return 0;
            }
            function reverseComparator(comp, descending) {
                return toBoolean(descending) ? function(a, b) {
                    return comp(b, a);
                } : comp;
            }
            function compare(v1, v2) {
                var t1 = typeof v1, t2 = typeof v2;
                return t1 == t2 ? ("string" == t1 && (v1 = v1.toLowerCase(), v2 = v2.toLowerCase()), 
                v1 === v2 ? 0 : v2 > v1 ? -1 : 1) : t2 > t1 ? -1 : 1;
            }
            if (!isArray(array)) return array;
            if (!sortPredicate) return array;
            sortPredicate = isArray(sortPredicate) ? sortPredicate : [ sortPredicate ], sortPredicate = map(sortPredicate, function(predicate) {
                var descending = !1, get = predicate || identity;
                if (isString(predicate) && (("+" == predicate.charAt(0) || "-" == predicate.charAt(0)) && (descending = "-" == predicate.charAt(0), 
                predicate = predicate.substring(1)), get = $parse(predicate), get.constant)) {
                    var key = get();
                    return reverseComparator(function(a, b) {
                        return compare(a[key], b[key]);
                    }, descending);
                }
                return reverseComparator(function(a, b) {
                    return compare(get(a), get(b));
                }, descending);
            });
            for (var arrayCopy = [], i = 0; i < array.length; i++) arrayCopy.push(array[i]);
            return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
        };
    }
    function ngDirective(directive) {
        return isFunction(directive) && (directive = {
            link: directive
        }), directive.restrict = directive.restrict || "AC", valueFn(directive);
    }
    function FormController(element, attrs, $scope, $animate) {
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            $animate.removeClass(element, (isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey), 
            $animate.addClass(element, (isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        var form = this, parentForm = element.parent().controller("form") || nullFormCtrl, invalidCount = 0, errors = form.$error = {}, controls = [];
        form.$name = attrs.name || attrs.ngForm, form.$dirty = !1, form.$pristine = !0, 
        form.$valid = !0, form.$invalid = !1, parentForm.$addControl(form), element.addClass(PRISTINE_CLASS), 
        toggleValidCss(!0), form.$addControl = function(control) {
            assertNotHasOwnProperty(control.$name, "input"), controls.push(control), control.$name && (form[control.$name] = control);
        }, form.$removeControl = function(control) {
            control.$name && form[control.$name] === control && delete form[control.$name], 
            forEach(errors, function(queue, validationToken) {
                form.$setValidity(validationToken, !0, control);
            }), arrayRemove(controls, control);
        }, form.$setValidity = function(validationToken, isValid, control) {
            var queue = errors[validationToken];
            if (isValid) queue && (arrayRemove(queue, control), queue.length || (invalidCount--, 
            invalidCount || (toggleValidCss(isValid), form.$valid = !0, form.$invalid = !1), 
            errors[validationToken] = !1, toggleValidCss(!0, validationToken), parentForm.$setValidity(validationToken, !0, form))); else {
                if (invalidCount || toggleValidCss(isValid), queue) {
                    if (includes(queue, control)) return;
                } else errors[validationToken] = queue = [], invalidCount++, toggleValidCss(!1, validationToken), 
                parentForm.$setValidity(validationToken, !1, form);
                queue.push(control), form.$valid = !1, form.$invalid = !0;
            }
        }, form.$setDirty = function() {
            $animate.removeClass(element, PRISTINE_CLASS), $animate.addClass(element, DIRTY_CLASS), 
            form.$dirty = !0, form.$pristine = !1, parentForm.$setDirty();
        }, form.$setPristine = function() {
            $animate.removeClass(element, DIRTY_CLASS), $animate.addClass(element, PRISTINE_CLASS), 
            form.$dirty = !1, form.$pristine = !0, forEach(controls, function(control) {
                control.$setPristine();
            });
        };
    }
    function validate(ctrl, validatorName, validity, value) {
        return ctrl.$setValidity(validatorName, validity), validity ? value : undefined;
    }
    function addNativeHtml5Validators(ctrl, validatorName, element) {
        var validity = element.prop("validity");
        if (isObject(validity)) {
            var validator = function(value) {
                return ctrl.$error[validatorName] || !(validity.badInput || validity.customError || validity.typeMismatch) || validity.valueMissing ? value : void ctrl.$setValidity(validatorName, !1);
            };
            ctrl.$parsers.push(validator);
        }
    }
    function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var validity = element.prop("validity");
        if (!$sniffer.android) {
            var composing = !1;
            element.on("compositionstart", function() {
                composing = !0;
            }), element.on("compositionend", function() {
                composing = !1, listener();
            });
        }
        var listener = function() {
            if (!composing) {
                var value = element.val();
                toBoolean(attr.ngTrim || "T") && (value = trim(value)), (ctrl.$viewValue !== value || validity && "" === value && !validity.valueMissing) && (scope.$$phase ? ctrl.$setViewValue(value) : scope.$apply(function() {
                    ctrl.$setViewValue(value);
                }));
            }
        };
        if ($sniffer.hasEvent("input")) element.on("input", listener); else {
            var timeout, deferListener = function() {
                timeout || (timeout = $browser.defer(function() {
                    listener(), timeout = null;
                }));
            };
            element.on("keydown", function(event) {
                var key = event.keyCode;
                91 === key || key > 15 && 19 > key || key >= 37 && 40 >= key || deferListener();
            }), $sniffer.hasEvent("paste") && element.on("paste cut", deferListener);
        }
        element.on("change", listener), ctrl.$render = function() {
            element.val(ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue);
        };
        var patternValidator, match, pattern = attr.ngPattern;
        if (pattern) {
            var validateRegex = function(regexp, value) {
                return validate(ctrl, "pattern", ctrl.$isEmpty(value) || regexp.test(value), value);
            };
            match = pattern.match(/^\/(.*)\/([gim]*)$/), match ? (pattern = new RegExp(match[1], match[2]), 
            patternValidator = function(value) {
                return validateRegex(pattern, value);
            }) : patternValidator = function(value) {
                var patternObj = scope.$eval(pattern);
                if (!patternObj || !patternObj.test) throw minErr("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", pattern, patternObj, startingTag(element));
                return validateRegex(patternObj, value);
            }, ctrl.$formatters.push(patternValidator), ctrl.$parsers.push(patternValidator);
        }
        if (attr.ngMinlength) {
            var minlength = int(attr.ngMinlength), minLengthValidator = function(value) {
                return validate(ctrl, "minlength", ctrl.$isEmpty(value) || value.length >= minlength, value);
            };
            ctrl.$parsers.push(minLengthValidator), ctrl.$formatters.push(minLengthValidator);
        }
        if (attr.ngMaxlength) {
            var maxlength = int(attr.ngMaxlength), maxLengthValidator = function(value) {
                return validate(ctrl, "maxlength", ctrl.$isEmpty(value) || value.length <= maxlength, value);
            };
            ctrl.$parsers.push(maxLengthValidator), ctrl.$formatters.push(maxLengthValidator);
        }
    }
    function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        if (textInputType(scope, element, attr, ctrl, $sniffer, $browser), ctrl.$parsers.push(function(value) {
            var empty = ctrl.$isEmpty(value);
            return empty || NUMBER_REGEXP.test(value) ? (ctrl.$setValidity("number", !0), "" === value ? null : empty ? value : parseFloat(value)) : (ctrl.$setValidity("number", !1), 
            undefined);
        }), addNativeHtml5Validators(ctrl, "number", element), ctrl.$formatters.push(function(value) {
            return ctrl.$isEmpty(value) ? "" : "" + value;
        }), attr.min) {
            var minValidator = function(value) {
                var min = parseFloat(attr.min);
                return validate(ctrl, "min", ctrl.$isEmpty(value) || value >= min, value);
            };
            ctrl.$parsers.push(minValidator), ctrl.$formatters.push(minValidator);
        }
        if (attr.max) {
            var maxValidator = function(value) {
                var max = parseFloat(attr.max);
                return validate(ctrl, "max", ctrl.$isEmpty(value) || max >= value, value);
            };
            ctrl.$parsers.push(maxValidator), ctrl.$formatters.push(maxValidator);
        }
        ctrl.$formatters.push(function(value) {
            return validate(ctrl, "number", ctrl.$isEmpty(value) || isNumber(value), value);
        });
    }
    function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var urlValidator = function(value) {
            return validate(ctrl, "url", ctrl.$isEmpty(value) || URL_REGEXP.test(value), value);
        };
        ctrl.$formatters.push(urlValidator), ctrl.$parsers.push(urlValidator);
    }
    function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var emailValidator = function(value) {
            return validate(ctrl, "email", ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value), value);
        };
        ctrl.$formatters.push(emailValidator), ctrl.$parsers.push(emailValidator);
    }
    function radioInputType(scope, element, attr, ctrl) {
        isUndefined(attr.name) && element.attr("name", nextUid()), element.on("click", function() {
            element[0].checked && scope.$apply(function() {
                ctrl.$setViewValue(attr.value);
            });
        }), ctrl.$render = function() {
            var value = attr.value;
            element[0].checked = value == ctrl.$viewValue;
        }, attr.$observe("value", ctrl.$render);
    }
    function checkboxInputType(scope, element, attr, ctrl) {
        var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
        isString(trueValue) || (trueValue = !0), isString(falseValue) || (falseValue = !1), 
        element.on("click", function() {
            scope.$apply(function() {
                ctrl.$setViewValue(element[0].checked);
            });
        }), ctrl.$render = function() {
            element[0].checked = ctrl.$viewValue;
        }, ctrl.$isEmpty = function(value) {
            return value !== trueValue;
        }, ctrl.$formatters.push(function(value) {
            return value === trueValue;
        }), ctrl.$parsers.push(function(value) {
            return value ? trueValue : falseValue;
        });
    }
    function classDirective(name, selector) {
        return name = "ngClass" + name, [ "$animate", function($animate) {
            function arrayDifference(tokens1, tokens2) {
                var values = [];
                outer: for (var i = 0; i < tokens1.length; i++) {
                    for (var token = tokens1[i], j = 0; j < tokens2.length; j++) if (token == tokens2[j]) continue outer;
                    values.push(token);
                }
                return values;
            }
            function arrayClasses(classVal) {
                if (isArray(classVal)) return classVal;
                if (isString(classVal)) return classVal.split(" ");
                if (isObject(classVal)) {
                    var classes = [];
                    return forEach(classVal, function(v, k) {
                        v && classes.push(k);
                    }), classes;
                }
                return classVal;
            }
            return {
                restrict: "AC",
                link: function(scope, element, attr) {
                    function addClasses(classes) {
                        var newClasses = digestClassCounts(classes, 1);
                        attr.$addClass(newClasses);
                    }
                    function removeClasses(classes) {
                        var newClasses = digestClassCounts(classes, -1);
                        attr.$removeClass(newClasses);
                    }
                    function digestClassCounts(classes, count) {
                        var classCounts = element.data("$classCounts") || {}, classesToUpdate = [];
                        return forEach(classes, function(className) {
                            (count > 0 || classCounts[className]) && (classCounts[className] = (classCounts[className] || 0) + count, 
                            classCounts[className] === +(count > 0) && classesToUpdate.push(className));
                        }), element.data("$classCounts", classCounts), classesToUpdate.join(" ");
                    }
                    function updateClasses(oldClasses, newClasses) {
                        var toAdd = arrayDifference(newClasses, oldClasses), toRemove = arrayDifference(oldClasses, newClasses);
                        toRemove = digestClassCounts(toRemove, -1), toAdd = digestClassCounts(toAdd, 1), 
                        0 === toAdd.length ? $animate.removeClass(element, toRemove) : 0 === toRemove.length ? $animate.addClass(element, toAdd) : $animate.setClass(element, toAdd, toRemove);
                    }
                    function ngClassWatchAction(newVal) {
                        if (selector === !0 || scope.$index % 2 === selector) {
                            var newClasses = arrayClasses(newVal || []);
                            if (oldVal) {
                                if (!equals(newVal, oldVal)) {
                                    var oldClasses = arrayClasses(oldVal);
                                    updateClasses(oldClasses, newClasses);
                                }
                            } else addClasses(newClasses);
                        }
                        oldVal = copy(newVal);
                    }
                    var oldVal;
                    scope.$watch(attr[name], ngClassWatchAction, !0), attr.$observe("class", function() {
                        ngClassWatchAction(scope.$eval(attr[name]));
                    }), "ngClass" !== name && scope.$watch("$index", function($index, old$index) {
                        var mod = 1 & $index;
                        if (mod !== old$index & 1) {
                            var classes = arrayClasses(scope.$eval(attr[name]));
                            mod === selector ? addClasses(classes) : removeClasses(classes);
                        }
                    });
                }
            };
        } ];
    }
    var lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
    }, hasOwnProperty = Object.prototype.hasOwnProperty, uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
    }, manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
            return String.fromCharCode(32 | ch.charCodeAt(0));
        }) : s;
    }, manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
            return String.fromCharCode(-33 & ch.charCodeAt(0));
        }) : s;
    };
    "i" !== "I".toLowerCase() && (lowercase = manualLowercase, uppercase = manualUppercase);
    var msie, jqLite, jQuery, angularModule, nodeName_, slice = [].slice, push = [].push, toString = Object.prototype.toString, ngMinErr = minErr("ng"), angular = (window.angular, 
    window.angular || (window.angular = {})), uid = [ "0", "0", "0" ];
    msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]), isNaN(msie) && (msie = int((/trident\/.*; rv:(\d+)/.exec(lowercase(navigator.userAgent)) || [])[1])), 
    noop.$inject = [], identity.$inject = [];
    var trim = function() {
        return String.prototype.trim ? function(value) {
            return isString(value) ? value.trim() : value;
        } : function(value) {
            return isString(value) ? value.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : value;
        };
    }();
    nodeName_ = 9 > msie ? function(element) {
        return element = element.nodeName ? element : element[0], element.scopeName && "HTML" != element.scopeName ? uppercase(element.scopeName + ":" + element.nodeName) : element.nodeName;
    } : function(element) {
        return element.nodeName ? element.nodeName : element[0].nodeName;
    };
    var SNAKE_CASE_REGEXP = /[A-Z]/g, version = {
        full: "1.2.16",
        major: 1,
        minor: 2,
        dot: 16,
        codeName: "badger-enumeration"
    }, jqCache = JQLite.cache = {}, jqName = JQLite.expando = "ng-" + new Date().getTime(), jqId = 1, addEventListenerFn = window.document.addEventListener ? function(element, type, fn) {
        element.addEventListener(type, fn, !1);
    } : function(element, type, fn) {
        element.attachEvent("on" + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function(element, type, fn) {
        element.removeEventListener(type, fn, !1);
    } : function(element, type, fn) {
        element.detachEvent("on" + type, fn);
    }, SPECIAL_CHARS_REGEXP = (JQLite._data = function(node) {
        return this.cache[node[this.expando]] || {};
    }, /([\:\-\_]+(.))/g), MOZ_HACK_REGEXP = /^moz([A-Z])/, jqLiteMinErr = minErr("jqLite"), SINGLE_TAG_REGEXP = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, HTML_REGEXP = /<|&#?\w+;/, TAG_NAME_REGEXP = /<([\w:]+)/, XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, wrapMap = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
    wrapMap.th = wrapMap.td;
    var JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
            function trigger() {
                fired || (fired = !0, fn());
            }
            var fired = !1;
            "complete" === document.readyState ? setTimeout(trigger) : (this.on("DOMContentLoaded", trigger), 
            JQLite(window).on("load", trigger));
        },
        toString: function() {
            var value = [];
            return forEach(this, function(e) {
                value.push("" + e);
            }), "[" + value.join(", ") + "]";
        },
        eq: function(index) {
            return jqLite(index >= 0 ? this[index] : this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
    }, BOOLEAN_ATTR = {};
    forEach("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
    });
    var BOOLEAN_ELEMENTS = {};
    forEach("input,select,option,textarea,button,form,details".split(","), function(value) {
        BOOLEAN_ELEMENTS[uppercase(value)] = !0;
    }), forEach({
        data: jqLiteData,
        inheritedData: jqLiteInheritedData,
        scope: function(element) {
            return jqLite(element).data("$scope") || jqLiteInheritedData(element.parentNode || element, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(element) {
            return jqLite(element).data("$isolateScope") || jqLite(element).data("$isolateScopeNoTemplate");
        },
        controller: jqLiteController,
        injector: function(element) {
            return jqLiteInheritedData(element, "$injector");
        },
        removeAttr: function(element, name) {
            element.removeAttribute(name);
        },
        hasClass: jqLiteHasClass,
        css: function(element, name, value) {
            if (name = camelCase(name), !isDefined(value)) {
                var val;
                return 8 >= msie && (val = element.currentStyle && element.currentStyle[name], "" === val && (val = "auto")), 
                val = val || element.style[name], 8 >= msie && (val = "" === val ? undefined : val), 
                val;
            }
            element.style[name] = value;
        },
        attr: function(element, name, value) {
            var lowercasedName = lowercase(name);
            if (BOOLEAN_ATTR[lowercasedName]) {
                if (!isDefined(value)) return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
                value ? (element[name] = !0, element.setAttribute(name, lowercasedName)) : (element[name] = !1, 
                element.removeAttribute(lowercasedName));
            } else if (isDefined(value)) element.setAttribute(name, value); else if (element.getAttribute) {
                var ret = element.getAttribute(name, 2);
                return null === ret ? undefined : ret;
            }
        },
        prop: function(element, name, value) {
            return isDefined(value) ? void (element[name] = value) : element[name];
        },
        text: function() {
            function getText(element, value) {
                var textProp = NODE_TYPE_TEXT_PROPERTY[element.nodeType];
                return isUndefined(value) ? textProp ? element[textProp] : "" : void (element[textProp] = value);
            }
            var NODE_TYPE_TEXT_PROPERTY = [];
            return 9 > msie ? (NODE_TYPE_TEXT_PROPERTY[1] = "innerText", NODE_TYPE_TEXT_PROPERTY[3] = "nodeValue") : NODE_TYPE_TEXT_PROPERTY[1] = NODE_TYPE_TEXT_PROPERTY[3] = "textContent", 
            getText.$dv = "", getText;
        }(),
        val: function(element, value) {
            if (isUndefined(value)) {
                if ("SELECT" === nodeName_(element) && element.multiple) {
                    var result = [];
                    return forEach(element.options, function(option) {
                        option.selected && result.push(option.value || option.text);
                    }), 0 === result.length ? null : result;
                }
                return element.value;
            }
            element.value = value;
        },
        html: function(element, value) {
            if (isUndefined(value)) return element.innerHTML;
            for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) jqLiteDealoc(childNodes[i]);
            element.innerHTML = value;
        },
        empty: jqLiteEmpty
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            var i, key;
            if (fn !== jqLiteEmpty && (2 == fn.length && fn !== jqLiteHasClass && fn !== jqLiteController ? arg1 : arg2) === undefined) {
                if (isObject(arg1)) {
                    for (i = 0; i < this.length; i++) if (fn === jqLiteData) fn(this[i], arg1); else for (key in arg1) fn(this[i], key, arg1[key]);
                    return this;
                }
                for (var value = fn.$dv, jj = value === undefined ? Math.min(this.length, 1) : this.length, j = 0; jj > j; j++) {
                    var nodeValue = fn(this[j], arg1, arg2);
                    value = value ? value + nodeValue : nodeValue;
                }
                return value;
            }
            for (i = 0; i < this.length; i++) fn(this[i], arg1, arg2);
            return this;
        };
    }), forEach({
        removeData: jqLiteRemoveData,
        dealoc: jqLiteDealoc,
        on: function onFn(element, type, fn, unsupported) {
            if (isDefined(unsupported)) throw jqLiteMinErr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var events = jqLiteExpandoStore(element, "events"), handle = jqLiteExpandoStore(element, "handle");
            events || jqLiteExpandoStore(element, "events", events = {}), handle || jqLiteExpandoStore(element, "handle", handle = createEventHandler(element, events)), 
            forEach(type.split(" "), function(type) {
                var eventFns = events[type];
                if (!eventFns) {
                    if ("mouseenter" == type || "mouseleave" == type) {
                        var contains = document.body.contains || document.body.compareDocumentPosition ? function(a, b) {
                            var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                            return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                        } : function(a, b) {
                            if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                            return !1;
                        };
                        events[type] = [];
                        var eventmap = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        onFn(element, eventmap[type], function(event) {
                            var target = this, related = event.relatedTarget;
                            (!related || related !== target && !contains(target, related)) && handle(event, type);
                        });
                    } else addEventListenerFn(element, type, handle), events[type] = [];
                    eventFns = events[type];
                }
                eventFns.push(fn);
            });
        },
        off: jqLiteOff,
        one: function(element, type, fn) {
            element = jqLite(element), element.on(type, function onFn() {
                element.off(type, fn), element.off(type, onFn);
            }), element.on(type, fn);
        },
        replaceWith: function(element, replaceNode) {
            var index, parent = element.parentNode;
            jqLiteDealoc(element), forEach(new JQLite(replaceNode), function(node) {
                index ? parent.insertBefore(node, index.nextSibling) : parent.replaceChild(node, element), 
                index = node;
            });
        },
        children: function(element) {
            var children = [];
            return forEach(element.childNodes, function(element) {
                1 === element.nodeType && children.push(element);
            }), children;
        },
        contents: function(element) {
            return element.contentDocument || element.childNodes || [];
        },
        append: function(element, node) {
            forEach(new JQLite(node), function(child) {
                (1 === element.nodeType || 11 === element.nodeType) && element.appendChild(child);
            });
        },
        prepend: function(element, node) {
            if (1 === element.nodeType) {
                var index = element.firstChild;
                forEach(new JQLite(node), function(child) {
                    element.insertBefore(child, index);
                });
            }
        },
        wrap: function(element, wrapNode) {
            wrapNode = jqLite(wrapNode)[0];
            var parent = element.parentNode;
            parent && parent.replaceChild(wrapNode, element), wrapNode.appendChild(element);
        },
        remove: function(element) {
            jqLiteDealoc(element);
            var parent = element.parentNode;
            parent && parent.removeChild(element);
        },
        after: function(element, newElement) {
            var index = element, parent = element.parentNode;
            forEach(new JQLite(newElement), function(node) {
                parent.insertBefore(node, index.nextSibling), index = node;
            });
        },
        addClass: jqLiteAddClass,
        removeClass: jqLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
            selector && forEach(selector.split(" "), function(className) {
                var classCondition = condition;
                isUndefined(classCondition) && (classCondition = !jqLiteHasClass(element, className)), 
                (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
            });
        },
        parent: function(element) {
            var parent = element.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
        },
        next: function(element) {
            if (element.nextElementSibling) return element.nextElementSibling;
            for (var elm = element.nextSibling; null != elm && 1 !== elm.nodeType; ) elm = elm.nextSibling;
            return elm;
        },
        find: function(element, selector) {
            return element.getElementsByTagName ? element.getElementsByTagName(selector) : [];
        },
        clone: jqLiteClone,
        triggerHandler: function(element, eventName, eventData) {
            var eventFns = (jqLiteExpandoStore(element, "events") || {})[eventName];
            eventData = eventData || [];
            var event = [ {
                preventDefault: noop,
                stopPropagation: noop
            } ];
            forEach(eventFns, function(fn) {
                fn.apply(element, event.concat(eventData));
            });
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2, arg3) {
            for (var value, i = 0; i < this.length; i++) isUndefined(value) ? (value = fn(this[i], arg1, arg2, arg3), 
            isDefined(value) && (value = jqLite(value))) : jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
            return isDefined(value) ? value : this;
        }, JQLite.prototype.bind = JQLite.prototype.on, JQLite.prototype.unbind = JQLite.prototype.off;
    }), HashMap.prototype = {
        put: function(key, value) {
            this[hashKey(key)] = value;
        },
        get: function(key) {
            return this[hashKey(key)];
        },
        remove: function(key) {
            var value = this[key = hashKey(key)];
            return delete this[key], value;
        }
    };
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, FN_ARG_SPLIT = /,/, FN_ARG = /^\s*(_?)(\S+?)\1\s*$/, STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, $injectorMinErr = minErr("$injector"), $animateMinErr = minErr("$animate"), $AnimateProvider = [ "$provide", function($provide) {
        this.$$selectors = {}, this.register = function(name, factory) {
            var key = name + "-animation";
            if (name && "." != name.charAt(0)) throw $animateMinErr("notcsel", "Expecting class selector starting with '.' got '{0}'.", name);
            this.$$selectors[name.substr(1)] = key, $provide.factory(key, factory);
        }, this.classNameFilter = function(expression) {
            return 1 === arguments.length && (this.$$classNameFilter = expression instanceof RegExp ? expression : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$timeout", "$$asyncCallback", function($timeout, $$asyncCallback) {
            function async(fn) {
                fn && $$asyncCallback(fn);
            }
            return {
                enter: function(element, parent, after, done) {
                    after ? after.after(element) : (parent && parent[0] || (parent = after.parent()), 
                    parent.append(element)), async(done);
                },
                leave: function(element, done) {
                    element.remove(), async(done);
                },
                move: function(element, parent, after, done) {
                    this.enter(element, parent, after, done);
                },
                addClass: function(element, className, done) {
                    className = isString(className) ? className : isArray(className) ? className.join(" ") : "", 
                    forEach(element, function(element) {
                        jqLiteAddClass(element, className);
                    }), async(done);
                },
                removeClass: function(element, className, done) {
                    className = isString(className) ? className : isArray(className) ? className.join(" ") : "", 
                    forEach(element, function(element) {
                        jqLiteRemoveClass(element, className);
                    }), async(done);
                },
                setClass: function(element, add, remove, done) {
                    forEach(element, function(element) {
                        jqLiteAddClass(element, add), jqLiteRemoveClass(element, remove);
                    }), async(done);
                },
                enabled: noop
            };
        } ];
    } ], $compileMinErr = minErr("$compile");
    $CompileProvider.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i, $interpolateMinErr = minErr("$interpolate"), PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, DEFAULT_PORTS = {
        http: 80,
        https: 443,
        ftp: 21
    }, $locationMinErr = minErr("$location");
    LocationHashbangInHtml5Url.prototype = LocationHashbangUrl.prototype = LocationHtml5Url.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: locationGetter("$$absUrl"),
        url: function(url, replace) {
            if (isUndefined(url)) return this.$$url;
            var match = PATH_MATCH.exec(url);
            return match[1] && this.path(decodeURIComponent(match[1])), (match[2] || match[1]) && this.search(match[3] || ""), 
            this.hash(match[5] || "", replace), this;
        },
        protocol: locationGetter("$$protocol"),
        host: locationGetter("$$host"),
        port: locationGetter("$$port"),
        path: locationGetterSetter("$$path", function(path) {
            return "/" == path.charAt(0) ? path : "/" + path;
        }),
        search: function(search, paramValue) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (isString(search)) this.$$search = parseKeyValue(search); else {
                    if (!isObject(search)) throw $locationMinErr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    this.$$search = search;
                }
                break;

              default:
                isUndefined(paramValue) || null === paramValue ? delete this.$$search[search] : this.$$search[search] = paramValue;
            }
            return this.$$compose(), this;
        },
        hash: locationGetterSetter("$$hash", identity),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    var promiseWarning, $parseMinErr = minErr("$parse"), promiseWarningCache = {}, OPERATORS = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: noop,
        "+": function(self, locals, a, b) {
            return a = a(self, locals), b = b(self, locals), isDefined(a) ? isDefined(b) ? a + b : a : isDefined(b) ? b : undefined;
        },
        "-": function(self, locals, a, b) {
            return a = a(self, locals), b = b(self, locals), (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
        },
        "*": function(self, locals, a, b) {
            return a(self, locals) * b(self, locals);
        },
        "/": function(self, locals, a, b) {
            return a(self, locals) / b(self, locals);
        },
        "%": function(self, locals, a, b) {
            return a(self, locals) % b(self, locals);
        },
        "^": function(self, locals, a, b) {
            return a(self, locals) ^ b(self, locals);
        },
        "=": noop,
        "===": function(self, locals, a, b) {
            return a(self, locals) === b(self, locals);
        },
        "!==": function(self, locals, a, b) {
            return a(self, locals) !== b(self, locals);
        },
        "==": function(self, locals, a, b) {
            return a(self, locals) == b(self, locals);
        },
        "!=": function(self, locals, a, b) {
            return a(self, locals) != b(self, locals);
        },
        "<": function(self, locals, a, b) {
            return a(self, locals) < b(self, locals);
        },
        ">": function(self, locals, a, b) {
            return a(self, locals) > b(self, locals);
        },
        "<=": function(self, locals, a, b) {
            return a(self, locals) <= b(self, locals);
        },
        ">=": function(self, locals, a, b) {
            return a(self, locals) >= b(self, locals);
        },
        "&&": function(self, locals, a, b) {
            return a(self, locals) && b(self, locals);
        },
        "||": function(self, locals, a, b) {
            return a(self, locals) || b(self, locals);
        },
        "&": function(self, locals, a, b) {
            return a(self, locals) & b(self, locals);
        },
        "|": function(self, locals, a, b) {
            return b(self, locals)(self, locals, a(self, locals));
        },
        "!": function(self, locals, a) {
            return !a(self, locals);
        }
    }, ESCAPE = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Lexer = function(options) {
        this.options = options;
    };
    Lexer.prototype = {
        constructor: Lexer,
        lex: function(text) {
            this.text = text, this.index = 0, this.ch = undefined, this.lastCh = ":", this.tokens = [];
            for (var token, json = []; this.index < this.text.length; ) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(), 
                this.was("{,") && "{" === json[0] && (token = this.tokens[this.tokens.length - 1]) && (token.json = -1 === token.text.indexOf(".")); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && json.unshift(this.ch), this.is("}]") && json.shift(), this.index++; else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue;
                    }
                    var ch2 = this.ch + this.peek(), ch3 = ch2 + this.peek(2), fn = OPERATORS[this.ch], fn2 = OPERATORS[ch2], fn3 = OPERATORS[ch3];
                    fn3 ? (this.tokens.push({
                        index: this.index,
                        text: ch3,
                        fn: fn3
                    }), this.index += 3) : fn2 ? (this.tokens.push({
                        index: this.index,
                        text: ch2,
                        fn: fn2
                    }), this.index += 2) : fn ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: fn,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(chars) {
            return -1 !== chars.indexOf(this.ch);
        },
        was: function(chars) {
            return -1 !== chars.indexOf(this.lastCh);
        },
        peek: function(i) {
            var num = i || 1;
            return this.index + num < this.text.length ? this.text.charAt(this.index + num) : !1;
        },
        isNumber: function(ch) {
            return ch >= "0" && "9" >= ch;
        },
        isWhitespace: function(ch) {
            return " " === ch || "\r" === ch || "	" === ch || "\n" === ch || "" === ch || " " === ch;
        },
        isIdent: function(ch) {
            return ch >= "a" && "z" >= ch || ch >= "A" && "Z" >= ch || "_" === ch || "$" === ch;
        },
        isExpOperator: function(ch) {
            return "-" === ch || "+" === ch || this.isNumber(ch);
        },
        throwError: function(error, start, end) {
            end = end || this.index;
            var colStr = isDefined(start) ? "s " + start + "-" + this.index + " [" + this.text.substring(start, end) + "]" : " " + end;
            throw $parseMinErr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", error, colStr, this.text);
        },
        readNumber: function() {
            for (var number = "", start = this.index; this.index < this.text.length; ) {
                var ch = lowercase(this.text.charAt(this.index));
                if ("." == ch || this.isNumber(ch)) number += ch; else {
                    var peekCh = this.peek();
                    if ("e" == ch && this.isExpOperator(peekCh)) number += ch; else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && "e" == number.charAt(number.length - 1)) number += ch; else {
                        if (!this.isExpOperator(ch) || peekCh && this.isNumber(peekCh) || "e" != number.charAt(number.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            number = 1 * number, this.tokens.push({
                index: start,
                text: number,
                json: !0,
                fn: function() {
                    return number;
                }
            });
        },
        readIdent: function() {
            for (var lastDot, peekIndex, methodName, ch, parser = this, ident = "", start = this.index; this.index < this.text.length && (ch = this.text.charAt(this.index), 
            "." === ch || this.isIdent(ch) || this.isNumber(ch)); ) "." === ch && (lastDot = this.index), 
            ident += ch, this.index++;
            if (lastDot) for (peekIndex = this.index; peekIndex < this.text.length; ) {
                if (ch = this.text.charAt(peekIndex), "(" === ch) {
                    methodName = ident.substr(lastDot - start + 1), ident = ident.substr(0, lastDot - start), 
                    this.index = peekIndex;
                    break;
                }
                if (!this.isWhitespace(ch)) break;
                peekIndex++;
            }
            var token = {
                index: start,
                text: ident
            };
            if (OPERATORS.hasOwnProperty(ident)) token.fn = OPERATORS[ident], token.json = OPERATORS[ident]; else {
                var getter = getterFn(ident, this.options, this.text);
                token.fn = extend(function(self, locals) {
                    return getter(self, locals);
                }, {
                    assign: function(self, value) {
                        return setter(self, ident, value, parser.text, parser.options);
                    }
                });
            }
            this.tokens.push(token), methodName && (this.tokens.push({
                index: lastDot,
                text: ".",
                json: !1
            }), this.tokens.push({
                index: lastDot + 1,
                text: methodName,
                json: !1
            }));
        },
        readString: function(quote) {
            var start = this.index;
            this.index++;
            for (var string = "", rawString = quote, escape = !1; this.index < this.text.length; ) {
                var ch = this.text.charAt(this.index);
                if (rawString += ch, escape) {
                    if ("u" === ch) {
                        var hex = this.text.substring(this.index + 1, this.index + 5);
                        hex.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + hex + "]"), 
                        this.index += 4, string += String.fromCharCode(parseInt(hex, 16));
                    } else {
                        var rep = ESCAPE[ch];
                        string += rep ? rep : ch;
                    }
                    escape = !1;
                } else if ("\\" === ch) escape = !0; else {
                    if (ch === quote) return this.index++, void this.tokens.push({
                        index: start,
                        text: rawString,
                        string: string,
                        json: !0,
                        fn: function() {
                            return string;
                        }
                    });
                    string += ch;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", start);
        }
    };
    var Parser = function(lexer, $filter, options) {
        this.lexer = lexer, this.$filter = $filter, this.options = options;
    };
    Parser.ZERO = extend(function() {
        return 0;
    }, {
        constant: !0
    }), Parser.prototype = {
        constructor: Parser,
        parse: function(text, json) {
            this.text = text, this.json = json, this.tokens = this.lexer.lex(text), json && (this.assignment = this.logicalOR, 
            this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
                this.throwError("is not valid json", {
                    text: text,
                    index: 0
                });
            });
            var value = json ? this.primary() : this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            value.literal = !!value.literal, value.constant = !!value.constant, value;
        },
        primary: function() {
            var primary;
            if (this.expect("(")) primary = this.filterChain(), this.consume(")"); else if (this.expect("[")) primary = this.arrayDeclaration(); else if (this.expect("{")) primary = this.object(); else {
                var token = this.expect();
                primary = token.fn, primary || this.throwError("not a primary expression", token), 
                token.json && (primary.constant = !0, primary.literal = !0);
            }
            for (var next, context; next = this.expect("(", "[", "."); ) "(" === next.text ? (primary = this.functionCall(primary, context), 
            context = null) : "[" === next.text ? (context = primary, primary = this.objectIndex(primary)) : "." === next.text ? (context = primary, 
            primary = this.fieldAccess(primary)) : this.throwError("IMPOSSIBLE");
            return primary;
        },
        throwError: function(msg, token) {
            throw $parseMinErr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", token.text, msg, token.index + 1, this.text, this.text.substring(token.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(e1, e2, e3, e4) {
            if (this.tokens.length > 0) {
                var token = this.tokens[0], t = token.text;
                if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) return token;
            }
            return !1;
        },
        expect: function(e1, e2, e3, e4) {
            var token = this.peek(e1, e2, e3, e4);
            return token ? (this.json && !token.json && this.throwError("is not valid json", token), 
            this.tokens.shift(), token) : !1;
        },
        consume: function(e1) {
            this.expect(e1) || this.throwError("is unexpected, expecting [" + e1 + "]", this.peek());
        },
        unaryFn: function(fn, right) {
            return extend(function(self, locals) {
                return fn(self, locals, right);
            }, {
                constant: right.constant
            });
        },
        ternaryFn: function(left, middle, right) {
            return extend(function(self, locals) {
                return left(self, locals) ? middle(self, locals) : right(self, locals);
            }, {
                constant: left.constant && middle.constant && right.constant
            });
        },
        binaryFn: function(left, fn, right) {
            return extend(function(self, locals) {
                return fn(self, locals, left, right);
            }, {
                constant: left.constant && right.constant
            });
        },
        statements: function() {
            for (var statements = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && statements.push(this.filterChain()), 
            !this.expect(";")) return 1 === statements.length ? statements[0] : function(self, locals) {
                for (var value, i = 0; i < statements.length; i++) {
                    var statement = statements[i];
                    statement && (value = statement(self, locals));
                }
                return value;
            };
        },
        filterChain: function() {
            for (var token, left = this.expression(); ;) {
                if (!(token = this.expect("|"))) return left;
                left = this.binaryFn(left, token.fn, this.filter());
            }
        },
        filter: function() {
            for (var token = this.expect(), fn = this.$filter(token.text), argsFn = []; ;) {
                if (!(token = this.expect(":"))) {
                    var fnInvoke = function(self, locals, input) {
                        for (var args = [ input ], i = 0; i < argsFn.length; i++) args.push(argsFn[i](self, locals));
                        return fn.apply(self, args);
                    };
                    return function() {
                        return fnInvoke;
                    };
                }
                argsFn.push(this.expression());
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var right, token, left = this.ternary();
            return (token = this.expect("=")) ? (left.assign || this.throwError("implies assignment but [" + this.text.substring(0, token.index) + "] can not be assigned to", token), 
            right = this.ternary(), function(scope, locals) {
                return left.assign(scope, right(scope, locals), locals);
            }) : left;
        },
        ternary: function() {
            var middle, token, left = this.logicalOR();
            return (token = this.expect("?")) ? (middle = this.ternary(), (token = this.expect(":")) ? this.ternaryFn(left, middle, this.ternary()) : void this.throwError("expected :", token)) : left;
        },
        logicalOR: function() {
            for (var token, left = this.logicalAND(); ;) {
                if (!(token = this.expect("||"))) return left;
                left = this.binaryFn(left, token.fn, this.logicalAND());
            }
        },
        logicalAND: function() {
            var token, left = this.equality();
            return (token = this.expect("&&")) && (left = this.binaryFn(left, token.fn, this.logicalAND())), 
            left;
        },
        equality: function() {
            var token, left = this.relational();
            return (token = this.expect("==", "!=", "===", "!==")) && (left = this.binaryFn(left, token.fn, this.equality())), 
            left;
        },
        relational: function() {
            var token, left = this.additive();
            return (token = this.expect("<", ">", "<=", ">=")) && (left = this.binaryFn(left, token.fn, this.relational())), 
            left;
        },
        additive: function() {
            for (var token, left = this.multiplicative(); token = this.expect("+", "-"); ) left = this.binaryFn(left, token.fn, this.multiplicative());
            return left;
        },
        multiplicative: function() {
            for (var token, left = this.unary(); token = this.expect("*", "/", "%"); ) left = this.binaryFn(left, token.fn, this.unary());
            return left;
        },
        unary: function() {
            var token;
            return this.expect("+") ? this.primary() : (token = this.expect("-")) ? this.binaryFn(Parser.ZERO, token.fn, this.unary()) : (token = this.expect("!")) ? this.unaryFn(token.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(object) {
            var parser = this, field = this.expect().text, getter = getterFn(field, this.options, this.text);
            return extend(function(scope, locals, self) {
                return getter(self || object(scope, locals));
            }, {
                assign: function(scope, value, locals) {
                    return setter(object(scope, locals), field, value, parser.text, parser.options);
                }
            });
        },
        objectIndex: function(obj) {
            var parser = this, indexFn = this.expression();
            return this.consume("]"), extend(function(self, locals) {
                var v, p, o = obj(self, locals), i = indexFn(self, locals);
                return o ? (v = ensureSafeObject(o[i], parser.text), v && v.then && parser.options.unwrapPromises && (p = v, 
                "$$v" in v || (p.$$v = undefined, p.then(function(val) {
                    p.$$v = val;
                })), v = v.$$v), v) : undefined;
            }, {
                assign: function(self, value, locals) {
                    var key = indexFn(self, locals), safe = ensureSafeObject(obj(self, locals), parser.text);
                    return safe[key] = value;
                }
            });
        },
        functionCall: function(fn, contextGetter) {
            var argsFn = [];
            if (")" !== this.peekToken().text) do argsFn.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var parser = this;
            return function(scope, locals) {
                for (var args = [], context = contextGetter ? contextGetter(scope, locals) : scope, i = 0; i < argsFn.length; i++) args.push(argsFn[i](scope, locals));
                var fnPtr = fn(scope, locals, context) || noop;
                ensureSafeObject(context, parser.text), ensureSafeObject(fnPtr, parser.text);
                var v = fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
                return ensureSafeObject(v, parser.text);
            };
        },
        arrayDeclaration: function() {
            var elementFns = [], allConstant = !0;
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var elementFn = this.expression();
                elementFns.push(elementFn), elementFn.constant || (allConstant = !1);
            } while (this.expect(","));
            return this.consume("]"), extend(function(self, locals) {
                for (var array = [], i = 0; i < elementFns.length; i++) array.push(elementFns[i](self, locals));
                return array;
            }, {
                literal: !0,
                constant: allConstant
            });
        },
        object: function() {
            var keyValues = [], allConstant = !0;
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var token = this.expect(), key = token.string || token.text;
                this.consume(":");
                var value = this.expression();
                keyValues.push({
                    key: key,
                    value: value
                }), value.constant || (allConstant = !1);
            } while (this.expect(","));
            return this.consume("}"), extend(function(self, locals) {
                for (var object = {}, i = 0; i < keyValues.length; i++) {
                    var keyValue = keyValues[i];
                    object[keyValue.key] = keyValue.value(self, locals);
                }
                return object;
            }, {
                literal: !0,
                constant: allConstant
            });
        }
    };
    var getterFnCache = {}, $sceMinErr = minErr("$sce"), SCE_CONTEXTS = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, urlParsingNode = document.createElement("a"), originUrl = urlResolve(window.location.href, !0);
    $FilterProvider.$inject = [ "$provide" ], currencyFilter.$inject = [ "$locale" ], 
    numberFilter.$inject = [ "$locale" ];
    var DECIMAL_SEP = ".", DATE_FORMATS = {
        yyyy: dateGetter("FullYear", 4),
        yy: dateGetter("FullYear", 2, 0, !0),
        y: dateGetter("FullYear", 1),
        MMMM: dateStrGetter("Month"),
        MMM: dateStrGetter("Month", !0),
        MM: dateGetter("Month", 2, 1),
        M: dateGetter("Month", 1, 1),
        dd: dateGetter("Date", 2),
        d: dateGetter("Date", 1),
        HH: dateGetter("Hours", 2),
        H: dateGetter("Hours", 1),
        hh: dateGetter("Hours", 2, -12),
        h: dateGetter("Hours", 1, -12),
        mm: dateGetter("Minutes", 2),
        m: dateGetter("Minutes", 1),
        ss: dateGetter("Seconds", 2),
        s: dateGetter("Seconds", 1),
        sss: dateGetter("Milliseconds", 3),
        EEEE: dateStrGetter("Day"),
        EEE: dateStrGetter("Day", !0),
        a: ampmGetter,
        Z: timeZoneGetter
    }, DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\-?\d+$/;
    dateFilter.$inject = [ "$locale" ];
    var lowercaseFilter = valueFn(lowercase), uppercaseFilter = valueFn(uppercase);
    orderByFilter.$inject = [ "$parse" ];
    var htmlAnchorDirective = valueFn({
        restrict: "E",
        compile: function(element, attr) {
            return 8 >= msie && (attr.href || attr.name || attr.$set("href", ""), element.append(document.createComment("IE fix"))), 
            attr.href || attr.xlinkHref || attr.name ? void 0 : function(scope, element) {
                var href = "[object SVGAnimatedString]" === toString.call(element.prop("href")) ? "xlink:href" : "href";
                element.on("click", function(event) {
                    element.attr(href) || event.preventDefault();
                });
            };
        }
    }), ngAttributeAliasDirectives = {};
    forEach(BOOLEAN_ATTR, function(propName, attrName) {
        if ("multiple" != propName) {
            var normalized = directiveNormalize("ng-" + attrName);
            ngAttributeAliasDirectives[normalized] = function() {
                return {
                    priority: 100,
                    link: function(scope, element, attr) {
                        scope.$watch(attr[normalized], function(value) {
                            attr.$set(attrName, !!value);
                        });
                    }
                };
            };
        }
    }), forEach([ "src", "srcset", "href" ], function(attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 99,
                link: function(scope, element, attr) {
                    var propName = attrName, name = attrName;
                    "href" === attrName && "[object SVGAnimatedString]" === toString.call(element.prop("href")) && (name = "xlinkHref", 
                    attr.$attr[name] = "xlink:href", propName = null), attr.$observe(normalized, function(value) {
                        value && (attr.$set(name, value), msie && propName && element.prop(propName, attr[name]));
                    });
                }
            };
        };
    });
    var nullFormCtrl = {
        $addControl: noop,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop
    };
    FormController.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var formDirectiveFactory = function(isNgForm) {
        return [ "$timeout", function($timeout) {
            var formDirective = {
                name: "form",
                restrict: isNgForm ? "EAC" : "E",
                controller: FormController,
                compile: function() {
                    return {
                        pre: function(scope, formElement, attr, controller) {
                            if (!attr.action) {
                                var preventDefaultListener = function(event) {
                                    event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                                };
                                addEventListenerFn(formElement[0], "submit", preventDefaultListener), formElement.on("$destroy", function() {
                                    $timeout(function() {
                                        removeEventListenerFn(formElement[0], "submit", preventDefaultListener);
                                    }, 0, !1);
                                });
                            }
                            var parentFormCtrl = formElement.parent().controller("form"), alias = attr.name || attr.ngForm;
                            alias && setter(scope, alias, controller, alias), parentFormCtrl && formElement.on("$destroy", function() {
                                parentFormCtrl.$removeControl(controller), alias && setter(scope, alias, undefined, alias), 
                                extend(controller, nullFormCtrl);
                            });
                        }
                    };
                }
            };
            return formDirective;
        } ];
    }, formDirective = formDirectiveFactory(), ngFormDirective = formDirectiveFactory(!0), URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i, NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, inputType = {
        text: textInputType,
        number: numberInputType,
        url: urlInputType,
        email: emailInputType,
        radio: radioInputType,
        checkbox: checkboxInputType,
        hidden: noop,
        button: noop,
        submit: noop,
        reset: noop,
        file: noop
    }, inputDirective = [ "$browser", "$sniffer", function($browser, $sniffer) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(scope, element, attr, ctrl) {
                ctrl && (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
            }
        };
    } ], VALID_CLASS = "ng-valid", INVALID_CLASS = "ng-invalid", PRISTINE_CLASS = "ng-pristine", DIRTY_CLASS = "ng-dirty", NgModelController = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function($scope, $exceptionHandler, $attr, $element, $parse, $animate) {
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            $animate.removeClass($element, (isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey), 
            $animate.addClass($element, (isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], 
        this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) throw minErr("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", $attr.ngModel, startingTag($element));
        this.$render = noop, this.$isEmpty = function(value) {
            return isUndefined(value) || "" === value || null === value || value !== value;
        };
        var parentForm = $element.inheritedData("$formController") || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS), toggleValidCss(!0), this.$setValidity = function(validationErrorKey, isValid) {
            $error[validationErrorKey] !== !isValid && (isValid ? ($error[validationErrorKey] && invalidCount--, 
            invalidCount || (toggleValidCss(!0), this.$valid = !0, this.$invalid = !1)) : (toggleValidCss(!1), 
            this.$invalid = !0, this.$valid = !1, invalidCount++), $error[validationErrorKey] = !isValid, 
            toggleValidCss(isValid, validationErrorKey), parentForm.$setValidity(validationErrorKey, isValid, this));
        }, this.$setPristine = function() {
            this.$dirty = !1, this.$pristine = !0, $animate.removeClass($element, DIRTY_CLASS), 
            $animate.addClass($element, PRISTINE_CLASS);
        }, this.$setViewValue = function(value) {
            this.$viewValue = value, this.$pristine && (this.$dirty = !0, this.$pristine = !1, 
            $animate.removeClass($element, PRISTINE_CLASS), $animate.addClass($element, DIRTY_CLASS), 
            parentForm.$setDirty()), forEach(this.$parsers, function(fn) {
                value = fn(value);
            }), this.$modelValue !== value && (this.$modelValue = value, ngModelSet($scope, value), 
            forEach(this.$viewChangeListeners, function(listener) {
                try {
                    listener();
                } catch (e) {
                    $exceptionHandler(e);
                }
            }));
        };
        var ctrl = this;
        $scope.$watch(function() {
            var value = ngModelGet($scope);
            if (ctrl.$modelValue !== value) {
                var formatters = ctrl.$formatters, idx = formatters.length;
                for (ctrl.$modelValue = value; idx--; ) value = formatters[idx](value);
                ctrl.$viewValue !== value && (ctrl.$viewValue = value, ctrl.$render());
            }
            return value;
        });
    } ], ngModelDirective = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: NgModelController,
            link: function(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
                formCtrl.$addControl(modelCtrl), scope.$on("$destroy", function() {
                    formCtrl.$removeControl(modelCtrl);
                });
            }
        };
    }, ngChangeDirective = valueFn({
        require: "ngModel",
        link: function(scope, element, attr, ctrl) {
            ctrl.$viewChangeListeners.push(function() {
                scope.$eval(attr.ngChange);
            });
        }
    }), requiredDirective = function() {
        return {
            require: "?ngModel",
            link: function(scope, elm, attr, ctrl) {
                if (ctrl) {
                    attr.required = !0;
                    var validator = function(value) {
                        return attr.required && ctrl.$isEmpty(value) ? void ctrl.$setValidity("required", !1) : (ctrl.$setValidity("required", !0), 
                        value);
                    };
                    ctrl.$formatters.push(validator), ctrl.$parsers.unshift(validator), attr.$observe("required", function() {
                        validator(ctrl.$viewValue);
                    });
                }
            }
        };
    }, ngListDirective = function() {
        return {
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ",", parse = function(viewValue) {
                    if (!isUndefined(viewValue)) {
                        var list = [];
                        return viewValue && forEach(viewValue.split(separator), function(value) {
                            value && list.push(trim(value));
                        }), list;
                    }
                };
                ctrl.$parsers.push(parse), ctrl.$formatters.push(function(value) {
                    return isArray(value) ? value.join(", ") : undefined;
                }), ctrl.$isEmpty = function(value) {
                    return !value || !value.length;
                };
            }
        };
    }, CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/, ngValueDirective = function() {
        return {
            priority: 100,
            compile: function(tpl, tplAttr) {
                return CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue) ? function(scope, elm, attr) {
                    attr.$set("value", scope.$eval(attr.ngValue));
                } : function(scope, elm, attr) {
                    scope.$watch(attr.ngValue, function(value) {
                        attr.$set("value", value);
                    });
                };
            }
        };
    }, ngBindDirective = ngDirective(function(scope, element, attr) {
        element.addClass("ng-binding").data("$binding", attr.ngBind), scope.$watch(attr.ngBind, function(value) {
            element.text(value == undefined ? "" : value);
        });
    }), ngBindTemplateDirective = [ "$interpolate", function($interpolate) {
        return function(scope, element, attr) {
            var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
            element.addClass("ng-binding").data("$binding", interpolateFn), attr.$observe("ngBindTemplate", function(value) {
                element.text(value);
            });
        };
    } ], ngBindHtmlDirective = [ "$sce", "$parse", function($sce, $parse) {
        return function(scope, element, attr) {
            function getStringValue() {
                return (parsed(scope) || "").toString();
            }
            element.addClass("ng-binding").data("$binding", attr.ngBindHtml);
            var parsed = $parse(attr.ngBindHtml);
            scope.$watch(getStringValue, function() {
                element.html($sce.getTrustedHtml(parsed(scope)) || "");
            });
        };
    } ], ngClassDirective = classDirective("", !0), ngClassOddDirective = classDirective("Odd", 0), ngClassEvenDirective = classDirective("Even", 1), ngCloakDirective = ngDirective({
        compile: function(element, attr) {
            attr.$set("ngCloak", undefined), element.removeClass("ng-cloak");
        }
    }), ngControllerDirective = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], ngEventDirectives = {};
    forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(name) {
        var directiveName = directiveNormalize("ng-" + name);
        ngEventDirectives[directiveName] = [ "$parse", function($parse) {
            return {
                compile: function($element, attr) {
                    var fn = $parse(attr[directiveName]);
                    return function(scope, element) {
                        element.on(lowercase(name), function(event) {
                            scope.$apply(function() {
                                fn(scope, {
                                    $event: event
                                });
                            });
                        });
                    };
                }
            };
        } ];
    });
    var ngIfDirective = [ "$animate", function($animate) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function($scope, $element, $attr, ctrl, $transclude) {
                var block, childScope, previousElements;
                $scope.$watch($attr.ngIf, function(value) {
                    toBoolean(value) ? childScope || (childScope = $scope.$new(), $transclude(childScope, function(clone) {
                        clone[clone.length++] = document.createComment(" end ngIf: " + $attr.ngIf + " "), 
                        block = {
                            clone: clone
                        }, $animate.enter(clone, $element.parent(), $element);
                    })) : (previousElements && (previousElements.remove(), previousElements = null), 
                    childScope && (childScope.$destroy(), childScope = null), block && (previousElements = getBlockElements(block.clone), 
                    $animate.leave(previousElements, function() {
                        previousElements = null;
                    }), block = null));
                });
            }
        };
    } ], ngIncludeDirective = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function($http, $templateCache, $anchorScroll, $animate, $sce) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: angular.noop,
            compile: function(element, attr) {
                var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || "", autoScrollExp = attr.autoscroll;
                return function(scope, $element, $attr, ctrl, $transclude) {
                    var currentScope, previousElement, currentElement, changeCounter = 0, cleanupLastIncludeContent = function() {
                        previousElement && (previousElement.remove(), previousElement = null), currentScope && (currentScope.$destroy(), 
                        currentScope = null), currentElement && ($animate.leave(currentElement, function() {
                            previousElement = null;
                        }), previousElement = currentElement, currentElement = null);
                    };
                    scope.$watch($sce.parseAsResourceUrl(srcExp), function(src) {
                        var afterAnimation = function() {
                            !isDefined(autoScrollExp) || autoScrollExp && !scope.$eval(autoScrollExp) || $anchorScroll();
                        }, thisChangeId = ++changeCounter;
                        src ? ($http.get(src, {
                            cache: $templateCache
                        }).success(function(response) {
                            if (thisChangeId === changeCounter) {
                                var newScope = scope.$new();
                                ctrl.template = response;
                                var clone = $transclude(newScope, function(clone) {
                                    cleanupLastIncludeContent(), $animate.enter(clone, null, $element, afterAnimation);
                                });
                                currentScope = newScope, currentElement = clone, currentScope.$emit("$includeContentLoaded"), 
                                scope.$eval(onloadExp);
                            }
                        }).error(function() {
                            thisChangeId === changeCounter && cleanupLastIncludeContent();
                        }), scope.$emit("$includeContentRequested")) : (cleanupLastIncludeContent(), ctrl.template = null);
                    });
                };
            }
        };
    } ], ngIncludeFillContentDirective = [ "$compile", function($compile) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(scope, $element, $attr, ctrl) {
                $element.html(ctrl.template), $compile($element.contents())(scope);
            }
        };
    } ], ngInitDirective = ngDirective({
        priority: 450,
        compile: function() {
            return {
                pre: function(scope, element, attrs) {
                    scope.$eval(attrs.ngInit);
                }
            };
        }
    }), ngNonBindableDirective = ngDirective({
        terminal: !0,
        priority: 1e3
    }), ngPluralizeDirective = [ "$locale", "$interpolate", function($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
            restrict: "EA",
            link: function(scope, element, attr) {
                var numberExp = attr.count, whenExp = attr.$attr.when && element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp) || {}, whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), isWhen = /^when(Minus)?(.+)$/;
                forEach(attr, function(expression, attributeName) {
                    isWhen.test(attributeName) && (whens[lowercase(attributeName.replace("when", "").replace("Minus", "-"))] = element.attr(attr.$attr[attributeName]));
                }), forEach(whens, function(expression, key) {
                    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + "-" + offset + endSymbol));
                }), scope.$watch(function() {
                    var value = parseFloat(scope.$eval(numberExp));
                    return isNaN(value) ? "" : (value in whens || (value = $locale.pluralCat(value - offset)), 
                    whensExpFns[value](scope, element, !0));
                }, function(newVal) {
                    element.text(newVal);
                });
            }
        };
    } ], ngRepeatDirective = [ "$parse", "$animate", function($parse, $animate) {
        function getBlockStart(block) {
            return block.clone[0];
        }
        function getBlockEnd(block) {
            return block.clone[block.clone.length - 1];
        }
        var NG_REMOVED = "$$NG_REMOVED", ngRepeatMinErr = minErr("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function($scope, $element, $attr, ctrl, $transclude) {
                var trackByExp, trackByExpGetter, trackByIdExpFn, trackByIdArrayFn, trackByIdObjFn, lhs, rhs, valueIdentifier, keyIdentifier, expression = $attr.ngRepeat, match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), hashFnLocals = {
                    $id: hashKey
                };
                if (!match) throw ngRepeatMinErr("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
                if (lhs = match[1], rhs = match[2], trackByExp = match[3], trackByExp ? (trackByExpGetter = $parse(trackByExp), 
                trackByIdExpFn = function(key, value, index) {
                    return keyIdentifier && (hashFnLocals[keyIdentifier] = key), hashFnLocals[valueIdentifier] = value, 
                    hashFnLocals.$index = index, trackByExpGetter($scope, hashFnLocals);
                }) : (trackByIdArrayFn = function(key, value) {
                    return hashKey(value);
                }, trackByIdObjFn = function(key) {
                    return key;
                }), match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !match) throw ngRepeatMinErr("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
                valueIdentifier = match[3] || match[1], keyIdentifier = match[2];
                var lastBlockMap = {};
                $scope.$watchCollection(rhs, function(collection) {
                    var index, length, nextNode, arrayLength, childScope, key, value, trackById, trackByIdFn, collectionKeys, block, elementsToRemove, previousNode = $element[0], nextBlockMap = {}, nextBlockOrder = [];
                    if (isArrayLike(collection)) collectionKeys = collection, trackByIdFn = trackByIdExpFn || trackByIdArrayFn; else {
                        trackByIdFn = trackByIdExpFn || trackByIdObjFn, collectionKeys = [];
                        for (key in collection) collection.hasOwnProperty(key) && "$" != key.charAt(0) && collectionKeys.push(key);
                        collectionKeys.sort();
                    }
                    for (arrayLength = collectionKeys.length, length = nextBlockOrder.length = collectionKeys.length, 
                    index = 0; length > index; index++) if (key = collection === collectionKeys ? index : collectionKeys[index], 
                    value = collection[key], trackById = trackByIdFn(key, value, index), assertNotHasOwnProperty(trackById, "`track by` id"), 
                    lastBlockMap.hasOwnProperty(trackById)) block = lastBlockMap[trackById], delete lastBlockMap[trackById], 
                    nextBlockMap[trackById] = block, nextBlockOrder[index] = block; else {
                        if (nextBlockMap.hasOwnProperty(trackById)) throw forEach(nextBlockOrder, function(block) {
                            block && block.scope && (lastBlockMap[block.id] = block);
                        }), ngRepeatMinErr("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", expression, trackById);
                        nextBlockOrder[index] = {
                            id: trackById
                        }, nextBlockMap[trackById] = !1;
                    }
                    for (key in lastBlockMap) lastBlockMap.hasOwnProperty(key) && (block = lastBlockMap[key], 
                    elementsToRemove = getBlockElements(block.clone), $animate.leave(elementsToRemove), 
                    forEach(elementsToRemove, function(element) {
                        element[NG_REMOVED] = !0;
                    }), block.scope.$destroy());
                    for (index = 0, length = collectionKeys.length; length > index; index++) {
                        if (key = collection === collectionKeys ? index : collectionKeys[index], value = collection[key], 
                        block = nextBlockOrder[index], nextBlockOrder[index - 1] && (previousNode = getBlockEnd(nextBlockOrder[index - 1])), 
                        block.scope) {
                            childScope = block.scope, nextNode = previousNode;
                            do nextNode = nextNode.nextSibling; while (nextNode && nextNode[NG_REMOVED]);
                            getBlockStart(block) != nextNode && $animate.move(getBlockElements(block.clone), null, jqLite(previousNode)), 
                            previousNode = getBlockEnd(block);
                        } else childScope = $scope.$new();
                        childScope[valueIdentifier] = value, keyIdentifier && (childScope[keyIdentifier] = key), 
                        childScope.$index = index, childScope.$first = 0 === index, childScope.$last = index === arrayLength - 1, 
                        childScope.$middle = !(childScope.$first || childScope.$last), childScope.$odd = !(childScope.$even = 0 === (1 & index)), 
                        block.scope || $transclude(childScope, function(clone) {
                            clone[clone.length++] = document.createComment(" end ngRepeat: " + expression + " "), 
                            $animate.enter(clone, null, jqLite(previousNode)), previousNode = clone, block.scope = childScope, 
                            block.clone = clone, nextBlockMap[block.id] = block;
                        });
                    }
                    lastBlockMap = nextBlockMap;
                });
            }
        };
    } ], ngShowDirective = [ "$animate", function($animate) {
        return function(scope, element, attr) {
            scope.$watch(attr.ngShow, function(value) {
                $animate[toBoolean(value) ? "removeClass" : "addClass"](element, "ng-hide");
            });
        };
    } ], ngHideDirective = [ "$animate", function($animate) {
        return function(scope, element, attr) {
            scope.$watch(attr.ngHide, function(value) {
                $animate[toBoolean(value) ? "addClass" : "removeClass"](element, "ng-hide");
            });
        };
    } ], ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngStyle, function(newStyles, oldStyles) {
            oldStyles && newStyles !== oldStyles && forEach(oldStyles, function(val, style) {
                element.css(style, "");
            }), newStyles && element.css(newStyles);
        }, !0);
    }), ngSwitchDirective = [ "$animate", function($animate) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(scope, element, attr, ngSwitchController) {
                var selectedTranscludes, selectedElements, previousElements, watchExpr = attr.ngSwitch || attr.on, selectedScopes = [];
                scope.$watch(watchExpr, function(value) {
                    var i, ii = selectedScopes.length;
                    if (ii > 0) {
                        if (previousElements) {
                            for (i = 0; ii > i; i++) previousElements[i].remove();
                            previousElements = null;
                        }
                        for (previousElements = [], i = 0; ii > i; i++) {
                            var selected = selectedElements[i];
                            selectedScopes[i].$destroy(), previousElements[i] = selected, $animate.leave(selected, function() {
                                previousElements.splice(i, 1), 0 === previousElements.length && (previousElements = null);
                            });
                        }
                    }
                    selectedElements = [], selectedScopes = [], (selectedTranscludes = ngSwitchController.cases["!" + value] || ngSwitchController.cases["?"]) && (scope.$eval(attr.change), 
                    forEach(selectedTranscludes, function(selectedTransclude) {
                        var selectedScope = scope.$new();
                        selectedScopes.push(selectedScope), selectedTransclude.transclude(selectedScope, function(caseElement) {
                            var anchor = selectedTransclude.element;
                            selectedElements.push(caseElement), $animate.enter(caseElement, anchor.parent(), anchor);
                        });
                    }));
                });
            }
        };
    } ], ngSwitchWhenDirective = ngDirective({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(scope, element, attrs, ctrl, $transclude) {
            ctrl.cases["!" + attrs.ngSwitchWhen] = ctrl.cases["!" + attrs.ngSwitchWhen] || [], 
            ctrl.cases["!" + attrs.ngSwitchWhen].push({
                transclude: $transclude,
                element: element
            });
        }
    }), ngSwitchDefaultDirective = ngDirective({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(scope, element, attr, ctrl, $transclude) {
            ctrl.cases["?"] = ctrl.cases["?"] || [], ctrl.cases["?"].push({
                transclude: $transclude,
                element: element
            });
        }
    }), ngTranscludeDirective = ngDirective({
        link: function($scope, $element, $attrs, controller, $transclude) {
            if (!$transclude) throw minErr("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", startingTag($element));
            $transclude(function(clone) {
                $element.empty(), $element.append(clone);
            });
        }
    }), scriptDirective = [ "$templateCache", function($templateCache) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(element, attr) {
                if ("text/ng-template" == attr.type) {
                    var templateUrl = attr.id, text = element[0].text;
                    $templateCache.put(templateUrl, text);
                }
            }
        };
    } ], ngOptionsMinErr = minErr("ngOptions"), ngOptionsDirective = valueFn({
        terminal: !0
    }), selectDirective = [ "$compile", "$parse", function($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, nullModelCtrl = {
            $setViewValue: noop
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function($element, $scope, $attrs) {
                var nullOption, unknownOption, self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl;
                self.databound = $attrs.ngModel, self.init = function(ngModelCtrl_, nullOption_, unknownOption_) {
                    ngModelCtrl = ngModelCtrl_, nullOption = nullOption_, unknownOption = unknownOption_;
                }, self.addOption = function(value) {
                    assertNotHasOwnProperty(value, '"option value"'), optionsMap[value] = !0, ngModelCtrl.$viewValue == value && ($element.val(value), 
                    unknownOption.parent() && unknownOption.remove());
                }, self.removeOption = function(value) {
                    this.hasOption(value) && (delete optionsMap[value], ngModelCtrl.$viewValue == value && this.renderUnknownOption(value));
                }, self.renderUnknownOption = function(val) {
                    var unknownVal = "? " + hashKey(val) + " ?";
                    unknownOption.val(unknownVal), $element.prepend(unknownOption), $element.val(unknownVal), 
                    unknownOption.prop("selected", !0);
                }, self.hasOption = function(value) {
                    return optionsMap.hasOwnProperty(value);
                }, $scope.$on("$destroy", function() {
                    self.renderUnknownOption = noop;
                });
            } ],
            link: function(scope, element, attr, ctrls) {
                function setupAsSingle(scope, selectElement, ngModelCtrl, selectCtrl) {
                    ngModelCtrl.$render = function() {
                        var viewValue = ngModelCtrl.$viewValue;
                        selectCtrl.hasOption(viewValue) ? (unknownOption.parent() && unknownOption.remove(), 
                        selectElement.val(viewValue), "" === viewValue && emptyOption.prop("selected", !0)) : isUndefined(viewValue) && emptyOption ? selectElement.val("") : selectCtrl.renderUnknownOption(viewValue);
                    }, selectElement.on("change", function() {
                        scope.$apply(function() {
                            unknownOption.parent() && unknownOption.remove(), ngModelCtrl.$setViewValue(selectElement.val());
                        });
                    });
                }
                function setupAsMultiple(scope, selectElement, ctrl) {
                    var lastView;
                    ctrl.$render = function() {
                        var items = new HashMap(ctrl.$viewValue);
                        forEach(selectElement.find("option"), function(option) {
                            option.selected = isDefined(items.get(option.value));
                        });
                    }, scope.$watch(function() {
                        equals(lastView, ctrl.$viewValue) || (lastView = copy(ctrl.$viewValue), ctrl.$render());
                    }), selectElement.on("change", function() {
                        scope.$apply(function() {
                            var array = [];
                            forEach(selectElement.find("option"), function(option) {
                                option.selected && array.push(option.value);
                            }), ctrl.$setViewValue(array);
                        });
                    });
                }
                function setupAsOptions(scope, selectElement, ctrl) {
                    function render() {
                        var optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, key, groupLength, length, groupIndex, index, selected, lastElement, element, label, optionGroups = {
                            "": []
                        }, optionGroupNames = [ "" ], modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, locals = {}, selectedSet = !1;
                        if (multiple) if (trackFn && isArray(modelValue)) {
                            selectedSet = new HashMap([]);
                            for (var trackIndex = 0; trackIndex < modelValue.length; trackIndex++) locals[valueName] = modelValue[trackIndex], 
                            selectedSet.put(trackFn(scope, locals), modelValue[trackIndex]);
                        } else selectedSet = new HashMap(modelValue);
                        for (index = 0; length = keys.length, length > index; index++) {
                            if (key = index, keyName) {
                                if (key = keys[index], "$" === key.charAt(0)) continue;
                                locals[keyName] = key;
                            }
                            if (locals[valueName] = values[key], optionGroupName = groupByFn(scope, locals) || "", 
                            (optionGroup = optionGroups[optionGroupName]) || (optionGroup = optionGroups[optionGroupName] = [], 
                            optionGroupNames.push(optionGroupName)), multiple) selected = isDefined(selectedSet.remove(trackFn ? trackFn(scope, locals) : valueFn(scope, locals))); else {
                                if (trackFn) {
                                    var modelCast = {};
                                    modelCast[valueName] = modelValue, selected = trackFn(scope, modelCast) === trackFn(scope, locals);
                                } else selected = modelValue === valueFn(scope, locals);
                                selectedSet = selectedSet || selected;
                            }
                            label = displayFn(scope, locals), label = isDefined(label) ? label : "", optionGroup.push({
                                id: trackFn ? trackFn(scope, locals) : keyName ? keys[index] : index,
                                label: label,
                                selected: selected
                            });
                        }
                        for (multiple || (nullOption || null === modelValue ? optionGroups[""].unshift({
                            id: "",
                            label: "",
                            selected: !selectedSet
                        }) : selectedSet || optionGroups[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), groupIndex = 0, groupLength = optionGroupNames.length; groupLength > groupIndex; groupIndex++) {
                            for (optionGroupName = optionGroupNames[groupIndex], optionGroup = optionGroups[optionGroupName], 
                            optionGroupsCache.length <= groupIndex ? (existingParent = {
                                element: optGroupTemplate.clone().attr("label", optionGroupName),
                                label: optionGroup.label
                            }, existingOptions = [ existingParent ], optionGroupsCache.push(existingOptions), 
                            selectElement.append(existingParent.element)) : (existingOptions = optionGroupsCache[groupIndex], 
                            existingParent = existingOptions[0], existingParent.label != optionGroupName && existingParent.element.attr("label", existingParent.label = optionGroupName)), 
                            lastElement = null, index = 0, length = optionGroup.length; length > index; index++) option = optionGroup[index], 
                            (existingOption = existingOptions[index + 1]) ? (lastElement = existingOption.element, 
                            existingOption.label !== option.label && lastElement.text(existingOption.label = option.label), 
                            existingOption.id !== option.id && lastElement.val(existingOption.id = option.id), 
                            existingOption.selected !== option.selected && lastElement.prop("selected", existingOption.selected = option.selected)) : ("" === option.id && nullOption ? element = nullOption : (element = optionTemplate.clone()).val(option.id).attr("selected", option.selected).text(option.label), 
                            existingOptions.push(existingOption = {
                                element: element,
                                label: option.label,
                                id: option.id,
                                selected: option.selected
                            }), lastElement ? lastElement.after(element) : existingParent.element.append(element), 
                            lastElement = element);
                            for (index++; existingOptions.length > index; ) existingOptions.pop().element.remove();
                        }
                        for (;optionGroupsCache.length > groupIndex; ) optionGroupsCache.pop()[0].element.remove();
                    }
                    var match;
                    if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) throw ngOptionsMinErr("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
                    var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ""), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), track = match[8], trackFn = track ? $parse(match[8]) : null, optionGroupsCache = [ [ {
                        element: selectElement,
                        label: ""
                    } ] ];
                    nullOption && ($compile(nullOption)(scope), nullOption.removeClass("ng-scope"), 
                    nullOption.remove()), selectElement.empty(), selectElement.on("change", function() {
                        scope.$apply(function() {
                            var optionGroup, key, value, optionElement, index, groupIndex, length, groupLength, trackIndex, collection = valuesFn(scope) || [], locals = {};
                            if (multiple) {
                                for (value = [], groupIndex = 0, groupLength = optionGroupsCache.length; groupLength > groupIndex; groupIndex++) for (optionGroup = optionGroupsCache[groupIndex], 
                                index = 1, length = optionGroup.length; length > index; index++) if ((optionElement = optionGroup[index].element)[0].selected) {
                                    if (key = optionElement.val(), keyName && (locals[keyName] = key), trackFn) for (trackIndex = 0; trackIndex < collection.length && (locals[valueName] = collection[trackIndex], 
                                    trackFn(scope, locals) != key); trackIndex++) ; else locals[valueName] = collection[key];
                                    value.push(valueFn(scope, locals));
                                }
                            } else {
                                if (key = selectElement.val(), "?" == key) value = undefined; else if ("" === key) value = null; else if (trackFn) {
                                    for (trackIndex = 0; trackIndex < collection.length; trackIndex++) if (locals[valueName] = collection[trackIndex], 
                                    trackFn(scope, locals) == key) {
                                        value = valueFn(scope, locals);
                                        break;
                                    }
                                } else locals[valueName] = collection[key], keyName && (locals[keyName] = key), 
                                value = valueFn(scope, locals);
                                optionGroupsCache[0].length > 1 && optionGroupsCache[0][1].id !== key && (optionGroupsCache[0][1].selected = !1);
                            }
                            ctrl.$setViewValue(value);
                        });
                    }), ctrl.$render = render, scope.$watch(render);
                }
                if (ctrls[1]) {
                    for (var emptyOption, selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = !1, optionTemplate = jqLite(document.createElement("option")), optGroupTemplate = jqLite(document.createElement("optgroup")), unknownOption = optionTemplate.clone(), i = 0, children = element.children(), ii = children.length; ii > i; i++) if ("" === children[i].value) {
                        emptyOption = nullOption = children.eq(i);
                        break;
                    }
                    selectCtrl.init(ngModelCtrl, nullOption, unknownOption), multiple && (ngModelCtrl.$isEmpty = function(value) {
                        return !value || 0 === value.length;
                    }), optionsExp ? setupAsOptions(scope, element, ngModelCtrl) : multiple ? setupAsMultiple(scope, element, ngModelCtrl) : setupAsSingle(scope, element, ngModelCtrl, selectCtrl);
                }
            }
        };
    } ], optionDirective = [ "$interpolate", function($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(element, attr) {
                if (isUndefined(attr.value)) {
                    var interpolateFn = $interpolate(element.text(), !0);
                    interpolateFn || attr.$set("value", element.text());
                }
                return function(scope, element, attr) {
                    var selectCtrlName = "$selectController", parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
                    selectCtrl && selectCtrl.databound ? element.prop("selected", !1) : selectCtrl = nullSelectCtrl, 
                    interpolateFn ? scope.$watch(interpolateFn, function(newVal, oldVal) {
                        attr.$set("value", newVal), newVal !== oldVal && selectCtrl.removeOption(oldVal), 
                        selectCtrl.addOption(newVal);
                    }) : selectCtrl.addOption(attr.value), element.on("$destroy", function() {
                        selectCtrl.removeOption(attr.value);
                    });
                };
            }
        };
    } ], styleDirective = valueFn({
        restrict: "E",
        terminal: !0
    });
    return window.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (bindJQuery(), 
    publishExternalAPI(angular), void jqLite(document).ready(function() {
        angularInit(document, bootstrap);
    }));
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>'), 
define("angular", function(global) {
    return function() {
        var ret;
        return ret || global.angular;
    };
}(this)), function(window, angular, undefined) {
    angular.module("ngAnimate", [ "ng" ]).factory("$$animateReflow", [ "$$rAF", "$document", function($$rAF, $document) {
        var bod = $document[0].body;
        return function(fn) {
            return $$rAF(function() {
                bod.offsetWidth + 1;
                fn();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function($provide, $animateProvider) {
        function extractElementNode(element) {
            for (var i = 0; i < element.length; i++) {
                var elm = element[i];
                if (elm.nodeType == ELEMENT_NODE) return elm;
            }
        }
        function prepareElement(element) {
            return element && angular.element(element);
        }
        function stripCommentsFromElement(element) {
            return angular.element(extractElementNode(element));
        }
        function isMatchingElement(elm1, elm2) {
            return extractElementNode(elm1) == extractElementNode(elm2);
        }
        var noop = angular.noop, forEach = angular.forEach, selectors = $animateProvider.$$selectors, ELEMENT_NODE = 1, NG_ANIMATE_STATE = "$$ngAnimateState", NG_ANIMATE_CLASS_NAME = "ng-animate", rootAnimateState = {
            running: !0
        };
        $provide.decorator("$animate", [ "$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function($delegate, $injector, $sniffer, $rootElement, $$asyncCallback, $rootScope) {
            function lookup(name) {
                if (name) {
                    var matches = [], flagMap = {}, classes = name.substr(1).split(".");
                    ($sniffer.transitions || $sniffer.animations) && matches.push($injector.get(selectors[""]));
                    for (var i = 0; i < classes.length; i++) {
                        var klass = classes[i], selectorFactoryName = selectors[klass];
                        selectorFactoryName && !flagMap[klass] && (matches.push($injector.get(selectorFactoryName)), 
                        flagMap[klass] = !0);
                    }
                    return matches;
                }
            }
            function animationRunner(element, animationEvent, className) {
                function registerAnimation(animationFactory, event) {
                    var afterFn = animationFactory[event], beforeFn = animationFactory["before" + event.charAt(0).toUpperCase() + event.substr(1)];
                    return afterFn || beforeFn ? ("leave" == event && (beforeFn = afterFn, afterFn = null), 
                    after.push({
                        event: event,
                        fn: afterFn
                    }), before.push({
                        event: event,
                        fn: beforeFn
                    }), !0) : void 0;
                }
                function run(fns, cancellations, allCompleteFn) {
                    function afterAnimationComplete(index) {
                        if (cancellations) {
                            if ((cancellations[index] || noop)(), ++count < animations.length) return;
                            cancellations = null;
                        }
                        allCompleteFn();
                    }
                    var animations = [];
                    forEach(fns, function(animation) {
                        animation.fn && animations.push(animation);
                    });
                    var count = 0;
                    forEach(animations, function(animation, index) {
                        var progress = function() {
                            afterAnimationComplete(index);
                        };
                        switch (animation.event) {
                          case "setClass":
                            cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress));
                            break;

                          case "addClass":
                            cancellations.push(animation.fn(element, classNameAdd || className, progress));
                            break;

                          case "removeClass":
                            cancellations.push(animation.fn(element, classNameRemove || className, progress));
                            break;

                          default:
                            cancellations.push(animation.fn(element, progress));
                        }
                    }), cancellations && 0 === cancellations.length && allCompleteFn();
                }
                var node = element[0];
                if (node) {
                    var classNameAdd, classNameRemove, isSetClassOperation = "setClass" == animationEvent, isClassBased = isSetClassOperation || "addClass" == animationEvent || "removeClass" == animationEvent;
                    angular.isArray(className) && (classNameAdd = className[0], classNameRemove = className[1], 
                    className = classNameAdd + " " + classNameRemove);
                    var currentClassName = element.attr("class"), classes = currentClassName + " " + className;
                    if (isAnimatableClassName(classes)) {
                        var beforeComplete = noop, beforeCancel = [], before = [], afterComplete = noop, afterCancel = [], after = [], animationLookup = (" " + classes).replace(/\s+/g, ".");
                        return forEach(lookup(animationLookup), function(animationFactory) {
                            var created = registerAnimation(animationFactory, animationEvent);
                            !created && isSetClassOperation && (registerAnimation(animationFactory, "addClass"), 
                            registerAnimation(animationFactory, "removeClass"));
                        }), {
                            node: node,
                            event: animationEvent,
                            className: className,
                            isClassBased: isClassBased,
                            isSetClassOperation: isSetClassOperation,
                            before: function(allCompleteFn) {
                                beforeComplete = allCompleteFn, run(before, beforeCancel, function() {
                                    beforeComplete = noop, allCompleteFn();
                                });
                            },
                            after: function(allCompleteFn) {
                                afterComplete = allCompleteFn, run(after, afterCancel, function() {
                                    afterComplete = noop, allCompleteFn();
                                });
                            },
                            cancel: function() {
                                beforeCancel && (forEach(beforeCancel, function(cancelFn) {
                                    (cancelFn || noop)(!0);
                                }), beforeComplete(!0)), afterCancel && (forEach(afterCancel, function(cancelFn) {
                                    (cancelFn || noop)(!0);
                                }), afterComplete(!0));
                            }
                        };
                    }
                }
            }
            function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, doneCallback) {
                function fireDOMCallback(animationPhase) {
                    var eventName = "$animate:" + animationPhase;
                    elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0 && $$asyncCallback(function() {
                        element.triggerHandler(eventName, {
                            event: animationEvent,
                            className: className
                        });
                    });
                }
                function fireBeforeCallbackAsync() {
                    fireDOMCallback("before");
                }
                function fireAfterCallbackAsync() {
                    fireDOMCallback("after");
                }
                function fireDoneCallbackAsync() {
                    fireDOMCallback("close"), doneCallback && $$asyncCallback(function() {
                        doneCallback();
                    });
                }
                function fireDOMOperation() {
                    fireDOMOperation.hasBeenRun || (fireDOMOperation.hasBeenRun = !0, domOperation());
                }
                function closeAnimation() {
                    if (!closeAnimation.hasBeenRun) {
                        closeAnimation.hasBeenRun = !0;
                        var data = element.data(NG_ANIMATE_STATE);
                        data && (runner && runner.isClassBased ? cleanup(element, className) : ($$asyncCallback(function() {
                            var data = element.data(NG_ANIMATE_STATE) || {};
                            localAnimationCount == data.index && cleanup(element, className, animationEvent);
                        }), element.data(NG_ANIMATE_STATE, data))), fireDoneCallbackAsync();
                    }
                }
                var runner = animationRunner(element, animationEvent, className);
                if (!runner) return fireDOMOperation(), fireBeforeCallbackAsync(), fireAfterCallbackAsync(), 
                void closeAnimation();
                className = runner.className;
                var elementEvents = angular.element._data(runner.node);
                elementEvents = elementEvents && elementEvents.events, parentElement || (parentElement = afterElement ? afterElement.parent() : element.parent());
                var ngAnimateState = element.data(NG_ANIMATE_STATE) || {}, runningAnimations = ngAnimateState.active || {}, totalActiveAnimations = ngAnimateState.totalActive || 0, lastAnimation = ngAnimateState.last, skipAnimations = runner.isClassBased ? ngAnimateState.disabled || lastAnimation && !lastAnimation.isClassBased : !1;
                if (skipAnimations || animationsDisabled(element, parentElement)) return fireDOMOperation(), 
                fireBeforeCallbackAsync(), fireAfterCallbackAsync(), void closeAnimation();
                var skipAnimation = !1;
                if (totalActiveAnimations > 0) {
                    var animationsToCancel = [];
                    if (runner.isClassBased) {
                        if ("setClass" == lastAnimation.event) animationsToCancel.push(lastAnimation), cleanup(element, className); else if (runningAnimations[className]) {
                            var current = runningAnimations[className];
                            current.event == animationEvent ? skipAnimation = !0 : (animationsToCancel.push(current), 
                            cleanup(element, className));
                        }
                    } else if ("leave" == animationEvent && runningAnimations["ng-leave"]) skipAnimation = !0; else {
                        for (var klass in runningAnimations) animationsToCancel.push(runningAnimations[klass]), 
                        cleanup(element, klass);
                        runningAnimations = {}, totalActiveAnimations = 0;
                    }
                    animationsToCancel.length > 0 && forEach(animationsToCancel, function(operation) {
                        operation.cancel();
                    });
                }
                if (!runner.isClassBased || runner.isSetClassOperation || skipAnimation || (skipAnimation = "addClass" == animationEvent == element.hasClass(className)), 
                skipAnimation) return fireDOMOperation(), fireBeforeCallbackAsync(), fireAfterCallbackAsync(), 
                void fireDoneCallbackAsync();
                "leave" == animationEvent && element.one("$destroy", function() {
                    var element = angular.element(this), state = element.data(NG_ANIMATE_STATE);
                    if (state) {
                        var activeLeaveAnimation = state.active["ng-leave"];
                        activeLeaveAnimation && (activeLeaveAnimation.cancel(), cleanup(element, "ng-leave"));
                    }
                }), element.addClass(NG_ANIMATE_CLASS_NAME);
                var localAnimationCount = globalAnimationCounter++;
                totalActiveAnimations++, runningAnimations[className] = runner, element.data(NG_ANIMATE_STATE, {
                    last: runner,
                    active: runningAnimations,
                    index: localAnimationCount,
                    totalActive: totalActiveAnimations
                }), fireBeforeCallbackAsync(), runner.before(function(cancelled) {
                    var data = element.data(NG_ANIMATE_STATE);
                    cancelled = cancelled || !data || !data.active[className] || runner.isClassBased && data.active[className].event != animationEvent, 
                    fireDOMOperation(), cancelled === !0 ? closeAnimation() : (fireAfterCallbackAsync(), 
                    runner.after(closeAnimation));
                });
            }
            function cancelChildAnimations(element) {
                var node = extractElementNode(element);
                if (node) {
                    var nodes = angular.isFunction(node.getElementsByClassName) ? node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) : node.querySelectorAll("." + NG_ANIMATE_CLASS_NAME);
                    forEach(nodes, function(element) {
                        element = angular.element(element);
                        var data = element.data(NG_ANIMATE_STATE);
                        data && data.active && forEach(data.active, function(runner) {
                            runner.cancel();
                        });
                    });
                }
            }
            function cleanup(element, className) {
                if (isMatchingElement(element, $rootElement)) rootAnimateState.disabled || (rootAnimateState.running = !1, 
                rootAnimateState.structural = !1); else if (className) {
                    var data = element.data(NG_ANIMATE_STATE) || {}, removeAnimations = className === !0;
                    !removeAnimations && data.active && data.active[className] && (data.totalActive--, 
                    delete data.active[className]), (removeAnimations || !data.totalActive) && (element.removeClass(NG_ANIMATE_CLASS_NAME), 
                    element.removeData(NG_ANIMATE_STATE));
                }
            }
            function animationsDisabled(element, parentElement) {
                if (rootAnimateState.disabled) return !0;
                if (isMatchingElement(element, $rootElement)) return rootAnimateState.disabled || rootAnimateState.running;
                do {
                    if (0 === parentElement.length) break;
                    var isRoot = isMatchingElement(parentElement, $rootElement), state = isRoot ? rootAnimateState : parentElement.data(NG_ANIMATE_STATE), result = state && (!!state.disabled || state.running || state.totalActive > 0);
                    if (isRoot || result) return result;
                    if (isRoot) return !0;
                } while (parentElement = parentElement.parent());
                return !0;
            }
            var globalAnimationCounter = 0;
            $rootElement.data(NG_ANIMATE_STATE, rootAnimateState), $rootScope.$$postDigest(function() {
                $rootScope.$$postDigest(function() {
                    rootAnimateState.running = !1;
                });
            });
            var classNameFilter = $animateProvider.classNameFilter(), isAnimatableClassName = classNameFilter ? function(className) {
                return classNameFilter.test(className);
            } : function() {
                return !0;
            };
            return {
                enter: function(element, parentElement, afterElement, doneCallback) {
                    element = angular.element(element), parentElement = prepareElement(parentElement), 
                    afterElement = prepareElement(afterElement), this.enabled(!1, element), $delegate.enter(element, parentElement, afterElement), 
                    $rootScope.$$postDigest(function() {
                        element = stripCommentsFromElement(element), performAnimation("enter", "ng-enter", element, parentElement, afterElement, noop, doneCallback);
                    });
                },
                leave: function(element, doneCallback) {
                    element = angular.element(element), cancelChildAnimations(element), this.enabled(!1, element), 
                    $rootScope.$$postDigest(function() {
                        performAnimation("leave", "ng-leave", stripCommentsFromElement(element), null, null, function() {
                            $delegate.leave(element);
                        }, doneCallback);
                    });
                },
                move: function(element, parentElement, afterElement, doneCallback) {
                    element = angular.element(element), parentElement = prepareElement(parentElement), 
                    afterElement = prepareElement(afterElement), cancelChildAnimations(element), this.enabled(!1, element), 
                    $delegate.move(element, parentElement, afterElement), $rootScope.$$postDigest(function() {
                        element = stripCommentsFromElement(element), performAnimation("move", "ng-move", element, parentElement, afterElement, noop, doneCallback);
                    });
                },
                addClass: function(element, className, doneCallback) {
                    element = angular.element(element), element = stripCommentsFromElement(element), 
                    performAnimation("addClass", className, element, null, null, function() {
                        $delegate.addClass(element, className);
                    }, doneCallback);
                },
                removeClass: function(element, className, doneCallback) {
                    element = angular.element(element), element = stripCommentsFromElement(element), 
                    performAnimation("removeClass", className, element, null, null, function() {
                        $delegate.removeClass(element, className);
                    }, doneCallback);
                },
                setClass: function(element, add, remove, doneCallback) {
                    element = angular.element(element), element = stripCommentsFromElement(element), 
                    performAnimation("setClass", [ add, remove ], element, null, null, function() {
                        $delegate.setClass(element, add, remove);
                    }, doneCallback);
                },
                enabled: function(value, element) {
                    switch (arguments.length) {
                      case 2:
                        if (value) cleanup(element); else {
                            var data = element.data(NG_ANIMATE_STATE) || {};
                            data.disabled = !0, element.data(NG_ANIMATE_STATE, data);
                        }
                        break;

                      case 1:
                        rootAnimateState.disabled = !value;
                        break;

                      default:
                        value = !rootAnimateState.disabled;
                    }
                    return !!value;
                }
            };
        } ]), $animateProvider.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function($window, $sniffer, $timeout, $$animateReflow) {
            function afterReflow(element, callback) {
                cancelAnimationReflow && cancelAnimationReflow(), animationReflowQueue.push(callback), 
                cancelAnimationReflow = $$animateReflow(function() {
                    forEach(animationReflowQueue, function(fn) {
                        fn();
                    }), animationReflowQueue = [], cancelAnimationReflow = null, lookupCache = {};
                });
            }
            function animationCloseHandler(element, totalTime) {
                var node = extractElementNode(element);
                element = angular.element(node), animationElementQueue.push(element);
                var futureTimestamp = Date.now() + totalTime;
                closingTimestamp >= futureTimestamp || ($timeout.cancel(closingTimer), closingTimestamp = futureTimestamp, 
                closingTimer = $timeout(function() {
                    closeAllAnimations(animationElementQueue), animationElementQueue = [];
                }, totalTime, !1));
            }
            function closeAllAnimations(elements) {
                forEach(elements, function(element) {
                    var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
                    elementData && (elementData.closeAnimationFn || noop)();
                });
            }
            function getElementAnimationDetails(element, cacheKey) {
                var data = cacheKey ? lookupCache[cacheKey] : null;
                if (!data) {
                    var transitionDelayStyle, animationDelayStyle, transitionDurationStyle, transitionPropertyStyle, transitionDuration = 0, transitionDelay = 0, animationDuration = 0, animationDelay = 0;
                    forEach(element, function(element) {
                        if (element.nodeType == ELEMENT_NODE) {
                            var elementStyles = $window.getComputedStyle(element) || {};
                            transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY], transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration), 
                            transitionPropertyStyle = elementStyles[TRANSITION_PROP + PROPERTY_KEY], transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY], 
                            transitionDelay = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay), 
                            animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY], animationDelay = Math.max(parseMaxTime(animationDelayStyle), animationDelay);
                            var aDuration = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);
                            aDuration > 0 && (aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1), 
                            animationDuration = Math.max(aDuration, animationDuration);
                        }
                    }), data = {
                        total: 0,
                        transitionPropertyStyle: transitionPropertyStyle,
                        transitionDurationStyle: transitionDurationStyle,
                        transitionDelayStyle: transitionDelayStyle,
                        transitionDelay: transitionDelay,
                        transitionDuration: transitionDuration,
                        animationDelayStyle: animationDelayStyle,
                        animationDelay: animationDelay,
                        animationDuration: animationDuration
                    }, cacheKey && (lookupCache[cacheKey] = data);
                }
                return data;
            }
            function parseMaxTime(str) {
                var maxValue = 0, values = angular.isString(str) ? str.split(/\s*,\s*/) : [];
                return forEach(values, function(value) {
                    maxValue = Math.max(parseFloat(value) || 0, maxValue);
                }), maxValue;
            }
            function getCacheKey(element) {
                var parentElement = element.parent(), parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
                return parentID || (parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter), 
                parentID = parentCounter), parentID + "-" + extractElementNode(element).getAttribute("class");
            }
            function animateSetup(animationEvent, element, className, calculationDecorator) {
                var cacheKey = getCacheKey(element), eventCacheKey = cacheKey + " " + className, itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0, stagger = {};
                if (itemIndex > 0) {
                    var staggerClassName = className + "-stagger", staggerCacheKey = cacheKey + " " + staggerClassName, applyClasses = !lookupCache[staggerCacheKey];
                    applyClasses && element.addClass(staggerClassName), stagger = getElementAnimationDetails(element, staggerCacheKey), 
                    applyClasses && element.removeClass(staggerClassName);
                }
                calculationDecorator = calculationDecorator || function(fn) {
                    return fn();
                }, element.addClass(className);
                var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {}, timings = calculationDecorator(function() {
                    return getElementAnimationDetails(element, eventCacheKey);
                }), transitionDuration = timings.transitionDuration, animationDuration = timings.animationDuration;
                if (0 === transitionDuration && 0 === animationDuration) return element.removeClass(className), 
                !1;
                element.data(NG_ANIMATE_CSS_DATA_KEY, {
                    running: formerData.running || 0,
                    itemIndex: itemIndex,
                    stagger: stagger,
                    timings: timings,
                    closeAnimationFn: noop
                });
                var isCurrentlyAnimating = formerData.running > 0 || "setClass" == animationEvent;
                return transitionDuration > 0 && blockTransitions(element, className, isCurrentlyAnimating), 
                animationDuration > 0 && stagger.animationDelay > 0 && 0 === stagger.animationDuration && blockKeyframeAnimations(element), 
                !0;
            }
            function isStructuralAnimation(className) {
                return "ng-enter" == className || "ng-move" == className || "ng-leave" == className;
            }
            function blockTransitions(element, className, isAnimating) {
                isStructuralAnimation(className) || !isAnimating ? extractElementNode(element).style[TRANSITION_PROP + PROPERTY_KEY] = "none" : element.addClass(NG_ANIMATE_BLOCK_CLASS_NAME);
            }
            function blockKeyframeAnimations(element) {
                extractElementNode(element).style[ANIMATION_PROP] = "none 0s";
            }
            function unblockTransitions(element) {
                var prop = TRANSITION_PROP + PROPERTY_KEY, node = extractElementNode(element);
                node.style[prop] && node.style[prop].length > 0 && (node.style[prop] = ""), element.removeClass(NG_ANIMATE_BLOCK_CLASS_NAME);
            }
            function unblockKeyframeAnimations(element) {
                var prop = ANIMATION_PROP, node = extractElementNode(element);
                node.style[prop] && node.style[prop].length > 0 && (node.style[prop] = "");
            }
            function animateRun(animationEvent, element, className, activeAnimationComplete) {
                function onEnd() {
                    element.off(css3AnimationEvents, onAnimationProgress), element.removeClass(activeClassName), 
                    animateClose(element, className);
                    var node = extractElementNode(element);
                    for (var i in appliedStyles) node.style.removeProperty(appliedStyles[i]);
                }
                function onAnimationProgress(event) {
                    event.stopPropagation();
                    var ev = event.originalEvent || event, timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now(), elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));
                    Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration && activeAnimationComplete();
                }
                var node = extractElementNode(element), elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
                if (-1 == node.getAttribute("class").indexOf(className) || !elementData) return void activeAnimationComplete();
                var activeClassName = "";
                forEach(className.split(" "), function(klass, i) {
                    activeClassName += (i > 0 ? " " : "") + klass + "-active";
                });
                var stagger = elementData.stagger, timings = elementData.timings, itemIndex = elementData.itemIndex, maxDuration = Math.max(timings.transitionDuration, timings.animationDuration), maxDelay = Math.max(timings.transitionDelay, timings.animationDelay), maxDelayTime = maxDelay * ONE_SECOND, startTime = Date.now(), css3AnimationEvents = ANIMATIONEND_EVENT + " " + TRANSITIONEND_EVENT, style = "", appliedStyles = [];
                if (timings.transitionDuration > 0) {
                    var propertyStyle = timings.transitionPropertyStyle;
                    -1 == propertyStyle.indexOf("all") && (style += CSS_PREFIX + "transition-property: " + propertyStyle + ";", 
                    style += CSS_PREFIX + "transition-duration: " + timings.transitionDurationStyle + ";", 
                    appliedStyles.push(CSS_PREFIX + "transition-property"), appliedStyles.push(CSS_PREFIX + "transition-duration"));
                }
                if (itemIndex > 0) {
                    if (stagger.transitionDelay > 0 && 0 === stagger.transitionDuration) {
                        var delayStyle = timings.transitionDelayStyle;
                        style += CSS_PREFIX + "transition-delay: " + prepareStaggerDelay(delayStyle, stagger.transitionDelay, itemIndex) + "; ", 
                        appliedStyles.push(CSS_PREFIX + "transition-delay");
                    }
                    stagger.animationDelay > 0 && 0 === stagger.animationDuration && (style += CSS_PREFIX + "animation-delay: " + prepareStaggerDelay(timings.animationDelayStyle, stagger.animationDelay, itemIndex) + "; ", 
                    appliedStyles.push(CSS_PREFIX + "animation-delay"));
                }
                if (appliedStyles.length > 0) {
                    var oldStyle = node.getAttribute("style") || "";
                    node.setAttribute("style", oldStyle + "; " + style);
                }
                element.on(css3AnimationEvents, onAnimationProgress), element.addClass(activeClassName), 
                elementData.closeAnimationFn = function() {
                    onEnd(), activeAnimationComplete();
                };
                var staggerTime = itemIndex * (Math.max(stagger.animationDelay, stagger.transitionDelay) || 0), animationTime = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER, totalTime = (staggerTime + animationTime) * ONE_SECOND;
                return elementData.running++, animationCloseHandler(element, totalTime), onEnd;
            }
            function prepareStaggerDelay(delayStyle, staggerDelay, index) {
                var style = "";
                return forEach(delayStyle.split(","), function(val, i) {
                    style += (i > 0 ? "," : "") + (index * staggerDelay + parseInt(val, 10)) + "s";
                }), style;
            }
            function animateBefore(animationEvent, element, className, calculationDecorator) {
                return animateSetup(animationEvent, element, className, calculationDecorator) ? function(cancelled) {
                    cancelled && animateClose(element, className);
                } : void 0;
            }
            function animateAfter(animationEvent, element, className, afterAnimationComplete) {
                return element.data(NG_ANIMATE_CSS_DATA_KEY) ? animateRun(animationEvent, element, className, afterAnimationComplete) : (animateClose(element, className), 
                void afterAnimationComplete());
            }
            function animate(animationEvent, element, className, animationComplete) {
                var preReflowCancellation = animateBefore(animationEvent, element, className);
                if (!preReflowCancellation) return void animationComplete();
                var cancel = preReflowCancellation;
                return afterReflow(element, function() {
                    unblockTransitions(element, className), unblockKeyframeAnimations(element), cancel = animateAfter(animationEvent, element, className, animationComplete);
                }), function(cancelled) {
                    (cancel || noop)(cancelled);
                };
            }
            function animateClose(element, className) {
                element.removeClass(className);
                var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
                data && (data.running && data.running--, data.running && 0 !== data.running || element.removeData(NG_ANIMATE_CSS_DATA_KEY));
            }
            function suffixClasses(classes, suffix) {
                var className = "";
                return classes = angular.isArray(classes) ? classes : classes.split(/\s+/), forEach(classes, function(klass, i) {
                    klass && klass.length > 0 && (className += (i > 0 ? " " : "") + klass + suffix);
                }), className;
            }
            var TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT, CSS_PREFIX = "";
            window.ontransitionend === undefined && window.onwebkittransitionend !== undefined ? (CSS_PREFIX = "-webkit-", 
            TRANSITION_PROP = "WebkitTransition", TRANSITIONEND_EVENT = "webkitTransitionEnd transitionend") : (TRANSITION_PROP = "transition", 
            TRANSITIONEND_EVENT = "transitionend"), window.onanimationend === undefined && window.onwebkitanimationend !== undefined ? (CSS_PREFIX = "-webkit-", 
            ANIMATION_PROP = "WebkitAnimation", ANIMATIONEND_EVENT = "webkitAnimationEnd animationend") : (ANIMATION_PROP = "animation", 
            ANIMATIONEND_EVENT = "animationend");
            var cancelAnimationReflow, DURATION_KEY = "Duration", PROPERTY_KEY = "Property", DELAY_KEY = "Delay", ANIMATION_ITERATION_COUNT_KEY = "IterationCount", NG_ANIMATE_PARENT_KEY = "$$ngAnimateKey", NG_ANIMATE_CSS_DATA_KEY = "$$ngAnimateCSS3Data", NG_ANIMATE_BLOCK_CLASS_NAME = "ng-animate-block-transitions", ELAPSED_TIME_MAX_DECIMAL_PLACES = 3, CLOSING_TIME_BUFFER = 1.5, ONE_SECOND = 1e3, lookupCache = {}, parentCounter = 0, animationReflowQueue = [], closingTimer = null, closingTimestamp = 0, animationElementQueue = [];
            return {
                enter: function(element, animationCompleted) {
                    return animate("enter", element, "ng-enter", animationCompleted);
                },
                leave: function(element, animationCompleted) {
                    return animate("leave", element, "ng-leave", animationCompleted);
                },
                move: function(element, animationCompleted) {
                    return animate("move", element, "ng-move", animationCompleted);
                },
                beforeSetClass: function(element, add, remove, animationCompleted) {
                    var className = suffixClasses(remove, "-remove") + " " + suffixClasses(add, "-add"), cancellationMethod = animateBefore("setClass", element, className, function(fn) {
                        var klass = element.attr("class");
                        element.removeClass(remove), element.addClass(add);
                        var timings = fn();
                        return element.attr("class", klass), timings;
                    });
                    return cancellationMethod ? (afterReflow(element, function() {
                        unblockTransitions(element, className), unblockKeyframeAnimations(element), animationCompleted();
                    }), cancellationMethod) : void animationCompleted();
                },
                beforeAddClass: function(element, className, animationCompleted) {
                    var cancellationMethod = animateBefore("addClass", element, suffixClasses(className, "-add"), function(fn) {
                        element.addClass(className);
                        var timings = fn();
                        return element.removeClass(className), timings;
                    });
                    return cancellationMethod ? (afterReflow(element, function() {
                        unblockTransitions(element, className), unblockKeyframeAnimations(element), animationCompleted();
                    }), cancellationMethod) : void animationCompleted();
                },
                setClass: function(element, add, remove, animationCompleted) {
                    remove = suffixClasses(remove, "-remove"), add = suffixClasses(add, "-add");
                    var className = remove + " " + add;
                    return animateAfter("setClass", element, className, animationCompleted);
                },
                addClass: function(element, className, animationCompleted) {
                    return animateAfter("addClass", element, suffixClasses(className, "-add"), animationCompleted);
                },
                beforeRemoveClass: function(element, className, animationCompleted) {
                    var cancellationMethod = animateBefore("removeClass", element, suffixClasses(className, "-remove"), function(fn) {
                        var klass = element.attr("class");
                        element.removeClass(className);
                        var timings = fn();
                        return element.attr("class", klass), timings;
                    });
                    return cancellationMethod ? (afterReflow(element, function() {
                        unblockTransitions(element, className), unblockKeyframeAnimations(element), animationCompleted();
                    }), cancellationMethod) : void animationCompleted();
                },
                removeClass: function(element, className, animationCompleted) {
                    return animateAfter("removeClass", element, suffixClasses(className, "-remove"), animationCompleted);
                }
            };
        } ]);
    } ]);
}(window, window.angular), define("ngdir/angular-animate", [ "angular" ], function() {}), 
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), 
function(window, angular, undefined) {
    function inherit(parent, extra) {
        return extend(new (extend(function() {}, {
            prototype: parent
        }))(), extra);
    }
    function merge(dst) {
        return forEach(arguments, function(obj) {
            obj !== dst && forEach(obj, function(value, key) {
                dst.hasOwnProperty(key) || (dst[key] = value);
            });
        }), dst;
    }
    function ancestors(first, second) {
        var path = [];
        for (var n in first.path) {
            if (first.path[n] !== second.path[n]) break;
            path.push(first.path[n]);
        }
        return path;
    }
    function arraySearch(array, value) {
        if (Array.prototype.indexOf) return array.indexOf(value, Number(arguments[2]) || 0);
        var len = array.length >>> 0, from = Number(arguments[2]) || 0;
        for (from = 0 > from ? Math.ceil(from) : Math.floor(from), 0 > from && (from += len); len > from; from++) if (from in array && array[from] === value) return from;
        return -1;
    }
    function inheritParams(currentParams, newParams, $current, $to) {
        var parentParams, parents = ancestors($current, $to), inherited = {}, inheritList = [];
        for (var i in parents) if (parents[i].params && parents[i].params.length) {
            parentParams = parents[i].params;
            for (var j in parentParams) arraySearch(inheritList, parentParams[j]) >= 0 || (inheritList.push(parentParams[j]), 
            inherited[parentParams[j]] = currentParams[parentParams[j]]);
        }
        return extend({}, inherited, newParams);
    }
    function normalize(keys, values) {
        var normalized = {};
        return forEach(keys, function(name) {
            var value = values[name];
            normalized[name] = null != value ? String(value) : null;
        }), normalized;
    }
    function equalForKeys(a, b, keys) {
        if (!keys) {
            keys = [];
            for (var n in a) keys.push(n);
        }
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (a[k] != b[k]) return !1;
        }
        return !0;
    }
    function filterByKeys(keys, values) {
        var filtered = {};
        return forEach(keys, function(name) {
            filtered[name] = values[name];
        }), filtered;
    }
    function $Resolve($q, $injector) {
        var VISIT_IN_PROGRESS = 1, VISIT_DONE = 2, NOTHING = {}, NO_DEPENDENCIES = [], NO_LOCALS = NOTHING, NO_PARENT = extend($q.when(NOTHING), {
            $$promises: NOTHING,
            $$values: NOTHING
        });
        this.study = function(invocables) {
            function visit(value, key) {
                if (visited[key] !== VISIT_DONE) {
                    if (cycle.push(key), visited[key] === VISIT_IN_PROGRESS) throw cycle.splice(0, cycle.indexOf(key)), 
                    new Error("Cyclic dependency: " + cycle.join(" -> "));
                    if (visited[key] = VISIT_IN_PROGRESS, isString(value)) plan.push(key, [ function() {
                        return $injector.get(value);
                    } ], NO_DEPENDENCIES); else {
                        var params = $injector.annotate(value);
                        forEach(params, function(param) {
                            param !== key && invocables.hasOwnProperty(param) && visit(invocables[param], param);
                        }), plan.push(key, value, params);
                    }
                    cycle.pop(), visited[key] = VISIT_DONE;
                }
            }
            function isResolve(value) {
                return isObject(value) && value.then && value.$$promises;
            }
            if (!isObject(invocables)) throw new Error("'invocables' must be an object");
            var plan = [], cycle = [], visited = {};
            return forEach(invocables, visit), invocables = cycle = visited = null, function(locals, parent, self) {
                function done() {
                    --wait || (merged || merge(values, parent.$$values), result.$$values = values, result.$$promises = !0, 
                    resolution.resolve(values));
                }
                function fail(reason) {
                    result.$$failure = reason, resolution.reject(reason);
                }
                function invoke(key, invocable, params) {
                    function onfailure(reason) {
                        invocation.reject(reason), fail(reason);
                    }
                    function proceed() {
                        if (!isDefined(result.$$failure)) try {
                            invocation.resolve($injector.invoke(invocable, self, values)), invocation.promise.then(function(result) {
                                values[key] = result, done();
                            }, onfailure);
                        } catch (e) {
                            onfailure(e);
                        }
                    }
                    var invocation = $q.defer(), waitParams = 0;
                    forEach(params, function(dep) {
                        promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep) && (waitParams++, promises[dep].then(function(result) {
                            values[dep] = result, --waitParams || proceed();
                        }, onfailure));
                    }), waitParams || proceed(), promises[key] = invocation.promise;
                }
                if (isResolve(locals) && self === undefined && (self = parent, parent = locals, 
                locals = null), locals) {
                    if (!isObject(locals)) throw new Error("'locals' must be an object");
                } else locals = NO_LOCALS;
                if (parent) {
                    if (!isResolve(parent)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                } else parent = NO_PARENT;
                var resolution = $q.defer(), result = resolution.promise, promises = result.$$promises = {}, values = extend({}, locals), wait = 1 + plan.length / 3, merged = !1;
                if (isDefined(parent.$$failure)) return fail(parent.$$failure), result;
                parent.$$values ? (merged = merge(values, parent.$$values), done()) : (extend(promises, parent.$$promises), 
                parent.then(done, fail));
                for (var i = 0, ii = plan.length; ii > i; i += 3) locals.hasOwnProperty(plan[i]) ? done() : invoke(plan[i], plan[i + 1], plan[i + 2]);
                return result;
            };
        }, this.resolve = function(invocables, locals, parent, self) {
            return this.study(invocables)(locals, parent, self);
        };
    }
    function $TemplateFactory($http, $templateCache, $injector) {
        this.fromConfig = function(config, params, locals) {
            return isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null;
        }, this.fromString = function(template, params) {
            return isFunction(template) ? template(params) : template;
        }, this.fromUrl = function(url, params) {
            return isFunction(url) && (url = url(params)), null == url ? null : $http.get(url, {
                cache: $templateCache
            }).then(function(response) {
                return response.data;
            });
        }, this.fromProvider = function(provider, params, locals) {
            return $injector.invoke(provider, null, locals || {
                params: params
            });
        };
    }
    function UrlMatcher(pattern) {
        function addParameter(id) {
            if (!/^\w+(-+\w+)*$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
            if (names[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
            names[id] = !0, params.push(id);
        }
        function quoteRegExp(string) {
            return string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        }
        var m, placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, names = {}, compiled = "^", last = 0, segments = this.segments = [], params = this.params = [];
        this.source = pattern;
        for (var id, regexp, segment; (m = placeholder.exec(pattern)) && (id = m[2] || m[3], 
        regexp = m[4] || ("*" == m[1] ? ".*" : "[^/]*"), segment = pattern.substring(last, m.index), 
        !(segment.indexOf("?") >= 0)); ) compiled += quoteRegExp(segment) + "(" + regexp + ")", 
        addParameter(id), segments.push(segment), last = placeholder.lastIndex;
        segment = pattern.substring(last);
        var i = segment.indexOf("?");
        if (i >= 0) {
            var search = this.sourceSearch = segment.substring(i);
            segment = segment.substring(0, i), this.sourcePath = pattern.substring(0, last + i), 
            forEach(search.substring(1).split(/[&?]/), addParameter);
        } else this.sourcePath = pattern, this.sourceSearch = "";
        compiled += quoteRegExp(segment) + "$", segments.push(segment), this.regexp = new RegExp(compiled), 
        this.prefix = segments[0];
    }
    function $UrlMatcherFactory() {
        this.compile = function(pattern) {
            return new UrlMatcher(pattern);
        }, this.isMatcher = function(o) {
            return isObject(o) && isFunction(o.exec) && isFunction(o.format) && isFunction(o.concat);
        }, this.$get = function() {
            return this;
        };
    }
    function $UrlRouterProvider($urlMatcherFactory) {
        function regExpPrefix(re) {
            var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
            return null != prefix ? prefix[1].replace(/\\(.)/g, "$1") : "";
        }
        function interpolate(pattern, match) {
            return pattern.replace(/\$(\$|\d{1,2})/, function(m, what) {
                return match["$" === what ? 0 : Number(what)];
            });
        }
        function handleIfMatch($injector, handler, match) {
            if (!match) return !1;
            var result = $injector.invoke(handler, handler, {
                $match: match
            });
            return isDefined(result) ? result : !0;
        }
        var rules = [], otherwise = null;
        this.rule = function(rule) {
            if (!isFunction(rule)) throw new Error("'rule' must be a function");
            return rules.push(rule), this;
        }, this.otherwise = function(rule) {
            if (isString(rule)) {
                var redirect = rule;
                rule = function() {
                    return redirect;
                };
            } else if (!isFunction(rule)) throw new Error("'rule' must be a function");
            return otherwise = rule, this;
        }, this.when = function(what, handler) {
            var redirect, handlerIsString = isString(handler);
            if (isString(what) && (what = $urlMatcherFactory.compile(what)), !handlerIsString && !isFunction(handler) && !isArray(handler)) throw new Error("invalid 'handler' in when()");
            var strategies = {
                matcher: function(what, handler) {
                    return handlerIsString && (redirect = $urlMatcherFactory.compile(handler), handler = [ "$match", function($match) {
                        return redirect.format($match);
                    } ]), extend(function($injector, $location) {
                        return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
                    }, {
                        prefix: isString(what.prefix) ? what.prefix : ""
                    });
                },
                regex: function(what, handler) {
                    if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");
                    return handlerIsString && (redirect = handler, handler = [ "$match", function($match) {
                        return interpolate(redirect, $match);
                    } ]), extend(function($injector, $location) {
                        return handleIfMatch($injector, handler, what.exec($location.path()));
                    }, {
                        prefix: regExpPrefix(what)
                    });
                }
            }, check = {
                matcher: $urlMatcherFactory.isMatcher(what),
                regex: what instanceof RegExp
            };
            for (var n in check) if (check[n]) return this.rule(strategies[n](what, handler));
            throw new Error("invalid 'what' in when()");
        }, this.$get = [ "$location", "$rootScope", "$injector", function($location, $rootScope, $injector) {
            function update(evt) {
                function check(rule) {
                    var handled = rule($injector, $location);
                    return handled ? (isString(handled) && $location.replace().url(handled), !0) : !1;
                }
                if (!evt || !evt.defaultPrevented) {
                    var i, n = rules.length;
                    for (i = 0; n > i; i++) if (check(rules[i])) return;
                    otherwise && check(otherwise);
                }
            }
            return $rootScope.$on("$locationChangeSuccess", update), {
                sync: function() {
                    update();
                }
            };
        } ];
    }
    function $StateProvider($urlRouterProvider, $urlMatcherFactory, $locationProvider) {
        function isRelative(stateName) {
            return 0 === stateName.indexOf(".") || 0 === stateName.indexOf("^");
        }
        function findState(stateOrName, base) {
            var isStr = isString(stateOrName), name = isStr ? stateOrName : stateOrName.name, path = isRelative(name);
            if (path) {
                if (!base) throw new Error("No reference point given for path '" + name + "'");
                for (var rel = name.split("."), i = 0, pathLength = rel.length, current = base; pathLength > i; i++) if ("" !== rel[i] || 0 !== i) {
                    if ("^" !== rel[i]) break;
                    if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
                    current = current.parent;
                } else current = base;
                rel = rel.slice(i).join("."), name = current.name + (current.name && rel ? "." : "") + rel;
            }
            var state = states[name];
            return !state || !isStr && (isStr || state !== stateOrName && state.self !== stateOrName) ? undefined : state;
        }
        function queueState(parentName, state) {
            queue[parentName] || (queue[parentName] = []), queue[parentName].push(state);
        }
        function registerState(state) {
            state = inherit(state, {
                self: state,
                resolve: state.resolve || {},
                toString: function() {
                    return this.name;
                }
            });
            var name = state.name;
            if (!isString(name) || name.indexOf("@") >= 0) throw new Error("State must have a valid name");
            if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");
            var parentName = -1 !== name.indexOf(".") ? name.substring(0, name.lastIndexOf(".")) : isString(state.parent) ? state.parent : "";
            if (parentName && !states[parentName]) return queueState(parentName, state.self);
            for (var key in stateBuilder) isFunction(stateBuilder[key]) && (state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]));
            if (states[name] = state, !state[abstractKey] && state.url && $urlRouterProvider.when(state.url, [ "$match", "$stateParams", function($match, $stateParams) {
                $state.$current.navigable == state && equalForKeys($match, $stateParams) || $state.transitionTo(state, $match, {
                    location: !1
                });
            } ]), queue[name]) for (var i = 0; i < queue[name].length; i++) registerState(queue[name][i]);
            return state;
        }
        function isGlob(text) {
            return text.indexOf("*") > -1;
        }
        function doesStateMatchGlob(glob) {
            var globSegments = glob.split("."), segments = $state.$current.name.split(".");
            if ("**" === globSegments[0] && (segments = segments.slice(segments.indexOf(globSegments[1])), 
            segments.unshift("**")), "**" === globSegments[globSegments.length - 1] && (segments.splice(segments.indexOf(globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE), 
            segments.push("**")), globSegments.length != segments.length) return !1;
            for (var i = 0, l = globSegments.length; l > i; i++) "*" === globSegments[i] && (segments[i] = "*");
            return segments.join("") === globSegments.join("");
        }
        function decorator(name, func) {
            return isString(name) && !isDefined(func) ? stateBuilder[name] : isFunction(func) && isString(name) ? (stateBuilder[name] && !stateBuilder.$delegates[name] && (stateBuilder.$delegates[name] = stateBuilder[name]), 
            stateBuilder[name] = func, this) : this;
        }
        function state(name, definition) {
            return isObject(name) ? definition = name : definition.name = name, registerState(definition), 
            this;
        }
        function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $location, $urlRouter, $browser) {
            function syncUrl() {
                $location.url() !== currentLocation && ($location.url(currentLocation), $location.replace());
            }
            function resolveState(state, params, paramsAreFiltered, inherited, dst) {
                var $stateParams = paramsAreFiltered ? params : filterByKeys(state.params, params), locals = {
                    $stateParams: $stateParams
                };
                dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
                var promises = [ dst.resolve.then(function(globals) {
                    dst.globals = globals;
                }) ];
                return inherited && promises.push(inherited), forEach(state.views, function(view, name) {
                    var injectables = view.resolve && view.resolve !== state.resolve ? view.resolve : {};
                    injectables.$template = [ function() {
                        return $view.load(name, {
                            view: view,
                            locals: locals,
                            params: $stateParams,
                            notify: !1
                        }) || "";
                    } ], promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function(result) {
                        if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                            var injectLocals = angular.extend({}, injectables, locals);
                            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
                        } else result.$$controller = view.controller;
                        result.$$state = state, result.$$controllerAs = view.controllerAs, dst[name] = result;
                    }));
                }), $q.all(promises).then(function() {
                    return dst;
                });
            }
            var TransitionSuperseded = $q.reject(new Error("transition superseded")), TransitionPrevented = $q.reject(new Error("transition prevented")), TransitionAborted = $q.reject(new Error("transition aborted")), TransitionFailed = $q.reject(new Error("transition failed")), currentLocation = $location.url(), baseHref = $browser.baseHref();
            return root.locals = {
                resolve: null,
                globals: {
                    $stateParams: {}
                }
            }, $state = {
                params: {},
                current: root.self,
                $current: root,
                transition: null
            }, $state.reload = function() {
                $state.transitionTo($state.current, $stateParams, {
                    reload: !0,
                    inherit: !1,
                    notify: !1
                });
            }, $state.go = function(to, params, options) {
                return this.transitionTo(to, params, extend({
                    inherit: !0,
                    relative: $state.$current
                }, options));
            }, $state.transitionTo = function(to, toParams, options) {
                toParams = toParams || {}, options = extend({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, options || {});
                var evt, from = $state.$current, fromParams = $state.params, fromPath = from.path, toState = findState(to, options.relative);
                if (!isDefined(toState)) {
                    var redirect = {
                        to: to,
                        toParams: toParams,
                        options: options
                    };
                    if (evt = $rootScope.$broadcast("$stateNotFound", redirect, from.self, fromParams), 
                    evt.defaultPrevented) return syncUrl(), TransitionAborted;
                    if (evt.retry) {
                        if (options.$retry) return syncUrl(), TransitionFailed;
                        var retryTransition = $state.transition = $q.when(evt.retry);
                        return retryTransition.then(function() {
                            return retryTransition !== $state.transition ? TransitionSuperseded : (redirect.options.$retry = !0, 
                            $state.transitionTo(redirect.to, redirect.toParams, redirect.options));
                        }, function() {
                            return TransitionAborted;
                        }), syncUrl(), retryTransition;
                    }
                    if (to = redirect.to, toParams = redirect.toParams, options = redirect.options, 
                    toState = findState(to, options.relative), !isDefined(toState)) {
                        if (options.relative) throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
                        throw new Error("No such state '" + to + "'");
                    }
                }
                if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
                options.inherit && (toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState)), 
                to = toState;
                var keep, state, toPath = to.path, locals = root.locals, toLocals = [];
                for (keep = 0, state = toPath[keep]; state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams) && !options.reload; keep++, 
                state = toPath[keep]) locals = toLocals[keep] = state.locals;
                if (shouldTriggerReload(to, from, locals, options)) return to.self.reloadOnSearch !== !1 && syncUrl(), 
                $state.transition = null, $q.when($state.current);
                if (toParams = normalize(to.params, toParams || {}), options.notify && (evt = $rootScope.$broadcast("$stateChangeStart", to.self, toParams, from.self, fromParams), 
                evt.defaultPrevented)) return syncUrl(), TransitionPrevented;
                for (var resolved = $q.when(locals), l = keep; l < toPath.length; l++, state = toPath[l]) locals = toLocals[l] = inherit(locals), 
                resolved = resolveState(state, toParams, state === to, resolved, locals);
                var transition = $state.transition = resolved.then(function() {
                    var l, entering, exiting;
                    if ($state.transition !== transition) return TransitionSuperseded;
                    for (l = fromPath.length - 1; l >= keep; l--) exiting = fromPath[l], exiting.self.onExit && $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals), 
                    exiting.locals = null;
                    for (l = keep; l < toPath.length; l++) entering = toPath[l], entering.locals = toLocals[l], 
                    entering.self.onEnter && $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
                    if ($state.transition !== transition) return TransitionSuperseded;
                    $state.$current = to, $state.current = to.self, $state.params = toParams, copy($state.params, $stateParams), 
                    $state.transition = null;
                    var toNav = to.navigable;
                    return options.location && toNav && ($location.url(toNav.url.format(toNav.locals.globals.$stateParams)), 
                    "replace" === options.location && $location.replace()), options.notify && $rootScope.$broadcast("$stateChangeSuccess", to.self, toParams, from.self, fromParams), 
                    currentLocation = $location.url(), $state.current;
                }, function(error) {
                    return $state.transition !== transition ? TransitionSuperseded : ($state.transition = null, 
                    $rootScope.$broadcast("$stateChangeError", to.self, toParams, from.self, fromParams, error), 
                    syncUrl(), $q.reject(error));
                });
                return transition;
            }, $state.is = function(stateOrName, params) {
                var state = findState(stateOrName);
                return isDefined(state) ? $state.$current !== state ? !1 : isDefined(params) && null !== params ? angular.equals($stateParams, params) : !0 : undefined;
            }, $state.includes = function(stateOrName, params) {
                if (isString(stateOrName) && isGlob(stateOrName)) {
                    if (!doesStateMatchGlob(stateOrName)) return !1;
                    stateOrName = $state.$current.name;
                }
                var state = findState(stateOrName);
                if (!isDefined(state)) return undefined;
                if (!isDefined($state.$current.includes[state.name])) return !1;
                var validParams = !0;
                return angular.forEach(params, function(value, key) {
                    isDefined($stateParams[key]) && $stateParams[key] === value || (validParams = !1);
                }), validParams;
            }, $state.href = function(stateOrName, params, options) {
                options = extend({
                    lossy: !0,
                    inherit: !1,
                    absolute: !1,
                    relative: $state.$current
                }, options || {});
                var state = findState(stateOrName, options.relative);
                if (!isDefined(state)) return null;
                params = inheritParams($stateParams, params || {}, $state.$current, state);
                var nav = state && options.lossy ? state.navigable : state, url = nav && nav.url ? nav.url.format(normalize(state.params, params || {})) : null;
                return !$locationProvider.html5Mode() && url && (url = "#" + $locationProvider.hashPrefix() + url), 
                "/" !== baseHref && ($locationProvider.html5Mode() ? url = baseHref.slice(0, -1) + url : options.absolute && (url = baseHref.slice(1) + url)), 
                options.absolute && url && (url = $location.protocol() + "://" + $location.host() + (80 == $location.port() || 443 == $location.port() ? "" : ":" + $location.port()) + (!$locationProvider.html5Mode() && url ? "/" : "") + url), 
                url;
            }, $state.get = function(stateOrName, context) {
                if (!isDefined(stateOrName)) {
                    var list = [];
                    return forEach(states, function(state) {
                        list.push(state.self);
                    }), list;
                }
                var state = findState(stateOrName, context);
                return state && state.self ? state.self : null;
            }, $state;
        }
        function shouldTriggerReload(to, from, locals, options) {
            return to !== from || (locals !== from.locals || options.reload) && to.self.reloadOnSearch !== !1 ? void 0 : !0;
        }
        var root, $state, states = {}, queue = {}, abstractKey = "abstract", stateBuilder = {
            parent: function(state) {
                if (isDefined(state.parent) && state.parent) return findState(state.parent);
                var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
                return compositeName ? findState(compositeName[1]) : root;
            },
            data: function(state) {
                return state.parent && state.parent.data && (state.data = state.self.data = extend({}, state.parent.data, state.data)), 
                state.data;
            },
            url: function(state) {
                var url = state.url;
                if (isString(url)) return "^" == url.charAt(0) ? $urlMatcherFactory.compile(url.substring(1)) : (state.parent.navigable || root).url.concat(url);
                if ($urlMatcherFactory.isMatcher(url) || null == url) return url;
                throw new Error("Invalid url '" + url + "' in state '" + state + "'");
            },
            navigable: function(state) {
                return state.url ? state : state.parent ? state.parent.navigable : null;
            },
            params: function(state) {
                if (!state.params) return state.url ? state.url.parameters() : state.parent.params;
                if (!isArray(state.params)) throw new Error("Invalid params in state '" + state + "'");
                if (state.url) throw new Error("Both params and url specicified in state '" + state + "'");
                return state.params;
            },
            views: function(state) {
                var views = {};
                return forEach(isDefined(state.views) ? state.views : {
                    "": state
                }, function(view, name) {
                    name.indexOf("@") < 0 && (name += "@" + state.parent.name), views[name] = view;
                }), views;
            },
            ownParams: function(state) {
                if (!state.parent) return state.params;
                var paramNames = {};
                forEach(state.params, function(p) {
                    paramNames[p] = !0;
                }), forEach(state.parent.params, function(p) {
                    if (!paramNames[p]) throw new Error("Missing required parameter '" + p + "' in state '" + state.name + "'");
                    paramNames[p] = !1;
                });
                var ownParams = [];
                return forEach(paramNames, function(own, p) {
                    own && ownParams.push(p);
                }), ownParams;
            },
            path: function(state) {
                return state.parent ? state.parent.path.concat(state) : [];
            },
            includes: function(state) {
                var includes = state.parent ? extend({}, state.parent.includes) : {};
                return includes[state.name] = !0, includes;
            },
            $delegates: {}
        };
        root = registerState({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), root.navigable = null, this.decorator = decorator, this.state = state, this.$get = $get, 
        $get.$inject = [ "$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$location", "$urlRouter", "$browser" ];
    }
    function $ViewProvider() {
        function $get($rootScope, $templateFactory) {
            return {
                load: function(name, options) {
                    var result, defaults = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return options = extend(defaults, options), options.view && (result = $templateFactory.fromConfig(options.view, options.params, options.locals)), 
                    result && options.notify && $rootScope.$broadcast("$viewContentLoading", options), 
                    result;
                }
            };
        }
        this.$get = $get, $get.$inject = [ "$rootScope", "$templateFactory" ];
    }
    function $ViewScrollProvider() {
        var useAnchorScroll = !1;
        this.useAnchorScroll = function() {
            useAnchorScroll = !0;
        }, this.$get = [ "$anchorScroll", "$timeout", function($anchorScroll, $timeout) {
            return useAnchorScroll ? $anchorScroll : function($element) {
                $timeout(function() {
                    $element[0].scrollIntoView();
                }, 0, !1);
            };
        } ];
    }
    function $ViewDirective($state, $injector, $uiViewScroll) {
        function getService() {
            return $injector.has ? function(service) {
                return $injector.has(service) ? $injector.get(service) : null;
            } : function(service) {
                try {
                    return $injector.get(service);
                } catch (e) {
                    return null;
                }
            };
        }
        function getRenderer(attrs, scope) {
            var statics = function() {
                return {
                    enter: function(element, target, cb) {
                        target.after(element), cb();
                    },
                    leave: function(element, cb) {
                        element.remove(), cb();
                    }
                };
            };
            if ($animate) return {
                enter: function(element, target, cb) {
                    $animate.enter(element, null, target, cb);
                },
                leave: function(element, cb) {
                    $animate.leave(element, cb);
                }
            };
            if ($animator) {
                var animate = $animator && $animator(scope, attrs);
                return {
                    enter: function(element, target, cb) {
                        animate.enter(element, null, target), cb();
                    },
                    leave: function(element, cb) {
                        animate.leave(element), cb();
                    }
                };
            }
            return statics();
        }
        var service = getService(), $animator = service("$animator"), $animate = service("$animate"), directive = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function(tElement, tAttrs, $transclude) {
                return function(scope, $element, attrs) {
                    function cleanupLastView() {
                        previousEl && (previousEl.remove(), previousEl = null), currentScope && (currentScope.$destroy(), 
                        currentScope = null), currentEl && (renderer.leave(currentEl, function() {
                            previousEl = null;
                        }), previousEl = currentEl, currentEl = null);
                    }
                    function updateView(firstTime) {
                        var newScope = scope.$new(), name = currentEl && currentEl.data("$uiViewName"), previousLocals = name && $state.$current && $state.$current.locals[name];
                        if (firstTime || previousLocals !== latestLocals) {
                            var clone = $transclude(newScope, function(clone) {
                                renderer.enter(clone, $element, function() {
                                    (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) && $uiViewScroll(clone);
                                }), cleanupLastView();
                            });
                            latestLocals = $state.$current.locals[clone.data("$uiViewName")], currentEl = clone, 
                            currentScope = newScope, currentScope.$emit("$viewContentLoaded"), currentScope.$eval(onloadExp);
                        }
                    }
                    var previousEl, currentEl, currentScope, latestLocals, onloadExp = attrs.onload || "", autoScrollExp = attrs.autoscroll, renderer = getRenderer(attrs, scope);
                    scope.$on("$stateChangeSuccess", function() {
                        updateView(!1);
                    }), scope.$on("$viewContentLoading", function() {
                        updateView(!1);
                    }), updateView(!0);
                };
            }
        };
        return directive;
    }
    function $ViewDirectiveFill($compile, $controller, $state) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function(tElement) {
                var initial = tElement.html();
                return function(scope, $element, attrs) {
                    var name = attrs.uiView || attrs.name || "", inherited = $element.inheritedData("$uiView");
                    name.indexOf("@") < 0 && (name = name + "@" + (inherited ? inherited.state.name : "")), 
                    $element.data("$uiViewName", name);
                    var current = $state.$current, locals = current && current.locals[name];
                    if (locals) {
                        $element.data("$uiView", {
                            name: name,
                            state: locals.$$state
                        }), $element.html(locals.$template ? locals.$template : initial);
                        var link = $compile($element.contents());
                        if (locals.$$controller) {
                            locals.$scope = scope;
                            var controller = $controller(locals.$$controller, locals);
                            locals.$$controllerAs && (scope[locals.$$controllerAs] = controller), $element.data("$ngControllerController", controller), 
                            $element.children().data("$ngControllerController", controller);
                        }
                        link(scope);
                    }
                };
            }
        };
    }
    function parseStateRef(ref) {
        var parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
        if (!parsed || 4 !== parsed.length) throw new Error("Invalid state ref '" + ref + "'");
        return {
            state: parsed[1],
            paramExpr: parsed[3] || null
        };
    }
    function stateContext(el) {
        var stateData = el.parent().inheritedData("$uiView");
        return stateData && stateData.state && stateData.state.name ? stateData.state : void 0;
    }
    function $StateRefDirective($state, $timeout) {
        var allowedOptions = [ "location", "inherit", "reload" ];
        return {
            restrict: "A",
            require: "?^uiSrefActive",
            link: function(scope, element, attrs, uiSrefActive) {
                var ref = parseStateRef(attrs.uiSref), params = null, base = stateContext(element) || $state.$current, isForm = "FORM" === element[0].nodeName, attr = isForm ? "action" : "href", nav = !0, options = {
                    relative: base
                }, optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
                angular.forEach(allowedOptions, function(option) {
                    option in optionsOverride && (options[option] = optionsOverride[option]);
                });
                var update = function(newVal) {
                    if (newVal && (params = newVal), nav) {
                        var newHref = $state.href(ref.state, params, options);
                        return uiSrefActive && uiSrefActive.$$setStateInfo(ref.state, params), newHref ? void (element[0][attr] = newHref) : (nav = !1, 
                        !1);
                    }
                };
                ref.paramExpr && (scope.$watch(ref.paramExpr, function(newVal) {
                    newVal !== params && update(newVal);
                }, !0), params = scope.$eval(ref.paramExpr)), update(), isForm || element.bind("click", function(e) {
                    var button = e.which || e.button;
                    button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr("target") || ($timeout(function() {
                        $state.go(ref.state, params, options);
                    }), e.preventDefault());
                });
            }
        };
    }
    function $StateActiveDirective($state, $stateParams, $interpolate) {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$attrs", function($scope, $element, $attrs) {
                function update() {
                    $state.$current.self === state && matchesParams() ? $element.addClass(activeClass) : $element.removeClass(activeClass);
                }
                function matchesParams() {
                    return !params || equalForKeys(params, $stateParams);
                }
                var state, params, activeClass;
                activeClass = $interpolate($attrs.uiSrefActive || "", !1)($scope), this.$$setStateInfo = function(newState, newParams) {
                    state = $state.get(newState, stateContext($element)), params = newParams, update();
                }, $scope.$on("$stateChangeSuccess", update);
            } ]
        };
    }
    function $IsStateFilter($state) {
        return function(state) {
            return $state.is(state);
        };
    }
    function $IncludedByStateFilter($state) {
        return function(state) {
            return $state.includes(state);
        };
    }
    function $RouteProvider($stateProvider, $urlRouterProvider) {
        function onEnterRoute($$state) {
            this.locals = $$state.locals.globals, this.params = this.locals.$stateParams;
        }
        function onExitRoute() {
            this.locals = null, this.params = null;
        }
        function when(url, route) {
            if (null != route.redirectTo) {
                var handler, redirect = route.redirectTo;
                if (isString(redirect)) handler = redirect; else {
                    if (!isFunction(redirect)) throw new Error("Invalid 'redirectTo' in when()");
                    handler = function(params, $location) {
                        return redirect(params, $location.path(), $location.search());
                    };
                }
                $urlRouterProvider.when(url, handler);
            } else $stateProvider.state(inherit(route, {
                parent: null,
                name: "route:" + encodeURIComponent(url),
                url: url,
                onEnter: onEnterRoute,
                onExit: onExitRoute
            }));
            return routes.push(route), this;
        }
        function $get($state, $rootScope, $routeParams) {
            function stateAsRoute(state) {
                return "" !== state.name ? state : undefined;
            }
            var $route = {
                routes: routes,
                params: $routeParams,
                current: undefined
            };
            return $rootScope.$on("$stateChangeStart", function(ev, to, toParams, from) {
                $rootScope.$broadcast("$routeChangeStart", stateAsRoute(to), stateAsRoute(from));
            }), $rootScope.$on("$stateChangeSuccess", function(ev, to, toParams, from) {
                $route.current = stateAsRoute(to), $rootScope.$broadcast("$routeChangeSuccess", stateAsRoute(to), stateAsRoute(from)), 
                copy(toParams, $route.params);
            }), $rootScope.$on("$stateChangeError", function(ev, to, toParams, from, fromParams, error) {
                $rootScope.$broadcast("$routeChangeError", stateAsRoute(to), stateAsRoute(from), error);
            }), $route;
        }
        var routes = [];
        onEnterRoute.$inject = [ "$$state" ], this.when = when, this.$get = $get, $get.$inject = [ "$state", "$rootScope", "$routeParams" ];
    }
    var isDefined = angular.isDefined, isFunction = angular.isFunction, isString = angular.isString, isObject = angular.isObject, isArray = angular.isArray, forEach = angular.forEach, extend = angular.extend, copy = angular.copy;
    angular.module("ui.router.util", [ "ng" ]), angular.module("ui.router.router", [ "ui.router.util" ]), 
    angular.module("ui.router.state", [ "ui.router.router", "ui.router.util" ]), angular.module("ui.router", [ "ui.router.state" ]), 
    angular.module("ui.router.compat", [ "ui.router" ]), $Resolve.$inject = [ "$q", "$injector" ], 
    angular.module("ui.router.util").service("$resolve", $Resolve), $TemplateFactory.$inject = [ "$http", "$templateCache", "$injector" ], 
    angular.module("ui.router.util").service("$templateFactory", $TemplateFactory), 
    UrlMatcher.prototype.concat = function(pattern) {
        return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch);
    }, UrlMatcher.prototype.toString = function() {
        return this.source;
    }, UrlMatcher.prototype.exec = function(path, searchParams) {
        var m = this.regexp.exec(path);
        if (!m) return null;
        var i, params = this.params, nTotal = params.length, nPath = this.segments.length - 1, values = {};
        if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (i = 0; nPath > i; i++) values[params[i]] = m[i + 1];
        for (;nTotal > i; i++) values[params[i]] = searchParams[params[i]];
        return values;
    }, UrlMatcher.prototype.parameters = function() {
        return this.params;
    }, UrlMatcher.prototype.format = function(values) {
        var segments = this.segments, params = this.params;
        if (!values) return segments.join("");
        var i, search, value, nPath = segments.length - 1, nTotal = params.length, result = segments[0];
        for (i = 0; nPath > i; i++) value = values[params[i]], null != value && (result += encodeURIComponent(value)), 
        result += segments[i + 1];
        for (;nTotal > i; i++) value = values[params[i]], null != value && (result += (search ? "&" : "?") + params[i] + "=" + encodeURIComponent(value), 
        search = !0);
        return result;
    }, angular.module("ui.router.util").provider("$urlMatcherFactory", $UrlMatcherFactory), 
    $UrlRouterProvider.$inject = [ "$urlMatcherFactoryProvider" ], angular.module("ui.router.router").provider("$urlRouter", $UrlRouterProvider), 
    $StateProvider.$inject = [ "$urlRouterProvider", "$urlMatcherFactoryProvider", "$locationProvider" ], 
    angular.module("ui.router.state").value("$stateParams", {}).provider("$state", $StateProvider), 
    $ViewProvider.$inject = [], angular.module("ui.router.state").provider("$view", $ViewProvider), 
    angular.module("ui.router.state").provider("$uiViewScroll", $ViewScrollProvider), 
    $ViewDirective.$inject = [ "$state", "$injector", "$uiViewScroll" ], $ViewDirectiveFill.$inject = [ "$compile", "$controller", "$state" ], 
    angular.module("ui.router.state").directive("uiView", $ViewDirective), angular.module("ui.router.state").directive("uiView", $ViewDirectiveFill), 
    $StateRefDirective.$inject = [ "$state", "$timeout" ], $StateActiveDirective.$inject = [ "$state", "$stateParams", "$interpolate" ], 
    angular.module("ui.router.state").directive("uiSref", $StateRefDirective).directive("uiSrefActive", $StateActiveDirective), 
    $IsStateFilter.$inject = [ "$state" ], $IncludedByStateFilter.$inject = [ "$state" ], 
    angular.module("ui.router.state").filter("isState", $IsStateFilter).filter("includedByState", $IncludedByStateFilter), 
    $RouteProvider.$inject = [ "$stateProvider", "$urlRouterProvider" ], angular.module("ui.router.compat").provider("$route", $RouteProvider).directive("ngView", $ViewDirective);
}(window, window.angular), define("ngdir/angular-ui-router", [ "angular" ], function() {}), 
angular.module("ui.bootstrap", [ "ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead" ]), 
angular.module("ui.bootstrap.tpls", [ "template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html" ]), 
angular.module("ui.bootstrap.transition", []).factory("$transition", [ "$q", "$timeout", "$rootScope", function($q, $timeout, $rootScope) {
    function findEndEventName(endEventNames) {
        for (var name in endEventNames) if (void 0 !== transElement.style[name]) return endEventNames[name];
    }
    var $transition = function(element, trigger, options) {
        options = options || {};
        var deferred = $q.defer(), endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"], transitionEndHandler = function() {
            $rootScope.$apply(function() {
                element.unbind(endEventName, transitionEndHandler), deferred.resolve(element);
            });
        };
        return endEventName && element.bind(endEventName, transitionEndHandler), $timeout(function() {
            angular.isString(trigger) ? element.addClass(trigger) : angular.isFunction(trigger) ? trigger(element) : angular.isObject(trigger) && element.css(trigger), 
            endEventName || deferred.resolve(element);
        }), deferred.promise.cancel = function() {
            endEventName && element.unbind(endEventName, transitionEndHandler), deferred.reject("Transition cancelled");
        }, deferred.promise;
    }, transElement = document.createElement("trans"), transitionEndEventNames = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    }, animationEndEventNames = {
        WebkitTransition: "webkitAnimationEnd",
        MozTransition: "animationend",
        OTransition: "oAnimationEnd",
        transition: "animationend"
    };
    return $transition.transitionEndEventName = findEndEventName(transitionEndEventNames), 
    $transition.animationEndEventName = findEndEventName(animationEndEventNames), $transition;
} ]), angular.module("ui.bootstrap.collapse", [ "ui.bootstrap.transition" ]).directive("collapse", [ "$transition", function($transition) {
    return {
        link: function(scope, element, attrs) {
            function doTransition(change) {
                function newTransitionDone() {
                    currentTransition === newTransition && (currentTransition = void 0);
                }
                var newTransition = $transition(element, change);
                return currentTransition && currentTransition.cancel(), currentTransition = newTransition, 
                newTransition.then(newTransitionDone, newTransitionDone), newTransition;
            }
            function expand() {
                initialAnimSkip ? (initialAnimSkip = !1, expandDone()) : (element.removeClass("collapse").addClass("collapsing"), 
                doTransition({
                    height: element[0].scrollHeight + "px"
                }).then(expandDone));
            }
            function expandDone() {
                element.removeClass("collapsing"), element.addClass("collapse in"), element.css({
                    height: "auto"
                });
            }
            function collapse() {
                if (initialAnimSkip) initialAnimSkip = !1, collapseDone(), element.css({
                    height: 0
                }); else {
                    element.css({
                        height: element[0].scrollHeight + "px"
                    });
                    {
                        element[0].offsetWidth;
                    }
                    element.removeClass("collapse in").addClass("collapsing"), doTransition({
                        height: 0
                    }).then(collapseDone);
                }
            }
            function collapseDone() {
                element.removeClass("collapsing"), element.addClass("collapse");
            }
            var currentTransition, initialAnimSkip = !0;
            scope.$watch(attrs.collapse, function(shouldCollapse) {
                shouldCollapse ? collapse() : expand();
            });
        }
    };
} ]), angular.module("ui.bootstrap.accordion", [ "ui.bootstrap.collapse" ]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", [ "$scope", "$attrs", "accordionConfig", function($scope, $attrs, accordionConfig) {
    this.groups = [], this.closeOthers = function(openGroup) {
        var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
        closeOthers && angular.forEach(this.groups, function(group) {
            group !== openGroup && (group.isOpen = !1);
        });
    }, this.addGroup = function(groupScope) {
        var that = this;
        this.groups.push(groupScope), groupScope.$on("$destroy", function() {
            that.removeGroup(groupScope);
        });
    }, this.removeGroup = function(group) {
        var index = this.groups.indexOf(group);
        -1 !== index && this.groups.splice(index, 1);
    };
} ]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    };
}).directive("accordionGroup", function() {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(element) {
                this.heading = element;
            };
        },
        link: function(scope, element, attrs, accordionCtrl) {
            accordionCtrl.addGroup(scope), scope.$watch("isOpen", function(value) {
                value && accordionCtrl.closeOthers(scope);
            }), scope.toggleOpen = function() {
                scope.isDisabled || (scope.isOpen = !scope.isOpen);
            };
        }
    };
}).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(scope, element, attr, accordionGroupCtrl, transclude) {
            accordionGroupCtrl.setHeading(transclude(scope, function() {}));
        }
    };
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(scope, element, attr, controller) {
            scope.$watch(function() {
                return controller[attr.accordionTransclude];
            }, function(heading) {
                heading && (element.html(""), element.append(heading));
            });
        }
    };
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", [ "$scope", "$attrs", function($scope, $attrs) {
    $scope.closeable = "close" in $attrs;
} ]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    };
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(scope, element, attr) {
        element.addClass("ng-binding").data("$binding", attr.bindHtmlUnsafe), scope.$watch(attr.bindHtmlUnsafe, function(value) {
            element.html(value || "");
        });
    };
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", [ "buttonConfig", function(buttonConfig) {
    this.activeClass = buttonConfig.activeClass || "active", this.toggleEvent = buttonConfig.toggleEvent || "click";
} ]).directive("btnRadio", function() {
    return {
        require: [ "btnRadio", "ngModel" ],
        controller: "ButtonsController",
        link: function(scope, element, attrs, ctrls) {
            var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl.$render = function() {
                element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
            }, element.bind(buttonsCtrl.toggleEvent, function() {
                var isActive = element.hasClass(buttonsCtrl.activeClass);
                (!isActive || angular.isDefined(attrs.uncheckable)) && scope.$apply(function() {
                    ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio)), ngModelCtrl.$render();
                });
            });
        }
    };
}).directive("btnCheckbox", function() {
    return {
        require: [ "btnCheckbox", "ngModel" ],
        controller: "ButtonsController",
        link: function(scope, element, attrs, ctrls) {
            function getTrueValue() {
                return getCheckboxValue(attrs.btnCheckboxTrue, !0);
            }
            function getFalseValue() {
                return getCheckboxValue(attrs.btnCheckboxFalse, !1);
            }
            function getCheckboxValue(attributeValue, defaultValue) {
                var val = scope.$eval(attributeValue);
                return angular.isDefined(val) ? val : defaultValue;
            }
            var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl.$render = function() {
                element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
            }, element.bind(buttonsCtrl.toggleEvent, function() {
                scope.$apply(function() {
                    ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue()), 
                    ngModelCtrl.$render();
                });
            });
        }
    };
}), angular.module("ui.bootstrap.carousel", [ "ui.bootstrap.transition" ]).controller("CarouselController", [ "$scope", "$timeout", "$transition", function($scope, $timeout, $transition) {
    function restartTimer() {
        resetTimer();
        var interval = +$scope.interval;
        !isNaN(interval) && interval >= 0 && (currentTimeout = $timeout(timerFn, interval));
    }
    function resetTimer() {
        currentTimeout && ($timeout.cancel(currentTimeout), currentTimeout = null);
    }
    function timerFn() {
        isPlaying ? ($scope.next(), restartTimer()) : $scope.pause();
    }
    var currentTimeout, isPlaying, self = this, slides = self.slides = $scope.slides = [], currentIndex = -1;
    self.currentSlide = null;
    var destroyed = !1;
    self.select = $scope.select = function(nextSlide, direction) {
        function goNext() {
            if (!destroyed) {
                if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
                    nextSlide.$element.addClass(direction);
                    {
                        nextSlide.$element[0].offsetWidth;
                    }
                    angular.forEach(slides, function(slide) {
                        angular.extend(slide, {
                            direction: "",
                            entering: !1,
                            leaving: !1,
                            active: !1
                        });
                    }), angular.extend(nextSlide, {
                        direction: direction,
                        active: !0,
                        entering: !0
                    }), angular.extend(self.currentSlide || {}, {
                        direction: direction,
                        leaving: !0
                    }), $scope.$currentTransition = $transition(nextSlide.$element, {}), function(next, current) {
                        $scope.$currentTransition.then(function() {
                            transitionDone(next, current);
                        }, function() {
                            transitionDone(next, current);
                        });
                    }(nextSlide, self.currentSlide);
                } else transitionDone(nextSlide, self.currentSlide);
                self.currentSlide = nextSlide, currentIndex = nextIndex, restartTimer();
            }
        }
        function transitionDone(next, current) {
            angular.extend(next, {
                direction: "",
                active: !0,
                leaving: !1,
                entering: !1
            }), angular.extend(current || {}, {
                direction: "",
                active: !1,
                leaving: !1,
                entering: !1
            }), $scope.$currentTransition = null;
        }
        var nextIndex = slides.indexOf(nextSlide);
        void 0 === direction && (direction = nextIndex > currentIndex ? "next" : "prev"), 
        nextSlide && nextSlide !== self.currentSlide && ($scope.$currentTransition ? ($scope.$currentTransition.cancel(), 
        $timeout(goNext)) : goNext());
    }, $scope.$on("$destroy", function() {
        destroyed = !0;
    }), self.indexOfSlide = function(slide) {
        return slides.indexOf(slide);
    }, $scope.next = function() {
        var newIndex = (currentIndex + 1) % slides.length;
        return $scope.$currentTransition ? void 0 : self.select(slides[newIndex], "next");
    }, $scope.prev = function() {
        var newIndex = 0 > currentIndex - 1 ? slides.length - 1 : currentIndex - 1;
        return $scope.$currentTransition ? void 0 : self.select(slides[newIndex], "prev");
    }, $scope.isActive = function(slide) {
        return self.currentSlide === slide;
    }, $scope.$watch("interval", restartTimer), $scope.$on("$destroy", resetTimer), 
    $scope.play = function() {
        isPlaying || (isPlaying = !0, restartTimer());
    }, $scope.pause = function() {
        $scope.noPause || (isPlaying = !1, resetTimer());
    }, self.addSlide = function(slide, element) {
        slide.$element = element, slides.push(slide), 1 === slides.length || slide.active ? (self.select(slides[slides.length - 1]), 
        1 == slides.length && $scope.play()) : slide.active = !1;
    }, self.removeSlide = function(slide) {
        var index = slides.indexOf(slide);
        slides.splice(index, 1), slides.length > 0 && slide.active ? self.select(index >= slides.length ? slides[index - 1] : slides[index]) : currentIndex > index && currentIndex--;
    };
} ]).directive("carousel", [ function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "="
        }
    };
} ]).directive("slide", function() {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?"
        },
        link: function(scope, element, attrs, carouselCtrl) {
            carouselCtrl.addSlide(scope, element), scope.$on("$destroy", function() {
                carouselCtrl.removeSlide(scope);
            }), scope.$watch("active", function(active) {
                active && carouselCtrl.select(scope);
            });
        }
    };
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", [ "$locale", "orderByFilter", function($locale, orderByFilter) {
    function isValid(year, month, date) {
        return 1 === month && date > 28 ? 29 === date && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) : 3 === month || 5 === month || 8 === month || 10 === month ? 31 > date : !0;
    }
    this.parsers = {};
    var formatCodeToRegex = {
        yyyy: {
            regex: "\\d{4}",
            apply: function(value) {
                this.year = +value;
            }
        },
        yy: {
            regex: "\\d{2}",
            apply: function(value) {
                this.year = +value + 2e3;
            }
        },
        y: {
            regex: "\\d{1,4}",
            apply: function(value) {
                this.year = +value;
            }
        },
        MMMM: {
            regex: $locale.DATETIME_FORMATS.MONTH.join("|"),
            apply: function(value) {
                this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value);
            }
        },
        MMM: {
            regex: $locale.DATETIME_FORMATS.SHORTMONTH.join("|"),
            apply: function(value) {
                this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value);
            }
        },
        MM: {
            regex: "0[1-9]|1[0-2]",
            apply: function(value) {
                this.month = value - 1;
            }
        },
        M: {
            regex: "[1-9]|1[0-2]",
            apply: function(value) {
                this.month = value - 1;
            }
        },
        dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}",
            apply: function(value) {
                this.date = +value;
            }
        },
        d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
            apply: function(value) {
                this.date = +value;
            }
        },
        EEEE: {
            regex: $locale.DATETIME_FORMATS.DAY.join("|")
        },
        EEE: {
            regex: $locale.DATETIME_FORMATS.SHORTDAY.join("|")
        }
    };
    this.createParser = function(format) {
        var map = [], regex = format.split("");
        return angular.forEach(formatCodeToRegex, function(data, code) {
            var index = format.indexOf(code);
            if (index > -1) {
                format = format.split(""), regex[index] = "(" + data.regex + ")", format[index] = "$";
                for (var i = index + 1, n = index + code.length; n > i; i++) regex[i] = "", format[i] = "$";
                format = format.join(""), map.push({
                    index: index,
                    apply: data.apply
                });
            }
        }), {
            regex: new RegExp("^" + regex.join("") + "$"),
            map: orderByFilter(map, "index")
        };
    }, this.parse = function(input, format) {
        if (!angular.isString(input)) return input;
        format = $locale.DATETIME_FORMATS[format] || format, this.parsers[format] || (this.parsers[format] = this.createParser(format));
        var parser = this.parsers[format], regex = parser.regex, map = parser.map, results = input.match(regex);
        if (results && results.length) {
            for (var dt, fields = {
                year: 1900,
                month: 0,
                date: 1,
                hours: 0
            }, i = 1, n = results.length; n > i; i++) {
                var mapper = map[i - 1];
                mapper.apply && mapper.apply.call(fields, results[i]);
            }
            return isValid(fields.year, fields.month, fields.date) && (dt = new Date(fields.year, fields.month, fields.date, fields.hours)), 
            dt;
        }
    };
} ]), angular.module("ui.bootstrap.position", []).factory("$position", [ "$document", "$window", function($document, $window) {
    function getStyle(el, cssprop) {
        return el.currentStyle ? el.currentStyle[cssprop] : $window.getComputedStyle ? $window.getComputedStyle(el)[cssprop] : el.style[cssprop];
    }
    function isStaticPositioned(element) {
        return "static" === (getStyle(element, "position") || "static");
    }
    var parentOffsetEl = function(element) {
        for (var docDomEl = $document[0], offsetParent = element.offsetParent || docDomEl; offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent); ) offsetParent = offsetParent.offsetParent;
        return offsetParent || docDomEl;
    };
    return {
        position: function(element) {
            var elBCR = this.offset(element), offsetParentBCR = {
                top: 0,
                left: 0
            }, offsetParentEl = parentOffsetEl(element[0]);
            offsetParentEl != $document[0] && (offsetParentBCR = this.offset(angular.element(offsetParentEl)), 
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop, offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft);
            var boundingClientRect = element[0].getBoundingClientRect();
            return {
                width: boundingClientRect.width || element.prop("offsetWidth"),
                height: boundingClientRect.height || element.prop("offsetHeight"),
                top: elBCR.top - offsetParentBCR.top,
                left: elBCR.left - offsetParentBCR.left
            };
        },
        offset: function(element) {
            var boundingClientRect = element[0].getBoundingClientRect();
            return {
                width: boundingClientRect.width || element.prop("offsetWidth"),
                height: boundingClientRect.height || element.prop("offsetHeight"),
                top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
                left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
            };
        },
        positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
            var hostElPos, targetElWidth, targetElHeight, targetElPos, positionStrParts = positionStr.split("-"), pos0 = positionStrParts[0], pos1 = positionStrParts[1] || "center";
            hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl), targetElWidth = targetEl.prop("offsetWidth"), 
            targetElHeight = targetEl.prop("offsetHeight");
            var shiftWidth = {
                center: function() {
                    return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
                },
                left: function() {
                    return hostElPos.left;
                },
                right: function() {
                    return hostElPos.left + hostElPos.width;
                }
            }, shiftHeight = {
                center: function() {
                    return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
                },
                top: function() {
                    return hostElPos.top;
                },
                bottom: function() {
                    return hostElPos.top + hostElPos.height;
                }
            };
            switch (pos0) {
              case "right":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;

              case "left":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;

              case "bottom":
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;

              default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
            }
            return targetElPos;
        }
    };
} ]), angular.module("ui.bootstrap.datepicker", [ "ui.bootstrap.dateparser", "ui.bootstrap.position" ]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", [ "$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
    var self = this, ngModelCtrl = {
        $setViewValue: angular.noop
    };
    this.modes = [ "day", "month", "year" ], angular.forEach([ "formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange" ], function(key, index) {
        self[key] = angular.isDefined($attrs[key]) ? 8 > index ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key]) : datepickerConfig[key];
    }), angular.forEach([ "minDate", "maxDate" ], function(key) {
        $attrs[key] ? $scope.$parent.$watch($parse($attrs[key]), function(value) {
            self[key] = value ? new Date(value) : null, self.refreshView();
        }) : self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
    }), $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode, 
    $scope.uniqueId = "datepicker-" + $scope.$id + "-" + Math.floor(1e4 * Math.random()), 
    this.activeDate = angular.isDefined($attrs.initDate) ? $scope.$parent.$eval($attrs.initDate) : new Date(), 
    $scope.isActive = function(dateObject) {
        return 0 === self.compare(dateObject.date, self.activeDate) ? ($scope.activeDateId = dateObject.uid, 
        !0) : !1;
    }, this.init = function(ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_, ngModelCtrl.$render = function() {
            self.render();
        };
    }, this.render = function() {
        if (ngModelCtrl.$modelValue) {
            var date = new Date(ngModelCtrl.$modelValue), isValid = !isNaN(date);
            isValid ? this.activeDate = date : $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), 
            ngModelCtrl.$setValidity("date", isValid);
        }
        this.refreshView();
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
            ngModelCtrl.$setValidity("date-disabled", !date || this.element && !this.isDisabled(date));
        }
    }, this.createDateObject = function(date, format) {
        var model = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
        return {
            date: date,
            label: dateFilter(date, format),
            selected: model && 0 === this.compare(date, model),
            disabled: this.isDisabled(date),
            current: 0 === this.compare(date, new Date())
        };
    }, this.isDisabled = function(date) {
        return this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0 || $attrs.dateDisabled && $scope.dateDisabled({
            date: date,
            mode: $scope.datepickerMode
        });
    }, this.split = function(arr, size) {
        for (var arrays = []; arr.length > 0; ) arrays.push(arr.splice(0, size));
        return arrays;
    }, $scope.select = function(date) {
        if ($scope.datepickerMode === self.minMode) {
            var dt = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate()), ngModelCtrl.$setViewValue(dt), 
            ngModelCtrl.$render();
        } else self.activeDate = date, $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
    }, $scope.move = function(direction) {
        var year = self.activeDate.getFullYear() + direction * (self.step.years || 0), month = self.activeDate.getMonth() + direction * (self.step.months || 0);
        self.activeDate.setFullYear(year, month, 1), self.refreshView();
    }, $scope.toggleMode = function(direction) {
        direction = direction || 1, $scope.datepickerMode === self.maxMode && 1 === direction || $scope.datepickerMode === self.minMode && -1 === direction || ($scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);
    }, $scope.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var focusElement = function() {
        $timeout(function() {
            self.element[0].focus();
        }, 0, !1);
    };
    $scope.$on("datepicker.focus", focusElement), $scope.keydown = function(evt) {
        var key = $scope.keys[evt.which];
        if (key && !evt.shiftKey && !evt.altKey) if (evt.preventDefault(), evt.stopPropagation(), 
        "enter" === key || "space" === key) {
            if (self.isDisabled(self.activeDate)) return;
            $scope.select(self.activeDate), focusElement();
        } else !evt.ctrlKey || "up" !== key && "down" !== key ? (self.handleKeyDown(key, evt), 
        self.refreshView()) : ($scope.toggleMode("up" === key ? 1 : -1), focusElement());
    };
} ]).directive("datepicker", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&"
        },
        require: [ "datepicker", "?^ngModel" ],
        controller: "DatepickerController",
        link: function(scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && datepickerCtrl.init(ngModelCtrl);
        }
    };
}).directive("daypicker", [ "dateFilter", function(dateFilter) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function(scope, element, attrs, ctrl) {
            function getDaysInMonth(year, month) {
                return 1 !== month || year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0 ? DAYS_IN_MONTH[month] : 29;
            }
            function getDates(startDate, n) {
                var dates = new Array(n), current = new Date(startDate), i = 0;
                for (current.setHours(12); n > i; ) dates[i++] = new Date(current), current.setDate(current.getDate() + 1);
                return dates;
            }
            function getISO8601WeekNumber(date) {
                var checkDate = new Date(date);
                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
                var time = checkDate.getTime();
                return checkDate.setMonth(0), checkDate.setDate(1), Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1;
            }
            scope.showWeeks = ctrl.showWeeks, ctrl.step = {
                months: 1
            }, ctrl.element = element;
            var DAYS_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
            ctrl._refreshView = function() {
                var year = ctrl.activeDate.getFullYear(), month = ctrl.activeDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = ctrl.startingDay - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference, firstDate = new Date(firstDayOfMonth);
                numDisplayedFromPreviousMonth > 0 && firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                for (var days = getDates(firstDate, 42), i = 0; 42 > i; i++) days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
                    secondary: days[i].getMonth() !== month,
                    uid: scope.uniqueId + "-" + i
                });
                scope.labels = new Array(7);
                for (var j = 0; 7 > j; j++) scope.labels[j] = {
                    abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
                    full: dateFilter(days[j].date, "EEEE")
                };
                if (scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle), scope.rows = ctrl.split(days, 7), 
                scope.showWeeks) {
                    scope.weekNumbers = [];
                    for (var weekNumber = getISO8601WeekNumber(scope.rows[0][0].date), numWeeks = scope.rows.length; scope.weekNumbers.push(weekNumber++) < numWeeks; ) ;
                }
            }, ctrl.compare = function(date1, date2) {
                return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            }, ctrl.handleKeyDown = function(key) {
                var date = ctrl.activeDate.getDate();
                if ("left" === key) date -= 1; else if ("up" === key) date -= 7; else if ("right" === key) date += 1; else if ("down" === key) date += 7; else if ("pageup" === key || "pagedown" === key) {
                    var month = ctrl.activeDate.getMonth() + ("pageup" === key ? -1 : 1);
                    ctrl.activeDate.setMonth(month, 1), date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
                } else "home" === key ? date = 1 : "end" === key && (date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()));
                ctrl.activeDate.setDate(date);
            }, ctrl.refreshView();
        }
    };
} ]).directive("monthpicker", [ "dateFilter", function(dateFilter) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function(scope, element, attrs, ctrl) {
            ctrl.step = {
                years: 1
            }, ctrl.element = element, ctrl._refreshView = function() {
                for (var months = new Array(12), year = ctrl.activeDate.getFullYear(), i = 0; 12 > i; i++) months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {
                    uid: scope.uniqueId + "-" + i
                });
                scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle), scope.rows = ctrl.split(months, 3);
            }, ctrl.compare = function(date1, date2) {
                return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
            }, ctrl.handleKeyDown = function(key) {
                var date = ctrl.activeDate.getMonth();
                if ("left" === key) date -= 1; else if ("up" === key) date -= 3; else if ("right" === key) date += 1; else if ("down" === key) date += 3; else if ("pageup" === key || "pagedown" === key) {
                    var year = ctrl.activeDate.getFullYear() + ("pageup" === key ? -1 : 1);
                    ctrl.activeDate.setFullYear(year);
                } else "home" === key ? date = 0 : "end" === key && (date = 11);
                ctrl.activeDate.setMonth(date);
            }, ctrl.refreshView();
        }
    };
} ]).directive("yearpicker", [ "dateFilter", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function(scope, element, attrs, ctrl) {
            function getStartingYear(year) {
                return parseInt((year - 1) / range, 10) * range + 1;
            }
            var range = ctrl.yearRange;
            ctrl.step = {
                years: range
            }, ctrl.element = element, ctrl._refreshView = function() {
                for (var years = new Array(range), i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); range > i; i++) years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {
                    uid: scope.uniqueId + "-" + i
                });
                scope.title = [ years[0].label, years[range - 1].label ].join(" - "), scope.rows = ctrl.split(years, 5);
            }, ctrl.compare = function(date1, date2) {
                return date1.getFullYear() - date2.getFullYear();
            }, ctrl.handleKeyDown = function(key) {
                var date = ctrl.activeDate.getFullYear();
                "left" === key ? date -= 1 : "up" === key ? date -= 5 : "right" === key ? date += 1 : "down" === key ? date += 5 : "pageup" === key || "pagedown" === key ? date += ("pageup" === key ? -1 : 1) * ctrl.step.years : "home" === key ? date = getStartingYear(ctrl.activeDate.getFullYear()) : "end" === key && (date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1), 
                ctrl.activeDate.setFullYear(date);
            }, ctrl.refreshView();
        }
    };
} ]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", [ "$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&"
        },
        link: function(scope, element, attrs, ngModel) {
            function cameltoDash(string) {
                return string.replace(/([A-Z])/g, function($1) {
                    return "-" + $1.toLowerCase();
                });
            }
            function parseDate(viewValue) {
                if (viewValue) {
                    if (angular.isDate(viewValue) && !isNaN(viewValue)) return ngModel.$setValidity("date", !0), 
                    viewValue;
                    if (angular.isString(viewValue)) {
                        var date = dateParser.parse(viewValue, dateFormat) || new Date(viewValue);
                        return isNaN(date) ? void ngModel.$setValidity("date", !1) : (ngModel.$setValidity("date", !0), 
                        date);
                    }
                    return void ngModel.$setValidity("date", !1);
                }
                return ngModel.$setValidity("date", !0), null;
            }
            var dateFormat, closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection, appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
            scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar, 
            scope.getText = function(key) {
                return scope[key + "Text"] || datepickerPopupConfig[key + "Text"];
            }, attrs.$observe("datepickerPopup", function(value) {
                dateFormat = value || datepickerPopupConfig.datepickerPopup, ngModel.$render();
            });
            var popupEl = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            popupEl.attr({
                "ng-model": "date",
                "ng-change": "dateSelection()"
            });
            var datepickerEl = angular.element(popupEl.children()[0]);
            attrs.datepickerOptions && angular.forEach(scope.$parent.$eval(attrs.datepickerOptions), function(value, option) {
                datepickerEl.attr(cameltoDash(option), value);
            }), angular.forEach([ "minDate", "maxDate" ], function(key) {
                attrs[key] && (scope.$parent.$watch($parse(attrs[key]), function(value) {
                    scope[key] = value;
                }), datepickerEl.attr(cameltoDash(key), key));
            }), attrs.dateDisabled && datepickerEl.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), 
            ngModel.$parsers.unshift(parseDate), scope.dateSelection = function(dt) {
                angular.isDefined(dt) && (scope.date = dt), ngModel.$setViewValue(scope.date), ngModel.$render(), 
                closeOnDateSelection && (scope.isOpen = !1, element[0].focus());
            }, element.bind("input change keyup", function() {
                scope.$apply(function() {
                    scope.date = ngModel.$modelValue;
                });
            }), ngModel.$render = function() {
                var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : "";
                element.val(date), scope.date = parseDate(ngModel.$modelValue);
            };
            var documentClickBind = function(event) {
                scope.isOpen && event.target !== element[0] && scope.$apply(function() {
                    scope.isOpen = !1;
                });
            }, keydown = function(evt) {
                scope.keydown(evt);
            };
            element.bind("keydown", keydown), scope.keydown = function(evt) {
                27 === evt.which ? (evt.preventDefault(), evt.stopPropagation(), scope.close()) : 40 !== evt.which || scope.isOpen || (scope.isOpen = !0);
            }, scope.$watch("isOpen", function(value) {
                value ? (scope.$broadcast("datepicker.focus"), scope.position = appendToBody ? $position.offset(element) : $position.position(element), 
                scope.position.top = scope.position.top + element.prop("offsetHeight"), $document.bind("click", documentClickBind)) : $document.unbind("click", documentClickBind);
            }), scope.select = function(date) {
                if ("today" === date) {
                    var today = new Date();
                    angular.isDate(ngModel.$modelValue) ? (date = new Date(ngModel.$modelValue), date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate())) : date = new Date(today.setHours(0, 0, 0, 0));
                }
                scope.dateSelection(date);
            }, scope.close = function() {
                scope.isOpen = !1, element[0].focus();
            };
            var $popup = $compile(popupEl)(scope);
            appendToBody ? $document.find("body").append($popup) : element.after($popup), scope.$on("$destroy", function() {
                $popup.remove(), element.unbind("keydown", keydown), $document.unbind("click", documentClickBind);
            });
        }
    };
} ]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(scope, element) {
            element.bind("click", function(event) {
                event.preventDefault(), event.stopPropagation();
            });
        }
    };
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", [ "$document", function($document) {
    var openScope = null;
    this.open = function(dropdownScope) {
        openScope || ($document.bind("click", closeDropdown), $document.bind("keydown", escapeKeyBind)), 
        openScope && openScope !== dropdownScope && (openScope.isOpen = !1), openScope = dropdownScope;
    }, this.close = function(dropdownScope) {
        openScope === dropdownScope && (openScope = null, $document.unbind("click", closeDropdown), 
        $document.unbind("keydown", escapeKeyBind));
    };
    var closeDropdown = function(evt) {
        evt && evt.isDefaultPrevented() || openScope.$apply(function() {
            openScope.isOpen = !1;
        });
    }, escapeKeyBind = function(evt) {
        27 === evt.which && (openScope.focusToggleElement(), closeDropdown());
    };
} ]).controller("DropdownController", [ "$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
    var getIsOpen, self = this, scope = $scope.$new(), openClass = dropdownConfig.openClass, setIsOpen = angular.noop, toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
    this.init = function(element) {
        self.$element = element, $attrs.isOpen && (getIsOpen = $parse($attrs.isOpen), setIsOpen = getIsOpen.assign, 
        $scope.$watch(getIsOpen, function(value) {
            scope.isOpen = !!value;
        }));
    }, this.toggle = function(open) {
        return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    }, this.isOpen = function() {
        return scope.isOpen;
    }, scope.focusToggleElement = function() {
        self.toggleElement && self.toggleElement[0].focus();
    }, scope.$watch("isOpen", function(isOpen, wasOpen) {
        $animate[isOpen ? "addClass" : "removeClass"](self.$element, openClass), isOpen ? (scope.focusToggleElement(), 
        dropdownService.open(scope)) : dropdownService.close(scope), setIsOpen($scope, isOpen), 
        angular.isDefined(isOpen) && isOpen !== wasOpen && toggleInvoker($scope, {
            open: !!isOpen
        });
    }), $scope.$on("$locationChangeSuccess", function() {
        scope.isOpen = !1;
    }), $scope.$on("$destroy", function() {
        scope.$destroy();
    });
} ]).directive("dropdown", function() {
    return {
        restrict: "CA",
        controller: "DropdownController",
        link: function(scope, element, attrs, dropdownCtrl) {
            dropdownCtrl.init(element);
        }
    };
}).directive("dropdownToggle", function() {
    return {
        restrict: "CA",
        require: "?^dropdown",
        link: function(scope, element, attrs, dropdownCtrl) {
            if (dropdownCtrl) {
                dropdownCtrl.toggleElement = element;
                var toggleDropdown = function(event) {
                    event.preventDefault(), element.hasClass("disabled") || attrs.disabled || scope.$apply(function() {
                        dropdownCtrl.toggle();
                    });
                };
                element.bind("click", toggleDropdown), element.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
                    element.attr("aria-expanded", !!isOpen);
                }), scope.$on("$destroy", function() {
                    element.unbind("click", toggleDropdown);
                });
            }
        }
    };
}), angular.module("ui.bootstrap.modal", [ "ui.bootstrap.transition" ]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var stack = [];
            return {
                add: function(key, value) {
                    stack.push({
                        key: key,
                        value: value
                    });
                },
                get: function(key) {
                    for (var i = 0; i < stack.length; i++) if (key == stack[i].key) return stack[i];
                },
                keys: function() {
                    for (var keys = [], i = 0; i < stack.length; i++) keys.push(stack[i].key);
                    return keys;
                },
                top: function() {
                    return stack[stack.length - 1];
                },
                remove: function(key) {
                    for (var idx = -1, i = 0; i < stack.length; i++) if (key == stack[i].key) {
                        idx = i;
                        break;
                    }
                    return stack.splice(idx, 1)[0];
                },
                removeTop: function() {
                    return stack.splice(stack.length - 1, 1)[0];
                },
                length: function() {
                    return stack.length;
                }
            };
        }
    };
}).directive("modalBackdrop", [ "$timeout", function($timeout) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        link: function(scope) {
            scope.animate = !1, $timeout(function() {
                scope.animate = !0;
            });
        }
    };
} ]).directive("modalWindow", [ "$modalStack", "$timeout", function($modalStack, $timeout) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(tElement, tAttrs) {
            return tAttrs.templateUrl || "template/modal/window.html";
        },
        link: function(scope, element, attrs) {
            element.addClass(attrs.windowClass || ""), scope.size = attrs.size, $timeout(function() {
                scope.animate = !0, element[0].focus();
            }), scope.close = function(evt) {
                var modal = $modalStack.getTop();
                modal && modal.value.backdrop && "static" != modal.value.backdrop && evt.target === evt.currentTarget && (evt.preventDefault(), 
                evt.stopPropagation(), $modalStack.dismiss(modal.key, "backdrop click"));
            };
        }
    };
} ]).factory("$modalStack", [ "$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
    function backdropIndex() {
        for (var topBackdropIndex = -1, opened = openedWindows.keys(), i = 0; i < opened.length; i++) openedWindows.get(opened[i]).value.backdrop && (topBackdropIndex = i);
        return topBackdropIndex;
    }
    function removeModalWindow(modalInstance) {
        var body = $document.find("body").eq(0), modalWindow = openedWindows.get(modalInstance).value;
        openedWindows.remove(modalInstance), removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function() {
            modalWindow.modalScope.$destroy(), body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0), 
            checkRemoveBackdrop();
        });
    }
    function checkRemoveBackdrop() {
        if (backdropDomEl && -1 == backdropIndex()) {
            var backdropScopeRef = backdropScope;
            removeAfterAnimate(backdropDomEl, backdropScope, 150, function() {
                backdropScopeRef.$destroy(), backdropScopeRef = null;
            }), backdropDomEl = void 0, backdropScope = void 0;
        }
    }
    function removeAfterAnimate(domEl, scope, emulateTime, done) {
        function afterAnimating() {
            afterAnimating.done || (afterAnimating.done = !0, domEl.remove(), done && done());
        }
        scope.animate = !1;
        var transitionEndEventName = $transition.transitionEndEventName;
        if (transitionEndEventName) {
            var timeout = $timeout(afterAnimating, emulateTime);
            domEl.bind(transitionEndEventName, function() {
                $timeout.cancel(timeout), afterAnimating(), scope.$apply();
            });
        } else $timeout(afterAnimating, 0);
    }
    var backdropDomEl, backdropScope, OPENED_MODAL_CLASS = "modal-open", openedWindows = $$stackedMap.createNew(), $modalStack = {};
    return $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        backdropScope && (backdropScope.index = newBackdropIndex);
    }), $document.bind("keydown", function(evt) {
        var modal;
        27 === evt.which && (modal = openedWindows.top(), modal && modal.value.keyboard && (evt.preventDefault(), 
        $rootScope.$apply(function() {
            $modalStack.dismiss(modal.key, "escape key press");
        })));
    }), $modalStack.open = function(modalInstance, modal) {
        openedWindows.add(modalInstance, {
            deferred: modal.deferred,
            modalScope: modal.scope,
            backdrop: modal.backdrop,
            keyboard: modal.keyboard
        });
        var body = $document.find("body").eq(0), currBackdropIndex = backdropIndex();
        currBackdropIndex >= 0 && !backdropDomEl && (backdropScope = $rootScope.$new(!0), 
        backdropScope.index = currBackdropIndex, backdropDomEl = $compile("<div modal-backdrop></div>")(backdropScope), 
        body.append(backdropDomEl));
        var angularDomEl = angular.element("<div modal-window></div>");
        angularDomEl.attr({
            "template-url": modal.windowTemplateUrl,
            "window-class": modal.windowClass,
            size: modal.size,
            index: openedWindows.length() - 1,
            animate: "animate"
        }).html(modal.content);
        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl, body.append(modalDomEl), body.addClass(OPENED_MODAL_CLASS);
    }, $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance).value;
        modalWindow && (modalWindow.deferred.resolve(result), removeModalWindow(modalInstance));
    }, $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance).value;
        modalWindow && (modalWindow.deferred.reject(reason), removeModalWindow(modalInstance));
    }, $modalStack.dismissAll = function(reason) {
        for (var topModal = this.getTop(); topModal; ) this.dismiss(topModal.key, reason), 
        topModal = this.getTop();
    }, $modalStack.getTop = function() {
        return openedWindows.top();
    }, $modalStack;
} ]).provider("$modal", function() {
    var $modalProvider = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: [ "$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
            function getTemplatePromise(options) {
                return options.template ? $q.when(options.template) : $http.get(options.templateUrl, {
                    cache: $templateCache
                }).then(function(result) {
                    return result.data;
                });
            }
            function getResolvePromises(resolves) {
                var promisesArr = [];
                return angular.forEach(resolves, function(value) {
                    (angular.isFunction(value) || angular.isArray(value)) && promisesArr.push($q.when($injector.invoke(value)));
                }), promisesArr;
            }
            var $modal = {};
            return $modal.open = function(modalOptions) {
                var modalResultDeferred = $q.defer(), modalOpenedDeferred = $q.defer(), modalInstance = {
                    result: modalResultDeferred.promise,
                    opened: modalOpenedDeferred.promise,
                    close: function(result) {
                        $modalStack.close(modalInstance, result);
                    },
                    dismiss: function(reason) {
                        $modalStack.dismiss(modalInstance, reason);
                    }
                };
                if (modalOptions = angular.extend({}, $modalProvider.options, modalOptions), modalOptions.resolve = modalOptions.resolve || {}, 
                !modalOptions.template && !modalOptions.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var templateAndResolvePromise = $q.all([ getTemplatePromise(modalOptions) ].concat(getResolvePromises(modalOptions.resolve)));
                return templateAndResolvePromise.then(function(tplAndVars) {
                    var modalScope = (modalOptions.scope || $rootScope).$new();
                    modalScope.$close = modalInstance.close, modalScope.$dismiss = modalInstance.dismiss;
                    var ctrlInstance, ctrlLocals = {}, resolveIter = 1;
                    modalOptions.controller && (ctrlLocals.$scope = modalScope, ctrlLocals.$modalInstance = modalInstance, 
                    angular.forEach(modalOptions.resolve, function(value, key) {
                        ctrlLocals[key] = tplAndVars[resolveIter++];
                    }), ctrlInstance = $controller(modalOptions.controller, ctrlLocals)), $modalStack.open(modalInstance, {
                        scope: modalScope,
                        deferred: modalResultDeferred,
                        content: tplAndVars[0],
                        backdrop: modalOptions.backdrop,
                        keyboard: modalOptions.keyboard,
                        windowClass: modalOptions.windowClass,
                        windowTemplateUrl: modalOptions.windowTemplateUrl,
                        size: modalOptions.size
                    });
                }, function(reason) {
                    modalResultDeferred.reject(reason);
                }), templateAndResolvePromise.then(function() {
                    modalOpenedDeferred.resolve(!0);
                }, function() {
                    modalOpenedDeferred.reject(!1);
                }), modalInstance;
            }, $modal;
        } ]
    };
    return $modalProvider;
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", [ "$scope", "$attrs", "$parse", function($scope, $attrs, $parse) {
    var self = this, ngModelCtrl = {
        $setViewValue: angular.noop
    }, setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
    this.init = function(ngModelCtrl_, config) {
        ngModelCtrl = ngModelCtrl_, this.config = config, ngModelCtrl.$render = function() {
            self.render();
        }, $attrs.itemsPerPage ? $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
            self.itemsPerPage = parseInt(value, 10), $scope.totalPages = self.calculateTotalPages();
        }) : this.itemsPerPage = config.itemsPerPage;
    }, this.calculateTotalPages = function() {
        var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }, this.render = function() {
        $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
    }, $scope.selectPage = function(page) {
        $scope.page !== page && page > 0 && page <= $scope.totalPages && (ngModelCtrl.$setViewValue(page), 
        ngModelCtrl.$render());
    }, $scope.getText = function(key) {
        return $scope[key + "Text"] || self.config[key + "Text"];
    }, $scope.noPrevious = function() {
        return 1 === $scope.page;
    }, $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
    }, $scope.$watch("totalItems", function() {
        $scope.totalPages = self.calculateTotalPages();
    }), $scope.$watch("totalPages", function(value) {
        setNumPages($scope.$parent, value), $scope.page > value ? $scope.selectPage(value) : ngModelCtrl.$render();
    });
} ]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", [ "$parse", "paginationConfig", function($parse, paginationConfig) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@"
        },
        require: [ "pagination", "?ngModel" ],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(scope, element, attrs, ctrls) {
            function makePage(number, text, isActive) {
                return {
                    number: number,
                    text: text,
                    active: isActive
                };
            }
            function getPages(currentPage, totalPages) {
                var pages = [], startPage = 1, endPage = totalPages, isMaxSized = angular.isDefined(maxSize) && totalPages > maxSize;
                isMaxSized && (rotate ? (startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1), 
                endPage = startPage + maxSize - 1, endPage > totalPages && (endPage = totalPages, 
                startPage = endPage - maxSize + 1)) : (startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1, 
                endPage = Math.min(startPage + maxSize - 1, totalPages)));
                for (var number = startPage; endPage >= number; number++) {
                    var page = makePage(number, number, number === currentPage);
                    pages.push(page);
                }
                if (isMaxSized && !rotate) {
                    if (startPage > 1) {
                        var previousPageSet = makePage(startPage - 1, "...", !1);
                        pages.unshift(previousPageSet);
                    }
                    if (totalPages > endPage) {
                        var nextPageSet = makePage(endPage + 1, "...", !1);
                        pages.push(nextPageSet);
                    }
                }
                return pages;
            }
            var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            if (ngModelCtrl) {
                var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize, rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
                scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks, 
                scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks, 
                paginationCtrl.init(ngModelCtrl, paginationConfig), attrs.maxSize && scope.$parent.$watch($parse(attrs.maxSize), function(value) {
                    maxSize = parseInt(value, 10), paginationCtrl.render();
                });
                var originalRender = paginationCtrl.render;
                paginationCtrl.render = function() {
                    originalRender(), scope.page > 0 && scope.page <= scope.totalPages && (scope.pages = getPages(scope.page, scope.totalPages));
                };
            }
        }
    };
} ]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", [ "pagerConfig", function(pagerConfig) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@"
        },
        require: [ "pager", "?ngModel" ],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(scope, element, attrs, ctrls) {
            var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && (scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align, 
            paginationCtrl.init(ngModelCtrl, pagerConfig));
        }
    };
} ]), angular.module("ui.bootstrap.tooltip", [ "ui.bootstrap.position", "ui.bootstrap.bindHtml" ]).provider("$tooltip", function() {
    function snake_case(name) {
        var regexp = /[A-Z]/g, separator = "-";
        return name.replace(regexp, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    var defaultOptions = {
        placement: "top",
        animation: !0,
        popupDelay: 0
    }, triggerMap = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
    }, globalOptions = {};
    this.options = function(value) {
        angular.extend(globalOptions, value);
    }, this.setTriggers = function(triggers) {
        angular.extend(triggerMap, triggers);
    }, this.$get = [ "$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function($window, $compile, $timeout, $parse, $document, $position, $interpolate) {
        return function(type, prefix, defaultTriggerShow) {
            function getTriggers(trigger) {
                var show = trigger || options.trigger || defaultTriggerShow, hide = triggerMap[show] || show;
                return {
                    show: show,
                    hide: hide
                };
            }
            var options = angular.extend({}, defaultOptions, globalOptions), directiveName = snake_case(type), startSym = $interpolate.startSymbol(), endSym = $interpolate.endSymbol(), template = "<div " + directiveName + '-popup title="' + startSym + "tt_title" + endSym + '" content="' + startSym + "tt_content" + endSym + '" placement="' + startSym + "tt_placement" + endSym + '" animation="tt_animation" is-open="tt_isOpen"></div>';
            return {
                restrict: "EA",
                scope: !0,
                compile: function() {
                    var tooltipLinker = $compile(template);
                    return function(scope, element, attrs) {
                        function toggleTooltipBind() {
                            scope.tt_isOpen ? hideTooltipBind() : showTooltipBind();
                        }
                        function showTooltipBind() {
                            (!hasEnableExp || scope.$eval(attrs[prefix + "Enable"])) && (scope.tt_popupDelay ? popupTimeout || (popupTimeout = $timeout(show, scope.tt_popupDelay, !1), 
                            popupTimeout.then(function(reposition) {
                                reposition();
                            })) : show()());
                        }
                        function hideTooltipBind() {
                            scope.$apply(function() {
                                hide();
                            });
                        }
                        function show() {
                            return popupTimeout = null, transitionTimeout && ($timeout.cancel(transitionTimeout), 
                            transitionTimeout = null), scope.tt_content ? (createTooltip(), tooltip.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), appendToBody ? $document.find("body").append(tooltip) : element.after(tooltip), 
                            positionTooltip(), scope.tt_isOpen = !0, scope.$digest(), positionTooltip) : angular.noop;
                        }
                        function hide() {
                            scope.tt_isOpen = !1, $timeout.cancel(popupTimeout), popupTimeout = null, scope.tt_animation ? transitionTimeout || (transitionTimeout = $timeout(removeTooltip, 500)) : removeTooltip();
                        }
                        function createTooltip() {
                            tooltip && removeTooltip(), tooltip = tooltipLinker(scope, function() {}), scope.$digest();
                        }
                        function removeTooltip() {
                            transitionTimeout = null, tooltip && (tooltip.remove(), tooltip = null);
                        }
                        var tooltip, transitionTimeout, popupTimeout, appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : !1, triggers = getTriggers(void 0), hasEnableExp = angular.isDefined(attrs[prefix + "Enable"]), positionTooltip = function() {
                            var ttPosition = $position.positionElements(element, tooltip, scope.tt_placement, appendToBody);
                            ttPosition.top += "px", ttPosition.left += "px", tooltip.css(ttPosition);
                        };
                        scope.tt_isOpen = !1, attrs.$observe(type, function(val) {
                            scope.tt_content = val, !val && scope.tt_isOpen && hide();
                        }), attrs.$observe(prefix + "Title", function(val) {
                            scope.tt_title = val;
                        }), attrs.$observe(prefix + "Placement", function(val) {
                            scope.tt_placement = angular.isDefined(val) ? val : options.placement;
                        }), attrs.$observe(prefix + "PopupDelay", function(val) {
                            var delay = parseInt(val, 10);
                            scope.tt_popupDelay = isNaN(delay) ? options.popupDelay : delay;
                        });
                        var unregisterTriggers = function() {
                            element.unbind(triggers.show, showTooltipBind), element.unbind(triggers.hide, hideTooltipBind);
                        };
                        attrs.$observe(prefix + "Trigger", function(val) {
                            unregisterTriggers(), triggers = getTriggers(val), triggers.show === triggers.hide ? element.bind(triggers.show, toggleTooltipBind) : (element.bind(triggers.show, showTooltipBind), 
                            element.bind(triggers.hide, hideTooltipBind));
                        });
                        var animation = scope.$eval(attrs[prefix + "Animation"]);
                        scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation, 
                        attrs.$observe(prefix + "AppendToBody", function(val) {
                            appendToBody = angular.isDefined(val) ? $parse(val)(scope) : appendToBody;
                        }), appendToBody && scope.$on("$locationChangeSuccess", function() {
                            scope.tt_isOpen && hide();
                        }), scope.$on("$destroy", function() {
                            $timeout.cancel(transitionTimeout), $timeout.cancel(popupTimeout), unregisterTriggers(), 
                            removeTooltip();
                        });
                    };
                }
            };
        };
    } ];
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    };
}).directive("tooltip", [ "$tooltip", function($tooltip) {
    return $tooltip("tooltip", "tooltip", "mouseenter");
} ]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    };
}).directive("tooltipHtmlUnsafe", [ "$tooltip", function($tooltip) {
    return $tooltip("tooltipHtmlUnsafe", "tooltip", "mouseenter");
} ]), angular.module("ui.bootstrap.popover", [ "ui.bootstrap.tooltip" ]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    };
}).directive("popover", [ "$tooltip", function($tooltip) {
    return $tooltip("popover", "popover", "click");
} ]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", [ "$scope", "$attrs", "progressConfig", function($scope, $attrs, progressConfig) {
    var self = this, animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
    this.bars = [], $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max, 
    this.addBar = function(bar, element) {
        animate || element.css({
            transition: "none"
        }), this.bars.push(bar), bar.$watch("value", function(value) {
            bar.percent = +(100 * value / $scope.max).toFixed(2);
        }), bar.$on("$destroy", function() {
            element = null, self.removeBar(bar);
        });
    }, this.removeBar = function(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
} ]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    };
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, element);
        }
    };
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, angular.element(element.children()[0]));
        }
    };
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", [ "$scope", "$attrs", "ratingConfig", function($scope, $attrs, ratingConfig) {
    var ngModelCtrl = {
        $setViewValue: angular.noop
    };
    this.init = function(ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_, ngModelCtrl.$render = this.render, this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn, 
        this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
        var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
        $scope.range = this.buildTemplateObjects(ratingStates);
    }, this.buildTemplateObjects = function(states) {
        for (var i = 0, n = states.length; n > i; i++) states[i] = angular.extend({
            index: i
        }, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, states[i]);
        return states;
    }, $scope.rate = function(value) {
        !$scope.readonly && value >= 0 && value <= $scope.range.length && (ngModelCtrl.$setViewValue(value), 
        ngModelCtrl.$render());
    }, $scope.enter = function(value) {
        $scope.readonly || ($scope.value = value), $scope.onHover({
            value: value
        });
    }, $scope.reset = function() {
        $scope.value = ngModelCtrl.$viewValue, $scope.onLeave();
    }, $scope.onKeydown = function(evt) {
        /(37|38|39|40)/.test(evt.which) && (evt.preventDefault(), evt.stopPropagation(), 
        $scope.rate($scope.value + (38 === evt.which || 39 === evt.which ? 1 : -1)));
    }, this.render = function() {
        $scope.value = ngModelCtrl.$viewValue;
    };
} ]).directive("rating", function() {
    return {
        restrict: "EA",
        require: [ "rating", "ngModel" ],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(scope, element, attrs, ctrls) {
            var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && ratingCtrl.init(ngModelCtrl);
        }
    };
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", [ "$scope", function($scope) {
    var ctrl = this, tabs = ctrl.tabs = $scope.tabs = [];
    ctrl.select = function(selectedTab) {
        angular.forEach(tabs, function(tab) {
            tab.active && tab !== selectedTab && (tab.active = !1, tab.onDeselect());
        }), selectedTab.active = !0, selectedTab.onSelect();
    }, ctrl.addTab = function(tab) {
        tabs.push(tab), 1 === tabs.length ? tab.active = !0 : tab.active && ctrl.select(tab);
    }, ctrl.removeTab = function(tab) {
        var index = tabs.indexOf(tab);
        if (tab.active && tabs.length > 1) {
            var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
            ctrl.select(tabs[newActiveIndex]);
        }
        tabs.splice(index, 1);
    };
} ]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(scope, element, attrs) {
            scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : !1, 
            scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : !1;
        }
    };
}).directive("tab", [ "$parse", function($parse) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(elm, attrs, transclude) {
            return function(scope, elm, attrs, tabsetCtrl) {
                scope.$watch("active", function(active) {
                    active && tabsetCtrl.select(scope);
                }), scope.disabled = !1, attrs.disabled && scope.$parent.$watch($parse(attrs.disabled), function(value) {
                    scope.disabled = !!value;
                }), scope.select = function() {
                    scope.disabled || (scope.active = !0);
                }, tabsetCtrl.addTab(scope), scope.$on("$destroy", function() {
                    tabsetCtrl.removeTab(scope);
                }), scope.$transcludeFn = transclude;
            };
        }
    };
} ]).directive("tabHeadingTransclude", [ function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(scope, elm) {
            scope.$watch("headingElement", function(heading) {
                heading && (elm.html(""), elm.append(heading));
            });
        }
    };
} ]).directive("tabContentTransclude", function() {
    function isTabHeading(node) {
        return node.tagName && (node.hasAttribute("tab-heading") || node.hasAttribute("data-tab-heading") || "tab-heading" === node.tagName.toLowerCase() || "data-tab-heading" === node.tagName.toLowerCase());
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(scope, elm, attrs) {
            var tab = scope.$eval(attrs.tabContentTransclude);
            tab.$transcludeFn(tab.$parent, function(contents) {
                angular.forEach(contents, function(node) {
                    isTabHeading(node) ? tab.headingElement = node : elm.append(node);
                });
            });
        }
    };
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", [ "$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
    function getHoursFromTemplate() {
        var hours = parseInt($scope.hours, 10), valid = $scope.showMeridian ? hours > 0 && 13 > hours : hours >= 0 && 24 > hours;
        return valid ? ($scope.showMeridian && (12 === hours && (hours = 0), $scope.meridian === meridians[1] && (hours += 12)), 
        hours) : void 0;
    }
    function getMinutesFromTemplate() {
        var minutes = parseInt($scope.minutes, 10);
        return minutes >= 0 && 60 > minutes ? minutes : void 0;
    }
    function pad(value) {
        return angular.isDefined(value) && value.toString().length < 2 ? "0" + value : value;
    }
    function refresh(keyboardChange) {
        makeValid(), ngModelCtrl.$setViewValue(new Date(selected)), updateTemplate(keyboardChange);
    }
    function makeValid() {
        ngModelCtrl.$setValidity("time", !0), $scope.invalidHours = !1, $scope.invalidMinutes = !1;
    }
    function updateTemplate(keyboardChange) {
        var hours = selected.getHours(), minutes = selected.getMinutes();
        $scope.showMeridian && (hours = 0 === hours || 12 === hours ? 12 : hours % 12), 
        $scope.hours = "h" === keyboardChange ? hours : pad(hours), $scope.minutes = "m" === keyboardChange ? minutes : pad(minutes), 
        $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
    function addMinutes(minutes) {
        var dt = new Date(selected.getTime() + 6e4 * minutes);
        selected.setHours(dt.getHours(), dt.getMinutes()), refresh();
    }
    var selected = new Date(), ngModelCtrl = {
        $setViewValue: angular.noop
    }, meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
    this.init = function(ngModelCtrl_, inputs) {
        ngModelCtrl = ngModelCtrl_, ngModelCtrl.$render = this.render;
        var hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1), mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
        mousewheel && this.setupMousewheelEvents(hoursInputEl, minutesInputEl), $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput, 
        this.setupInputEvents(hoursInputEl, minutesInputEl);
    };
    var hourStep = timepickerConfig.hourStep;
    $attrs.hourStep && $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
        hourStep = parseInt(value, 10);
    });
    var minuteStep = timepickerConfig.minuteStep;
    $attrs.minuteStep && $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
        minuteStep = parseInt(value, 10);
    }), $scope.showMeridian = timepickerConfig.showMeridian, $attrs.showMeridian && $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
        if ($scope.showMeridian = !!value, ngModelCtrl.$error.time) {
            var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
            angular.isDefined(hours) && angular.isDefined(minutes) && (selected.setHours(hours), 
            refresh());
        } else updateTemplate();
    }), this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl) {
        var isScrollingUp = function(e) {
            e.originalEvent && (e = e.originalEvent);
            var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
            return e.detail || delta > 0;
        };
        hoursInputEl.bind("mousewheel wheel", function(e) {
            $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours()), 
            e.preventDefault();
        }), minutesInputEl.bind("mousewheel wheel", function(e) {
            $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes()), 
            e.preventDefault();
        });
    }, this.setupInputEvents = function(hoursInputEl, minutesInputEl) {
        if ($scope.readonlyInput) return $scope.updateHours = angular.noop, void ($scope.updateMinutes = angular.noop);
        var invalidate = function(invalidHours, invalidMinutes) {
            ngModelCtrl.$setViewValue(null), ngModelCtrl.$setValidity("time", !1), angular.isDefined(invalidHours) && ($scope.invalidHours = invalidHours), 
            angular.isDefined(invalidMinutes) && ($scope.invalidMinutes = invalidMinutes);
        };
        $scope.updateHours = function() {
            var hours = getHoursFromTemplate();
            angular.isDefined(hours) ? (selected.setHours(hours), refresh("h")) : invalidate(!0);
        }, hoursInputEl.bind("blur", function() {
            !$scope.invalidHours && $scope.hours < 10 && $scope.$apply(function() {
                $scope.hours = pad($scope.hours);
            });
        }), $scope.updateMinutes = function() {
            var minutes = getMinutesFromTemplate();
            angular.isDefined(minutes) ? (selected.setMinutes(minutes), refresh("m")) : invalidate(void 0, !0);
        }, minutesInputEl.bind("blur", function() {
            !$scope.invalidMinutes && $scope.minutes < 10 && $scope.$apply(function() {
                $scope.minutes = pad($scope.minutes);
            });
        });
    }, this.render = function() {
        var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
        isNaN(date) ? (ngModelCtrl.$setValidity("time", !1), $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (date && (selected = date), 
        makeValid(), updateTemplate());
    }, $scope.incrementHours = function() {
        addMinutes(60 * hourStep);
    }, $scope.decrementHours = function() {
        addMinutes(60 * -hourStep);
    }, $scope.incrementMinutes = function() {
        addMinutes(minuteStep);
    }, $scope.decrementMinutes = function() {
        addMinutes(-minuteStep);
    }, $scope.toggleMeridian = function() {
        addMinutes(720 * (selected.getHours() < 12 ? 1 : -1));
    };
} ]).directive("timepicker", function() {
    return {
        restrict: "EA",
        require: [ "timepicker", "?^ngModel" ],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function(scope, element, attrs, ctrls) {
            var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
            ngModelCtrl && timepickerCtrl.init(ngModelCtrl, element.find("input"));
        }
    };
}), angular.module("ui.bootstrap.typeahead", [ "ui.bootstrap.position", "ui.bootstrap.bindHtml" ]).factory("typeaheadParser", [ "$parse", function($parse) {
    var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
        parse: function(input) {
            var match = input.match(TYPEAHEAD_REGEXP);
            if (!match) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + input + '".');
            return {
                itemName: match[3],
                source: $parse(match[4]),
                viewMapper: $parse(match[2] || match[1]),
                modelMapper: $parse(match[1])
            };
        }
    };
} ]).directive("typeahead", [ "$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
    var HOT_KEYS = [ 9, 13, 27, 38, 40 ];
    return {
        require: "ngModel",
        link: function(originalScope, element, attrs, modelCtrl) {
            var hasFocus, minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1, waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0, isEditable = originalScope.$eval(attrs.typeaheadEditable) !== !1, isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop, onSelectCallback = $parse(attrs.typeaheadOnSelect), inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : void 0, appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : !1, $setModelValue = $parse(attrs.ngModel).assign, parserResult = typeaheadParser.parse(attrs.typeahead), scope = originalScope.$new();
            originalScope.$on("$destroy", function() {
                scope.$destroy();
            });
            var popupId = "typeahead-" + scope.$id + "-" + Math.floor(1e4 * Math.random());
            element.attr({
                "aria-autocomplete": "list",
                "aria-expanded": !1,
                "aria-owns": popupId
            });
            var popUpEl = angular.element("<div typeahead-popup></div>");
            popUpEl.attr({
                id: popupId,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(attrs.typeaheadTemplateUrl) && popUpEl.attr("template-url", attrs.typeaheadTemplateUrl);
            var resetMatches = function() {
                scope.matches = [], scope.activeIdx = -1, element.attr("aria-expanded", !1);
            }, getMatchId = function(index) {
                return popupId + "-option-" + index;
            };
            scope.$watch("activeIdx", function(index) {
                0 > index ? element.removeAttr("aria-activedescendant") : element.attr("aria-activedescendant", getMatchId(index));
            });
            var getMatchesAsync = function(inputValue) {
                var locals = {
                    $viewValue: inputValue
                };
                isLoadingSetter(originalScope, !0), $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
                    var onCurrentRequest = inputValue === modelCtrl.$viewValue;
                    if (onCurrentRequest && hasFocus) if (matches.length > 0) {
                        scope.activeIdx = 0, scope.matches.length = 0;
                        for (var i = 0; i < matches.length; i++) locals[parserResult.itemName] = matches[i], 
                        scope.matches.push({
                            id: getMatchId(i),
                            label: parserResult.viewMapper(scope, locals),
                            model: matches[i]
                        });
                        scope.query = inputValue, scope.position = appendToBody ? $position.offset(element) : $position.position(element), 
                        scope.position.top = scope.position.top + element.prop("offsetHeight"), element.attr("aria-expanded", !0);
                    } else resetMatches();
                    onCurrentRequest && isLoadingSetter(originalScope, !1);
                }, function() {
                    resetMatches(), isLoadingSetter(originalScope, !1);
                });
            };
            resetMatches(), scope.query = void 0;
            var timeoutPromise;
            modelCtrl.$parsers.unshift(function(inputValue) {
                return hasFocus = !0, inputValue && inputValue.length >= minSearch ? waitTime > 0 ? (timeoutPromise && $timeout.cancel(timeoutPromise), 
                timeoutPromise = $timeout(function() {
                    getMatchesAsync(inputValue);
                }, waitTime)) : getMatchesAsync(inputValue) : (isLoadingSetter(originalScope, !1), 
                resetMatches()), isEditable ? inputValue : inputValue ? void modelCtrl.$setValidity("editable", !1) : (modelCtrl.$setValidity("editable", !0), 
                inputValue);
            }), modelCtrl.$formatters.push(function(modelValue) {
                var candidateViewValue, emptyViewValue, locals = {};
                return inputFormatter ? (locals.$model = modelValue, inputFormatter(originalScope, locals)) : (locals[parserResult.itemName] = modelValue, 
                candidateViewValue = parserResult.viewMapper(originalScope, locals), locals[parserResult.itemName] = void 0, 
                emptyViewValue = parserResult.viewMapper(originalScope, locals), candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue);
            }), scope.select = function(activeIdx) {
                var model, item, locals = {};
                locals[parserResult.itemName] = item = scope.matches[activeIdx].model, model = parserResult.modelMapper(originalScope, locals), 
                $setModelValue(originalScope, model), modelCtrl.$setValidity("editable", !0), onSelectCallback(originalScope, {
                    $item: item,
                    $model: model,
                    $label: parserResult.viewMapper(originalScope, locals)
                }), resetMatches(), $timeout(function() {
                    element[0].focus();
                }, 0, !1);
            }, element.bind("keydown", function(evt) {
                0 !== scope.matches.length && -1 !== HOT_KEYS.indexOf(evt.which) && (evt.preventDefault(), 
                40 === evt.which ? (scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length, 
                scope.$digest()) : 38 === evt.which ? (scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1, 
                scope.$digest()) : 13 === evt.which || 9 === evt.which ? scope.$apply(function() {
                    scope.select(scope.activeIdx);
                }) : 27 === evt.which && (evt.stopPropagation(), resetMatches(), scope.$digest()));
            }), element.bind("blur", function() {
                hasFocus = !1;
            });
            var dismissClickHandler = function(evt) {
                element[0] !== evt.target && (resetMatches(), scope.$digest());
            };
            $document.bind("click", dismissClickHandler), originalScope.$on("$destroy", function() {
                $document.unbind("click", dismissClickHandler);
            });
            var $popup = $compile(popUpEl)(scope);
            appendToBody ? $document.find("body").append($popup) : element.after($popup);
        }
    };
} ]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(scope, element, attrs) {
            scope.templateUrl = attrs.templateUrl, scope.isOpen = function() {
                return scope.matches.length > 0;
            }, scope.isActive = function(matchIdx) {
                return scope.active == matchIdx;
            }, scope.selectActive = function(matchIdx) {
                scope.active = matchIdx;
            }, scope.selectMatch = function(activeIdx) {
                scope.select({
                    activeIdx: activeIdx
                });
            };
        }
    };
}).directive("typeaheadMatch", [ "$http", "$templateCache", "$compile", "$parse", function($http, $templateCache, $compile, $parse) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(scope, element, attrs) {
            var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || "template/typeahead/typeahead-match.html";
            $http.get(tplUrl, {
                cache: $templateCache
            }).success(function(tplContent) {
                element.replaceWith($compile(tplContent.trim())(scope));
            });
        }
    };
} ]).filter("typeaheadHighlight", function() {
    function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    }
    return function(matchItem, query) {
        return query ? ("" + matchItem).replace(new RegExp(escapeRegexp(query), "gi"), "<strong>$&</strong>") : matchItem;
    };
}), angular.module("template/accordion/accordion-group.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>');
} ]), angular.module("template/accordion/accordion.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>');
} ]), angular.module("template/alert/alert.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/alert/alert.html", '<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n');
} ]), angular.module("template/carousel/carousel.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n');
} ]), angular.module("template/carousel/slide.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n");
} ]), angular.module("template/datepicker/datepicker.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>');
} ]), angular.module("template/datepicker/day.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/datepicker/month.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/datepicker/popup.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n');
} ]), angular.module("template/datepicker/year.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
} ]), angular.module("template/modal/backdrop.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/modal/backdrop.html", '<div class="modal-backdrop fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n');
} ]), angular.module("template/modal/window.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n</div>');
} ]), angular.module("template/pagination/pager.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>');
} ]), angular.module("template/pagination/pagination.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>');
} ]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n');
} ]), angular.module("template/tooltip/tooltip-popup.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
} ]), angular.module("template/popover/popover.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
} ]), angular.module("template/progressbar/bar.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>');
} ]), angular.module("template/progressbar/progress.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>');
} ]), angular.module("template/progressbar/progressbar.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>');
} ]), angular.module("template/rating/rating.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>');
} ]), angular.module("template/tabs/tab.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n');
} ]), angular.module("template/tabs/tabset-titles.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/tabs/tabset-titles.html", "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n");
} ]), angular.module("template/tabs/tabset.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/tabs/tabset.html", '\n<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n');
} ]), angular.module("template/timepicker/timepicker.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n');
} ]), angular.module("template/typeahead/typeahead-match.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
} ]), angular.module("template/typeahead/typeahead-popup.html", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>');
} ]), define("ngdir/angular-ui-bootstrap", [ "angular" ], function() {}), angular.module("ngUpload", []).directive("uploadSubmit", [ "$parse", function() {
    function getParentNodeByTagName(element, tagName) {
        element = angular.element(element);
        var parent = element.parent();
        return tagName = tagName.toLowerCase(), parent && parent[0].tagName.toLowerCase() === tagName ? parent : parent ? getParentNodeByTagName(parent, tagName) : null;
    }
    return {
        restrict: "AC",
        link: function(scope, element) {
            element.bind("click", function($event) {
                if ($event && ($event.preventDefault(), $event.stopPropagation()), !element.attr("disabled")) {
                    var form = getParentNodeByTagName(element, "form");
                    form.triggerHandler("submit"), form[0].submit();
                }
            });
        }
    };
} ]).directive("ngUpload", [ "$log", "$parse", "$document", function($log, $parse, $document) {
    function getMetaTagWithName(name) {
        var match, head = $document.find("head");
        return angular.forEach(head.find("meta"), function(element) {
            element.getAttribute("name") === name && (match = element);
        }), angular.element(match);
    }
    var iframeID = 1;
    return {
        restrict: "AC",
        link: function(scope, element, attrs) {
            function setLoadingState(state) {
                scope.$isUploading = state;
            }
            function uploadEnd() {
                iframe.unbind("load"), scope.$$phase ? setLoadingState(!1) : scope.$apply(function() {
                    setLoadingState(!1);
                });
                var content, bodyContent = (iframe[0].contentDocument || iframe[0].contentWindow.document).body;
                try {
                    content = angular.fromJson(bodyContent.innerText || bodyContent.textContent);
                } catch (e) {
                    content = bodyContent.innerHTML, $log.warn("Response is not valid JSON");
                }
                scope.$$phase ? fn(scope, {
                    content: content
                }) : scope.$apply(function() {
                    fn(scope, {
                        content: content
                    });
                });
            }
            iframeID++;
            var options = {}, fn = attrs.ngUpload ? $parse(attrs.ngUpload) : angular.noop, loading = attrs.ngUploadLoading ? $parse(attrs.ngUploadLoading) : null;
            attrs.hasOwnProperty("uploadOptionsConvertHidden") && (options.convertHidden = "false" != attrs.uploadOptionsConvertHidden), 
            attrs.hasOwnProperty("uploadOptionsEnableRailsCsrf") && (options.enableRailsCsrf = "false" != attrs.uploadOptionsEnableRailsCsrf), 
            attrs.hasOwnProperty("uploadOptionsBeforeSubmit") && (options.beforeSubmit = $parse(attrs.uploadOptionsBeforeSubmit)), 
            element.attr({
                target: "upload-iframe-" + iframeID,
                method: "post",
                enctype: "multipart/form-data",
                encoding: "multipart/form-data"
            });
            var iframe = angular.element('<iframe name="upload-iframe-' + iframeID + '" border="0" width="0" height="0" style="width:0px;height:0px;border:none;display:none">');
            if (options.enableRailsCsrf) {
                var input = angular.element("<input />");
                input.attr("class", "upload-csrf-token"), input.attr("type", "hidden"), input.attr("name", getMetaTagWithName("csrf-param").attr("content")), 
                input.val(getMetaTagWithName("csrf-token").attr("content")), element.append(input);
            }
            element.after(iframe), setLoadingState(!1), element.bind("submit", function() {
                var formController = scope[attrs.name];
                return formController && formController.$invalid ? !1 : options.beforeSubmit && 0 == options.beforeSubmit(scope, {}) ? !1 : (iframe.bind("load", uploadEnd), 
                options.convertHidden && angular.forEach(element.find("input"), function(el) {
                    var _el = angular.element(el);
                    _el.attr("ng-model") && _el.attr("type") && "hidden" == _el.attr("type") && _el.attr("value", scope.$eval(_el.attr("ng-model")));
                }), void (scope.$$phase ? (loading && loading(scope), setLoadingState(!0)) : scope.$apply(function() {
                    loading && loading(scope), setLoadingState(!0);
                })));
            });
        }
    };
} ]), define("ngdir/angular-upload", [ "angular" ], function() {}), angular.module("angular-google-analytics", []).provider("Analytics", function() {
    var accountId, displayFeatures, domainName, removeRegExp, experimentId, crossLinkDomains, created = !1, trackRoutes = !0, trackPrefix = "", analyticsJS = !1, pageEvent = "$routeChangeSuccess", cookieConfig = "auto", ecommerce = !1, enhancedEcommerce = !1, enhancedLinkAttribution = !1, ignoreFirstPageLoad = !1, crossDomainLinker = !1, linkerConfig = {
        allowLinker: !0
    };
    this._logs = [], this.setAccount = function(id) {
        return accountId = id, !0;
    }, this.trackPages = function(doTrack) {
        return trackRoutes = doTrack, !0;
    }, this.trackPrefix = function(prefix) {
        return trackPrefix = prefix, !0;
    }, this.setDomainName = function(domain) {
        return domainName = domain, !0;
    }, this.useDisplayFeatures = function(val) {
        return displayFeatures = !!val, !0;
    }, this.useAnalytics = function(val) {
        return analyticsJS = !!val, !0;
    }, this.useEnhancedLinkAttribution = function(val) {
        return enhancedLinkAttribution = !!val, !0;
    }, this.useCrossDomainLinker = function(val) {
        return crossDomainLinker = !!val, !0;
    }, this.setCrossLinkDomains = function(domains) {
        return crossLinkDomains = domains, !0;
    }, this.setPageEvent = function(name) {
        return pageEvent = name, !0;
    }, this.setCookieConfig = function(config) {
        return cookieConfig = config, !0;
    }, this.useECommerce = function(val, enhanced) {
        return ecommerce = !!val, enhancedEcommerce = !!enhanced, !0;
    }, this.setRemoveRegExp = function(regex) {
        return regex instanceof RegExp ? (removeRegExp = regex, !0) : !1;
    }, this.setExperimentId = function(id) {
        return experimentId = id, !0;
    }, this.ignoreFirstPageLoad = function(val) {
        ignoreFirstPageLoad = !!val;
    }, this.$get = [ "$document", "$rootScope", "$location", "$window", function($document, $rootScope, $location, $window) {
        function _createScriptTag() {
            if (accountId) {
                $window._gaq = [], $window._gaq.push([ "_setAccount", accountId ]), domainName && $window._gaq.push([ "_setDomainName", domainName ]), 
                enhancedLinkAttribution && $window._gaq.push([ "_require", "inpage_linkid", "//www.google-analytics.com/plugins/ga/inpage_linkid.js" ]), 
                trackRoutes && !ignoreFirstPageLoad && $window._gaq.push(removeRegExp ? [ "_trackPageview", getUrl() ] : [ "_trackPageview" ]);
                var gaSrc;
                gaSrc = displayFeatures ? ("https:" === document.location.protocol ? "https://" : "http://") + "stats.g.doubleclick.net/dc.js" : ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", 
                function() {
                    var document = $document[0], ga = document.createElement("script");
                    ga.type = "text/javascript", ga.async = !0, ga.src = gaSrc;
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(ga, s);
                }(gaSrc), created = !0;
            }
        }
        function _createAnalyticsScriptTag() {
            if (!accountId) return console.warn("No account id set for Analytics.js");
            if (function(i, s, o, g, r, a, m) {
                i.GoogleAnalyticsObject = r, i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date(), a = s.createElement(o), m = s.getElementsByTagName(o)[0], 
                a.async = 1, a.src = g, m.parentNode.insertBefore(a, m);
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), 
            angular.isArray(accountId) ? accountId.forEach(function(trackerObj) {
                $window.ga("create", trackerObj.tracker, cookieConfig, {
                    name: trackerObj.name
                });
            }) : crossDomainLinker ? ($window.ga("create", accountId, cookieConfig, linkerConfig), 
            $window.ga("require", "linker"), crossLinkDomains && $window.ga("linker:autoLink", crossLinkDomains)) : $window.ga("create", accountId, cookieConfig), 
            displayFeatures && $window.ga("require", "displayfeatures"), trackRoutes && !ignoreFirstPageLoad && $window.ga("send", "pageview", getUrl()), 
            $window.ga && (ecommerce && (enhancedEcommerce ? $window.ga("require", "ec", "ec.js") : $window.ga("require", "ecommerce", "ecommerce.js")), 
            enhancedLinkAttribution && $window.ga("require", "linkid", "linkid.js"), experimentId)) {
                var expScript = document.createElement("script"), s = document.getElementsByTagName("script")[0];
                expScript.src = "//www.google-analytics.com/cx/api.js?experiment=" + experimentId, 
                s.parentNode.insertBefore(expScript, s);
            }
        }
        var getUrl = function() {
            var url = $location.path();
            return removeRegExp ? url.replace(removeRegExp, "") : url;
        };
        this._log = function() {
            this._logs.push(arguments);
        }, this._trackPage = function(url, title) {
            title = title ? title : $document[0].title, trackRoutes && !analyticsJS && $window._gaq ? ($window._gaq.push([ "_set", "title", title ]), 
            $window._gaq.push([ "_trackPageview", trackPrefix + url ]), this._log("_trackPageview", arguments)) : trackRoutes && analyticsJS && $window.ga && (angular.isArray(accountId) ? accountId.forEach(function(trackerObj) {
                $window.ga(trackerObj.name + ".send", "pageview", {
                    page: trackPrefix + url,
                    title: title
                });
            }) : $window.ga("send", "pageview", {
                page: trackPrefix + url,
                title: title
            }), this._log("pageview", arguments));
        }, this._trackEvent = function(category, action, label, value) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_trackEvent", category, action, label, value ]), 
            this._log("trackEvent", arguments)) : $window.ga && ($window.ga("send", "event", category, action, label, value), 
            this._log("event", arguments));
        }, this._addTrans = function(transactionId, affiliation, total, tax, shipping, city, state, country, currency) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_addTrans", transactionId, affiliation, total, tax, shipping, city, state, country ]), 
            this._log("_addTrans", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? console.warn("Enhanced ecommerce plugin is enabled. Only one plugin(ecommerce/ec) can be used at a time. Use AnalyticsProvider.setECommerce(true,false);") : ($window.ga("ecommerce:addTransaction", {
                id: transactionId,
                affiliation: affiliation,
                revenue: total,
                tax: tax,
                shipping: shipping,
                currency: currency || "USD"
            }), this._log("ecommerce:addTransaction", arguments)) : console.warn("ecommerce no set. Use AnalyticsProvider.setECommerce(true,false);"));
        }, this._addItem = function(transactionId, sku, name, category, price, quantity) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_addItem", transactionId, sku, name, category, price, quantity ]), 
            this._log("_addItem", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? console.warn("Enhanced ecommerce plugin is enabled. Only one plugin(ecommerce/ec) can be used at a time. Use AnalyticsProvider.setECommerce(true,false);") : ($window.ga("ecommerce:addItem", {
                id: transactionId,
                name: name,
                sku: sku,
                category: category,
                price: price,
                quantity: quantity
            }), this._log("ecommerce:addItem", arguments)) : console.warn("ecommerce no set. Use AnalyticsProvider.setECommerce(true,false);"));
        }, this._trackTrans = function() {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_trackTrans" ]), this._log("_trackTrans", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? console.warn("Enhanced ecommerce plugin is enabled. Only one plugin(ecommerce/ec) can be used at a time. Use AnalyticsProvider.setECommerce(true,false);") : ($window.ga("ecommerce:send"), 
            this._log("ecommerce:send", arguments)) : console.warn("ecommerce no set. Use AnalyticsProvider.setECommerce(true,false);"));
        }, this._clearTrans = function() {
            $window.ga && (ecommerce ? enhancedEcommerce ? console.warn("Enhanced ecommerce plugin is enabled. Only one plugin(ecommerce/ec) can be used at a time. Use AnalyticsProvider.setECommerce(true,false);") : ($window.ga("ecommerce:clear"), 
            this._log("ecommerce:clear", arguments)) : console.warn("ecommerce no set. Use AnalyticsProvider.setECommerce(true,false);"));
        }, this._addProduct = function(productId, name, category, brand, variant, price, quantity, coupon, position) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_addProduct", productId, name, category, brand, variant, price, quantity, coupon, position ]), 
            this._log("_addProduct", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? ($window.ga("ec:addProduct", {
                id: productId,
                name: name,
                category: category,
                brand: brand,
                variant: variant,
                price: price,
                quantity: quantity,
                coupon: coupon,
                position: position
            }), this._log("ec:addProduct", arguments)) : console.warn("Enhanced ecommerce plugin is disabled. Use AnalyticsProvider.setECommerce(true,true);") : console.warn("ecommerce not set. Use AnalyticsProvider.setECommerce(true,true);"));
        }, this._addImpression = function(id, name, list, brand, category, variant, position, price) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_addImpression", id, name, list, brand, category, variant, position, price ]), 
            this._log("_addImpression", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? $window.ga("ec:addImpression", {
                id: id,
                name: name,
                category: category,
                brand: brand,
                variant: variant,
                list: list,
                position: position,
                price: price
            }) : console.warn("Enhanced ecommerce plugin is disabled. Use AnalyticsProvider.setECommerce(true,true);") : console.warn("ecommerce not set. Use AnalyticsProvider.setECommerce(true,true);"), 
            this._log("ec:addImpression", arguments));
        }, this._addPromo = function(productId, name, creative, position) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_addPromo", productId, name, creative, position ]), 
            this._log("_addPromo", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? ($window.ga("ec:addPromo", {
                id: productId,
                name: name,
                creative: creative,
                position: position
            }), this._log("ec:addPromo", arguments)) : console.warn("Enhanced ecommerce plugin is disabled. Use AnalyticsProvider.setECommerce(true,true);") : console.warn("ecommerce not set. Use AnalyticsProvider.setECommerce(true,true);"));
        }, this._getActionFieldObject = function(id, affiliation, revenue, tax, shipping, coupon, list, step, option) {
            var obj = {};
            return id && (obj.id = id), affiliation && (obj.affiliation = affiliation), revenue && (obj.revenue = revenue), 
            tax && (obj.tax = tax), shipping && (obj.shipping = shipping), coupon && (obj.coupon = coupon), 
            list && (obj.list = list), step && (obj.step = step), option && (obj.option = option), 
            obj;
        }, this._setAction = function(action, obj) {
            !analyticsJS && $window._gaq ? ($window._gaq.push([ "_setAction", action, obj ]), 
            this._log("__setAction", arguments)) : $window.ga && (ecommerce ? enhancedEcommerce ? ($window.ga("ec:setAction", action, obj), 
            this._log("ec:setAction", arguments)) : console.warn("Enhanced ecommerce plugin is disabled. Use AnalyticsProvider.setECommerce(true,true);") : console.warn("ecommerce not set. Use AnalyticsProvider.setECommerce(true,true);"));
        }, this._trackTransaction = function(transactionId, affiliation, revenue, tax, shipping, coupon, list, step, option) {
            this._setAction("purchase", this._getActionFieldObject(transactionId, affiliation, revenue, tax, shipping, coupon, list, step, option)), 
            this._pageView();
        }, this._trackRefund = function(transactionId) {
            this._setAction("refund", this._getActionFieldObject(transactionId)), this._pageView();
        }, this._trackCheckOut = function(step, option) {
            this._setAction("checkout", this._getActionFieldObject(null, null, null, null, null, null, null, step, option)), 
            this._pageView();
        }, this._trackCart = function(action) {
            -1 !== [ "add", "remove" ].indexOf(action) && (this._setAction(action), this._send("event", "UX", "click", action + "to cart"));
        }, this._promoClick = function(promotionName) {
            this._setAction("promo_click"), this._send("event", "Internal Promotions", "click", promotionName);
        }, this._productClick = function(listName) {
            this._setAction("click", this._getActionFieldObject(null, null, null, null, null, null, listName, null, null)), 
            this._send("event", "UX", "click", listName);
        }, this._send = function(obj) {
            $window.ga && ($window.ga("send", obj), this._log("send", obj));
        }, this._pageView = function() {
            this._send("pageview");
        }, this._set = function(name, value) {
            $window.ga && ($window.ga("set", name, value), this._log("set", name, value));
        }, analyticsJS ? _createAnalyticsScriptTag() : _createScriptTag();
        var me = this;
        return trackRoutes && $rootScope.$on(pageEvent, function() {
            me._trackPage(getUrl());
        }), {
            _logs: me._logs,
            cookieConfig: cookieConfig,
            displayFeatures: displayFeatures,
            ecommerce: ecommerce,
            enhancedEcommerce: enhancedEcommerce,
            enhancedLinkAttribution: enhancedLinkAttribution,
            getUrl: getUrl,
            experimentId: experimentId,
            ignoreFirstPageLoad: ignoreFirstPageLoad,
            trackPage: function(url, title) {
                me._trackPage(url, title);
            },
            trackEvent: function(category, action, label, value) {
                me._trackEvent(category, action, label, value);
            },
            addTrans: function(transactionId, affiliation, total, tax, shipping, city, state, country, currency) {
                me._addTrans(transactionId, affiliation, total, tax, shipping, city, state, country, currency);
            },
            addItem: function(transactionId, sku, name, category, price, quantity) {
                me._addItem(transactionId, sku, name, category, price, quantity);
            },
            trackTrans: function() {
                me._trackTrans();
            },
            clearTrans: function() {
                me._clearTrans();
            },
            addProduct: function(productId, name, category, brand, variant, price, quantity, coupon, position) {
                me._addProduct(productId, name, category, brand, variant, price, quantity, coupon, position);
            },
            addPromo: function(productId, name, creative, position) {
                me._addPromo(productId, name, creative, position);
            },
            addImpression: function(productId, name, list, brand, category, variant, position, price) {
                me._addImpression(productId, name, list, brand, category, variant, position, price);
            },
            productClick: function(listName) {
                me._productClick(listName);
            },
            promoClick: function(promotionName) {
                me._promoClick(promotionName);
            },
            trackDetail: function() {
                me._setAction("detail"), me._pageView();
            },
            trackCart: function(action) {
                me._trackCart(action);
            },
            trackCheckout: function(step, option) {
                me._trackCheckOut(step, option);
            },
            trackTransaction: function(transactionId, affiliation, revenue, tax, shipping, coupon, list, step, option) {
                me._trackTransaction(transactionId, affiliation, revenue, tax, shipping, coupon, list, step, option);
            },
            setAction: function(action, obj) {
                me._setAction(action, obj);
            },
            send: function(obj) {
                me._send(obj);
            },
            pageView: function() {
                me._pageView();
            },
            set: function(name, value) {
                me._set(name, value);
            }
        };
    } ];
}), define("ngdir/angular-google-analytics", [ "angular" ], function() {}), define("common/js/modules/strings/stringsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.strings", []);
}), define("common/js/modules/strings/stringsService", [ "./stringsModule" ], function(module) {
    module.factory("StringsService", function() {
        function trim(str) {
            return str.replace(/^\s+|\s+$/g, "");
        }
        function trimToWord(str, len) {
            if (null == str || 0 >= len) return "";
            var chopped = str;
            return len && str.length > len && (chopped = chopped.substr(0, len - 4), chopped = chopped.replace(/\s+[^\s]*$/, ""), 
            chopped += " ..."), chopped;
        }
        function isBlank(str) {
            return null == str ? !0 : (str + "").match(/^[\s|\n]*$/) ? !0 : !1;
        }
        function capitalize(text) {
            return text ? text.substr(0, 1).toUpperCase() + text.substr(1) : "";
        }
        function camelCaseToUpUnderscore(fieldName) {
            return fieldName ? fieldName.replace(/([A-Z])/g, "_$1").toUpperCase() : "";
        }
        function upUnderscoreTocamelCase(fieldName) {
            if (!fieldName) return "";
            for (var words = fieldName.toLowerCase().split("_"), ret = "", i = 0; i < words.length; i++) {
                var word = words[i];
                i > 0 && (word = capitalize(word)), ret += word;
            }
            return ret;
        }
        function underscoreToHuman(fieldName) {
            if (!fieldName) return "";
            for (var words = fieldName.toLowerCase().split("_"), ret = "", i = 0; i < words.length; i++) ret += " " + words[i];
            return capitalize(ret.substr(1));
        }
        function camelCaseToHuman(fieldName) {
            return underscoreToHuman(camelCaseToUpUnderscore(fieldName));
        }
        function stripTags(str) {
            return str.replace(/<(div|br)>/gi, "\n").replace(/<[^>]*>/g, "").replace(/\&nbsp\;/g, " ").replace(/\&quot\;/g, '"').replace(/\&lt\;/g, "<").replace(/\&gt\;/g, ">").replace(/\&amp;\;/g, "&").replace(/\n[\n\s]*/g, "\n");
        }
        function brLines(str) {
            return str.replace(/\n/g, "<br>");
        }
        function pad(str, len, c) {
            for (var paddedStr = str.toString(); paddedStr.length < len; ) paddedStr = c + paddedStr;
            return paddedStr;
        }
        function compare(str1, str2) {
            return str1 > str2 ? 1 : str2 > str1 ? -1 : 0;
        }
        function randomString(len) {
            return Math.random().toString(36).substring(2, len + 2);
        }
        function isHebChar(char) {
            return char >= "א" && "ת" >= char;
        }
        function readableNumber(number) {
            if (null == number) return "";
            var numberStr = trim(number + ""), readable = "";
            0 > number && (numberStr = numberStr.substr(1));
            for (var numberLength = numberStr.length, i = 0; numberLength > i; i++) readable = numberStr.charAt(numberLength - i - 1) + readable, 
            i != numberLength - 1 && i % 3 == 2 && (readable = "," + readable);
            return 0 > number && (readable = "-" + readable), readable;
        }
        function escapeHtml(str) {
            var entityMap = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            return String(str).replace(/[&<>"'\/]/g, function(s) {
                return entityMap[s];
            });
        }
        return {
            isBlank: isBlank,
            trim: trim,
            trimToWord: trimToWord,
            stripTags: stripTags,
            escapeHtml: escapeHtml,
            brLines: brLines,
            pad: pad,
            randomString: randomString,
            compare: compare,
            readableNumber: readableNumber,
            capitalize: capitalize,
            camelCaseToHuman: camelCaseToHuman,
            camelCaseToUpUnderscore: camelCaseToUpUnderscore,
            upUnderscoreTocamelCase: upUnderscoreTocamelCase,
            underscoreToHuman: underscoreToHuman,
            isHebChar: isHebChar
        };
    });
}), define("common/js/modules/strings/stringsFilters", [ "./stringsModule" ], function(module) {
    return module.filter("capitalize", [ "StringsService", function(StringsService) {
        return function(text) {
            return StringsService.capitalize(text);
        };
    } ]).filter("trim", [ "StringsService", function(StringsService) {
        return function(text, length) {
            return StringsService.trimToWord(text, length);
        };
    } ]).filter("stripTags", [ "StringsService", function(StringsService) {
        return function(text) {
            return StringsService.stripTags(text);
        };
    } ]).filter("brLines", [ "StringsService", function(StringsService) {
        return function(text) {
            return StringsService.brLines(text);
        };
    } ]).filter("strArr", [ "ArraysService", function(ArraysService) {
        return function(arr, separator) {
            return ArraysService.toString(arr, separator || ", ");
        };
    } ]).filter("camelCaseToUpUnderscore", [ "StringsService", function(StringsService) {
        return function(text) {
            return StringsService.camelCaseToUpUnderscore(text);
        };
    } ]).filter("underscoreToHuman", [ "StringsService", function(StringsService) {
        return function(text) {
            return StringsService.underscoreToHuman(text);
        };
    } ]).filter("camelToHuman", [ "StringsService", function(StringsService) {
        return function(text) {
            return StringsService.camelCaseToHuman(text);
        };
    } ]);
}), define("common/js/modules/strings/diffService", [ "./stringsModule" ], function(module) {
    module.factory("DiffService", function() {
        function getChangeInds(str1, str2) {
            if (!str1 || !str2 || str1 == str2) return null;
            var fromStart = findFirstChangeFromStart(str1, str2), fromEnd = findFirstChangeFromEnd(str1, str2, fromStart);
            return {
                fromStart: fromStart,
                fromEnd: fromEnd
            };
        }
        function findFirstChangeFromStart(str1, str2) {
            for (var str1Length = str1.length, str2Length = str2.length, i = 0; str1Length > i && str2Length > i; i++) {
                var c1 = str1.charAt(i), c2 = str2.charAt(i);
                if (c1 != c2) return i;
            }
            return Math.min(str1Length, str2Length);
        }
        function findFirstChangeFromEnd(str1, str2, changeStartInd) {
            for (var str1Length = str1.length, str2Length = str2.length, i = 0; str1Length > i && str2Length > i; i++) {
                var str1Ind = str1Length - 1 - i, str2Ind = str2Length - 1 - i;
                if (changeStartInd >= str1Ind || changeStartInd >= str1Ind) return i - 1;
                var c1 = str1.charAt(str1Ind), c2 = str2.charAt(str2Ind);
                if (c1 != c2) return i;
            }
            return Math.min(str1Length, str2Length);
        }
        return {
            getChangeInds: getChangeInds
        };
    });
}), define("common/js/modules/strings/index", [ "./stringsModule", "./stringsService", "./stringsFilters", "./diffService" ], function() {}), 
define("common/js/modules/utils/utilsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.utils", []);
}), define("common/js/modules/utils/externalHrefDirective", [ "./utilsModule" ], function(module) {
    module.directive("bsExternalHref", function() {
        return {
            restrict: "A",
            scope: {},
            link: function(scope, elem, attrs) {
                function update(urlAttr) {
                    if (urlAttr) {
                        var url = urlAttr;
                        0 == !url.indexOf("http") && (url = "http://" + url), elem.attr("href", url), elem.removeClass("inactive");
                    } else elem.attr("href", "javascript:{}"), elem.addClass("inactive");
                }
                attrs.$observe("bsExternalHref", function(urlAttr) {
                    update(urlAttr);
                });
            }
        };
    });
}), define("common/js/modules/utils/arraysService", [ "./utilsModule" ], function(module) {
    module.factory("ArraysService", function() {
        function getInd(list, value) {
            if (!list) return null;
            for (var i = 0; i < list.length; i++) if (list[i] == value) return i;
            return null;
        }
        function contains(list, value) {
            var ind = getInd(list, value);
            return null == ind ? !1 : !0;
        }
        function remove(list, value) {
            var ind = getInd(list, value);
            return null != ind && list.splice(ind, 1), ind;
        }
        function containsByKey(list, key, value) {
            var ind = getIndByKey(list, key, value);
            return null == ind ? !1 : !0;
        }
        function filteredByNonEmpty(list, key) {
            return filterByNotInValuesList(list, key, [ null, "" ]);
        }
        function filteredByEmpty(list, key) {
            return filterByValuesList(list, key, [ null, "" ]);
        }
        function filteredBy(list, key, val) {
            return getFilteredList(list, key, !0, val);
        }
        function filteredByNot(list, key, val) {
            return getFilteredList(list, key, !1, val);
        }
        function getFilteredList(list, key, equals, value) {
            return filterWithFunction(list, function(item) {
                var matches = item[key] == value;
                return equals && matches || !equals && !matches;
            });
        }
        function filterByValuesList(list, key, values, matchCondtion) {
            return filterWithFunction(list, function(item) {
                var value = item[key], inList = contains(values, value);
                switch (matchCondtion) {
                  case "matchIfNotInList":
                    return !inList;

                  default:
                    return inList;
                }
            });
        }
        function filterByNotInValuesList(list, key, values) {
            return filterByValuesList(list, key, values, "matchIfNotInList");
        }
        function filterWithFunction(list, fn) {
            if (!list) return [];
            for (var filtered = [], i = 0; i < list.length; i++) {
                var item = list[i];
                fn(item) && filtered.push(item);
            }
            return filtered;
        }
        function getByKey(list, key, value) {
            var ind = getIndByKey(list, key, value);
            return null == ind ? null : list[ind];
        }
        function getIndByKey(list, key, value) {
            if (!list) return null;
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (item) {
                    var itemVal = eval("item." + key);
                    if (itemVal == value) return i;
                }
            }
            return null;
        }
        function getNotNullKey(list, key) {
            if (!list) return null;
            for (var i = 0; i < list.length; i++) if (null != list[i][key]) return list[i];
            return null;
        }
        function getById(list, id) {
            return getByKey(list, "id", id);
        }
        function getIndById(list, id) {
            return getIndByKey(list, "id", id);
        }
        function removeById(list, id) {
            return removeByKey(list, "id", id);
        }
        function addOrReplace(list, obj) {
            var ind = remove(list, obj);
            insert(list, ind, obj);
        }
        function addIfNotExists(list, obj) {
            contains(list, obj) || list.push(obj);
        }
        function insert(list, ind, obj) {
            null != ind ? list.splice(ind, 0, obj) : list.push(obj);
        }
        function addOrReplaceById(list, obj) {
            addOrReplaceByKey(list, "id", obj);
        }
        function addOrReplaceByKey(list, key, obj) {
            var ind = removeByKey(list, key, obj[key]);
            insert(list, ind, obj);
        }
        function removeByKey(list, key, val) {
            if (!list) return null;
            for (var objToRemoveInd = null, removedObj = null, i = 0; i < list.length; i++) if (list[i][key] && list[i][key] == val) {
                objToRemoveInd = i, removedObj = list[i];
                break;
            }
            return removedObj && list.splice(objToRemoveInd, 1), objToRemoveInd;
        }
        function chop(list, size) {
            return list.length > size ? list.slice(0, size) : list;
        }
        function sort(list, key, desc, emptyBehaviour) {
            var keyParts = key.split(","), mainKey = keyParts[0], subKey = keyParts[1];
            return list.sort(function(a, b) {
                var aVal = eval("a." + mainKey), bVal = eval("b." + mainKey);
                if (aVal == bVal) {
                    if (!subKey) return 0;
                    aVal = eval("a." + subKey), bVal = eval("b." + subKey);
                }
                if (null != aVal && null != bVal || !emptyBehaviour) {
                    var greater = bVal > aVal ? -1 : 1;
                    return greater * (desc ? -1 : 1);
                }
                return "emptyFirst" == emptyBehaviour ? null == bVal ? 1 : -1 : "emptyLast" == emptyBehaviour ? null == bVal ? -1 : 1 : void 0;
            });
        }
        function shuffle(list) {
            for (var tempList = []; list.length > 0; ) tempList.push(popRandom(list));
            for (;tempList.length > 0; ) list.push(tempList.pop());
            return list;
        }
        function toString(list, separator) {
            if (!list || 0 == list.length) return "";
            var listStr = "";
            separator || (separator = ",");
            for (var i = 0; i < list.length; i++) listStr += separator + list[i];
            return listStr.substring(separator.length);
        }
        function toFieldsString(list, field, separator) {
            return toString(getAttributesList(list, field, separator));
        }
        function getMaxByKey(list, key) {
            if (!list) return null;
            var maxObj = null;
            for (var i in list) (null == maxObj || list[i][key] && list[i][key] > maxObj[key]) && (maxObj = list[i]);
            return maxObj;
        }
        function getMaxesByKey(list, key) {
            if (!list) return null;
            for (var maxesList = [], maxObj = null, i = 0; i < list.length; i++) null == maxObj || list[i][key] > maxObj[key] ? (maxObj = list[i], 
            maxesList = [ maxObj ]) : list[i][key] == maxObj[key] && maxesList.push(list[i][key]);
            return maxesList;
        }
        function popRandom(list) {
            var obj = getRandom(list);
            return remove(list, obj), obj;
        }
        function getRandom(list) {
            var randomInd = Math.floor(Math.random() * list.length), obj = list[randomInd];
            return obj;
        }
        function inverse(list) {
            for (var listCopy = []; list.length > 0; ) listCopy.push(list.pop());
            for (var i = 0; i < listCopy.length; i++) list.push(listCopy[i]);
        }
        function average(list, key) {
            return list ? sum(list, key) / list.length : null;
        }
        function sum(list, key) {
            if (!list) return null;
            for (var total = 0, i = 0; i < list.length; i++) {
                var elem = list[i];
                total += key ? elem[key] : elem;
            }
            return total;
        }
        function getAttributesList(list, key) {
            var attrList = [];
            if (!list) return [];
            for (var i = 0; i < list.length; i++) attrList.push(list[i][key]);
            return attrList;
        }
        function getIdsList(list) {
            return getAttributesList(list, "id");
        }
        function hasCommonElement(list1, list2) {
            if (!list1 || !list2 || 0 == list1.length || 0 == list2.length) return !1;
            for (var i = 0; i < list1.length; i++) for (var j = 0; j < list2.length; j++) if (list1[i] == list2[j]) return !0;
            return !1;
        }
        function replaceContent(oldList, newList) {
            var newListClone = newList ? newList.slice(0) : [];
            oldList.length = 0, Array.prototype.push.apply(oldList, newListClone);
        }
        function listToMap(list, key) {
            var map = {};
            if (list) for (var i = 0; i < list.length; i++) {
                var item = list[i];
                map[item[key]] = item;
            }
            return map;
        }
        function listToMapById(list) {
            return listToMap(list, "id");
        }
        function setPropertyFromMap(list, property, map, key, detaultVal) {
            if (list) for (var i = 0; i < list.length; i++) {
                var item = list[i];
                item[property] = map[item[key]] || detaultVal;
            }
        }
        function setPropertyFromMapById(list, property, map) {
            setPropertyFromMap(list, property, map, "id");
        }
        function setPropertyFromList(list, property, propertiesList, listKey, propertyKey, detaultVal) {
            if (list && propertiesList) for (var map = listToMap(propertiesList, propertyKey), i = 0; i < list.length; i++) {
                var item = list[i], itemKey = item[listKey];
                item[property] = map[itemKey] || detaultVal;
            }
        }
        return {
            shuffle: shuffle,
            sort: sort,
            inverse: inverse,
            chop: chop,
            insert: insert,
            addOrReplaceByKey: addOrReplaceByKey,
            addOrReplaceById: addOrReplaceById,
            addOrReplace: addOrReplace,
            addIfNotExists: addIfNotExists,
            replaceContent: replaceContent,
            getIndById: getIndById,
            getById: getById,
            getNotNullKey: getNotNullKey,
            getIndByKey: getIndByKey,
            getByKey: getByKey,
            getInd: getInd,
            removeByKey: removeByKey,
            removeById: removeById,
            remove: remove,
            sum: sum,
            average: average,
            getMaxesByKey: getMaxesByKey,
            getMaxByKey: getMaxByKey,
            filterByValuesList: filterByValuesList,
            filterWithFunction: filterWithFunction,
            getFilteredList: getFilteredList,
            filteredByNonEmpty: filteredByNonEmpty,
            filteredByEmpty: filteredByEmpty,
            filteredByNot: filteredByNot,
            filteredBy: filteredBy,
            containsByKey: containsByKey,
            contains: contains,
            hasCommonElement: hasCommonElement,
            getRandom: getRandom,
            popRandom: popRandom,
            listToMap: listToMap,
            listToMapById: listToMapById,
            setPropertyFromMap: setPropertyFromMap,
            setPropertyFromMapById: setPropertyFromMapById,
            setPropertyFromList: setPropertyFromList,
            getIdsList: getIdsList,
            getAttributesList: getAttributesList,
            toFieldsString: toFieldsString,
            toString: toString
        };
    });
}), Array.prototype.indexOf || (Array.prototype.indexOf = function(obj, start) {
    for (var i = start || 0, j = this.length; j > i; i++) if (this[i] === obj) return i;
    return -1;
}), define("common/js/modules/utils/dateUtilsService", [ "./utilsModule" ], function(module) {
    module.factory("DateUtilsService", function($q, $filter) {
        function utcDate(millis, withTime) {
            var date = new Date(millis);
            return withTime ? new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()) : new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        }
        function formatToServerDate(date, withTime) {
            var format = "yyyy-MM-dd";
            return withTime && (format += " HH:mm:ss"), $filter("date")(date, format);
        }
        function parseServerDate(dateStr) {
            var dateComponenets = dateStr.split(" "), dateParts = dateComponenets[0].split("-"), date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
            if (dateComponenets.length > 1) {
                var timeParts = dateComponenets[1].split(":");
                2 == timeParts.length && timeParts.push("00"), date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1], timeParts[2]);
            }
            return date;
        }
        function parseMillisLeft(millisLeft) {
            var delta = Math.floor(millisLeft / 1e3), days = Math.floor(delta / 86400);
            delta -= 86400 * days;
            var hours = Math.floor(delta / 3600) % 24;
            delta -= 3600 * hours;
            var minutes = Math.floor(delta / 60) % 60;
            delta -= 60 * minutes;
            var seconds = Math.floor(delta % 60);
            return {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }
        return {
            utcDate: utcDate,
            formatToServerDate: formatToServerDate,
            parseServerDate: parseServerDate,
            parseMillisLeft: parseMillisLeft
        };
    });
}), define("common/js/modules/utils/index", [ "./utilsModule", "./externalHrefDirective", "./arraysService", "./dateUtilsService" ], function() {}), 
define("common/js/modules/domUtils/domUtilsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.domUtils", []);
}), define("common/js/modules/domUtils/domUtilsService", [ "./domUtilsModule" ], function(module) {
    module.factory("DomUtilsService", function($q, I18nService) {
        function getParentElement(element, tagName, attribute, value) {
            for (var elem = element, result = null; null == result && "body" != elem[0].tagName.toLowerCase(); ) elem = elem.parent(), 
            elem[0].tagName.toLowerCase() != tagName.toLowerCase() || attribute && elem.attr(attribute) != value || (result = elem);
            return result;
        }
        function insertBefore(existingElement, elementToAdd) {
            existingElement.parent()[0].insertBefore(elementToAdd[0], existingElement[0]);
        }
        function findAny(parent, selectors) {
            for (var elements = [], i = 0; i < selectors.length; i++) for (var selectedElements = parent.find(selectors[i]), j = 0; j < selectedElements.length; j++) elements.push(angular.element(selectedElements[i]));
            return elements;
        }
        function findInputByName(parent, inputName) {
            for (var inputs = findAny(parent, [ "input", "select", "textarea" ]), i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                if (input.attr("name") == inputName) return input;
            }
            return null;
        }
        function loadImage(src) {
            var deferred = $q.defer(), image = angular.element(new Image());
            return image.bind("load", function() {
                deferred.resolve({
                    size: {
                        width: image[0].naturalWidth,
                        height: image[0].naturalHeight
                    },
                    src: src
                });
            }), image.bind("error", function() {
                deferred.reject();
            }), image.attr("src", src), deferred.promise;
        }
        function isTextInputFocused() {
            var activeElement = document.activeElement;
            return !activeElement || "input" != activeElement.tagName.toLowerCase() && "textarea" != activeElement.tagName.toLowerCase() ? !1 : !0;
        }
        function getWindowScroll() {
            var doc = document.documentElement, left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0), top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            return {
                left: left,
                top: top
            };
        }
        function link(href, text) {
            return "<a dir='ltr' href='" + href + "'>" + text + "</a>";
        }
        function noWrap(text, dir) {
            return "<span " + (dir ? "dir='" + dir : "") + "' style='white-space:nowrap'>" + text + "</span>";
        }
        function getCurrentDirection() {
            switch (I18nService.getCurrentLang()) {
              case "he":
                return "rtl";

              default:
                return "ltr";
            }
        }
        function getTag(tagName, attributeName, attributeValue) {
            for (var tags = document.getElementsByTagName(tagName), i = 0; i < tags.length; i++) {
                var tag = tags[i];
                if (tag.getAttribute(attributeName) == attributeValue) return tag;
            }
        }
        function setTagProp(tagName, attributeName, attributeValue, propName, propValue) {
            var tag = getTag(tagName, attributeName, attributeValue);
            tag || (tag = document.createElement(tagName), tag.setAttribute(attributeName, attributeValue), 
            document.getElementsByTagName("head")[0].appendChild(tag)), tag.setAttribute(propName, propValue);
        }
        function removeTag(tagName, attributeName, attributeValue) {
            var tag = getTag(tagName, attributeName, attributeValue);
            tag && tag.remove();
        }
        function setMetaTag(attributeName, attributeValue, content) {
            setTagProp("meta", attributeName, attributeValue, "content", content);
        }
        function removeMetaTag(attributeName, attributeValue) {
            removeTag("meta", attributeName, attributeValue);
        }
        return {
            getParentElement: getParentElement,
            insertBefore: insertBefore,
            setTagProp: setTagProp,
            setMetaTag: setMetaTag,
            removeMetaTag: removeMetaTag,
            findInputByName: findInputByName,
            isTextInputFocused: isTextInputFocused,
            getWindowScroll: getWindowScroll,
            getCurrentDirection: getCurrentDirection,
            loadImage: loadImage,
            link: link,
            noWrap: noWrap
        };
    });
}), define("common/js/modules/domUtils/enterKeyActionDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsEnterKeyAction", function() {
        return {
            restrict: "A",
            scope: {
                action: "&bsEnterKeyAction"
            },
            link: function(scope, element) {
                element.bind("keydown keypress", function(event) {
                    13 === event.which && (scope.action(), setTimeout(function() {
                        scope.$apply();
                    }, 30), event.preventDefault());
                });
            }
        };
    });
}), define("common/js/modules/domUtils/viewPortService", [ "./domUtilsModule" ], function(module) {
    module.factory("ViewPortService", function($rootScope, $timeout, DomUtilsService, SessionsService) {
        function onResize() {
            if (!DomUtilsService.isTextInputFocused()) {
                $timeout.cancel(mResizeTriggerTimer);
                {
                    document.activeElement;
                }
                mResizeTriggerTimer = $timeout(function() {
                    DomUtilsService.isTextInputFocused() || (mViewPortInfo.orientation && mViewPortInfo.orientation != getOrientation() && $rootScope.$broadcast("viewPort.orientationChange"), 
                    adjustViewPortAccordingToOrientation(), updateViewportInfo(), $rootScope.$broadcast("viewPort.windowSizeChanged"));
                }, 300);
            }
        }
        function updateViewportInfo() {
            mViewPortInfo.innerWidth = window.innerWidth, mViewPortInfo.innerHeight = window.innerHeight, 
            window.innerWidth < 1200 && (mViewPortInfo.mobileMedia = !0, mViewPortInfo.pcMedia = !1), 
            window.innerWidth >= 1200 && (mViewPortInfo.pcMedia = !0, mViewPortInfo.mobileMedia = !1), 
            mViewPortInfo.isWideDevice = SessionsService.isWideDevice(), mViewPortInfo.orientation = getOrientation(), 
            $rootScope.viewPort = mViewPortInfo, mDebugInfo.viewPort = mViewPortInfo;
        }
        function adjustViewPortAccordingToOrientation() {
            var width;
            width = isLandscapeOrientation() ? 1199 : mViewPortInfo.minInitialDimenstion < 400 ? 500 : 900, 
            width != mViewPortWidth && (mViewPortWidth = width, mViewPortElement.setAttribute("content", "width=" + mViewPortWidth), 
            $rootScope.$broadcast("viewPort.viewPortWidthChanged"));
        }
        function bindViewPortSizeToWindowWidth() {
            mViewPortInfo.minInitialDimenstion = Math.min(document.body.clientWidth, document.body.clientHeight), 
            mViewPortElement = document.querySelector('meta[name="viewport"]'), $rootScope.viewPortDebugInfo = mDebugInfo, 
            window.addEventListener("resize", onResize), updateViewportInfo(), $timeout(updateViewportInfo, 1e3), 
            onResize();            
            
        }
        function getWindowScroll() {
            var doc = document.documentElement, left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0), top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
            return {
                left: left,
                top: top
            };
        }
        function getClientWidth() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
        function getViewPortWidth() {
            return mViewPortWidth || getClientWidth();
        }
        function getClientHeight() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
        function isLandscapeOrientation() {
            return getClientWidth() > getClientHeight() ? !0 : !1;
        }
        function getOrientation() {
            return isLandscapeOrientation() ? "landscape" : "portrait";
        }
        var mViewPortWidth, mViewPortElement = null, mDebugInfo = {
            resizeCount: 0
        }, mViewPortInfo = {}, mResizeTriggerTimer = null;
        return {
            bindViewPortSizeToWindowWidth: bindViewPortSizeToWindowWidth,
            clientHeight: getClientHeight,
            clientWidth: getClientWidth,
            getViewPortWidth: getViewPortWidth,
            getWindowScroll: getWindowScroll
        };
    });
}), define("common/js/modules/domUtils/slideToggleDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("slideable", function() {
        return {
            restrict: "C",
            compile: function(element) {
                var contents = element.html();
                return element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + "</div>"), 
                function(scope, element, attrs) {
                    attrs.duration = attrs.duration ? attrs.duration : "1s", attrs.easing = attrs.easing ? attrs.easing : "ease-in-out", 
                    element.css({
                        overflow: "hidden",
                        height: "0px",
                        transitionProperty: "height",
                        transitionDuration: attrs.duration,
                        transitionTimingFunction: attrs.easing
                    }), element[0].addEventListener("webkitTransitionEnd", function() {
                        "0px" != element[0].style.height && setTimeout(function() {
                            element.css({
                                transitionProperty: "none",
                                height: ""
                            });
                        }, 10);
                    }, !1);
                };
            }
        };
    }).directive("slideToggle", function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                function slideUp() {
                    target.style.height = content.clientHeight + "px", setTimeout(function() {
                        angular.element(target).css({
                            transitionProperty: "height",
                            height: "0px"
                        }), content.classList.remove("expanded"), element.removeClass("expanded"), attrs.expanded = !1;
                    }, 10);
                }
                function slideDown() {
                    content.style.border = "1px solid rgba(0,0,0,0)";
                    var y = content.clientHeight;
                    content.style.border = 0, target.style.height = y + "px", content.classList.add("expanded"), 
                    element.addClass("expanded"), attrs.expanded = !0;
                }
                var target = document.querySelector(attrs.slideToggle), content = target.querySelector(".slideable_content");
                attrs.expanded = !1, element.bind("click", function() {
                    attrs.expanded ? slideUp() : slideDown();
                }), element.bind("slideUp", slideUp);
            }
        };
    });
}), define("common/js/modules/domUtils/autoFontSizeDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsAutoFontSize", function($window) {
        return {
            template: '<div data-role="inner" ng-transclude></div>',
            transclude: !0,
            link: {
                post: function(scope, elem, attrs) {
                    function shrinkOrGrow() {
                        var i = 0;
                        if (adjustLineHeightAndInlineImages(), fontTooBig() && options.shrink) for (;fontTooBig() && 100 > i && fontSizeI() >= options.minSize; ) setFontSize(fontSizeI() - 1), 
                        i += 1; else {
                            if (!fontTooSmall() || !options.grow) return;
                            for (;fontTooSmall() && 100 > i; ) setFontSize(fontSizeI() + 1), i += 1;
                        }
                        scope.$emit("auto-font-size:resized", {
                            fontSize: fontSizeI(),
                            elem: elem
                        });
                    }
                    function css(el, prop) {
                        return $window.getComputedStyle ? $window.getComputedStyle(el[0]).getPropertyValue(prop) : void 0;
                    }
                    function fontSizeI() {
                        var fontSize = css(inner, "font-size");
                        return Number(fontSize.match(/\d+/)[0]);
                    }
                    function setFontSize(size) {
                        inner[0].style.fontSize = size + "px", adjustLineHeightAndInlineImages();
                    }
                    function adjustLineHeightAndInlineImages() {
                        if (fontSizeAdjusted()) {
                            var size = fontSizeI();
                            inner[0].style.lineHeight = size + 2 + "px";
                            var images = inner[0].querySelectorAll("img");
                            angular.forEach(images, function(img) {
                                img.style.height(size + 2 + "px");
                            });
                        }
                    }
                    function fontSizeAdjusted() {
                        return !!inner[0].style.fontSize;
                    }
                    function fontTooBig() {
                        return inner[0].offsetWidth > options.maxWidth || inner[0].offsetWidth > elem[0].offsetWidth || inner[0].offsetHeight > elem[0].offsetHeight;
                    }
                    function fontTooSmall() {
                        return inner[0].offsetWidth < elem[0].offsetWidth || inner[0].offsetHeight < elem[0].offsetHeight;
                    }
                    var providedOptions = scope.$eval(attrs.bsAutoFontSize) || {};
                    if (providedOptions.maxWidth) {
                        var options = angular.extend({
                            shrink: !0,
                            grow: !0,
                            minSize: 1,
                            maxWidth: null
                        }, providedOptions), inner = angular.element(elem[0].querySelector("div[data-role]"));
                        scope.$watch(shrinkOrGrow);
                    }
                }
            }
        };
    });
}), define("common/js/modules/domUtils/currentDirectionDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsCurrentDirection", function($rootScope, DomUtilsService) {
        return {
            restrict: "A",
            link: function(scope, element) {
                function setDirection() {
                    var direction = DomUtilsService.getCurrentDirection();
                    element.attr("dir", direction);
                }
                $rootScope.$on("i18n.languageChanged", setDirection), setDirection();
            }
        };
    });
}), define("common/js/modules/domUtils/scrollOnDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsScrollOn", function(PathsService, $parse, $timeout) {
        return {
            restrict: "A",
            scope: {
                bsScrollOn: "=",
                scrollToParent: "=",
                watchedValue: "=",
                offset: "=",
                delay: "="
            },
            link: function(scope, element) {
                function scrollIfConditionMet() {
                    if (1 == scope.watchedValue || scope.bsScrollOn) {
                        var scrollOffset = element[0].offsetTop;
                        scope.scrollToParent && (scrollOffset = element.parent()[0].offsetTop), scrollOffset += -100 | scope.offset, 
                        window.scrollTo(0, scrollOffset);
                    }
                }
                $timeout(scrollIfConditionMet, 50 | scope.delay), null != scope.watchedValue && scope.$watch("watchedValue", scrollIfConditionMet);
            }
        };
    });
}), define("common/js/modules/domUtils/backButtonDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsBackButton", function($rootScope, $window) {
        return {
            restrict: "A",
            link: function(scope, elem) {
                elem.bind("click", function() {
                    $window.history.back();
                });
            }
        };
    });
}), define("common/js/modules/domUtils/bsWidthLimitDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsWidthLimitDirective", function() {
        return {
            restrict: "A",
            scope: {
                params: "=bsWidthLimitDirective"
            },
            link: function(scope, element) {
                if (scope.params.lessThen) {
                    var parts = scope.params.lessThen.split(" "), what = parts[0], maxWitdh = 0;
                    "screenWidth" == what && (maxWitdh = window.innerWidth);
                    var operand = parts[1], offset = parts[2];
                    switch (operand) {
                      case "+":
                        maxWitdh += offset;
                        break;

                      case "-":
                        maxWitdh -= offset;
                    }
                    element.css({
                        maxWidth: maxWitdh + "px"
                    });
                }
            }
        };
    });
}), define("common/js/modules/domUtils/focusOnDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsFocusOn", function(PathsService, $parse, $timeout) {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {
                var model = $parse(attrs.bsFocusOn);
                scope.$watch(model, function(value) {
                    value === !0 && $timeout(function() {
                        element[0].focus();
                    }, 20);
                }), element.bind("blur", function() {
                    scope.$apply(model.assign(scope, !1));
                });
            }
        };
    });
}), define("common/js/modules/domUtils/linkableTextDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsLinkableText", function($rootScope, I18nService) {
        return {
            restrict: "E",
            scope: {
                options: "="
            },
            link: function(scope, elem) {
                function display() {
                    elem.html(I18nService.getText(scope.options.textKey, scope.options.textParams));
                    for (var links = elem.find("a"), i = 0; i < links.length; i++) !function(link) {
                        link.bind("click", function() {
                            scope.options.onLinkClick(link.attr("code"));
                        });
                    }(angular.element(links[i]));
                }
                display(), $rootScope.$on("i18n.languageChanged", display);
            }
        };
    });
}), define("common/js/modules/domUtils/scrollToTop", [ "./domUtilsModule" ], function(module) {
    module.directive("bsScrollToTop", function() {
        return {
            restrict: "A",
            link: function() {
                window.scrollTo(0, 0);
            }
        };
    });
}), define("common/js/modules/domUtils/paginationDirective", [ "./domUtilsModule" ], function(module) {
    module.directive("bsPagination", function($timeout, $rootScope, $stateParams, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                pagesData: "=",
                hrefPages: "=",
                availableWidth: "=",
                onCurrentPageChange: "&"
            },
            link: function(scope, element) {
                function updateDisplay() {
                    scope.currentLang = $rootScope.currentLang, adjustButtonsNumber(), scope.shouldShow = scope.pagesData.itemsCount > scope.pagesData.itemsPerPage;
                }
                function adjustButtonsNumber() {
                    var parent = element.parent()[0];
                    if (parent) {
                        var availableWidth = scope.availableWidth || Math.min(800, parent.offsetWidth) - 50, maxButtons = Math.floor(availableWidth / 50) - 5;
                        3 > maxButtons && (maxButtons = 3), scope.maxButtons = maxButtons;
                    }
                }
                function setHrefs() {
                    for (var links = element.find("a"), pagesData = scope.pagesData, lastPageLink = null, i = 0; i < links.length; i++) {
                        var link = angular.element(links[i]), page = null;
                        switch (link.html()) {
                          case "◀":
                            pagesData.currentPage > 1 && (page = 1 * pagesData.currentPage - 1);
                            break;

                          case "▶":
                            pagesData.currentPage < pagesData.numPages && (page = 1 * pagesData.currentPage + 1);
                            break;

                          case "...":
                            page = lastPageLink ? 1 * lastPageLink + 1 : 1 * pagesData.currentPage - (links.length - 3);
                            break;

                          default:
                            page = link.html(), lastPageLink = page;
                        }
                        var href = "";
                        if (page) {
                            var href, hashValue = window.location.hash;
                            href = $stateParams.page ? hashValue.substr(0, hashValue.lastIndexOf("/")) + "/" + page : hashValue + page, 
                            0 == !href.indexOf("#") && (href = "#" + href), link.attr("href", href);
                        }
                    }
                }
                scope.hrefPages && scope.$watch("pagesData.currentPage", function() {
                    $timeout(setHrefs, 50);
                }), scope.callOnCurrentPageChange = function() {
                    scope.onCurrentPageChange && scope.onCurrentPageChange();
                }, updateDisplay(), $rootScope.$on("viewPort.windowSizeChanged", function() {
                    updateDisplay(), $timeout(updateDisplay, 100);
                }), $rootScope.$on("i18n.languageChanged", updateDisplay);
            },
            templateUrl: PathsService.commonTemplatePath("elements/pagination")
        };
    });
}), define("common/js/modules/domUtils/index", [ "./domUtilsModule", "./domUtilsService", "./enterKeyActionDirective", "./viewPortService", "./slideToggleDirective", "./autoFontSizeDirective", "./currentDirectionDirective", "./scrollOnDirective", "./backButtonDirective", "./bsWidthLimitDirective", "./focusOnDirective", "./linkableTextDirective", "./scrollToTop", "./paginationDirective" ], function() {}), 
define("common/js/modules/api/apiModule", [ "angular", "../utils/index" ], function(ng) {
    return ng.module("commonModules.api", [ "commonModules.utils" ]);
}), define("common/js/modules/api/apiInterceptor", [ "./apiModule", "angular" ], function(module) {
    module.factory("ApiInterceptor", [ "$q", "$location", "$log", "$rootScope", function($q, $location, $log, $rootScope) {
        function isApiRequest(config) {
            return -1 == config.url.indexOf(GlobalConfig.apiBase) ? !1 : -1 != config.url.split("?")[0].indexOf(".properties") ? !1 : !0;
        }
        return {
            response: function(response) {
                if (isApiRequest(response.config)) {
                    if (!angular.isObject(response.data)) return $log.warn("Bad resopnse:" + response.data), 
                    response.data = {
                        errorType: "INVALID_RESPONSE",
                        message: "Invalid response from server"
                    }, $q.reject(response);
                    if (response.data.errorType) {
                        switch ($log.warn("Error while invoking api. " + response.data.message), response.data.errorType) {
                          case "SESSION_ENDED":
                            $rootScope.$broadcast("sessionEnded");
                            break;

                          case "NOT_ALLOWED":
                            $rootScope.$broadcast("notAllowed");
                        }
                        return $q.reject(response);
                    }
                }
                return response;
            }
        };
    } ]);
}), define("common/js/modules/api/apiService", [ "./apiModule" ], function(module) {
    module.factory("ApiService", function($http, $log, SessionInfo) {
        function callApi(param1, param2, param3) {
            return angular.isObject(param1) ? callApiWithOptions(param1) : callApiWithParams(param1, param2, param3);
        }
        function callApiWithParams(api, data, method) {
            return callApiWithOptions({
                api: api,
                method: method,
                data: data
            });
        }
        function callApiWithOptions(options) {
            var method = options.method;
            method || (method = "GET");
            var data = angular.copy(options.data);
            data || (data = {});
            var params = {};
            if ("GET" == method && (params = data, data = null, "object" != typeof params)) return void $log.warn("Bad request: must send object to a get request, but found " + typeof params + " (" + params + ")");
            SessionInfo.sessionId && (params.sessionId = SessionInfo.sessionId);
            var isOldIe = -1 != navigator.appVersion.indexOf("MSIE"), apiBase = options.useCdnCache && !isOldIe ? GlobalConfig.cachedApiBase : GlobalConfig.apiBase, apiPath = options.api;
            "/" == apiPath.charAt(0) && "/" == apiBase.charAt(apiBase.length - 1) && (apiPath = apiPath.substring(1));
            var url = apiBase + apiPath, request = {
                method: method,
                url: url,
                data: data,
                params: params
            };
            "postForm" == options.method && (request.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            }, request.method = "POST", request.data = serializeData(request.data));
            var promise = $http(request);
            return promise;
        }
        function serializeData(data) {
            if (!angular.isObject(data)) return null == data ? "" : data.toString();
            var buffer = [];
            for (var name in data) if (data.hasOwnProperty(name)) {
                var value = data[name];
                buffer.push(encodeURIComponent(name) + "=" + encodeURIComponent(null == value ? "" : value));
            }
            var source = buffer.join("&").replace(/%20/g, "+");
            return source;
        }
        return {
            callApi: callApi
        };
    });
}), define("common/js/modules/api/cachedApiService", [ "./apiModule" ], function(module) {
    module.factory("CachedApiService", function($q, ApiService, ArraysService) {
        function setEntityApisOptions(entityName, apisMap) {
            mEntityApisOptions[entityName] = apisMap;
        }
        function setEntityApiUrl(entityName, apiName, url) {
            mEntityApisOptions[entityName][apiName] != url && (clearEntitiyCache(entityName), 
            mEntityApisOptions[entityName][apiName] = url);
        }
        function cachedPromiseWrap(cachedData) {
            var promise = {};
            return promise.success = function(fn) {
                return fn(cachedData), promise;
            }, promise.then = function(fn) {
                return fn(cachedData), promise;
            }, promise.error = function(fn) {
                return fn(), promise;
            }, promise;
        }
        function getListName(entityName) {
            return entityName + "List";
        }
        function getCachedEntitiesList(entityName) {
            return mCache[getListName(entityName)];
        }
        function getList(entityName, reload) {
            return reload && clearEntitiyCache(entityName), callCachableApi(getListName(entityName), mEntityApisOptions[entityName].getListUrl);
        }
        function getCachedEntity(entityName, entityId) {
            var list = getCachedEntitiesList(entityName);
            return list ? ArraysService.getById(list, entityId) : null;
        }
        function addHttpPromiseHandlers(deferred) {
            deferred.promise.success = function(fn) {
                deferred._bsData ? fn(deferred._bsData) : deferred._bsSuccessFn = fn;
            }, deferred.promise.then(function(response) {
                deferred._bsSuccessFn ? deferred._bsSuccessFn(response.data) : deferred._bsData = response.data;
            });
        }
        function getEntityFromList(entityName, entityId) {
            var deferred = $q.defer();
            return getList(entityName).then(function() {
                deferred.resolve({
                    data: getCachedEntity(entityName, entityId)
                });
            }), addHttpPromiseHandlers(deferred), deferred.promise;
        }
        function saveEntity(entityName, entity) {
            var promise = ApiService.callApi(mEntityApisOptions[entityName].saveUrl, entity, "post");
            return promise.success(function(updatedEntity) {
                updateCachedEntity(entityName, entity.id, updatedEntity);
            }), promise;
        }
        function updateCachedEntity(entityName, entityId, entity) {
            var list = getCachedEntitiesList(entityName);
            list && (entityId ? angular.copy(entity, getCachedEntity(entityName, entityId)) : list.push(entity));
        }
        function removeEntity(entityName, entityId) {
            var apiOptions = mEntityApisOptions[entityName], removeOptions = {
                api: apiOptions.removeUrl,
                data: {}
            }, idKey = apiOptions.idKey;
            return idKey || (idKey = "id"), removeOptions.data[idKey] = entityId, ApiService.callApi(removeOptions).success(function() {
                removeEntityFromCache(entityName, entityId);
            });
        }
        function removeEntityFromCache(entityName, entityId) {
            var list = getCachedEntitiesList(entityName);
            list && ArraysService.removeById(list, entityId);
        }
        function clearEntitiyCache(entityName) {
            delete mCache[getListName(entityName)];
        }
        function touchEntity(entityName, entityId) {
            var entity = getCachedEntity(entityName, entityId);
            entity && (entity.lastTouch = new Date().getTime());
        }
        function callCachableApi(cacheKey, param1, param2, param3) {
            var data = mCache[cacheKey];
            if (data) return cachedPromiseWrap(data);
            var promise = ApiService.callApi(param1, param2, param3);
            return promise.success(function(response) {
                mCache[cacheKey] = response;
            }), promise;
        }
        var mCache = {}, mEntityApisOptions = {};
        return {
            setEntityApisOptions: setEntityApisOptions,
            setEntityApiUrl: setEntityApiUrl,
            getList: getList,
            clearEntitiyCache: clearEntitiyCache,
            getEntityFromList: getEntityFromList,
            getCachedEntity: getCachedEntity,
            getCachedEntitiesList: getCachedEntitiesList,
            saveEntity: saveEntity,
            removeEntity: removeEntity,
            touchEntity: touchEntity,
            callCachableApi: callCachableApi,
            cachedPromiseWrap: cachedPromiseWrap,
            _cache: mCache
        };
    });
}), define("common/js/modules/api/index", [ "./apiInterceptor", "./apiModule", "./apiService", "./cachedApiService" ], function() {}), 
define("common/js/modules/system/systemModule", [ "angular", "../utils/index" ], function(ng) {
    return ng.module("commonModules.system", []);
}), define("common/js/modules/system/localStorageService", [ "./systemModule" ], function(module) {
    module.factory("LocalStorageService", function($rootScope, LogService) {
        function init() {
            try {
                localStorage.dummy = "dummy", "dummy" == localStorage.dummy ? (delete localStorage.dummy, 
                storageIsWorking = !0) : storageIsWorking = !1;
            } catch (e) {
                LogService.logError("storage is not working", e), storageIsWorking = !1;
            }
        }
        function storageAllowed() {
            return $rootScope.searchAgentRequest ? !1 : !0;
        }
        function checkStorageEnabled() {
            return storageIsWorking && storageAllowed();
        }
        function storeLocal(key, value) {
            try {
                if (storageIsWorking && storageAllowed()) return localStorage[appKey(key)] = value, 
                !0;
            } catch (e) {}
            return !1;
        }
        function deleteLocal(key) {
            try {
                storageIsWorking && storageAllowed() && delete localStorage[appKey(key)];
            } catch (e) {}
        }
        function appKey(key) {
            return GlobalConfig.appName + "_" + key;
        }
        function loadLocal(key) {
            try {
                if (storageIsWorking && storageAllowed()) {
                    var val = localStorage[appKey(key)];
                    return "undefined" == typeof val && (val = ""), val;
                }
            } catch (e) {}
            return null;
        }
        function storeLocalObject(key, obj) {
            return storeLocal(key, JSON.stringify(obj));
        }
        function loadLocalObject(key) {
            var objStr = loadLocal(key);
            return objStr ? JSON.parse(objStr) : null;
        }
        var storageIsWorking;
        return init(), {
            isEnabled: checkStorageEnabled,
            load: loadLocal,
            store: storeLocal,
            storeObject: storeLocalObject,
            loadObject: loadLocalObject,
            remove: deleteLocal
        };
    });
}), define("common/js/modules/system/cssLoaderService", [ "./systemModule" ], function(module) {
    module.factory("CssLoaderService", function($q, LocalStorageService) {
        function getCssPastLoadInfo() {
            var cssPastLoadInfoStr = LocalStorageService.load("cssPastLoadInfo");
            return cssPastLoadInfoStr ? JSON.parse(cssPastLoadInfoStr) : {
                cacheVersion: GlobalConfig.cssCacheVersion,
                loadVersion: 1,
                status: "init"
            };
        }
        function loadCss(cssPath){
			mPastLoadInfo  = getCssPastLoadInfo();
			mCssLoadStart  = new Date().getTime();
			var fileref=document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			if (!GlobalConfig.isMobileApp){
				cssPath+="?v="+GlobalConfig.cssCacheVersion+"&load="+getCssLoadVersion()
			}			
			fileref.setAttribute("href", cssPath);
			document.getElementsByTagName("head")[0].appendChild(fileref);			
			waitForCssLoad();
			
			return mDeferred.promise;
		}
        function isCssLoaded() {
            var pagePreLoader = document.getElementById("pagePreLoader");
            if (!pagePreLoader) return !0;
            var preLoaderStyle;
            return preLoaderStyle = angular.isDefined(window.getComputedStyle) ? window.getComputedStyle(pagePreLoader) : pagePreLoader.currentStyle, 
            "hidden" === preLoaderStyle.visibility ? (pagePreLoader.parentElement.removeChild(pagePreLoader), 
            !0) : !1;
        }
        function checkLoadTimeout() {
            if (mEnableLoadRetries) {
                var timeSinceLoadState = new Date().getTime() - mCssLoadStart;
                if (timeSinceLoadState > mPastLoadInfo.loadVersion * CSS_LOAD_INCREMENTS) return mPastLoadInfo.status = "failed", 
                storeLoadInfo(), window.location.reload(), !0;
            }
            return !1;
        }
        function waitForCssLoad() {
            isCssLoaded() ? (mPastLoadInfo.status = "success", storeLoadInfo(), mDeferred.resolve(mPastLoadInfo)) : checkLoadTimeout() || setTimeout(waitForCssLoad, 50);
        }
        function getCssLoadVersion() {
            return mPastLoadInfo.cacheVersion == GlobalConfig.cssCacheVersion ? "failed" == mPastLoadInfo.status && mPastLoadInfo.loadVersion++ : (mPastLoadInfo.cacheVersion = GlobalConfig.cssCacheVersion, 
            mPastLoadInfo.loadVersion = 1), mPastLoadInfo.status = "init", storeLoadInfo(), 
            mPastLoadInfo.loadVersion;
        }
        function storeLoadInfo() {
            LocalStorageService.store("cssPastLoadInfo", JSON.stringify(mPastLoadInfo));
        }
        var CSS_LOAD_INCREMENTS = 2e4, mCssLoadStart = null, mEnableLoadRetries = !0, mPastLoadInfo = null, mDeferred = $q.defer();
        return {
            loadCss: loadCss,
            isCssLoaded: isCssLoaded
        };
    });
}), define("common/js/modules/system/settingsService", [ "./systemModule" ], function(module) {
    module.factory("SettingsService", function($rootScope) {
        function init(settings) {
            mSettings = settings, $rootScope.env = settings.envName, mServerTimeGap = new Date().getTime() - settings.serverTime;
        }
        function getAllSettings() {
            return mSettings;
        }
        function getByKey(key, defaultValue) {
            var val = mSettings[key];
            return null != val ? val : defaultValue;
        }
        function getRealServerTimeGap() {
            return mRealServerTimeGap;
        }
        function getServerTimeGap() {
            return mServerTimeGap;
        }
        function secondsSinceStart() {
            return Math.round((new Date().getTime() - GlobalConfig.pageLoadTime) / 1e3);
        }
        function getCacheVersion(cacheKey) {
            return mSettings.cacheVersions[cacheKey];
        }
        function timeUntil(time) {
            return time - (new Date().getTime() - mServerTimeGap);
        }
        var mSettings = null, mServerTimeGap = null;
        return {
            init: init,
            getAll: getAllSettings,
            get: getByKey,
            timeUntil: timeUntil,
            getCacheVersion: getCacheVersion,
            getServerTimeGap: getServerTimeGap,
            getRealServerTimeGap: getRealServerTimeGap,
            secondsSinceStart: secondsSinceStart
        };
    });
}), define("common/js/modules/system/sessionsService", [ "./systemModule" ], function(module) {
    module.value("SessionInfo", {}), module.factory("SessionsService", function($location, $rootScope, ApiService, LogService, AnalyticsService, LocalStorageService, SettingsService, PathsService, SessionInfo) {
        function getSessionUser() {
            return mSessionUser;
        }
        function setSessionUser(user, remember) {
            mSessionUser = user, $rootScope.currentUser = user, $rootScope.$broadcast("auth.newSessionUser"), 
            user ? ((-1 != user.email.indexOf("@bidspirit.com") || -1 != user.email.indexOf("liothedog") || -1 != user.email.indexOf("alexander.kislevsky")) && LocalStorageService.store("bidspiritEmployee", "true"), 
            remember ? LocalStorageService.store("persistentSession", "true") : LocalStorageService.remove("persistentSession"), 
            LocalStorageService.store("lastLogin", new Date().getTime()), LogService.logEvent({
                userSession: user.email
            }), AnalyticsService.trackDailyUniqueEvent("authAction", "login", "user login " + user.email)) : LocalStorageService.remove("persistent");
        }
        function isMobile() {
            return mOsInfo ? mOsInfo.isMobile : void 0;
        }
        function getRegion() {
            return mClientRegion;
        }
        function isWideDevice() {
            return window.innerWidth < 500 ? !1 : isMobile() ? window.navigator.userAgent.match(/ipad/i) ? !0 : !1 : !0;
        }
        function isIe8() {
            return mOsInfo ? isIe() && parseInt(mOsInfo.version) < 9 : navigator.appVersion.indexOf("MSIE 8") > 0;
        }
        function isIPhone() {
            return null != navigator.userAgent.match(/(iPhone)/i);
        }
        function isOldIe() {
            return -1 != navigator.appVersion.indexOf("MSIE");
        }
        function isIe() {
            return mOsInfo ? "IE" == mOsInfo.browser : void 0;
        }
        function setSessionId(sessionId) {
            LocalStorageService.isEnabled() ? LocalStorageService.store("sessionId", sessionId) : PathsService.getQueryParam("sessionId") != sessionId && (window.location = PathsService.newLocationWithParam("sessionId", sessionId)), 
            SessionInfo.sessionId = sessionId;
        }
        function loadPreviousSessionId() {
            var sessionId;
            sessionId = LocalStorageService.isEnabled() ? LocalStorageService.load("sessionId") : PathsService.getQueryParam("sessionId"), 
            sessionId && setSessionId(sessionId);
        }
        function setSessionInfo(sessionInfo) {
            setSessionId(sessionInfo.sessionId), mOsInfo = sessionInfo.osInfo, mClientRegion = sessionInfo.region, 
            -1 == sessionInfo.settings.regions.indexOf(mClientRegion) && (mClientRegion = "IL"), 
            SettingsService.init(sessionInfo.settings), setSessionUser(sessionInfo.user, hasPersistentSession());
        }
        function hasPersistentSession() {
            return "true" == LocalStorageService.load("persistentSession");
        }
        function init() {
            return loadPreviousSessionId(), ApiService.callApi("/auth/initSession", {
                persistentSession: hasPersistentSession()
            }).success(setSessionInfo);
        }
        function logout() {
            var promise = ApiService.callApi("/auth/logout");
            return promise.success(function() {
                mSessionUser = null;
            }), LogService.logMessage("logout"), promise;
        }
        function getOsInfo() {
            return mOsInfo;
        }
        var mOsInfo = null, mSessionUser = null, mClientRegion = null;
        return $rootScope.$on("sessionEnded", function() {
            setSessionUser(null);
        }), {
            init: init,
            loadPreviousSessionId: loadPreviousSessionId,
            isMobile: isMobile,
            isIe8: isIe8,
            isOldIe: isOldIe,
            isIe: isIe,
            isIPhone: isIPhone,
            isWideDevice: isWideDevice,
            getSessionUser: getSessionUser,
            setSessionUser: setSessionUser,
            setSessionInfo: setSessionInfo,
            hasPersistentSession: hasPersistentSession,
            getRegion: getRegion,
            getOsInfo: getOsInfo,
            logout: logout
        };
    });
}), define("common/js/modules/system/index", [ "./systemModule", "./localStorageService", "./cssLoaderService", "./settingsService", "./sessionsService" ], function() {}), 
define("common/js/modules/paths/pathsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.paths", []);
}), define("common/js/modules/paths/pathsService", [ "./pathsModule" ], function(module) {
    module.factory("PathsService", function($rootScope, $log, $modal, $state, $timeout, SessionInfo, SettingsService) {
        function templatePath(templateName, pathType) {
            var baseName = "null";
            switch (pathType) {
              case "app":
                baseName = GlobalConfig.appName;
                break;

              case "common":
                baseName = "common";
                break;

              default:
                return $log.warn("Unknown path type: " + pathType), "";
            }
            return GlobalConfig.templatesBase + baseName + "/templates/" + templateName + ".html?" + GlobalConfig.templatesCacheVersion;
        }
        function commonTemplatePath(templateName) {
            return templatePath(templateName, "common");
        }
        function commonImagePath(imageName) {
            return GlobalConfig.staticFilesBase + "/common/images/" + imageName;
        }
        function appImagePath(imageName) {
            return GlobalConfig.staticFilesBase + "/" + GlobalConfig.appName + "/images/" + imageName;
        }
        function appTemplatePath(templateName) {
            return templatePath(templateName, "app");
        }
        function state(name, options) {
            return mStatesProvider = mStatesProvider.state(name, options);
        }
        function childSubviewTemplateState(parentName, childName, template, options) {
            var _options = angular.copy(options);
            _options.views = {}, _options.views["@" + parentName] = {
                templateUrl: appTemplatePath(template)
            }, appTemplateState(parentName + "." + childName, null, _options);
        }
        function appTemplateState(name, template, options) {
            var _options = angular.copy(options);
            _options.templateUrl = appTemplatePath(template), state(name, _options);
        }
        function appModalState(name, template, options, size) {
            var _options = angular.copy(options), modal = null;
            _options.onEnter = function($modal) {
                modal = $modal.open({
                    templateUrl: appTemplatePath(template),
                    size: size || "lg",
                    backdrop: "static"
                });
            };
            var closeModal = function() {
                modal && (modal.close(), modal = null);
            };
            $rootScope.$on("notAllowed", closeModal), $rootScope.$on("sessionEnded", closeModal), 
            state(name, _options);
        }
        function currentStateSuffix() {
            var stateParts = $state.current.name.split(".");
            return stateParts[stateParts.length - 1];
        }
        function simpleChildStates(parentState, childStates) {
            angular.forEach(childStates, function(childState) {
                state(parentState + "." + childState, {
                    url: "/" + childState
                });
            });
        }
        function formActionPath(path) {
            return GlobalConfig.apiBase + path + "?sessionId=" + SessionInfo.sessionId;
        }
        function getRegionByDomain() {
            var region = getQueryParam("region");
            return region || (region = window.location.host.split(".")[0]), region = region.toUpperCase().replace(/[^A-Z]/g, ""), 
            -1 != [ "IL", "RU", "ALL" ].indexOf(region) ? region : null;
        }
        function validateHttps() {
        	if (GlobalConfig.isMobileApp) return true;
            return "dev" == SettingsService.get("envName") || "https:" == window.location.protocol || $rootScope.searchAgentRequest ? !0 : (window.location = window.location.href.replace("http:", "https:"), 
            !1);
        }
        function reloadAfterDelay(delay) {
            $timeout.cancel(mReloadTimer), mReloadTimer = $timeout($state.reload, delay);
        }
        function getQueryParam(param, allowNull) {
            param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regexS = "[\\?&]" + param + "=([^&#]*)", regex = new RegExp(regexS), results = regex.exec(window.location.href);
            return null == results ? allowNull ? null : "" : decodeURIComponent(results[1]);
        }
        function newLocationWithParam(key, val) {
            if (getQueryParam(key) == val) return window.location.href;
            var newQuery = getQueryStringWithoutKey(key);
            return newQuery += newQuery ? "&" : "?", newQuery += key + "=" + val, getLocationWithQuery(newQuery);
        }
        function newLocationWithoutParam(key) {
            return getLocationWithQuery(getQueryStringWithoutKey(key));
        }
        function getLocationWithQuery(query) {
            return window.location.pathname + query + window.location.hash;
        }
        function getQueryStringWithoutKey(key) {
            for (var queryStr = window.location.search, queryParams = queryStr.split(/\?|\&/), newQueryStr = "", firstParam = !0, i = 1; i < queryParams.length; i++) {
                var queryParamParts = queryParams[i].split("="), queryParamKey = queryParamParts[0], queryParamVal = queryParamParts[1];
                queryParamKey && queryParamKey != key && (newQueryStr += firstParam ? "?" : "&", 
                newQueryStr += queryParamKey + "=" + queryParamVal, firstParam = !1);
            }
            return newQueryStr;
        }
        return mStatesProvider = angular.module("commonModules").$stateProvider, mReloadTimer = null, 
        {
            commonTemplatePath: commonTemplatePath,
            appTemplatePath: appTemplatePath,
            templatePath: templatePath,
            commonImagePath: commonImagePath,
            appImagePath: appImagePath,
            formActionPath: formActionPath,
            state: state,
            appTemplateState: appTemplateState,
            appModalState: appModalState,
            simpleChildStates: simpleChildStates,
            childSubviewTemplateState: childSubviewTemplateState,
            currentStateSuffix: currentStateSuffix,
            getQueryParam: getQueryParam,
            newLocationWithParam: newLocationWithParam,
            newLocationWithoutParam: newLocationWithoutParam,
            getQueryStringWithoutKey: getQueryStringWithoutKey,
            validateHttps: validateHttps,
            getRegionByDomain: getRegionByDomain,
            reloadAfterDelay: reloadAfterDelay
        };
    });
}), define("common/js/modules/paths/filters", [ "./pathsModule" ], function(module) {
    return module.filter("appTemplate", [ "PathsService", function(PathsService) {
        return function(name) {
            return PathsService.appTemplatePath(name);
        };
    } ]).filter("commonTemplate", [ "PathsService", function(PathsService) {
        return function(name) {
            return PathsService.commonTemplatePath(name);
        };
    } ]).filter("commonImage", [ "PathsService", function(PathsService) {
        return function(name) {
            return PathsService.commonImagePath(name);
        };
    } ]).filter("formActionPath", [ "PathsService", function(PathsService) {
        return function(path) {
            return PathsService.formActionPath(path);
        };
    } ]);
}), define("common/js/modules/paths/index", [ "./pathsModule", "./pathsService", "./filters" ], function() {}), 
define("common/js/modules/i18n/i18nModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.i18n", []);
}), define("common/js/modules/i18n/i18nFilter", [ "./i18nModule" ], function(module) {
    return module.filter("i18n", [ "I18nService", function(I18nService) {
        return function(key, params) {
            return I18nService.getText(key, params);
        };
    } ]).filter("sumInCurrency", [ "I18nService", function(I18nService) {
        return function(text, currency) {
            return I18nService.sumInCurrency(text, currency);
        };
    } ]).filter("i18nWithRegion", [ "I18nService", function(I18nService) {
        return function(key, params) {
            return I18nService.getTextWithRegion(key, params);
        };
    } ]);
}), define("common/js/modules/i18n/i18nService", [ "./i18nModule" ], function(module) {
    module.factory("I18nService", function($interpolate, $http, $log, $q, $filter, $rootScope, StringsService, LocalStorageService, PathsService, SettingsService, DateUtilsService) {
        function init(reourcePathFn, preferredLang) {
            mResourcePathFn = reourcePathFn;
            var lang;
            lang = $rootScope.searchAgentRequest ? getLangForSnapshot(preferredLang) : getLangForBrowser(preferredLang), 
            isSupportedLang(lang) || (lang = DEFAULT_LANG);
            var promise = setLang(lang);
            return lang != DEFAULT_LANG ? $q.all([ promise, loadLang(DEFAULT_LANG) ]) : promise;
        }
        function getLangForBrowser(preferredLang) {
            var lang = LocalStorageService.load("lastLang") || PathsService.getQueryParam("lang") || preferredLang;
            return lang || (lang = SettingsService.get("suggestedLanguage"), "other" == lang && (lang = DEFAULT_LANG)), 
            lang;
        }
        function getLangForSnapshot(preferredLang) {
            var queryLang = PathsService.getQueryParam("lang");
            if (queryLang) return StringsService.trim(queryLang).toLowerCase();
            var region = PathsService.getRegionByDomain();
            return region ? langByRegion(region) : preferredLang || DEFAULT_LANG;
        }
        function setLang(lang) {
            var defered = $q.defer();
            return mTextsByLang[lang] ? (mCurrentLang = lang, defered.resolve(), $rootScope.$broadcast("i18n.languageChanged")) : loadLang(lang).success(function() {
                setLang(lang), defered.resolve();
            }), defered.promise;
        }
        function loadLang(lang) {
            var promise = $http({
                url: mResourcePathFn(lang),
                cache: !0
            });
            return promise.success(function(texts) {
                setTexts(lang, texts.split(/\n/m));
            }), promise;
        }
        function reloadTextsAfterDelay(delay) {
            clearTimeout(mTextReloadTimer), mTextReloadTimer = setTimeout(function() {
                loadLang(mCurrentLang).then(function() {
                    $rootScope.$broadcast("i18n.languageChanged");
                }), mCurrentLang != DEFAULT_LANG && loadLang(DEFAULT_LANG);
            }, delay);
        }
        function setTexts(lang, textLines) {
            for (var textsMap = {}, i = 0; i < textLines.length; i++) addTextLineToMap(textsMap, textLines[i]);
            mTextsByLang[lang] = textsMap;
        }
        function addTextLineToMap(textsMap, textLine) {
            var seperatorInd = textLine.indexOf("=");
            if (-1 == seperatorInd) StringsService.isBlank(textLine) || $log.warn("I18n: Failed to parse lang resource line:" + textLine); else {
                var key = StringsService.trim(textLine.substr(0, seperatorInd)), val = StringsService.trim(textLine.substr(seperatorInd + 1));
                textsMap[key] = val;
            }
        }
        function getCurrentLang() {
            return mCurrentLang;
        }
        function getSupportedLangs() {
            return mSupportedLangs;
        }
        function isSupportedLang(lang) {
            return -1 != mSupportedLangs.indexOf(lang);
        }
        function searchTextByKey(key, textsMap) {
            textsMap || (textsMap = mTextsByLang[mCurrentLang]);
            var text = textsMap[key];
            return !text && mTextsByLang[DEFAULT_LANG] && (text = mTextsByLang[DEFAULT_LANG][key]), 
            text || key == key.toLowerCase() || (text = searchTextByKey(key.toLowerCase(), textsMap)), 
            text;
        }
        function getText(key, params, textsMap) {
            if (!key) return "";
            var text = searchTextByKey(key, textsMap);
            return text ? (params && (translatedParams = {}, angular.forEach(params, function(paramVal, paramKey) {
                translatedParams[paramKey] = "string" == typeof paramVal ? searchTextByKey(paramVal, textsMap) || paramVal : paramVal;
            }), text = $interpolate(text)(translatedParams)), text) : ($log.warn("I18n: Failed to find text for key:" + key), 
            key);
        }
        function getTextWithRegion(key, params, region) {
            if (!region && params && (region = params.region), region || (region = $rootScope.currentRegion), 
            "ALL" == region && searchTextByKey(key + "_global")) return getText(key + "_global", params);
            var regionName = getText("region_" + region), paramsWithRegion = angular.copy(params) || {};
            return paramsWithRegion.region = regionName, paramsWithRegion.country = regionName, 
            getText(key, paramsWithRegion);
        }
        function getDateDisplay(date, time, options, textsMap) {
            if (options.withoutDayOfMonth) return getMonth(date.getMonth(), textsMap) + " " + $filter("date")(date, "yyyy");
            var dateStr = $filter("date")(date, "d.M.yy");
            if (!options.withoutDayOfWeek) {
                var day = getWeekDay(date.getDay(), textsMap);
                dateStr = day + ", " + dateStr;
            }
            return time && !options.withoutTime ? dateStr + ", " + time : dateStr;
        }
        function getTimeLeftDisplay(time) {
            function and(str) {
                return getText("time_and", {
                    text: str
                });
            }
            function timeText(timePart) {
                return " " + getText("time_" + timePart);
            }
            var timeDiff = DateUtilsService.parseMillisLeft(SettingsService.timeUntil(time)), timeDisplay = "";
            return timeDiff.days > 0 ? (timeDisplay = timeDiff.days + timeText("days"), timeDiff.hours > 0 && (timeDisplay += " " + and(timeDiff.hours + timeText("hours")))) : timeDiff.hours > 0 ? (timeDisplay = timeDiff.hours + timeText("hours"), 
            timeDiff.minutes > 0 && (timeDisplay += " " + and(timeDiff.minutes + timeText("minutes")))) : timeDisplay = timeDiff.minutes > 0 ? timeDiff.seconds > 45 ? timeDiff.minutes + 1 + timeText("minutes") : timeDiff.seconds > 15 && timeDiff.minutes < 5 ? timeDiff.minutes + timeText("minutes") + " " + and(30 + timeText("seconds")) : timeDiff.minutes + timeText("minutes") : timeDiff.seconds + timeText("seconds"), 
            timeDisplay;
        }
        function getLangField(field) {
            if (!field) return "";
            var fieldInCurrentLang = field[getCurrentLang()];
            if (fieldInCurrentLang) return fieldInCurrentLang;
            var fieldInDefaultLang = field[DEFAULT_LANG];
            if (fieldInDefaultLang) return fieldInDefaultLang;
            for (var lang in field) {
                var fieldInAnyLang = field[lang];
                if (fieldInAnyLang) return fieldInAnyLang;
            }
            return "";
        }
        function langNativeName(lang) {
            switch (lang) {
              case "en":
                return "English";

              case "ru":
                return "Русский";

              case "he":
                return "עברית";

              case "jp":
                return "日本語";

              case "de":
                return "Deutsch";

              case "es":
                return "Español";

              case "pt":
                return "Português";

              case "zh":
                return "汉语";
            }
        }
        function langEnglishName(lang) {
            switch (lang) {
              case "en":
                return "english";

              case "ru":
                return "russian";

              case "he":
                return "hebrew";

              case "jp":
                return "japanese";

              case "de":
                return "german";

              case "es":
                return "spanish";

              case "pt":
                return "portuguese";

              case "zh":
                return "chinese";
            }
        }
        function langByRegion(region) {
            switch (region) {
              case "IL":
                return "he";

              case "RU":
                return "ru";

              default:
                return mCurrentLang || DEFAULT_LANG;
            }
        }
        function setLangByRegion(region) {
            setLang(langByRegion(region));
        }
        function getWeekDay(day, textsMap) {
            var daysArr = getText("week_days", null, textsMap).split(",");
            return StringsService.trim(daysArr[day]);
        }
        function getMonth(month, textsMap) {
            var monthsArr = getText("months", null, textsMap).split(",");
            return StringsService.trim(monthsArr[month]);
        }
        function getPhoneForRegion(phone, region, lang) {
            return "IL" == region && "he" != lang && 0 == phone.indexOf("0") ? "(972) " + phone.substr(1) : phone;
        }
        function sumInCurrency(sum, currency) {
            var sumStr = StringsService.readableNumber(sum);
            switch (currency) {
              case "$":
              case "₪":
              case "¥":
                return currency + sumStr;

              case "CHF":
                return currency + " " + sumStr;

              default:
                return sumStr + currency;
            }
        }
        function isoCurrency(currency) {
            switch (currency) {
              case "$":
                return "USD";

              case "₪":
                return "ILS";

              case "p":
                return "RUB";

              default:
                return currency;
            }
        }
        function parseCurrency(priceDisplay, currency) {
            var parsed = 1 * (priceDisplay + "").replace(currency, "").replace(/,|\s/g, "").replace(/\&nbsp\;/g, "");
            return isNaN(parsed) ? null : parsed;
        }
        var DEFAULT_LANG = "en", mCurrentLang = null, mTextsByLang = {}, mResourcePathFn = null, mTextReloadTimer = null, mSupportedLangs = [ "he", "en", "ru" ];
        return {
            init: init,
            getCurrentLang: getCurrentLang,
            getSupportedLangs: getSupportedLangs,
            setLang: setLang,
            setLangByRegion: setLangByRegion,
            reloadTextsAfterDelay: reloadTextsAfterDelay,
            langNativeName: langNativeName,
            langEnglishName: langEnglishName,
            getPhoneForRegion: getPhoneForRegion,
            getText: getText,
            getTextWithRegion: getTextWithRegion,
            getLangField: getLangField,
            searchTextByKey: searchTextByKey,
            getWeekDay: getWeekDay,
            getMonth: getMonth,
            getDateDisplay: getDateDisplay,
            getTimeLeftDisplay: getTimeLeftDisplay,
            sumInCurrency: sumInCurrency,
            parseCurrency: parseCurrency,
            isoCurrency: isoCurrency,
            DEFAULT_LANG: DEFAULT_LANG
        };
    });
}), define("common/js/modules/i18n/langFieldFilter", [ "./i18nModule" ], function(module) {
    return module.filter("langField", [ "I18nService", function(I18nService) {
        return function(field) {
            return I18nService.getLangField(field);
        };
    } ]);
}), define("common/js/modules/i18n/langNameFilter", [ "./i18nModule" ], function(module) {
    return module.filter("langName", [ "I18nService", "StringsService", function(I18nService, StringsService) {
        return function(langKey, displayLang) {
            return "english" == displayLang ? StringsService.capitalize(I18nService.langEnglishName(langKey)) : I18nService.langNativeName(langKey);
        };
    } ]);
}), define("common/js/modules/i18n/i18nContentWithLinks", [ "./i18nModule" ], function(module) {
    module.directive("i18nContentWithLinks", function($compile, $rootScope, I18nService) {
        return {
            restrict: "E",
            replace: !0,
            link: function(scope, element, attrs) {
                function parseMap(jsonStr) {
                    return jsonStr ? eval("(function(){return " + jsonStr + ";})()") : null;
                }
                function setHtml() {
                    var params = parseMap(attrs.params), linksActions = parseMap(attrs.linksActions), text = I18nService.getText(attrs.key, params);
                    for (key in linksActions) text = text.replace("<a " + key, "<a ng-click=" + linksActions[key]);
                    element.html(text), $compile(element.contents())(scope);
                }
                $rootScope.$on("i18n.languageChanged", setHtml), setHtml();
            }
        };
    });
}), define("common/js/modules/i18n/currentLangDirective", [ "./i18nModule" ], function(module) {
    module.directive("bsCurrentLang", function($rootScope, I18nService) {
        return {
            restrict: "A",
            link: function(scope, element) {
                function setLang() {
                    element.removeClass(currentLang), currentLang = I18nService.getCurrentLang(), element.addClass(currentLang);
                }
                var currentLang = null;
                $rootScope.$on("i18n.languageChanged", setLang), setLang();
            }
        };
    });
}), define("common/js/modules/i18n/index", [ "./i18nModule", "./i18nFilter", "./i18nService", "./langFieldFilter", "./langNameFilter", "./i18nContentWithLinks", "./currentLangDirective" ], function() {}), 
define("common/js/modules/dialogs/dialogsModule", [ "angular", "../utils/index" ], function(ng) {
    return ng.module("commonModules.dialogs", [ "commonModules.utils" ]);
}), define("common/js/modules/dialogs/dialogsService", [ "./dialogsModule", "../paths/index" ], function(module) {
    module.factory("DialogsService", function($modal, PathsService) {
        function showAlert(dataOrMessage) {
            return angular.isString(dataOrMessage) ? showAlertWithMessage(dataOrMessage) : showAlertWithData(dataOrMessage);
        }
        function showAlertWithMessage(message) {
            return showAlertWithData({
                message: message
            });
        }
        function showAlertWithData(data) {
            return newModalWindow({
                templateName: "alert",
                data: data
            });
        }
        function showConfirm(dataOrMessage) {
            return angular.isString(dataOrMessage) ? showConfirmWithMessage(dataOrMessage) : showConfirmWithData(dataOrMessage);
        }
        function showConfirmWithMessage(message) {
            return showConfirmWithData({
                message: message
            });
        }
        function showConfirmWithData(data) {
            return newModalWindow({
                templateName: "confirm",
                data: data
            });
        }
        function showImage(imageName, imagePath) {
            return newModalWindow({
                templateName: "image",
                data: {
                    imageName: imageName,
                    imagePath: imagePath
                },
                size: "lg"
            });
        }
        function newModalWindow(options) {
            return $modal.open({
                templateUrl: PathsService.commonTemplatePath("dialogs/" + options.templateName),
                controller: "DialogController",
                size: options.size || "sm",
                resolve: {
                    dialogData: function() {
                        return options.data;
                    }
                }
            }).result;
        }
        return {
            showAlert: showAlert,
            showConfirm: showConfirm,
            showImage: showImage
        };
    });
}), define("common/js/modules/dialogs/dialogController", [ "./dialogsModule" ], function(module) {
    module.controller("DialogController", [ "$scope", "$modalInstance", "dialogData", function($scope, $modalInstance, dialogData) {
        $scope.dialogData = dialogData, $scope.close = function() {
            $modalInstance.close(!1);
        }, $scope.ok = function() {
            $modalInstance.close(!0);
        };
    } ]);
}), define("common/js/modules/dialogs/bsScopeAlertDirective", [ "./dialogsModule" ], function(module) {
    module.directive("bsScopeAlert", function($animate, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: PathsService.commonTemplatePath("dialogs/scopeAlert"),
            controller: function($scope) {
                $scope.alert = {
                    message: null,
                    type: null
                }, $scope.hideScopeAlert = function() {
                    $scope.alert.message = null;
                }, $scope.showScopeAlert = function(message, type) {
                    $scope.alert = {
                        message: message,
                        type: type || "info"
                    };
                };
            }
        };
    });
}), define("common/js/modules/dialogs/index", [ "./dialogsModule", "./dialogsService", "./dialogController", "./bsScopeAlertDirective" ], function() {}), 
define("common/js/modules/asyncButton/asyncButtonModule", [ "angular", "../utils/index" ], function(ng) {
    return ng.module("commonModules.asyncButton", [ "commonModules.utils" ]);
}), define("common/js/modules/asyncButton/asyncButtonDirective", [ "./asyncButtonModule" ], function(module) {
    module.directive("bsAsyncButton", function($log, PathsService, AsyncButtonService) {
        return {
            restrict: "E",
            transclude: !0,
            replace: !0,
            scope: {
                actionFn: "&",
                bsFormController: "=",
                name: "=",
                buttonClass: "=",
                label: "="
            },
            link: function(scope, elm, attrs) {
                function handleActionResult(result) {
                    result && result.then ? result.then(handleActionResult, unlock) : unlock();
                }
                function lock() {
                    scope.locked = !0;
                }
                function unlock() {
                    scope.locked = !1;
                }
                scope.locked = !1, scope.executeAction = function() {
                    scope.locked || (attrs.actionFn ? (lock(), handleActionResult(scope.actionFn())) : scope.bsFormController ? (lock(), 
                    scope.$on("bsFormSuccess", unlock), scope.$on("bsFormError", unlock), scope.bsFormController.submit() || unlock()) : ($log.warn("Nothing to do with async button"), 
                    $log.warn(scope)));
                }, AsyncButtonService.register(scope);
            },
            templateUrl: PathsService.commonTemplatePath("forms/asyncButton")
        };
    });
}), define("common/js/modules/asyncButton/asyncButtonService", [ "./asyncButtonModule" ], function(module) {
    module.factory("AsyncButtonService", function($log, $q) {
        function register(buttonScope) {
            buttonScope.name && (mButtonsRegistery[buttonScope.name] = buttonScope);
        }
        function invokeButton(asyncButtonName) {
            var buttonScope = mButtonsRegistery[asyncButtonName];
            buttonScope ? buttonScope.executeAction() : $log.warn("Trying to invoke an unknown async button " + asyncButtonName);
        }
        function fakeSuccess(asyncButtonName) {
            var buttonScope = mButtonsRegistery[asyncButtonName];
            return buttonScope.$broadcast("bsFormSuccess"), $q.defer().promise;
        }
        var mButtonsRegistery = {};
        return {
            register: register,
            invokeButton: invokeButton,
            fakeSuccess: fakeSuccess
        };
    });
}), define("common/js/modules/asyncButton/index", [ "./asyncButtonModule", "./asyncButtonDirective", "./asyncButtonService" ], function() {}), 
define("common/js/modules/bsForm/bsFormModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.bsForm", []);
}), define("common/js/modules/bsForm/bsFormDirective", [ "./bsFormModule" ], function(module) {
    module.directive("bsForm", function($parse, $log, PathsService, FormConstants) {
        return {
            restrict: "A",
            replace: !0,
            require: [ "form" ],
            link: function(scope, element, attributes, controllers) {
                function updateFieldsAttentions() {
                    mFormController && !mFormController.$valid && angular.forEach(mInputsControllers, function(inputController, inputName) {
                        checkInputAttention(inputName);
                    }), scope.$$phase || scope.$digest(), angular.forEach(getSubForms(), function(subForm) {
                        subForm.updateFieldsAttentions();
                    });
                }
                function getSubForms() {
                    var subForms = [], subFormsElements = element.find("ng-form");
                    if (mFormController) for (var i = 0; i < subFormsElements.length; i++) {
                        var subFormController = mFormController[subFormsElements[i].attributes.name.value];
                        subFormController && subForms.push(subFormController);
                    }
                    return subForms;
                }
                function bindSumbit() {
                    mFormController.submit = submitForm;
                }
                function submitForm() {
                    return setTimeout(updateFieldsAttentions, 200), mFormController.$valid ? (scope.submitCall(scope).then(function() {
                        scope.$broadcast("bsFormSuccess", {
                            formName: mFormController.$name
                        });
                    }, function() {
                        scope.$broadcast("bsFormError", {
                            formName: mFormController.$name
                        });
                    }), !0) : (scope.$broadcast("bsFormError", {
                        formName: mFormController.$name
                    }), scope.$$phase || scope.$digest(), !1);
                }
                function checkInputAttention(inputName) {
                    var inputController = mInputsControllers[inputName];
                    return inputController.$valid ? inputController.attentionTouch = null : ($log.info("input " + inputName + " is invalid. (" + JSON.stringify(inputController.$error) + ")"), 
                    inputController.attentionTouch = new Date().getTime()), inputController.attentionTouch;
                }
                function removeAttentionIfValid(inputName) {
                    var inputController = mInputsControllers[inputName];
                    if (inputController.attentionTouch) {
                        if (inputController.$valid) return inputController.attentionTouch = null, !0;
                        inputController.attentionTouch = new Date().getTime();
                    }
                    return !1;
                }
                function setInputBehaviour(input) {
                    var inputName = input.attr("name");
                    input.bind("blur", function() {
                        checkInputAttention(inputName), setTimeout(function() {
                            scope.$digest();
                        });
                    }), angular.forEach([ "keyup", "change" ], function(eventKey) {
                        input.bind(eventKey, function() {
                            removeAttentionIfValid(inputName) && scope.$digest();
                        });
                    });
                }
                function addInputController(input) {
                    var inputName = input.attr("name");
                    if (inputName && scope.formController[inputName]) {
                        var inputController = scope.formController[inputName];
                        mInputsControllers[inputName] = inputController, function(_input) {
                            setInputBehaviour(_input);
                        }(input);
                    }
                }
                function initInputControllers() {
                    angular.forEach([ "input", "select", "textarea" ], function(tagName) {
                        for (var inputs = element.find(tagName), i = 0; i < inputs.length; i++) addInputController(angular.element(inputs[i]));
                    }), mFormController.updateFieldsAttentions = updateFieldsAttentions, mFormController.bsFormFirstErrorMessage = scope.bsFormFirstErrorMessage;
                }
                function initAction() {
                    element.attr("action") || element.attr("action", "javascript:null");
                }
                function initButtons() {
                    angular.forEach(element.find("button"), function(button) {
                        var buttonElement = angular.element(button);
                        buttonElement.attr("type") || buttonElement.attr("type", "button");
                    });
                }
                function init() {
                    mFormController = scope.formController, initAction(), initButtons(), bindSumbit(), 
                    initInputControllers();
                }
                scope.formController = controllers[0], scope.submitCall = $parse(attributes.bsSubmit), 
                scope.bsValidationPatterns = FormConstants.validationPatterns;
                var mFormController = null, mInputsControllers = {};
                scope.bsFormFirstErrorMessage = function() {
                    for (inputName in mInputsControllers) {
                        var inputController = mInputsControllers[inputName], errorMessage = inputController.errorMessage;
                        if (inputController.attentionTouch && errorMessage) return errorMessage;
                    }
                    for (var subForms = getSubForms(), i = 0; i < subForms.length; i++) {
                        var subFormError = subForms[i].bsFormFirstErrorMessage();
                        if (subFormError) return subFormError;
                    }
                    return null;
                }, setTimeout(function() {
                    init();
                }, 100);
            }
        };
    });
}), define("common/js/modules/bsForm/bsCheckListDirective", [ "./bsFormModule" ], function(module) {
    module.directive("bsChecklistModel", function($parse, $compile) {
        function contains(arr, item) {
            if (angular.isArray(arr)) for (var i = 0; i < arr.length; i++) if (angular.equals(arr[i], item)) return !0;
            return !1;
        }
        function add(arr, item) {
            arr = angular.isArray(arr) ? arr : [];
            for (var i = 0; i < arr.length; i++) if (angular.equals(arr[i], item)) return arr;
            return arr.push(item), arr;
        }
        function remove(arr, item) {
            if (angular.isArray(arr)) for (var i = 0; i < arr.length; i++) if (angular.equals(arr[i], item)) {
                arr.splice(i, 1);
                break;
            }
            return arr;
        }
        function postLinkFn(scope, elem, attrs) {
            $compile(elem)(scope);
            var getter = $parse(attrs.bsChecklistModel), setter = getter.assign, value = $parse(attrs.checklistValue)(scope.$parent);
            "true" == elem.parent().attr("check-on-click") && elem.parent().bind("click", function(e) {
                "INPUT" != e.target.tagName && (scope.checked = !scope.checked);
            }), scope.$watch("checked", function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    var current = getter(scope.$parent);
                    newValue === !0 ? setter(scope.$parent, add(current, value)) : setter(scope.$parent, remove(current, value));
                }
            }), scope.$parent.$watch(attrs.bsChecklistModel, function(newArr) {
                scope.checked = contains(newArr, value);
            }, !0);
        }
        return {
            restrict: "A",
            priority: 1e3,
            terminal: !0,
            scope: !0,
            compile: function(tElement, tAttrs) {
                if ("INPUT" !== tElement[0].tagName || !tElement.attr("type", "checkbox")) throw 'bs-checklist-model should be applied to `input[type="checkbox"]`.';
                if (!tAttrs.checklistValue) throw "You should provide `checklist-value`.";
                return tElement.removeAttr("bs-checklist-model"), tElement.attr("ng-model", "checked"), 
                postLinkFn;
            }
        };
    });
}), define("common/js/modules/bsForm/bsDateFieldDirective", [ "./bsFormModule" ], function(module) {
    module.directive("bsDateField", function() {
        return {
            restrict: "A",
            replace: !0,
            require: "ngModel",
            link: function(scope, elem, attr, ngModel) {
            }
        };
    });
}), define("common/js/modules/bsForm/bsFormValidationMessage", [ "./bsFormModule" ], function(module) {
    module.directive("bsFormValidationMessage", function($rootScope, I18nService) {
        return mDefaultValidationMessages = {
            required: "error_mandatory",
            minlength: "error_too_short",
            pattern: "error_bad_pattern",
            email: "error_bad_email"
        }, {
            restrict: "E",
            require: [ "^form", "^bsFormGroup" ],
            replace: !0,
            template: '<div class="help-block {{helpCssClass}}"></div>',
            link: function($scope, el, attrs, controllers) {
                function checkErrors() {
                    var html = "", field = formController[fieldName];
                    if (debug("chcking " + fieldName), debug(field), field && field.attentionTouch) {
                        debug(field), field.errorMessage = null;
                        var errors = field.$error;
                        for (var error in errors) if (errors.hasOwnProperty(error) && errors[error]) {
                            var errorCode = attrs[error];
                            errorCode || (errorCode = mDefaultValidationMessages[error]), field.errorMessage = I18nService.getText(errorCode, {
                                field: fieldLabel
                            }), errorCode && !attrs.hidden && (html += "<span>" + field.errorMessage + "</span>");
                        }
                    }
                    el.html(html);
                }
                function debug() {
                    attrs.debug;
                }
                var formController = controllers[0], formGroupController = controllers[1];
                debug(formGroupController), debug(formController);
                var formName = formController.$name, fieldLabel = attrs.fieldLabel;
                fieldLabel || (fieldLabel = formGroupController.fieldLabel);
                var fieldName = formGroupController.fieldName;
                $scope[formName] = formController, $scope.helpCssClass = attrs.cssClass, $scope.$watch(formName + "." + fieldName + ".attentionTouch", function(attentionTouch) {
                    el.css("display", attentionTouch ? "" : "none"), checkErrors();
                }), $rootScope.$on("i18n.languageChanged", checkErrors);
            }
        };
    });
}), define("common/js/modules/bsForm/bsFormGroupDirective", [ "./bsFormModule" ], function(module) {
    module.directive("bsFormGroup", function($rootScope, I18nService, DomUtilsService, PathsService) {
        return {
            restrict: "EA",
            require: "^form",
            replace: !0,
            transclude: !0,
            scope: {
                label: "@",
                fieldName: "@",
                cssClass: "@"
            },
            templateUrl: PathsService.commonTemplatePath("forms/formGroup"),
            link: function(scope, element, attrs, formController) {
                function setLabel() {
                    scope.label && element.find("label").html(I18nService.getText(scope.label));
                }
                function debug() {
                    attrs.debug;
                }
                var formName = formController.$name;
                scope[formName] = formController;
                var watchExpression = formName + "." + scope.fieldName + ".attentionTouch";
                scope.$watch(watchExpression, function(attentionTouch) {
                    if (attentionTouch) {
                        debug("attention!");
                        var field = scope[formName][scope.fieldName], hasError = !1, errors = field.$error;
                        for (var error in errors) if (errors.hasOwnProperty(error) && errors[error]) {
                            hasError = !0;
                            break;
                        }
                        hasError ? element.addClass("has-error") : element.removeClass("has-error");
                    } else element.removeClass("has-error");
                }), $rootScope.$on("i18n.languageChanged", setLabel), setLabel();
            },
            controller: function($scope) {
                this.fieldLabel = $scope.label, this.fieldName = $scope.fieldName;
            }
        };
    });
}), define("common/js/modules/bsForm/bsPlaceHolderDirective", [ "./bsFormModule" ], function(module) {
    module.directive("bsPlaceHolder", function(I18nService) {
        return {
            restrict: "A",
            require: [ "ngModel", "^bsFormGroup" ],
            priority: 1,
            link: function(scope, elem, attrs, controllers) {
                function setValue(val) {
                    val ? (elem.removeClass(emptyClassName), elem.val(val), is_pwd && hidePasswordPlaceholder()) : (elem.addClass(emptyClassName), 
                    is_pwd ? showPasswordPlaceholder() : elem.val(text));
                }
                function setupPasswordPlaceholder() {
                    clone = angular.element("<input/>").attr(angular.extend(extractAttributes(domElem), {
                        type: "text",
                        value: text,
                        placeholder: "",
                        id: "",
                        name: ""
                    })).addClass(emptyClassName).addClass("ng-hide").bind("focus", function() {
                        hidePasswordPlaceholder(), domElem.focus();
                    }), domElem.parentNode.insertBefore(clone[0], domElem);
                }
                function showPasswordPlaceholder() {
                    elem.addClass("ng-hide"), clone.removeClass("ng-hide");
                }
                function hidePasswordPlaceholder() {
                    clone.addClass("ng-hide"), elem.removeClass("ng-hide");
                }
                function extractAttributes(element) {
                    for (var attr = element.attributes, copy = {}, skip = /^jQuery\d+/, i = 0; i < attr.length; i++) attr[i].specified && !skip.test(attr[i].name) && (copy[attr[i].name] = attr[i].value);
                    return copy;
                }
                function resetText() {
                    text = I18nService.getText(textKey), is_pwd ? clone.val(text) : elem.hasClass(emptyClassName) && elem.val(text);
                }
                var clone, ngModel = controllers[0], bsFormGroup = controllers[1], orig_val = elem.val() || "", is_pwd = "password" === attrs.type, emptyClassName = "empty", domElem = elem[0], textKey = attrs.bsPlaceHolder;
                if (textKey || (textKey = bsFormGroup.fieldLabel), textKey) {
                    var text = I18nService.getText(textKey);
                    is_pwd && setupPasswordPlaceholder(), setValue(orig_val), ngModel.$setViewValue(orig_val);
                    var setDirection = !1;
                    elem.bind("focus", function() {
                        ("email" == elem.attr("type") || "password" == elem.attr("type")) && (elem.attr("dir", "ltr"), 
                        setDirection = !0), elem.hasClass(emptyClassName) && (elem.val(""), elem.removeClass(emptyClassName), 
                        elem.removeClass("error"));
                    }), elem.bind("blur", function() {
                        var val = elem.val();
                        !val && setDirection && (elem.removeAttr("dir"), setDirection = !1), scope.$apply(function() {
                            setValue(val), ngModel.$setViewValue(val);
                        });
                    }), ngModel.$render = function() {
                        setValue(ngModel.$viewValue);
                    }, scope.$on("i18n.languageChanged", resetText);
                }
            }
        };
    });
}), define("common/js/modules/bsForm/bsBlinkOnFormErrorDirective", [ "./bsFormModule" ], function(module) {
    module.directive("bsBlinkOnFormError", function($timeout) {
        return {
            restrict: "A",
            require: "^form",
            link: function(scope, element, attrs, formController) {
                function setBlinkOn(isOn, millis) {
                    $timeout(function() {
                        isOn ? element.addClass("blink") : element.removeClass("blink");
                    }, millis);
                }
                var formName = formController.$name;
                scope[formName] = formController;
                var firstTime = !0;
                scope.$on("bsFormError", function() {
                    var delayBefroeFirstBlink = 0;
                    firstTime && (delayBefroeFirstBlink = 1500, firstTime = !1), setBlinkOn(!0, delayBefroeFirstBlink), 
                    setBlinkOn(!1, delayBefroeFirstBlink + 2e3);
                });
            }
        };
    });
}), define("common/js/modules/bsForm/formConstants", [ "./bsFormModule" ], function(module) {
    module.factory("FormConstants", function() {
        return {
            validationPatterns: {
                alpha: /^[^0-9\\`\\~\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\-\\=\\\\_\\+]*$/,
                phone: /^[0-9\\(\\)\\.\\-\\ \\\\\\-]*$/
            }
        };
    });
}), define("common/js/modules/bsForm/index", [ "./bsFormModule", "./bsFormDirective", "./bsCheckListDirective", "./bsDateFieldDirective", "./bsFormValidationMessage", "./bsFormGroupDirective", "./bsPlaceHolderDirective", "./bsBlinkOnFormErrorDirective", "./formConstants" ], function() {}), 
define("common/js/modules/validate/validateModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.validate", []);
}), define("common/js/modules/validate/validateDirective", [ "./validateModule" ], function(module) {
    module.directive("bsValidate", function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, elm, attrs, ctrl) {
                function apply_watch(watch) {
                    return angular.isString(watch) ? void scope.$watchCollection(watch, function() {
                        angular.forEach(validators, function(validatorFn) {
                            validatorFn(ctrl.$modelValue);
                        });
                    }) : angular.isArray(watch) ? void angular.forEach(watch, function(expression) {
                        scope.$watch(expression, function() {
                            angular.forEach(validators, function(validatorFn) {
                                validatorFn(ctrl.$modelValue);
                            });
                        });
                    }) : void (angular.isObject(watch) && angular.forEach(watch, function(expression, validatorKey) {
                        angular.isString(expression) && scope.$watch(expression, function() {
                            validators[validatorKey](ctrl.$modelValue);
                        }), angular.isArray(expression) && angular.forEach(expression, function(intExpression) {
                            scope.$watch(intExpression, function() {
                                validators[validatorKey](ctrl.$modelValue);
                            });
                        });
                    }));
                }
                var validateFn, validators = {}, validateExpr = scope.$eval(attrs.bsValidate);
                validateExpr && (angular.isString(validateExpr) && (validateExpr = {
                    validator: validateExpr
                }), angular.forEach(validateExpr, function(exprssn, key) {
                    validateFn = function(valueToValidate) {
                        var expression = scope.$eval(exprssn, {
                            $value: valueToValidate
                        });
                        return angular.isObject(expression) && angular.isFunction(expression.then) ? (expression.then(function() {
                            ctrl.$setValidity(key, !0);
                        }, function() {
                            ctrl.$setValidity(key, !1);
                        }), valueToValidate) : expression ? (ctrl.$setValidity(key, !0), valueToValidate) : (ctrl.$setValidity(key, !1), 
                        valueToValidate);
                    }, validators[key] = validateFn, ctrl.$formatters.push(validateFn), ctrl.$parsers.push(validateFn);
                }), attrs.bsValidateWatch && apply_watch(scope.$eval(attrs.bsValidateWatch)));
            }
        };
    });
}), define("common/js/modules/validate/index", [ "./validateModule", "./validateDirective" ], function() {}), 
define("common/js/modules/animations/animationsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.animations", []);
}), define("common/js/modules/animations/markDirective", [ "./animationsModule" ], function(module) {
    module.directive("bsMark", function($animate) {
        return function(scope, elem, attributes) {
            scope.$watch(attributes.bsMark, function(newValue, oldValue) {
                if (newValue != oldValue) {
                    var cssClass = "mark-animation";
                    setTimeout(function() {
                        $animate.addClass(elem, cssClass, function() {
                            $animate.removeClass(elem, cssClass);
                        });
                    }, 300);
                }
            });
        };
    });
}), define("common/js/modules/animations/index", [ "./animationsModule", "./markDirective" ], function() {}), 
define("common/js/modules/cloudinary/cloudinaryModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.cloudinary", []);
}), define("common/js/modules/cloudinary/cloudinaryService", [ "./cloudinaryModule" ], function(module) {
    module.factory("CloudinaryService", function() {
        function getSizePart(sizePart, extactSize) {
            var sizePartInt = 1 * sizePart;
            return extactSize ? sizePartInt : 100 >= sizePartInt ? 100 : 400 >= sizePartInt ? 400 : 1e3;
        }
        function parseParams(params) {
            var commandParts = [];
            if (params) {
                if (params.size) {
                    commandParts.push("a_ignore"), commandParts.push("q_80");
                    var sizeParts = params.size.split("x"), sizeCommand = "";
                    sizeParts[0] && (sizeCommand = "w_" + getSizePart(sizeParts[0], params.exactSize)), 
                    sizeParts[1] && (sizeCommand += (sizeCommand ? "," : "") + "h_" + getSizePart(sizeParts[1], params.exactSize)), 
                    commandParts.push(sizeCommand), commandParts.push(params.mode ? "c_" + params.mode : "c_limit");
                }
                params.effect && commandParts.push("e_" + params.effect);
            }
            return commandParts.toString();
        }
        function getUrl(path, params) {
            if (!path) return null;
            var url = BASE_URL + parseParams(params) + "/" + path;
            return params && params.quality && (url += ".jpg"), url;
        }
        function jsonParamsToUrlParams(params) {
            var url = "";
            for (param in params) -1 == param.indexOf("$$") && (url += "," + param + "_" + params[param]);
            return url;
        }
        function getCollageUrl(imageUrls, collageSettings) {
            for (var result = "", i = 0; i < collageSettings.length && i < imageUrls.length; i++) i > 0 && (result += "/l_", 
            result += imageUrls[i].split("/")[1] + ","), result += "a_ignore,g_north_west,c_fill" + jsonParamsToUrlParams(collageSettings[i]);
            return result += "/" + imageUrls[0], BASE_URL + result;
        }
        return BASE_URL = "https://res.cloudinary.com/bidspirit/image/upload/", {
            getUrl: getUrl,
            getCollageUrl: getCollageUrl,
            BASE_URL: BASE_URL
        };
    });
}), define("common/js/modules/cloudinary/cloudinaryFilter", [ "./cloudinaryModule" ], function(module) {
    return module.filter("cloudinary", [ "CloudinaryService", function(CloudinaryService) {
        return function(path, params) {
            if (!path) return null;
            var url = CloudinaryService.getUrl(path, params);
            return params && params.asBg ? "background-image:url(" + url + ")" : url;
        };
    } ]);
}), define("common/js/modules/cloudinary/cloudinaryBgDirective", [ "./cloudinaryModule" ], function(module) {
    module.directive("bsCloudinaryBg", function(CloudinaryService) {
        return {
            restrict: "A",
            scope: {
                path: "@bsCloudinaryBg",
                params: "="
            },
            link: function(scope, element) {
                function setUrl() {
                    var url = CloudinaryService.getUrl(scope.path, scope.params);
                    url ? element.css("background-image", "url(" + url + ")") : element.css("background-image", "");
                }
                setUrl(), scope.$watch("path", setUrl);
            }
        };
    });
}), define("common/js/modules/cloudinary/index", [ "./cloudinaryModule", "./cloudinaryService", "./cloudinaryFilter", "./cloudinaryBgDirective" ], function() {}), 
define("common/js/modules/socialPlugins/socialPluginsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.socialPlugins", []);
}), define("common/js/modules/socialPlugins/facebookService", [ "./socialPluginsModule" ], function(module) {
    module.factory("FacbookService", function($q) {
        function loadFb(deferred) {
            window.fbAsyncInit = function() {
                FB.init({
                    appId: "542961752415314",
                    xfbml: !0,
                    version: "v2.3"
                }), mInitialized = !0, deferred.resolve();
            }, function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                d.getElementById(id) || (js = d.createElement(s), js.id = id, js.src = "//connect.facebook.net/en_US/" + (DEBUG_MODE ? "sdk/debug.js" : "sdk.js"), 
                fjs.parentNode.insertBefore(js, fjs));
            }(document, "script", "facebook-jssdk");
        }
        function validateInitialized() {
            var deferred = $q.defer();
            return mInitialized ? deferred.resolve() : loadFb(deferred), deferred.promise;
        }
        function ensureLoggedIn() {
            var deferred = $q.defer();
            return validateInitialized().then(function() {
                FB.getLoginStatus(function(response) {
                    "connected" == response.status ? deferred.resolve(response) : FB.login(function(response) {
                        deferred.resolve(response);
                    }, {
                        scope: "publish_actions,publish_pages,manage_pages "
                    });
                });
            }), deferred.promise.then(function(response) {
                mCurrentUserFbId = response.authResponse.userID;
            }), deferred.promise;
        }
        function getPageData(pageId) {
            var deferred = $q.defer();
            return FB.api(mCurrentUserFbId + "/accounts", function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var pageData = response.data[i];
                    if (pageData.id == pageId) return void deferred.resolve(pageData);
                }
                console.warn("Faild to get page data for page id " + pageId), deferred.reject();
            }), deferred.promise;
        }
        function callPostImageApi(pageId, accessToken, imageUrl, caption) {
            var deferred = $q.defer();
            return FB.api("/" + pageId + "/photos", "POST", {
                access_token: accessToken,
                url: imageUrl,
                caption: caption
            }, function(response) {
                deferred.resolve(response);
            }), deferred.promise;
        }
        function postImageToPage(pageId, imageUrl, caption) {
            var deferred = $q.defer();
            return ensureLoggedIn().then(function() {
                getPageData(pageId).then(function(pageData) {
                    callPostImageApi(pageId, pageData.access_token, imageUrl, caption).then(function(response) {
                        deferred.resolve(response);
                    });
                });
            }), deferred.promise;
        }
        var mInitialized = !1, DEBUG_MODE = !1, mCurrentUserFbId = null;
        return {
            postImageToPage: postImageToPage
        };
    });
}), define("common/js/modules/socialPlugins/index", [ "./socialPluginsModule", "./facebookService" ], function() {}), 
define("common/js/modules/log/logModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.log", []);
}), function(root, factory) {
    "function" == typeof define && define.amd ? define("common/js/lib/le", [ root ], factory) : "object" == typeof exports ? module.exports = factory(root) : root.LE = factory(root);
}(this, function(window) {
    function LogStream(options) {
        var _traceCode = (Math.random() + Math.PI).toString(36).substring(2, 10), _doTrace = options.trace, _pageInfo = options.page_info, _token = options.token, _print = options.print, _endpoint = "js.logentries.com/v1", _shouldCall = !0, _SSL = function() {
            return "undefined" == typeof XDomainRequest ? options.ssl : "https:" === location.protocol ? !0 : !1;
        }(), _backlog = [], _active = !1, _sentPageInfo = !1;
        if (options.catchall) {
            var oldHandler = window.onerror, newHandler = function(msg, url, line) {
                return _rawLog({
                    error: msg,
                    line: line,
                    location: url
                }).level("ERROR").send(), oldHandler ? oldHandler(msg, url, line) : !1;
            };
            window.onerror = newHandler;
        }
        var _agentInfo = function() {
            var nav = window.navigator || {
                doNotTrack: void 0
            }, screen = window.screen || {}, _location = window.location || {};
            return {
                url: _location.pathname,
                referrer: document.referrer,
                screen: {
                    width: screen.width,
                    height: screen.height
                },
                window: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                browser: {
                    name: nav.appName,
                    version: nav.appVersion,
                    cookie_enabled: nav.cookieEnabled,
                    do_not_track: nav.doNotTrack
                },
                platform: nav.platform
            };
        }, _getEvent = function() {
            var raw = null, args = Array.prototype.slice.call(arguments);
            if (0 === args.length) throw new Error("No arguments!");
            return raw = 1 === args.length ? args[0] : args;
        }, _rawLog = function() {
            var event = _getEvent.apply(this, arguments), data = {
                event: event
            };
            return "never" !== _pageInfo && (_sentPageInfo && "per-entry" !== _pageInfo || (_sentPageInfo = !0, 
            "undefined" == typeof event.screen && "undefined" == typeof event.browser && _rawLog(_agentInfo()).level("PAGE").send())), 
            _doTrace && (data.trace = _traceCode), {
                level: function(l) {
                    if (_print && "undefined" != typeof console && "PAGE" !== l) try {
                        console[l.toLowerCase()].call(console, data);
                    } catch (ex) {}
                    return data.level = l, {
                        send: function() {
                            var cache = [], serialized = JSON.stringify(data, function(key, value) {
                                var _indexOf = function(array, obj) {
                                    for (var i = 0; i < array.length; i++) if (obj === array[i]) return i;
                                    return -1;
                                };
                                if ("undefined" == typeof value) return "undefined";
                                if ("object" == typeof value && null !== value) {
                                    if (-1 !== _indexOf(cache, value)) return "<?>";
                                    cache.push(value);
                                }
                                return value;
                            });
                            _active ? _backlog.push(serialized) : _apiCall(_token, serialized);
                        }
                    };
                }
            };
        };
        this.log = _rawLog;
        var _apiCall = function(token, data) {
            _active = !0;
            var _getAjaxObject = function() {
                return "undefined" != typeof XDomainRequest ? new XDomainRequest() : new XMLHttpRequest();
            }, request = _getAjaxObject();
            if (_shouldCall) {
                request.constructor === XMLHttpRequest ? request.onreadystatechange = function() {
                    4 === request.readyState && (request.status >= 400 ? (console.error("Couldn't submit events."), 
                    410 === request.status && console.warn("This version of le_js is no longer supported!")) : (301 === request.status && console.warn("This version of le_js is deprecated! Consider upgrading."), 
                    _backlog.length > 0 ? _apiCall(token, _backlog.shift()) : _active = !1));
                } : request.onload = function() {
                    _backlog.length > 0 ? _apiCall(token, _backlog.shift()) : _active = !1;
                };
                var uri = (_SSL ? "https://" : "http://") + _endpoint + "/logs/" + _token;
                request.open("POST", uri, !0), request.constructor === XMLHttpRequest, request.send(data);
            }
        };
    }
    function Logger(options) {
        var logger, dict = {
            ssl: !0,
            catchall: !1,
            trace: !0,
            page_info: "never",
            print: !1,
            token: null
        };
        if ("object" != typeof options) throw new Error("Invalid parameters for createLogStream()");
        for (var k in options) dict[k] = options[k];
        if (null === dict.token) throw new Error("Token not present.");
        logger = new LogStream(dict);
        var _log = function() {
            if (logger) return logger.log.apply(this, arguments);
            throw new Error("You must call LE.init(...) first.");
        };
        return {
            log: function() {
                _log.apply(this, arguments).level("LOG").send();
            },
            warn: function() {
                _log.apply(this, arguments).level("WARN").send();
            },
            error: function() {
                _log.apply(this, arguments).level("ERROR").send();
            },
            info: function() {
                _log.apply(this, arguments).level("INFO").send();
            }
        };
    }
    var loggers = {}, _getLogger = function(name) {
        if (!loggers.hasOwnProperty(name)) throw new Error("Invalid name for logStream");
        return loggers[name];
    }, _createLogStream = function(options) {
        if ("string" != typeof options.name) throw new Error("Name not present.");
        if (loggers.hasOwnProperty(options.name)) throw new Error("Alrready exist this name for a logStream");
        return loggers[options.name] = new Logger(options), !0;
    }, _deprecatedInit = function(options) {
        var dict = {
            name: "default"
        };
        if ("object" == typeof options) for (var k in options) dict[k] = options[k]; else {
            if ("string" != typeof options) throw new Error("Invalid parameters for init()");
            dict.token = options;
        }
        return _createLogStream(dict);
    }, _destroyLogStream = function(name) {
        "undefined" == typeof name && (name = "default"), delete loggers[name];
    };
    return {
        init: _deprecatedInit,
        createLogStream: _createLogStream,
        to: _getLogger,
        destroy: _destroyLogStream,
        log: function() {
            for (var k in loggers) loggers[k].log.apply(this, arguments);
        },
        warn: function() {
            for (var k in loggers) loggers[k].warn.apply(this, arguments);
        },
        error: function() {
            for (var k in loggers) loggers[k].error.apply(this, arguments);
        },
        info: function() {
            for (var k in loggers) loggers[k].info.apply(this, arguments);
        }
    };
}), define("common/js/modules/log/logService", [ "./logModule", "common/js/lib/le" ], function(module, LE) {
    module.factory("LogService", function($rootScope, $log, SettingsService, SessionInfo) {
        function init(token) {
            if (!$rootScope.searchAgentRequest) {
                if (!token) return void $log.warn("initializing log without token!");
                LE.init({
                    token: token,
                    ssl: !0
                }), mInitialized = !0, window.onerror = handleError;
            }
        }
        function logEvent(event) {
            if (mInitialized) {
                var message = "";
                if ("object" == typeof event) for (var key in event) message += "	" + key + ":" + event[key]; else message = event;
                logMessage(message);
            }
        }
        function logMessage(message) {
            mInitialized && LE.log(SessionInfo.sessionId + "	" + message);
        }
        function handleError(msg, url, line) {
            var message = msg + " Url: " + url + " Line: " + line;
            return printTrace(), logError(message), "dev" == SettingsService.get("envName") ? !1 : !0;
        }
        function printTrace() {
            try {
                console.trace();
            } catch (e) {}
        }
        function exceptionMessage(e) {
            var message = e.message;
            return message || (message = e.toString()), e.stack && (message += " | stack: " + e.stack), 
            message;
        }
        function logError(errorStr, e) {
            try {
                if (-1 != navigator.userAgent.indexOf("Googlebot")) return;
                var errorToLog = errorStr;
                e && (errorToLog += exceptionMessage(e)), $log.warn(errorToLog), errorToLog = "(" + SettingsService.secondsSinceStart() + ") " + errorToLog, 
                5 > mLoggedErrors && (mLoggedErrors++, logEvent({
                    eventType: "jsError",
                    message: errorToLog
                }));
            } catch (e1) {
                $log.warn("failed to log message: " + exceptionMessage(e1)), printTrace();
            }
        }
        var mInitialized = !1, mLoggedErrors = 0;
        return {
            logEvent: logEvent,
            logMessage: logMessage,
            logError: logError,
            init: init
        };
    });
}), define("common/js/modules/log/bsLogClickDirective", [ "./logModule" ], function(module) {
    module.directive("bsLogClick", function(LogService) {
        return {
            restrict: "A",
            link: function(scope, elem, attributes) {
                elem.bind("click", function() {
                    LogService.logEvent({
                        click: attributes.bsLogClick
                    });
                });
            }
        };
    });
}), define("common/js/modules/log/analyticsService", [ "./logModule" ], function(module) {
    module.factory("AnalyticsService", function(Analytics, LogService, LocalStorageService) {
       var isBidspiritEmployee = LocalStorageService.load("bidspiritEmployee")=="true";
		
		function trackEvent(category, action, label, options){			
			var key = category+"_"+action+"_"+label;
			try {
				if (options){
					if (!LocalStorageService.isEnabled()) return;
					 var analyticsInfo  = LocalStorageService.load("analyticsInfo");
					 if (analyticsInfo){
						 analyticsInfo = JSON.parse(analyticsInfo);
					 } else {
						 analyticsInfo = {};
					 }
					 var infoForKey = analyticsInfo[key]; 
					 
					 if (options.dailyUnique && infoForKey && (new Date().getTime() - infoForKey.time < 1000*60*60*24) ){
						 return;
					 }
					 analyticsInfo[key] = {time:new Date().getTime()}; 
					 LocalStorageService.store("analyticsInfo",JSON.stringify(analyticsInfo));
				}
				if (GlobalConfig.isMobileApp){
					window.analytics.trackEvent("mobile", action, label);
					window.analytics.trackEvent(category, action, label);
				} else {
					if (isBidspiritEmployee) return;
					Analytics.trackEvent(category, action, label);
				}
			} catch (e){
				LogService.logError("failed to log event in analyicts "+key+","+JSON.stringify(options),e);				
			}			
		}
		
		function trackDailyUniqueEvent(category, action, label){
			trackEvent(category, action, label, {dailyUnique:true});
		}
		
		function trackPage(page){			
			if (GlobalConfig.isMobileApp){
				try {
					alert("trying to track..");
					window.analytics.trackEvent("mobile","pageView",page);
				} catch(e){
					alert("failed to trace..."+e.message);
				}
				window.analytics.trackView(page);
			} else {
				if (isBidspiritEmployee) return;
				Analytics.trackPage(page);
			}			
		}
				
		return{
			
			trackEvent:trackEvent,
			trackDailyUniqueEvent:trackDailyUniqueEvent,
			trackPage:trackPage
		};
    });
}), define("common/js/modules/log/index", [ "./logModule", "./logService", "./bsLogClickDirective", "./analyticsService" ], function() {}), 
define("common/js/modules/catalogUtils/catalogUtilsModule", [ "angular" ], function(ng) {
    return ng.module("commonModules.catalogUtils", []);
}), define("common/js/modules/catalogUtils/catalogUtilsService", [ "./catalogUtilsModule", "common/js/lib/le" ], function(module) {
    module.factory("CatalogUtilsService", function(StringsService, ArraysService, I18nService, DateUtilsService) {
        function sortLots(items, options) {
            return items ? (items.sort(function(item1, item2) {
                return compareLots(item1, item2, options || {});
            }), items) : null;
        }
        function getPaddedIndex(index) {
            for (var digitCount = 0, stippedIndex = (index + "").replace(/^0+/, ""), i = 0; i < stippedIndex.length && stippedIndex.charAt(i) >= "0" && stippedIndex.charAt(i) <= "9"; i++) digitCount++;
            return StringsService.pad(stippedIndex.substr(0, digitCount), 10, "0") + stippedIndex.substr(digitCount);
        }
        function compareLots(item1, item2, options) {
            options || (options = {});
            var auctionDateCompare = 0;
            return item1.auctionDate != item2.auctionDate ? auctionDateCompare = item1.auctionDate > item2.auctionDate ? 1 : -1 : item1.auctionId != item2.auctionId && (auctionDateCompare = item1.auctionId > item2.auctionId ? 1 : -1), 
            options.reverseAuctionDate && (auctionDateCompare = -1 * auctionDateCompare), 0 != auctionDateCompare ? auctionDateCompare : compareIndexes(item1.itemIndex, item2.itemIndex);
        }
        function compareIndexes(index1, index2) {
            var paddedIndex1 = getPaddedIndex(index1), paddedIndex2 = getPaddedIndex(index2);
            return paddedIndex1 == paddedIndex2 ? 0 : paddedIndex1 > paddedIndex2 ? 1 : -1;
        }
        function getLotPage(items, lotId, itemsPerPage) {
            var lotInd = ArraysService.getIndById(items, lotId);
            return null == lotInd ? 1 : Math.ceil((lotInd + 1) / itemsPerPage);
        }
        function getPageItems(allItems, page, itemsPerPage) {
            if (!allItems) return [];
            var startInd = (page - 1) * itemsPerPage, endInd = startInd + 1 * itemsPerPage;
            return allItems.slice(startInd, endInd);
        }
        function checkLotMatchPhrase(lot, phrase) {
            var score = 0;
            if (getPaddedIndex(lot.itemIndex) == getPaddedIndex(phrase)) score = 20; else if (lot.itemIndex.indexOf(phrase) > -1) score = 4 - lot.itemIndex.indexOf(phrase); else if (phrase.length > 1) {
                for (var langFields = [ "artist", "name", "description", "details" ], i = 0; i < langFields.length; i++) {
                    var field = langFields[i], fieldValue = I18nService.getLangField(lot[field]);
                    fieldValue && fieldValue.indexOf(phrase) > -1 && (score += 4 - i / 2 + phrase.length / 2);
                }
                if (phrase.length > 3 || phrase.indexOf(lot.auction.catalogInfo.currency) > -1) {
                    var phraseDigits = phrase.replace(/[^\d]/g, "");
                    phraseDigits && (lot.startPrice && lot.startPrice == phraseDigits && (score += 1), 
                    lot.estimatedPrice && lot.estimatedPrice.replace(/[^\d]/g, "").indexOf(phraseDigits) > -1 && (score += 1));
                }
            }
            return {
                lot: lot,
                score: score
            };
        }
        function getAuctionTimeDisplay(auction, dateOnly, withoutDayOfWeek, textsMap) {
            if (!auction.date) return "";
            var auctionDate = DateUtilsService.parseServerDate(auction.date), time = dateOnly || auction.hideTime ? null : auction.time;
            return I18nService.getDateDisplay(auctionDate, time, {
                withoutTime: dateOnly,
                withoutDayOfMonth: auction.unknownExactDate,
                withoutDayOfWeek: withoutDayOfWeek
            }, textsMap);
        }
        return {
            sortLots: sortLots,
            getPaddedIndex: getPaddedIndex,
            compareLots: compareLots,
            compareIndexes: compareIndexes,
            getPageItems: getPageItems,
            getLotPage: getLotPage,
            getAuctionTimeDisplay: getAuctionTimeDisplay,
            checkLotMatchPhrase: checkLotMatchPhrase
        };
    });
}), define("common/js/modules/catalogUtils/index", [ "./catalogUtilsModule", "./catalogUtilsService" ], function() {}), 
define("commonModules", [ "angular", "ngdir/angular-ui-router", "common/js/modules/strings/index", "common/js/modules/utils/index", "common/js/modules/domUtils/index", "common/js/modules/api/index", "common/js/modules/system/index", "common/js/modules/paths/index", "common/js/modules/i18n/index", "common/js/modules/dialogs/index", "common/js/modules/asyncButton/index", "common/js/modules/bsForm/index", "common/js/modules/validate/index", "common/js/modules/animations/index", "common/js/modules/cloudinary/index", "common/js/modules/socialPlugins/index", "common/js/modules/log/index", "common/js/modules/catalogUtils/index" ], function(ng) {
    return ng.module("commonModules", [ "ui.router", "commonModules.strings", "commonModules.utils", "commonModules.api", "commonModules.system", "commonModules.paths", "commonModules.cloudinary", "commonModules.socialPlugins", "commonModules.dialogs", "commonModules.asyncButton", "commonModules.bsForm", "commonModules.i18n", "commonModules.validate", "commonModules.log", "commonModules.animations", "commonModules.domUtils", "commonModules.catalogUtils" ]).config(function($stateProvider, $sceDelegateProvider, $httpProvider, $sceProvider) {
        angular.module("commonModules").$stateProvider = $stateProvider, $sceDelegateProvider.resourceUrlWhitelist([ "self", GlobalConfig.staticFilesBase + "**", GlobalConfig.jsFilesBase + "**" ]), 
        $httpProvider.interceptors.push("ApiInterceptor"), $sceProvider.enabled(!1);
    }).run(function($rootScope, $state, $stateParams) {
        $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState) {
            $state.previous = fromState;
        }), $rootScope.$state = $state, $rootScope.$stateParams = $stateParams;
    });
}), define("portal/js/modules/external/externalsModule", [ "angular" ], function(ng) {
    return ng.module("app.externals", []);
}), define("portal/js/modules/external/wallop/wallop-slider-directive", [ "../externalsModule" ], function(module) {
    module.directive("wallopSlider", function() {
        return {
            template: '<div class="wallop-slider {{animationClass}}"><ul class="wallop-slider__list"><li class="wallop-slider__item {{itemClasses[$index]}}" ng-repeat="i in images"><img ng-src="{{i}}"></li></ul></div>',
            restrict: "EA",
            transclude: !0,
            replace: !1,
            scope: {
                images: "=",
                animation: "@",
                currentItemIndex: "=",
                nextItemIndex: "=",
                onNext: "&",
                onPrevious: "&"
            },
            controller: function($scope) {
                function _nextDisabled() {
                    return $scope.currentItemIndex + 1 === $scope.images.length;
                }
                function _prevDisabled() {
                    return !$scope.currentItemIndex;
                }
                function _updatePagination() {
                    $scope.nextDisabled = _nextDisabled(), $scope.prevDisabled = _prevDisabled();
                }
                function _clearClasses() {
                    for (var i = 0; i < $scope.images.length; i++) $scope.itemClasses[i] = "";
                }
                function _goTo(index) {
                    if (index >= $scope.images.length || 0 > index || index === $scope.currentItemIndex) return void (index || ($scope.itemClasses[0] = _displayOptions.currentItemClass));
                    _clearClasses(), $scope.itemClasses[$scope.currentItemIndex] = index > $scope.currentItemIndex ? _displayOptions.hidePreviousClass : _displayOptions.hideNextClass;
                    var currentClass = index > $scope.currentItemIndex ? _displayOptions.showNextClass : _displayOptions.showPreviousClass;
                    $scope.itemClasses[index] = _displayOptions.currentItemClass + " " + currentClass, 
                    $scope.currentItemIndex = index, _updatePagination();
                }
                $scope.itemClasses = [], $scope.$watch("images", function(images) {
                    images.length && _goTo(0);
                }), $scope.animation && ($scope.animationClass = "wallop-slider--" + $scope.animation);
                var _displayOptions = {
                    btnPreviousClass: "wallop-slider__btn--previous",
                    btnNextClass: "wallop-slider__btn--next",
                    itemClass: "wallop-slider__item",
                    currentItemClass: "wallop-slider__item--current",
                    showPreviousClass: "wallop-slider__item--show-previous",
                    showNextClass: "wallop-slider__item--show-next",
                    hidePreviousClass: "wallop-slider__item--hide-previous",
                    hideNextClass: "wallop-slider__item--hide-next"
                };
                $scope.onPrevButtonClicked = function() {
                    _goTo($scope.currentItemIndex - 1);
                }, $scope.onNextButtonClicked = function() {
                    _goTo($scope.currentItemIndex + 1);
                }, $scope.$watch("nextItemIndex", function(newVal, oldVal) {
                    newVal != oldVal && _goTo(newVal);
                }), $scope.$watch("currentItemIndex", function(newVal, oldVal) {
                    oldVal > newVal ? "function" == typeof $scope.onPrevious && $scope.onPrevious() : "function" == typeof $scope.onNext && $scope.onNext();
                });
            }
        };
    });
}), define("portal/js/modules/external/index", [ "./externalsModule", "./wallop/wallop-slider-directive" ], function() {}), 
define("portal/js/modules/main/portalMainModule", [ "angular" ], function(ng) {
    return ng.module("app.main", []);
}), define("portal/js/modules/main/portalMainController", [ "./portalMainModule" ], function(module) {
    module.controller("MainController", [ "$scope", "$rootScope", "$state", "$timeout", "ArraysService", "AnalyticsService", "I18nService", "CssLoaderService", "PathsService", "DomUtilsService", "LocalStorageService", "SessionsService", "LogService", "SettingsService", "ViewPortService", "DialogsService", "HeartBitService", "StructuredDataService", "PortalStates", "PortalInfoService", "PortalTextsService", "LegalApprovalService", function($scope, $rootScope, $state, $timeout, ArraysService, AnalyticsService, I18nService, CssLoaderService, PathsService, DomUtilsService, LocalStorageService, SessionsService, LogService, SettingsService, ViewPortService, DialogsService, HeartBitService, StructuredDataService, PortalStates, PortalInfoService, PortalTextsService, LegalApprovalService) {
        function initDebug() {
            GlobalConfig.debugInfo = {
                lastDebugTime: GlobalConfig.pageLoadTime,
                count: 0
            }, $rootScope.debugMessage = "", $rootScope.debug = function(msg) {
                var now = new Date().getTime();
                $rootScope.debugMessage += "\n<Br> (" + (now - GlobalConfig.debugInfo.lastDebugTime) + ") " + msg, 
                GlobalConfig.debugInfo.lastDebugTime = now, GlobalConfig.debugInfo.count++;
            }, $rootScope.debug("debug init");
            
           	
        }
        
        
		
        function onInit() {
            "loaded" != $rootScope.loadState && ($rootScope.loadState = "loaded", $rootScope.isIe8 = SessionsService.isIe8(), 
            $rootScope.isMobile = SessionsService.isMobile(), PortalStates.init(), $rootScope.isIe8 || ViewPortService.bindViewPortSizeToWindowWidth(), 
            PortalTextsService.init(), onLangUpdate(), $scope.dataState = "loaded", initLog(), 
            initRegions(), initTirggers(), HeartBitService.init());
            $rootScope.debug("onin");            
        }
        function initLog() {
            LogService.init(SettingsService.get("logEntriesToken"));
            var osInfo = SessionsService.getOsInfo();
            "unknown" == osInfo.browser && (osInfo = {
                agent: navigator.userAgent
            });
            var eventInfo = angular.extend({
                eventName: "enterPage",
                url: PortalStates.getInitialUrl(),
                referrer: document.referrer || "unknown"
            }, osInfo), user = SessionsService.getSessionUser();
            user && (eventInfo.user = user.email), LogService.logEvent(eventInfo), $rootScope.debugLog = "";
        }
        function initRegions() {
            $rootScope.regions = SettingsService.get("regions").slice();
            var domainRegion = PathsService.getRegionByDomain();
            $rootScope.devMode || "ALL" == domainRegion || ArraysService.remove($rootScope.regions, "ALL"), 
            $rootScope.currentRegion = -1 != $rootScope.regions.indexOf(domainRegion) ? domainRegion : SessionsService.getRegion();
        }
        function onLangUpdate() {
            $rootScope.currentLang = I18nService.getCurrentLang(), $rootScope.dir = DomUtilsService.getCurrentDirection();
        }
        function checkFirstVisit() {
            var lastVisit = LocalStorageService.load("lastVisit");
            $scope.firstVisit = lastVisit ? !1 : !0, LocalStorageService.store("lastVisit", new Date().getTime());
        }
        function checkAllResourcesLoaded() {        	
            CssLoaderService.isCssLoaded() && I18nService.getCurrentLang() && onInit();
        }
        
        function portalI18nResoucePath(lang){
    		 var textsFilePath = "texts/texts."+lang+".properties";
    		 if (GlobalConfig.isMobileApp) return "services/"+textsFilePath;
    		var pathBase =  SessionsService.isOldIe() ? GlobalConfig.apiBase : GlobalConfig.cachedApiBase; 
	    	return pathBase + textsFilePath+"?cacheVersion="+SettingsService.getCacheVersion("TEXTS");
		}
		
        function init() {
            initDebug(), PathsService.getQueryParam("searchAgentRequest") && ($rootScope.searchAgentRequest = !0), 
            "active" == PathsService.getQueryParam("devMode") && ($rootScope.devMode = !0), 
            checkFirstVisit(), $rootScope.$on("i18n.languageChanged", onLangUpdate), CssLoaderService.loadCss(GlobalConfig.staticFilesBase + GlobalConfig.appName + "/styles/style.css").then(checkAllResourcesLoaded), 
            PortalInfoService.init(PathsService.getRegionByDomain()).success(function() {
            	$rootScope.debug("info loaded");
                I18nService.init(portalI18nResoucePath).then(checkAllResourcesLoaded);
            }).error(function(error) {
                error && "BLOCKED" == error.errorType && window.document.write("<h3>You have been blocked.</h3> For support, please contact us at info@bidspirit.com");
            });
        }
        function initTirggers() {
            $scope.$on("$stateChangeStart", function(event, toState, toArgs, fromState, fromArgs) {
                "app.mobileMenu" != fromState.name && ($rootScope.$previousState = fromState, $rootScope.$previousState.args = fromArgs), 
                trackPageView(), StructuredDataService.resetStructuredDataMetaTags();
            }), $scope.$on("viewPort.orientationChange", function() {
                $state.go("app.reload");
            }), $scope.$on("$stateChangeSuccess", function() {            	
            	$timeout(function(){            		
            		LocalStorageService.store("lastVisitedPage", window.location.hash)
            	},100);
                $timeout(LegalApprovalService.checkLegalApproval, 1e3);
            }), $rootScope.$on("auth.newSessionUser", onNewSessionUser);
        }
        function onNewSessionUser() {
            $rootScope.currentUser && LegalApprovalService.checkLegalApproval();
        }
        function trackPageView() {
            if (!$rootScope.searchAgentRequest) {
                var hash = window.location.hash;
                if (hash) {
                    var scene = hash.substr(hash.indexOf("/") + 1);
                    $scope.lastTrackedScene != scene && "reload" != scene && (LogService.logEvent({
                        scene: scene
                    }), AnalyticsService.trackPage(scene), $scope.lastTrackedScene = scene);
                }
            }
        }
        $rootScope.loadState = "loading", $scope.dataState = "loading", $scope.firstVisit = !1, 
        $rootScope.currentLang = null, $scope.showErrorPopup = function(messageData) {
            DialogsService.showAlert(messageData);
        }, $rootScope.showGeneralError = function(message) {
            DialogsService.showAlert({
                title: "alert_notice_title",
                message: message || "error_unknown",
                params: {
                    email: $scope.BidspiritInfo.emailLink,
                    phone: $scope.BidspiritInfo.phoneLink
                }
            });
        };
        if (GlobalConfig.isMobileApp &&  window.location.href.indexOf('http')!=0){
    		alert("waiting for device...");
    		document.addEventListener("deviceready", function(){
    			if (window.analytics){
    				console.log("analytics?");
    				window.analytics.debugMode();	    				    			
	    			window.analytics.startTrackerWithId('UA-56607963-2')
	    			window.analytics.trackView('mobile')
	    			window.analytics.trackEvent('mobile','init')
	    			
	    			alert("analyicts initialized..");
	    		} else {
	    			alert("analytics not found");
	    		}
	    		setTimeout(function(){
	            	if (navigator.splashscreen){
	            		navigator.splashscreen.hide();
	            	}
	            },1000);
	            init();
    		}, false);
    	} else {
    		init();
    	}	   
    } ]);
}), define("portal/js/modules/main/portalInfoService", [ "./portalMainModule" ], function(module) {
    module.factory("PortalInfoService", function($q, $rootScope, $interval, $timeout, ApiService, ArraysService, I18nService, SettingsService, StringsService, LocalStorageService, LogService, DateUtilsService, SessionsService, CachedApiService) {
        function resetData() {
            mHouses = [], mHousesMap = {}, mAuctions = [], mAuctionsMap = {}, mHousesAuctions = {}, 
            mInfo = {};
        }
        function initHouses(houses, sites, resourcesMap, housesDetails) {
            mHouses = houses, mHousesMap = ArraysService.listToMapById(mHouses);
            for (var sitesMap = ArraysService.listToMapById(sites), detailsMap = ArraysService.listToMap(housesDetails, "auctionHouseId"), i = 0; i < houses.length; i++) {
                var house = houses[i];
                house.site = sitesMap[house.bidspiritSiteId], house.resources = resourcesMap[house.id] || {}, 
                house.details = detailsMap[house.id] || {};
            }
        }
        function initAuctions(auctions, resourcesMap) {
            mAuctions = [];
            for (var i = 0; i < auctions.length; i++) {
                var auction = auctions[i];
                auction.catalogInfo = mInfo.auctionsCatalogInfo[auction.id];
                var house = getHouse(auction.houseId);
                house && (auction.house = house, shouldShowAuction(auction) && mAuctions.push(auction));
                var houseAuctions = mHousesAuctions[house.id];
                houseAuctions || (houseAuctions = [], mHousesAuctions[house.id] = houseAuctions), 
                shouldShowAuction(auction) && houseAuctions.push(auction);
            }
            mAuctionsMap = ArraysService.listToMapById(mAuctions), ArraysService.setPropertyFromMapById(mAuctions, "resources", resourcesMap, {});
        }
        function shouldShowAuction(auction) {
            return null != auction.catalogInfo && auction.house.site || "ENDED" != auction.state ? $rootScope.devMode ? !0 : auction.hidden || auction.house.hidden ? !1 : !0 : !1;
        }
        function loadLastStoredPortalInfo(region) {
            var lastStoredInfo = LocalStorageService.load("portalInfo_" + region);
            if (lastStoredInfo) {
                var portalInfo = JSON.parse(lastStoredInfo);
                return handleLoadedPortalInfo(portalInfo), SessionsService.setSessionInfo(portalInfo.sessionInfo), 
                CachedApiService.cachedPromiseWrap(mInfo);
            }
            return null;
        }
        function init(region) {
            SessionsService.loadPreviousSessionId(), mInfo = {};
            var cachedDataPromise = loadLastStoredPortalInfo(region), freshDataPromise = loadForRegion(region, !1).success(function(portalInfo) {
                SessionsService.setSessionInfo(portalInfo.sessionInfo);
            });
            return $timeout(function() {
                loadForRegion(region, !0);
            }, 5e3), cachedDataPromise || freshDataPromise;
        }
        function loadForRegion(region, includeOldAuctions) {
            var params = {
                persistentSession: SessionsService.hasPersistentSession(),
                region: region,
                includeOldAuctions: includeOldAuctions
            };
            return ApiService.callApi("/portal/getPortalInfo", params).success(function(portalInfo) {
                LocalStorageService.store("portalInfo_" + region, JSON.stringify(portalInfo)), handleLoadedPortalInfo(portalInfo);
            });
        }
        function handleLoadedPortalInfo(portalInfo) {
            resetData(), angular.copy(portalInfo, mInfo), initHouses(portalInfo.houses, portalInfo.sites, portalInfo.housesResources, portalInfo.housesDetails), 
            initAuctions(portalInfo.auctions, portalInfo.auctionsResources), $rootScope.$broadcast("portalInfo.infoUpdated");
        }
        function getAuction(auctionId) {
            return mAuctionsMap[auctionId];
        }
        function getAuctions() {
            return mAuctions;
        }
        function getHouseAuctions(houseId) {
            return mHousesAuctions[houseId];
        }
        function getHouses() {
            return mHouses;
        }
        function getInfo() {
            return mInfo;
        }
        function getHouse(houseId) {
            return mHousesMap[houseId];
        }
        function getHouseByCode(code) {
            return ArraysService.getByKey(mHouses, "code", code);
        }
        function sendContactRequest(contactRequest) {
            return ApiService.callApi("/portal/sendContactRequest", contactRequest, "post");
        }
        function getProductInfo() {
            return CachedApiService.callCachableApi("productInfo", "/portal/getProductInfo");
        }
        function getHelpScreensInfo() {
            return CachedApiService.callCachableApi("helpeScreens", "/portal/getHelpScreensInfo");
        }
        function getHouseTermsUrl(houseId, lang) {
            return CachedApiService.callCachableApi("terms_" + houseId + "_" + lang, "/portal/getHouseTermsUrl", {
                houseId: houseId,
                lang: lang
            });
        }
        function getHouseIncrementsSteps(houseId) {
            var defered = $q.defer();
            return CachedApiService.callCachableApi("increments_" + houseId, "/portal/getHouseIncrements", {
                houseId: houseId
            }).success(function(incrementsInfo) {
                var steps = [];
                for (var price in incrementsInfo.steps) steps.push({
                    price: 1 * price,
                    increment: 1 * incrementsInfo.steps[price]
                });
                defered.resolve(steps);
            }), defered.promise;
        }
        function sortHouses() {
            mHouses.sort(function(house1, house2) {
                var house1Name = I18nService.getLangField(house1.details.name).toLowerCase(), house2Name = I18nService.getLangField(house2.details.name).toLowerCase();
                if (house1Name == house2Name) return 0;
                var isHouse1Heb = StringsService.isHebChar(house1Name.charAt(0)), isHouse2Heb = StringsService.isHebChar(house2Name.charAt(0));
                return isHouse1Heb && !isHouse2Heb ? -1 : !isHouse1Heb && isHouse2Heb ? 1 : house1Name > house2Name ? 1 : -1;
            });
        }
        function getBidSpiritHouses() {
            return sortHouses(), ArraysService.filteredByNonEmpty(mHouses, "bidspiritSiteId");
        }
        function sendLotInquiryRequest(lotId, lotTitle, content) {
            return ApiService.callApi("/portal/sendLotInquiryRequest", {
                lotId: lotId,
                lotTitle: lotTitle,
                content: content
            }, "postForm");
        }
        function getHouseTextParams(house) {
            var houseDetails = house.details;
            return {
                name: I18nService.getLangField(houseDetails.name),
                email: houseDetails.email,
                phone: houseDetails.phone,
                link: "<a href='" + house.website + "' target='" + house.id + "'>" + house.website + "</a>"
            };
        }
        function getLegalDoc(code) {
            return ApiService.callApi("/portal/getLegalDocContent", {
                code: code,
                lang: I18nService.getCurrentLang(),
                cacheVersion: SettingsService.getCacheVersion("LEGAL_DOCS")
            });
        }
        function getMinutesUntilAuction(auction) {
            var auctionTime = auction.time;
            if (auctionTime || (auctionTime = "23:59"), auctionTime) {
                var auctionDate = DateUtilsService.parseServerDate(auction.date + " " + auctionTime), auctionUtcTime = DateUtilsService.utcDate(auctionDate, !0), auctionTimeInRegion = auctionUtcTime.getTime() + 1e3 * SettingsService.get("regionTimezoneDiff") * 60 * 60;
                return Math.round((auctionTimeInRegion + SettingsService.getServerTimeGap() - new Date().getTime()) / 6e4);
            }
        }
        function setCurrentUserPreferredLang(lang) {
            return ApiService.callApi("/users/setPreferredLang", {
                lang: lang
            });
        }
        function reloadInfoAfterDelay(delay) {
            clearTimeout(mReloadTimer), mReloadTimer = setTimeout(function() {
                loadForRegion($rootScope.mCurrentRegion, !0);
            }, delay);
        }
        return mHouses = [], mHousesMap = {}, mAuctions = [], mAuctionsMap = {}, mHousesAuctions = {}, 
        mInfo = {}, mReloadTimer = null, $rootScope.$on("i18n.languageChanged", sortHouses), 
        {
            init: init,
            loadForRegion: loadForRegion,
            reloadInfoAfterDelay: reloadInfoAfterDelay,
            getHouses: getHouses,
            getBidSpiritHouses: getBidSpiritHouses,
            getHouse: getHouse,
            getHouseByCode: getHouseByCode,
            getAuctions: getAuctions,
            getAuction: getAuction,
            getMinutesUntilAuction: getMinutesUntilAuction,
            getHouseAuctions: getHouseAuctions,
            getProductInfo: getProductInfo,
            getHelpScreensInfo: getHelpScreensInfo,
            getPortalInfo: getInfo,
            getHouseTermsUrl: getHouseTermsUrl,
            getHouseIncrementsSteps: getHouseIncrementsSteps,
            getHouseTextParams: getHouseTextParams,
            sendContactRequest: sendContactRequest,
            getLegalDoc: getLegalDoc,
            sendLotInquiryRequest: sendLotInquiryRequest,
            setCurrentUserPreferredLang: setCurrentUserPreferredLang
        };
    });
}), define("portal/js/modules/main/portalTextsService", [ "./portalMainModule" ], function(module) {
    module.factory("PortalTextsService", function($rootScope, SessionsService, SettingsService, DomUtilsService, I18nService) {
        function init() {
            mInfo.email = SettingsService.get("supportEmail"), mInfo.phone = SettingsService.get("supportPhone"), 
            $rootScope.BidspiritInfo = mInfo, ajdustInfoToLang(), $rootScope.$on("i18n.languageChanged", ajdustInfoToLang);
        }
        function ajdustInfoToLang() {
            mInfo.fullPhone = I18nService.getPhoneForRegion(mInfo.phone, SessionsService.getRegion(), I18nService.getCurrentLang());
            var phoneHtml = DomUtilsService.noWrap(mInfo.fullPhone, "ltr");
            mInfo.phoneLink = SessionsService.isMobile() ? DomUtilsService.link("tel:" + mInfo.fullPhone, phoneHtml) : phoneHtml, 
            mInfo.emailLink = DomUtilsService.link("mailto:" + mInfo.email, mInfo.email);
        }
        function getGeneralErrorMessage() {
            return I18nService.getText("error_unknown", {
                email: mInfo.emailLink,
                phone: mInfo.phoneLink
            });
        }
        function getHouseConnectivityErrorParams(house) {
            return {
                email: $rootScope.BidspiritInfo.emailLink,
                phone: $rootScope.BidspiritInfo.phoneLink,
                house: I18nService.getLangField(house.details.name)
            };
        }
        function getHouseConnectivityError(house) {
            return I18nService.getText("my_account_unknown_error", getHouseConnectivityErrorParams(house));
        }
        var mInfo = {};
        return {
            init: init,
            getGeneralErrorMessage: getGeneralErrorMessage,
            getHouseConnectivityError: getHouseConnectivityError,
            getHouseConnectivityErrorParams: getHouseConnectivityErrorParams
        };
    });
}), define("portal/js/modules/main/heartBeatService", [ "./portalMainModule" ], function(module) {
    module.factory("HeartBitService", function($rootScope, $interval, $log, ApiService, SettingsService, DialogsService, I18nService, SessionsService, PortalInfoService) {
        function reloadPageAfterDelay() {
            clearTimeout(mPageReloadTimer), mPageReloadTimer = setTimeout(function() {
                window.location.reload();
            }, getNextReloadTime(0, 60));
        }
        function getNextReloadTime(secondsToWait, secondsToSpread) {
            return "dev" == GlobalConfig.envName ? 100 : 1e3 * secondsToWait + Math.round(1e3 * Math.random() * secondsToSpread);
        }
        function heartBeat() {
            ApiService.callApi("/portal/heartBeat").success(function(heartBeatResponse) {
                var user = $rootScope.currentUser;
                user && (heartBeatResponse.hasSession ? user.registrationStage != heartBeatResponse.registrationStage && (user.registrationStage = heartBeatResponse.registrationStage, 
                $rootScope.$broadcast("auth.authStateChanged")) : ($log.info("session ended."), 
                SessionsService.setSessionUser(null)));
                var settings = SettingsService.getAll(), prevCacheVersions = settings.cacheVersions, newCacheVersions = heartBeatResponse.cacheVersions, newTexts = !1;
                prevCacheVersions.TEXTS != newCacheVersions.TEXTS && (newTexts = !0), prevCacheVersions.PORTAL_INFO != newCacheVersions.PORTAL_INFO && PortalInfoService.reloadInfoAfterDelay(getNextReloadTime(120, 120)), 
                settings.cacheVersions = newCacheVersions, GlobalConfig.isMobileApp ? !mAppUpdateMessageDisplayed && GlobalConfig.mobileAppVersion < heartBeatResponse.requiredMobileAppVersion && (DialogsService.showAlert("warning_new_mobile_required"), 
                mAppUpdateMessageDisplayed = !0) : (settings.appVersion != heartBeatResponse.appVersion && (settings.appVersion = heartBeatResponse.appVersion, 
                reloadPageAfterDelay()), newTexts && I18nService.reloadTextsAfterDelay(getNextReloadTime(120, 120)));
            });
        }
        function init() {
            $interval(heartBeat, 1e3 * mHeartBitRate);
        }
        return mPageReloadTimer = null, mHeartBitRate = "dev" == GlobalConfig.envName ? 10 : 60, 
        mAppUpdateMessageDisplayed = !1, {
            init: init,
            heartBeat: heartBeat
        };
    });
}), define("portal/js/modules/main/portalStates", [ "./portalMainModule" ], function(module) {
    module.factory("PortalStates", function($state, $timeout, LocalStorageService, PathsService, SessionsService) {
        function init() {
            PathsService.validateHttps() && (saveState(), PathsService.appTemplateState("app", "portalMain", {
                url: "/"
            }), PathsService.appTemplateState("app.home", "auctions/home/homeMain", {
                url: "home"
            }), PathsService.appTemplateState("app.results", "auctions/results/auctionsResults", {
                url: "results/:house/:page"
            }), PathsService.appTemplateState("app.catalog", "auctions/catalogs/list/catalogMain", {
                url: "catalog/auction/:auctionId/:page"
            }), PathsService.appTemplateState("app.lotPage", "auctions/catalogs/lotPage/lotPageMain", {
                url: "lotPage/source/:source/auction/:auctionId/lot/:lotId"
            }), PathsService.childSubviewTemplateState("app.lotPage", "zoom", "auctions/catalogs/lotPage/mobile/lotZoomSubScene", {
                url: "/zoom/:imageInd"
            }), PathsService.appTemplateState("app.search", "auctions/catalogs/search/searchMain", {
                url: "search"
            }), PathsService.appTemplateState("app.houses", "houses/housesList", {
                url: "houses"
            }), PathsService.appTemplateState("app.house", "houses/housePage", {
                url: "houses/:houseCode"
            }), PathsService.appTemplateState("app.about", "info/about", {
                url: "about"
            }), PathsService.appTemplateState("app.product", "info/product/productMain", {
                url: "product"
            }), PathsService.appTemplateState("app.help", "info/helpScreen", {
                url: "help/:code"
            }), PathsService.appTemplateState("app.contact", "info/contact", {
                url: "contact"
            }), PathsService.simpleChildStates("app.contact", [ "thanks" ]), PathsService.appTemplateState("app.popupScene", "elements/popups/popupAsScene", {
                url: "popupAsScene/:code"
            }), PathsService.appTemplateState("app.houseApproval", "account/approval/houseApprovalScene", {
                url: "houseApproval/:houseId"
            }), PathsService.appTemplateState("app.userDetails", "userDetails/userDetailsMain", {
                url: "userDetails"
            }), PathsService.appTemplateState("app.myAccount", "account/myAccount/myAccountMain", {
                url: "myAccount/:itemsType/:houseId"
            }), PathsService.appTemplateState("app.favorites", "account/favorites/favoritesMain", {
                url: "favorites"
            }), PathsService.appTemplateState("app.alerts", "alerts/userAlertsMain", {
                url: "alerts"
            }), PathsService.appTemplateState("app.alerts.house", "alerts/userAlertsMain", {
                url: "alerts/:houseCode"
            }), PathsService.appTemplateState("app.auth", "auth/authScene", {
                url: "auth/:authScene/:args"
            }), PathsService.state("app.mobileMenu", {
                url: "mobileMenu"
            }), PathsService.appTemplateState("app.reload", "elements/navigation/reload", {
                url: "reload"
            }), -1 == window.location.href.indexOf("_escaped_fragment_") && loadSavedState(), 
            saveAcquisitionInfo());
        }
        function loadSavedState() {
            $state.go("app.home"), $timeout(function() {
                var parsed = manualStateParsing();
                parsed || SessionsService.isIe() || (window.location.hash = mSavedStateHash);
            }, 100);
        }
        function manualStateParsing() {
            var hashParts = mSavedStateHash.split("/"), parsed = !0;
            if (2 == hashParts.length) $state.go("app." + hashParts[1]); else if ("confirmEmail" == hashParts[2]) {
                var confirmationKey = hashParts[3];
                $state.go("app.auth", {
                    authScene: "confirmEmail",
                    args: confirmationKey
                });
            } else "catalog" == hashParts[1] ? $state.go("app.catalog", {
                auctionId: hashParts[3],
                page: hashParts[4]
            }) : "lotPage" == hashParts[1] ? $state.go("app.lotPage", {
                source: hashParts[3],
                auctionId: hashParts[5],
                lotId: hashParts[7]
            }) : parsed = !1;
            return parsed;
        }
        function saveAcquisitionInfo() {
            var initialReferer = LocalStorageService.load("initialReferer");
            if (!initialReferer) {
                var referer = GlobalConfig.referer;
                referer && "null" != referer && "true" != referer && (referer = "Unknown"), LocalStorageService.store("initialReferer", referer || "Unknown");
            }
            var initialSource = LocalStorageService.load("initialSource"), source = PathsService.getQueryParam("from") || "Unknown";
            initialSource || LocalStorageService.store("initialSource", source);
        }
        function saveState() {
            if (GlobalConfig.isMobileApp){
				mSavedStateHash = LocalStorageService.load("lastVisitedPage");
			}			
			
			mSavedStateHash = mSavedStateHash || window.location.hash || "!/home";
        }
        function getSavedStateHash() {
            return mSavedStateHash;
        }
        function getInitialUrl() {
            return mInitialUrl;
        }
        var mSavedStateHash = window.location.hash, mInitialUrl = window.location.href + "";
        return {
            init: init,
            loadSavedState: loadSavedState,
            getSavedStateHash: getSavedStateHash,
            getInitialUrl: getInitialUrl,
            saveState: saveState
        };
    });
}), define("portal/js/modules/main/index", [ "./portalMainModule", "./portalMainController", "./portalInfoService", "./portalTextsService", "./heartBeatService", "./portalStates" ], function() {}), 
define("portal/js/modules/auth/portalAuthModule", [ "angular" ], function(ng) {
    return ng.module("app.auth", [ "app.auth.login", "app.auth.register" ]);
}), define("portal/js/modules/auth/portalAuthService", [ "./portalAuthModule" ], function(module) {
    module.factory("PortalAuthService", function($q, $rootScope, $state, $interval, $log, $modal, $modalStack, AnalyticsService, LocalStorageService, PathsService, ApiService, PopupsService, SessionsService, PortalInfoService) {
        function register(registrationInfo) {
            return ApiService.callApi("/auth/register", registrationInfo, "post").success(function(user) {
                user.justRegistered = !0, SessionsService.setSessionUser(user), LocalStorageService.store("lastLoggedinEmail", user.email);
            });
        }
        function confirmEmail(emailConfirmationKey) {
            return ApiService.callApi("/auth/confirmEmail", {
                emailConfirmationKey: emailConfirmationKey
            }).success(function(user) {
                SessionsService.setSessionUser(user, SessionsService.hasPersistentSession()), LocalStorageService.store("lastLoggedinEmail", user.email);
            });
        }
        function login(email, password, lang, region, remember) {
            return ApiService.callApi("/auth/login", {
                email: email,
                password: password,
                lang: lang,
                region: region,
                remember: remember
            }).success(function(user) {
                SessionsService.setSessionUser(user, remember), LocalStorageService.store("lastLoggedinEmail", email);
            });
        }
        function sendPasswordRecovery(email) {
            return ApiService.callApi("/auth/sendPasswordRecovery", {
                email: email
            });
        }
        function resendEmailConfirmationRequest() {
            return ApiService.callApi("/auth/resendEmailConfirmationRequest");
        }
        function completeRegistration(completeRegistrationInfo) {
            return ApiService.callApi("/auth/completeRegistration", completeRegistrationInfo, "post").success(function() {
                AnalyticsService.trackEvent("authAction", "completeRegistration");
            });
        }
        function updateEmail(email) {
            return ApiService.callApi("/auth/updateEmail", {
                email: email
            });
        }
        function updatePassword(existingPassword, newPassword) {
            return ApiService.callApi("/auth/updatePassword", {
                existingPassword: existingPassword,
                newPassword: newPassword
            });
        }
        function validateUserLoggedIn() {
            return $rootScope.currentUser ? $rootScope.currentUser : void showAuthModalOrScene("login");
        }
        function getTempAuthInfo() {
            return mTempAuthInfo;
        }
        function logout() {
            return ApiService.callApi("/auth/logout").success(function() {
                SessionsService.setSessionUser(null);
            });
        }
        function showAuthModalOrScene(scene, subScene, args) {
            $rootScope.viewPort.pcMedia ? showAuthModalPopup(scene, subScene, args).result.then(function() {}) : $state.go("app.auth", {
                authScene: scene,
                authSubScene: subScene,
                args: args ? JSON.stringify(args) : "{}"
            });
        }
        function showAuthModalPopup(scene, subScene, args) {
            closeAuthModalPopup();
            var modalInstance = $modal.open({
                templateUrl: PathsService.appTemplatePath("auth/authModalPopup"),
                windowClass: "modal auth-modal-popup",
                controller: function($scope) {
                    $scope.authDisplayInfo = {
                        popupScene: scene,
                        popupSubScene: subScene || scene,
                        args: args || ""
                    }, mAuthPopupOn = !0;
                }
            });
            return modalInstance.result.then(function() {
                mAuthPopupOn = !1, $rootScope.$broadcast("auth.modalPopupClosed");
            }), modalInstance;
        }
        function closeAuthModalPopup() {
            $modalStack.dismissAll(), mAuthPopupOn = !1;
        }
        function setCurrentHouseApprovalState(houseId, state) {
            mCurrentHouseApprovalState = {
                houseId: houseId,
                state: state
            }, $rootScope.$broadcast("auth.houseApprovalChanged");
        }
        function isCurrentUserKnownAsApprovedToHouse(houseId) {
            var house = PortalInfoService.getHouse(houseId);
            return house && $rootScope.currentUser && $rootScope.currentUser.approvedHousesCodes ? -1 != $rootScope.currentUser.approvedHousesCodes.indexOf(house.code) : !1;
        }
        function getHouseApprovalState(houseId) {
            return houseId ? $rootScope.currentUser ? mCurrentHouseApprovalState && mCurrentHouseApprovalState.houseId == houseId ? mCurrentHouseApprovalState.state : isCurrentUserKnownAsApprovedToHouse(houseId) ? "APPROVED" : "UNKNOWN" : "NOT_LOGGED_IN" : null;
        }
        function createTokenForAppSite(houseId, token) {
            return ApiService.callApi("/auth/createTokenForAppSite", {
                houseId: houseId,
                token: token
            });
        }
        function isAuthPopupOn() {
            return mAuthNavBarPopupOn || mAuthPopupOn;
        }
        var mTempAuthInfo = {}, mCurrentHouseApprovalState = null, mAuthPopupOn = !1, mAuthNavBarPopupOn = !1;
        return $rootScope.$on("auth.upperNavPopupDisplay", function(event, navAuthPopupOn) {
            mAuthNavBarPopupOn = navAuthPopupOn;
        }), {
            register: register,
            login: login,
            validateUserLoggedIn: validateUserLoggedIn,
            confirmEmail: confirmEmail,
            sendPasswordRecovery: sendPasswordRecovery,
            resendEmailConfirmationRequest: resendEmailConfirmationRequest,
            updateEmail: updateEmail,
            updatePassword: updatePassword,
            completeRegistration: completeRegistration,
            createTokenForAppSite: createTokenForAppSite,
            getTempAuthInfo: getTempAuthInfo,
            showAuthModalOrScene: showAuthModalOrScene,
            showAuthModalPopup: showAuthModalPopup,
            closeAuthModalPopup: closeAuthModalPopup,
            setCurrentHouseApprovalState: setCurrentHouseApprovalState,
            getHouseApprovalState: getHouseApprovalState,
            isCurrentUserKnownAsApprovedToHouse: isCurrentUserKnownAsApprovedToHouse,
            logout: logout,
            isAuthPopupOn: isAuthPopupOn
        };
    });
}), define("portal/js/modules/auth/authUpperNavigationController", [ "./portalAuthModule" ], function(module) {
    module.controller("AuthUpperNavigationController", [ "$rootScope", "$scope", "$timeout", "$state", "PortalAuthService", function($rootScope, $scope, $timeout, $state) {
        function checkUserWarningDisplay() {
            var user = $rootScope.currentUser;
            user && "COMPLETE" != user.registrationStage ? $timeout(function() {
                var stateName = $state.current.name;
                "app.postRegistrationDetails" != stateName && "app.userDetails" != stateName && "app.auth" != stateName && $scope.setAuthScene("warning");
            }, 100) : $scope.hidePopup();
        }
        function onSessionUserChanged() {
            $scope.hidePopup(), checkUserWarningDisplay();
        }
        $scope.authDisplayInfo = {
            popupScene: null,
            popupSubScene: null,
            menuVisible: !1
        }, $scope.setAuthScene = function(sceneName) {
            $scope.authDisplayInfo.popupScene = sceneName, $scope.setAuthSubScene(sceneName), 
            $scope.authDisplayInfo.menuVisible = !1, $rootScope.$broadcast("auth.upperNavPopupDisplay", !0);
        }, $scope.setAuthSubScene = function(subScene) {
            $scope.authDisplayInfo.popupSubScene = subScene;
        }, $scope.hidePopup = function() {
            $scope.authDisplayInfo.popupScene = null, $scope.authDisplayInfo.popupSubScene = null, 
            $rootScope.$broadcast("auth.upperNavPopupDisplay", !1);
        }, $scope.togglePopupView = function(popupAuthScene) {
            popupAuthScene == $scope.authDisplayInfo.popupScene ? $scope.hidePopup() : $scope.setAuthScene(popupAuthScene);
        }, $scope.toggleAuthMenu = function() {
            $scope.hidePopup(), $scope.authDisplayInfo.menuVisible = !$scope.authDisplayInfo.menuVisible, 
            $rootScope.$broadcast("auth.menuVisible", $scope.authDisplayInfo.menuVisible);
        }, $rootScope.$on("auth.newSessionUser", onSessionUserChanged), $rootScope.$on("auth.authStateChanged", checkUserWarningDisplay), 
        $rootScope.$on("$stateChangeStart", $scope.hidePopup), $rootScope.$on("auth.modalPopupDisplay", function(event, isOn) {
            isOn && $scope.hidePopup();
        }), checkUserWarningDisplay();
    } ]);
}), define("portal/js/modules/auth/authModalPopupController", [ "./portalAuthModule" ], function(module) {
    module.controller("AuthModalPopupController", [ "$rootScope", "$scope", "$timeout", "$state", "PortalAuthService", function($rootScope, $scope, $timeout, $state, PortalAuthService) {
        function close() {
            PortalAuthService.closeAuthModalPopup();
        }
        function init() {
            $rootScope.$broadcast("auth.modalPopupDisplay", !0), $rootScope.$on("auth.authStateChanged", close), 
            $rootScope.$on("auth.newSessionUser", close), $rootScope.$on("$stateChangeStart", close);
        }
        $scope.setAuthScene = function(sceneName) {
            $scope.authDisplayInfo.popupScene = sceneName, $scope.setAuthSubScene(sceneName);
        }, $scope.setAuthSubScene = function(subScene) {
            $scope.authDisplayInfo.popupSubScene = subScene;
        }, $scope.titleKey = function() {
            var suffix;
            switch ($scope.authDisplayInfo.popupScene) {
              case "login":
                suffix = "login";
                break;

              case "warning":
                suffix = "notice";
                break;

              case "approval":
                suffix = "notice";
                break;

              default:
                suffix = "register";
            }
            return "auth_title_" + suffix;
        }, init();
    } ]);
}), define("portal/js/modules/auth/authSceneController", [ "./portalAuthModule" ], function(module) {
    module.controller("AuthSceneController", [ "$scope", "$rootScope", "$state", "$stateParams", "PortalAuthService", function($scope, $rootScope, $state, $stateParams) {
        function init() {
            var sceneName = $stateParams.authScene;
            if (!$rootScope.currentUser || "login" != sceneName && "register" != sceneName) {
                $scope.authDisplayInfo.authScene = sceneName, $scope.setAuthSubScene(sceneName);
                var args = $stateParams.args;
                args && 0 == args.indexOf("{") && (args = JSON.parse(args)), $scope.authDisplayInfo.args = args;
            } else $state.go("app.home");
            window.scrollTo(0, 0);
        }
        function redirectUserToNextScene() {
            var user = $rootScope.currentUser;
            if (user && !user.shouldApproveLegal) switch (user.registrationStage) {
              case "UNCONFIRMED_EMAIL":
                $scope.setAuthScene("warning");
                break;

              case "INCOMPLETE_PROFILE":
                $scope.setAuthScene("postRegistrationDetails");
                break;

              case "COMPLETE":
                ("login" == $scope.authDisplayInfo.authScene || "warning" == $scope.authDisplayInfo.authScene) && $state.go($rootScope.$previousState.name, $rootScope.$previousState.args);
            }
        }
        $scope.authDisplayInfo = {
            authScene: null,
            authSubScene: null
        }, $scope.setAuthScene = function(authScene, arg) {
            $state.go("app.auth", {
                authScene: authScene,
                arg: arg
            });
        }, $scope.setAuthSubScene = function(subScene) {
            $scope.authDisplayInfo.authSubScene = subScene;
        }, $scope.titleKey = function() {
            var suffix;
            switch ($scope.authDisplayInfo.authScene) {
              case "login":
                suffix = "login";
                break;

              default:
                suffix = "register";
            }
            return "auth_title_" + suffix;
        }, $scope.$on("auth.newSessionUser", redirectUserToNextScene), $scope.$on("auth.authStateChanged", redirectUserToNextScene), 
        init();
    } ]);
}), define("portal/js/modules/auth/legalApprovalService", [ "./portalAuthModule" ], function(module) {
    module.factory("LegalApprovalService", function($rootScope, $document, $timeout, $state, $modal, $modalStack, ApiService, PopupsService, SessionsService) {
        function checkLegalApproval() {
            var user = $rootScope.currentUser;
            user && user.shouldApproveLegal && "app.popupScene" != $state.$current.name && ($modalStack.dismissAll(), 
            PopupsService.showPopup({
                contentInclude: "auth/legalApproval/legalApprovalRequired",
                titleKey: "legal_reapproval_title",
                size: "sm",
                showLegalDoc: PopupsService.showLegalDocPopup,
                code: "legalApproval",
                buttons: [ {
                    type: "default",
                    text: "legal_reapproval_not_confrim",
                    action: rejectLegalTerms
                }, {
                    type: "primary",
                    text: "legal_reapproval_confrim",
                    action: acceptLegalTerms
                } ],
                unclosable: !0
            }), bindShowAgainOnEscape());
        }
        function bindShowAgainOnEscape() {
            mEscapeKeyHandled || (mEscapeKeyHandled = !0, $document.bind("keydown", function(evt) {
                27 === evt.which && $timeout(checkLegalApproval, 1e3);
            }));
        }
        function rejectLegalTerms() {
            ApiService.callApi("/auth/setLegalDocsApprovalState", {
                approvalState: "NOT_APPROVED"
            }).then(function() {
                $state.go("app.home"), SessionsService.setSessionUser(null), $modalStack.dismissAll(), 
                $timeout(function() {
                    PopupsService.showPopup({
                        contentInclude: "auth/legalApproval/legalTermsRejected",
                        titleKey: "legal_reapproval_title",
                        size: "sm",
                        code: "legalTermsRejected",
                        buttons: [ {
                            type: "primary",
                            text: "dialogs_close",
                            isCloseButton: !0
                        } ]
                    });
                }, 1e3);
            });
        }
        function acceptLegalTerms() {
            ApiService.callApi("/auth/setLegalDocsApprovalState", {
                approvalState: "APPROVED"
            }).then(function() {
                $rootScope.currentUser.shouldApproveLegal = !1, $modalStack.dismissAll(), $rootScope.viewPort.mobileMedia && $state.go("app.home");
            });
        }
        return mEscapeKeyHandled = !1, {
            checkLegalApproval: checkLegalApproval
        };
    });
}), define("portal/js/modules/auth/login/portalLoginModule", [ "angular" ], function(ng) {
    return ng.module("app.auth.login", []);
}), define("portal/js/modules/auth/login/portalLoginController", [ "./portalLoginModule" ], function(module) {
    module.controller("PortalLoginController", [ "$scope", "$timeout", "LocalStorageService", "I18nService", "SessionsService", "PortalAuthService", function($scope, $timeout, LocalStorageService, I18nService, SessionsService, PortalAuthService) {
        $scope.loginInfo = {}, $scope.loginErrorVisible = !1, $scope.loginHelpVisible = !1, 
        $timeout(function() {
            $scope.loginInfo = PortalAuthService.getTempAuthInfo(), "dev" == GlobalConfig.envName && ($scope.loginInfo = {
                email: "zemer@bidspirit.com",
                password: "zzzzzzz",
                remember: !1
            }), $scope.loginInfo.email || ($scope.loginInfo.email = LocalStorageService.load("lastLoggedinEmail"));
        }, 100), $scope.login = function() {
            return PortalAuthService.login($scope.loginInfo.email, $scope.loginInfo.password, I18nService.getCurrentLang(), $scope.currentRegion, $scope.loginInfo.remember).success(function() {}).error(function() {
                $scope.loginErrorVisible = !0;
            });
        }, $scope.hideLoginError = function() {
            $scope.loginErrorVisible && ($scope.loginErrorVisible = !1, $scope.loginHelpVisible = !1);
        }, $scope.toggleHelpVisisble = function() {
            $scope.loginHelpVisible = !$scope.loginHelpVisible;
        }, $scope.$on("$destroy", function() {
            $scope.loginInfo.password = "";
        });
    } ]);
}), define("portal/js/modules/auth/login/recoverPasswordController", [ "./portalLoginModule" ], function(module) {
    module.controller("RecoverPasswordController", [ "$scope", "$timeout", "I18nService", "PortalAuthService", function($scope, $timeout, I18nService, PortalAuthService) {
        $scope.email = null, $scope.stage = 1, $scope.info = {}, $scope.data = {}, $scope.info = PortalAuthService.getTempAuthInfo(), 
        $scope.sendPassword = function() {
            return PortalAuthService.sendPasswordRecovery($scope.info.email).success(function() {
                $scope.stage = 2;
            }).error(function() {
                $scope.data.emailUnknown = !0;
            });
        };
    } ]);
}), define("portal/js/modules/auth/login/index", [ "./portalLoginModule", "./portalLoginController", "./recoverPasswordController" ], function() {}), 
define("portal/js/modules/auth/register/registerModule", [ "angular" ], function(ng) {
    return ng.module("app.auth.register", []);
}), define("portal/js/modules/auth/register/registerController", [ "./registerModule" ], function(module) {
    module.controller("RegisterController", [ "$rootScope", "$scope", "$timeout", "LogService", "I18nService", "LocalStorageService", "PortalInfoService", "PortalAuthService", "PopupsService", function($rootScope, $scope, $timeout, LogService, I18nService, LocalStorageService, PortalInfoService, PortalAuthService, PopupsService) {
        function setRegistrationEnvInfo() {
            $scope.registrationInfo.lang = I18nService.getCurrentLang(), $scope.registrationInfo.region = $rootScope.currentRegion;
            var acquisitionInfo = {
                initialReferer: LocalStorageService.load("initialReferer")
            };
            LocalStorageService.load("initialSource") && (acquisitionInfo.initialSource = LocalStorageService.load("initialSource")), 
            $scope.registrationInfo.acquisitionInfo = acquisitionInfo;
        }
        $scope.registrationInfo = {}, $timeout(function() {
            $scope.registrationInfo = PortalAuthService.getTempAuthInfo(), "dev" == GlobalConfig.envName && angular.extend($scope.registrationInfo, {
                firstName: "zzzz",
                lastName: "zzzz",
                email: "zemer@bidspirit.com",
                password: "zzzzzzz",
                passwordConfirm: "zzzzzzz",
                terms: !0,
                over18: !0
            }), window.innerHeight < 1e3 && "register" == $scope.authDisplayInfo.authScene && window.scroll(0, 130);
        }, 100), $scope.existingEmails = [], $scope.register = function() {
            return setRegistrationEnvInfo(), LogService.logEvent({
                attemptRegistration: $scope.registrationInfo.email
            }), PortalAuthService.register($scope.registrationInfo).success(function() {
                LogService.logEvent({
                    successRegistration: $scope.registrationInfo.email
                });
            }).error(function(error) {
                switch (LogService.logEvent({
                    failedRegistration: error.errorType
                }), error.errorType) {
                  case "ALREADY_EXISTS":
                    $scope.existingEmails.push($scope.registrationInfo.email), $timeout(function() {
                        $scope.registerForm.updateFieldsAttentions();
                    }, 150);
                    break;

                  default:
                    $scope.showGeneralError();
                }
            });
        }, $scope.emailExists = function(email) {
            return -1 != $scope.existingEmails.indexOf(email);
        }, $scope.passwordConfirmedMatch = function() {
            var info = $scope.registrationInfo;
            return info.passwordConfirm == info.password ? !0 : !1;
        }, $scope.displayLoginLink = function() {
            return $scope.registerForm && $scope.registerForm.email ? $scope.registerForm.email.attentionTouch && $scope.registerForm.email.$error.exists : void 0;
        }, $scope.showTerms = function() {
            PopupsService.showLegalDocPopup("terms");
        }, $scope.$on("$destroy", function() {
            $scope.registrationInfo.password = "", $scope.registrationInfo.passwordConfirm = "";
        });
    } ]);
}), define("portal/js/modules/auth/register/postRegistrationDetailsController", [ "./registerModule" ], function(module) {
    module.controller("PostRegistrationDetailsController", [ "$rootScope", "$scope", "$state", "PortalAuthService", "UserDetailsService", function($rootScope, $scope, $state, PortalAuthService, UserDetailsService) {
        function init() {
            $scope.currentUser ? ($scope.userDetails = angular.copy($scope.currentUser), UserDetailsService.getUserDetails().success(function(details) {
                angular.extend($scope.userDetails, details), $scope.userDataLoaded = !0;
            })) : $state.go("app.home");
        }
        $scope.userDataLoaded = !1, $scope.formSubmitted = !1, $scope.save = function() {
            return PortalAuthService.completeRegistration($scope.userDetails).success(function(userDetails) {
                $scope.userDetails.addresses = userDetails.addresses, $scope.currentUser.phone = userDetails.phone, 
                $scope.currentUser.registrationStage = "COMPLETE", $scope.currentUser.residenceIsShipping = userDetails.shippingAddress.residenceIsShipping, 
                $scope.currentUser.company = userDetails.company, $scope.formSubmitted = !0, $rootScope.$broadcast("auth.authStateChanged"), 
                window.scrollTo(0, 0);
            });
        }, $scope.$on("$destroy", function() {
            $scope.currentUser && ($scope.currentUser.justConfirmed = !1);
        }), init();
    } ]);
}), define("portal/js/modules/auth/register/confirmEmailController", [ "./registerModule" ], function(module) {
    module.controller("ConfirmEmailController", [ "$scope", "$timeout", "$state", "$stateParams", "PortalAuthService", "LogService", function($scope, $timeout, $state, $stateParams, PortalAuthService, LogService) {
        $scope.confirmState = "confirming", PortalAuthService.confirmEmail($stateParams.args).success(function(user) {
            LogService.logMessage("Confirmed email key " + $stateParams.args + ", " + user.registrationStage), 
            "INCOMPLETE_PROFILE" == user.registrationStage ? (user.justConfirmed = !0, $state.go("app.auth", {
                authScene: "postRegistrationDetails",
                arg: ""
            })) : $scope.confirmState = "confirmed";
        }).error(function(error) {
            LogService.logMessage("Warning: error while trying to confirm key " + $stateParams.args), 
            LogService.logEvent(error), "INVALID" == error.errorType ? $scope.confirmState = "expired" : ($state.go("app.home"), 
            $timeout(function() {
                PortalAuthService.validateUserLoggedIn();
            }, 1e3));
        });
    } ]);
}), define("portal/js/modules/auth/register/authWarningController", [ "./registerModule" ], function(module) {
    module.controller("AuthWarningController", [ "$scope", "$rootScope", "$stateParams", "PortalAuthService", function($scope, $rootScope) {
        function init() {
            var user = $rootScope.currentUser;
            if (user) switch (user.registrationStage) {
              case "UNCONFIRMED_EMAIL":
                $scope.warning = "unconfirmedEmail";
                break;

              case "INCOMPLETE_PROFILE":
                $scope.warning = "incompleteProfile";
            }
        }
        init(), $rootScope.$on("auth.authStateChanged", init);
    } ]);
}), define("portal/js/modules/auth/register/index", [ "./registerModule", "./registerController", "./postRegistrationDetailsController", "./confirmEmailController", "./authWarningController" ], function() {}), 
define("portal/js/modules/auth/index", [ "./portalAuthModule", "./portalAuthService", "./authUpperNavigationController", "./authModalPopupController", "./authSceneController", "./legalApprovalService", "./login/index", "./register/index" ], function() {}), 
define("portal/js/modules/userDetails/userDetailsModule", [ "angular" ], function(ng) {
    return ng.module("app.userDetails", []);
}), define("portal/js/modules/userDetails/userDetailsController", [ "./userDetailsModule" ], function(module) {
    module.controller("UserDetailsController", [ "$scope", "$rootScope", "$state", "$filter", "ArraysService", "I18nService", "UserDetailsService", "PortalAuthService", function($scope, $rootScope, $state, $filter, ArraysService, I18nService, UserDetailsService) {
        function init() {
            $scope.currentUser ? (UserDetailsService.getUserDetails().success(function(userDetails) {
                $scope.data.savedDetails = userDetails, resetData(), initSections(), openEmailSectionIfUnconfirmed();
            }), $rootScope.$on("auth.newSessionUser", function() {
                $state.go("app.home");
            })) : $state.go("app.home");
        }
        function initSections() {
            var sections;
            sections = "COMPLETE" == $scope.currentUser.registrationStage ? [ "email", "password", "name", "phone", "company", "residence", "shipping" ] : [ "email", "password", "name" ], 
            ArraysService.replaceContent($scope.sections, sections);
        }
        function resetData() {
            $scope.data.user = angular.copy($scope.currentUser), $scope.data.userDetails = angular.copy($scope.data.savedDetails);
        }
        function openEmailSectionIfUnconfirmed() {
            $scope.opened.email = "UNCONFIRMED_EMAIL" == $scope.currentUser.registrationStage ? !0 : !1;
        }
        function getPasswordSummry() {
            var lastUpdate = $scope.currentUser.lastPasswordUpdate;
            if (lastUpdate) {
                var updateTime = $filter("date")(lastUpdate, "HH:mm:ss");
                return I18nService.getText("user_details_password_updated_on", {
                    updateTime: updateTime
                });
            }
            return "********";
        }
        function addressSummary(addressName) {
            if (!$scope.data.savedDetails) return "";
            var address = $scope.data.savedDetails[addressName + "Address"];
            if (!address) return "";
            var summary = "";
            return address.address && (summary += address.address + ", "), address.city && (summary += address.city + ", "), 
            address.state && (summary += address.state + ", "), address.country && (summary += address.country + ", "), 
            address.zipCode && (summary += address.zipCode + ", "), summary && (summary = summary.substr(0, summary.lastIndexOf(","))), 
            summary;
        }
        $scope.sections = [], $scope.data = {}, $scope.opened = {}, $scope.updateUserInfo = function(section) {
            return UserDetailsService.updateUserInfo($scope.data.user).success(function(user) {
                angular.extend($scope.currentUser, user), $scope.onUpdateDone(section);
            });
        }, $scope.updateResidenceAddress = function() {
            return UserDetailsService.updateAddress($scope.data.userDetails.residenceAddress).success(function(updatedAddress) {
                angular.extend($scope.data.savedDetails.residenceAddress, updatedAddress), $scope.onUpdateDone("residence");
            });
        }, $scope.updateShippingAddress = function() {
            var address = $scope.data.userDetails.shippingAddress;
            return UserDetailsService.updateAddress(address).success(function(updatedAddress) {
                angular.extend($scope.data.savedDetails.shippingAddress, updatedAddress), $scope.currentUser.residenceIsShipping = updatedAddress.residenceIsShipping, 
                $scope.onUpdateDone("shipping");
            });
        }, $scope.onUpdateDone = function(section) {
            $scope.opened[section] = !1, resetData(), "email" == section && openEmailSectionIfUnconfirmed();
        }, $scope.$on("userDetails.updateCanceled", function(event, section) {
            $scope.onUpdateDone(section);
        }), $scope.$on("auth.authStateChanged", function() {
            initSections(), openEmailSectionIfUnconfirmed();
        }), $scope.getSectionSummary = function(section) {
            if ($scope.opened[section]) return "";
            switch (section) {
              case "email":
                return $scope.currentUser.email;

              case "password":
                return getPasswordSummry();

              case "name":
                return $scope.currentUser.firstName + " " + $scope.currentUser.lastName;

              case "phone":
                return $scope.currentUser.phone;

              case "company":
                return $scope.currentUser.company;

              case "residence":
                return addressSummary("residence");

              case "shipping":
                return addressSummary($scope.currentUser.residenceIsShipping ? "residence" : "shipping");

              default:
                return "";
            }
        }, init();
    } ]);
}), define("portal/js/modules/userDetails/userDetailsService", [ "./userDetailsModule" ], function(module) {
    module.factory("UserDetailsService", function($rootScope, $interval, $log, ApiService) {
        function getUserDetails() {
            return ApiService.callApi("/users/getUserDetails");
        }
        function updateUserInfo(user) {
            return ApiService.callApi("/users/updateUserInfo", user, "post");
        }
        function updateAddress(address) {
            return ApiService.callApi("/users/updateAddress", address, "post");
        }
        function updateAlertsPreferences(preferences) {
            return ApiService.callApi("/users/updateAlertsPreferences", preferences, "post");
        }
        return {
            getUserDetails: getUserDetails,
            updateUserInfo: updateUserInfo,
            updateAddress: updateAddress,
            updateAlertsPreferences: updateAlertsPreferences
        };
    });
}), define("portal/js/modules/userDetails/editEmailDirective", [ "./userDetailsModule" ], function(module) {
    module.directive("bsEditEmail", function($rootScope, AsyncButtonService, PathsService, PortalAuthService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {},
            link: function(scope) {
                scope.sendingConfirmationAgain = !1, scope.sentConfirmationAgain = !1, scope.existingEmails = [], 
                scope.stage = "UNCONFIRMED_EMAIL" == $rootScope.currentUser.registrationStage ? "not_confirmed" : "edit", 
                scope.data = {
                    email: $rootScope.currentUser.email
                }, scope.notConfirmedTitle = "email_not_confirmed_title_post_login", $rootScope.currentUser.justRegistered && (scope.notConfirmedTitle = "email_not_confirmed_title_post_register", 
                $rootScope.currentUser.justRegistered = !1), scope.sendEmailConfirmationAgain = function() {
                    scope.sendingConfirmationAgain || (scope.sentConfirmationAgain = !1, scope.sendingConfirmationAgain = !0, 
                    PortalAuthService.resendEmailConfirmationRequest().success(function() {
                        scope.sentConfirmationAgain = !0, scope.sendingConfirmationAgain = !1;
                    }));
                }, scope.emailExists = function(email) {
                    return -1 != scope.existingEmails.indexOf(email);
                }, scope.getEmail = function() {
                    return $rootScope.currentUser.email;
                }, scope.updateEmail = function() {
                    return $rootScope.currentUser.email != scope.data.email ? PortalAuthService.updateEmail(scope.data.email).success(function() {
                        $rootScope.currentUser.email = scope.data.email, $rootScope.currentUser.registrationStage = "UNCONFIRMED_EMAIL", 
                        scope.stage = "not_confirmed", scope.notConfirmedTitle = "email_not_confirmed_title_email_updated", 
                        scope.$emit("auth.authStateChanged");
                    }).error(function(error) {
                        switch (error.errorType) {
                          case "ALREADY_EXISTS":
                            scope.existingEmails.push(scope.email);
                        }
                    }) : (scope.cancelEdit(), AsyncButtonService.fakeSuccess("changeEmail"));
                }, scope.cancelEdit = function() {
                    "UNCONFIRMED_EMAIL" == $rootScope.currentUser.registrationStage && (scope.stage = "not_confirmed"), 
                    scope.data.email = $rootScope.currentUser.email, scope.$emit("userDetails.updateCanceled", "email");
                };
            },
            templateUrl: PathsService.appTemplatePath("userDetails/reusableElements/editEmail")
        };
    });
}), define("portal/js/modules/userDetails/addressDirective", [ "./userDetailsModule" ], function(module) {
    module.directive("bsUserDetailsAddress", function($q, $http, PathsService, FormConstants) {
        return {
            restrict: "E",
            scope: {
                address: "="
            },
            link: function(scope) {
                scope.bsValidationPatterns = FormConstants.validationPatterns;
            },
            templateUrl: PathsService.appTemplatePath("userDetails/reusableElements/address")
        };
    });
}), define("portal/js/modules/userDetails/passwordUpdateController", [ "./userDetailsModule" ], function(module) {
    module.controller("PasswordUpdateController", [ "$scope", "$timeout", "PortalAuthService", function($scope, $timeout, PortalAuthService) {
        function initData() {
            $scope.data = {}, $scope.wrongPasswords = [];
        }
        $scope.updatePassword = function() {
            return PortalAuthService.updatePassword($scope.data.existingPassword, $scope.data.newPassword).success(function() {
                $scope.currentUser.lastPasswordUpdate = new Date(), $scope.updateDone();
            }).error(function(error) {
                "BAD_CREDENTIALS" == error.errorType && $scope.wrongPasswords.push($scope.data.existingPassword);
            });
        }, $scope.updateDone = function() {
            $scope.onUpdateDone("password"), initData();
        }, $scope.wrongPassword = function(password) {
            return -1 != $scope.wrongPasswords.indexOf(password);
        }, $scope.passwordConfirmedMatch = function() {
            return $scope.data.passwordConfirm == $scope.data.newPassword ? !0 : !1;
        }, initData();
    } ]);
}), define("portal/js/modules/userDetails/index", [ "./userDetailsModule", "./userDetailsController", "./userDetailsService", "./editEmailDirective", "./addressDirective", "./passwordUpdateController" ], function() {}), 
define("portal/js/modules/alerts/userAlertsModule", [ "angular" ], function(ng) {
    return ng.module("app.userAlerts", []);
}), define("portal/js/modules/alerts/userAlertsController", [ "./userAlertsModule" ], function(module) {
    module.controller("UserAlertsController", [ "$scope", "$rootScope", "$state", "$stateParams", "ArraysService", "PortalAuthService", "PortalInfoService", "UserDetailsService", function($scope, $rootScope, $state, $stateParams, ArraysService, PortalAuthService, PortalInfoService, UserDetailsService) {
        function init() {
            $scope.currentUser ? ($scope.data = $scope.currentUser.alertsPreferences ? angular.copy($scope.currentUser.alertsPreferences) : {
                userId: $scope.currentUser.id,
                housesToAlert: [],
                housesAlertChoice: null
            }, $scope.data.region = $rootScope.currentRegion, $scope.houses = PortalInfoService.getHouses(), 
            $scope.saved = !1, $scope.setChoice($scope.data.housesAlertChoice), $stateParams.houseCode && ($scope.setChoice("SOME_HOUSES_ALERTS"), 
            ArraysService.addIfNotExists($scope.data.housesToAlert, $stateParams.houseCode))) : PortalAuthService.showAuthModalOrScene("login"), 
            $rootScope.$on("auth.modalPopupClosed", initIfLoggedIn), $rootScope.$on("auth.newSessionUser", init);
        }
        function initIfLoggedIn() {
            $scope.currentUser ? init() : $state.go("app.home");
        }
        $scope.setChoice = function(choice) {
            switch ($scope.data.housesAlertChoice = choice, choice) {
              case "SOME_HOUSES_ALERTS":
                $scope.housesListVisible = !0;
                break;

              default:
                $scope.housesListVisible = !1;
            }
        }, $scope.save = function() {
            UserDetailsService.updateAlertsPreferences($scope.data).success(function(preferences) {
                $scope.data = preferences, $scope.currentUser.alertsPreferences = preferences, $scope.saved = !0, 
                window.scroll(0, 0);
            });
        }, init();
    } ]);
}), define("portal/js/modules/alerts/index", [ "./userAlertsModule", "./userAlertsController" ], function() {}), 
define("portal/js/modules/info/infoScenesModule", [ "angular" ], function(ng) {
    return ng.module("app.info", [ "app.info.contact", "app.info.product", "app.info.helpScreen" ]);
}), define("portal/js/modules/info/contact/contactModule", [ "angular" ], function(ng) {
    return ng.module("app.info.contact", []);
}), define("portal/js/modules/info/contact/contactController", [ "./contactModule" ], function(module) {
    module.controller("ContactController", [ "$scope", "$state", "PortalInfoService", function($scope, $state, PortalInfoService) {
        $scope.contact = {}, $scope.send = function() {
            return PortalInfoService.sendContactRequest($scope.contact).success(function() {
                $state.go(".thanks");
            });
        }, $scope.gotoAuctionHouses = function() {
            $state.go("app.houses");
        };
    } ]);
}), define("portal/js/modules/info/contact/index", [ "./contactModule", "./contactController" ], function() {}), 
define("portal/js/modules/info/product/productModule", [ "angular" ], function(ng) {
    return ng.module("app.info.product", []);
}), define("portal/js/modules/info/product/productController", [ "./productModule" ], function(module) {
    module.controller("ProductController", [ "$scope", "$rootScope", "ArraysService", "PortalInfoService", "AppSiteWinodwsService", function($scope, $rootScope, ArraysService, PortalInfoService, AppSiteWinodwsService) {
        function init() {
            $scope.mainFeature = {}, PortalInfoService.getProductInfo().success(function(productInfo) {
                $scope.features = productInfo.features, ArraysService.setPropertyFromMapById($scope.features, "resources", productInfo.resources, {}), 
                angular.copy(ArraysService.getByKey($scope.features, "code", "main"), $scope.mainFeature);
            });
        }
        $scope.showDemo = function(demoCode) {
            AppSiteWinodwsService.showDemo(demoCode);
        }, init();
    } ]);
}), define("portal/js/modules/info/product/index", [ "./productModule", "./productController" ], function() {}), 
define("portal/js/modules/info/helpScreens/helpScreensModule", [ "angular" ], function(ng) {
    return ng.module("app.info.helpScreen", []);
}), define("portal/js/modules/info/helpScreens/helpScreensController", [ "./helpScreensModule" ], function(module) {
    module.controller("HelpScreensController", [ "$scope", "$rootScope", "$stateParams", "ArraysService", "PortalInfoService", "PortalAuthService", "SearchService", "AppSiteWinodwsService", function($scope, $rootScope, $stateParams, ArraysService, PortalInfoService, PortalAuthService, SearchService, AppSiteWinodwsService) {
        function setScreenshot() {
            $scope.sceenshot = $scope.data.helpScreensInfo.resources[$scope.helpScreen.id][$rootScope.currentLang];
        }
        function init() {
            $scope.code = {}, PortalInfoService.getHelpScreensInfo().success(function(helpScreensInfo) {
                $scope.data.helpScreensInfo = helpScreensInfo, $scope.helpScreen = ArraysService.getByKey(helpScreensInfo.screens, "code", $stateParams.code), 
                ArraysService.setPropertyFromMapById($scope.helpScreens, "resources", helpScreensInfo.resources, {}), 
                setScreenshot(), $rootScope.$on("i18n.languageChanged", setScreenshot);
            });
        }
        $scope.data = {}, $scope.showDemo = function(demoCode) {
            AppSiteWinodwsService.showDemo(demoCode);
        }, $scope.gotoSearch = function() {
            SearchService.gotoSearchScene($scope.data.searchToken);
        }, $scope.showRegistration = function() {
            PortalAuthService.showAuthModalOrScene("register");
        }, init();
    } ]);
}), define("portal/js/modules/info/helpScreens/index", [ "./helpScreensModule", "./helpScreensController" ], function() {}), 
define("portal/js/modules/info/index", [ "./infoScenesModule", "./contact/index", "./product/index", "./helpScreens/index" ], function() {}), 
define("portal/js/modules/auctions/auctionsModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions", [ "app.auctions.home", "app.auctions.catalogs", "app.auctions.lists" ]);
}), define("portal/js/modules/auctions/home/homeModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.home", []);
}), define("portal/js/modules/auctions/home/homeController", [ "./homeModule" ], function(module) {
    module.controller("HomeController", [ "$scope", "$rootScope", "$interval", "$window", "ArraysService", "I18nService", "ViewPortService", "SessionsService", "PortalInfoService", "SearchService", function($scope, $rootScope, $interval, $window, ArraysService, I18nService, ViewPortService, SessionsService, PortalInfoService, SearchService) {
        function setUpperMessage() {
            $scope.upperMessage = I18nService.getTextWithRegion("home_upper_message", {
                logo: '<img class="logo-text" src="images/logo/logoText.png" alt="Bidspirit" >'
            });
        }
        function adjustUpperPartHeight() {
            $scope.screenHeightClass = "normal", ViewPortService.clientHeight() < 650 && ($scope.screenHeightClass = "narrow-screen"), 
            $scope.featuresAsLinks = ViewPortService.clientWidth() >= 1200;
        }
        function init() {
            $scope.data.auctions = PortalInfoService.getAuctions(), setUpperMessage(), adjustUpperPartHeight();
        }
        $scope.data = {}, $scope.gotoSearch = function() {
            SearchService.gotoSearchScene($scope.data.searchToken);
        }, init(), $rootScope.$on("i18n.languageChanged", setUpperMessage), $rootScope.$on("settings.regionChanged", init), 
        $rootScope.$on("portalInfo.infoUpdated", init), $window.addEventListener("resize", adjustUpperPartHeight);
    } ]);
}), define("portal/js/modules/auctions/home/index", [ "./homeModule", "./homeController" ], function() {}), 
define("portal/js/modules/auctions/catalogs/catalogsModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.catalogs", [ "app.auctions.catalogs.list", "app.auctions.catalogs.lotPage", "app.auctions.catalogs.auctionInfo", "app.auctions.catalogs.search", "app.auctions.catalogs.lotElements" ]);
}), define("portal/js/modules/auctions/catalogs/catalogsService", [ "./catalogsModule" ], function(module) {
    module.factory("CatalogsService", function($q, $filter, ApiService, I18nService, StringsService, ArraysService, DateUtilsService, LocalStorageService, CloudinaryService, CatalogUtilsService) {
        function getNavState() {
            return mNavState;
        }
        function resetNavState(auction, items) {
            mNavState.data.auction = auction, mNavState.data.items = items, mNavState.pagesData.visibleItems = items, 
            mNavState.pagesData.itemsCount = items.length, mNavState.pagesData.currentPage = 1, 
            mNavState.filterData.category = "all", mNavState.filterData.phrase = "", mNavState.filterData.soldState = "all";
            var storedItemsPerPage = LocalStorageService.load("itemsPerPage");
            storedItemsPerPage && (mNavState.pagesData.itemsPerPage = 1 * storedItemsPerPage);
        }
        function updatePageItems() {
            var pagesData = mNavState.pagesData;
            pagesData.visibleItems && (pagesData.pageItems = CatalogUtilsService.getPageItems(pagesData.visibleItems, pagesData.currentPage, pagesData.itemsPerPage), 
            LocalStorageService.store("itemsPerPage", pagesData.itemsPerPage));
        }
        function getAuctionItems(auction) {
            var deferred = $q.defer();
            return mCurrentAuctionCache.auctionId == auction.id ? deferred.resolve(mCurrentAuctionCache.items) : ApiService.callApi({
                api: "/portal/getAuctionItems",
                data: {
                    auctionId: auction.id,
                    cacheVersion: auction.catalogInfo.cacheVersion
                },
                useCdnCache: !0
            }).success(function(items) {
                setCurrentItemsCache(auction, items), deferred.resolve(mCurrentAuctionCache.items);
            }), deferred.promise;
        }
        function setCurrentItemsCache(auction, items) {
            mCurrentAuctionCache.auctionId = auction.id, mCurrentAuctionCache.itemsById = {}, 
            mCurrentAuctionCache.itemsByIdInApp = {}, angular.forEach(items, function(item) {
                item.auction = auction, mCurrentAuctionCache.itemsById[item.id] = item, mCurrentAuctionCache.itemsByIdInApp[item.idInApp] = item;
            }), CatalogUtilsService.sortLots(items), mCurrentAuctionCache.items = items;
        }
        function getAuctionItem(auction, itemId) {
            var deferred = $q.defer();
            return getAuctionItems(auction).then(function(items) {
                mNavState.data.auction && mNavState.data.auction.id == auction.id || resetNavState(auction, items), 
                deferred.resolve(getAuctionItemFromCache(itemId));
            }), deferred.promise;
        }
        function getAuctionItemFromCache(itemId) {
            return mCurrentAuctionCache.itemsById[itemId];
        }
        function getItemByIdInApp(auction, itemIdInApp) {
            return mCurrentAuctionCache.auctionId == auction.id ? mCurrentAuctionCache.itemsByIdInApp[itemIdInApp] : null;
        }
        function getLotImageUrl(lot, imageInd, size, imageMode) {
            imageInd || (imageInd = 0);
            var imageName = lot.imagesList[imageInd];
            if (!imageName) return null;
            var catalogInfo = lot.auction.catalogInfo, imagePath = "v" + catalogInfo.imagesVersion + "/" + catalogInfo.imagesBase + "_" + lot.itemIndex + "_" + imageName;
            return CloudinaryService.getUrl(imagePath, {
                size: size,
                mode: imageMode
            });
        }
        function filterListWithPhrase(lotItems, phrase) {
            if (!phrase) return lotItems;
            for (var matches = [], result = [], i = 0; i < lotItems.length; i++) {
                var lotMatch = CatalogUtilsService.checkLotMatchPhrase(lotItems[i], phrase);
                lotMatch.score > 0 && matches.push(lotMatch);
            }
            ArraysService.sort(matches, "score", !0);
            for (var i = 0; i < matches.length; i++) matches[i].lot.score = matches[i].score, 
            result.push(matches[i].lot);
            return result;
        }
        function filterListWithCategory(lotItems, category) {
            for (var result = [], i = 0; i < lotItems.length; i++) {
                var lotItem = lotItems[i], lotCategory = lotItem.category[I18nService.getCurrentLang()];
                lotCategory == category && result.push(lotItem);
            }
            return result;
        }
        function filterListWithSoldState(lotItems, soldState) {
            for (var result = [], i = 0; i < lotItems.length; i++) {
                var lotItem = lotItems[i];
                ("all" == soldState || lotItem.soldLotBid && "sold" == soldState || !lotItem.soldLotBid && "unsold" == soldState) && result.push(lotItem);
            }
            return result;
        }
        function getBidLabel(lot) {
            var bid, labelKey = null, bidType = null;
            return lot.selfSoldLotBid ? (bidType = "self-sold", bid = lot.selfSoldLotBid, labelKey = "lot_self_sold_bid") : lot.soldLotBid ? (bidType = "sold", 
            bid = lot.soldLotBid, labelKey = "lot_sold_bid") : lot.selfAbsenteeBid && (bidType = "self-absentee", 
            bid = lot.selfAbsenteeBid, labelKey = "lot_self_absentee_bid"), bid ? {
                text: I18nService.getText(labelKey),
                price: I18nService.sumInCurrency(bid.price, lot.auction.catalogInfo.currency),
                type: bidType
            } : void 0;
        }
        function getCategoriesList(lotItems) {
            for (var catagoriesCount = {}, i = 0; i < lotItems.length; i++) {
                var category = lotItems[i].category[I18nService.getCurrentLang()];
                if (!StringsService.isBlank(category)) {
                    var count = catagoriesCount[category];
                    catagoriesCount[category] = count ? catagoriesCount[category] + 1 : 1;
                }
            }
            var catagories = [];
            for (category in catagoriesCount) {
                var count = catagoriesCount[category];
                catagories.push({
                    name: category + " (" + count + ")",
                    value: category
                });
            }
            return ArraysService.sort(catagories, "name"), catagories;
        }
        var mCurrentAuctionCache = {
            auctionId: null,
            items: null,
            itemsById: null,
            itemsByIdInApp: null
        }, mNavState = {
            data: {
                auction: null,
                items: null
            },
            pagesData: {
                currentPage: 1,
                itemsPerPage: 20
            },
            filterData: {
                category: "all"
            }
        };
        return {
            getAuctionItems: getAuctionItems,
            getAuctionItem: getAuctionItem,
            getAuctionItemFromCache: getAuctionItemFromCache,
            getItemByIdInApp: getItemByIdInApp,
            getLotImageUrl: getLotImageUrl,
            filterListWithPhrase: filterListWithPhrase,
            filterListWithCategory: filterListWithCategory,
            filterListWithSoldState: filterListWithSoldState,
            getCategoriesList: getCategoriesList,
            getNavState: getNavState,
            resetNavState: resetNavState,
            updatePageItems: updatePageItems,
            getBidLabel: getBidLabel
        };
    });
}), define("portal/js/modules/auctions/catalogs/catalogAccountService", [ "./catalogsModule" ], function(module) {
    module.factory("CatalogAccountService", function($q, $log, $rootScope, $modal, ArraysService, ApiService, PathsService, CatalogUtilsService, PortalAuthService, CatalogsService, PortalInfoService, AccountService) {
        function loadForAuction(auction) {
            var deferred = $q.defer(), currentUserId = $rootScope.currentUser ? $rootScope.currentUser.id : null;
            return isCurrentCacheAuction(auction) && currentUserId == mCachedCatalogAccountInfo.userId ? deferred.resolve() : (mCachedCatalogAccountInfo = null, 
            CatalogsService.getAuctionItems(auction).then(function() {
                ApiService.callApi("/account/getAccountInfoAndSoldLotsForAuction", {
                    auctionId: auction.id
                }).success(function(info) {
                    info.accountInfo && (info.accountInfo.soldLotsBids = ArraysService.getFilteredList(info.auctionSoldLotsBids, "userIdInApp", !0, info.accountInfo.userIdInApp), 
                    parseAccountInfo(auction, info.accountInfo)), AccountService.addBidsInfoToItems(auction, info.auctionSoldLotsBids, "soldLotBid"), 
                    mCachedCatalogAccountInfo = info, mCachedCatalogAccountInfo.auction = auction, mCachedCatalogAccountInfo.userId = currentUserId, 
                    auction.absenteeBidsEnabled = info.absenteeBidsEnabled, auction.house.increments = mCachedCatalogAccountInfo.increments, 
                    $rootScope.$broadcast("account.dataLoaded"), deferred.resolve();
                });
            })), deferred.promise;
        }
        function isCurrentCacheAuction(auction) {
            return mCachedCatalogAccountInfo && mCachedCatalogAccountInfo.auction.id == auction.id;
        }
        function parseAccountInfo(auction, accountInfo) {
            PortalAuthService.setCurrentHouseApprovalState(auction.houseId, accountInfo.approvalState), 
            AccountService.addBidsInfoToItems(auction, accountInfo.absenteeBids, "selfAbsenteeBid"), 
            AccountService.addBidsInfoToItems(auction, accountInfo.soldLotsBids, "selfSoldLotBid"), 
            AccountService.addFavoriteFlagToItems(auction, accountInfo.favoriteLotIdsInApp);
        }
        function reloadAccountInfo() {
            return mCachedCatalogAccountInfo ? (CatalogsService.getAuctionItems(mCachedCatalogAccountInfo.auction).then(function(items) {
                for (var i = 0; i < items.length; i++) AccountService.setBidInfoForItem(items[i], "selfAbsenteeBid", null), 
                AccountService.setBidInfoForItem(items[i], "selfSoldLotBid", null);
            }), loadForAuction(mCachedCatalogAccountInfo.auction)) : void 0;
        }
        var mCachedCatalogAccountInfo = null;
        return $rootScope.$on("auth.newSessionUser", reloadAccountInfo), {
            loadForAuction: loadForAuction
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/lotElementModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.catalogs.lotElements", []);
}), define("portal/js/modules/auctions/catalogs/lotElements/lotFilters", [ "./lotElementModule" ], function(module) {
    return module.filter("lotText", [ "LotTextsService", function(LotTextsService) {
        return function(lot, length) {
            return LotTextsService.getLotText(lot, length);
        };
    } ]).filter("lotImage", [ "CatalogsService", function(CatalogsService) {
        return function(lot, size) {
            return window.location.protocol + CatalogsService.getLotImageUrl(lot, 0, size);
        };
    } ]);
}), define("portal/js/modules/auctions/catalogs/lotElements/lotImageDirective", [ "./lotElementModule" ], function(module) {
    module.directive("bsLotImage", function($timeout, $rootScope, PathsService, StringsService, DomUtilsService, CatalogsService, LotTextsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "=",
                size: "@",
                imageInd: "=",
                asBg: "=",
                imageMode: "=",
                watchable: "=",
                loadedImageInfo: "=",
                moveInFrame: "="
            },
            link: function(scope, element) {
                function loadImage() {
                    function displayImage() {
                        scope.asBg ? element.css({
                            "background-image": "url(" + imageUrl + ")",
                            "background-repeat": "no-repeat"
                        }) : (scope.loadedImageSrc = imageUrl, setImgSize()), scope.stateVisible = !1;
                    }
                    imageLoaded = !1, scope.stateVisible = !1, scope.stateInfo = null, rect = null;
                    $rootScope.search;
                    $timeout(function() {
                        imageLoaded || scope.stateInfo || $rootScope.searchAgentRequest || (scope.stateInfo = "image_load", 
                        scope.stateVisible = !0);
                    }, 100), scope.loadedImageSrc = "", element.css({
                        "background-image": "none"
                    }), setImgAlt();
                    var imageUrl = CatalogsService.getLotImageUrl(scope.lot, scope.imageInd, scope.size, scope.imageMode);
                    imageUrl ? $rootScope.searchAgentRequest ? displayImage() : DomUtilsService.loadImage(imageUrl).then(function(imageInfo) {
                        !imageInfo.src != imageUrl && (imageLoaded = !0, loadedImageSize = imageInfo.size, 
                        displayImage(), scope.moveInFrame && setElementPositionInFrame(0, 0), element.addClass("loaded"), 
                        scope.loadedImageInfo && (scope.loadedImageInfo.loaded = !0, scope.loadedImageInfo.size = imageInfo.size));
                    }, function() {
                        setMissingImage();
                    }) : setMissingImage();
                }
                function getImgElement() {
                    return angular.element(element[0].querySelector("img"));
                }
                function setImgSize() {
                    if (scope.size) {
                        var img = getImgElement(), sizeParts = scope.size.split("x");
                        sizeParts[0] && (sizeParts[0] < 100 && (scope.smallImage = !0), img.css({
                            "max-width": sizeParts[0] + "px"
                        })), sizeParts[1] && img.css({
                            "max-height": sizeParts[1] + "px"
                        });
                    }
                }
                function setImgAlt() {
                    var img = getImgElement(), text = LotTextsService.getLotText(scope.lot, 50).split("...")[0];
                    text = StringsService.stripTags(text), img.attr({
                        alt: text
                    });
                }
                function setMissingImage() {
                    $rootScope.searchAgentRequest || (scope.stateInfo = scope.smallImage ? "image_missing" : "image_available_soon", 
                    scope.stateVisible = !0);
                }
                function getRatio(offset, size) {
                    var margin = 50, ratio = Math.round((100 + margin) * offset / size) - margin / 2;
                    return ratio = Math.max(0, ratio), ratio = Math.min(100, ratio), ratio + "%";
                }
                function moveBg(e) {
                    rect || (rect = element[0].getBoundingClientRect());
                    var offsetX = (e.pageX || e.targetTouches[0].pageX) - rect.left, offsetY = (e.pageY || e.targetTouches[0].pageY) - rect.top, ratioX = getRatio(offsetX, rect.width), ratioY = getRatio(offsetY, rect.height);
                    setElementPositionInFrame(ratioX, ratioY), e.preventDefault();
                }
                function setElementPositionInFrame(ratioX, ratioY) {
                    var xPos = loadedImageSize.width < $rootScope.viewPort.innerWidth ? "center" : ratioX, yPos = loadedImageSize.height < $rootScope.viewPort.innerHeight - 200 ? "center" : ratioY;
                    element.css({
                        backgroundPosition: xPos + " " + yPos
                    });
                }
                var rect = null, loadedImageSize = null;
                scope.watchable ? (scope.$watch("imageInd", function() {
                    loadImage();
                }), scope.$watch("imageMode", function() {
                    loadImage();
                })) : loadImage(), scope.moveInFrame && (element.bind("touchmove", moveBg), element.bind("mousedown", moveBg));
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/lotImage")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/lotPriceDirective", [ "./lotElementModule" ], function(module) {
    module.directive("bsLotPrice", function($timeout, PathsService, I18nService, DomUtilsService, CatalogsService, StructuredDataService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "=",
                maxWidth: "=",
                breakOnRow: "=",
                singleRow: "="
            },
            link: function(scope) {
                var lot = scope.lot, currency = lot.auction.catalogInfo.currency;
                lot.auction.catalogInfo.startPriceHidden ? (scope.showStartPrice = !1, scope.showNoPrice = !1, 
                lot.estimatedPrice ? (scope.showEstimatedPrice = !0, scope.estimatedPrice = StructuredDataService.getPriceStructuredDataTag(lot.estimatedPrice, currency)) : scope.showEstimatedPrice = !1) : (lot.startPrice ? (scope.showStartPrice = !0, 
                scope.showNoPrice = !1, scope.startPrice = I18nService.sumInCurrency(lot.startPrice, currency), 
                scope.startPrice = StructuredDataService.getPriceStructuredDataTag(scope.startPrice, currency)) : (scope.showStartPrice = !1, 
                scope.showNoPrice = !0), lot.estimatedPrice && !scope.singleRow && (scope.showEstimatedPrice = !0, 
                scope.estimatedPrice = lot.estimatedPrice, scope.startPrice || (scope.estimatedPrice = StructuredDataService.getPriceStructuredDataTag(scope.estimatedPrice, currency))));
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/lotPrice")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/lotTextsService", [ "./lotElementModule" ], function(module) {
    module.factory("LotTextsService", function(StringsService, I18nService) {
        function trimmedItemParts(item, maxLen, noHtml) {
            {
                var artist = I18nService.getLangField(item.artist), name = I18nService.getLangField(item.name), description = I18nService.getLangField(item.description);
                I18nService.getLangField(item.details);
            }
            (noHtml || maxLen < (description + " " + artist + " " + name).length) && (description = StringsService.stripTags(description)), 
            name && 0 != description.indexOf(name) || (name = description, description = "");
            var descMaxLen = maxLen ? maxLen - (artist + " " + name).length : description.length, nameMaxLen = maxLen ? maxLen - artist.length : name.length;
            return name = StringsService.trimToWord(name, nameMaxLen), description = StringsService.trimToWord(description, descMaxLen), 
            {
                name: name,
                artist: artist,
                description: description
            };
        }
        function getLotText(lot, length) {
            var text = "", trimmedParts = trimmedItemParts(lot, length, !0);
            return trimmedParts.description && (text = trimmedParts.description), trimmedParts.name && (text && !trimmedParts.name.match(/\.$/) && (trimmedParts.name = trimmedParts.name + "."), 
            text = "<span class='lot-name'>" + trimmedParts.name + " </span>" + text), trimmedParts.artist && (text = "<span class='lot-artist'>" + trimmedParts.artist + "</span>" + (text ? " - " + text : "")), 
            text;
        }
        return {
            getLotText: getLotText
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/lotBidFormDirective", [ "./lotElementModule" ], function(module) {
    module.directive("bsLotBidForm", function($timeout, $rootScope, $state, PathsService, DialogsService, I18nService, PopupsService, PortalInfoService, PortalAuthService, CatalogsService, BidRulesService, AccountService, CatalogAccountService) {
        return mRecentBidInputValue = {}, {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "="
            },
            link: function(scope) {
                function showBidConfirmation() {
                    PopupsService.showPopup({
                        contentInclude: "auctions/catalogs/lotPage/common/confirmation/confirmBid",
                        code: "confirmBid",
                        title: I18nService.getText("confirm_bid_title"),
                        data: {
                            lot: scope.lot,
                            bidPrice: scope.model.bidPrice,
                            hideTopBackButton: !0
                        }
                    });
                }
                function handleError(errorResponse) {
                    var house = scope.lot.auction.house;
                    "LOT_CLOSED_FOR_BIDDING" == errorResponse.errorKey ? $rootScope.showGeneralError("bid_error_closed_for_bidding") : "AUCTION_CLOSED_FOR_BIDDING" == errorResponse.errorKey ? ($rootScope.showGeneralError("bid_error_closed_for_bidding"), 
                    scope.lot.auction.absenteeBidsEnabled = !1, init()) : "USER_NOT_FOUND" == errorResponse.errorKey ? (PortalAuthService.setCurrentHouseApprovalState(house.id, "NOT_REGISTERED"), 
                    AccountService.showApprovalPopup(house)) : "USER_NOT_APPROVED" == errorResponse.errorKey ? (PortalAuthService.setCurrentHouseApprovalState(house.id, errorResponse.approvalState), 
                    AccountService.showApprovalPopup(house)) : PopupsService.showHouseConnectivityErrorPopup(house);
                }
                function initLabel() {
                    scope.bidLabel = CatalogsService.getBidLabel(scope.lot);
                }
                function initMode() {
                    scope.lot.auction.catalogOnly ? scope.mode = "disabled" : scope.lot.soldLotBid ? scope.mode = "sold" : "READY" == scope.lot.auction.state ? scope.mode = 0 == scope.lot.auction.absenteeBidsEnabled ? "disabled" : scope.lot.selfAbsenteeBid ? "existing" : "new" : "RUNNING" == scope.lot.auction.state ? scope.mode = 0 == scope.lot.auction.absenteeBidsEnabled ? "disabled" : "running" : "ENDED" == scope.lot.auction.state && (scope.mode = "ended");
                }
                function loadRecentBidInputValue() {
                    mRecentBidInputValue.lotId == scope.lot.id && new Date().getTime() < mRecentBidInputValue.time + 12e4 && "new" == scope.mode && (scope.model.bidPrice = mRecentBidInputValue.price);
                }
                function init() {
                    initMode(), initLabel(), loadRecentBidInputValue();
                }
                scope.model = {}, scope.tryToPlaceBid = function() {
                    var house = scope.lot.auction.house;
                    AccountService.validateRegisteredInHouseAndThen(house, {}, function() {
                        BidRulesService.validBid(scope.lot, scope.model.bidPrice) && showBidConfirmation(house, scope.lot, scope.model.bidPrice);
                    });
                }, scope.removeBidIfConfirmed = function() {
                    var bid = scope.lot.selfAbsenteeBid;
                    if (bid) return DialogsService.showConfirm({
                        message: "bid_confirm_remove",
                        title: "alert_notice_title",
                        params: {
                            lotIndex: scope.lot.itemIndex,
                            price: I18nService.sumInCurrency(bid.price, scope.lot.auction.catalogInfo.currency)
                        }
                    }).then(function(confirmed) {
                        confirmed && AccountService.removeAbsenteeBid(scope.lot.auction.houseId, scope.lot).success(function(response) {
                            response.success ? (scope.model.bidPrice = null, scope.mode = "new", scope.bidLabel = null) : handleError(response);
                        }).error(handleError);
                    });
                }, scope.setEditMode = function() {
                    scope.mode = "edit", scope.model.bidPrice = scope.lot.selfAbsenteeBid.price, scope.bidLabel = null;
                }, scope.cancelEdit = function() {
                    scope.mode = "existing", scope.model.bidPrice = null, scope.bidLabel = CatalogsService.getBidLabel(scope.lot);
                }, scope.getDisabledMessage = function() {
                    var disabledMessageKey, houseParams = PortalInfoService.getHouseTextParams(scope.lot.auction.house);
                    return disabledMessageKey = scope.lot.auction.catalogOnly ? "bid_form_catalog_only" : "bid_form_disabled", 
                    I18nService.getText(disabledMessageKey, houseParams);
                }, scope.saveRecentBidInputValue = function() {
                    isNaN(scope.model.bidPrice) && "" != scope.model.bidPrice || (mRecentBidInputValue = {
                        lotId: scope.lot.id,
                        price: scope.model.bidPrice,
                        time: new Date().getTime()
                    });
                }, init(), scope.$watch("lot.lastBidUpdate", init), $rootScope.$on("account.dataLoaded", init), 
                $rootScope.$on("i18n.languageChanged", init), $rootScope.$on("auth.newSessionUser", function() {
                    CatalogAccountService.loadForAuction(scope.lot.auction);
                });
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/bidForm")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/confirmBidController", [ "./lotElementModule" ], function(module) {
    module.controller("ConfirmBidController", [ "$scope", "$rootScope", "$window", "StringsService", "I18nService", "AnalyticsService", "PortalAuthService", "PortalInfoService", "PopupsService", "AccountService", function($scope, $rootScope, $window, StringsService, I18nService, AnalyticsService, PortalAuthService, PortalInfoService, PopupsService, AccountService) {
        function handleError(errorResponse) {
            var house = $scope.lot.auction.house;
            "LOT_CLOSED_FOR_BIDDING" == errorResponse.errorKey ? $rootScope.showGeneralError("bid_error_closed_for_bidding") : "AUCTION_CLOSED_FOR_BIDDING" == errorResponse.errorKey ? ($rootScope.showGeneralError("bid_error_closed_for_bidding"), 
            scope.lot.auction.absenteeBidsEnabled = !1) : "USER_NOT_APPROVED" == errorResponse.errorKey ? (PortalAuthService.setCurrentHouseApprovalState(house.id, errorResponse.approvalState), 
            AccountService.showApprovalPopup(house)) : $rootScope.showGeneralError();
        }
        $scope.init = function() {
            $scope.options.buttons = [ {
                text: "confrim_bid_dont_agree",
                type: "warning",
                isCloseButton: !0
            }, {
                text: "confrim_bid_agree",
                action: $scope.submitBid
            } ], $scope.lot = $scope.options.data.lot, $scope.house = $scope.lot.auction.house, 
            $scope.bidPrice = $scope.options.data.bidPrice, $scope.initialized = !0;
        }, $scope.submitBid = function() {
            return AccountService.placeAbsenteeBid($scope.house.id, $scope.lot, $scope.bidPrice).success(function(response) {
                response.errorKey ? handleError(response) : (PortalAuthService.setCurrentHouseApprovalState($scope.house.id, "APPROVED"), 
                AnalyticsService.trackEvent("catalogAction", "bidInHouse", "absentee bid in house " + $scope.house.code), 
                $scope.options.isModal ? $scope.$close() : $window.history.back());
            }).error(function(response) {
                handleError(response);
            });
        }, $scope.showTerms = function() {
            PopupsService.showHouseTerms($scope.lot.auction.house);
        };
    } ]);
}), define("portal/js/modules/auctions/catalogs/lotElements/lotBadgeDirective", [ "./lotElementModule" ], function(module) {
    module.directive("bsLotBadge", function($rootScope, PathsService, I18nService, CatalogsService, StringsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "="
            },
            link: function(scope, element) {
                function update() {
                    var bidLabel = CatalogsService.getBidLabel(scope.lot);
                    scope.lot.houseBadge ? (scope.badgeType = "house", scope.text = scope.lot.houseBadge.text, 
                    StringsService.stripTags(scope.text).length > 25 && (scope.longText = !0), scope.visible = !0, 
                    element.css({
                        "background-color": scope.lot.houseBadge.color || "#aaaaaa"
                    }), bidLabel && (scope.badgeType += " with-bid", scope.text += "<br><b>" + bidLabel.text + ": " + bidLabel.price + "</b>")) : bidLabel && (scope.badgeType = bidLabel.type, 
                    scope.text = bidLabel.text + ": " + bidLabel.price, scope.visible = !0);
                }
                scope.lot.expireTime && $rootScope.devMode && element.css({
                    top: "22px"
                }), scope.$watch("lot.lastBidUpdate", update), $rootScope.$on("i18n.languageChanged", update);
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/lotBadge")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/lotExpirationDirective", [ "./lotElementModule" ], function(module) {
    module.directive("bsLotExpiration", function($rootScope, PathsService, I18nService, SettingsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "="
            },
            link: function(scope, element) {
                function updateDisplay() {
                    var timeLeft = SettingsService.timeUntil(scope.lot.expireTime);
                    0 > timeLeft || scope.lot.soldLotBid ? (scope.expirationState = "past", scope.text = I18nService.getText("lot_expired")) : (scope.text = I18nService.getTimeLeftDisplay(scope.lot.expireTime), 
                    6e4 > timeLeft && (scope.expirationState = "expires-soon"));
                }
                $rootScope.devMode ? (updateDisplay(), $rootScope.$on("i18n.languageChanged", updateDisplay)) : element.css({
                    display: "none"
                });
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/lotExpiration")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/lotFavoriteFlagDirective", [ "./lotElementModule" ], function(module) {
    module.directive("bsLotFavoriteFlag", function($rootScope, $timeout, PathsService, AccountService, PortalAuthService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "="
            },
            link: function(scope) {
                var clearJustSetTimet = null;
                scope.toggleFavorite = function() {
                    $timeout.cancel(clearJustSetTimet);
                    var user = PortalAuthService.validateUserLoggedIn();
                    if (user) {
                        var isFavorite;
                        isFavorite = scope.lot.isFavorite ? !1 : !0, AccountService.setFavoriteItem(scope.lot.auction.house, scope.lot, isFavorite).then(function() {
                            scope.justChanged = !0, clearJustSetTimet = $timeout(function() {
                                scope.justChanged = !1;
                            }, 2e3);
                        });
                    }
                }, scope.onMouseOut = function() {
                    scope.justChanged = !1, scope.lot.onFavoriteFlag = !1;
                }, scope.onMouseOver = function() {
                    scope.justChanged = !1, scope.lot.onFavoriteFlag = !0;
                };
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/lotFavoriteFlag")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotElements/index", [ "./lotElementModule", "./lotFilters", "./lotImageDirective", "./lotPriceDirective", "./lotTextsService", "./lotBidFormDirective", "./confirmBidController", "./lotBadgeDirective", "./lotExpirationDirective", "./lotFavoriteFlagDirective" ], function() {}), 
define("portal/js/modules/auctions/catalogs/auctionInfo/auctionInfoModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.catalogs.auctionInfo", []);
}), define("portal/js/modules/auctions/catalogs/auctionInfo/auctionInfoDirective", [ "./auctionInfoModule" ], function(module) {
    module.directive("bsAuctionInfo", function(PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auction: "="
            },
            link: function(scope, element) {
                angular.element(element[0].querySelector(".auction-texts")).css({
                    width: element[0].offsetWidth - 220 + "px"
                });
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/auctionInfo")
        };
    });
}), define("portal/js/modules/auctions/catalogs/auctionInfo/registrationPromotionDirective", [ "./auctionInfoModule" ], function(module) {
    module.directive("bsHouseRegisrationPromotion", function($rootScope, I18nService, PathsService, AppSiteWinodwsService, PortalInfoService, PortalAuthService, AccountService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auction: "=",
                house: "="
            },
            link: function(scope) {
                function updateUserState() {
                    scope.auction && (house = scope.auction.house), house && (scope.userState = PortalAuthService.getHouseApprovalState(house.id));
                }
                scope.requestInProgress = !1;
                var house = scope.house;
                scope.openAuctionSite = function() {
                    AppSiteWinodwsService.openAuctionSiteWindow(auction);
                }, updateUserState(), $rootScope.$on("auth.authStateChanged", updateUserState), 
                $rootScope.$on("auth.newSessionUser", updateUserState), $rootScope.$on("auth.houseApprovalChanged", updateUserState), 
                scope.$watch("auction", updateUserState), scope.setAuthScene = function(authScene) {
                    PortalAuthService.showAuthModalOrScene(authScene);
                }, scope.requestApproval = function() {
                    "COMPLETE" != $rootScope.currentUser.registrationStage ? PortalAuthService.showAuthModalOrScene("warning") : house.requestUserStateIdForApproval ? AccountService.showApprovalPopup(house) : scope.requestInProgress || (scope.requestInProgress = !0, 
                    AccountService.requestApprovalFromHouse(house).success(function() {
                        scope.requestInProgress = !1;
                    }).error(function() {
                        scope.requestInProgress = !1, $rootScope.showGeneralError();
                    }));
                }, scope.text = function(key) {
                    return I18nService.getText(scope.auction && scope.auction.absenteeBidsOnly ? key + "_absentee_only" : key);
                }, scope.houseParams = PortalInfoService.getHouseTextParams(house);
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/elements/registrationPromotion")
        };
    });
}), define("portal/js/modules/auctions/catalogs/auctionInfo/auctionStructuredDataDirective", [ "./auctionInfoModule" ], function(module) {
    module.directive("bsAuctionStructuredData", function(StructuredDataService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auction: "="
            },
            link: function(scope, element) {
                var auction = scope.auction;
                if (!auction.unknownExactDate && !auction.hideTime && "PENDING" != auction.state && auction.catalogInfo) {
                    var html = '<script type="application/ld+json">' + JSON.stringify(StructuredDataService.getAuctionStructuredData(scope.auction), null, 2) + "</script>";
                    element.html(html);
                }
            }
        };
    });
}), define("portal/js/modules/auctions/catalogs/auctionInfo/index", [ "./auctionInfoModule", "./auctionInfoDirective", "./registrationPromotionDirective", "./auctionStructuredDataDirective" ], function() {}), 
define("portal/js/modules/auctions/catalogs/list/catalogListModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.catalogs.list", []);
}), define("portal/js/modules/auctions/catalogs/list/catalogListController", [ "./catalogListModule" ], function(module) {
    module.controller("CatalogListController", [ "$rootScope", "$scope", "$timeout", "$state", "$stateParams", "AnalyticsService", "ArraysService", "LocalStorageService", "I18nService", "DomUtilsService", "CatalogUtilsService", "StructuredDataService", "PortalInfoService", "CatalogsService", "CatalogAccountService", function($rootScope, $scope, $timeout, $state, $stateParams, AnalyticsService, ArraysService, LocalStorageService, I18nService, DomUtilsService, CatalogUtilsService, StructuredDataService, PortalInfoService, CatalogsService, CatalogAccountService) {
        function loadNavStateInfo(navState) {
            navState.pagesData.currentPage = $stateParams.page ? $stateParams.page : 1, $scope.data = navState.data, 
            $scope.filterData = navState.filterData, $scope.pagesData = navState.pagesData, 
            $scope.currency = navState.data.auction.catalogInfo.currency;
            var phrase = CatalogsService.getNavState().filterData.phrase;
            $timeout(function() {
                CatalogsService.getNavState().filterData.phrase = phrase;
            }, 100), setScroll(), udpateDocumentInfo();
        }
        function udpateDocumentInfo() {
            var auction = $scope.data.auction, houseName = I18nService.getLangField(auction.house.details.name);
            document.title = "bidspirit - " + houseName;
            var auctionStructuredData = StructuredDataService.getAuctionStructuredData(auction), description = houseName + " - " + auctionStructuredData.name;
            DomUtilsService.setMetaTag("name", "description", description), DomUtilsService.setMetaTag("property", "og:description", description), 
            DomUtilsService.setMetaTag("name", "twitter:description", description), DomUtilsService.setMetaTag("property", "og:image", auctionStructuredData.image), 
            DomUtilsService.setMetaTag("name", "twitter:image", "https:" + auctionStructuredData.image), 
            DomUtilsService.setMetaTag("name", "twitter:card", "product"), DomUtilsService.setMetaTag("name", "twitter:data1", CatalogUtilsService.getAuctionTimeDisplay(auction, !1)), 
            DomUtilsService.setMetaTag("name", "twitter:label1", I18nService.getText("auction_date"));
        }
        function setScroll() {
            if (0 == previousState.url.indexOf("lotPage")) {
                var lotId = previousState.args.lotId;
                $scope.pagesData.currentPage = CatalogUtilsService.getLotPage($scope.pagesData.visibleItems, lotId, $scope.pagesData.itemsPerPage), 
                $scope.scrollTo = lotId;
            } else scrollToTop();
        }
        function scrollToTop() {
            $rootScope.viewPort.pcMedia ? window.scrollTo(0, 0) : ($scope.scrollToPagination = !0, 
            $timeout(function() {
                $scope.scrollToPagination = !1;
            }, 100));
        }
        function lastSceneIsOfPageFromThisAuction(navState) {
            if (!navState.data.auction) return !1;
            if (navState.data.auction.id != $stateParams.auctionId) return !1;
            var previusStateUrl = previousState.url;
            return 0 == previusStateUrl.indexOf("catalog") || 0 == previusStateUrl.indexOf("lotPage") ? !0 : !1;
        }
        function init() {
            previousState = $rootScope.$previousState;
            var navState = CatalogsService.getNavState();
            if (lastSceneIsOfPageFromThisAuction(navState)) $scope.displayeItemsLoader = !0, 
            loadNavStateInfo(navState), $timeout(function() {
                $scope.displayeItemsLoader = !1;
            }, 400); else {
                var auction = PortalInfoService.getAuction($stateParams.auctionId);
                auction ? ($scope.auction = auction, CatalogsService.getAuctionItems(auction).then(function(items) {
                    CatalogsService.resetNavState(auction, items), loadNavStateInfo(navState), CatalogAccountService.loadForAuction(auction), 
                    CatalogsService.updatePageItems();
                }), trackEvents()) : $state.go("app.home");
            }
            watchNavParams();
        }
        function onNavParamChange() {
            CatalogsService.updatePageItems(), scrollToTop();
        }
        function watchNavParams() {
            $scope.$watch("pagesData.itemsPerPage", onNavParamChange), $scope.$watch("pagesData.currentPage", onNavParamChange), 
            $scope.$watch("filterData.lastSearchTime", onNavParamChange);
        }
        function trackEvents() {
            var auction = $scope.auction;
            AnalyticsService.trackDailyUniqueEvent("catalogAction", "viewItemsListOfHouse", "Catalog viewed in house:" + auction.house.code), 
            AnalyticsService.trackDailyUniqueEvent("catalogAction", "viewItemsListOfAuction", "Catalog viewed in hose:" + auction.house.code + ", auction:" + auction.date + " " + auction.time);
        }
        var previousState = null;
        init();
    } ]);
}), define("portal/js/modules/auctions/catalogs/list/catalogListItemsDirective", [ "./catalogListModule" ], function(module) {
    module.directive("bsCatalogListItems", function(CatalogsService, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/list/catalogItems")
        };
    });
}), define("portal/js/modules/auctions/catalogs/list/catalogListFilterDirective", [ "./catalogListModule" ], function(module) {
    module.directive("bsCatalogListFilter", function($rootScope, $timeout, PathsService, I18nService, CatalogsService) {
        return {
            restrict: "E",
            replace: !0,
            link: function(scope, element) {
                function searchIfChanged() {
                    var phrase = scope.filterData.phrase;
                    phrase != mLastSearchPhrase && (mLastSearchPhrase = phrase, phrase && (scope.filterData.category = "all"), 
                    scope.pagesData.foundItems = CatalogsService.filterListWithPhrase(scope.data.items, phrase), 
                    scope.applySoldStateFilter());
                }
                function setCategories() {
                    var categories = CatalogsService.getCategoriesList(scope.data.items);
                    categories.length > 0 && categories.unshift({
                        value: "all",
                        name: I18nService.getText("catalog_filter_all_categories")
                    }), scope.filterData.categories = categories;
                }
                var mLastSearchPhrase = "", mTimeout = null;
                element.bind("keydown keypress", function(event) {
                    13 == event.which && element.find("input")[0].blur();
                }), scope.searchAfterDelay = function() {
                    $timeout.cancel(mTimeout), mTimeout = $timeout(searchIfChanged, 150);
                }, scope.filterByCategory = function() {
                    var category = scope.filterData.category;
                    "all" != category ? (scope.filterData.phrase = "", scope.pagesData.foundItems = CatalogsService.filterListWithCategory(scope.data.items, category)) : scope.filterData.phrase ? scope.searchAfterDelay() : scope.pagesData.foundItems = scope.data.items, 
                    scope.applySoldStateFilter();
                }, scope.applySoldStateFilter = function() {
                    scope.pagesData.visibleItems = CatalogsService.filterListWithSoldState(scope.pagesData.foundItems || scope.data.items, scope.filterData.soldState), 
                    scope.pagesData.itemsCount = scope.pagesData.visibleItems.length, scope.pagesData.currentPage = 1, 
                    scope.filterData.lastSearchTime = new Date().getTime();
                }, $rootScope.$on("i18n.languageChanged", function() {
                    setCategories();
                }), setCategories();
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/list/catalogFilterPanel")
        };
    });
}), define("portal/js/modules/auctions/catalogs/list/catalogListPaginationDirective", [ "./catalogListModule" ], function(module) {
    module.directive("bsCatalogListPagination", function($timeout, $rootScope, $stateParams, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                pagesData: "=",
                positionInPage: "=",
                hrefPages: "=",
                onCurrentPageChange: "&"
            },
            link: function(scope, element) {
                function adjustWidth() {
                    var parent = element.parent()[0];
                    if (parent) {
                        var parentWidth = parent.offsetWidth, availableWidth = Math.min(850, parentWidth);
                        parentWidth > 800 && "upper" == scope.positionInPage && $rootScope.viewPort.pcMedia ? (scope.availableWidth = availableWidth - 350, 
                        scope.lifted = !0) : (scope.availableWidth = availableWidth - 50, scope.lifted = !1, 
                        element.removeClass("lifted"));
                    }
                    element.css({
                        width: scope.availableWidth + "px"
                    });
                }
                adjustWidth(), element.addClass(scope.positionInPage), $rootScope.$on("viewPort.windowSizeChanged", function() {
                    adjustWidth(), $timeout(adjustWidth, 100);
                });
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/list/catalogPagination")
        };
    });
}), define("portal/js/modules/auctions/catalogs/list/index", [ "./catalogListModule", "./catalogListController", "./catalogListItemsDirective", "./catalogListFilterDirective", "./catalogListPaginationDirective" ], function() {}), 
define("portal/js/modules/auctions/catalogs/search/searchModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.catalogs.search", []);
}), define("portal/js/modules/auctions/catalogs/search/searchService", [ "./searchModule" ], function(module) {
    module.factory("SearchService", function($q, $rootScope, $state, ApiService, I18nService, StringsService, ArraysService, PortalInfoService) {
        function searchAllCatalogs(token, time, limit, page) {
            var deferred = $q.defer();
            return ApiService.callApi("/portal/searchItems/", {
                token: token,
                time: time,
                region: $rootScope.currentRegion,
                lang: I18nService.getCurrentLang(),
                limit: limit,
                skip: (page - 1) * limit,
                allowHidden: $rootScope.devMode
            }).success(function(response) {
                setSoldLotsBids(response.results, response.soldLots);
                var allAuctionsFound = setItemsAuctions(response.results);
                allAuctionsFound && !mTriedToLoadAll ? deferred.resolve(response) : (mTriedToLoadAll = !0, 
                PortalInfoService.loadForRegion($rootScope.currentRegion, !0).then(function() {
                    setItemsAuctions(response.results), deferred.resolve(response);
                }));
            }), deferred.promise;
        }
        function setItemsAuctions(items) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.auction = PortalInfoService.getAuction(item.auctionId), !item.auction) return !1;
            }
            return !0;
        }
        function setSoldLotsBids(items, soldLotBids) {
            if (soldLotBids) {
                for (var bidsMap = {}, i = 0; i < soldLotBids.length; i++) {
                    var bid = soldLotBids[i];
                    bidsMap[bid.lotId] = bid;
                }
                for (var i = 0; i < items.length; i++) {
                    var item = items[i], soldBid = bidsMap[item.id];
                    soldBid && (item.soldLotBid = soldBid);
                }
            }
        }
        function getLastSearchInfo() {
            return mLastSearchInfo;
        }
        function getNewSearchInfo() {
            return mNewSearchInfo;
        }
        function gotoSearchScene(token) {
            mNewSearchInfo.token = token, $state.go("app.search");
        }
        var mLastSearchInfo = {}, mNewSearchInfo = {}, mTriedToLoadAll = !1;
        return {
            searchAllCatalogs: searchAllCatalogs,
            gotoSearchScene: gotoSearchScene,
            getLastSearchInfo: getLastSearchInfo,
            getNewSearchInfo: getNewSearchInfo
        };
    });
}), define("portal/js/modules/auctions/catalogs/search/searchController", [ "./searchModule" ], function(module) {
    module.controller("SearchController", [ "$scope", "$timeout", "$state", "CatalogUtilsService", "AnalyticsService", "ArraysService", "I18nService", "LogService", "StringsService", "AppSiteWinodwsService", "AccountService", "SearchService", "PortalInfoService", function($scope, $timeout, $state, CatalogUtilsService, AnalyticsService, ArraysService, I18nService, LogService, StringsService, AppSiteWinodwsService, AccountService, SearchService) {
        function getSearchResultsForCurrentPage() {
            return mSearchInfo.searchTime = new Date().getTime(), $scope.loadState = "loading", 
            SearchService.searchAllCatalogs($scope.data.token, $scope.data.searchTime, $scope.pagesData.itemsPerPage, $scope.pagesData.currentPage);
        }
        function trackSearch(token) {
            $scope.data.lastTrackedToken != token && (AnalyticsService.trackEvent("catalogAction", "search", "search for token '" + token + "'"), 
            $scope.data.lastTrackedToken = token);
        }
        function setItems(items) {
            angular.forEach(items, function(item) {
                item.auction && (item.houseBadge = {
                    text: StringsService.trimToWord(I18nService.getLangField(item.auction.house.details.name), 20) + " <span dir='ltr'>(" + CatalogUtilsService.getAuctionTimeDisplay(item.auction, !0, !0) + ")</span>",
                    color: item.auction.house.details.brandColor
                });
            }), $scope.pagesData.pageItems = ArraysService.filteredByNonEmpty(items, "auction").slice(0, $scope.pagesData.itemsPerPage), 
            $scope.loadState = "loaded";
        }
        function initToken(token, reloadSearch) {
            $timeout(function() {
                $scope.data.token = token, reloadSearch && $scope.doSearch();
            }, 100);
        }
        function init() {
            mSearchInfo = SearchService.getLastSearchInfo();
            var newSearchInfo = SearchService.getNewSearchInfo();
            $scope.loadState = "idle", $scope.scrollToPagination = !1, null != newSearchInfo.token ? (initToken(newSearchInfo.token, !0), 
            mSearchInfo.data = $scope.data, mSearchInfo.pagesData = $scope.pagesData) : new Date().getTime() - mSearchInfo.searchTime < 6e5 ? ($scope.data = mSearchInfo.data, 
            $scope.pagesData = mSearchInfo.pagesData, $scope.scrollTo = mSearchInfo.lastLot ? mSearchInfo.lastLot.id : null, 
            $scope.loadState = "loaded", initToken($scope.data.token, !1)) : (mSearchInfo.data = $scope.data, 
            mSearchInfo.pagesData = $scope.pagesData), newSearchInfo.token = null;
        }
        mSearchInfo = null, $scope.data = {
            searchTime: "FUTURE"
        }, $scope.inputFocused = !1, $scope.pagesData = {
            itemsPerPage: 20,
            currentPage: 1
        }, $scope.doSearch = function() {
            $scope.data.token && ($scope.pagesData.currentPage = 1, $scope.pagesData.itemsCount = 0, 
            $scope.searching = !0, LogService.logEvent({
                search: $scope.data.token,
                time: $scope.data.searchTime
            }), trackSearch($scope.data.token), getSearchResultsForCurrentPage().then(function(response) {
                setItems(response.results), $scope.searching = !1, $scope.pagesData.itemsCount = response.count, 
                $scope.data.searchedToken = $scope.data.token;
            }), document.activeElement.blur());
        }, $scope.onPageChange = function() {
            $scope.scrollToPagination = !1, getSearchResultsForCurrentPage().then(function(response) {
                setItems(response.results), $timeout(function() {
                    $scope.scrollToPagination = !0;
                }, 100);
            });
        }, $scope.gotoLot = function(lot) {
            mSearchInfo.lastLot = lot;
            var auction = lot.auction;
            auction.timedAuction && "ENDED" != auction.state ? AccountService.validateRegisteredInHouseAndThen(auction.house, {
                message: "auth_timed_auction"
            }, function() {
                AppSiteWinodwsService.openAuctionSiteWindow(auction, !1, lot);
            }) : $state.go("app.lotPage", {
                source: "search",
                auctionId: lot.auctionId,
                lotId: lot.id
            });
        }, init();
    } ]);
}), define("portal/js/modules/auctions/catalogs/search/index", [ "./searchModule", "./searchService", "./searchController" ], function() {}), 
define("portal/js/modules/auctions/catalogs/lotPage/lotPageModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.catalogs.lotPage", []);
}), define("portal/js/modules/auctions/catalogs/lotPage/lotPageController", [ "./lotPageModule" ], function(module) {
    module.controller("LotPageController", [ "$scope", "$state", "$stateParams", "$modal", "$rootScope", "$timeout", "$window", "AnalyticsService", "StringsService", "PathsService", "I18nService", "PortalAuthService", "PortalInfoService", "DomUtilsService", "CatalogUtilsService", "StructuredDataService", "PopupsService", "AccountService", "CatalogsService", "CatalogAccountService", "MyAccountService", function($scope, $state, $stateParams, $modal, $rootScope, $timeout, $window, AnalyticsService, StringsService, PathsService, I18nService, PortalAuthService, PortalInfoService, DomUtilsService, CatalogUtilsService, StructuredDataService, PopupsService, AccountService, CatalogsService, CatalogAccountService, MyAccountService) {
        function initTexts() {
            var item = $scope.data.item;
            if (item) {
                var artist = I18nService.getLangField(item.artist), name = I18nService.getLangField(item.name), description = I18nService.getLangField(item.description), details = I18nService.getLangField(item.details), title = "", lotDesc = description + "<br>" + details;
                artist ? (title = StringsService.stripTags(artist), name && (title += "<br>", name.length > 60 ? (title += StringsService.trimToWord(name, 60), 
                $scope.showMore = !0, lotDesc = name + "<br>" + lotDesc) : title += name)) : name ? name.length > 120 ? (title = StringsService.trimToWord(name, 120), 
                $scope.showMore = !0, lotDesc = name + "<br>" + lotDesc) : title = name : description && (title = StringsService.trimToWord(description, 120), 
                description.length > 100 && ($scope.showMore = !0)), item.lotTitle = title, $scope.data.lotTitle = title, 
                $scope.data.lotDesc = lotDesc, StringsService.isBlank(StringsService.stripTags($scope.data.lotDesc)) && ($scope.data.lotDesc = "");
            }
        }
        function initFavoriteMessageWatch() {
            $scope.$watch("data.item.isFavorite", function(isFavorite, oldValue) {
                "undefined" != typeof oldValue && isFavorite != oldValue && ($scope.favoriteToastMessage = isFavorite ? "lot_page_added_to_favorites" : "lot_page_removed_from_favorites", 
                $timeout(function() {
                    $scope.favoriteToastMessage = null;
                }, 15e3));
            });
        }
        function displayInquiryToast() {
            $scope.showInquiryToast = !0, $timeout(function() {
                $scope.showInquiryToast = !1;
            }, 15e3);
        }
        function setDocumentTitle() {
            var item = $scope.data.item, textForTitle = I18nService.getLangField(item.artist);
            textForTitle || (textForTitle = I18nService.getLangField(item.name)), textForTitle || (textForTitle = I18nService.getLangField(item.description)), 
            textForTitle || (textForTitle = ""), textForTitle = StringsService.stripTags(textForTitle);
            for (var titleWords = textForTitle.split(/\s/), documentTitle = "bidspirit - " + I18nService.getLangField($scope.data.auction.house.details.name), addedWords = 0, i = 0; i < titleWords.length && 5 > addedWords; i++) {
                var word = titleWords[i];
                word && (0 == addedWords && (documentTitle += " -"), documentTitle += " " + word, 
                addedWords++);
            }
            document.title = documentTitle;
        }
        function setDocumentDescriptionTags() {
            var item = $scope.data.item, description = (I18nService.getLangField(item.artist) || "") + " ";
            description += (I18nService.getLangField(item.name) || "") + " ", description += (I18nService.getLangField(item.description) || "") + " ", 
            description += (I18nService.getLangField(item.details) || "") + " ", description = StringsService.stripTags(description), 
            description = StringsService.trimToWord(description, 155), DomUtilsService.setMetaTag("name", "description", description), 
            DomUtilsService.setMetaTag("property", "og:description", description), DomUtilsService.setMetaTag("name", "twitter:description", description), 
            DomUtilsService.setMetaTag("property", "og:type", "og:product"), DomUtilsService.setMetaTag("name", "twitter:card", "product"), 
            DomUtilsService.setMetaTag("property", "og:image", "https:" + CatalogsService.getLotImageUrl(item, 0, "300x300", "pad")), 
            DomUtilsService.setMetaTag("name", "twitter:image", "https:" + CatalogsService.getLotImageUrl(item, 0, "300x300", "pad")), 
            StructuredDataService.setPriceStructuredDataMetaTags($scope.data.item), DomUtilsService.setMetaTag("name", "twitter:data2", CatalogUtilsService.getAuctionTimeDisplay(item.auction, !1)), 
            DomUtilsService.setMetaTag("name", "twitter:label2", I18nService.getText("auction_date"));
        }
        function initDisplay() {
            $window.scrollTo(0, 0), initTexts(), CatalogAccountService.loadForAuction($scope.data.auction), 
            setDocumentTitle(), setDocumentDescriptionTags(), initFavoriteMessageWatch(), trackEvents();
        }
        function trackEvents() {
            var auction = $scope.data.auction, item = $scope.data.item;
            item && auction && !$scope.eventTracked && ($scope.eventTracked = !0, AnalyticsService.trackEvent("catalogAction", "lotPageViewInHouse", "lot viewed in house " + auction.house.code), 
            AnalyticsService.trackEvent("catalogAction", "lotPageViewInAuction", "lot viewed in house: " + auction.house.code + ", auction: " + item.auctionDate), 
            AnalyticsService.trackEvent("catalogAction", "lotPageViewInAuctionForItem", "lot viewed in house: " + auction.house.code + ", auction:" + item.auctionDate + ", item:" + item.itemIndex));
        }
        function handleMissingAuction() {
            $state.go("account" == $stateParams.source && $rootScope.currentUser ? "app.myAccount" : "app.home");
        }
        function handleMissingItem() {
            "account" == $stateParams.source && $rootScope.currentUser ? $state.go("app.myAccount", {
                houseId: $scope.data.auction.houseId
            }) : $state.go("app.catalog", {
                auctionId: $stateParams.auctionId
            });
        }
        function getItem() {
            switch ($stateParams.source) {
              case "account":
                return MyAccountService.getAccountItem($scope.data.auction, $stateParams.lotId);

              case "search":
              case "favorites":
              case "catalog":
                return CatalogsService.getAuctionItem($scope.data.auction, $stateParams.lotId);
            }
        }
        function init() {
            $scope.data.auction = PortalInfoService.getAuction($stateParams.auctionId), $scope.data.auction ? getItem().then(function(item) {
                item ? ($scope.data.item = item, initDisplay()) : handleMissingItem(item);
            }) : handleMissingAuction(), $rootScope.$on("i18n.languageChanged", initTexts), 
            $rootScope.$on("viewPort.windowSizeChanged", function() {
                PathsService.reloadAfterDelay(200);
            }), $rootScope.$on("catalog.inquirySent", displayInquiryToast);
        }
        $scope.data = {
            auction: null,
            item: null,
            focusedImage: 0
        }, $scope.scrollToDescriptionFlag = !1, $scope.showInquiryToast = !1, $scope.favoriteToastMessage = null, 
        $scope.openAuctionHouseTerms = function() {
            PopupsService.showHouseTerms($scope.data.auction.house);
        }, $scope.scrollToDescription = function() {
            $scope.scrollToDescriptionFlag = !0, $timeout(function() {
                $scope.scrollToDescriptionFlag = !1;
            });
        }, $scope.showIncrements = function() {
            var title = I18nService.getText("house_increments_title", {
                house: I18nService.getLangField($scope.data.auction.house.details.name)
            }), currency = $scope.data.item.auction.catalogInfo.currency;
            PortalInfoService.getHouseIncrementsSteps($scope.data.auction.houseId).then(function(steps) {
                PopupsService.showInfoPopup({
                    title: title,
                    contentInclude: "auctions/catalogs/lotPage/common/increments",
                    code: "increments",
                    backText: "dialogs_back",
                    data: {
                        steps: steps,
                        currency: currency
                    }
                });
            });
        }, $scope.showInquiryForm = function() {
            $scope.showInquiryToast = !1;
            var user = PortalAuthService.validateUserLoggedIn();
            user && ("UNCONFIRMED_EMAIL" == user.registrationStage ? PortalAuthService.showAuthModalOrScene("warning") : PopupsService.showPopup({
                contentInclude: "auctions/catalogs/lotPage/common/inquiry/inquiryForm",
                code: "inquiry",
                title: I18nService.getText("inquiry_form_title"),
                data: {
                    item: $scope.data.item,
                    user: user,
                    hideTopBackButton: !0,
                    house: I18nService.getLangField($scope.data.auction.house.details.name)
                }
            }));
        }, $scope.toggleFavorite = function() {
            var user = PortalAuthService.validateUserLoggedIn();
            if ($scope.favoriteToastMessage = null, user) {
                var isFavorite;
                isFavorite = $scope.data.item.isFavorite ? !1 : !0, AccountService.setFavoriteItem($scope.data.auction.house, $scope.data.item, isFavorite);
            }
        }, init();
    } ]);
}), define("portal/js/modules/auctions/catalogs/lotPage/lotPageNavigationDirective", [ "./lotPageModule" ], function(module) {
    module.directive("bsLotPageNavigation", function($stateParams, PathsService, CatalogsService, ArraysService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "="
            },
            link: function(scope) {
                if (scope.source = $stateParams.source, "catalog" == scope.source) {
                    var items = CatalogsService.getNavState().pagesData.visibleItems, lotInd = ArraysService.getIndById(items, scope.lot.id);
                    lotInd > 0 && (scope.previousLotId = items[lotInd - 1].id), lotInd < items.length - 1 && (scope.nextLotId = items[lotInd + 1].id);
                }
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/lotPage/common/navigation/lotPageNavigation")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotPage/lotPageNavLinkDirective", [ "./lotPageModule" ], function(module) {
    module.directive("bsLotPageNavLink", function($rootScope, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                name: "="
            },
            link: function(scope) {
                scope.direction = $rootScope.dir, scope.lang = $rootScope.currentLang, scope.showText = $rootScope.viewPort.pcMedia, 
                $rootScope.$on("i18n.languageChanged", function() {
                    scope.direction = $rootScope.dir, scope.lang = $rootScope.currentLang;
                });
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/lotPage/common/navigation/lotPageNavLink")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotPage/lotPageZoomDirective", [ "./lotPageModule" ], function(module) {
    module.directive("bsLotPageZoom", function($stateParams, $rootScope, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "=",
                initialImageInd: "="
            },
            link: function(scope, element) {
                function init() {
                    scope.selectedImageInd = null != $stateParams.imageInd ? $stateParams.imageInd : scope.initialImageInd, 
                    scope.loadedImageInfo = {}, scope.enableImageModeSwitch = !1, $rootScope.viewPort.pcMedia ? scope.options = {
                        size: "900x"
                    } : (scope.options = {
                        moveInFrame: !0,
                        asBg: !0
                    }, $rootScope.$on("viewPort.windowSizeChanged", setThumbScrollPosition)), scope.options.imageMode = "limit";
                }
                function waitForImageToLoad() {
                    scope.loadedImageInfo.loaded = !1, scope.cursorZoomClass = null;
                }
                function setThumbScrollPosition() {
                    var thumbsParent = angular.element(element[0].querySelector(".thumbs")), thumb = element[0].querySelectorAll(".thumb")[scope.selectedImageInd], nonImageHeight = 162;
                    if (thumb && (thumbsParent[0].scrollLeft = thumb.offsetLeft - thumb.offsetWidth - 100, 
                    nonImageHeight += 100), scope.options.moveInFrame) {
                        var css = {
                            height: window.innerHeight - nonImageHeight + "px"
                        };
                        angular.element(element[0].querySelector(".big-image")).css(css), scope.defugInfo = css;
                    }
                }
                scope.setZoomImage = function(ind) {
                    var length = scope.lot.imagesList.length;
                    scope.selectedImageInd = (1 * ind + length) % length, waitForImageToLoad(), setThumbScrollPosition();
                }, scope.prevImage = function() {
                    scope.setZoomImage(scope.selectedImageInd - 1);
                }, scope.nextImage = function() {
                    scope.setZoomImage(scope.selectedImageInd + 1);
                }, scope.toggleImageMode = function() {
                    scope.enableImageModeSwitch && (scope.options.imageMode = "limit" == scope.options.imageMode ? "fit" : "limit", 
                    waitForImageToLoad());
                }, scope.$watch("loadedImageInfo.loaded", function() {
                    if (scope.loadedImageInfo.loaded) if ("limit" == scope.options.imageMode) {
                        var imageWidth = scope.loadedImageInfo.size.width;
                        imageWidth >= 990 ? (scope.enableImageModeSwitch = !1, scope.cursorZoomClass = null) : (scope.enableImageModeSwitch = !0, 
                        scope.cursorZoomClass = "zoom-in-cursor"), setThumbScrollPosition();
                    } else scope.enableImageModeSwitch = !0, scope.cursorZoomClass = "zoom-out-cursor";
                }), init();
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/lotPage/common/images/lotPageZoom")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotPage/lotPageImagesDirective", [ "./lotPageModule" ], function(module) {
    module.directive("bsLotPageImages", function($rootScope, $state, $modal, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                lot: "="
            },
            link: function(scope) {
                function zoomInScene(lot, imageInd) {
                    $state.go(".zoom", {
                        imageInd: imageInd
                    });
                }
                function zoomInModal(lot, imageInd) {
                    $modal.open({
                        templateUrl: PathsService.appTemplatePath("auctions/catalogs/lotPage/pc/lotZoomModal"),
                        windowClass: "modal huge",
                        controller: function($scope) {
                            $scope.data = {
                                item: lot,
                                imageInd: imageInd
                            };
                        }
                    });
                }
                scope.mainImagewidth = Math.min(window.innerWidth - 30, 600), scope.zoomImage = function(lot, imageInd) {
                    $rootScope.viewPort.pcMedia ? zoomInModal(lot, imageInd) : zoomInScene(lot, imageInd);
                };
            },
            templateUrl: PathsService.appTemplatePath("auctions/catalogs/lotPage/common/images/lotPageImages")
        };
    });
}), define("portal/js/modules/auctions/catalogs/lotPage/inquiryFormController", [ "./lotPageModule" ], function(module) {
    module.controller("InquiryFormController", [ "$scope", "$rootScope", "$timeout", "$window", "StringsService", "I18nService", "PortalInfoService", "PopupsService", function($scope, $rootScope, $timeout, $window, StringsService, I18nService, PortalInfoService) {
        $scope.init = function() {
            $scope.options.buttons = [ {
                text: "dialogs_send",
                action: $scope.submitInquiryForm
            }, {
                text: "dialogs_close",
                type: "warning",
                isCloseButton: !0
            } ];
            var item = $scope.options.data.item;
            $scope.inquiryData = {
                subject: I18nService.getText("inquiry_form_subject_content", {
                    lotIndex: item.itemIndex,
                    lotName: item.lotTitle
                })
            };
        }, $scope.submitInquiryForm = function() {
            $scope.inquiryForm.submit();
        }, $scope.sendInquiry = function() {
            var item = $scope.options.data.item;
            return PortalInfoService.sendLotInquiryRequest(item.id, item.lotTitle, $scope.inquiryData.content).then(function() {
                $timeout(function() {
                    $rootScope.$broadcast("catalog.inquirySent", item);
                }, 500), $scope.options.isModal ? $scope.$close() : $window.history.back();
            });
        };
    } ]);
}), define("portal/js/modules/auctions/catalogs/lotPage/index", [ "./lotPageModule", "./lotPageController", "./lotPageNavigationDirective", "./lotPageNavLinkDirective", "./lotPageZoomDirective", "./lotPageImagesDirective", "./inquiryFormController" ], function() {}), 
define("portal/js/modules/auctions/catalogs/index", [ "./catalogsModule", "./catalogsService", "./catalogAccountService", "./lotElements/index", "./auctionInfo/index", "./list/index", "./search/index", "./lotPage/index" ], function() {}), 
define("portal/js/modules/auctions/lists/auctionsListsModule", [ "angular" ], function(ng) {
    return ng.module("app.auctions.lists", []);
}), define("portal/js/modules/auctions/lists/auctionsListDirective", [ "./auctionsListsModule" ], function(module) {
    module.directive("bsAuctionsList", function($timeout, $rootScope, $state, PathsService, CloudinaryService, SessionsService, ArraysService, DateUtilsService, SettingsService, ViewPortService, AccountService, AppSiteWinodwsService, PortalInfoService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auctions: "=",
                view: "=",
                enableNarrowView: "=",
                houseNameAsLink: "="
            },
            link: function(scope) {
                function getAuctionToScrollTo() {
                    return $rootScope.$previousState && $rootScope.lastAuctionClick && $rootScope.lastAuctionClick.state == $state.current.name && $rootScope.lastAuctionClick.auctionId == $rootScope.$previousState.args.auctionId ? $rootScope.lastAuctionClick.auctionId : void 0;
                }
                function handleTimedAutionClick(auction) {
                    $rootScope.devMode || "ENDED" == auction.state && auction.catalogInfo ? $state.go("app.catalog", {
                        auctionId: auction.id
                    }) : AccountService.validateRegisteredInHouseAndThen(auction.house, {
                        message: "auth_timed_auction"
                    }, function() {
                        AppSiteWinodwsService.openAuctionSiteWindow(auction);
                    });
                }
                function initTimeInfo() {
                    scope.today = DateUtilsService.formatToServerDate(new Date()), angular.forEach(scope.auctions, function(auction) {
                        var minutes = PortalInfoService.getMinutesUntilAuction(auction);
                        auction.minutesUntilStart = minutes, !auction.house.bidspiritSiteId && auction.date < scope.today && (auction.hidden = !0);
                    });
                }
                function getImageSize() {
                    return "narrow" == scope.screenView ? "100x100" : "next" == scope.view ? "360x226" : "236x150";
                }
                function initDisplayInfo() {
                    scope.screenView = scope.enableNarrowView && !$rootScope.viewPort.isWideDevice ? "narrow" : "wide", 
                    scope.imageSize = getImageSize();
                }
                scope.scrollTo = getAuctionToScrollTo(), scope.scrollTo || window.scrollTo(0, 0), 
                scope.devMode = $rootScope.devMode, scope.viewPort = $rootScope.viewPort, scope.w = ViewPortService.getViewPortWidth(), 
                scope.isAuctionClickable = function(auction) {
                    return "PENDING" == auction.state ? !1 : auction.house.bidspiritSiteId && !auction.catalogInfo ? !1 : !0;
                }, scope.showCatalog = function(auction) {
                    if (scope.isAuctionClickable(auction)) {
                        var house = auction.house;
                        $rootScope.lastAuctionClick = {
                            state: $state.current.name,
                            auctionId: auction.id
                        }, house.bidspiritSiteId ? auction.timedAuction ? handleTimedAutionClick(auction) : "RUNNING" == auction.state ? AppSiteWinodwsService.openAuctionSiteWindow(auction, !0) : $state.go("app.catalog", {
                            auctionId: auction.id
                        }) : auction.externalUrl && window.open(auction.externalUrl, house.code + "_" + auction.id);
                    }
                }, scope.auctionButtonClass = function(auction) {
                    switch (auction.state) {
                      case "PENDING":
                        return "disabled";

                      case "READY":
                        return auction.externalUrl || auction.catalogInfo ? "orange" : "disabled";

                      case "RUNNING":
                        return "live darkBlue";

                      case "ENDED":
                        return "yellow";
                    }
                    return "orange";
                }, scope.auctionButtonText = function(auction) {
                    switch (auction.state) {
                      case "PENDING":
                        return "home_auction_catalog_not_ready";

                      case "READY":
                        return auction.externalUrl || auction.catalogInfo ? "home_auction_catalog_open" : "home_auction_catalog_not_ready";

                      case "RUNNING":
                        return "home_auction_enter";

                      case "ENDED":
                        return catalogOpenText = "home_auction_catalog_result";
                    }
                    return "home_auction_catalog_open";
                }, scope.isLinkbutton = function(auction) {
                    switch (auction.state) {
                      case "PENDING":
                        return !1;

                      case "READY":
                        return auction.externalUrl || auction.catalogInfo ? !0 : !1;

                      case "RUNNING":
                        return !1;

                      case "ENDED":
                        return !0;
                    }
                }, initTimeInfo(), initDisplayInfo();
            },
            templateUrl: PathsService.appTemplatePath("auctions/lists/auctionsList")
        };
    });
}), define("portal/js/modules/auctions/lists/auctionsListsGroupDirective", [ "./auctionsListsModule" ], function(module) {
    module.directive("bsAuctionsListsGroup", function($timeout, $rootScope, $state, PathsService, PortalInfoService, SessionsService, ArraysService, DateUtilsService, SettingsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auctionsData: "=",
                showRegionSelection: "=",
                showAllPastAuctions: "=",
                futureHouseNameAsLink: "="
            },
            link: function(scope) {
                function updateDisplay() {
                    scope.regions = $rootScope.regions, scope.currentRegion = $rootScope.currentRegion, 
                    scope.data = {
                        nextAuctions: [],
                        recentAuctions: [],
                        futureAuctions: []
                    };
                    var daysToFutureAuctions = SettingsService.get("daysToFutureAuctions") || 14, recentAuctionsToShow = SettingsService.get("recentAuctionsToShow") || 10, auctions = scope.auctionsData.auctions;
                    if (auctions) {
                        for (var i = 0; i < auctions.length; i++) {
                            var auction = auctions[i], hoursTillAuction = Math.round(PortalInfoService.getMinutesUntilAuction(auction) / 60), catalogReady = auction.catalogInfo && auction.catalogInfo.appAuctionId;
                            auctionsList = null, auction.hoursTillAuction = hoursTillAuction, "ENDED" == auction.state ? catalogReady && (auctionsList = scope.data.recentAuctions) : catalogReady || 24 * daysToFutureAuctions > hoursTillAuction ? hoursTillAuction > -24 && (auctionsList = scope.data.nextAuctions) : auctionsList = scope.data.futureAuctions, 
                            auctionsList && auctionsList.push(auction);
                        }
                        ArraysService.inverse(scope.data.recentAuctions), scope.showAllPastAuctions || (scope.data.recentAuctions = scope.data.recentAuctions.slice(0, recentAuctionsToShow)), 
                        scope.regionLink = function(region) {
                            var url = "//";
                            if (-1 == window.location.href.indexOf("bidspirit")) return PathsService.newLocationWithParam("region", region.toLowerCase());
                            var url = "//";
                            "ALL" != region && (url += region.toLowerCase() + "."), url += "bidspirit.com/";
                            var separator = "?";
                            return "ALL" == region && (url += separator + "region=all", separator = "&"), $rootScope.devMode && (url += separator + "devMode=active", 
                            separator = "&"), url;
                        };
                    }
                }
                scope.$watch("auctionsData.auctions", updateDisplay);
            },
            templateUrl: PathsService.appTemplatePath("auctions/lists/auctionsListsGroup")
        };
    });
}), define("portal/js/modules/auctions/lists/auctionsResultsController", [ "./auctionsListsModule" ], function(module) {
    module.controller("AuctionsResultsController", [ "$scope", "$rootScope", "$timeout", "$state", "$stateParams", "ArraysService", "I18nService", "SessionsService", "PortalInfoService", function($scope, $rootScope, $timeout, $state, $stateParams, ArraysService, I18nService, SessionsService, PortalInfoService) {
        function setAuctions() {
            $scope.pastAuctions = ArraysService.filterWithFunction(PortalInfoService.getAuctions(), function(auction) {
                return auction.catalogInfo && "ENDED" == auction.state ? !0 : !1;
            }), ArraysService.inverse($scope.pastAuctions), $scope.displayedAuctions = $scope.currentHouse ? getHouseAuctions($scope.currentHouse) : $scope.pastAuctions, 
            setPagesData();
        }
        function setPagesData() {
            $scope.pagesData = {
                itemsCount: $scope.displayedAuctions.length,
                currentPage: $stateParams.page,
                itemsPerPage: 40
            }, $scope.pageAuctions = [];
            for (var i = 0; i < $scope.pagesData.itemsPerPage; i++) {
                var auctionInd = $scope.pagesData.itemsPerPage * ($scope.pagesData.currentPage - 1) + i, auction = $scope.displayedAuctions[auctionInd];
                auction && $scope.pageAuctions.push(auction);
            }
        }
        function shouldShowHouse(house) {
            return $rootScope.devMode ? !0 : house.hidden ? !1 : 0 == getHouseAuctions(house).length ? !1 : !0;
        }
        function setHouses() {
            var houses = PortalInfoService.getBidSpiritHouses().slice();
            $scope.houses = [];
            for (var i = 0; i < houses.length; i++) {
                var house = houses[i];
                shouldShowHouse(house) && $scope.houses.push(house);
            }
        }
        function getHouseAuctions(house) {
            return ArraysService.filteredBy($scope.pastAuctions, "houseId", house.id);
        }
        function init() {
            $scope.displayeAuctionsLoader = !0, $timeout(function() {
                $scope.displayeAuctionsLoader = !1;
            }, 200), $scope.currentHouse = PortalInfoService.getHouseByCode($stateParams.house), 
            setAuctions(), setHouses();
        }
        $scope.showHouseAuction = function(houseCode) {
            $state.go("app.results", {
                house: houseCode,
                page: 1
            });
        }, $scope.clearFilter = function() {
            $scope.displayedAuctions = $scope.pastAuctions, $scope.currentHouse = null;
        }, init();
    } ]);
}), define("portal/js/modules/auctions/lists/auctionTimeFilter", [ "./auctionsListsModule" ], function(module) {
    return module.filter("auctionTime", [ "CatalogUtilsService", function(CatalogUtilsService) {
        return function(auction, dateOnly) {
            return CatalogUtilsService.getAuctionTimeDisplay(auction, dateOnly);
        };
    } ]);
}), define("portal/js/modules/auctions/lists/index", [ "./auctionsListsModule", "./auctionsListDirective", "./auctionsListsGroupDirective", "./auctionsResultsController", "./auctionTimeFilter" ], function() {}), 
define("portal/js/modules/auctions/index", [ "./auctionsModule", "./home/index", "./catalogs/index", "./lists/index" ], function() {}), 
define("portal/js/modules/houses/housesModule", [ "angular" ], function(ng) {
    return ng.module("app.houses", []);
}), define("portal/js/modules/houses/housesListController", [ "./housesModule" ], function(module) {
    module.controller("HousesListController", [ "$scope", "ArraysService", "I18nService", "PortalInfoService", function($scope, ArraysService, I18nService, PortalInfoService) {
        $scope.houses = PortalInfoService.getHouses().slice(), ArraysService.sort($scope.houses, "orderInd", !1, "emptyLast"), 
        document.title = I18nService.getTextWithRegion("auction_houses_title");
    } ]);
}), define("portal/js/modules/houses/housePageController", [ "./housesModule" ], function(module) {
    module.controller("HousePageController", [ "$scope", "$rootScope", "$stateParams", "ViewPortService", "I18nService", "AnalyticsService", "PopupsService", "PortalInfoService", "MyAccountService", function($scope, $rootScope, $stateParams, ViewPortService, I18nService, AnalyticsService, PopupsService, PortalInfoService, MyAccountService) {
        function setHouseWebsite() {
            var website = $scope.house.website;
            if (website) if (0 == website.indexOf("https")) $scope.website = {
                display: website,
                link: website
            }; else {
                var websiteNoProtocol = website.replace("http://", "").replace(/\/$/, "");
                $scope.website = {
                    display: websiteNoProtocol,
                    link: "http://" + websiteNoProtocol
                };
            }
        }
        function loadAccountInfo() {
            MyAccountService.loadForHouse($scope.house.id);
        }
        function init() {
            $scope.house = PortalInfoService.getHouseByCode($stateParams.houseCode), $scope.housePic = ViewPortService.clientWidth() > 1024 && $scope.house.resources ? $scope.house.resources.picForHousePage : "", 
            $scope.auctions = PortalInfoService.getHouseAuctions($scope.house.id), loadAccountInfo(), 
            setHouseWebsite(), AnalyticsService.trackDailyUniqueEvent("houseAction", "visitHousePage", "visit house page " + $scope.house.code), 
            document.title = I18nService.getLangField($scope.house.details.name), $rootScope.$on("auth.newSessionUser", loadAccountInfo);
        }
        $scope.openTerms = function() {
            PopupsService.showHouseTerms($scope.house);
        }, init();
    } ]);
}), define("portal/js/modules/houses/houseAlertsPromotionDirective", [ "./housesModule" ], function(module) {
    module.directive("bsHouseAlertsPromotion", function($rootScope, ArraysService, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                house: "="
            },
            link: function(scope) {
                function checkShouldDisplay() {
                    if (!$rootScope.currentUser) return !1;
                    var alertsPreferences = $rootScope.currentUser.alertsPreferences;
                    if (!alertsPreferences) return !0;
                    if ("SOME_HOUSES_ALERTS" != alertsPreferences.housesAlertChoice) return !1;
                    var houseConfigedToBeAlerted = !ArraysService.contains(alertsPreferences.housesToAlert, scope.house.code);
                    return houseConfigedToBeAlerted;
                }
                function updateDisplay() {
                    scope.shouldDisplay = checkShouldDisplay();
                }
                updateDisplay(), $rootScope.$on("auth.newSessionUser", updateDisplay);
            },
            templateUrl: PathsService.appTemplatePath("houses/houseAlertsPromotion")
        };
    });
}), define("portal/js/modules/houses/index", [ "./housesModule", "./housesListController", "./housePageController", "./houseAlertsPromotionDirective" ], function() {}), 
define("portal/js/modules/account/accountModule", [ "angular" ], function(ng) {
    return ng.module("app.account", [ "app.account.myAccount", "app.account.favorites" ]);
}), define("portal/js/modules/account/accountService", [ "./accountModule" ], function(module) {
    module.factory("AccountService", function($q, $log, $rootScope, $modal, $modalStack, $state, AnalyticsService, ArraysService, ApiService, PathsService, DialogsService, CatalogUtilsService, I18nService, PopupsService, PortalAuthService, CatalogsService, PortalInfoService) {
        function requestApprovalFromHouse(house, userStateId) {
            return ApiService.callApi("/account/requestApprovalFromHouse", {
                houseId: house.id,
                userStateId: userStateId
            }).success(function(response) {
                PortalAuthService.setCurrentHouseApprovalState(house.id, response.approvalState), 
                AnalyticsService.trackEvent("houseAction", "requestApprovalFromHouse", "request approval from house " + house.code);
            });
        }
        function addBidsInfoToItems(auction, bids, bidFieldName) {
            if (bids) for (var i = 0; i < bids.length; i++) {
                var bid = bids[i], item = CatalogsService.getItemByIdInApp(auction, bid.lotIdInApp);
                setBidInfoForItem(item, bidFieldName, bid);
            }
        }
        function setBidInfoForItem(item, bidFieldName, bid) {
            item && (item[bidFieldName] = bid, item.lastBidUpdate = new Date().getTime());
        }
        function addFavoriteFlagToItems(auction, itemIds) {
            if (itemIds) for (var i = 0; i < itemIds.length; i++) {
                var item = CatalogsService.getItemByIdInApp(auction, itemIds[i]);
                item && updateItemLocalFavoriteStatus(item, !0);
            }
        }
        function checkIfActionWaitingAfterHouseApprovalRequest() {
            var approvalState = PortalAuthService.getHouseApprovalState(mWaitingActionAfterHouseApprovalRequest.houseId);
            ("APPROVED" == approvalState || "PENDING" == approvalState) && new Date().getTime() - mWaitingActionAfterHouseApprovalRequest.time < 3e4 && mWaitingActionAfterHouseApprovalRequest.action();
        }
        function validateRegisteredInHouseAndThen(house, args, actionFn) {
            function handleApprovalState(approvalState) {
                switch (approvalState) {
                  case "APPROVED":
                  case "PENDING":
                    actionFn();
                    break;

                  case "NOT_REGISTERED":
                  case "INCOMPLETE_PROFILE":
                  case "REJECTED":
                    mWaitingActionAfterHouseApprovalRequest = {
                        houseId: house.id,
                        time: new Date().getTime(),
                        action: actionFn
                    }, showApprovalPopup(house);
                }
            }
            var user = $rootScope.currentUser;
            if (user) if ("COMPLETE" != user.registrationStage) PortalAuthService.showAuthModalOrScene("warning", null, args); else {
                var approvalState = PortalAuthService.getHouseApprovalState(house.id);
                "UNKNOWN" != approvalState ? handleApprovalState(approvalState) : ApiService.callApi("/account/getAccountInfoForHouse", {
                    houseId: house.id
                }).success(function(info) {
                    approvalState = info.accountInfo.approvalState, PortalAuthService.setCurrentHouseApprovalState(house.id, approvalState), 
                    handleApprovalState(approvalState);
                }).error(function() {
                    PopupsService.showHouseConnectivityErrorPopup(house);
                });
            } else PortalAuthService.showAuthModalOrScene("login", null, args);
        }
        function showApprovalPopup(house, args) {
            $rootScope.viewPort.mobileMedia ? showApprovalScene(house, args) : showApprovalModalPopup(house, args);
        }
        function showApprovalScene(house) {
            $state.go("app.houseApproval", {
                houseId: house.id
            });
        }
        function showApprovalModalPopup(house) {
            closeApprovalPopup(), $modal.open({
                templateUrl: PathsService.appTemplatePath("account/approval/houseApprovalPopup"),
                windowClass: "modal auth-modal-popup",
                controller: function($scope) {
                    $scope.houseId = house.id;
                }
            });
        }
        function closeApprovalPopup() {
            $modalStack.dismissAll();
        }
        function handleFailure(response) {
            response.errorMessage && $log.warn(response.errorMessage);
        }
        function placeAbsenteeBid(houseId, lot, price) {
            return ApiService.callApi("/account/placeAbsenteeBid", {
                houseId: houseId,
                lotId: lot.id,
                price: price
            }).success(function(response) {
                response.success ? setBidInfoForItem(lot, "selfAbsenteeBid", response.bid) : handleFailure(response);
            });
        }
        function removeAbsenteeBid(houseId, lot) {
            return ApiService.callApi("/account/removeAbsenteeBid", {
                houseId: houseId,
                lotId: lot.id
            }).success(function(response) {
                response.success ? setBidInfoForItem(lot, "selfAbsenteeBid", null) : handleFailure(response);
            });
        }
        function setFavoriteItem(house, lot, isOn) {
            return isOn && AnalyticsService.trackEvent("catalogAction", "favoriteInHouse", "favorite in house " + house.code), 
            ApiService.callApi("/account/setFavoriteItem", {
                houseId: house.id,
                lotId: lot.id,
                isOn: isOn
            }).success(function() {
                updateItemLocalFavoriteStatus(lot, isOn);
            });
        }
        function updateItemLocalFavoriteStatus(lot, isOn) {
            lot.isFavorite = isOn, mFavoritesSceneInfo.items && (isOn ? ("unloaded" != mFavoritesSceneInfo.pastItemState || "ENDED" != lot.auction.state) && ArraysService.addOrReplaceById(mFavoritesSceneInfo.items, lot) : ArraysService.removeById(mFavoritesSceneInfo.items, lot.id));
        }
        function getFavoriteItems(time) {
            var deferred = $q.defer();
            return ApiService.callApi("/account/getFavoriteItems", {
                region: $rootScope.currentRegion,
                time: time
            }).success(function(lotItems) {
                for (var itemsWithAuctions = [], i = 0; i < lotItems.length; i++) {
                    var item = lotItems[i], auction = PortalInfoService.getAuction(item.auctionId);
                    auction && (item.auction = auction, item.isFavorite = !0, itemsWithAuctions.push(item));
                }
                deferred.resolve(itemsWithAuctions);
            }), deferred.promise;
        }
        var mFavoritesSceneInfo = {}, mWaitingActionAfterHouseApprovalRequest = {};
        return $rootScope.$on("auth.houseApprovalChanged", checkIfActionWaitingAfterHouseApprovalRequest), 
        {
            addBidsInfoToItems: addBidsInfoToItems,
            setBidInfoForItem: setBidInfoForItem,
            requestApprovalFromHouse: requestApprovalFromHouse,
            closeApprovalPopup: closeApprovalPopup,
            showApprovalPopup: showApprovalPopup,
            validateRegisteredInHouseAndThen: validateRegisteredInHouseAndThen,
            placeAbsenteeBid: placeAbsenteeBid,
            removeAbsenteeBid: removeAbsenteeBid,
            setFavoriteItem: setFavoriteItem,
            getFavoriteItems: getFavoriteItems,
            addFavoriteFlagToItems: addFavoriteFlagToItems,
            favoritesSceneInfo: mFavoritesSceneInfo
        };
    });
}), define("portal/js/modules/account/houseApprovalDirective", [ "./accountModule" ], function(module) {
    module.directive("bsHouseApproval", function($stateParams, $rootScope, PathsService, I18nService, PortalInfoService, AccountService, PortalAuthService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                houseId: "=",
                inPopup: "="
            },
            link: function(scope) {
                function getText(textKey) {
                    var textParams = PortalInfoService.getHouseTextParams(scope.house);
                    return I18nService.getText(textKey, textParams);
                }
                function init() {
                    var firstParagraphKey, secondParagraphKey;
                    switch (scope.approvalState) {
                      case "NOT_REGISTERED":
                        firstParagraphKey = "approval_not_approved";
                        break;

                      case "PENDING":
                        firstParagraphKey = "approval_not_approved", secondParagraphKey = "approval_pending";
                        break;

                      case "REJECTED":
                        firstParagraphKey = "approval_rejected";
                    }
                    scope.firstParagraph = getText(firstParagraphKey), secondParagraphKey && (scope.secondParagraph = getText(secondParagraphKey));
                }
                function validateApprovalRequest() {
                    if (scope.formData.error = null, scope.house.requestUserStateIdForApproval) {
                        var field = "approval_request_user_id_label", stateId = scope.formData.userStateId;
                        stateId ? (stateId + "").match(/^\d{8,15}$/) || (scope.formData.error = I18nService.getText("error_bad_pattern", {
                            field: field
                        })) : scope.formData.error = I18nService.getText("error_mandatory", {
                            field: field
                        });
                    }
                    return null == scope.formData.error;
                }
                scope.formData = {};
                var houseId = scope.houseId;
                houseId || (houseId = $stateParams.houseId), scope.house = PortalInfoService.getHouse(houseId), 
                scope.requestApproval = function() {
                    return "COMPLETE" != $rootScope.currentUser.registrationStage ? PortalAuthService.showAuthModalPopup("warning") : validateApprovalRequest() ? AccountService.requestApprovalFromHouse(scope.house, scope.formData.userStateId).success(function(response) {
                        scope.approvalState = response.approvalState, scope.firstParagraph = getText("approval_request_sent"), 
                        scope.secondParagraph = "";
                    }).error(function() {
                        $rootScope.showGeneralError();
                    }) : void 0;
                }, scope.closePopup = function() {
                    AccountService.closeApprovalPopup();
                }, $rootScope.$on("i18n.languageChanged", init), scope.approvalState = PortalAuthService.getHouseApprovalState(scope.house.id), 
                init();
            },
            templateUrl: PathsService.appTemplatePath("account/approval/houseApproval")
        };
    });
}), define("portal/js/modules/account/bidRulesService", [ "./accountModule" ], function(module) {
    module.factory("BidRulesService", function($q, $rootScope, $modal, ArraysService, StringsService, I18nService, PopupsService) {
        function validBid(lot, price) {
            var errorKey = null, currency = lot.auction.catalogInfo.currency, minPrice = lot.startPrice, textParams = {
                price: price
            };
            if (StringsService.isBlank(price)) errorKey = "empty"; else {
                var parsedPrice = I18nService.parseCurrency(price, currency);
                if (parsedPrice) if (parsedPrice == minPrice) errorKey = null; else if (minPrice > parsedPrice) errorKey = "low"; else {
                    var increments = getNearIncrementPrices(lot, parsedPrice);
                    if (increments.prev == parsedPrice) return !0;
                    if (0 == increments.prev) minPrice = increments.next, errorKey = "low"; else if (parsedPrice < increments.prev) errorKey = "low", 
                    minPrice = increments.prev; else {
                        errorKey = "increment";
                        var minIncreement = Math.max(increments.prev, minPrice);
                        textParams.prev = I18nService.sumInCurrency(minIncreement, currency), textParams.next = I18nService.sumInCurrency(increments.next, currency);
                    }
                } else errorKey = "illegal";
            }
            if (errorKey) {
                textParams.minPrice = I18nService.sumInCurrency(minPrice, currency);
                var message = I18nService.getText("bid_error_" + errorKey, textParams);
                return PopupsService.showErrorPopup(message), !1;
            }
            return !0;
        }
        function getNearIncrementPrices(lot, price) {
            for (var increments = lot.auction.house.increments, step = getStepForPrice(increments, price), stepPrice = 1 * increments[step], prevIncrementPrice = 1 * step, nextIncrementPrice = prevIncrementPrice + stepPrice; price >= nextIncrementPrice; ) prevIncrementPrice = nextIncrementPrice, 
            nextIncrementPrice += stepPrice;
            return {
                prev: prevIncrementPrice,
                next: nextIncrementPrice
            };
        }
        function getStepForPrice(increments, price) {
            var prevStep = null;
            for (var step in increments) {
                if (step >= price) return prevStep ? prevStep : step;
                prevStep = step;
            }
            return prevStep;
        }
        return {
            validBid: validBid
        };
    });
}), define("portal/js/modules/account/favorites/favoritesModule", [ "angular" ], function(ng) {
    return ng.module("app.account.favorites", []);
}), define("portal/js/modules/account/favorites/favoritesController", [ "./favoritesModule" ], function(module) {
    module.controller("FavoritesController", [ "$rootScope", "$scope", "$filter", "$state", "$timeout", "ArraysService", "I18nService", "StringsService", "PortalInfoService", "AccountService", "CatalogUtilsService", "AppSiteWinodwsService", function($rootScope, $scope, $filter, $state, $timeout, ArraysService, I18nService, StringsService, PortalInfoService, AccountService, CatalogUtilsService, AppSiteWinodwsService) {
        function setPageItems() {
            $scope.pagesData.pageItems = CatalogUtilsService.getPageItems($scope.data.sceneInfo.items, $scope.pagesData.currentPage, $scope.pagesData.itemsPerPage);
        }
        function scrollToLastClickedLot() {
            var lotToScrollTo = $scope.data.sceneInfo.lastClickedLot;
            lotToScrollTo && (lotToScrollTo.isFavorite || (lotToScrollTo = $scope.data.sceneInfo.items[$scope.data.sceneInfo.lastClickedLotInd - 1]), 
            lotToScrollTo && ($scope.pagesData.currentPage = CatalogUtilsService.getLotPage($scope.data.sceneInfo.items, lotToScrollTo.id, $scope.pagesData.itemsPerPage), 
            $scope.scrollTo = lotToScrollTo.id), $scope.data.sceneInfo.lastClickedLot = null);
        }
        function setHousesBadges(items) {
            angular.forEach(items, function(item) {
                item.loadPastLinkFakeItem || (item.houseBadge = {
                    text: StringsService.trimToWord(I18nService.getLangField(item.auction.house.details.name), 20) + " <span dir='ltr'>(" + CatalogUtilsService.getAuctionTimeDisplay(item.auction, !0, !0) + ")</span>",
                    color: item.auction.house.details.brandColor
                });
            });
        }
        function sortItems() {
            function breakCompare(item1, item2) {
                return item1.loadPastLinkFakeItem ? "ENDED" == item2.auction.state ? -1 : 1 : item2.loadPastLinkFakeItem ? "ENDED" == item1.auction.state ? 1 : -1 : 0;
            }
            function stateCompare(state1, state2) {
                return state1 == state2 ? 0 : "ENDED" != state1 && "ENDED" != state2 ? 0 : "ENDED" == state1 ? 1 : "ENDED" == state2 ? -1 : 0;
            }
            function itemsCompare(item1, item2) {
                var options = {};
                "ENDED" == item1.auction.state && (options.reverseAuctionDate = !0);
                var itemsCompareValue = CatalogUtilsService.compareLots(item1, item2, options);
                return itemsCompareValue;
            }
            $scope.data.sceneInfo.items.sort(function(item1, item2) {
                return breakCompare(item1, item2) || stateCompare(item1.auction.state, item2.auction.state) || itemsCompare(item1, item2);
            });
        }
        function initItems(items) {
            items.push({
                loadPastLinkFakeItem: !0,
                id: "pastItemsLink"
            }), $scope.data.sceneInfo.pastItemState = "unloaded", $scope.data.sceneInfo.items = items, 
            displayItems();
        }
        function displayItems() {
            sortItems(), setHousesBadges($scope.data.sceneInfo.items), $scope.pagesData.itemsCount = $scope.data.sceneInfo.items.length, 
            new Date().getTime() - $scope.data.sceneInfo.lastClickedLotTime < 6e4 && scrollToLastClickedLot(), 
            setPageItems(), $scope.loadState = "loaded";
        }
        function init() {
            $scope.currentUser ? ($scope.loadState = "loading", $scope.data.sceneInfo = AccountService.favoritesSceneInfo, 
            $scope.scrollToPagination = !1, $scope.pagesData = {
                itemsPerPage: 20,
                currentPage: 1
            }, $scope.data.sceneInfo.items ? displayItems() : AccountService.getFavoriteItems("FUTURE").then(initItems)) : $state.go("app.home");
        }
        $scope.data = {}, $scope.onPageChange = function() {
            $scope.scrollToPagination = !1, setPageItems(), $timeout(function() {
                $scope.scrollToPagination = !0;
            }, 100);
        }, $scope.gotoLot = function(lot) {
            if (!lot.onFavoriteFlag) {
                $scope.data.sceneInfo.lastClickedLot = lot, $scope.data.sceneInfo.lastClickedLotInd = ArraysService.getIndById($scope.data.sceneInfo.items, lot.id), 
                $scope.data.sceneInfo.lastClickedLotTime = new Date().getTime();
                var auction = lot.auction;
                auction.timedAuction && "ENDED" != auction.state ? AccountService.validateRegisteredInHouseAndThen(auction.house, {
                    message: "auth_timed_auction"
                }, function() {
                    AppSiteWinodwsService.openAuctionSiteWindow(auction, !1, lot);
                }) : $state.go("app.lotPage", {
                    source: "favorites",
                    auctionId: lot.auctionId,
                    lotId: lot.id
                });
            }
        }, $scope.loadPastItems = function() {
            "unloaded" == $scope.data.sceneInfo.pastItemState && ($scope.data.sceneInfo.pastItemState = "loading", 
            AccountService.getFavoriteItems("PAST").then(function(pastItems) {
                if (pastItems.length > 0) {
                    for (var i = 0; i < pastItems.length; i++) $scope.data.sceneInfo.items.push(pastItems[i]);
                    $scope.pagesData.currentPage = CatalogUtilsService.getLotPage($scope.data.sceneInfo.items, pastItems[0].id, $scope.pagesData.itemsPerPage), 
                    displayItems(), $timeout(function() {
                        $scope.scrollTo = pastItems[0].id;
                    }, 10);
                }
                $scope.data.sceneInfo.pastItemState = "loaded";
            }));
        }, init();
    } ]);
}), define("portal/js/modules/account/favorites/index", [ "./favoritesModule", "./favoritesController" ], function() {}), 
define("portal/js/modules/account/myAccount/myAccountModule", [ "angular" ], function(ng) {
    return ng.module("app.account.myAccount", []);
}), define("portal/js/modules/account/myAccount/myAccountContoller", [ "./myAccountModule" ], function(module) {
    module.controller("MyAccountController", [ "$rootScope", "$scope", "$state", "$stateParams", "$modal", "ArraysService", "I18nService", "PortalTextsService", "PortalInfoService", "PortalAuthService", "AccountService", "MyAccountService", function($rootScope, $scope, $state, $stateParams, $modal, ArraysService, I18nService, PortalTextsService, PortalInfoService, PortalAuthService, AccountService, MyAccountService) {
        function setItemsType() {
            $scope.itemsType = $stateParams.itemsType, $scope.titleKey = "link_" + $scope.itemsType, 
            $scope.messageKey = "my_account_message_" + $scope.itemsType, $scope.viewKey = "my_account_view_" + $scope.itemsType;
        }
        function setHouseEntries(houseId, houseAccountInfo) {
            var currentAuctions = [], soldAuctions = [], empty = !0;
            for (var auctionId in houseAccountInfo.auctionsInfo) {
                var auctionInfo = houseAccountInfo.auctionsInfo[auctionId];
                if (auctionInfo.lotsWithAbsenteeBids && "absentee" == $scope.itemsType) {
                    var filteredList = ArraysService.filteredByNonEmpty(auctionInfo.lotsWithAbsenteeBids, "selfAbsenteeBid");
                    0 != filteredList.length && (filteredList = ArraysService.filteredByEmpty(filteredList, "selfSoldLotBid"), 
                    auctionInfo.lotsWithAbsenteeBids = filteredList, currentAuctions.push(auctionInfo), 
                    empty = !1);
                }
                auctionInfo.wonLots && "won" == $scope.itemsType && (soldAuctions.push(auctionInfo), 
                empty = !1);
            }
            ArraysService.inverse(soldAuctions), houseEntry = {
                auctions: {
                    current: currentAuctions,
                    sold: soldAuctions
                },
                approvalState: houseAccountInfo.approvalState,
                house: PortalInfoService.getHouse(houseId),
                empty: empty
            }, $scope.data.housesEntries[houseId] = houseEntry;
        }
        function handleError(houseId) {
            $scope.error = PortalTextsService.getHouseConnectivityError(PortalInfoService.getHouse(houseId));
        }
        function onLangChanged() {
            $scope.error && $scope.data.openedHouseId && handleError($scope.data.openedHouseId);
        }
        function initHouseList() {
            $scope.houses = PortalInfoService.getBidSpiritHouses().slice();
            $scope.currentUser.approvedHousesCodes || [];
        }
        function init() {
            $scope.currentUser ? (setItemsType(), initHouseList(), $stateParams.houseId ? $scope.loadAccountEntryForHouse($stateParams.houseId) : "app.lotPage" == $rootScope.$previousState.name ? $scope.loadAccountEntryForHouse(MyAccountService.getCurrentHouse()) : MyAccountService.clearCache(), 
            $rootScope.$on("i18n.languageChanged", onLangChanged)) : $state.go("app.home");
        }
        $scope.data = {
            housesEntries: {},
            opened: {},
            openedHouseId: null
        }, $scope.onHouseClick = function(houseId) {
            $scope.data.opened[houseId] ? $scope.loadAccountEntryForHouse(houseId) : $state.go("app.myAccount", {
                houseId: null
            });
        }, $scope.loadAccountEntryForHouse = function(houseId) {
            houseId && ($scope.data.opened[houseId] = !0, $scope.data.openedHouseId = houseId, 
            $scope.error = null, $scope.data.housesEntries[houseId] || MyAccountService.loadForHouse(houseId).then(function(houseAccountInfo) {
                setHouseEntries(houseId, houseAccountInfo);
            }, function() {
                handleError(houseId);
            }));
        }, init();
    } ]);
}), define("portal/js/modules/account/myAccount/myAccountHouseEntryDirective", [ "./myAccountModule" ], function(module) {
    module.directive("bsMyAccountHouseEntry", function($rootScope, $timeout, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                houseInfo: "=",
                itemsType: "="
            },
            link: function(scope) {
                scope.currentUser = $rootScope.currentUser;
            },
            templateUrl: PathsService.appTemplatePath("account/myAccount/myAccountHouseEntry")
        };
    });
}), define("portal/js/modules/account/myAccount/myAccountAuctionsSectionDirective", [ "./myAccountModule" ], function(module) {
    module.directive("bsMyAccountAuctionsSection", function($rootScope, $timeout, PathsService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auctionsInfo: "=",
                lotsField: "=",
                itemsType: "=",
                label: "="
            },
            link: function() {},
            templateUrl: PathsService.appTemplatePath("account/myAccount/myAccountAuctionsSection")
        };
    });
}), define("portal/js/modules/account/myAccount/myAccountAuctionBidsDirective", [ "./myAccountModule" ], function(module) {
    module.directive("bsMyAccountAuctionBids", function($rootScope, $filter, $modal, $state, PathsService, I18nService, CatalogUtilsService, AppSiteWinodwsService, AccountService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                auction: "=",
                lots: "=",
                countLabel: "="
            },
            link: function(scope) {
                function updateDisplay() {
                    if (auction.number) scope.auctionName = I18nService.getText("auction_label_number", {
                        number: number
                    }); else {
                        var dateStr = $filter("auctionTime")({
                            date: auction.date,
                            unknownExactDate: !0
                        });
                        scope.auctionName = I18nService.getText("auction_label_date", {
                            date: dateStr
                        });
                    }
                    auction.part && (scope.auctionName += ", " + I18nService.getText("auction_part_" + auction.part)), 
                    scope.auctionName += ": " + I18nService.getText("my_account_" + scope.countLabel, {
                        count: scope.lots.length
                    });
                }
                var auction = scope.auction, number = auction.number;
                scope.currency = auction.catalogInfo.currency, scope.scrollTo = $rootScope.$previousState.args.lotId, 
                CatalogUtilsService.sortLots(scope.lots), scope.gotoLot = function(lot) {
                    var auction = lot.auction;
                    auction.timedAuction && "ENDED" != auction.state ? AccountService.validateRegisteredInHouseAndThen(auction.house, {
                        message: "auth_timed_auction"
                    }, function() {
                        AppSiteWinodwsService.openAuctionSiteWindow(auction, !1, lot);
                    }) : $state.go("app.lotPage", {
                        source: "account",
                        auctionId: lot.auction.id,
                        lotId: lot.id
                    });
                }, updateDisplay(), $rootScope.$on("i18n.languageChanged", updateDisplay);
            },
            templateUrl: PathsService.appTemplatePath("account/myAccount/myAccountAuctionBids")
        };
    });
}), define("portal/js/modules/account/myAccount/myAccountService", [ "./myAccountModule" ], function(module) {
    module.factory("MyAccountService", function($q, $rootScope, $modal, LogService, ArraysService, ApiService, PathsService, CatalogUtilsService, PortalInfoService, PortalAuthService) {
        function loadForHouse(houseId) {
            if ($rootScope.currentUser) {
                var deferred = $q.defer();
                return isCurrentCacheHouse(houseId) ? deferred.resolve(mCachedAccountInfoForHouse) : (clearCache(), 
                ApiService.callApi("/account/getAccountInfoForHouse", {
                    houseId: houseId
                }).success(function(info) {
                    PortalAuthService.setCurrentHouseApprovalState(houseId, info.accountInfo.approvalState);
                    var lotsMap = ArraysService.listToMap(info.lots, "idInApp"), auctionsInfo = {};
                    if (PortalInfoService.getHouse(houseId).increments = info.increments, "APPROVED" == info.accountInfo.approvalState) {
                        var auctionsById = ArraysService.listToMapById(PortalInfoService.getHouseAuctions(houseId));
                        addBidsToAuctionInfo(auctionsInfo, auctionsById, lotsMap, info.accountInfo.absenteeBids, "lotsWithAbsenteeBids"), 
                        addBidsToAuctionInfo(auctionsInfo, auctionsById, lotsMap, info.accountInfo.soldLotsBids, "wonLots");
                    }
                    mCachedAccountInfoForHouse = {
                        houseId: houseId,
                        auctionsInfo: auctionsInfo,
                        approvalState: info.accountInfo.approvalState,
                        lotsMap: ArraysService.listToMapById(info.lots)
                    }, $rootScope.$broadcast("account.dataLoaded"), deferred.resolve(mCachedAccountInfoForHouse);
                }).error(function(error) {
                    deferred.reject(error);
                })), deferred.promise;
            }
        }
        function addBidsToAuctionInfo(auctionsInfo, auctionsById, lotsMap, bids, fieldName) {
            for (var i = 0; i < bids.length; i++) {
                var bid = bids[i], lot = lotsMap[bid.lotIdInApp], auction = auctionsById[bid.auctionId];
                addBidToAuctionInfo(auctionsInfo, auction, lot, bid, fieldName);
            }
        }
        function getAccountItemFromCache(itemId) {
            return mCachedAccountInfoForHouse.lotsMap[itemId];
        }
        function getAccountItem(auction, itemId) {
            var deferred = $q.defer();
            return isCurrentCacheHouse(auction.houseId) ? deferred.resolve(getAccountItemFromCache(itemId)) : loadForHouse(auction.houseId).then(function() {
                deferred.resolve(getAccountItemFromCache(itemId));
            }), deferred.promise;
        }
        function addBidToAuctionInfo(auctionsInfo, auction, lot, bid, fieldName) {
            if (auction && lot) {
                var auctionInfo = auctionsInfo[auction.id];
                auctionInfo || (auctionInfo = {
                    auction: auction
                }, auctionsInfo[auction.id] = auctionInfo);
                var lots = auctionInfo[fieldName];
                switch (lots || (lots = [], auctionInfo[fieldName] = lots), lot.auction = auction, 
                fieldName) {
                  case "wonLots":
                    lot.soldLotBid = lot.selfSoldLotBid = bid;
                    break;

                  case "lotsWithAbsenteeBids":
                    lot.selfAbsenteeBid = bid;
                }
                lots.push(lot);
            } else LogService.logError("failed to get auction with id " + bid.auctionId + ", auction or lot not found.");
        }
        function isCurrentCacheHouse(houseId) {
            return mCachedAccountInfoForHouse && mCachedAccountInfoForHouse.houseId == houseId;
        }
        function clearCache() {
            mCachedAccountInfoForHouse = null;
        }
        function getCurrentHouse() {
            return mCachedAccountInfoForHouse ? mCachedAccountInfoForHouse.houseId : null;
        }
        var mCachedAccountInfoForHouse = null;
        return {
            loadForHouse: loadForHouse,
            getAccountItem: getAccountItem,
            getAccountItemFromCache: getAccountItemFromCache,
            clearCache: clearCache,
            getCurrentHouse: getCurrentHouse
        };
    });
}), define("portal/js/modules/account/myAccount/index", [ "./myAccountModule", "./myAccountContoller", "./myAccountHouseEntryDirective", "./myAccountAuctionsSectionDirective", "./myAccountAuctionBidsDirective", "./myAccountService" ], function() {}), 
define("portal/js/modules/account/index", [ "./accountModule", "./accountService", "./houseApprovalDirective", "./bidRulesService", "./favorites/index", "./myAccount/index" ], function() {}), 
define("portal/js/modules/nudges/nudgesModule", [ "angular" ], function(ng) {
    return ng.module("app.nudges", []);
}), define("portal/js/modules/nudges/nudgeNavbarPopupDirective", [ "./nudgesModule" ], function(module) {
    module.directive("bsNudgeNavbarPopup", function($rootScope, $timeout, PathsService, NudgesService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {
                house: "="
            },
            link: function(scope) {
                function setNudgeType(nudgeType) {
                    $rootScope.nudgePopupVisible = !0, scope.isVisible = !0, scope.nudgeType = nudgeType, 
                    NudgesService.setNudgedRecently();
                }
                function updateDisplay() {
                    switch (scope.hide(), scope.featureToNudate = NudgesService.getNextFeatureToNudgeUser(), 
                    scope.featureToNudate) {
                      case "HOUSES_ALERTS":
                        setNudgeType("housesAlerts");
                    }
                }
                scope.hide = function() {
                    scope.isVisible = !1, $rootScope.nudgePopupVisible = !1;
                }, scope.onClick = function() {
                    scope.hide(), NudgesService.rememberNudgedFeature(scope.featureToNudate);
                }, $rootScope.$on("auth.menuVisible", function(e, menuVisible) {
                    menuVisible && scope.hide();
                }), updateDisplay(), $rootScope.$on("auth.newSessionUser", updateDisplay);
            },
            templateUrl: PathsService.appTemplatePath("nudges/navbar/nudgeNavbarPopup")
        };
    });
}), define("portal/js/modules/nudges/nudgesService", [ "./nudgesModule" ], function(module) {
    module.factory("NudgesService", function($rootScope, $timeout, $log, StringsService, PathsService, ApiService, SessionsService, LocalStorageService, PopupsService, PortalAuthService, SettingsService) {
        function rememberNudgedFeature(feature) {
            return ApiService.callApi("/users/rememberNudgedFeature", {
                feature: feature
            });
        }
        function userNudgedOnFeature(feature) {
            if (!$rootScope.currentUser) return !1;
            var nudgedFeatures = $rootScope.currentUser.nudgedFeatures;
            return nudgedFeatures ? null != nudgedFeatures[feature] : !1;
        }
        function getNextFeatureToNudgeUser() {
            if (!checkIfNeedsToNudgeUser()) return null;
            var feature = "HOUSES_ALERTS";
            return userNudgedOnFeature(feature) ? void 0 : feature;
        }
        function checkIfNeedsToNudgeUser() {
            return $rootScope.currentUser ? "COMPLETE" != $rootScope.currentUser.registrationStage ? !1 : !nudgedRecently : !1;
        }
        function setNudgedRecently() {
            nudgedRecently = !0;
        }
        function daysSinceLastBrowserNudge(feature) {
            var timeSinceLastNudge = LocalStorageService.load("nudge_" + feature);
            return timeSinceLastNudge ? (new Date().getTime() - timeSinceLastNudge) / 864e5 : void 0;
        }
        function getNextFeatureToNudgeNonUser() {
            if (!checkIfNeedsToNudgeNonUser()) return null;
            var feature = "HOUSES_ALERTS", daysSinceLastNudge = daysSinceLastBrowserNudge(feature);
            return !daysSinceLastNudge || daysSinceLastNudge > SettingsService.get("daysToWaitCatalogsAlertRenudge", 30) ? feature : void 0;
        }
        function checkIfNeedsToNudgeNonUser() {
            return PortalAuthService.isAuthPopupOn() ? !1 : $rootScope.currentUser ? !1 : $rootScope.searchAgentRequest ? !1 : $rootScope.viewPort.mobileMedia ? !1 : LocalStorageService.isEnabled() ? LocalStorageService.load("lastLogin") ? !1 : !0 : !1;
        }
        function showNudgeForNonUser() {
            var feature = getNextFeatureToNudgeNonUser();
            if (feature) {
                {
                    StringsService.upUnderscoreTocamelCase(feature);
                }
                PopupsService.showPopup({
                    contentInclude: "nudges/modal/housesAlertsModal",
                    code: "nudge",
                    size: "sm",
                    showRegisterForm: function() {
                        PortalAuthService.showAuthModalOrScene("register");
                    }
                }), nudgedRecently = !0, LocalStorageService.store("nudge_" + feature, new Date().getTime());
            }
        }
        var nudgedRecently = !1;
        return $timeout(showNudgeForNonUser, 3e4), {
            getNextFeatureToNudgeUser: getNextFeatureToNudgeUser,
            rememberNudgedFeature: rememberNudgedFeature,
            setNudgedRecently: setNudgedRecently
        };
    });
}), define("portal/js/modules/nudges/index", [ "./nudgesModule", "./nudgeNavbarPopupDirective", "./nudgesService" ], function() {}), 
define("portal/js/modules/components/componentsModule", [ "angular" ], function(ng) {
    return ng.module("app.components", []);
}), define("portal/js/modules/components/houseCarouselDirective", [ "./componentsModule" ], function(module) {
    module.directive("bsHousesCarousel", function($window, $timeout, $interval, $rootScope, PathsService, PortalInfoService, ArraysService, CloudinaryService, SessionsService, ViewPortService) {
        return {
            restrict: "E",
            replace: !0,
            scope: {},
            link: function(scope, element) {
                function getHouseImageUrl(house) {
                    var picResource = house.resources ? house.resources.hallPicture : "";
                    return CloudinaryService.getUrl(picResource, {
                        quality: 10,
                        size: ViewPortService.getViewPortWidth() + "x600",
                        mode: "fill",
                        exactSize: !0
                    });
                }
                function initBgPics() {
                    scope.bgPics.length = 0, $interval.cancel(mTimer), scope.houses = [];
                    for (var houses = PortalInfoService.getHouses(), i = 0; i < houses.length; i++) {
                        var house = houses[i];
                        getHouseImageUrl(house) && scope.houses.push(house);
                    }
                    ArraysService.shuffle(scope.houses), angular.forEach(scope.houses, function(house) {
                        scope.bgPics.push(getHouseImageUrl(house));
                    }), scope.elementHeight = element[0].offsetHeight, mTimer = $interval(changePic, PIC_SWITCH_INTERVAL);
                }
                function changePic() {
                    scope.elementHeight = element[0].offsetHeight, 0 != scope.bgPics.length && scope.animationOn && (scope.currentPicInd = (scope.currentPicInd + 1) % scope.bgPics.length);
                }
                var mTimer = null, mAnimationDisabled = !1;
                if (PIC_SWITCH_INTERVAL = 15e3, scope.bgPics = [], scope.currentPicInd = 0, scope.elementHeight = element[0].offsetHeight, 
                (SessionsService.isIe8() || SessionsService.isMobile()) && (mAnimationDisabled = !0), 
                scope.animationOn = !mAnimationDisabled, $timeout(function() {
                    $interval.cancel(mTimer);
                }, 3e5), element.on("$destroy", function() {
                    $interval.cancel(mTimer);
                }), mAnimationDisabled) $rootScope.$on("viewPort.viewPortWidthChanged", function() {
                    $timeout(function() {
                        scope.bgPics[0] = getHouseImageUrl(scope.houses[0]);
                    }, 100);
                }); else {
                    var windowElement = angular.element($window), handleScroll = function() {
                        var scrollTop = ViewPortService.getWindowScroll().top;
                        scope.elementHeight && scrollTop > scope.elementHeight ? element.addClass("hidden") : element.removeClass("hidden");
                    };
                    windowElement.on("scroll", scope.$apply.bind(scope, handleScroll)), $rootScope.$on("viewPort.orientationChange", initBgPics);
                }
                $rootScope.$on("auth.upperNavPopupDisplay", function(event, isOn) {
                    isOn && (scope.animationOn = !1);
                }), initBgPics();
            },
            templateUrl: PathsService.appTemplatePath("elements/carousel/housesCarousel")
        };
    });
}), define("portal/js/modules/components/ie8WarningDirective", [ "./componentsModule" ], function(module) {
    module.directive("ie8Warning", function($compile, $rootScope, I18nService, SessionsService) {
        return {
            restrict: "A",
            replace: !0,
            link: function(scope, element) {
                function setHtml() {
                    var html = I18nService.getText("warning_ie_not_supported");
                    html = html.replace("chrome", "class='chrome' target='downloadChrome' href='https://www.google.com/chrome'").replace("dismiss", "class='dismiss' ng-click='dismiss()'"), 
                    element.html('<div class="text">' + html + "</div>"), scope.dismiss = function() {
                        scope.ie8WarningVisible = !1;
                    }, $compile(element.contents())(scope);
                }
                scope.ie8WarningVisible = SessionsService.isIe8(), $rootScope.$on("i18n.languageChanged", setHtml), 
                setHtml();
            },
            template: '<div ng-show="ie8WarningVisible" class="ie-warning"></div>'
        };
    });
}), define("portal/js/modules/components/contentLoaderDirective", [ "./componentsModule" ], function(module) {
    module.directive("bsContentLoader", function(PathsService) {
        return {
            restrict: "E",
            scope: {
                loaded: "="
            },
            link: function(scope, element) {
                scope.$watch("loaded", function(loaded) {
                    loaded && element.attr("done", !0);
                });
            },
            templateUrl: PathsService.appTemplatePath("elements/contentLoader")
        };
    });
}), define("portal/js/modules/components/pageFooterController", [ "./componentsModule" ], function(module) {
    module.controller("PageFooterController", [ "$scope", "$rootScope", "$state", "PopupsService", "PortalInfoService", function($scope, $rootScope, $state, PopupsService) {
        function init() {
            switch ($scope.currentRegion) {
              case "IL":
                $scope.fbPage = "pages/Bidspirit-Israel/280735812128712", $scope.twitterPage = "BidspiritIsrael";
                break;

              case "RU":
                $scope.fbPage = "bidspirit.russia", $scope.twitterPage = "BidspiritRussia";
                break;

              default:
                $scope.fbPage = "bidspirit", $scope.twitterPage = "bidspirit";
            }
        }
        $scope.shouldDisplay = function() {
            return 0 == $state.current.name.indexOf("app.lotPage.") ? !1 : !0;
        }, $scope.shouldHideContactUs = function() {
            switch ($state.current.name) {
              case "app.contact":
              case "app.about":
              case "app.prdouct":
              case "app.popupScene":
                return !0;
            }
            return !1;
        }, $scope.showInfoPopup = function(code) {
            PopupsService.showLegalDocPopup(code);
        }, init();
    } ]);
}), define("portal/js/modules/components/popupsService", [ "./componentsModule" ], function(module) {
    var mPopupSceneOptions = {};
    module.factory("PopupsService", function($http, $rootScope, $state, $modal, $modalStack, PathsService, I18nService, DialogsService, PortalInfoService, PortalTextsService) {
        function showLegalDocPopup(code) {
            PortalInfoService.getLegalDoc(code).success(function(docContent) {
                showInfoPopup({
                    contentHtml: docContent.val,
                    code: code
                });
            });
        }
        function showPopupAsModal(options) {
            options.isModal = !0, $modal.open({
                templateUrl: PathsService.appTemplatePath("elements/popups/popupModal"),
                size: options.size || "lg",
                backdrop: options.unclosable ? "static" : !0,
                controller: function($scope) {
                    $scope.options = options;
                }
            });
        }
        function showInfoPopup(options) {
            options.buttons = [ {
                text: "dialogs_ok",
                isCloseButton: !0
            } ], showPopup(options);
        }
        function showPopup(options) {
            $rootScope.viewPort.mobileMedia ? showPopupAsScene(options) : showPopupAsModal(options);
        }
        function showPopupAsScene(options) {
            mPopupSceneOptions[options.code] = options, options.isModel = !1, options.contentUrl ? $http.get(options.contentUrl).success(function(content) {
                options.contentUrl = "", options.contentHtml = content, $state.go("app.popupScene", {
                    code: options.code
                });
            }) : $state.go("app.popupScene", {
                code: options.code
            });
        }
        function showErrorPopup(message, title) {
            showInfoPopup({
                contentHtml: message,
                title: title || I18nService.getText("alert_notice_title"),
                code: "error",
                size: "sm"
            });
        }
        function showHouseTerms(house) {
            PortalInfoService.getHouseTermsUrl(house.id, I18nService.getCurrentLang()).success(function(url) {
                showInfoPopup({
                    contentUrl: url.val,
                    backText: "dialogs_back",
                    code: "houseTerms"
                });
            });
        }
        function showHouseConnectivityErrorPopup(house) {
            DialogsService.showAlert({
                title: "alert_notice_title",
                message: "my_account_unknown_error",
                params: PortalTextsService.getHouseConnectivityErrorParams(house)
            });
        }
        return {
            showPopup: showPopup,
            showInfoPopup: showInfoPopup,
            showLegalDocPopup: showLegalDocPopup,
            showErrorPopup: showErrorPopup,
            showHouseTerms: showHouseTerms,
            showHouseConnectivityErrorPopup: showHouseConnectivityErrorPopup
        };
    }), module.controller("PopupController", [ "$scope", "$state", "$stateParams", function($scope, $state, $stateParams) {
        mPopupSceneOptions && mPopupSceneOptions[$stateParams.code] ? $scope.options = mPopupSceneOptions[$stateParams.code] : $state.go("app.home");
    } ]);
}), define("portal/js/modules/components/structuredDataService", [ "./componentsModule" ], function(module) {
    module.factory("StructuredDataService", function($rootScope, SettingsService, StringsService, I18nService, DomUtilsService, CloudinaryService) {
        function getAuctionName(auction) {
            var auctionName = "";
            return auction.number && (auctionName = I18nService.getText("auction_label_number_public", {
                number: auction.number
            }), auction.part && (auctionName += " " + I18nService.getText("auction_part_" + auction.part)), 
            auctionName += " - "), auctionName += I18nService.getLangField(auction.name);
        }
        function getAuctionIsoTime(auction) {
            if (!auction.time) return "";
            var time = (1 * auction.time.split(":")[0], auction.date + "T" + auction.time), tz = 1 * SettingsService.get("regionTimezoneDiff");
            return time += tz >= 0 ? "+" : "-", time += StringsService.pad(tz, 2, "0") + ":00";
        }
        function setAuctionImage(structuredData, auction) {
            var imgPath = auction.resources && auction.resources.topItem;
            imgPath || (imgPath = auction.house && auction.house.resources.mainPageLogo), structuredData.image = imgPath ? "https:" + CloudinaryService.getUrl(imgPath) : BIDSPIRIT_LOGO_PATH;
        }
        function getAuctionStructuredData(auction) {
            var structuredData = {}, auctionHref = window.location.href.split("#")[0] + "#!/catalog/auction/" + auction.id;
            return structuredData = {
                "@context": "http://schema.org",
                "@type": "SaleEvent",
                name: getAuctionName(auction),
                url: auctionHref,
                location: {
                    "@type": "Place",
                    name: I18nService.getLangField(auction.house.details.name),
                    address: I18nService.getLangField(auction.address)
                }
            }, setAuctionImage(structuredData, auction), !auction.time || auction.hideTime || auction.unknownExactDate || (structuredData.startDate = getAuctionIsoTime(auction)), 
            structuredData;
        }
        function setPriceStructuredDataMetaTags(lot) {
            var currency = lot.auction.catalogInfo.currency, price = lot.startPrice;
            price ? (DomUtilsService.setMetaTag("name", "twitter:data1", I18nService.sumInCurrency(price, currency)), 
            DomUtilsService.setMetaTag("name", "twitter:label1", I18nService.getText("lot_start_price"))) : lot.estimatedPrice && (price = lot.estimatedPrice.split(/\s|\-/)[0].replace(/[^\d]/g, ""), 
            DomUtilsService.setMetaTag("name", "twitter:data1", lot.estimatedPrice), DomUtilsService.setMetaTag("name", "twitter:label1", I18nService.getText("lot_estimated_price"))), 
            price && (DomUtilsService.setMetaTag("property", "og:price:amount", StringsService.readableNumber(price) + ".00"), 
            DomUtilsService.setMetaTag("property", "og:price:currency", I18nService.isoCurrency(currency)));
        }
        function resetStructuredDataMetaTags() {
            DomUtilsService.setMetaTag("property", "og:image", BIDSPIRIT_LOGO_PATH), DomUtilsService.removeMetaTag("property", "og:price:amount"), 
            DomUtilsService.removeMetaTag("property", "og:price:currency"), DomUtilsService.removeMetaTag("name", "twitter:data1"), 
            DomUtilsService.removeMetaTag("name", "twitter:label1"), DomUtilsService.removeMetaTag("name", "twitter:data2"), 
            DomUtilsService.removeMetaTag("name", "twitter:label2");
            var title = I18nService.getTextWithRegion("page_default_title");
            document.title = title ? "bidspirit - " + title : "";
            var description = I18nService.getTextWithRegion("page_default_description");
            DomUtilsService.setMetaTag("name", "description", description), DomUtilsService.setMetaTag("property", "og:description", description), 
            DomUtilsService.setMetaTag("name", "twitter:description", description), DomUtilsService.setMetaTag("property", "og:type", "article"), 
            DomUtilsService.setMetaTag("name", "twitter:card", "summary"), setTimeout(function() {
                var canonicalUrl = (window.location + "").replace(/[\&\?]searchAgentRequest=true/, "").replace(/[\&\?]sessionId[^\&\#]+/, "").replace(/[\&\?]_escaped_fragment_=/, "#!").replace(/\%2F/gi, "/");
                DomUtilsService.setMetaTag("bidspirit-property", "originalUrl", window.location + ""), 
                DomUtilsService.setMetaTag("property", "og:url", canonicalUrl), DomUtilsService.setMetaTag("property", "og:title", document.title + ""), 
                DomUtilsService.setMetaTag("name", "twitter:title", document.title + ""), DomUtilsService.setTagProp("link", "rel", "canonical", "href", canonicalUrl);
            }, 20);
        }
        function getPriceStructuredDataTag(price, currency) {
            var tagHtml, suffix, rangeSepInd = price.search(/\s|\-/);
            -1 == rangeSepInd ? (tagHtml = price, suffix = "") : (tagHtml = price.substr(0, rangeSepInd + 1), 
            suffix = price.substr(rangeSepInd + 1));
            var priceNumber, currencyInd = tagHtml.indexOf(currency);
            return priceNumber = -1 == currencyInd ? tagHtml : 0 == currencyInd ? tagHtml.substr(currencyInd + currency.length) : price.substr(0, currencyInd), 
            tagHtml = tagHtml.replace(currency, '<meta itemprop="priceCurrency" content="' + I18nService.isoCurrency(currency) + '" />' + currency), 
            tagHtml = tagHtml.replace(priceNumber, '<meta  itemprop="price" content="' + priceNumber.replace(/[^\d]/g, "") + '" />' + priceNumber), 
            tagHtml + suffix;
        }
        var BIDSPIRIT_LOGO_PATH = "http://s3.amazonaws.com/bidspirit-portal/images/logo.png";
        return {
            getAuctionStructuredData: getAuctionStructuredData,
            getPriceStructuredDataTag: getPriceStructuredDataTag,
            setPriceStructuredDataMetaTags: setPriceStructuredDataMetaTags,
            resetStructuredDataMetaTags: resetStructuredDataMetaTags
        };
    });
}), define("portal/js/modules/components/index", [ "./componentsModule", "./houseCarouselDirective", "./ie8WarningDirective", "./contentLoaderDirective", "./pageFooterController", "./popupsService", "./structuredDataService" ], function() {}), 
define("portal/js/modules/navigation/navigationModule", [ "angular" ], function(ng) {
    return ng.module("app.navigation", []);
}), define("portal/js/modules/navigation/upperNavigationController", [ "./navigationModule" ], function(module) {
    module.controller("UpperNavigationController", [ "$scope", "$rootScope", "$window", "$state", "I18nService", "LocalStorageService", "ViewPortService", "SessionsService", "PortalAuthService", "PortalInfoService", "SearchService", function($scope, $rootScope, $window, $state, I18nService, LocalStorageService, ViewPortService, SessionsService, PortalAuthService, PortalInfoService, SearchService) {
        function checkMobileSearchVisible() {
            $scope.data.showMobileSearch = !1, !$scope.data.mobileMenuOn && "search" != $state.current.url && window.innerWidth <= 991 && new Date().getTime() - $scope.data.lastSceneStart > 5e3 && ViewPortService.getWindowScroll().top > 500 && ($scope.data.showMobileSearch = !0);
        }
        $scope.data = {
            mobileMenuOn: !1,
            showMobileSearch: !1,
            lastSceneStart: null,
            langs: I18nService.getSupportedLangs(),
            infoLinks: [ "contact", "houses", "home" ],
            searchToken: ""
        }, $scope.setLanguage = function(lang) {
            I18nService.setLang(lang), LocalStorageService.store("lastLang", lang), $rootScope.currentUser && PortalInfoService.setCurrentUserPreferredLang(lang);
        }, $scope.logout = function() {
            PortalAuthService.logout().success(function() {
                $state.go("app.home");
            });
        }, $scope.gotoSearch = function() {
            SearchService.gotoSearchScene($scope.data.searchToken);
        }, $scope.gotoSearchIfMobile = function() {
            SessionsService.isMobile() && SearchService.gotoSearchScene();
        }, $scope.nextRegistrationStep = function() {
            switch ($scope.currentUser.registrationStage) {
              case "UNCONFIRMED_EMAIL":
                $state.go("app.auth", {
                    authScene: "warning"
                });
                break;

              case "INCOMPLETE_PROFILE":
                $state.go("app.auth", {
                    authScene: "postRegistrationDetails"
                });
            }
        }, $scope.state = $state, $scope.$on("$stateChangeStart", function() {
            $scope.data.searchToken = "", $scope.data.lastSceneStart = new Date().getTime(), 
            checkMobileSearchVisible();
        }), $window.onscroll = function() {
            checkMobileSearchVisible(), $scope.$apply();
        };
    } ]);
}), define("portal/js/modules/navigation/mobileMenuController", [ "./navigationModule" ], function(module) {
    module.controller("MobileMenuController", [ "$scope", "$rootScope", "$timeout", "$state", "I18nService", "LocalStorageService", "PortalAuthService", function($scope, $rootScope, $timeout, $state) {
        function handleMenuDisplay() {
            var currentState = $state.current.name;
            if ("app.mobileMenu" == currentState) {
                var timeSinceLastClick = new Date().getTime() - mLastMenuClick;
                100 > timeSinceLastClick || !mMenuWasHidden ? $scope.data.mobileMenuOn = !0 : window.history.back();
            } else mMenuWasHidden = !0, $scope.data.mobileMenuOn = !1;
        }
        function hideMenuIfOn() {
            $scope.data.mobileMenuOn && (mMenuWasHidden ? window.history.back() : $state.go("app.home"));
        }
        mMenuWasHidden = !1, mLastMenuClick = null, $scope.toggleMenu = function() {
            var currentState = $state.current.name;
            "app.mobileMenu" == currentState ? window.history.back() : (mLastMenuClick = new Date().getTime(), 
            $state.go("app.mobileMenu"));
        }, $rootScope.$on("$stateChangeSuccess", handleMenuDisplay), $rootScope.$on("i18n.languageChanged", hideMenuIfOn), 
        handleMenuDisplay();
    } ]);
}), define("portal/js/modules/navigation/reloadController", [ "./navigationModule" ], function(module) {
    module.controller("ReloadController", [ "$scope", "$window", "$timeout", function($scope, $window, $timeout) {
        $timeout(function() {
            $window.history.back();
        }, 300);
    } ]);
}), define("portal/js/modules/navigation/appSiteWinodwsService", [ "./navigationModule" ], function(module) {
    module.factory("AppSiteWinodwsService", function($rootScope, StringsService, I18nService, PortalAuthService) {
        function getAuctionSiteUrl(auction, sessionToken) {
            var siteCode = auction.house.site.code, baseUrl = "", query = "?code=" + auction.house.code;
            switch (siteCode) {
              case "dev":
                baseUrl = "http://192.168.1.200:8080/BidSpirit/";
                break;

              case "demo":
                baseUrl = "https://demo.bidspirit.com";
                break;

              default:
                baseUrl = "https://" + siteCode + ".bidspirit.com";
            }
            var url = baseUrl;
            sessionToken && (query += (query ? "&" : "?") + "pt=" + sessionToken);
            var hash;
            return hash = "RUNNING" == auction.state ? "live" : "catalog~" + auction.auctionIdInApp + "~" + auction.dayIdInApp, 
            /iPad|iPhone|iPod/.test(navigator.userAgent) && (query += (query ? "&" : "?") + "hashValue=" + hash), 
            url + query + "#" + hash;
        }
        function showDemo(demoCode) {
            var url = "https://demo.bidspirit.com/?demoMode=1&";
            switch (demoCode) {
              case "classic":
                url += "avatars=0";
                break;

              case "unique":
                url += "avatars=1";
                break;

              case "virtualAuctioneer":
                url += "avatarAuctioneer=1";
            }
            switch (I18nService.getCurrentLang()) {
              case "ru":
                url += "&code=demo-russian&lang=ru";
                break;

              case "he":
                url += "&code=demo-site&lang=he";
                break;

              case "en":
                url += "&code=demo-site&lang=en";
            }
            window.open(url);
        }
        
        
       	function openAuctionSiteWindow(auction, noAutoLogin, lot){
			
			if (!auction) return;
			
			var token = $rootScope.currentUser ? StringsService.randomString(10) : null ;
			
			if (noAutoLogin){
				token = null;
			}
			var url = getAuctionSiteUrl(auction, token) +(lot ? ("~"+lot.idInApp) : "");
			
			if (GlobalConfig.isMobileApp){
				tryToaunchWithPuffin(url);
			} else {
				window.open(url,"_system");
			}
			
			if (token ){
				PortalAuthService.createTokenForAppSite(auction.houseId, token);
			}
		}
		
		function tryToaunchWithPuffin(url){
			if (typeof device=="undefined"){
				window.open(url,"_system");
				return;
			}
			
			var scheme;
			
			if(device.platform === 'iOS') {
			    scheme = 'puffin://';
			}
			else if(device.platform === 'Android') {
			    scheme = 'com.cloudmosa.puffin';
			}

			appAvailability.check(
			    scheme,       // URI Scheme or Package Name
			    function() {  // Success callback
			        //alert(scheme + ' is available :)');
			    	window.open(url.replace("https","puffin"),"_system");			    	
			    },
			    function() {  // Error callback
			    	//alert(scheme + ' is not available :(');
			    	window.open(url,"_system");
			    }
			);
		}
        
        
        return {
            openAuctionSiteWindow: openAuctionSiteWindow,
            showDemo: showDemo
        };
    });
}), define("portal/js/modules/navigation/index", [ "./navigationModule", "./upperNavigationController", "./mobileMenuController", "./reloadController", "./appSiteWinodwsService" ], function() {}), 
define("portal/js/modules/portalModules", [ "angular", "commonModules", "./main/index", "./auth/index", "./userDetails/index", "./alerts/index", "./info/index", "./auctions/index", "./houses/index", "./account/index", "./nudges/index", "./components/index", "./navigation/index" ], function(ng) {
    return ng.module("app.portalModules", [ "app.main", "app.auth", "app.userDetails", "app.userAlerts", "app.info", "app.auctions", "app.houses", "app.account", "app.nudges", "app.components", "app.navigation" ]);
}), define("app", [ "angular", "ngdir/angular-animate", "ngdir/angular-ui-router", "ngdir/angular-ui-bootstrap", "ngdir/angular-upload", "ngdir/angular-google-analytics", "commonModules", "portal/js/modules/external/index", "portal/js/modules/portalModules" ], function(angular) {
	
    function initAnalytics(AnalyticsProvider){    	
    	if (window.location.href.indexOf("searchAgentRequest")==-1 && window.location.href.indexOf("bidspirit")!=-1){
    		AnalyticsProvider.setAccount('UA-56607963-1');
    		AnalyticsProvider.useAnalytics(true);
    	}
    }
    
    return angular.module('app', [
        'ngAnimate',
        'ngUpload',
        'angular-google-analytics',
        
        'commonModules',
        
        'app.portalModules',
        'app.externals',
        
        'ui.router', 
        'ui.bootstrap'
    ]).config(function($locationProvider, AnalyticsProvider){
    	$locationProvider.hashPrefix('!');
    	initAnalytics(AnalyticsProvider)
    }).run(function($templateCache) {
        $templateCache.put("/common/templates/forms/asyncButton.html?0.424", '<button   class="bs-async-button" ng-class="buttonClass + (locked ? \' waiting\' : \'\')"  ng-click="executeAction()">  <div class="text">{{label | i18n }}</div>  <div ng-transclude></div>  </button>   '), 
        $templateCache.put("/common/templates/forms/formGroup.html?0.424", '<div class="form-group {{cssClass}}"> <div> <div ng-transclude></div> </div>  </div> '), 
        $templateCache.put("/common/templates/dialogs/scopeAlert.html?0.424", "<div style=\"display:{{alert.message?'block':'none'}}\"> <alert  type=\"{{alert.type || 'info'}}\" close=\"hideScopeAlert()\"> {{alert.message | i18n}} </alert> </div> "), 
        $templateCache.put("/common/templates/dialogs/alert.html?0.424", '<div bs-current-direction> <div class="modal-header"> <div class="modal-title">{{(dialogData.title || "alert_notice_title") | i18n}}</div>  </div>  <div class="modal-body" ng-bind-html="dialogData.message | i18n:dialogData.params"></div>  <div class="modal-footer"> <button class="btn btn-primary" ng-click="close()">{{(dialogData.ok || "dialogs_ok") | i18n}}</button> </div> </div>  '), 
        $templateCache.put("/common/templates/dialogs/image.html?0.424", '<div class="modal-header"> <button type="button" class="close" ng-click="$close()">&times;</button> <h4 class="modal-title">{{dialogData.imageName}}</h4> </div>  <div class="modal-body"><img ng-src="{{dialogData.imagePath | cloudinary}}" class="img-responsive"> </ </div>  <div class="modal-footer"> <button class="btn btn-primary" ng-click="close()">{{(dialogData.close || "dialogs_close") | i18n}}</button> </div> '), 
        $templateCache.put("/common/templates/dialogs/confirm.html?0.424", '<div bs-current-direction> <div class="modal-header"> <div class="modal-title">{{(dialogData.title || "dialogs_confirm_title") | i18n}}</div>  </div>  <div class="modal-body">{{dialogData.message | i18n:dialogData.params}}</div>  <div class="modal-footer"> <button class="btn btn-danger" ng-click="ok()">{{(dialogData.ok || "dialogs_ok") | i18n}}</button> <button class="btn btn-warning" ng-click="close()">{{(dialogData.cancel || "dialogs_cancel") | i18n}}</button> </div> </div>  '), 
        $templateCache.put("/common/templates/elements/pagination.html?0.424", '<div class="bs-pagination" >  <pagination  ng-show= "shouldShow" total-items="pagesData.itemsCount"  ng-model="pagesData.currentPage"  max-size="maxButtons"  items-per-page = "pagesData.itemsPerPage" class="pagination-lg" previous-text="◀" next-text="▶" ng-change="callOnCurrentPageChange()"  rotate="false"  num-pages="pagesData.numPages"> </pagination> </div>   '), 
        $templateCache.put("/portal/templates/info/contact.html?0.424", '<div  class="contact scene" ng-controller="ContactController" bs-scroll-to-top> <div class="upper-part">  <div class="dark overlay">  <div class="message center-block container"> <H1>{{\'link_contact\' | i18n}}</H1> <div class="short-separator"></div> <h4 class="message-line">{{\'contact_message_line_1\' | i18n}}</h4> <h4 class="message-line">{{\'contact_message_line_2\' | i18n}}</h4>  <bs-linkable-text class="sell-message" options="{ textKey:\'contact_message_sell\',  onLinkClick:gotoAuctionHouses }" > </bs-linkable-text> </div> </div> </div> <div class="content container col-lg-5 col-md-7  col-xs-12" > <form name=\'contactForm\' novalidate bs-form  bs-submit="send()" ng-show="$state.current.name!=\'app.contact.thanks\'"> <div class="row"> <bs-form-group field-name="name" label="user_details_name" css-class="col-md-5  col-xs-11 float"> <label class="float"></label> <span class="float star">*</span><div><!-- this empty div is needed for ie8 --></div>  <bs-form-validation-message required="error_name_mandatory" css-class="float"> </bs-form-validation-message> <div class="clearfix"></div> <input  name="name" class="form-control" ng-model="contact.name" required /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group> <div class="col-md-2 float col-xs-0"></div> <bs-form-group field-name="email" label="user_details_email" css-class="col-md-5 col-xs-11 float"> <label class="float"></label> <span class="float star">*</span><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message css-class="float"> </bs-form-validation-message> <div class="clearfix"></div> <input  dir="ltr" type="email" name="email" class="form-control" ng-model="contact.email" required /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group>  </div> <div class="row"> <bs-form-group field-name="phone" label="user_details_phone" css-class="col-md-5  col-xs-11 float"> <label></label> <input dir="ltr"   name="phone" class="form-control" ng-model="contact.phone" /><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message css-class="float"> </bs-form-validation-message> </bs-form-group>  <div class="col-md-2 float col-xs-0"></div> <bs-form-group field-name="state" label="user_details_country" css-class="col-md-5 col-xs-11 float"> <label></label> <input  name="state" class="form-control" ng-model="contact.state" /><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message css-class="float"> </bs-form-validation-message> </bs-form-group>   </div> <div class="row">  <bs-form-group field-name="message" label="contact_message_body" css-class="col-md-12 col-xs-11 float" > <label class="float"></label> <span class="float star">*</span><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message css-class="float" required="error_message_mandatory"> </bs-form-validation-message> <div class="clearfix"></div> <textarea  name="message" class="form-control" ng-model="contact.message" required ></textarea><div><!-- this empty div is needed for ie8 --></div> </bs-form-group>  </div>  <div class="row"> <div class="orange common-button col-sm-3 float" ng-click="contactForm.submit()" > <div class="text">{{"dialogs_send" | i18n }}</div> </div>   </div> </form> <div class="thanks .container animate-show" ng-show="$state.current.name==\'app.contact.thanks\'"> {{"contact_thanks" | i18n }} </div> </div>  <div class="direct-contact"> <div class="text" ng-bind-html=\'"contact_direct" | i18n:{phone:BidspiritInfo.phoneLink, email:BidspiritInfo.emailLink}\'>  </div> </div> </div> '), 
        $templateCache.put("/portal/templates/info/product/productMain.html?0.424", '<div ng-controller="ProductController" bs-scroll-to-top> <div class="product scene"> <div class="upper-part">  <div class="dark overlay"> </div> </div>  <div class="main center-block "> <h1 class="center-block col-md-5 col-xs-12" ng-bind-html="mainFeature.title | langField"></h1>  <div class="short-separator"></div> <div class="image center-block  col-md-7 col-xs-12" ng-if="mainFeature.resources!=null" bs-cloudinary-bg="{{mainFeature.resources[\'productsPagePic\']}}"  >  </div> <div class="info center-block  col-md-9 col-lg-7 col-xs-12" ng-bind-html="mainFeature.info | langField">  </div> <div class="orange contact-us common-button center-block center-block"  ui-sref="app.contact"> <div class="text">{{"link_contact" | i18n }}</div> </div>  <div class="gray-separator col-md-9 col-lg-7 col-xs-12 center-block"></div> </div>  <div class="features"> <h3 class="section-title">{{\'product_features\' | i18n}}</h3> <div class="short-separator"></div> <div ng-include src="\'info/product/productFeatures\' | appTemplate"></div> </div>  <div class="gray-separator col-md-9 col-lg-7 col-xs-12 center-block"></div>  <div class="contact"> <div class="container col-lg-4 col-md-5 col-sm-6 col xs-10 center-block"> <h3 class="caption">{{\'product_contact_caption\' | i18n}}</h3> <div class="short-separator"></div> <div class="message-line">{{\'product_contact\' | i18n}}</div> <div class="orange contact-us common-button center-block" ui-sref="app.contact"> <div class="text">{{"link_contact" | i18n }}</div> </div> </div>  </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/info/product/productFeatures.html?0.424", '<div class="list container-fluid"> <div class="row"> <div class="item col-md-3 col-xs-10"  ng-repeat="feature in features" ng-if  = "feature.code!=\'main\'"> <div class="frame" ng-class="[feature.code,currentLang]"> <div class="image"  bs-cloudinary-bg="{{feature.resources[\'productsPagePic\']}}"  params=" {imageMode:\'fill\',size:\'360x226\'} ">  </div>  <div class="texts"> <h2 class="caption"> {{feature.title | langField}} </h2>   <div class="short-separator"></div> <div class="info" ng-bind-html="feature.info | langField"> </div>  </div> <div ng-if="feature.code==\'bidder\'"> <div class="orange  common-button pull-left"  ng-click="showDemo(\'classic\')">  <div class="text"> {{\'product_demo_classic\' | i18n}}  </div> </div> <div class="orange  common-button pull-right" ng-click="showDemo(\'unique\')" >  <div class="text"> {{\'product_demo_unique\' | i18n}}  </div> </div> </div>  <div ng-if="feature.code==\'virtualAuctioneer\' && !isMobile">  <div class="orange  common-button center-block" ng-click="showDemo(\'virtualAuctioneer\')" >  <div class="text"> {{\'product_demo_virtual_auctioneer\' | i18n}}  </div> </div> </div>  </div>  </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/info/helpScreen.html?0.424", '<div class="help-screen scene" ng-controller="HelpScreensController" bs-scroll-to-top> <div class="content container">  <div class="float texts"> <h2 class="caption"> {{helpScreen.title | langField}} </h2> <div class="info" ng-bind-html="helpScreen.info | langField">  </div>  <div ng-switch="helpScreen.code"> <div ng-switch-when="live">  <div class="orange  common-button pull-left"  ng-click="showDemo(\'classic\')">  <div class="text"> {{\'product_demo_classic\' | i18n}}  </div> </div> <div class="orange  common-button pull-right" ng-click="showDemo(\'unique\')" >  <div class="text"> {{\'product_demo_unique\' | i18n}}  </div> </div> <div class="clearfix"></div> </div> <div ng-switch-when="bids"> <div class="orange common-button center-block" ng-click="showRegistration()" ng-if="!currentUser">  <div class="text"> {{\'help_register\' | i18n}}  </div> </div>  </div> <div ng-switch-when="search"> <form name=\'searchForm\' novalidate bs-form  bs-submit="gotoSearch()" class="global-search-form center-block" bs-current-direction> <bs-form-group field-name="phrase" label="catalog_search_all" > <input bs-place-holder name="phrase" class="form-control" ng-model="data.searchToken" bs-enter-key-action="gotoSearch()"/> </bs-form-group> <div class="button" ng-click="gotoSearch()"></div> <div class="clearfix"></div> </form> </div> </div> </div>   <div class="opposite float screenshot" bs-cloudinary-bg="{{sceenshot}}"></div> <div class="clearfix"></div> <div class="btn home btn-link center-block" ui-sref="app.home"> {{"home_back_to" | i18n }} </div> </div>   </div> '), 
        $templateCache.put("/portal/templates/info/about.html?0.424", '<div  class="about scene" bs-scroll-to-top> <div class="wide upper-part" >  <div class="dark overlay">  <div class="message center-block container col-lg-7 col-md-7 col-sm-8 col xs-12"> <H1>{{\'about_upper_caption\' | i18n}}</H1> <div class="short-separator"></div> <h2 class="text">{{\'about_upper_text\' | i18n}}</h2> </div> </div> </div> <div class="content container col-lg-6 col-md-6 col-sm-8 col xs-12"> <div class="portal-info"> <div class="line">{{\'about_portal_info_line_1\' | i18n}}</div> <div class="line">{{\'about_portal_info_line_2\' | i18n}}</div> </div>  <div class="short-separator"></div>  <div class="company-info"> <div class="line">{{\'about_company_info\' | i18n}}</div> </div> </div> <div class="contact"> <div class="container col-lg-6 col-md-6 col-sm-8 col xs-12"> <div class="caption">{{\'about_contact_caption\' | i18n}}</div> <div class="short-separator"></div> <div class="message-line">{{\'contact_message_line_1\' | i18n}}</div> <div class="message-line">{{\'contact_message_line_2\' | i18n}}</div> <div class="orange common-button center-block" ui-sref="app.contact"> <div class="text">{{"link_contact" | i18n }}</div> </div> </div>  </div> </div> '), 
        $templateCache.put("/portal/templates/alerts/userAlertsMain.html?0.424", '<div ng-controller="UserAlertsController" class="userAlerts scene"> <div class="narrow upper-part">  <div class="dark overlay">  <div class="message center-block container col-lg-7 col-md-7 col-sm-8 col xs-12"> <h1>{{"user_alerts_title" | i18n}}</h1> <div class="short-separator"></div> </div> </div> </div>  <div class="content container">  <div ng-if="currentUser" > <div ng-if="!saved">  <h4>{{"user_alerts_message" | i18n}}</h4>  <div class="alerts-choice-form" > <div class="form-group" ng-click="setChoice(\'ALL_HOUSES_FOR_REGION_ALERTS\')"> <input  type="radio"  ng-model="data.housesAlertChoice" value="ALL_HOUSES_FOR_REGION_ALERTS"/> <label >{{"user_alerts_all_houses" | i18nWithRegion }}</label>  </div>    <div ng-show="false" class="form-group" ng-click="setChoice(\'SOME_HOUSES_ALERTS\')"> <input  type="radio"  ng-model="data.housesAlertChoice" value="SOME_HOUSES_ALERTS"/> <label >{{"user_alerts_some_houses" | i18n }}</label>  <div class="housesList" ng-show="housesListVisible"> <div class="caption">{{"user_alerts_choose_houses" | i18n }} </div>  <div class="float house" ng-repeat="house in houses" check-on-click="true" ng-if="devMode || (house.site.code && house.site.code!=\'demo\')" > <input type="checkbox" bs-checklist-model="data.housesToAlert" checklist-value="house.code" > {{house.details.name | langField}} </div> <div class="clearfix"></div>  </div> </div>   <div class="form-group" ng-click="setChoice(\'NO_HOUSES_ALERTS\')"> <input  type="radio"  ng-model="data.housesAlertChoice" value="NO_HOUSES_ALERTS"/> <label >{{"user_alerts_no_houses" | i18n }}</label>  </div>    <div class="clearfix"></div> </div>  <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"   action-fn="save()" label="\'dialogs_save\'" > </bs-async-button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div bs-back-button class="btn btn-link btn-lg">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>  </div>   <div ng-if="saved" class="text-center"> <h3>{{"user_alerts_saved" | i18n}}</h3> <br><br> <div bs-back-button class="btn btn-link btn-lg">{{"dialogs_continue" | i18n}}</div> </div>  </div>  </div>   </div> '), 
        $templateCache.put("/portal/templates/portalMain.html?0.424", '   <div ng-include src="\'elements/navigation/upperNavigation\' | appTemplate"></div>   <div  class="page-body" ui-view dir="{{dir}}" ng-show="dataState==\'loaded\'" style="min-height:{{viewPort.innerHeight-300+\'px\'}}"></div>  <bs-content-loader loaded="dataState==\'loaded\'"></bs-content-loader>   <div ng-include dir="{{dir}}" src="\'elements/pageFooter\' | appTemplate"></div> '), 
        $templateCache.put("/portal/templates/nudges/modal/housesAlertsModal.html?0.424", '<div class="title">{{\'nudges_houses_alert_catalog_title\' | i18n}}</div>    <div class="action orange common-button"  ng-click="options.showRegisterForm()"> <div class="text">{{\'link_register\' | i18n}}</div></div>  '), 
        $templateCache.put("/portal/templates/nudges/modal/nudgeModalPopup.html?0.424", '<div class="nudge-modal-popup" ng-class="nudgeType" bs-current-direction> <div class="content" ng-include src="(\'nudges/modal/\'+options.data.nudgeType+\'Modal\') | appTemplate" ng-class="nudgeType"> </div>  </div> '), 
        $templateCache.put("/portal/templates/nudges/navbar/nudgeNavbarPopup.html?0.424", '<div class="nudge-navbar-popup" ng-show="isVisible" ng-class="nudgeType" ng-click="onClick()" bs-current-direction> <div class="close button">x</div> <div class="content" ng-if="isVisible" ng-include src="(\'nudges/navbar/\'+nudgeType+\'NavBar\') | appTemplate" ng-class="nudgeType">  </div>   </div> '), 
        $templateCache.put("/portal/templates/nudges/navbar/housesAlertsNavBar.html?0.424", '<div class="title">{{\'nudges_houses_alert_catalog_title\' | i18n}}</div>   <div class="action orange common-button"  ui-sref="app.alerts"> <div class="text">{{\'alerts_promotion_configure_command\' | i18n}}</div></div>  '), 
        $templateCache.put("/portal/templates/auctions/results/auctionsResults.html?0.424", '<div ng-controller="AuctionsResultsController" class="auctions-results scene"> <div class="narrow upper-part">  <div class="dark overlay">  <div class="message center-block container col-lg-7 col-md-7 col-sm-8 col xs-12"> <h1>{{"auction_results_title" | i18n }}</h1> <div class="short-separator"></div> </div> </div> </div>  <div class="content"> <div class="house-selection"> <div class="space hidden-xs"> </div> <h3 class="caption"> {{\'auctions_results_select_house\' | i18n}}</h3> <div class="dropdown btn-group"  is-open="housesListOpen" >  <div type="button" class="default-align selected dropdown-toggle entry" > <div class="float"> <div ng-if="currentHouse"> <div class="float icon"  bs-cloudinary-bg="{{currentHouse.resources[\'mainPageLogo\']}}"  params="{size:\'60x15\'}"></div> <div class="float text">{{currentHouse.details.name | langField }}</div> <div class="clearfix"></div> </div> <div ng-if="!currentHouse">  <div class="text">{{"auctions_results_all_houses" | i18n }}</div> </div> </div> <div class="opposite float caret {{dir}}" ></div> <div class="clearfix"></div> </div>   <ul class="dropdown-menu" role="menu">  <li ng-if="currentHouse" ng-click="showHouseAuction(\'all\')"> <div class="default-align entry"> <div class="text">{{"auctions_results_all_houses" | i18n }}</div> </div> </li>  <li ng-repeat="house in houses" ng-click="showHouseAuction(house.code)"> <div class="default-align entry"> <div class="float icon" bs-cloudinary-bg="{{house.resources[\'mainPageLogo\']}}"  params="{size:\'60x15\'}"></div> <div class="float text">{{house.details.name | langField}}</div> <div class="clearfix"></div> </div>  </li> </ul>   </div> </div> <div class="short-separator"></div> <bs-pagination	pages-data="pagesData"	href-pages="true"> </bs-pagination> <div class="clearfix"></div> <bs-content-loader loaded="!displayeAuctionsLoader"></bs-content-loader> <div class="auctions-lists-group" ng-show="!displayeAuctionsLoader">  <bs-auctions-list auctions="pageAuctions" view="\'recent\'" enable-narrow-view="true"></bs-auctions-list> </div>  <bs-pagination	pages-data="pagesData"	href-pages="true" ng-show="!displayeAuctionsLoader"> </bs-pagination> </div>  </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/list/catalogItemWide.html?0.424", ' <div >  <bs-lot-image lot="lot" size="220x220" as-bg="true" image-mode="\'fit\'">  </bs-lot-image> <meta itemprop="image" content="{{lot | lotImage:\'220x220\'}}"></meta>  <div ng-if="lot.expireTime"> <bs-lot-expiration lot="lot" ></bs-lot-expiration> </div>  <bs-lot-badge lot="lot" ></bs-lot-badge>     <div class="item-bottom-part">  <div class="above-separator"> <span class="lot-number" itemprop="sku"> {{"lot_number" | i18n:{number:lot.itemIndex} }} </span> <span itemprop="name" ng-bind-html="lot | lotText:60 "></span>  </div>  <div class="short-separator"></div>  <div class="below-separator" bs-current-direction> <bs-lot-price lot="lot" max-width="\'125\'" single-row="true" break-on-row="false"></bs-lot-price>  <div class="orange common-button"> <div class="text"> {{"catalog_view_lot" | i18n }} </div> </div> </div>  </div>  </div>    '), 
        $templateCache.put("/portal/templates/auctions/catalogs/list/catalogMain.html?0.424", '<div ng-controller="CatalogListController" > <div class="catalog scene"> <div class="content col-xs-12" > <bs-auction-info ng-if="data.auction" auction="data.auction" ></bs-auction-info> <bs-catalog-list-filter ng-if="data.auction && data.items"></bs-catalog-list-filter> <div ng-if="pagesData.pageItems.length>0">  <bs-catalog-list-pagination pages-data="pagesData"  position-in-page="\'upper\'" href-pages="true" ></bs-catalog-list-pagination> <div  bs-scroll-on watched-value="scrollToPagination"></div> <div ng-if="!displayeItemsLoader"  ng-include src="\'auctions/catalogs/list/catalogItems\' | appTemplate"  ></div> <bs-content-loader loaded="!displayeItemsLoader"></bs-content-loader> <bs-catalog-list-pagination pages-data="pagesData"  position-in-page="\'lower\'"></bs-catalog-list-pagination>  <bs-house-regisration-promotion auction="data.auction" class="promotion-bottom"> </bs-house-regisration-promotion>  </div> <bs-content-loader loaded="pagesData.pageItems!=null"></bs-content-loader>  </div>  <div ng-if="isIe8" ie8-warning></div>  </div> </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/list/catalogItems.html?0.424", '<div class="list" ng-class="{\'mobile-list\':!viewPort.isWideDevice}">  <div class="row">  <div class="item" itemscope itemtype="http://schema.org/Product" bs-current-direction ng-repeat="lot in pagesData.pageItems" ng-class="{\'pc-item\':viewPort.isWideDevice,\'mobile-item\':!viewPort.isWideDevice}" bs-scroll-on="lot.id == scrollTo" > <a  itemprop="url"  class="link" ng-href="#!/lotPage/source/catalog/auction/{{lot.auctionId}}/lot/{{lot.id}}" > <div  ng-if="viewPort.isWideDevice"     ng-include src="\'auctions/catalogs/list/catalogItemWide\' | appTemplate" class="frame"> </div> <div  ng-if="!viewPort.isWideDevice" ng-include src="\'auctions/catalogs/list/catalogItemNarrow\' | appTemplate"> </div> </a> <bs-lot-favorite-flag lot="lot"></bs-lot-favorite-flag> </div> <div class="clearfix"></div> </div>   <div class="clearfix"></div> </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/list/catalogItemNarrow.html?0.424", '<div class="lot-row"> <bs-lot-image lot="lot" size="108x108" as-bg="true" image-mode="\'fit\'" class="lot-pic"></bs-lot-image>  <div class="info" style="width:{{viewPort.innerWidth-170}}px"> <div class="item-index"> {{"lot_number" | i18n:{number:lot.itemIndex} }}</div>  <div ng-bind-html="lot | lotText:80 "></div>   <bs-lot-badge lot="lot" ></bs-lot-badge>  <bs-lot-price lot="lot"  single-row="true" break-on-row="true"></bs-lot-price>    <div class="clearfix"></div> </div>  <div class="clearfix"></div> </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/list/catalogPagination.html?0.424", '<div class="catalog-pagination text-center {{currentLang}} {{positionInPage}}" bs-current-direction ng-class="{lifted:lifted}" > <bs-pagination  ng-if="availableWidth" pages-data="pagesData"  href-pages="hrefPages" on-current-page-change="onCurrentPageChange()"  available-width="availableWidth"  >  </bs-pagination>  </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/list/catalogFilterPanel.html?0.424", '<div class="filter-panel" >  <div class="float section" > <form name=\'searchForm\' novalidate bs-form  bs-submit="search()" class="search-form"> <bs-form-group field-name="phrase" label="catalog_search_placeholder"> <input bs-place-holder   name="phrase" class="form-control" debug="true" ng-model="filterData.phrase"  ng-keyup="searchAfterDelay()"/> </bs-form-group> </form> <div class="result" >{{"catalog_results_count" | i18n:{count:pagesData.visibleItems.length} }}</div> <div class="sold-state" ng-if="data.auction.state==\'ENDED\'"> <select  ng-model="filterData.soldState" ng-change="applySoldStateFilter()"  ng-options="(\'catalog_sold_state_\'+ soldState) | i18n for soldState  in [\'all\',\'sold\',\'unsold\']"> </select> </div> </div>  <div class="opposite float section"> <div class="categories" ng-class="{invisible:filterData.categories.length==0}"> <select  ng-model="filterData.category" ng-change="filterByCategory()" ng-options="category.value as category.name for category in filterData.categories"> </select> </div> <div class="lots-per-page"> <div class="float label" >{{"catalog_lots_per_page" | i18n}}:</div> <select class="float" ng-model="pagesData.itemsPerPage"  ng-options="count for count in [20,50,100,200]" dir="ltr" >  </select> <div class="clearfix"></div> </div>  </div>    <div class="clearfix"></div>  </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/search/searchItems.html?0.424", ' <div class="list"  ng-class="{\'mobile-list\':viewPort.mobileMedia}">   <div class="row">  <div class="item" bs-current-direction ng-repeat="lot in pagesData.pageItems" ng-class="{\'pc-item\':viewPort.pcMedia,\'mobile-item\':viewPort.mobileMedia}" bs-log-click="search-lot-{{lot.auction.house.code}}-{{lot.auction.date | date :\'dd.MM.yy\'}}-{{lot.itemIndex}}" ng-click="gotoLot(lot)">  <div class="link"  bs-scroll-on="lot.id == scrollTo" > <div ng-if="viewPort.pcMedia"     ng-include src="\'auctions/catalogs/list/catalogItemWide\' | appTemplate" class="frame"></div> <div ng-if="viewPort.mobileMedia" ng-include src="\'auctions/catalogs/list/catalogItemNarrow\' | appTemplate"  ></div> </div>    </div> <div class="clearfix"></div> </div>   <div class="clearfix"></div> </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/search/searchMain.html?0.424", '<div ng-controller="SearchController" > <div class="catalog search scene"> <div class="content col-xs-12" >   <form name=\'searchForm\' novalidate bs-form  bs-submit="doSearch()" class="float global-search-form" bs-current-direction> <bs-form-group field-name="phrase" label="catalog_search_all" > <input bs-place-holder name="phrase" class="form-control" debug="true" ng-model="data.token" bs-enter-key-action="doSearch()" bs-focus-on="inputFocused"/> </bs-form-group> <div class="button noselect" ng-click="doSearch()"> <div class="icon"> </div> </div> <div class="clearfix"></div> </form>  <div class="opposite float home btn-link" ui-sref="app.home">{{"home_back_to" | i18n }}</div>  <div class="clearfix"></div>  <div class="result" ng-class="{invisible:!data.searchedToken}" >  <span ng-if="searching">{{"search_searching" | i18n}}</span> <span ng-if="!searching"> {{ (pagesData.itemsCount ? "search_results" : "search_no_results") | i18n:{count:pagesData.itemsCount, token:data.searchedToken}  }} </span>  </div>  <div class="time-form"> <div class="radio"> <label> <input type="radio" ng-change="doSearch()" ng-model="data.searchTime" value="FUTURE"> {{"search_future" | i18n }} </label> </div> <div clas="clearfix"></div> <div class="radio"> <label> <input type="radio"  ng-change="doSearch()" ng-model="data.searchTime" value="PAST"> {{"search_past" | i18n }} </label> </div> </div>  <bs-catalog-list-pagination data="data" pages-data="pagesData"  position-in-page="\'upper\'" on-current-page-change="onPageChange()" ></bs-catalog-list-pagination> <div bs-scroll-on watched-value="scrollToPagination"></div> <div ng-if="loadState==\'loaded\'"> <br>  <div  ng-include src="\'auctions/catalogs/search/searchItems\' | appTemplate"  ></div>  </div>   <div ng-if="loadState==\'loading\'"> <bs-content-loader ></bs-content-loader> </div>  <bs-catalog-list-pagination data="data" pages-data="pagesData"  position-in-page="\'lower\'" on-current-page-change="onPageChange()"></bs-catalog-list-pagination>   </div> </div> </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/lotPageMain.html?0.424", '<div ng-controller="LotPageController" > <div class="catalog  scene lotPage">  <div class="content col-xs-12" >   <div ng-if="data.item "> <div ng-include src="\'auctions/catalogs/lotPage/pc/lotPagePc\' | appTemplate" ng-if="viewPort.pcMedia"></div> <div ng-include src="\'auctions/catalogs/lotPage/mobile/lotPageMobile\' | appTemplate" ng-if="viewPort.mobileMedia"></div> </div> <bs-content-loader loaded="data.item!=null"></bs-content-loader> <div class="clearfix"></div>  </div> </div> </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/pc/lotPagePc.html?0.424", '<div  itemscope itemtype="http://schema.org/Product"> <bs-auction-info auction="data.auction" ng-if="data.auction" ></bs-auction-info>   <table> <tr> <td class="info-td"> <div class="lot-number" itemprop="sku"> {{"lot_number" | i18n:{number:data.item.itemIndex} }} </div> <div class="upper-title"> <h2 class="lot-name"  itemprop="name" ng-bind-html="data.lotTitle"> </h2> <div ng-if="showMore" bs-current-direction class="btn btn-link more-link" ng-click="scrollToDescription()"> {{"more" | i18n }}... </div> </div>  </td>   <td class="float actions-td"> <bs-lot-page-navigation lot="data.item"></bs-lot-page-navigation> <bs-lot-favorite-flag class="float" lot="data.item"></bs-lot-favorite-flag> </td> </tr> <tr>  <td class="info-td">  <bs-lot-page-images lot="data.item"></bs-lot-page-images> </td> <td class="float actions-td"> <bs-lot-bid-form lot="data.item"></bs-lot-bid-form>   <div ng-include src="\'auctions/catalogs/elements/lotPageInfoLinks\' | appTemplate" ></div>   <div class="clearfix"></div> </td>  </tr>  </table>  <div class="lot-description-section" itemprop="description" ng-if="data.lotDesc" bs-scroll-on watched-value="scrollToDescriptionFlag">   <h4 class="description-text" ng-bind-html="data.lotDesc"></h4> </div>  <bs-lot-page-navigation lot="data.item"></bs-lot-page-navigation> </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/pc/lotZoomModal.html?0.424", '<div class="zoom-image noselect"> <div class="modal-header"> <button type="button" class="close" ng-click="$close()">&times;</button>  <bs-lot-page-zoom lot="data.item" initial-image-ind="data.imageInd"> </bs-lot-page-zoom> </div>  </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/mobile/lotZoomSubScene.html?0.424", '<div class="lot-sub-scene zoom" style="height:{{viewPort.innerHeight-150}}px"> <a class="btn btn-link back" ui-sref="^">{{"lot_back" | i18n : {number:data.item.itemIndex} }}</a> <bs-lot-page-zoom lot="data.item"> </bs-lot-page-zoom>    </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/mobile/lotPageMobile.html?0.424", '<div > <div ng-show="\'app.lotPage\' | isState"> <bs-auction-info auction="data.auction" ng-if="$stateParams.source==\'search\' && data.auction" ></bs-auction-info>  <div class="first-row"> <bs-lot-page-navigation lot="data.item" class="opposite float"></bs-lot-page-navigation> <bs-lot-favorite-flag class="float" lot="data.item"></bs-lot-favorite-flag> <div class="clearfix"></div> </div> <div class="second-row">  <div class="float lot-number"> {{"lot_number" | i18n:{number:data.item.itemIndex} }} </div>  <div class="clearfix"></div> </div>  <div class="upper-title"> <div class="lot-name" ng-bind-html="data.lotTitle"> </div> <div ng-if="showMore" bs-current-direction class="btn btn-link more-link" ng-click="scrollToDescription()"> {{"more" | i18n }}... </div> </div>  <bs-lot-page-images lot="data.item"></bs-lot-page-images>  <bs-lot-bid-form lot="data.item" ></bs-lot-bid-form>    <div class="lot-description-section" ng-if="data.lotDesc" bs-scroll-on watched-value="scrollToDescriptionFlag"> <div class="description-text" ng-bind-html="data.lotDesc"></div> </div>  <div ng-include src="\'auctions/catalogs/elements/lotPageInfoLinks\' | appTemplate" ></div>  <div class="clearfix"></div> <br><br> <div class="float">  <bs-lot-page-navigation lot="data.item"  ></bs-lot-page-navigation> </div>  <div class="clearfix"></div> </div>   <div ui-view > </div>   </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/confirmation/confirmBid.html?0.424", '<div class="confirm-bid" ng-controller="ConfirmBidController"  ng-init="init()"> <table> <tr> <td class="pic-columm" rowspan="3"> <bs-lot-image lot="lot" size="120x120" image-ind="0"  image-mode="\'fit\'"> </bs-lot-image> </td> <td class="caption"> {{"confirm_bid_lot" | i18n}}: </td> <td class="value"> {{lot.itemIndex}} </td>  </tr>  <tr> <td class="caption"> {{"confirm_bid_desc" | i18n}}: </td> <td class="value" ng-bind-html="lot | lotText:60"> </td> </tr> <tr> <td class="caption"> {{"confirm_bid_price" | i18n}}: </td> <td class="price value"> {{bidPrice | sumInCurrency:lot.auction.catalogInfo.currency}} </td> </tr> </table>   <div class="clearFix"></div>  <div class="terms-message"> <bs-linkable-text options="{ textKey:\'confirm_bid_terms_message\', textParams:{houseName:(lot.auction.house.details.name | langField)}, onLinkClick:showTerms  }" > </bs-linkable-text> </div>     </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/images/lotPageImages.html?0.424", '<div class="lot-images-section"> <div class="big-image zoom-in-cursor" > <bs-lot-image lot="lot" size="{{mainImagewidth}}x" image-ind="0" ng-click="zoomImage(lot, 0)" ></bs-lot-image> </div>   <div class="thumbs" ng-if="lot.imagesList.length>1"> <div ng-repeat = "imageName in lot.imagesList" class="float thumb zoom-in-cursor" ng-click="zoomImage(lot, $index)" ng-if="!$first"> <bs-lot-image   lot="lot" size="x80" image-ind="$index"> </bs-lot-image> </div> <div class="clearfix"></div> </div>  </div>    '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/images/lotPageZoom.html?0.424", '<div> <div class="lot-page-zoom-image-navigation" ng-if="lot.imagesList.length>1" dir="ltr"> <div class="prev link " ng-click="prevImage()"><div class="text">◀</div></div> <div class="thumbs" bs-max-width="{lessThen:\'screenWidth - 130\'}"> <div ng-repeat = "imageName in lot.imagesList"  class="thumb"  thumb-ind="$index" ng-click="setZoomImage($index)" ng-class="{selected:selectedImageInd == $index}"> <bs-lot-image   lot="lot" size="x50" image-ind="$index"> </bs-lot-image> </div> </div> <div class="prev link noselect" ng-click="nextImage()"><div class="text">▶</div></div> <div class="clearfix"></div> </div>   <div class="big-image" ng-class="cursorZoomClass"> <bs-lot-image  lot="lot" image-ind="selectedImageInd" watchable="true"  size="{{options.size}}" move-in-frame="options.moveInFrame"  as-bg="options.asBg"  image-mode="options.imageMode"  ng-click="toggleImageMode()"  loaded-image-info="loadedImageInfo"> </bs-lot-image> </div>    </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/increments.html?0.424", '<div class="increments-table">  <table class="table table-striped table-bordered table-hover" dir="{{dir}}"> <tr> <th class="default-align">{{"increment_price" | i18n}}</th> <th class="default-align">{{"increment_step" | i18n}}</th> </tr> <tr ng-repeat="step in options.data.steps"> <td class="default-align">{{step.price | sumInCurrency:options.data.currency}}</th> <td class="default-align">{{step.increment | sumInCurrency:options.data.currency}}</th> </tr> </table>  </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/inquiry/inquiryForm.html?0.424", '<div class="inquiry-form" ng-controller="InquiryFormController"  ng-init="init()">  <p> <label>{{"inquiry_form_to" | i18n }}:&nbsp;</label>{{"inquiry_form_house" | i18n:{house:options.data.house} }} </p>  <br> <p> <label>{{"inquiry_form_subject" | i18n }}:&nbsp;</label><span ng-bind-html="inquiryData.subject"></span> </p>  <br>  <form name=\'inquiryForm\'  novalidate bs-form  bs-submit="sendInquiry()"> <bs-form-group field-name="content" label="inquiry_form_content"> <label></label> <bs-form-validation-message  ></bs-form-validation-message> <textarea  rows="7"  class="form-control"  required name="content" ng-model="inquiryData.content"> </textarea>  </bs-form-group>  </form>     </div>   '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/navigation/lotPageNavLink.html?0.424", '<div class="float">  <div ng-if="name==\'previous\'"> <div class="float arrow {{lang}}"> <div  ng-if="direction==\'rtl\'">▶</div> <div  ng-if="direction==\'ltr\'">◀</div> </div> <div class="float text" ng-if="showText"> {{"catalog_nav_previous" | i18n  }}</div> </div>  <div ng-if="name==\'next\'"> <div class="float text" ng-if="showText">{{"catalog_nav_next" | i18n  }}</div> <div class="float arrow {{lang}}" > <div  ng-if="direction==\'rtl\'">◀</div> <div  ng-if="direction==\'ltr\'">▶</div> </div> </div>    </div>     '), 
        $templateCache.put("/portal/templates/auctions/catalogs/lotPage/common/navigation/lotPageNavigation.html?0.424", '<div class="opposite float lot-page-navigation" >  <div ng-switch="source"> <div ng-switch-when="catalog"> <a class="float btn " ng-href="#!/catalog/auction/{{lot.auctionId}}/"> {{"catalog_nav_catalog" | i18n  }} </a>  <a  ng-if="previousLotId" class="float btn btn-link" ng-href="#!/lotPage/source/catalog/auction/{{lot.auctionId}}/lot/{{previousLotId}}" > <div> <bs-lot-page-nav-link name="\'previous\'"> </bs-lot-page-nav-link> </div>  </a> <div ng-if="!previousLotId" class="disabled btn float" > <bs-lot-page-nav-link name="\'previous\'"> </bs-lot-page-nav-link> </div>  <a ng-if="nextLotId" class="float btn btn-link"  ng-href="#!/lotPage/source/catalog/auction/{{lot.auctionId}}/lot/{{nextLotId}}" > <bs-lot-page-nav-link name="\'next\'"> </bs-lot-page-nav-link> </a>  <div ng-if="!nextLotId" class="disabled btn float" > <bs-lot-page-nav-link name="\'next\'"> </bs-lot-page-nav-link> </div>  <div class="clearfix"></div> </div>  <div ng-switch-when="account">  <div class="float btn btn-link" ui-sref="app.myAccount({houseId:lot.auction.house.id})"> {{"my_account_back_to" | i18n  }} </div>  </div>  <div ng-switch-when="search">  <a class="float btn btn-link" ui-sref="app.search"> {{"search_back_to" | i18n  }} </a> <a class="float btn btn-link"   ng-href="#!/catalog/auction/{{lot.auctionId}}/"> {{"catalog_nav_full_catalog" | i18n  }} </a>  </div>  <div ng-switch-when="favorites">  <a class="float btn " ui-sref="app.favorites"> {{"favorites_back_to" | i18n  }} </a> <a class="float btn "   ng-href="#!/catalog/auction/{{lot.auctionId}}/"> {{"catalog_nav_full_catalog" | i18n  }} </a>  </div>   </div> </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/lotImage.html?0.424", '<div class="lot-image"> <div class="state-info" ng-if="stateVisible" bs-current-direction>{{stateInfo | i18n}}</div> <img ng-src="{{loadedImageSrc}}"  ng-show="loadedImageSrc && !stateVisible">  </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/lotExpiration.html?0.424", '<div class="lot-expiration" ng-class="expirationState" > {{text}} </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/lotPageInfoLinks.html?0.424", '<div class="info-link default-align" ng-click="toggleFavorite()"> <span ng-if="!data.item.isFavorite"> <span class="plus">+</span>&nbsp;<span class="btn btn-link">{{"lot_page_add_to_favorites" | i18n }}</span> </span>  <span ng-if="data.item.isFavorite" class="btn btn-link">{{"lot_page_remove_from_favorites" | i18n }}</span> <span class="fade-in-out fade toast" ng-animate  ng-class="{on:favoriteToastMessage,off:!favoriteToastMessage}">{{favoriteToastMessage | i18n}}</span> </div>  <div class="btn btn-link info-link default-align" ng-click="openAuctionHouseTerms()" > {{"house_terms" | i18n:{house:(data.auction.house.details.name | langField)} }}</div>  <div class="btn btn-link info-link default-align animation" ng-click="showIncrements()" > {{"house_increments" | i18n }}</div>  <div class="info-link default-align" ng-click="showInquiryForm()"  > <span class="btn btn-link">  {{"lot_page_inquiry" | i18n }} </span>  <span class="fade-in-out fade toast" ng-animate  ng-class="{on:showInquiryToast,off:!showInquiryToast}">{{"lot_page_inquiry_sent" | i18n}}</span> </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/lotPrice.html?0.424", '<div class="lot-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">  <div class="lot-price-row" ng-if="showStartPrice"> <div class="lot-price-label start-price">{{"lot_start_price" | i18n}}:</div> <div class="lot-price-value" bs-auto-font-size="{grow:false,minSize:7,maxWidth:maxWidth}" ng-bind-html="startPrice"></div> <div class="clearfix" ng-if="breakOnRow"></div> </div> <div class="lot-price-row" ng-if="showNoPrice"> <div class="lot-price-label no-price" itemprop="price">{{"lot_no_price" | i18n}}</div> <div class="clearfix" ng-if="breakOnRow"></div>  </div> <div class="lot-price-row" ng-if="showEstimatedPrice"> <div class="lot-price-label estimated-price">{{"lot_estimated_price" | i18n}}:</div> <div class="lot-price-value" bs-auto-font-size="{grow:false,minSize:7,maxWidth:maxWidth}" max-width="maxWidth" ><div ng-bind-html="estimatedPrice"></div></div> <div class="clearfix" ng-if="breakOnRow"></div> </div> </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/registrationPromotion.html?0.424", '<div class="registration-promotion"> <div ng-if="auction "> <div ng-if="auction.state==\'ENDED\'"> <span class="text" > {{\'promotion_auction_ended\' | i18n}}</span> </div> <div ng-if="auction.state!=\'ENDED\'"> <div ng-if="auction.catalogOnly">  <span class="text" > {{\'promotion_catalog_only\' | i18n:houseParams}}</span> </div>  <div ng-if="!auction.catalogOnly">  <div ng-if="auction.state==\'RUNNING\'" > <a class="float button" ng-click="openAuctionSite()" target="auction.house.code"> <div class="text">{{text(\'promotion_live_auction\')}}</div> </a> <div class="clearfix"></div>  </div>  <div ng-if="auction.state==\'READY\'" ng-switch="userState"> <div ng-switch-when="NOT_LOGGED_IN"> {{text(\'promotion_not_logged_in_auction\')}}&nbsp-&nbsp; <span class="no-break"> <span><span class="button" ng-click="setAuthScene(\'login\')"> <span class="text">{{\'link_login\' | i18n}}</span></span>  <span class="">&nbsp;/&nbsp;</span>  <span class="button" ng-click="setAuthScene(\'register\')"> <span class="text"> {{\'link_register\' | i18n}}</span></span> <span class="clearfix"></span> </span>  </div> <div ng-switch-when="NOT_REGISTERED"> <span class="float text"> {{text(\'promotion_not_registered_to_auction\')}}&nbsp-&nbsp;</span> <div class="float button" ng-class="{\'disabled waiting\':requestInProgress}" ng-click="requestApproval()"> <div class="text">  {{\'promotion_register_to_house\' | i18n}} </div>  </div> <span class="clearfix"></span> </div> <div ng-switch-when="PENDING"> <span class="text">  {{\'promotion_pending\' | i18n}}</span> </div>  <div ng-switch-when="APPROVED"> <span class="text" > {{text(\'promotion_approved\')}}</span> </div> </div> </div> </div> </div>  <div ng-if="!auction && house && !house.site.down">  <div ng-switch="userState"> <div ng-switch-when="NOT_LOGGED_IN"> {{\'promotion_not_logged_in_house\' | i18n:{house:(house.details.name | langField)} }}&nbsp-&nbsp; <span class="no-break"> <span><span class="button" ng-click="setAuthScene(\'login\')"> <span class="text">{{\'link_login\' | i18n}}</span></span>  <span class="">&nbsp;/&nbsp;</span>  <span class="button" ng-click="setAuthScene(\'register\')"> <span class="text"> {{\'link_register\' | i18n}}</span></span> <span class="clearfix"></span> </span> </div> <div ng-switch-when="NOT_REGISTERED"> <span class="float text"> {{\'promotion_not_registered_to_house\' | i18n }}&nbsp-&nbsp;</span> <div class="float button" ng-class="{\'disabled waiting\':requestInProgress}" ng-click="requestApproval()"> <div class="text">  {{\'promotion_register_to_house\' | i18n}} </div>  </div> <span class="clearfix"></span> </div> <div ng-switch-when="PENDING"> <span class="text">  {{\'promotion_pending\' | i18n}}</span> </div>  <div ng-switch-when="APPROVED"> <span class="text" > {{text(\'promotion_approved\')}}</span> </div> </div> </div> </div>    '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/auctionInfo.html?0.424", '<div class="auction-info center-block" > <div class="float auction-texts"> <h3 class="auction-name" id="auctionInfo" ui-sref="app.catalog({auctionId:auction.id})">  <span ng-if="auction.number"> {{"auction_label_number_public" | i18n:{number:auction.number} }} <span ng-if="auction.part"> {{("auction_part_"+auction.part) | i18n}}  </span> - </span>  <span> {{auction.name | langField}} </span> </h3> <h2 class="house-name"> <a ng-href="#!/houses/{{auction.house.code}}" class="btn-link" ng-if="auction.house.orderInd">{{ "catalog_house_name" | i18n:{name:(auction.house.details.name | langField)} }}</a> <span ng-if="!auction.house.orderInd">{{ "catalog_house_name" | i18n:{name:(auction.house.details.name | langField)} }}</span>  </h2> <div class="time-and-location"> <span>{{auction | auctionTime}}</span> <span ng-if="auction.address | langField"> , {{auction.address | langField}} </span>  <div ng-if="auction.longDetails | langField" style="color:{{auction.textColors.details}}" ng-bind-html="\'<BR>\'+(auction.longDetails | langField)"> </div> </div> </div> <div class="opposite float logo" bs-cloudinary-bg="{{(auction.house.resources[\'mainPageLogo\'])}}" params="{size:\'188x74\'}"></div> <div class="clearfix"></div>    <bs-house-regisration-promotion auction="auction" > </bs-house-regisration-promotion> <hr>  <bs-auction-structured-data auction="auction"></bs-auction-structured-data>   </div>  '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/lotBadge.html?0.424", '<div class="lot-badge" ng-class="badgeType" > <div class="text" ng-class="{\'long-text\':longText}" ng-if="visible" ng-bind-html="text | capitalize"  ></div> </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/lotFavoriteFlag.html?0.424", '<div  class="favorite-flag"  ng-class="{on:lot.isFavorite,off:!lot.isFavorite,\'just-changed\':justChanged}"  ng-click="toggleFavorite()"  title="{{(lot.isFavorite ? \'lot_page_remove_from_favorites\' : \'lot_page_add_to_favorites\' ) | i18n}}"  ng-mouseout="onMouseOut()" ng-mouseover="onMouseOver()" > </div> '), 
        $templateCache.put("/portal/templates/auctions/catalogs/elements/bidForm.html?0.424", '  <div class="bid-form" bs-current-direction> <div class="bid-info" ng-if="bidLabel"> <table> <tr> <td class=\'bid-label\'>{{bidLabel.text}}:</td> <td class=\'bid-label-space\'></td> <td class=\'bid-price\'>{{bidLabel.price}}</td> </tr> <tr ng-if="mode==\'existing\'"> <td></td> <td class=\'bid-label-space\'></td> <td> <div class="links"> <div class="float btn-link" ng-click="setEditMode()">{{"dialogs_edit" | i18n}}</div> <div class="float bid-link-space"></div> <bs-async-button button-class="\'left btn-link\'" action-fn="removeBidIfConfirmed()" label="\'dialogs_remove\'" ></bs-async-button> <div class="clearfix"></div> </div> </td> </tr> </table> </div>  <div class="edit-mode" ng-if="mode==\'edit\' || mode==\'new\'"> <label> {{"lot_leave_bid" | i18n }}</label> <form> <input ng-model="model.bidPrice" class="float form-control" type="number" ng-change="saveRecentBidInputValue()"> <div class="float currency">{{lot.auction.catalogInfo.currency}}	</div>  <bs-async-button button-class="\'float orange common-button \'+currentLang" action-fn="tryToPlaceBid()" bs-current-lang label="\'lot_submit_bid\'" ></bs-async-button>  <div class="clearfix"></div> <div ng-if="mode==\'edit\'" class="cancel btn btn-link lowercase" ng-click="cancelEdit()">{{"dialogs_cancel" | i18n}}</div> </form> <div class="clearfix"></div> </div>    <div class="bid-info disabled-mode" ng-if="mode==\'disabled\'"> <label ng-bind-html="getDisabledMessage()"></label> </div>  <div class="bid-info ended-mode" ng-if="mode==\'ended\'"> <label ng-if="!lot.soldLotBid"> {{"lot_not_sold" | i18n }} </label> </div>  <div class="bid-info runnung-mode" ng-if="mode==\'running\'"> <label>{{"auction_running" | i18n }}</label> <a class="center-block common-button live darkBlue" ng-href="{{\'//\'+lot.auction.house.code+\'.bidspirit.com\'}}"> <div class="text"> {{"home_auction_enter" | i18n }} </div> </a> </div>  <bs-lot-price lot="lot"  single-row="false" break-on-row="true"></bs-lot-price> </div>  '), 
        $templateCache.put("/portal/templates/auctions/home/homeMain.html?0.424", '<div ng-controller="HomeController"  > <div class="home scene"> <div class="upper-part" ng-class="screenHeightClass"> <bs-houses-carousel></bs-houses-carousel> <div class="overlay">  <div class="message center-block fluid-container col-md-9 col-lg-7 col-xs-12"> <div class="logo-icon"></div>  <h1  ng-bind-html="upperMessage"></h1>  <h4 class="features with-links" ng-if="featuresAsLinks" >  <a href="#!/help/search"> {{\'home_upper_feature_search\' | i18n}}</a> <span class="bullet"></span> <a href="#!/help/live">{{\'home_upper_feature_live\' | i18n}}</a> <span class="bullet"></span> <a href="#!/help/bids">{{\'home_upper_feature_bid\' | i18n}}</a> </h4>  <h4 class="features" ng-if="!featuresAsLinks" >  {{\'home_upper_feature_search\' | i18n}} <span class="bullet"></span> {{\'home_upper_feature_live\' | i18n}} <span class="bullet"></span> {{\'home_upper_feature_bid\' | i18n}} </h4> </div>  </div>  </div>  <div class="content" ng-class="screenHeightClass">  <bs-content-loader loaded="data.auctions"></bs-content-loader>  <div ng-if="data.auctions"> <form name=\'searchForm\' novalidate bs-form  bs-submit="gotoSearch()" class="global-search-form" bs-current-direction> <bs-form-group field-name="phrase" label="catalog_search_all" > <input bs-place-holder name="phrase" class="form-control" ng-model="data.searchToken" bs-enter-key-action="gotoSearch()"/> </bs-form-group> <div class="button" ng-click="gotoSearch()"></div> <div class="clearfix"></div> </form>   <bs-auctions-lists-group auctions-data="data" show-region-selection="true" future-house-name-as-link="true" ng-class="screenHeightClass"  ></bs-auctions-lists-group>  <div ng-if="data.auctions.length"> <a ng-style="{display:data.auctions.length ? \'block\' : \'none\'}" href="#!/results/all/1" class="results orange common-button col-lg-4 col-xs-10"> <div class="text">{{\'home_auctions_results\' | i18n}}</div> </a> <div class="clearfix"></div> </div>   </div> </div>  </div> </div>   '), 
        $templateCache.put("/portal/templates/auctions/lists/auctionsListsGroup.html?0.424", '<div class="auctions-lists-group">  <div class="title"> <div class="space hidden-xs" ng-if="data.nextAuctions.length && showRegionSelection"> </div> <h3 class="caption" ng-if="data.nextAuctions.length"> {{\'auctions_list_next\' | i18n}}</h3> <div class="region-selection dropdown btn-group"  is-open="status.isopen" ng-if="showRegionSelection" > <div type="button" class="default-align selected dropdown-toggle entry" > <div class="float icon {{currentRegion | lowercase}}"></div> <div class="float text">{{("region_"+currentRegion) | i18n }}</div> <div class="opposite float caret {{dir}}" ></div> <div class="clearfix"></div> </div> <ul class="dropdown-menu" role="menu"> <li  ng-repeat="region in regions" ng-if="region!=currentRegion"> <a class="default-align entry" ng-href="{{regionLink(region)}}"> <div class="float icon {{region | lowercase}}"></div> <div class="float text">{{("region_"+region) | i18n}}</div> <div class="clearfix"></div> </a>  </li> </ul>  </div> </div>  <div ng-if="data.nextAuctions.length">  <div class="short-separator"></div> <bs-auctions-list auctions="data.nextAuctions" view="\'next\'"></bs-auctions-list> </div>   <div ng-if="data.futureAuctions.length">  <div class="title"> <h3 class="caption">{{\'auctions_list_future\' | i18n}}</h3> </div>  <div class="short-separator"></div> <bs-auctions-list auctions="data.futureAuctions" house-name-as-link="futureHouseNameAsLink" view="\'future\'"></bs-auctions-list> </div>   <div ng-if="data.recentAuctions.length"> <div class="title"> <h3 class="caption">{{(showAllPastAuctions ? \'auctions_list_past\' : \'auctions_list_recent\') | i18n}}</h3> </div>  <div class="short-separator"></div> <bs-auctions-list auctions="data.recentAuctions" view="\'recent\'"></bs-auctions-list> </div>  </div> '), 
        $templateCache.put("/portal/templates/auctions/lists/auctionsList.html?0.424", '<div class="list" ng-class="[screenView,view]">  <div class="row {{screenView}}" >  <div class="item col-md-3 col-xs-12"  ng-repeat="auction in auctions" ng-click="showCatalog(auction)" bs-log-click="auction-{{auction.house.code}}-{{ (auction.date | date :\'dd.MM.yy\') }}", ng-animate ng-class="{clickable:isAuctionClickable(auction)}" bs-scroll-on="auction.id == scrollTo" >  <div  ng-if="screenView==\'wide\'"     ng-include src="\'auctions/lists/auctionListItemWide\' | appTemplate" class="frame"> </div> <div  ng-if="screenView==\'narrow\'"     ng-include src="\'auctions/lists/auctionListItemNarrow\' | appTemplate" class="frame"> </div> </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/auctions/lists/auctionListItemNarrow.html?0.424", '<div class="frame">  <!--  {{auction.hoursTillAuction}} -->   <div class="float image"  bs-cloudinary-bg="{{(auction.resources[\'topItem\'] || auction.house.resources[\'mainPageLogo\'])}}" ng-class="{contain:auction.resources[\'topItem\']!=null}"  params="{size:imageSize} "> </div>   <div class="float texts" style="width:{{viewPort.innerWidth-170}}px">  <h2> {{auction.house.details.name | langField}}  </h2> <div class="number" ng-if="auction.number"> {{"auction_label_number" | i18n:{number:auction.number} }}&nbsp; <span class="part" ng-if="auction.part"> {{("auction_part_"+auction.part) | i18n}}  </span> </div>  <div class="time" > {{auction | auctionTime}}  </div>  <div class="name"> <div ng-bind-html="auction.name | langField"></div> <div ng-if="auction.shortDetails | langField" style="color:{{auction.textColors.details}}" ng-bind-html="auction.shortDetails | langField"></div> </div> <bs-auction-structured-data auction="auction"></bs-auction-structured-data> </div> <div class="clearfix"></div> </div> '), 
        $templateCache.put("/portal/templates/auctions/lists/auctionListItemWide.html?0.424", '<div class="frame" >  <!--  {{auction.hoursTillAuction}} -->   <div class="image"  bs-cloudinary-bg="{{(auction.resources[\'topItem\'] || auction.house.resources[\'mainPageLogo\'])}}" ng-class="{contain:auction.resources[\'topItem\']!=null}"  params="{size:imageSize} "> <div class="badge-frame" ng-if="auction.date!=today && (auction.badge | langField) && auction.textColors.badge && auction.state!=\'ENDED\'" ng-style="{\'background-color\':auction.textColors.badge }"> <div class="text" >{{auction.badge | langField}}</div> </div> <div class="badge-frame today" ng-if="auction.date==today"> <div class="text">{{\'auction_today\' | i18n}}!</div> </div> </div>   <div class="texts"> <h2> <a class="btn-link" ng-href="#!/houses/{{auction.house.code}}" ng-if="houseNameAsLink">{{auction.house.details.name | langField}}</a> <span ng-if="!houseNameAsLink">{{auction.house.details.name | langField}}</span> <span ng-if="auction.number">- {{"auction_label_number" | i18n:{number:auction.number} }}</span> </h2> <div class="part" ng-if="auction.part"> {{("auction_part_"+auction.part) | i18n}}  </div>  <div class="time" > {{auction | auctionTime}}  </div> <div class="short-separator"></div> <div class="name"> <div ng-bind-html="auction.name | langField"></div> <div ng-if="auction.shortDetails | langField" style="color:{{auction.textColors.details}}" ng-bind-html="auction.shortDetails | langField"></div> </div> <bs-auction-structured-data auction="auction"></bs-auction-structured-data> </div>   <div class="center-block common-button"   ng-class="auctionButtonClass(auction)" ng-if="view!=\'future\'"> <div class="text"> <div class="icon"></div>  <a ng-if="isLinkbutton(auction)" ng-href="#!/catalog/auction/{{auction.id}}">{{auctionButtonText(auction) | i18n}}</a> <span  ng-if="!isLinkbutton(auction)" >{{auctionButtonText(auction) | i18n}}</span> </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/userDetails/userDetailsMain.html?0.424", '<div ng-controller="UserDetailsController" class="userDetails scene" bs-scroll-to-top> <div class="narrow upper-part">  <div class="dark overlay">  <div class="message center-block container col-lg-7 col-md-7 col-sm-8 col xs-12"> <h1>{{"user_details_title" | i18n}}</h1> <div class="short-separator"></div> </div> </div> </div>  <div class="content container">  <h4>{{"user_details_message" | i18n}}</h4> <br>  <accordion ng-if="currentUser" > <accordion-group ng-repeat="section in sections" is-open="opened[section]"> <accordion-heading> <div> <div class="section-name    col-sm-4  float">{{"user_details_"+section | i18n}}</div> <div class="section-summary col-sm-5 float">{{getSectionSummary(section)}}</div> <div class="edit btn-link   col-sm-3  opposite float opposite-align" ng-show="!opened[section]">{{"dialogs_edit" | i18n}}</div> <div class="clearfix"></div> </div> </accordion-heading> <div class="section-content col-lg-6 col-md-7 col-sm-8 col-xs-12" ng-class="section"> <div  ng-include src="(\'userDetails/sections/\'+section +\'Section\') | appTemplate" ng-if="opened[section]"> </div> </div> </accordion-group> </accordion> </div>   </div> '), 
        $templateCache.put("/portal/templates/userDetails/sections/nameSection.html?0.424", '<div class="name-section" >  <form name=\'nameUpdateForm\'  novalidate bs-form  bs-submit="updateUserInfo(\'name\')">   <bs-form-group field-name="firstName" label="user_details_first_name"> <label class="float"></label> <bs-form-validation-message css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  name="firstName" class="form-control" ng-model="data.user.firstName" required ng-minlength="2" ng-pattern="bsValidationPatterns.alpha"/>  </bs-form-group>  <bs-form-group field-name="lastName" label="user_details_last_name"> <label  class="float"></label> <bs-form-validation-message css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  name="lastName" class="form-control" ng-model="data.user.lastName" required ng-minlength="2" ng-pattern="bsValidationPatterns.alpha"/> </bs-form-group>   <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"  bs-form-controller="nameUpdateForm" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="onUpdateDone(\'name\')">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>   <div class="clearfix"></div> </form> </div>  '), 
        $templateCache.put("/portal/templates/userDetails/sections/shippingSection.html?0.424", '<div class="shipping-section" >  <div class="form-group checkbox-row"> <input  type="checkbox" class="float" name="residenceIsShipping" ng-model="data.userDetails.shippingAddress.residenceIsShipping"/> <label class="float">{{\'user_details_shipping_is_residence\' | i18n}}</label> <div class="clearfix"></div> </div>   <form name=\'shippingUpdateForm\'  novalidate bs-form  bs-submit="updateShippingAddress()"  > <bs-user-details-address address="data.userDetails.shippingAddress" ng-if="!data.userDetails.shippingAddress.residenceIsShipping"></bs-user-details-address> <div class="buttons-row" > <bs-async-button  button-class="\'float orange common-button\'"  bs-form-controller="shippingUpdateForm" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="onUpdateDone(\'shipping\')">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>  </form>       </div>  '), 
        $templateCache.put("/portal/templates/userDetails/sections/companySection.html?0.424", '<div class="company-section" >  <form name=\'companyUpdateForm\'  novalidate bs-form  bs-submit="updateUserInfo(\'company\')">   <bs-form-group field-name="company" label="user_details_company"> <label class="float"></label> <bs-form-validation-message css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  name="company" class="form-control" ng-model="data.user.company"/>  </bs-form-group>   <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"  bs-form-controller="companyUpdateForm" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="onUpdateDone(\'company\')">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>   <div class="clearfix"></div> </form> </div>  '), 
        $templateCache.put("/portal/templates/userDetails/sections/residenceSection.html?0.424", '<div class="residence-section" >  <form name=\'residenceUpdateForm\'  novalidate bs-form  bs-submit="updateResidenceAddress()">  <bs-user-details-address address="data.userDetails.residenceAddress" ></bs-user-details-address>  <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"  bs-form-controller="residenceUpdateForm" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="onUpdateDone(\'residence\')">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div> </form>   </div>  '), 
        $templateCache.put("/portal/templates/userDetails/sections/phoneSection.html?0.424", '<div class="phone-section" >  <form name=\'phoneUpdateForm\'  novalidate bs-form  bs-submit="updateUserInfo(\'phone\')">   <bs-form-group field-name="phone" label="user_details_phone"> <label class="float"></label> <bs-form-validation-message css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  dir="ltr" name="phone" class="form-control" ng-model="data.user.phone" required ng-minlength="8" ng-pattern="bsValidationPatterns.phone"/>  </bs-form-group>   <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"  bs-form-controller="phoneUpdateForm" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="onUpdateDone(\'phone\')">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>   <div class="clearfix"></div> </form> </div>  '), 
        $templateCache.put("/portal/templates/userDetails/sections/emailSection.html?0.424", "<div> <bs-edit-email></bs-edit-email> </div> "), 
        $templateCache.put("/portal/templates/userDetails/sections/passwordSection.html?0.424", '<div class="password-section" ng-controller="PasswordUpdateController"> <form name=\'passwordUpdateForm\'  novalidate bs-form  bs-submit="updatePassword()" >  <bs-form-group field-name="existingsPassword" label="user_details_existing_password"> <label class="float"></label> <bs-form-validation-message css-class="float" wrong="user_details_wrong_password"  ></bs-form-validation-message> <div class="clearfix"></div> <input dir="ltr"  type="password" name="existingsPassword" class="form-control"  ng-model="data.existingPassword" required bs-validate="{wrong : \'!wrongPassword($value)\' }" bs-validate-watch="\'wrongPasswords\'"/>  </bs-form-group>  <bs-form-group field-name="newPassword" label="user_details_new_password" > <label class="float"></label> <bs-form-validation-message  css-class="float" minlength="error_bad_password" ></bs-form-validation-message> <div class="clearfix"></div> <input dir="ltr"  type="password" name="newPassword" class="form-control" ng-model="data.newPassword" required ng-minlength="6"/>  </bs-form-group>  <bs-form-group field-name="passwordConfirm" label="user_details_confirm_password" > <label class="float"></label> <bs-form-validation-message  css-class="float" match="error_password_mismatch" ></bs-form-validation-message> <div class="clearfix"></div> <input dir="ltr"  type="password"  name="passwordConfirm" class="form-control"  ng-model="data.passwordConfirm"  bs-validate="{match : \'passwordConfirmedMatch()\' }" bs-validate-watch="\'data\'"/>  </bs-form-group>  <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"  bs-form-controller="passwordUpdateForm" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="updateDone()">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>   <div class="clearfix"></div> </form> </div>  '), 
        $templateCache.put("/portal/templates/userDetails/reusableElements/editEmail.html?0.424", '<div class="edit-email">   <div ng-show="stage==\'edit\'" > <label>{{"user_details_change_email" | i18n}}:</label> <form bs-form name="emailChangeForm" bs-submit="updateEmail()" novalidate> <bs-form-group field-name="email" label="user_details_email"> <input  dir="ltr" type="email" name="email" class="form-control" ng-model="data.email"  required  bs-validate="{exists : \'!emailExists($value)\' }" bs-validate-watch="\'existingEmails\'" /> <bs-form-validation-message hidden="true" exists="error_email_exists" ></bs-form-validation-message>  </bs-form-group>  <div class="form-error text-danger"> <div class="error-message" bs-blink-on-form-error>{{bsFormFirstErrorMessage()}}</div> </div>  <div class="buttons-row"> <bs-async-button button-class="\'float orange common-button\'"  bs-form-controller="emailChangeForm" name="\'changeEmail\'" label="\'dialogs_save\'" > </bs-async-button> <div class="float btn-link" ng-click="cancelEdit()">{{"dialogs_cancel" | i18n}}</div> <div class="clearfix"></div> </div>  </form> </div> <div ng-show="stage==\'not_confirmed\'" > <div class="title">{{notConfirmedTitle | i18n}}.</div> <div class="line" ng-bind-html="\'email_not_confirmed_line_1\' | i18n:{email: getEmail()}"></div> <div class="line">{{"email_not_confirmed_line_2" | i18n}}</div>  <div class="links"> <div class="float"> <div class="btn-link" ng-click="sendEmailConfirmationAgain()" ng-class="{waiting:sendingConfirmationAgain}"> {{"email_not_confirmed_send_again" | i18n}} </div> </div>  <div class="opposite float btn-link" ng-click="stage=\'edit\'">{{"email_not_confirmed_change_email" | i18n}}</div>  <div class="clearfix"></div> <div class="float resent-message" ng-show="sentConfirmationAgain"> {{"email_not_confirmed_sent_another" | i18n }} </div> </div>  <div class="sent-message" ng-show="anotherSent"> {{"email_not_confirmed_sent_another" | i18n}}</div>  </div>  </div>  '), 
        $templateCache.put("/portal/templates/userDetails/reusableElements/address.html?0.424", '<div class="address" >  <div class="row">  <bs-form-group field-name="country" label="user_details_country" css-class="col-xs-12  float" > <label class="float"></label> <span class="float star">*</span><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message  css-class="float" minlength="error_mandatory" pattern="error_bad_pattern_with_name"></bs-form-validation-message> <div class="clearfix"></div> <input  name="country" class="form-control" ng-model="address.country" ng-minlength="2" ng-pattern="bsValidationPatterns.alpha" required /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group>  </div>   <div class="row">  <bs-form-group field-name="city" label="user_details_city" css-class="col-xs-12 float"> <label class="float"></label> <span class="float star">*</span><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message  css-class="float" minlength="error_mandatory"  pattern="error_bad_pattern_with_name"></bs-form-validation-message> <div class="clearfix"></div> <input  name="city" class="form-control" ng-model="address.city" ng-minlength="2" ng-pattern="bsValidationPatterns.alpha" required /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group>  </div>  <div class="row">  <bs-form-group field-name="address" label="user_details_address" css-class="col-xs-12 float"> <label class="float"></label> <span class="float star">*</span><div><!-- this empty div is needed for ie8 --></div> <bs-form-validation-message  css-class="float" minlength="error_mandatory"></bs-form-validation-message> <div class="clearfix"></div> <input  name="address" class="form-control" ng-model="address.address" ng-minlength="2" required /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group>  </div>    <div class="row">  <bs-form-group field-name="state" label="user_details_state" css-class="col-xs-12 float"> <label class="float"></label> <bs-form-validation-message  css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  name="state" class="form-control" ng-model="address.state" ng-pattern="bsValidationPatterns.alpha" /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group>  </div>  <div class="row">  <bs-form-group field-name="zip" label="user_details_zip" css-class="col-xs-12 float"> <label class="float"></label> <bs-form-validation-message  css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  name="zip" class="form-control" ng-model="address.zipCode"  /><div><!-- this empty div is needed for ie8 --></div>  </bs-form-group> </div>  </div>  '), 
        $templateCache.put("/portal/templates/account/myAccount/myAccountMain.html?0.424", '<div ng-controller="MyAccountController" class="myAccount scene"> <div class="narrow upper-part">  <div class="dark overlay">  <div class="message center-block container col-lg-7 col-md-7 col-sm-8 xs-12"> <h1>{{titleKey | i18n}}</h1> <div class="short-separator"></div> </div> </div> </div>  <div class="content container"> <div class="col-lg-10 col-md-11 col-sm-12 xs-12 no-float"> <h4>{{messageKey | i18n}}</h4> <br> <accordion ng-if="currentUser" > <accordion-group  ng-repeat="house in houses" ng-if="(devMode || (!house.hidden && house.site.code!=\'demo\')) && !house.site.down"  ng-click="onHouseClick(house.id)" is-open="data.opened[house.id]"> <accordion-heading> <div ng-class="{\'dev-only\':house.hidden || house.site.code==\'demo\'}"> <div class="float logo" bs-cloudinary-bg="{{house.resources[\'mainPageLogo\']}}"  params="{size:\'60x22\'}"></div> <div class="house-name  float">{{house.details.name | langField}}</div>  <div class="edit btn-link  opposite float opposite-align" ng-show="!opened[house.id]"> {{(data.opened[house.id] ? "dialogs_close" : viewKey) | i18n}} </div> <div class="clearfix"></div> </div> </accordion-heading> <div class="house-entry-content col-xs-12" ng-class="section" > <div ng-if="data.housesEntries[house.id]"> <bs-my-account-house-entry	items-type="itemsType" house-info="data.housesEntries[house.id]"></bs-my-account-house-entry> </div>  <div class="error" ng-if="error" ng-bind-html="error"></div> <bs-content-loader loaded="data.housesEntries[house.id] || error"></bs-content-loader> </div> </accordion-group> </accordion> </div>  </div>   </div> '), 
        $templateCache.put("/portal/templates/account/myAccount/myAccountAuctionsSection.html?0.424", '<div class="auctions-section"> <div ng-if="auctionsInfo.length>0"> <div class="float title"> <div class="text">{{(\'my_account_\'+label) | i18n}}</div> </div> <div class="clearfix"></div> <div class="title-separator"></div> <bs-my-account-auction-bids  ng-repeat="auctionInfo in auctionsInfo"  auction="auctionInfo.auction" lots="auctionInfo[lotsField]" count-label="label+\'_count\'" > </bs-my-account-auction-bids> </div>  </div> '), 
        $templateCache.put("/portal/templates/account/myAccount/myAccountHouseEntry.html?0.424", '<div>   <div ng-if="houseInfo.approvalState==\'APPROVED\'"> <label ng-if="houseInfo.empty"> {{ "my_account_empty_"+itemsType | i18n}}  </label>  <div ng-if="!houseInfo.empty"> <bs-my-account-auctions-section  auctions-info="houseInfo.auctions.current"  label="\'current\'" ng-if="itemsType==\'absentee\'"  lots-field="\'lotsWithAbsenteeBids\'"> </bs-my-account-auctions-section>  <bs-my-account-auctions-section auctions-info="houseInfo.auctions.sold"  label="\'sold\'" ng-if="itemsType==\'won\'"  lots-field="\'wonLots\'"> </bs-my-account-auctions-section> </div> </div>   <div ng-if="houseInfo.approvalState!=\'APPROVED\'"> <bs-house-approval  house-id="houseInfo.house.id" approval-state="houseInfo.approvalState"></bs-house-approval> </div>     </div> '), 
        $templateCache.put("/portal/templates/account/myAccount/myAccountAuctionBids.html?0.424", '<div class="auction-bids"> <div class="auctionName">{{auctionName}}</div> <div class="bid-row" ng-repeat="lot in lots" ng-click="gotoLot(lot)" bs-scroll-on="lot.id == scrollTo"> <bs-lot-image lot="lot" size="108x108" as-bg="true" image-mode="\'fit\'" class="lot-pic"></bs-lot-image>  <div class="info"> <div class="item-index"> {{"lot_number" | i18n:{number:lot.itemIndex} }}</div>  <div ng-bind-html="lot | lotText:80 "></div>   <div class="price-label" ng-if="lot.selfSoldLotBid"> <span class="label">{{"lot_self_sold_bid" | i18n}}:</span> <span class="price">{{lot.selfSoldLotBid.price | sumInCurrency:currency}} </span>  </div>   <div class="price-label" ng-if="lot.selfAbsenteeBid && !lot.selfSoldLotBid"> <span class="label">{{"lot_self_absentee_bid" | i18n}}:</span> <span class="price">{{lot.selfAbsenteeBid.price | sumInCurrency:currency}} </span>  </div>    <div class="orange common-button" bs-current-direction ng-if="!lot.soldLotBid && [\'READY\',\'RUNNING\'].indexOf(lot.auction.state!=-1)"> <div class="text">{{"dialogs_edit" | i18n }}</div> </div> <div class="clearfix"></div> </div>  <div class="clearfix"></div> </div>  </div> '), 
        $templateCache.put("/portal/templates/account/approval/houseApprovalPopup.html?0.424", '<div class="approval-popup" bs-current-direction>  <div  class="modal-header"> <label  class="float modal-title">{{"alert_notice_title" | i18n}}</label>  <div class="close btn-link" ng-click="$close()">&times;</div> <div class="clearfix"></div>  </div>  <div class="modal-body"> <bs-house-approval house-id="houseId" in-popup="true"></bs-house-approval> </div>  </div>  '), 
        $templateCache.put("/portal/templates/account/approval/houseApprovalScene.html?0.424", ' <div class="info-popup scene"> <div class="content container col-lg-6 col-md-6 col-sm-8 col xs-12"> <div ng-if="options.title" class="title center-block container col-lg-7 col-md-7 col-sm-8 col xs-12" > <H3>{{"alert_notice_title" | i18n}}</H3> <div class="short-separator"></div> </div> <bs-house-approval house-id="$stateParams.houseId"></bs-house-approval> <button class="btn btn-primary" bs-back-button> {{("dialogs_back") | i18n}}</button> </div> </div>     '), 
        $templateCache.put("/portal/templates/account/approval/houseApproval.html?0.424", ' <div  class="approval-message">  <p ng-bind-html="firstParagraph"></p> <p ng-bind-html="secondParagraph"></p>  <div ng-if="approvalState==\'NOT_REGISTERED\'">  <div class="user-id-request" ng-if="house.requestUserStateIdForApproval"> <p><div class="caption">	{{"approval_request_user_id_caption" | i18n : {house:(house.details.name | langField) } }}</div></p>  <form name=\'requestUserIdForm\'  novalidate bs-form  > <bs-form-group field-name="userStateId" label="approval_request_user_id_label"> <label></label> <input name="userStateId" class="form-control" ng-model="formData.userStateId" />  <bs-form-validation-message></bs-form-validation-message>  </bs-form-group> </form> </div>  <div class="error-message text-danger" ng-if="formData.error">  <p>{{formData.error}}</p> </div>  <bs-async-button  action-fn="requestApproval()"  button-class="\'orange common-button\'"  label="\'approval_send_request\'" > </bs-async-button>  </div>   <div  ng-if="inPopup && (approvalState==\'PENDING\' || formData.error)" > <br><br> <button  class="center-block btn btn-primary"  ng-click="closePopup()">{{"dialogs_close" | i18n}} </button> </div>    </div> '), 
        $templateCache.put("/portal/templates/account/favorites/favoritesItems.html?0.424", ' <div class="list"  ng-class="{\'mobile-list\':viewPort.mobileMedia}">   <div class="row"> <div  ng-repeat="lot in pagesData.pageItems" bs-current-direction bs-scroll-on="lot.id == scrollTo"  ng-class="{\'pc-item\':viewPort.pcMedia,\'mobile-item\':viewPort.mobileMedia,clearfix:lot.loadPastLinkFakeItem,item:!lot.loadPastLinkFakeItem}"> <div ng-if="!lot.loadPastLinkFakeItem" bs-log-click="favorite-lot-{{lot.auction.house.code}}-{{lot.auction.date | date :\'dd.MM.yy\'}}-{{lot.itemIndex}}"  ng-click="gotoLot(lot)">  <div class="link"   > <div ng-if="viewPort.pcMedia"      ng-include src="\'auctions/catalogs/list/catalogItemWide\' | appTemplate" class="frame"></div> <div ng-if="viewPort.mobileMedia" ng-include src="\'auctions/catalogs/list/catalogItemNarrow\' | appTemplate"  ></div> </div> <bs-lot-favorite-flag lot="lot"></bs-lot-favorite-flag>  </div> <div ng-if="lot.loadPastLinkFakeItem"> <div class="float pastItems link" ng-class="data.sceneInfo.pastItemState" ng-click="loadPastItems()" > {{"favorites_page_past" | i18n}} </div> <div class="clearFix"></div> </div> </div>   <div class="clearfix"></div> </div>   <div class="clearfix"></div> </div>  '), 
        $templateCache.put("/portal/templates/account/favorites/favoritesMain.html?0.424", '<div ng-controller="FavoritesController" >   <div class="catalog favorites scene"> <div class="content col-xs-12" > <div class="title">{{"link_favorites" | i18n }}</div>  <bs-catalog-list-pagination  on-current-page-change="onPageChange()" pages-data="pagesData"   href-pages="false" ></bs-catalog-list-pagination>  <div bs-scroll-on watched-value="scrollToPagination"></div>  <div  ng-include src="\'account/favorites/favoritesItems\' | appTemplate"  ></div>  <div ng-if="loadState==\'loading\'"> <bs-content-loader ></bs-content-loader> </div>  <bs-catalog-list-pagination  on-current-page-change="onPageChange()" pages-data="pagesData"   href-pages="false" ></bs-catalog-list-pagination>  </div>    </div> </div>   '), 
        $templateCache.put("/portal/templates/houses/housesList.html?0.424", '<div ng-controller="HousesListController" class="houses scene" bs-scroll-to-top> <div class="narrow upper-part">  <div class="dark overlay">  <div class="message center-block container col-lg-7 col-md-7 col-sm-8 col xs-12"> <h1>{{"auction_houses_title" | i18nWithRegion  }}</h1> <div class="short-separator"></div> </div> </div> </div> <div class="content container"> <h4 ng-bind-html="\'auction_houses_message\' | i18nWithRegion"></h4> <br> <div class="container-fluid"> <div class="row text-center"> <div  class="col-xs-12 house-item default-align"  bs-current-direction ng-repeat="house in houses" ng-if="(devMode || (!house.hidden && house.site.code!=\'demo\')) && !house.site.down && house.orderInd>0"  > <div class="house-frame"  ui-sref="app.house({houseCode:house.code})">  <div class="frame-top" ng-style="{\'background-color\':(house.details.brandColor || \'#aaa\')}"> <div class="float name"> <h2>{{house.details.name | langField}}</h2> </div>  <div class="opposite float logo" bs-cloudinary-bg="{{house.resources[\'mainPageLogo\']}}"> </div> <div class="clearfix"></div>  </div>  <div class="frame-bottom"> <div ng-if="house.details.summary"> {{house.details.summary | langField}} <br><br> </div> <div ng-if="house.details.expertise"> <b>{{"auction_houses_expertise" | i18n}}:</b><br>  {{house.details.expertise | langField}} </div>  <a class="more btn-link" ng-href="#!/houses/{{house.code}}">{{"auction_houses_more" | i18n}}</a> </div>  </div>  </div> </div>  </div>  </div>   </div> '), 
        $templateCache.put("/portal/templates/houses/housePage.html?0.424", '<div ng-controller="HousePageController" class="house-page scene" > <div ng-if="housePic" class="house-page-image" bs-cloudinary-bg="{{housePic}}"> </div> <div ng-if="!housePic" class="house-page-image-space"> </div> <div class="content container"> <div class="house-info-upper"> <div class="float texts"> <h2 class="house-name"> {{house.details.name | langField}} </h2> <div> <a dir="ltr" class="btn-link" ng-if="website" target="${house.id}}" ng-href="{{website.link}}">{{website.display}}</a> </div>  <div class="address">{{house.details.address | langField}}</div> </div>   <div class="opposite float logo" bs-cloudinary-bg="{{(house.resources[\'mainPageLogo\'])}}" params="{size:\'188x74\'}"></div>  <div class="clearfix"></div>  </div> <bs-house-regisration-promotion house="house" > </bs-house-regisration-promotion> <hr>  <div class="house-info-lower"> <div class="text" ng-bind-html="house.details.info | langField"> </div> <div class="contact-info"> <div class="caption">{{\'auction_house_contact\' | i18n}}</div>  <div class="table"> <div class="labels table-cell"> <div class="contact-label" ng-if="house.details.phone">{{\'auction_house_phone\' | i18n}}</div>  <div class="contact-label" ng-if="house.details.email">{{\'auction_house_email\' | i18n}}</div> <div class="contact-label" ng-if="website">{{\'auction_house_website\' | i18n}}</div> </div> <div class="separator table-cell"></div> <div class="values table-cell"> <div class="contact-value" ng-if="house.details.phone" dir="ltr">{{house.details.phone}}</div>  <div class="contact-value" ng-if="house.details.email" dir="ltr">{{house.details.email}}</div> <div class="contact-value" ng-if="website" dir="ltr"> <a class="btn-link" target="${house.id}}" ng-href="{{website.link}}">{{website.display}}</a> </div> </div> </div> </div>  <br>  <div class="btn btn-link terms" ng-click="openTerms()" > {{"house_terms" | i18n:{house:(house.details.name | langField)} }}</div> </div>    <bs-house-alerts-promotion house="house" > </bs-house-alerts-promotion>  <bs-auctions-lists-group auctions-data="{auctions:auctions}" show-all-past-auctions="true"  ></bs-auctions-lists-group>  </div> </div> '), 
        $templateCache.put("/portal/templates/houses/houseAlertsPromotion.html?0.424", '<div class="house-alerts-promotion" ng-if="shouldDisplay">  {{\'alerts_promotion_configure_house\' | i18n:{house:(house.details.name | langField)} }}&nbsp <span class="no-break"> <span><span class="orange common-button" ui-sref="app.alerts.house({houseCode:house.code})"> <span class="text">{{\'alerts_promotion_configure_command\' | i18n}}</span></span> <span class="clearfix"></span> </span> </div>    '), 
        $templateCache.put("/portal/templates/auth/authScene.html?0.424", '<div  class="auth scene" ng-controller="AuthSceneController" ng-class="{\'logged-in\':currentUser!=null}">  <div class="narrow upper-part">  <div class="dark overlay">  <div class="message center-block container">  <H1 >{{titleKey() | i18n}}</H1> <div class="short-separator"></div> </div> </div> </div> <div class="content container col-lg-5 col-md-7  col-xs-12" >  <div  class="auth-view" ng-class="authDisplayInfo.authScene"  ng-if="!isIe8" ng-include 	src="\'auth/elements/\'+authDisplayInfo.authSubScene | appTemplate"> </div> </div>   </div> '), 
        $templateCache.put("/portal/templates/auth/authModalPopup.html?0.424", '<div  ng-controller="AuthModalPopupController" bs-current-direction>  <div  class="modal-header">  <label  class="float modal-title">{{ titleKey() | i18n}}</label> <div class="close btn-link" ng-click="$close()">&times;</div> <div class="clearfix"></div>  </div>  <div class="modal-body">  <div  class="auth-view"  ng-if= "!isIe8" ng-include 	src="\'auth/elements/\'+authDisplayInfo.popupSubScene | appTemplate"> </div>  <div ng-if="isIe8" ie8-warning></div> </div>  </div>  '), 
        $templateCache.put("/portal/templates/auth/legalApproval/legalApprovalRequired.html?0.424", '<div class="legal-approval-required"> <bs-linkable-text options="{ textKey:\'legal_reapproval_line_1\', onLinkClick:options.showLegalDoc }" > </bs-linkable-text> <br> <p ng-bind-html="\'legal_reapproval_line_2\' | i18n"></p>  </div>  '), 
        $templateCache.put("/portal/templates/auth/legalApproval/legalTermsRejected.html?0.424", '<div> <p ng-bind-html="\'legal_reapproval_rejected\' | i18n"></p>  <br><br> <div class="text-danger"	ng-bind-html="\'legal_reapproval_support\' | i18n:{email:BidspiritInfo.emailLink}"> </div>   </div>  '), 
        $templateCache.put("/portal/templates/auth/authNavBarPopup.html?0.424", '<div> <div class="close btn-link" ng-click="hidePopup()">x</div>  <div  class="auth-view"   ng-if= "!isIe8"" ng-include 	src="\'auth/elements/\'+authDisplayInfo.popupSubScene | appTemplate"> </div>  <div ng-if="isIe8" ie8-warning></div>   </div> '), 
        $templateCache.put("/portal/templates/auth/authUpperNavigation.html?0.424", '<div class="auth-navigation-section" ng-controller="AuthUpperNavigationController"> <div ng-if="!currentUser"> <div> <div ng-repeat="link in [\'login\',\'register\']"  class="btn-link"   ng-click="togglePopupView(link)"  ng-class="[currentLang,link]"> <div class="text"> {{"link_"+link | i18n }} </div>  <div class="up-arrow" ng-show="authDisplayInfo.popupScene==link"></div>  </div> </div> </div> <div ng-if="currentUser" class="logged-in-links" > <div class="float hazard btn-link"  ng-if="currentUser.registrationStage!=\'COMPLETE\'" ng-click="togglePopupView(\'warning\')"> <div class="icon" ng-class="{on:authDisplayInfo.popupScene==\'warning\'}"></div> <div class="up-arrow" ng-show="authDisplayInfo.popupScene==\'warning\'"></div>  </div>  <div class="float"> <div class="link" ng-click="toggleAuthMenu()"> <div class="float text"> {{\'link_hello\' | i18n:{name:currentUser.firstName} }} </div> <div class="float arrow"> <div class="down"></div> <div class="up" ng-show="authDisplayInfo.menuVisible"></div> <div class="up" ng-show="nudgePopupVisible"></div> </div> <div class="clearfix"></div> </div> <div class="auth-menu" ng-show="authDisplayInfo.menuVisible" ng-click="authDisplayInfo.menuVisible=false" ng-mouseleave="authDisplayInfo.menuVisible=false" bs-current-direction> <div class="up-arrow"></div> <div class="close btn-link" >x</div>  <div ng-include src="\'elements/navigation/pcUserMenu\' | appTemplate" ></div> </div> <bs-nudge-navbar-popup></bs-nudge-navbar-popup> </div>  <div class="clearfix"></div> </div>  <div class="auth-navbar-popup" ng-class="[authDisplayInfo.popupScene, currentLang]"  ng-include src="\'auth/authNavBarPopup\' | appTemplate"  ng-if="authDisplayInfo.popupScene!=null">  </div> </div>  '), 
        $templateCache.put("/portal/templates/auth/elements/recoverPassword.html?0.424", '<div class="recover-password sub-scene" ng-controller="RecoverPasswordController"> <div class="title"> {{\'recover_password_title\' | i18n}}</div> <div class="separator"></div>  <div ng-if="stage==1">  <div class="message"> {{\'recover_password_message\' | i18n}}:</div> <form name=\'recoverForm\'  novalidate bs-form  bs-submit="sendPassword()" >  <bs-form-group field-name="email" label="user_details_email"> <input type="email" name="email" class="form-control" ng-model="info.email" required ng-change="data.emailUnknown=false" bs-validate="{unknown : \'!data.emailUnknown\' }"  bs-validate-watch="\'data.emailUnknown\'" /> <bs-form-validation-message hidden="true" unknown="error_email_not_exists"> </bs-form-validation-message>  </bs-form-group>  <div class="form-error text-danger" > <div class="error-message" bs-blink-on-form-error>{{bsFormFirstErrorMessage()}}</div> </div>  <div class="help" ng-bind-html="\'recover_password_help\' | i18n:{email:BidspiritInfo.emailLink,phone:BidspiritInfo.phoneLink}"></div>  <div class="orange common-button opposite float" ng-click="recoverForm.submit()" > <div class="text">{{"dialogs_send" | i18n }}</div> </div>  <div class="cancel btn-link opposite float" ng-click="setAuthSubScene(\'login\')">{{\'dialogs_cancel\' | i18n}}</div>  <div class="clearfix"></div>  </form>  </div>    <div ng-if="stage==2"> <div class="message"> {{\'recover_password_success\' | i18n :{email:info.email} }}</div>  <div class="orange finish common-button opposite float"  ng-click="setAuthSubScene(\'login\')" > <div class="text">{{"dialogs_end" | i18n }}</div> </div>  <div class="clearfix"></div>  </div>  </div> '), 
        $templateCache.put("/portal/templates/auth/elements/warning.html?0.424", '<div  class="warning sub-scene" >  <bs-edit-email ng-if="currentUser.registrationStage==\'UNCONFIRMED_EMAIL\'"></bs-edit-email>    <div class="incompleteProfile" ng-if="currentUser.registrationStage==\'INCOMPLETE_PROFILE\'"> <div class="message">{{"incomplete_details_message" | i18n}}</div>  <div class="orange common-button" ui-sref="app.auth({authScene:\'postRegistrationDetails\'})"  > <div class="text">{{"incomplete_details_update" | i18n }}</div> </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/auth/elements/postRegistrationDetails.html?0.424", '<div ng-controller="PostRegistrationDetailsController"> <div ng-show="!formSubmitted" class="before-submit" ng-if="userDataLoaded">  <div class="register-success" ng-if="currentUser.justConfirmed">{{"register_success" | i18n}}</div>  <div class="message">{{"post_registration_message" | i18n}}</div> <div class="clearfix"></div> <form name=\'completeRegistrationForm\'  novalidate bs-form  bs-submit="save()" > <div class="form-half-page"> <h4 class="default-align">{{"user_details_personal_details" | i18n}}</h4>  <div class="row">  <bs-form-group field-name="phone" label="user_details_phone" css-class="col-xs-12 float" debug="true"> <label class="float"></label> <span class="float star">*</span> <bs-form-validation-message  css-class="float"></bs-form-validation-message> <div class="clearfix"></div>  <input  name="phone" class="form-control"  ng-model="userDetails.phone"  required  ng-pattern="bsValidationPatterns.phone" ng-minlength="8"/>  </bs-form-group>  </div>  <div class="row">  <bs-form-group field-name="company" label="user_details_company" css-class="col-xs-12 float"> <label class="float"></label> <bs-form-validation-message  css-class="float"></bs-form-validation-message> <div class="clearfix"></div> <input  name="company" class="form-control" ng-model="userDetails.company" />  </bs-form-group>  </div>  <h4>{{"user_details_residence" | i18n}}</h4> <div ng-if="true"> <!--  crazy, but without this line validation stops to work... couldn\'t figure out why --> <ng-form bs-form name="residence"> <bs-user-details-address address="userDetails.residenceAddress" ></bs-user-details-address> </ng-form>  </div>  </div>  <div class="clearfix"></div>  <bs-form-group field-name="residenceIsShipping" css-class="col-xs-12 float checkbox-row"> <input  type="checkbox" class="float" name="residenceIsShipping" ng-model="userDetails.shippingAddress.residenceIsShipping"/> <label class="float">{{\'user_details_shipping_is_residence\' | i18n}}</label> </bs-form-group>  <div class="form-half-page">  <div ng-if="!userDetails.shippingAddress.residenceIsShipping" > <h4>{{"user_details_shipping" | i18n}}</h4> <ng-form bs-form name="shipping"> <bs-user-details-address  address="userDetails.shippingAddress"></bs-user-details-address> </ng-form>  </div> </div>  <div class="clearfix"></div>  <div class="form-error"> <div class="form-input error-message text-danger" bs-blink-on-form-error ng-show="!loginErrorVisible">{{bsFormFirstErrorMessage()}}</div> </div>   <div class="orange common-button float" ng-click="completeRegistrationForm.submit()" > <div class="text">{{"dialogs_send" | i18n }}</div> </div>   </form> </div>  <div class="clearfix"></div>  <div ng-show="formSubmitted" class="post-submit"> <div class="row"> <div class="title">{{"post_registration_details_success" | i18n }}</div> </div> <div class="row"> <div class="message col-xs-9">{{"post_registration_details_success_message" | i18n }}</div> </div>  <div class="row"> <div class="orange common-button  float" ui-sref="app.home" > <div class="text">{{"dialogs_end" | i18n }}</div> </div>  </div>  </div>  <br><br> </div>  '), 
        $templateCache.put("/portal/templates/auth/elements/register.html?0.424", ' <div class="register sub-scene" ng-controller="RegisterController">  <div class="message"> {{"register_message_line_1"  | i18n }} <br> {{"register_message_line_2"  | i18n }} <br>  </div>  <form name=\'registerForm\'  novalidate bs-form  bs-submit="register()" >  <bs-form-group field-name="firstName" label="user_details_first_name" css-class="float"> <input  bs-place-holder name="firstName" class="form-control" ng-model="registrationInfo.firstName"  required ng-minlength="2" ng-pattern="bsValidationPatterns.alpha" />  <bs-form-validation-message hidden="true" ></bs-form-validation-message>  </bs-form-group>  <div class="float space"></div>  <bs-form-group field-name="lastName" label="user_details_last_name" css-class="float"> <input  bs-place-holder name="lastName" class="form-control" ng-model="registrationInfo.lastName" required  ng-pattern="bsValidationPatterns.alpha" ng-minlength="2"/> <bs-form-validation-message hidden="true" ></bs-form-validation-message>  </bs-form-group> <div class="clearfix"></div>   <bs-form-group field-name="email" label="user_details_email"> <input bs-place-holder  type="email" name="email" class="form-control" ng-model="registrationInfo.email"  required  bs-validate="{exists : \'!emailExists($value)\' }" bs-validate-watch="\'existingEmails\'" /> <bs-form-validation-message hidden="true" exists="error_email_exists" ></bs-form-validation-message>  </bs-form-group> <div class="clearfix"></div>   <bs-form-group field-name="password" label="user_details_password" css-class="float"> <input  bs-place-holder type="password" name="password" class="form-control" ng-model="registrationInfo.password" required ng-minlength="6"/> <bs-form-validation-message  minlength="error_bad_password" hidden="true" ></bs-form-validation-message>  </bs-form-group>  <div class="float space"></div>  <bs-form-group field-name="passwordConfirm" label="user_details_confirm_password" css-class="float"> <input  bs-place-holder type="password" name="passwordConfirm" class="form-control"  ng-model="registrationInfo.passwordConfirm" required  bs-validate="{match : \'passwordConfirmedMatch()\' }" bs-validate-watch="\'registrationInfo\'"/> <div class="clearfix"></div>  <bs-form-validation-message hidden="true" match="error_password_mismatch" ></bs-form-validation-message> </bs-form-group>   <bs-form-group field-name="over18" css-class="checkbox-row"> <input  type="checkbox" class="float" name="over18" ng-model="registrationInfo.over18" required/> <label class="float">{{\'register_over18\' | i18n}}</label> <div class="clearfix"></div> <bs-form-validation-message hidden="true" required="error_over18"></bs-form-validation-message> </bs-form-group>  <div class="clearfix"></div>   <bs-form-group field-name="terms" css-class="checkbox-row"> <input  type="checkbox" class="float" name="terms" ng-model="registrationInfo.terms" required/> <label class="terms float">{{\'register_terms_accept\' | i18n}}<span ng-click="showTerms()" class="currentLang link">{{\'register_terms_label\' | i18n}}</span></label> <bs-form-validation-message hidden="true" required="error_accept_terms"></bs-form-validation-message> <div class="clearfix"></div>  </bs-form-group>    <div class="form-error text-danger" > <div class="error-message" bs-blink-on-form-error >{{bsFormFirstErrorMessage()}}</div>  <div class="login link" ng-show="displayLoginLink()" ng-click="setAuthScene(\'login\')" >{{\'register_login_with_mail\' | i18n}}</div>  <div class="clearfix"></div> </div>    <bs-async-button button-class="\'opposite float orange common-button\'"  bs-form-controller="registerForm"  label="\'dialogs_send\'" ></bs-async-button>   <div class="clearfix"></div>  </form> </div>  '), 
        $templateCache.put("/portal/templates/auth/elements/login.html?0.424", '<div class="login sub-scene" ng-controller="PortalLoginController"> <div class="message" ng-if="authDisplayInfo.args.message">{{ authDisplayInfo.args.message | i18n}}</div> <form name=\'loginForm\'  novalidate bs-form  bs-submit="login()" >  <bs-form-group field-name="email" label="user_details_email"> <input bs-place-holder  type="email" name="email" class="form-control" debug="true" ng-model="loginInfo.email" required  ng-change="hideLoginError()"/>  <bs-form-validation-message hidden="true"  ></bs-form-validation-message>  </bs-form-group>  <bs-form-group field-name="password" label="user_details_password"> <input  bs-place-holder  type="password" name="password" class="form-control" ng-model="loginInfo.password" required ng-change="hideLoginError()"/> <bs-form-validation-message hidden="true" ></bs-form-validation-message>  </bs-form-group>   <div class="form-error text-danger"> <div class="form-input error-message  bs-blink-on-form-error" ng-if="!loginErrorVisible">{{bsFormFirstErrorMessage()}}</div> <div class="login error-message" ng-if="loginErrorVisible">{{"error_login" | i18n }}. <span class="help link" ng-click="toggleHelpVisisble()"> {{"dialogs_help" | i18n }} <span class="help-triangle" ng-show="loginHelpVisible"></span>  </span> </div> </div>  <div class="login-error-help" ng-show="loginHelpVisible"> <div class="close btn-link" ng-click="loginHelpVisible=false">x</div> <div class="text" ng-bind-html="(\'login_error_help_line_1\' | i18n)+ \'<br>\'+ (\'login_error_help_line_2\' | i18n:{email:BidspiritInfo.emailLink,phone:BidspiritInfo.phoneLink})"> </div>  </div>  <bs-form-group field-name="remember" css-class="checkbox-row"> <input type="checkbox" class="float" name="remember" ng-model="loginInfo.remember"/> <label class="float" ng-click="loginInfo.remember=!loginInfo.remember">{{\'login_remember_me\' | i18n}}</label> <div class="clearfix"></div>  </bs-form-group>     <div class="forgot-password btn-link" ng-click="setAuthSubScene(\'recoverPassword\')">{{"login_forgot_password" | i18n }}</div>  <div class="orange common-button opposite" ng-click="loginForm.submit()" > <div class="text">{{"login_enter" | i18n | capitalize}}</div> </div>  <div class="goto-register btn-link" ng-click="setAuthScene(\'register\')">{{"login_goto_register" | i18n }}</div>    </form> </div> '), 
        $templateCache.put("/portal/templates/auth/elements/confirmEmail.html?0.424", '<div ng-controller="ConfirmEmailController">  <bs-content-loader loaded="confirmState!=\'confirming\'"></bs-content-loader> <div class="expired message" ng-show="confirmState==\'expired\'"> {{\'register_email_confirm_expired\' | i18n}}.  </div> <div class="confirmed message" ng-show="confirmState==\'confirmed\'"> {{\'register_email_confirmed\' | i18n}}.  </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/elements/carousel/housesCarousel.html?0.424", '<div class="houses-carousel-container"> <div  ng-if="!animationOn" class="houses-carousel" ng-style="{backgroundImage:\'url(\'+bgPics[currentPicInd]+\')\'}">  </div>  <div ng-if="animationOn" class="houses-carousel"> <div ng-include dir="{{dir}}" src="\'elements/carousel/slider\' | appTemplate"></div>  </div> </div>  '), 
        $templateCache.put("/portal/templates/elements/carousel/slider.html?0.424", '<wallop-slider data-images="bgPics" data-animation="scale" data-current-item-index="_ind" data-next-item-index="currentPicInd"> </wallop-slider> '), 
        $templateCache.put("/portal/templates/elements/contentLoader.html?0.424", '<div class="content-loader" ng-show="!loaded"> <img  class="center-block" ng-src="{{\'system/pagePreLoader.gif\' | commonImage}}"> </div> '), 
        $templateCache.put("/portal/templates/elements/popups/popupAsScene.html?0.424", '<div class="info-popup scene popup-scene-{{options.code}}" dir="{{dir}}" ng-controller="PopupController">  <div class="content container col-lg-6 col-md-6 col-sm-10 col xs-12"> <button class="upper btn btn-primary" ng-if="options.backText" bs-back-button >{{options.backText | i18n}}</button>  <div class="clearfix"></div> <div ng-if="options.title" class="title center-block container col-lg-7 col-md-7 col-sm-8 col xs-12" > <H3>{{options.title}}</H3> <div class="short-separator"></div> </div> <div ng-include src="\'elements/popups/popupBody\' | appTemplate" ></div>   <ul class="list-inline"> <li  ng-repeat="button in options.buttons"> <button ng-if="button.isCloseButton" class="btn btn-{{button.type||\'primary\'}}" bs-back-button  >{{(button.text) | i18n}} </button> <button ng-if="button.action" class="btn btn-{{button.type||\'primary\'}}"  ng-click="button.action()">{{(button.text) | i18n}} </button>  </li>  </ul>  </div> </div> '), 
        $templateCache.put("/portal/templates/elements/popups/popupBody.html?0.424", '<div dir="{{dir}}"> <iframe ng-if="options.contentUrl" width="100%" height="500px" name="about" ng-src="{{options.contentUrl}}" frameborder=0 ALLOWTRANSPARENCY="true"></iframe> <div    ng-if=\'options.contentHtml\'    class="info-popup-content" ng-bind-html="options.contentHtml"></div> <div    ng-if=\'options.contentInclude\' class="info-popup-content"  ng-include src="options.contentInclude | appTemplate"></div>  </div> '), 
        $templateCache.put("/portal/templates/elements/popups/popupModal.html?0.424", '<div dir="{{dir}}" ng-keyup="onKeyup()" class="popup-modal-{{options.code}}">  <div  class="modal-header"> <label  class="float modal-title" ng-if="options.titleKey">{{options.titleKey | i18n}}</label>  <label  class="float modal-title" ng-if="!options.titleKey">{{options.title}}</label> <button type="button" class="opposite float close" ng-if="!options.unclosable" ng-click="$close()">&times;</button> <div class="clearfix"></div>  </div>  <div class="modal-body"> <div ng-include src="\'elements/popups/popupBody\' | appTemplate" ></div> </div>  <div class="modal-footer"> <ul class="list-inline"> <li  ng-repeat="button in options.buttons">  <button ng-if="button.isCloseButton" class="btn btn-{{button.type||\'primary\'}}"  ng-click="$close()">{{(button.text) | i18n}} </button> <button ng-if="button.action" class="btn btn-{{button.type||\'primary\'}}"  ng-click="button.action()">{{(button.text) | i18n}} </button>  </li>  </ul>   </div> </div> '), 
        $templateCache.put("/portal/templates/elements/navigation/upperNavigationSearch.html?0.424", ' <form name=\'searchForm\' novalidate bs-form  bs-submit="gotoSearch()"  ng-click="gotoSearchIfMobile()" class="global-search-form"  bs-current-direction ng-show="state.current.url!=\'search\'"> <bs-form-group field-name="phrase" label="catalog_search_all" > <input bs-place-holder name="phrase" class="form-control" ng-model="data.searchToken" bs-enter-key-action="gotoSearch()"/> </bs-form-group> <div class="button noselect" ng-click="gotoSearch()"> </div> <div class="clearfix"></div> </form>     '), 
        $templateCache.put("/portal/templates/elements/navigation/upperNavigation.html?0.424", '<div class="upper-navigation"  ng-class="{ \'has-warning\':ie8WarningVisible, \'logged-in\':currentUser!=null, \'no-fixed\':data.mobileMenuOn, \'mobile\':viewPort.innerWidth<1200, \'pc\':viewPort.innerWidth>=1200 }" ng-controller="UpperNavigationController"  dir="{{dir}}"> <div ie8-warning></div>  <div class="mobile-only" > <div class="float clickable logo" ui-sref="app.home" ng-if="!data.showMobileSearch"></div>  <div  class="float mobile-search-container" ng-if="data.showMobileSearch" ng-mousedown="gotoSearch()" ng-include src="\'elements/navigation/upperNavigationSearch\' | appTemplate"></div> <div ng-include src="\'elements/navigation/mobileMenu\' | appTemplate"></div> </div>   <div class="pc-only"  > <div class="container">  <div class="float clickable logo" ui-sref="app.home"></div>  <div class="links"> <div class="opposite float lang-selection btn-group" dropdown is-open="status.isopen" > <div type="button" class="selected dropdown-toggle entry" > {{currentLang | langName:"english"}} <span class="opposite float caret {{dir}}" ></span> </div> <ul class="dropdown-menu" role="menu"> <li class="entry" ng-repeat="lang in data.langs" ng-if="lang!=currentLang" ng-click="setLanguage(lang)">{{lang | langName}}</li> </ul> </div>  <span class="info-links opposite float"> <a class="btn-link opposite float entry" ng-class="currentLang" ng-href="#!/{{link}}" ng-repeat="link in data.infoLinks">{{(\'link_\'+link) | i18n}}</a> </span>  <div ng-include src="\'elements/navigation/upperNavigationSearch\' | appTemplate" class="opposite float" ></div>    <div class="float auth" ng-include src="\'auth/authUpperNavigation\' | appTemplate" >  </div>  </div>  </div>  </div>  <div class="mobile-only hello-bar" ng-if="currentUser"> <div class="text">{{\'link_hello\' | i18n:{name:currentUser.firstName} }} </div> </div>  </div> '), 
        $templateCache.put("/portal/templates/elements/navigation/reload.html?0.424", '<div class="refresh scene" ng-controller="ReloadController">  </div> '), 
        $templateCache.put("/portal/templates/elements/navigation/pcUserMenu.html?0.424", ' <a class="btn-link" ng-if="currentUser.registrationStage!=\'UNCONFIRMED_EMAIL\'" ui-sref="app.myAccount({itemsType:\'absentee\'})" >{{\'link_absentee\' | i18n}}</a> <a class="btn-link" ng-if="currentUser.registrationStage!=\'UNCONFIRMED_EMAIL\'" ui-sref="app.myAccount({itemsType:\'won\'})" >{{\'link_won\' | i18n}}</a> <a class="btn-link" ng-if="currentUser.registrationStage!=\'UNCONFIRMED_EMAIL\'" ui-sref="app.favorites">{{\'link_favorites\' | i18n}}</a> <a class="btn-link" ui-sref="app.alerts">{{\'link_alerts\' | i18n}}</a> <a class="btn-link" ui-sref="app.userDetails">{{\'link_update_details\' | i18n}}</a> <a class="btn-link" ng-click="logout()">{{\'link_logout\' | i18n}}</a> '), 
        $templateCache.put("/portal/templates/elements/navigation/mobileMenu.html?0.424", '<div ng-controller="MobileMenuController" > <div> <div  class="menu-button opposite float" ng-click="toggleMenu()"> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> </div> <div class="clearfix"></div> <div class="arrow opposite float" ng-show="mobileMenuOn" ></div> <div class="clearfix"></div> </div> <div id="linksMenu" class="mobile-menu" ng-show="data.mobileMenuOn" > <div class="lang-selection"  > <div class="selected entry" slide-toggle="#langsMenu" > {{currentLang | langName:"english"}} <span class="caret {{dir}}" ></span> </div> <ul id="langsMenu" class="slideable" duration="0.25s"> <li class="sub entry" ng-repeat="lang in data.langs" ng-if="lang!=currentLang" ng-click="setLanguage(lang)">{{lang | langName}}</li> </ul> </div>  <a class="orange entry"  ng-if="currentUser && currentUser.registrationStage!=\'COMPLETE\'" ng-click="nextRegistrationStep()" ng-class="currentLang" >{{(\'link_complete_registration\') | i18n}}</a>  <a class="entry" ng-click="hideMenu()" ng-if="!currentUser" ng-class="currentLang" ng-href="#!/auth/{{authLink}}/" ng-repeat="authLink in [\'login\',\'register\']">{{(\'link_\'+authLink) | i18n}}</a>    <a class="entry"  ng-click="hideMenu()" ng-if="currentUser "   ui-sref="app.myAccount({itemsType:\'absentee\'})" >{{\'link_absentee\' | i18n}}</a>  <a class="entry"  ng-click="hideMenu()" ng-if="currentUser "   ui-sref="app.myAccount({itemsType:\'won\'})" >{{\'link_won\' | i18n}}</a>  <a class="entry"  ng-click="hideMenu()" ng-if="currentUser " ng-class="currentLang" ui-sref="app.favorites">{{\'link_favorites\' | i18n}}</a>  <a class="entry"  ng-click="hideMenu()" ng-if="currentUser" ng-class="currentLang" ui-sref="app.alerts">{{\'link_alerts\' | i18n}}</a>  <a class="entry"  ng-click="hideMenu()" ng-if="currentUser " ng-class="currentLang" ui-sref="app.userDetails">{{\'link_update_details\' | i18n}}</a>  <a class="entry" ng-if="currentUser " ng-class="currentLang" ng-click="logout()" ng-href="#!/home" >{{(\'link_logout\') | i18n}}</a>  <a class="entry"  ng-click="hideMenu()" ng-class="currentLang" ng-href="#!/{{link}}" ng-repeat="link in data.infoLinks">{{(\'link_\'+link) | i18n}}</a> </div> </div>  '), 
        $templateCache.put("/portal/templates/elements/pageFooter.html?0.424", ' <div class="page-footer" ng-controller="PageFooterController" ng-show="shouldDisplay()"> <div class="container col-md-7 col-xs-12 center-block"> <div class="arrow"></div> <div class="row">  <div class="info-part col-xs-6"> <div class="logo"></div> <div class="text-line" ng-bind-html="\'home_footer_info_email\' | i18n:{email:BidspiritInfo.emailLink}"></div> <div class="text-line" ng-bind-html="\'home_footer_info_phone\' | i18n:{phone:BidspiritInfo.phoneLink}"></div> </div> <div class="float vertical-separator" ng-class="{invisible:shouldHideContactUs()}"></div> <div class="contact-us-part info-part col-xs-5" > <div class="pc-message hidden-xs hidden-sm" ng-class="{invisible:shouldHideContactUs()}"> <div class="message"> {{"home_footer_contact_text" | i18n }} </div> <div class="orange common-button center-block" ui-sref="app.contact"> <div class="text">{{"home_footer_contact_button" | i18n }}</div> </div> </div>  <div class="mobile-links hidden-md hidden-lg"> <a class="btn-link" ng-href="#!/contact">{{"link_contact" | i18n}}</a> <a class="btn-link" ng-click="showInfoPopup(\'terms\')">{{"link_terms" | i18n}}</a>  <a class="btn-link" ng-click="showInfoPopup(\'privacy\')">{{"link_privacy" | i18n}}</a> <a class="btn-link" ng-href="#!/about">{{"link_about" | i18n}}</a> <a class="btn-link" ng-href="#!/product">{{"link_product" | i18n}}</a>  </div> </div>  <div class="clearfix"></div> </div>   <div class="horizontal-separator"></div>  <div class="second-line"> <div class="sell float col-xs-6" > <div class="float text">{{"home_footer_sell" | i18n }}&nbsp;</div>  <a class="float btn-link" ng-href="#!/houses">{{"home_footer_houses" | i18n}}</a> <div class="clearfix"></div> </div>  <div class="float col-xs-6 social" > <div class="text">{{"home_footer_follow" | i18n }}</div> <div class="icons"> <a class="button twitter" target="bidspiritTwitter" href="//www.twitter.com/{{twitterPage}}"></a> <a class="button fb" target="bidspiritFacebook" href="//www.facebook.com/{{fbPage}}"></a> </div> </div> <div class="clearfix"></div> </div>   <div> <div class="horizontal-separator"></div> <div class="hidden-xs hidden-sm">  <div class="bottom-links"> <a class="btn-link" ng-click="showInfoPopup(\'terms\')">{{"link_terms" | i18n}}</a>  <a class="btn-link" ng-click="showInfoPopup(\'privacy\')">{{"link_privacy" | i18n}}</a> <a class="btn-link" ng-href="#!/about">{{"link_about" | i18n}}</a> <a class="btn-link" ng-href="#!/product">{{"link_product" | i18n}}</a>  </div> <div class="horizontal-separator"></div> </div>  <div class="rights-line">	{{"home_footer_rights" | i18n }}	</div>  </div>  </div> </div> ');
    });
}), define("domReady", [], function() {
    function runCallbacks(callbacks) {
        var i;
        for (i = 0; i < callbacks.length; i += 1) callbacks[i](doc);
    }
    function callReady() {
        var callbacks = readyCalls;
        isPageLoaded && callbacks.length && (readyCalls = [], runCallbacks(callbacks));
    }
    function pageLoaded() {
        isPageLoaded || (isPageLoaded = !0, scrollIntervalId && clearInterval(scrollIntervalId), 
        callReady());
    }
    function domReady(callback) {
        return isPageLoaded ? callback(doc) : readyCalls.push(callback), domReady;
    }
    var isTop, testDiv, scrollIntervalId, isBrowser = "undefined" != typeof window && window.document, isPageLoaded = !isBrowser, doc = isBrowser ? document : null, readyCalls = [];
    if (isBrowser) {
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", pageLoaded, !1), 
        window.addEventListener("load", pageLoaded, !1); else if (window.attachEvent) {
            window.attachEvent("onload", pageLoaded), testDiv = document.createElement("div");
            try {
                isTop = null === window.frameElement;
            } catch (e) {}
            testDiv.doScroll && isTop && window.external && (scrollIntervalId = setInterval(function() {
                try {
                    testDiv.doScroll(), pageLoaded();
                } catch (e) {}
            }, 30));
        }
        "complete" === document.readyState && pageLoaded();
    }
    return domReady.version = "2.0.1", domReady.load = function(name, req, onLoad, config) {
        config.isBuild ? onLoad(null) : domReady(onLoad);
    }, domReady;
}), window.location.hash && -1 != window.location.hash.indexOf("%21") && (window.location.hash = window.location.hash.replace("%21", "!")), 
define('portal/js/all', [ "require", "angular", "app", "commonModules", "domReady" ], function(require, ng) {
    require([ "domReady!" ], function(document) {
        window.BIDSPIRIT_SNAPSHOT || ng.bootstrap(document, [ "app" ]);
    });
});