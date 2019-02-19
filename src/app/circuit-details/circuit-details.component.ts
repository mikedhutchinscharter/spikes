import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CircuitsService } from '../circuits.service';

@Component({
  selector: 'app-circuit-details',
  templateUrl: './circuit-details.component.html',
  styleUrls: ['./circuit-details.component.less']
})
export class CircuitDetailsComponent implements OnInit {
  circuitId: any;
  circuit: any;

  constructor(private activatedRoute: ActivatedRoute, private circuitsService: CircuitsService) {
    this.activatedRoute.params.subscribe(p => this.init(p));
   }

  ngOnInit() {
  }
  init(p: Params): void {
    this.circuitId = p.circuitId;
    this.circuitsService.getById(this.circuitId, circuit => this.circuit = circuit);
  }


}
