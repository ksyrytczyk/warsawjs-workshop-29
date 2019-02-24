import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MediaListComponent } from './media-list/media-list.component';
import { MediaListItemComponent } from './media-list/media-list-item/media-list-item.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MediaListComponent,
        MediaListItemComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        NgZorroAntdModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        NgZorroAntdModule,
        MediaListComponent
    ]
})
export class SharedModule {
}
