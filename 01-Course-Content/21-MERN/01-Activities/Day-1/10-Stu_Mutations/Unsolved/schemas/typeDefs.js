const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    class(id: ID!): Class
  }

  type Mutation {
    addSchool(name: String!, location: String!, studentCount: Int!): School
    updateClass(id: ID!, building: String!): Class
  }
`;

module.exports = typeDefs;
