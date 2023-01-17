import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { ResultsComponent } from './shared/results/results.component';
import { SearchboxComponent } from './shared/searchbox/searchbox.component';

const routes: Routes = [
  {
    path: '',
    component: SearchboxComponent,
  },
  {
    path: 'results/:id',
    component: ResultsComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
