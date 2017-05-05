/**
 * mongoose model user
 * @authors JiaDongYang
 * @date    2017-04-15 20:35:31
 * @version 1.0.0
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    }
});
const User=mongoose.model("User",UserSchema);
module.exports=User;
module.exports.generateHash=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};
module.exports.comparePassword=function(password,hashPassword,callback){
    bcrypt.compare(password,hashPassword,callback);
};
module.exports.getUserById=function(id,callback){
    User.findById(id,callback);
}
module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}
module.exports.getUserByName=function(name,callback){
    var query={name:name};
    User.findOne(query,callback)
}
/**
 * root
 */
module.exports.deleteUser=function(){

}