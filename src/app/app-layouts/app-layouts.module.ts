import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DefaultLayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class AppLayoutsModule {
}
