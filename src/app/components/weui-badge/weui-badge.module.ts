import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiBadgeComponent } from './weui-badge.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WeuiBadgeComponent],
    exports: [WeuiBadgeComponent]
})
export class WeuiBadgeModule { }
