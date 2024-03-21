const express = require('express');
const router = express.Router();
const Model = require('../models/postModels');

router.post('/add', (req, res) => {
    console.log(req.body);

    // to save data in mongodb
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/getall', (req, res) => {
    
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
// : denotes url parameter 
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(re.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });


})

module.exports = router;