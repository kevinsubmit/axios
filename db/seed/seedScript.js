import "../connection.js";
import genres from "../../data/genres.js";
import Genre from "../../models/genre.js";

const seed = async () => {
  try {
    await Genre.insertMany(genres);
    console.log("Inserted genres")
  } catch (error) {
    console.error(error)
  }
};

seed()