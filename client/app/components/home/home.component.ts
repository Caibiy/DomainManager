import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
@Component({
    selector: 'app-home',
    templateUrl: 'app/components/home/home.component.html',
    styleUrls: ['app/components/home/home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private authService:AuthService) { }

    ngOnInit() { }
}