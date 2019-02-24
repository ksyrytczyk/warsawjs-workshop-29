import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { FetchListResponseBody, RequestService } from '../../../../shared/request-serivce/request.service';

@Component({
    selector: 'app-movies-page',
    templateUrl: './movies-page.component.html',
    styleUrls: ['./movies-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesPageComponent implements OnInit {

    public movieList: Array<FetchListResponseBody> = [];

    constructor(private requestService: RequestService,
                private changeDetector: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.requestService.fetchList()
            .subscribe((response) => {
                this.movieList = response;
                this.changeDetector.detectChanges();
            });
    }
}
