import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WeuiBtnModule } from './components/weui-btn';
import { WeuiIconModule } from './components/weui-icon';
import { WeuiLoadmoreModule } from './components/weui-loadmore';
import { WeuiPanelModule } from './components/weui-panel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WeuiLoadmoreModule,
    WeuiPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
