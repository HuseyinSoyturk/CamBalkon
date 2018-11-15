import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule
  , MatGridListModule, MatIconModule, MatTabsModule, MatListModule, MatDividerModule
} from '@angular/material';
import { KonvaModule } from 'ng2-konva';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { DrawComponent } from './draw/draw.component';
import { DrawInfoComponent } from './draw/draw-info/draw-info.component';
import { DrawAreaComponent } from './draw/draw-area/draw-area.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    DrawComponent,
    DrawInfoComponent,
    DrawAreaComponent,
    CustomerComponent,
    CustomerListComponent,
    ProductComponent,
    ProductEditComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    KonvaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
