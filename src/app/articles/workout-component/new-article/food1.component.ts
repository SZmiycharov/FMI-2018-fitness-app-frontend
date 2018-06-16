import { AuthenticationService } from '../../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'food1',
  templateUrl: './food1.component.html',
  styleUrls: ['./food1.component.css']
})
export class Food1Component implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}
