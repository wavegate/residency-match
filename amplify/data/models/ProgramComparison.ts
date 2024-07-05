import { a } from "@aws-amplify/backend";

const ProgramComparison = {
  ProgramComparison: a
    .model({
      comparisonId: a.id().required(),
      programId: a.id().required(),
      comparison: a.belongsTo("Comparison", "comparisonId"),
      program: a.belongsTo("Program", "programId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default ProgramComparison;
