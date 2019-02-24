import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FetchMovieResponseBody, RequestService } from '../../../../shared/request-serivce/request.service';

@Component({
    selector: 'app-movie-details-page',
    templateUrl: './movie-details-page.component.html',
    styleUrls: ['./movie-details-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsPageComponent implements OnInit {

    public movie: FetchMovieResponseBody;

    constructor(private route: ActivatedRoute,
                private requestService: RequestService,
                private changeDetector: ChangeDetectorRef) {
    }

    public ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');

        this.requestService.fetchMovie(id)
            .subscribe((response) => {
                this.movie = response;
                this.changeDetector.detectChanges();
            });
    }

}
