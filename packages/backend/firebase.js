const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceaccount = "./creds.json";

initializeApp({
  credential: cert(serviceaccount),
});
const db = getFirestore();

module.exports = { db };
