import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { postConfirmation } from "../auth/post-confirmation/resource";
import InterviewInvite from "./models/InterviewInvite";
import Program from "./models/Program";
import RankList from "./models/RankList";
import RankListProgram from "./models/RankListProgram";
import Comment from "./models/Comment";
import UserProfile from "./models/UserProfile";
import Comparison from "./models/Comparison";
import ProgramComparison from "./models/ProgramComparison";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a
  .schema({
    MedicalDegree: a.enum(["MD", "DO"]),
    ProgramType: a.enum([
      "P", // preliminary program
      "C", // categorical program
      "M", // primary program
      "A", // advanced program
      "R", // physician program
      "F", // fellowship program
    ]),
    Specialty: a
      .model({
        sortType: a.string().required(),
        name: a.string(),
        acgmeSpecialtyCode: a.string(),
        institutions: a.hasMany("SpecialtyInstitution", "specialtyId"),
        programs: a.hasMany("Program", "specialtyId"),
      })
      .secondaryIndexes((index) => [
        index("sortType").sortKeys(["acgmeSpecialtyCode"]),
        index("acgmeSpecialtyCode"),
      ])
      .authorization((allow) => [
        allow.publicApiKey().to(["read"]),
        allow.group("Admin"),
      ]),
    ...Program,
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
    SpecialtyInstitution: a
      .model({
        sortType: a.string().required(),
        specialtyId: a.id().required(),
        institutionId: a.id().required(),
        specialty: a.belongsTo("Specialty", "specialtyId"),
        institution: a.belongsTo("Institution", "institutionId"),
      })
      .authorization((allow) => [
        allow.publicApiKey().to(["read"]),
        allow.group("Admin"),
      ]),
    ...InterviewInvite,
    customQuery: a
      .query()
      .returns(a.ref("InterviewInvite").array())
      .authorization((allow) => [allow.publicApiKey()])
      .handler(
        a.handler.custom({
          entry: "./searchInterviewInvites.js",
          dataSource: a.ref("InterviewInvite"),
        })
      ),
    Application: a
      .model({
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        status: a.enum([
          "applied",
          "interviewInvited",
          "interviewed",
          "withdrawn",
          "rejected",
          "waitlisted",
          "matched",
        ]),
      })
      .authorization((allow) => [
        allow.publicApiKey().to(["read"]),
        allow.group("Admin"),
        allow.owner(),
      ]),
    ...UserProfile,
    UserProfileProgram: a
      .model({
        userProfileId: a.id().required(),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
      })
      .secondaryIndexes((index) => [index("userProfileId")])
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    // searchUserProfiles: a
    //   .query()
    //   .returns(a.ref("UserProfile").array())
    //   .authorization((allow) => [allow.publicApiKey()])
    //   .handler(
    //     a.handler.custom({
    //       entry: "./searchUserProfileResolver.js",
    //       dataSource: "osDataSource",
    //     })
    //   ),
    InterviewImpression: a
      .model({
        sortType: a.string().required(),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        positives: a.string(),
        negatives: a.string(),
        howInterviewDayAffectsRank: a.string(),
        gift: a.string(),
        timeGiftReceived: a.string(),
        comments: a.hasMany("Comment", "interviewImpressionId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    LOIResponse: a
      .model({
        sortType: a.string().required(),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        intent: a.boolean(),
        sentTo: a.string(),
        dateSent: a.date(),
        response: a.boolean(),
        responseTone: a.string(),
        timeBetweenSentAndResponse: a.string(),
        mentionedTopChoice: a.boolean(),
        comments: a.hasMany("Comment", "LOIResponseId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    SecondLook: a
      .model({
        sortType: a.string().required(),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        setting: a.string(),
        date: a.date(),
        bearingOnRank: a.string(),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    FameShame: a
      .model({
        sortType: a.string().required(),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        fame: a.string(),
        shame: a.string(),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    InterviewLogistics: a
      .model({
        sortType: a.string().required(),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        schedulerPlatform: a.string(),
        ivFormat: a.string(),
        timeSlots: a.string(),
        ivPlatform: a.string(),
        openIVDates: a.date().array(),
        interviewInviteId: a.id().required(),
        interviewInvite: a.belongsTo("InterviewInvite", "interviewInviteId"),
      })
      .authorization((allow) => [
        allow.publicApiKey().to(["read"]),
        allow.group("Admin"),
        allow.group("Moderator"),
        allow.owner(),
      ]),
    UserProgramInput: a
      .model({
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        content: a.string(),
        userProgramInputType: a.enum([
          "fame",
          "shame",
          "schedulerPlatform",
          "ivFormat",
          "timeSlots",
          "ivPlatform",
        ]),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    ...Comparison,
    ...ProgramComparison,
    InterviewRejection: a
      .model({
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        date: a.datetime().required(),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    InterviewWithdrawal: a
      .model({
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        date: a.datetime().required(),
        reason: a.string(),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    M4InternImpression: a
      .model({
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        positiveImpression: a.string(),
        negativeImpression: a.string(),
        comments: a.hasMany("Comment", "M4InternImpressionId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    Malignant: a
      .model({
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        malignant: a.enum(["Yes", "No", "Maybe"]),
        source: a.string(),
        explanation: a.string(),
        comments: a.hasMany("Comment", "malignantId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    ScheduleDetails: a
      .model({
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        longOvernightCall: a.string(),
        scheduleContinuity: a.string(),
        locations: a.string(),
        emr: a.string(),
        startDateOrientation: a.date(),
        visaInfo: a.string(),
        union: a.string(),
        midlevel: a.string(),
        ancillary: a.string(),
        teamRatios: a.string(),
        internCap: a.string(),
        admittingSystem: a.string(),
        icuHours: a.string(),
        nightFloat: a.string(),
        sickCallSystem: a.string(),
        moonlighting: a.string(),
        stayUntilSignout: a.string(),
        didactics: a.string(),
        vacationHolidays: a.string(),
        gym: a.string(),
        food: a.string(),
        salary: a.string(),
        comments: a.hasMany("Comment", "scheduleDetailsId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    PostIVCommunication: a
      .model({
        userProfileId: a.id().required(),
        userProfile: a.belongsTo("UserProfile", "userProfileId"),
        programId: a.id().required(),
        program: a.belongsTo("Program", "programId"),
        communicationReceived: a.string(),
        thankYouLetterPolicy: a.string(),
        rankImpact: a.string(),
        source: a.string(),
        comments: a.hasMany("Comment", "postIVCommunicationId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    ...RankList,
    ...RankListProgram,
    State: a
      .model({
        name: a.string().required(),
        cities: a.hasMany("City", "stateId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    City: a
      .model({
        name: a.string(),
        stateId: a.id().required(),
        state: a.belongsTo("State", "stateId"),
        cityUserInputs: a.hasMany("CityUserInput", "cityId"),
      })
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    CityUserInput: a
      .model({
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
      .authorization((allow) => [allow.group("Admin"), allow.owner()]),
    ...Comment,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
