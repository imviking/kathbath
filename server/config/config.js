const PORT = process.env.PORT || 5200;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydb'
module.exports = {
    PORT,
    MONGO_URL
}