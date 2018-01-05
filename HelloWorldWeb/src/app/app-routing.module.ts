import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EurocurrencyComponent } from './eurocurrency/eurocurrency.component';
import { GbpcurrencyComponent } from './gbpcurrency/gbpcurrency.component';

const routes: Routes = [
  { path: '', redirectTo: '/gbp', pathMatch: 'full' },
  { path: 'gbp', component: GbpcurrencyComponent },
  { path: 'eur', component: EurocurrencyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

 
  
})
export class AppRoutingModule { }
