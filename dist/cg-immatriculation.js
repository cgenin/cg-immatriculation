/**
 * Angularjs directive for french immmatriculation input
 * @version v1.0.0 - 2015-08-21
 * @link 
 * @author Christophe genin <genin.christophe@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/**
 * French Immatriculation directive.
 */
angular.module('cg.immatriculation', [])

    .directive('cgImmatriculation', [function () {
        var eventsToHandle = ['input', 'keyup', 'click', 'focus'],
            lettre = new RegExp('[A-Z]{1}'),
            chiffre = new RegExp('[0-9]{1}'),
            mask2009 = function (v) {
                var mask = '__-___-__', splitMask = mask.split(''),
                    splitInit = v.split('');
                var value = '', index = 0, valunmasked = '', forbiddenPos = [];

                angular.forEach(splitMask, function (chr, i) {
                    if (splitInit[i]) {
                        var tt = angular.uppercase('' + splitInit[i]);
                        if (((0 === i || i === 1) || (7 === i || i === 8) ) && lettre.test(tt)) {
                            value += tt;
                            index = i;

                        }

                        if ((3 === i || 4 === i || 5 === i) && chiffre.test(tt)) {
                            value += tt;
                            index = i;
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

                return {
                    position: index,
                    value: value,
                    defaultMask: mask,
                    forbiddenPos: forbiddenPos,
                    maxposition: (mask.length - 1)
                };
            },

            isFocused = function (elem) {
                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            };

        return {
            //priority: 100,
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, controller) {
                var eventsBound = false, valOld = '',
                    oldCaretPosition, oldSelectionLength;
                element.attr('placeholder', 'Immatriculation');
                controller.$render = function () {
                    if (controller.$viewValue)
                        element.val(controller.$viewValue);
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


                    element.val(valMasked.value);
                    controller.$setViewValue(valMasked.value);

                    // scope.ngModel = valMasked.value;
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