import { Component } from '@angular/core';

@Component({
  selector: 'app-asyncpipeex',
  templateUrl: './asyncpipeex.component.html',
  styleUrl: './asyncpipeex.component.css'
})
export class AsyncpipeexComponent {
  pizzaOrder$ = new Promise<string>((resolve) => {
    console.log('Pizza Order is Received (Pending)');
    setTimeout(() => {
      console.log('Pizza preparation is started');
      setTimeout(() => {
        resolve('Pizza is ready! (Delivered)');
      }, 5000);
    });
  });
}
