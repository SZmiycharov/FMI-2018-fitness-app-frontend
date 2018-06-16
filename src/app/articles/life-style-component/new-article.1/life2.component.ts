import { AuthenticationService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'life2',
  templateUrl: './life2.component.html',
  styleUrls: ['./life2.component.css']
})
export class Life2Component implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}
