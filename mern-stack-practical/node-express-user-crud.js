import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        id: uuidv4(),
        firstName: "Rishi",
        lastName: "Raj",
        age: 25
    },

    {
        id: uuidv4(),
        firstName: "Mayank",
        lastName: "Patel",
        age: 26
    }
]

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    //console.log(req.body);
    const user = req.body;
    const userID = uuidv4();
    users.push({ id: userID, ...user });
    res.send(`User is added with user name: ${user.firstName}`);

});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`user deleted with id ${id}`)
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`user with ${id} is updated`)
});
export default router;
