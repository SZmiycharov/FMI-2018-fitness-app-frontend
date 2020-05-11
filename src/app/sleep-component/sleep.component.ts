import { Router } from '@angular/router';
import {AuthenticationService } from './../services/login.service';
import {Component, ElementRef, OnInit} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Sleep } from '../model/sleep';

 
@Component({
    selector: 'sleep',
    templateUrl: './sleep.component.html'
})
 
 export class SleepComponent implements OnInit {  
    public sleep = new Sleep();
 
    constructor(private _router: Router,  private _service:AuthenticationService, private profileService: ProfileService) {}
 
    ngOnInit() {
      this._service.checkCredentials();
    }

    sleepAnalyze() {
      // let differenceSleep = this.sleep.wakeUp - this.sleep.fallAsleep;

      // if(differenceSleep < 0)
      // {
      //   differenceSleep += 24;
      // }

      // if(differenceSleep < 6)
      // {
      //   this.sleepAnalysisMessage = "Sleep more, definitely!";
      // }
      // else if (differenceSleep < 10)
      // {
      //   this.sleepAnalysisMessage = "Perfect sleep time!";
      // }
      // else
      // {
      //   this.sleepAnalysisMessage = "Stop sleeping, you lazy person!!";
      // }
       this.profileService.calculateSleepInfo(this.sleep).subscribe((sleep: Sleep) =>{
         console.log(sleep);
         this.sleep = sleep;
       });
    }
    

    isValidData():boolean{
        if(! this.sleep.fallAsleep || ! this.sleep.wakeUp) {
            return false;
        }
   
        return true;
    }
}