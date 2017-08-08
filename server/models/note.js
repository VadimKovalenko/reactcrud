import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  text      : { type: String, required: true },
  color     : { type: String },
  createdAt : { type: Date },
  priority  : { type: Number }
});

mongoose.model('Note', NoteSchema);

