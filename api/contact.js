export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, contact, message, fileUrl } = req.body;

    const botToken = '8697927420:AAFjapgHaMhsgSUkckalr-fjyGu5ziEbxII';
    const chatId = '155778404';

    const text = `🚀 Новая заявка (Media CPA)!\n\nИмя: ${name}\nEmail: ${email}\nКонтакт: ${contact}\nСообщение: ${message}`;

    try {
        let telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        let body = {
            chat_id: chatId,
            text: text,
        };

        // If there's a file, we use sendDocument with caption
        if (fileUrl) {
            telegramUrl = `https://api.telegram.org/bot${botToken}/sendDocument`;
            body = {
                chat_id: chatId,
                document: fileUrl,
                caption: text,
            };
        }

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json({ message: 'Success' });
        } else {
            console.error('Telegram API Error:', data);
            return res.status(response.status).json({ message: 'Telegram Error', details: data });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ message: 'Internal Server Error', details: error.message });
    }
}
