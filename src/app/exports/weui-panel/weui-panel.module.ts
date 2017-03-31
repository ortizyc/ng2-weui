import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeuiPanelComponent, HeaderDirective } from './weui-panel.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [WeuiPanelComponent, HeaderDirective],
    exports: [WeuiPanelComponent, HeaderDirective],
})
export class WeuiPanelModule { }
