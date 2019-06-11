import { Component, OnInit, HostListener } from '@angular/core';
import { HelperService, ScrollStruct } from "@services/helpers/scroll.service";
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  public scrollData: ScrollStruct = undefined;

  constructor(
    public helperService: HelperService,
    private scrollToService: ScrollToService
  ) { }

  ngOnInit() {
    
  }

  toTop() {
    const config: ScrollToConfigOptions = { offset: this.scrollData.distanceFromTop * -1 };
    this.scrollToService.scrollTo(config);
  }

  @HostListener("window:scroll", ["$event"])
  onscroll() {
    this.scrollData = this.helperService.getScrollData();
  }
}
