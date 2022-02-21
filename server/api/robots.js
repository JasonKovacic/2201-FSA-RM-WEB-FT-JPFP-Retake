'use strict';

const Robot = require('../db/robot');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
