import { BtnConfig } from '../button/btnConfig';

export interface Title {
    name:string;
    desc:string;
    
}

export interface Detail {
    name:string;
    href:string;
}

export interface MsgConfig {
    icon?:Array<string>;
    title?:Title;
    btn:Array<BtnConfig>;
    detail?:Detail
}