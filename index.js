const express = require('express');
const app = express();
const port = 3006;

const path = __dirname + '/app/view/';

app.get('/', function(req, res){
        res.sendFile(path + 'index.html');
        })

app.get('/secondpage', function(req, res){
        res.sendFile(path + 'secondpage.html');
        })
// Setup the static location for images <- so express knows this is where static files are
app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
           console.log('listening on: ' + port);
           })