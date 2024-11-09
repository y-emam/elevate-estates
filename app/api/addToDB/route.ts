import { connectToDB } from "@/lib/mongodb";
import Lead from "@/model/lead";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // connect to DB
    await connectToDB();

    // get request body data
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

    // add item to DB

    const lead = new Lead({
      firstname,
      lastname,
      email,
      phone,
      destination,
      propertyType,
      noBedrooms,
      delivery,
    });

    lead.save();

    if (lead) {
      // Return success response
      return NextResponse.json({ message: "Added Lead successfully to DB." });
    } else {
      return NextResponse.json(
        { message: `Failed to add lead to DB` },
        { status: 500 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: `Failed to add lead to DB: ${err}` },
      { status: 500 }
    );
  }
}
