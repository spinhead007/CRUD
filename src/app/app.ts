import { Component } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsuariosComponent],
  template: '<app-usuarios></app-usuarios>'
})
export class App {}