import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = ''; // Variable para el usuario
  password: string = ''; // Variable para la contraseña
  loginMessage: string = ''; // Mensaje de error o éxito
  isError: boolean = false; // Si hay un error o no

  // Datos "quemados" para usuario y contraseña
  private readonly validUsername: string = 'admin';
  private readonly validPassword: string = '123456';

  constructor() {}

  onLogin() {
    if (this.username === this.validUsername && this.password === this.validPassword) {
      this.loginMessage = 'Login exitoso.';
      this.isError = false;
    } else {
      this.loginMessage = 'Usuario o contraseña incorrectos.';
      this.isError = true;
    }
  }
}
