
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";
 

/**
 * 单个管理用户
 * @param {Object} req
 *        {MongoId} req.params._id
 * @param {Object} res
 */
//微信授权登录  
exports.preauth = function (req,res,next){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
        db.close();
      });
}