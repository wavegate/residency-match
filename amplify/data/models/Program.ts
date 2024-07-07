import { a } from "@aws-amplify/backend";

const Program = {
  Program: a
    .model({
      userProfiles: a.hasMany("UserProfileProgram", "programId"),
      sortType: a.string().required(),
      name: a.string(),
      nrmpProgramCode: a.string(),
      type: a.ref("ProgramType"),
      institutionId: a.id().required(),
      institution: a.belongsTo("Institution", "institutionId"),
      specialtyId: a.id().required(),
      specialty: a.belongsTo("Specialty", "specialtyId"),
      interviewInvites: a.hasMany("InterviewInvite", "programId"),
      applications: a.hasMany("Application", "programId"),
      institutionName: a.string(),
      institutionNameLowerCase: a.string(),
      comparisons: a.hasMany("ProgramComparison", "programId"),
      interviewRejections: a.hasMany("InterviewRejection", "programId"),
      interviewWithdrawals: a.hasMany("InterviewWithdrawal", "programId"),
      interviewImpressions: a.hasMany("InterviewImpression", "programId"),
      LOIResponses: a.hasMany("LOIResponse", "programId"),
      secondLooks: a.hasMany("SecondLook", "programId"),
      M4InternImpressions: a.hasMany("M4InternImpression", "programId"),
      malignants: a.hasMany("Malignant", "programId"),
      questions: a.string().array(),
      scheduleDetails: a.hasMany("ScheduleDetails", "programId"),
      postIVCommunication: a.hasMany("PostIVCommunication", "programId"),
      tier: a.enum([
        "big4",
        "top10",
        "top20",
        "top30",
        "upperMid",
        "middle",
        "lowerMid",
        "lower",
      ]),
      interviewLogistics: a.hasMany("InterviewLogistics", "programId"),
      fameShames: a.hasMany("FameShame", "programId"),
      rankLists: a.hasMany("RankListProgram", "programId"),
      matchResultRankLists: a.hasMany("RankList", "matchResultProgramId"),
    })
    .secondaryIndexes((index) => [
      index("sortType").sortKeys(["institutionNameLowerCase"]),
      index("nrmpProgramCode"),
      index("institutionNameLowerCase"),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
    ]),
};

export default Program;
