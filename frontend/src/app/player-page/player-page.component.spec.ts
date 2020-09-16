import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerPageComponent} from './player-page.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('PlayerPageComponent', () => {
  let component: PlayerPageComponent;
  let fixture: ComponentFixture<PlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerPageComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
