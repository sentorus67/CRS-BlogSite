const {Blogpost} = require('../models');
// const {Blog }= require('../models')

const seedBlogpost= async () => {
    await Blogpost.bulkCreate([
        {
            title: 'First Post',
            description: 'This is an example of how post should look',
            date_posted: '6/22/2024',
        },
        {
            title: 'Second Post',
            description: 'This the folloowing post to the first',
            date_posted: '6/22/2024',
        }, 
         {
            title: 'Third Post',
            description: 'This is another post',
            date_posted: '6/22/2024',
        },
    ],
    {
        ignoreDuplicates: true
      });
};

module.exports = seedBlogpost;