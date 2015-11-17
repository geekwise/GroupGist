/**
*  Creates new gist for database
*/
    obj_app.method_create_userdb = function(){
        this.gists.create({"description":"user_database",
          "public": false,
          "files": {
            "user_database.JSON": {
              "content": "https://gist.githubusercontent.com/geekwisevinson/627f3749f005bec34653/raw/0472adf7c1343a8891ad79b68914682e65527373/user_database.JSON"
              }
            }
          }, function(err, res) {
            console.log(res);
          });
        return;
    })
    }
