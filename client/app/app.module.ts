import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HomeComponent} from './components/home/home.component';
import { LoginComponent}  from './components/login/login.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { RegisterComponent} from './components/register/register.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { NewDomainComponent } from './components/domain/new/new.component';
import { Domainsomponent } from './components/domain/domains/domains.component';
import { RouterModule,Routes} from '@angular/router';
import { ValidateService} from './_services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService} from './_services/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { DomainService } from './_services/domain.service';
import { RecomComponent} from './components/recom/recom.component'
import { PageNotFoundComponent} from './components/error/error.component'
const appRoutes:Routes=[{path:'',component:HomeComponent},
                        {path:'signup',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
                        {path:'domain/new',component:NewDomainComponent,canActivate:[AuthGuard]},
                        {path:'domains/:id',component:Domainsomponent,canActivate:[AuthGuard]},
                        {path:'recom',component:RecomComponent},
                        { path: '**', component: PageNotFoundComponent }
                    ]
@NgModule({
    declarations: [ AppComponent,
                    HomeComponent,
                    LoginComponent,
                    NavbarComponent,
                    RegisterComponent,
                    DashboardComponent,
                    NewDomainComponent,
                    Domainsomponent,
                    RecomComponent,
                    PageNotFoundComponent
                    ],
    imports: [ BrowserModule,
               FormsModule,
               RouterModule.forRoot(appRoutes),
               FlashMessagesModule,
               HttpModule],
    providers: [ValidateService,AuthService,AuthGuard,DomainService],
    bootstrap: [ AppComponent ]
})
export class AppModule {}