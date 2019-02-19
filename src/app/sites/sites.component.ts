import { Component, OnInit } from '@angular/core';
import { SitesService } from '../sites.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.less']
})
export class SitesComponent implements OnInit {
  networkId: any;
  network: any;
  sites = [];

  constructor(private activatedRoute: ActivatedRoute, private sitesService: SitesService) {
    this.activatedRoute.params.subscribe(p => this.init(p));
   }

  ngOnInit() {
  }
  init(p: Params): void {
    this.networkId = p.networkId;
    this.sitesService.get(this.networkId, sites => this.sites = sites);
  }


}
