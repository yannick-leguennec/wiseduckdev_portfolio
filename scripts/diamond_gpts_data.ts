// const fs = require("fs");
// const dotenv = require("dotenv");
// const { google } = require("googleapis");

// Load environment variables from .env file
dotenv.config();

//! Function to decode credentials and authenticate with Google Sheets
// function authenticateGoogleSheets() {
//   const credentialsJson = Buffer.from(
//     process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "", // Add a default value of an empty string if the environment variable is undefined
//     "base64"
//   ).toString("utf8");
//   const credentials = JSON.parse(credentialsJson);

//   const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   return google.sheets({ version: "v4", auth });
// }

// Function to authenticate Google Docs API
function authenticateGoogleDocs() {
  const credentialsJson = Buffer.from(
    process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "", // Make sure this env variable is set correctly
    "base64"
  ).toString("utf8");
  const credentials = JSON.parse(credentialsJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/documents"],
  });

  return google.docs({ version: "v1", auth });
}

// Function to read JSON data
async function readJSON() {
  const filePath = "./public/docs/GPTs/gpts.json"; // Adjust path as needed
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return jsonData.EN; // Return only the 'EN' array
}

//! Function to write data to Google Sheets
// async function writeToSheet(data) {
//   const sheets = authenticateGoogleSheets();
//   const spreadsheetId = "1CFSIlmTDlNQz7dPsYyLusH4pM1uAOW5dUY_OtdCbHPY";

//   const values = data.map((item) => [
//     item.id.toString(),
//     item.category.join(", "),
//     item.title,
//     item.page_description,
//   ]);

//   const resource = {
//     values,
//   };

//   try {
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet1", // Make sure your sheet name and range matches
//       valueInputOption: "USER_ENTERED",
//       resource,
//     });
//     console.log("Data written to sheet successfully");
//   } catch (err) {
//     console.error("Error writing to sheet:", err);
//   }
// }

//! Function to write data to Google Docs
async function writeToDoc(data) {
  const docs = authenticateGoogleDocs();
  const documentId = "15GL7ly9CDSgF5gND6g0ZdODLvAqIwRUX1uB8Ka0DDHs"; // Your Google Doc ID

  // Retrieve the document to find the end index
  const doc = await docs.documents.get({ documentId });
  const contentLength = doc.data.body.content.length;

  for (const item of data) {
    const text = `${item.id}) ${item.title}\nCategory: ${item.category.join(
      ", "
    )}\nDescription: ${item.page_description}\n\n`;

    const requests = [
      {
        insertText: {
          location: {
            index: contentLength - 1, // Place text at the end of the document
          },
          text: text,
        },
      },
    ];

    try {
      await docs.documents.batchUpdate({
        documentId,
        requestBody: {
          requests,
        },
      });
      console.log(`Successfully updated document for item ${item.title}`);
    } catch (err) {
      console.error("Error updating Google Docs:", err);
    }
  }
}

// Main function to execute the workflow
async function diamond_data() {
  const data = await readJSON();
  await writeToDoc(data);
  // await writeToSheet(data);
}

diamond_data();
