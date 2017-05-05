/**
 * passport for local
 * @authors JiaDongYang (you@example.org)
 * @date    2017-04-15 20:34:52
 * @version 1.0.0
 */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt =require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config');

module.exports=function(passport){
    var opt={};
    opt.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opt.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opt,(jwt_payload,done)=>{
       User.getUserById(jwt_payload._doc._id,function(err,user){
           if(err)
            return done(err,false);
            if(user){
                done(null,user);
            }else{
                done(null,false);
            }
       }) 
    }))
}
