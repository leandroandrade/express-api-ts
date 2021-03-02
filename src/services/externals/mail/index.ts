type MailTo = {
    name: string;
    email: string;
};

type MessageMail = {
    subject: string;
    body: string;
    attachment?: string[];
};

export type MessageDTO = {
    to: MailTo;
    message: MessageMail;
};

export default interface Mail {
    sendEmail({ to, message }: MessageDTO): Promise<void>;
}
