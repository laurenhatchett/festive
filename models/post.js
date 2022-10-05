import mongoose from 'mongoose'

const Schema = mongoose.Schema


const commentSchema = new Schema ({
  text: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})


const postSchema = new Schema({
  text: String,
  details: String,
  holiday: String,
  owner: { type: Schema.Types.ObjectId, ref: "Profile"},
  category: String,
  comments:[commentSchema]
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}