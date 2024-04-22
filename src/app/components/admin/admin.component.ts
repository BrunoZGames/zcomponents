import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ContentComponent } from '../content/content.component'
import { graphcards } from '../../interfaces/graphcards';
import { AddGraphcardsService } from '../../services/add-graphcards.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ContentComponent, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  graphcard: graphcards[] = [];
  preview: string = '';
  imgsr: string = '';

  constructor(private AddGraphcardsService: AddGraphcardsService,  private fb: FormBuilder,private cdr: ChangeDetectorRef) {};

  ngOnInit() {
    this.graphcard = this.AddGraphcardsService.getgraphcards();
  }

  

  sendgraphcards(graphcard: graphcards[]) {
    console.log("sendProducts1");
    this.AddGraphcardsService.sendgraphcards(graphcard);
  }

  @ViewChild('htmlfiles', { static: true }) htmlfiles!: ElementRef<HTMLDivElement>;


  onFileChange(event: any) {
    const inputava: HTMLInputElement = event.target;
    let file = inputava.files![0];
    let htmlfile = `
      <div class="bg-white border rounded-lg mt-2">
        <div class="flex items-center justify-between">
          <span style="font-weight: 500;
          font-size: 16px;
          color: #07074d;
          padding-right: 12px;">${file.name}</span>
          <button (click)="onDeleteFile()">&times;</button>`;
    this.htmlfiles.nativeElement.innerHTML = htmlfile;

    const files = inputava.files as FileList;
    const fili = files[0];
    this.saveFile(fili);

    
  }

  saveFile(file: File) {
    const reader = new FileReader();

    reader.onloadend = () => {
      

      const dataUrl = reader.result as string;
      this.imgsr = dataUrl;
      this.addprod.value.imgsrc = dataUrl;
    };
    reader.readAsDataURL(file);
    
  }


  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  onDeleteFile(): void{
    
      this.fileInput.nativeElement.value =  '';
      this.htmlfiles.nativeElement.innerHTML = '<br>' ;
      this.cdr.detectChanges();
    
  }

  addprod = new FormGroup({
    pname: new FormControl(''),
    pprice: new FormControl(''),
    imgsrc: new FormControl(),
  })


  subit() {
    let pprice = '';
    if (this.addprod.value.pprice?.includes('€')) {
      pprice = this.addprod.value.pprice;
    } else {
      pprice = this.addprod.value.pprice + '€';
    }
    this.htmlfiles.nativeElement.innerHTML = "" ;
    console.log(this.addprod.value);
    // Create a new graphcard object from the form data
    let newGraphCard: graphcards = {
      name: this.addprod.value.pname ?  this.addprod.value.pname: 'GTX 1030',
      price: pprice ?  pprice: '100€' ,
      imgsrc: this.imgsr ?  this.addprod.value.imgsrc: '../../../assets/bigmansi.png'
    };
  
    

    // Send the updated array to the service
    this.AddGraphcardsService.sendgraphcards(newGraphCard);
    this.addprod.reset();
  }


}
