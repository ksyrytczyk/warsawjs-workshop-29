import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

    @Input() public isCollapsed = false;

    public menuItems = [{
        label: 'Movies',
        icon: 'home',
        url: ['/']
    },
    {
        label: 'Search',
        icon: 'search',
        url: ['/search']
    },
    {
        label: 'Contact',
        icon: 'environment',
        url: ['/contact']
    }];

    constructor() {
    }

    ngOnInit() {
    }

}
