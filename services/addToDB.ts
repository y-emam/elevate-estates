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

    console.log("Saving lead");
    lead.save();

    console.log("Lead saved");
    if (lead) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}
