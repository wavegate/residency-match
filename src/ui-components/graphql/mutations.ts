/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstitution = /* GraphQL */ `
  mutation CreateInstitution(
    $condition: ModelInstitutionConditionInput
    $input: CreateInstitutionInput!
  ) {
    createInstitution(condition: $condition, input: $input) {
      createdAt
      id
      institutionCode
      name
      imageLink
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
export const createInterviewInvite = /* GraphQL */ `
  mutation CreateInterviewInvite(
    $condition: ModelInterviewInviteConditionInput
    $input: CreateInterviewInviteInput!
  ) {
    createInterviewInvite(condition: $condition, input: $input) {
      additionalComments
      anonymous
      away
      comlex1Score
      comlex2Score
      createdAt
      geographicPreference
      greenCard
      home
      id
      img
      inviteDateTime
      location
      medicalDegree
      owner
      program {
        createdAt
        id
        institutionId
        name
        nrmpProgramCode
        sortType
        specialtyId
        type
        updatedAt
        __typename
      }
      programId
      signal
      sortType
      step1Score
      step2Score
      subI
      updatedAt
      visaRequired
      yearOfGraduation
      __typename
    }
  }
`;
export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $condition: ModelProgramConditionInput
    $input: CreateProgramInput!
  ) {
    createProgram(condition: $condition, input: $input) {
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
export const createSpecialty = /* GraphQL */ `
  mutation CreateSpecialty(
    $condition: ModelSpecialtyConditionInput
    $input: CreateSpecialtyInput!
  ) {
    createSpecialty(condition: $condition, input: $input) {
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
export const createSpecialtyInstitution = /* GraphQL */ `
  mutation CreateSpecialtyInstitution(
    $condition: ModelSpecialtyInstitutionConditionInput
    $input: CreateSpecialtyInstitutionInput!
  ) {
    createSpecialtyInstitution(condition: $condition, input: $input) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: CreateUserProfileInput!
  ) {
    createUserProfile(condition: $condition, input: $input) {
      aoa
      applicationYear
      applications {
        nextToken
        __typename
      }
      classRank
      codeName
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      isProfile
      isProfileString
      location
      medicalDegree
      monthsOfUSCE
      numApplications
      numInterviews
      numPublications
      numRejected
      numVolunteerExperiences
      numWaitlisted
      numWithdrawn
      numWorkExperiences
      otherDegrees
      owner
      ownerAccount
      redFlags
      redFlagsExplanation
      schoolRanking
      sigmaSigmaPhi
      sortType
      step1Score
      step1ScorePass
      step2CSPathway
      step2Score
      step3Score
      updatedAt
      visaRequired
      yearOfGraduation
      __typename
    }
  }
`;
export const deleteInstitution = /* GraphQL */ `
  mutation DeleteInstitution(
    $condition: ModelInstitutionConditionInput
    $input: DeleteInstitutionInput!
  ) {
    deleteInstitution(condition: $condition, input: $input) {
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
export const deleteInterviewInvite = /* GraphQL */ `
  mutation DeleteInterviewInvite(
    $condition: ModelInterviewInviteConditionInput
    $input: DeleteInterviewInviteInput!
  ) {
    deleteInterviewInvite(condition: $condition, input: $input) {
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
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $condition: ModelProgramConditionInput
    $input: DeleteProgramInput!
  ) {
    deleteProgram(condition: $condition, input: $input) {
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
export const deleteSpecialty = /* GraphQL */ `
  mutation DeleteSpecialty(
    $condition: ModelSpecialtyConditionInput
    $input: DeleteSpecialtyInput!
  ) {
    deleteSpecialty(condition: $condition, input: $input) {
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
export const deleteSpecialtyInstitution = /* GraphQL */ `
  mutation DeleteSpecialtyInstitution(
    $condition: ModelSpecialtyInstitutionConditionInput
    $input: DeleteSpecialtyInstitutionInput!
  ) {
    deleteSpecialtyInstitution(condition: $condition, input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: DeleteUserProfileInput!
  ) {
    deleteUserProfile(condition: $condition, input: $input) {
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
export const updateInstitution = /* GraphQL */ `
  mutation UpdateInstitution(
    $condition: ModelInstitutionConditionInput
    $input: UpdateInstitutionInput!
  ) {
    updateInstitution(condition: $condition, input: $input) {
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
export const updateInterviewInvite = /* GraphQL */ `
  mutation UpdateInterviewInvite(
    $condition: ModelInterviewInviteConditionInput
    $input: UpdateInterviewInviteInput!
  ) {
    updateInterviewInvite(condition: $condition, input: $input) {
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
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $condition: ModelProgramConditionInput
    $input: UpdateProgramInput!
  ) {
    updateProgram(condition: $condition, input: $input) {
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
export const updateSpecialty = /* GraphQL */ `
  mutation UpdateSpecialty(
    $condition: ModelSpecialtyConditionInput
    $input: UpdateSpecialtyInput!
  ) {
    updateSpecialty(condition: $condition, input: $input) {
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
export const updateSpecialtyInstitution = /* GraphQL */ `
  mutation UpdateSpecialtyInstitution(
    $condition: ModelSpecialtyInstitutionConditionInput
    $input: UpdateSpecialtyInstitutionInput!
  ) {
    updateSpecialtyInstitution(condition: $condition, input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $condition: ModelUserProfileConditionInput
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(condition: $condition, input: $input) {
      aoa
      avatarImage
      classRank
      codeName
      comlex1Score
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      isProfile
      location
      medicalDegree
      monthsOfUSCE
      needVisa
      numApplications
      numInterviews
      numPublicationsPosters
      numVolunteerExperiences
      numWorkExperiences
      owner
      redFlags
      sigmaSigmaPi
      step1Score
      step2CSPathway
      step2Score
      updatedAt
      yearOfGraduation
      __typename
    }
  }
`;
