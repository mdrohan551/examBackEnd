const app = require("./app")
const port = 2020;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});