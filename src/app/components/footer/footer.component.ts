import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  yr: number;

  constructor() {
    // Get the current year and assign it to the currentYear property
    this.yr = new Date().getFullYear();
  }
}
