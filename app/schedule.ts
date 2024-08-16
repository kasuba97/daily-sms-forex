import schedule from "node-schedule";
import sendSMS from "./twillio";

const scheduleDailySMS = () => {
  // Schedule the job to run every day at 7:00 AM
  schedule.scheduleJob("0 7 * * *", async () => {
    try {
      await sendSMS();
    } catch (error) {
      console.error("Error scheduling daily SMS:", error);
    }
  });
};

export default scheduleDailySMS;
