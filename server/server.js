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