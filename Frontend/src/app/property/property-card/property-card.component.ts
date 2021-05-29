import { Component, Input, OnInit } from '@angular/core';
//import { IProperty } from '../property-list/IProperty.Interface';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // This is the example of Propery.Binding types of Data Binding
  @Input() property: IPropertyBase;
  @Input() hideIcons: boolean;

}
