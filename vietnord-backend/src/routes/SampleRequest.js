// src/models/SampleRequest.js
import mongoose from 'mongoose';

const sampleRequestSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  company:   { type: String },
  createdAt: { type: Date, default: () => new Date() }
});

const SampleRequest = mongoose.model('SampleRequest', sampleRequestSchema);
export default SampleRequest;
