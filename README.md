# javascript
Al Javascript


## Consideraciones de Vite
- Importar archivos de HTML en JavaScript sale un error para solucionar este error, solo le colocamos la expresion  **?raw** en el import
```javascript
    import html from './app.html?raw'
```

## Manejo de variables de entorno 
Las var variables de entrono se han estandarizado su uso con el package **dotenv**. Estos se mnejan en archivos .env no se maneja en seguimiento en git, pero se crea un archivo .env.template para ejemplo de las variables de entorno.

```javascript
   npm install dotenv --save

   process.env in node
```

VITE, tiene maneja su propia forma de leer las variables de entorno.
```env
   API_KEY=ESTAS_ES_MI_KEY
```
Para vite leer esta variable de entorno
```javascript
    import.meta.env
```

**Nota** Vite no muestra las variables de entorno si no le ante ponemos la palabra **VITE_** a la variable

```javascript
    import.meta.env
    API_KEY=ESTAS_ES_MI_API_KEY ¡¡No la muestra!!
    VITE_API_KEY=ESTAS_ES_MI_API_KEY ¡¡LA muestra!!
```