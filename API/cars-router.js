const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => { 
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem with database.', err });
        })
});

router.get('/:id', (req, res) => { 
    const { id } = req.params;
    db('cars').select('*').where({ id })
        .then(car => {
            res.status(200).json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem with database.', err })
        })
});

router.post('/', (req, res) => { // WORKS
    const carData = req.body;
    db('cars').insert(carData)
        .then(car => {
            const newcar = {
                "id": car[0],
                ...carData
            }
            res.status(200).json(newcar);
        })
        .catch(err => {
            res.status(500).json({ message: 'Problem with database.', err })
        })
});

router.put('/:id', (req, res) => { // WORKS 
    const { id } = req.params;
    const changes = req.body;
    db('cars')
        .where({ id })
        .update(changes)
        .then(count => {
            if(count){
                newcar = {
                    "id": id,
                    ...changes
                }
                res.status(200).json({ updated: newcar });
            } else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(500).json({ err });
        })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
        .where({ id })
        .del()
        .then(count => {
            count
            ? res.status(200).json({ deletedID: id })
            : res.status(404).json({ message: 'invalid ID' })
        })
        .catch(err => {
            res.status(500).json({ err })
        })

});

module.exports = router;