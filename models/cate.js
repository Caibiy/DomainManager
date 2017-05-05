/**
 * 分类对象
 */
var mongoose = require('mongoose');

var cateSchema=mongoose.Schema({
    u_id:{
        require:true,
        type:String,
        index:true
    },name:{
        require:true,
        type:String,
        index:true
    },domains:{
        type:Array,
        index:true
    }
});
var Cate=mongoose.model("Cate",cateSchema);
module.exports=Cate;

//保存书签对象
module.exports.addCate=function(nCate,domain,callback){
    var query={name:nCate.name};
    Cate.findOne(query,(err,cate)=>{
         if(err)
         throw err;
        if(cate){
            cate.domains.push(domain);
            cate.save(callback);
        }else{
            nCate.domains.push(domain);
            nCate.save(callback);
        }
    });
}
//根据用户得到关联所有
module.exports.getAll=function(id,callback){
    var query={u_id:id}
    Cate.find(query,callback);
}