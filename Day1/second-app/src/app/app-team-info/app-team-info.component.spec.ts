import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTeamInfoComponent } from './app-team-info.component';

describe('AppTeamInfoComponent', () => {
  let component: AppTeamInfoComponent;
  let fixture: ComponentFixture<AppTeamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTeamInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
