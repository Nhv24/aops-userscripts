// ==UserScript==
// @name         Hide Alcumus
// @namespace    https://github.com/Nhv24
// @version      0.1
// @description  Hides Alcumus ratings (self ratings)
// @author       player01/Nhv24
// @match        https://artofproblemsolving.com/alcumus/*
// @grant        none
// @license      MIT
// ==/UserScript==

// Just insert CSS :P
$('head').append('<style>.alc--score{display:none;}</style>')
