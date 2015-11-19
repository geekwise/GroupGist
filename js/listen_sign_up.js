var listen_sign_up = function(){
    crud_submit_sign_up.addEventListener('click', function () {
      
        obj_app.username = crud_input_username.value.toLowerCase();
        obj_app.email = crud_input_email.value;
        obj_app.password = crud_input_password.value;
        obj_app.password_confirm = crud_input_password_confirm.value;
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
          
            console.log('username already in use');
        } else {
            if (obj_app.email_database_json.hasOwnProperty(crud_input_email.value)) {
              
                console.log('email is already in use');
            } else {
                if (crud_input_password.value != '' && crud_input_password.value === crud_input_password_confirm.value) {
                  
                    obj_app.email_client.method_params();
                    confirm('Congradulations! An email has been sent to you. Please verify email.');
                    window.localStorage.username = [obj_app.username];
                    page_turn(verification_url)
                }else{ console.log('invalid password or mismatch password')}

            }
        }
    });
    login_link.addEventListener('click', function () {
        page_turn(login_url);
    });
    console.log('signup listeners');
};


/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}