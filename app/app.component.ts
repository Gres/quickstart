import { Component } from '@angular/core';
import 'jquery';
import 'semantic';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/songs" routerLinkActive="active">Songs</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { title = 'Angular'; }
