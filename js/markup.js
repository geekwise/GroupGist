page_loader = new XMLHttpRequest();







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
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}