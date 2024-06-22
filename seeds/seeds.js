const sequelize = require ('../config/connection');
const seedBlogpost = require('./blogpostSeed');

const seedAll = async()=>{
    await sequelize.sync({force: true});
    console.log('Database synced');

    await seedBlogpost();
    console.log('Seeding succesfull')

    process.exit(0);
}

seedAll();