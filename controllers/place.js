const { Router } = require( "express" );
const router = Router();

const Place = require( "../models/place.js" )

const placeSeed = [
    {
        name: "Mt. Everest",
        img: "https://media.gq.com/photos/5dcaf2db81b355000904c757/master/pass/mount-everest-gq-men-of-the-year-2019-lede.jpg",
        description: "This is a Mountain",
      },
      {
        name: "Lake Eola",
        img: "https://a.cdn-hotels.com/gdcs/production142/d1678/02312c78-cd46-4e43-b6c6-d174700968a8.jpg",
        description: "This is a Lake",
      },
      {
        name: "Mall Of America",
        img: "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2016-11/IMG_7491_0.jpg?itok=lrDxDud3",
        description: "This is a Mall",
      }
];

// router.get("/seed", async (req, res) => {
router.get( "/seed", async ( request, response ) => {
  try {
    await Place.remove({});
    await Place.create( placeSeed );
    const places = await Place.find({});    
    response.json( places );
  } catch ( error ) {
    response.status( 400 ).json( error )
  }
});

router.get( "/", async ( request, response ) => {
  try {
    const places = await Place.find({})
    response.json( places )
  } catch ( error ) {
    response.status( 400 ).json( error )
  }
})

router.post( "/", async (req, res) => {
  try{
    // const newPlace = await Place.create( {name: "test"} )
    res.json(await Place.create( req.body ));
    console.log( req.body )
  } catch ( error ) {
    console.log( error)
  }
});

// router.post( "/", async ( request, response ) => {
//   try {
//     const newPlace = await Place.create( request.body )
//     response.json( newPlace )
//   } catch ( error ) {
//     response.status( 400 ).json( response )
//   }
// })

router.delete( "/:id", async ( request, response ) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete( request.params.id )
    response.json( deletedPlace )
  } catch ( error ) {
    response.status( 400 ).json( error )
    console.log( error )
  }
})

router.put( "/:id", async ( request, response ) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate( request.params.id, request.body, { new: true } )
    response.json( updatedPlace )
  } catch ( error ) {
    response.status( 400 ).json( error )
    console.log( error )
  }
})



module.exports = router;
