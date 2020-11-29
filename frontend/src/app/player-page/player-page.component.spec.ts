import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerPageComponent} from './player-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';

describe('PlayerPageComponent', () => {
  let component: PlayerPageComponent;
  let fixture: ComponentFixture<PlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, TranslocoTestingModule]
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
