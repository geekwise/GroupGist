console.log('listen login');
var listen_login = function(){
    crud_submit_login.addEventListener('click', function () {
        obj_app.username = crud_input_username.value.toLowerCase();
        obj_app.password = crud_input_password.value;
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
            if (obj_app.user_database_json[crud_input_username.value].password === crud_input_password.value) {
                alert('successfully logged in');
                window.localStorage.username = [obj_app.username];
                page_turn('profile');

            }else{alert('username does not match password')}
        }else{alert('username not found. Sign Up?')}

        /**link to profile page not to verification after login*/
        /** needs to go to verification incase they have signup and not verified*/


    });
    sign_up_link.addEventListener('click', function () {

        page_turn('sign_up');
    });
    console.log('login_listeners')
};

/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}