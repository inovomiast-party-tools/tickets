import { NextResponse } from 'next/server';
import axios from 'axios';
import connectDB from '@/lib/connect';
import Assistant from '@/models/Assistant'

export const GET = async (req) => {
    const phone = req.url.split('api/tickets/get/')[1].split('/')[0];
    console.log(phone);
    try {
        await connectDB();
        const assistant = await Assistant.find({ "assistantPhone": phone });
        if (assistant) {
            const assistantId = assistant[0].assistantId;
            return NextResponse.json({id: assistantId})
        }
    } catch (error) {
        return NextResponse.json({ "response": error.message })
    }
}