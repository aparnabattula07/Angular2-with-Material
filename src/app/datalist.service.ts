import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import{Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DatalistService {

  constructor(private tabledata:HttpClient) { }
  //  getData(){
  //    return this.tabledata.get('https://jsonplaceholder.typicode.com/posts')
  //    .map((res:Response) => res.json());
  //  }
   

}
