/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createApplication = /* GraphQL */ `mutation CreateApplication(
  $condition: ModelApplicationConditionInput
  $input: CreateApplicationInput!
) {
  createApplication(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateApplicationMutationVariables,
  APITypes.CreateApplicationMutation
>;
export const createInstitution = /* GraphQL */ `mutation CreateInstitution(
  $condition: ModelInstitutionConditionInput
  $input: CreateInstitutionInput!
) {
  createInstitution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateInstitutionMutationVariables,
  APITypes.CreateInstitutionMutation
>;
export const createInterviewInvite =
  /* GraphQL */ `mutation CreateInterviewInvite(
  $condition: ModelInterviewInviteConditionInput
  $input: CreateInterviewInviteInput!
) {
  createInterviewInvite(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateInterviewInviteMutationVariables,
    APITypes.CreateInterviewInviteMutation
  >;
export const createProgram = /* GraphQL */ `mutation CreateProgram(
  $condition: ModelProgramConditionInput
  $input: CreateProgramInput!
) {
  createProgram(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateProgramMutationVariables,
  APITypes.CreateProgramMutation
>;
export const createSpecialty = /* GraphQL */ `mutation CreateSpecialty(
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
    programs {
      nextToken
      __typename
    }
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSpecialtyMutationVariables,
  APITypes.CreateSpecialtyMutation
>;
export const createSpecialtyInstitution =
  /* GraphQL */ `mutation CreateSpecialtyInstitution(
  $condition: ModelSpecialtyInstitutionConditionInput
  $input: CreateSpecialtyInstitutionInput!
) {
  createSpecialtyInstitution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateSpecialtyInstitutionMutationVariables,
    APITypes.CreateSpecialtyInstitutionMutation
  >;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const createUserProfileProgram =
  /* GraphQL */ `mutation CreateUserProfileProgram(
  $condition: ModelUserProfileProgramConditionInput
  $input: CreateUserProfileProgramInput!
) {
  createUserProfileProgram(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateUserProfileProgramMutationVariables,
    APITypes.CreateUserProfileProgramMutation
  >;
export const deleteApplication = /* GraphQL */ `mutation DeleteApplication(
  $condition: ModelApplicationConditionInput
  $input: DeleteApplicationInput!
) {
  deleteApplication(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteApplicationMutationVariables,
  APITypes.DeleteApplicationMutation
>;
export const deleteInstitution = /* GraphQL */ `mutation DeleteInstitution(
  $condition: ModelInstitutionConditionInput
  $input: DeleteInstitutionInput!
) {
  deleteInstitution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteInstitutionMutationVariables,
  APITypes.DeleteInstitutionMutation
>;
export const deleteInterviewInvite =
  /* GraphQL */ `mutation DeleteInterviewInvite(
  $condition: ModelInterviewInviteConditionInput
  $input: DeleteInterviewInviteInput!
) {
  deleteInterviewInvite(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.DeleteInterviewInviteMutationVariables,
    APITypes.DeleteInterviewInviteMutation
  >;
export const deleteProgram = /* GraphQL */ `mutation DeleteProgram(
  $condition: ModelProgramConditionInput
  $input: DeleteProgramInput!
) {
  deleteProgram(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteProgramMutationVariables,
  APITypes.DeleteProgramMutation
>;
export const deleteSpecialty = /* GraphQL */ `mutation DeleteSpecialty(
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
    programs {
      nextToken
      __typename
    }
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSpecialtyMutationVariables,
  APITypes.DeleteSpecialtyMutation
>;
export const deleteSpecialtyInstitution =
  /* GraphQL */ `mutation DeleteSpecialtyInstitution(
  $condition: ModelSpecialtyInstitutionConditionInput
  $input: DeleteSpecialtyInstitutionInput!
) {
  deleteSpecialtyInstitution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.DeleteSpecialtyInstitutionMutationVariables,
    APITypes.DeleteSpecialtyInstitutionMutation
  >;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const deleteUserProfileProgram =
  /* GraphQL */ `mutation DeleteUserProfileProgram(
  $condition: ModelUserProfileProgramConditionInput
  $input: DeleteUserProfileProgramInput!
) {
  deleteUserProfileProgram(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.DeleteUserProfileProgramMutationVariables,
    APITypes.DeleteUserProfileProgramMutation
  >;
export const updateApplication = /* GraphQL */ `mutation UpdateApplication(
  $condition: ModelApplicationConditionInput
  $input: UpdateApplicationInput!
) {
  updateApplication(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateApplicationMutationVariables,
  APITypes.UpdateApplicationMutation
>;
export const updateInstitution = /* GraphQL */ `mutation UpdateInstitution(
  $condition: ModelInstitutionConditionInput
  $input: UpdateInstitutionInput!
) {
  updateInstitution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateInstitutionMutationVariables,
  APITypes.UpdateInstitutionMutation
>;
export const updateInterviewInvite =
  /* GraphQL */ `mutation UpdateInterviewInvite(
  $condition: ModelInterviewInviteConditionInput
  $input: UpdateInterviewInviteInput!
) {
  updateInterviewInvite(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.UpdateInterviewInviteMutationVariables,
    APITypes.UpdateInterviewInviteMutation
  >;
export const updateProgram = /* GraphQL */ `mutation UpdateProgram(
  $condition: ModelProgramConditionInput
  $input: UpdateProgramInput!
) {
  updateProgram(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateProgramMutationVariables,
  APITypes.UpdateProgramMutation
>;
export const updateSpecialty = /* GraphQL */ `mutation UpdateSpecialty(
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
    programs {
      nextToken
      __typename
    }
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSpecialtyMutationVariables,
  APITypes.UpdateSpecialtyMutation
>;
export const updateSpecialtyInstitution =
  /* GraphQL */ `mutation UpdateSpecialtyInstitution(
  $condition: ModelSpecialtyInstitutionConditionInput
  $input: UpdateSpecialtyInstitutionInput!
) {
  updateSpecialtyInstitution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.UpdateSpecialtyInstitutionMutationVariables,
    APITypes.UpdateSpecialtyInstitutionMutation
  >;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const updateUserProfileProgram =
  /* GraphQL */ `mutation UpdateUserProfileProgram(
  $condition: ModelUserProfileProgramConditionInput
  $input: UpdateUserProfileProgramInput!
) {
  updateUserProfileProgram(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.UpdateUserProfileProgramMutationVariables,
    APITypes.UpdateUserProfileProgramMutation
  >;
