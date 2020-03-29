import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MenuComponent } from './menu/menu.component';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorSearchPipe } from './pipes/vendor-search.pipe';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductSearchPipe } from './pipes/product-search.pipe';
import { ReuqestListComponent } from './request/reuqest-list/reuqest-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    UserSearchPipe,
    SortPipe,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    VendorSearchPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductCreateComponent,
    ProductSearchPipe,
    ReuqestListComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
