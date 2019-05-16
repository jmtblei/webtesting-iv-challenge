const db = require("../data/dbConfig");

module.exports = {
    add,
    remove
};

async function add(user) {
  return db("users").insert(user);
}

async function remove(user) {
  const { name } = user;
  return db("users")
    .where("name", name)
    .del();
}
