import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScorePageComponent} from './score-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';

describe('ScorePageComponent', () => {
  let component: ScorePageComponent;
  let fixture: ComponentFixture<ScorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScorePageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, TranslocoTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
