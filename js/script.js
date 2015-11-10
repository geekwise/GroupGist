// js files to include and in which order//
head = document.getElementsByTagName('head')[0];
var style_sheet = document.getElementsByTagName("link")[1];


pages_array = [
    'login',
    'sign_up',
    'verification',
    'profile'
];

debug_mode =1;
document.addEventListener('keydown',function(event){

    if (debug_mode === 1) {
        if (event.keyCode == 39) {
            if (pages_array.indexOf(current_page)< pages_array.length){
                current_page = pages_array[pages_array.indexOf(current_page)+1];
            }else{
                current_page = pages_array[0];
            }
            page_turn(current_page);
        }
    }

});


/**
 * js_ files is an array of js script to be loaded in sequence
 * */
js_files = [
    'github_api.js',
    'mandrill_api.js',
    'markup.js',
    'page_turning.js',
    'function_listeners.js',
    'object_constructors.js',
    'run_script.js',
    'email_setup.js',
    'dom_content_loaded.js'
];


/**
 *
 * script is the renamed variable to new script after each is loaded
 * iscript is the number index of js_files which is the script that is currently being loaded
 */
var script;
iscript = 0;


/**
 * if checks to see if the script is fully loaded before moving on to the next
 */
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}
