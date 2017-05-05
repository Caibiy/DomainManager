/**
 * mongoose email model
 * @authors JiaDongYang
 * @date    2017-04-29 16:55:31
 * @version 1.0.0
 */
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
//使用126邮箱发送邮件
let transporter = nodemailer.createTransport({
	service:'126',
	port:25,
	auth:{
		user:'mysiteplace@126.com',
		pass:'caibiy666'
	}
});
var emailSchema = mongoose.Schema({
    to:{
        type:String
    },subject:{
        type:String
    },text:{
        type:String
    },html:{
        type:String
    },remark:{
        type:String
    },Time:{
        type:String
    }
});
const Email = mongoose.model("Email",emailSchema);
exports = Email;
Email.sendCode=async(to,subject,options)=>{
    const code = Math.random().toString().substr(2,6);
    
    return new Promise((resolve,reject)=>{
        transporter.sendMail({
             from: 'mysiteplace@126.com', // sender address
             to:to,
             subject:subject,
             text:'欢迎注册'+code,
             html:'<h2>感谢您的注册</h2><p>您的验证码是:</p><br>'+code
        },(err,info)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(info);
            }
        });
    })
};