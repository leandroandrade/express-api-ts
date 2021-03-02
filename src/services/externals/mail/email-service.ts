import { Mail, MessageDTO } from './index';
import log from '../../../configurations/logger';

export class EmailService implements Mail {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {
        log.info(
            `sending e-mail to ${to.email} | ${message.subject} | ${message.body}`
        );
    }
}
