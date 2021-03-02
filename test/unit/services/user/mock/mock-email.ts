import Mail, { MessageDTO } from '../../../../../src/services/externals/mail';

export default class MockEmail implements Mail {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {
        console.log(to, message);
    }
}
