const axios = require("axios");
// ! Need to be able to access the .env file
const dotenv = require("dotenv");

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

async function fetchFacebookData(url) {
  const endpoint = `https://graph.facebook.com/v12.0/?id=${encodeURIComponent(
    url
  )}&scrape=true&access_token=${accessToken}`;
  try {
    const response = await axios.post(endpoint);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Failed to scrape:", error);
  }
}

fetchFacebookData("https://wiseduckdev.vercel.app/gpts/database");
