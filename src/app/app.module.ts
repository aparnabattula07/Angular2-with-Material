import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import{MaterialUiModule}from'./material-ui.module';
import { FormComponent,DialogOverviewExampleDialog } from './form/form.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';


// services
import{DatalistService} from './datalist.service'


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    CardGridComponent,
    DashboardComponent,
    SampleComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule
    // NgbModule
  ],
  providers: [DatalistService],
  bootstrap: [AppComponent],
  entryComponents:[DialogOverviewExampleDialog]
})
export class AppModule {

 }
