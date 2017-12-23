import { EmployeeService } from './../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: any = {};
  stockout: any = [];

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        let id = params["id"];

        if (id !== undefined && id !== '') {
          this.loadEmployee(id);
          this.listStockoutByEmployeeId(id, "1");
        }
      }
    );
  }

  loadEmployee(id: string) {
    this.employeeService.get(id).subscribe(
      rtn => {
        console.log(rtn)
        this.employee = rtn;
      }
    );
  }

  listStockoutByEmployeeId(employeeId: string, productCategoryId: string) {
    this.employeeService.listStockoutByEmployeeId(employeeId, productCategoryId).subscribe(
      rtn => {
        this.stockout = rtn.content;
      }
    );
  }

  onClose() {
    this.router.navigate(['employee']);
  }
}
