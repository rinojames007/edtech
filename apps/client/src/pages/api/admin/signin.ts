import { Admin } from 'db';
import jwt from 'jsonwebtoken';
import connectToDatabase from "lib/dbConnect";

import type { NextApiRequest, NextApiResponse } from "next";

const adminSecret: any = process.env.NEXT_PUBLIC_adminSecret;

connectToDatabase();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;
    const findAdmin = await Admin.findOne({ username, password });
    if(findAdmin) {
        const token = jwt.sign({ username }, adminSecret, { expiresIn: '2h'});
        res.json({ message: "user found successfully", token })
    } else {
        res.status(401).json({ message: "invalid credentials" });
    }
}
