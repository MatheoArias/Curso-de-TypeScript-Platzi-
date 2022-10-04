Algoritmo para la instalación de typeScript
Recuerda: npx= corre un paquete sin instalarlo en la carpeta local de node_modules
          npm =  (node package manager) es el gestor de dependencias/paquetes que obtienes por defecto cuando instalas Node.js. Proporciona una manera para que los desarrolladores instalen paquetes tanto a nivel global como local.

1. Creo un archivo git ( Es recomensable usar gitignore.io)
2. Instalo el Package.json con:  npm init -y
6. Instalo TypeScript :  typeScript --save -dev (Para entorno de Desarrollo)
7. Se añade @ts-check para que nos corriga los errores que tenemos en el c código typeScript
8. Agregamos un compilador de la version mas nueva: npx tsc src/demo.ts --target es6
9. Creo el archivo tsconfig.ts : npx tsc --init
10. Para ir corriendo Automaticamente el codigo ts --watch
--------------- Segunda Temporada-------------------------------------

11. Instalando la libreria Capacitor para utilizar Enums : npm i @capacitor/camera (queda instalado en la carpeta local de los modulos)
