const express = require('express');
const router = express.Router();
const Domain =require('../models/domain');
const Cate = require('../models/cate');
router.post('/domains',(req,res)=>{
  const userId= req.body.id;
  /*
  Domain.getDomainsById(userId,function(err,domains){
    if(err){ res.json(err);}
    else{
        res.json(domains);
    }
  });*/
  Cate.getAll(userId,(err,cates)=>{
    if(err){
        res.json(err);
    }else{
        res.json(cates);
    }
  });
});

router.put('/domain/?id',(req,res)=>{
    
    
});


router.post('/new',function(req,res){
    var cateName=req.body.cate;
    var name=req.body.name;
    var url=req.body.url;
    var tip=req.body.tip;
    var id=req.body.u_id;

    const newDomain =new Domain({
        cate:cateName,
        name:name,
        url:url,
        tip:tip,
        u_id:id
    });
    const newCate=new Cate({
        u_id:id,
        name:cateName
    });
    Domain.getDomainByName(name,(err,domain)=>{
        if(err)
            throw err;
        if(domain){
            return res.json({success:false,msg:"该书签已经存在了"});
        }else{
            Domain.addDomain(newDomain,function(err,domain){
                if(err){
                    res.json({success:false,msg:" "+err});
                }else{
                       Cate.addCate(newCate,newDomain,(err,cate)=>{
                            if(err)
                            {
                             res.json({success:false,msg:err});
                                 }
                         if(cate){
                    res.json({success:true,msg:"保存成功"});
                }else{
                    res.json({success:false,msg:"保存失败"});
                }
                    });
    
                }
            });
        }
    
            /**/
    });

});

module.exports=router;