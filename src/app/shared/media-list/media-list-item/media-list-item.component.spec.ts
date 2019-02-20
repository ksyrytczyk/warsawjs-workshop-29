import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaListItemComponent } from './media-list-item.component';

describe('MediaListItemComponent', () => {
    let component: MediaListItemComponent;
    let fixture: ComponentFixture<MediaListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MediaListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MediaListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
