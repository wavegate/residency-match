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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
export const createCity = /* GraphQL */ `mutation CreateCity(
  $condition: ModelCityConditionInput
  $input: CreateCityInput!
) {
  createCity(condition: $condition, input: $input) {
    cityUserInputs {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    sortType
    state {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    stateId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCityMutationVariables,
  APITypes.CreateCityMutation
>;
export const createCityUserInput = /* GraphQL */ `mutation CreateCityUserInput(
  $condition: ModelCityUserInputConditionInput
  $input: CreateCityUserInputInput!
) {
  createCityUserInput(condition: $condition, input: $input) {
    city {
      createdAt
      id
      name
      owner
      sortType
      stateId
      updatedAt
      __typename
    }
    cityId
    cons
    createdAt
    dating
    diversity
    id
    lgbtq
    owner
    pros
    publicTransportation
    safetyCrime
    sortType
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    weather
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCityUserInputMutationVariables,
  APITypes.CreateCityUserInputMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
    LOIResponse {
      createdAt
      dateSent
      id
      intent
      mentionedTopChoice
      owner
      programId
      response
      responseTone
      sentTo
      sortType
      timeBetweenSentAndResponse
      updatedAt
      userProfileId
      __typename
    }
    LOIResponseId
    M4InternImpression {
      createdAt
      id
      negativeImpression
      owner
      positiveImpression
      programId
      updatedAt
      userProfileId
      __typename
    }
    M4InternImpressionId
    commentType
    comparison {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    comparisonId
    content
    createdAt
    id
    interviewImpression {
      createdAt
      gift
      howInterviewDayAffectsRank
      id
      negatives
      owner
      positives
      programId
      sortType
      timeGiftReceived
      updatedAt
      userProfileId
      __typename
    }
    interviewImpressionId
    malignant {
      createdAt
      explanation
      id
      malignant
      owner
      programId
      source
      updatedAt
      userProfileId
      __typename
    }
    malignantId
    owner
    postIVCommunication {
      communicationReceived
      createdAt
      id
      owner
      programId
      rankImpact
      source
      thankYouLetterPolicy
      updatedAt
      userProfileId
      __typename
    }
    postIVCommunicationId
    rankList {
      createdAt
      doneWithInterviews
      hardestPartOfRanking
      id
      matchResultProgramId
      owner
      priorities
      sortType
      updatedAt
      userProfileId
      whyNumberOne
      __typename
    }
    rankListId
    scheduleDetails {
      admittingSystem
      ancillary
      createdAt
      didactics
      emr
      food
      gym
      icuHours
      id
      internCap
      locations
      longOvernightCall
      midlevel
      moonlighting
      nightFloat
      owner
      programId
      salary
      scheduleContinuity
      sickCallSystem
      startDateOrientation
      stayUntilSignout
      teamRatios
      union
      updatedAt
      userProfileId
      vacationHolidays
      visaInfo
      __typename
    }
    scheduleDetailsId
    sortType
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
      userEmail
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
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createComparison = /* GraphQL */ `mutation CreateComparison(
  $condition: ModelComparisonConditionInput
  $input: CreateComparisonInput!
) {
  createComparison(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    programs {
      nextToken
      __typename
    }
    questionDifferentiator
    sortType
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
      userEmail
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
  APITypes.CreateComparisonMutationVariables,
  APITypes.CreateComparisonMutation
>;
export const createFameShame = /* GraphQL */ `mutation CreateFameShame(
  $condition: ModelFameShameConditionInput
  $input: CreateFameShameInput!
) {
  createFameShame(condition: $condition, input: $input) {
    createdAt
    fame
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    shame
    sortType
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
      userEmail
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
  APITypes.CreateFameShameMutationVariables,
  APITypes.CreateFameShameMutation
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
export const createInterviewImpression = /* GraphQL */ `mutation CreateInterviewImpression(
  $condition: ModelInterviewImpressionConditionInput
  $input: CreateInterviewImpressionInput!
) {
  createInterviewImpression(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    gift
    howInterviewDayAffectsRank
    id
    negatives
    owner
    positives
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    sortType
    timeGiftReceived
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
      userEmail
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
  APITypes.CreateInterviewImpressionMutationVariables,
  APITypes.CreateInterviewImpressionMutation
>;
export const createInterviewInvite = /* GraphQL */ `mutation CreateInterviewInvite(
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
    interviewLogistics {
      createdAt
      id
      interviewInviteId
      ivFormat
      ivPlatform
      openIVDates
      owner
      programId
      schedulerPlatform
      sortType
      timeSlots
      updatedAt
      userProfileId
      __typename
    }
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    visaRequired
    yearOfGraduation
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInterviewInviteMutationVariables,
  APITypes.CreateInterviewInviteMutation
>;
export const createInterviewLogistics = /* GraphQL */ `mutation CreateInterviewLogistics(
  $condition: ModelInterviewLogisticsConditionInput
  $input: CreateInterviewLogisticsInput!
) {
  createInterviewLogistics(condition: $condition, input: $input) {
    createdAt
    id
    interviewInvite {
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
      userProfileId
      visaRequired
      yearOfGraduation
      __typename
    }
    interviewInviteId
    ivFormat
    ivPlatform
    openIVDates
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    schedulerPlatform
    sortType
    timeSlots
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
      userEmail
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
  APITypes.CreateInterviewLogisticsMutationVariables,
  APITypes.CreateInterviewLogisticsMutation
>;
export const createInterviewRejection = /* GraphQL */ `mutation CreateInterviewRejection(
  $condition: ModelInterviewRejectionConditionInput
  $input: CreateInterviewRejectionInput!
) {
  createInterviewRejection(condition: $condition, input: $input) {
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
  APITypes.CreateInterviewRejectionMutationVariables,
  APITypes.CreateInterviewRejectionMutation
>;
export const createInterviewWithdrawal = /* GraphQL */ `mutation CreateInterviewWithdrawal(
  $condition: ModelInterviewWithdrawalConditionInput
  $input: CreateInterviewWithdrawalInput!
) {
  createInterviewWithdrawal(condition: $condition, input: $input) {
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    reason
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
      userEmail
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
  APITypes.CreateInterviewWithdrawalMutationVariables,
  APITypes.CreateInterviewWithdrawalMutation
>;
export const createLOIResponse = /* GraphQL */ `mutation CreateLOIResponse(
  $condition: ModelLOIResponseConditionInput
  $input: CreateLOIResponseInput!
) {
  createLOIResponse(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    dateSent
    id
    intent
    mentionedTopChoice
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    response
    responseTone
    sentTo
    sortType
    timeBetweenSentAndResponse
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
      userEmail
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
  APITypes.CreateLOIResponseMutationVariables,
  APITypes.CreateLOIResponseMutation
>;
export const createM4InternImpression = /* GraphQL */ `mutation CreateM4InternImpression(
  $condition: ModelM4InternImpressionConditionInput
  $input: CreateM4InternImpressionInput!
) {
  createM4InternImpression(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    negativeImpression
    owner
    positiveImpression
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
  APITypes.CreateM4InternImpressionMutationVariables,
  APITypes.CreateM4InternImpressionMutation
>;
export const createMalignant = /* GraphQL */ `mutation CreateMalignant(
  $condition: ModelMalignantConditionInput
  $input: CreateMalignantInput!
) {
  createMalignant(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    explanation
    id
    malignant
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    source
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
      userEmail
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
  APITypes.CreateMalignantMutationVariables,
  APITypes.CreateMalignantMutation
>;
export const createPostIVCommunication = /* GraphQL */ `mutation CreatePostIVCommunication(
  $condition: ModelPostIVCommunicationConditionInput
  $input: CreatePostIVCommunicationInput!
) {
  createPostIVCommunication(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    communicationReceived
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    rankImpact
    source
    thankYouLetterPolicy
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
      userEmail
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
  APITypes.CreatePostIVCommunicationMutationVariables,
  APITypes.CreatePostIVCommunicationMutation
>;
export const createProgram = /* GraphQL */ `mutation CreateProgram(
  $condition: ModelProgramConditionInput
  $input: CreateProgramInput!
) {
  createProgram(condition: $condition, input: $input) {
    LOIResponses {
      nextToken
      __typename
    }
    M4InternImpressions {
      nextToken
      __typename
    }
    applications {
      nextToken
      __typename
    }
    comparisons {
      nextToken
      __typename
    }
    createdAt
    fameShames {
      nextToken
      __typename
    }
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
    interviewImpressions {
      nextToken
      __typename
    }
    interviewInvites {
      nextToken
      __typename
    }
    interviewLogistics {
      nextToken
      __typename
    }
    interviewRejections {
      nextToken
      __typename
    }
    interviewWithdrawals {
      nextToken
      __typename
    }
    malignants {
      nextToken
      __typename
    }
    matchResultRankLists {
      nextToken
      __typename
    }
    name
    nrmpProgramCode
    postIVCommunication {
      nextToken
      __typename
    }
    questions
    rankLists {
      nextToken
      __typename
    }
    scheduleDetails {
      nextToken
      __typename
    }
    secondLooks {
      nextToken
      __typename
    }
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
    tier
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
export const createProgramComparison = /* GraphQL */ `mutation CreateProgramComparison(
  $condition: ModelProgramComparisonConditionInput
  $input: CreateProgramComparisonInput!
) {
  createProgramComparison(condition: $condition, input: $input) {
    comparison {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    comparisonId
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgramComparisonMutationVariables,
  APITypes.CreateProgramComparisonMutation
>;
export const createRankList = /* GraphQL */ `mutation CreateRankList(
  $condition: ModelRankListConditionInput
  $input: CreateRankListInput!
) {
  createRankList(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    doneWithInterviews
    hardestPartOfRanking
    id
    matchResultProgram {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    matchResultProgramId
    owner
    priorities
    programs {
      nextToken
      __typename
    }
    sortType
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    whyNumberOne
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRankListMutationVariables,
  APITypes.CreateRankListMutation
>;
export const createRankListProgram = /* GraphQL */ `mutation CreateRankListProgram(
  $condition: ModelRankListProgramConditionInput
  $input: CreateRankListProgramInput!
) {
  createRankListProgram(condition: $condition, input: $input) {
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    rank
    rankList {
      createdAt
      doneWithInterviews
      hardestPartOfRanking
      id
      matchResultProgramId
      owner
      priorities
      sortType
      updatedAt
      userProfileId
      whyNumberOne
      __typename
    }
    rankListId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRankListProgramMutationVariables,
  APITypes.CreateRankListProgramMutation
>;
export const createScheduleDetails = /* GraphQL */ `mutation CreateScheduleDetails(
  $condition: ModelScheduleDetailsConditionInput
  $input: CreateScheduleDetailsInput!
) {
  createScheduleDetails(condition: $condition, input: $input) {
    admittingSystem
    ancillary
    comments {
      nextToken
      __typename
    }
    createdAt
    didactics
    emr
    food
    gym
    icuHours
    id
    internCap
    locations
    longOvernightCall
    midlevel
    moonlighting
    nightFloat
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    salary
    scheduleContinuity
    sickCallSystem
    startDateOrientation
    stayUntilSignout
    teamRatios
    union
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    vacationHolidays
    visaInfo
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateScheduleDetailsMutationVariables,
  APITypes.CreateScheduleDetailsMutation
>;
export const createSecondLook = /* GraphQL */ `mutation CreateSecondLook(
  $condition: ModelSecondLookConditionInput
  $input: CreateSecondLookInput!
) {
  createSecondLook(condition: $condition, input: $input) {
    bearingOnRank
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    setting
    sortType
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
      userEmail
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
  APITypes.CreateSecondLookMutationVariables,
  APITypes.CreateSecondLookMutation
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
export const createSpecialtyInstitution = /* GraphQL */ `mutation CreateSpecialtyInstitution(
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
export const createState = /* GraphQL */ `mutation CreateState(
  $condition: ModelStateConditionInput
  $input: CreateStateInput!
) {
  createState(condition: $condition, input: $input) {
    abbreviation
    cities {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStateMutationVariables,
  APITypes.CreateStateMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    LOIResponses {
      nextToken
      __typename
    }
    M4InternImpressions {
      nextToken
      __typename
    }
    aoa
    applicationYear
    applications {
      nextToken
      __typename
    }
    cityUserInputs {
      nextToken
      __typename
    }
    classRank
    comlex1ScorePass
    comlex2Score
    comments {
      nextToken
      __typename
    }
    comparisons {
      nextToken
      __typename
    }
    createdAt
    ecfmgCertified
    fameShames {
      nextToken
      __typename
    }
    goldHumanism
    graduateType
    id
    img
    interviewImpressions {
      nextToken
      __typename
    }
    interviewInvites {
      nextToken
      __typename
    }
    interviewLogistics {
      nextToken
      __typename
    }
    interviewRejections {
      nextToken
      __typename
    }
    interviewWithdrawals {
      nextToken
      __typename
    }
    isProfile
    isProfileString
    location
    malignants {
      nextToken
      __typename
    }
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
    postIVCommunication {
      nextToken
      __typename
    }
    programs {
      nextToken
      __typename
    }
    rankLists {
      nextToken
      __typename
    }
    redFlags
    redFlagsExplanation
    scheduleDetails {
      nextToken
      __typename
    }
    schoolRanking
    secondLooks {
      nextToken
      __typename
    }
    sigmaSigmaPhi
    sortType
    step1Score
    step1ScorePass
    step2CSPathway
    step2Score
    step3Score
    updatedAt
    userEmail
    userProgramInput {
      nextToken
      __typename
    }
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
export const createUserProfileProgram = /* GraphQL */ `mutation CreateUserProfileProgram(
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
export const createUserProgramInput = /* GraphQL */ `mutation CreateUserProgramInput(
  $condition: ModelUserProgramInputConditionInput
  $input: CreateUserProgramInputInput!
) {
  createUserProgramInput(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    userProgramInputType
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProgramInputMutationVariables,
  APITypes.CreateUserProgramInputMutation
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
export const deleteCity = /* GraphQL */ `mutation DeleteCity(
  $condition: ModelCityConditionInput
  $input: DeleteCityInput!
) {
  deleteCity(condition: $condition, input: $input) {
    cityUserInputs {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    sortType
    state {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    stateId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCityMutationVariables,
  APITypes.DeleteCityMutation
>;
export const deleteCityUserInput = /* GraphQL */ `mutation DeleteCityUserInput(
  $condition: ModelCityUserInputConditionInput
  $input: DeleteCityUserInputInput!
) {
  deleteCityUserInput(condition: $condition, input: $input) {
    city {
      createdAt
      id
      name
      owner
      sortType
      stateId
      updatedAt
      __typename
    }
    cityId
    cons
    createdAt
    dating
    diversity
    id
    lgbtq
    owner
    pros
    publicTransportation
    safetyCrime
    sortType
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    weather
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCityUserInputMutationVariables,
  APITypes.DeleteCityUserInputMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
    LOIResponse {
      createdAt
      dateSent
      id
      intent
      mentionedTopChoice
      owner
      programId
      response
      responseTone
      sentTo
      sortType
      timeBetweenSentAndResponse
      updatedAt
      userProfileId
      __typename
    }
    LOIResponseId
    M4InternImpression {
      createdAt
      id
      negativeImpression
      owner
      positiveImpression
      programId
      updatedAt
      userProfileId
      __typename
    }
    M4InternImpressionId
    commentType
    comparison {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    comparisonId
    content
    createdAt
    id
    interviewImpression {
      createdAt
      gift
      howInterviewDayAffectsRank
      id
      negatives
      owner
      positives
      programId
      sortType
      timeGiftReceived
      updatedAt
      userProfileId
      __typename
    }
    interviewImpressionId
    malignant {
      createdAt
      explanation
      id
      malignant
      owner
      programId
      source
      updatedAt
      userProfileId
      __typename
    }
    malignantId
    owner
    postIVCommunication {
      communicationReceived
      createdAt
      id
      owner
      programId
      rankImpact
      source
      thankYouLetterPolicy
      updatedAt
      userProfileId
      __typename
    }
    postIVCommunicationId
    rankList {
      createdAt
      doneWithInterviews
      hardestPartOfRanking
      id
      matchResultProgramId
      owner
      priorities
      sortType
      updatedAt
      userProfileId
      whyNumberOne
      __typename
    }
    rankListId
    scheduleDetails {
      admittingSystem
      ancillary
      createdAt
      didactics
      emr
      food
      gym
      icuHours
      id
      internCap
      locations
      longOvernightCall
      midlevel
      moonlighting
      nightFloat
      owner
      programId
      salary
      scheduleContinuity
      sickCallSystem
      startDateOrientation
      stayUntilSignout
      teamRatios
      union
      updatedAt
      userProfileId
      vacationHolidays
      visaInfo
      __typename
    }
    scheduleDetailsId
    sortType
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
      userEmail
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
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deleteComparison = /* GraphQL */ `mutation DeleteComparison(
  $condition: ModelComparisonConditionInput
  $input: DeleteComparisonInput!
) {
  deleteComparison(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    programs {
      nextToken
      __typename
    }
    questionDifferentiator
    sortType
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
      userEmail
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
  APITypes.DeleteComparisonMutationVariables,
  APITypes.DeleteComparisonMutation
>;
export const deleteFameShame = /* GraphQL */ `mutation DeleteFameShame(
  $condition: ModelFameShameConditionInput
  $input: DeleteFameShameInput!
) {
  deleteFameShame(condition: $condition, input: $input) {
    createdAt
    fame
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    shame
    sortType
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
      userEmail
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
  APITypes.DeleteFameShameMutationVariables,
  APITypes.DeleteFameShameMutation
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
export const deleteInterviewImpression = /* GraphQL */ `mutation DeleteInterviewImpression(
  $condition: ModelInterviewImpressionConditionInput
  $input: DeleteInterviewImpressionInput!
) {
  deleteInterviewImpression(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    gift
    howInterviewDayAffectsRank
    id
    negatives
    owner
    positives
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    sortType
    timeGiftReceived
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
      userEmail
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
  APITypes.DeleteInterviewImpressionMutationVariables,
  APITypes.DeleteInterviewImpressionMutation
>;
export const deleteInterviewInvite = /* GraphQL */ `mutation DeleteInterviewInvite(
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
    interviewLogistics {
      createdAt
      id
      interviewInviteId
      ivFormat
      ivPlatform
      openIVDates
      owner
      programId
      schedulerPlatform
      sortType
      timeSlots
      updatedAt
      userProfileId
      __typename
    }
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    visaRequired
    yearOfGraduation
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInterviewInviteMutationVariables,
  APITypes.DeleteInterviewInviteMutation
>;
export const deleteInterviewLogistics = /* GraphQL */ `mutation DeleteInterviewLogistics(
  $condition: ModelInterviewLogisticsConditionInput
  $input: DeleteInterviewLogisticsInput!
) {
  deleteInterviewLogistics(condition: $condition, input: $input) {
    createdAt
    id
    interviewInvite {
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
      userProfileId
      visaRequired
      yearOfGraduation
      __typename
    }
    interviewInviteId
    ivFormat
    ivPlatform
    openIVDates
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    schedulerPlatform
    sortType
    timeSlots
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
      userEmail
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
  APITypes.DeleteInterviewLogisticsMutationVariables,
  APITypes.DeleteInterviewLogisticsMutation
>;
export const deleteInterviewRejection = /* GraphQL */ `mutation DeleteInterviewRejection(
  $condition: ModelInterviewRejectionConditionInput
  $input: DeleteInterviewRejectionInput!
) {
  deleteInterviewRejection(condition: $condition, input: $input) {
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
  APITypes.DeleteInterviewRejectionMutationVariables,
  APITypes.DeleteInterviewRejectionMutation
>;
export const deleteInterviewWithdrawal = /* GraphQL */ `mutation DeleteInterviewWithdrawal(
  $condition: ModelInterviewWithdrawalConditionInput
  $input: DeleteInterviewWithdrawalInput!
) {
  deleteInterviewWithdrawal(condition: $condition, input: $input) {
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    reason
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
      userEmail
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
  APITypes.DeleteInterviewWithdrawalMutationVariables,
  APITypes.DeleteInterviewWithdrawalMutation
>;
export const deleteLOIResponse = /* GraphQL */ `mutation DeleteLOIResponse(
  $condition: ModelLOIResponseConditionInput
  $input: DeleteLOIResponseInput!
) {
  deleteLOIResponse(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    dateSent
    id
    intent
    mentionedTopChoice
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    response
    responseTone
    sentTo
    sortType
    timeBetweenSentAndResponse
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
      userEmail
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
  APITypes.DeleteLOIResponseMutationVariables,
  APITypes.DeleteLOIResponseMutation
>;
export const deleteM4InternImpression = /* GraphQL */ `mutation DeleteM4InternImpression(
  $condition: ModelM4InternImpressionConditionInput
  $input: DeleteM4InternImpressionInput!
) {
  deleteM4InternImpression(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    negativeImpression
    owner
    positiveImpression
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
  APITypes.DeleteM4InternImpressionMutationVariables,
  APITypes.DeleteM4InternImpressionMutation
>;
export const deleteMalignant = /* GraphQL */ `mutation DeleteMalignant(
  $condition: ModelMalignantConditionInput
  $input: DeleteMalignantInput!
) {
  deleteMalignant(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    explanation
    id
    malignant
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    source
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
      userEmail
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
  APITypes.DeleteMalignantMutationVariables,
  APITypes.DeleteMalignantMutation
>;
export const deletePostIVCommunication = /* GraphQL */ `mutation DeletePostIVCommunication(
  $condition: ModelPostIVCommunicationConditionInput
  $input: DeletePostIVCommunicationInput!
) {
  deletePostIVCommunication(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    communicationReceived
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    rankImpact
    source
    thankYouLetterPolicy
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
      userEmail
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
  APITypes.DeletePostIVCommunicationMutationVariables,
  APITypes.DeletePostIVCommunicationMutation
>;
export const deleteProgram = /* GraphQL */ `mutation DeleteProgram(
  $condition: ModelProgramConditionInput
  $input: DeleteProgramInput!
) {
  deleteProgram(condition: $condition, input: $input) {
    LOIResponses {
      nextToken
      __typename
    }
    M4InternImpressions {
      nextToken
      __typename
    }
    applications {
      nextToken
      __typename
    }
    comparisons {
      nextToken
      __typename
    }
    createdAt
    fameShames {
      nextToken
      __typename
    }
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
    interviewImpressions {
      nextToken
      __typename
    }
    interviewInvites {
      nextToken
      __typename
    }
    interviewLogistics {
      nextToken
      __typename
    }
    interviewRejections {
      nextToken
      __typename
    }
    interviewWithdrawals {
      nextToken
      __typename
    }
    malignants {
      nextToken
      __typename
    }
    matchResultRankLists {
      nextToken
      __typename
    }
    name
    nrmpProgramCode
    postIVCommunication {
      nextToken
      __typename
    }
    questions
    rankLists {
      nextToken
      __typename
    }
    scheduleDetails {
      nextToken
      __typename
    }
    secondLooks {
      nextToken
      __typename
    }
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
    tier
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
export const deleteProgramComparison = /* GraphQL */ `mutation DeleteProgramComparison(
  $condition: ModelProgramComparisonConditionInput
  $input: DeleteProgramComparisonInput!
) {
  deleteProgramComparison(condition: $condition, input: $input) {
    comparison {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    comparisonId
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgramComparisonMutationVariables,
  APITypes.DeleteProgramComparisonMutation
>;
export const deleteRankList = /* GraphQL */ `mutation DeleteRankList(
  $condition: ModelRankListConditionInput
  $input: DeleteRankListInput!
) {
  deleteRankList(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    doneWithInterviews
    hardestPartOfRanking
    id
    matchResultProgram {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    matchResultProgramId
    owner
    priorities
    programs {
      nextToken
      __typename
    }
    sortType
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    whyNumberOne
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRankListMutationVariables,
  APITypes.DeleteRankListMutation
>;
export const deleteRankListProgram = /* GraphQL */ `mutation DeleteRankListProgram(
  $condition: ModelRankListProgramConditionInput
  $input: DeleteRankListProgramInput!
) {
  deleteRankListProgram(condition: $condition, input: $input) {
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    rank
    rankList {
      createdAt
      doneWithInterviews
      hardestPartOfRanking
      id
      matchResultProgramId
      owner
      priorities
      sortType
      updatedAt
      userProfileId
      whyNumberOne
      __typename
    }
    rankListId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRankListProgramMutationVariables,
  APITypes.DeleteRankListProgramMutation
>;
export const deleteScheduleDetails = /* GraphQL */ `mutation DeleteScheduleDetails(
  $condition: ModelScheduleDetailsConditionInput
  $input: DeleteScheduleDetailsInput!
) {
  deleteScheduleDetails(condition: $condition, input: $input) {
    admittingSystem
    ancillary
    comments {
      nextToken
      __typename
    }
    createdAt
    didactics
    emr
    food
    gym
    icuHours
    id
    internCap
    locations
    longOvernightCall
    midlevel
    moonlighting
    nightFloat
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    salary
    scheduleContinuity
    sickCallSystem
    startDateOrientation
    stayUntilSignout
    teamRatios
    union
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    vacationHolidays
    visaInfo
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteScheduleDetailsMutationVariables,
  APITypes.DeleteScheduleDetailsMutation
>;
export const deleteSecondLook = /* GraphQL */ `mutation DeleteSecondLook(
  $condition: ModelSecondLookConditionInput
  $input: DeleteSecondLookInput!
) {
  deleteSecondLook(condition: $condition, input: $input) {
    bearingOnRank
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    setting
    sortType
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
      userEmail
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
  APITypes.DeleteSecondLookMutationVariables,
  APITypes.DeleteSecondLookMutation
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
export const deleteSpecialtyInstitution = /* GraphQL */ `mutation DeleteSpecialtyInstitution(
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
export const deleteState = /* GraphQL */ `mutation DeleteState(
  $condition: ModelStateConditionInput
  $input: DeleteStateInput!
) {
  deleteState(condition: $condition, input: $input) {
    abbreviation
    cities {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStateMutationVariables,
  APITypes.DeleteStateMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    LOIResponses {
      nextToken
      __typename
    }
    M4InternImpressions {
      nextToken
      __typename
    }
    aoa
    applicationYear
    applications {
      nextToken
      __typename
    }
    cityUserInputs {
      nextToken
      __typename
    }
    classRank
    comlex1ScorePass
    comlex2Score
    comments {
      nextToken
      __typename
    }
    comparisons {
      nextToken
      __typename
    }
    createdAt
    ecfmgCertified
    fameShames {
      nextToken
      __typename
    }
    goldHumanism
    graduateType
    id
    img
    interviewImpressions {
      nextToken
      __typename
    }
    interviewInvites {
      nextToken
      __typename
    }
    interviewLogistics {
      nextToken
      __typename
    }
    interviewRejections {
      nextToken
      __typename
    }
    interviewWithdrawals {
      nextToken
      __typename
    }
    isProfile
    isProfileString
    location
    malignants {
      nextToken
      __typename
    }
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
    postIVCommunication {
      nextToken
      __typename
    }
    programs {
      nextToken
      __typename
    }
    rankLists {
      nextToken
      __typename
    }
    redFlags
    redFlagsExplanation
    scheduleDetails {
      nextToken
      __typename
    }
    schoolRanking
    secondLooks {
      nextToken
      __typename
    }
    sigmaSigmaPhi
    sortType
    step1Score
    step1ScorePass
    step2CSPathway
    step2Score
    step3Score
    updatedAt
    userEmail
    userProgramInput {
      nextToken
      __typename
    }
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
export const deleteUserProfileProgram = /* GraphQL */ `mutation DeleteUserProfileProgram(
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
export const deleteUserProgramInput = /* GraphQL */ `mutation DeleteUserProgramInput(
  $condition: ModelUserProgramInputConditionInput
  $input: DeleteUserProgramInputInput!
) {
  deleteUserProgramInput(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    userProgramInputType
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProgramInputMutationVariables,
  APITypes.DeleteUserProgramInputMutation
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
export const updateCity = /* GraphQL */ `mutation UpdateCity(
  $condition: ModelCityConditionInput
  $input: UpdateCityInput!
) {
  updateCity(condition: $condition, input: $input) {
    cityUserInputs {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    sortType
    state {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    stateId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCityMutationVariables,
  APITypes.UpdateCityMutation
>;
export const updateCityUserInput = /* GraphQL */ `mutation UpdateCityUserInput(
  $condition: ModelCityUserInputConditionInput
  $input: UpdateCityUserInputInput!
) {
  updateCityUserInput(condition: $condition, input: $input) {
    city {
      createdAt
      id
      name
      owner
      sortType
      stateId
      updatedAt
      __typename
    }
    cityId
    cons
    createdAt
    dating
    diversity
    id
    lgbtq
    owner
    pros
    publicTransportation
    safetyCrime
    sortType
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    weather
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCityUserInputMutationVariables,
  APITypes.UpdateCityUserInputMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
    LOIResponse {
      createdAt
      dateSent
      id
      intent
      mentionedTopChoice
      owner
      programId
      response
      responseTone
      sentTo
      sortType
      timeBetweenSentAndResponse
      updatedAt
      userProfileId
      __typename
    }
    LOIResponseId
    M4InternImpression {
      createdAt
      id
      negativeImpression
      owner
      positiveImpression
      programId
      updatedAt
      userProfileId
      __typename
    }
    M4InternImpressionId
    commentType
    comparison {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    comparisonId
    content
    createdAt
    id
    interviewImpression {
      createdAt
      gift
      howInterviewDayAffectsRank
      id
      negatives
      owner
      positives
      programId
      sortType
      timeGiftReceived
      updatedAt
      userProfileId
      __typename
    }
    interviewImpressionId
    malignant {
      createdAt
      explanation
      id
      malignant
      owner
      programId
      source
      updatedAt
      userProfileId
      __typename
    }
    malignantId
    owner
    postIVCommunication {
      communicationReceived
      createdAt
      id
      owner
      programId
      rankImpact
      source
      thankYouLetterPolicy
      updatedAt
      userProfileId
      __typename
    }
    postIVCommunicationId
    rankList {
      createdAt
      doneWithInterviews
      hardestPartOfRanking
      id
      matchResultProgramId
      owner
      priorities
      sortType
      updatedAt
      userProfileId
      whyNumberOne
      __typename
    }
    rankListId
    scheduleDetails {
      admittingSystem
      ancillary
      createdAt
      didactics
      emr
      food
      gym
      icuHours
      id
      internCap
      locations
      longOvernightCall
      midlevel
      moonlighting
      nightFloat
      owner
      programId
      salary
      scheduleContinuity
      sickCallSystem
      startDateOrientation
      stayUntilSignout
      teamRatios
      union
      updatedAt
      userProfileId
      vacationHolidays
      visaInfo
      __typename
    }
    scheduleDetailsId
    sortType
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
      userEmail
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
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updateComparison = /* GraphQL */ `mutation UpdateComparison(
  $condition: ModelComparisonConditionInput
  $input: UpdateComparisonInput!
) {
  updateComparison(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    owner
    programs {
      nextToken
      __typename
    }
    questionDifferentiator
    sortType
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
      userEmail
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
  APITypes.UpdateComparisonMutationVariables,
  APITypes.UpdateComparisonMutation
>;
export const updateFameShame = /* GraphQL */ `mutation UpdateFameShame(
  $condition: ModelFameShameConditionInput
  $input: UpdateFameShameInput!
) {
  updateFameShame(condition: $condition, input: $input) {
    createdAt
    fame
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    shame
    sortType
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
      userEmail
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
  APITypes.UpdateFameShameMutationVariables,
  APITypes.UpdateFameShameMutation
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
export const updateInterviewImpression = /* GraphQL */ `mutation UpdateInterviewImpression(
  $condition: ModelInterviewImpressionConditionInput
  $input: UpdateInterviewImpressionInput!
) {
  updateInterviewImpression(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    gift
    howInterviewDayAffectsRank
    id
    negatives
    owner
    positives
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    sortType
    timeGiftReceived
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
      userEmail
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
  APITypes.UpdateInterviewImpressionMutationVariables,
  APITypes.UpdateInterviewImpressionMutation
>;
export const updateInterviewInvite = /* GraphQL */ `mutation UpdateInterviewInvite(
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
    interviewLogistics {
      createdAt
      id
      interviewInviteId
      ivFormat
      ivPlatform
      openIVDates
      owner
      programId
      schedulerPlatform
      sortType
      timeSlots
      updatedAt
      userProfileId
      __typename
    }
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    visaRequired
    yearOfGraduation
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInterviewInviteMutationVariables,
  APITypes.UpdateInterviewInviteMutation
>;
export const updateInterviewLogistics = /* GraphQL */ `mutation UpdateInterviewLogistics(
  $condition: ModelInterviewLogisticsConditionInput
  $input: UpdateInterviewLogisticsInput!
) {
  updateInterviewLogistics(condition: $condition, input: $input) {
    createdAt
    id
    interviewInvite {
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
      userProfileId
      visaRequired
      yearOfGraduation
      __typename
    }
    interviewInviteId
    ivFormat
    ivPlatform
    openIVDates
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    schedulerPlatform
    sortType
    timeSlots
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
      userEmail
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
  APITypes.UpdateInterviewLogisticsMutationVariables,
  APITypes.UpdateInterviewLogisticsMutation
>;
export const updateInterviewRejection = /* GraphQL */ `mutation UpdateInterviewRejection(
  $condition: ModelInterviewRejectionConditionInput
  $input: UpdateInterviewRejectionInput!
) {
  updateInterviewRejection(condition: $condition, input: $input) {
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
  APITypes.UpdateInterviewRejectionMutationVariables,
  APITypes.UpdateInterviewRejectionMutation
>;
export const updateInterviewWithdrawal = /* GraphQL */ `mutation UpdateInterviewWithdrawal(
  $condition: ModelInterviewWithdrawalConditionInput
  $input: UpdateInterviewWithdrawalInput!
) {
  updateInterviewWithdrawal(condition: $condition, input: $input) {
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    reason
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
      userEmail
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
  APITypes.UpdateInterviewWithdrawalMutationVariables,
  APITypes.UpdateInterviewWithdrawalMutation
>;
export const updateLOIResponse = /* GraphQL */ `mutation UpdateLOIResponse(
  $condition: ModelLOIResponseConditionInput
  $input: UpdateLOIResponseInput!
) {
  updateLOIResponse(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    dateSent
    id
    intent
    mentionedTopChoice
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    response
    responseTone
    sentTo
    sortType
    timeBetweenSentAndResponse
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
      userEmail
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
  APITypes.UpdateLOIResponseMutationVariables,
  APITypes.UpdateLOIResponseMutation
>;
export const updateM4InternImpression = /* GraphQL */ `mutation UpdateM4InternImpression(
  $condition: ModelM4InternImpressionConditionInput
  $input: UpdateM4InternImpressionInput!
) {
  updateM4InternImpression(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    id
    negativeImpression
    owner
    positiveImpression
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
  APITypes.UpdateM4InternImpressionMutationVariables,
  APITypes.UpdateM4InternImpressionMutation
>;
export const updateMalignant = /* GraphQL */ `mutation UpdateMalignant(
  $condition: ModelMalignantConditionInput
  $input: UpdateMalignantInput!
) {
  updateMalignant(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    explanation
    id
    malignant
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    source
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
      userEmail
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
  APITypes.UpdateMalignantMutationVariables,
  APITypes.UpdateMalignantMutation
>;
export const updatePostIVCommunication = /* GraphQL */ `mutation UpdatePostIVCommunication(
  $condition: ModelPostIVCommunicationConditionInput
  $input: UpdatePostIVCommunicationInput!
) {
  updatePostIVCommunication(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    communicationReceived
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    rankImpact
    source
    thankYouLetterPolicy
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
      userEmail
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
  APITypes.UpdatePostIVCommunicationMutationVariables,
  APITypes.UpdatePostIVCommunicationMutation
>;
export const updateProgram = /* GraphQL */ `mutation UpdateProgram(
  $condition: ModelProgramConditionInput
  $input: UpdateProgramInput!
) {
  updateProgram(condition: $condition, input: $input) {
    LOIResponses {
      nextToken
      __typename
    }
    M4InternImpressions {
      nextToken
      __typename
    }
    applications {
      nextToken
      __typename
    }
    comparisons {
      nextToken
      __typename
    }
    createdAt
    fameShames {
      nextToken
      __typename
    }
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
    interviewImpressions {
      nextToken
      __typename
    }
    interviewInvites {
      nextToken
      __typename
    }
    interviewLogistics {
      nextToken
      __typename
    }
    interviewRejections {
      nextToken
      __typename
    }
    interviewWithdrawals {
      nextToken
      __typename
    }
    malignants {
      nextToken
      __typename
    }
    matchResultRankLists {
      nextToken
      __typename
    }
    name
    nrmpProgramCode
    postIVCommunication {
      nextToken
      __typename
    }
    questions
    rankLists {
      nextToken
      __typename
    }
    scheduleDetails {
      nextToken
      __typename
    }
    secondLooks {
      nextToken
      __typename
    }
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
    tier
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
export const updateProgramComparison = /* GraphQL */ `mutation UpdateProgramComparison(
  $condition: ModelProgramComparisonConditionInput
  $input: UpdateProgramComparisonInput!
) {
  updateProgramComparison(condition: $condition, input: $input) {
    comparison {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    comparisonId
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgramComparisonMutationVariables,
  APITypes.UpdateProgramComparisonMutation
>;
export const updateRankList = /* GraphQL */ `mutation UpdateRankList(
  $condition: ModelRankListConditionInput
  $input: UpdateRankListInput!
) {
  updateRankList(condition: $condition, input: $input) {
    comments {
      nextToken
      __typename
    }
    createdAt
    doneWithInterviews
    hardestPartOfRanking
    id
    matchResultProgram {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    matchResultProgramId
    owner
    priorities
    programs {
      nextToken
      __typename
    }
    sortType
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    whyNumberOne
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRankListMutationVariables,
  APITypes.UpdateRankListMutation
>;
export const updateRankListProgram = /* GraphQL */ `mutation UpdateRankListProgram(
  $condition: ModelRankListProgramConditionInput
  $input: UpdateRankListProgramInput!
) {
  updateRankListProgram(condition: $condition, input: $input) {
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    rank
    rankList {
      createdAt
      doneWithInterviews
      hardestPartOfRanking
      id
      matchResultProgramId
      owner
      priorities
      sortType
      updatedAt
      userProfileId
      whyNumberOne
      __typename
    }
    rankListId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRankListProgramMutationVariables,
  APITypes.UpdateRankListProgramMutation
>;
export const updateScheduleDetails = /* GraphQL */ `mutation UpdateScheduleDetails(
  $condition: ModelScheduleDetailsConditionInput
  $input: UpdateScheduleDetailsInput!
) {
  updateScheduleDetails(condition: $condition, input: $input) {
    admittingSystem
    ancillary
    comments {
      nextToken
      __typename
    }
    createdAt
    didactics
    emr
    food
    gym
    icuHours
    id
    internCap
    locations
    longOvernightCall
    midlevel
    moonlighting
    nightFloat
    owner
    program {
      createdAt
      id
      institutionId
      institutionName
      institutionNameLowerCase
      name
      nrmpProgramCode
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    salary
    scheduleContinuity
    sickCallSystem
    startDateOrientation
    stayUntilSignout
    teamRatios
    union
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    vacationHolidays
    visaInfo
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateScheduleDetailsMutationVariables,
  APITypes.UpdateScheduleDetailsMutation
>;
export const updateSecondLook = /* GraphQL */ `mutation UpdateSecondLook(
  $condition: ModelSecondLookConditionInput
  $input: UpdateSecondLookInput!
) {
  updateSecondLook(condition: $condition, input: $input) {
    bearingOnRank
    createdAt
    date
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
      questions
      sortType
      specialtyId
      tier
      type
      updatedAt
      __typename
    }
    programId
    setting
    sortType
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
      userEmail
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
  APITypes.UpdateSecondLookMutationVariables,
  APITypes.UpdateSecondLookMutation
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
export const updateSpecialtyInstitution = /* GraphQL */ `mutation UpdateSpecialtyInstitution(
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
export const updateState = /* GraphQL */ `mutation UpdateState(
  $condition: ModelStateConditionInput
  $input: UpdateStateInput!
) {
  updateState(condition: $condition, input: $input) {
    abbreviation
    cities {
      nextToken
      __typename
    }
    createdAt
    id
    name
    owner
    sortType
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStateMutationVariables,
  APITypes.UpdateStateMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    LOIResponses {
      nextToken
      __typename
    }
    M4InternImpressions {
      nextToken
      __typename
    }
    aoa
    applicationYear
    applications {
      nextToken
      __typename
    }
    cityUserInputs {
      nextToken
      __typename
    }
    classRank
    comlex1ScorePass
    comlex2Score
    comments {
      nextToken
      __typename
    }
    comparisons {
      nextToken
      __typename
    }
    createdAt
    ecfmgCertified
    fameShames {
      nextToken
      __typename
    }
    goldHumanism
    graduateType
    id
    img
    interviewImpressions {
      nextToken
      __typename
    }
    interviewInvites {
      nextToken
      __typename
    }
    interviewLogistics {
      nextToken
      __typename
    }
    interviewRejections {
      nextToken
      __typename
    }
    interviewWithdrawals {
      nextToken
      __typename
    }
    isProfile
    isProfileString
    location
    malignants {
      nextToken
      __typename
    }
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
    postIVCommunication {
      nextToken
      __typename
    }
    programs {
      nextToken
      __typename
    }
    rankLists {
      nextToken
      __typename
    }
    redFlags
    redFlagsExplanation
    scheduleDetails {
      nextToken
      __typename
    }
    schoolRanking
    secondLooks {
      nextToken
      __typename
    }
    sigmaSigmaPhi
    sortType
    step1Score
    step1ScorePass
    step2CSPathway
    step2Score
    step3Score
    updatedAt
    userEmail
    userProgramInput {
      nextToken
      __typename
    }
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
export const updateUserProfileProgram = /* GraphQL */ `mutation UpdateUserProfileProgram(
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
      questions
      sortType
      specialtyId
      tier
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
      userEmail
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
export const updateUserProgramInput = /* GraphQL */ `mutation UpdateUserProgramInput(
  $condition: ModelUserProgramInputConditionInput
  $input: UpdateUserProgramInputInput!
) {
  updateUserProgramInput(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
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
      userEmail
      username
      visaRequired
      yearOfGraduation
      __typename
    }
    userProfileId
    userProgramInputType
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProgramInputMutationVariables,
  APITypes.UpdateUserProgramInputMutation
>;
