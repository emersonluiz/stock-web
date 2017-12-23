import { async } from '@angular/core/testing';
import { AlarmService } from './../../alarm/alarm.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  notification: number = 0;

  constructor(private router: Router, private alarmService: AlarmService) { }

  ngOnInit() {
    this.verification();
  }

  verification() {
    Observable.timer(1000, 60000)
    .map(() => this.alarm()).subscribe(
      ()=>console.log("XXX")
    )
  }

  alarm() {
    this.alarmService.getAlarmNotRead().subscribe(
      total => this.notification = total.total
    );
  }

  onHome() {
    this.router.navigate(['']);
  }

  onStockin() {
    this.router.navigate(['stockin']);
  }

  onStockout() {
    this.router.navigate(['stockout']);
  }

  onStock() {
    this.router.navigate(['stock']);
  }

  onEmployee() {
    this.router.navigate(['employee']);
  }
}
