import { Component } from "@angular/core";

@Component({

    selector: 'app-property-card',
    //template: `<h1>This is kenneth david Aboagye </h1>`,
    templateUrl: './property-card.component.html',
   //styles: ['h1 {font-weight: normal;}']
    styleUrls: ['./property-card.component.css']

    //styles: [`.card { width: 18rem; }`]

}
)
export class PropertyCardComponent {

    Property: any = {
        "Id" : 1,
        "Name":"Real Estate Housing",
        "Type":"House",
        "Price":12000

    }
}