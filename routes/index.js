/**
 * Router 
 * @authors JidDongYang 
 * @date    2017-04-15 20:29:56
 * @version 1.0.0
 */

var express=require('express'),
    router=express.Router(),
    jwt=require('jsonwebtoken'),
    passport=require('passport'),
    config=require('../config'),
    User=require('../models/user');

//register
router.post('/register',function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    var newUser=new User({
        name:name, 
        password:password,
        email:email
    });
    User.getUserByName(name,function(err,user){
        if(user){
            res.json({success:false,msg:"该用户已经存在"});
        }else{
                User.addUser(newUser,(err,user)=>{
                    if(err){
                        res.json({success:false,msg:"注册失败"});
                 }else{
                    res.json({success:true,msg:"注册成功"});
                 }
    });
        }
    })
});

//返回token给client 
router.post('/authenticate',function(req,res){
    const username=req.body.name;
    const password= req.body.password;
    if(!username&&password){
        return res.json({success:false,msg:"请输入帐号密码!"});
    }
    User.getUserByName(username,function(err,user){
        if(err){
            throw err;
        }
        if(!user){
            return res.json({success:false,msg:"用户不存在"});
        }
        User.comparePassword(password,user.password,function(err,isMatch){
            if(err){
                throw err;
            }
            if(isMatch){
                const token=jwt.sign(user,config.secret,{expiresIn:604800});
                res.json({
                    success:true,
                    token:'JWT '+token,
                    user:{
                        id:user._id,
                        name:user.name,
                        email:user.email
                    },
                    msg:"登录成功"

                })
            }else{
                res.json({success:false,msg:'密码不匹配'});
            }
        });
    });
})

//得到个人信息
router.get('/profile',passport.authenticate('jwt',{session:false}),function(req,res){
    console.log("user"+req.user);
    res.json({user:req.user});
})



module.exports=router;