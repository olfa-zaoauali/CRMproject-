import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActiviteComponent } from './activite/activite.component';
import { PerteComponent } from './perte/perte.component';
import { ClientsComponent } from './clients/clients.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { OpportuniteComponent } from './opportunite/opportunite.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ActiviteComponent,
    PerteComponent,
    ClientsComponent,
    PipelineComponent,
    OpportuniteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
