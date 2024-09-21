export class EmailService {
  send(to: string, subject: string, body: string): void {
    // In a real implementation, this would connect to an email service provider
    console.log(`Sending email to ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    console.log("Email sent successfully");
  }
}
