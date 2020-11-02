import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from './IProperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IProperty>;

  // Inject Service here
  constructor(private housingservice:HousingService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }

    //Call Service
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
      },
      error=>{
        console.log('httperror');
        console.log(error);
      }
    );

    // this.http.get('/data/properties.json').subscribe(
      //data=>{this.properties=data;}
    //   data=>console.log(data));
  }

}
