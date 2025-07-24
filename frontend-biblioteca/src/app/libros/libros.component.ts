import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

export class LibrosComponent implements OnInit {
  libros: any[] = [];
  nuevo = { titulo: '', autor: '', anio: null };

  constructor(private servicio: LibrosService) {}

  ngOnInit() {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.servicio.getLibros().subscribe((res: any) => this.libros = res);
  }

  agregar() {
    this.servicio.crear(this.nuevo).subscribe(() => {
      this.obtenerLibros();
      this.nuevo = { titulo: '', autor: '', anio: null };
    });
  }

  eliminar(id: number) {
    this.servicio.eliminar(id).subscribe(() => this.obtenerLibros());
  }
}

