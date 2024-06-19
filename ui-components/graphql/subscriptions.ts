/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateApplication = /* GraphQL */ `
  subscription OnCreateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
    $owner: String
  ) {
    onCreateApplication(filter: $filter, owner: $owner) {
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
export const onCreateInstitution = /* GraphQL */ `
  subscription OnCreateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onCreateInstitution(filter: $filter) {
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
export const onCreateInterviewInvite = /* GraphQL */ `
  subscription OnCreateInterviewInvite(
    $filter: ModelSubscriptionInterviewInviteFilterInput
    $owner: String
  ) {
    onCreateInterviewInvite(filter: $filter, owner: $owner) {
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
export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onCreateProgram(filter: $filter) {
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
      sortType
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
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
export const onDeleteApplication = /* GraphQL */ `
  subscription OnDeleteApplication(
    $filter: ModelSubscriptionApplicationFilterInput
    $owner: String
  ) {
    onDeleteApplication(filter: $filter, owner: $owner) {
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
export const onDeleteInstitution = /* GraphQL */ `
  subscription OnDeleteInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onDeleteInstitution(filter: $filter) {
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
export const onDeleteInterviewInvite = /* GraphQL */ `
  subscription OnDeleteInterviewInvite(
    $filter: ModelSubscriptionInterviewInviteFilterInput
    $owner: String
  ) {
    onDeleteInterviewInvite(filter: $filter, owner: $owner) {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
    onDeleteProgram(filter: $filter) {
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
      sortType
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
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
export const onUpdateApplication = /* GraphQL */ `
  subscription OnUpdateApplication(
    $filter: ModelSubscriptionApplicationFilterInput
    $owner: String
  ) {
    onUpdateApplication(filter: $filter, owner: $owner) {
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
export const onUpdateInstitution = /* GraphQL */ `
  subscription OnUpdateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onUpdateInstitution(filter: $filter) {
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
export const onUpdateInterviewInvite = /* GraphQL */ `
  subscription OnUpdateInterviewInvite(
    $filter: ModelSubscriptionInterviewInviteFilterInput
    $owner: String
  ) {
    onUpdateInterviewInvite(filter: $filter, owner: $owner) {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
    onUpdateProgram(filter: $filter) {
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
      sortType
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
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
