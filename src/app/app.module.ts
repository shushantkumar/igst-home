import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { PostComponent } from './dashboard/post/post.component';
import { RequestComponent } from './dashboard/request/request.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AllpostsComponent } from './allposts/allposts.component';
import { AllrequestsComponent } from './allrequests/allrequests.component';

import { AllpostsService } from './allposts/allposts.service';
import { AllrequestsService } from './allrequests/allrequests.service';
import {HeaderService} from './header/header.service';
import { AboutService } from './dashboard/about/about.service';
import {PostService} from './dashboard/post/post.service';
import {RequestService} from './dashboard/request/request.service';
import { TestryService } from './testry/testry.service';
import { ProductsService } from './homeboard/products/products.service';
import { BottransService } from './homeboard/bottrans/bottrans.service';
import { SoldtransService } from './homeboard/soldtrans/soldtrans.service';
import { HomeService } from './home/home.service';
import { BuytransService } from './homeboard/buytrans/buytrans.service';
import { SelltransService } from './homeboard/selltrans/selltrans.service';
import { UpdateService } from './homeboard/update/update.service';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import { CookieService } from 'ngx-cookie-service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestryComponent } from './testry/testry.component';
import {GoogleSignInComponent} from 'angular-google-signin';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JoinusComponent } from './joinus/joinus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeboardComponent } from './homeboard/homeboard.component';
import { MainComponent } from './homeboard/main/main.component';
import { ProductsComponent } from './homeboard/products/products.component';
import { BuytransComponent } from './homeboard/buytrans/buytrans.component';
import { SelltransComponent } from './homeboard/selltrans/selltrans.component';
import { SoldtransComponent } from './homeboard/soldtrans/soldtrans.component';
import { BottransComponent } from './homeboard/bottrans/bottrans.component';
import { UpdateComponent } from './homeboard/update/update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegcompComponent } from './regcomp/regcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    PostComponent,
    RequestComponent,
    AllpostsComponent,
    AllrequestsComponent,
    TestryComponent,
    GoogleSignInComponent,
    AboutusComponent,
    JoinusComponent,
    FaqComponent,
    HomeboardComponent,
    MainComponent,
    ProductsComponent,
    BuytransComponent,
    SelltransComponent,
    SoldtransComponent,
    BottransComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    RegcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    AllpostsService,
    AllrequestsService,
    HeaderService,
    AboutService,
    PostService,
    RequestService,
    CookieService ,
    TestryService,
    ProductsService,
    BottransService,
    SoldtransService,
    HomeService,
    SelltransService,
    UpdateService,
    BuytransService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
