import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;

  // Inject Service here
  constructor(private housingservice:HousingService) { }

  ngOnInit(): void {

    //Call Service
    this.housingservice.getAllProperties().subscribe(
      data=>{
        this.properties=data;
      },
      error=>{
        console.log(error);
      }


    );

    // this.http.get('/data/properties.json').subscribe(
      //data=>{this.properties=data;}
    //   data=>console.log(data));
  }

}
