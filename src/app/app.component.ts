import { Component } from '@angular/core';

import { DefaultLayoutComponent } from './app-layouts/default-layout/default-layout.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    entryComponents: [
        DefaultLayoutComponent
    ]
})
export class AppComponent {
    layout = DefaultLayoutComponent;
}
