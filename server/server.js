var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log(process.env.PORT);
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

test = function() {
setTimeout(function() {
    
  



  
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  console.log(__dirname);
  console.log('Welcome to My Console,');
  setTimeout(function() {
    console.log('Begin');
     console.log(require.main);
     console.log(module);
    if (err) {throw err;console.log(err);}
    // start the server if `$ node server.js`
    if (require.main === module)
    {
      console.log('Start');
      app.start();

    }
    else
    {
      app.start();      
    }

   
  }, 10000);
});
}, 10000);  
};

test();


//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=6000; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});