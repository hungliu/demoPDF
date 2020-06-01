import { Component, OnInit, Inject, Injectable, AfterViewInit, OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommunicationService } from '../services/communication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('pdfViewer', { static: false }) pdfViewer;


  title = 'demoPDFjs';
  list = ['/assets/dummy1.pdf', '/assets/dummy2.pdf', '/assets/dummy3.pdf'];
  getListener: any ;

  constructor(
    private http: HttpClient,
    private sharedService: CommunicationService
  ) { }

  ngOnInit() {
    this.sharedService.commuicationListener.subscribe( (data) => {
      if (data) {
      this.getListener = data ;
      console.log(this.getListener);
      }
    });
  }

  ngOnDestroy(): void {
    this.sharedService.commuicationListener.unsubscribe();
  }

  ngAfterViewInit() {
    this.pdfViewer.pdfSrc = this.list[0];
    this.pdfViewer.refresh();
  }


  openFile(i: number) {
    console.log(this.list[i]);

    this.pdfViewer.pdfSrc = this.list[i];
    this.pdfViewer.refresh();
  }

  showButton() {
      this.sharedService.showHideButton.next({
        result: true ,
        value: Date.now()
      });
  }

  hideButton() {
    this.sharedService.showHideButton.next({
      result: false ,
      value: Date.now()
    });
  }

  openFileFromAPI(id) {
    const url2 = `http://localhost:59640/pdf/values/getPDF/${id}`;
    this.downloadFile(url2).subscribe(
      (res) => {
        console.log(res);
        this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
        this.pdfViewer.refresh(); // Ask pdf viewer to load/reresh pdf
      }
    );
  }

  private downloadFile(url: string): any {
    return this.http.get(url, { responseType: 'blob' })
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }
}
