import nodemailer from 'nodemailer';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;
const siteName = process.env.SITE_NAME || 'My Website';

const clean = (value, max) => String(value || '').trim().slice(0, max);
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    let body = req.body;
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch {
            return res.status(400).json({ message: 'Invalid JSON body' });
        }
    }

    const { consent } = body || {};
    const name = clean(body?.name, 120);
    const email = clean(body?.email, 254).toLowerCase();
    const contact = clean(body?.contact, 80);
    const message = clean(body?.message, 4000);

    if (!name || !email || !contact || !message || consent !== true || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    if (!smtpHost || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
        return res.status(500).json({ message: 'Service unavailable' });
    }

    const subject = `Новая заявка с сайта ${siteName}`;
    const text = [
        `Новая заявка с сайта ${siteName}`,
        '',
        `Имя: ${name}`,
        `Email: ${email}`,
        `Контакт: ${contact}`,
        '',
        'Сообщение:',
        message,
    ].join('\n');

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        await transporter.sendMail({
            from: `"${siteName}" <${mailFrom}>`,
            to: mailTo,
            replyTo: `"${name}" <${email}>`,
            subject,
            text,
            html: escapeHtml(text).replace(/\n/g, '<br />'),
        });

        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
