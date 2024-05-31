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
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  Specialty: a
    .model({
      name: a.string(),
      acgmeSpecialtyCode: a.string(),
      institutions: a.hasMany("SpecialtyInstitution", "specialtyId"),
      programs: a.hasMany("Program", "specialtyId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
    ]),
  Program: a
    .model({
      name: a.string(),
      nrmpProgramCode: a.string(),
      type: a.ref("ProgramType"),
      institutionId: a.id().required(),
      institution: a.belongsTo("Institution", "institutionId"),
      specialtyId: a.id().required(),
      specialty: a.belongsTo("Specialty", "specialtyId"),
      interviewInvites: a.hasMany("InterviewInvite", "programId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
    ]),
  Institution: a
    .model({
      name: a.string(),
      institutionCode: a.string(),
      programs: a.hasMany("Program", "institutionId"),
      specialties: a.hasMany("SpecialtyInstitution", "institutionId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
    ]),
  SpecialtyInstitution: a
    .model({
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
      inviteDateTime: a.datetime().required(),
      geographicPreference: a.boolean(),
      signal: a.boolean(),
      instate: a.boolean(),
      programId: a.id(),
      program: a.belongsTo("Program", "programId"),
      impression: a.string(),
      additionalComments: a.string(),
      userProfile: a.hasOne("UserProfile", "interviewInviteId"),
    })
    .authorization((allow) => [
      allow.publicApiKey().to(["read"]),
      allow.group("Admin"),
      allow.group("Moderator"),
      allow.owner(),
    ]),
  UserProfile: a
    .model({
      interviewInviteId: a.id(),
      interviewInvite: a.belongsTo("InterviewInvite", "interviewInviteId"),
      graduateType: a.enum(["US", "IMG"]),
      medicalDegree: a.ref("MedicalDegree"),
      codeName: a.string(),
      step1Score: a.integer(),
      step2Score: a.integer(),
      comlex1Score: a.integer(),
      comlex2Score: a.integer(),
      redFlags: a.boolean(),
      aoa: a.boolean(),
      sigmaSigmaPi: a.boolean(),
      goldHumanism: a.boolean(),
      numPublicationsPosters: a.integer(),
      numWorkExperiences: a.integer(),
      numVolunteerExperiences: a.integer(),
      classRank: a.float(),
      numApplications: a.integer(),
      numInterviews: a.integer(),
      numWithdrawals: a.integer(),
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
