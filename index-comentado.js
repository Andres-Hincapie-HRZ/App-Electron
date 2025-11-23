// ============================================
// IMPORTACIONES DE MÓDULOS
// ============================================

// Importamos 'app' y 'BrowserWindow' desde el módulo 'electron'
// - app: Controla el ciclo de vida de la aplicación (inicio, cierre, eventos)
// - BrowserWindow: Clase para crear y controlar ventanas del navegador
const { app, BrowserWindow } = require('electron');

// Importamos el módulo 'path' de Node.js para manejar rutas de archivos
// Nota: En el código original se llama 'pathExists' pero debería ser 'path'
const pathExists = require('path');

// ============================================
// FUNCIÓN PARA CREAR LA VENTANA PRINCIPAL
// ============================================

/**
 * createWindow()
 * 
 * Esta función crea la ventana principal de la aplicación Electron.
 * Se ejecuta cuando la aplicación está lista para mostrar ventanas.
 */
function createWindow(){
    
    // Creamos una nueva instancia de BrowserWindow
    // Esta será nuestra ventana principal de la aplicación
    const win = new BrowserWindow({

        // Ancho de la ventana en píxeles
        width: 1000,
        
        // Alto de la ventana en píxeles
        height: 700,
        
        // Ruta al archivo de icono que se mostrará en la barra de tareas
        // __dirname: Variable global de Node.js que contiene la ruta del directorio actual
        // join(): Método que une segmentos de ruta de forma segura
        icon: pathExists.join(__dirname, 'logo.ico'),
    });

    // Cargamos una URL en la ventana
    // En este caso, cargamos el sitio web de Midu Dev
    // También podríamos cargar un archivo HTML local con: win.loadFile('index.html')
    win.loadURL('https://midu.dev/');
}

// ============================================
// EVENTOS DEL CICLO DE VIDA DE LA APLICACIÓN
// ============================================

/**
 * app.whenReady()
 * 
 * Este método devuelve una Promise que se resuelve cuando Electron
 * ha terminado de inicializarse y está listo para crear ventanas.
 * 
 * Es el momento adecuado para crear la ventana principal.
 */
app.whenReady().then(() => {
    // Cuando la aplicación está lista, llamamos a createWindow()
    // para crear y mostrar la ventana principal
    createWindow();
});

// ============================================
// NOTAS ADICIONALES
// ============================================

/*
 * MEJORAS RECOMENDADAS:
 * 
 * 1. Manejar el evento 'window-all-closed' para cerrar la app en Windows/Linux:
 *    app.on('window-all-closed', () => {
 *        if (process.platform !== 'darwin') app.quit();
 *    });
 * 
 * 2. Manejar el evento 'activate' para macOS (reabrir ventana):
 *    app.on('activate', () => {
 *        if (BrowserWindow.getAllWindows().length === 0) createWindow();
 *    });
 * 
 * 3. Agregar webPreferences para mayor seguridad:
 *    webPreferences: {
 *        nodeIntegration: false,
 *        contextIsolation: true
 *    }
 */
