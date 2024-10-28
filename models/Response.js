import mongoose from 'mongoose'

const UsageSchema = new mongoose.Schema(
    {
        prompt_tokens: {
            type: Number,
            required: [true, 'Please provide prompt tokens']
          },

        completion_tokens: {
            type: Number,
            required: [true, 'Please provide completion tokens']
          },
    }

)
const QuestionResponseSchema = new mongoose.Schema({
  client: { type: String, required: true },
  model: { type: String, required: true },
  response: { type: String, required: true },
  usage: UsageSchema, 
});

const ResponseSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: [true, 'Please provide questionId'],
    },
    questionText: {
      type: String,
      required: [true, 'Please provide question']
    },
    category: {
      type: String,
      required: [true, 'Please provide category']
    },
    catId: {
      type: String,
    //  ref: 'Category',
      required: [true, 'Please provide catId'],
    },
    responses: [
      QuestionResponseSchema,
    ],
/*    languageModelId: {
        type: mongoose.Types.ObjectId,
        ref: 'LanguageModel',
        required: [true, 'Please provide language model'],
      },
*/
    usage: UsageSchema, 
  },
  { timestamps: true }
)

export default mongoose.model('Response', ResponseSchema)