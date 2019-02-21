import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MediaListComponent } from './media-list/media-list.component';
import { MediaListItemComponent } from './media-list/media-list-item/media-list-item.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    declarations: [
        MediaListComponent,
        MediaListItemComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        NgZorroAntdModule
    ],
    exports: [
        NgZorroAntdModule,
        MediaListComponent
    ]
})
export class SharedModule {
}
