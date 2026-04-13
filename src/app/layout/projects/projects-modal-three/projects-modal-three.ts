import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-projects-modal-three',
  imports: [],
  templateUrl: './projects-modal-three.html',
  styleUrl: './projects-modal-three.scss',
})
export class ProjectsModalThree {
  private dialogRef = inject(DialogRef);
	protected closeModal() {
		this.dialogRef.close();
	}
}
