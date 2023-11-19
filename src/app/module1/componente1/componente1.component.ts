import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router'; // Importa el Router
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  user: User = new User(); // Inicializa user
  validUser = new User('admin', 'admin'); // Credenciales válidas: username = 'admin', password = 'admin'
  constructor(private router: Router) {} // Inyecta el Router
  get areCredentialsValid(): boolean {
    return this.user.username === this.validUser.username && this.user.password === this.validUser.password;
  }

  login() {
    if (this.areCredentialsValid) {
      // Lógica para mostrar mensaje de bienvenida o redirigir a otro componente
      console.log('¡Bienvenido!');


      this.router.navigate(['/module3/module2/component2']);
    } else {
      // Lógica para mostrar mensaje de credenciales incorrectas
      console.log('Credenciales incorrectas');
    }
  }
}