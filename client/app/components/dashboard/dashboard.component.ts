import { Component, OnInit } from '@angular/core';
import { AuthService}  from '../../_services/auth.service';
import { Router} from '@angular/router';
@Component({
    selector: 'app-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    user:any;
    constructor(private authService:AuthService,
                private router:Router) { }
    ngOnInit() {
        this.authService.getProfile().subscribe(data=>{
           this.user=data.user;
        },(err=>{
            console.log(err);
        }));
     }
     onGetDomainList(){
        this.user=JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['/domains',this.user.id]);
     }
}