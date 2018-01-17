import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisService } from './share/regis.service';
import { MaterialModule } from './material.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxQRCodeModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, data: { title: 'หน้าหสัก' }},
      {path: 'register/:id', component: RegisterComponent, data: { title: 'ลงทะเบียน' }},
      {path: '**', redirectTo: 'home'}
    ])
  ],
  providers: [ RegisService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
