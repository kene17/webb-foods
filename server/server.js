const {app} = require(".");
const mongoose = require('mongoose');
const PORT = 5454

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("connected to database!");
});
app.listen(PORT, async()=>{
    console.log("server is running", PORT);
})