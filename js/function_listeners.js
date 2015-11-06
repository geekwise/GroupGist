
console.log('function_listeners');

var function_addEventListeners = function(href){


////// EVENT LISTENS FOR LOGIN.HTML//////////////////
    if (href === 'login'){
        crud_submit_login.addEventListener('click',function(){
            obj_app.username= crud_input_username.value;
            obj_app.password= crud_input_password.value;
            if (obj_app.user_database_json.hasOwnProperty(crud_input_username.value)){
                if(obj_app.user_database_json[crud_input_username.value].password === crud_input_password.value){
                    alert('successfully logged in');
                    window.localStorage.username = [obj_app.username];
                }else{alert('username does not match password')}
            }else{alert('username not found. Sign Up?')}
        });
        sign_up_link.addEventListener('click',function(){

            page_turn('sign_up');
        });
        console.log('login_listeners')
    }
////// EVENT LISTENS FOR LOGIN.HTML//////////////////



////// EVENT LISTENS FOR SIGN_UP.HTML//////////////////
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
////// EVENT LISTENS FOR SIGN_UP.HTML//////////////////



////// EVENT LISTENS FOR VERIFICATION.HTML//////////////////
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
};




///Loades next script///
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}
