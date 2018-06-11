import { Workout } from './../model/workout';
import { Exercise } from './../model/exercise';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'edit-program-modal',
    templateUrl: './edit-program-modal.html',
    styleUrls: ['./edit-program-modal.css']
  })
  export class EditProgramModal implements OnInit {
     @Input()   workouts:Workout[];
     @Input() index;
     @Output() workoutsChange: EventEmitter<any>;

    exercise: Exercise;
    constructor(private activeModal: NgbActiveModal){
        this.workoutsChange = new EventEmitter();
        this.workouts = [new Workout(), new Workout(), new Workout(), new Workout(), new Workout(), new Workout(), new Workout()];
    }

    ngOnInit(): void {
        this.exercise = new Exercise("",0,0,0);
    }
    addNewExercise(workoutNumber){
        if(!this.workouts[workoutNumber].exercises) {
            this.workouts[workoutNumber].exercises = [];
        }
        this.workouts[workoutNumber].exercises.push(new Exercise(this.exercise.name, this.exercise.rep,
            this.exercise.set, this.exercise.weight));
        this.workoutsChange.emit(this.workouts);
        this.activeModal.dismiss(false);
    }
    close(){
   
        this.activeModal.dismiss(false);
    }
  }
  
  