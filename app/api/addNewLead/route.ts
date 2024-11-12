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

    const results = await Promise.all([
      addToDB(lead),
      sendEmail(lead),
      addToExcelSheet(lead),
    ]);

    const [dbResult, emailResult, excelResult] = results;

    // If any of the results are falsy, return failure status
    if (!dbResult || !emailResult || !excelResult) {
      return NextResponse.json(
        { message: "Failed to process request" },
        { status: 500 }
      );
    }

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
