import { Component, Directive, ViewContainerRef, Input, Output, EventEmitter, Renderer, ElementRef, TemplateRef } from '@angular/core';

@Component({
    selector: 'weui-btn',
    templateUrl: './weui-btn.component.html',
    styleUrls: ['./weui-btn.component.css']
})
export class WeuiBtnComponent {
    private _btnClass:Array<string> = new Array();

}
