import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StuffDetailComponent } from './stuff-detail/stuff-detail.component';
import { StuffComponent } from './stuff/stuff.component';
import { NetworkComponent } from './network/network.component';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SiteComponent } from './site/site.component';
import { NetworkDetailsComponent } from './network-details/network-details.component';
import { CircuitsListComponent } from './circuits-list/circuits-list.component';
import { CircuitDetailsComponent } from './circuit-details/circuit-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'networks', pathMatch: 'full' },
  { path: 'networks', component: NetworkComponent },
  { path: 'networks/:networkId', component: NetworkComponent, children: [
    { path: '', component: SitesComponent, outlet: 'list' },
    { path: 'sites', component: NetworkDetailsComponent },
    { path: 'sites/:siteId', component: SiteDetailsComponent, children: [
      { path: '', component: CircuitsListComponent, outlet: 'list' },
      { path: 'circuits/:circuitId', component: CircuitDetailsComponent }
     ] }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
