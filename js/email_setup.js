/** 
*  EMAIL SETUP CAN BE LOADED AFTER DOM_CONTENT TO SPEED LOAD
*/
console.log('email');
/**
* contact with mandrill api to send confirmation email with validation code
*/
obj_app.email_client = new mandrill.Mandrill(atob("ZUNKYmRjcUdoS2NwSlpRMlowZ3kzUQ=="));
/**
* method that generates the randomized validation code to verify client 
*/
obj_app.email_client.method_random_code = function(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        this["random_code"]=text;
};

/**
 * this will send the email to the client 
 */
obj_app.email_client.method_send_email = function(){
        console.log(this);
        this.messages.send(this.params, function(res) {
            console.log(res);
        }, function(err) {
            console.log(err);
        });
};
/**
 * this is what is sent in the email and the formatting which needs to be updated and changed
 */
obj_app.email_client.method_params =function(){
        console.log(this);
        obj_app.email_client.method_random_code();
        this.html_string =  "Code:"+ " " + this.random_code + '\ <br />'+"Congratulations  " + crud_input_username.value + "! please enter code to finished the sign up process. thank you and have a nice day!";
        this.params = {
            "message": {
                "from_email":"vinsonfernandez27@gmail.com",
                "to":[{"email":crud_input_email.value}],
                "subject": "Thanks for signing up",
                "html": obj_app.ema
            }
        };
  
  /**
  *   this double check information of email and user to database and verifies it is in the system as a user for our service
  */
        obj_app.email_database_json[crud_input_email.value]={};
        obj_app.email_database_json[crud_input_email.value].password = crud_input_password.value;
        obj_app.email_database_json[crud_input_email.value].username = crud_input_username.value;
        obj_app.user_database_json[crud_input_username.value]={};
        obj_app.user_database_json[crud_input_username.value].password = crud_input_password.value;
        obj_app.user_database_json[crud_input_username.value].email = crud_input_email.value;
        obj_app.user_database_json[crud_input_username.value].random_code = this.random_code;
        obj_app.email_database_object_read.files["email_database.JSON"].content = JSON.stringify(obj_app.email_database_json);
        obj_app.email_database_object_unread.update(obj_app.email_database_object_read,function(){
        });
        obj_app.user_database_object_read.files["user_database.JSON"].content = JSON.stringify(obj_app.user_database_json);
        obj_app.user_database_object_unread.update(obj_app.user_database_object_read,function(){
            console.log('updated gist');
            obj_app.email_client.method_send_email();
            console.log('sent email verification');
        });
};

/**
 * Loads next script
 */

if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}





