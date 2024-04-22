import { Component,  PLATFORM_ID, Inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ContentComponent } from '../content/content.component'
import { isPlatformBrowser } from "@angular/common";
import { NgxRerenderModule } from 'ngx-rerender';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentComponent, NgxRerenderModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  public trigger: number = 0;

  public rerender(): void {
    this.trigger++;
  }
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }

}
