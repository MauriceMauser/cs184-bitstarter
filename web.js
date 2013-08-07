var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

var html_file = fs.readFileSync(index.html); 
var buffer = new Buffer(html_file, "utf-8");
var hello_text = buffer.toString("utf-8")

app.get('/', function(request, response) {
  response.send(hello_text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
