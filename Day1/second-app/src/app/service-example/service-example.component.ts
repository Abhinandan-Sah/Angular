import { Component } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrl: './service-example.component.css'
})
export class ServiceExampleComponent {
  constructor(public obj: WelcomeService){
    
  }
}
