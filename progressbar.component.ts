import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ng2stepper',
    templateUrl: 'progressbar.component.html',
    styleUrls: [ 'progressbar.component.css' ]
})
export class ProgressbarComponent implements OnInit {
	arr: any = [];
    @Input('numberOfElements') numberOfElements: number;
    @Input('active') active: number;
	
    constructor() {}

    ngOnInit() { 
        this.calcNumber();
     }

    private calcNumber() {
		for (let i = 0; i < this.numberOfElements; i++) {
			this.arr.push(i);
        }
    }
}
