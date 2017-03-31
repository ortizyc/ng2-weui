import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';

@Component({
    selector: 'app-weui-gallery',
    templateUrl: './weui-gallery.component.html',
})
export class WeuiGalleryComponent implements OnInit {

    private _currentImg:string;

    @Input()
    imgs:Array<string>;

    @Output()
    del:EventEmitter<any> = new EventEmitter();

    constructor(private _elementRef:ElementRef,private _renderer:Renderer) { }

    ngOnInit() {
    }

    delete(){
        this.del.next(this._currentImg);
    }
}
