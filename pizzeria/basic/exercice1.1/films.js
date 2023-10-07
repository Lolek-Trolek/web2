var express = require('express');
var router = express.Router();

const FILMS =[
    {
        id: 1,
        title: 'Mommy de Xavier Dolan',
        duration: 130  ,//en minutes
        budget: 1.4 ,//en millions 
        link: 'Mommydescript.com',  
    },
    {
     id: 2,
     title: 'Le Roi Lion',
     duration: 110,//en minutes
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
/*
// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
    console.log('GET /films');
    res.json(FILMS);
  });
*/
/* Read all the pizzas from the menu
GET /films?minimum-duration=min : ascending order by duration
GET /films?minimum-duration=max : descending order by duration
*/
router.get('/', (req, res, next) => {
    const orderByMin =
      req?.query?.minimumduration?.includes('min')
        ? req.query.minimumduration
        : undefined;
    let orderedFILMS;
    console.log(`minimum-duration by ${orderByMin ?? 'not requested'}`);
    if (orderByMin) {
      orderedFILMS = [...FILMS].sort((a, b) => a.duration - b.duration); // Utilisez la soustraction pour comparer les nombres.
    }
    if (orderByMin === 'max') {
      orderedFILMS = orderedFILMS.reverse();
    }
  
    console.log('GET /films');
     res.json(orderedFILMS ?? FILMS);
  });
 

 router.get('/:id',(req,res) =>{
    console.log(`GET /films/${req.params.id}`);
  
    const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);
  
    if (indexOfFilmFound < 0) return res.sendStatus(404);
  
    res.json(FILMS[indexOfFilmFound]);

 });

 // Create a film to be added to the Films.
 router.post('/', (req, res) => {
    const title = req.body.title !== undefined ? req.body.title : undefined;
    const duration = req.body.duration !== undefined ? req.body.duration : undefined;
    const budget = req.body.budget !== undefined ? req.body.budget : undefined;
    const link = req.body.link !== undefined ? req.body.link : undefined;

    console.log('POST /films');

    if (!title || !duration || !budget || !link) {
        return res.sendStatus(400); // error code '400 Bad request'
    }

    const lastItemIndex = FILMS.length !== 0 ? FILMS.length - 1 : undefined;
    const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
    const nextId = lastId + 1;

    const newFILM = {
        id: nextId,
        title: title,
        duration: duration,
        budget: budget,
        link: link,
    };

    FILMS.push(newFILM);

    res.json(newFILM);
});

     
  module.exports = router;