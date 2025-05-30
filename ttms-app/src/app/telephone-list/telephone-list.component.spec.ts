import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneListComponent } from './telephone-list.component';

describe('TelephoneListComponent', () => {
  let component: TelephoneListComponent;
  let fixture: ComponentFixture<TelephoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelephoneListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
