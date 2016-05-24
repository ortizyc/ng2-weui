import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cellHd,[cellHd]',
    templateUrl: 'cell-hd.component.html'
})
export class WeuiCellHdComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}

@Component({
    moduleId: module.id,
    selector: 'cell,[cell]',
    templateUrl: 'cell.component.html',
    directives:[WeuiCellHdComponent]
})
export class WeuiCellComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}

export const WEUI_CELL = [WeuiCellHdComponent,WeuiCellComponent];