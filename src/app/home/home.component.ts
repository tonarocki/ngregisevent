import { Component, OnInit , AfterViewInit, ViewChild, ViewChildren} from '@angular/core';

import { MatTabGroup, MatTab } from '@angular/material';
import { RegisService } from '../share/regis.service';
import { OnDestroy,  } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

regislist: Array<any>;
sub: any;
  constructor(private registerservice: RegisService) { }

  ngOnInit() {
    this.sub = this.registerservice.getregisall().subscribe(
      (regislist) => {
        console.log(regislist);

        this.regislist = regislist;

      }
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  @ViewChild(MatTabGroup) group;
  @ViewChildren(MatTab) tabs;
  tab_num = 0;
  selected = 0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  number_tabs;
  ngAfterViewInit() {
    this.tab_num = this.tabs.length;
    console.log(this.group);
  }
  swipe(eType) {
    console.log(eType);
    if (eType === this.SWIPE_ACTION.LEFT && this.selected > 0) {
      console.log('moveleft');
      this.selected--;
    } else if (eType === this.SWIPE_ACTION.RIGHT && this.selected < this.tab_num) {
      console.log('moveright');
      this.selected++;
    }
    console.log(this.selected);
  }


}

