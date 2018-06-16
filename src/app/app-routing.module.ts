import { Life1Component } from './articles/life-style-component/new-article/life1.component';
import { Life2Component } from './articles/life-style-component/new-article.1/life2.component';
import { Life3Component } from './articles/life-style-component/new-article.2/life3.component';
import { Food3Component } from './articles/food-component/new-article.2/food3.component';
import { Food2Component } from './articles/food-component/new-article.1/food2.component';
import { Food1Component } from './articles/food-component/new-article/food1.component';
import { EditProgramComponent } from './edit-program-component/edit-program.component';
import { WorkoutComponent } from './articles/workout-component/workout.component';
import { FoodComponent } from './articles/food-component/food.component';
import { LifeStyleComponent } from './articles/life-style-component/lifestyle.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { LoginComponent } from './login-component/login.component';
import { ClientsComponent } from './clients-component/clients.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PersonalInformationComponent } from './personal-information-component/personal-information.component';
import { WorkComponent } from './work-component/work.component';
import { TechnologiesComponent } from './technologies-component/technologies.component';
import { SleepComponent } from './sleep-component/sleep.component';
import { TrainersComponent } from './trainers-component/trainers.component';
import { SettingsComponent } from './settings-component/settings.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/technologies', pathMatch: 'full' },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'work', component: WorkComponent },
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'sleep', component: SleepComponent},
  { path: 'trainers', component: TrainersComponent},
  { path: 'setings', component: SettingsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'lifestyle', component: LifeStyleComponent},
  { path: 'life1', component: Life1Component},
  { path: 'life2', component: Life2Component},
  { path: 'life3', component: Life3Component},
  { path: 'food', component: FoodComponent},
  { path: 'food1', component: Food1Component},
  { path: 'food2', component: Food2Component},
  { path: 'food3', component: Food3Component},
  { path: 'workout', component: WorkoutComponent},
  { path: 'edit-program', component: EditProgramComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}