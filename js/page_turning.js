console.log('page_turning');


var css_change = function(href){
    style_sheet.href = 'css/' + href +'_html.css';
};


var page_turn = function(href){
    var page = href + "_html";
    console.log('href: '+href);
   css_change(href);
    body.innerHTML = eval(page);
    function_addEventListeners(href);
    window["current_page"]=href;
};

var all_loaded = function(){
    //if (window.localStorage.hasOwnProperty('username')) {
    //    if (obj_app.user_database_json.hasOwnProperty(window.localStorage.username)) {
    //        body.innerHTML = verification_html;
    //    }
    //}
};




///Loades next script///
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}