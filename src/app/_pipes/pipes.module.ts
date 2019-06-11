import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { IonicModule } from '@ionic/angular';

import { ExamplePipe } from '@pipes/example/example.pipe';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ScrollToModule.forRoot()
    ],
    declarations: [
        ExamplePipe
    ],
    exports: [
        ExamplePipe
    ]
})
export class PipesModule { }
