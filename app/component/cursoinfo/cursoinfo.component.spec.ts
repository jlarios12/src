import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoinfoComponent } from './cursoinfo.component';

describe('CursoinfoComponent', () => {
  let component: CursoinfoComponent;
  let fixture: ComponentFixture<CursoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
