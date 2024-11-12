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
    // connecting to Mongo DB
    await connectToDB();

    const lead = new Lead(leadInp);
    const res = await lead.save();

    // check if it was saved successfully
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
