import { Component, OnInit } from '@angular/core';

import { RegisService } from '../share/regis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

regislist: Array<any>;

  constructor(private registerservice: RegisService) { }

  ngOnInit() {
    this.registerservice.getregisall().subscribe(
      (regislist) => {
        console.log(regislist);

        this.regislist = regislist;

      }
    );

  }

}
