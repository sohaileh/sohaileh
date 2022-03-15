import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafetyDashboardComponent } from './components/safety-dashboard/safety-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'safety-dashboard', pathMatch: 'full' },
  { path: 'safety-dashboard', component: SafetyDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
