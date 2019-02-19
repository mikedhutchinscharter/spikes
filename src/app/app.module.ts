import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuffListComponent } from './stuff-list/stuff-list.component';
import { StuffDetailComponent } from './stuff-detail/stuff-detail.component';
import { StuffComponent } from './stuff/stuff.component';
import { NetworkComponent } from './network/network.component';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SiteComponent } from './site/site.component';
import { NetworkDetailsComponent } from './network-details/network-details.component';
import { CircuitsListComponent } from './circuits-list/circuits-list.component';
import { CircuitDetailsComponent } from './circuit-details/circuit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StuffListComponent,
    StuffDetailComponent,
    StuffComponent,
    NetworkComponent,
    SitesComponent,
    SiteDetailsComponent,
    SiteComponent,
    NetworkDetailsComponent,
    CircuitsListComponent,
    CircuitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
