import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFriends } from './friends';
@Injectable({
  providedIn: 'root'
})
export class HideService {
  private _url: string = "/assets/data/friends.json";
  private newMessage = new BehaviorSubject<boolean>(true);
  cast = this.newMessage.asObservable(); 
  changeMessage(message: boolean)
  {
    this.newMessage.next(message);
  }
  constructor(private http: HttpClient) { }

  getFriends(): Observable<IFriends[]>
  {
    return this.http.get<IFriends[]>(this._url);
  }
}

