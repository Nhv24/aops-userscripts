// ==UserScript==
// @name         Hide Alcumus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides Alcumus ratings (self ratings)
// @author       player01/Nhv24
// @match        https://artofproblemsolving.com/alcumus/*
// @grant        none
// ==/UserScript==

$('head').append('<style>.alc--score{display:none;}</style>')
