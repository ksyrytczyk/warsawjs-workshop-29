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
