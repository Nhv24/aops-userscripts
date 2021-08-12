// ==UserScript==
// @name         TeXeR unsaved notification
// @namespace    https://github.com/Nhv24
// @version      1
// @description  Alerts when texer has not been saved
// @author       Nhv24 (github) player01 (AoPS)
// @match        https://artofproblemsolving.com/texer/*
// @grant        none
// ==/UserScript==

const texer = document.querySelector("#editor") ? true : false;

if (texer) {
    let saved = true;

    $("save").click(() => {
        saved = true;
    });

    $("#editor").keypress(() => {
        saved = false;
    });
    window.onbeforeunload = (e) => {
        if (!saved) {
            e = e || window.event;

            if (e) {
                e.returnValue = 'Are you sure you want to close?';
            }
            return 'Are you sure you want to close?';
        }
    }
}
