import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  public friends=[];
  constructor(private friendsService:HideService) { }

  ngOnInit() {
    this.friendsService.getFriends().subscribe(data => this.friends=data);
  }

}
