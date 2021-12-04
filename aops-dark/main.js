
// ==UserScript==
// @name         AoPS Dark
// @match        https://artofproblemsolving.com/*
// ==/UserScript==


$(document).ready(function() {
    let dark = localStorage.getItem('dark') ? localStorage.getItem('dark') === 'true' : false;
    const styles = `.cmty-thankers {
  color: #BBB;
}

.cmty-post-wrapper,
.cmty-post-right,
.cmty-topic-source-display {
  background-color: #333;
  color: whitesmoke;
}

.cmty-post-left a:not(.cmty-forum-mod a):not(.cmty-forum-admin a),
.cmty-post-username {
  color: whitesmoke;
}

.cmty-post-target-note {
  background-color: #333;
}

.cmty-post-middle {
  border-color: #444;
}

.cmty-post-wrapper .cmty-avatar {
  box-shadow: 0px 0px 10px 2px lightgrey;
}

code.language-none {
  color: #333;
}

pre:not(.pywindow .CodeMirror) {
  filter: invert(1) hue-rotate(175deg);
  /* Credits to @happycupcake for hue-rotate */
  color: black;
}

.pywindow .CodeMirror {
  border-color: #333;
}

.CodeMirror-activeline-background, .CodeMirror {
  background-color: #111;
}

.CodeMirror-gutters {
  border-right: 1px solid #333;
  background-color: transparent;
}

.CodeMirror div.CodeMirror-cursor {
  border-color: white;
}

/* Quotes + hides */
.bbcode_quote, .bbcode_quote .bbcode_quote_head, .bbcode_quote:after,
.cmty-hide-content, .cmty-hide-content:after,
.bbcode_quote .bbcode_quote .bbcode_quote, .bbcode_quote .bbcode_quote .bbcode_quote .bbcode_quote_head, .bbcode_quote .bbcode_quote .bbcode_quote:after,
.cmty-hide-content .cmty-hide-content .cmty-hide-content, .cmty-hide-content .cmty-hide-content .cmty-hide-content:after {
  background-color: #222;
  color: white;
}

.bbcode_quote .bbcode_quote, .bbcode_quote .bbcode_quote .bbcode_quote_head, .bbcode_quote .bbcode_quote:after,
.cmty-hide-content .cmty-hide-content, .cmty-hide-content .cmty-hide-content:after {
  background-color: #333;
  color: white;
}

.bbcode_quote:before,
.cmty-hide-content:before {
  filter: invert(0.9);
}

.cmty-topic-mini-reply {
  background-color: #333;
}

.cmty-poll-display {
  background-color: #222;
}

#main-menubar,
#header {
  color: white;
  background-color: #222;
}

.menubar-label-link {
  color: #009fad !important;
  /* Need this too */
}

.sharedsite-wrapper {
  background-color: #1f1f1f;
}

.sharedsite-wrapper .site-link {
  color: white;
}

.sharedsite-links .site-link.selected {
  background-color: #444;
}

#header:not(.shrunken-header) .dropdown-visible.site .site-link,
.site-dropdown-wrapper {
  background-color: #555 !important;
  /* Need !important */
}

.login-dropdown-divider {
  display: none;
}

.login-dropdown-content {
  background-color: #555;
  border-top: 2px solid #009fad;
}

.alc-panel-headed .alc--main {
  background-color: #444;
}

.alc-problem-input-bar {
  background-color: #666;
}

.alc-problem-input-main .alc--main-input {
  background-color: gray;
  color: whitesmoke;
}

.alc-problem-input-main .alc--main-input::placeholder {
  color: whitesmoke;
}

.alc-panel-headed {
  box-shadow: none;
}

.grey-panel .content {
  background-color: #444;
}

.aops-panel {
  background-color: #333;
}

.alc-get-started, .alc-intro-bullet-head,
.alc-astat-bonus-info .alc--name,
.alc-astat-info .alc--name,
.alc-rating-info .alc--name,
.alc-profile-summary .alc--record .alc--label,
.alc-problem-wheel .alc--total,
.alc-profile-quests-details span.alc--label,
.alc-profile-quests-details span.alc--value,
.alc-profile-quests-details .alc--description {
  color: #009fad;
}

.alc-xp-display {
  background-color: #2d2d2d;
}

.cmty-user-profile-main.cmty-index-card,
.cmty-page-my-aops .cmty-category-cell-heading.cmty-small-category-heading,
.cmty-page-my-aops .cmty-folder-top,
.cmty-index-card {
  background-color: #333;
}

.cmty-my-aops-top-info,
.cmty-folder-top .cmty-small-category-heading.cmty-category-cell-heading,
.cmty-view-folder-top .cmty-small-category-heading.cmty-category-cell-heading {
  background-color: transparent;
}

.cmty-small-category-subheader {
  color: #ddd;
}

.cmty-friend-box {
  background-color: #222;
}

.cmty-friend-box:hover {
  background-color: #444;
}

.cmty-friend-message {
  color: #fff;
}

.cmty-user-profile-friends .aops-scroll-inner {
  border: solid #444;
}

.cmty-contenteditable-with-placeholder:empty {
  border-color: #222;
}

#variant1-container .intro-video {
  background-color: transparent;
}

#variant1-container .math-category-section {
  filter: invert(1) hue-rotate(180deg);
}

#variant1-container .our-books {
  background: transparent;
}

#variant1-container .blue-text {
  color: #009fad;
}

#variant1-container .new-yorker-img {
  filter: invert(1);
}

#variant1-container.single-cta .online-callout {
  background-color: #1f1f1f;
}

#variant1-container .callout-text {
  background-color: transparent;
}

#variant1-container .staff-slider-content {
  background-color: transparent;
}

#variant1-container .stacked-cards li {
  background-color: #222;
}

.styles_appWrapper__CL4T8 {
  background-image: url(https://nhv24.github.io/aops-userscripts/assets/pattern-online-gray.png);
}

/* Modals */
/* This is basically the body, but not on blogs */
.production {
  color: white;
  background-color: #222;
  background-image: none;
}

#grid {
  color: white;
}

.grid-tab-panel {
  background-color: #333;
}

/* Latex */
.latex,
.latexcenter {
  filter: invert(1);
}

.asy-image {
  /* test */
  background-color: white;
  border-radius: 4px;
  padding: 10px;
}

/* Modals */
.aops-modal-frame,
#login-form {
  background-color: #222;
}

.aops-close-x {
  color: skyblue;
}

#login-form .info,
#login-form-links {
  background-color: #222;
  border-color: #222;
}

#flyout {
  background-color: #444;
}

.school .tab-contents, .store .tab-contents {
  background-color: #333;
}

h3,
.sch-carousel-outer .arrow-icon,
h1 {
  color: #009fad;
}

.school-quote {
  background-color: #1d1d1d;
}

.instructor-row,
div.testimonial,
.faq-panel .grey-panel div.content,
.woot-testimonial {
  background-color: #222;
}

.instructor-row:hover {
  background: #2e2e2e;
}

div.testimonial a {
  color: #ddd;
}

/* Dark mode for AoPS, WIP */
`;
    $('.login-dropdown-content').append('<span id="toggle-mode" class="menu-item">Dark/Light</span>');
    if (dark) {
        $('head').append(`<style id="dark-styles">` + styles + `</style>`);
    }
    $('.login-dropdown-content').click(() => {
        if (dark) {
            dark = false;
            $("#dark-styles").remove();
            localStorage.setItem('dark', 'false');
        }
        else {
            dark = true;
            $('head').append(`<style id="dark-styles">` + styles + `</style>`);
            localStorage.setItem('dark', 'true');
        }
    });
});
