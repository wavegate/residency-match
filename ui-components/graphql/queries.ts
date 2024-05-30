/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstitution = /* GraphQL */ `
  query GetInstitution($id: ID!) {
    getInstitution(id: $id) {
      createdAt
      id
      institutionCode
      name
      programs {
        nextToken
        __typename
      }
      specialties {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      createdAt
      id
      institution {
        createdAt
        id
        institutionCode
        name
        updatedAt
        __typename
      }
      institutionId
      name
      nrmpProgramCode
      type
      updatedAt
      __typename
    }
  }
`;
export const getSpecialty = /* GraphQL */ `
  query GetSpecialty($id: ID!) {
    getSpecialty(id: $id) {
      acgmeSpecialtyCode
      createdAt
      id
      institutions {
        nextToken
        __typename
      }
      name
      updatedAt
      __typename
    }
  }
`;
export const getSpecialtyInstitution = /* GraphQL */ `
  query GetSpecialtyInstitution($id: ID!) {
    getSpecialtyInstitution(id: $id) {
      createdAt
      id
      institution {
        createdAt
        id
        institutionCode
        name
        updatedAt
        __typename
      }
      institutionId
      specialty {
        acgmeSpecialtyCode
        createdAt
        id
        name
        updatedAt
        __typename
      }
      specialtyId
      updatedAt
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const listInstitutions = /* GraphQL */ `
  query ListInstitutions(
    $filter: ModelInstitutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstitutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        institutionCode
        name
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        institutionId
        name
        nrmpProgramCode
        type
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSpecialties = /* GraphQL */ `
  query ListSpecialties(
    $filter: ModelSpecialtyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        acgmeSpecialtyCode
        createdAt
        id
        name
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSpecialtyInstitutions = /* GraphQL */ `
  query ListSpecialtyInstitutions(
    $filter: ModelSpecialtyInstitutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialtyInstitutions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        id
        institutionId
        specialtyId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
