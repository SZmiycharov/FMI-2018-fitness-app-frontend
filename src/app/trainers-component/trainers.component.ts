import { AuthenticationService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer';
import $ = require("jquery");

@Component({
  selector: 'trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  message: string;
  trainers: Trainer[];
  translation_text = "";
  translate_to_language = "";

  constructor(private _service: AuthenticationService) {
    this.trainers = [new Trainer("Ivan", "08912912", 25, 3),
    new Trainer("Gosho", "089324912", 28, 10),
    new Trainer("Penka", "0885524912", 19, 1),
    new Trainer("Petko", "089324912", 38, 15),
    new Trainer("Ivan", "0875524912", 19, 2)];
  }

  contactTrainer() {
    alert("This trainer is offline! \n You will get answer as soon as possible.");
    this.message = "";
  }

  ngOnInit() {
    this._service.checkCredentials();
  }

  isValidData(): boolean {
    if (this.translation_text == '' || this.translate_to_language == '') {
      return false;
    }

    return true;
  }

  translateText() {
    let url = "http://127.0.0.1:1948/translate?text=" + this.translation_text + "&translate_to=" + this.translate_to_language + "&fbclid=IwAR3GC8__zWV5KmaAZTqZT0NuYGnCoC4fXoSgImvJtNBYZYPJAi3s_Eetnpk"

    console.log(url);

    var request = $.ajax({
      type: "GET",
      url: url
    });
    request.done(function (res) {
      console.log(res);
      $('#translated_text').text("Translation: " + res);
    });
    request.fail(function (jqXHR, textStatus) {
      console.error(jqXHR);
      console.log({ err: true, message: "Request failed: " + textStatus });
    });

    
  }
}
