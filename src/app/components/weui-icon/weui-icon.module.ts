import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiIconComponent } from './weui-icon.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [WeuiIconComponent],
    exports: [WeuiIconComponent]
})
export class WeuiIconModule { }
