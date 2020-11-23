const express 	= require('express');
const invoiceModel = require.main.require('./models/invoiceModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['uname'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/', (req, res)=>{
	res.render('Delivery/index', {name: 'imtiaz', id:'cookie.'});
});

router.get('/invoiceList', (req, res)=>{
	//console.log("acs");
	invoiceModel.getAll(function(result){
		 console.log(result);
		// res.send(result);
		res.render('Delivery/invoiceList',{invoice:result});
	});

});
router.get('/delivered/:invoice_id', function(req, res){
	var invoice_id = req.params.invoice_id;

	// console.log(invoice_id);
	invoiceModel.changeStatus(invoice_id,function(status){
		if(status){
			res.redirect("../invoiceList/");
		}
		else{
			res.redirect("../invoiceList/");
		}
	});
});

router.get('/deleteInvoice/:invoice_id', function(req, res){
	var invoice_id = req.params.invoice_id;

	// console.log(invoice_id);
	invoiceModel.deleteInvoice(invoice_id,function(status){
		if(status){
			res.redirect("../invoiceList/");
		}
		else{
			res.redirect("../invoiceList/");
		}
	});
});

router.get('/searchInvoice/:key', function(req, res){
	var keyword = req.params.key;
	console.log(keyword);
	invoiceModel.search(keyword,function(results){
			res.render('Delivery/invoiceList', {invoice:results});
	});
});



/*router.get('/joblist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('Employee_home/joblist', {jobs: results});
	});

})*/

module.exports = router;
