import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'greeting', component: GreetingComponent },
  { path: '**',   redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
