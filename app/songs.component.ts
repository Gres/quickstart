import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-songs',
  templateUrl: 'songs.component.html',
  styleUrls: ['songs.component.css']
})
export class SongsComponent implements OnInit {
  selectedSong: Song;
  addingSong = false;
  error: any;
  songs: Observable<any[]>;
  constructor(
    private router: Router,
    private songService: SongService) { }


  addSong(): void {
    this.addingSong = true;
    this.selectedSong = null;
  }

  close(savedSong: Song): void {
    this.addingSong = false;
    // if (savedSong) { this.getSongs(); }
  }

  deleteSong(song: Song, event: any): void {
    event.stopPropagation();
    // this.songService
    //   .delete(song)
    //   .then(res => {
    //     this.songs = this.songs.filter(s => s !== song);
    //     if (this.selectedSong === song) { this.selectedSong = null; }
    //   })
    //   .catch(error => this.error = error);
  }

  ngOnInit(): void {
    this.songs = this.songService.items;
    this.songService.loadAll();

    console.info(this.songs);
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
    this.addingSong = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSong.id]);
  }
}
