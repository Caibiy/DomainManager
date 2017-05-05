import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../../_services/domain.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router,ActivatedRoute,Params } from '@angular/router'
import 'rxjs/add/operator/switchMap';
@Component({
    selector: 'app-domain-new',
    templateUrl: 'app/components/domain/new/new.component.html',
    styleUrls:['app/components/domain/new/new.component.css']
})
export class NewDomainComponent implements OnInit {
    name:String;
    url:String;
    tip:String;
    cate:String;
    id:String;
    constructor(private domainService:DomainService,
                private flashMessageService:FlashMessagesService,
                private router:Router,
                private route:ActivatedRoute) { }

    ngOnInit() {}
    onNewSubmit(){
        this.id=JSON.parse(localStorage.getItem('user')).id;
        const domain={
            name:this.name,
            url:this.url,
            tip:this.tip,
            cate:this.cate,
            u_id:this.id
        };
        this.domainService.addDomain(domain).subscribe(data=>{
            if(data.success){
                this.flashMessageService.show(data.msg,{cssClass:"alert-success",timeout:2000});
               this.router.navigate(['/domains',this.id]);
            }else{
                this.flashMessageService.show(data.msg,{cssClass:"alert-danger",timeout:2000});
            }
        });

    }
}