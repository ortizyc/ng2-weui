import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'icon',
    template: `
        <i [ngClass]="clazz"></i>
    `,
    directives:[NgClass]
})
export class WeuiIconComponent{
    
    @Input() clazz:Array<string>;
    
    constructor() { }
}