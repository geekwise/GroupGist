console.log('page_turning');
/**
*  this function is how the app is loading the html for the app
*/


function load_html(theURL)
    {
        if (window.XMLHttpRequest)
        {
            xmlhttp=new XMLHttpRequest();
        }
        
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
            page = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", theURL, false);
        xmlhttp.send();
    }
/**
* these are the raw links for each individual html page
*/
login = 'https://gist.githubusercontent.com/spartanadvent/00801a7d3297b6acfe62/raw/2fc3ca2aff86878d9c9184c09685f7a8370165b7/login.html';
sign_up = 'https://gist.githubusercontent.com/spartanadvent/364cf5117cc10623bc14/raw/c3f90412127604366617507436542cfec8cdaee0/sign_up.html';
verification = 'https://gist.githubusercontent.com/spartanadvent/ac8571dd78f6a3d5ec79/raw/bd6f526aca74ca24f34df5ed88d8699cdfe8ba4e/verification.html';
profile = 'https://gist.githubusercontent.com/spartanadvent/cf287f1905152cbd5a33/raw/e20db2565ab0cfb7ada026f29638ac966d7e1aef/profile.html';
search = 'https://gist.githubusercontent.com/spartanadvent/fdf6a598c5e536b49b28/raw/4a8185cb99a9e650c58ada7bef337fea4c2365fb/search.html';

/**
* this loads the page to the main html 
*/
var page_turn = function(href){
   load_html(href);
   
    body.innerHTML = page;
    function_addEventListeners(href);
};
/**
*   
*/

var all_loaded = function(){
    if (window.localStorage.hasOwnProperty('username')) {
        if (obj_app.user_database_json.hasOwnProperty(window.localStorage.username)) {
            body.innerHTML = verification;
        }
    }
};


/**
*  Loades next script
*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}