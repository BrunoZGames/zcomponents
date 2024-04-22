import { Component, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from "@angular/common";
import { ArticleComponent } from '../article/article.component';
import { graphcards } from '../../interfaces/graphcards';
import { NgxRerenderModule } from 'ngx-rerender';
import { AddGraphcardsService } from '../../services/add-graphcards.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ArticleComponent ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {



  graphcard1!: graphcards[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private AddGraphcardsService: AddGraphcardsService) {}


  ngOnInit(): void {
    this.graphcard1 = this.AddGraphcardsService.getgraphcards();
    
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0,0);
      setTimeout(() => {        
        initFlowbite();   
      }, 100);
    }
  }

 




}
