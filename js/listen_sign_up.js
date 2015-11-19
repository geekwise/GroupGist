var listen_sign_up = function(){
    crud_submit_sign_up.addEventListener('click', function () {
      
<<<<<<< HEAD
        obj_app.username = crud_input_username.value.toLowerCase();
=======
        obj_app.username = crud_input_username.value;
>>>>>>> master
        obj_app.email = crud_input_email.value;
        obj_app.password = crud_input_password.value;
        obj_app.password_confirm = crud_input_password_confirm.value;
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
          
<<<<<<< HEAD
            console.log('username already in use');
        } else {
            if (obj_app.email_database_json.hasOwnProperty(crud_input_email.value)) {
              
                console.log('email is already in use');
=======
            alert('username already in use');
        } else {
            if (obj_app.email_database_json.hasOwnProperty(crud_input_email.value)) {
              
                alert('email is already in use');
>>>>>>> master
            } else {
                if (crud_input_password.value != '' && crud_input_password.value === crud_input_password_confirm.value) {
                  
                    obj_app.email_client.method_params();
<<<<<<< HEAD
                    confirm('Congradulations! An email has been sent to you. Please verify email.');
                    window.localStorage.username = [obj_app.username];
                    page_turn(verification_url)
                }else{ console.log('invalid password or mismatch password')}
=======
                    alert('Congradulations! An email has been sent to you. Please verify email.');
                    window.localStorage.username = [obj_app.username];
                    page_turn("verification")
                }else{ alert('invalid password or mismatch password')}
>>>>>>> master

            }
        }
    });
    login_link.addEventListener('click', function () {
<<<<<<< HEAD
        page_turn(login_url);
=======
        page_turn("login");
>>>>>>> master
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