import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
    constructor(){
    }
    validateField(user){
        if(user.name == undefined||user.password == undefined||user.email == undefined){
            return false;
        }else{
            return true;
        }
    }
    validateEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email);
    }
}