const express = require('express')
const app = express();
app.get('/', (req, res) => res.send('Ejercicio para el reto'));
app.listen(3000, () => console.log('Servidor ejecutandose en el puerto 3000'));
