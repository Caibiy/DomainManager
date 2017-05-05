import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {
    authToken:any;
    user:any;
    constructor(private http:Http){

    }
    onRegister(user){
        var header =new Headers();
        header.append('content-Type','application/json');
        return this.http.post('/api/register',user,{headers:header}).map(res=>{
           return  res.json();
           
        });
    }
    onAuthenticate(user){
        var header =new Headers();
        header.append('Content-Type','application/json');
        return this.http.post('/api/authenticate',user,{headers:header}).map(res=>{
           return  res.json();   
        });
    }
    
    saveStorage(data){
         localStorage.setItem('id_token',data.token);
                localStorage.setItem('user',JSON.stringify(data.user));
        this.authToken=localStorage.getItem('id_token');
        this.user=localStorage.getItem('user');
    }
    
    loggedIn() {
        return tokenNotExpired('id_token');
    }
    loadToken(){
        const token =localStorage.getItem('id_token');
        this.authToken=token;
    }
    loadUser(){
        const user =localStorage.getItem('user');
        this.user=user;
        return this.user;
    }
    getProfile(){
         this.loadToken();
        var header =new Headers();
         header.append('Content-Type','application/json');
        header.append('Authorization',this.authToken);
        return this.http.get('/api/profile',{headers:header}).map(res=> res.json()   
        );
    }
    logout(){
        this.authToken=null;
        this.user=null;
        localStorage.clear();
    }
}