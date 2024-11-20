import dotenv from "dotenv";
import {app} from "./app.js"
// configure environment variables
dotenv.config({
    path:"./.env"
});

const Port = process.env.PORT || 7000;

// server error listening 
app.on('error', (err) => {
    console.error('Express Server Error: ' + err);
    process.exit(1);
  });

// server listening
app.listen(Port ,()=>{
    console.log("Server is running on port",Port);
})
