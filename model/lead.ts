import { Schema, model, models } from "mongoose";

const LeadSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "First name is required!"],
  },
  lastname: {
    type: String,
    required: [true, "Last name is required!"],
  },
  email: {
    type: String,
    required: [true, "email is required!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required!"],
  },
  destination: {
    type: String,
    required: [true, "Destination is required!"],
  },
  propertyType: {
    type: String,
    required: [true, "Property type is required!"],
  },
  noBedrooms: {
    type: Number,
    required: [true, "Number of bedrooms is required!"],
  },
  //Todo: check if delivery is named correctly
  delivery: {
    type: String,
    required: [true, "Delivery is required!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lead = models.Lead || model("Lead", LeadSchema, "leads");

export default Lead;
