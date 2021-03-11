import { Component, OnInit } from '@angular/core';
import {DateService} from './date.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  date: any
  time: any
  constructor(public DateService: DateService){}
  

  ngOnInit() {
    this.getDate()
  }

  getDate(){
  this.DateService.getDate().subscribe(res=>{
    this.date = res
    console.log(this.date)
  })
  }
  
}


