import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  capital: {
    type: String,
    required: true
  }
})

const Country = mongoose.model("Country", countrySchema)

export default Country