"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    send(to, subject, body) {
        // In a real implementation, this would connect to an email service provider
        console.log(`Sending email to ${to}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body: ${body}`);
        console.log("Email sent successfully");
    }
}
exports.EmailService = EmailService;
