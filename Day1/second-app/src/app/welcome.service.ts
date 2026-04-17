import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }

  welcome() {
    alert('Welcome to Angular Services');
  }
}
