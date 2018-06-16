import { AuthenticationService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'life3',
  templateUrl: './life3.component.html',
  styleUrls: ['./life3.component.css']
})
export class Life3Component implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}
