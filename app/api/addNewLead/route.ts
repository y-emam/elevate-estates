import addToDB from "@/services/addToDB";
import addToExcelSheet from "@/services/addToExcelSheet";
import sendEmail from "@/services/sendEmail";
import { NextRequest, NextResponse } from "next/server";

interface lead {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  destination: string;
  propertyType: string;
  noBedrooms: number;
  delivery: string;
}
export async function POST(req: NextRequest) {
  try {
    // get request body data
    const lead: lead = await req.json();

    // add data to DB
    addToDB(lead).then((res) => {
      if (!res) {
        console.log("Failed to insert into Database.");

        return NextResponse.json(
          { message: `Failed to insert into Database.` },
          { status: 500 }
        );
      }
    });

    // Send email
    sendEmail(lead).then((res) => {
      if (!res) {
        console.log("Failed to send Email.");

        return NextResponse.json(
          { message: `Failed to send email` },
          { status: 500 }
        );
      }
    });

    // add new record to Excel sheet
    addToExcelSheet(lead).then((res) => {
      if (!res) {
        console.log("Failed to update Excel Sheet.");

        return NextResponse.json(
          { message: `Failed to update Excel Sheet.` },
          { status: 500 }
        );
      }
    });

    // Return success response
    return NextResponse.json({
      message: "Added Lead successfully to the system.",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: `Failed to add lead to the system: ${err}` },
      { status: 500 }
    );
  }
}
