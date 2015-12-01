var listen_verification = function() {

    if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {

        if (!obj_app.user_database_json[crud_input_username.value].hasOwnProperty('random_code')) {

            console.log('successfully verified');
        } else {
        }
    }
    crud_submit_verification.addEventListener('click', function () {

        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {

            if (obj_app.user_database_json[crud_input_username.value].random_code === crud_input_code.value) {
                console.log('successfully verified');
                page_turn("profile");
            }
        } else {
            console.log('user not found')
        }
    });
    login_link.addEventListener('click', function () {
        page_turn("login");
    });
    console.log('verification listeners');
};


/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}