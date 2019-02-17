import { NgModule } from '@angular/core';

import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        HomePageRoutingModule
    ]
})
export class HomePageModule {
}
