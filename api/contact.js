export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // Vercel may not auto-parse body in some configurations
    let body = req.body;
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch (e) {
            return res.status(400).json({ message: 'Invalid JSON body' });
        }
    }

    const { name, email, contact, message } = body || {};

    if (!name || !email || !contact || !message) {
        return res.status(400).json({ message: 'Missing required fields', received: body });
    }

    const botToken = '8697927420:AAFjapgHaMhsgSUkckalr-fjyGu5ziEbxII';
    const chatId = '155778404';

    const text = `🚀 Новая заявка (Media CPA)!\n\nИмя: ${name}\nEmail: ${email}\nКонтакт: ${contact}\nСообщение: ${message}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json({ message: 'Success' });
        } else {
            console.error('Telegram API Error:', data);
            return res.status(500).json({ message: 'Telegram Error', details: data });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ message: 'Internal Server Error', details: error.message });
    }
}

