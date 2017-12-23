import { StockinService } from './../stockin.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from './../../product/product.service';
import { SizeService } from './../../size/size.service';

@Component({
  selector: 'app-stockin-register',
  templateUrl: './stockin-register.component.html',
  styleUrls: ['./stockin-register.component.css']
})
export class StockinRegisterComponent implements OnInit {

  stockin = {id:null, dateIn:null, product:'', size:'', quantity:''};
  products: any = [];
  sizes: any = [];
  sizeProducts = [];
  sz: boolean = false;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private stockinService: StockinService,
              private sizeService: SizeService,
              private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        let id = params["id"];

        this.products = [];

        this.productService.list(null).subscribe(
          rtn => {
            this.products = rtn;
          }
        );
    
        this.sizeService.list().subscribe(
          rtn => {
            this.sizes = rtn;
          }
        );
        if (id !== undefined && id !== '') {
          this.loadStockin(id);
        }
      }
    );
  }

  loadStockin(id: string) {
    this.stockinService.get(id).subscribe(
      rtn => {
        this.onChangeProduct(rtn.product.id, rtn.size.id);
        this.stockin.id = rtn.id;
        this.stockin.dateIn = new Date(rtn.dateIn);
        this.stockin.product = rtn.product.id;
        this.stockin.quantity = rtn.quantity;
      }
    );
  }

  clear() {
    this.stockin = {id:null, dateIn:null, product:'', size:'', quantity:''};
  }

  onChangeProduct(product, sizeId) {
    this.products.forEach(item => {
      if(item.id === product) {
        if(item.size) {
          this.sz = true;
          this.sizes.forEach(s => {
            if(item.productCategory.id === s.productCategory.id) {
              this.sizeProducts.push(s);
            }
          });
          if(sizeId != null) {
            this.stockin.size = sizeId;
          }
        }
      }
    });
  }

  onClose() {
    this.router.navigate(['stockin']);
  }

  onSave() {
    let st = {dateIn: this.stockin.dateIn, product: {id: this.stockin.product}, size: {id: this.stockin.size}, quantity:this.stockin.quantity};

    if(this.stockin.id != null) {
      this.stockinService.update(this.stockin.id, st).subscribe(
        rtn => {
          console.log("Updated", rtn);
          this.clear();
          this.router.navigate(['stockin']);
        }
      );
    } else {
      this.stockinService.create(st).subscribe(
        rtn => {
          console.log("Created", rtn);
          this.clear();
          this.router.navigate(['stockin']);
        }
      );
    }
    
  }
}
