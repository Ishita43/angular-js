import { Component, OnInit } from '@angular/core';
import { HideService } from '../hide.service';

@Component({
  selector: 'app-tpnv',
  templateUrl: './tpnv.component.html',
  styleUrls: ['./tpnv.component.css']
})
export class TpnvComponent implements OnInit {
  message:boolean;
  constructor(private _hideService: HideService) { }

  ngOnInit() {
    this._hideService.cast.subscribe(message => this.message = message);
  }
  onclick()
  {
    if(this.message == true){
        this._hideService.changeMessage(false);
      }
      else if(this.message == false){
        this._hideService.changeMessage(true);
      }
    
  }
  
}
