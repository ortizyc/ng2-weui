import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiFlexComponent, WeuiFlexItemComponent } from './weui-flex.component';

const WEUI_FLEX = [WeuiFlexComponent, WeuiFlexItemComponent];

@NgModule({
    imports: [CommonModule],
    declarations: WEUI_FLEX,
    exports: WEUI_FLEX
})
export class WeuiFlexModule { }
