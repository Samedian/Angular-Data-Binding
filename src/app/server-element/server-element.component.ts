
import { CockpitComponent } from '../cockpit/cockpit.component';
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // This will enable css styles to all project components
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('name') type: ElementRef; 
  @ContentChild('contentParagraph', { static: true }) type2: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  //Life Cycle of Angular
  ngOnInit(): void {     
    console.log("Init method called");
    //console.log('Text Content: ' + this.type.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.type2.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Property Changed OnChange()");
  }
  ngAfterViewInit(): void {
    console.log("ngOnAfterViewInit Method called");
  }

  ngDoCheck(): void {
    console.log("Do Check Method called, called on every change detection run");
  }
  ngAfterContentInit(): void {
    //this.renderor.setStyle(this.type2.nativeElement,"font-size","20px")
    console.log("AfterContentInit Method called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentCheck Method called");
  }

  ngAfterViewChecked(): void {
    console.log("ngOnAfterViewChecked method called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy method called");
  }

  onSubmit(name) {
    console.log(name.value);
    console.log(this.type.nativeElement.value);
  }
  onSubmit2(name2) {
    console.log(name2.value);

  }
}
