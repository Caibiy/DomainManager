import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {AuthService} from '../_services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth:AuthService,
                private router:Router,
                private flashMessagesService:FlashMessagesService){

    }
    canActivate(){
        if(this.auth.loggedIn()) {
      return true;
    } else {
      this.flashMessagesService.show('请先登录',{cssClass:"alert-info",timeout:2000});
      this.router.navigate(['login']);
      return false;
    }
  }
    
}