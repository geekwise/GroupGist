/**
*   this code is not yet complete i was working a way of creating the database on the fly and inserting it into  geekwise.org 
*
*/




http.createServer(function(req, res) {
    var url = Url.parse(req.url);
    var path = url.pathname;
    var query = querystring.parse(url.query);

    if (path == "/" || path.match(/^\/user\/?$/)) {
        // redirect to github if there is no access token
        if (!accessToken) {
            res.writeHead(303, {
                Location: oauth.getAuthorizeUrl({
                    redirect_uri: 'http://localhost:3000/github-callback',
                    scope: "user,repo,gist"
                })
            });
            res.end();
            return;
        }

        // use github API
        github.gists.create({
          "description": "the description for this gist",
          "public": true,
          "files": {
            "TEST_2.md": {
              "content": "<html><h1>This is a Test!</h1><b>Hello</b><img src=></html>"
              }
            }
          }, function(err, rest) {
            console.log(rest);
          });
        return;
    }
    // URL called by github after authenticating
    else if (path.match(/^\/github-callback\/?$/)) {
        // upgrade the code to an access token
        oauth.getOAuthAccessToken(query.code, {}, function (err, access_token, refresh_token) {
            if (err) {
                console.log(err);
                res.writeHead(500);
                res.end(err + "");
                return;
            }

            accessToken = access_token;

            // authenticate github API
            github.authenticate({
                type: "oauth",
                token: accessToken
            });

            //redirect back
            res.writeHead(303, {
                Location: "/"
            });
            res.end();
        });
        return;
    }

    res.writeHead(404);
    res.end("404 - Not found");
}).listen(3000);