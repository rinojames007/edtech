import mongoose, { Document } from "mongoose";
export interface adminInterface extends Document {
    username: string,
    password: string,
};
export interface userInterface extends Document {
    username: string,
    password: string,
    purchasesCourse: mongoose.Types.ObjectId[];
}
interface courseInterface extends Document {
    title: string,
    description: string,
    price: number,
    imageLink: string,
    published: boolean
};
const adminSchema = new mongoose.Schema<adminInterface>({
    username: String,
    password: String
});
const courseSchema = new mongoose.Schema<courseInterface>({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasesCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
})
export const Course = mongoose.models.Course || mongoose.model<courseInterface>('Course', courseSchema);
export const Admin = mongoose.models.Admin || mongoose.model<adminInterface>('Admin', adminSchema);
export const User = mongoose.models.User || mongoose.model('User', userSchema);
