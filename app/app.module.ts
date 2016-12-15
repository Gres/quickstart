import {NgModule}      from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent}  from './app.component';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import {SongService} from './song.service';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule, NgSemanticModule ],
  declarations: [AppComponent, routedComponents],
  providers: [
    SongService
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
