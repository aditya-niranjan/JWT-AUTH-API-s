require('dotenv').config()
const app  = require('./src/app');
const connectDB = require('./db');

connectDB();



app.listen(process.env.PORT , () =>{
  console.log(`Server is running on the port ${process.env.PORT}`);
})
