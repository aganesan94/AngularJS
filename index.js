var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("./chapter-1"));
app.listen(5000);