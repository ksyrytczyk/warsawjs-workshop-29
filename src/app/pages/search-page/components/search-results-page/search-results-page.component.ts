import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-search-results-page',
    templateUrl: './search-results-page.component.html',
    styleUrls: ['./search-results-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsPageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
