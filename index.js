//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 3002;

// server 
const server = http.createServer(async (req, res) => {
    // / : GET 
    if (req.url === "/" && req.method === "GET") {
        // set the status code, and content-type
           res.writeHead(200, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*" });
           res.end(JSON.stringify({ message: "App is active!" }));
       }
    // /api/v1 : GET 
    else if (req.url === "/v1/basic_prayers" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    // /api/v1/stations_of_cross : GET
    else if (req.url === "/v1/stations_of_cross" && req.method === "GET") {
         // get data.
        const stationData = await new AppData().getStationData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(stationData));
    }
    //

    // /api/v1/saints : GET
    else if (req.url === "/v1/saints" && req.method === "GET") {
         // get random data.
        const saintsData = await new AppData().getSaintsData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(saintsData));
    }
    //
      // /api/v1/today : GET
    else if (req.url === "/v1/saints_fr" && req.method === "GET") {
         // get today data.
        const saintsFrData = await new AppData().getSaintsFrData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(saintsFrData));
    }
    // add below

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});






// end 

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));