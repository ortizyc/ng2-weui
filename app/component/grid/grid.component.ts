import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grid',
    templateUrl: 'grid.component.html'
})
export class WeuiGridComponent {
    
    @Input()
    private imgSrc:string;
    
    @Input()
    private title:string;
    
    constructor() { }
}