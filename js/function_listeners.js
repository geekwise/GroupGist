/**
* this function runs each page of each html and is currently not working properly 
*/
console.log('function_listeners');




var function_addEventListeners = function(href) {

    if (href === login_url) {
        listen_login();
    }

    if (href === sign_up_url) {
        listen_sign_up();
    }

    if (href === verification_url) {
        listen_verification();
    }

    if (href === profile_url) {
        listen_profile();
    }

    if (href === search_url) {
        listen_search();
    }
};



    /**Loads next script*/
    if (iscript < js_files.length) {
        script = document.createElement('script');
        script.src = 'js/' + js_files[iscript];
        head.appendChild(script);
        iscript++;
    }