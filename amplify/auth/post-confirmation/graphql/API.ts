/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type InterviewInvite = {
  __typename: "InterviewInvite",
  additionalComments?: string | null,
  anonymous?: boolean | null,
  applicationYear?: number | null,
  away?: boolean | null,
  comlex1ScorePass?: boolean | null,
  comlex2Score?: string | null,
  createdAt: string,
  geographicPreference?: boolean | null,
  graduateType?: InterviewInviteGraduateType | null,
  greenCard?: boolean | null,
  home?: boolean | null,
  id: string,
  img?: InterviewInviteImg | null,
  institutionName?: string | null,
  institutionNameLowerCase?: string | null,
  inviteDateTime: string,
  location?: InterviewInviteLocation | null,
  medicalDegree?: MedicalDegree | null,
  owner?: string | null,
  program?: Program | null,
  programId: string,
  signal?: boolean | null,
  sortType: string,
  step1Score?: number | null,
  step1ScorePass?: boolean | null,
  step2Score?: string | null,
  subI?: boolean | null,
  updatedAt: string,
  visaRequired?: boolean | null,
  yearOfGraduation?: number | null,
};

export enum InterviewInviteGraduateType {
  IMG = "IMG",
  US = "US",
}


export enum InterviewInviteImg {
  USIMG = "USIMG",
  nonUSIMG = "nonUSIMG",
}


export enum InterviewInviteLocation {
  IS = "IS",
  OOS = "OOS",
}


export enum MedicalDegree {
  DO = "DO",
  MD = "MD",
}


export type Program = {
  __typename: "Program",
  applications?: ModelApplicationConnection | null,
  createdAt: string,
  id: string,
  institution?: Institution | null,
  institutionId: string,
  institutionName?: string | null,
  institutionNameLowerCase?: string | null,
  interviewInvites?: ModelInterviewInviteConnection | null,
  name?: string | null,
  nrmpProgramCode?: string | null,
  sortType: string,
  specialty?: Specialty | null,
  specialtyId: string,
  type?: ProgramType | null,
  updatedAt: string,
  userProfiles?: ModelUserProfileProgramConnection | null,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type Application = {
  __typename: "Application",
  createdAt: string,
  id: string,
  owner?: string | null,
  program?: Program | null,
  programId: string,
  status?: ApplicationStatus | null,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId: string,
};

export enum ApplicationStatus {
  applied = "applied",
  interviewInvited = "interviewInvited",
  interviewed = "interviewed",
  matched = "matched",
  rejected = "rejected",
  waitlisted = "waitlisted",
  withdrawn = "withdrawn",
}


export type UserProfile = {
  __typename: "UserProfile",
  aoa?: boolean | null,
  applicationYear?: number | null,
  applications?: ModelApplicationConnection | null,
  classRank?: UserProfileClassRank | null,
  comlex1ScorePass?: boolean | null,
  comlex2Score?: number | null,
  createdAt: string,
  ecfmgCertified?: boolean | null,
  goldHumanism?: boolean | null,
  graduateType?: UserProfileGraduateType | null,
  id: string,
  img?: UserProfileImg | null,
  isProfile?: boolean | null,
  isProfileString?: string | null,
  location?: string | null,
  medicalDegree?: MedicalDegree | null,
  monthsOfUSCE?: number | null,
  numApplications?: number | null,
  numInterviews?: number | null,
  numPublications?: number | null,
  numRejected?: number | null,
  numVolunteerExperiences?: number | null,
  numWaitlisted?: number | null,
  numWithdrawn?: number | null,
  numWorkExperiences?: number | null,
  otherDegrees?: string | null,
  owner?: string | null,
  ownerAccount?: string | null,
  programs?: ModelUserProfileProgramConnection | null,
  redFlags?: boolean | null,
  redFlagsExplanation?: string | null,
  schoolRanking?: UserProfileSchoolRanking | null,
  sigmaSigmaPhi?: boolean | null,
  sortType: string,
  step1Score?: number | null,
  step1ScorePass?: boolean | null,
  step2CSPathway?: UserProfileStep2CSPathway | null,
  step2Score?: number | null,
  step3Score?: number | null,
  updatedAt: string,
  username?: string | null,
  visaRequired?: boolean | null,
  yearOfGraduation?: number | null,
};

export enum UserProfileClassRank {
  bottom50 = "bottom50",
  top10 = "top10",
  top25 = "top25",
  top50 = "top50",
}


export enum UserProfileGraduateType {
  IMG = "IMG",
  US = "US",
}


export enum UserProfileImg {
  USIMG = "USIMG",
  nonUSIMG = "nonUSIMG",
}


export type ModelUserProfileProgramConnection = {
  __typename: "ModelUserProfileProgramConnection",
  items:  Array<UserProfileProgram | null >,
  nextToken?: string | null,
};

export type UserProfileProgram = {
  __typename: "UserProfileProgram",
  createdAt: string,
  id: string,
  owner?: string | null,
  program?: Program | null,
  programId: string,
  updatedAt: string,
  userProfile?: UserProfile | null,
  userProfileId: string,
};

export enum UserProfileSchoolRanking {
  low = "low",
  mid = "mid",
  top20 = "top20",
  top50 = "top50",
  unranked = "unranked",
}


export enum UserProfileStep2CSPathway {
  pathway1 = "pathway1",
  pathway2 = "pathway2",
  pathway3 = "pathway3",
  pathway4 = "pathway4",
  pathway5 = "pathway5",
  pathway6 = "pathway6",
}


export type Institution = {
  __typename: "Institution",
  createdAt: string,
  id: string,
  imageLink?: string | null,
  institutionCode?: string | null,
  name?: string | null,
  programs?: ModelProgramConnection | null,
  sortType: string,
  specialties?: ModelSpecialtyInstitutionConnection | null,
  updatedAt: string,
};

export type ModelProgramConnection = {
  __typename: "ModelProgramConnection",
  items:  Array<Program | null >,
  nextToken?: string | null,
};

export type ModelSpecialtyInstitutionConnection = {
  __typename: "ModelSpecialtyInstitutionConnection",
  items:  Array<SpecialtyInstitution | null >,
  nextToken?: string | null,
};

export type SpecialtyInstitution = {
  __typename: "SpecialtyInstitution",
  createdAt: string,
  id: string,
  institution?: Institution | null,
  institutionId: string,
  sortType: string,
  specialty?: Specialty | null,
  specialtyId: string,
  updatedAt: string,
};

export type Specialty = {
  __typename: "Specialty",
  acgmeSpecialtyCode?: string | null,
  createdAt: string,
  id: string,
  institutions?: ModelSpecialtyInstitutionConnection | null,
  name?: string | null,
  programs?: ModelProgramConnection | null,
  sortType: string,
  updatedAt: string,
};

export type ModelInterviewInviteConnection = {
  __typename: "ModelInterviewInviteConnection",
  items:  Array<InterviewInvite | null >,
  nextToken?: string | null,
};

export enum ProgramType {
  A = "A",
  C = "C",
  F = "F",
  M = "M",
  P = "P",
  R = "R",
}


export type ModelApplicationFilterInput = {
  and?: Array< ModelApplicationFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelApplicationFilterInput | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  status?: ModelApplicationStatusInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelApplicationStatusInput = {
  eq?: ApplicationStatus | null,
  ne?: ApplicationStatus | null,
};

export type ModelInstitutionFilterInput = {
  and?: Array< ModelInstitutionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  imageLink?: ModelStringInput | null,
  institutionCode?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelInstitutionFilterInput | null,
  or?: Array< ModelInstitutionFilterInput | null > | null,
  sortType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelInstitutionConnection = {
  __typename: "ModelInstitutionConnection",
  items:  Array<Institution | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelInterviewInviteFilterInput = {
  additionalComments?: ModelStringInput | null,
  and?: Array< ModelInterviewInviteFilterInput | null > | null,
  anonymous?: ModelBooleanInput | null,
  applicationYear?: ModelIntInput | null,
  away?: ModelBooleanInput | null,
  comlex1ScorePass?: ModelBooleanInput | null,
  comlex2Score?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  geographicPreference?: ModelBooleanInput | null,
  graduateType?: ModelInterviewInviteGraduateTypeInput | null,
  greenCard?: ModelBooleanInput | null,
  home?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  img?: ModelInterviewInviteImgInput | null,
  institutionName?: ModelStringInput | null,
  institutionNameLowerCase?: ModelStringInput | null,
  inviteDateTime?: ModelStringInput | null,
  location?: ModelInterviewInviteLocationInput | null,
  medicalDegree?: ModelMedicalDegreeInput | null,
  not?: ModelInterviewInviteFilterInput | null,
  or?: Array< ModelInterviewInviteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  signal?: ModelBooleanInput | null,
  sortType?: ModelStringInput | null,
  step1Score?: ModelIntInput | null,
  step1ScorePass?: ModelBooleanInput | null,
  step2Score?: ModelStringInput | null,
  subI?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
  visaRequired?: ModelBooleanInput | null,
  yearOfGraduation?: ModelIntInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelInterviewInviteGraduateTypeInput = {
  eq?: InterviewInviteGraduateType | null,
  ne?: InterviewInviteGraduateType | null,
};

export type ModelInterviewInviteImgInput = {
  eq?: InterviewInviteImg | null,
  ne?: InterviewInviteImg | null,
};

export type ModelInterviewInviteLocationInput = {
  eq?: InterviewInviteLocation | null,
  ne?: InterviewInviteLocation | null,
};

export type ModelMedicalDegreeInput = {
  eq?: MedicalDegree | null,
  ne?: MedicalDegree | null,
};

export type ModelProgramFilterInput = {
  and?: Array< ModelProgramFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  institutionId?: ModelIDInput | null,
  institutionName?: ModelStringInput | null,
  institutionNameLowerCase?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProgramFilterInput | null,
  nrmpProgramCode?: ModelStringInput | null,
  or?: Array< ModelProgramFilterInput | null > | null,
  sortType?: ModelStringInput | null,
  specialtyId?: ModelIDInput | null,
  type?: ModelProgramTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelProgramTypeInput = {
  eq?: ProgramType | null,
  ne?: ProgramType | null,
};

export type ModelSpecialtyFilterInput = {
  acgmeSpecialtyCode?: ModelStringInput | null,
  and?: Array< ModelSpecialtyFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelSpecialtyFilterInput | null,
  or?: Array< ModelSpecialtyFilterInput | null > | null,
  sortType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSpecialtyConnection = {
  __typename: "ModelSpecialtyConnection",
  items:  Array<Specialty | null >,
  nextToken?: string | null,
};

export type ModelSpecialtyInstitutionFilterInput = {
  and?: Array< ModelSpecialtyInstitutionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  institutionId?: ModelIDInput | null,
  not?: ModelSpecialtyInstitutionFilterInput | null,
  or?: Array< ModelSpecialtyInstitutionFilterInput | null > | null,
  sortType?: ModelStringInput | null,
  specialtyId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  aoa?: ModelBooleanInput | null,
  applicationYear?: ModelIntInput | null,
  classRank?: ModelUserProfileClassRankInput | null,
  comlex1ScorePass?: ModelBooleanInput | null,
  comlex2Score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  ecfmgCertified?: ModelBooleanInput | null,
  goldHumanism?: ModelBooleanInput | null,
  graduateType?: ModelUserProfileGraduateTypeInput | null,
  id?: ModelIDInput | null,
  img?: ModelUserProfileImgInput | null,
  isProfile?: ModelBooleanInput | null,
  isProfileString?: ModelStringInput | null,
  location?: ModelStringInput | null,
  medicalDegree?: ModelMedicalDegreeInput | null,
  monthsOfUSCE?: ModelIntInput | null,
  not?: ModelUserProfileFilterInput | null,
  numApplications?: ModelIntInput | null,
  numInterviews?: ModelIntInput | null,
  numPublications?: ModelIntInput | null,
  numRejected?: ModelIntInput | null,
  numVolunteerExperiences?: ModelIntInput | null,
  numWaitlisted?: ModelIntInput | null,
  numWithdrawn?: ModelIntInput | null,
  numWorkExperiences?: ModelIntInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  otherDegrees?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  ownerAccount?: ModelStringInput | null,
  redFlags?: ModelBooleanInput | null,
  redFlagsExplanation?: ModelStringInput | null,
  schoolRanking?: ModelUserProfileSchoolRankingInput | null,
  sigmaSigmaPhi?: ModelBooleanInput | null,
  sortType?: ModelStringInput | null,
  step1Score?: ModelIntInput | null,
  step1ScorePass?: ModelBooleanInput | null,
  step2CSPathway?: ModelUserProfileStep2CSPathwayInput | null,
  step2Score?: ModelIntInput | null,
  step3Score?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
  visaRequired?: ModelBooleanInput | null,
  yearOfGraduation?: ModelIntInput | null,
};

export type ModelUserProfileClassRankInput = {
  eq?: UserProfileClassRank | null,
  ne?: UserProfileClassRank | null,
};

export type ModelUserProfileGraduateTypeInput = {
  eq?: UserProfileGraduateType | null,
  ne?: UserProfileGraduateType | null,
};

export type ModelUserProfileImgInput = {
  eq?: UserProfileImg | null,
  ne?: UserProfileImg | null,
};

export type ModelUserProfileSchoolRankingInput = {
  eq?: UserProfileSchoolRanking | null,
  ne?: UserProfileSchoolRanking | null,
};

export type ModelUserProfileStep2CSPathwayInput = {
  eq?: UserProfileStep2CSPathway | null,
  ne?: UserProfileStep2CSPathway | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelUserProfileProgramFilterInput = {
  and?: Array< ModelUserProfileProgramFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileProgramFilterInput | null,
  or?: Array< ModelUserProfileProgramFilterInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
};

export type ModelApplicationConditionInput = {
  and?: Array< ModelApplicationConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelApplicationConditionInput | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  status?: ModelApplicationStatusInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
};

export type CreateApplicationInput = {
  id?: string | null,
  programId: string,
  status?: ApplicationStatus | null,
  userProfileId: string,
};

export type ModelInstitutionConditionInput = {
  and?: Array< ModelInstitutionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  imageLink?: ModelStringInput | null,
  institutionCode?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelInstitutionConditionInput | null,
  or?: Array< ModelInstitutionConditionInput | null > | null,
  sortType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateInstitutionInput = {
  id?: string | null,
  imageLink?: string | null,
  institutionCode?: string | null,
  name?: string | null,
  sortType: string,
};

export type ModelInterviewInviteConditionInput = {
  additionalComments?: ModelStringInput | null,
  and?: Array< ModelInterviewInviteConditionInput | null > | null,
  anonymous?: ModelBooleanInput | null,
  applicationYear?: ModelIntInput | null,
  away?: ModelBooleanInput | null,
  comlex1ScorePass?: ModelBooleanInput | null,
  comlex2Score?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  geographicPreference?: ModelBooleanInput | null,
  graduateType?: ModelInterviewInviteGraduateTypeInput | null,
  greenCard?: ModelBooleanInput | null,
  home?: ModelBooleanInput | null,
  img?: ModelInterviewInviteImgInput | null,
  institutionName?: ModelStringInput | null,
  institutionNameLowerCase?: ModelStringInput | null,
  inviteDateTime?: ModelStringInput | null,
  location?: ModelInterviewInviteLocationInput | null,
  medicalDegree?: ModelMedicalDegreeInput | null,
  not?: ModelInterviewInviteConditionInput | null,
  or?: Array< ModelInterviewInviteConditionInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  signal?: ModelBooleanInput | null,
  sortType?: ModelStringInput | null,
  step1Score?: ModelIntInput | null,
  step1ScorePass?: ModelBooleanInput | null,
  step2Score?: ModelStringInput | null,
  subI?: ModelBooleanInput | null,
  updatedAt?: ModelStringInput | null,
  visaRequired?: ModelBooleanInput | null,
  yearOfGraduation?: ModelIntInput | null,
};

export type CreateInterviewInviteInput = {
  additionalComments?: string | null,
  anonymous?: boolean | null,
  applicationYear?: number | null,
  away?: boolean | null,
  comlex1ScorePass?: boolean | null,
  comlex2Score?: string | null,
  geographicPreference?: boolean | null,
  graduateType?: InterviewInviteGraduateType | null,
  greenCard?: boolean | null,
  home?: boolean | null,
  id?: string | null,
  img?: InterviewInviteImg | null,
  institutionName?: string | null,
  institutionNameLowerCase?: string | null,
  inviteDateTime: string,
  location?: InterviewInviteLocation | null,
  medicalDegree?: MedicalDegree | null,
  programId: string,
  signal?: boolean | null,
  sortType: string,
  step1Score?: number | null,
  step1ScorePass?: boolean | null,
  step2Score?: string | null,
  subI?: boolean | null,
  visaRequired?: boolean | null,
  yearOfGraduation?: number | null,
};

export type ModelProgramConditionInput = {
  and?: Array< ModelProgramConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  institutionId?: ModelIDInput | null,
  institutionName?: ModelStringInput | null,
  institutionNameLowerCase?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProgramConditionInput | null,
  nrmpProgramCode?: ModelStringInput | null,
  or?: Array< ModelProgramConditionInput | null > | null,
  sortType?: ModelStringInput | null,
  specialtyId?: ModelIDInput | null,
  type?: ModelProgramTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateProgramInput = {
  id?: string | null,
  institutionId: string,
  institutionName?: string | null,
  institutionNameLowerCase?: string | null,
  name?: string | null,
  nrmpProgramCode?: string | null,
  sortType: string,
  specialtyId: string,
  type?: ProgramType | null,
};

export type ModelSpecialtyConditionInput = {
  acgmeSpecialtyCode?: ModelStringInput | null,
  and?: Array< ModelSpecialtyConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelSpecialtyConditionInput | null,
  or?: Array< ModelSpecialtyConditionInput | null > | null,
  sortType?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateSpecialtyInput = {
  acgmeSpecialtyCode?: string | null,
  id?: string | null,
  name?: string | null,
  sortType: string,
};

export type ModelSpecialtyInstitutionConditionInput = {
  and?: Array< ModelSpecialtyInstitutionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  institutionId?: ModelIDInput | null,
  not?: ModelSpecialtyInstitutionConditionInput | null,
  or?: Array< ModelSpecialtyInstitutionConditionInput | null > | null,
  sortType?: ModelStringInput | null,
  specialtyId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateSpecialtyInstitutionInput = {
  id?: string | null,
  institutionId: string,
  sortType: string,
  specialtyId: string,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  aoa?: ModelBooleanInput | null,
  applicationYear?: ModelIntInput | null,
  classRank?: ModelUserProfileClassRankInput | null,
  comlex1ScorePass?: ModelBooleanInput | null,
  comlex2Score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  ecfmgCertified?: ModelBooleanInput | null,
  goldHumanism?: ModelBooleanInput | null,
  graduateType?: ModelUserProfileGraduateTypeInput | null,
  img?: ModelUserProfileImgInput | null,
  isProfile?: ModelBooleanInput | null,
  isProfileString?: ModelStringInput | null,
  location?: ModelStringInput | null,
  medicalDegree?: ModelMedicalDegreeInput | null,
  monthsOfUSCE?: ModelIntInput | null,
  not?: ModelUserProfileConditionInput | null,
  numApplications?: ModelIntInput | null,
  numInterviews?: ModelIntInput | null,
  numPublications?: ModelIntInput | null,
  numRejected?: ModelIntInput | null,
  numVolunteerExperiences?: ModelIntInput | null,
  numWaitlisted?: ModelIntInput | null,
  numWithdrawn?: ModelIntInput | null,
  numWorkExperiences?: ModelIntInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  otherDegrees?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  ownerAccount?: ModelStringInput | null,
  redFlags?: ModelBooleanInput | null,
  redFlagsExplanation?: ModelStringInput | null,
  schoolRanking?: ModelUserProfileSchoolRankingInput | null,
  sigmaSigmaPhi?: ModelBooleanInput | null,
  sortType?: ModelStringInput | null,
  step1Score?: ModelIntInput | null,
  step1ScorePass?: ModelBooleanInput | null,
  step2CSPathway?: ModelUserProfileStep2CSPathwayInput | null,
  step2Score?: ModelIntInput | null,
  step3Score?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
  visaRequired?: ModelBooleanInput | null,
  yearOfGraduation?: ModelIntInput | null,
};

export type CreateUserProfileInput = {
  aoa?: boolean | null,
  applicationYear?: number | null,
  classRank?: UserProfileClassRank | null,
  comlex1ScorePass?: boolean | null,
  comlex2Score?: number | null,
  ecfmgCertified?: boolean | null,
  goldHumanism?: boolean | null,
  graduateType?: UserProfileGraduateType | null,
  id?: string | null,
  img?: UserProfileImg | null,
  isProfile?: boolean | null,
  isProfileString?: string | null,
  location?: string | null,
  medicalDegree?: MedicalDegree | null,
  monthsOfUSCE?: number | null,
  numApplications?: number | null,
  numInterviews?: number | null,
  numPublications?: number | null,
  numRejected?: number | null,
  numVolunteerExperiences?: number | null,
  numWaitlisted?: number | null,
  numWithdrawn?: number | null,
  numWorkExperiences?: number | null,
  otherDegrees?: string | null,
  ownerAccount?: string | null,
  redFlags?: boolean | null,
  redFlagsExplanation?: string | null,
  schoolRanking?: UserProfileSchoolRanking | null,
  sigmaSigmaPhi?: boolean | null,
  sortType: string,
  step1Score?: number | null,
  step1ScorePass?: boolean | null,
  step2CSPathway?: UserProfileStep2CSPathway | null,
  step2Score?: number | null,
  step3Score?: number | null,
  username?: string | null,
  visaRequired?: boolean | null,
  yearOfGraduation?: number | null,
};

export type ModelUserProfileProgramConditionInput = {
  and?: Array< ModelUserProfileProgramConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserProfileProgramConditionInput | null,
  or?: Array< ModelUserProfileProgramConditionInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userProfileId?: ModelIDInput | null,
};

export type CreateUserProfileProgramInput = {
  id?: string | null,
  programId: string,
  userProfileId: string,
};

export type DeleteApplicationInput = {
  id: string,
};

export type DeleteInstitutionInput = {
  id: string,
};

export type DeleteInterviewInviteInput = {
  id: string,
};

export type DeleteProgramInput = {
  id: string,
};

export type DeleteSpecialtyInput = {
  id: string,
};

export type DeleteSpecialtyInstitutionInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type DeleteUserProfileProgramInput = {
  id: string,
};

export type UpdateApplicationInput = {
  id: string,
  programId?: string | null,
  status?: ApplicationStatus | null,
  userProfileId?: string | null,
};

export type UpdateInstitutionInput = {
  id: string,
  imageLink?: string | null,
  institutionCode?: string | null,
  name?: string | null,
  sortType?: string | null,
};

export type UpdateInterviewInviteInput = {
  additionalComments?: string | null,
  anonymous?: boolean | null,
  applicationYear?: number | null,
  away?: boolean | null,
  comlex1ScorePass?: boolean | null,
  comlex2Score?: string | null,
  geographicPreference?: boolean | null,
  graduateType?: InterviewInviteGraduateType | null,
  greenCard?: boolean | null,
  home?: boolean | null,
  id: string,
  img?: InterviewInviteImg | null,
  institutionName?: string | null,
  institutionNameLowerCase?: string | null,
  inviteDateTime?: string | null,
  location?: InterviewInviteLocation | null,
  medicalDegree?: MedicalDegree | null,
  programId?: string | null,
  signal?: boolean | null,
  sortType?: string | null,
  step1Score?: number | null,
  step1ScorePass?: boolean | null,
  step2Score?: string | null,
  subI?: boolean | null,
  visaRequired?: boolean | null,
  yearOfGraduation?: number | null,
};

export type UpdateProgramInput = {
  id: string,
  institutionId?: string | null,
  institutionName?: string | null,
  institutionNameLowerCase?: string | null,
  name?: string | null,
  nrmpProgramCode?: string | null,
  sortType?: string | null,
  specialtyId?: string | null,
  type?: ProgramType | null,
};

export type UpdateSpecialtyInput = {
  acgmeSpecialtyCode?: string | null,
  id: string,
  name?: string | null,
  sortType?: string | null,
};

export type UpdateSpecialtyInstitutionInput = {
  id: string,
  institutionId?: string | null,
  sortType?: string | null,
  specialtyId?: string | null,
};

export type UpdateUserProfileInput = {
  aoa?: boolean | null,
  applicationYear?: number | null,
  classRank?: UserProfileClassRank | null,
  comlex1ScorePass?: boolean | null,
  comlex2Score?: number | null,
  ecfmgCertified?: boolean | null,
  goldHumanism?: boolean | null,
  graduateType?: UserProfileGraduateType | null,
  id: string,
  img?: UserProfileImg | null,
  isProfile?: boolean | null,
  isProfileString?: string | null,
  location?: string | null,
  medicalDegree?: MedicalDegree | null,
  monthsOfUSCE?: number | null,
  numApplications?: number | null,
  numInterviews?: number | null,
  numPublications?: number | null,
  numRejected?: number | null,
  numVolunteerExperiences?: number | null,
  numWaitlisted?: number | null,
  numWithdrawn?: number | null,
  numWorkExperiences?: number | null,
  otherDegrees?: string | null,
  ownerAccount?: string | null,
  redFlags?: boolean | null,
  redFlagsExplanation?: string | null,
  schoolRanking?: UserProfileSchoolRanking | null,
  sigmaSigmaPhi?: boolean | null,
  sortType?: string | null,
  step1Score?: number | null,
  step1ScorePass?: boolean | null,
  step2CSPathway?: UserProfileStep2CSPathway | null,
  step2Score?: number | null,
  step3Score?: number | null,
  username?: string | null,
  visaRequired?: boolean | null,
  yearOfGraduation?: number | null,
};

export type UpdateUserProfileProgramInput = {
  id: string,
  programId?: string | null,
  userProfileId?: string | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionInstitutionFilterInput = {
  and?: Array< ModelSubscriptionInstitutionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  imageLink?: ModelSubscriptionStringInput | null,
  institutionCode?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionInstitutionFilterInput | null > | null,
  sortType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionInterviewInviteFilterInput = {
  additionalComments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInterviewInviteFilterInput | null > | null,
  anonymous?: ModelSubscriptionBooleanInput | null,
  applicationYear?: ModelSubscriptionIntInput | null,
  away?: ModelSubscriptionBooleanInput | null,
  comlex1ScorePass?: ModelSubscriptionBooleanInput | null,
  comlex2Score?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  geographicPreference?: ModelSubscriptionBooleanInput | null,
  graduateType?: ModelSubscriptionStringInput | null,
  greenCard?: ModelSubscriptionBooleanInput | null,
  home?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  img?: ModelSubscriptionStringInput | null,
  institutionName?: ModelSubscriptionStringInput | null,
  institutionNameLowerCase?: ModelSubscriptionStringInput | null,
  inviteDateTime?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  medicalDegree?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionInterviewInviteFilterInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelSubscriptionIDInput | null,
  signal?: ModelSubscriptionBooleanInput | null,
  sortType?: ModelSubscriptionStringInput | null,
  step1Score?: ModelSubscriptionIntInput | null,
  step1ScorePass?: ModelSubscriptionBooleanInput | null,
  step2Score?: ModelSubscriptionStringInput | null,
  subI?: ModelSubscriptionBooleanInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  visaRequired?: ModelSubscriptionBooleanInput | null,
  yearOfGraduation?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProgramFilterInput = {
  and?: Array< ModelSubscriptionProgramFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  institutionId?: ModelSubscriptionIDInput | null,
  institutionName?: ModelSubscriptionStringInput | null,
  institutionNameLowerCase?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  nrmpProgramCode?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionProgramFilterInput | null > | null,
  sortType?: ModelSubscriptionStringInput | null,
  specialtyId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSpecialtyFilterInput = {
  acgmeSpecialtyCode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSpecialtyFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionSpecialtyFilterInput | null > | null,
  sortType?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionSpecialtyInstitutionFilterInput = {
  and?: Array< ModelSubscriptionSpecialtyInstitutionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  institutionId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionSpecialtyInstitutionFilterInput | null > | null,
  sortType?: ModelSubscriptionStringInput | null,
  specialtyId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  aoa?: ModelSubscriptionBooleanInput | null,
  applicationYear?: ModelSubscriptionIntInput | null,
  classRank?: ModelSubscriptionStringInput | null,
  comlex1ScorePass?: ModelSubscriptionBooleanInput | null,
  comlex2Score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  ecfmgCertified?: ModelSubscriptionBooleanInput | null,
  goldHumanism?: ModelSubscriptionBooleanInput | null,
  graduateType?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  img?: ModelSubscriptionStringInput | null,
  isProfile?: ModelSubscriptionBooleanInput | null,
  isProfileString?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  medicalDegree?: ModelSubscriptionStringInput | null,
  monthsOfUSCE?: ModelSubscriptionIntInput | null,
  numApplications?: ModelSubscriptionIntInput | null,
  numInterviews?: ModelSubscriptionIntInput | null,
  numPublications?: ModelSubscriptionIntInput | null,
  numRejected?: ModelSubscriptionIntInput | null,
  numVolunteerExperiences?: ModelSubscriptionIntInput | null,
  numWaitlisted?: ModelSubscriptionIntInput | null,
  numWithdrawn?: ModelSubscriptionIntInput | null,
  numWorkExperiences?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  otherDegrees?: ModelSubscriptionStringInput | null,
  owner?: ModelStringInput | null,
  ownerAccount?: ModelStringInput | null,
  redFlags?: ModelSubscriptionBooleanInput | null,
  redFlagsExplanation?: ModelSubscriptionStringInput | null,
  schoolRanking?: ModelSubscriptionStringInput | null,
  sigmaSigmaPhi?: ModelSubscriptionBooleanInput | null,
  sortType?: ModelSubscriptionStringInput | null,
  step1Score?: ModelSubscriptionIntInput | null,
  step1ScorePass?: ModelSubscriptionBooleanInput | null,
  step2CSPathway?: ModelSubscriptionStringInput | null,
  step2Score?: ModelSubscriptionIntInput | null,
  step3Score?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  visaRequired?: ModelSubscriptionBooleanInput | null,
  yearOfGraduation?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionUserProfileProgramFilterInput = {
  and?: Array< ModelSubscriptionUserProfileProgramFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileProgramFilterInput | null > | null,
  owner?: ModelStringInput | null,
  programId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
};

export type CustomQueryQueryVariables = {
};

export type CustomQueryQuery = {
  customQuery?:  Array< {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null > | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type GetInstitutionQueryVariables = {
  id: string,
};

export type GetInstitutionQuery = {
  getInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetInterviewInviteQueryVariables = {
  id: string,
};

export type GetInterviewInviteQuery = {
  getInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type GetProgramQueryVariables = {
  id: string,
};

export type GetProgramQuery = {
  getProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetSpecialtyQueryVariables = {
  id: string,
};

export type GetSpecialtyQuery = {
  getSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type GetSpecialtyInstitutionQueryVariables = {
  id: string,
};

export type GetSpecialtyInstitutionQuery = {
  getSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type GetUserProfileProgramQueryVariables = {
  id: string,
};

export type GetUserProfileProgramQuery = {
  getUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      createdAt: string,
      id: string,
      owner?: string | null,
      programId: string,
      status?: ApplicationStatus | null,
      updatedAt: string,
      userProfileId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInstitutionByInstitutionCodeQueryVariables = {
  filter?: ModelInstitutionFilterInput | null,
  institutionCode: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInstitutionByInstitutionCodeQuery = {
  listInstitutionByInstitutionCode?:  {
    __typename: "ModelInstitutionConnection",
    items:  Array< {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInstitutionBySortTypeAndNameQueryVariables = {
  filter?: ModelInstitutionFilterInput | null,
  limit?: number | null,
  name?: ModelStringKeyConditionInput | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  sortType: string,
};

export type ListInstitutionBySortTypeAndNameQuery = {
  listInstitutionBySortTypeAndName?:  {
    __typename: "ModelInstitutionConnection",
    items:  Array< {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInstitutionsQueryVariables = {
  filter?: ModelInstitutionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInstitutionsQuery = {
  listInstitutions?:  {
    __typename: "ModelInstitutionConnection",
    items:  Array< {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInterviewInviteByProgramIdQueryVariables = {
  filter?: ModelInterviewInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  programId: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListInterviewInviteByProgramIdQuery = {
  listInterviewInviteByProgramId?:  {
    __typename: "ModelInterviewInviteConnection",
    items:  Array< {
      __typename: "InterviewInvite",
      additionalComments?: string | null,
      anonymous?: boolean | null,
      applicationYear?: number | null,
      away?: boolean | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: string | null,
      createdAt: string,
      geographicPreference?: boolean | null,
      graduateType?: InterviewInviteGraduateType | null,
      greenCard?: boolean | null,
      home?: boolean | null,
      id: string,
      img?: InterviewInviteImg | null,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      inviteDateTime: string,
      location?: InterviewInviteLocation | null,
      medicalDegree?: MedicalDegree | null,
      owner?: string | null,
      programId: string,
      signal?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2Score?: string | null,
      subI?: boolean | null,
      updatedAt: string,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInterviewInviteBySortTypeAndInviteDateTimeQueryVariables = {
  filter?: ModelInterviewInviteFilterInput | null,
  inviteDateTime?: ModelStringKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  sortType: string,
};

export type ListInterviewInviteBySortTypeAndInviteDateTimeQuery = {
  listInterviewInviteBySortTypeAndInviteDateTime?:  {
    __typename: "ModelInterviewInviteConnection",
    items:  Array< {
      __typename: "InterviewInvite",
      additionalComments?: string | null,
      anonymous?: boolean | null,
      applicationYear?: number | null,
      away?: boolean | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: string | null,
      createdAt: string,
      geographicPreference?: boolean | null,
      graduateType?: InterviewInviteGraduateType | null,
      greenCard?: boolean | null,
      home?: boolean | null,
      id: string,
      img?: InterviewInviteImg | null,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      inviteDateTime: string,
      location?: InterviewInviteLocation | null,
      medicalDegree?: MedicalDegree | null,
      owner?: string | null,
      programId: string,
      signal?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2Score?: string | null,
      subI?: boolean | null,
      updatedAt: string,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListInterviewInvitesQueryVariables = {
  filter?: ModelInterviewInviteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInterviewInvitesQuery = {
  listInterviewInvites?:  {
    __typename: "ModelInterviewInviteConnection",
    items:  Array< {
      __typename: "InterviewInvite",
      additionalComments?: string | null,
      anonymous?: boolean | null,
      applicationYear?: number | null,
      away?: boolean | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: string | null,
      createdAt: string,
      geographicPreference?: boolean | null,
      graduateType?: InterviewInviteGraduateType | null,
      greenCard?: boolean | null,
      home?: boolean | null,
      id: string,
      img?: InterviewInviteImg | null,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      inviteDateTime: string,
      location?: InterviewInviteLocation | null,
      medicalDegree?: MedicalDegree | null,
      owner?: string | null,
      programId: string,
      signal?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2Score?: string | null,
      subI?: boolean | null,
      updatedAt: string,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProgramByNrmpProgramCodeQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  nrmpProgramCode: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListProgramByNrmpProgramCodeQuery = {
  listProgramByNrmpProgramCode?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProgramBySortTypeAndInstitutionNameLowerCaseQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  institutionNameLowerCase?: ModelStringKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  sortType: string,
};

export type ListProgramBySortTypeAndInstitutionNameLowerCaseQuery = {
  listProgramBySortTypeAndInstitutionNameLowerCase?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProgramsQueryVariables = {
  filter?: ModelProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgramsQuery = {
  listPrograms?:  {
    __typename: "ModelProgramConnection",
    items:  Array< {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSpecialtiesQueryVariables = {
  filter?: ModelSpecialtyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecialtiesQuery = {
  listSpecialties?:  {
    __typename: "ModelSpecialtyConnection",
    items:  Array< {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSpecialtyByAcgmeSpecialtyCodeQueryVariables = {
  acgmeSpecialtyCode: string,
  filter?: ModelSpecialtyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSpecialtyByAcgmeSpecialtyCodeQuery = {
  listSpecialtyByAcgmeSpecialtyCode?:  {
    __typename: "ModelSpecialtyConnection",
    items:  Array< {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSpecialtyBySortTypeAndAcgmeSpecialtyCodeQueryVariables = {
  acgmeSpecialtyCode?: ModelStringKeyConditionInput | null,
  filter?: ModelSpecialtyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  sortType: string,
};

export type ListSpecialtyBySortTypeAndAcgmeSpecialtyCodeQuery = {
  listSpecialtyBySortTypeAndAcgmeSpecialtyCode?:  {
    __typename: "ModelSpecialtyConnection",
    items:  Array< {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListSpecialtyInstitutionsQueryVariables = {
  filter?: ModelSpecialtyInstitutionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpecialtyInstitutionsQuery = {
  listSpecialtyInstitutions?:  {
    __typename: "ModelSpecialtyInstitutionConnection",
    items:  Array< {
      __typename: "SpecialtyInstitution",
      createdAt: string,
      id: string,
      institutionId: string,
      sortType: string,
      specialtyId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileByGraduateTypeQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  graduateType: UserProfileGraduateType,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfileByGraduateTypeQuery = {
  listUserProfileByGraduateType?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileByOwnerAccountAndIsProfileStringQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  isProfileString?: ModelStringKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  ownerAccount: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfileByOwnerAccountAndIsProfileStringQuery = {
  listUserProfileByOwnerAccountAndIsProfileString?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileBySortTypeAndUsernameQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  sortType: string,
  username?: ModelStringKeyConditionInput | null,
};

export type ListUserProfileBySortTypeAndUsernameQuery = {
  listUserProfileBySortTypeAndUsername?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileProgramByUserProfileIdQueryVariables = {
  filter?: ModelUserProfileProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  userProfileId: string,
};

export type ListUserProfileProgramByUserProfileIdQuery = {
  listUserProfileProgramByUserProfileId?:  {
    __typename: "ModelUserProfileProgramConnection",
    items:  Array< {
      __typename: "UserProfileProgram",
      createdAt: string,
      id: string,
      owner?: string | null,
      programId: string,
      updatedAt: string,
      userProfileId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfileProgramsQueryVariables = {
  filter?: ModelUserProfileProgramFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfileProgramsQuery = {
  listUserProfilePrograms?:  {
    __typename: "ModelUserProfileProgramConnection",
    items:  Array< {
      __typename: "UserProfileProgram",
      createdAt: string,
      id: string,
      owner?: string | null,
      programId: string,
      updatedAt: string,
      userProfileId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateApplicationMutationVariables = {
  condition?: ModelApplicationConditionInput | null,
  input: CreateApplicationInput,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type CreateInstitutionMutationVariables = {
  condition?: ModelInstitutionConditionInput | null,
  input: CreateInstitutionInput,
};

export type CreateInstitutionMutation = {
  createInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateInterviewInviteMutationVariables = {
  condition?: ModelInterviewInviteConditionInput | null,
  input: CreateInterviewInviteInput,
};

export type CreateInterviewInviteMutation = {
  createInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type CreateProgramMutationVariables = {
  condition?: ModelProgramConditionInput | null,
  input: CreateProgramInput,
};

export type CreateProgramMutation = {
  createProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateSpecialtyMutationVariables = {
  condition?: ModelSpecialtyConditionInput | null,
  input: CreateSpecialtyInput,
};

export type CreateSpecialtyMutation = {
  createSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type CreateSpecialtyInstitutionMutationVariables = {
  condition?: ModelSpecialtyInstitutionConditionInput | null,
  input: CreateSpecialtyInstitutionInput,
};

export type CreateSpecialtyInstitutionMutation = {
  createSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type CreateUserProfileProgramMutationVariables = {
  condition?: ModelUserProfileProgramConditionInput | null,
  input: CreateUserProfileProgramInput,
};

export type CreateUserProfileProgramMutation = {
  createUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  condition?: ModelApplicationConditionInput | null,
  input: DeleteApplicationInput,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type DeleteInstitutionMutationVariables = {
  condition?: ModelInstitutionConditionInput | null,
  input: DeleteInstitutionInput,
};

export type DeleteInstitutionMutation = {
  deleteInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteInterviewInviteMutationVariables = {
  condition?: ModelInterviewInviteConditionInput | null,
  input: DeleteInterviewInviteInput,
};

export type DeleteInterviewInviteMutation = {
  deleteInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type DeleteProgramMutationVariables = {
  condition?: ModelProgramConditionInput | null,
  input: DeleteProgramInput,
};

export type DeleteProgramMutation = {
  deleteProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteSpecialtyMutationVariables = {
  condition?: ModelSpecialtyConditionInput | null,
  input: DeleteSpecialtyInput,
};

export type DeleteSpecialtyMutation = {
  deleteSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpecialtyInstitutionMutationVariables = {
  condition?: ModelSpecialtyInstitutionConditionInput | null,
  input: DeleteSpecialtyInstitutionInput,
};

export type DeleteSpecialtyInstitutionMutation = {
  deleteSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type DeleteUserProfileProgramMutationVariables = {
  condition?: ModelUserProfileProgramConditionInput | null,
  input: DeleteUserProfileProgramInput,
};

export type DeleteUserProfileProgramMutation = {
  deleteUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  condition?: ModelApplicationConditionInput | null,
  input: UpdateApplicationInput,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type UpdateInstitutionMutationVariables = {
  condition?: ModelInstitutionConditionInput | null,
  input: UpdateInstitutionInput,
};

export type UpdateInstitutionMutation = {
  updateInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateInterviewInviteMutationVariables = {
  condition?: ModelInterviewInviteConditionInput | null,
  input: UpdateInterviewInviteInput,
};

export type UpdateInterviewInviteMutation = {
  updateInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type UpdateProgramMutationVariables = {
  condition?: ModelProgramConditionInput | null,
  input: UpdateProgramInput,
};

export type UpdateProgramMutation = {
  updateProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateSpecialtyMutationVariables = {
  condition?: ModelSpecialtyConditionInput | null,
  input: UpdateSpecialtyInput,
};

export type UpdateSpecialtyMutation = {
  updateSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpecialtyInstitutionMutationVariables = {
  condition?: ModelSpecialtyInstitutionConditionInput | null,
  input: UpdateSpecialtyInstitutionInput,
};

export type UpdateSpecialtyInstitutionMutation = {
  updateSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type UpdateUserProfileProgramMutationVariables = {
  condition?: ModelUserProfileProgramConditionInput | null,
  input: UpdateUserProfileProgramInput,
};

export type UpdateUserProfileProgramMutation = {
  updateUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
  owner?: string | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type OnCreateInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnCreateInstitutionSubscription = {
  onCreateInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateInterviewInviteSubscriptionVariables = {
  filter?: ModelSubscriptionInterviewInviteFilterInput | null,
  owner?: string | null,
};

export type OnCreateInterviewInviteSubscription = {
  onCreateInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type OnCreateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnCreateProgramSubscription = {
  onCreateProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateSpecialtySubscriptionVariables = {
  filter?: ModelSubscriptionSpecialtyFilterInput | null,
};

export type OnCreateSpecialtySubscription = {
  onCreateSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpecialtyInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionSpecialtyInstitutionFilterInput | null,
};

export type OnCreateSpecialtyInstitutionSubscription = {
  onCreateSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
  ownerAccount?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type OnCreateUserProfileProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileProgramFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileProgramSubscription = {
  onCreateUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type OnDeleteInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnDeleteInstitutionSubscription = {
  onDeleteInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteInterviewInviteSubscriptionVariables = {
  filter?: ModelSubscriptionInterviewInviteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInterviewInviteSubscription = {
  onDeleteInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type OnDeleteProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnDeleteProgramSubscription = {
  onDeleteProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteSpecialtySubscriptionVariables = {
  filter?: ModelSubscriptionSpecialtyFilterInput | null,
};

export type OnDeleteSpecialtySubscription = {
  onDeleteSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpecialtyInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionSpecialtyInstitutionFilterInput | null,
};

export type OnDeleteSpecialtyInstitutionSubscription = {
  onDeleteSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
  ownerAccount?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type OnDeleteUserProfileProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileProgramFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileProgramSubscription = {
  onDeleteUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    status?: ApplicationStatus | null,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};

export type OnUpdateInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionInstitutionFilterInput | null,
};

export type OnUpdateInstitutionSubscription = {
  onUpdateInstitution?:  {
    __typename: "Institution",
    createdAt: string,
    id: string,
    imageLink?: string | null,
    institutionCode?: string | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    specialties?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateInterviewInviteSubscriptionVariables = {
  filter?: ModelSubscriptionInterviewInviteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInterviewInviteSubscription = {
  onUpdateInterviewInvite?:  {
    __typename: "InterviewInvite",
    additionalComments?: string | null,
    anonymous?: boolean | null,
    applicationYear?: number | null,
    away?: boolean | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: string | null,
    createdAt: string,
    geographicPreference?: boolean | null,
    graduateType?: InterviewInviteGraduateType | null,
    greenCard?: boolean | null,
    home?: boolean | null,
    id: string,
    img?: InterviewInviteImg | null,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    inviteDateTime: string,
    location?: InterviewInviteLocation | null,
    medicalDegree?: MedicalDegree | null,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    signal?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2Score?: string | null,
    subI?: boolean | null,
    updatedAt: string,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type OnUpdateProgramSubscriptionVariables = {
  filter?: ModelSubscriptionProgramFilterInput | null,
};

export type OnUpdateProgramSubscription = {
  onUpdateProgram?:  {
    __typename: "Program",
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    institutionName?: string | null,
    institutionNameLowerCase?: string | null,
    interviewInvites?:  {
      __typename: "ModelInterviewInviteConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    nrmpProgramCode?: string | null,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    type?: ProgramType | null,
    updatedAt: string,
    userProfiles?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateSpecialtySubscriptionVariables = {
  filter?: ModelSubscriptionSpecialtyFilterInput | null,
};

export type OnUpdateSpecialtySubscription = {
  onUpdateSpecialty?:  {
    __typename: "Specialty",
    acgmeSpecialtyCode?: string | null,
    createdAt: string,
    id: string,
    institutions?:  {
      __typename: "ModelSpecialtyInstitutionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    programs?:  {
      __typename: "ModelProgramConnection",
      nextToken?: string | null,
    } | null,
    sortType: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpecialtyInstitutionSubscriptionVariables = {
  filter?: ModelSubscriptionSpecialtyInstitutionFilterInput | null,
};

export type OnUpdateSpecialtyInstitutionSubscription = {
  onUpdateSpecialtyInstitution?:  {
    __typename: "SpecialtyInstitution",
    createdAt: string,
    id: string,
    institution?:  {
      __typename: "Institution",
      createdAt: string,
      id: string,
      imageLink?: string | null,
      institutionCode?: string | null,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    institutionId: string,
    sortType: string,
    specialty?:  {
      __typename: "Specialty",
      acgmeSpecialtyCode?: string | null,
      createdAt: string,
      id: string,
      name?: string | null,
      sortType: string,
      updatedAt: string,
    } | null,
    specialtyId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
  ownerAccount?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    aoa?: boolean | null,
    applicationYear?: number | null,
    applications?:  {
      __typename: "ModelApplicationConnection",
      nextToken?: string | null,
    } | null,
    classRank?: UserProfileClassRank | null,
    comlex1ScorePass?: boolean | null,
    comlex2Score?: number | null,
    createdAt: string,
    ecfmgCertified?: boolean | null,
    goldHumanism?: boolean | null,
    graduateType?: UserProfileGraduateType | null,
    id: string,
    img?: UserProfileImg | null,
    isProfile?: boolean | null,
    isProfileString?: string | null,
    location?: string | null,
    medicalDegree?: MedicalDegree | null,
    monthsOfUSCE?: number | null,
    numApplications?: number | null,
    numInterviews?: number | null,
    numPublications?: number | null,
    numRejected?: number | null,
    numVolunteerExperiences?: number | null,
    numWaitlisted?: number | null,
    numWithdrawn?: number | null,
    numWorkExperiences?: number | null,
    otherDegrees?: string | null,
    owner?: string | null,
    ownerAccount?: string | null,
    programs?:  {
      __typename: "ModelUserProfileProgramConnection",
      nextToken?: string | null,
    } | null,
    redFlags?: boolean | null,
    redFlagsExplanation?: string | null,
    schoolRanking?: UserProfileSchoolRanking | null,
    sigmaSigmaPhi?: boolean | null,
    sortType: string,
    step1Score?: number | null,
    step1ScorePass?: boolean | null,
    step2CSPathway?: UserProfileStep2CSPathway | null,
    step2Score?: number | null,
    step3Score?: number | null,
    updatedAt: string,
    username?: string | null,
    visaRequired?: boolean | null,
    yearOfGraduation?: number | null,
  } | null,
};

export type OnUpdateUserProfileProgramSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileProgramFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileProgramSubscription = {
  onUpdateUserProfileProgram?:  {
    __typename: "UserProfileProgram",
    createdAt: string,
    id: string,
    owner?: string | null,
    program?:  {
      __typename: "Program",
      createdAt: string,
      id: string,
      institutionId: string,
      institutionName?: string | null,
      institutionNameLowerCase?: string | null,
      name?: string | null,
      nrmpProgramCode?: string | null,
      sortType: string,
      specialtyId: string,
      type?: ProgramType | null,
      updatedAt: string,
    } | null,
    programId: string,
    updatedAt: string,
    userProfile?:  {
      __typename: "UserProfile",
      aoa?: boolean | null,
      applicationYear?: number | null,
      classRank?: UserProfileClassRank | null,
      comlex1ScorePass?: boolean | null,
      comlex2Score?: number | null,
      createdAt: string,
      ecfmgCertified?: boolean | null,
      goldHumanism?: boolean | null,
      graduateType?: UserProfileGraduateType | null,
      id: string,
      img?: UserProfileImg | null,
      isProfile?: boolean | null,
      isProfileString?: string | null,
      location?: string | null,
      medicalDegree?: MedicalDegree | null,
      monthsOfUSCE?: number | null,
      numApplications?: number | null,
      numInterviews?: number | null,
      numPublications?: number | null,
      numRejected?: number | null,
      numVolunteerExperiences?: number | null,
      numWaitlisted?: number | null,
      numWithdrawn?: number | null,
      numWorkExperiences?: number | null,
      otherDegrees?: string | null,
      owner?: string | null,
      ownerAccount?: string | null,
      redFlags?: boolean | null,
      redFlagsExplanation?: string | null,
      schoolRanking?: UserProfileSchoolRanking | null,
      sigmaSigmaPhi?: boolean | null,
      sortType: string,
      step1Score?: number | null,
      step1ScorePass?: boolean | null,
      step2CSPathway?: UserProfileStep2CSPathway | null,
      step2Score?: number | null,
      step3Score?: number | null,
      updatedAt: string,
      username?: string | null,
      visaRequired?: boolean | null,
      yearOfGraduation?: number | null,
    } | null,
    userProfileId: string,
  } | null,
};
