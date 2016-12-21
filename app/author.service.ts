import {Injectable} from '@angular/core';
import {ApiService} from './base-api.service';
import {Headers, Http, Response} from '@angular/http';
@Injectable()
export class AuthorService extends ApiService{
  constructor(public http: Http) {
    super(http);
    this.baseUrl = 'http://localhost:3004';
    this.itemType = 'authors';
  }
}
