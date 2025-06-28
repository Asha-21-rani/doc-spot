const mongoose = require('mongoose');

const connectToDB = async() => {
  try{
    await mongoose.connect("mongodb://localhost:27017/admin");
    console.log('Connected to MongoDB');
  }
  catch(err){
      throw new Error(`Could not connect to MongoDB: ${err}`);
    }
};

module.exports = connectToDB;
