import Mail, { MessageDTO } from './index';

export default class EmailService implements Mail {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {
        console.log(
            `sending e-mail to ${to.email} | ${message.subject} | ${message.body}`
        );
    }
}
