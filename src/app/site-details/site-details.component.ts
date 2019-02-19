import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.less']
})
export class SiteDetailsComponent implements OnInit {
  siteId: any;
  site: any;

  constructor(private activatedRoute: ActivatedRoute, private sitesService: SitesService) {
    this.activatedRoute.params.subscribe(p => this.init(p));
   }

  ngOnInit() {
  }
  init(p: Params): void {
    this.siteId = p.siteId;
    this.sitesService.getById(this.siteId, site => this.site = site);
  }

}
