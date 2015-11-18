var listen_verification = function() {
<<<<<<< HEAD
    if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
        if (!obj_app.user_database_json[crud_input_username.value].hasOwnProperty('random_code')) {
=======
  
    if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
      
        if (!obj_app.user_database_json[crud_input_username.value].hasOwnProperty('random_code')) {
          
>>>>>>> dev
            alert('successfully verified');
        } else {
        }
    }
    crud_submit_verification.addEventListener('click', function () {
<<<<<<< HEAD
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
            if (obj_app.user_database_json[crud_input_username.value].random_code === crud_input_code.value) {
                alert('successfully verified');
                page_turn('profile');
=======
      
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
      
          if (obj_app.user_database_json[crud_input_username.value].random_code === crud_input_code.value) {
                alert('successfully verified');
                page_turn(profile);
>>>>>>> dev
            }
        } else {
            alert('user not found')
        }
    });
    login_link.addEventListener('click', function () {
<<<<<<< HEAD
        page_turn('login');
=======
        page_turn(login);
>>>>>>> dev
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