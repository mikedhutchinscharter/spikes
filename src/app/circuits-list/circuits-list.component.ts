import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CircuitsService } from '../circuits.service';

@Component({
  selector: 'app-circuits-list',
  templateUrl: './circuits-list.component.html',
  styleUrls: ['./circuits-list.component.less']
})
export class CircuitsListComponent implements OnInit {
  networkId: any;
  siteId: any;
  circuits = [];

  constructor(private activatedRoute: ActivatedRoute, private circuitsService: CircuitsService) {
    this.activatedRoute.params.subscribe(p => this.init(p));
  }

  ngOnInit() {
  }

  init(p: Params): void {
    this.networkId = p.networkId;
    this.siteId = p.siteId;
    this.circuitsService.get(this.siteId, (list) => this.circuits = list);
  }

}
