import { Component, OnInit } from '@angular/core';
import {DatalistService} from '../datalist.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  sub;
  id;
  singleIdData;
  constructor(private dataList:DatalistService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getDataById(this.id);
    });
  }

  getDataById(id){
    this.dataList.getDataById(id).subscribe(data=>{
      this.singleIdData=data;
      console.log(this.singleIdData)
    })
  }
}
