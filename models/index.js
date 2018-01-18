`use strict`

const models = require('./models.json');
const {merge} = require('lodash')

// 将多个schema引入并组成一个数组
const typeDefs = models.models.map((v) => require(`${v.path}/schema`))

// 引入每个resolve并merge合并
const perResolvers = models.models.map(v => require(`${v.path}/resolve`))
const resolvers = {}
perResolvers.forEach(v => {
    merge(resolvers,v)
})

module.exports = {typeDefs,resolvers};



