import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  nuevo = { nombre: '', correo: '', tipo: '' };

  constructor(private servicio: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicio.getUsuarios().subscribe((res: any) => this.usuarios = res);
  }

  agregar() {
    if (!this.nuevo.nombre || !this.nuevo.correo || !this.nuevo.tipo) return;

    this.servicio.crear(this.nuevo).subscribe(() => {
      this.obtenerUsuarios();
      this.nuevo = { nombre: '', correo: '', tipo: '' };
    });
  }

  eliminar(id: number) {
    this.servicio.eliminar(id).subscribe(() => this.obtenerUsuarios());
  }
}

