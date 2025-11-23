# App-Electron

Aplicación de escritorio creada con Electron que muestra el sitio web de Midu Dev en una ventana nativa.
![Uploading image.png…]()


**Creador:** Andrés Hincapie Ruiz  
**Repositorio:** [Andres-Hincapie-HRZ/App-Electron](https://github.com/Andres-Hincapie-HRZ/App-Electron)

## 📋 Descripción

Esta es una aplicación de escritorio multiplataforma construida con Electron que carga y muestra el sitio web https://midu.dev/ en una ventana de aplicación nativa. Incluye configuración para generar instaladores ejecutables para Windows.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** (viene incluido con Node.js)

## 📦 Instalación

### 1. Clonar o descargar el proyecto

Si tienes el proyecto, navega a la carpeta:

```bash
cd ruta/del/proyecto
```

### 2. Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Este comando instalará:
- **electron**: Framework para crear aplicaciones de escritorio
- **electron-builder**: Herramienta para empaquetar y crear instaladores
- Todas las dependencias adicionales listadas en package.json

## 🎮 Comandos Disponibles

### Ejecutar la aplicación en modo desarrollo

```bash
npm start
```

Este comando inicia la aplicación Electron en modo desarrollo. Verás una ventana con el sitio web de Midu Dev.

### Crear el instalador ejecutable

```bash
npm run build
```

Este comando genera un instalador .exe para Windows en la carpeta `dist/`. El proceso incluye:
- Empaquetado de la aplicación
- Creación del instalador NSIS
- Inclusión del icono personalizado

## 📁 Estructura del Proyecto

```
proyecto/
│
├── dist/                  # Carpeta generada con los instaladores (después de build)
├── node_modules/          # Dependencias instaladas
├── index.js              # Archivo principal de la aplicación
├── package.json          # Configuración del proyecto y dependencias
├── package-lock.json     # Versiones exactas de dependencias
├── logo.ico              # Icono de la aplicación
├── icono.png             # Imagen del icono
└── Electron-Clase.pdf    # Documentación adicional
```

## ⚙️ Configuración

### package.json

El archivo `package.json` contiene la configuración principal:

- **name**: Nombre del proyecto
- **version**: Versión actual
- **main**: Archivo de entrada (index.js)
- **scripts**: Comandos disponibles
  - `start`: Ejecuta la aplicación
  - `build`: Crea el instalador
- **devDependencies**: Herramientas de desarrollo
- **build**: Configuración de electron-builder
  - `appId`: Identificador único de la aplicación
  - `productName`: Nombre del producto final
  - `win.target`: Tipo de instalador para Windows (NSIS)

### index.js

Archivo principal que contiene la lógica de la aplicación Electron. Ver comentarios detallados en el código.

## 🔧 Personalización

### Cambiar la URL

Edita el archivo `index.js` y modifica la línea:

```javascript
win.loadURL('https://midu.dev/');
```

### Cambiar el tamaño de la ventana

Modifica los valores de `width` y `height` en `index.js`:

```javascript
width: 1000,  // Ancho en píxeles
height: 700,  // Alto en píxeles
```

### Cambiar el icono

Reemplaza el archivo `logo.ico` con tu propio icono y asegúrate de que el nombre coincida en `index.js`.

## 📝 Notas Técnicas

- La aplicación usa Electron v39.2.3
- El instalador se genera con electron-builder v26.0.12
- El formato de instalador para Windows es NSIS
- La aplicación carga contenido web externo (requiere conexión a internet)

## 🐛 Solución de Problemas

### Error al instalar dependencias

Si encuentras errores al ejecutar `npm install`, intenta:

```bash
npm cache clean --force
npm install
```

### La aplicación no inicia

Verifica que todas las dependencias estén instaladas:

```bash
npm install
npm start
```

### Error al crear el instalador

Asegúrate de tener permisos de escritura en la carpeta del proyecto y suficiente espacio en disco.

## 📄 Licencia

ISC

## 👨‍💻 Autor

**Andrés Hincapie Ruiz**

- GitHub: [@Andres-Hincapie-HRZ](https://github.com/Andres-Hincapie-HRZ)
- Repositorio: [App-Electron](https://github.com/Andres-Hincapie-HRZ/App-Electron)

---

Este proyecto fue creado como ejemplo educativo de una aplicación Electron básica.


