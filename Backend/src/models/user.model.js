import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
    },
  
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
  
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],

 
  
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;