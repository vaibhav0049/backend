 const mongoose = require('mongoose');

 const url="mongodb+srv://Vaibhav:Vaibhav1104@cluster0.rkllfsv.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function that return promise 
mongoose.connect(url)
.then((result) => {
    console.log('databse connected' );
    
}).catch((err) => {
    console.log('error occurr');
    
});

console.log('last line');