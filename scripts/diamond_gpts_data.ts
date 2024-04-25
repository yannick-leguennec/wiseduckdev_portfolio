// const fs = require("fs");
// const dotenv = require("dotenv");
// const { google } = require("googleapis");

// // Load environment variables from .env file
// dotenv.config();

// //! Function to decode credentials and authenticate with Google Sheets
// // function authenticateGoogleSheets() {
// //   const credentialsJson = Buffer.from(
// //     process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "", // Add a default value of an empty string if the environment variable is undefined
// //     "base64"
// //   ).toString("utf8");
// //   const credentials = JSON.parse(credentialsJson);

// //   const auth = new google.auth.GoogleAuth({
// //     credentials,
// //     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// //   });

// //   return google.sheets({ version: "v4", auth });
// // }

// // Function to authenticate Google Docs API
// function authenticateGoogleDocs() {
//   const credentialsJson = Buffer.from(
//     process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "", // Make sure this env variable is set correctly
//     "base64"
//   ).toString("utf8");
//   const credentials = JSON.parse(credentialsJson);

//   const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/documents"],
//   });

//   return google.docs({ version: "v1", auth });
// }

// // Function to read JSON data
// async function readJSON() {
//   const filePath = "./public/docs/GPTs/gpts.json"; // Adjust path as needed
//   const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   return jsonData.EN; // Return only the 'EN' array
// }

// //! Function to write data to Google Sheets
// // async function writeToSheet(data) {
// //   const sheets = authenticateGoogleSheets();
// //   const spreadsheetId = "1CFSIlmTDlNQz7dPsYyLusH4pM1uAOW5dUY_OtdCbHPY";

// //   const values = data.map((item) => [
// //     item.id.toString(),
// //     item.category.join(", "),
// //     item.title,
// //     item.page_description,
// //   ]);

// //   const resource = {
// //     values,
// //   };

// //   try {
// //     await sheets.spreadsheets.values.append({
// //       spreadsheetId,
// //       range: "Sheet1", // Make sure your sheet name and range matches
// //       valueInputOption: "USER_ENTERED",
// //       resource,
// //     });
// //     console.log("Data written to sheet successfully");
// //   } catch (err) {
// //     console.error("Error writing to sheet:", err);
// //   }
// // }

// async function writeToSheet(data) {
//   const docs = authenticateGoogleDocs();
//   const documentId = "15GL7ly9CDSgF5gND6g0ZdODLvAqIwRUX1uB8Ka0DDHs";

//   try {
//     let doc = await docs.documents.get({ documentId });
//     let contentLength = doc.data.body.content.reduce(
//       (total, content) => total + (content.endIndex || 0),
//       0
//     );

//     for (const item of data) {
//       const text = `${item.id}) ${item.title}\nCategory: ${item.category.join(
//         ", "
//       )}\nDescription: ${item.page_description}\n\n`;

//       const requests = [
//         {
//           insertText: {
//             location: {
//               index: contentLength, // Append at the current end of the document
//             },
//             text: text,
//           },
//         },
//       ];

//       await docs.documents.batchUpdate({
//         documentId,
//         requestBody: { requests },
//       });
//       console.log(`Successfully updated document for item ${item.title}`);
//       contentLength += text.length; // Update contentLength to new end of document after insertion
//     }
//   } catch (err) {
//     console.error("Error retrieving document or updating Google Docs:", err);
//   }
// }

// //! Function to write data to Google Docs
// async function writeToGoogleDocs(data) {
//   const docs = authenticateGoogleDocs();
//   const documentId = "15GL7ly9CDSgF5gND6g0ZdODLvAqIwRUX1uB8Ka0DDHs";

//   let counter = 0;
//   const totalDataCount = data.length;
//   console.log(`Total data count: ${totalDataCount}`);

//   for (let i = totalDataCount - 1; i >= 0; i--) {
//     const item = data[i];
//     const text = `${i + 1}) ${item.title}\nCategory: ${item.category.join(
//       ", "
//     )}\nDescription: ${item.page_description}\n\n`;

//     const requests = [
//       {
//         insertText: {
//           location: { index: 1 },
//           text: text,
//         },
//       },
//     ];

//     try {
//       await docs.documents.batchUpdate({
//         documentId,
//         requestBody: { requests },
//       });
//       console.log(`Successfully updated document for item ${item.title}`);
//       counter++;

//       if (counter % 50 === 0) {
//         console.log("Reached 50 requests, pausing for a minute...");
//         await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait for 60 seconds
//       }
//     } catch (err) {
//       console.error("Error updating Google Docs:", err);
//     }
//   }
// }

// // Main function to execute the workflow
// async function diamond_data() {
//   const data = await readJSON();
//   await writeToGoogleDocs(data);
//   // await writeToSheet(data);
// }

// diamond_data();
