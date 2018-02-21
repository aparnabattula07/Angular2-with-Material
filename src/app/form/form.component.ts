import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

 


  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  panelOpenState: boolean = false;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}
  
    // openDialog(): void {
    //   let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //     width: '250px',
    //     data: { name: this.name, animal: this.animal }
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     this.animal = result;
    //   });
    // }

}
