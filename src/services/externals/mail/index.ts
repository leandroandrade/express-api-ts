interface MailTo {
    name: string;
    email: string;
}

interface MessageMail {
    subject: string;
    body: string;
    attachment?: string[];
}

export interface MessageDTO {
    to: MailTo;
    message: MessageMail;
}

export default interface Mail {
    sendEmail({ to, message }: MessageDTO): Promise<void>;
}
