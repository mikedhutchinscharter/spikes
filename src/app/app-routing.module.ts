import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StuffDetailComponent } from './stuff-detail/stuff-detail.component';
import { StuffComponent } from './stuff/stuff.component';
import { NetworkComponent } from './network/network.component';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SiteComponent } from './site/site.component';
import { NetworkDetailsComponent } from './network-details/network-details.component';

const routes: Routes = [
  { path: 'network', component: NetworkComponent },
  { path: 'network/:networkId', component: NetworkComponent, children: [
    { path: '', component: SitesComponent, outlet: 'list' },
    { path: 'sites', component: NetworkDetailsComponent },
    { path: 'site/:siteId', component: SiteDetailsComponent }
  ] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
