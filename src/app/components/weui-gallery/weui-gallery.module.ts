import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiGalleryComponent } from './weui-gallery.component';

@NgModule({
    imports: [CommonModule],
    declarations: [WeuiGalleryComponent],
    bootstrap: [WeuiGalleryComponent]
})
export class WeuiGalleryModule { }
