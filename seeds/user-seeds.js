const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = [
    {
        username: 'isaachrr4',
        email:'isaacjaames10@gmail.com',
        password: 'ilovecoding'
    },
    {
        username: 'techking12',
        email:'techking@yahoo.com',
        password:'kingcoder'
    },
    {
        username:'superwizguy17',
        email:'techman@gmail.com',
        password:'techlover12'
    }
]



const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;