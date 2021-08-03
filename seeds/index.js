const seedUsers = require('./user-seeds');
const seedNotes = require('./notes-seeds');
const seedBlogs = require('./blog-seeds');




const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedBlogs();
  console.log('--------------');

  await seedNotes();
  console.log('--------------');

  
  process.exit(0);
};

seedAll();