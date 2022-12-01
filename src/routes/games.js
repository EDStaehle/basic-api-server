'use strict';

const express = require('express');
const { GamesModel } = require('../models');

const gamesRouter = express.Router();

gamesRouter.get('/games', async (req, res, next) => {
  try {
    const games = await GamesModel.findAll();
    res.status(200).send(games)
  } catch (e) {
    next(e);
  }
});
gamesRouter.get('/games/:id', async (req, res, next) => {
  try {
    const game = await GamesModel.findAll({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).send(game)
  } catch (e) {
    next(e);
  }
});

gamesRouter.put('/games/:id', async (req, res, next) => {
  try {
    const updatedGames = await GamesModel.update(req.body,
    {
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).send(updatedGames)
  } catch (e) {
    next(e);
  }
});
gamesRouter.delete('/games/:id', async (req, res, next) => {
  try {
    const games = await GamesModel.findAll();
    const deleteGames = await GamesModel.destroy({
      where: {
        id: parseInt(req.params.id)
      },
    });
    res.status(204).send('deleted')
  } catch (e) {
    next(e);
  }
});
gamesRouter.post('/games', async (req, res, next) => {
  try {
    const newGame = await GamesModel.create(req.body);
    res.status(200).send(newGame);
  } catch (e) {
    next(e);
  }
});
module.exports = gamesRouter

