<<<<<<< HEAD
page_loader = new XMLHttpRequest();

=======
login_html = '' +
    '<header><img src="images/github_logo.png"> ' +
    '<h1>GroupGists</h1>' +
    '</header> ' +
    '<span>' +
    '<input id="crud_input_username" type="text"  placeholder="UserName" class="form_item"/> ' +
    '<input id="crud_input_password" type="password" placeholder="Password" class="form_item"/> ' +
    '<button id="crud_submit_login" class="form_item" type="submit">Submit</button>' +
    '<div><a href="#">Forgot password?</a><br>' +
    '<p>Not on GroupGists <a id="sign_up_link" href="#">Sign up now</a></p></div>' +
    '</span>';

sign_up_html =''+
    '<header><div><img src="images/github_logo.png"> '+
    '<h1>SIGN UP FORM</h1></div>'+
'</header>'+
'<span>'+
'<h3 class="form_item">Sign Up:</h3>'+
'<input id="crud_input_username" class="form_item" type="text"  placeholder="UserName"/>'+
    '<span id="alert_username" role="alert" class="alerts alert_hidden " > UserName is Already in use</span>'+
'<input id="crud_input_email" class="form_item" type="email"  placeholder="Email"/>'+
    '<span id="alert_email" role="alert" class="alerts alert_hidden " > Email is Already in use</span>'+
'<input id="crud_input_password" class="form_item" type="password"  placeholder="Password"/>'+
    '<span id="alert_password" role="alert" class="alerts alert_hidden " > Password is Invalid</span>'+
'<input id="crud_input_password_confirm" class="form_item" type="password"  placeholder="Confirm Password"/>'+
    '<span id="alert_password_mismatch" role="alert" class="alerts alert_hidden " > Passwords do not match</span>'+
'<span id="alert_blank" role="alert" class="alerts alert_hidden " > Required fields can not be blank</span>'+
'<button  id="crud_submit_sign_up" class="form_item" type="button">Sign Up</button>'+
'<p>already on GITCRUD <a id="login_link" href="#">Login now</a></p>'+
'</span>';
>>>>>>> dev




<<<<<<< HEAD
=======
profile_html = ''+
    '<header><div>'+
    '<img src="image/git_logo.png"></div>'+
    '<h1>GroupGists</h1>'+
    '</header>'+
    '<span>'+
    '<h3 class="form_item">PROFILE:</h3>'+
    '<input id="crud_input_username" type="text"  placeholder="UserName" class="form_item"/>'+
    '<input id="crud_input_code" type="text" placeholder="Code" class="form_item"/>'+
    '<button id="crud_submit_code" class="form_item" type="submit">Submit</button>'+
    '<a href="#">Resend Code?</a>'+
    '<p>not on GITCRUD <a id="sign_up_link" href"#">Sign up now</a></p>'+
    '</span>';
>>>>>>> dev

search_html = ''+
    '<header><div>'+
    '<img src="image/git_logo.png"></div>'+
    '<h1>GroupGists</h1>'+
    '</header>'+
    '<span>'+
    '<h3 class="form_item">Search:</h3>'+
    '<input id="search_user_email" type="text"  placeholder="User Email" class="form_item"/>'+
    '<input id="search_user_name" type="text" placeholder="UserName" class="form_item"/>'+
    '<button id="search_github" class="form_item" type="submit">Search</button>';

<<<<<<< HEAD
var xhttp = new XMLHttpRequest();
xhttp.open('GET','../login.html',true);
xhttp.send(null);

xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            login_html = page_loader.responseText;
            page_turn('login');
        }
};




///Loads next script///
=======
/**Loades next script*/
>>>>>>> dev
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}