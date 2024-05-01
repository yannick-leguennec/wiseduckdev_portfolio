// require("dotenv").config();
// const fs = require("fs");
// const { google } = require("googleapis");

// // Function to authenticate Google APIs
// function authenticateGoogleAPIs() {
//   const credentialsJson = Buffer.from(
//     process.env.GOOGLE_SHEETS_CREDENTIALS_BASE64 || "",
//     "base64"
//   ).toString("utf8");
//   const credentials = JSON.parse(credentialsJson);

//   const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: [
//       "https://www.googleapis.com/auth/documents",
//       "https://www.googleapis.com/auth/spreadsheets",
//     ],
//   });

//   return auth.getClient();
// }

// // Function to read JSON data
// function readJSONGreatly(filePath) {
//   const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
//   return jsonData.EN;
// }

// // Function to map titles to categories
// function mapTitlesToCategories(categories, gpts) {
//   return categories.map((category) => {
//     const titles = gpts
//       .filter((gpt) => gpt.category.includes(category.category))
//       .map((gpt) => gpt.title);
//     return { ...category, titles };
//   });
// }

// // Function to write to Google Docs
// async function writeToGoogleDocs(data) {
//   const auth = await authenticateGoogleAPIs();
//   const docs = google.docs({ version: "v1", auth });
//   const documentId = "1MGEkCDSobIBA4oracqZphUQBa0WFTIouL53p7vW7Ubk"; // Document ID

//   // Retrieve the current content of the document to find the end index
//   try {
//     const doc = await docs.documents.get({ documentId });
//     const contentLength = doc.data.body.content.length;

//     for (const item of data) {
//       let text = `\n\n${item.category}\nDescription: ${item.description}\n\nGPTs List:\n`;

//       // Append titles in the correct order
//       item.titles.forEach((title, index) => {
//         text += `${title}\n`;
//       });

//       const requests = [
//         {
//           insertText: {
//             location: {
//               index: contentLength - 1, // Insert at the end of the document
//             },
//             text: text,
//           },
//         },
//       ];

//       // Execute batchUpdate to append text
//       await docs.documents.batchUpdate({
//         documentId,
//         requestBody: {
//           requests,
//         },
//       });
//       console.log(
//         `Successfully updated document for category ${item.category}`
//       );
//     }
//   } catch (err) {
//     console.error("Error retrieving document or updating Google Docs:", err);
//   }
// }

// // Main function to execute the workflow
// async function diamond_categories_data() {
//   const categories = readJSONGreatly("./public/docs/GPTs/gpts_categories.json");
//   const gpts = readJSONGreatly("./public/docs/GPTs/gpts.json");
//   const mappedData = mapTitlesToCategories(categories, gpts);
//   await writeToGoogleDocs(mappedData);
// }

// diamond_categories_data();
