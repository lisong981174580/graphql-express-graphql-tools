`use strict`

const {merge} = require('lodash')

const models = require('./models.json')

const allResolvers = models.models.map(v => require(`${v.path}/resolve`))

const resolvers = {}
allResolvers.forEach(v => {
    merge(resolvers,v)
})


module.exports = resolvers;


