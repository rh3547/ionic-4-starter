import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { IonicModule } from '@ionic/angular';

import { ExampleDirective } from '@directives/example/example.directive';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ScrollToModule.forRoot()
    ],
    declarations: [
        ExampleDirective
    ],
    exports: [
        ExampleDirective
    ]
})
export class DirectivesModule { }
