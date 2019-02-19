import { Component, OnInit } from '@angular/core';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'linguini';
  networks = [];
  // tslint:disable-next-line:variable-name
  constructor(private _networkService: NetworkService) {

  }

  ngOnInit(): void {
    this._networkService.get(nets => this.networks = nets);
  }
}
