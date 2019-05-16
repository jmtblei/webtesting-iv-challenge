const db = require('../data/dbConfig')
const users = require('./namesModel');

describe('users model', () => {
    afterEach(async () => {
        await db("users").truncate();
    });
    describe('add()', () => {
        it('should add a new user with name', async () => {
            await users.add({ name: 'activityman' });
            const user = await db('users');
            expect(user).toHaveLength(1);
        })
    })
    describe('remove()', () => {
        it('should remove a user', async() => {
            const user = { name: 'foodbuddy' };
            const removed = await users.remove(user);
            expect(removed).toBe(0);
        })
    })
})