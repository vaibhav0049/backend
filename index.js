//1. import the expresss in index file 
const express = require('express');
// initalizing expresss 
const app =express();
const postRouter= require('./routers/postRouter');
// middle ware 
app.use('/post',postRouter);

// 2. defining port 
 const port = 5000;



app.get('/',(req,res) =>{ 
    res.send('response on express');
});

app.get('/add',(req,res) =>{ 
    res.send('response add on express');
});
//3. strat express derver 
app.listen(port, () => { console.log('express running')}); 

//4. after this u have to install nodemon 