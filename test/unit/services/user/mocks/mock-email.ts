import Mail, { MessageDTO } from '../../../../../src/services/externals/mail';

export class MockEmailSpy implements Mail {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {}
}
