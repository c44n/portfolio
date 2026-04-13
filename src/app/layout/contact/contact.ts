import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	imports: [ReactiveFormsModule],
	templateUrl: './contact.html',
	styleUrl: './contact.scss',
})
export class Contact {
	firstname = new FormControl('', {
		validators: [Validators.required, Validators.minLength(3)]
	});

	email = new FormControl('', {
		validators: [Validators.required, Validators.minLength(8)]
	});

	desc = new FormControl('', {
		validators: [Validators.required, Validators.minLength(3)]
	});
}
