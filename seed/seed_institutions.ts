import { auth } from "./../amplify/auth/resource";
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
const createNewSpecialty = async (input) => {
  try {
    client.models.Institution.create(input, {
      authMode: "userPool",
    });
    console.log("success");
    return "success";
  } catch (error) {
    console.error("Error creating specialty:", error);
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

    const specialties = [];

    // Read the CSV file
    fs.createReadStream("residency match data - institutions.csv")
      .pipe(csv())
      .on("data", (row) => {
        specialties.push({
          sortType: "Institution",
          name: row.name,
          institutionCode: row.institutionCode,
        });
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");
        for (let i = 0; i < specialties.length; i++) {
          try {
            await createNewSpecialty(specialties[i]);
          } catch (e) {
            console.log(e);
            console.log(i + "error");
          }
          console.log(`Institution ${i} created`);
          await delay(500);
        }
        console.log("All institutions processed");
      });
  } catch (error) {
    console.error("Error during sign-in or processing:", error);
  }
};

run();
