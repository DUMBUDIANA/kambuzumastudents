import mongoose from "mongoose";

const vanSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    button: {
        type: String,
        required: true,
    }
});

export default mongoose.model("vans", vanSchema)