import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleregister',
  templateUrl: './simpleregister.component.html',
  styleUrl: './simpleregister.component.css'
})
export class SimpleregisterComponent {

  email: string = '';
  password: string = '';
  isRegistered: boolean = false;

  register() {
    // TO DO: Implement registration logic here
    // For example, you can call an API to register the user
    console.log(`Registering user with email ${this.email} and password ${this.password}`);
    this.isRegistered = true;
  }
}
