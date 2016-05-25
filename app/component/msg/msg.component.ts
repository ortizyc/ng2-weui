import { Component, OnInit, Input, Output } from '@angular/core';

import { WeuiIconComponent } from '../icon/icon.component';
import { WeuiBtnComponent } from '../button/button.component';
// msgConfig:Object = {
//     icon:['weui_icon_msg','weui_icon_warn'],
//     title:{
//         name:"处理成功",
//         desc:`12312312313131312123`
//     },
//     btn:[{
//         btnName:"确定",
//         btnClass:"weui_btn weui_btn_primary",
//         handler:()=>console.log(1)
//     },{
//         btnName:"取消",
//         btnClass:"weui_btn weui_btn_warn",
//         handler:()=>console.log(2)
//     }],
//     detail:{
//         name:'查看详细信息',
//         href:'//www.baidu.com'
//     }
// }
@Component({
    moduleId: module.id,
    selector: 'msg',
    templateUrl: 'msg.component.html',
    directives:[WeuiIconComponent,WeuiBtnComponent]
})
export class WeuiMsgComponent implements OnInit {
    
    @Input() msgConfig:any=null;
    
    /**
     * @constructor
     */
    constructor() { }

    ngOnInit() { }
    
    doClick(i){
        if(!!this.msgConfig.btn[i].handler){
            this.msgConfig.btn[i].handler();
        }
    }
}