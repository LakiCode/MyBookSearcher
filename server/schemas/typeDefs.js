// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    //arrays of the Book type
    savedBooks:[Book]
}
type Book {
    bookId: String
    authors: [authors]
    description: String
    title: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email:String!, password: String!): Auth
    saveBook (book: BookData): User
    deleteBook (bookId: String): User
}
 // book authors, description, title, bookId, image, and link input

input BookData {
    authors: [authors]
    description: String
    title: String
    bookId: String
    image: String
    link: String
}
`;

// export the typeDefs
module.exports = typeDefs;
