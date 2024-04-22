import { Component, Output, ElementRef, ViewChild } from '@angular/core';
import { SectionsComponent } from '../sections/sections.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SectionsComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() colorClass!: string;

  changeColor(color: string): void {
    this.colorClass = color; // Change color class
  }
}
