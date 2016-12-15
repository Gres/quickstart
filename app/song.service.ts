import {Injectable} from '@angular/core';
import {Song} from './song';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class SongService {
  private songsUrl = 'http://localhost:3004/songs';  // URL to web api

  constructor(private http: Http) {
  }

  getSongs(): Promise<Song[]> {
    return this.http
      .get(this.songsUrl)
      .toPromise()
      .then(response =>
        response.json() as Song[]
      )
      .catch(this.handleError);
  }

  getSong(id: number): Promise<Song> {
    return this.getSongs()
      .then(songs => songs.find(song => song.id === id));
  }

  save(song: Song): Promise<Song> {
    if (song.id) {
      return this.put(song);
    }
    return this.post(song);
  }

  delete(song: Song): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.songsUrl}/${song.id}`;

    return this.http
      .delete(url, {headers: headers})
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Song
  private post(song: Song): Promise<Song> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.songsUrl, JSON.stringify(song), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Song
  private put(song: Song): Promise<Song> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.songsUrl}/${song.id}`;

    return this.http
      .put(url, JSON.stringify(song), {headers: headers})
      .toPromise()
      .then(() => song)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
