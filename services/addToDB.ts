import { connectToDB } from "@/lib/mongodb";
import Lead from "@/model/lead";

interface leadInterface {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  destination: string;
  propertyType: string;
  noBedrooms: number;
  delivery: string;
}

export default async function addToDB(leadInp: leadInterface) {
  try {
    console.log("Adding to DB");
    await connectToDB();

    console.log("Creating a lead");
    const lead = new Lead(leadInp);

    console.log(lead);

    console.log("Saving lead");
    const res = await lead.save();

    console.log(`Result of saving lead: ${res}`);

    console.log("Lead saved");

    if (res) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}
