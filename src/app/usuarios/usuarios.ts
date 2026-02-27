import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../services/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private service: UsuariosService) {}

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: dados => {
        console.log('DADOS:', dados); // 👈 TESTE
        this.usuarios = dados;
      },
      error: erro => console.error('Erro ao buscar usuários', erro)
    });
  }
}