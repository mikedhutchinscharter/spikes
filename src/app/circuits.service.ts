import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {
  circuits = [
    { siteId: 's1', circuitId: '1001', name: 'First Circuit - s1' },
    { siteId: 's1', circuitId: '1002', name: 'Second Circuit - s1' },
    { siteId: 's1', circuitId: '1003', name: 'Third Circuit - s1' },
    { siteId: 's2', circuitId: '1004', name: 'First Circuit - s2' },
  ]

  constructor() { }
  get(siteId: any, success: (list: any) => any): any {
    const circuits = this.circuits.filter(cir => cir.siteId === siteId);
    success(circuits);
  }

  getById(circuitId: any, success: (circuit: any) => any): any {
    const circuit = this.circuits.filter(s => s.circuitId === circuitId)[0];
    success(circuit);
  }

}
