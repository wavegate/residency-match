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
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const getCity = /* GraphQL */ `query GetCity($id: ID!) {
  getCity(id: $id) {
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
` as GeneratedQuery<APITypes.GetCityQueryVariables, APITypes.GetCityQuery>;
export const getCityUserInput = /* GraphQL */ `query GetCityUserInput($id: ID!) {
  getCityUserInput(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCityUserInputQueryVariables,
  APITypes.GetCityUserInputQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const getComparison = /* GraphQL */ `query GetComparison($id: ID!) {
  getComparison(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetComparisonQueryVariables,
  APITypes.GetComparisonQuery
>;
export const getFameShame = /* GraphQL */ `query GetFameShame($id: ID!) {
  getFameShame(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFameShameQueryVariables,
  APITypes.GetFameShameQuery
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
export const getInterviewImpression = /* GraphQL */ `query GetInterviewImpression($id: ID!) {
  getInterviewImpression(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInterviewImpressionQueryVariables,
  APITypes.GetInterviewImpressionQuery
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
` as GeneratedQuery<
  APITypes.GetInterviewInviteQueryVariables,
  APITypes.GetInterviewInviteQuery
>;
export const getInterviewLogistics = /* GraphQL */ `query GetInterviewLogistics($id: ID!) {
  getInterviewLogistics(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInterviewLogisticsQueryVariables,
  APITypes.GetInterviewLogisticsQuery
>;
export const getInterviewRejection = /* GraphQL */ `query GetInterviewRejection($id: ID!) {
  getInterviewRejection(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInterviewRejectionQueryVariables,
  APITypes.GetInterviewRejectionQuery
>;
export const getInterviewWithdrawal = /* GraphQL */ `query GetInterviewWithdrawal($id: ID!) {
  getInterviewWithdrawal(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInterviewWithdrawalQueryVariables,
  APITypes.GetInterviewWithdrawalQuery
>;
export const getLOIResponse = /* GraphQL */ `query GetLOIResponse($id: ID!) {
  getLOIResponse(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLOIResponseQueryVariables,
  APITypes.GetLOIResponseQuery
>;
export const getM4InternImpression = /* GraphQL */ `query GetM4InternImpression($id: ID!) {
  getM4InternImpression(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetM4InternImpressionQueryVariables,
  APITypes.GetM4InternImpressionQuery
>;
export const getMalignant = /* GraphQL */ `query GetMalignant($id: ID!) {
  getMalignant(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMalignantQueryVariables,
  APITypes.GetMalignantQuery
>;
export const getPostIVCommunication = /* GraphQL */ `query GetPostIVCommunication($id: ID!) {
  getPostIVCommunication(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPostIVCommunicationQueryVariables,
  APITypes.GetPostIVCommunicationQuery
>;
export const getProgram = /* GraphQL */ `query GetProgram($id: ID!) {
  getProgram(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProgramQueryVariables,
  APITypes.GetProgramQuery
>;
export const getProgramComparison = /* GraphQL */ `query GetProgramComparison($id: ID!) {
  getProgramComparison(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProgramComparisonQueryVariables,
  APITypes.GetProgramComparisonQuery
>;
export const getRankList = /* GraphQL */ `query GetRankList($id: ID!) {
  getRankList(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRankListQueryVariables,
  APITypes.GetRankListQuery
>;
export const getRankListProgram = /* GraphQL */ `query GetRankListProgram($id: ID!) {
  getRankListProgram(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRankListProgramQueryVariables,
  APITypes.GetRankListProgramQuery
>;
export const getScheduleDetails = /* GraphQL */ `query GetScheduleDetails($id: ID!) {
  getScheduleDetails(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetScheduleDetailsQueryVariables,
  APITypes.GetScheduleDetailsQuery
>;
export const getSecondLook = /* GraphQL */ `query GetSecondLook($id: ID!) {
  getSecondLook(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSecondLookQueryVariables,
  APITypes.GetSecondLookQuery
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
export const getState = /* GraphQL */ `query GetState($id: ID!) {
  getState(id: $id) {
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
` as GeneratedQuery<APITypes.GetStateQueryVariables, APITypes.GetStateQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileProgramQueryVariables,
  APITypes.GetUserProfileProgramQuery
>;
export const getUserProgramInput = /* GraphQL */ `query GetUserProgramInput($id: ID!) {
  getUserProgramInput(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProgramInputQueryVariables,
  APITypes.GetUserProgramInputQuery
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
export const listCities = /* GraphQL */ `query ListCities(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      owner
      sortType
      stateId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCitiesQueryVariables,
  APITypes.ListCitiesQuery
>;
export const listCityByName = /* GraphQL */ `query ListCityByName(
  $filter: ModelCityFilterInput
  $limit: Int
  $name: String!
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCityByName(
    filter: $filter
    limit: $limit
    name: $name
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      id
      name
      owner
      sortType
      stateId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCityByNameQueryVariables,
  APITypes.ListCityByNameQuery
>;
export const listCityByStateId = /* GraphQL */ `query ListCityByStateId(
  $filter: ModelCityFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $stateId: ID!
) {
  listCityByStateId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    stateId: $stateId
  ) {
    items {
      createdAt
      id
      name
      owner
      sortType
      stateId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCityByStateIdQueryVariables,
  APITypes.ListCityByStateIdQuery
>;
export const listCityUserInputs = /* GraphQL */ `query ListCityUserInputs(
  $filter: ModelCityUserInputFilterInput
  $limit: Int
  $nextToken: String
) {
  listCityUserInputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      userProfileId
      weather
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCityUserInputsQueryVariables,
  APITypes.ListCityUserInputsQuery
>;
export const listCommentByCommentTypeAndCreatedAt = /* GraphQL */ `query ListCommentByCommentTypeAndCreatedAt(
  $commentType: CommentCommentType!
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCommentByCommentTypeAndCreatedAt(
    commentType: $commentType
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      LOIResponseId
      M4InternImpressionId
      commentType
      comparisonId
      content
      createdAt
      id
      interviewImpressionId
      malignantId
      owner
      postIVCommunicationId
      rankListId
      scheduleDetailsId
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentByCommentTypeAndCreatedAtQueryVariables,
  APITypes.ListCommentByCommentTypeAndCreatedAtQuery
>;
export const listCommentByComparisonIdAndCreatedAt = /* GraphQL */ `query ListCommentByComparisonIdAndCreatedAt(
  $comparisonId: ID!
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCommentByComparisonIdAndCreatedAt(
    comparisonId: $comparisonId
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      LOIResponseId
      M4InternImpressionId
      commentType
      comparisonId
      content
      createdAt
      id
      interviewImpressionId
      malignantId
      owner
      postIVCommunicationId
      rankListId
      scheduleDetailsId
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentByComparisonIdAndCreatedAtQueryVariables,
  APITypes.ListCommentByComparisonIdAndCreatedAtQuery
>;
export const listCommentByUserProfileId = /* GraphQL */ `query ListCommentByUserProfileId(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userProfileId: ID!
) {
  listCommentByUserProfileId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userProfileId: $userProfileId
  ) {
    items {
      LOIResponseId
      M4InternImpressionId
      commentType
      comparisonId
      content
      createdAt
      id
      interviewImpressionId
      malignantId
      owner
      postIVCommunicationId
      rankListId
      scheduleDetailsId
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentByUserProfileIdQueryVariables,
  APITypes.ListCommentByUserProfileIdQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      LOIResponseId
      M4InternImpressionId
      commentType
      comparisonId
      content
      createdAt
      id
      interviewImpressionId
      malignantId
      owner
      postIVCommunicationId
      rankListId
      scheduleDetailsId
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const listComparisons = /* GraphQL */ `query ListComparisons(
  $filter: ModelComparisonFilterInput
  $limit: Int
  $nextToken: String
) {
  listComparisons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      questionDifferentiator
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListComparisonsQueryVariables,
  APITypes.ListComparisonsQuery
>;
export const listFameShames = /* GraphQL */ `query ListFameShames(
  $filter: ModelFameShameFilterInput
  $limit: Int
  $nextToken: String
) {
  listFameShames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      fame
      id
      owner
      programId
      shame
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFameShamesQueryVariables,
  APITypes.ListFameShamesQuery
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
export const listInterviewImpressions = /* GraphQL */ `query ListInterviewImpressions(
  $filter: ModelInterviewImpressionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterviewImpressions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewImpressionsQueryVariables,
  APITypes.ListInterviewImpressionsQuery
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
      userProfileId
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
      userProfileId
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
export const listInterviewInviteByUserProfileId = /* GraphQL */ `query ListInterviewInviteByUserProfileId(
  $filter: ModelInterviewInviteFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userProfileId: ID!
) {
  listInterviewInviteByUserProfileId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userProfileId: $userProfileId
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
      userProfileId
      visaRequired
      yearOfGraduation
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewInviteByUserProfileIdQueryVariables,
  APITypes.ListInterviewInviteByUserProfileIdQuery
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
      userProfileId
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
export const listInterviewLogistics = /* GraphQL */ `query ListInterviewLogistics(
  $filter: ModelInterviewLogisticsFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterviewLogistics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewLogisticsQueryVariables,
  APITypes.ListInterviewLogisticsQuery
>;
export const listInterviewRejections = /* GraphQL */ `query ListInterviewRejections(
  $filter: ModelInterviewRejectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterviewRejections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      date
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
  APITypes.ListInterviewRejectionsQueryVariables,
  APITypes.ListInterviewRejectionsQuery
>;
export const listInterviewWithdrawals = /* GraphQL */ `query ListInterviewWithdrawals(
  $filter: ModelInterviewWithdrawalFilterInput
  $limit: Int
  $nextToken: String
) {
  listInterviewWithdrawals(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      date
      id
      owner
      programId
      reason
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInterviewWithdrawalsQueryVariables,
  APITypes.ListInterviewWithdrawalsQuery
>;
export const listLOIResponses = /* GraphQL */ `query ListLOIResponses(
  $filter: ModelLOIResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLOIResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLOIResponsesQueryVariables,
  APITypes.ListLOIResponsesQuery
>;
export const listM4InternImpressions = /* GraphQL */ `query ListM4InternImpressions(
  $filter: ModelM4InternImpressionFilterInput
  $limit: Int
  $nextToken: String
) {
  listM4InternImpressions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListM4InternImpressionsQueryVariables,
  APITypes.ListM4InternImpressionsQuery
>;
export const listMalignants = /* GraphQL */ `query ListMalignants(
  $filter: ModelMalignantFilterInput
  $limit: Int
  $nextToken: String
) {
  listMalignants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMalignantsQueryVariables,
  APITypes.ListMalignantsQuery
>;
export const listPostIVCommunications = /* GraphQL */ `query ListPostIVCommunications(
  $filter: ModelPostIVCommunicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostIVCommunications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPostIVCommunicationsQueryVariables,
  APITypes.ListPostIVCommunicationsQuery
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
      questions
      sortType
      specialtyId
      tier
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
      questions
      sortType
      specialtyId
      tier
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
export const listProgramComparisons = /* GraphQL */ `query ListProgramComparisons(
  $filter: ModelProgramComparisonFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgramComparisons(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      comparisonId
      createdAt
      id
      owner
      programId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgramComparisonsQueryVariables,
  APITypes.ListProgramComparisonsQuery
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
      questions
      sortType
      specialtyId
      tier
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
export const listRankListByUserProfileId = /* GraphQL */ `query ListRankListByUserProfileId(
  $filter: ModelRankListFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $userProfileId: ID!
) {
  listRankListByUserProfileId(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    userProfileId: $userProfileId
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRankListByUserProfileIdQueryVariables,
  APITypes.ListRankListByUserProfileIdQuery
>;
export const listRankListPrograms = /* GraphQL */ `query ListRankListPrograms(
  $filter: ModelRankListProgramFilterInput
  $limit: Int
  $nextToken: String
) {
  listRankListPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      programId
      rank
      rankListId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRankListProgramsQueryVariables,
  APITypes.ListRankListProgramsQuery
>;
export const listRankLists = /* GraphQL */ `query ListRankLists(
  $filter: ModelRankListFilterInput
  $limit: Int
  $nextToken: String
) {
  listRankLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRankListsQueryVariables,
  APITypes.ListRankListsQuery
>;
export const listScheduleDetails = /* GraphQL */ `query ListScheduleDetails(
  $filter: ModelScheduleDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listScheduleDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScheduleDetailsQueryVariables,
  APITypes.ListScheduleDetailsQuery
>;
export const listSecondLooks = /* GraphQL */ `query ListSecondLooks(
  $filter: ModelSecondLookFilterInput
  $limit: Int
  $nextToken: String
) {
  listSecondLooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      bearingOnRank
      createdAt
      date
      id
      owner
      programId
      setting
      sortType
      updatedAt
      userProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSecondLooksQueryVariables,
  APITypes.ListSecondLooksQuery
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
export const listStateByAbbreviation = /* GraphQL */ `query ListStateByAbbreviation(
  $abbreviation: String!
  $filter: ModelStateFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listStateByAbbreviation(
    abbreviation: $abbreviation
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStateByAbbreviationQueryVariables,
  APITypes.ListStateByAbbreviationQuery
>;
export const listStateByName = /* GraphQL */ `query ListStateByName(
  $filter: ModelStateFilterInput
  $limit: Int
  $name: String!
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listStateByName(
    filter: $filter
    limit: $limit
    name: $name
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStateByNameQueryVariables,
  APITypes.ListStateByNameQuery
>;
export const listStateBySortTypeAndName = /* GraphQL */ `query ListStateBySortTypeAndName(
  $filter: ModelStateFilterInput
  $limit: Int
  $name: ModelStringKeyConditionInput
  $nextToken: String
  $sortDirection: ModelSortDirection
  $sortType: String!
) {
  listStateBySortTypeAndName(
    filter: $filter
    limit: $limit
    name: $name
    nextToken: $nextToken
    sortDirection: $sortDirection
    sortType: $sortType
  ) {
    items {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStateBySortTypeAndNameQueryVariables,
  APITypes.ListStateBySortTypeAndNameQuery
>;
export const listStates = /* GraphQL */ `query ListStates(
  $filter: ModelStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listStates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      abbreviation
      createdAt
      id
      name
      owner
      sortType
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStatesQueryVariables,
  APITypes.ListStatesQuery
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
      userEmail
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
      userEmail
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
      userEmail
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
      userEmail
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
export const listUserProgramInputs = /* GraphQL */ `query ListUserProgramInputs(
  $filter: ModelUserProgramInputFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProgramInputs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      owner
      updatedAt
      userProfileId
      userProgramInputType
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProgramInputsQueryVariables,
  APITypes.ListUserProgramInputsQuery
>;
