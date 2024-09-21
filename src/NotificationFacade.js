"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFacade = void 0;
const EmailService_1 = require("./services/EmailService");
const SMSService_1 = require("./services/SMSService");
const PushNotificationService_1 = require("./services/PushNotificationService");
class NotificationFacade {
    constructor() {
        this.emailService = new EmailService_1.EmailService();
        this.smsService = new SMSService_1.SMSService();
        this.pushService = new PushNotificationService_1.PushNotificationService();
    }
    sendEmail(to, subject, body) {
        this.emailService.send(to, subject, body);
    }
    sendSMS(to, message) {
        this.smsService.send(to, message);
    }
    sendPushNotification(userId, message) {
        this.pushService.send(userId, message);
    }
    sendAll(email, phone, userId, subject, message) {
        this.sendEmail(email, subject, message);
        this.sendSMS(phone, message);
        this.sendPushNotification(userId, message);
    }
}
exports.NotificationFacade = NotificationFacade;
