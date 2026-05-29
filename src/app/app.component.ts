import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  
  members = [
    {
      name: 'Adrian Sebastián Saavedra Romero',
      initials: 'AS',
      role: 'Ingeniero en Sistemas',
      delay: '0s'
    },
    {
      name: 'Katherin Andrea Palacio Zuluaga',
      initials: 'KA',
      role: 'Ingeniera en Sistemas',
      delay: '0.15s'
    }
  ];

  ngOnInit() {}
}
