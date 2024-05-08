import { Component } from '@angular/core';

@Component({
    selector: 'quotes-comp',
    templateUrl: './quotes.component.html',
    styleUrls: ['./app.component.css']
})

export class QuotesComponent {
    quotes = ["«Patience is a key element of success»", "«If you think your teacher is tough, wait till you get a boss»", "«Life is not fair — get used to it! »", "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»", "«Be nice to nerds. Chances are you’ll end up working for one»"];
    addQuote(q:string){
        this.quotes.push(q);
    }
}