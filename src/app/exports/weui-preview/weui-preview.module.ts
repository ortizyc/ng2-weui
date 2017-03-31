import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiPreviewComponent } from './weui-preview.component';

const WEUI_PREVIEW_DEC = [WeuiPreviewComponent]

@NgModule({
    imports: [CommonModule],
    declarations: WEUI_PREVIEW_DEC,
    exports: WEUI_PREVIEW_DEC
})
export class AppModule { }
