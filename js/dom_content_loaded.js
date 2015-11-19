var body;
    body =document.getElementsByTagName('body')[0];


/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}

document.addEventListener('DOMContentLoaded',function(){
    page_turn(login_url);
});