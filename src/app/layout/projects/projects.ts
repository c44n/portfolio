import { Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ProjectsModal } from './projects-modal/projects-modal';
import { ProjectsModalTwo } from './projects-modal-two/projects-modal-two';
import { ProjectsModalThree } from './projects-modal-three/projects-modal-three';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private dialog = inject(Dialog);
  
  protected openModal() {
    this.dialog.open(ProjectsModal);
  }

  protected openModalTwo() {
    this.dialog.open(ProjectsModalTwo);
  }

  protected openModalThree() {
    this.dialog.open(ProjectsModalThree);
  }

}
