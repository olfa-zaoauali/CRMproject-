import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiviteComponent } from './activite/activite.component';
import { PerteComponent } from './perte/perte.component';
import { ClientsComponent } from './clients/clients.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { OpportuniteComponent } from './opportunite/opportunite.component';

const routes: Routes = [
  {
    path:'',
    component:PipelineComponent
  },
  {
    path:'activite',
    component:ActiviteComponent
  },
  {
    path:'perte',
    component:PerteComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'opportunite',
    component:OpportuniteComponent
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
