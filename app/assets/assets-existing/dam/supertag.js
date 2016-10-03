/*
 * SuperTag v2.11.1
 * http://supert.ag
 *
 * Copyright (c) 2015 SuperTag Pty Ltd.
 *
 * Date: 16-02-2015 11:28:10 +1100 (Mon, 16 Feb 2015)
 */
var superT={};!function(e,t,r){var s=e.getElementsByTagName("script"),n=function(){for(var e=0;e<s.length;e++){if(s[e].src.match("supertag.js")){if(!s[e].async){return true}}}return false}(),i=function(t){e.write("<scr"+"ipt src='"+t+"' ></scr"+"ipt>")},c=function(t){var r=e.createElement("script");r.async=true;r.src=t;var n=s[0];n.parentNode.insertBefore(r,n)},a;if(~window.location.href.indexOf("superT=test")||~e.cookie.indexOf("superT_lt")){a="https://app.supert.ag/p/foxtel/foxtel/supertag.js?force=local,livetesting";if(!n){c(a)}else{i(a)}}else{a="//c.supert.ag/foxtel/foxtel/supertag-code-v32.js";if(n){i(a)}else{c(a)}}}(document,superT,"undefined");