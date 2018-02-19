import {MatDatepickerModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
import{CommonModule} from '@angular/common';

@NgModule({
    imports:[
        CommonModule
    ],
    exports:[
        MatDatepickerModule ,
        MatFormFieldModule,
        MatInputModule
        
    ],
    declarations:[]
})

export class MaterialUiModule{

}