import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowHumansupComponent } from './how-humansup.component';

describe('HowHumansupComponent', () => {
  let component: HowHumansupComponent;
  let fixture: ComponentFixture<HowHumansupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowHumansupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowHumansupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
