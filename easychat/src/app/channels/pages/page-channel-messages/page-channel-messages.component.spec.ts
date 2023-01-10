import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChannelMessagesComponent } from './page-channel-messages.component';

describe('PageChannelMessagesComponent', () => {
  let component: PageChannelMessagesComponent;
  let fixture: ComponentFixture<PageChannelMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChannelMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChannelMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
