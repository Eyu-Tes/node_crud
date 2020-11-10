// connect to database
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // Silents - DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
        mongoose.set('useCreateIndex', true)
        // connect to DB
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        // terminate the script/process that was started by Node with failure ERROR_CODE
        process.exit(1)
    }
}

module.exports = connectDB