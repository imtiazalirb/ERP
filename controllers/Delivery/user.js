const express 					 = require('express');
const router 	                 = express.Router();
const userModel		             = require.main.require('./models/userModel');

router.get('/editProfile',function(req,res){
	//res.send('Hello'+req.cookies.id);
    var id = req.cookies.id;
    var user={
        id: req.cookies.id,
    };
    userModel.getUserById(user,function(result){
        // console.log(result);
        // res.send(result);
        res.render('Delivery/editProfile',{user:result});
    });
});
router.post('/editProfile',function(req,res){
	// console.log("Email:"+JSON.stringify(req.body.email));
    // res.send("Email:"+req.body.email);
    var user={
        id:req.cookies.id,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone
    }
    userModel.updateUser(user, function(status){
		if(status){
			console.log(status);
			res.redirect('/Delivery/Delivery_home');
		}});
});


module.exports = router;
