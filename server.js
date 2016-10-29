var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('frontend')).listen(process.env.PORT || 8080, function(){
    console.log('Server running');
});