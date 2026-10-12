import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
        default: null,
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   
    type: {
        type: String,
        required: true,
        enum: ['like', 'comment', 'follow'],
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true,
        default: null,
    },
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;