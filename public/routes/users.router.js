"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const faker_1 = require("@faker-js/faker");
const router = (0, express_1.Router)();
exports.usersRouter = router;
function createRandomUser() {
    return {
        id: faker_1.faker.string.uuid(),
        firstName: faker_1.faker.person.firstName(),
        lastName: faker_1.faker.person.lastName(),
        email: faker_1.faker.internet.email(),
        avatar: faker_1.faker.image.avatar(),
        password: faker_1.faker.internet.password(),
        birthdate: faker_1.faker.date.birthdate(),
        registeredAt: faker_1.faker.date.past()
    };
}
const users = [];
while (users.length < 4) {
    users.push(createRandomUser());
}
router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json(users);
    }
    else {
        res.send('there is not answer');
    }
});
