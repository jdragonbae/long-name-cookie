var exp = require('express'); 
var cookieParser = require('cookie-parser'); 
var app = exp(); 
 
var longNameCookie = ''; 
 
app.use(cookieParser()); 
app.get('/',function(req,res){
	console.log('making cookie with long name'); 
	for(var i=0; i<1000; i++) 
		longNameCookie+='a'; 
	res.clearCookie('long_name_cookie');
	res.cookie('long_cookie',longNameCookie); 
	res.end('cookie_test');  
}); 
 
app.listen(3000,function(){ 
	console.log('Server listening on port 3000'); 
});
