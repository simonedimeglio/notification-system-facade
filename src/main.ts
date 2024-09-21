import { NotificationFacade } from "./NotificationFacade";

const notifier = new NotificationFacade();

// Send individual notifications
notifier.sendEmail("user@example.com", "Welcome", "Welcome to our service!");
notifier.sendSMS("+1234567890", "Your OTP is 123456");
notifier.sendPushNotification("user123", "You have a new message");

// Send all types of notifications at once
notifier.sendAll(
  "user@example.com",
  "+1234567890",
  "user123",
  "Important Update",
  "This is an important message sent via all channels"
);
