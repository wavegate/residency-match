import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";
// import outputs from "../prod_amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import csv from "csv-parser";
import fs from "fs";

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Function to sign in a user

// Function to create a new specialty
const createNewSpecialty = async (input) => {
  try {
    return client.models.State.create(input, {
      authMode: "userPool",
    });
  } catch (error) {
    console.error("Error creating specialty:", error);
    throw error;
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const run = async () => {
  try {
    await signIn({
      username: "cc.frankee@gmail.com",
      password: "testPass82@",
    });

    const specialties = [];

    // Read the CSV file
    fs.createReadStream("residency match data - states.csv")
      .pipe(csv())
      .on("data", (row) => {
        specialties.push({
          sortType: "State",
          name: row["State Name"],
          abbreviation: row["State Abbreviation"],
        });
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");
        for (let i = 0; i < specialties.length; i++) {
          try {
            const result = await createNewSpecialty(specialties[i]);
            console.log(result);
            console.log("success");
          } catch (e) {
            console.log(e);
            console.log(i + "error");
          }
          console.log(`State ${i} created`);
          await delay(200);
        }
        console.log("All states processed");
      });
  } catch (error) {
    console.error("Error during sign-in or processing:", error);
  }
};

run();
