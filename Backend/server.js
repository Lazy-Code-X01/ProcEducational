import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import userEmail from './userEmail.js';
import adminEmail from './adminEmail.js'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, email, phone, topic, description, message } = req.body;
    try {
        const adminHtml = adminEmail({
            firstName,
            lastName,
            email,
            phone,
            topic,
            description,
            message,
        });

        // Email to ADMIN
        const adminResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'info@proceduservices.com',
                to: ['info@proceduservices.com'],
                subject: '📬 New Contact Form Submission',
                html: adminHtml,
            }),
        });

        // Email to USER
        const fullName = `${firstName} ${lastName}`;
        const subject = topic;
        const userHtml = userEmail(fullName, subject);

        const userResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'info@proceduservices.com',
                to: [email],
                subject: '📩 We’ve Received Your Message',
                html: userHtml,
            }),
        });


        const adminResult = await adminResponse.json();
        const userResult = await userResponse.json();

        res.status(200).json({
            success: true,
            message: 'Emails sent successfully.',
            adminEmailId: adminResult.id,
            userEmailId: userResult.id,
        });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
