import Mail, { MessageDTO } from '../../../../../src/services/externals/mail';

export class MockEmail implements Mail {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {
    }
}
