'use strict'

module.exports = `
    type Color {
        id:Int!
        color:String
    }
    
    extend type Query{
        color:[Color]
    }
`