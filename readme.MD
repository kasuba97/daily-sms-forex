# Daily SMS Forex Update

## Overview

This Express application schedules and sends daily SMS updates with foreign exchange rates using the Zanaco API and Twilio. The application uses the `node-schedule` library to trigger SMS messages at a specific time each day.

## Features

- **Daily Forex Updates**: Retrieves foreign exchange rates from the Zanaco API and sends them via SMS using Twilio.
- **Error Handling**: Manages errors related to API calls and SMS sending.

## Requirements

- Node.js (>= 14.x)
- Twilio Account
- Zanaco API credentials
- Environment variables for Twilio and Zanaco API

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kasuba97/daily-sms-forex.git
   cd daily-sms-forex
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Create a `.env` file** in the root directory with the following content:

   ```env
   ACCOUNTSID=your_twilio_account_sid
   AUTHTOKEN=your_twilio_auth_token
   FROMNUMBER=your_twilio_phone_number
   TONUMBER=recipient_phone_number
   ZANACO_API_KEY=your_zanaco_api_key
   ```

## Usage

1. **Run the server**:

   ```bash
   yarn serve
   ```

   This will start the Express server on port 3000 and schedule the daily SMS updates.

2. **Verify the Scheduling**:

   By default, the SMS will be sent every day at 7:00 AM. For testing purposes, you may adjust the schedule to run more frequently.

## Code Overview

- **`app.ts`**: Main application file that sets up the Express server, middleware for logging and body parsing, and starts the scheduling function.
- **`sendSMS.ts`**: Contains the logic to send SMS messages using Twilio.
- **`getForex.ts`**: Retrieves foreign exchange rates from the Zanaco API.
- **`schedule.ts`**: Configures and starts the job scheduler to send SMS daily.

## Scheduling Details

- The `scheduleDailySMS` function in `schedule.ts` uses `node-schedule` to run a job every day at 8:00 AM.
- The `sendSMS` function in `sendSMS.ts` is called to send the SMS message with the latest foreign exchange rates.

## Testing

For testing purposes, you can modify the scheduling configuration in `schedule.ts` to run more frequently (e.g., every minute) and monitor the output.

## Troubleshooting

- **Check Environment Variables**: Ensure that the `.env` file contains correct Twilio credentials, Zanaco API key, and phone numbers.
- **API Keys**: Verify that the Zanaco API key is valid and has the necessary permissions.
- **Server Time**: Ensure that the server's time zone matches your desired schedule.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact [kasuba97](mailto:kasubasich@gmail.com).
