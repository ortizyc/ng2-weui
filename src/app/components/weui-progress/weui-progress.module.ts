import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeuiPrograssComponent }  from './weui-progress.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ WeuiPrograssComponent ],
    exports:    [ WeuiPrograssComponent ]
})
export class WeuiPrograssModule {  }
