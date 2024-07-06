import { a } from "@aws-amplify/backend";

const City = {
  City: a
    .model({
      name: a.string(),
      sortType: a.string().required(),
      stateId: a.id().required(),
      state: a.belongsTo("State", "stateId"),
      cityUserInputs: a.hasMany("CityUserInput", "cityId"),
    })
    .secondaryIndexes((index) => [index("name"), index("stateId")])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default City;
