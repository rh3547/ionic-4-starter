import { Injectable, HostListener } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';

export class ScrollStruct {
    windowHeight: number;
    documentHeight: number;
    distanceFromTop: number;
    percentFromTop: number;
}

@Injectable({
    providedIn: 'root',
})
export class HelperService {

    constructor(
        httpClient: HttpClient
    ) { }

    getScrollData() {
        var winheight = $(window).height();
        var docheight = $(document).height();
        var scrollTop = $(window).scrollTop();
        var trackLength = docheight - winheight;
        var percent = Math.floor(scrollTop / trackLength * 100);

        var scroll = new ScrollStruct();
        scroll.windowHeight = winheight;
        scroll.documentHeight = docheight;
        scroll.distanceFromTop = scrollTop;
        scroll.percentFromTop = percent;

        return scroll;
    }
}