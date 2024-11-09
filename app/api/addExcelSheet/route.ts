import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      destination,
      propertyType,
      noBedrooms,
      delivery,
    } = await req.json();
    const createAt = new Date().toISOString();

    const client_email = process.env.SERVICE_ACCOUNT_EMAIL;
    let private_key = process.env.SERVICE_ACCOUNT_PRIVATE_KEY;

    if (!client_email || !private_key) {
      return NextResponse.json(
        { message: "Missing environment variables." },
        { status: 500 }
      );
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
            firstname,
            lastname,
            email,
            phone,
            destination,
            propertyType,
            noBedrooms,
            delivery,
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Email sent", response });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Error updating the excel sheet.", error },
      { status: 500 }
    );
  }
}
