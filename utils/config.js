require('dotenv').config();

// Environment Variables for API Keys
const SERP_API_KEY = process.env.SERP_API_KEY;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const Email_User = process.env.Email_User;
const Email_Password = process.env.Email_Password;

// Validate API Keys
if (!SERP_API_KEY) {
    throw new Error("SERP_API_KEY environment variable is not set.");
}
if (!GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY environment variable is not set.");
}
if (!Email_User || !Email_Password) {
    throw new Error("Email credentials are not properly set in environment variables.");
}

module.exports = {
    SERP_API_KEY,
    GOOGLE_API_KEY,
    Email_User,
    Email_Password
};
