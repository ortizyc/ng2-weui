import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiArticleComponent, WeuiSectionComponent } from './weui-article.component';

const WEUI_ARTICLE_DECLARATIONS = [WeuiArticleComponent, WeuiSectionComponent]

@NgModule({
    imports: [CommonModule],
    declarations: WEUI_ARTICLE_DECLARATIONS,
    exports: WEUI_ARTICLE_DECLARATIONS
})
export class AppModule { }
