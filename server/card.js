const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
const port = 3001;
const mysql = require("sync-mysql");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var connection = new mysql({
  host: "database-2.cz3zo4yskaei.ap-northeast-2.rds.amazonaws.com",
  user: "prmj",
  port: "3306",
  password: "1234",
  database: "cseprmj",
});

//디비 확인
let result = connection.query("select * from EVENT_INFO");
//console.log(result);

app.get("/cardList", (req, res) => {
  const result = connection.query("select * from EVENT_INFO");
  //let event =JSON.parse(JSON.stringify({ok: true, data: result}))
  res.json(result);
});

app.post("/cardSearch", (req, res) => {
  const search = req.body.searchName;
  console.log(search);
  const result = connection.query(
    "select * from EVENT_INFO where EVENT_NAME like '%" + search + "%'"
  );
  res.json(result);
  console.log(result);
  // const searchName = connection.query('select EVENT_NAME from EVENT_INFO')
  // res.json(searchName);
});

//포트확인
app.listen(port, () => {
  console.log(port + " port start!");
});

module.exports = app;
