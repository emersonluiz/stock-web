import { DeleteDialogComponent } from './../dialog/delete-dialog/delete-dialog.component';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { MatDialog, MatDialogRef } from '@angular/material';

import { StockinService } from './stockin.service';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.css']
})
export class StockinComponent implements OnInit {

  stockin: any = [];
  page: number = 0;
  totalPages: number = 0;
  pageScroll = 885;

  constructor(private router: Router, 
              private stockinService: StockinService,
              public dialog: MatDialog,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.list(this.page);
  }

  onAdd() {
    this.router.navigate(['stockin', 'add']);
  }

  onEdit(id: string) {
    this.router.navigate(['stockin', id]);
  }

  onDelete(id: string) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true') {
        this.stockinService.delete(id).subscribe(
          rtn => {
            this.stockin = [];
            this.list(this.page);
          }
        );
      }
    });
  }

  list(page) {
    this.stockinService.list(page).subscribe(
      rtn => {
        this.totalPages = rtn.totalPages;
        this.stockin = this.stockin.concat(rtn.content);
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
