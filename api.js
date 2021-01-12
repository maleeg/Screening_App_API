var Db = require("./dboperations");
var Guest = require("./guest");
const dboperations = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/guests").get((request, response) => {
  dboperations.getGuests().then((result) => {
    response.json(result[0]);
    console.log("hey hey");
  });
});

router.route("/guests/:guestId").get((request, response) => {
  dboperations.getGuest(request.params.guestId).then((result) => {
    response.json(result[0]);
  });
});

router.route("/guests").post((request, response) => {
  let guest = { ...request.body };

  dboperations.addGuest(guest).then((result) => {
    response.status(201).json(result);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Guest API is runnning at " + port);
