import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
  catId: {
        type: String,
        unique: true,
        required: [true, 'Please provide catId']
      },
    category: {
      type: String,
      required: [true, 'Please provide category']
    },
  },
  { timestamps: true }
)

export default mongoose.model('Category', CategorySchema)