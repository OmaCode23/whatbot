module.exports = {
  apps: [
    {
      name: 'whatbot',                // Nombre de la aplicación
      script: './app.js',             // Ruta al script principal de la aplicación
      interpreter: 'node',            // Intérprete a utilizar
      watch: ["src"],                 // Directorios o archivos que se deben observar para reiniciar la aplicación
      watch_delay: 1000,              // Retraso antes de reiniciar la aplicación tras un cambio
      ignore_watch: ["node_modules", "logs"], // Archivos o directorios a ignorar
      max_memory_restart: '1000M',    // Reiniciar si la memoria excede 1000 MB
      exec_mode: "cluster",           // Modo de ejecución, aquí en modo cluster para manejar múltiples instancias
      instances: 1,                   // Número de instancias a ejecutar
      cron_restart: "59 23 * * *",    // Reinicio programado diario a las 23:59
      autorestart: true,              // Reiniciar automáticamente si la aplicación falla
      max_restarts: 10,               // Máximo número de reinicios si la aplicación falla
      env: {
        NODE_ENV: 'development',      // Variables de entorno para desarrollo
      },
      env_production: {
        NODE_ENV: 'production',       // Variables de entorno para producción
      }
    }
  ]
};