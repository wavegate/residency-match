import { a } from "@aws-amplify/backend";

const Institution = {
  Institution: a
    .model({
      sortType: a.string().required(),
      name: a.string(),
      institutionCode: a.string(),
      programs: a.hasMany("Program", "institutionId"),
      specialties: a.hasMany("SpecialtyInstitution", "institutionId"),
      imageLink: a.string(),
    })
    .secondaryIndexes((index) => [
      index("sortType").sortKeys(["name"]),
      index("institutionCode"),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
    ]),
};

export default Institution;
