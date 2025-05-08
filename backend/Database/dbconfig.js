const mongoose = require("mongoose");
const Database = async () => {
    try {
        await mongoose.connect(`mongodb+srv://musharaf:Skmusharaf13@cluster0.exvhe.mongodb.net/blog-system?retryWrites=true&w=majority&appName=Cluster0/ecommerce`);
        console.log('Connected to DB');
    } catch (err) {
        console.log('error connecting to db', err);
    }
}
//export default Database;
module.exports=Database;