import { a } from "@aws-amplify/backend";

const State = {
  State: a
    .model({
      sortType: a.string().required(),
      name: a.string().required(),
      abbreviation: a.string().required(),
      cities: a.hasMany("City", "stateId"),
    })
    .secondaryIndexes((index) => [
      index("sortType").sortKeys(["name"]),
      index("abbreviation"),
      index("name"),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default State;
