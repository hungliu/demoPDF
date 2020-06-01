import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfJSViewerComponent } from './pdf-js-viewer.component';

describe('PdfJSViewerComponent', () => {
  let component: PdfJSViewerComponent;
  let fixture: ComponentFixture<PdfJSViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfJSViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfJSViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
