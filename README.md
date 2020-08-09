### Cron Jobs:
Son conocidas popularmente como tareas programadas, en teoria son funciones que se ejecutan basadas en una expresion de tiempo (cron expression).

### Cron Expressions:
Son cadenas de texto que expresan tiempo, por ejemplo: 

```* * * * *``` 

Esta cron expression indica repeticion cada minuto. La siguiente imagen nos ayudará a entender el formato de las cron expressions.

![Ejemplo](https://raw.githubusercontent.com/aprendeweb/file-mover-cron-job/master/cron.png)

Quizas nos estemos preguntando por que en la imagen aparecen 6 ```*``` y en ejemplo aparecen 5, esto es debido a que el sexto ```*``` es opcional, y este es indicador de segundos, ejemplo la siguiente cron expression indica repetición cada segundo ```* * * * * *```.

### Ejemplo de un Cron Job
Ahora que ya entendimos las **cron expressions** es tiempo de usarlas para crear nuestra primera tarea programada o nuestro primer cron job, y para esto, vamos a ayudarnos de uno de los [paquetes más populares](https://www.npmjs.com/package/cron) para este tipo de funciones 
