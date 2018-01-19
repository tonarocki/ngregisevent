import { Component, OnInit, ViewChild} from '@angular/core';

import { ParamMap, Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { OnDestroy, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RegisService } from '../share/regis.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit, OnDestroy, AfterViewInit {
  private sub: any = null;
  param: any;
  regislistid: any;
  regisTitle: String;
  regisDetail: String;
  public registeruser: any;



  displayedColumns = ['stdid', 'prefix', 'fname', 'lname'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;




  constructor(private route: ActivatedRoute, private router: Router, private registerservice: RegisService) {
    this.param = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.sub = this.registerservice.getregisbyid(this.param).subscribe(
      (regislistid) => {
        console.log(regislistid);
        this.regisTitle = regislistid.title;
        this.regisDetail = regislistid.detail;

        this.registeruser = regislistid.RegisDetails;
        console.log(this.registeruser);


      }, (err) => {
        console.log(err);
        this.router.navigate(['/home']);
      }
    );
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy() {
    if (this.sub != null) {
        this.sub.unsubscribe();
    }
  }
}



const ELEMENT_DATA: any = [this.registeruser]  ;
console.log(this.registeruser);
