
console.log('function_listeners');

var function_addEventListeners = function(href){


/** EVENT LISTENS FOR LOGIN.HTML*/
    if (href === 'login'){
        crud_submit_login.addEventListener('click',function(){
            obj_app.username= crud_input_username.value;
            obj_app.password= crud_input_password.value;
            if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)){
                if(obj_app.user_database_json[crud_input_username.value].password === crud_input_password.value){
                    alert('successfully logged in');
                    window.localStorage.username = [obj_app.username];
                    page_turn('profile');
                }else{alert('username does not match password')}
            }else{alert('username not found. Sign Up?')}
        });
        sign_up_link.addEventListener('click',function(){

            page_turn('sign_up');
        });
        console.log('login_listeners')
    }
/** EVENT LISTENS FOR LOGIN.HTML*/



/** EVENT LISTENS FOR SIGN_UP.HTML*/
    if (href === 'sign_up'){

        crud_submit_sign_up.addEventListener('click',function(){
            obj_app.username= crud_input_username.value;
            obj_app.email=crud_input_email.value;
            obj_app.password= crud_input_password.value;
            obj_app.password_confirm = crud_input_password_confirm.value;
            if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)){
                alert('username already in use');
            }else{
                if (obj_app.email_database_json.hasOwnProperty(crud_input_email.value)){
                    alert('email is already in use');
                }else{
                    if (crud_input_password.value != '' && crud_input_password.value === crud_input_password_confirm.value){
                        obj_app.email_client.method_params();
                        alert('Congradulations! An email has been sent to you. Please verify email.');
                        window.localStorage.username = [obj_app.username];
                        body.innerHTML = verification_html;
                    }else{ alert('invalid password or mismatch password')}
                }
            }
        });
        login_link.addEventListener('click',function(){
            page_turn('login');
        });
        console.log('signup listeners');
    }
/** EVENT LISTENS FOR SIGN_UP.HTML*/



/**EVENT LISTENS FOR VERIFICATION.HTML*/
if (href === 'verification'){
    if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)){
        if ( !obj_app.user_database_json[crud_input_username.value].hasOwnProperty('random_code')){
            alert('successfully verified');
        }else{
        }
    }
    crud_submit_verification.addEventListener('click',function(){
        if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)){
            if ( obj_app.user_database_json[crud_input_username.value].random_code === crud_input_code.value){
                alert('successfully verified');
            }
        }else{alert('user not found')}
    });
    login_link.addEventListener('click',function(){
        page_turn('login');
    });
    console.log('verification listeners');
}
    /**
     * for search by username at this time will work with username in an input box but having trouble displaying key
     * */
    if (href === 'search'){
            function callbacks(error, response){
                if (error) {
                    console.log(error);
                } else if (response) {
                    console.log(response);
                }
            }
        crud_submit_login.addEventListener('click',function(){
             if (crud_input_username.value === '') {
                    alert('need a username to search for');
                 return;
             }else {
                 var user_name = crud_input_username.value;
                 var search_user = obj_app.method_getuser(user_name, callbacks());
                 var user_information = search_user.show(user_name,function(err,res){console.log(info = res);});
                    info.avatar_url;
             }

        });


    }


body;

    if (href === 'profile'){
        submit_search.addEventListener('click',function(){
            var content_add = function(from,to){
              xmler = new XMLHttpRequest();
                xmler.open("GET",from,true);
                xmler.setRequestHeader('Access-Control-Allow-Headers', '*');
                xmler.setRequestHeader('Content-type', 'application/ecmascript');
                xmler.setRequestHeader('Access-Control-Allow-Origin', '*');
                xmler.send();
                [to].innerHTML += xmler.responseText

            };
            access_array=Object.keys(obj_app.access_database_json[localStorage.username]);
            for (var i = 0;i<access_array.length;i++){
                if (obj_app.access_database_json[localStorage.username][access_array[i]].hasOwnProperty(gist_search.value)){

                    var o =  document.createElement('div');

                    console.log(obj_app.access_database_json[localStorage.username][access_array[i]]['url']);

                    o.innerHTML = obj_app.access_database_json[localStorage.username][access_array[i]]['url'] + "<br>";
                    //content_add(obj_app.access_database_json[localStorage.username][access_array[i]]['url'],o);
                    document.body.appendChild(o);
                    o.style.height = '40px';
                    o.style.display = 'inline-block';
                    o.style.backgroundColor = 'gray';

                }

            }
        });

    }

};







/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}
