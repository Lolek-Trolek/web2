var express = require('express');
var router = express.Router();

const FILMS =[
    {
        id: 1,
        title: 'Mommy de Xavier Dolan',
        duration: 120  ,//en minutes
        budget: 1.4 ,//en millions 
        link: 'Mommydescript.com',  
    },
    {
     id: 2,
     title: 'Le Roi Lion',
     duration: 120,//en minutes
     budget: 2 ,//en milions 
     link: 'RoiLiondescript.com',   
    },
    {
        id: 3,
        title: '"Avatar" le tsunami originel',
        duration: 120,//en minutes
        budget: 5 ,//en milions 
        link: 'Avatardescript.com',
    }
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
    console.log('GET /films');
    res.json(FILMS);
  });
  
  module.exports = router;