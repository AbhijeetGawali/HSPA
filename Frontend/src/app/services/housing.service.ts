import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../property/property-list/IProperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

    // This Function is not used observable
  // getAllProperties(){
  //   return this.http.get('data/properties.json');
  // }

  getAllProperties(SellRent:Number) : Observable<IProperty[]>{

    return this.http.get('data/properties.json').pipe(
      map(data=>{

        const PropertiesArray : Array<IProperty>=[];

        for (const id in data)
        {
          if (data.hasOwnProperty && data[id].SellRent===SellRent)
          PropertiesArray.push(data[id]);
        }

        return PropertiesArray;

      }))


  }


}
