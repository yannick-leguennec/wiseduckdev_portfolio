// ! The following variables needs to be desactivated in the generate-sitemap.ts script first, before running this script
// const fs = require("fs").promises;
// const path = require("path");

// Define the correct order and spelling of keys
const expectedKeys = [
  "id",
  "category",
  "title",
  "subtitle",
  "image",
  "alt",
  "path",
  "openAi_link",
  "card_description",
  "page_description",
  "modes",
  "meta_title_page",
  "meta_description_page",
  "meta_keywords",
  "og_title",
  "og_description",
  "og_url",
  "og_image",
  "twitter_title",
  "twitter_description",
  "twitter_image",
  "twitter_image_alt",
  "hashtag",
];

// Function to read the JSON file and parse it asynchronously
const readJsonFile = async (filePath: string): Promise<any> => {
  const absolutePath = path.resolve(filePath);
  const fileContents = await fs.readFile(absolutePath, "utf8");
  return JSON.parse(fileContents);
};

// Function to check the objects in the given array
const checkObjects = (objects: any[], language: string) => {
  objects.forEach((obj, index) => {
    const keys = Object.keys(obj);
    const missingKeys = expectedKeys.filter((key) => !keys.includes(key));
    const extraKeys = keys.filter((key) => !expectedKeys.includes(key));

    if (missingKeys.length > 0 || extraKeys.length > 0) {
      console.log(`Discrepancy found in ${language} object at index ${index}:`);
      if (missingKeys.length > 0) {
        console.log(`- Missing keys: ${missingKeys.join(", ")}`);
      }
      if (extraKeys.length > 0) {
        console.log(`- Extra or misspelled keys: ${extraKeys.join(", ")}`);
      }
    }
  });
};

// Main function to execute the script asynchronously
const main = async () => {
  const filePath = "./public/docs/GPTs/gpts.json"; // Update the path to your JSON file
  try {
    const data = await readJsonFile(filePath);

    // Check the objects in both the EN and FR arrays
    checkObjects(data.EN, "EN");
    checkObjects(data.FR, "FR");
  } catch (error) {
    console.error("Error reading or processing file:", error);
  }
};

// Execute the script
main();
