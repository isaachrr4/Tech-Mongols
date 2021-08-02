const User = require('./Users.js');
const Note = require ('./Notes');
const Blog = require ('./Blogs');

//associations goes here

User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.belongsToMany(User, {
    foreignKey: 'user_id'
});

Note.belongsToMany(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Note, {
    foreignKey: 'user_id'
});

Note.belongsToMany(Blog, {
    foreignKey: 'user_id'
});

module.exports = User, Note, Blog;