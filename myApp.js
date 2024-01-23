require('dotenv').config();

/** 1) Install & Set up mongoose */

const mongoose = require('mongoose');

// Connect to MongoDB Atlas using Mongoose
mongoose.connect('mongodb+srv://acoray:1234@atlascluster.cwtvplm.mongodb.net/?retryWrites=true&w=majority'
, { useNewUrlParser: true, useUnifiedTopology: true });

/** 2) Create a 'Person' Model */
const personSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  age: {
      type: Number
  },
  favoriteFoods: {
      type: [String]
  }
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  // Create a new instance of the Person model
  const JohnDoe = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  });
  
  // Save the new person to the database
  JohnDoe.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
  
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
