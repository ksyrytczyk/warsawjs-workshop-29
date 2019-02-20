import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FetchListResponseBody } from '../../request-serivce/request.service';

@Component({
    selector: 'app-media-list-item',
    templateUrl: './media-list-item.component.html',
    styleUrls: ['./media-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaListItemComponent implements OnInit {

    @Input() media: FetchListResponseBody = null;

    constructor() {
    }

    ngOnInit() {
    }

}
