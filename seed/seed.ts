import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "../amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Function to sign in a user

// Example usage
const specialtyInput = {
  acgmeSpecialtyCode: "003",
  name: "Something Else",
};

// Function to create a new specialty
const createNewSpecialty = async (input: typeof specialtyInput) => {
  await signIn({
    username: "cc.frankee@gmail.com",
    password: "testPass82@",
  });
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

const run = async () => {
  await createNewSpecialty(specialtyInput);
};

run();
