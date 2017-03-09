import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiGridsComponent, WeuiGridComponent } from './weui-grid.component';

const WEUI_GRID = [WeuiGridsComponent, WeuiGridComponent]

@NgModule({
    imports: [CommonModule],
    declarations: WEUI_GRID,
    exports: WEUI_GRID
})
export class AppModule { }
