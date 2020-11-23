const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from users where user_name='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}
			else{
				callback(null);
			}
		});
	},
	getUserById: function(user, callback){
		var sql = "select * from users where user_id='"+user.id+"'";
		//console.log(sqlPrint);
		db.getResults(sql, function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	updateUser : function(user, callback){
		var sql = "update users set email='"+user.email+"',password='"+user.password+"',phone='"+user.phone+"' where user_id='"+user.id+"'; ";

		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
};
