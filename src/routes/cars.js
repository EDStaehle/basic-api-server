'use strict';

const express = require('express');
const { carsModel } = require('../models');

const carsRouter = express.Router();

carsRouter.get('/cars', async (req, res, next) => {
  try {
    const cars = await carsModel.findAll();
    res.status(200).send(cars)
  } catch (e) {
    next(e);
  }
});
carsRouter.get('/cars/:id', async (req, res, next) => {
  try {
    const car = await carsModel.findAll({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).send(car)
  } catch (e) {
    next(e);
  }
});

carsRouter.put('/cars/:id', async (req, res, next) => {
  try {
    const updatedcars = await carsModel.update(req.body,
    {
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).send(updatedcars)
  } catch (e) {
    next(e);
  }
});
carsRouter.delete('/cars/:id', async (req, res, next) => {
  try {
    await carsModel.destroy({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(204).send('deleted')
  } catch (e) {
    next(e);
  }
});
carsRouter.post('/cars', async (req, res, next) => {
  try {
    const newCar = await carsModel.create(req.body);
    res.status(200).send(newCar);
  } catch (e) {
    next(e);
  }
});
module.exports = carsRouter

