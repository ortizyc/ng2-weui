import { Component, Input} from '@angular/core';

import { BtnConfig } from './btnconfig';

@Component({
    moduleId: module.id,
    selector: 'btn',
    templateUrl: 'button.component.html'
})
export class WeuiBtnComponent{
    
    @Input()
    btnConfig:BtnConfig;
    
}