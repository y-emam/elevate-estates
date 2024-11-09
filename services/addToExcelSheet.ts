import { google } from "googleapis";

interface leadInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  propertyType: string;
  noBedrooms: number;
  delivery: string;
}

export default async function addToExcelSheet(leadInp: leadInterface) {
  try {
    const createAt = new Date().toISOString();

    const client_email = process.env.SERVICE_ACCOUNT_EMAIL;
    let private_key = process.env.SERVICE_ACCOUNT_PRIVATE_KEY;

    if (!client_email || !private_key) {
      console.log("Missing environment variables");

      return false;
    }

    private_key = private_key.split(String.raw`\n`).join("\n");

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email,
        private_key,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.EXCEL_SHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1", // adjust range as needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS", // Option to insert as new rows
      requestBody: {
        values: [
          [
            createAt,
            leadInp.firstName,
            leadInp.lastName,
            leadInp.email,
            leadInp.phone,
            leadInp.destination,
            leadInp.propertyType,
            leadInp.noBedrooms,
            leadInp.delivery,
          ],
        ],
      },
    });

    if (response.status === 200 || response.statusText === "OK") {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}
