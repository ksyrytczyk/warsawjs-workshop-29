import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';

@NgModule({
    declarations: [
        SearchPageComponent,
        SearchResultsPageComponent
    ],
    imports: [
        SharedModule
    ]
})
export class SearchPageModule {
}
