import { a } from "@aws-amplify/backend";

const CityUserInput = {
  CityUserInput: a
    .model({
      sortType: a.string().required(),
      cityId: a.id().required(),
      city: a.belongsTo("City", "cityId"),
      userProfileId: a.id().required(),
      userProfile: a.belongsTo("UserProfile", "userProfileId"),
      pros: a.string(),
      cons: a.string(),
      publicTransportation: a.string(),
      weather: a.string(),
      dating: a.string(),
      lgbtq: a.string(),
      diversity: a.string(),
      safetyCrime: a.string(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
};

export default CityUserInput;
