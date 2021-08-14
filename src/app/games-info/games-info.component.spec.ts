import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesInfoComponent } from './games-info.component';

describe('GamesInfoComponent', () => {
  let component: GamesInfoComponent;
  let fixture: ComponentFixture<GamesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
