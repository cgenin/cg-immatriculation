/**
 * Angularjs directive for french immmatriculation input
 * @version v1.0.0 - 2015-08-21
 * @link 
 * @author Christophe genin <genin.christophe@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

!function(e){"use strict";var t,n,a=[];if(typeof global==="object"&&global){t=global}else if(typeof window!=="undefined"){t=window}else{t={}}n=t.DeepDiff;if(n){a.push(function(){if("undefined"!==typeof n&&t.DeepDiff===p){t.DeepDiff=n;n=e}})}function r(e,t){e.super_=t;e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}function i(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:true});if(t&&t.length){Object.defineProperty(this,"path",{value:t,enumerable:true})}}function f(e,t,n){f.super_.call(this,"E",e);Object.defineProperty(this,"lhs",{value:t,enumerable:true});Object.defineProperty(this,"rhs",{value:n,enumerable:true})}r(f,i);function l(e,t){l.super_.call(this,"N",e);Object.defineProperty(this,"rhs",{value:t,enumerable:true})}r(l,i);function u(e,t){u.super_.call(this,"D",e);Object.defineProperty(this,"lhs",{value:t,enumerable:true})}r(u,i);function s(e,t,n){s.super_.call(this,"A",e);Object.defineProperty(this,"index",{value:t,enumerable:true});Object.defineProperty(this,"item",{value:n,enumerable:true})}r(s,i);function h(e,t,n){var a=e.slice((n||t)+1||e.length);e.length=t<0?e.length+t:t;e.push.apply(e,a);return e}function c(t,n,a,r,i,p,o){i=i||[];var b=i.slice(0);if(typeof p!=="undefined"){if(r&&r(b,p)){return}b.push(p)}var d=typeof t;var k=typeof n;if(d==="undefined"){if(k!=="undefined"){a(new l(b,n))}}else if(k==="undefined"){a(new u(b,t))}else if(d!==k){a(new f(b,t,n))}else if(t instanceof Date&&n instanceof Date&&t-n!==0){a(new f(b,t,n))}else if(d==="object"&&t!==null&&n!==null){o=o||[];if(o.indexOf(t)<0){o.push(t);if(Array.isArray(t)){var v,y=t.length;for(v=0;v<t.length;v++){if(v>=n.length){a(new s(b,v,new u(e,t[v])))}else{c(t[v],n[v],a,r,b,v,o)}}while(v<n.length){a(new s(b,v,new l(e,n[v++])))}}else{var m=Object.keys(t);var g=Object.keys(n);m.forEach(function(i,f){var l=g.indexOf(i);if(l>=0){c(t[i],n[i],a,r,b,i,o);g=h(g,l)}else{c(t[i],e,a,r,b,i,o)}});g.forEach(function(t){c(e,n[t],a,r,b,t,o)})}o.length=o.length-1}}else if(t!==n){if(!(d==="number"&&isNaN(t)&&isNaN(n))){a(new f(b,t,n))}}}function p(t,n,a,r){r=r||[];c(t,n,function(e){if(e){r.push(e)}},a);return r.length?r:e}function o(e,t,n){if(n.path&&n.path.length){var a=e[t],r,i=n.path.length-1;for(r=0;r<i;r++){a=a[n.path[r]]}switch(n.kind){case"A":o(a[n.path[r]],n.index,n.item);break;case"D":delete a[n.path[r]];break;case"E":case"N":a[n.path[r]]=n.rhs;break}}else{switch(n.kind){case"A":o(e[t],n.index,n.item);break;case"D":e=h(e,t);break;case"E":case"N":e[t]=n.rhs;break}}return e}function b(e,t,n){if(e&&t&&n&&n.kind){var a=e,r=-1,i=n.path.length-1;while(++r<i){if(typeof a[n.path[r]]==="undefined"){a[n.path[r]]=typeof n.path[r]==="number"?new Array:{}}a=a[n.path[r]]}switch(n.kind){case"A":o(a[n.path[r]],n.index,n.item);break;case"D":delete a[n.path[r]];break;case"E":case"N":a[n.path[r]]=n.rhs;break}}}function d(e,t,n){if(n.path&&n.path.length){var a=e[t],r,i=n.path.length-1;for(r=0;r<i;r++){a=a[n.path[r]]}switch(n.kind){case"A":d(a[n.path[r]],n.index,n.item);break;case"D":a[n.path[r]]=n.lhs;break;case"E":a[n.path[r]]=n.lhs;break;case"N":delete a[n.path[r]];break}}else{switch(n.kind){case"A":d(e[t],n.index,n.item);break;case"D":e[t]=n.lhs;break;case"E":e[t]=n.lhs;break;case"N":e=h(e,t);break}}return e}function k(e,t,n){if(e&&t&&n&&n.kind){var a=e,r,i;i=n.path.length-1;for(r=0;r<i;r++){if(typeof a[n.path[r]]==="undefined"){a[n.path[r]]={}}a=a[n.path[r]]}switch(n.kind){case"A":d(a[n.path[r]],n.index,n.item);break;case"D":a[n.path[r]]=n.lhs;break;case"E":a[n.path[r]]=n.lhs;break;case"N":delete a[n.path[r]];break}}}function v(e,t,n){if(e&&t){var a=function(a){if(!n||n(e,t,a)){b(e,t,a)}};c(e,t,a)}}Object.defineProperties(p,{diff:{value:p,enumerable:true},observableDiff:{value:c,enumerable:true},applyDiff:{value:v,enumerable:true},applyChange:{value:b,enumerable:true},revertChange:{value:k,enumerable:true},isConflict:{get:function(){return"undefined"!==typeof n},enumerable:true},noConflict:{value:function(){if(a){a.forEach(function(e){e()});a=null}return p},enumerable:true}});if(typeof module!=="undefined"&&module&&typeof exports==="object"&&exports&&module.exports===exports){module.exports=p}else{t.DeepDiff=p}}();
(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof module !== 'undefined' && module.exports){
		module.exports = factory();
	} else {
		global.UriTemplate = factory();
	}
})(this, function () {
	var uriTemplateGlobalModifiers = {
		"+": true,
		"#": true,
		".": true,
		"/": true,
		";": true,
		"?": true,
		"&": true
	};
	var uriTemplateSuffices = {
		"*": true
	};
	
	function notReallyPercentEncode(string) {
		return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
			return "%" + doubleEncoded.substring(3);
		});
	}

	function uriTemplateSubstitution(spec) {
		var modifier = "";
		if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
			modifier = spec.charAt(0);
			spec = spec.substring(1);
		}
		var separator = "";
		var prefix = "";
		var shouldEscape = true;
		var showVariables = false;
		var trimEmptyString = false;
		if (modifier == '+') {
			shouldEscape = false;
		} else if (modifier == ".") {
			prefix = ".";
			separator = ".";
		} else if (modifier == "/") {
			prefix = "/";
			separator = "/";
		} else if (modifier == '#') {
			prefix = "#";
			shouldEscape = false;
		} else if (modifier == ';') {
			prefix = ";";
			separator = ";",
			showVariables = true;
			trimEmptyString = true;
		} else if (modifier == '?') {
			prefix = "?";
			separator = "&",
			showVariables = true;
		} else if (modifier == '&') {
			prefix = "&";
			separator = "&",
			showVariables = true;
		}

		var varNames = [];
		var varList = spec.split(",");
		var varSpecs = [];
		var varSpecMap = {};
		for (var i = 0; i < varList.length; i++) {
			var varName = varList[i];
			var truncate = null;
			if (varName.indexOf(":") != -1) {
				var parts = varName.split(":");
				varName = parts[0];
				truncate = parseInt(parts[1]);
			}
			var suffices = {};
			while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
				suffices[varName.charAt(varName.length - 1)] = true;
				varName = varName.substring(0, varName.length - 1);
			}
			var varSpec = {
				truncate: truncate,
				name: varName,
				suffices: suffices
			};
			varSpecs.push(varSpec);
			varSpecMap[varName] = varSpec;
			varNames.push(varName);
		}
		var subFunction = function (valueFunction) {
			var result = "";
			var startIndex = 0;
			for (var i = 0; i < varSpecs.length; i++) {
				var varSpec = varSpecs[i];
				var value = valueFunction(varSpec.name);
				if (value == null || (Array.isArray(value) && value.length == 0) || (typeof value == 'object' && Object.keys(value).length == 0)) {
					startIndex++;
					continue;
				}
				if (i == startIndex) {
					result += prefix;
				} else {
					result += (separator || ",");
				}
				if (Array.isArray(value)) {
					if (showVariables) {
						result += varSpec.name + "=";
					}
					for (var j = 0; j < value.length; j++) {
						if (j > 0) {
							result += varSpec.suffices['*'] ? (separator || ",") : ",";
							if (varSpec.suffices['*'] && showVariables) {
								result += varSpec.name + "=";
							}
						}
						result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
					}
				} else if (typeof value == "object") {
					if (showVariables && !varSpec.suffices['*']) {
						result += varSpec.name + "=";
					}
					var first = true;
					for (var key in value) {
						if (!first) {
							result += varSpec.suffices['*'] ? (separator || ",") : ",";
						}
						first = false;
						result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
						result += varSpec.suffices['*'] ? '=' : ",";
						result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
					}
				} else {
					if (showVariables) {
						result += varSpec.name;
						if (!trimEmptyString || value != "") {
							result += "=";
						}
					}
					if (varSpec.truncate != null) {
						value = value.substring(0, varSpec.truncate);
					}
					result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
				}
			}
			return result;
		};
		var guessFunction = function (stringValue, resultObj) {
			if (prefix) {
				if (stringValue.substring(0, prefix.length) == prefix) {
					stringValue = stringValue.substring(prefix.length);
				} else {
					return null;
				}
			}
			if (varSpecs.length == 1 && varSpecs[0].suffices['*']) {
				var varSpec = varSpecs[0];
				var varName = varSpec.name;
				var arrayValue = varSpec.suffices['*'] ? stringValue.split(separator || ",") : [stringValue];
				var hasEquals = (shouldEscape && stringValue.indexOf('=') != -1);	// There's otherwise no way to distinguish between "{value*}" for arrays and objects
				for (var i = 1; i < arrayValue.length; i++) {
					var stringValue = arrayValue[i];
					if (hasEquals && stringValue.indexOf('=') == -1) {
						// Bit of a hack - if we're expecting "=" for key/value pairs, and values can't contain "=", then assume a value has been accidentally split
						arrayValue[i - 1] += (separator || ",") + stringValue;
						arrayValue.splice(i, 1);
						i--;
					}
				}
				for (var i = 0; i < arrayValue.length; i++) {
					var stringValue = arrayValue[i];
					if (shouldEscape && stringValue.indexOf('=') != -1) {
						hasEquals = true;  
					}
					var innerArrayValue = stringValue.split(",");
					for (var j = 0; j < innerArrayValue.length; j++) {
						if (shouldEscape) {
							innerArrayValue[j] = decodeURIComponent(innerArrayValue[j]);
						}
					}
					if (innerArrayValue.length == 1) {
						arrayValue[i] = innerArrayValue[0];
					} else {
						arrayValue[i] = innerArrayValue;
					}
				}
			
				if (showVariables || hasEquals) {
					var objectValue = resultObj[varName] || {};
					for (var j = 0; j < arrayValue.length; j++) {
						var innerValue = stringValue;
						if (typeof arrayValue[j] == "string") {
							var stringValue = arrayValue[j];
							var innerVarName = stringValue.split("=", 1)[0];
							var stringValue = stringValue.substring(innerVarName.length + 1);
							innerValue = stringValue;
						} else {
							var stringValue = arrayValue[j][0];
							var innerVarName = stringValue.split("=", 1)[0];
							var stringValue = stringValue.substring(innerVarName.length + 1);
							arrayValue[j][0] = stringValue;
							innerValue = arrayValue[j];
						}
						if (objectValue[innerVarName] !== undefined) {
							if (Array.isArray(objectValue[innerVarName])) {
								objectValue[innerVarName].push(innerValue);
							} else {
								objectValue[innerVarName] = [objectValue[innerVarName], innerValue];
							}
						} else {
							objectValue[innerVarName] = innerValue;
						}
					}
					if (Object.keys(objectValue).length == 1 && objectValue[varName] !== undefined) {
						resultObj[varName] = objectValue[varName];
					} else {
						resultObj[varName] = objectValue;
					}
				} else {
					if (resultObj[varName] !== undefined) {
						if (Array.isArray(resultObj[varName])) {
							resultObj[varName] = resultObj[varName].concat(arrayValue);
						} else {
							resultObj[varName] = [resultObj[varName]].concat(arrayValue);
						}
					} else {
						if (arrayValue.length == 1 && !varSpec.suffices['*']) {
							resultObj[varName] = arrayValue[0];
						} else {
							resultObj[varName] = arrayValue;
						}
					}
				}
			} else {
				var arrayValue = (varSpecs.length == 1) ? [stringValue] : stringValue.split(separator || ",");
				var specIndexMap = {};
				for (var i = 0; i < arrayValue.length; i++) {
					// Try from beginning
					var firstStarred = 0;
					for (; firstStarred < varSpecs.length - 1 && firstStarred < i; firstStarred++) {
						if (varSpecs[firstStarred].suffices['*']) {
							break;
						}
					}
					if (firstStarred == i) {
						// The first [i] of them have no "*" suffix
						specIndexMap[i] = i;
						continue;
					} else {
						// Try from the end
						for (var lastStarred = varSpecs.length - 1; lastStarred > 0 && (varSpecs.length - lastStarred) < (arrayValue.length - i); lastStarred--) {
							if (varSpecs[lastStarred].suffices['*']) {
								break;
							}
						}
						if ((varSpecs.length - lastStarred) == (arrayValue.length - i)) {
							// The last [length - i] of them have no "*" suffix
							specIndexMap[i] = lastStarred;
							continue;
						}
					}
					// Just give up and use the first one
					specIndexMap[i] = firstStarred;
				}
				for (var i = 0; i < arrayValue.length; i++) {
					var stringValue = arrayValue[i];
					var innerArrayValue = stringValue.split(",");
				
					if (showVariables) {
						var stringValue = innerArrayValue[0]; // using innerArrayValue
						var varName = stringValue.split("=", 1)[0];
						var stringValue = stringValue.substring(varName.length + 1);
						innerArrayValue[0] = stringValue;
						var varSpec = varSpecMap[varName] || varSpecs[0];
					} else {
						var varSpec = varSpecs[specIndexMap[i]];
						var varName = varSpec.name;
					}

					for (var j = 0; j < innerArrayValue.length; j++) {
						if (shouldEscape) {
							innerArrayValue[j] = decodeURIComponent(innerArrayValue[j]);
						}
					}

					if ((showVariables || varSpec.suffices['*'])&& resultObj[varName] !== undefined) {
						if (Array.isArray(resultObj[varName])) {
							resultObj[varName] = resultObj[varName].concat(innerArrayValue);
						} else {
							resultObj[varName] = [resultObj[varName]].concat(innerArrayValue);
						}
					} else {
						if (innerArrayValue.length == 1 && !varSpec.suffices['*']) {
							resultObj[varName] = innerArrayValue[0];
						} else {
							resultObj[varName] = innerArrayValue;
						}
					}
				}
			}
		};
		subFunction.varNames = varNames;
		return {
			prefix: prefix,
			substitution: subFunction,
			unSubstitution: guessFunction
		};
	}

	function UriTemplate(template) {
		if (!(this instanceof UriTemplate)) {
			return new UriTemplate(template);
		}
		var parts = template.split("{");
		var textParts = [parts.shift()];
		var prefixes = [];
		var substitutions = [];
		var unSubstitutions = [];
		var varNames = [];
		while (parts.length > 0) {
			var part = parts.shift();
			var spec = part.split("}")[0];
			var remainder = part.substring(spec.length + 1);
			var funcs = uriTemplateSubstitution(spec);
			substitutions.push(funcs.substitution);
			unSubstitutions.push(funcs.unSubstitution);
			prefixes.push(funcs.prefix);
			textParts.push(remainder);
			varNames = varNames.concat(funcs.substitution.varNames);
		}
		this.fill = function (valueFunction) {
			var result = textParts[0];
			for (var i = 0; i < substitutions.length; i++) {
				var substitution = substitutions[i];
				result += substitution(valueFunction);
				result += textParts[i + 1];
			}
			return result;
		};
		this.fromUri = function (substituted) {
			var result = {};
			for (var i = 0; i < textParts.length; i++) {
				var part = textParts[i];
				if (substituted.substring(0, part.length) !== part) {
					return undefined;
				}
				substituted = substituted.substring(part.length);
				if (i >= textParts.length - 1) {
					if (substituted == "") {
						break;
					} else {
						return undefined;
					}
				}
				var nextPart = textParts[i + 1];
				var offset = i;
				while (true) {
					if (offset == textParts.length - 2) {
						var endPart = substituted.substring(substituted.length - nextPart.length);
						if (endPart !== nextPart) {
							return undefined;
						}
						var stringValue = substituted.substring(0, substituted.length - nextPart.length);
						substituted = endPart;
					} else if (nextPart) {
						var nextPartPos = substituted.indexOf(nextPart);
						var stringValue = substituted.substring(0, nextPartPos);
						substituted = substituted.substring(nextPartPos);
					} else if (prefixes[offset + 1]) {
						var nextPartPos = substituted.indexOf(prefixes[offset + 1]);
						var stringValue = substituted.substring(0, nextPartPos);
						substituted = substituted.substring(nextPartPos);
					} else if (textParts.length > offset + 2) {
						// If the separator between this variable and the next is blank (with no prefix), continue onwards
						offset++;
						nextPart = textParts[offset + 1];
						continue;
					} else {
						var stringValue = substituted;
						substituted = "";
					}
					break;
				}
				unSubstitutions[i](stringValue, result);
			}
			return result;
		}
		this.varNames = varNames;
		this.template = template;
	}
	UriTemplate.prototype = {
		toString: function () {
			return this.template;
		},
		fillFromObject: function (obj) {
			return this.fill(function (varName) {
				return obj[varName];
			});
		}
	};
	
	return UriTemplate;
});
/**
 * French Immatriculation directive.
 */
angular.module('cg.immatriculation', [])

    .directive('cgImmatriculation', [function () {
        var eventsToHandle = ['input', 'keyup', 'click', 'focus'],
            lettre = new RegExp('[A-Z]{1}'),
            chiffre = new RegExp('[0-9]{1}'),
            mask2009 = function (v) {
                var mask = '__-___-__',
                    regexp = /[A-Z]{2}\-[0-9]{3}\-[A-Z]{2}/g,
                    splitMask = mask.split(''),
                    splitInit = v.split('');
                var value = '', index = 0, valunmasked = '', forbiddenPos = [];

                angular.forEach(splitMask, function (chr, i) {
                    if (splitInit[i]) {
                        var tt = angular.uppercase('' + splitInit[i]);
                        if (((0 === i || i === 1) || (7 === i || i === 8) ) && lettre.test(tt)) {

                            if ((index === 0) || (index === (i - 1))) {
                                value += tt;
                                index = i;
                            }


                        }

                        if ((3 === i || 4 === i || 5 === i) && chiffre.test(tt)) {

                            if (index === (i - 1)) {
                                value += tt;
                                index = i;
                            }

                        }
                    }

                    if (value.length !== (i + 1)) {
                        value += chr;
                        if ((chr === '-')) {
                            if ((index + 1) === i) {
                                index = i;
                            }
                            forbiddenPos.push(i);
                        }


                    }
                });
                index++;
                var valid = regexp.test(value);
                console.log(valid);
                return {
                    position: index,
                    value: value,
                    defaultMask: mask,
                    forbiddenPos: forbiddenPos,
                    maxposition: (mask.length - 1),
                    regexp: regexp,
                    valid: valid
                };
            },

            isFocused = function (elem) {
                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            };

        return {
            priority: 100,
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, controller) {
                var eventsBound = false, valOld = '',
                    oldCaretPosition, oldSelectionLength;

                element.attr('placeholder', 'Immatriculation');

                controller.$render = function () {

                    if (controller.$viewValue) {
                        var valMasked = mask2009(controller.$viewValue);
                        if (valMasked.value !== controller.$viewValue) {
                            controller.$setViewValue(valMasked.value);
                            controller.$setValidity(attr.ngModel, valMasked.valid);
                        }
                        element.val(valMasked.value);

                    }
                    else
                        element.val('');
                };
                function blurHandler() {
                    var val = element.val();
                    if (!val || val.length == 0) {
                        element.val('');
                        controller.$setViewValue('');
                    }
                }


                function getCaretPosition(input) {
                    if (!input)
                        return 0;
                    if (input.selectionStart !== undefined) {
                        return input.selectionStart;
                    } else if (document.selection) {
                        if (isFocused(element[0])) {
                            // Curse you IE
                            input.focus();
                            var selection = document.selection.createRange();
                            selection.moveStart('character', input.value ? -input.value.length : 0);
                            return selection.text.length;
                        }
                    }
                    return 0;
                }

                function setCaretPosition(input, pos) {
                    if (!input)
                        return 0;
                    if (input.offsetWidth === 0 || input.offsetHeight === 0) {
                        return; // Input's hidden
                    }
                    if (input.setSelectionRange) {
                        if (isFocused(element[0])) {
                            input.focus();
                            input.setSelectionRange(pos, pos);
                        }
                    }
                    else if (input.createTextRange) {
                        // Curse you IE
                        var range = input.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', pos);
                        range.moveStart('character', pos);
                        range.select();
                    }
                }

                function getSelectionLength(input) {
                    if (!input)
                        return 0;
                    if (input.selectionStart !== undefined) {
                        return (input.selectionEnd - input.selectionStart);
                    }
                    if (document.selection) {
                        return (document.selection.createRange().text.length);
                    }
                    return 0;
                }


                function eventHandler(e) {
                    /*jshint validthis: true */
                    e = e || {};
                    // Allows more efficient minification
                    var eventWhich = e.which,
                        eventType = e.type;

                    // Prevent shift and ctrl from mucking with old values
                    if (eventWhich === 16 || eventWhich === 91) {
                        return;
                    }

                    var val = element.val(),
                        caretPos = getCaretPosition(this) || 0,
                        caretPosOld = oldCaretPosition || 0,
                        caretPosDelta = caretPos - caretPosOld,
                        valMasked = mask2009(val),
                        selectionLenOld = oldSelectionLength || 0,
                        isSelected = getSelectionLength(this) > 0,
                        wasSelected = selectionLenOld > 0,

                        isDeletion = (val.length < valOld.length) || (selectionLenOld && val.length === valOld.length - selectionLenOld),
                        isSelection = (eventWhich >= 37 && eventWhich <= 40) && e.shiftKey, // Arrow key codes

                        isKeyLeftArrow = eventWhich === 37,

                    //isKeyBackspace = eventWhich === 8 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === -1)),
                        isKeyDelete = eventWhich === 46 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === 0) && !wasSelected),

                        forbid = function (pos) {
                            for (var i = 0; i < valMasked.forbiddenPos.length; i++) {
                                var forbiddenPo = valMasked.forbiddenPos[i];
                                if (forbiddenPo === pos) {
                                    if (!isKeyDelete && !isKeyLeftArrow) {
                                        return pos + 1;
                                    }

                                }
                            }
                            return pos;
                        };
                    // These events don't require any action
                    if (isSelection || (isSelected && (eventType === 'click' || eventType === 'keyup'))) {
                        return;
                    }

                    element.attr('ng-pattern', valMasked.regexp);
                    element.val(valMasked.value);
                    controller.$setViewValue(valMasked.value);
                    controller.$setValidity(attr.ngModel, valMasked.valid);

                    valOld = valMasked.value.substring(0, valMasked.position);
                    if (valMasked.defaultMask === valMasked.value) {
                        setCaretPosition(this, 0);
                        return;
                    }

                    if (caretPos <= valMasked.position) {
                        setCaretPosition(this, forbid(caretPos));
                    } else
                        setCaretPosition(this, forbid(valMasked.position));
                }

                function bindEventListeners() {
                    if (eventsBound) {
                        return;
                    }
                    element.bind('blur', blurHandler);
                    element.bind(eventsToHandle.join(' '), eventHandler);

                    eventsBound = true;
                }

                function initialize() {
                    var v = controller.$modelValue || '', mask = mask2009(v);
                    if (mask.defaultMask !== mask.value) {
                        element.val(valMasked.value);
                        controller.$setViewValue(valMasked.value);
                    }
                    bindEventListeners();
                    return true;
                }


                attr.$observe('cgImmatriculation', initialize);

            }
        };
    }
    ])
;