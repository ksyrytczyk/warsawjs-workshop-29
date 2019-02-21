import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutsModule } from './app-layouts/app-layouts.module';
import { SharedModule } from './shared/shared.module';

import { NZ_I18N, en_GB } from 'ng-zorro-antd';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppLayoutsModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [{
        provide: NZ_I18N,
        useValue: en_GB
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
