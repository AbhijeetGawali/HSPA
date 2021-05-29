import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Implement Angular Common service
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import {PropertyDetailResolverService} from './property/property-detail/property-detail-resolver.service';

// Implement Reactive Forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Implement Routing
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Implement Component
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-Register/user-Register.component';

// Used below ngx-bootstrap for Dropdawn , Tabs
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Photo Gallary
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

// Custom Pipes
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';

// Define Routing Path
const appRoutes : Routes =[
 {path:'', component:PropertyListComponent},
  {path:'add-property', component: AddPropertyComponent},
  {path:'rent-property', component: PropertyListComponent},
  // ** Add Dynamically Pass Paramter Id
  {path:'property-detail/:id',
         component: PropertyDetailComponent,
         resolve: {prp: PropertyDetailResolverService}},
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
     UserRegisterComponent,
     FilterPipe,
     SortPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //Enable Routing related setting here
    RouterModule.forRoot(appRoutes),
    //Form Module
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    AuthService,
    UserService,
    AlertifyService,
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
