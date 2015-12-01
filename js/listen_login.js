console.log('listen login');

if (window.hasOwnProperty('code')){alert('already coded')}else {
    if (window.location.href.indexOf('code=') > -1) {
        index_of_code = window.location.href.indexOf('code=') + 5;
        code = window.location.href.substr(index_of_code, window.location.href.length);
        code_url = 'https://github.com/login/oauth/access_token?client_id=bc41b8eaa8fcd0f80f9a&client_secret=' + atob("YmE1NmU3M2ZkOTFhMjVmOWQ3ZjU5ZWQwMTE5ZjBlMmEwZGRlMTRhZQ==") + '&code=' + code + '&redirect_uri=http://www.groupgist.com/'
        function createCORSRequest(method, url) {
            xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {
                xhr.open(method, url, true);
            } else if (typeof XDomainRequest != "undefined") {
                xhr = new XDomainRequest();
                xhr.open(method, url);
            } else {
                xhr = null;
            }
            return xhr;
        }
        function getTitle(text) {
            return text.match('<title>(.*)?</title>')[1];
        }
        function makeCorsRequest(method) {
            url = code_url;
            xhr = createCORSRequest(method, url);
            if (!xhr) {
                alert('CORS not supported');
                return;
            }
            xhr.onload = function() {
                text = xhr.responseText;
                title = getTitle(text);
                alert('Response from CORS request to ' + url + ': ' + title);
            };
            xhr.onerror = function() {
                alert('Woops, there was an error making the request.');
            };
            xhr.setRequestHeader("Access-Control-Allow-Origin", "http://www.groupgist.com");
            xhr.send();
        }
        method = "OPTIONS";
        method2= "GET";
        createCORSRequest(method2, code_url);
        makeCorsRequest(method);
    }
}

function_json_update = function(var_json){
    obj_app[var_json+'_database_object_read'].files[var_json+'_database.JSON'].content = JSON.stringify(obj_app[var_json+'_database_json']);    obj_app[var_json+'_database_object_unread'].update(obj_app[var_json+'_database_object_read'],function(){alert(var_json +' updated');});
}
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
                page_turn('profile');

            }else{console.log('username does not match password')}
        }else{console.log('username not found. Sign Up?')}

        /**link to profile page not to verification after login*/
        /** needs to go to verification incase they have signup and not verified*/


    });
    signup_link.addEventListener('click', function () {

        page_turn('sign_up');
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

listen_login();