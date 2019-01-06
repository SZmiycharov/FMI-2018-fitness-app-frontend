import { User } from '../model/user';
import {Injectable} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ProfileService {

    usersCount:number;
    private url = environment.devUrl + '/calculate' ;  // URL to web api

  constructor(
    private _router: Router, 
    private http: HttpClient){
    }

    getUserFromLocalStorage():User {
        let user =  new User('','');
        user.age = Number(localStorage.getItem("age"));
        user.weight = Number(localStorage.getItem("weight"));
        user.height = Number(localStorage.getItem("height"));
        user.firstName = localStorage.getItem("firstName");
        user.lastName = localStorage.getItem("lastName");
        user.email = localStorage.getItem("email");
        user.gender = localStorage.getItem("gender");
        return user;
    }

    setUser(user:User){
        localStorage.setItem('age', String(user.age));
        localStorage.setItem('weight', String(user.weight));
        localStorage.setItem('height', String(user.height));
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('email', user.email);
        localStorage.setItem('gender', user.gender);
        localStorage.setItem('role', user.role);
    }

    calculateUserInformation(user:User) {
        return this.http.post<User>(this.url, user);
    }

    

}