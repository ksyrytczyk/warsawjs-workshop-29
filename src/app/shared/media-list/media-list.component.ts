import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { FetchListResponseBody } from '../request-serivce/request.service';

@Component({
    selector: 'app-media-list',
    templateUrl: './media-list.component.html',
    styleUrls: ['./media-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaListComponent implements OnInit {

    @Input() items: Array<FetchListResponseBody> = [];

    constructor() {
    }

    ngOnInit() {
    }

}
