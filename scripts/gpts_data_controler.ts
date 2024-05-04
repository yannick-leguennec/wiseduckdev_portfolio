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

// Function to validate the path key for each object
const validatePath = (objects, language) => {
  objects.forEach((obj) => {
    const expectedStart = `/${obj.category[0]}`;
    if (!obj.path.startsWith(expectedStart)) {
      console.log(
        `Path discrepancy found in ${language} object with ID ${obj.id}: Expected path to start with '${expectedStart}' but found '${obj.path}'`
      );
    }
  });
};

// Function to validate image and og_image keys for each object
const validateImages = (objects, language) => {
  objects.forEach((obj) => {
    const expectedPrefix = "/images/gpts/";
    if (
      !obj.image.startsWith(expectedPrefix) ||
      !obj.og_image.startsWith(expectedPrefix) ||
      !obj.twitter_image.startsWith(expectedPrefix)
    ) {
      console.log(
        `Image path discrepancy found in ${language} object with ID ${obj.id}: Check 'image', 'og_image' and 'twitter_image'  paths for compliance with '${expectedPrefix}'`
      );
    }
  });
};

// Function to validate the og_url for each object
const validateOgUrl = (objects, language) => {
  objects.forEach((obj) => {
    const expectedPrefix = obj.category[0];
    // Check if og_url starts with the correct category prefix
    if (!obj.og_url.startsWith(expectedPrefix)) {
      console.log(
        `URL discrepancy found in ${language} object with ID ${obj.id}: Expected og_url to start with '${expectedPrefix}' but found '${obj.og_url}'`
      );
    }
    // Check if og_url starts with a forward slash
    if (obj.og_url.startsWith("/")) {
      console.log(
        `URL format error in ${language} object with ID ${obj.id}: og_url starts with '/', which is incorrect.`
      );
    }
  });
};

// Function to validate title and description lengths
const validateLengths = (objects, language) => {
  objects.forEach((obj) => {
    if (obj.og_title && obj.og_title.length > 70) {
      console.log(
        `og:title exceeds limit in ${language} object with ID ${obj.id}`
      );
    }
    if (obj.og_description && obj.og_description.length > 200) {
      console.log(
        `og:description exceeds limit in ${language} object with ID ${obj.id}`
      );
    }
    if (obj.twitter_title && obj.twitter_title.length > 70) {
      console.log(
        `twitter:title exceeds limit in ${language} object with ID ${obj.id}`
      );
    }
    if (obj.twitter_description && obj.twitter_description.length > 200) {
      console.log(
        `twitter:description exceeds limit in ${language} object with ID ${obj.id}`
      );
    }
    if (obj.meta_description_page && obj.meta_description_page.length > 160) {
      console.log(
        `meta_description_page exceeds limit in ${language} object with ID ${obj.id}`
      );
    }
  });
};

// Function to check for the word "Canards" in the FR array
const checkForCanards = (objects, language) => {
  objects.forEach((obj, index) => {
    let fieldsContainingCanards: string[] = []; // Explicitly define the type as an array of strings
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string" && value.includes("Canards")) {
        fieldsContainingCanards.push(key);
      }
      if (typeof value === "string" && value.includes("Canard")) {
        fieldsContainingCanards.push(key);
      }
      if (typeof value === "string" && value.includes("Les Wise")) {
        fieldsContainingCanards.push(key);
      }
    }
    if (fieldsContainingCanards.length > 0) {
      console.log(
        `'Canards' found in ${language} object at index ${
          obj.id
        } in fields: ${fieldsContainingCanards.join(", ")}`
      );
    }
  });
};

// Main function to execute the script asynchronously
const main = async () => {
  const filePath = "./public/docs/GPTs/gpts.json"; // Update the path to your JSON file
  try {
    const data = await readJsonFile(filePath);

    // Check and validate the objects in both the EN and FR arrays
    checkObjects(data.EN, "EN");
    validateOgUrl(data.EN, "EN");
    validatePath(data.EN, "EN");
    validateImages(data.EN, "EN");
    // validateLengths(data.EN, "EN");

    checkObjects(data.FR, "FR");
    validateOgUrl(data.FR, "FR");
    validatePath(data.FR, "FR");
    validateImages(data.FR, "FR");
    // validateLengths(data.FR, "FR");
    checkForCanards(data.FR, "FR");
  } catch (error) {
    console.error("Error reading or processing file:", error);
  }
};

// Execute the script
main();
