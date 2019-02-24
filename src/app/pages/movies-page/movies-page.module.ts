import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { MoviesPageRoutingModule } from './movies-page-routing.module';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';

@NgModule({
    declarations: [
        MoviesPageComponent,
        MovieDetailsPageComponent
    ],
    imports: [
        SharedModule,
        MoviesPageRoutingModule
    ]
})
export class MoviesPageModule {
}
