import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import csv from "csv-parser";
import fs from "fs";

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Function to create a new specialty
const createNewProgram = async (input) => {
  try {
    client.models.Program.create(input, {
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

const run = async () => {
  try {
    await signIn({
      username: "cc.frankee@gmail.com",
      password: "testPass82@",
    });

    const programs = [];

    // Read the CSV file
    fs.createReadStream("residency match data - programs.csv")
      .pipe(csv())
      .on("data", async (row) => {
        const name = row.name;
        const code = row.code;
        const institutionCode = code.slice(0, 4);
        const specialtyCode = code.slice(4, 7);
        const type = code.slice(7, 8);
        if (specialtyCode === "140") {
          programs.push({
            name,
            institutionCode,
            specialtyCode,
            code,
            type,
          });
        }
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");
        console.log(programs.length);
        for (let i = 0; i < programs.length; i++) {
          try {
            let institutionId;
            const institutionResult =
              await client.models.Institution.listInstitutionByInstitutionCode(
                {
                  institutionCode: programs[i].institutionCode,
                },
                {
                  authMode: "userPool",
                }
              );
            if (institutionResult?.data?.length > 0) {
              institutionId = institutionResult.data[0].id;
            } else {
              fs.appendFileSync(
                "missing_institutions.txt",
                `Index: ${i}, programId: ${programs[i].code}, institution code: ${programs[i].institutionCode}\n`
              );
              continue;
            }
            let specialtyId;
            const specialtyResult =
              await client.models.Specialty.listSpecialtyByAcgmeSpecialtyCode(
                {
                  acgmeSpecialtyCode: programs[i].specialtyCode,
                },
                {
                  authMode: "userPool",
                }
              );
            if (specialtyResult?.data?.length > 0) {
              specialtyId = specialtyResult.data[0].id;
            } else {
              fs.appendFileSync(
                "missing_specialties.txt",
                `Index: ${i}, programId: ${programs[i].code}, specialty code: ${programs[i].specialtyCode}\n`
              );
              continue;
            }
            if (institutionId && specialtyId) {
              createNewProgram({
                sortType: "Program",
                name: programs[i].name,
                nrmpProgramCode: programs[i].code,
                type: programs[i].type,
                institutionId,
                specialtyId,
              });
            }
          } catch (e) {
            console.log(e);
          }
          console.log(`Program ${i} created`);
          await delay(500);
        }
        console.log("All institutions processed");
      });
  } catch (error) {
    console.error("Error during sign-in or processing:", error);
  }
};

run();
