import { a } from "@aws-amplify/backend";

const Comparison = {
  Comparison: a
    .model({
      sortType: a.string().required(),
      userProfileId: a.id().required(),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
      programs: a.hasMany("ProgramComparison", "comparisonId"),
      questionDifferentiator: a.string(),
      comments: a.hasMany("Comment", "comparisonId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default Comparison;
