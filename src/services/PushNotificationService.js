"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationService = void 0;
class PushNotificationService {
    send(userId, message) {
        // In a real implementation, this would connect to a push notification service
        console.log(`Sending push notification to user ${userId}`);
        console.log(`Message: ${message}`);
        console.log("Push notification sent successfully");
    }
}
exports.PushNotificationService = PushNotificationService;
