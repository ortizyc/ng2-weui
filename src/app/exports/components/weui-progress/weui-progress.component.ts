import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'weui-prograss',
    templateUrl: './weui-prograss.component.html',
    styleUrls: ['./weui-prograss.component.css']
})
export class WeuiPrograssComponent implements OnInit {

    @Input()
    percent:number = 0;

    @Output()
    onCancel:EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    cancel(event){
        this.onCancel.next([this.percent,event]);
    }
}
