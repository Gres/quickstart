import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
@Injectable()
export class ApiService {
  public _items: BehaviorSubject<any[]>;
  public baseUrl: string;
  public itemType: string;
  public dataStore: {
    items: any[]
  };
  constructor(public http: Http) {
    this.baseUrl = 'http://localhost:3004';
    this.dataStore = {items: []};
    this._items = <BehaviorSubject<any[]>> new BehaviorSubject([]);
  }

  get items() {
    return this._items.asObservable();
  }

  loadAll() {
    this.http
      .get(`${this.baseUrl}/${this.itemType}`)
      .map((resp: Response) => resp.json())
      .subscribe(data => {
        this.dataStore.items = data as any[];
        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log('Could not load todos.'));
  }

  load(id: number | string) {
    this.http.get(`${this.baseUrl}/items/${id}`)
      .map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.items.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.items[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.items.push(data);
      }
      this._items.next(Object.assign({}, this.dataStore).items);
    }, error => console.log('Could not load author.'));
  }

  create(item: any) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post(`${this.baseUrl}/${this.itemType}`, JSON.stringify(item), {headers: headers})
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.items.push(data);
        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log('Could not create todo.'));
  }

  update(item: any) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.put(`${this.baseUrl}/${this.itemType}/${item.id}`, JSON.stringify(item), {headers: headers})
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.items.forEach((t, i) => {
          if (t.id === data.id) {
            this.dataStore.items[i] = data;
          }
        });
        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log('Could not update todo.'));
  }

  remove(item: any) {
    this.http.delete(`${this.baseUrl}/${this.itemType}/${item.id}`)
      .subscribe(response => {
        this.dataStore.items.forEach((t, i) => {
          if (t.id === item.id) {
            this.dataStore.items.splice(i, 1);
          }
        });
        this._items.next(Object.assign({}, this.dataStore).items);
      }, error => console.log('Could not delete todo.'));
  }

  save(item: any) {
    if (item.id) {
      return this.update(item);
    }
    return this.create(item);
  }

}
