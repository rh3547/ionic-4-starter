import { Component, OnInit, Input } from '@angular/core';

import { DateService } from '@services/helpers/date.service';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title: string = "";

  public notifications = ["", ""];

  constructor(
    public dateService: DateService
  ) { }

  ngOnInit() {
  }
}
