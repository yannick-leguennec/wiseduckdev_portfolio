// const fs = require("fs");
const { google } = require("googleapis");
// const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Function to decode credentials and authenticate with Google Sheets
function authenticateGoogleSheets() {
  const credentialsJson = Buffer.from(
    process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "", // Add a default value of an empty string if the environment variable is undefined
    "base64"
  ).toString("utf8");
  const credentials = JSON.parse(credentialsJson);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// Function to read JSON data
async function readJSON() {
  const filePath = "./public/docs/GPTs/gpts.json"; // Adjust path as needed
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return jsonData.EN; // Return only the 'EN' array
}

// Function to write data to Google Sheets
async function writeToSheet(data) {
  const sheets = authenticateGoogleSheets();
  const spreadsheetId = "1CFSIlmTDlNQz7dPsYyLusH4pM1uAOW5dUY_OtdCbHPY";

  const values = data.map((item) => [
    item.id.toString(),
    item.category.join(", "),
    item.title,
    item.page_description,
  ]);

  const resource = {
    values,
  };

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1", // Make sure your sheet name and range matches
      valueInputOption: "USER_ENTERED",
      resource,
    });
    console.log("Data written to sheet successfully");
  } catch (err) {
    console.error("Error writing to sheet:", err);
  }
}

// Main function to execute the workflow
async function diamond_data() {
  const data = await readJSON();
  await writeToSheet(data);
}

diamond_data();
