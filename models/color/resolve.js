`use strict`

const colors = [
    {
        id:1,
        color:"red"
    },
    {
        id:2,
        color:"green"
    }
]



module.exports = {
    Query: {
        color:() => colors
    },
}

