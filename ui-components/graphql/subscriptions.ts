/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInstitution = /* GraphQL */ `
  subscription OnCreateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onCreateInstitution(filter: $filter) {
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
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
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
export const onCreateSpecialty = /* GraphQL */ `
  subscription OnCreateSpecialty(
    $filter: ModelSubscriptionSpecialtyFilterInput
  ) {
    onCreateSpecialty(filter: $filter) {
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
export const onCreateSpecialtyInstitution = /* GraphQL */ `
  subscription OnCreateSpecialtyInstitution(
    $filter: ModelSubscriptionSpecialtyInstitutionFilterInput
  ) {
    onCreateSpecialtyInstitution(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInstitution = /* GraphQL */ `
  subscription OnDeleteInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onDeleteInstitution(filter: $filter) {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
    onDeleteProgram(filter: $filter) {
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
export const onDeleteSpecialty = /* GraphQL */ `
  subscription OnDeleteSpecialty(
    $filter: ModelSubscriptionSpecialtyFilterInput
  ) {
    onDeleteSpecialty(filter: $filter) {
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
export const onDeleteSpecialtyInstitution = /* GraphQL */ `
  subscription OnDeleteSpecialtyInstitution(
    $filter: ModelSubscriptionSpecialtyInstitutionFilterInput
  ) {
    onDeleteSpecialtyInstitution(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInstitution = /* GraphQL */ `
  subscription OnUpdateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onUpdateInstitution(filter: $filter) {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onUpdateProgram(filter: $filter) {
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
export const onUpdateSpecialty = /* GraphQL */ `
  subscription OnUpdateSpecialty(
    $filter: ModelSubscriptionSpecialtyFilterInput
  ) {
    onUpdateSpecialty(filter: $filter) {
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
export const onUpdateSpecialtyInstitution = /* GraphQL */ `
  subscription OnUpdateSpecialtyInstitution(
    $filter: ModelSubscriptionSpecialtyInstitutionFilterInput
  ) {
    onUpdateSpecialtyInstitution(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
