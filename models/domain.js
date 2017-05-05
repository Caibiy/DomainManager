/**
 * 书签
 * @authors JiaDongYang 
 * @date    2017-04-17 23:54:23
 * 
 * 书签对象包含5个字段
 * { cate:分类,url:url地址,ccount:点击次数,name:名字,tip:tip 信息,u_id:用户id}
 * @version 1.0.0
 */
const mongoose = require('mongoose');

var domainShcema=mongoose.Schema({
    cate:{
        type:String,
        required:true
    },url:{
        type:String,
        name:String,
        required:true
    },ccount:{
        type:String,
        name:Number,
        required:true,
        default:0
    },tip:{
        type:String,
        required:true
    },name:{
        type:String,
        required:true
    },
    u_id:{
        type:String,
        required:true
    }
});

var Domain=mongoose.model('Domain',domainShcema);
module.exports=Domain;
module.exports.getDomainsById=function(id,callback){
    var query={u_id:id}
    Domain.find(query,callback);
}
module.exports.addDomain=function(domain,callback){
    domain.save(callback);
}

module.exports.deleteDomain=function(domain,callback){
    
}
module.exports.getDomainByName=function(name,callback){
    var query={name:name};
    Domain.findOne(query,function(err,domain){
        callback(err,domain)
    });
}
