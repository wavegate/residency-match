import { a } from "@aws-amplify/backend";

const RankList = {
  RankList: a
    .model({
      sortType: a.string(),
      userProfileId: a.id().required(),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
      programs: a.hasMany("RankListProgram", "rankListId"),
      doneWithInterviews: a.boolean(),
      matchResultProgramId: a.id(),
      matchResultProgram: a.belongsTo("Program", "matchResultProgramId"),
      comments: a.hasMany("Comment", "rankListId"),
      whyNumberOne: a.string(),
      priorities: a.string(),
      hardestPartOfRanking: a.string(),
    })
    .secondaryIndexes((index) => [index("userProfileId")])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default RankList;
