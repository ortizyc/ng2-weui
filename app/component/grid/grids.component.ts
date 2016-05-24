import { Component, Input } from '@angular/core';

import { WeuiGridComponent } from './grid.component';

@Component({
    moduleId: module.id,
    selector: 'grids',
    templateUrl: 'grids.component.html',
    directives:[WeuiGridComponent]
})
export class WeuiGridsComponent {
    
    @Input()
    private gridList:any;
    
    constructor() {
        this.gridList = [
            {
                imgSrc:"http://pic250.quanjing.com/imageclk005/ic01390201.jpg",
                title:'1'
            },{
                imgSrc:"http://pic250.quanjing.com/imageclk005/ic01390201.jpg",
                title:'2'
            },{
                imgSrc:"http://pic250.quanjing.com/imageclk005/ic01390201.jpg",
                title:'3'
            }
        ]        
    }

}