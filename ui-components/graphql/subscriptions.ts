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
export const onCreateInterviewInvite = /* GraphQL */ `
  subscription OnCreateInterviewInvite(
    $filter: ModelSubscriptionInterviewInviteFilterInput
    $owner: String
  ) {
    onCreateInterviewInvite(filter: $filter, owner: $owner) {
      additionalComments
      anonymous
      createdAt
      geographicPreference
      id
      impression
      instate
      inviteDateTime
      owner
      program {
        createdAt
        id
        institutionId
        name
        nrmpProgramCode
        specialtyId
        type
        updatedAt
        __typename
      }
      programId
      signal
      updatedAt
      userProfile {
        aoa
        classRank
        codeName
        comlex1Score
        comlex2Score
        createdAt
        goldHumanism
        graduateType
        id
        interviewInviteId
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
      interviewInvites {
        nextToken
        __typename
      }
      name
      nrmpProgramCode
      specialty {
        acgmeSpecialtyCode
        createdAt
        id
        name
        updatedAt
        __typename
      }
      specialtyId
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
      programs {
        nextToken
        __typename
      }
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
      aoa
      classRank
      codeName
      comlex1Score
      comlex2Score
      createdAt
      goldHumanism
      graduateType
      id
      interviewInvite {
        additionalComments
        anonymous
        createdAt
        geographicPreference
        id
        impression
        instate
        inviteDateTime
        owner
        programId
        signal
        updatedAt
        __typename
      }
      interviewInviteId
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
export const onDeleteInterviewInvite = /* GraphQL */ `
  subscription OnDeleteInterviewInvite(
    $filter: ModelSubscriptionInterviewInviteFilterInput
    $owner: String
  ) {
    onDeleteInterviewInvite(filter: $filter, owner: $owner) {
      additionalComments
      anonymous
      createdAt
      geographicPreference
      id
      impression
      instate
      inviteDateTime
      owner
      program {
        createdAt
        id
        institutionId
        name
        nrmpProgramCode
        specialtyId
        type
        updatedAt
        __typename
      }
      programId
      signal
      updatedAt
      userProfile {
        aoa
        classRank
        codeName
        comlex1Score
        comlex2Score
        createdAt
        goldHumanism
        graduateType
        id
        interviewInviteId
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
      interviewInvites {
        nextToken
        __typename
      }
      name
      nrmpProgramCode
      specialty {
        acgmeSpecialtyCode
        createdAt
        id
        name
        updatedAt
        __typename
      }
      specialtyId
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
      programs {
        nextToken
        __typename
      }
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
      aoa
      classRank
      codeName
      comlex1Score
      comlex2Score
      createdAt
      goldHumanism
      graduateType
      id
      interviewInvite {
        additionalComments
        anonymous
        createdAt
        geographicPreference
        id
        impression
        instate
        inviteDateTime
        owner
        programId
        signal
        updatedAt
        __typename
      }
      interviewInviteId
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
export const onUpdateInterviewInvite = /* GraphQL */ `
  subscription OnUpdateInterviewInvite(
    $filter: ModelSubscriptionInterviewInviteFilterInput
    $owner: String
  ) {
    onUpdateInterviewInvite(filter: $filter, owner: $owner) {
      additionalComments
      anonymous
      createdAt
      geographicPreference
      id
      impression
      instate
      inviteDateTime
      owner
      program {
        createdAt
        id
        institutionId
        name
        nrmpProgramCode
        specialtyId
        type
        updatedAt
        __typename
      }
      programId
      signal
      updatedAt
      userProfile {
        aoa
        classRank
        codeName
        comlex1Score
        comlex2Score
        createdAt
        goldHumanism
        graduateType
        id
        interviewInviteId
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
      interviewInvites {
        nextToken
        __typename
      }
      name
      nrmpProgramCode
      specialty {
        acgmeSpecialtyCode
        createdAt
        id
        name
        updatedAt
        __typename
      }
      specialtyId
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
      programs {
        nextToken
        __typename
      }
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
      aoa
      classRank
      codeName
      comlex1Score
      comlex2Score
      createdAt
      goldHumanism
      graduateType
      id
      interviewInvite {
        additionalComments
        anonymous
        createdAt
        geographicPreference
        id
        impression
        instate
        inviteDateTime
        owner
        programId
        signal
        updatedAt
        __typename
      }
      interviewInviteId
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
