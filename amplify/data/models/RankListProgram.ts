import { a } from "@aws-amplify/backend";

const RankListProgram = {
  RankListProgram: a
    .model({
      rankListId: a.id().required(),
      programId: a.id().required(),
      rankList: a.belongsTo("RankList", "rankListId"),
      program: a.belongsTo("Program", "programId"),
      rank: a.integer(),
    })
    .authorization((allow) => [allow.group("Admin"), allow.owner()]),
};

export default RankListProgram;
