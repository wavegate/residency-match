import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import csv from "csv-parser";
import fs from "fs";

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Function to sign in a user

// Example usage
const specialtyInput = {
  acgmeSpecialtyCode: "003",
  name: "Something Else",
  sortType: "Specialty",
};

// Function to create a new specialty
const createNewSpecialty = async (input: typeof specialtyInput) => {
  try {
    client.models.Specialty.create(input, {
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

const run = async () => {
  try {
    await signIn({
      username: "cc.frankee@gmail.com",
      password: "testPass82@",
    });

    const specialties = [];

    // Read the CSV file
    fs.createReadStream("residency match data - specialties.csv")
      .pipe(csv())
      .on("data", (row) => {
        specialties.push({
          sortType: "Specialty",
          acgmeSpecialtyCode: row.acgmeSpecialtyCode,
          name: row.name,
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
          console.log(`Specialty ${i} created`);
          await delay(500);
        }
        console.log("All specialties processed");
      });
  } catch (error) {
    console.error("Error during sign-in or processing:", error);
  }
};

run();
