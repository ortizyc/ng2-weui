import { NgModule, ModuleWithProviders } from '@angular/core';

import { WeuiCommonModule } from './common';

const WEUI_MODULES = [
    WeuiCommonModule
] 

@NgModule({
    imports:WEUI_MODULES,
    exports:WEUI_MODULES,
    providers:[]
})
export class WeuiModule {
    static forRoot(obj:any):ModuleWithProviders{
        return {
            ngModule:WeuiModule,
            providers:[
                
            ]
        }
    }
}