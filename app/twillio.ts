import { Response } from "express";
import getTodaysRate from "./getForex";
const twilio = require("twilio");
require("dotenv").config();

async function sendSMS() {
  const accountSid = process.env.ACCOUNTSID;
  const authToken = process.env.AUTHTOKEN;

  const todaysRate = await getTodaysRate();

  const client = twilio(accountSid, authToken);
  const messageResponse = await client.messages.create({
    from: process.env.FROMNUMBER,
    to: process.env.TONUMBER,
    body: todaysRate,
  });
}

export default sendSMS;
