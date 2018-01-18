`use strict`
const models = require('./models.json');

const typeDefs = models.models.map((v) => require(`${v.path}/schema`))

module.exports = typeDefs;
