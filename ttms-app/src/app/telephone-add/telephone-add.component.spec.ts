import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneAddComponent } from './telephone-add.component';

describe('TelephoneAddComponent', () => {
  let component: TelephoneAddComponent;
  let fixture: ComponentFixture<TelephoneAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelephoneAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
