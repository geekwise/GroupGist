
var listen_search =function() {
    search_github_button.addEventListener('click', function () {
<<<<<<< HEAD
=======
      
>>>>>>> dev
        var content_add = function (from, to) {
            xmler = new XMLHttpRequest();
            xmler.open("GET", from, true);
            xmler.setRequestHeader('Access-Control-Allow-Headers', '*');
            xmler.setRequestHeader('Content-type', 'application/ecmascript');
            xmler.setRequestHeader('Access-Control-Allow-Origin', '*');
            xmler.send();
            [to].innerHTML += xmler.responseText
        };

        access_array = Object.keys(obj_app.access_database_json[localStorage.username]);
<<<<<<< HEAD
        for (var i = 0; i < access_array.length; i++) {
            if (obj_app.access_database_json[localStorage.username][access_array[i]].hasOwnProperty(gist_search.value)) {
                var o = document.createElement('div');
                console.log(obj_app.access_database_json[localStorage.username][access_array[i]]['url']);
=======
      
        for (var i = 0; i < access_array.length; i++) {
      
          if (obj_app.access_database_json[localStorage.username][access_array[i]].hasOwnProperty(gist_search.value)) {
          
            var o = document.createElement('div');
            
            console.log(obj_app.access_database_json[localStorage.username][access_array[i]]['url']);
>>>>>>> dev
                o.innerHTML = obj_app.access_database_json[localStorage.username][access_array[i]]['url'] + "<br>";
                //content_add(obj_app.access_database_json[localStorage.username][access_array[i]]['url'],o);
                document.body.appendChild(o);
                o.style.height = '40px';
                o.style.display = 'inline-block';
                o.style.backgroundColor = 'gray';

            }
        }
    });

    crud_submit_login.addEventListener('click', function () {
<<<<<<< HEAD
        if (crud_input_username.value === '') {
=======
        
      if (crud_input_username.value === '') {
>>>>>>> dev
            alert('need a username to search for');

        } else {
            var user_name = crud_input_username.value;
            var search_user = obj_app.method_getuser(user_name, callbacks());
<<<<<<< HEAD
            var user_information = search_user.show(user_name, function (err, res) {
=======
      
          var user_information = search_user.show(user_name, function (err, res) {
>>>>>>> dev

                console.log(info = res);

            });
            var avatar_image = info.avatar_url;
            var image_tag = body.createElement('img');
<<<<<<< HEAD
            body.appendChild(image_tag);
            profile_picture = image_tag;
            image_tag.src = avatar_image;
=======
              body.appendChild(image_tag);
                profile_picture = image_tag;
                  image_tag.src = avatar_image;
>>>>>>> dev
        }

    });

    function callbacks(error, response) {
        if (error) {
            console.log(error);
        } else if (response) {
            console.log(response);
        }
    }
};

/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}
