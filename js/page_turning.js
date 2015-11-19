console.log('page_turning');



var page_turn = function(href){
    style_sheet.href = 'css/'+href+'.css';
    body.innerHTML = obj_app[href + "_html_database_json"];
    function_addEventListeners(href);
};


var all_loaded = function(){
    if (window.localStorage.hasOwnProperty('username')) {
<<<<<<< HEAD
        if (obj_app.user_database_json.hasOwnProperty(window.localStorage.username)) {
           // body.innerHTML = verification;
=======
        if (obj_app.hasOwnProperty('user_database_json')){
            if (obj_app.user_database_json.hasOwnProperty(window.localStorage.username)) {
               // body.innerHTML = verification;
            }
>>>>>>> master
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