import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable'
import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  songs: Observable<any[]>;

  constructor(
    private router: Router,
    private songService: SongService) {
  }

  ngOnInit(): void {
    this.songs = this.songService.items;
    this.songService.loadAll();
  }

  gotoDetail(song: Song): void {
    let link = ['/detail', song.id];
    this.router.navigate(link);
  }
}
