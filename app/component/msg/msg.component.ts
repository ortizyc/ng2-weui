import { Component, OnInit, Input, Output } from '@angular/core';

import { WeuiIconComponent } from '../icon/icon.component';

@Component({
    moduleId: module.id,
    selector: 'msg',
    templateUrl: 'msg.component.html',
    directives:[WeuiIconComponent]
})
export class WeuiMsgComponent implements OnInit {
    
    //icon样式
    @Input() iconClass:Array<string>;
    //取消按钮样式
    @Input() cancelBtnClass:Array<string>;
    //确定按钮样式
    @Input() sureBtnClass:Array<string>;
    //config配置
    @Input() msgConfig:any;
    
    constructor() { }

    ngOnInit() { }

}