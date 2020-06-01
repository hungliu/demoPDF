import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParentCPNComponent} from './../parent-cpn/parent-cpn.component';

import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
@NgModule({
  declarations: [
    AppComponent,
    ParentCPNComponent
  ],
  imports: [
    BrowserModule,
    PdfJsViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
