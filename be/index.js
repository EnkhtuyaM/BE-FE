const express = require("express");
const app = express();
const { products, users } = require("./dummy.json");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs");
// const { error } = require("console");

const cors = require("cors");
app.use(cors());

// app.get("/products", (request, response) => {
//   response.type = "application/json";
//   response.status(200);
//   response.send({ products });
// });

app.get("/users", (request, response) => {
  // const newid = nanoid();
  response.type = "application/json";
  response.status(200);
  response.send({ users });
});

// app.listen(3001, () => {
//   console.log("Server is listening");
// });
// app.get("/users", (request, response) => {
//   response.type = "application/json";
//   response.status(200);
//   response.send({ name });
// });

// app.post("/users", (request, response) => {
//   let data = request.body;
//   response.send("Data Received:" + JSON.stringify(data));
// });
// app.listen(3001, () => {
//   console.log("Example app listening on port 3001!");
// });

app.post("/add-user", (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  fs.readFile("dummy.json", (error, data) => {
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.users.push(newUser);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error occured");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
});

app.post("/delete-user", (req, res) => {
  const idToDelete = req.body.id;
});

app.post("update-user", (req, res) => {
  const { id, updateData } = req.body;
});

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});

// let data = {};
// data.users = [];

// console.log(data);

// const newUser = {
//   id: 1,
//   name: "Ali",
//   age: 23,
//   surename: "Max",
//   email: "abc",
// };
// const updateData = {
//   age: 15,
//   email: "ali@gmail.com",
// };
// const updatedData = {
//   ...newUser,
//   ...updateData,
// };
// console.log(updatedData);
