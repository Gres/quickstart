import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  songs: Song[] = [];

  constructor(
    private router: Router,
    private songService: SongService) {
  }

  ngOnInit(): void {
    this.songService.getSongs()
      .then(songs => {
        this.songs = songs.slice(1, 5)
      });
  }

  gotoDetail(song: Song): void {
    let link = ['/detail', song.id];
    this.router.navigate(link);
  }
}
