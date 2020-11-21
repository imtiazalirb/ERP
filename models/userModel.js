const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where user_name='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].user_type);
			}
		});
	},
};
