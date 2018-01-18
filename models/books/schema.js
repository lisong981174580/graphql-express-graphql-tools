`use strict`

module.exports = `
  type Book { 
    id:Int, 
    title: String, 
    author: String 
  }
  extend type Query { 
    books(id:Int): [Book]
  }
`