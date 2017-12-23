import { Component, OnInit } from '@angular/core';

import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private stockService: StockService) { }

  stock: any = [];

  ngOnInit() {
    this.list();
  }

  list() {
    this.stockService.list().subscribe(
      rtn => {
        this.stock = rtn;
      }
    );
  }

}
