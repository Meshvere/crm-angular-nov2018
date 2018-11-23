import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaClientActifComponent } from './presta-client-actif.component';

describe('PrestaClientActifComponent', () => {
  let component: PrestaClientActifComponent;
  let fixture: ComponentFixture<PrestaClientActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestaClientActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestaClientActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
