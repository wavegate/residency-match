/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getApplication = /* GraphQL */ `
  query GetApplication($id: ID!) {
    getApplication(id: $id) {
      createdAt
      id
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
      status
      updatedAt
      userProfile {
        aoa
        applicationYear
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
      userProfileId
      __typename
    }
  }
`;
export const getInstitution = /* GraphQL */ `
  query GetInstitution($id: ID!) {
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
`;
export const getInterviewInvite = /* GraphQL */ `
  query GetInterviewInvite($id: ID!) {
    getInterviewInvite(id: $id) {
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
export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
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
      programs {
        nextToken
        __typename
      }
      sortType
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
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listApplications = /* GraphQL */ `
  query ListApplications(
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
`;
export const listInstitutionByInstitutionCode = /* GraphQL */ `
  query ListInstitutionByInstitutionCode(
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
`;
export const listInstitutionBySortTypeAndName = /* GraphQL */ `
  query ListInstitutionBySortTypeAndName(
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
`;
export const listInterviewInviteByProgramIdAndInviteDateTime = /* GraphQL */ `
  query ListInterviewInviteByProgramIdAndInviteDateTime(
    $filter: ModelInterviewInviteFilterInput
    $inviteDateTime: ModelStringKeyConditionInput
    $limit: Int
    $nextToken: String
    $programId: ID!
    $sortDirection: ModelSortDirection
  ) {
    listInterviewInviteByProgramIdAndInviteDateTime(
      filter: $filter
      inviteDateTime: $inviteDateTime
      limit: $limit
      nextToken: $nextToken
      programId: $programId
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listInterviewInviteBySortTypeAndInviteDateTime = /* GraphQL */ `
  query ListInterviewInviteBySortTypeAndInviteDateTime(
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
      nextToken
      __typename
    }
  }
`;
export const listProgramByNrmpProgramCode = /* GraphQL */ `
  query ListProgramByNrmpProgramCode(
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
`;
export const listProgramBySortTypeAndName = /* GraphQL */ `
  query ListProgramBySortTypeAndName(
    $filter: ModelProgramFilterInput
    $limit: Int
    $name: ModelStringKeyConditionInput
    $nextToken: String
    $sortDirection: ModelSortDirection
    $sortType: String!
  ) {
    listProgramBySortTypeAndName(
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
        institutionId
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
        sortType
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSpecialtyByAcgmeSpecialtyCode = /* GraphQL */ `
  query ListSpecialtyByAcgmeSpecialtyCode(
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
`;
export const listSpecialtyBySortTypeAndAcgmeSpecialtyCode = /* GraphQL */ `
  query ListSpecialtyBySortTypeAndAcgmeSpecialtyCode(
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
        sortType
        specialtyId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUserProfileByGraduateType = /* GraphQL */ `
  query ListUserProfileByGraduateType(
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
      nextToken
      __typename
    }
  }
`;
export const listUserProfileByOwnerAccountAndIsProfileString = /* GraphQL */ `
  query ListUserProfileByOwnerAccountAndIsProfileString(
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
      nextToken
      __typename
    }
  }
`;
export const listUserProfileBySortTypeAndCodeName = /* GraphQL */ `
  query ListUserProfileBySortTypeAndCodeName(
    $codeName: ModelStringKeyConditionInput
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $sortType: String!
  ) {
    listUserProfileBySortTypeAndCodeName(
      codeName: $codeName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      sortType: $sortType
    ) {
      items {
        aoa
        applicationYear
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
        applicationYear
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
      nextToken
      __typename
    }
  }
`;
