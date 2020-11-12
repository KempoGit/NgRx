import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './app.reducer';

import * as fromTexto from './texto.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dato$ : Observable<any>;

  constructor(private store : Store<appState>) {
    this.dato$ = store.select('texto');
  }

  spanishMensaje() {
    this.store.dispatch(new fromTexto.SpanishTexto('Estado de Spanish'));
  }
  
  englishMensaje() {
    this.store.dispatch(new fromTexto.EnglishTexto('Estado de English'));
  }

}
