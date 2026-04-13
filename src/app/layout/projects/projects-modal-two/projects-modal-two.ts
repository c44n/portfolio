import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-projects-modal-two',
  imports: [],
  templateUrl: './projects-modal-two.html',
  styleUrl: './projects-modal-two.scss',
})
export class ProjectsModalTwo {
  private dialogRef = inject(DialogRef);
	protected closeModal() {
		this.dialogRef.close();
	}
}
