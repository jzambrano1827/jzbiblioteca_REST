const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

let usuarios = [
  { id: 1, nombre: 'Juan', correo: 'juan@mail.com', tipo: 'Estudiante' },
  { id: 2, nombre: 'Ana', correo: 'ana@mail.com', tipo: 'Docente' }
];

let contador = 3;

app.get('/api/usuarios', (req, res) => res.json(usuarios));

app.post('/api/usuarios', (req, res) => {
  const nuevo = { id: contador++, ...req.body };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

app.put('/api/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id == req.params.id);
  if (index !== -1) {
    usuarios[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(usuarios[index]);
  } else res.status(404).json({ error: 'Usuario no encontrado' });
});

app.delete('/api/usuarios/:id', (req, res) => {
  usuarios = usuarios.filter(u => u.id != req.params.id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Usuarios-service en puerto ${PORT}`));
