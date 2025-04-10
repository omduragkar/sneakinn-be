const mongoose = require('mongoose');

module.exports.connectToDB = async () => {
    try {
       const db = await mongoose.connect(process.env.MONGODB_URI); // Removed deprecated options
        console.log('MongoDB connected:', db.connection.host);
        process.env.DB = db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure
    }
};