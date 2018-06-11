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
  option = {name:'Trainer', value:'1', checked:true};
  constructor( private _service:AuthenticationService, private profileService: ProfileService) {
  this.ageActivated = false;

  }
  
  changeInformation(){
    if(this.option.checked == false) {
      console.log("trainer")
      this.user.role ="trainer";
    } else {
      this.user.role ="client";
    }
    this.profileService.setUser(this.user);
    location.reload();
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
