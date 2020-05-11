import { Life1Component } from './articles/life-style-component/new-article/life1.component';
import { Life2Component } from './articles/life-style-component/new-article.1/life2.component';
import { Life3Component } from './articles/life-style-component/new-article.2/life3.component';
import { Food3Component } from './articles/food-component/new-article.2/food3.component';
import { Food2Component } from './articles/food-component/new-article.1/food2.component';
import { Food1Component } from './articles/food-component/new-article/food1.component';
import { EditProgramComponent } from './edit-program-component/edit-program.component';
import { WorkoutService } from './services/workout.service';
import { ProfileService } from './services/profile.service';
import { WorkoutComponent } from './articles/workout-component/workout.component';
import { FoodComponent } from './articles/food-component/food.component';
import { LifeStyleComponent } from './articles/life-style-component/lifestyle.component';
import { LoginComponent } from './login-component/login.component';
import { AuthenticationService } from './services/login.service';
import { ClientsComponent } from './clients-component/clients.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information-component/personal-information.component';
import { WorkComponent } from './work-component/work.component';
import { TechnologiesComponent } from './technologies-component/technologies.component';
import { TrainersComponent } from './trainers-component/trainers.component';
import { SettingsComponent } from './settings-component/settings.component';
import { EditProgramModal } from './modals/edit-program-modal';
import { ModalService } from './modals/modal-service';
import { AppRoutingModule }     from './app-routing.module';
import { RegistrationComponent } from './registration-component/registration.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SleepComponent } from './sleep-component/sleep.component';
import { StepsComponent } from './steps-component/steps.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    WorkComponent,
    TechnologiesComponent,
    SleepComponent,
    StepsComponent,
    TrainersComponent,
    SettingsComponent, 
    ClientsComponent,
    LoginComponent, 
    RegistrationComponent,
    LifeStyleComponent,
    Life1Component,
    Life2Component,
    Life3Component,
    WorkoutComponent,
    FoodComponent, 
    Food1Component,
    Food2Component,
    Food3Component,
    EditProgramComponent,
    EditProgramModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    EditProgramModal
],
  providers: [AuthenticationService, ProfileService, WorkoutService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
