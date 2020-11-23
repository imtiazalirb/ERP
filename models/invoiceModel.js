const db = require('./db');

module.exports= {
    getAll: function(callback){
        var sql = "select * from invoice";
        //console.log(sqlPrint);
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback(null);
            }
        });
    },
    changeStatus : function(id, callback){
		var sql = "update invoice set status='delivered' where invoice_id='"+id+"'; ";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
    deleteInvoice : function(id, callback){
		var sql = "delete from invoice where invoice_id='"+id+"'; ";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
    search: function(keyword,callback){
        var sql = "select * from invoice where name like '%"+keyword+"%' or invoice_id like '%"+keyword+"%' ";
        //console.log(sqlPrint);
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },
};
