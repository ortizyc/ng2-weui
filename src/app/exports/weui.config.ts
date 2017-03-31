import { Inject, Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class WeuiConfig {
    rootContainer: ViewContainerRef;

    constructor() { }

    extend(obj: any): this {
        Object.assign(this, obj);
        return this;
    }
}