import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: 'app/components/login/login.component.html',
    styleUrls: ['app/components/login/login.component.css']
})
export class LoginComponent implements OnInit {
    name:string;
    password:string;
    constructor(private authenService:AuthService,
                private flashMessageService:FlashMessagesService,
                private router:Router) { }

    ngOnInit() { }
    onLogin(){
        const user={
            name:this.name,
            password:this.password
        };
        this.authenService.onAuthenticate(user).subscribe((data)=>{
            if(data.success){
                this.flashMessageService.show(data.msg,{cssClass:"alert-info",timeout:1000});
               this.authenService.saveStorage(data);
                this.router.navigate(['/dashboard']);
            }else{
                this.flashMessageService.show(data.msg,{cssClass:"alert-danger",timeout:3000});
                this.router.navigate(['/login']);
            }
        });
    }
}