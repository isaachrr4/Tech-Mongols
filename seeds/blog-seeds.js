const {Blog} = require('../models');

const blogdata = [
    {
        blog_name: 'Super Tech!!',
        blog_text: 'Tech is back and its better than ever!! It is growing at a rapid rate!',
        user_id: 9
    },
    {
        blog_name: 'Tech is Next!',
        blog_text: 'Tech is the future and see how the industry continues to add to the world and advance',
        user_id: 11
    },
    {
        blog_name: 'To The Moon!',
        blog_text: 'Technology will send us to the stars and beyond our solar system',
        user_id: 8
    },
    {
        blog_name: 'Tech Mongols',
        blog_text: 'The new tech blog that is taking over the internet with their hot takes and latest info on the tech world',
        user_id: 10
    }
]

const blogPosts = () => Blog.bulkCreate(blogdata);
module.exports = blogPosts