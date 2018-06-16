import { AuthenticationService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'life1',
  templateUrl: './life1.component.html',
  styleUrls: ['./life1.component.css']
})
export class Life1Component implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}
