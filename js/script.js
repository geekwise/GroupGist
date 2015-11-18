/** js files to include and in which order*/
head = document.getElementsByTagName('head')[0];
var style_sheet = document.getElementsByTagName("link")[1];


/**
 * js_ files is an array of js script to be loaded in sequence
 * */
js_files = [
    'github_api.js',
<<<<<<< HEAD
    'mandrill_api.js',
    'listen_login.js',
    'listen_sign_up.js',
    'listen_verification.js',
    'listen_profile.js',
    'listen_search.js',
    'markup.js',
=======
    'mandrill_api.js',    
>>>>>>> dev
    'page_turning.js',
    'object_constructors.js',
    'run_script.js',    
    'function_listeners.js',    
    'email_setup.js',
    'dom_content_loaded.js',    
    'listen_login.js',
    'listen_sign_up.js',
    'listen_verification.js',
    'listen_profile.js',
    'listen_search.js',
    'display_detect.js'
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
