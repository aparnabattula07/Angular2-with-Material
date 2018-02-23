import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TableComponent} from '../table/table.component'
// import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  form:any={};
  selectedvalue;
  animal: string;
  name: string;
  
  formData=
    [{id:"1",name:"Aparna",Email:"Aparna@caratred.com",phone:"876543433"},
    {id:"2",name:"hari",Email:"hari@caratred.com",phone:"876543433"},
    {id:"3",name:"kranthi",Email:"krathi@caratred.com",phone:"876543433"}]
  table=new TableComponent();

  selectedName:String="I AM Aparna";
  foods = [
    {viewValue: 'Steak'},
    { viewValue: 'Pizza'},
    { viewValue: 'Tacos'}
  ];
  panelOpenState: boolean = false;

  fromdata:any={}

  constructor(public dialog: MatDialog) {}
  ngOnInit(){
    console.log("data",this.table.testing)
  }
 formSubmit(){
   console.log(this.form,"form details");
   console.log(this.selectedvalue);
 }

 byIdData;
  openDialog(formData): void {
    this.byIdData=formData
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data:this.byIdData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      console.log("gfghfh"+this.name )
    });
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
