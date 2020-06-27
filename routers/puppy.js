const router = require('express').Router()
const Puppy = require('../models/Puppy.models')

router.get('/', (req, res) => {
res.json({
  status: 200,
  message: "api get running"
})

	Puppy.find()
	.then(puppies => res.json(puppies))
	.catch(err => res.status(400).json('error:' + err))
})

router.post("/", async (req, res) => {


 // try {
 //  req.body = await JSON.parse(Object.keys(req.body)[0])

 //   const newPuppy = new Puppy({
 //   name: req.body.name,
 //   breed: req.body.breed,
 //   age: req.body.age,
 //   cute: req.body.cute,
 //   well_behaved: req.body.well_behaved,
 //   adopted: req.body.adopted
 //  })

 //  const puppy = await newPuppy.save()
 //  res.json("New puppy created!")

 //  } catch(err) {
 //    res.status(400).json("Error: " + err)
 //  }
  // console.log(newPuppy)
 
 // res.json(newPuppy)




})

module.exports = router

// {
//   "name": "Hank",
//   "breed": "English Springer Spaniel",
//   "age": 10,
//   "cute": true,
//   "well_behaved": false,
//   "adopted": true
// }