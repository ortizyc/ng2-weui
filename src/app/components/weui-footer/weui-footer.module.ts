import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiFooterComponent, FooterLinkItemComponent, FooterLinksComponent } from './weui-footer.component';

const WEUI_FOOTER_DECLARATIONS = [WeuiFooterComponent, FooterLinkItemComponent, FooterLinksComponent]

@NgModule({
    imports: [CommonModule],
    declarations: WEUI_FOOTER_DECLARATIONS,
    exports: WEUI_FOOTER_DECLARATIONS
})
export class AppModule { }
