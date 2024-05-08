import { Component } from '@angular/core';

@Component({
    selector: 'ref-comp',
    templateUrl: './ref.component.html',
    styleUrls: ['./app.component.css']
})

export class RefComponent {
    refs = ["https://en.wikipedia.org/wiki/Bill_Gates", "https://www.gatesfoundation.org/", "https://www.gatesnotes.com/", "https://twitter.com/billgates"];
    addRef(r:string){
        this.refs.push(r);
    }
}