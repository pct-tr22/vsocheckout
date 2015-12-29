
var vsocheckout = require('../index.js');

var url = 'localhost:3000/vsostatus';

vsocheckout.getStatus(url, 236, function(err, result){
    if (err) console.error(err);
    else {
        console.log('got something to pull');
        console.log(result);
        
        
        vsocheckout.sayHello();
    }
    
    
});

