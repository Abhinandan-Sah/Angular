import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  highlights = [
    'Home page for the assignment welcome screen',
    'Orders page with routing between views',
    'Built-in pipes for formatted prices and dates',
    'Custom orderStatus pipe for readable delivery state'
  ];
}
