import { AuthenticationService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'food3',
  templateUrl: './food3.component.html',
  styleUrls: ['./food3.component.css']
})
export class Food3Component implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}
