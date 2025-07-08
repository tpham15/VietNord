import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+@.+\..+/, 'Must be a valid email address']
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  }
}, { timestamps: true });

export default mongoose.model('Contact', ContactSchema);
