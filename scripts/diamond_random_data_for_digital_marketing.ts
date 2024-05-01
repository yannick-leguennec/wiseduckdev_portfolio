// require("dotenv").config();
// const fs = require("fs");
// const { google } = require("googleapis");

// // Function to authenticate Google Sheets API
// function authenticateGoogleSheetsRandomData() {
//   const credentialsJson = Buffer.from(
//     process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "",
//     "base64"
//   ).toString("utf8");
//   const credentials = JSON.parse(credentialsJson);

//   const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//   });

//   return google.sheets({ version: "v4", auth });
// }

// // Function to read JSON and randomize data
// async function readAndRandomizeJSON() {
//   const filePath = "./public/docs/GPTs/gpts.json";
//   const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   const data = jsonData.EN;

//   // Shuffle array to randomize order
//   for (let i = data.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [data[i], data[j]] = [data[j], data[i]]; // ES6 array destructuring swap
//   }

//   // Map data to include formatted path
//   return data.map((item) => [
//     item.id.toString(),
//     item.title,
//     `https://wiseduckdev.com/gpts${item.path}`, // Prepend the base URL to the path
//   ]);
// }

// // Function to write randomized data to Google Sheets
// async function writeToSheetRandom(data) {
//   const sheets = authenticateGoogleSheetsRandomData();
//   const spreadsheetId = "1brSszikVE5VUpERiI77MNJf_0wXgdIc8xZ8S1urbcZY";

//   const resource = {
//     values: data,
//   };

//   try {
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range: "Sheet1", // Ensure your sheet has this name or adjust as needed
//       valueInputOption: "USER_ENTERED",
//       resource,
//     });
//     console.log("Data written to sheet successfully in random order");
//   } catch (err) {
//     console.error("Error writing to sheet:", err);
//   }
// }

// // Main function to execute the workflow
// async function diamond_random_data() {
//   const randomizedData = await readAndRandomizeJSON();
//   await writeToSheetRandom(randomizedData);
// }

// diamond_random_data();
