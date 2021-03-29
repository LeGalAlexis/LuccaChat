import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LuccaChat';

  constructor(public userService: UserService, private modalService: NgbModal) {
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
