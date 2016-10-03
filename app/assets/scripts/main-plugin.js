;(function($, window, appSetting, Modernizr) {

    /* 9:00 AM 14/11/2014 */
    'use strict';
    var mainApp = function () {
        this.initApp();
        if(this.vList.isConsoleApp) console.log('Main plugin init !');
    };

    mainApp.prototype = {
        settingList: function(){
            /* Ajax config */
            //--------------------------------------

            $.support.cors = true;

            //--------------------------------------
        },
        variableList: function() {
            return {
                $win: $(window),
                $doc: $(document),
                documentBody: document.body,
                $dycComponent: $('.dyc-component'),
                location: window.location.href,
                $head: $('head'),
                isCookieEnabled: window.navigator.cookieEnabled,
                isConsoleApp: false,//turn on/off log
                startExecutionVariable: 0,
                globalPageNotFoundUrl: window.globalPageNotFoundUrl
            };
        },
        functionList: function(vList) {
            var testCookieEnabled,
                testFunctionExist,
                startExecution,
                endExecution,
                addScrollGlobalHeader,
                closeFadeInSlide,
                playCtaCheckEmpty,
                checkACheckBox,
                unCheckACheckBox,
                ajaxGetData,
                groupRadio,
                allPopupHide,
                getURLParameter,
                ajaxPopup,
                setPosition,
                popupSingle,
                fixMaxHeight,
                onlyHandlebarsPage,
                fixTitle,
                fixMinHeight,
                refreshPlugin,
                refreshAllPlugin,
                handleResizeWindow,
                saveforlater,
                createObjectCookie,
                anyWhereClick,
                touchEvent,
                touchEventOff,
                windowScroll,
                begin,
                initBegin;



            /* Test Cookie disabled */
            //--------------------------------------

            testCookieEnabled = function(){
                if(!vList.isCookieEnabled) {
                    alert(appSetting.cookieEnabledAlert);
                }
            };

            //--------------------------------------



            /* Test function exist */
            //--------------------------------------

            testFunctionExist = function(el){
                if(el && typeof el === 'function') {
                    return true;
                }
                return false;
            };

            //--------------------------------------



            /* Start execution */
            //--------------------------------------

            startExecution = function(){
                var newExecution = new Date().getTime();

                return newExecution;
            };

            //--------------------------------------



            /* End execution */
            //--------------------------------------

            endExecution = function(start, nameFunction){
                var end = new Date().getTime(),
                    time = end - start;
                if(!vList.isCookieEnabled) {
                  console.log('Run function ' + nameFunction + ' width execution time : ' + time + ' milliseconds !');
                }
            };

            //--------------------------------------



            /* Add scroll global header when scroll */
            //--------------------------------------

            addScrollGlobalHeader = function () {
                var $elGlobalHeader = $('.global-header-customer'),
                    scrollClass = 'scroll';

                if ($elGlobalHeader.length) {
                    if (vList.$win.scrollTop() === 0 && $elGlobalHeader.hasClass(scrollClass)) {
                        $elGlobalHeader.removeClass(scrollClass);

                        if (vList.isConsoleApp) {
                            console.log('Run function addScrollGlobalHeader !');
                        }
                    } else if (vList.$win.scrollTop() !== 0 && !$elGlobalHeader.hasClass(scrollClass)) {
                        $elGlobalHeader.addClass(scrollClass);

                        if (vList.isConsoleApp) {
                            console.log('Run function addScrollGlobalHeader !');
                        }
                    }
                }
            };

            //--------------------------------------



            /* Close Fadein slide*/
            //--------------------------------------

            closeFadeInSlide = function(event) {
                var elFadeInSlide = $('[data-fadeinslide]'),
                    elFsc = $('[data-fs-c]').filter(':visible'),
                    elFss = $('[data-fs-s]'),
                    elFsf = $('[data-fs-f]'),
                    elWrapActive = $('[data-wrap-active]'),
                    targetFadeInSlide = $(event.target).closest('[data-fadeinslide]');

                if(!targetFadeInSlide.length && elFsc.length && elFadeInSlide.attr('data-fadeinslide-ignore-first') === 'true') {
                    if(vList.isConsoleApp) {
                        console.log('Run function closeFadeInSlide !');
                    }

                    elFsc.hide();

                    elWrapActive
                        .add(elFss)
                        .add(elFsf)
                        .removeClass('active');
                }
            };

            //--------------------------------------



            /* Check wysiwyg class in Cta , if wysiwyg empty , remove Cta*/
            //--------------------------------------

            playCtaCheckEmpty = function() {
                if(vList.isConsoleApp) {
                    console.log('Run function playCtaCheckEmpty !');
                }

                var ctaEl = $('.play-cta-wrap'),
                    ctaClass = 'play-cta-wrap',
                    wysiwygEl = ctaEl.find('.wysiwyg');
                if(!$.trim(wysiwygEl.text()).length) {
                    ctaEl.removeClass(ctaClass);
                }
            };

            //--------------------------------------



            /* Check custom checkbox */
            //--------------------------------------

            checkACheckBox = function (el) {
                if(vList.isConsoleApp) console.log('Run function checkACheckBox !');

                el
                    .prop('checked', true)
                    .attr('checked', 'checked')
                    .parent().addClass('is-checked');
            };

            //--------------------------------------



            /* Check custom checkbox */
            //--------------------------------------

            unCheckACheckBox = function (el) {
                if(vList.isConsoleApp) console.log('Run function unCheckACheckBox !');

                el
                    .removeAttr('checked')
                    .parent().removeClass('is-checked');
            };

            //--------------------------------------



            /* Ajax get data from link */
            //--------------------------------------

            ajaxGetData = function (link, typeAjax, dataTypeAjax, timeout, dataPost, callbackError, callbackSuccess) {
                if(vList.isConsoleApp) console.log('Run function ajaxGetData !');

                var tempTypeAjax = typeAjax !== 'default' ? typeAjax : appSetting.ajaxGlobalDefault.typeAjax,
                    tempDataType = dataTypeAjax !== 'default' ? dataTypeAjax : appSetting.ajaxGlobalDefault.dataTypeAjax,
                    tempTimeout = timeout !== 'default' ? timeout : appSetting.ajaxGlobalDefault.timeout,
                    tempData = dataPost !== 'default' ? dataPost : appSetting.ajaxGlobalDefault.dataPost,
                    tempCallbackError = callbackError !== 'default' ? callbackError : appSetting.ajaxGlobalDefault.callbackError,
                    tempCallbackSuccess = callbackSuccess !== 'default' ? callbackSuccess : appSetting.ajaxGlobalDefault.callbackSuccess;

                $.ajax({
                    url: link,
                    type: tempTypeAjax,
                    dataType : tempDataType,
                    timeout: tempTimeout,
                    data: tempData,
                    error: tempCallbackError,
                    success: tempCallbackSuccess
                });
            };

            //--------------------------------------



            /* Radio group :
             - preferences-page.html
             */
            //--------------------------------------

            groupRadio = function() {
                if(vList.isConsoleApp) console.log('Run function groupRadio !');

                var triggerRadioPrimary = '[data-radio-primary]',
                    dataRadioGroup = 'data-radio-group',
                    triggerRadioGroup = '[data-radio-group]',
                    dataRadioLink = 'data-radio-group-link',
                    triggerRadioLink = '[data-radio-group-link]',
                    triggerRadioSub = '[data-radio-sub]',
                    triggerCheckBox = '[type="checkbox"]',
                    triggerFsc = '[data-fs-c]',
                    triggerFsf = '[data-fs-f]',
                    triggerFss = '[data-fs-s]',
                    dataFsf = 'data-fs-f',
                    dataFss = 'data-fs-s',
                    dataFsc = 'data-fs-c',
                    triggerRootRadio = '[data-radio-root]';

                vList.$doc.on('click.triggerRadioPrimary, touchend.triggerRadioPrimary', triggerRadioPrimary, function(){
                    var thatContentRadio = $(this).closest(triggerRadioGroup),
                        thatRadioLink = $('[data-radio-group-link="' + thatContentRadio.attr(dataRadioGroup) + '"]'),
                        thatSubRadio = thatContentRadio.find(triggerRadioSub);

                    if(!thatContentRadio.length) return false;

                    if($(this).is(':checked')) {
                        thatSubRadio.each(function(){
                            $(this)
                                .attr('disabled', 'disabled')
                                .removeAttr('checked');
                            $(this).parent().removeClass('is-checked');
                        });

                        thatRadioLink.removeAttr('checked');
                        thatRadioLink.parent().removeClass('is-checked');
                    } else {
                        thatSubRadio.each(function(){
                            $(this).removeAttr('disabled');
                        });
                    }
                })
                    .on('click.triggerRadioSub, touchend.triggerRadioSub', triggerRadioSub, function(){
                        var thatContentRadio = $(this).closest(triggerRadioGroup),
                            thatRadioLink = $('[data-radio-group-link="' + thatContentRadio.attr(dataRadioGroup) + '"]'),
                            allSub = thatContentRadio.find(triggerRadioSub);

                        if(allSub.filter(':checked').length) {
                            if(checkACheckBox && typeof checkACheckBox === 'function') {
                                checkACheckBox(thatRadioLink);
                            }
                        } else {
                            if(unCheckACheckBox && typeof unCheckACheckBox === 'function') {
                                unCheckACheckBox(thatRadioLink);
                            }
                        }
                    })
                    .on('click.triggerRadioLink, touchend.triggerRadioLink', triggerRadioLink, function(){
                        var thatEl = $(this),
                            thatContentRadio =  $('[data-radio-group="' + thatEl.attr(dataRadioLink) + '"]'),
                            thatPrimaryRadio = thatContentRadio.find(triggerRadioPrimary),
                            thatChild = thatContentRadio.find(triggerRadioSub);

                        if(thatEl.is(':checked')) {
                            thatChild.each(function(){
                                $(this)
                                    .prop('checked', true)
                                    .attr('checked', 'checked')
                                    .removeAttr('disabled');
                                $(this).parent().addClass('is-checked');
                            });
                            thatPrimaryRadio.removeAttr('checked');
                            thatPrimaryRadio.parent().removeClass('is-checked');
                        } else {
                            thatChild.each(function(){
                                $(this).removeAttr('checked');
                                $(this).parent().removeClass('is-checked');
                            });
                        }
                    })
                    .on('click.triggerCheckBox, touchend.triggerCheckBox', triggerCheckBox, function(){
                        var thatEl = $(this),
                            thatFsc = thatEl.closest(triggerFsc);

                        if(thatFsc.length) {
                            var allCheckBoxChecked = thatFsc.find(triggerCheckBox).filter(':checked:not(' + triggerRadioPrimary + ')'),
                                thatTarget = $('[data-fs-f="' + thatFsc.attr(dataFsc) + '"]'),
                                thatTargetMobile = $('[data-fs-s="' + thatFsc.attr(dataFsc) + '"]'),
                                tempCheckBox;

                            tempCheckBox = thatTargetMobile.add(thatTarget).find(triggerCheckBox);

                            if(allCheckBoxChecked.length) {
                                if(checkACheckBox && typeof checkACheckBox === 'function') {
                                    checkACheckBox(tempCheckBox);
                                }
                            } else {
                                if(unCheckACheckBox && typeof unCheckACheckBox === 'function') {
                                    unCheckACheckBox(tempCheckBox);
                                }
                            }
                        }
                    })
                    .on('click.triggerRootRadio, touchend.triggerRootRadio', triggerRootRadio, function(){
                        var thatEl = $(this),
                            thatFsf = thatEl.closest(triggerFsf),
                            thatFss = thatEl.closest(triggerFss),
                            allCheckBoxInThatContent,
                            relatedCheckBox;

                        if(thatFsf.length) {
                            allCheckBoxInThatContent = $('[data-fs-c="' + thatFsf.attr(dataFsf) + '"]')
                                .find(triggerCheckBox)
                                .not(triggerRadioPrimary);

                            relatedCheckBox = $('[data-fs-s="' + thatFsf.attr(dataFsf) + '"]')
                                .find(triggerCheckBox);
                        } else if(thatFss.length) {
                            allCheckBoxInThatContent = $('[data-fs-c="' + thatFss.attr(dataFss) + '"]')
                                .find(triggerCheckBox)
                                .not(triggerRadioPrimary);

                            relatedCheckBox = $('[data-fs-f="' + thatFss.attr(dataFss) + '"]')
                                .find(triggerCheckBox);
                        }

                        if(!thatEl.is(':checked')) {
                            if(unCheckACheckBox && typeof unCheckACheckBox === 'function') {
                                unCheckACheckBox(allCheckBoxInThatContent);
                                unCheckACheckBox(relatedCheckBox);
                            }
                        }
                    });
            };

            //--------------------------------------



            /*  All popup hide :
             - save-for-later.html
             */
            //--------------------------------------

            allPopupHide = function(){
                if(vList.isConsoleApp) console.log('Run function allPopupHide !');

                $('[data-popup]').each(function(){
                    $(this).data('popup').hide();
                });
            };

            //--------------------------------------



            /*  Get url param :
             - save-for-later.html
             */
            //--------------------------------------

            getURLParameter = function(name) {
                if(vList.isConsoleApp) console.log('Run function getURLParameter !');

                return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
            };

            //--------------------------------------



            /*  Ajax popup :
             - save-for-later.html
             */
            //--------------------------------------

            ajaxPopup = function(form, callback) {
                if(vList.isConsoleApp) console.log('Run function ajaxPopup !');

                var ajaxUrl = form.attr('action'),
                    dataPost = form.serialize();

                if(ajaxGetData && typeof ajaxGetData === 'function') {
                    ajaxGetData(ajaxUrl,
                        'default',
                        'default',
                        'default',
                        dataPost,
                        function(dataError, timeoutError){
                            if(timeoutError === 'timeout') {
                                console.log('Connection timeout !');
                            }

                            if(dataError && dataError.responseText) {
                                console.log(dataError.responseText);
                            }

                            if(allPopupHide && typeof allPopupHide === 'function') {
                                allPopupHide();
                            }

                            return false;
                        }, function(data){
                            callback(data);
                        });
                }
            };

            //--------------------------------------



            /*  Popup single
             - save-for-later.html
             */
            //--------------------------------------

            setPosition = function(el) {
                var $thatEl = $(el);

                if($thatEl.length) {
                    if(vList.isConsoleApp) console.log('Run function setPosition !');

                    if(vList.$win.width() < $thatEl.outerWidth() || vList.$win.height() < $thatEl.outerHeight())
                        $thatEl.css('position', 'absolute');
                    else
                        $thatEl.css('position', 'fixed');

                    $thatEl.css({
                        left: Math.max(0,(vList.$win.width() - $thatEl.outerWidth())/2),
                        top: Math.max(0,(vList.$win.height() - $thatEl.outerHeight())/2)
                    });
                }
            };

            popupSingle = function(el, iconClose) {
                if(vList.isConsoleApp) console.log('Run function popupSingle !');

                var $thatEl = $(el),
                    $overlay = $('.overlay'),
                    $buttonClose = $thatEl.find(iconClose),
                    $buttonContinue = $thatEl.find('.btn-primary');

                if(setPosition && typeof setPosition === 'function') {
                    setPosition($thatEl);
                }

                $thatEl.fadeIn();

                $overlay.add($buttonClose).add($buttonContinue).on('click.popupSingle, touchend.popupSingle', function(){
                    $thatEl.fadeOut();

                    if(allPopupHide && typeof allPopupHide === 'function') {
                        allPopupHide();
                    }
                });
            };

            //--------------------------------------



            /*  Fix max height :
             - all-support-components.html
             - build-your-own.html
             - compos-page.html
             - get-home-page.html
             - got-home-page.html
             - got-upgrades.html
             - how-it-work.html
             - package-detail.html
             - welcome-to-foxtel.html
             */
            //--------------------------------------

            fixMaxHeight = function() {
                var newExecution,
                    $dataMaxHeight = $('[data-maxheight-child]');
                if(Foxtel.osDetect.isFirefox && $("[data-maxheight-disabled]").length){
                    if(vList.isConsoleApp) console.log('Disable fixMaxHeight for Firefox in this page!');
                    return;
                }

                if(testFunctionExist(startExecution)) newExecution = startExecution();

                if ($dataMaxHeight.length) {
                    $dataMaxHeight.height('');

                    $dataMaxHeight.each(function () {
                        var maxHeight = 0,
                            $this = $(this),
                            $thisContent = $this.closest('[data-maxheight-content]'),
                            $target = $thisContent.find('[data-maxheight-child="' + $this.data('maxheight-child') + '"]');

                        if ($target.length) {
                            $target.each(function(){
                                var $that = $(this);

                                if($that.height() > maxHeight) {
                                    maxHeight = $that.height();
                                }
                            });

                            if (vList.$win.width() >= appSetting.mobileScreen || $thisContent.attr('data-maxheight-mobile-screen')) {
                                $this.height(maxHeight);
                            }
                        }
                    });

                    if(testFunctionExist(endExecution) && vList.isConsoleApp) endExecution(newExecution, 'fixMaxHeight');
                }
            };

            //--------------------------------------



            //Dyc - only Handlebars Page use that
            //--------------------------------------

            onlyHandlebarsPage = function () {
                if(vList.isConsoleApp) console.log('Run function onlyHandlebarsPage !');

                var $globalRedirect,
                    cookieRedirectURL,
                    $dataRedirectCookie = $('[data-redirect-cookie]');

                if(window.console) {
                    console.log('Handlebars Completed !');
                }

                if($dataRedirectCookie.length) {
                    $dataRedirectCookie.addClass('dyc-cookie');
                }

                $globalRedirect = $('.data-redirect-cookie');

                $globalRedirect.each(function () {
                    cookieRedirectURL = $(this).attr('data-cookie-redirect-url');

                    if (cookieRedirectURL) {
                        window.location = cookieRedirectURL;
                    }
                });
            };

            //--------------------------------------



            /*  Fix height title on load :
             - package-detail.html
             */
            //--------------------------------------

            fixTitle = function(){
                if(Foxtel.osDetect.isFirefox && $("[data-maxheight-disabled]").length){
                    if(vList.isConsoleApp) console.log('Disable fixTitle for Firefox in this page!');
                    return;
                }

                var newExecution,
                    $thatTarget = $('[data-sliderchoice-body]').find('[data-maxheight-child="title"]').closest('[data-accordion-target]').filter(':hidden');


                if(testFunctionExist(startExecution)) newExecution = startExecution();

                if($thatTarget.length) {
                    $thatTarget
                        .css({
                            visibility: 'hidden',
                            height: 0
                        })
                        .show();

                    if(fixMaxHeight && typeof fixMaxHeight === 'function') {
                        fixMaxHeight();
                    }

                    $thatTarget
                        .hide()
                        .css({
                            height: '',
                            visibility: '',
                            display: ''
                        });

                    if(testFunctionExist(endExecution) && vList.isConsoleApp) endExecution(newExecution, 'fixTitle');
                }
            };

            //--------------------------------------



            /*  Sum min height :
             - package-detail.html
             */
            //--------------------------------------

            fixMinHeight = function(){
                var newExecution,
                    elMinHeight = $('[data-minheight]');

                if(testFunctionExist(startExecution)) newExecution = startExecution();

                if(elMinHeight.length) {
                    elMinHeight.each(function(){
                        var sumHeight = 20;

                        $(this).find('.pack-item').each(function(){
                            sumHeight += $(this).outerHeight(true);
                        });

                        $(this).css({minHeight: sumHeight});
                    });

                    if(testFunctionExist(endExecution) && vList.isConsoleApp) endExecution(newExecution, 'fixMinHeight');
                }
            };

            //---------------------------------------



            /*  Refresh plugin :
             - All page use plugin.
             */
            //--------------------------------------

            refreshPlugin = function(trigger){
                var elRefresh = $('[data-'+ trigger +']');

                if(elRefresh.length) {
                    if(vList.isConsoleApp) console.log('Run function refreshPlugin ' + trigger + '!');

                    elRefresh.each(function(){
                        var $thatElement = $(this),
                            thatData = $thatElement.data(trigger);

                        if(thatData !== '' && thatData !== undefined && thatData.refresh && typeof thatData.refresh === 'function') {
                            thatData.refresh();
                        }
                    });
                }
            };

            //--------------------------------------



            /*  Refresh all plugin :
             - All page use plugin.
             */
            //--------------------------------------

            refreshAllPlugin = function(){
                if(vList.isConsoleApp) console.log('Run function refreshAllPlugin !');

                if(refreshPlugin && typeof refreshPlugin === 'function') {
                    refreshPlugin('sliderdrag');
                    refreshPlugin('fadeinslide');
                    refreshPlugin('wrap-active');
                    refreshPlugin('brightcove-ajax');
                }
            };

            //--------------------------------------



            /* Resize (Catch bug recursive IE8) */
            //--------------------------------------

            handleResizeWindow = function(){
                if(vList.isConsoleApp) console.log('Run function handleResizeWindow !');

                vList.$win.one("resize", function() {
                    if(refreshAllPlugin && typeof refreshAllPlugin === 'function') {
                        refreshAllPlugin();
                    }

                    if(fixMinHeight && typeof fixMinHeight === 'function') {
                        fixMinHeight();
                    }

                    if(fixMaxHeight && typeof fixMaxHeight === 'function') {
                        fixMaxHeight();
                    }

                    if(fixTitle && typeof fixTitle === 'function') {
                        fixTitle();
                    }

                    if(setPosition && typeof setPosition === 'function') {
                        setPosition('#popup-save-for-late-success');
                        setPosition('#popup-save-for-late-fail');
                        setPosition('#popup-send-to-friend-success');
                        setPosition('#popup-send-to-friend-fail');
                    }

                    setTimeout(function(){
                        if(Modernizr.touch) handleResizeWindow();
                    },1);
                });
            };

            //---------Resize End-------------------



            /*  JS for save for later page :
             - save-for-later.html
             */
            //--------------------------------------

            saveforlater = function(){
                if(vList.isConsoleApp) console.log('Run function saveforlater !');

                var $saveForLaterForm = $('#save-for-later'),
                    $yourDetailsForm = $('#your-details'),
                    $sendToAFriendForm = $('#send-to-friend'),
                    $resultTitle = $('#result-title'),
                    $resultTitleTarget = $('#result-title-target'),
                    resultSearch,
                    $invalidFormErrorMessage = $('.invalid-form-error-message');

                if($resultTitle.length && $resultTitleTarget.length) {
                    resultSearch = getURLParameter('q');

                    if(resultSearch && resultSearch.length) {
                        $resultTitleTarget.html($resultTitle.find('span').html() + ' ' + $resultTitleTarget.data('text-search'));
                    }
                }

                if($saveForLaterForm.length && $saveForLaterForm.parsley && typeof $saveForLaterForm.parsley === 'function') {
                    $saveForLaterForm.parsley();

                    $saveForLaterForm.parsley().subscribe('parsley:form:validate', function (formInstance) {
                        if (formInstance.isValid('save-for-later', true)) {

                            $('[data-popup-target="save-for-later"]').fadeOut(function(){
                                if(ajaxPopup && typeof ajaxPopup === 'function') {
                                    ajaxPopup($saveForLaterForm, function(data){
                                        if(popupSingle && typeof popupSingle === 'function' && data) {
                                            if(data.status && data.status === true) {
                                                popupSingle($saveForLaterForm.data('popup-success'), '.icon-close');
                                            } else {
                                                popupSingle($saveForLaterForm.data('popup-fail'), '.icon-close');
                                            }
                                        }
                                    });
                                }
                            });

                            formInstance.submitEvent.preventDefault();
                            return;
                        }

                        formInstance.submitEvent.preventDefault();

                        return;
                    });
                }

                if($yourDetailsForm.length && $yourDetailsForm.parsley && typeof $yourDetailsForm.parsley === 'function') {
                    $yourDetailsForm.parsley();

                    $yourDetailsForm.parsley().subscribe('parsley:form:validate', function (formInstance) {
                        if (formInstance.isValid('your-details', true) && formInstance.isValid('co-signor-details', true)) {

                            $invalidFormErrorMessage.hide();

                            return;
                        }

                        formInstance.submitEvent.preventDefault();

                        $invalidFormErrorMessage.show();

                        return;
                    });
                }

                if($sendToAFriendForm.length && $sendToAFriendForm.parsley && typeof $sendToAFriendForm.parsley === 'function') {
                    $sendToAFriendForm.parsley();

                    $sendToAFriendForm.parsley().subscribe('parsley:form:validate', function (formInstance) {
                        if (formInstance.isValid('send-to-friend', true)) {

                            $('[data-popup-target="send-to-a-friend"]').fadeOut(function(){
                                if(ajaxPopup && typeof ajaxPopup === 'function') {
                                    ajaxPopup($sendToAFriendForm, function(data){
                                        if(popupSingle && typeof popupSingle === 'function' && data) {
                                            if(data.status && data.status === true) {
                                                popupSingle($sendToAFriendForm.data('popup-success'), '.icon-close');
                                            } else {
                                                popupSingle($sendToAFriendForm.data('popup-fail'), '.icon-close');
                                            }
                                        }
                                    });
                                }
                            });

                            formInstance.submitEvent.preventDefault();
                            return;
                        }

                        formInstance.submitEvent.preventDefault();

                        return;
                    });

                    $sendToAFriendForm.parsley().subscribe('parsley:form:validated', function () {
                        $('[data-popup]').each(function(){
                            $(this).data('popup').setPosition();
                        });
                    });
                }
            };

            //--------------------------------------



            /*Cookies*/
            //---------------------------------------

            createObjectCookie = function() {
                if(vList.isConsoleApp) console.log('Run function createObjectCookie !');

                var docCookies = {
                    getItem: function (sKey) {
                        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
                    },
                    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                        var sExpires = "";
                        if (vEnd) {
                            switch (vEnd.constructor) {
                                case Number:
                                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                                    break;
                                case String:
                                    sExpires = "; expires=" + vEnd;
                                    break;
                                case Date:
                                    sExpires = "; expires=" + vEnd.toUTCString();
                                    break;
                            }
                        }
                        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                        return true;
                    },
                    removeItem: function (sKey, sPath, sDomain) {
                        if (!sKey || !this.hasItem(sKey)) { return false; }
                        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
                        return true;
                    },
                    hasItem: function (sKey) {
                        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
                    }
                };

                vList.docCookies = docCookies;

            };

            //---------------------------------------



            /* Click any where*/
            //--------------------------------------

            anyWhereClick = function() {
                if(vList.isConsoleApp) console.log('Run function anyWhereClick !');

                var eventTouch = 'click';

                if(Modernizr.touch) {
                    eventTouch = 'touchend';
                }

                vList.$doc.on(eventTouch, function(e){
                    if(closeFadeInSlide && typeof closeFadeInSlide === 'function') {
                        closeFadeInSlide(e);
                    }
                });
            };

            //--------------------------------------



            /* Touch event callback */
            //--------------------------------------

            touchEvent = function(el, nameSpace, tendencia, numberMore, callback) {
                if(Modernizr.touch) {
                    var touchStartX,
                        touchStartY,
                        touchMoveX,
                        touchMoveY,
                        isPreventDefault,
                        arrayTouch = [touchStartX, touchStartY, touchMoveX, touchMoveY];

                    el
                        .on('touchstart.' + nameSpace, function(m){
                            isPreventDefault = false;

                            touchStartX = m.originalEvent.touches[0].pageX;

                            touchStartY = m.originalEvent.touches[0].pageY;

                            el.on('touchmove.' + nameSpace, function(n){

                                touchMoveX = n.originalEvent.touches[0].pageX;

                                touchMoveY = n.originalEvent.touches[0].pageY;

                                if(tendencia === 'x') {
                                    if(Math.abs(touchMoveY - touchStartY) > (Math.abs(touchMoveX - touchStartX) + numberMore)){
                                        isPreventDefault = true;
                                    }
                                } else if(tendencia === 'y') {
                                    if(Math.abs(touchMoveX - touchStartX) > (Math.abs(touchMoveY - touchStartY) + numberMore)){
                                        isPreventDefault = true;
                                    }
                                } else if(tendencia === 'one') {
                                    if(Math.abs(touchMoveX - touchStartX) > Math.abs(touchMoveY - touchStartY) || Math.abs(touchMoveY - touchStartY) > Math.abs(touchMoveX - touchStartX)){
                                        isPreventDefault = true;
                                    }
                                }
                            });
                        }).on('touchend.' + nameSpace, function(e){
                            if(!isPreventDefault){
                                callback(e, arrayTouch);
                            }

                            el.off('touchmove.' + nameSpace);
                        });
                }
            };

            //--------------------------------------



            /* Touch event off*/
            //--------------------------------------

            touchEventOff = function(el, nameSpace) {
                el
                    .off('touchstart.' + nameSpace)
                    .off('touchmove.' + nameSpace)
                    .off('touchend.' + nameSpace);
            };

            //--------------------------------------



            /* window scroll event */
            //--------------------------------------

            windowScroll = function() {
                vList.$win.scroll(function() {
                    if(addScrollGlobalHeader && typeof addScrollGlobalHeader === 'function') {
                        addScrollGlobalHeader();
                    }
                });
            };

            //--------------------------------------



            //Begin JS
            //--------------------------------------

            begin = function(){
                if(vList.isConsoleApp) console.log('Run function begin !');

                if(testFunctionExist(testCookieEnabled)) testCookieEnabled();
                if(testFunctionExist(handleResizeWindow)) handleResizeWindow();
                if(testFunctionExist(windowScroll)) windowScroll();
                if(testFunctionExist(anyWhereClick)) anyWhereClick();
                if(testFunctionExist(playCtaCheckEmpty)) playCtaCheckEmpty();
                if(testFunctionExist(createObjectCookie) && vList.isCookieEnabled) {
                    createObjectCookie();
                }
                if(testFunctionExist(saveforlater)) saveforlater();
                if(testFunctionExist(groupRadio)) groupRadio();
                if(testFunctionExist(fixTitle)) fixTitle();

                setTimeout(function () {
                    if(testFunctionExist(fixMinHeight)) fixMinHeight();
                }, 1);

                setTimeout(function () {
                    if(testFunctionExist(fixMaxHeight)) fixMaxHeight();
                }, 100);
            };

            initBegin = function(){
                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        onlyHandlebarsPage();

                        begin();
                    });
                } else if(!vList.$dycComponent.length) {
                    begin();
                }
            };

            //--------------------------------------



            return {
                testFunctionExist: testFunctionExist,
                startExecution: startExecution,
                endExecution: endExecution,
                addScrollGlobalHeader: addScrollGlobalHeader,
                closeFadeInSlide: closeFadeInSlide,
                playCtaCheckEmpty: playCtaCheckEmpty,
                checkACheckBox: checkACheckBox,
                unCheckACheckBox: unCheckACheckBox,
                ajaxGetData: ajaxGetData,
                groupRadio: groupRadio,
                allPopupHide: allPopupHide,
                getURLParameter: getURLParameter,
                ajaxPopup: ajaxPopup,
                setPosition: setPosition,
                popupSingle: popupSingle,
                fixMaxHeight: fixMaxHeight,
                onlyHandlebarsPage: onlyHandlebarsPage,
                fixTitle: fixTitle,
                fixMinHeight: fixMinHeight,
                refreshPlugin: refreshPlugin,
                refreshAllPlugin: refreshAllPlugin,
                handleResizeWindow: handleResizeWindow,
                saveforlater: saveforlater,
                createObjectCookie: createObjectCookie,
                anyWhereClick: anyWhereClick,
                touchEvent: touchEvent,
                touchEventOff: touchEventOff,
                windowScroll: windowScroll,
                begin: begin,
                initBegin: initBegin
            };
        },
        pluginList: function(vList, fList) {
            var initPlugin,
                pluginSliderChoice,
                pluginAccordion,
                pluginSliderDrag,
                pluginBackPage,
                pluginFadeinSlide,
                pluginUpdatePackage,
                pluginPopup,
                pluginAutocomplete,
                pluginToggleResponsive,
                pluginWrapActive,
                pluginMaccordion,
                pluginButtonToggle,
                pluginUpdateAjax,
                pluginCookieTarget,
                pluginBrightcoveAjax;



            /*  1-Slider choice :
             - package-detail.html
             */
            //---------------------------------------

            pluginSliderChoice = function() {

                var pluginName = 'sliderchoice';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.isAnimate = true;
                    this.isBodyVisible = true;
                    this.triggerThumb = 'sliderchoice-thumb';
                    this.triggerClose = '[data-sliderchoice-dismiss]';
                    this.triggerNumber = '[data-sliderchoice-number]';
                    this.triggerDataThumb = '[data-sliderchoice-thumb]';
                    this.packageVariable = '[data-update-package-title]';
                    this.$head = this.$element.find('[data-sliderchoice-head]');
                    this.$body = this.$element.find('[data-sliderchoice-body]');
                    this.$thumb = this.$head.find(this.triggerDataThumb);
                    this.$item = this.$body.find('[data-sliderchoice-item]');
                    this.$activeItem = null;
                    this.$activeThumb = null;
                    this.options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        var that = this,
                            isPreventDefault,
                            touchStartX,
                            touchStartY,
                            touchMoveX,
                            touchMoveY,
                            $sliderDragChild,
                            canSlideTablet,
                            $accordionChild,
                            $fadeinChild,
                            $slideChild;

                        if(that.$body.is(':visible')) {
                            that.isBodyVisible = true;
                        } else if(!that.$body.is(':visible')){
                            that.isBodyVisible = false;
                        }

                        that.refresh();

                        if(fList.touchEvent && typeof fList.touchEvent === 'function') {
                            fList.touchEvent(that.$thumb, pluginName, 'one', 0, function(e){
                                if($(e.target).closest(that.triggerDataThumb).is('a')) e.preventDefault();

                                that.begin(e);
                            });
                        }

                        if(!Modernizr.touch) {
                            that.$thumb.on('click.' + pluginName, function(e){
                                if($(e.target).closest(that.triggerDataThumb).is('a')) e.preventDefault();

                                that.begin(e);
                            });
                        }

                        vList.$doc.on('click.' + pluginName + '.dismiss', that.triggerClose, function(e){
                            if($(e.target).is('a')) e.preventDefault();

                            that.up();
                        });

                        that.$body
                            .on('touchstart', function(m){
                                canSlideTablet = true;

                                $sliderDragChild = $(m.target).closest('[data-sliderdrag]');
                                $accordionChild = $(m.target).closest('[data-accordion]');
                                $fadeinChild = $(m.target).closest('[data-fs-f]');
                                $slideChild = $(m.target).closest('[data-fs-s]');

                                if($sliderDragChild.length && $sliderDragChild.data('sliderdrag').canSlide) {
                                    canSlideTablet = false;
                                }

                                isPreventDefault = false;

                                touchStartX = m.originalEvent.touches[0].pageX;
                                touchStartY = m.originalEvent.touches[0].pageY;

                                that.$body.on('touchmove', function(n){

                                    touchMoveX = n.originalEvent.touches[0].pageX;
                                    touchMoveY = n.originalEvent.touches[0].pageY;

                                    // 70 : to detect only scroll X > scroll Y + 70  
                                    if(Math.abs(touchMoveX - touchStartX) > (Math.abs(touchMoveY - touchStartY) + 70)){
                                        n.preventDefault();
                                        isPreventDefault = true;
                                    }
                                });
                            }).on('touchend', function(){
                                if(canSlideTablet && isPreventDefault && that.isBodyVisible && that.isAnimate){
                                    that.isAnimate = false;

                                    //10 is distinguishing touch and move
                                    if(Math.abs(touchMoveX - touchStartX) > 10) {
                                        if($accordionChild.length)
                                            $accordionChild.data('ignore', true);
                                        if($fadeinChild.length)
                                            $fadeinChild.data('ignore', true);
                                        if($slideChild.length)
                                            $slideChild.data('ignore', true);
                                    }

                                    if(touchStartX > touchMoveX){
                                        that.dragNext();
                                    }else{
                                        that.dragPrev();
                                    }
                                }

                                that.$body.off('touchmove');
                            });
                    },
                    dragNext: function(){
                        var that = this,
                            nextPosition;

                        if(that.$activeItem.index() === that.$item.length - 1) {
                            nextPosition = 0;
                        } else {
                            nextPosition = that.$activeItem.index() + 1;
                        }

                        that.slideNext(that.$thumb.filter(':visible').eq(nextPosition));
                    },
                    dragPrev: function(){
                        var that = this,
                            prevPosition;

                        if(that.$activeItem.index() === 0) {
                            prevPosition = that.$item.length - 1;
                        } else {
                            prevPosition = that.$activeItem.index() - 1;
                        }

                        that.slidePrev(that.$thumb.filter(':visible').eq(prevPosition));
                    },
                    hidden: function(el){
                        el.css({
                            position: '',
                            left: -9000
                        });
                    },
                    visible: function(el){
                        el.css({
                            position: 'relative',
                            left: 0
                        });
                    },
                    behaviorOtherPlugin: function() {
                        if(fList.fixMaxHeight && typeof fList.fixMaxHeight === 'function') {
                            fList.fixMaxHeight();
                        }
                    },
                    bindActiveElement: function() {
                        this.$activeItem = this.$item.filter('.' + this.options.activeClass);
                        this.$activeThumb = this.$thumb.filter('.' + this.options.activeClass);

                        if(this.$activeItem.length) {
                            this.visible(this.$activeItem);
                            this.$body.height('');
                        }
                    },
                    refresh: function() {
                        var $notActiveItem;

                        this.bindActiveElement();

                        $notActiveItem = this.$item.filter(':not(".' + this.options.activeClass + '")');

                        this.hidden($notActiveItem);

                        if(this.isBodyVisible) {
                            this.$body
                                .height('')
                                .show();
                        } else if(!this.isBodyVisible) {
                            this.$body
                                .height(0)
                                .hide();
                        }
                    },
                    begin: function(event) {
                        var $thatTarget = $(event.target).closest(this.triggerDataThumb);

                        if(!this.isAnimate) return false;

                        if(!this.isBodyVisible) {
                            this.isAnimate = false;

                            this.down($thatTarget);

                            if(typeof dataLayer != "undefined") {
                                //pull off the title for analytics
                                var $title = $thatTarget.siblings(this.packageVariable);
                                if($title != null && $title[0]) {
                                    dataLayer.push({event:{eventInfo:{eventName:'os_pick_detail',type:'interaction',effect:$title[0].attributes['data-update-package-title'].value},category:{primaryCategory:'get_os'}}});
                                }
                            }

                        } else if(this.isBodyVisible && $thatTarget.closest(this.triggerNumber).index() === this.$activeThumb.closest(this.triggerNumber).index()) {
                            this.isAnimate = false;

                            this.up();
                        } else if(this.isBodyVisible && $thatTarget.closest(this.triggerNumber).index() > this.$activeThumb.closest(this.triggerNumber).index()) {
                            this.isAnimate = false;

                            this.slideNext($thatTarget);
                        } else if(this.isBodyVisible && $thatTarget.closest(this.triggerNumber).index() < this.$activeThumb.closest(this.triggerNumber).index()) {
                            this.isAnimate = false;

                            this.slidePrev($thatTarget);
                        }
                    },
                    up: function() {
                        var newExecution;

                        if(fList.testFunctionExist(fList.startExecution)) newExecution = fList.startExecution();

                        this.$body.slideUp(this.options.durationAnimateSlide, $.proxy(function(){
                            this.hidden(this.$item);

                            this.$item.add(this.$thumb)
                                .removeClass(this.options.activeClass);

                            this.$thumb.closest(this.triggerNumber).removeClass(this.options.activeClass);

                            this.isBodyVisible = false;

                            this.isAnimate = true;

                            if(fList.testFunctionExist(fList.endExecution) && vList.isConsoleApp) fList.endExecution(newExecution, pluginName + ' > up');
                        }, this));
                    },
                    down: function(target) {
                        var newExecution,
                            $itemTarget = this.$item.eq(target.closest(this.triggerNumber).index()),
                            $allContent = this.$item;

                        if(fList.testFunctionExist(fList.startExecution)) newExecution = fList.startExecution();

                        this.$body
                            .height(0)
                            .show();

                        this.behaviorOtherPlugin();

                        this.isBodyVisible = true;

                        this.hidden($allContent);

                        this.visible($itemTarget);

                        this.$body.animate({
                            'height': $itemTarget.height()
                        }, this.options.durationAnimateSlide, $.proxy(function(){
                            target.add($itemTarget).addClass(this.options.activeClass);

                            target.closest(this.triggerNumber).addClass(this.options.activeClass);

                            if(fList.fixTitle && typeof fList.fixTitle === 'function') {
                                fList.fixTitle();
                            }

                            this.bindActiveElement();

                            this.isAnimate = true;

                            if(fList.testFunctionExist(fList.endExecution) && vList.isConsoleApp) fList.endExecution(newExecution, pluginName + ' > down');
                        }, this));
                    },
                    slideNext: function(target) {
                        var newExecution,
                            $targetNumber = target.closest(this.triggerNumber),
                            $itemTarget = this.$item.eq(target.closest(this.triggerNumber).index());

                        if(fList.testFunctionExist(fList.startExecution)) newExecution = fList.startExecution();

                        $itemTarget.css({
                            left: this.$body.width()
                        });

                        this.$body.height($itemTarget.height());

                        this.$activeItem.animate({
                            left: -this.$body.width()
                        },this.options.durationAnimateHorizontal);

                        $itemTarget.animate({
                            left: 0
                        },this.options.durationAnimateHorizontal, $.proxy(function(){
                            this.hidden(this.$activeItem);

                            this.$thumb.add(this.$item).removeClass(this.options.activeClass);

                            this.$thumb.closest(this.triggerNumber).removeClass(this.options.activeClass);

                            target.add($itemTarget).addClass(this.options.activeClass);

                            $targetNumber.addClass(this.options.activeClass);

                            this.bindActiveElement();

                            this.isAnimate = true;

                            if(fList.testFunctionExist(fList.endExecution) && vList.isConsoleApp) fList.endExecution(newExecution, pluginName + ' > slideNext');
                        },this));
                    },
                    slidePrev: function(target) {
                        var newExecution,
                            $targetNumber = target.closest(this.triggerNumber),
                            $itemTarget = this.$item.eq(target.closest(this.triggerNumber).index());

                        if(fList.testFunctionExist(fList.startExecution)) newExecution = fList.startExecution();

                        $itemTarget.css({
                            left: -this.$body.width()
                        });

                        this.$body.height($itemTarget.height());

                        this.$activeItem.animate({
                            left: this.$body.width()
                        },this.options.animate);

                        $itemTarget.animate({
                            left: 0
                        },this.options.durationAnimateHorizontal, $.proxy(function(){
                            this.hidden(this.$activeItem);

                            this.$thumb.add(this.$item).removeClass(this.options.activeClass);

                            this.$thumb.closest(this.triggerNumber).removeClass(this.options.activeClass);

                            target.add($itemTarget).addClass(this.options.activeClass);

                            $targetNumber.addClass(this.options.activeClass);

                            this.bindActiveElement();

                            this.isAnimate = true;

                            if(fList.testFunctionExist(fList.endExecution) && vList.isConsoleApp) fList.endExecution(newExecution, pluginName + ' > slidePrev');
                        },this));
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    activeClass: 'active',
                    durationAnimateHorizontal: 400,  // Default 400  // Option : 400/linear/swing/slow/fast
                    durationAnimateSlide: 400,  // Default 400  // Option : 400/linear/swing/slow/fast
                    beginItem: 0
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  2-Accordion
             - package-detail.html
             - build-your-own.html
             - compos-page.html
             - faq-template.html
             - got-what-on-child.html
             - save-for-later.html
             */
            //---------------------------------------

            pluginAccordion = function () {

                var pluginName = 'accordion';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                // ACCORDION CLASS DEFINITION
                // ======================

                var Accordion = function (element, options) {
                    this.$element = $(element);
                    this.options = options;
                    this.triggerNumber = '[data-accordion-number]';
                    this.$triggerClose = $('[data-accordion-dismiss="' + this.$element.data('accordion-target') + '"]');
                    this.isShow = false;
                    this.isAnimate = true;
                };

                Accordion.DEFAULTS = {
                    toggle: true,
                    keyboard: false,
                    animate: 400   // Default 400  // Option : 400/linear/swing/slow/fast
                };

                Accordion.prototype.toggle = function (el) {
                    return this[this.$element.is(':visible') && this.options.toggle ? 'hide' : 'show'](el);
                };

                Accordion.prototype.show = function (el) {
                    var that = this,
                        $thatEl = $(el);

                    if(!this.isAnimate) return false;

                    this.isAnimate = false;

                    this.$element.slideDown(this.options.animate, function(){
                        that.isAnimate = true;

                        that.isShow = true;

                        that.bindEvent(el);

                        $thatEl.addClass('active');

                        $thatEl.closest(that.triggerNumber).addClass('active');
                    });
                };

                Accordion.prototype.hide = function (el) {
                    var that = this,
                        $thatEl = $(el);

                    if(!this.isAnimate) return false;

                    this.isAnimate = false;

                    this.$element.slideUp(this.options.animate, function(){
                        that.isAnimate = true;

                        that.isShow = false;

                        that.unbindEvent();

                        $thatEl.removeClass('active');

                        $thatEl.closest(that.triggerNumber).removeClass('active');
                    });
                };

                Accordion.prototype.bindEvent = function (el) {
                    this.$triggerClose.on('click.dismiss.sm.accordion', $.proxy(function(){
                        this.hide(el);
                    },this));

                    if(this.options.keyboard){
                        vList.$doc.on('keyup.dismiss.sm.accordion', $.proxy(function (e) {
                            if(e.which == 27) this.hide();
                        }, this));
                    }
                };

                Accordion.prototype.unbindEvent = function () {
                    this.$triggerClose.off('click.dismiss.sm.accordion');

                    if(this.options.keyboard){
                        $(document).off('keyup.dismiss.sm.accordion');
                    }
                };

                // ACCORDION DATA-API
                // ==============

                var init = function () {
                    var targetAccordion = $('[data-accordion]');

                    if(fList.touchEvent && typeof fList.touchEvent === 'function') {
                        fList.touchEvent(targetAccordion, pluginName, 'one', 0, function(e){
                            var $this = $(e.target).closest('[data-accordion]'),
                                $target = $('[data-accordion-target="' + $this.data('accordion') + '"]'),
                                option,
                                parentSliderDrag = $this.closest('[data-sliderdrag]').data('sliderdrag');

                            if($this.data('ignore') || (parentSliderDrag && !parentSliderDrag.canAccordionChild)) {
                                $this.data('ignore', false);

                                return false;
                            }

                            option = $target.data('accordion') ? 'toggle' : $.extend({}, Accordion.DEFAULTS);

                            e.preventDefault();

                            if($target.length) $target.collap(option, $this);
                        });
                    }

                    if(!Modernizr.touch) {
                        vList.$doc.on('click.bs.accordion.data-api', '[data-accordion]', function (e) {
                            var $this = $(this),
                                $target = $('[data-accordion-target="' + $this.data('accordion') + '"]'),
                                option;

                            option = $target.data('accordion') ? 'toggle' : $.extend({}, Accordion.DEFAULTS);

                            e.preventDefault();

                            if($target.length) $target.collap(option, this);
                        });
                    }
                };

                // ACCORDION PLUGIN DEFINITION
                // =======================

                var old = $.fn.collap;

                $.fn.collap = function (option ,el) {
                    return this.each(function(){
                        var $this = $(this),
                            data = $this.data('accordion');

                        if (!data) $this.data('accordion', (data = new Accordion(this, option)));

                        if (data) data.toggle(el);
                    });
                };

                $.fn.collap.Constructor = Accordion;


                // ACCORDION NO CONFLICT
                // =================

                $.fn.collap.noConflict = function () {
                    $.fn.collap = old;
                    return this;
                };

                return init();
            };

            //---------------------------------------



            /*  3-Slider drag (Only Mobile + Tablet) :
             - package-detail.html
             */
            //------pluginSliderChoice---------------------------------

            pluginSliderDrag = function() {

                var pluginName = 'sliderdrag';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.animate = true;
                    this.canSlide = true;
                    this.canAccordionChild = true;
                    this.triggerDataChild = '[data-sliderdrag-child]';
                    this.$child = this.$element.find(this.triggerDataChild);
                    var arrayTemp = [];

                    for (var i = 0; i < this.$child.length; i++) {
                        arrayTemp.push(this.$child.eq(i));
                    }

                    this.arrayChildDefault = arrayTemp;
                    this.$content = this.$element.find('[data-sliderdrag-content]');
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        this.refresh();
                    },
                    bindEventSlide: function() {
                        var that = this;

                        if(fList.testFunctionExist(fList.touchEvent)) {
                            fList.touchEvent(that.$element, pluginName, 'x', 70, function(e, arrayTouch){
                                if(arrayTouch.touchStartX > arrayTouch.touchMoveX){
                                    that.next(that);
                                }else{
                                    that.prev(that);
                                }

                                e.preventDefault();
                            });
                        }
                    },
                    unbindEventSlide: function() {
                        if(fList.testFunctionExist(fList.touchEventOff)) {
                            fList.touchEventOff(this.$element, pluginName);
                        }
                    },
                    resetPosition: function() {
                        this.$content.empty();

                        for (var i = this.arrayChildDefault.length - 1; i >= 0; i--) {
                            this.$content.prepend(this.arrayChildDefault[i]);
                        }

                        if(pluginAccordion && typeof pluginAccordion === 'function') {
                            pluginAccordion();
                        }
                    },
                    cutPrev: function(that) {
                        for (var i = that.$child.length - 1; i >= that.$child.length - that.$options.slideNumber; i--) {
                            that.$child.eq(i).clone().prependTo(that.$content);
                        }

                        for (var j = that.$child.length - 1; j >= that.$child.length - that.$options.slideNumber; j--) {
                            that.$child.eq(j).remove();
                        }

                        that.$child = that.$element.find(this.triggerDataChild);

                        that.$content.css({
                            'marginLeft': -that.$options.slideNumber * that.$child.width()
                        });
                    },
                    prev: function(that) {
                        if(!that.animate) return false;

                        that.animate = false;

                        that.cutPrev(that);

                        that.$content.animate({
                            marginLeft: 0
                        },that.$options.durationAnimate, function(){
                            that.animate = true;
                        });
                    },
                    cutNext: function(that) {
                        for (var i = 0; i < that.$options.slideNumber; i++) {
                            that.$child.eq(i).clone().appendTo(that.$content);
                        }

                        for (var j = 0; j < that.$options.slideNumber; j++) {
                            that.$child.eq(j).remove();
                        }

                        that.$child = that.$element.find(this.triggerDataChild);

                        that.$content.css({
                            'marginLeft': 0
                        });
                    },
                    next: function(that) {
                        if(!that.animate) return false;

                        that.animate = false;

                        that.$content.animate({
                            marginLeft: -that.$options.slideNumber * that.$child.width()
                        },that.$options.durationAnimate, function(){
                            that.cutNext(that);

                            that.animate = true;
                        });
                    },
                    refresh: function() {
                        this.resetPosition();

                        var widthChild;

                        this.canSlide = true;

                        this.canAccordionChild = true;

                        if(vList.$win.width() >= appSetting.tabletScreen) {
                            widthChild = '25%';

                            this.canSlide = false;

                            this.canAccordionChild = true;
                        } else if(vList.$win.width() < appSetting.tabletScreen && vList.$win.width() >= appSetting.mobileScreen){
                            widthChild = this.$element.width() / 4;

                            if(this.$child.length <= 4) {
                                this.canSlide = false;
                            } else {
                                this.canSlide = true;
                            }

                            this.canAccordionChild = false;
                        } else if(vList.$win.width() < appSetting.mobileScreen){
                            widthChild = this.$element.width() / 2;

                            if(this.$child.length <= 2) {
                                this.canSlide = false;
                            } else {
                                this.canSlide = true;
                            }

                            this.canAccordionChild = false;
                        }

                        this.$child = this.$element.find(this.triggerDataChild);

                        this.$child.each(function(){
                            $(this).css({
                                'width': widthChild
                            });
                        });

                        if(this.canSlide) {
                            this.bindEventSlide();
                        } else {
                            this.unbindEventSlide();
                        }
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    slideNumber: 2,
                    durationAnimate: 400  // Default 400  // Option : 400/linear/swing/slow/fast
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //--------------End SliderDrag-----------



            /*  4-Back to previous page :
             - all-support-components.html
             */
            //---------------------------------------

            pluginBackPage = function () {

                var backpageTrigger = '[data-back-page]',
                    pluginName = 'back-page';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function BackPage() {}

                BackPage.prototype.goBack = function (e) {
                    var $this = $(this);

                    if ($this.is('a')) {
                        e.preventDefault();
                    }

                    window.history.go(-1);
                };

                var backPageObject = new BackPage();
                vList.$doc.on('click.backPage, touchend.backPage', backpageTrigger, backPageObject.goBack);

            };

            //------------End Back to previous page--



            /*  5-Fadein slide :
             - package-detail.html
             - preferences-page.html
             */
            //---------------------------------------

            pluginFadeinSlide = function() {

                var pluginName = 'fadeinslide';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.isAnimate = true;
                    this.dataIgnoreFirst = 'data-fadeinslide-ignore-first';

                    if(this.$element.attr(this.dataIgnoreFirst) === 'true') {
                        this.ignoreFirst = true;
                    } else {
                        this.ignoreFirst = false;
                    }

                    this.triggerAccordionTarget = '[data-accordion-target]';
                    this.wrapActiveTrigger = '[data-wrap-active]';
                    this.triggerFade = '[data-fs-f]';
                    this.triggerSlide = '[data-fs-s]';
                    this.$buttonFade = this.$element.find('[data-fs-f]');
                    this.$buttonSlide = this.$element.find('[data-fs-s]');
                    this.$content = this.$element.find('[data-fs-c]');
                    this.$activeItem = null;
                    this.$activeButtonFade = null;
                    this.$activeButtonSlide = null;
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        this.refresh();

                        vList.$doc.on('click.' + pluginName + ', touchend.' + pluginName, this.triggerFade, $.proxy(function(e){
                            var $thatTarget = $(e.target).closest('[data-fs-f]');

                            if($thatTarget.is('a')) e.preventDefault();

                            if($thatTarget.data('ignore')) {
                                $thatTarget.data('ignore', false);

                                return false;
                            }

                            if(!$thatTarget.hasClass(this.$options.activeClass)) {
                                this.fade(e);
                            }
                        }, this));

                        if(Modernizr.touch) {
                            var touchStartX,
                                touchStartY,
                                touchMoveX,
                                touchMoveY,
                                isPreventDefault;

                            vList.$doc.on('touchstart', function(m){
                                isPreventDefault = false;
                                touchStartX = m.originalEvent.touches[0].pageX;
                                touchStartY = m.originalEvent.touches[0].pageY;
                                vList.$doc.on('touchmove', function(n){

                                    touchMoveX = n.originalEvent.touches[0].pageX;
                                    touchMoveY = n.originalEvent.touches[0].pageY;
                                    if(Math.abs(touchMoveX - touchStartX) > Math.abs(touchMoveY - touchStartY) || Math.abs(touchMoveY - touchStartY) > Math.abs(touchMoveX - touchStartX)){
                                        isPreventDefault = true;
                                    }
                                });
                            }).on('touchend', $.proxy(function(e){
                                if(!isPreventDefault){
                                    var $thatTarget = $(e.target).closest('[data-fs-s]');

                                    if($thatTarget.length) {
                                        if($thatTarget.is('a')) e.preventDefault();

                                        if($thatTarget.data('ignore')) {
                                            $thatTarget.data('ignore', false);

                                            return false;
                                        }

                                        this.slide(e);
                                    }
                                }

                                vList.$doc.off('touchmove');
                            }, this));
                        }
                    },
                    beforeAnimate: function() {
                        if(fList.refreshPlugin && typeof fList.refreshPlugin === 'function') {
                            fList.refreshPlugin('maccordion');
                        }

                        this.$content.find(this.wrapActiveTrigger).removeClass('active');
                        //class active of wrap-active plugin
                    },
                    behaviorOtherPlugin: function() {
                        if(fList.refreshPlugin && typeof fList.refreshPlugin === 'function') {
                            fList.refreshPlugin('sliderdrag');
                        }
                    },
                    refresh: function() {
                        var $firstButtonSlide = this.$buttonSlide.first(),
                            $firstButtonFade = this.$buttonFade.first(),
                            $firstContent = this.$content.first();

                        this.$content.find(this.triggerAccordionTarget).removeAttr('style');

                        this.removeActive();

                        this.$activeButtonSlide = $firstButtonSlide;
                        this.$activeButtonFade = $firstButtonFade;
                        this.$activeItem = $firstContent;

                        if(!this.ignoreFirst) {
                            $firstButtonFade
                                .add($firstButtonSlide)
                                .add($firstContent)
                                .addClass(this.$options.activeClass);
                        }
                    },
                    toggle: function(el) {
                        var $thatTarget = this.detectContent(el);

                        if(!el.hasClass(this.$options.activeClass)) {
                            $thatTarget.show();

                            this.behaviorOtherPlugin();

                            $thatTarget.hide();

                            $thatTarget.slideDown(this.$options.durationAnimate, $.proxy(function(){
                                this.addActiveElement(el);

                                $thatTarget.css('display','');

                                this.bindActiveElement();

                                this.isAnimate = true;
                            }, this));
                        } else if(el.hasClass(this.$options.activeClass)){
                            $thatTarget.slideUp(this.$options.durationAnimate, $.proxy(function(){
                                this.removeActiveElement(el);

                                $thatTarget.css('display','');

                                this.bindActiveElement();

                                this.isAnimate = true;
                            }, this));
                        }
                    },
                    offFade: function() {
                        this.$content.fadeOut(this.$options.durationAnimate - 1);
                    },
                    offSlide: function() {
                        this.$content.slideUp(this.$options.durationAnimate - 1);
                    },
                    removeActive: function() {
                        this.$buttonFade
                            .add(this.$buttonSlide)
                            .add(this.$content)
                            .removeClass(this.$options.activeClass);
                    },
                    detectContent: function(target) {
                        var $thatContent,
                            targetFData = target.data('fs-f'),
                            targetSData = target.data('fs-s');

                        if(targetFData !== undefined) {
                            $thatContent = $('[data-fs-c="' + targetFData + '"]');
                        } else if(targetSData !== undefined) {
                            $thatContent = $('[data-fs-c="' + targetSData + '"]');
                        }

                        return $thatContent;
                    },
                    removeActiveElement: function(target) {
                        var $thatContent,
                            $tempData,
                            targetFData = target.data('fs-f'),
                            targetSData = target.data('fs-s');

                        if(targetFData !== undefined) {
                            $thatContent = $('[data-fs-c="' + targetFData + '"]');
                            $tempData = $('[data-fs-s="' + targetFData + '"]');
                        } else if(targetSData !== undefined) {
                            $thatContent = $('[data-fs-c="' + targetSData + '"]');
                            $tempData = $('[data-fs-f="' + targetSData + '"]');
                        }

                        if($thatContent.length) {
                            target
                                .add($tempData)
                                .add($thatContent)
                                .removeClass(this.$options.activeClass);
                        }
                    },
                    addActiveElement: function(target) {
                        var $thatContent,
                            $tempData,
                            targetFData = target.data('fs-f'),
                            targetSData = target.data('fs-s');

                        if(targetFData !== undefined) {
                            $thatContent = $('[data-fs-c="' + targetFData + '"]');
                            $tempData = $('[data-fs-s="' + targetFData + '"]');
                        } else if(targetSData !== undefined) {
                            $thatContent = $('[data-fs-c="' + targetSData + '"]');
                            $tempData = $('[data-fs-f="' + targetSData + '"]');
                        }

                        if($thatContent.length) {
                            target
                                .add($tempData)
                                .add($thatContent)
                                .addClass(this.$options.activeClass);
                        }
                    },
                    bindActiveElement: function() {
                        this.$activeItem = this.$content.filter('.' + this.$options.activeClass);
                        this.$activeButtonFade = this.$buttonFade.filter('.' + this.$options.activeClass);
                        this.$activeButtonSlide = this.$buttonSlide.filter('.' + this.$options.activeClass);
                    },
                    fade: function(event) {
                        var $thatElementClick,
                            $thatTarget;

                        if(!this.isAnimate) return false;

                        this.isAnimate = false;

                        $thatElementClick = $(event.target).closest('[data-fs-f]');

                        $thatTarget = this.detectContent($thatElementClick);

                        this.offFade();

                        this.beforeAnimate();

                        $thatTarget.fadeIn(this.$options.durationAnimate, $.proxy(function(){
                            this.removeActive();

                            this.addActiveElement($thatElementClick);

                            this.bindActiveElement();

                            this.isAnimate = true;
                        }, this));
                    },
                    slide: function(event) {
                        var $thatElementClick;

                        if(!this.isAnimate) return false;

                        this.isAnimate = false;

                        $thatElementClick = $(event.target).closest('[data-fs-s]');

                        this.beforeAnimate();

                        this.toggle($thatElementClick);
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    activeClass: 'active',
                    durationAnimate: 400 // Default 400  // Option : 400/linear/swing/slow/fast
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //------------End fadeinelement----------



            /*  6-Update - package :
             - build-your-own.html
             */
            //---------------------------------------

            pluginUpdatePackage = function() {

                //clear cookie
                FOX.storage.removeData("customercart",{path:"/"});

                var pluginName = 'update-package';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.dataElement = 'data-' + pluginName;
                    this.triggerToggleActive = '[data-toggle-active]';
                    this.triggerNumber = '[data-toggle-number]';
                    this.triggerId = 'data-update-package-id';
                    this.triggerPrice = 'data-update-package-price';
                    this.triggerTitle = 'data-update-package-title';
                    this.triggerLink = 'data-update-package-link';
                    this.triggerUpdateAjaxVariable = 'data-update-package-variable';



                    this.dataPackage = [];

                    //jquery key to store final selection
                    this.dataName = 'package';



                    this.$childToggleActive = this.$element.find(this.triggerToggleActive);
                    this.$target = $('[data-update-package-target="' + this.$element.attr(this.dataElement) + '"]');
                    this.$allTitle = $('[data-update-package-all-title="' + this.$element.attr(this.dataElement) + '"]');
                    this.$allPrice = $('[data-update-package-all-price="' + this.$element.attr(this.dataElement) + '"]');

                    this.$priceChild = this.$allPrice.find('[data-price]');
                    this.$priceChildAfter = this.$allPrice.find('[data-price-after]');
                    this.$offerItem = this.$allPrice.find('[data-offer-item]');
                    this.$offerLength = this.$allPrice.find('[data-offer-length]');
                    this.$offerExpiry = this.$allPrice.find('[data-offer-expiry]');
                    this.$offerExpiry = this.$allPrice.find('[data-offer-expiry]');
                    this.$allDefaultValues = $('[data-update-package-default-value="' + this.$element.attr(this.dataElement) + '"]');

                    //retrieve&save contract,mincost
                    this.$priceUpfront = this.$allPrice.find('[data-upfront]');
                    this.$priceMincost = this.$allPrice.find('[data-mincost]');
                    this.$titleControact = this.$allPrice.find('[data-contract]');
                    this.$nrcOffer = this.$allPrice.find('[data-nrc-offer]');

                    this.defaultTierId = this.$allDefaultValues.data("default-tier-id");
                    this.defaultContractId = this.$allDefaultValues.data("default-contract-id");

                    //retrieve targetlink
                    this.btnNavTargetLink = this.$target.data('btn-nav-link');

                    //s&c button
                    this.$btnNav = $('.sc-button-div');

                    /*
                     this.constContractChild = parseInt(this.$priceContract.html(), 10);
                     this.constMincostChild = parseInt(this.$priceMincost.html(), 10);
                     var tempPriceChild = this.$priceChild.text().replace('<span>$</span>', '').replace('$', '');
                     this.constPriceChild = parseInt(tempPriceChild, 10);
                     */
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        // click/touch event on tier menu(add/remove)
                        this.$childToggleActive.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){

                            e.preventDefault();

                            if(navigator.userAgent.indexOf('Android')>0 && e.type==='click'){
                                return;
                            }

                            var arrayFinal,
                                thatEl = $(e.target).closest(this.triggerToggleActive);

                            if(!thatEl.length) return false;

                            arrayFinal = this.checkExistArray();

                            var oldScrollTop = $(window).scrollTop();
                            var that = this;

                            // Wait for 200ms milliseconds, then check the scroll position, had scrollposition changed
                            window.setTimeout( function() {
                                var newScrollTop = $(window).scrollTop();

                                //if no scroll is found
                                if (Math.abs(oldScrollTop-newScrollTop)<3){
                                     //Add/Remove tier
                                    that.changeStatus(thatEl, arrayFinal); 
                                }
                            }, 200);

                            return false;
                        }, this));

                        // click/touch event on submit final tier selection
                        this.$target.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            e.preventDefault();

                            this.saveSelection();

                            return false;
                        }, this));

                        var self = this;
                        this.$btnNav.click(function(){
                            self.saveSelection();
                            Foxtel.navigator(self.btnNavTargetLink);
                        });

                        this.updateHtml();

                    },
                    /**
                     * store the final selection
                     */
                    checkExistArray: function() {
                        if(!this.$target.data(this.dataName)) {
                            this.$target.data(this.dataName, []);
                        }
                        return this.$target.data(this.dataName);
                    },
                    addFromData: function(el, thatId, array) {
                        var thatPrice = el.attr(this.triggerPrice),
                            thatTitle = el.attr(this.triggerTitle),
                            arrayCommit;

                        arrayCommit = {
                            tid: thatId,
                            price: thatPrice,
                            title: thatTitle
                        };

                        //if this is NOT a broadband package, push it in array
                        if(!el[0].className.match(/byo-selection-box/i)){
                            array.push(arrayCommit);
                        }

                        this.$target.data(this.dataName, array);
                        el.closest(this.triggerNumber).add(el).addClass(this.$options.activeClass);

                        if(typeof dataLayer != "undefined") {
                            dataLayer.push({event:{eventInfo:{eventName:'os_add_pick',type:'interaction',effect:thatTitle},category:{primaryCategory:'get_os'}}});
                        }

                        //update contract information
                        this.updateHtml(null,array);
                    },
                    removeFromData: function(el, thatId, array) {

                        var elementTitle = '';

                        if(array.length) {
                            for (var i = 0; i < array.length; i++) {
                                if(array[i].tid === thatId) {
                                    elementTitle = array[i].title;
                                    array.splice(i, 1);
                                }
                            }
                        }

                        this.$target.data(this.dataName, array);

                        el.closest(this.triggerNumber).add(el).removeClass(this.$options.activeClass);

                        if(typeof dataLayer != "undefined") {
                            dataLayer.push({event:{eventInfo:{eventName:'os_remove_pick',type:'interaction',effect:elementTitle},category:{primaryCategory:'get_os'}}});
                        }

                        //update contract information
                        this.updateHtml(null,array);

                    },
                    saveSelection: function() {
                        //the final json string stored in cookie or sent to tvPackagePriceServlet
                        var resultJSONObject = this.constructCartJSON();

                        var jsonString = JSON.stringify(resultJSONObject);

                        //update cookie
                        FOX.storage.removeData('customercart',{path:'/'});
                        FOX.storage.data('customercart',jsonString,{expires : 2,path: '/'});

                    },
                    constructCartJSON:function(){
                        var arrayFinal = this.checkExistArray();

                        //add default tier id
                        var arrSelection = [];
                        if(arrayFinal && arrayFinal.length){
                            for (var i = 0; i < arrayFinal.length; i++) {
                                arrSelection.push(arrayFinal[i].tid);
                            }
                        }
                        arrSelection.push(this.defaultTierId+"");
                        arrSelection = _.uniq(arrSelection,false);

                        //add the contract ID
                        var contractId = this.defaultContractId;

                        var nowString = $.format.date(new Date(), 'yyyy-MM-dd hh:mm:ss');

                        var inputCartJSON={
                                            "cp" : {
                                                "pid" : "2000",
                                                "tids" : [{
                                                        "tid" : "100"
                                                    }
                                                ],
                                                "oe" : {
                                                    "pid" : "",
                                                    "tids" : []
                                                },
                                                "pstb" : {
                                                    "iid" : "300"
                                                },
                                                "mstb" : [],
                                                "it" : "Tech",
                                                "ct" : {
                                                    "pid" : "402",
                                                    "tid" : "",
                                                    "aprop":{}
                                                }
                                            },
                                            "nav" : null,
                                            "lo" : "rem",
                                            "cartName" : "customercart",
                                            "sessionId" : null
                                          };

                        if($('#data-previous-contract-id').attr('data-value') != "" && $('#data-current-contract-id').attr('data-value') != "")
                        {
                            inputCartJSON.cp.ct.aprop = {"currentContractId":$('#data-current-contract-id').attr('data-value'),"previousContractId":$('#data-previous-contract-id').attr('data-value')};
                        }
                        inputCartJSON.dc=nowString;
                        inputCartJSON.dm=nowString;

                        inputCartJSON.cp.tids =[];
                        for (var i = 0; i < arrSelection.length; i++) {
                            inputCartJSON.cp.tids.push({"tid":arrSelection[i]});
                        }

                        inputCartJSON.cp.ct.tid = contractId;

                        //hotfix , change contract length from 24 month to 12 month
                        //putting in the broadband package here, if it is checked
                        $.each($('.byo-selection-box input[type=checkbox]'),function(box){
                            if($(this).attr('checked')==='checked'){
                                var parent=$(this).parent();
                                inputCartJSON.bb = {'pid':parent.attr('data-update-package-id'),'tids':[],"ct":{"pid":"402","tid":"239"}};
                                inputCartJSON.cp.ct.tid = "24";
                                var phoneId = parent.attr('phoneId');
                                if(phoneId){
                                    inputCartJSON.hp = {"pid":phoneId,"tids":[],"ct":{"pid":"402","tid":"236"}};
                                }
                            }
                        });

                        if(inputCartJSON.bb){
                            inputCartJSON.hub={"iid":"1100"};
                        }

                        var jsonString = JSON.stringify(inputCartJSON);


                        return inputCartJSON;
                    },
                    /**
                     * if selection changes, need to calcuate new totalupfront and mincost
                     * data.contract.tierTitle:mincost
                     * data.totalUpfrontCostIncludingOffer
                     * data.totalMinimumContractCost
                     */
                    updateHtml: function(data, array) {
                        var inputCartJSON = this.constructCartJSON();

                        $(".cq-sqcheck-checkavailability-div").hide();
                        $(".sc-button-div").hide();

                        //tv only?
                        if(!inputCartJSON.bb){
                            $(".sc-button-div").show();
                        }else{
                            $(".cq-sqcheck-checkavailability-div").show();
                        }


                        var that = this;
                        $.ajax({  url: "/bin/foxtel/getTriplePlayPackagePrice",
                            data:JSON.stringify(inputCartJSON),
                            type:"POST",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success:function(cartObj){
                                var totalHtmlTitle = '',
                                    totalPrice = 0,
                                    priceString = '',
                                    newUpfront = 0,
                                    newMincost = 0;

                                //grab tv packages
                                if(cartObj.channelPackage){
                                    var tiers = cartObj.channelPackage.tiers;
                                    for(var i=0; i<tiers.length; i++){
                                        //totalPrice += tiers[i].price;
                                        totalHtmlTitle += '<p><span class="wi-icon icon-stick"></span>' + tiers[i].title + '</p>';
                                    }
                                }
                                //grab broadband
                                if(cartObj.broadBandPackage){
                                    totalHtmlTitle += '<p><span class="wi-icon icon-stick"></span>' + cartObj.broadBandPackage.title + '</p>';
                                }
                                //grab phone
                                if(cartObj.phonePackage){
                                    totalHtmlTitle += '<p><span class="wi-icon icon-stick"></span>' + cartObj.phonePackage.title + '</p>';
                                }

                                //update tier
                                //update monthly price
                                that.$allTitle
                                    .empty()
                                    .html($(totalHtmlTitle).hide().fadeIn(that.$options.durationAnimate));

                                if (cartObj.channelPackage.contract && cartObj.channelPackage.contract.tierTitle) {
                                    that.$titleControact.html(cartObj.channelPackage.contract.tierTitle);
                                    that.defaultContractId = cartObj.channelPackage.contract.tid;
                                }

                                if (cartObj.totalUpfrontCostIncludingOffer) {
                                    newUpfront += cartObj.totalMonthlyPriceIncludingOffer;
                                }

                                if (cartObj.totalMinimumContractCost) {
                                    newMincost += cartObj.totalMinimumContractCost;
                                }

                                that.$priceMincost.html(newMincost);

                                //Update the min cost disaclaimer
                                if(cartObj.offerLineItems.length > 0 ){
                                    var nrcOffers = "";
                                    var monthlyOfferString = '';


                                    for(var i = 0; i < cartObj.offerLineItems.length; i++){
                                        if(cartObj.offerLineItems[i].offerType == "NRC"){
                                            nrcOffers += "+ $" + cartObj.offerLineItems[i].offerCartLineItemValue + " " + cartObj.offerLineItems[i].offerCartLineItem + " ";
                                            $(".data-offer-text").hide();
                                        } else if (cartObj.offerLineItems[i].offerType == "MONTHLY"){
                                            $(".data-offer-text").show();
                                            newUpfront = cartObj.totalUpfrontCostExcludingOffer;
                                            //totalPrice += cartObj.totalMonthlyPriceIncludingOffer;
                                            that.$priceChildAfter.html(cartObj.totalMonthlyPriceExcludingOffer);
                                            that.$offerItem.html(cartObj.offerLineItems[i].offerCartLineItem);
                                            that.$offerLength.html(cartObj.offerLineItems[i].offerLength);
                                            that.$offerExpiry.html(cartObj.offerLineItems[i].offerEndDate);
                                            monthlyOfferString += " " + $(".monthly-offer").html() + "</br>";
                                        } else{
                                            $(".data-offer-text").hide();
                                            //totalPrice += cartObj.totalMonthlyPriceIncludingOffer;
                                        }

                                    }
                                    $(".monthly-offers-list").append(monthlyOfferString);
                                    that.$nrcOffer.html(nrcOffers);
                                } else {
                                    $(".data-offer-text").hide();
                                }
                                totalPrice = cartObj.totalMonthlyPriceIncludingOffer;

                                priceString += '<span>$</span>';
                                priceString += totalPrice;
                                priceString += '<span>*</span>';

                                that.$priceChild.html(priceString);
                                that.$priceUpfront.html(newUpfront);

                                //Don't need to popup
                                /*FOX.context.broadcast("BaseCartController.CART_CREATED_CONTRACT", {
                                 "modalType" : "modal-contract-offer-removed",
                                 "cartObj": cartObj
                                 });*/

                                if(cartObj.cookieData.cp.ct && cartObj.cookieData.cp.ct.aprop){
                                    if(cartObj.cookieData.cp.ct.aprop.previousContractId)
                                        $('#data-previous-contract-id').attr('data-value',cartObj.cookieData.cp.ct.aprop.previousContractId);
                                    if(cartObj.cookieData.cp.ct.aprop.currentContractId)
                                        $('#data-current-contract-id').attr('data-value',cartObj.cookieData.cp.ct.aprop.currentContractId);
                                }
                            },
                            error:function(e,a,b){
                                // TODO generl exception
                            }
                        });
                    },
                    changeStatus: function(el, array) {
                        var thatId = el.attr(this.triggerId),
                            isExist = false;

                        if(!thatId || !array) return false;

                        if(array.length) {
                            for (var i = 0; i < array.length; i++) {
                                if(array[i].tid === thatId) {
                                    isExist = true;
                                    break;
                                }
                            }
                        }

                        if(isExist) {
                            this.removeFromData(el, thatId, array);
                        } else {
                            this.addFromData(el, thatId, array);
                        }
                        if(vList.isConsoleApp) console.log("change status:"+isExist+" "+array.length);
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    activeClass: 'active',
                    durationAnimate: 1000
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  7-Popup :
             - save-for-later.html
             */
            //---------------------------------------

            pluginPopup = function() {

                var pluginName = 'popup';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.isAnimate = true;
                    this.isShow = false;
                    this.$target = $('[data-popup-target="' + this.$element.data('popup') + '"]');
                    this.$dismiss = $('[data-popup-dismiss="' + this.$element.data('popup') + '"]');
                    this.$overlay = $('<div id="' + this.$target.data('popup-target') + '-overlay" class="overlay"></div>');
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        this.$element.on('click.' + pluginName + 'touchend.' + pluginName, $.proxy(function(e){
                            if($(e.target).is('a')) e.preventDefault();

                            this.toggle();
                        },this));

                        this.$overlay.on('click.' + pluginName + 'touchend.' + pluginName, $.proxy(function(e){
                            if($(e.target).is('a')) e.preventDefault();

                            this.toggle();
                        },this));
                    },
                    toggle: function() {
                        return this[this.isShow ? 'hide' : 'show']();
                    },
                    show: function() {
                        var that = this;

                        if(!this.isAnimate) return false;

                        this.isAnimate = false;

                        this.$overlay.appendTo(this.$element.parent());

                        this.setPosition();

                        this.$overlay.fadeIn(that.$options.animate, function(){
                            that.$target.fadeIn(that.$options.animate, function(){
                                that.isAnimate = true;

                                that.isShow = true;

                                that.bindEvent();
                            });
                        });
                    },
                    hide: function() {
                        var that = this;

                        if(!this.isAnimate) return false;

                        this.isAnimate = false;

                        this.$target.fadeOut(that.$options.animate, function(){
                            that.$overlay.fadeOut(that.$options.animate, function(){
                                that.isAnimate = true;

                                that.isShow = false;

                                that.unbindEvent();

                                that.reset();
                            });
                        });
                    },
                    reset: function() {
                        this.$overlay.remove();
                        this.$target.removeAttr('style');
                    },
                    bindEvent: function() {
                        this.$overlay
                            .add(this.$dismiss)
                            .on('click.dismiss.sm.popup, touchend.dismiss.sm.popup', this, $.proxy(function(){
                                this.hide();
                            },this));

                        vList.$win.on('resize.window.popup', $.proxy(function(){
                            this.setPosition();
                        },this));

                        if (this.$options.keyboard) {
                            vList.$doc.on('keyup.dismiss.sm.popup', this.$target, $.proxy(function (e) {
                                if(e.which == 27) this.hide();
                            }, this));
                        }
                    },
                    unbindEvent: function() {
                        this.$overlay
                            .add(this.$dismiss)
                            .off('click.dismiss.sm.popup, touchend.dismiss.sm.popup');

                        vList.$win.off('resize.window.popup');

                        if(this.$options.keyboard){
                            vList.$doc.off('keyup.dismiss.sm.popup', this.$target);
                        }
                    },
                    setPosition: function() {
                        // this.$target.css('position', 'absolute');

                        //Code standard
                        if(vList.$win.width() < this.$target.outerWidth() || vList.$win.height() < this.$target.outerHeight())
                            this.$target.css('position', 'absolute');
                        else
                            this.$target.css('position', 'fixed');

                        this.$target.css({
                            left: Math.max(0,(vList.$win.width() - this.$target.outerWidth())/2),
                            top: Math.max(0,(vList.$win.height() - this.$target.outerHeight())/2) + 10
                        });

                        // + 10 : top of button close popup
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    keyboard: true,
                    animate: 400   // Default 400  // Option : 400/linear/swing/slow/fast
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  8-Autocomplete :
             - site-search.html
             */
            //---------------------------------------

            pluginAutocomplete = function() {

                var pluginName = 'autocompletecustom',
                    eventChangeInput = 'input.',
                    eventOnInput = 'oninput' in document.createElement('input'),
                    upKey = 38,
                    leftKey = 37,
                    rightKey = 39,
                    downKey = 40,
                    enterKey = 13,
                    escKey = 27;

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.triggerElement = 'autocomplete';
                    this.keyData = 'data-' + this.triggerElement + '';
                    this.dataValue = 'data-value';
                    this.activeElement = null;
                    this.isCanSubmit = false;
                    this.classTyping = 'typing-input';
                    this.formSubmit = this.$element.closest('form');
                    this.defaultValue = this.$element.attr('data-default-value');
                    this.dataTextDefault = 'data-text-default';
                    this.$result = $('[data-autocomplete-result]');
                    this.itemTriggerData = 'data-' + this.triggerElement + '-item';
                    this.itemTrigger = '[data-' + this.triggerElement + '-item]';
                    this.link = this.$element.attr('data-' + this.triggerElement + '-link');
                    this.category = this.$element.attr('data-' + this.triggerElement + '-category');
                    this.arrayBan = [upKey,leftKey,rightKey,downKey,enterKey,escKey];
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.$content = $('<div class="' + this.$options.searchTermsClass + '" data-search-terms="' + this.$element.attr('data-' + this.triggerElement + '') + '"></div>');
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        var that = this,
                            dataTextDefault;

                        if(!eventOnInput) eventChangeInput = 'keyup.';

                        if(!that.$element.is('input[type="text"]')) return false;

                        that.formSubmit.on('submit', function(e){
                            if(!that.isCanSubmit || !that.$element.val().split(" ").join("").length) e.preventDefault();
                        });

                        that.$element.on(eventChangeInput + pluginName, function(e){
                            if(that.$element.val().split(" ").join("").length) {
                                that.isCanSubmit = true;
                            }
                            else {
                                that.isCanSubmit = false;
                            }

                            if($.inArray(e.which, that.arrayBan) === -1) {
                                that.refreshFast();

                                dataTextDefault = that.$result.attr(that.dataTextDefault);

                                that.$result.html(dataTextDefault);

                                that.search(e);
                            }
                        });

                        that.$element.on('keydown.' + pluginName, function(e){
                            if(e.which === downKey) {
                                that.selectedDown();
                            } else if(e.which === upKey) {
                                that.selectedUp();
                            } else if(e.which === escKey) {
                                that.refresh();
                            } else if(e.which === enterKey) {
                                that.enter();
                            }
                        });

                        vList.$doc.on('mouseenter.' + pluginName + ', mouseover.' + pluginName, function(e){
                            var $itemSelect = $(e.target);

                            if($itemSelect.closest(that.itemTrigger).length) {
                                that.selectedItem($itemSelect);
                            }
                        });

                        vList.$doc.on('click.' + pluginName + ', touchend.' + pluginName, function(e){
                            var $itemChoose = $(e.target);

                            if($itemChoose.attr(that.keyData)) {
                                that.$element.addClass(that.classTyping);
                            } else if(!$itemChoose.closest(that.itemTrigger).length && !$itemChoose.attr(that.keyData) && $itemChoose.attr('type') !== 'submit') {
                                that.refreshFast();

                                if(that.defaultValue === that.$element.val()) {
                                    that.isCanSubmit = false;

                                    that.$element.removeClass(that.classTyping);
                                }
                            } else if($itemChoose.closest(that.itemTrigger).length){
                                that.chooseItem($itemChoose);

                                if(that.$options.submitFormWhenChoose) {
                                    that.$element.closest('form').submit();
                                }
                            }
                        });
                    },
                    enter: function(){
                        var $allItem = $(this.itemTrigger),
                            $selectedItem = $allItem.filter('.' + this.$options.selectedClass);

                        if(!$selectedItem.length) {
                            return false;
                        } else {
                            this.chooseItem($selectedItem);
                        }
                    },
                    selectedUp: function(){
                        var $allItem = this.$content.find(this.itemTrigger),
                            $thatTarget = $('[data-' + this.triggerElement + '-target="' + this.$element.attr(this.keyData) + '"]'),
                            $selectedItem = $allItem.filter('.' + this.$options.selectedClass);

                        this.refreshSelected();

                        if(!$selectedItem.length || $selectedItem.is(':first-child')) {
                            $selectedItem = $allItem.last().addClass(this.$options.selectedClass);
                        } else {
                            $selectedItem = $allItem.eq($selectedItem.index() - 1).addClass(this.$options.selectedClass);
                        }

                        $thatTarget.add(this.$element).val($selectedItem.attr(this.dataValue));
                    },
                    selectedDown: function(){
                        var $allItem = this.$content.find(this.itemTrigger),
                            $thatTarget = $('[data-' + this.triggerElement + '-target="' + this.$element.attr(this.keyData) + '"]'),
                            $selectedItem = $allItem.filter('.' + this.$options.selectedClass);

                        this.refreshSelected();

                        if(!$selectedItem.length || $selectedItem.is(':last-child')) {
                            $selectedItem = $allItem.first().addClass(this.$options.selectedClass);
                        } else {
                            $selectedItem = $allItem.eq($selectedItem.index() + 1).addClass(this.$options.selectedClass);
                        }

                        $thatTarget.add(this.$element).val($selectedItem.attr(this.dataValue));
                    },
                    refreshSelected: function(){
                        $(this.itemTrigger).removeClass(this.$options.selectedClass);
                    },
                    selectedItem: function(el){
                        $(this.itemTrigger).removeClass(this.$options.selectedClass);

                        el.closest(this.itemTrigger).addClass(this.$options.selectedClass);
                    },
                    chooseItem: function(el){
                        this.$element.val(el.closest(this.itemTrigger).attr(this.dataValue));

                        this.refreshFast();
                    },
                    refreshFast: function(){
                        this.$content.remove();
                    },
                    refresh: function(){
                        this.$content.animate({
                            height: 0,
                            opacity: 0
                        },this.$options.durationAnimate);
                    },
                    search: function(el) {
                        var $thatEl = $(el.target),
                            thatValue = $thatEl.val().split(" ").join(""),
                            $thatTarget = $('[data-' + this.triggerElement + '-target="' + $thatEl.attr(this.keyData) + '"]');

                        $thatTarget.not($thatEl).val($thatEl.val());

                        if(thatValue.length && thatValue.length >= this.$options.numberCharacterToSuggest) {
                            this.ajax($thatEl);
                        } else {
                            this.refresh();
                        }
                    },
                    ajax: function(el) {
                        var that = this,
                            thatEl = el,
                            ajaxUrl = that.link,
                            dataAjax = {
                                q : thatEl.val(),
                                sites: that.category
                            };

                        if(fList.ajaxGetData && typeof fList.ajaxGetData === 'function') {
                            fList.ajaxGetData(ajaxUrl,
                                'default',
                                appSetting.ajaxAutocomplete.dataType,
                                'default',
                                dataAjax,
                                'default',
                                function(data){
                                    if(data[1]) {
                                        that.afterAjax(data[1]);
                                    }
                                });
                        }

                        return false;
                    },
                    afterAjax: function(data) {
                        if(data){
                            if(data.length && data.length !== 0) {
                                this.appendContent(data);
                            } else if(data.length && data.length === 0) {
                                this.refresh();
                            }
                        }
                    },
                    appendSearchTerms: function(data) {
                        var $suggestionItem,
                            heightTotal = 0,
                            itemWord,
                            jItemWord;

                        for (var i = 0; i <= data.length - 1; i++) {
                            itemWord = data[i];

                            if(this.$options.coloringKeyWord) {
                                jItemWord = this.coloringKeyWord(itemWord);
                            } else {
                                jItemWord = itemWord;
                            }

                            $suggestionItem = $('<div class="' + this.$options.itemClass + '"></div>').append(jItemWord);

                            $suggestionItem.attr(this.dataValue, itemWord);

                            $suggestionItem.attr(this.itemTriggerData, this.$element.attr(this.keyData));

                            $suggestionItem.appendTo(this.$content);

                            heightTotal += $suggestionItem.outerHeight();

                            if(i === this.$options.selectSuggested - 1) {
                                break;
                            }
                        }

                        return heightTotal;
                    },
                    coloringKeyWord: function(word) {
                        var $stringTotal = $('<span></span>'),
                            rep = word.replace(this.$element.val() , '<span class="' + this.$options.classColoring + '">' + this.$element.val() + '</span>');

                        $stringTotal.html(rep);

                        return $stringTotal;
                    },
                    appendContent: function(data) {
                        var arrayValue,
                            heightTotal;

                        this.$content.empty();

                        this.$element.after(this.$content);

                        if(data.length) {
                            arrayValue = [];

                            for (var i = 0; i <= data.length - 1; i++) {
                                arrayValue[i] = data[i];
                            }

                            heightTotal = this.appendSearchTerms(arrayValue) + 40;

                            // + 40 padding in css
                        }

                        this.$content
                            .height(0)
                            .css({
                                width: this.$element.outerWidth(),
                                opacity: 0
                            });

                        this.$content.animate({
                            height: heightTotal,
                            opacity: 1
                        },this.$options.durationAnimate);
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    numberCharacterToSuggest: 3,
                    selectSuggested: 5,
                    durationAnimate: 400,
                    selectedClass: 'active',
                    coloringKeyWord: true,
                    submitFormWhenChoose: true,
                    classColoring: 'bold-keyword',
                    itemClass: 'suggestion-item',
                    searchTermsClass : 'search-terms'
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-autocomplete]')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-autocomplete]')[pluginName]();
                }

            };

            //---------------------------------------



            /*  9-Toggle Responsive
             - got-upgrades.html
             - got-what-on.html
             - how-it-work.html
             */
            //---------------------------------------

            pluginToggleResponsive = function() {

                var pluginName = 'toggleresponsive';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.isAdd = true;
                    this.$buttonNext = $('[data-toggleresponsive-next="' + this.$element.attr('data-toggleresponsive') + '"]');
                    this.$buttonPrev = $('[data-toggleresponsive-prev="' + this.$element.attr('data-toggleresponsive') + '"]');
                    this.toggleClass = this.$element.attr('data-class-toggle');
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        this.$buttonNext.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            e.preventDefault();
                            if(this.isAdd) this.add();

                            this.behaviorOtherPlugin();
                        }, this));

                        this.$buttonPrev.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            e.preventDefault();
                            this.remove();

                            this.behaviorOtherPlugin();
                        }, this));
                    },
                    behaviorOtherPlugin: function() {
                        if(fList.fixMaxHeight && typeof fList.fixMaxHeight === 'function') {
                            fList.fixMaxHeight();
                        }
                    },
                    add: function() {
                        var that = this;

                        this.isAdd = false;

                        if(this.$element.hasClass(this.toggleClass)) {
                            this.$element.removeClass(this.toggleClass);
                        } else {
                            this.$element.addClass(this.toggleClass);
                        }

                        setTimeout(function(){
                            that.isAdd = true;
                        }, appSetting.durationAddClass);
                    },
                    remove: function() {
                        this.$element.removeClass(this.toggleClass);
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    option: 'value'
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  10-Wrap active :
             - preferences-page.html
             */
            //---------------------------------------

            pluginWrapActive = function() {

                var pluginName = 'wrap-active';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.dataElement = 'data-wrap-active';
                    this.triggerElement = '[data-wrap-active]';
                    this.triggerChild = '[data-wrap-item]';
                    this.$otherElement = $('[data-wrap-active="' + this.$element.attr(this.dataElement) + '"]').not(this.$element);
                    this.$child = this.$element.find(this.triggerChild);
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        this.$child.on('click.' + pluginName, $.proxy(function(){
                            this.addActiveForElement();
                        }, this));
                    },
                    refresh: function() {
                        this.$otherElement.removeClass(this.$options.activeClass);
                    },
                    addActiveForElement: function() {
                        this.refresh();
                        this.$element.addClass(this.$options.activeClass);
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options) {
                    return this.each(function() {
                        $.data(this, pluginName, new Plugin(this, options));
                    });
                };

                $.fn[pluginName].defaults = {
                    activeClass: 'active'
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  11-M Accordion :
             - preferences-page.html
             */
            //---------------------------------------

            pluginMaccordion = function() {

                var pluginName = 'maccordion';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.element = $(element);
                    this.isAnimate = true;
                    this.triggerWrapActive = '[data-wrap-active]';
                    this.dataElement = 'data-maccordion';
                    this.dataHead = 'data-maccordion-head';
                    this.dataAbsoluteContent = 'data-maccordion-absolute-content';
                    this.triggerRelativeContent = '[data-maccordion-relative-content]';
                    this.dataRelativeContent = 'data-maccordion-relative-content';
                    this.dataContent = 'data-maccordion-content';
                    this.triggerHead = '[data-maccordion-head]';
                    this.triggerContent = '[data-maccordion-content]';
                    this.triggerClose = '[data-maccordion-dismiss]';
                    this.buttonClose = this.element.find(this.triggerClose);
                    this.head = this.element.find(this.triggerHead);
                    this.content = this.element.find('[data-maccordion-parent="' + this.element.attr(this.dataElement) + '"][data-maccordion-content]');
                    this.options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.beforeInit();
                    this.init();
                }

                Plugin.prototype = {
                    beforeInit: function() {
                        this.buttonClose.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            if(!this.isAnimate) return false;

                            this.isAnimate = false;

                            var thatContent = $(e.target).closest(this.triggerContent),
                                thatHead = this.element.find('[data-maccordion-head="' + thatContent.attr(this.dataContent) + '"]');

                            this.hide(thatHead, thatContent);
                        }, this));
                    },
                    init: function() {
                        if(this.options.activeFirst) {
                            this.head.first().addClass(this.options.activeClass);

                            this.content.not(':first').hide();

                            this.bindKeyup();
                        } else {
                            this.content.hide();
                        }

                        this.head.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            if(!this.isAnimate) return false;

                            this.isAnimate = false;

                            var thatTarget = $(e.target).closest(this.triggerHead);

                            if(thatTarget.is('a')) e.preventDefault();

                            this.toggle(thatTarget);
                        }, this));
                    },
                    bindKeyup: function() {
                        if(this.options.keyBoard) {
                            vList.$doc.on('keyup.dismiss.' + pluginName+ this.element.attr(this.dataElement), $.proxy(function(e){
                                if(e.which === 27) this.hideAll();
                            }, this));
                        }
                    },
                    afterHide: function(el) {
                        el.removeClass(this.options.activeClass);

                        el.closest(this.triggerWrapActive).removeClass('active');
                        //class active of wrap-active plugin

                        if(this.options.keyBoard && !this.content.filter(':visible').length) {
                            vList.$doc.off('keyup.dismiss.' + pluginName + this.element.attr(this.dataElement));
                        }
                    },
                    afterShow: function(el) {
                        el.addClass(this.options.activeClass);

                        el.closest(this.triggerWrapActive).addClass('active');
                        //class active of wrap-active plugin

                        this.bindKeyup();
                    },
                    refresh: function() {
                        this.hideAll();
                    },
                    hideAll: function() {
                        this.head.removeClass(this.options.activeClass);

                        this.head.closest(this.triggerWrapActive).removeClass('active');
                        //class active of wrap-active plugin

                        this.content.hide();

                        if(this.options.keyBoard) {
                            vList.$doc.off('keyup.dismiss.' + pluginName+ this.element.attr(this.dataElement));
                        }
                    },
                    beforeShow: function(el, elContent) {
                        var thisOffsetTop = el.offset().top,
                            tempOffset,
                            tempArrayDetect,
                            contentRelative = el.closest(this.triggerRelativeContent),
                            offsetTopRelative = el.closest(this.triggerRelativeContent).offset().top,
                            distanceTop = Math.abs(thisOffsetTop - offsetTopRelative);

                        tempOffset = distanceTop;

                        if(vList.$win.width() >= appSetting.desktopScreen) {
                            tempArrayDetect = appSetting.offsetMaccordion['>=desktopScreen'];

                            if(contentRelative.attr(this.dataRelativeContent) === 'true') {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[0].top
                                });
                            } else {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[1].top
                                });
                            }
                        } else if(vList.$win.width() >= appSetting.mobileScreen && vList.$win.width() < appSetting.desktopScreen) {
                            tempArrayDetect = appSetting.offsetMaccordion['>=mobileScreen-and<desktopScreen'];

                            if(contentRelative.attr(this.dataRelativeContent) === 'true') {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[0].top
                                });
                            } else {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[1].top
                                });
                            }
                        } else if(vList.$win.width() < appSetting.mobileScreen && vList.$win.width() > appSetting.smallMobileScreen){
                            tempArrayDetect = appSetting.offsetMaccordion['<mobileScreen-and>smallMobileScreen'];

                            if(contentRelative.attr(this.dataRelativeContent) === 'true') {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[0].top
                                });
                            } else if(contentRelative.attr(this.dataRelativeContent) === 'false'){
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[1].top
                                });
                            } else {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[2].top
                                });
                            }
                        } else if(vList.$win.width() <= appSetting.smallMobileScreen) {
                            tempArrayDetect = appSetting.offsetMaccordion['<=smallMobileScreen'];

                            if(contentRelative.attr(this.dataRelativeContent) === 'true') {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[0].top
                                });
                            } else if(contentRelative.attr(this.dataRelativeContent) === 'false'){
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[1].top
                                });
                            } else {
                                elContent.css({
                                    top: tempOffset + tempArrayDetect[2].top
                                });
                            }
                        }
                    },
                    show: function(el, elContent) {
                        this.hideAll();

                        if(this.element.attr(this.dataAbsoluteContent)) {
                            this.beforeShow(el, elContent);
                        }

                        elContent.slideDown(this.options.durationAnimate, $.proxy(function(){
                            this.isAnimate = true;

                            this.afterShow(el);
                        }, this));
                    },
                    hide: function(el, elContent) {
                        elContent.slideUp(this.options.durationAnimate, $.proxy(function(){
                            this.isAnimate = true;

                            this.afterHide(el);
                        }, this));
                    },
                    toggle: function(el) {
                        var thatContent = this.content.filter('[data-maccordion-content="' + el.attr(this.dataHead) + '"]');

                        return this[thatContent.is(':visible') ? 'hide' : 'show'](el, thatContent);
                    },
                    destroy: function() {
                        $.removeData(this.element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    durationAnimate: 400,
                    activeClass: 'active',
                    keyBoard: true,
                    activeFirst: false
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  12-Button on-off :
             - preferences-page.html
             */
            //---------------------------------------

            pluginButtonToggle = function() {

                var pluginName = 'button-toggle';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.triggerElement = '[data-button-toggle]';
                    this.triggerButtonOn = '[data-button-on]';
                    this.triggerButtonOff = '[data-button-off]';
                    this.triggerInput = '[data-input-toggle]';
                    this.isOn = true;
                    this.isComplete = true;
                    this.$buttonOn = this.$element.find(this.triggerButtonOn);
                    this.$buttonOff = this.$element.find(this.triggerButtonOff);
                    this.$input = this.$element.find(this.triggerInput);
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        if(this.$input.is(':checked')) {
                            this.isOn = true;
                        } else if(this.$input.is(':not(checked)')) {
                            this.isOn = false;
                        }

                        this.$buttonOn.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            if(!this.isComplete) return false;

                            var $thatTarget = $(e.target),
                                $buttonOn = $thatTarget.closest(this.triggerButtonOn);

                            if(!$buttonOn.length || $buttonOn.hasClass(this.$options.selectedClass))
                                return false;

                            this.isComplete = false;

                            this.on();
                        }, this));

                        this.$buttonOff.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            if(!this.isComplete) return false;

                            var $thatTarget = $(e.target),
                                $buttonOff = $thatTarget.closest(this.triggerButtonOff);

                            if(!$buttonOff.length || $buttonOff.hasClass(this.$options.selectedClass))
                                return false;

                            this.isComplete = false;

                            this.off();
                        }, this));
                    },
                    on: function() {
                        this.$buttonOn.addClass(this.$options.selectedClass);
                        this.$buttonOff.removeClass(this.$options.selectedClass);
                        this.$input.attr('checked', 'checked');
                        this.isComplete = true;
                    },
                    off: function() {
                        this.$buttonOn.removeClass(this.$options.selectedClass);
                        this.$buttonOff.addClass(this.$options.selectedClass);
                        this.$input.removeAttr('checked');
                        this.isComplete = true;
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    selectedClass: 'selected'
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------


            /*  14 - update ajax :
             - package-detail.html
             */
            //---------------------------------------

            pluginUpdateAjax = function() {

                var pluginName = 'update-ajax';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.dataElement = 'data-update-ajax';
                    this.dataLink = 'data-update-ajax-link';
                    this.id = this.$element.attr(this.dataElement);
                    this.link = this.$element.attr(this.dataLink);
                    this.triggerUpdateAjaxVariable = 'data-update-ajax-variable';
                    this.dataPackage = [];
                    this.buttonRedirect = '.btn';
                    this.updatePackage = $('[data-update-package]');
                    this.ajaxData = {};
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        this.$element.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(e){
                            e.preventDefault();

                            if(!this.link) return false;

                            this.prepareArrayData();

                            this.ajaxCall();
                        }, this));
                    },
                    prepareArrayData: function() {
                        this.dataPackage = this.$element.data('package');

                        this.ajaxData = {};

                        if(this.id.length !== 0) {
                            this.ajaxData = {
                                cp:{
                                    pid: this.id
                                }
                            };
                        } else {
                            if(!this.dataPackage) {
                                this.ajaxData = {};
                            } else if (this.dataPackage) {
                                var tempData = [];

                                for (var i = 0; i < this.dataPackage.length; i++) {
                                    var thatId = this.dataPackage[i].tid;

                                    tempData.push({
                                        tid: thatId
                                    });
                                }

                                this.ajaxData = {
                                    cp:{
                                        tids: tempData
                                    }
                                };
                            }
                        }
                    },
                    ajaxCall: function() {
                        var that = this,
                            thatLink = that.link,
                            thatData = JSON.stringify(that.ajaxData),
                            dataVariable = that.$element.attr(that.triggerUpdateAjaxVariable),
                            ajaxData = {},
                            buttonRedirect = that.$element.find(that.buttonRedirect),
                            thatIt,
                            parentIt,
                            childrenIt,
                            thatRedirect;

                        thatIt = buttonRedirect.attr('href');
                        parentIt = buttonRedirect.closest('a').attr('href');
                        childrenIt = buttonRedirect.find('a').attr('href');

                        thatRedirect = thatIt || parentIt || childrenIt;

                        ajaxData[dataVariable] = thatData;

                        if(fList.ajaxGetData && typeof fList.ajaxGetData === 'function') {
                            fList.ajaxGetData(thatLink,
                                appSetting.ajaxUpdateSelectAndCustomize.type,
                                appSetting.ajaxUpdateSelectAndCustomize.dataType,
                                'default',
                                ajaxData,
                                'default',
                                function(data){
                                    if(data){
                                        console.log('Ajax select and customize success !');

                                        if(thatRedirect && window.location.assign) {
                                            window.location.assign(thatRedirect);
                                        }
                                    }
                                });
                        }
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    option: 'value'
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            /*  15 - Cookies first load
             - go-package-home.html
             */
            //---------------------------------------

            pluginCookieTarget = function() {

                var cookieTrigger = '[data-cookie-target]',
                    firstLoadCookieName = 'firstload',
                    buttonCloseTrigger = '[data-cookie-close]',
                    pluginName = 'cookieFirstLoad';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function CookieBanner() {}

                CookieBanner.prototype.checkCookie = function checkCookie() {
                    var firstLoad = vList.docCookies.getItem(firstLoadCookieName);

                    if(!firstLoad){
                        $(cookieTrigger).slideDown();
                    }
                };

                CookieBanner.prototype.closeBannerCookie = function closeBannerCookie() {
                    $(cookieTrigger).slideUp();

                    var firstLoad = vList.docCookies.getItem(firstLoadCookieName);

                    if(!firstLoad){
                        vList.docCookies.setItem(firstLoadCookieName, 'true', appSetting.cookieDayFirstLoad * 24 * 60 * 60);
                    }
                };

                var cookieBanner = new CookieBanner();

                cookieBanner.checkCookie();

                vList.$doc.on('click.cookie, touchend.cookie', buttonCloseTrigger, cookieBanner.closeBannerCookie);

            };

            //---------------------------------------



            /*  16 - Brightcove ajax */
            //---------------------------------------

            pluginBrightcoveAjax = function() {

                var pluginName = 'brightcove-ajax';

                if(vList.isConsoleApp) console.log('Run plugin ' + pluginName + ' !');

                function Plugin(element, options) {
                    this.$element = $(element);
                    this.dataElement = 'data-brightcove-ajax';
                    this.dataWidth = 'data-brightcove-width';
                    this.dataHeight = 'data-brightcove-height';
                    this.dataLink = 'data-brightcove-link';
                    this.triggerTarget = '[data-brightcove-target]';
                    this.triggerObject = '[data-brightcove-object]';
                    this.idVideo = this.$element.attr(this.dataElement);
                    this.idContent = 'myExperience';
                    this.isShow = false;

                    if(!$('#overlay').length) {
                        $('<div id="overlay"></div>').appendTo(vList.documentBody);
                    }

                    this.$overlay = $('#overlay');
                    this.widthVideo = parseInt(this.$element.attr(this.dataWidth),10);
                    this.heightVideo = parseInt(this.$element.attr(this.dataHeight),10);
                    this.link = this.$element.attr(this.dataLink);
                    this.$options = $.extend({}, $.fn[pluginName].defaults, options);
                    this.init();
                }

                Plugin.prototype = {
                    init: function() {
                        if(!this.idVideo || !this.widthVideo || !this.heightVideo || !this.link) {
                            return false;
                        }

                        this.ajaxLoadContent();

                        /* Updated scripts below
                        this.$element.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(){
                            if(!this.modVP) return false; 

                            this.setSize();

                            this.setPosition();

                            this.showAndLoad(this.idVideo);
                        },this));
                        */

                        this.$element.on('click.' + pluginName + ', touchstart.' + pluginName, $.proxy(function(){
                            var oldScrollTop = $(window).scrollTop();

                            // Wait for 200ms milliseconds, then check the scroll position, had scrollposition changed
                            window.setTimeout( function() {
                                var newScrollTop = $(window).scrollTop();
                                if (Math.abs(oldScrollTop-newScrollTop)<3){
                                    if(!this.modVP) return false; 
        
                                    this.setSize();
        
                                    this.setPosition();
        
                                    this.showAndLoad(this.idVideo);
                                }
                            }.bind(this), 200);
                        },this));

                        this.$overlay.on('click.' + pluginName + ', touchend.' + pluginName, $.proxy(function(){
                            this.hide();
                        },this));
                    },
                    refresh: function() {
                        if(!this.isShow) return false;

                        this.setSize();

                        this.setPosition();
                    },
                    setSize: function() {
                        if(this.$target.length) {
                            this.$object = this.$target.find('object');

                            if(this.widthVideo > vList.$win.width()) {
                                if(this.$object.length) {
                                    this.$object.width(vList.$win.width());
                                }
                                this.$target.width(vList.$win.width()).height('auto');
                            } else {
                                if(this.$object.length) {
                                    this.$object
                                        .width(this.widthVideo)
                                        .height(this.heightVideo);
                                }
                                this.$target
                                    .width(this.widthVideo)
                                    .height(this.heightVideo);
                            }
                        }
                    },
                    setPosition: function() {
                        if(this.$target.length && fList.setPosition && typeof fList.setPosition === 'function') {
                            fList.setPosition(this.$target);
                        }
                    },
                    hide: function() {
                        if(this.modVP) this.modVP.pause(true);

                        if(this.$target.length)
                            this.$target
                                .removeClass('show')
                                .addClass('hide')
                                .height(0)
                                .width(0);

                        if(this.$overlay.length)
                            this.$overlay.hide();

                        this.isShow = false;
                    },
                    show: function() {
                        this.$target.removeClass('hide').addClass('show');

                        this.$overlay.show();

                        this.isShow = true;
                    },
                    onTemplateLoaded: function(id) {
                        var that = this;

                        if(window.brightcove.api) {
                            that.player = window.brightcove.api.getExperience(id);
                        }

                        if(that.player) {
                            that.modVP = that.player.getModule(window.brightcove.api.modules.APIModules.VIDEO_PLAYER);

                            console.log('Brightcove video init ! You can play video !');
                        } else {
                            setTimeout(function(){
                                that.onTemplateLoaded(that.idContent);
                            },1000);
                        }
                        // 1000 delay when that.player can't init
                    },
                    showAndLoad: function(vidID) {
                        var that =  this;

                        if(that.modVP) {
                            that.modVP.loadVideoByID(vidID);
                        } else {
                            that.initialVideo = vidID;
                        }

                        that.show();
                    },
                    resizeObject: function(el) {
                        var that = this;

                        that.$object = el.find(that.triggerObject);

                        that.$widthObject = that.$object.find('[name="width"]');

                        if(that.$widthObject.val() > vList.$win.width()) {
                            that.$widthObject.val(vList.$win.width());
                        }
                    },
                    ajaxLoadContent: function() {
                        var that = this;

                        if(fList.ajaxGetData && typeof fList.ajaxGetData === 'function') {
                            fList.ajaxGetData(this.link, appSetting.ajaxBrightCove.type, 'default', 'default', 'default', 'default', function(data){
                                if(!$(that.triggerTarget).length) {
                                    $(data).appendTo(vList.documentBody);
                                }

                                that.$target = $(that.triggerTarget);

                                that.resizeObject(that.$target);

                                window.brightcove.createExperiences();

                                that.onTemplateLoaded(that.idContent);
                            });
                        }
                    },
                    destroy: function() {
                        $.removeData(this.$element[0], pluginName);
                    }
                };

                $.fn[pluginName] = function(options, params) {
                    return this.each(function() {
                        var instance = $.data(this, pluginName);
                        if (!instance) {
                            $.data(this, pluginName, new Plugin(this, options));
                        } else if (instance[options]) {
                            instance[options](params);
                        } else {
                            if(window.console) {
                                console.log(options ? options + ' method is not exists in ' + pluginName : pluginName + ' plugin has been initialized');
                            }
                        }
                    });
                };

                $.fn[pluginName].defaults = {
                    option: 'value'
                };

                if(vList.$dycComponent.length) {
                    vList.$doc.on('complete.Handlebars', function(){
                        $('[data-' + pluginName + ']')[pluginName]();
                    });
                } else if(!vList.$dycComponent.length) {
                    $('[data-' + pluginName + ']')[pluginName]();
                }

            };

            //---------------------------------------



            initPlugin = function(){
                if($('[data-sliderchoice]').length) pluginSliderChoice();
                if($('[data-accordion]').length) pluginAccordion();
                if($('[data-sliderdrag]').length) pluginSliderDrag();
                if($('[data-back-page]').length) pluginBackPage();
                if($('[data-fadeinslide]').length) pluginFadeinSlide();
                if($('[data-update-package]').length) pluginUpdatePackage();
                if($('[data-popup]').length) pluginPopup();
                if($('[data-autocomplete]').length) pluginAutocomplete();
                if($('[data-toggleresponsive]').length) pluginToggleResponsive();
                if($('[data-wrap-active]').length) pluginWrapActive();
                if($('[data-maccordion]').length) pluginMaccordion();
                if($('[data-button-toggle]').length) pluginButtonToggle();
                if($('[data-update-ajax]').length) pluginUpdateAjax();
                if($('[data-cookie-target]').length && vList.isCookieEnabled) {
                    pluginCookieTarget();
                }
                if($('[data-brightcove-ajax]').length) pluginBrightcoveAjax();

            };



            return initPlugin;
        },
        initApp: function() {
            var globalApp = this,
                settingApp = new $.Deferred(),
                variableApp = new $.Deferred(),
                functionApp = new $.Deferred(),
                pluginApp = new $.Deferred();

            $.when(settingApp, variableApp, functionApp, pluginApp).done(function () {
                if(globalApp.vList.isConsoleApp) console.log('App init !');

                globalApp.fList.initBegin();

                globalApp.pList();
            });

            settingApp.resolve(globalApp.sList = new globalApp.settingList());
            variableApp.resolve(globalApp.vList = new globalApp.variableList());
            functionApp.resolve(globalApp.fList = new globalApp.functionList(globalApp.vList));
            pluginApp.resolve(globalApp.pList = new globalApp.pluginList(globalApp.vList, globalApp.fList));
        }
    };

    if(!window.app) {
        window.app = new mainApp();

        $(window.app);
    }

}(window.jQuery, window, window.appSetting, window.Modernizr));
$.removeCookie("foxtelPlayBasket",{ path: '/' });