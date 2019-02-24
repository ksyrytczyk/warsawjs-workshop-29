import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MoviesPageComponent
    }, {
        path: ':id',
        pathMatch: 'full',
        component: MovieDetailsPageComponent
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
export class MoviesPageRoutingModule {
}
