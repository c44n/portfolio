import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';

@Component({
	selector: 'app-projects-modal',
	imports: [],
	templateUrl: './projects-modal.html',
	styleUrl: './projects-modal.scss',
})
export class ProjectsModal {
	private dialogRef = inject(DialogRef);
	protected closeModal() {
		this.dialogRef.close();
	}
}
