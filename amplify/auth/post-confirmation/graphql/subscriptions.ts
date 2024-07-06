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
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onCreateCity = /* GraphQL */ `subscription OnCreateCity(
  $filter: ModelSubscriptionCityFilterInput
  $owner: String
) {
  onCreateCity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCitySubscriptionVariables,
  APITypes.OnCreateCitySubscription
>;
export const onCreateCityUserInput = /* GraphQL */ `subscription OnCreateCityUserInput(
  $filter: ModelSubscriptionCityUserInputFilterInput
  $owner: String
) {
  onCreateCityUserInput(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCityUserInputSubscriptionVariables,
  APITypes.OnCreateCityUserInputSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreateComparison = /* GraphQL */ `subscription OnCreateComparison(
  $filter: ModelSubscriptionComparisonFilterInput
  $owner: String
) {
  onCreateComparison(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateComparisonSubscriptionVariables,
  APITypes.OnCreateComparisonSubscription
>;
export const onCreateFameShame = /* GraphQL */ `subscription OnCreateFameShame(
  $filter: ModelSubscriptionFameShameFilterInput
  $owner: String
) {
  onCreateFameShame(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFameShameSubscriptionVariables,
  APITypes.OnCreateFameShameSubscription
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
export const onCreateInterviewImpression = /* GraphQL */ `subscription OnCreateInterviewImpression(
  $filter: ModelSubscriptionInterviewImpressionFilterInput
  $owner: String
) {
  onCreateInterviewImpression(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInterviewImpressionSubscriptionVariables,
  APITypes.OnCreateInterviewImpressionSubscription
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
` as GeneratedSubscription<
  APITypes.OnCreateInterviewInviteSubscriptionVariables,
  APITypes.OnCreateInterviewInviteSubscription
>;
export const onCreateInterviewLogistics = /* GraphQL */ `subscription OnCreateInterviewLogistics(
  $filter: ModelSubscriptionInterviewLogisticsFilterInput
  $owner: String
) {
  onCreateInterviewLogistics(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInterviewLogisticsSubscriptionVariables,
  APITypes.OnCreateInterviewLogisticsSubscription
>;
export const onCreateInterviewRejection = /* GraphQL */ `subscription OnCreateInterviewRejection(
  $filter: ModelSubscriptionInterviewRejectionFilterInput
  $owner: String
) {
  onCreateInterviewRejection(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInterviewRejectionSubscriptionVariables,
  APITypes.OnCreateInterviewRejectionSubscription
>;
export const onCreateInterviewWithdrawal = /* GraphQL */ `subscription OnCreateInterviewWithdrawal(
  $filter: ModelSubscriptionInterviewWithdrawalFilterInput
  $owner: String
) {
  onCreateInterviewWithdrawal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInterviewWithdrawalSubscriptionVariables,
  APITypes.OnCreateInterviewWithdrawalSubscription
>;
export const onCreateLOIResponse = /* GraphQL */ `subscription OnCreateLOIResponse(
  $filter: ModelSubscriptionLOIResponseFilterInput
  $owner: String
) {
  onCreateLOIResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLOIResponseSubscriptionVariables,
  APITypes.OnCreateLOIResponseSubscription
>;
export const onCreateM4InternImpression = /* GraphQL */ `subscription OnCreateM4InternImpression(
  $filter: ModelSubscriptionM4InternImpressionFilterInput
  $owner: String
) {
  onCreateM4InternImpression(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateM4InternImpressionSubscriptionVariables,
  APITypes.OnCreateM4InternImpressionSubscription
>;
export const onCreateMalignant = /* GraphQL */ `subscription OnCreateMalignant(
  $filter: ModelSubscriptionMalignantFilterInput
  $owner: String
) {
  onCreateMalignant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMalignantSubscriptionVariables,
  APITypes.OnCreateMalignantSubscription
>;
export const onCreatePostIVCommunication = /* GraphQL */ `subscription OnCreatePostIVCommunication(
  $filter: ModelSubscriptionPostIVCommunicationFilterInput
  $owner: String
) {
  onCreatePostIVCommunication(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostIVCommunicationSubscriptionVariables,
  APITypes.OnCreatePostIVCommunicationSubscription
>;
export const onCreateProgram = /* GraphQL */ `subscription OnCreateProgram($filter: ModelSubscriptionProgramFilterInput) {
  onCreateProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProgramSubscriptionVariables,
  APITypes.OnCreateProgramSubscription
>;
export const onCreateProgramComparison = /* GraphQL */ `subscription OnCreateProgramComparison(
  $filter: ModelSubscriptionProgramComparisonFilterInput
  $owner: String
) {
  onCreateProgramComparison(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProgramComparisonSubscriptionVariables,
  APITypes.OnCreateProgramComparisonSubscription
>;
export const onCreateRankList = /* GraphQL */ `subscription OnCreateRankList(
  $filter: ModelSubscriptionRankListFilterInput
  $owner: String
) {
  onCreateRankList(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRankListSubscriptionVariables,
  APITypes.OnCreateRankListSubscription
>;
export const onCreateRankListProgram = /* GraphQL */ `subscription OnCreateRankListProgram(
  $filter: ModelSubscriptionRankListProgramFilterInput
  $owner: String
) {
  onCreateRankListProgram(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRankListProgramSubscriptionVariables,
  APITypes.OnCreateRankListProgramSubscription
>;
export const onCreateScheduleDetails = /* GraphQL */ `subscription OnCreateScheduleDetails(
  $filter: ModelSubscriptionScheduleDetailsFilterInput
  $owner: String
) {
  onCreateScheduleDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScheduleDetailsSubscriptionVariables,
  APITypes.OnCreateScheduleDetailsSubscription
>;
export const onCreateSecondLook = /* GraphQL */ `subscription OnCreateSecondLook(
  $filter: ModelSubscriptionSecondLookFilterInput
  $owner: String
) {
  onCreateSecondLook(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSecondLookSubscriptionVariables,
  APITypes.OnCreateSecondLookSubscription
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
export const onCreateState = /* GraphQL */ `subscription OnCreateState(
  $filter: ModelSubscriptionStateFilterInput
  $owner: String
) {
  onCreateState(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStateSubscriptionVariables,
  APITypes.OnCreateStateSubscription
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileProgramSubscriptionVariables,
  APITypes.OnCreateUserProfileProgramSubscription
>;
export const onCreateUserProgramInput = /* GraphQL */ `subscription OnCreateUserProgramInput(
  $filter: ModelSubscriptionUserProgramInputFilterInput
  $owner: String
) {
  onCreateUserProgramInput(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProgramInputSubscriptionVariables,
  APITypes.OnCreateUserProgramInputSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onDeleteCity = /* GraphQL */ `subscription OnDeleteCity(
  $filter: ModelSubscriptionCityFilterInput
  $owner: String
) {
  onDeleteCity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCitySubscriptionVariables,
  APITypes.OnDeleteCitySubscription
>;
export const onDeleteCityUserInput = /* GraphQL */ `subscription OnDeleteCityUserInput(
  $filter: ModelSubscriptionCityUserInputFilterInput
  $owner: String
) {
  onDeleteCityUserInput(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCityUserInputSubscriptionVariables,
  APITypes.OnDeleteCityUserInputSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeleteComparison = /* GraphQL */ `subscription OnDeleteComparison(
  $filter: ModelSubscriptionComparisonFilterInput
  $owner: String
) {
  onDeleteComparison(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteComparisonSubscriptionVariables,
  APITypes.OnDeleteComparisonSubscription
>;
export const onDeleteFameShame = /* GraphQL */ `subscription OnDeleteFameShame(
  $filter: ModelSubscriptionFameShameFilterInput
  $owner: String
) {
  onDeleteFameShame(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFameShameSubscriptionVariables,
  APITypes.OnDeleteFameShameSubscription
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
export const onDeleteInterviewImpression = /* GraphQL */ `subscription OnDeleteInterviewImpression(
  $filter: ModelSubscriptionInterviewImpressionFilterInput
  $owner: String
) {
  onDeleteInterviewImpression(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterviewImpressionSubscriptionVariables,
  APITypes.OnDeleteInterviewImpressionSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterviewInviteSubscriptionVariables,
  APITypes.OnDeleteInterviewInviteSubscription
>;
export const onDeleteInterviewLogistics = /* GraphQL */ `subscription OnDeleteInterviewLogistics(
  $filter: ModelSubscriptionInterviewLogisticsFilterInput
  $owner: String
) {
  onDeleteInterviewLogistics(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterviewLogisticsSubscriptionVariables,
  APITypes.OnDeleteInterviewLogisticsSubscription
>;
export const onDeleteInterviewRejection = /* GraphQL */ `subscription OnDeleteInterviewRejection(
  $filter: ModelSubscriptionInterviewRejectionFilterInput
  $owner: String
) {
  onDeleteInterviewRejection(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterviewRejectionSubscriptionVariables,
  APITypes.OnDeleteInterviewRejectionSubscription
>;
export const onDeleteInterviewWithdrawal = /* GraphQL */ `subscription OnDeleteInterviewWithdrawal(
  $filter: ModelSubscriptionInterviewWithdrawalFilterInput
  $owner: String
) {
  onDeleteInterviewWithdrawal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInterviewWithdrawalSubscriptionVariables,
  APITypes.OnDeleteInterviewWithdrawalSubscription
>;
export const onDeleteLOIResponse = /* GraphQL */ `subscription OnDeleteLOIResponse(
  $filter: ModelSubscriptionLOIResponseFilterInput
  $owner: String
) {
  onDeleteLOIResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLOIResponseSubscriptionVariables,
  APITypes.OnDeleteLOIResponseSubscription
>;
export const onDeleteM4InternImpression = /* GraphQL */ `subscription OnDeleteM4InternImpression(
  $filter: ModelSubscriptionM4InternImpressionFilterInput
  $owner: String
) {
  onDeleteM4InternImpression(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteM4InternImpressionSubscriptionVariables,
  APITypes.OnDeleteM4InternImpressionSubscription
>;
export const onDeleteMalignant = /* GraphQL */ `subscription OnDeleteMalignant(
  $filter: ModelSubscriptionMalignantFilterInput
  $owner: String
) {
  onDeleteMalignant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMalignantSubscriptionVariables,
  APITypes.OnDeleteMalignantSubscription
>;
export const onDeletePostIVCommunication = /* GraphQL */ `subscription OnDeletePostIVCommunication(
  $filter: ModelSubscriptionPostIVCommunicationFilterInput
  $owner: String
) {
  onDeletePostIVCommunication(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostIVCommunicationSubscriptionVariables,
  APITypes.OnDeletePostIVCommunicationSubscription
>;
export const onDeleteProgram = /* GraphQL */ `subscription OnDeleteProgram($filter: ModelSubscriptionProgramFilterInput) {
  onDeleteProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProgramSubscriptionVariables,
  APITypes.OnDeleteProgramSubscription
>;
export const onDeleteProgramComparison = /* GraphQL */ `subscription OnDeleteProgramComparison(
  $filter: ModelSubscriptionProgramComparisonFilterInput
  $owner: String
) {
  onDeleteProgramComparison(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProgramComparisonSubscriptionVariables,
  APITypes.OnDeleteProgramComparisonSubscription
>;
export const onDeleteRankList = /* GraphQL */ `subscription OnDeleteRankList(
  $filter: ModelSubscriptionRankListFilterInput
  $owner: String
) {
  onDeleteRankList(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRankListSubscriptionVariables,
  APITypes.OnDeleteRankListSubscription
>;
export const onDeleteRankListProgram = /* GraphQL */ `subscription OnDeleteRankListProgram(
  $filter: ModelSubscriptionRankListProgramFilterInput
  $owner: String
) {
  onDeleteRankListProgram(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRankListProgramSubscriptionVariables,
  APITypes.OnDeleteRankListProgramSubscription
>;
export const onDeleteScheduleDetails = /* GraphQL */ `subscription OnDeleteScheduleDetails(
  $filter: ModelSubscriptionScheduleDetailsFilterInput
  $owner: String
) {
  onDeleteScheduleDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScheduleDetailsSubscriptionVariables,
  APITypes.OnDeleteScheduleDetailsSubscription
>;
export const onDeleteSecondLook = /* GraphQL */ `subscription OnDeleteSecondLook(
  $filter: ModelSubscriptionSecondLookFilterInput
  $owner: String
) {
  onDeleteSecondLook(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSecondLookSubscriptionVariables,
  APITypes.OnDeleteSecondLookSubscription
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
export const onDeleteState = /* GraphQL */ `subscription OnDeleteState(
  $filter: ModelSubscriptionStateFilterInput
  $owner: String
) {
  onDeleteState(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStateSubscriptionVariables,
  APITypes.OnDeleteStateSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileProgramSubscriptionVariables,
  APITypes.OnDeleteUserProfileProgramSubscription
>;
export const onDeleteUserProgramInput = /* GraphQL */ `subscription OnDeleteUserProgramInput(
  $filter: ModelSubscriptionUserProgramInputFilterInput
  $owner: String
) {
  onDeleteUserProgramInput(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProgramInputSubscriptionVariables,
  APITypes.OnDeleteUserProgramInputSubscription
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
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onUpdateCity = /* GraphQL */ `subscription OnUpdateCity(
  $filter: ModelSubscriptionCityFilterInput
  $owner: String
) {
  onUpdateCity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCitySubscriptionVariables,
  APITypes.OnUpdateCitySubscription
>;
export const onUpdateCityUserInput = /* GraphQL */ `subscription OnUpdateCityUserInput(
  $filter: ModelSubscriptionCityUserInputFilterInput
  $owner: String
) {
  onUpdateCityUserInput(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCityUserInputSubscriptionVariables,
  APITypes.OnUpdateCityUserInputSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdateComparison = /* GraphQL */ `subscription OnUpdateComparison(
  $filter: ModelSubscriptionComparisonFilterInput
  $owner: String
) {
  onUpdateComparison(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateComparisonSubscriptionVariables,
  APITypes.OnUpdateComparisonSubscription
>;
export const onUpdateFameShame = /* GraphQL */ `subscription OnUpdateFameShame(
  $filter: ModelSubscriptionFameShameFilterInput
  $owner: String
) {
  onUpdateFameShame(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFameShameSubscriptionVariables,
  APITypes.OnUpdateFameShameSubscription
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
export const onUpdateInterviewImpression = /* GraphQL */ `subscription OnUpdateInterviewImpression(
  $filter: ModelSubscriptionInterviewImpressionFilterInput
  $owner: String
) {
  onUpdateInterviewImpression(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterviewImpressionSubscriptionVariables,
  APITypes.OnUpdateInterviewImpressionSubscription
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterviewInviteSubscriptionVariables,
  APITypes.OnUpdateInterviewInviteSubscription
>;
export const onUpdateInterviewLogistics = /* GraphQL */ `subscription OnUpdateInterviewLogistics(
  $filter: ModelSubscriptionInterviewLogisticsFilterInput
  $owner: String
) {
  onUpdateInterviewLogistics(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterviewLogisticsSubscriptionVariables,
  APITypes.OnUpdateInterviewLogisticsSubscription
>;
export const onUpdateInterviewRejection = /* GraphQL */ `subscription OnUpdateInterviewRejection(
  $filter: ModelSubscriptionInterviewRejectionFilterInput
  $owner: String
) {
  onUpdateInterviewRejection(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterviewRejectionSubscriptionVariables,
  APITypes.OnUpdateInterviewRejectionSubscription
>;
export const onUpdateInterviewWithdrawal = /* GraphQL */ `subscription OnUpdateInterviewWithdrawal(
  $filter: ModelSubscriptionInterviewWithdrawalFilterInput
  $owner: String
) {
  onUpdateInterviewWithdrawal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInterviewWithdrawalSubscriptionVariables,
  APITypes.OnUpdateInterviewWithdrawalSubscription
>;
export const onUpdateLOIResponse = /* GraphQL */ `subscription OnUpdateLOIResponse(
  $filter: ModelSubscriptionLOIResponseFilterInput
  $owner: String
) {
  onUpdateLOIResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLOIResponseSubscriptionVariables,
  APITypes.OnUpdateLOIResponseSubscription
>;
export const onUpdateM4InternImpression = /* GraphQL */ `subscription OnUpdateM4InternImpression(
  $filter: ModelSubscriptionM4InternImpressionFilterInput
  $owner: String
) {
  onUpdateM4InternImpression(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateM4InternImpressionSubscriptionVariables,
  APITypes.OnUpdateM4InternImpressionSubscription
>;
export const onUpdateMalignant = /* GraphQL */ `subscription OnUpdateMalignant(
  $filter: ModelSubscriptionMalignantFilterInput
  $owner: String
) {
  onUpdateMalignant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMalignantSubscriptionVariables,
  APITypes.OnUpdateMalignantSubscription
>;
export const onUpdatePostIVCommunication = /* GraphQL */ `subscription OnUpdatePostIVCommunication(
  $filter: ModelSubscriptionPostIVCommunicationFilterInput
  $owner: String
) {
  onUpdatePostIVCommunication(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostIVCommunicationSubscriptionVariables,
  APITypes.OnUpdatePostIVCommunicationSubscription
>;
export const onUpdateProgram = /* GraphQL */ `subscription OnUpdateProgram($filter: ModelSubscriptionProgramFilterInput) {
  onUpdateProgram(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProgramSubscriptionVariables,
  APITypes.OnUpdateProgramSubscription
>;
export const onUpdateProgramComparison = /* GraphQL */ `subscription OnUpdateProgramComparison(
  $filter: ModelSubscriptionProgramComparisonFilterInput
  $owner: String
) {
  onUpdateProgramComparison(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProgramComparisonSubscriptionVariables,
  APITypes.OnUpdateProgramComparisonSubscription
>;
export const onUpdateRankList = /* GraphQL */ `subscription OnUpdateRankList(
  $filter: ModelSubscriptionRankListFilterInput
  $owner: String
) {
  onUpdateRankList(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRankListSubscriptionVariables,
  APITypes.OnUpdateRankListSubscription
>;
export const onUpdateRankListProgram = /* GraphQL */ `subscription OnUpdateRankListProgram(
  $filter: ModelSubscriptionRankListProgramFilterInput
  $owner: String
) {
  onUpdateRankListProgram(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRankListProgramSubscriptionVariables,
  APITypes.OnUpdateRankListProgramSubscription
>;
export const onUpdateScheduleDetails = /* GraphQL */ `subscription OnUpdateScheduleDetails(
  $filter: ModelSubscriptionScheduleDetailsFilterInput
  $owner: String
) {
  onUpdateScheduleDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScheduleDetailsSubscriptionVariables,
  APITypes.OnUpdateScheduleDetailsSubscription
>;
export const onUpdateSecondLook = /* GraphQL */ `subscription OnUpdateSecondLook(
  $filter: ModelSubscriptionSecondLookFilterInput
  $owner: String
) {
  onUpdateSecondLook(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSecondLookSubscriptionVariables,
  APITypes.OnUpdateSecondLookSubscription
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
export const onUpdateState = /* GraphQL */ `subscription OnUpdateState(
  $filter: ModelSubscriptionStateFilterInput
  $owner: String
) {
  onUpdateState(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStateSubscriptionVariables,
  APITypes.OnUpdateStateSubscription
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileProgramSubscriptionVariables,
  APITypes.OnUpdateUserProfileProgramSubscription
>;
export const onUpdateUserProgramInput = /* GraphQL */ `subscription OnUpdateUserProgramInput(
  $filter: ModelSubscriptionUserProgramInputFilterInput
  $owner: String
) {
  onUpdateUserProgramInput(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProgramInputSubscriptionVariables,
  APITypes.OnUpdateUserProgramInputSubscription
>;
