import mongoose from "mongoose";

const { Schema } = mongoose;

export const urlsSchema = new Schema({
    url: { type: String, required: true },
    uid: { type: String },
    code: { type: String, required: true },
    countClick: { type: Number, default: 0 },
    passwordUrl: { type: String },
    ipUser: { type: String },
    ipAddresses: [{ type: String }],
    geoLocation: { type: String },
    clickLimit: { type: Number },
    expiresAt: { type: Date },
    date: { type: Date, default: Date.now }
});

urlsSchema.pre('save', function (next) {
    if (!this.uid && !this.expiresAt) {
        this.expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    }
    next();
});

const urls = mongoose.model('urls', urlsSchema);
export default urls;

