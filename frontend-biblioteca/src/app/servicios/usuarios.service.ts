import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsuariosService {

//   constructor() { }
// }

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private api = 'http://localhost:3002/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios() { return this.http.get(this.api); }
  crear(usuario: any) { return this.http.post(this.api, usuario); }
  actualizar(id: number, usuario: any) { return this.http.put(`${this.api}/${id}`, usuario); }
  eliminar(id: number) { return this.http.delete(`${this.api}/${id}`); }
}
