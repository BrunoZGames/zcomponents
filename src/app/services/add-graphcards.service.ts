import { Injectable, Signal, signal } from '@angular/core';
import { graphcards } from '../interfaces/graphcards';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddGraphcardsService {


  constructor() { }

  graphcard: graphcards[] = [
    {
      name: 'RTX 4090',
      price: '1799€',
      imgsrc: '../../../assets/rtx4090.jpg'
    },
  ];

  // graphcard = signal<graphcards[]>([]);

  public sendgraphcards(graphcard1: any) {
    this.graphcard.push(graphcard1);
    console.log("Service sendgraphcards");
    return this.graphcard;
  }

  public getgraphcards() {
    console.log("Service getgraphcards");
    return this.graphcard;
  }

}
