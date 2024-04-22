import { Component, Input } from '@angular/core';
import { RouterLink, Router  } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {
  someFunction(): void {
    console.log(this.route);
  }
  route!: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'Home'
      }
    });
  }

  scrollToAnchor(index: string): void {
    const anchorId = index;
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}