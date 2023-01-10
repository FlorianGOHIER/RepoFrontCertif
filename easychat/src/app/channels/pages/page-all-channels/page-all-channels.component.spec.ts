import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllChannelsComponent } from './page-all-channels.component';

describe('PageAllChannelsComponent', () => {
  let component: PageAllChannelsComponent;
  let fixture: ComponentFixture<PageAllChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAllChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAllChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
