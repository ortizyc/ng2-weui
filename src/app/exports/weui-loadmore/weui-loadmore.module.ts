import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiLoadmoreComponent } from './weui-loadmore.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WeuiLoadmoreComponent],
    exports: [
        WeuiLoadmoreComponent
    ]
})
export class WeuiLoadmoreModule { }
