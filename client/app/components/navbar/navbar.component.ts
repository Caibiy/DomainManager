import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../../_services/auth.service';
@Component({
    selector: 'app-navbar',
    templateUrl: 'app/components/navbar/navbar.component.html'
})
export class NavbarComponent implements OnInit {
    user:any;
    constructor(private auth:AuthService) { 
    }

    ngOnInit() {
           this.user=JSON.parse(localStorage.getItem('user')); 
    }
    checkUser(){
         this.user=JSON.parse(localStorage.getItem('user')); 
         return (this.user)?true:false;
    }
     logout(){
         this.auth.logout();
     }

}