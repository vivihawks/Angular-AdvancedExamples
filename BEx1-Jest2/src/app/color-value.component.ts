import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
    selector: 'color-value',
    template: `
        <p>
            {{label}}: 
            <input #color 
                   type="number" min="0" max="255" step="10" 
                   value="{{initialValue}}" 
                   (input)="sendColor(color.value)"/>
        </p>`
})

export class ColorValueComponent implements OnInit {
    @Input() label: string = "";
    @Input("init-value") initialValue: string = "0";

    @Output("value") colorValueEvent: EventEmitter<string> = new EventEmitter();

     ngOnInit() {
         this.sendColor(this.initialValue);
     }
     ngOnChanges(){
         console.log("Input changed")
     }

     //Constructor >> onChanges >> onInit >> onChanges Recursive

     sendColor(color: string): void {
        this.colorValueEvent.emit(color);
    }
}
