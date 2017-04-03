import { NgModule, ModuleWithProviders, OpaqueToken } from '@angular/core';

import { WeuiCommonModule } from './common';
import { WeuiActionSheetModule } from './weui-actionsheet';
import { WeuiConfig, CONFIG } from './weui.config';

export { WeuiCommonModule } from './common';
export { WeuiActionSheetModule } from './weui-actionsheet';

export * from './weui.config';

const WEUI_MODULES = [
    WeuiCommonModule,
    WeuiActionSheetModule
]
const WEUI_REF_PROVIDERS = [
]
@NgModule({
    imports: WEUI_MODULES,
    providers: [
        ...WEUI_REF_PROVIDERS
    ],
    exports: [
        ...WEUI_MODULES,
        ...WEUI_REF_PROVIDERS
    ],
})
export class WeuiModule {
    static forRoot(obj: any): ModuleWithProviders {
        return {
            ngModule: WeuiModule,
            providers: [
                {
                    provide: CONFIG , useFactory(){
                        let config = (new WeuiConfig()).extend(obj);
                        return config;
                    }
                }
            ]
        }
    }
}