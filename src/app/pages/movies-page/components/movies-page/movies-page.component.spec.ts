import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPageComponent } from './movies-page.component';

describe('MoviePageComponent', () => {
    let component: MoviesPageComponent;
    let fixture: ComponentFixture<MoviesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MoviesPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
