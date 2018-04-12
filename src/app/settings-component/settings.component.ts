import { User } from './../model/user';
import { ProfileService } from './../services/profile.service';
import { AuthenticationService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  implements OnInit {
  public ageActivated:boolean;
  public user:User;

  constructor( private _service:AuthenticationService, private profileService: ProfileService) {
  this.ageActivated = false;

  }
  
  changeInformation(){
    this.profileService.setUser(this.user);
  }

  ngOnInit() {
    this.user = this.profileService.getUserFromLocalStorage();
    this._service.checkCredentials();
  }

  activateAge(){
    if(this.ageActivated == false) {
    this.ageActivated = true;
  } else {
    this.ageActivated = false;
  }
}
}
