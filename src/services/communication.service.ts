import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
   public commuicationListener: BehaviorSubject<{}> = new BehaviorSubject<{}>(null);
   public showHideButton: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
