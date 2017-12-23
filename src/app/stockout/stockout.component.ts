import { Router } from '@angular/router';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { MatDialog } from '@angular/material';

import { DeleteDialogComponent } from './../dialog/delete-dialog/delete-dialog.component';
import { StockoutService } from './stockout.service';

@Component({
  selector: 'app-stockout',
  templateUrl: './stockout.component.html',
  styleUrls: ['./stockout.component.css']
})
export class StockoutComponent implements OnInit {

  stockout: any = [];
  page: number = 0;
  totalPages: number = 0;
  pageScroll = 885;

  constructor(private router: Router,
              private stockoutService: StockoutService,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.list(this.page);
  }

  onAdd() {
    this.router.navigate(['stockout', 'add']);
  }

  onEdit(id: string) {
    this.router.navigate(['stockout', id]);
  }

  onDelete(id: string) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        this.stockoutService.delete(id).subscribe(
          rtn => {
            this.stockout = [];
            this.list(this.page);
          }
        );
      }
    });
  }

  list(page) {
    this.stockoutService.list(page).subscribe(
      rtn => {
        console.log(rtn)
        this.totalPages = rtn.totalPages;
        this.stockout = this.stockout.concat(rtn.content);
      }
    );
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
