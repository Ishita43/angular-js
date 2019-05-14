import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';
import {Router,ActivatedRoute} from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sdnv',
  templateUrl:'./sdnv.component.html' ,
  styleUrls: ['./sdnv.component.css']
})
export class SdnvComponent implements OnInit {
  message:boolean;
 
  constructor(private _hideService: HideService,private router:Router, private route:ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit() {
    this._hideService.cast.subscribe(message => this.message = message);
  }
  onclick()
  {
    this._hideService.changeMessage(false);
  }
  panelOpenState = false;
  open1(e)
  {
    this.router.navigate(['dashboard/dash1']);
    e.stopPropagation();
  }
  open2(e)
  {
    this.router.navigate(['dashboard/dash2']);
    e.stopPropagation();
  }
  openDialog() {

    const dialogConfig = new MatDialogConfig();
    this.dialog.open(PopupComponent, dialogConfig);
}
}
