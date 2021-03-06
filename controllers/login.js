const express 		= require('express');
const userModel		= require.main.require('./models/userModel');
const router 		= express.Router();

router.get('/', (req, res)=>{
	res.render('login/index');
});

router.post('/', (req, res)=>{

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.validate(user, function(result){
			console.log(result);
			var status = JSON.stringify(result.user_type);
			var uid = JSON.stringify(result.user_id);
			console.log(status);
			if(status == 3){
				res.cookie('uname', req.body.username);
				res.cookie('id', parseInt(uid));
				//res.exSession.id= parseInt(id);
				res.redirect('/Delivery/Delivery_home');
			}
			else{
				//res.redirect('/');
				console.log("Invalid");
			    res.send("Invalid Username or password");
				//res.redirect('/login');
			}
	});
});

module.exports = router;
