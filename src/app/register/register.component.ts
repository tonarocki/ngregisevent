import { Component, OnInit } from '@angular/core';

import { ParamMap, Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { RegisService } from '../share/regis.service';

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
  constructor(private route: ActivatedRoute, private router: Router, private registerservice: RegisService) {
    this.param = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.sub = this.registerservice.getregisbyid(this.param).subscribe(
      (regislistid) => {
        console.log(regislistid);
        this.regisTitle = regislistid.title;
        this.regisDetail = regislistid.detail;
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
