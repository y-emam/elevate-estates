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
    await connectToDB();

    console.log("Adding lead to the database...");
    const lead = new Lead(leadInp);

    lead.save();
    console.log("Lead added successfully to the database.");

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
