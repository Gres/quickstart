import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
  moduleId: module.id,
  selector: 'my-song-detail',
  templateUrl: 'song-detail.component.html',
  styleUrls: ['song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private songService: SongService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.songService.getSong(id)
          .then(song => {
            console.info(song);
            this.song = song
          });
      } else {
        this.navigated = false;
        this.song = new Song();
      }
    });
  }

  save(): void {
    this.songService
      .save(this.song)
      .then(song => {
        this.song = song;
        this.goBack(song);
      })
      .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedSong: Song = null): void {
    this.close.emit(savedSong);
    if (this.navigated) { window.history.back(); }
  }
}
