import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../../_services/domain.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'app-domains',
    templateUrl: 'app/components/domain/domains/domains.component.html',
    styleUrls:['app/components/domain/domains/domains.component.css']
})
export class Domainsomponent implements OnInit {
    domains:any;
    cates:any;
  
    currentClasses:{};
    constructor(private domainService:DomainService,
                private router:Router,
                private route: ActivatedRoute) {
                 }



    ngOnInit() { 
        this.route.params
        .switchMap((params:Params)=>{
            return this.domainService.getDomains(params['id']);
        }).subscribe(cates=>{
            this.cates=cates;
        })

    // *****改为后台处理*****
        /*this.route.params
   
    .switchMap((params: Params) => {
          console.log('component:'+params['id']);
        return  this.domainService.getDomains(params['id']);})
    .subscribe(domains=>{
        this.domains=domains;
        console.log(this.category);
        var temp=0;
        
         //存储所有的类别
         
       for(let i=0;i<domains.length;i++){
           for(let j=0;j<this.category.length;j++){
               if(this.category[j].cate==domains[i].cate){
                   break;
               }
           }
           this.category[temp].cate=domains.cate;
           temp++;
       }
       
     //比较cate属否相等如果相等则push
        
      for(let i=0;i<domains.length;i++){
          for(let j=0;j<this.category.length;j++){
              if(this.category[j].cate==domains[i].cate){
                  this.category[j].values.push(domains[i].cate);
              }
          }
      }
      console.log('category:'+this.category);
    }
    
    );*/
}
isSpec(index){
    return (index%2)?0:1;
}
generateArray(obj){
    
   return Object.keys(obj).map((key)=>{ return obj[key]});
}
}