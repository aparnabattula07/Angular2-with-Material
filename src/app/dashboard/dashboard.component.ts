import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('donut') donut: ElementRef;
  constructor() { }

  ngOnInit() {
        
    }
}
