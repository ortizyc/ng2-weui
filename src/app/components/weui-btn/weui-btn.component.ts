import { Component, OnInit, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

export const Operate_Scene = ['primary','default','warn'];

@Component({
    selector: 'weui-btn',
    templateUrl: './weui-btn.component.html',
    styleUrls: ['./weui-btn.component.css']
})
export class WeuiBtnComponent implements OnInit {

    private _scene:string;

    private _disabled:boolean;

    private _plain:boolean;

    private _loading:boolean;

    private _clazz:Array<string>;

    @Input()
    scene:string;

    @Input()
    disabled:boolean;

    @Input()
    plain:boolean;

    @Input()
    mini:boolean;

    @Input()
    loading:boolean;

    constructor(private _renderer:Renderer,private _elementRef:ElementRef) { }

    ngOnInit() {
    }


}
