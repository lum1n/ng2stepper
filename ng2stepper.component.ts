import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ng2stepper',
    templateUrl: 'ng2stepper.component.html',
    styleUrls: [ 'ng2stepper.component.css' ]
})
export class ng2stepper implements OnInit {
	arr: any = [];
    @Input('elements') elements: number;
    @Input('active') active: number;
    @Input('size') size: string;
    @Input('color') color: string;
    @Input('content') content: string;
    
    constructor() {}

    ngOnInit() { 
        this.calcNumber();
     }

    private calcNumber() {
		for (let i = 0; i < this.elements; i++) {
			this.arr.push(i);
        }
    }
}
