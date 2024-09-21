import { EmailService } from "./services/EmailService";
import { SMSService } from "./services/SMSService";
import { PushNotificationService } from "./services/PushNotificationService";

export class NotificationFacade {
  private emailService: EmailService;
  private smsService: SMSService;
  private pushService: PushNotificationService;

  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SMSService();
    this.pushService = new PushNotificationService();
  }

  sendEmail(to: string, subject: string, body: string): void {
    this.emailService.send(to, subject, body);
  }

  sendSMS(to: string, message: string): void {
    this.smsService.send(to, message);
  }

  sendPushNotification(userId: string, message: string): void {
    this.pushService.send(userId, message);
  }

  sendAll(
    email: string,
    phone: string,
    userId: string,
    subject: string,
    message: string
  ): void {
    this.sendEmail(email, subject, message);
    this.sendSMS(phone, message);
    this.sendPushNotification(userId, message);
  }
}
