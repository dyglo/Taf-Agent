const nodemailer = require('nodemailer');
const { Email_User, Email_Password } = require('../utils/config');

class SenderEmailAgent {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: Email_User,
                pass: Email_Password
            }
        });
    }

    async sendEmail(recipient, subject, content) {
        try {
            console.log("[SenderEmailAgent] Preparing to send email...");
            
            const mailOptions = {
                from: Email_User,
                to: recipient,
                subject: subject,
                html: content,
                text: this.stripHtml(content)
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log("[SenderEmailAgent] Email sent successfully:", info.messageId);
            return true;

        } catch (error) {
            console.error(`[SenderEmailAgent] Error sending email: ${error.message}`);
            return false;
        }
    }

    stripHtml(html) {
        return html
            .replace(/<style[^>]*>[\s\S]*?<\/style[^>]*>/gi, '')
            .replace(/<head[^>]*>[\s\S]*?<\/head[^>]*>/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }
}

module.exports = SenderEmailAgent;
