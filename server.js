
/**
 * Voting Application
 * @authors JiaDongYang  
 * @date    2017-04-15 16:48:15
 * @version 1.0.0
 */


const express =require('express'),
      bodyPareser=require('body-parser'),
      passport=require('passport'),
      path=require('path'),
      mongoose=require('mongoose'),
      cors=require('cors');
var   app= express(),
      config=require('./config'),
      routes=require('./routes/index'),
      domain=require('./routes/domain')
      local=require('./auth/local');


mongoose.connect(config.database);
mongoose.connection.on('connected',function(){
      console.log('Database is connected: '+config.database);
});
mongoose.connection.on('error',function(error){
      console.log('Database error:'+error);
});

app.use(bodyPareser.json());
app.use(passport.initialize());
app.use(passport.session());
local(passport);
app.use(express.static(path.join(__dirname,'client')));
app.use(cors());
app.use('/api',routes);
app.use('/api/domain',domain);
app.get('*',(req,res)=>{
      res.sendfile(path.join(__dirname, 'client/index.html'));//此处必须这样写 要不然url输入显示错误
})
app.listen(config.port,function(){
      console.log('app is running on '+config.port);
});



