var express = require('express'),
	path = require('path'),
	app = express(),
	port = 9123;


app.use(express.static(path.join(__dirname,'dist/client/')));

app.post('/create',function(req,res){
	res.send('POST request to homepage');
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);