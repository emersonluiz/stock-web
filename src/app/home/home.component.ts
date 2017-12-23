import { AlarmService } from './../alarm/alarm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notifications: any = [];

  constructor(private alarmService: AlarmService) {
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.alarmService.list(0).subscribe(
      rtn => {
        this.notifications = [];
        
        rtn.content.forEach(element => {
          if(element.document !== undefined) {
            element.type = "Documento"
            this.notifications.push(element);
            console.log(element)
          }
        });
      }
    );
  }

  onOpen() {
    console.log("OPEN")
  }

}
