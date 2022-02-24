'use strict';

const Robot = require('../db/robot');
const router = require('express').Router();
const Project = require('../db/project');

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
    const robot = await Robot.findByPk(req.params.id, {
      include: {
        model: Project,
      },
    });
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Robot.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
