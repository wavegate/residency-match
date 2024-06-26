/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const customQuery = /* GraphQL */ `query CustomQuery {
  customQuery {
    additionalComments
    anonymous
    applicationYear
    away
    comlex1ScorePass
    comlex2Score
    createdAt
    geographicPreference
    graduateType
    greenCard
    home
    id
    img
    institutionName
    institutionNameLowerCase
    inviteDateTime
    locationState
    medicalDegree
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
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
    step1ScorePass
    step2Score
    subI
    updatedAt
    visaRequired
    yearOfGraduation
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CustomQueryQueryVariables,
  APITypes.CustomQueryQuery
>;
export const getApplication = /* GraphQL */ `query GetApplication($id: ID!) {
  getApplication(id: $id) {
    createdAt
    id
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      sortType
      specialtyId
      type
      updatedAt
      __typename
    }
    programId
    status
    updatedAt
    userProfile {
      aoa
      applicationYear
      classRank
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      img
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
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const getInstitution = /* GraphQL */ `query GetInstitution($id: ID!) {
  getInstitution(id: $id) {
    createdAt
    id
    imageLink
    institutionCode
    name
    programs {
      nextToken
      __typename
    }
    sortType
    specialties {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInstitutionQueryVariables,
  APITypes.GetInstitutionQuery
>;
export const getInterviewInvite = /* GraphQL */ `query GetInterviewInvite($id: ID!) {
  getInterviewInvite(id: $id) {
    additionalComments
    anonymous
    applicationYear
    away
    comlex1ScorePass
    comlex2Score
    createdAt
    geographicPreference
    graduateType
    greenCard
    home
    id
    img
    institutionName
    institutionNameLowerCase
    inviteDateTime
    locationState
    medicalDegree
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
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
    step1ScorePass
    step2Score
    subI
    updatedAt
    visaRequired
    yearOfGraduation
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInterviewInviteQueryVariables,
  APITypes.GetInterviewInviteQuery
>;
export const getProgram = /* GraphQL */ `query GetProgram($id: ID!) {
  getProgram(id: $id) {
    applications {
      nextToken
      __typename
    }
    createdAt
    id
    institution {
      createdAt
      id
      imageLink
      institutionCode
      name
      sortType
      updatedAt
      __typename
    }
    institutionId
    institutionName
    institutionNameLowerCase
    interviewInvites {
      nextToken
      __typename
    }
    name
    nrmpProgramCode
    sortType
    specialty {
      acgmeSpecialtyCode
      createdAt
      id
      name
      sortType
      updatedAt
      __typename
    }
    specialtyId
    type
    updatedAt
    userProfiles {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgramQueryVariables,
  APITypes.GetProgramQuery
>;
export const getSpecialty = /* GraphQL */ `query GetSpecialty($id: ID!) {
  getSpecialty(id: $id) {
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
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpecialtyQueryVariables,
  APITypes.GetSpecialtyQuery
>;
export const getSpecialtyInstitution = /* GraphQL */ `query GetSpecialtyInstitution($id: ID!) {
  getSpecialtyInstitution(id: $id) {
    createdAt
    id
    institution {
      createdAt
      id
      imageLink
      institutionCode
      name
      sortType
      updatedAt
      __typename
    }
    institutionId
    sortType
    specialty {
      acgmeSpecialtyCode
      createdAt
      id
      name
      sortType
      updatedAt
      __typename
    }
    specialtyId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSpecialtyInstitutionQueryVariables,
  APITypes.GetSpecialtyInstitutionQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    aoa
    applicationYear
    applications {
      nextToken
      __typename
    }
    classRank
    comlex1ScorePass
    comlex2Score
    createdAt
    ecfmgCertified
    goldHumanism
    graduateType
    id
    img
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
    programs {
      nextToken
      __typename
    }
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
    username
    visaRequired
    yearOfGraduation
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const getUserProfileProgram = /* GraphQL */ `query GetUserProfileProgram($id: ID!) {
  getUserProfileProgram(id: $id) {
    createdAt
    id
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      sortType
      specialtyId
      type
      updatedAt
      __typename
    }
    programId
    updatedAt
    userProfile {
      aoa
      applicationYear
      classRank
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      img
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
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileProgramQueryVariables,
  APITypes.GetUserProfileProgramQuery
>;
export const listApplications = /* GraphQL */ `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      programId
      status
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationsQueryVariables,
  APITypes.ListApplicationsQuery
>;
export const listInstitutionByInstitutionCode = /* GraphQL */ `query ListInstitutionByInstitutionCode(
  $filter: ModelInstitutionFilterInput
  $institutionCode: String!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listInstitutionByInstitutionCode(
    filter: $filter
    institutionCode: $institutionCode
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      imageLink
      institutionCode
      name
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstitutionByInstitutionCodeQueryVariables,
  APITypes.ListInstitutionByInstitutionCodeQuery
>;
export const listInstitutionBySortTypeAndName = /* GraphQL */ `query ListInstitutionBySortTypeAndName(
  $filter: ModelInstitutionFilterInput
  $limit: Int
  $name: ModelStringKeyConditionInput
  $nextToken: String
  $sortDirection: ModelSortDirection
  $sortType: String!
) {
  listInstitutionBySortTypeAndName(
    filter: $filter
    limit: $limit
    name: $name
    nextToken: $nextToken
    sortDirection: $sortDirection
    sortType: $sortType
  ) {
    items {
      createdAt
      id
      imageLink
      institutionCode
      name
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstitutionBySortTypeAndNameQueryVariables,
  APITypes.ListInstitutionBySortTypeAndNameQuery
>;
export const listInstitutions = /* GraphQL */ `query ListInstitutions(
  $filter: ModelInstitutionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInstitutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      imageLink
      institutionCode
      name
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInstitutionsQueryVariables,
  APITypes.ListInstitutionsQuery
>;
export const listInterviewInviteByProgramId = /* GraphQL */ `query ListInterviewInviteByProgramId(
  $filter: ModelInterviewInviteFilterInput
  $limit: Int
  $nextToken: String
  $programId: ID!
  $sortDirection: ModelSortDirection
) {
  listInterviewInviteByProgramId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    programId: $programId
    sortDirection: $sortDirection
  ) {
    items {
      additionalComments
      anonymous
      applicationYear
      away
      comlex1ScorePass
      comlex2Score
      createdAt
      geographicPreference
      graduateType
      greenCard
      home
      id
      img
      institutionName
      institutionNameLowerCase
      inviteDateTime
      locationState
      medicalDegree
      owner
      programId
      signal
      sortType
      step1Score
      step1ScorePass
      step2Score
      subI
      updatedAt
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewInviteByProgramIdQueryVariables,
  APITypes.ListInterviewInviteByProgramIdQuery
>;
export const listInterviewInviteBySortTypeAndInviteDateTime = /* GraphQL */ `query ListInterviewInviteBySortTypeAndInviteDateTime(
  $filter: ModelInterviewInviteFilterInput
  $inviteDateTime: ModelStringKeyConditionInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $sortType: String!
) {
  listInterviewInviteBySortTypeAndInviteDateTime(
    filter: $filter
    inviteDateTime: $inviteDateTime
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    sortType: $sortType
  ) {
    items {
      additionalComments
      anonymous
      applicationYear
      away
      comlex1ScorePass
      comlex2Score
      createdAt
      geographicPreference
      graduateType
      greenCard
      home
      id
      img
      institutionName
      institutionNameLowerCase
      inviteDateTime
      locationState
      medicalDegree
      owner
      programId
      signal
      sortType
      step1Score
      step1ScorePass
      step2Score
      subI
      updatedAt
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewInviteBySortTypeAndInviteDateTimeQueryVariables,
  APITypes.ListInterviewInviteBySortTypeAndInviteDateTimeQuery
>;
export const listInterviewInvites = /* GraphQL */ `query ListInterviewInvites(
  $filter: ModelInterviewInviteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterviewInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      additionalComments
      anonymous
      applicationYear
      away
      comlex1ScorePass
      comlex2Score
      createdAt
      geographicPreference
      graduateType
      greenCard
      home
      id
      img
      institutionName
      institutionNameLowerCase
      inviteDateTime
      locationState
      medicalDegree
      owner
      programId
      signal
      sortType
      step1Score
      step1ScorePass
      step2Score
      subI
      updatedAt
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewInvitesQueryVariables,
  APITypes.ListInterviewInvitesQuery
>;
export const listProgramByNrmpProgramCode = /* GraphQL */ `query ListProgramByNrmpProgramCode(
  $filter: ModelProgramFilterInput
  $limit: Int
  $nextToken: String
  $nrmpProgramCode: String!
  $sortDirection: ModelSortDirection
) {
  listProgramByNrmpProgramCode(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    nrmpProgramCode: $nrmpProgramCode
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      sortType
      specialtyId
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgramByNrmpProgramCodeQueryVariables,
  APITypes.ListProgramByNrmpProgramCodeQuery
>;
export const listProgramBySortTypeAndInstitutionNameLowerCase = /* GraphQL */ `query ListProgramBySortTypeAndInstitutionNameLowerCase(
  $filter: ModelProgramFilterInput
  $institutionNameLowerCase: ModelStringKeyConditionInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $sortType: String!
) {
  listProgramBySortTypeAndInstitutionNameLowerCase(
    filter: $filter
    institutionNameLowerCase: $institutionNameLowerCase
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    sortType: $sortType
  ) {
    items {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      sortType
      specialtyId
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgramBySortTypeAndInstitutionNameLowerCaseQueryVariables,
  APITypes.ListProgramBySortTypeAndInstitutionNameLowerCaseQuery
>;
export const listPrograms = /* GraphQL */ `query ListPrograms(
  $filter: ModelProgramFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      sortType
      specialtyId
      type
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgramsQueryVariables,
  APITypes.ListProgramsQuery
>;
export const listSpecialties = /* GraphQL */ `query ListSpecialties(
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
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpecialtiesQueryVariables,
  APITypes.ListSpecialtiesQuery
>;
export const listSpecialtyByAcgmeSpecialtyCode = /* GraphQL */ `query ListSpecialtyByAcgmeSpecialtyCode(
  $acgmeSpecialtyCode: String!
  $filter: ModelSpecialtyFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSpecialtyByAcgmeSpecialtyCode(
    acgmeSpecialtyCode: $acgmeSpecialtyCode
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      acgmeSpecialtyCode
      createdAt
      id
      name
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpecialtyByAcgmeSpecialtyCodeQueryVariables,
  APITypes.ListSpecialtyByAcgmeSpecialtyCodeQuery
>;
export const listSpecialtyBySortTypeAndAcgmeSpecialtyCode = /* GraphQL */ `query ListSpecialtyBySortTypeAndAcgmeSpecialtyCode(
  $acgmeSpecialtyCode: ModelStringKeyConditionInput
  $filter: ModelSpecialtyFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $sortType: String!
) {
  listSpecialtyBySortTypeAndAcgmeSpecialtyCode(
    acgmeSpecialtyCode: $acgmeSpecialtyCode
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    sortType: $sortType
  ) {
    items {
      acgmeSpecialtyCode
      createdAt
      id
      name
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpecialtyBySortTypeAndAcgmeSpecialtyCodeQueryVariables,
  APITypes.ListSpecialtyBySortTypeAndAcgmeSpecialtyCodeQuery
>;
export const listSpecialtyInstitutions = /* GraphQL */ `query ListSpecialtyInstitutions(
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
      sortType
      specialtyId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSpecialtyInstitutionsQueryVariables,
  APITypes.ListSpecialtyInstitutionsQuery
>;
export const listUserProfileByGraduateType = /* GraphQL */ `query ListUserProfileByGraduateType(
  $filter: ModelUserProfileFilterInput
  $graduateType: UserProfileGraduateType!
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserProfileByGraduateType(
    filter: $filter
    graduateType: $graduateType
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      aoa
      applicationYear
      classRank
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      img
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
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileByGraduateTypeQueryVariables,
  APITypes.ListUserProfileByGraduateTypeQuery
>;
export const listUserProfileByOwnerAccountAndIsProfileString = /* GraphQL */ `query ListUserProfileByOwnerAccountAndIsProfileString(
  $filter: ModelUserProfileFilterInput
  $isProfileString: ModelStringKeyConditionInput
  $limit: Int
  $nextToken: String
  $ownerAccount: String!
  $sortDirection: ModelSortDirection
) {
  listUserProfileByOwnerAccountAndIsProfileString(
    filter: $filter
    isProfileString: $isProfileString
    limit: $limit
    nextToken: $nextToken
    ownerAccount: $ownerAccount
    sortDirection: $sortDirection
  ) {
    items {
      aoa
      applicationYear
      classRank
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      img
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
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileByOwnerAccountAndIsProfileStringQueryVariables,
  APITypes.ListUserProfileByOwnerAccountAndIsProfileStringQuery
>;
export const listUserProfileBySortTypeAndUsername = /* GraphQL */ `query ListUserProfileBySortTypeAndUsername(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $sortType: String!
  $username: ModelStringKeyConditionInput
) {
  listUserProfileBySortTypeAndUsername(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    sortType: $sortType
    username: $username
  ) {
    items {
      aoa
      applicationYear
      classRank
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      img
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
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileBySortTypeAndUsernameQueryVariables,
  APITypes.ListUserProfileBySortTypeAndUsernameQuery
>;
export const listUserProfileProgramByUserProfileId = /* GraphQL */ `query ListUserProfileProgramByUserProfileId(
  $filter: ModelUserProfileProgramFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userProfileId: ID!
) {
  listUserProfileProgramByUserProfileId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userProfileId: $userProfileId
  ) {
    items {
      createdAt
      id
      owner
      programId
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileProgramByUserProfileIdQueryVariables,
  APITypes.ListUserProfileProgramByUserProfileIdQuery
>;
export const listUserProfilePrograms = /* GraphQL */ `query ListUserProfilePrograms(
  $filter: ModelUserProfileProgramFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfilePrograms(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      id
      owner
      programId
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfileProgramsQueryVariables,
  APITypes.ListUserProfileProgramsQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      aoa
      applicationYear
      classRank
      comlex1ScorePass
      comlex2Score
      createdAt
      ecfmgCertified
      goldHumanism
      graduateType
      id
      img
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
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
