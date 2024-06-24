/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateApplication = /* GraphQL */ `subscription OnCreateApplication(
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
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onCreateInstitution = /* GraphQL */ `subscription OnCreateInstitution(
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
` as GeneratedSubscription<
  APITypes.OnCreateInstitutionSubscriptionVariables,
  APITypes.OnCreateInstitutionSubscription
>;
export const onCreateInterviewInvite = /* GraphQL */ `subscription OnCreateInterviewInvite(
  $filter: ModelSubscriptionInterviewInviteFilterInput
  $owner: String
) {
  onCreateInterviewInvite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInterviewInviteSubscriptionVariables,
  APITypes.OnCreateInterviewInviteSubscription
>;
export const onCreateProgram = /* GraphQL */ `subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProgramSubscriptionVariables,
  APITypes.OnCreateProgramSubscription
>;
export const onCreateSpecialty = /* GraphQL */ `subscription OnCreateSpecialty($filter: ModelSubscriptionSpecialtyFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSpecialtySubscriptionVariables,
  APITypes.OnCreateSpecialtySubscription
>;
export const onCreateSpecialtyInstitution = /* GraphQL */ `subscription OnCreateSpecialtyInstitution(
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
` as GeneratedSubscription<
  APITypes.OnCreateSpecialtyInstitutionSubscriptionVariables,
  APITypes.OnCreateSpecialtyInstitutionSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
  $ownerAccount: String
) {
  onCreateUserProfile(
    filter: $filter
    owner: $owner
    ownerAccount: $ownerAccount
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onCreateUserProfileProgram = /* GraphQL */ `subscription OnCreateUserProfileProgram(
  $filter: ModelSubscriptionUserProfileProgramFilterInput
  $owner: String
) {
  onCreateUserProfileProgram(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileProgramSubscriptionVariables,
  APITypes.OnCreateUserProfileProgramSubscription
>;
export const onDeleteApplication = /* GraphQL */ `subscription OnDeleteApplication(
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
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onDeleteInstitution = /* GraphQL */ `subscription OnDeleteInstitution(
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
` as GeneratedSubscription<
  APITypes.OnDeleteInstitutionSubscriptionVariables,
  APITypes.OnDeleteInstitutionSubscription
>;
export const onDeleteInterviewInvite = /* GraphQL */ `subscription OnDeleteInterviewInvite(
  $filter: ModelSubscriptionInterviewInviteFilterInput
  $owner: String
) {
  onDeleteInterviewInvite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterviewInviteSubscriptionVariables,
  APITypes.OnDeleteInterviewInviteSubscription
>;
export const onDeleteProgram = /* GraphQL */ `subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProgramSubscriptionVariables,
  APITypes.OnDeleteProgramSubscription
>;
export const onDeleteSpecialty = /* GraphQL */ `subscription OnDeleteSpecialty($filter: ModelSubscriptionSpecialtyFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpecialtySubscriptionVariables,
  APITypes.OnDeleteSpecialtySubscription
>;
export const onDeleteSpecialtyInstitution = /* GraphQL */ `subscription OnDeleteSpecialtyInstitution(
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
` as GeneratedSubscription<
  APITypes.OnDeleteSpecialtyInstitutionSubscriptionVariables,
  APITypes.OnDeleteSpecialtyInstitutionSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
  $ownerAccount: String
) {
  onDeleteUserProfile(
    filter: $filter
    owner: $owner
    ownerAccount: $ownerAccount
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onDeleteUserProfileProgram = /* GraphQL */ `subscription OnDeleteUserProfileProgram(
  $filter: ModelSubscriptionUserProfileProgramFilterInput
  $owner: String
) {
  onDeleteUserProfileProgram(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileProgramSubscriptionVariables,
  APITypes.OnDeleteUserProfileProgramSubscription
>;
export const onUpdateApplication = /* GraphQL */ `subscription OnUpdateApplication(
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
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onUpdateInstitution = /* GraphQL */ `subscription OnUpdateInstitution(
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
` as GeneratedSubscription<
  APITypes.OnUpdateInstitutionSubscriptionVariables,
  APITypes.OnUpdateInstitutionSubscription
>;
export const onUpdateInterviewInvite = /* GraphQL */ `subscription OnUpdateInterviewInvite(
  $filter: ModelSubscriptionInterviewInviteFilterInput
  $owner: String
) {
  onUpdateInterviewInvite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterviewInviteSubscriptionVariables,
  APITypes.OnUpdateInterviewInviteSubscription
>;
export const onUpdateProgram = /* GraphQL */ `subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProgramSubscriptionVariables,
  APITypes.OnUpdateProgramSubscription
>;
export const onUpdateSpecialty = /* GraphQL */ `subscription OnUpdateSpecialty($filter: ModelSubscriptionSpecialtyFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpecialtySubscriptionVariables,
  APITypes.OnUpdateSpecialtySubscription
>;
export const onUpdateSpecialtyInstitution = /* GraphQL */ `subscription OnUpdateSpecialtyInstitution(
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
` as GeneratedSubscription<
  APITypes.OnUpdateSpecialtyInstitutionSubscriptionVariables,
  APITypes.OnUpdateSpecialtyInstitutionSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
  $ownerAccount: String
) {
  onUpdateUserProfile(
    filter: $filter
    owner: $owner
    ownerAccount: $ownerAccount
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onUpdateUserProfileProgram = /* GraphQL */ `subscription OnUpdateUserProfileProgram(
  $filter: ModelSubscriptionUserProfileProgramFilterInput
  $owner: String
) {
  onUpdateUserProfileProgram(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileProgramSubscriptionVariables,
  APITypes.OnUpdateUserProfileProgramSubscription
>;
