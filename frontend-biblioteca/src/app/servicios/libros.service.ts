import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LibrosService {

//   constructor() { }
// }

@Injectable({ providedIn: 'root' })
export class LibrosService {
  private api = 'http://localhost:3001/api/libros';

  constructor(private http: HttpClient) {}

  getLibros() { return this.http.get(this.api); }
  crear(libro: any) { return this.http.post(this.api, libro); }
  actualizar(id: number, libro: any) { return this.http.put(`${this.api}/${id}`, libro); }
  eliminar(id: number) { return this.http.delete(`${this.api}/${id}`); }
}

