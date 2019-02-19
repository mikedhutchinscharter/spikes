import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor() { }
  networks = [
    { networkId: 'n1', name: 'net uno' },
    { networkId: 'n2', name: 'net dos' }
  ];

  get(success: (list: any[]) => void) {
    success(this.networks);
  }

  getById(id, success: (network: any) => void){
    const network = this.networks.filter(n => n.networkId === id)[0];
    success(network);
  }
 }
