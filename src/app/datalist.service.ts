import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import{Response} from '@angular/http';
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
// import {TableComponent} from './table/table.component'
@Injectable()
export class DatalistService {

  constructor(private http:HttpClient) { }
  
   getData(){
    let url='https://jsonplaceholder.typicode.com/posts';
     return this.http.get(url)
     .map((res:Response) =>{
return res;
     })
  
   }

   getDataById(id) {
     console.log(id)
    let url='https://jsonplaceholder.typicode.com/posts/'+id;
     return this.http.get(url)
     .map((res:Response)=>{
       return res;
     })
   }
   

}
