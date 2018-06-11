import { AuthenticationService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer';

@Component({
  selector: 'trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit{
  message:string;
  trainers: Trainer[];
  constructor( private _service:AuthenticationService) {
    this.trainers = [new Trainer("Ivan", "08912912",25,3),
    new Trainer("Gosho", "089324912",28,10),
    new Trainer("Penka", "0885524912",19,1),
    new Trainer("Petko", "089324912",38,15),
    new Trainer("Ivan", "0875524912",19,2)];
  }

  contactTrainer(){
    alert("This trainer is offline! \n You will get answer as soon as possible.");
    this.message ="";
  }

  ngOnInit() {
    this._service.checkCredentials();
  }
}
