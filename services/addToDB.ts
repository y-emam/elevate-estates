import { connectToDB } from "@/lib/mongodb";
import Lead from "@/model/lead";

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

export default async function addToDB(leadInp: leadInterface) {
  try {
    await connectToDB();

    const lead = new Lead(leadInp);

    lead.save();

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
