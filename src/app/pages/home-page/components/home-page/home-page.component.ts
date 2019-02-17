import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {

    public title = 'video-station';

    constructor() {
    }

    ngOnInit() {
    }

}
