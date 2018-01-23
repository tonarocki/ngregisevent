import { Component, OnInit, ViewChild} from '@angular/core';

import { ParamMap, Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { OnDestroy, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RegisService } from '../share/regis.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Regisdetail } from '../share/regdetail.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit, OnDestroy {
  private sub: any = null;
  param: any;
  regislistid: any;
  regisTitle: String;
  regisDetail: String;
  registeruser: any;
  //userdetail: Element[];
  Regdetail: Regisdetail;




  //displayedColumns = ['stdid', 'prefix', 'fname', 'lname'];
  //dataSource = new MatTableDataSource<Element>(this.userdetail);

  //@ViewChild(MatPaginator) paginator: MatPaginator;




  constructor(private route: ActivatedRoute, private router: Router, private registerservice: RegisService) {
    this.param = this.route.snapshot.params.id;
  }

  clear(registerForm): void {
    registerForm = {};
  }

  register(formValue): void {
    const stdid = formValue.stdid;
    const prefix = formValue.prefix;
    const fname = formValue.fname;
    const lname = formValue.lname;
    const email = formValue.email;
    const tel = formValue.tel;
    const agencyid = '1';
    this.registerservice.register(stdid, prefix, fname, lname, email, tel, agencyid, this.param).subscribe(
      (regdetail) => {
        console.log(regdetail);
         this.Regdetail = regdetail;
         if (this.Regdetail.id) {
           alert('บันทึกข้อมูลเรียบร้อย รหัสคือ ' + this.Regdetail.id);
         }
      },
      (error) => {
        // console.log(error.error.description);
        console.log(error);
        //this.errorMessage = error.error.description;
      }
    );
 }

  ngOnInit() {
    this.sub = this.registerservice.getregisbyid(this.param).subscribe(
      (regislistid) => {
        console.log(regislistid);
        this.regisTitle = regislistid.title;
        this.regisDetail = regislistid.detail;

        this.registeruser = regislistid.RegisDetails;
      }, (err) => {
        console.log(err);
        this.router.navigate(['/home']);
      }
    );
  }

  ngOnDestroy() {
    if (this.sub != null) {
        this.sub.unsubscribe();
    }
  }
}

export interface Element {
  stdid: string;
  prefix: string;
  fname: string;
  lname: string;
}

const ELEMENT_DATA: Element = this.userdetail  ;
