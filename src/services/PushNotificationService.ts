export class PushNotificationService {
  send(userId: string, message: string): void {
    // In a real implementation, this would connect to a push notification service
    console.log(`Sending push notification to user ${userId}`);
    console.log(`Message: ${message}`);
    console.log("Push notification sent successfully");
  }
}
