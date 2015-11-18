console.log('listen login');
<<<<<<< HEAD
var listen_login = function(){
    crud_submit_login.addEventListener('click', function () {
        obj_app.username = crud_input_username.value.toLowerCase();
        obj_app.password = crud_input_password.value;
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)) {
            if (obj_app.user_database_json[crud_input_username.value].password === crud_input_password.value) {
                alert('successfully logged in');
                window.localStorage.username = [obj_app.username];
                page_turn('profile');
=======
page_turn(login);
var listen_login = function(){
  
  login_button = document.getElementsByTagName('button')[0];
  login_username = document.getElementById('crud_input_username');
  login_password = document.getElementById('crud_input_password');
  signup_link = document.getElementById('sign_up_link');
  
  
  
    login_button.addEventListener('click', function () {
      
        obj_app.username = login_username.value.toLowerCase();
        obj_app.password = login_password.value;
      
        if (obj_app.user_database_json.hasOwnProperty(login_username.value)) {
          
            if (obj_app.user_database_json[login_username.value].password === login_password.value) {
              
                alert('successfully logged in');
                window.localStorage.username = [obj_app.username];
                page_turn(profile);
>>>>>>> dev

            }else{alert('username does not match password')}
        }else{alert('username not found. Sign Up?')}

        /**link to profile page not to verification after login*/
        /** needs to go to verification incase they have signup and not verified*/


    });
<<<<<<< HEAD
    sign_up_link.addEventListener('click', function () {

        page_turn('sign_up');
=======
    signup_link.addEventListener('click', function () {

        page_turn(sign_up);
>>>>>>> dev
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