import {Page, NavController} from 'ionic-angular';
import {TestService} from './../../services/test/Test';
/*
  Generated class for the Test page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/test/test.html',
  providers:[TestService]
})
export class TestPage {
  constructor(public nav: NavController,private testService:TestService) {
    
  }
}
