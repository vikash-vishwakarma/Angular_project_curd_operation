import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { CustomerComponent } from './customer/customer.component';
import { OperatorComponent } from './operator/operator.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashboardComponent,
    DriverComponent,
    CustomerComponent,
    OperatorComponent,
    FranchiseComponent,
    CustomerlistComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
