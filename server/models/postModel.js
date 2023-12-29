const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.objectId,
    ref: 'User',
    required: [true, 'A post must belong to a user'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userPhoto: {
    type: mongoose.Schema.objectId,
    ref: 'User',
  },
  category: {
    type: String,
    enum: [
      'General',
      'Linux',
      'Tools',
      'Pen Testing',
      'Networking',
      'Certification',
      'Mobile Hacking',
      'Studying Material',
    ],
    default: 'General',
  },
  content: {
    type: String,
    required: [true, 'Please provide some content about the subject'],
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
