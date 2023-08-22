const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//################### FAKE USER #####################
const createUser = () => {
  const fakeUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.database.mongodbObjectId(),
  };
  return fakeUser;
};

const newFakeUsers = createUser();
console.log(newFakeUsers);

//################### FAKE COMPANY #####################
const createCompany = () => {
  const fakeCompany = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
  return fakeCompany;
};

const newFakeCompanys = createCompany();
console.log(newFakeCompanys);

//################### ROUTES #####################
app.get("/api/users/new", (req, res) => res.json(createUser()));

app.get("/api/company/new", (req, res) => res.json(createCompany()));

app.get("/api/user/company", (req, res) =>
res.json({ User: createUser(), Company: createCompany() })
);


//################### PORT #####################
app.listen(port, () => console.log(`Listening on port: ${port}`));