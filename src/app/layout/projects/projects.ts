import { Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ProjectsModal } from '../projects-modal/projects-modal';

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

}
