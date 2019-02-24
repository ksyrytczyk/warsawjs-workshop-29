import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movies'
        // loadChildren: './pages/home-page/home-page.module#HomePageModule'
    }, {
        path: 'movies',
        loadChildren: './pages/movies-page/movies-page.module#MoviesPageModule'
    }, {
        path: 'search',
        loadChildren: './pages/search-page/search-page.module#SearchPageModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
