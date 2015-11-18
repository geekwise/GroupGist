/** last script loaded before dom content loaded and after * * all declarative js
* ASYNC SCRIPT
*/


console.log('run_script');
var obj_app;
obj_app = new Crud_objects();
obj_app.token = atob("ZDdkNjFiYmExMzJlNjRjNzk0MTJlMjZkMDA4MmFkZmU1MWY4NWVkOA==");
obj_app.auth_type = 'token';
/** 
* updated and changed the token to connect to spartanadvent@github
* need to create new data base in spartanadvent github
*/
obj_app.username = 'spartanadvent';
obj_app.github = obj_app.method_github();
obj_app.user = obj_app.method_getuser();
obj_app.gist_list = obj_app.method_usergists();




/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}