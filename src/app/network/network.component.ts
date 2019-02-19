import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.less']
})
export class NetworkComponent implements OnInit {
  networkId: any;
  network: any;

  constructor(private activatedRoute: ActivatedRoute, private networkService: NetworkService) {
    this.activatedRoute.params.subscribe(params => this.init(params));
   }

  ngOnInit() {
  }

  init(params){
    this.networkId = params.networkId;
    this.networkService.getById(this.networkId, net => this.network = net);
  }
}
