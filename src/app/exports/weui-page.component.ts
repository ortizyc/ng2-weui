import { Directive, ViewContainerRef, OnInit } from '@angular/core';
import { WeuiConfig } from './weui.config';

@Directive({
    selector: '[page]',
})
export class PageDirective {
    constructor(private _viewContainerRef:ViewContainerRef,private _config:WeuiConfig){
        _config.rootContainer = _viewContainerRef;
    }
}