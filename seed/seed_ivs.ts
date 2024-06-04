import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import csv from "csv-parser";
import fs from "fs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Function to create a new specialty
const createNewProgram = async (input) => {
  try {
    client.models.InterviewInvite.create(input, {
      authMode: "userPool",
    });
    console.log("success");
    return "success";
  } catch (error) {
    console.error("Error creating program:", error);
    throw error;
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const run = async () => {
//   await signIn({
//     username: "cc.frankee@gmail.com",
//     password: "testPass82@",
//   });
//   const res = await client.models.Institution.list();
//   for (let i = 0; i < res.data.length; i++) {
//     console.log(res.data[i].id);
//     const result = await client.models.Institution.delete(
//       {
//         id: res.data[i].id,
//       },
//       {
//         authMode: "userPool",
//       }
//     );
//     console.log(result);
//     await delay(100);
//   }
// };

// run();

function processObject(obj) {
  const processedObj = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

      if (key === "inviteDateTime" && value) {
        value = dayjs(value).utc().startOf("day").toDate();
      } else if (value === "") {
        value = undefined;
      } else if (value === "TRUE") {
        value = true;
      } else if (value === "FALSE") {
        value = false;
      }

      processedObj[key] = value;
    }
  }

  return processedObj;
}

const run = async () => {
  try {
    await signIn({
      username: "cc.frankee@gmail.com",
      password: "testPass82@",
    });

    const ivs = [];

    // Read the CSV file
    fs.createReadStream("residency match data - ivofferbeforeclean.csv")
      .pipe(csv())
      .on("data", async (row) => {
        const programCode = row["Program Code"];
        const inviteDateTime = row["Date"];
        const location = row["Location"];
        const img = row["IMG"];
        const medicalDegree = row["Degree Type"];
        const geographicPreference = row["Geo"];
        const signal = row["Sig"];
        const step1Score = row["Step1"];
        const step2Score = row["Step2"];
        const comlex1Score = row["Comlex1"];
        const comlex2Score = row["Comlex2"];
        const visaRequired = row["Visa Required"];
        const subI = row["SubI"];
        const home = row["Home"];
        const yearOfGraduation = row["Year of graduation"];
        const greenCard = row["Green card"];
        const away = row["Away"];

        if (programCode) {
          const myObj = processObject({
            inviteDateTime,
            geographicPreference,
            location,
            img,
            programCode,
            signal,
            medicalDegree,
            step1Score,
            step2Score,
            comlex1Score,
            comlex2Score,
            visaRequired,
            subI,
            home,
            yearOfGraduation,
            greenCard,
            away,
          });

          ivs.push(myObj);
        }
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");
        console.log(ivs.length);
        for (let i = 0; i < ivs.length; i++) {
          try {
            let programId;
            const programResult =
              await client.models.Program.listProgramByNrmpProgramCode(
                {
                  nrmpProgramCode: ivs[i].programCode,
                },
                {
                  authMode: "userPool",
                }
              );
            if (programResult?.data?.length > 0) {
              programId = programResult.data[0].id;
            } else {
              fs.appendFileSync(
                "missing_programs.txt",
                `Index: ${i}, programId: ${ivs[i].programCode}\n`
              );
              continue;
            }
            const createObj = {
              anonymous: true,
              img: ivs[i].img,
              sortType: "InterviewInvite",
              inviteDateTime: ivs[i].inviteDateTime,
              geographicPreference: ivs[i].geographicPreference,
              signal: ivs[i].signal,
              location: ivs[i].location,
              programId,
              medicalDegree: ivs[i].medicalDegree,
              step1Score: ivs[i].step1Score,
              step2Score: ivs[i].step2Score,
              comlex1Score: ivs[i].comlex1Score,
              comlex2Score: ivs[i].comlex2Score,
              visaRequired: ivs[i].visaRequired,
              subI: ivs[i].subI,
              home: ivs[i].home,
              yearOfGraduation: ivs[i].yearOfGraduation,
              greenCard: ivs[i].greenCard,
              away: ivs[i].away,
            };
            if (programId) {
              createNewProgram(createObj);
            }
          } catch (e) {
            fs.appendFileSync("errors.txt", `Index: ${i}, error: ${e}}\n`);
            console.log(e);
          }
          console.log(`IV ${i} created`);
          await delay(500);
        }
        console.log("All institutions processed");
      });
  } catch (error) {
    console.error("Error during sign-in or processing:", error);
  }
};

run();
