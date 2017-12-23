import { DeleteDialogComponent } from './../dialog/delete-dialog/delete-dialog.component';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

import { MatDialog } from '@angular/material';

import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any = [];
  page: number = 0;
  totalPages: number = 0;
  pageScroll = 885;

  constructor(private router: Router,
              private employeeService: EmployeeService,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.list(this.page);
  }

  list(page) {
    this.employeeService.list(page).subscribe(
      rtn => {
        this.totalPages = rtn.totalPages;
        this.employees = this.employees.concat(rtn.content);
      }
    );
  }

  onAdd() {
    this.router.navigate(['employee', 'add']);
  }

  onEdit(id: string) {
    this.router.navigate(['employee', id]);
  }

  onDetail(id: string) {
    this.router.navigate(['employee', id, 'detail']);
  }

  onDelete(id: string) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        this.employeeService.delete(id).subscribe(
          rtn => {
            this.employees = [];
            this.list(this.page);
          }
        );
      }
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if(number > this.pageScroll) {
      if(this.totalPages > (this.page+1)) {
        this.page++;
        this.pageScroll = (this.pageScroll + 1200);
        this.list(this.page);
      }
    }
  }

}
