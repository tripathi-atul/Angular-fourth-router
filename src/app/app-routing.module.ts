import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Route[] = [
  
  {path:'', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'setting', 
    component: SettingComponent,
    children: [
      {path: 'profile', component: ProfileComponent}
    ]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
