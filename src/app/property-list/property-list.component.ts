import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  standalone: false,
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  Property: Array<any> = [{
    "Id" : 1,
    "Name":"Real Estate Housing",
    "Type":"House",
    "Price":12000

}

}
