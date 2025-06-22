import fetch from 'node-fetch';
import userEmail from '../userEmail.js';
import adminEmail from '../adminEmail.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

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

        return res.status(200).json({
            success: true,
            message: 'Emails sent successfully.',
            adminEmailId: adminResult.id,
            userEmailId: userResult.id,
        });
    } catch (error) {
        console.error('Email sending failed:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}