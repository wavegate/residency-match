import { a } from "@aws-amplify/backend";

const InterviewInvite = {
  InterviewInvite: a
    .model({
      applicationYear: a.integer(),
      anonymous: a.boolean(),
      graduateType: a.enum(["US", "IMG"]),
      img: a.enum(["nonUSIMG", "USIMG"]),
      sortType: a.string().required(),
      inviteDateTime: a.datetime().required(),
      geographicPreference: a.boolean(),
      signal: a.boolean(),
      locationState: a.enum(["IS", "OOS"]),
      programId: a.id().required(),
      program: a.belongsTo("Program", "programId"),
      additionalComments: a.string(),
      medicalDegree: a.ref("MedicalDegree"),
      step1ScorePass: a.boolean(),
      step1Score: a.integer(),
      step2Score: a.string(),
      comlex1ScorePass: a.boolean(),
      comlex2Score: a.string(),
      visaRequired: a.boolean(),
      subI: a.boolean(),
      home: a.boolean(),
      yearOfGraduation: a.integer(),
      greenCard: a.boolean(),
      away: a.boolean(),
      institutionName: a.string(),
      institutionNameLowerCase: a.string(),
      userProfileId: a.id(),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
      interviewLogistics: a.hasOne("InterviewLogistics", "interviewInviteId"),
    })
    .secondaryIndexes((index) => [
      // index("sortType").sortKeys([
      //   "institutionNameLowerCase",
      //   "inviteDateTime",
      // ]),
      index("sortType").sortKeys(["inviteDateTime"]),
      index("userProfileId").sortKeys(["inviteDateTime"]),
      index("programId").sortKeys(["inviteDateTime"]),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.group("Moderator"),
      allow.owner(),
    ]),
};

export default InterviewInvite;
