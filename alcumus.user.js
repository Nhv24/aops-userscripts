// ==UserScript==
// @name         Alcumus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Puts Alcumus profiles on AoPS user profiles
// @author       player01/Nhv24
// @match        https://artofproblemsolving.com/*
// @grant        none
// ==/UserScript==

// Append html
function alcumus(id) {
    if ($("#alcumus")[0]) {
        return;
    }
    let url = id.src.split("/");
    url = url.pop() || url.pop();
    url = url.slice(7).split(".")[0];
    url = "https://artofproblemsolving.com/alcumus/profile/" + url;

    $(".cmty-user-profile-activity .cmty-user-profile-data").append(`
        <div class="cmty-user-profile-data-row" id="alcumus">
		    <div>
			    Alcumus:
		    </div>
            <div>
				<a href=${url} target="_blank">Profile</a>
		    </div>
	    </div>
    `);
}

// Listen for image
function listen(elem = $("#community-all .cmty-user-profile-avatar.cmty-no-phone img")) {
    if (window.location.href.startsWith("https://artofproblemsolving.com/community/user/")) {
        if (elem[0]) {
            clearInterval(wait);
            alcumus(elem[0]);
        }
    }
    else {
        clearInterval(wait);
    }
}

let wait = setInterval(listen, 100);
$("body").click((e) => {
    if (e.target.classList.contains("cmty-avatar") ||
        e.target.classList.contains("cmty-post-username") ||
        // Parent elements
        e.target.parentElement.classList.contains("cmty-post-username")
       ) {
        wait = setInterval(listen, 100);
    }
});
