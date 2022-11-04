const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require("graphql");
const UserType = require("./TypeDefs/UserType");
const userData = require('../MOCK_DATA.json')


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                // You make API call to database here.
                return userData
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password,
                })

                return args;
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})