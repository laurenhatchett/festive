import mongoose from 'mongoose'

const Schema = mongoose.Schema


// const commentSchema = new Schema({
//   text: String,
//   owner: {type: Schema.Types.ObjectId, ref:"Post"}
// })


const postSchema = new Schema({
  // text: {
  //   type: String,
  //   enum: ['recipes', 'activities', 'movies']
  // },
  name: String,  //temporary
  owner: { type: Schema.Types.ObjectId, ref: "Profile"},
  category: String,
  // comments: [commentSchema]
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}