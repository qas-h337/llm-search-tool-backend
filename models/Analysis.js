import mongoose from 'mongoose'


const Models1Schema = new mongoose.Schema({
  client: { type: String, required: true },
  model: { type: String, required: true },
  sentiment: { type: String, required: true },
});
const Models2Schema = new mongoose.Schema({
  client: { type: String, required: true },
  model: { type: String, required: true },
  reason: { type: String, required: true },
  sentiment: { type: String, required: true },
  summary: { type: String, required: true },
});

const CatResponseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  models: [Models1Schema], 
  reason: { type: String, required: true },
  
});

const summaryResponseSchema = new mongoose.Schema({
  comparison: { type: String, required: true },
  models: [Models2Schema], 
  question: { type: String, required: true },
  questionId: { type: String, required: true },
  
});



const AnalysisSchema = new mongoose.Schema(
  {
    categories: [
      CatResponseSchema,
    ],
    name: {
      type: String,
      required: [true, 'Please provide name'],
    },
    review: {
      type: String,
      required: [true, 'Please provide review'],
    },
    summary: [
      summaryResponseSchema,
    ],
  },
  { timestamps: true }
)

export default mongoose.model('Analysis', AnalysisSchema)