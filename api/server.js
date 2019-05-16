const express = require('express');

const server = express();

server.use(express.json());
const users = require('../names/namesModel');

server.get('/', async (req, res) => {
  res.status(200).json({ message: 'it work' });
});

server.post("/", async (req, res) => {
    const body = req.body;
    if (body.name) {
      const user = await users.add(body);
      res.status(201).json(user);
    } else {
      res.status(400).json({ error: "no user created" });
    }
});

server.delete("/", async (req, res) => {
    const user = req.body;
    if (user.name) {
      const removed = await users.remove(user);
      res.status(200).json({ removed });
    } else {
        res.status(400).json({ error: "can't remove, bad request" });
    }
});

module.exports = server;
