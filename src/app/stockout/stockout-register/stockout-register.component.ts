import { ReasonService } from './../../reason/reason.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './../../employee/employee.service';
import { ProductService } from './../../product/product.service';
import { SizeService } from './../../size/size.service';
import { StockoutService } from './../stockout.service';
import { CompanyService } from './../../company/company.service';

@Component({
  selector: 'app-stockout-register',
  templateUrl: './stockout-register.component.html',
  styleUrls: ['./stockout-register.component.css']
})
export class StockoutRegisterComponent implements OnInit {

  stockout = {id:null, dateOut:null, product:'', size:'', quantity:'', employee:'', company:'', reason:null, identification:null};
  products: any = [];
  sizes: any = [];
  sizeProducts = [];
  sz: boolean = false;
  employees: any = [];
  companies: any = [];
  reasons: any = [];
  type: string = "2";

  otherProducts = [];
  epiProducts = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sizeService: SizeService,
              private productService: ProductService,
              private employeeService: EmployeeService,
              private companyService: CompanyService,
              private reasonService: ReasonService,
              private stockoutService: StockoutService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        let id = params["id"];

        this.products = [];
        this.otherProducts = [];
        this.epiProducts = [];

        this.productService.list(null).subscribe(
          rtn => {
            let prod = rtn;

            prod.forEach(item => {
              if(item.productCategory.id == 1) {
               this.epiProducts.push(item);
              } else {
                this.otherProducts.push(item);
              }
           })
          }
        );
    
        this.sizeService.list().subscribe(
          rtn => {
            this.sizes = rtn;
          }
        );

        this.companyService.list().subscribe(
          rtn => {
            this.companies = rtn;
          }
        );

        this.reasonService.list().subscribe(
          rtn => {
            this.reasons = rtn;
          }
        );

        if (id !== undefined && id !== '') {
          this.loadStockout(id);
        }
      }
    );
  }

  onSelectedType = function(type: number) {
    this.stockout.product = null;
    if(type === 2) {
      this.products = this.otherProducts;
    } else {
      this.products = this.epiProducts;
    }
  }

  listEmployee(companyId: string, employeeId: string) {
    this.employeeService.listByCompanyId(companyId).subscribe(
      rtn => {
        this.employees = rtn;
        if(employeeId != null) {
          this.stockout.company = companyId;
          this.stockout.employee = employeeId;
        }
      }
    );
  }

  loadStockout(id: string) {
    this.stockoutService.get(id).subscribe(
      rtn => {
        this.onChangeProduct(rtn.product.id, rtn.size.id);
        this.stockout.id = rtn.id;
        this.stockout.dateOut = new Date(rtn.dateOut);
        this.stockout.product = rtn.product.id;
        this.stockout.quantity = rtn.quantity;
        this.listEmployee(rtn.employee.company.id, rtn.employee.id);
        this.stockout.identification = rtn.identification;
        this.stockout.reason = rtn.reason.id;

        if(rtn.product.productCategory.id === 1) {
          this.type = "1";
        }
      }
    );
  }

  clear() {
    this.stockout = {id:null, dateOut:null, product:'', size:'', quantity:'', employee:'', company:'', reason:null, identification:null};
  }

  onChangeProduct(product, sizeId) {
    this.sizeProducts = [];
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
            this.stockout.size = sizeId;
          }
        }
      }
    });
  }

  onClose() {
    this.router.navigate(['stockout']);
  }

  onSave() {
    let st = {dateOut: this.stockout.dateOut, product: {id: this.stockout.product}, size: {id: this.stockout.size}, quantity:this.stockout.quantity, employee: {id: this.stockout.employee}, identification: this.stockout.identification, reason: {id: this.stockout.reason}};

    if(this.stockout.id != null) {
      this.stockoutService.update(this.stockout.id, st).subscribe(
        rtn => {
          console.log("Updated", rtn);
          this.clear();
          this.router.navigate(['stockout']);
        }
      );
    } else {
      this.stockoutService.create(st).subscribe(
        rtn => {
          console.log("Created", rtn);
          this.clear();
          this.router.navigate(['stockout']);
        }
      );
    }
    
  }

}
