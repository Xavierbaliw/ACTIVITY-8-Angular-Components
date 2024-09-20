import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {

  userData = {
    name: '',
    contact: ''
  };

  submittedData = {
    name: '',
    contact: ''
  };

  submitted: boolean = false;

  onSubmit() {
    this.submittedData = { ...this.userData };
    this.submitted = true;
  }


}
