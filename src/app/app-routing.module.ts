import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { SignInComponent} from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { AboutComponent } from './dashboard/about/about.component';
import { PostComponent } from './dashboard/post/post.component';
import { RequestComponent } from './dashboard/request/request.component';
import { AllrequestsComponent } from './allrequests/allrequests.component';
import { TestryComponent } from './testry/testry.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JoinusComponent } from './joinus/joinus.component';
import { FaqComponent } from './faq/faq.component';
import {MainComponent} from './homeboard/main/main.component';
import {ProductsComponent} from './homeboard/products/products.component';
import {BottransComponent} from './homeboard/bottrans/bottrans.component';
import {BuytransComponent} from './homeboard/buytrans/buytrans.component';
import {SelltransComponent} from './homeboard/selltrans/selltrans.component';
import {SoldtransComponent} from './homeboard/soldtrans/soldtrans.component';
import {UpdateComponent} from './homeboard/update/update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegcompComponent } from './regcomp/regcomp.component';
import { CompanyComponent } from './company/company.component';
import { AllexportComponent } from './company/allexport/allexport.component';
import { AllimportComponent } from './company/allimport/allimport.component';
import { AllproductsComponent } from './company/allproducts/allproducts.component';
import { CompupdateComponent } from './company/compupdate/compupdate.component';

const routes: Routes = [

  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'joinus',
    component: JoinusComponent
  },
  {
    path: 'faq',
    component:FaqComponent
  },
  {
    path: 'home',
    component:MainComponent
  },
  {
    path: 'home/products',
    component:ProductsComponent
  },
  {
    path: 'home/bottrans',
    component:BottransComponent
  },
  {
    path: 'home/buytrans',
    component:BuytransComponent
  },
  {
    path: 'home/selltrans',
    component:SelltransComponent
  },
  {
    path: 'home/soldtrans',
    component:SoldtransComponent
  },
  {
    path: 'home/update',
    component:UpdateComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'register/company',
    component:RegcompComponent
  },
  {
    path: 'company',
    component:CompanyComponent
  },
  {
    path: 'company/update',
    component:CompupdateComponent
  },
  {
    path: 'company/products',
    component:AllproductsComponent
  },
  {
    path: 'company/imports',
    component:AllimportComponent
  },
  {
    path: 'company/exports',
    component:AllexportComponent
  },
  // {
  //   path: 'allposts',
  //   component: AllpostsComponent
  // },
  // {
  //   path: 'allrequests',
  //   component: AllrequestsComponent
  // },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent
  // },
  // {
  //   path: 'post',
  //   component: PostComponent
  // },
  // {
  //   path: 'request',
  //   component: RequestComponent
  // },
  // {
  //   path: 'product',
  //   component: ProdListComponent
  // },
  // {
  //   path: 'signin',
  //   component: SignInComponent
  // },
  // {
  //   path: 'testry',
  //   component: TestryComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
