# jzbiblioteca_REST
Desarrollar una aplicación web dividida en múltiples microservicios independientes, cada uno responsable de una funcionalidad específica del sistema, con comunicación mediante protocolos HTTP REST, almacenamiento persistente y una interfaz de usuario sencilla que consuma los servicios.

Para ejecutar la aplicacion web siga los siguientes pasos:

## Arquitectura

- `libros-service`: Microservicio REST para libros (Node.js + Express)
- `usuarios-service`: Microservicio REST para usuarios (Node.js + Express)
- `frontend-biblioteca`: Interfaz web Angular

## Requisitos previos

- Node.js y npm instalados
- Angular CLI instalado (`npm install -g @angular/cli@15`)
- Visual Studio Code

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/jzambrano1827/jzbiblioteca_REST.git
```

### 2. Ejecutar servicios

- Abrir Visual Studio Code y seleccionar el proyecto clonado
- Abrir una ventana de Terminal en VS Code
- Ejecutar los comandos:
```bash
cd libros-service
node index.js
```
- Abrir una segunda Terminal en VS Code
- Ejecutar los comandos:
```bash
cd ../usuarios-service
node index.js
```
- Abrir una tercera Terminal en VS Code
- Ejecutar los comandos:
```bash
cd ../frontend-biblioteca
ng serve
```

### 3. Acceder al Frontend
- Desde un navegador web acceder al link:
```bash
http://localhost:4200
```
