/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstitution = /* GraphQL */ `
  query GetInstitution($id: ID!) {
    getInstitution(id: $id) {
      createdAt
      id
      institutionCode
      imageLink
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
export const getInterviewInvite = /* GraphQL */ `
  query GetInterviewInvite($id: ID!) {
    getInterviewInvite(id: $id) {
      additionalComments
      anonymous
      aoa
      classRank
      comlex1Score
      comlex2Score
      createdAt
      geographicPreference
      goldHumanism
      graduateType
      id
      impression
      instate
      inviteDateTime
      medicalDegree
      numApplications
      numInterviews
      numPublicationsPosters
      numVolunteerExperiences
      numWithdrawals
      numWorkExperiences
      owner
      program {
        createdAt
        id
        institutionId
        name
        nrmpProgramCode
        type
        updatedAt
        __typename
      }
      programId
      redFlags
      sigmaSigmaPi
      signal
      step1Score
      step2Score
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
      interviewInvites {
        nextToken
        __typename
      }
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
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      aoa
      classRank
      codeName
      comlex1Score
      comlex2Score
      createdAt
      goldHumanism
      graduateType
      id
      medicalDegree
      numApplications
      numInterviews
      numPublicationsPosters
      numVolunteerExperiences
      numWithdrawals
      numWorkExperiences
      owner
      redFlags
      sigmaSigmaPi
      step1Score
      step2Score
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
export const listInterviewInvites = /* GraphQL */ `
  query ListInterviewInvites(
    $filter: ModelInterviewInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterviewInvites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        additionalComments
        anonymous
        aoa
        classRank
        comlex1Score
        comlex2Score
        createdAt
        geographicPreference
        goldHumanism
        graduateType
        id
        impression
        instate
        inviteDateTime
        medicalDegree
        numApplications
        numInterviews
        numPublicationsPosters
        numVolunteerExperiences
        numWithdrawals
        numWorkExperiences
        owner
        programId
        redFlags
        sigmaSigmaPi
        signal
        step1Score
        step2Score
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        aoa
        classRank
        codeName
        comlex1Score
        comlex2Score
        createdAt
        goldHumanism
        graduateType
        id
        medicalDegree
        numApplications
        numInterviews
        numPublicationsPosters
        numVolunteerExperiences
        numWithdrawals
        numWorkExperiences
        owner
        redFlags
        sigmaSigmaPi
        step1Score
        step2Score
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
