import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import {UserRegisterComponent} from './user/user-Register/user-Register.component';


// Define Routing Path
const appRoutes : Routes =[
 {path:'', component:PropertyListComponent},
  {path:'add-property', component: AddPropertyComponent},
  {path:'rent-property', component: PropertyListComponent},
  // ** Add Dynamically Pass Paramter Id
  {path:'property-detail/:id', component: PropertyDetailComponent},
  //  {path:'**', component:PropertyListComponent},
  {path:'user/login', component: UserLoginComponent},
   {path:'user/Register', component: UserRegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
     UserLoginComponent,
     UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Enable Routing related setting here
    RouterModule.forRoot(appRoutes),
    //Form Module
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
