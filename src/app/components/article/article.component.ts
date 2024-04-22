import { Component, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ContentComponent } from '../content/content.component'
import { isPlatformBrowser } from "@angular/common";
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  @Input() imgsrc: string = '';
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() id: number = 0;

  miid = '';


 ngOnInit() {
  this.miid = this.id + "hola";
 }

}


