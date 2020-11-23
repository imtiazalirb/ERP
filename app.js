let alert = require('alert');
const express 			= require('express');
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
//const popupS 				= require('popups');
const login				= require('./controllers/login');
const logout			= require('./controllers/logout');
const delivery_home		= require('./controllers/Delivery/Delivery_home');
//const employee_home		= require('./controllers/Employee_home');
const user				= require('./controllers/Delivery/user');
//const job				= require('./controllers/job');
const app				= express();
const port				= 3000;


//configuration
app.set('view engine', 'ejs');


//middleware
app.use('/assets', express.static('assets'));
//app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/Delivery/Delivery_home', delivery_home); //controller
//app.use('/Employee_home',employee_home);
app.use('/logout', logout);
app.use('/Delivery/user', user);
//app.use('/job',job);

//router
app.get('', (req, res)=>{
	res.render('Welcome');
});



//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
});
