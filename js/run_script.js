/** last script loaded before dom content loaded and after * * all declarative js
* ASYNC SCRIPT
*/


console.log('run_script');
var obj_app;
obj_app = new Crud_objects();
obj_app.token = atob("MjMzZjYyNTIyYmMwZjY3NDVmOWIxZGY4Zjg2YWJhYzQ1MjNhNDBlMQ==");
obj_app.auth_type = 'token';
obj_app.username = 'geekwise';
obj_app.github = obj_app.method_github();
obj_app.user = obj_app.method_getuser();
obj_app.gist_list = obj_app.method_usergists();




/**Loades next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}