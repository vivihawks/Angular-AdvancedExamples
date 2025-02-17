import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ThirdModule } from './third/third.module';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [     RouterLinkWithHref,RouterOutlet, FirstComponent, ThirdModule, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BEx2-SSR';
  i=0;
  ngOnInit(): void {
    console.log("Output is generated in both the server and the browser.");
  }
  constructor(){
    console.log("Output is generated in both the server and the browser.");
  }
  buttonClick(){
    console.log("Output is generated only in browser not in server.");
    this.i++;
  }
}
