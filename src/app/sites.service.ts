import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  sites = [
    { siteId: 's1', networkId: 'n1', name: 'Site One n1' },
    { siteId: 's2', networkId: 'n1', name: 'Site two n1' },
    { siteId: 's3', networkId: 'n1', name: 'Site three n1' },
    { siteId: 's4', networkId: 'n2', name: 'Site four n2' },
    { siteId: 's5', networkId: 'n2', name: 'Site five n2' },
  ];

  get(networkId, success: (net: any) => any): any {
    const sites = this.sites.filter(site => site.networkId === networkId);
    success(sites);
  }

  getById(siteId: any, success: (site: any) => any): any {
    const site = this.sites.filter(s => s.siteId === siteId)[0];
    success(site);
  }

  constructor() { }
}
