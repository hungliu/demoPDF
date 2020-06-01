import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-parent-cpn',
  templateUrl: './parent-cpn.component.html',
  styleUrls: ['./parent-cpn.component.css']
})
export class ParentCPNComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.showHideButton.subscribe( data => {
      if (data) {
        console.log(data.result);
      }
    });
  }

  onSubject() {
    console.log('vo day');
    const DateObj = new Date();
    this.communicationService.commuicationListener.next('post: ' +  Date.now());
  }
}
