import { Component, Directive, NgZone, ChangeDetectorRef } from '@angular/core';
import { Observable, from, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  message1: string = '';
  message2: string = '';
  message3: string = '';

  constructor(  
    private ngZone: NgZone, 
    private cdRef: ChangeDetectorRef 
  ) { }  

  ngOnInit() {

    //-------------------------------------------------------------
    //***1. Event Driven */
    //use document or window as the channel
    document.addEventListener('myEvent',(evt: any)=>{
      this.message1 = `Angular: Event from Javascript Received. Message received was => ${evt.detail}`
    });
    //-------------------------------------------------------------

    /***2. Message Driven 
     window.onmessage = (evt)=>{
       if (evt.data.name == 'myEvent2') {
         this.message2 = `Angular: Message from Javascript Received. Message received was => ${evt.data.detail}`
        }
      };*/
      //OR
      //***2. Message Driven 
      window.addEventListener("message", (evt)=>{
        //if (event.origin !== "http://example.org:8080")
        if (evt.data.name == 'myEvent2') {
          this.message2 = `Angular: Message from Javascript Received. Message received was => ${evt.data.detail}`
        }
      }
    , false);
    //-------------------------------------------------------------
  
    //***3. Direct Component Invocation
    window['myComponentRef'] = { component: this, zone: this.ngZone, callAngularDirect: (msg) => this.receiveJSCall(msg), };  
    
    //-------------------------------------------------------------
   }

  receiveJSCall(message:any):void{
    of(`Angular: Received direct, synchronous call from Javascript. Message received was => ${message.detail}
        Angular: Waiting for 2 secs`)
    .subscribe((data)=>
      this.message3 = data
    )
    this.cdRef.detectChanges();
   
    //Blocking call 
    /*
    this.sleep(2000);
    setTimeout(_=>
      this.message3 = `Angular: Received direct, synchronous call from Javascript. Message received was => ${message.detail}`,
      2000
    )
    */

    //Non Blocking call
    this.sleep(2000).then(_=>
      this.message3 = `Angular: Received direct, synchronous call from Javascript. Message received was => ${message.detail}`,
    )
  }

  sleep(milliseconds) {
    //Non-Blocking Call
    return new Promise(resolve => setTimeout(resolve, milliseconds));

    //Blocking Call
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

}
