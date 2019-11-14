import { Component, OnInit, Inject, Injectable, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('pdfViewer', { static: false }) pdfViewer;


  title = 'demoPDF';
  list = ['/assets/1.pdf', '/assets/2.pdf'];


  constructor(private http: HttpClient) { }

  ngOnInit() {

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

  openFileExternal(id) {
    let url2 = `https://localhost:44388/api/values/getPDF/${id}`;
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
