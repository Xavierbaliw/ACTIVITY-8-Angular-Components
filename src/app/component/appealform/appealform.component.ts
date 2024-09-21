import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appealform',
  templateUrl: './appealform.component.html',
  styleUrl: './appealform.component.css'
})
export class AppealformComponent {
  appealForm!: FormGroup;
  appealSent = false;

  constructor() { }

  ngOnInit(): void {
    this.appealForm = new FormGroup({
      appealName: new FormControl('', Validators.required),
      appealDescription: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    console.log('Form submitted!');
    this.appealSent = true;
  }

}
