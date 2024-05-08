// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, ViewChild } from '@angular/core';
import { RefComponent }   from './ref.component';
import { QuotesComponent }   from './quotes.component'

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    newQuote:string;
	newRef:string;
    @ViewChild(QuotesComponent)
    private quoteComponent: QuotesComponent;
    @ViewChild(RefComponent)
    private refComponent: RefComponent;
    addQuote(q:string){this.quoteComponent.addQuote(q)}
    addRef(r:string){this.refComponent.addRef(r)}
}