import mongoose from 'mongoose';

const SampleRequestSchema = new mongoose.Schema({
  productId:    { type: String, required: true },
  name:         { type: String, required: true },
  email:        { type: String, required: true },
  company:      { type: String },
  details:      { type: String }
}, { timestamps: true });

export default mongoose.model('SampleRequest', SampleRequestSchema);
