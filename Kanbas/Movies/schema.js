import mongoose from "mongoose";
const movieSchema = new mongoose.Schema(
 {
   title: String,
   movie_banner: String,
   description: String,
   director: String,
   release_date : String,
   running_time : String,

 },
 { collection: "movies" }
);
export default movieSchema;