const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

router.get('/', async (req, res) => {
  try{
    const dishes = await Dish.findAll({raw: true});
    res.render('all', {dishes});
  } catch (err) {
    res.status(500).json(err);
  };
});

// route to get one dish
router.get('/dish/:id', async (req, res) => {
  try{
      const dishData = await Dish.findByPk(req.params.id);
      if(!dishData) {
          res.status(404).json({message: 'No dish with this id!'});
          return;
      }
      const dish = dishData.get({ plain: true });
      res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;
