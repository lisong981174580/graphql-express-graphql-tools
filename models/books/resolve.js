`use strict`

const books = [
   
   
    {
        id:1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        id:2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },

 
];

module.exports = {
    Query: {
        books: (_,{id}) => {
            if(id === undefined){
                return books;
            }
            return books.filter(v => v.id === id)
        },
    }
}