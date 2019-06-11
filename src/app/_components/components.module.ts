import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { IonicModule } from '@ionic/angular';

import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { BackToTopComponent } from '@components/back-to-top/back-to-top.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ScrollToModule.forRoot()
    ],
    declarations: [
        BackToTopComponent,
        PageHeaderComponent
    ],
    exports: [
        BackToTopComponent,
        PageHeaderComponent
    ]
})
export class ComponentsModule { }
