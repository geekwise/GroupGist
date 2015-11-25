console.log('page_turning');



var page_turn = function(href){

    style_sheet.innerHTML = obj_app[href +"_css_database_json"];
    body.innerHTML = obj_app[href + "_html_database_json"];
    function_addEventListeners(href);
    console.log(obj_app[href + '_listen_database_json']);
    eval(obj_app[href + '_listen_database_json']);
};


var all_loaded = function(){
    if (window.localStorage.hasOwnProperty('username')) {
        if (obj_app.hasOwnProperty('user_database_json')){
            if (obj_app.user_database_json.hasOwnProperty(window.localStorage.username)) {
               // body.innerHTML = verification;
            }
        }
    }
};


/**
*  Loads next script
*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}