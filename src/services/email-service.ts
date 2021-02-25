interface MailTo {
    name: string;
    email: string;
}

interface MessageMail {
    subject: string;
    body: string;
    attachment?: string[];
}

interface MessageDTO {
    to: MailTo;
    message: MessageMail;
}

export default class EmailService {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {
        console.log(
            `sending e-mail to ${to.email} | ${message.subject} | ${message.body}`
        );
    }
}
