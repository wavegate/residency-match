import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
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
  Program: a
    .model({
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
    })
    .secondaryIndexes((index) => [
      index("sortType").sortKeys(["name"]),
      index("nrmpProgramCode"),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
    ]),
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
  InterviewInvite: a
    .model({
      anonymous: a.boolean(),
      img: a.enum(["nonUSIMG", "USIMG"]),
      sortType: a.string().required(),
      inviteDateTime: a.datetime().required(),
      geographicPreference: a.boolean(),
      signal: a.boolean(),
      location: a.enum(["IS", "OOS"]),
      programId: a.id().required(),
      program: a.belongsTo("Program", "programId"),
      additionalComments: a.string(),
      medicalDegree: a.ref("MedicalDegree"),
      step1Score: a.string(),
      step2Score: a.string(),
      comlex1Score: a.string(),
      comlex2Score: a.string(),
      visaRequired: a.boolean(),
      subI: a.boolean(),
      home: a.boolean(),
      yearOfGraduation: a.integer(),
      greenCard: a.boolean(),
      away: a.boolean(),
    })
    .secondaryIndexes((index) => [
      index("sortType").sortKeys(["inviteDateTime"]),
    ])
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.group("Moderator"),
      allow.owner(),
    ]),
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
  UserProfile: a
    .model({
      applications: a.hasMany("Application", "userProfileId"),
      sortType: a.string().required(),
      isProfile: a.boolean(),
      step2CSPathway: a.enum([
        "pathway1",
        "pathway2",
        "pathway3",
        "pathway4",
        "pathway5",
        "pathway6",
      ]),
      schoolRanking: a.enum(["top20", "top50", "mid", "low", "unranked"]),
      yearOfGraduation: a.integer(),
      monthsOfUSCE: a.integer(),
      ecfmgCertified: a.boolean(),
      visaRequired: a.boolean(),
      location: a.string(),
      avatarImage: a.string(),
      graduateType: a.enum(["US", "IMG"]),
      medicalDegree: a.ref("MedicalDegree"),
      codeName: a.string(),
      step1ScorePass: a.boolean(),
      step1Score: a.integer(),
      step2Score: a.integer(),
      step3Score: a.integer(),
      comlex1ScorePass: a.boolean(),
      comlex2Score: a.integer(),
      redFlags: a.boolean(),
      redFlagExplanation: a.string(),
      aoa: a.boolean(),
      sigmaSigmaPi: a.boolean(),
      goldHumanism: a.boolean(),
      numPublications: a.integer(),
      numWorkExperiences: a.integer(),
      numVolunteerExperiences: a.integer(),
      classRank: a.enum(["top10", "top25", "top50", "bottom50"]),
      otherDegrees: a.string(),
      numApplications: a.integer(),
      numInterviews: a.integer(),
      numWithdrawn: a.integer(),
      numRejected: a.integer(),
      numWaitlisted: a.integer(),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.owner(),
    ]),
});

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
