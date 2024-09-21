# Notification System using Facade Pattern

This project demonstrates the implementation of the Facade design pattern in a notification system using TypeScript and Node.js.

## Facade Pattern

The Facade pattern provides a simplified interface to a complex subsystem. It doesn't encapsulate the subsystem but provides a unified interface to a set of interfaces in a subsystem. This pattern defines a higher-level interface that makes the subsystem easier to use.

In this project, we use the Facade pattern to simplify the process of sending different types of notifications (email, SMS, push) through a single interface.

## Project Structure

```
notification-system-facade/
├── src/
│   ├── services/
│   │   ├── EmailService.ts
│   │   ├── SMSService.ts
│   │   └── PushNotificationService.ts
│   ├── NotificationFacade.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js (v12 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/simonedimeglio/notification-system-facade.git
   cd notification-system-facade
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To compile and run the project during development:

```bash
npm run dev
```

This command will compile the TypeScript files and then run the main script.

## Building

To compile the TypeScript files without running the project:

```bash
npm run build
```

This will create compiled JavaScript files in the `dist/` directory.

## Running

To run the compiled JavaScript:

```bash
npm start
```

This command runs the compiled `main.js` file from the `dist/` directory.

## How it Works

1. We have three separate services: `EmailService`, `SMSService`, and `PushNotificationService`, each responsible for sending a specific type of notification.

2. The `NotificationFacade` class provides a simplified interface to these services. It encapsulates the complexity of choosing which service to use and how to use it.

3. Clients of the notification system only need to interact with the `NotificationFacade`, which provides methods for sending individual types of notifications as well as a method to send all types at once.

## Usage Example

```typescript
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
```

## Benefits of Using Facade Pattern

1. **Simplification**: Clients don't need to know about the complexities of the underlying notification services.
2. **Decoupling**: The facade decouples the client code from the subsystem's components.
3. **Single Point of Entry**: Provides a single entry point for sending any type of notification.
4. **Flexibility**: New notification types can be added to the subsystem without changing the facade's interface.

## Extending the Project

To add a new type of notification:

1. Create a new service in the `services/` directory.
2. Add the new service to the `NotificationFacade` class.
3. Add a new method in `NotificationFacade` to handle the new notification type.
4. Update the `sendAll` method in `NotificationFacade` to include the new notification type.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was created to demonstrate the Facade design pattern in a practical scenario.
- Thanks to the TypeScript and Node.js communities for providing excellent tools and documentation.
