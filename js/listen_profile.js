load = 0;

oath.addEventListener('click',function(){
    window.location = 'https://github.com/login/oauth/authorize?client_id='+atob("YmM0MWI4ZWFhOGZjZDBmODBmOWE=")+'&redirect_uri=http://www.groupgist.com/'
});

/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}
load =1;