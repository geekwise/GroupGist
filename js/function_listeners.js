/**
* this function runs each page of each html and is currently not working properly 
*/
console.log('function_listeners');




var function_addEventListeners = function(href) {

    if (href === 'login') {
        listen_login();
    }

    if (href === 'sign_up') {
        listen_sign_up();
    }

    if (href === "verification") {
        listen_verification();
    }

    if (href === 'profile') {
        listen_profile();
    }

    if (href === 'search') {
        listen_search();
    }
};



    /**Loads next script*/
    if (iscript < js_files.length) {
        script = document.createElement('script');
        script.src = 'js/' + js_files[iscript];
        head.appendChild(script);
        iscript++;
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    }
>>>>>>> master
=======
    }
>>>>>>> dev
