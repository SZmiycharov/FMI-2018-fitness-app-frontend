import { Router } from '@angular/router';
import {AuthenticationService } from './../services/login.service';
import {Component, ElementRef, OnInit} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Steps } from '../model/steps';


@Component({
    selector: 'steps',
    templateUrl: './steps.component.html'
})

 export class StepsComponent implements OnInit {  
    public steps = new Steps();

    constructor(private _router: Router,  private _service:AuthenticationService, private profileService: ProfileService) {}

    ngOnInit() {
      this._service.checkCredentials();
    }

    stepsAnalyze() {
      let url = "http://127.0.0.1:1996/step-count-analyze?steps=" + this.steps.count + "&token=zWV5KmaAZTqZT0NuYGnCoC4fXoSgImvJtNBY"

      console.log(url);
  
      var request = $.ajax({
        type: "GET",
        url: url
      });
      request.done(function (res) {
        console.log(res);
        $('#steps-analysis-text').text(res);
      });
      request.fail(function (jqXHR, textStatus) {
        console.error(jqXHR);
        console.log({ err: true, message: "Request failed: " + textStatus });
      });
    }

    isValidData():boolean{
        if(! this.steps.count) {
            return false;
        }

        return true;
    }
} 