console.log('listen login');

var listen_login = function(){
  
  login_button = document.getElementsByTagName('button')[0];
  login_username = document.getElementById('crud_input_username');
  login_password = document.getElementById('crud_input_password');
  signup_link = document.getElementById('sign_up_link');
  
  
  
    login_button.addEventListener('click', function () {
      
        obj_app.username = login_username.value.toLowerCase();
        obj_app.password = login_password.value;
      
        if (obj_app.user_database_json.hasOwnProperty(obj_app.username)) {
          
            if (obj_app.user_database_json[obj_app.username].password === login_password.value) {
              
                console.log('successfully logged in');
                window.localStorage.username = [obj_app.username];
                page_turn(profile_url);

            }else{console.log('username does not match password')}
        }else{console.log('username not found. Sign Up?')}

        /**link to profile page not to verification after login*/
        /** needs to go to verification incase they have signup and not verified*/


    });
    signup_link.addEventListener('click', function () {

        page_turn(sign_up_url);
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