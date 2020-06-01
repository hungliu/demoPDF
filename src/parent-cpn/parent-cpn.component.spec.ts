import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCPNComponent } from './parent-cpn.component';

describe('ParentCPNComponent', () => {
  let component: ParentCPNComponent;
  let fixture: ComponentFixture<ParentCPNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCPNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
