import { ProfileService } from './../services/profile.service';
import { User } from './../model/user';
import { AuthenticationService } from '../services/login.service';
import { Workout } from './../model/workout';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../model/exercise';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})

export class PersonalInformationComponent implements OnInit  {
  workouts:Workout[];
  date:Date;
  user:User;
  isStarted:boolean;
  isActiveProfile:boolean;
  constructor( private _service:AuthenticationService, private profileService:ProfileService) {
    this.date = new Date();
    this.workouts= [new Workout(), new Workout(), new Workout(), new Workout(),new Workout(),new Workout(),new Workout()];
    this.isActiveProfile = true;
  }


  ngOnInit() {
    this.user = this.profileService.getUserFromLocalStorage();
    this._service.checkCredentials();
    this.profileService.calculateUserInformation(this.user).subscribe ((user:User) => {
    this.user = user;
    });
  }

  setIsActive(){
    this.isActiveProfile = false;
  }

  goToProfile() {     
    this.isActiveProfile = true;
    console.log(this.isActiveProfile);

}
}