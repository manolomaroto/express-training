const express = require('express');
const app = express();

const cars = [
    {
        id: 0,
        name: 'Seat',
        model: 'Leon'
    },
    {
        id:1,
        name: 'Ford',
        model: 'Explorer'
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hola</h1>')
});

app.get('/coches', (req,res,next) => {
    //console.log(req)
    res.send(cars);
})

app.get('/coches/:id', (req,res,next) => {
    const idCar = req.params.id;
    if(idCar) {
        res.send(cars[idCar].name);
    } else {
        res.status(404).send('Marca no encontrada');
    }
})

app.put('/coches/:id', (req,res,next) => {
    const idCar = req.params.id;
    const newData = req.query;
    console.log(idCar)
    res.send(newData);
})
/* 
app.post('/coches') */

app.listen(8000, () => {
    console.log('Server listening on port 8000');
})