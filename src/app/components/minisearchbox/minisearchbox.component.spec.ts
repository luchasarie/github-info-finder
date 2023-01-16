import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisearchboxComponent } from './minisearchbox.component';

describe('MinisearchboxComponent', () => {
  let component: MinisearchboxComponent;
  let fixture: ComponentFixture<MinisearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisearchboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
