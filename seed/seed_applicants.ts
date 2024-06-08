import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
// import outputs from "../amplify_outputs.json";
import outputs from "../prod_amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import csv from "csv-parser";
import fs from "fs";

Amplify.configure(outputs);

const client = generateClient<Schema>();

// Function to create a new specialty
const createNewProgram = async (input) => {
  try {
    const test = await client.models.UserProfile.create(input, {
      authMode: "userPool",
    });
    if (test.errors) {
      throw new Error(JSON.stringify(test.errors));
    }
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

    const ivs = [];

    // Read the CSV file
    fs.createReadStream("residency match data - applicants.csv")
      .pipe(csv())
      .on("data", async (row) => {
        const myObj = { ...row };

        if (myObj.medicalDegree === "US MD") {
          myObj.medicalDegree = "MD";
        } else if (myObj.medicalDegree === "US DO") {
          myObj.medicalDegree = "DO";
        }

        if (myObj.step1ScorePass.toLowerCase() === "pass") {
          myObj.step1ScorePass = true;
        }

        if (myObj.comlex1ScorePass.toLowerCase() === "pass") {
          myObj.comlex1ScorePass = true;
        }

        if (myObj.step2CSPathway) {
          myObj.step2CSPathway = myObj.step2CSPathway
            .toLowerCase()
            .replaceAll(" ", "");
        }

        if (myObj.redFlags.toLowerCase() === "yes") {
          myObj.redFlags = true;
        } else if (myObj.redFlags.toLowerCase() === "no") {
          myObj.redFlags = false;
        }

        if (myObj.aoa.toLowerCase() === "yes") {
          myObj.aoa = true;
        } else if (myObj.aoa.toLowerCase() === "no") {
          myObj.aoa = false;
        }

        if (myObj.sigmaSigmaPhi.toLowerCase() === "yes") {
          myObj.sigmaSigmaPhi = true;
        } else if (myObj.sigmaSigmaPhi.toLowerCase() === "no") {
          myObj.sigmaSigmaPhi = false;
        }

        if (myObj.goldHumanism.toLowerCase() === "yes") {
          myObj.goldHumanism = true;
        } else if (myObj.goldHumanism.toLowerCase() === "no") {
          myObj.goldHumanism = false;
        }

        if (myObj.ecfmgCertified.toLowerCase() === "certified") {
          myObj.ecfmgCertified = true;
        } else if (myObj.ecfmgCertified.toLowerCase() === "not certified") {
          myObj.ecfmgCertified = false;
        }

        if (myObj.visaRequired.toLowerCase() === "yes") {
          myObj.visaRequired = true;
        } else if (myObj.visaRequired.toLowerCase() === "no") {
          myObj.visaRequired = false;
        }

        for (const key in myObj) {
          if (myObj[key] === "") {
            myObj[key] = undefined;
          }
        }

        myObj.sortType = "UserProfile";

        myObj.isProfile = false;

        myObj.applicationYear = 2023;

        // console.log(myObj);
        ivs.push(myObj);
      })
      .on("end", async () => {
        console.log("CSV file successfully processed");
        console.log(ivs.length);
        for (let i = 0; i < ivs.length; i++) {
          try {
            const createObj = {
              ...ivs[i],
            };
            console.log(createObj);

            createNewProgram(createObj);
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
