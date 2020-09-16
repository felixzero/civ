import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPlayerPageComponent} from './add-player-page.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AddPlayerPageComponent', () => {
  let component: AddPlayerPageComponent;
  let fixture: ComponentFixture<AddPlayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayerPageComponent],
      imports: [RouterTestingModule]
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
