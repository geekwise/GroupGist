// last script loaded before dom content loaded and after all declarative js/////
/////////////////////////////ASYNC SCRIPT////////////////////////////////////////


console.log('run_script');
var obj_app;
obj_app = new Crud_objects();
obj_app.token = atob("YThlOTk0MTkzMzlhMmNmNmM4YTQ1ODE2ZmY2OTE2OGY5NDE0NzBhYw==");
obj_app.auth_type = 'token';
obj_app.username = 'geekwisevinson';
obj_app.github = obj_app.method_github();
obj_app.user = obj_app.method_getuser();
obj_app.gist_list = obj_app.method_usergists();




///Loades next script///
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}

