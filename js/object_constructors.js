console.log('object_constructors');
/**
*  Crud_objects is where we not only make the connection to the github api but it also access the databases 
*/
function Crud_objects() {

/**
*  Declaration to establish unique parts of the object enabling connectivity to the api.
*/
    this.username = '';
    this.password = '';
    this.token = '';
    this.auth_type = '';





/**
*CREATE CONNECTION TO GITHUB
*/
    this.method_github = function () {
        if (this.auth_type === "token") {
            return new Github({
                token: this.token,
                auth: "basic"
            });
        }else{
            return new Github({
                username: this.username,
                password: this.password,
                auth: "basic"
            });
        }
    };
/**
* CREATE CONNECTION TO GITHUB
*/


/**
* CREATE USER OBJECT that grabs the user information from github
*/
    this.method_getuser =function(){
        return this.github.getUser();
    };

/**
* CREATE USER OBJECT
*/


/**
*  CREATE USER GIST LIST - HAS CALLBACK SO SYNC CAN BE ISSUE [WARNING]
*/
    this.method_usergists=function() {
        window['usergist']= this;
        return this.user.userGists.bind(this)(this.username, function (err, res) {
            window['usergist'].gist_list =res;
            window['usergist'].callback_usergists();
        });
    };

/**
*  CREATE USER GIST LIST - HAS CALLBACK SO SYNC CAN BE ISSUE [WARNING]
*/
    

/**
*  CALLBACK FOR CREATE USER GIST LIST - THIS WILL RUN WHEN DATA IS RETURNED FOR EACH DATABASE 
*/

    this.callback_usergists= function(){

        this.method_getdatabase('user_database');
        this.method_getdatabase('email_database');
        this.method_getdatabase('groups_database');
        this.method_getdatabase('access_database');
        this.method_getdatabase('gist_database');

        this.method_getdatabase('login_html_database');
        this.method_getdatabase('sign_up_html_database');
        this.method_getdatabase('profile_html_database');
        this.method_getdatabase('search_html_database');
        this.method_getdatabase('email_verification_html_database');
        this.method_getdatabase('verification_html_database');


    };
/**
*  THIS GETS ALL DATABASES IN GIST LIST
*/
this.method_getdatabase=function(database){
    window['getdatabase']=this;

    for (var i = 0;i<this.gist_list.length;i++){
        var db = database;
        if (this.gist_list[i].description=== db){
            console.log(database);
            this[db + "_object_unread"] = this.github.getGist(this.gist_list[i].id);
        }
    }

    this[db +"_object_unread"].read(function(err,res){


        window['getdatabase'][db +"_object_read"] = res;// enables content to be readable
        if (database.indexOf("html") > -1){
            window['getdatabase'][db + "_json"] = window['getdatabase'][db + "_object_read"].files[db + ".txt"].content;
            if (database.indexOf('login')> -1){

                page_turn('login') ;
            }

        }else {
            window['getdatabase'][db + "_json"] = window['getdatabase'][db + "_object_read"].files[db + ".JSON"].content;//gets content as string

            window['getdatabase'][db + "_json"] = JSON.parse(window['getdatabase'][db + "_json"]);// turns string into object
        }

    });
};
}
/**CALLBACK FOR CREATE USER GIST LIST - THIS WILL RUN WHEN DATA IS RETURNED*/




/**Loads next script*/
if (iscript <js_files.length) {
    script = document.createElement('script');
    script.src = 'js/' + js_files[iscript];
    head.appendChild(script);
    iscript++;
}