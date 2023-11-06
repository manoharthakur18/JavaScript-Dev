const mongooes = require("mongoose");

const PostSchema = new mongooes.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongooes.model("Post", PostSchema);
