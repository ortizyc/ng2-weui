import { Inject, Injectable, ViewContainerRef, OpaqueToken } from '@angular/core';

export const CONFIG = new OpaqueToken("CONFIG");

@Injectable()
export class WeuiConfig {
    rootContainer: ViewContainerRef;

    constructor() { }

    extend(obj: any): this {
        Object.assign(this, obj);
        return this;
    }
}