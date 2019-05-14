import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { Dash1Component } from './dash1/dash1.component';
import { Dash2Component } from './dash2/dash2.component';



const routes: Routes = [
  { path: '', component: DefaultComponent},
  { path: 'dashboard', component: DashboardComponent,children:[{path:'dash1',component:Dash1Component},{path:'dash2',component:Dash2Component}]},
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'friends', component: FriendsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Dash1Component,Dash2Component, DefaultComponent, DashboardComponent, ProfileComponent, SettingsComponent, FriendsComponent]