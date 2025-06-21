import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, email, phone, topic, description, message } = req.body;

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev',
                to: [email],
                subject: 'New Contact Form Submission',
                html: `
          <h3>New Message from Contact Form</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Topic:</strong> ${topic}</p>
          <p><strong>Role:</strong> ${description}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
            }),
        });

        const data = await response.json();
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Email sending failed:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
