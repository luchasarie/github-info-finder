import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoboxComponent } from './repobox.component';

describe('RepoboxComponent', () => {
  let component: RepoboxComponent;
  let fixture: ComponentFixture<RepoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
