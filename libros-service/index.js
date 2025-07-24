const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'García Márquez', anio: 1967 },
  { id: 2, titulo: 'Don Quijote', autor: 'Cervantes', anio: 1605 }
];

let contador = 3;

app.get('/api/libros', (req, res) => res.json(libros));

app.post('/api/libros', (req, res) => {
  const nuevo = { id: contador++, ...req.body };
  libros.push(nuevo);
  res.status(201).json(nuevo);
});

app.put('/api/libros/:id', (req, res) => {
  const index = libros.findIndex(l => l.id == req.params.id);
  if (index !== -1) {
    libros[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(libros[index]);
  } else res.status(404).json({ error: 'Libro no encontrado' });
});

app.delete('/api/libros/:id', (req, res) => {
  libros = libros.filter(l => l.id != req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Libros-service en puerto ${PORT}`));
