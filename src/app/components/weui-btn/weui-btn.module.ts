import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiBtnComponent } from './weui-btn.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [WeuiBtnComponent],
    exports: [WeuiBtnComponent]
})
export class WeuiBtnModule { }
