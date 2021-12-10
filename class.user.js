// ==UserScript==
// @name         AoPS class notification
// @namespace    https://github.com/Nhv24
// @version      1
// @description  Notifications for AoPS class
// @author       Nhv24 (github) player01 (AoPS)
// @match        https://artofproblemsolving.com/classroom/*
// @grant        none
// ==/UserScript==

if (!Notification) {
    alert("Your browser does not support notifications.");
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission()
}

// Basically https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
function waitLoad(elm, config = {childList: true, subtree: true}) {
    return new Promise(resolve => {
        if (document.querySelector(elm)) {return resolve(document.querySelector(elm));}

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(elm)) {
                resolve(document.querySelector(elm));
                observer.disconnect();
            }
            
        });
        observer.observe(document.body, config);
    });
}

function notify(msg) {
    let text = msg.find(".styles_scrollWrapper__2_HGy span").text();
    const username = msg.find(".styles_username__3T3BZ.shared-ui_username__30LVr").text();

    if (msg.find(".shared-ui_instructor__u4q8g").length > 0) {
        if (Notification.permission === "granted" && document.hidden) {
            let notification = new Notification(username, {body: text});
        }
    }
}

// https://developer.mozilla.org/docs/Web/API/MutationObserver
const config = {childList: true};

const messages = await waitLoad(".styles_messageList__2Gz0Y.styles_growToFullHeight__31FhX.styles_topTracked__wDRH_")

const callback = (mutations) => {
    for(const mutation of mutations) {
        mutation.addedNodes.forEach(addedNode => {
            notify($(addedNode))
        });
    }
};

const observer = new MutationObserver(callback);
observer.observe(messages, config);
