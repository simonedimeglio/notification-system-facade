"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSService = void 0;
class SMSService {
    send(to, message) {
        // In a real implementation, this would connect to an SMS gateway
        console.log(`Sending SMS to ${to}`);
        console.log(`Message: ${message}`);
        console.log("SMS sent successfully");
    }
}
exports.SMSService = SMSService;
