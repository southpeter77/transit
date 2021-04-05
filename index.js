const http = require("http");
const port = 8080;
const app = require("./app")
const server = http.createServer(app);
server.listen(port);
server.on("listening", ()=>{
    console.log(`http://localhost:${port}`)
})