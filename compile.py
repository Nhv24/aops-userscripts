from os import system
import pyperclip
import requests

minify = True
system("sass --no-source-map main.scss:main.css")

with open("main.css") as file:
    contents = file.read()
    if minify:
        contents = requests.post("http://cssminifier.com/raw", data = {"input": contents}).text
        with open("main.min.css", "w") as minified:
            minified.write(contents)

    text = f"""// ==UserScript==
// @name         AoPS Dark
// @match        https://artofproblemsolving.com/*
// ==/UserScript==


$(document).ready(function() {{
    let dark = localStorage.getItem('dark') ? localStorage.getItem('dark') === 'true' : false;
    const styles = `{contents}`;
    $('.login-dropdown-content').append('<span id="toggle-mode" class="menu-item">Dark/Light</span>');
    if (dark) {{
        $('head').append(`<style id="dark-styles">` + styles + `</style>`);
    }}
    $('.login-dropdown-content #toggle-mode').click(() => {{
        if (dark) {{
            dark = false;
            $("#dark-styles").remove();
            localStorage.setItem('dark', 'false');
        }}
        else {{
            dark = true;
            $('head').append(`<style id="dark-styles">` + styles + `</style>`);
            localStorage.setItem('dark', 'true');
        }}
    }});
}});
"""
    pyperclip.copy(text)
    with open("aops-dark.user.js", "w") as f:
        f.write(text)
print("Done")