import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { IconConfig } from './iconconfig';

@Component({
    moduleId: module.id,
    selector: 'icon',
    template: `
        <i [ngClass]="clazz"></i>
    `,
    directives:[NgClass]
})
export class WeuiIconComponent{
    
    @Input() clazz:IconConfig;
    
    constructor() { }
}