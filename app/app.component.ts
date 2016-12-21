import { Component } from '@angular/core';
import 'jquery';
import 'semantic';
@Component({
  selector: 'my-app',
  template: `
    <div class="ui container">
        <h1>{{title}}</h1>
        <sm-menu title="SongsBook" class="inverted teal">
            <a sm-item routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a sm-item routerLink="/songs" routerLinkActive="active">Songs</a>
             <div class="right menu">
                <div class="item">
                <sm-search placeholder="Search..." (onSearch)="element.innerText = $event" ></sm-search>
                </div>
            </div>
            <!--<sm-menu class="menu right secondary">-->
                <!--<a sm-item href="#/elements/menu" -->
                    <!--image="http://semantic-ui.com/images/avatar/small/stevie.jpg">Elliot Fu</a>-->
                <!--<a sm-item icon="sidebar big"></a>-->
            <!--</sm-menu>-->
        </sm-menu>
       
        <router-outlet></router-outlet>
    </div>

  `,
})
export class AppComponent  { title = 'Angular'; }
