const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});

//posting all the registered information of user to database and sending the result to frontend
app.post("/api", (req, res) => {
  const name = req.body.name; //will recieve name from frontend body
  const email = req.body.email; //will recieve email from frontend body
  const password = req.body.password; //will recieve password from frontend body
  sqlvalue = "INSERT INTO reg (name,email,password) VALUES(?,?,?)";
  db.query(sqlvalue, [name, email, password], (err, result) => {
    if (result) {
      res.send(result);
    } else {
      res.send({ err: err });
    }
  });
});

const JWT_SECRET = "hello";

//after registration is done again logging in but we are not using get request as it is insecurity
//and hence we are posting the entered input to database ,if match is found then we are sending the
//result to the front end

app.post("/login", (req, res) => {
  const name = req.body.name; //will recieve name from frontend body
  const email = req.body.email; //will recieve email from frontend body

  const select = "SELECT * FROM reg WHERE name=? AND email=?";
  db.query(select, [name, email], (err, result) => {
    if (result.length > 0) {
      const token = jwt.sign(
        { id: result[0].id, name: result[0].name, email: result[0].email },
        JWT_SECRET
      );

      res.send({ token: token }); //we are sending the result but we want to hide the user credential
      //therefore we are signing this into jwt authorization so that all information are encrypted and
      //storing in token the sending the token to front end and allows to login
    } else {
      res.send({ err: err });
    }
  });
});

app.post("/logout", (req, res) => {
  const token = req.headers.authorization; //already we have token in the headers of login that we are using

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  // Verify the token is present or not  and check if it's valid with secret code
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.sendStatus(403);
    }

    // Your additional logic for logout (e.g., invalidate token or perform any other action)
    // ...

    res.send("Logged out successfully");
  });
});

app.listen(5000, () => {
  console.log("started port ");
});
