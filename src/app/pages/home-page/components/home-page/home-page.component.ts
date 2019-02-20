import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { FetchListResponseBody, RequestService } from '../../../../shared/request/request.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

    public movieList: Array<FetchListResponseBody> = [];

    constructor(private requestService: RequestService,
                private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.requestService.fetchList()
            .subscribe((response) => {
                this.movieList = response;
                this.changeDetector.detectChanges();
            });
    }

}
