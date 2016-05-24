import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

// import { WEUI_CELL } from './component/cell/cell.component';
import { WeuiMsgComponent } from './component/msg/msg.component';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES,WeuiMsgComponent],
    providers: [
      HTTP_PROVIDERS,
      ROUTER_PROVIDERS
    ]
})
@Routes([
    
])
export class AppComponent {
    doClick(){
        console.log(1212323);
    }
}