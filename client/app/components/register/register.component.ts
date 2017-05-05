import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../_services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from '../../_services/auth.service';
import { Router} from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: 'app/components/register/register.component.html',
    styleUrls: ['app/components/register/register.component.css']
})
export class RegisterComponent implements OnInit {
    name:String;
    password:String;
    email:String;
    constructor(private validateService:ValidateService,
                private flashMessageService:FlashMessagesService,
                private authService:AuthService,
                private router:Router) { }

    ngOnInit() { }
    onRegisterSubmit(event){
        event.preventDefault();
        const user={
            name:this.name,
            password:this.password,
            email:this.email
        };
       if( !this.validateService.validateField(user)){
        this.flashMessageService.show('请输入所有字段',{cssClass:'alert-danger',timeout:3000});
           return false;
       }
       if( !this.validateService.validateEmail(user.email)){
             this.flashMessageService.show('邮箱格式错误',{cssClass:'alert-danger',timeout:3000});
           return  false;
       }
       this.authService.onRegister(user).subscribe((data)=>{
            if(data.success){
                this.flashMessageService.show(data.msg,{cssClass:'alert-info',timeout:3000});
                console.log('success');
                this.router.navigate(['/login']);
            }else{
                console.log('failure');
                this.flashMessageService.show(data.msg,{cssClass:'alert-danger',timeout:2000});
                this.router.navigate(['/signup']);
            }
       });

    }
}