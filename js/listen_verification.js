var listen_verification = function() {
  
    if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
      
        if (!obj_app.user_database_json[crud_input_username.value].hasOwnProperty('random_code')) {
          
<<<<<<< HEAD
<<<<<<< HEAD
            console.log('successfully verified');
=======
            alert('successfully verified');
>>>>>>> master
=======
            alert('successfully verified');
>>>>>>> dev
        } else {
        }
    }
    crud_submit_verification.addEventListener('click', function () {
      
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
      
          if (obj_app.user_database_json[crud_input_username.value].random_code === crud_input_code.value) {
                alert('successfully verified');
                page_turn("profile");
            }
        } else {
            alert('user not found')
        }
    });
    login_link.addEventListener('click', function () {
<<<<<<< HEAD
<<<<<<< HEAD
        page_turn(login_url);
=======
        page_turn("login");
>>>>>>> master
=======
        page_turn("login");
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