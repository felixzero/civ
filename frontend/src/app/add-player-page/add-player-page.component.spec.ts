import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPlayerPageComponent} from './add-player-page.component';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoTestingModule } from '@ngneat/transloco';

describe('AddPlayerPageComponent', () => {
  let component: AddPlayerPageComponent;
  let fixture: ComponentFixture<AddPlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayerPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, TranslocoTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
