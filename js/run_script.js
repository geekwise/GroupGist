/** last script loaded before dom content loaded and after * * all declarative js
* ASYNC SCRIPT
*/


console.log('run_script');
var obj_app;

obj_app = new Crud_objects();

obj_app.token = atob("YThlOTk0MTkzMzlhMmNmNmM4YTQ1ODE2ZmY2OTE2OGY5NDE0NzBhYw==");
obj_app.auth_type = 'token';

obj_app.username = 'geekwisevinson';

obj_app.github = obj_app.method_github();
obj_app.user = obj_app.method_getuser();
obj_app.gist_list = obj_app.method_usergists();
/**
 * obj_app_2nd

 * */
//window.setTimeout(object_2(), 3000);
//function object_2() {
//
//    obj_app_2nd = new Crud_objects();
//
//    obj_app_2nd.token = atob('MDNkOWM0MGM5NzdlNDdjMWJkNzY5NDUyYjFhMGNiNzM5MDAzYzYwMA==');
//    obj_app_2nd.auth_type = 'token';
//
//    obj_app_2nd.username = 'geekwise';
//
//    obj_app_2nd.github = obj_app_2nd.method_github();
//    obj_app_2nd.user = obj_app_2nd.method_getuser();
//
//    //obj_app_2nd.user_repos = obj_app_2nd.method_user_repos();
//    //
//    //obj_app_2nd.gist_list = obj_app_2nd.method_usergists();
//
//}
/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}