export class SMSService {
  send(to: string, message: string): void {
    // In a real implementation, this would connect to an SMS gateway
    console.log(`Sending SMS to ${to}`);
    console.log(`Message: ${message}`);
    console.log("SMS sent successfully");
  }
}
