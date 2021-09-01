import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'trackery', component:LandingComponent },
{path:'trackhome', component:LandingComponent },
{path:'trackuser', component:ProfileComponent },
{path:'trackrepo', component:ProfileComponent },
{path:'trackinfo', component:AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
