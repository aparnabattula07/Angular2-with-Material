import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import {FormComponent} from './form/form.component';
import {TableComponent} from './table/table.component';
import {CardGridComponent} from './card-grid/card-grid.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import{SampleComponent} from './sample/sample.component';



const routes: Routes =[
  // { path: '', redirectTo: '/table', pathMatch: 'full' },
    { path: 'form',component: FormComponent },
    { path: 'table',component: TableComponent },
    { path: 'card',component: CardGridComponent },
    { path: 'dashboard',component: DashboardComponent },
    {path:'sample',component:SampleComponent}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
