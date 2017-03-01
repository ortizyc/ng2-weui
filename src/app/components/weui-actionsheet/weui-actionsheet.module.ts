import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiActionSheetComponent } from './weui-actionsheet.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [WeuiActionSheetComponent],
    exports: [WeuiActionSheetComponent]
})
export class WeuiActionSheetModule { }
