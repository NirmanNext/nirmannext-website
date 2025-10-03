const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.verifyRecaptcha = functions.https.onCall(async (data, context) => {
  const token = data.token;
  const secret = functions.config().recaptcha.secret;

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`
  });

  const result = await response.json();
  return result;
});
