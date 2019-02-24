import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    }, {
        path: 'list',
        pathMatch: 'full',
        component: SearchPageComponent,
    }, {
        path: 'results',
        pathMatch: 'full',
        component: SearchResultsPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SearchPageRoutingModule {
}
