import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProgramModal } from './edit-program-modal';

import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    
  constructor(private modalService: NgbModal) {
}

    openModal(index, workouts): Promise<any> {
        const modalRef = this.modalService.open(EditProgramModal);
        modalRef.componentInstance.workouts = workouts;
        modalRef.componentInstance.index = index;
        return modalRef.result;
      }
  }
